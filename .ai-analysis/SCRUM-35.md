# AI Investigation: SCRUM-35

Original Problem: The Apt No field on the iForm does not auto-capitalize `n/a` to `N/A` even though other fields on the same form do.
Severity: Low — limited to optional field formatting, existing workaround is manual capitalization, and no broader data flow is affected
Root Cause: src/components/IFormTab.jsx::IFormTab (line 233)
Fix: Added the existing `handleNACapitalization` blur handler to the Apt No input so it now normalizes only `na` and `n/a` to `N/A`, matching the behavior of the other supported fields. No other capitalization behavior was changed.
Files Affected: src/components/IFormTab.jsx
Local Files Modified: /Users/sharadgulati/cengage/repo/demo-react-app-main/src/components/IFormTab.jsx
