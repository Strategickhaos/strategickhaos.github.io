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

### Current Squarespace parking page
The captured current page is a Squarespace parking page. Replace it through your site host, or point the domain/subdomain to the static host of your choice.

### Suggested layout
- `strategickhaos.io` -> public professional landing page
- Google Workspace Drive -> private report handoff
- optional later: `reports.strategickhaos.io` behind real authentication

## X profile correction
Website field should be `https://strategickhaos.io`.
Do not enter `https://domenic.garza@strategickhaos.io`; that is not a valid website URL.

## Security
Do not publish the stored signature bitmap or any private signing material. Signature assets are intentionally excluded from this bundle.
