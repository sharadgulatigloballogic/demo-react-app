# AI Investigation: SCRUM-38

Original Problem: The Apt No field on the iForm does not auto-capitalize `n/a` to `N/A` even though other fields on the same form do.
Severity: Low — behavior is isolated to one optional field and the workaround is manual capitalization.
Root Cause: src/components/IFormTab.jsx::IFormTab (line 232)
Fix: Added the existing `handleNACapitalization` blur handler to the `aptNo` input so `n/a` and `na` normalize to `N/A` there as well. No other capitalization logic was changed, so non-matching values remain untouched.
Files Affected: src/components/IFormTab.jsx
Local Files Modified: /Users/sharadgulati/cengage/repo/demo-react-app/src/components/IFormTab.jsx
