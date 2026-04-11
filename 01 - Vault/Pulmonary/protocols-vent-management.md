# Ventilator Modes & Management: A Clinical Reference for the Intensivist


## Table of Contents

1. [Overview](#overview)
2. [Goals of Mechanical Ventilation](#goals-of-mechanical-ventilation)
3. [Indications for Mechanical Ventilation](#indications-for-mechanical-ventilation)
4. [Decision Framework](#decision-framework)
5. [Measurement & Optimization](#measurement-optimization)
6. [Ventilator Mode Basics](#ventilator-mode-basics)
7. [Ventilator Modes](#ventilator-modes)
8. [Quick Reference — Ventilator Modes](#quick-reference-ventilator-modes)
9. [Initial Ventilator Settings](#initial-ventilator-settings)
10. [Lung-Protective Ventilation Strategy](#lung-protective-ventilation-strategy)
11. [ARDS Management](#ards-management)
12. [Oxygenation and Ventilation Targets](#oxygenation-and-ventilation-targets)
13. [Ventilator Alarms and Troubleshooting](#ventilator-alarms-and-troubleshooting)
14. [Ventilator-Associated Events Prevention Bundle](#ventilator-associated-events-prevention-bundle)
15. [Liberation from Mechanical Ventilation](#liberation-from-mechanical-ventilation)
16. [Special Considerations for Cardiac ICU](#special-considerations-for-cardiac-icu)
17. [Key Takeaways](#key-takeaways)

---

## Overview
This protocol covers ventilator modes, initial setup, lung-protective strategies, systematic troubleshooting, and evidence-based liberation from mechanical ventilation, with considerations relevant to cardiothoracic and heart failure ICU patients.

---

## Goals of Mechanical Ventilation

1. **Oxygenation** — support PaO2/SpO2
2. **Ventilation** — maintain pH
3. **Patient comfort** — vent synchrony, minimize sedation
4. **Facilitate weaning** — minimize muscle loss, promote readiness to wean from support

---

## Indications for Mechanical Ventilation
- Acute hypoxemic respiratory failure (PaO2 <60 mmHg or SpO2 <90% on maximal supplemental oxygen)
- Acute hypercapnic respiratory failure (PaCO2 >50 mmHg with pH <7.30)
- Airway protection (GCS ≤8, inability to protect airway, massive hemoptysis)
- Excessive work of breathing unresponsive to noninvasive support
- Hemodynamic instability requiring sedation, paralysis, or procedural control
- Postoperative respiratory support (e.g., post-cardiac surgery)

---

## Decision Framework

**Define treatment goals** → Choose a ventilator mode & initial settings → Measure ABG/VBG/SpO2

**Ask: Am I achieving my goals?**
- **Yes** → Adjust settings as needed
- **No** → Try a different mode, or add adjuncts (sedation, NMB, bronchodilator, etc.)

> If unable to achieve goals (e.g. permissive hypercapnia), you may need to redefine treatment goals.

---

## Measurement & Optimization

### What to Measure
| Tool | Measures |
|------|----------|
| **ABG** | pH, PCO2, PaO2, HCO3 |
| **Pulse Ox** | SpO2 |

### How to Adjust

**VENTILATION** (pH / PCO2)
- To increase pH → increase the **ventilation parameters**

**OXYGENATION** (PaO2 / SpO2)
- To change PaO2 or SpO2 → adjust **oxygenation parameters** (FiO2 and PEEP)

---

## Ventilator Mode Basics

Modes fall into two broad categories: **pressure** and **volume**.

Each mode has three features:
- **Trigger (T)** — what initiates a breath?
- **Cycle (C)** — what ends a breath?
- **Limit (L)** — what stops a breath early?

---

## Ventilator Modes

### ACVC — Assist Control Volume Control
*(a.k.a. Volume-Controlled Assist Control)*

**Description:** Every breath delivered (mandatory and patient triggered) is the same set **volume (TV)**
- T – time/pressure/flow, C – volume, L – volume

**Pros:**
- Good general-purpose mode
- Ensures a minimum MV is achieved
- Good mode for lung protective ventilation (LPV)

**Cons:**
- Requires you to monitor pressures to avoid barotrauma

**Key Settings:** RR, TV, PEEP, FiO2
- Example: *12 bpm, 450cc, +8, 60%*

**Monitor:** Pressures (Ppeak, Pplat)

---

### ACPC — Assist Control Pressure Control
*(a.k.a. Pressure-Controlled Assist Control)*

**Description:** Every breath delivered (mandatory & patient triggered) is a set **pressure (IP)** for a **set time (Ti)**
- T – time/pressure/flow, C – time, L – pressure

**Pros:**
- Good for limiting pressure; may be more comfortable for select patients
- Can also be used for LPV *(no difference in mortality)*

**Cons:**
- Requires you to monitor volumes to avoid volutrauma or hypoventilation

**Key Settings:** RR, IP, Ti, Risetime, PEEP, FiO2
- Example: *12 bpm, 25 cmH2O, 0.9 sec, 0.15 sec, +8, 60%*

**Monitor:** Volumes (TV, MV)

---

### PRVC — Pressure Regulated Volume Control
*(a.k.a. VC+, APV, Autoflow)*

**Description:** *Hybrid* PC mode that dynamically changes inspiratory pressure to deliver a desired volume
- T – time/pressure/flow, C – volume, L – volume

**Pros:**
- Guarantees TV but delivers pressure-controlled breaths (low risk of causing VILI), which potentially may be more comfortable for patients

**Cons:**
- In patients who are struggling (e.g. high WOB) this mode will provide **less** support

**Key Settings:** RR, TV, Ti, Risetime, P-max, PEEP, FiO2
- Example: *12 bpm, 450cc, 0.9 sec, 0.15 sec, 30 cmH2O, +8, 60%*

**Monitor:** Pressures & volumes

---

### SIMV — Synchronous Intermittent Mandatory Ventilation

**Description:** Delivers mandatory breaths with a fixed volume but patient **cannot** trigger (patient breaths are not the same as mandatory breaths); can use PS
- T – time, C – volume, L – volume

**Pros:**
- May be useful for patients with hiccups to avoid alkalemia

**Cons:**
- Seldom used; not effective for weaning; often found to be uncomfortable

**Key Settings:** RR, TV, PEEP, FiO2
- Example: *12 bpm, 450 cc, +8, 60%*

**Monitor:** Pressure (Ppeak, Pplat)

---

### PS — Pressure Support

**Description:** All breaths are patient initiated; ventilation determined solely by patient (no backup rate)
- T – pressure/flow, C – flow, L – pressure

**Pros:**
- Ideal weaning mode (used in SBTs and for prolonged periods)
- Most comfortable because it allows patient to control ventilation

**Cons:**
- Does not guarantee a rate; need to monitor to ensure adequate ventilation

**Key Settings:** PS, PEEP, FiO2
- Example: *+10, +5, 40%*
- *Note: PS is above PEEP — "Ten over Five" means PIP = 15 cmH2O*

**Monitor:** Volumes (TV, MV)

---

### APRV — Airway Pressure Release Ventilation
*(a.k.a. Bi-Vent)*

**Description:** **Inverse ratio ventilation** (I time > E time) that allows patient to breathe spontaneously; can combine with PS
- T – time, C – time, L – pressure

**Pros:**
- Great for ARDS patients who are spontaneously breathing (e.g. not on NMB)
- May improve comfort & oxygenation *(but no mortality benefit)*

**Cons:**
- Complex mode/settings
- Risk of VILI if settings are done improperly
- Doesn't make sense if on NMB

**Key Settings:** T-High, T-Low, P-High, P-Low, FiO2
- Example: *5.5 sec, 0.5 sec, 25 cmH2O, 0 cmH2O, 60%*
- *Note: P-Low is analogous to PEEP*

**Monitor:** Volumes & gas exchange (PCO2 / EtCO2)

---

## Quick Reference — Ventilator Modes

| Mode | Target | Trigger | Cycle | Limit | Monitor |
|------|--------|---------|-------|-------|---------|
| **ACVC** | Volume | Time/pressure/flow | Volume | Volume | Ppeak, Pplat |
| **ACPC** | Pressure | Time/pressure/flow | Time | Pressure | TV, MV |
| **PRVC** | Volume (pressure-regulated) | Time/pressure/flow | Volume | Volume | Pressures & volumes |
| **SIMV** | Volume (fixed mandatory) | Time | Volume | Volume | Ppeak, Pplat |
| **PS** | Patient-driven | Pressure/flow | Flow | Pressure | TV, MV |
| **APRV** | Pressure (inverse ratio) | Time | Time | Pressure | PCO2, EtCO2 |

> _Modes section adapted from Nick Mark MD — onepagericu.com_

---

## Initial Ventilator Settings

**Recommended Initial Settings (ACVC):**

| Parameter | Initial Setting |
|-----------|----------------|
| Tidal Volume (Vt) | 6-8 mL/kg **ideal body weight (IBW)** |
| Respiratory Rate (RR) | 14-20 breaths/min (titrate to pH, not PaCO2 alone) |
| PEEP | 5-8 cmH2O (increase per ARDS protocol if applicable) |
| FiO2 | 100% initially, wean rapidly to target SpO2 92-96% |
| Inspiratory Flow Rate | 60 L/min (decelerating waveform preferred) |
| I:E Ratio | 1:2 to 1:3 (adjust for obstructive physiology) |

**Ideal Body Weight Calculation:**
- **Men:** IBW (kg) = 50 + 2.3 × (height in inches − 60)
- **Women:** IBW (kg) = 45.5 + 2.3 × (height in inches − 60)

---
## Lung-Protective Ventilation Strategy
Lung-protective ventilation should be applied to **all** mechanically ventilated patients, not just those with ARDS.

**Core Principles:**
1. **Tidal Volume:** 6-8 mL/kg IBW (target 6 mL/kg in ARDS)
2. **Plateau Pressure (Pplat):** Maintain ≤30 cmH2O (check with inspiratory hold)
3. **Driving Pressure (ΔP):** Maintain <15 cmH2O (ΔP = Pplat − PEEP)
4. **PEEP:** Titrate to optimize oxygenation while minimizing overdistension
5. **Permissive Hypercapnia:** Accept PaCO2 elevation if pH >7.20 (avoid in elevated ICP)

---
## ARDS Management

**Berlin Definition Severity Classification:**

| Severity | PaO2/FiO2 Ratio (on PEEP ≥5 cmH2O) |
|----------|--------------------------------------|
| Mild | 200-300 mmHg |
| Moderate | 100-200 mmHg |
| Severe | ≤100 mmHg |

**ARDSNet Low Tidal Volume Protocol:**
- Vt = 6 mL/kg IBW (range 4-8 mL/kg)
- Target Pplat ≤30 cmH2O
- If Pplat >30: reduce Vt by 1 mL/kg (minimum 4 mL/kg)
- Increase RR to compensate (max 35 breaths/min)

**PEEP/FiO2 Titration (ARDSNet Lower PEEP Table):**

| FiO2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0 |
|------|-----|-----|-----|-----|-----|-----|-----|-----|
| PEEP | 5 | 5-8 | 8-10 | 10 | 10-14 | 14 | 14-18 | 18-24 |

**Prone Positioning:**
- Indicated for moderate-severe ARDS (P/F <150 mmHg) despite optimized ventilator settings
- Duration: ≥16 hours per session
- Initiate early (within 12-24 hours of ARDS onset)
- Contraindications: unstable spine, open abdomen, hemodynamic instability refractory to vasopressors
- **Cardiac surgery considerations:** Generally safe after sternotomy if sternal closure is stable; coordinate with surgical team

**Neuromuscular Blockade:**
- Consider in severe ARDS (P/F <150 mmHg) within first 48 hours
- Cisatracurium preferred (organ-independent metabolism)
- Monitor with train-of-four; target 0-1/4 twitches
- Reassess need every 24 hours

---
## Oxygenation and Ventilation Targets

| Parameter | Target |
|-----------|--------|
| SpO2 | 92-96% (avoid hyperoxia) |
| PaO2 | 55-80 mmHg |
| pH | 7.25-7.45 |
| PaCO2 | Titrate to pH (permissive hypercapnia acceptable if pH >7.20) |

**Special Populations:**
- **Pulmonary hypertension:** Avoid hypoxemia, hypercapnia, and acidosis (pulmonary vasoconstrictors); target SpO2 >92%, pH >7.35
- **Right ventricular failure:** Minimize PEEP to reduce RV afterload; avoid excessive mean airway pressures
- **Post-cardiac surgery:** Low Vt ventilation reduces postoperative pulmonary complications; early extubation protocols preferred

---
## Ventilator Alarms and Troubleshooting

### High Peak Pressure Alarm

| Cause | Assessment | Intervention |
|-------|------------|--------------|
| Bronchospasm | High peak, normal plateau; wheezing | Bronchodilators, check ETT position |
| Secretions/mucus plug | Sudden onset; diminished breath sounds | Suction, consider bronchoscopy |
| ETT obstruction (kink, biting) | Inspect circuit and ETT | Reposition, bite block, consider reintubation |
| Pneumothorax | Absent breath sounds, hypotension, tracheal deviation | Needle decompression, chest tube |
| Right mainstem intubation | Diminished left-sided breath sounds | Pull back ETT, confirm with chest X-ray |
| Patient-ventilator dyssynchrony | Agitation, double-triggering, stacking | Adjust trigger sensitivity, sedation, mode change |
| Abdominal distension | Elevated peak and plateau pressures | NG/OG decompression |

### Low Pressure / Low Volume Alarm

| Cause | Assessment | Intervention |
|-------|------------|--------------|
| Circuit leak/disconnect | Audible leak, low exhaled Vt | Check connections, cuff pressure (25-30 cmH2O) |
| Cuff leak | Audible leak around ETT | Inflate cuff, check cuff integrity, consider reintubation |
| Chest tube with large air leak | Continuous bubbling in water seal | Assess for bronchopleural fistula |

### High Respiratory Rate / Auto-PEEP

| Cause | Assessment | Intervention |
|-------|------------|--------------|
| Pain/anxiety | Tachypnea, agitation | Analgesia, anxiolysis |
| Metabolic acidosis | Low pH, low HCO3 | Treat underlying cause |
| Auto-PEEP/air trapping | Expiratory flow does not reach zero | Reduce RR, increase expiratory time, bronchodilators |

---
## Ventilator-Associated Events Prevention Bundle
1. **Head of bed elevation** ≥30-45 degrees
2. **Daily sedation interruption** and spontaneous awakening trial (SAT)
3. **Daily spontaneous breathing trial** (SBT)
4. **DVT prophylaxis**
5. **Stress ulcer prophylaxis** (if indicated)
6. **Oral care** with chlorhexidine (per institutional protocol)
7. **Early mobilization** when hemodynamically stable
8. **Subglottic secretion drainage** if available

---
## Liberation from Mechanical Ventilation

### Daily Readiness Screen
Assess **daily** for all intubated patients:
- FiO2 ≤0.40 and PEEP ≤8 cmH2O
- Hemodynamically stable (no active titration of vasopressors or low-dose stable)
- No active sedation infusion or able to follow commands
- Intact respiratory drive (spontaneous breaths present)
- No planned return to OR within 24 hours

### Spontaneous Breathing Trial (SBT)
**Method:** Pressure support 5-8 cmH2O with PEEP 5 cmH2O (or T-piece trial)
**Duration:** 30-120 minutes

**SBT Failure Criteria (abort if any):**

| Parameter | Threshold |
|-----------|-----------|
| Respiratory rate | >35 breaths/min for >5 minutes |
| SpO2 | <88-90% |
| Heart rate | >140 bpm or change >20% from baseline |
| Systolic BP | <90 or >180 mmHg |
| Agitation or diaphoresis | New onset |
| Rapid shallow breathing index (RSBI) | >105 breaths/min/L |

**SBT Success:** If tolerated for 30-120 minutes → assess for extubation

### Extubation Readiness
- Passed SBT
- Adequate cuff leak (if concern for post-extubation stridor)
- Manageable secretions (suctioning ≤ every 2 hours)
- Intact cough (ability to generate adequate expiratory force)
- Mental status appropriate for airway protection
- No anticipated need for imminent return to OR

### Post-Extubation Support
- **Prophylactic NIV/HFNC:** Consider for high-risk patients (age >65, cardiac disease, failed prior SBT, hypercapnia during SBT)
- **HFNC:** Flow 40-60 L/min, FiO2 to target SpO2; first-line for post-extubation hypoxemia
- **NIV:** Consider for hypercapnic patients or those with cardiogenic pulmonary edema

---
## Special Considerations for Cardiac ICU

**Post-Cardiac Surgery:**
- Target early extubation (within 6-8 hours) when hemodynamically stable
- Low Vt ventilation (6-8 mL/kg IBW) intraoperatively and postoperatively
- Monitor for phrenic nerve injury (especially after CABG with internal mammary artery harvest)
- Chest tube management may affect ventilator mechanics

**Cardiogenic Pulmonary Edema:**
- Positive pressure ventilation is therapeutic (reduces preload and afterload)
- PEEP improves oxygenation and reduces work of breathing
- Diuresis is primary treatment; do not delay for ventilator optimization alone

**LVAD Patients:**
- Standard lung-protective ventilation applies
- Mean airway pressure affects RV preload; minimize PEEP in RV dysfunction
- Coordinate with LVAD team for hemodynamic targets

**ECMO Patients:**
- "Ultra-protective" or "lung rest" settings: Vt 2-4 mL/kg IBW, RR 5-10, PEEP 10-15, FiO2 0.3
- Goal is to minimize ventilator-induced lung injury while ECMO provides gas exchange
- Settings adjusted based on native lung recovery

---
## Key Takeaways
1. **Lung-protective ventilation** (6-8 mL/kg IBW, Pplat ≤30, driving pressure <15) applies to all mechanically ventilated patients
2. **Prone positioning** early in moderate-severe ARDS improves mortality
3. **Daily SAT + SBT** pairing is the most effective strategy for reducing ventilator days
4. **RSBI >105** during an SBT predicts extubation failure
5. **Driving pressure** is the ventilator parameter most strongly associated with survival in ARDS
6. **Cardiac ICU patients** require attention to heart-lung interactions when titrating PEEP and mean airway pressure

### References
1. [Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury and the Acute Respiratory Distress Syndrome](https://www.nejm.org/doi/full/10.1056/NEJM200005043421801). Acute Respiratory Distress Syndrome Network. The New England Journal of Medicine. 2000;342(18):1301-8. doi:10.1056/NEJM200005043421801.
2. [Driving Pressure and Survival in the Acute Respiratory Distress Syndrome](https://www.nejm.org/doi/full/10.1056/NEJMsa1410639). Amato MB, Meade MO, Slutsky AS, et al. The New England Journal of Medicine. 2015;372(8):747-55. doi:10.1056/NEJMsa1410639.
3. [Prone Positioning in Severe Acute Respiratory Distress Syndrome](https://www.nejm.org/doi/full/10.1056/NEJMoa1214103). Guérin C, Reignier J, Richard JC, et al. The New England Journal of Medicine. 2013;368(23):2159-68. doi:10.1056/NEJMoa1214103.
4. [A Trial of Spontaneous Breathing During Mechanical Ventilation](https://www.nejm.org/doi/full/10.1056/NEJM199605023341801). Esteban A, Frutos F, Tobin MJ, et al. The New England Journal of Medicine. 1995;332(6):345-50. doi:10.1056/NEJM199505183322002.
5. [Efficacy and Safety of a Paired Sedation and Ventilator Weaning Protocol for Mechanically Ventilated Patients in Intensive Care (Awakening and Breathing Controlled Trial)](https://pubmed.ncbi.nlm.nih.gov/18191684). Girard TD, Kress JP, Fuchs BD, et al. Lancet. 2008;371(9607):126-34. doi:10.1016/S0140-6736(08)60105-1.
6. [Acute Respiratory Distress Syndrome: The Berlin Definition](https://pubmed.ncbi.nlm.nih.gov/22797452). ARDS Definition Task Force, Ranieri VM, Rubenfeld GD, et al. JAMA. 2012;307(23):2526-33. doi:10.1001/jama.2012.5669.
7. [Early Neuromuscular Blockade in the Acute Respiratory Distress Syndrome](https://www.nejm.org/doi/full/10.1056/NEJMoa1901686). National Heart, Lung, and Blood Institute PETAL Clinical Trials Network. The New England Journal of Medicine. 2019;380(21):1997-2008. doi:10.1056/NEJMoa1901686.
8. [Effect of a Protective-Ventilation Strategy on Mortality in the Acute Respiratory Distress Syndrome](https://pubmed.ncbi.nlm.nih.gov/9449727). Amato MB, Barbas CS, Medeiros DM, et al. The New England Journal of Medicine. 1998;338(6):347-54. doi:10.1056/NEJM199802053380602.
9. [Postoperative Pulmonary Complications After Lung-Protective Ventilation in Thoracic Surgery: A Prospective Observational Study](https://pubmed.ncbi.nlm.nih.gov/29337724). Blank RS, Colquhoun DA, Durieux ME, et al. Anesthesia and Analgesia. 2018;126(4):1258-1267. doi:10.1213/ANE.0000000000002659.
10. [Official Clinical Practice Guidelines of the European Respiratory Society/American Thoracic Society on Noninvasive Ventilation for Acute Respiratory Failure](https://pubmed.ncbi.nlm.nih.gov/28860265). Rochwerg B, Brochard L, Elliott MW, et al. European Respiratory Journal. 2017;50(2):1602426. doi:10.1183/13993003.02426-2016.
---

_Created: 2026-03-01 · Last updated: 2026-03-01 · HVI ICU APP Team_
