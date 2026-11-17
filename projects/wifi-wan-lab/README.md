# SAGCO Wi-Fi → Ethernet WAN Lab (NW-001 REV001)

Public static education and local-only diagnostics interface.

**Live:** https://strategickhaos.github.io/projects/wifi-wan-lab/

## Model
- Recommended: authorized upstream Wi-Fi → routed station / WISP client → Ethernet → OPNsense WAN → Athena.
- Advanced: WDS/4-address Layer-2 Wi-Fi bridging requires compatible AP and STA hardware.
- Backup: G5AR cellular gateway → separate OPNsense WAN2 (or dual-WAN router); T-Mobile Backup Wi-Fi manual activation for non-G4AR devices.
- No passwords, SIM identifiers, IMEI or account numbers, upstream network access, analytics, backend, or router write operations.

## Features
1. Select three documented network topologies.
2. Interactive manual five-layer checkboard (UNKNOWN / PASS / FAIL); changing topology resets observations.
3. Generate .flame source compliant with the existing limited print / exit FlameLang grammar.
4. Download or copy a report. It has no live network proof.
5. Official OpenWrt, OPNsense, and T-Mobile documentation links.

## Safety / engineering limits
This site does not provision T-Mobile, reconfigure the Arcadyan G5AR, make a captive portal available, modify WAN routes, or bridge two upstream networks automatically. Double NAT is expected in typical WISP configurations. T-Mobile 100-hour use should be tracked and manually paused in T-Life. IP addresses shown are examples.

## Local preview
Open index.html in a modern browser; no dependencies or build needed.

Published alongside the existing professional landing page without changing site root.
