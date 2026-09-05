---
title: 'A deployment platform in my living room'
date: 2026-09-05
tags: [homelab, docker, tailscale, cloudflare]
summary: 'Turning a spare Ryzen box into the platform that serves this very page: Ubuntu Server, Coolify, Tailscale, Cloudflare Tunnel — and zero ports open on the router.'
---

This site is served from a computer a few meters from my couch. That was the
point: I wanted a place to deploy my own apps with real domains, without paying
a PaaS for every side project — and I wanted to own the whole stack, from the
BIOS up.

## The box

Nothing exotic: a Ryzen 5 3600, 16 GB of RAM, a small NVMe for the OS and a
1 TB disk for data. It ran Windows for years; now it runs Ubuntu Server with
Docker, and its uptime is protected by a UPS good for about 50 minutes of
outage — which matters more than it sounds where I live.

## The architecture rule that shaped everything

One rule, non-negotiable: **zero ports open on the router.**

- Anything private (dashboards, photos, files) is reachable only over
  [Tailscale](https://tailscale.com). If you're not on my tailnet, it doesn't exist.
- Anything public (like this site) goes out through a
  [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/):
  a container dials out to Cloudflare, and traffic comes back down that pipe.
  Nothing ever dials in.

[Coolify](https://coolify.io) sits on top as the deployment layer — git push,
build, SSL, done.

## The gotcha worth writing down

Publishing a container port punches through UFW — Docker inserts its own
iptables rules ahead of the firewall. My first fix dropped packets on the
published ports in the `DOCKER-USER` chain… and half worked. Port 6001 was
blocked; port 8000 sailed through.

The reason: Docker DNATs the host port to the container port *before* the
filter chain sees the packet. My rule matched `--dport 8000`, but by then the
packet's destination port was already `8080`. The fix is to match the
**original** destination port from conntrack:

```text
iptables -I DOCKER-USER -i <wan-if> -p tcp \
  -m conntrack --ctorigdstport 8000 -j DROP
```

If you firewall published Docker ports by post-DNAT port number, you're
firewalling the wrong number.

## What's next

Immich to replace iCloud, restic for 3-2-1 backups, and deploying my apps
(UnRojo, SIGA) behind the tunnel. Those will be entries of their own.
