# Strategickhaos Level III Field Report Portal

Static personal field-report portal for Domenic Garza, SPRAT Level III.

## What it does
- Professional landing page at `strategickhaos.io`
- Local report composer (no server required)
- Local SHA-256 report sealing / receipt download using browser Web Crypto
- Sanitized public report index

## What it does NOT do
- It is not an official MISTRAS Group site.
- It does not upload files.
- It does not provide authentication or access control.
- It does not make public pages suitable for confidential customer/site data.

## Deployment model
Use the public site for identity and sanitized summaries. Keep restricted reports in Google Workspace Drive and share them directly with named MISTRAS recipients.

### Publishing
The public site is served from this repository at https://strategickhaos.github.io

`strategickhaos.io` is registered at Squarespace and still shows the Squarespace parking page until the website DNS records are pointed at GitHub Pages. Leave the Google Workspace mail records in place.

Squarespace DNS changes for the website only:

- Remove the four apex A records that point at Squarespace (`198.49.23.144`, `198.49.23.145`, `198.185.159.144`, `198.185.159.145`).
- Add these apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- Change the `www` CNAME from `ext-sq.squarespace.com` to `strategickhaos.github.io`.
- Do not change the MX record (`smtp.google.com`), the SPF TXT record, or the `google._domainkey` DKIM TXT record.

After those records propagate, add a `CNAME` file containing `strategickhaos.io` so GitHub Pages can issue the certificate for the apex domain. Adding that file earlier redirects `strategickhaos.github.io` to the domain while the domain still shows the parking page.

### Suggested layout
- `strategickhaos.io` -> public professional landing page
- Google Workspace Drive -> private report handoff
- optional later: `reports.strategickhaos.io` behind real authentication

## X profile correction
Website field should be `https://strategickhaos.io`.
Do not enter `https://domenic.garza@strategickhaos.io`; that is not a valid website URL.

## Security
Do not publish the stored signature bitmap or any private signing material. Signature assets are intentionally excluded from this bundle.
