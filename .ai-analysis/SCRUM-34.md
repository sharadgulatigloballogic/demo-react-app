# AI Investigation: SCRUM-34

Original Problem: The `Apt No` field on the iForm does not auto-capitalize `n/a` to `N/A` while other fields do.
Severity: Low — isolated UI behavior regression with an existing helper and a one-line fix path
Root Cause: src/components/IFormTab.jsx::IFormTab (line 231)
Fix: The indexed repo needs `onBlur={handleNACapitalization}` added to the `Apt No` input so it uses the same `n/a` normalization as `Middle Initial` and similar fields. In the local checkout, that exact fix is already present, so no code change was applied.
Files Affected: src/components/IFormTab.jsx
Local Files Modified: none
