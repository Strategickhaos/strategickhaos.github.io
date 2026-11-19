# SAGCO Client Progress Portal (REV001)

Live public page: https://strategickhaos.github.io/sagco-portal/progress.html

This read-only dashboard is inspired by the organization of a professional profile, **not** copied from DataAnnotation and **not** connected to their platform or PayPal.

## What clients can see
- Four public R&D workstreams and their source repositories.
- A project filter and a direct link format: `progress.html?project=sagco-workbench`.
- A milestone chronology with explicit `PASS` and `OPEN` checks.
- Counts of specifically declared milestone gates, **not** a project completion forecast.
- Snapshot date: November 19, 2026.

## Updating the page
1. Open `sagco-portal/progress.html` in this repository.
2. Edit only the `PROJECTS` array near the bottom of the file.
3. Change an `OPEN` to `PASS` only if you have verified the exact stated milestone. Explain the evidence and add a public HTTPS URL if one exists.
4. Update the snapshot date in the visible markup.
5. Commit to the default branch. GitHub Pages will publish the new revision.
6. Test the public page and one direct project link. Log the actual outcome.

## Privacy / limitations
- Public GitHub Pages content is accessible to anyone; query parameters and hidden links do **not** implement authentication.
- Do not put client names, private deliverables, account/worker IDs, tax information, billing email, payment or bank details, source credentials, access tokens, private resumes, third-party dashboard screenshots, or unpublished agreements in this page.
- This is not a customer contract tracker, timesheet, billing portal, or automated realtime feed.
- Each code/repository URL may establish that source exists; it does not prove full production readiness.
- For restricted clients, use a separate authenticated backend with authorized accounts and access controls.

## Verification record
- Source and publication: GitHub Pages, November 19, 2026.
- Initial browser QA: page rendered; all four cards, nine PASS gates and four OPEN gates visible.
- Interactive filter/direct link testing: pending independent full browser confirmation.
