# 🫁 Overview of Ventilator Modes

> _Adapted from Nick Mark MD — onepagericu.com_

---

## Goals of Mechanical Ventilation

1. **Oxygenation** — support PaO2/SpO2
2. **Ventilation** — maintain pH
3. **Patient comfort** — vent synchrony, ↓ sedation
4. **Facilitate weaning** — minimize muscle loss, promote readiness to wean from support

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

### VC — Volume Control
*(a.k.a. Assist Control Volume)*

**Description:** Every breath delivered (mandatory and patient triggered) is the same set **volume (TV)**
- T – time/pressure/flow, C – volume, L – volume

**Pros:**
- Good general-purpose mode
- Ensures a minimum MV is achieved
- Good mode for lung protective ventilation (LPV)

**Cons:**
- Requires you to monitor pressures to avoid barotrauma *(see ARDS OnePager for details)*

**Key Settings:** RR, TV, PEEP, FiO2
- Example: *12 bpm, 450cc, +8, 60%*
- *(RR – respiratory rate, TV – tidal volume)*

**Monitor:** Pressures (Ppeak, Pplat)

---

### PC — Pressure Control
*(a.k.a. Assist Control Pressure)*

**Description:** Every breath delivered (mandatory & patient triggered) is a set **pressure (IP)** for a **set time (Ti)**
- T – time/pressure/flow, C – time, L – pressure

**Pros:**
- Good for limiting pressure; may be more comfortable for select patients
- Can also be used for LPV *(no difference in mortality)*

**Cons:**
- Requires you to monitor volumes to avoid volutrauma or hypoventilation

**Key Settings:** RR, IP, Ti, Risetime, PEEP, FiO2
- Example: *12 bpm, 25 cmH₂O, 0.9 sec, 0.15 sec, +8, 60%*
- *(IP – inspiratory pressure, Ti – inspiratory time)*

**Monitor:** Volumes (TV, MV)

---

### PRVC — Pressure Regulated Volume Control
*(a.k.a. VC+, APV, Autoflow)*

**Description:** *Hybrid* PC mode that dynamically changes inspiratory pressure to deliver a desired volume
- T – time/pressure/flow, C – volume, L – volume

**Pros:**
- Guarantees TV but delivers pressure-controlled breaths (e.g. low risk of causing VILI), which potentially may be more comfortable for patients

**Cons:**
- In patients who are struggling (e.g. high WOB) this mode will provide **less** support

**Key Settings:** RR, TV, Ti, Risetime, P-max, PEEP, FiO2
- Example: *12 bpm, 450cc, 0.9 sec, 0.15 sec, 30 cmH₂O, +8, 60%*
- *(P-max – maximum pressure)*

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
- *Note: PS is above PEEP — "Ten over Five" means PIP = 15 cmH₂O*

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
- Example: *5.5 sec, 0.5 sec, 25 cmH₂O, 0 cmH₂O, 60%*
- *(T-High/Low – time high/low, P-High/Low – pressure high/low)*
- *Note: P-Low is analogous to PEEP*

**Monitor:** Volumes & gas exchange (PCO2 / EtCO2)

---

## Quick Reference Summary

| Mode | Target | Trigger | Cycle | Limit | Monitor |
|------|--------|---------|-------|-------|---------|
| **VC** | Volume | Time/pressure/flow | Volume | Volume | Ppeak, Pplat |
| **PC** | Pressure | Time/pressure/flow | Time | Pressure | TV, MV |
| **PRVC** | Volume (pressure-regulated) | Time/pressure/flow | Volume | Volume | Pressures & volumes |
| **SIMV** | Volume (fixed mandatory) | Time | Volume | Volume | Ppeak, Pplat |
| **PS** | Patient-driven | Pressure/flow | Flow | Pressure | TV, MV |
| **APRV** | Pressure (inverse ratio) | Time | Time | Pressure | PCO2, EtCO2 |

---

_Source: Nick Mark MD — onepagericu.com · Adapted for HVI ICU APP Team_
