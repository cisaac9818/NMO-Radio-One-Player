# NMotion website preview

This branch contains the proposed four-station website for nmotionmediagrp.com.
The production main branch remains the existing standalone Radio One player.

## Preview on IONOS

In the NMO-Radio-One-Player project, choose Add first staging deployment and
select branch `nmotion-four-station-website`. The existing Deploy Now workflow
uploads the repository root. No build command or extra dependencies are needed.

## Before switching the domain

- Review design, copy, and privacy text with the owner.
- Test both radio streams and both TV streams on desktop and a phone, with sound.
- Confirm the primary domain's current DNS and email records; preserve mail records.
- Confirm how the old standalone player's current URL is used before replacing it.
- Use the preview branch as the source for an approved production deployment,
  then connect nmotionmediagrp.com and www with HTTPS.
- Retain Vistaprint until the new domain, email and all players work.

## Player behavior

The TV widgets are the supplied nmotvtoo.com iframes. The two supplied radio
widgets run in separate local iframe documents to isolate their boot scripts.
Radio dimensions are responsive; Radio One's share URLs now use HTTPS.
Only one station iframe is mounted at a time. No player loads before an explicit
Open player / station selection. Browser Back restores the selected station.
The original Radio One player is retained under /legacy-radio-player/.

## Validation performed

JavaScript syntax and git whitespace checks passed. All four provider widget/script
URLs returned HTTP 200. Browser checks exercised all four selectors, repeat station
switches, and showed radio metadata and an NMO Television video image. Complete
sound playback and mobile-device checks remain necessary before cutover.

The page is static. Contact actions are email links, not a server-backed form.

## Artist pages and policy preservation

Original app privacy statement and Roku terms were retrieved from the old /about-1 URL and preserved under /privacy-policy/, /terms-of-use/ and /about-1/. A distinct website notice describes the email-based submission workflow. No application privacy practice was independently audited.

Submission and consent pages prepare local records and mailto drafts. They do not send messages or save responses to a database. Artists must attach/paste the record and send the email. The signed record includes the full fixed release text, acknowledgments, selected channels, typed signature, local signing date and client-generated UTC preparation time. That timestamp is not a verified signing or delivery time; the received email provides the receipt record. Before relying on the new permission terms, obtain appropriate review of rights, distribution scope and compensation language.
