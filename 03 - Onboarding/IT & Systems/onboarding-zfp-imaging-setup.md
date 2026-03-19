---
title: ZFP Imaging Setup
description: How to access and configure ZFP for viewing patient imaging in the unit
---

# ZFP Imaging Setup

ZFP allows you to view all imaging (CT, X-ray, echo, etc.) for patients in the unit directly from a workstation.

## Opening ZFP

1. From any hospital workstation, navigate to **SSO Applications**
2. Click the **ZFP** icon (GE logo)
   - Do **not** select XERO Viewer, XERO Viewer AUX, or any of the TEST/Workflow options — those are different applications

![](99%20-%20Meta/Assets/Images/ZFP1.png)

## Search Settings

Once ZFP opens, you'll see the **Search** panel. Configure it as follows:

### Required Fields

| Field | Value |
|---|---|
| **Archive** | CPACS |
| **Location** | HVI 5 Heart Failure ICU |

You can search by **Patient Name** (Last, First MI), **Patient ID** (MRN), or browse all patients at the location.

### Modality

- Check **All** to see every imaging type (CR, CT, MR, US, ECG, etc.)
- Or select specific modalities if you're looking for something particular (e.g., CT only)

### Exam Date

- **Today** — default, shows only today's studies
- **Yesterday** — quick look back
- **Last 7 days** — useful for trending or finding recent comparisons
- **All** — shows everything on file
- **Date Range** — specify custom start and end dates

### Other Options

- **Include: Zero Image Studies** — keep this checked to see orders that have been placed but not yet completed

Click **Search** to pull up results. Click **Reset** to clear all fields and start over.

![](99%20-%20Meta/Assets/Images/ZFP2.png)

## Tips

- Change the **Location** field for Sarofim or other units as needed
- If a study isn't showing up, try expanding the **Exam Date** to "All" or "Last 7 days"
- You can search by **Accession #** if radiology gives you a specific study number
- The **Referring Physician** field can help narrow results if a patient has a common name


---
_Last updated: March 2026 · HVI ICU APP Team_
