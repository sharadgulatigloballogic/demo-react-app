# AI Investigation: SCRUM-37

Original Problem: The `Apt No` field on the iForm does not auto-capitalize `n/a` to `N/A` while other fields do.
Severity: Low — isolated UI inconsistency with a clear workaround and a one-line fix
Root Cause: src/components/IFormTab.jsx::IFormTab (line 232)
Fix: The required fix is to attach the existing `handleNACapitalization` blur handler to the `aptNo` input so exact `na`/`n/a` values normalize to `N/A`. That exact one-line change is already present in the local working tree, so no further edit was applied.
Files Affected: src/components/IFormTab.jsx
Local Files Modified: none
