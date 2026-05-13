# AI Investigation: SCRUM-32

Original Problem: The `Apt No` field on the iForm did not auto-capitalize `n/a` to `N/A` while other fields already did.
Severity: Low — behavior is isolated to one input and the fix reuses an existing scoped capitalization handler.
Root Cause: src/components/IFormTab.jsx::IFormTab (line 231)
Fix: Added the existing `handleNACapitalization` blur handler to the `aptNo` input so it now matches the behavior of other fields like `Middle Initial`. The change is minimal and does not alter capitalization for values other than `na` or `n/a`.
Files Affected: src/components/IFormTab.jsx
Local Files Modified: /Users/sharadgulati/cengage/repo/demo-react-app-main/src/components/IFormTab.jsx
