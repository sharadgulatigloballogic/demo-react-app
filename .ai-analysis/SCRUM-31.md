# AI Investigation: SCRUM-31

Original Problem: The Apt No field on the iForm does not auto-capitalize `n/a` to `N/A` while other fields on the same form do.
Severity: Low — the defect is isolated to one input binding and has a straightforward, low-blast-radius fix
Root Cause: src/components/IFormTab.jsx::IFormTab (line 231)
Fix: Add `onBlur={handleNACapitalization}` to the `aptNo` input so it uses the same existing normalization logic as `middleInitial` and `otherNames`. No helper logic change is needed unless product wants different matching behavior.
Files Affected: src/components/IFormTab.jsx
