# AI Investigation: SCRUM-36

Original Problem: The Apt No field on the I-9 form did not auto-capitalize `n/a` to `N/A` even though other fields on the same form did.
Severity: Low — isolated UI wiring issue with existing capitalization logic already present and low blast radius
Root Cause: src/components/IFormTab.jsx::IFormTab (line 232)
Fix: Added the existing `handleNACapitalization` blur handler to the `aptNo` input so `na` and `n/a` normalize to `N/A` on blur, matching the other fields. No other logic was changed.
Files Affected: src/components/IFormTab.jsx
Local Files Modified: /Users/sharadgulati/cengage/repo/demo-react-app/src/components/IFormTab.jsx
