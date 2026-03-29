# Ventilator Waveform Analysis
## A Comprehensive Guide for Advanced Practice Providers
*Standalone Reference — UTHealth Houston HVI*

Understanding ventilator waveforms is one of the most powerful clinical skills an APP can develop. Waveforms give you **real-time, breath-by-breath insight** into what is happening inside the patient's lungs — long before lab values, imaging, or clinical deterioration make the problem obvious. This document covers scalar waveforms, loops, dyssynchrony recognition, and clinical troubleshooting using graphics.

---

## Table of Contents

1. [Fundamentals — What the Ventilator Shows You](#section-1-fundamentals)
2. [Scalar Waveforms — Pressure, Flow, Volume](#section-2-scalar-waveforms)
3. [Waveform Patterns by Mode](#section-3-waveform-patterns-by-mode)
4. [Pressure-Volume Loops](#section-4-pressure-volume-loops)
5. [Flow-Volume Loops](#section-5-flow-volume-loops)
6. [Recognizing Dyssynchrony on Waveforms](#section-6-recognizing-dyssynchrony-on-waveforms)
7. [Clinical Troubleshooting with Waveforms](#section-7-clinical-troubleshooting-with-waveforms)
8. [Auto-PEEP Detection & Quantification](#section-8-auto-peep-detection--quantification)
9. [Waveform Changes with Interventions](#section-9-waveform-changes-with-interventions)
10. [Heart Failure & MCS-Specific Waveform Pearls](#section-10-heart-failure--mcs-specific-waveform-pearls)
11. [Rapid Reference Tables](#section-11-rapid-reference-tables)

---

# Section 1: Fundamentals

## 1.1 The Three Scalars and Two Loops

The ventilator displays two categories of graphics:

**Scalar waveforms** plot a variable against time. There are three:
- **Pressure-time** — the workhorse; shows airway pressure throughout the breath cycle
- **Flow-time** — reveals the rate and pattern of gas delivery and exhalation
- **Volume-time** — tracks the cumulative volume delivered and exhaled

**Loops** plot two variables against each other during a single breath:
- **Pressure-volume (PV) loop** — compliance, overdistension, work of breathing
- **Flow-volume (FV) loop** — airway resistance, air trapping, bronchodilator response

> **Clinical Pearl:** Scalars tell you *when* something happens in the breath cycle. Loops tell you *how the lung is behaving* mechanically. You need both.

## 1.2 The Dependent vs. Independent Variable

The single most important concept in waveform interpretation is understanding which variables the ventilator **controls** versus which are **dependent** on patient mechanics:

| Mode | Ventilator Controls (Independent) | Patient Mechanics Determine (Dependent) |
|------|-----------------------------------|----------------------------------------|
| **ACVC** | Tidal volume, flow rate, flow pattern | Peak pressure, plateau pressure |
| **ACPC** | Inspiratory pressure, inspiratory time | Tidal volume, flow pattern |
| **PSV** | Pressure support level | Tidal volume, flow, inspiratory time |
| **PRVC** | Target tidal volume (via auto-adjusting pressure) | Pressure (breath-to-breath), flow |

The dependent variable is what you **monitor** — it is the waveform that reveals changes in lung mechanics.

> 📷 **IMAGE: Side-by-side comparison showing ACVC vs ACPC scalar waveforms (pressure, flow, volume) for a normal patient. Label which waveforms are "set" vs "variable" in each mode.**

---

# Section 2: Scalar Waveforms

## 2.1 Pressure-Time Scalar

The pressure-time waveform shows airway pressure (y-axis, in cmH₂O) over time (x-axis, in seconds).

### Normal Appearance — ACVC (Constant Flow)

With constant (square) flow delivery, the pressure waveform rises in a **linear ramp** during inspiration, reaching peak inspiratory pressure (PIP), then drops during expiration back to PEEP.

**Key landmarks on the pressure-time scalar:**
- **Baseline** — the PEEP level; expiratory pressure the lung sits at between breaths
- **Rise phase** — pressure climbing during inspiration
- **Peak Inspiratory Pressure (PIP)** — the highest pressure reached; reflects BOTH airway resistance AND lung compliance
- **Plateau Pressure (Pplat)** — measured during an inspiratory hold; reflects ONLY alveolar pressure (elastic recoil of the lung)
- **The PIP–Pplat gradient** — the difference between peak and plateau pressure reflects airway resistance alone

> 📷 **IMAGE: Labeled pressure-time scalar in ACVC showing: baseline PEEP, linear rise, PIP, inspiratory hold/plateau, PIP-Pplat gap labeled as "airway resistance," Pplat labeled as "alveolar/elastic pressure," and return to PEEP.**

> **Key Equation:**
> - **PIP = Resistive Pressure + Elastic Pressure + PEEP**
> - **Resistive Pressure = PIP − Pplat** (airway resistance component)
> - **Elastic Pressure = Pplat − PEEP** (driving pressure / lung compliance component)

### Normal Appearance — ACPC

In pressure control, the ventilator targets a set inspiratory pressure. The pressure waveform shows a **rapid rise to the set pressure** and then maintains a **flat plateau** for the duration of the set inspiratory time before dropping to PEEP.

The square/flat pressure waveform in ACPC is the inverse of ACVC — here, pressure is controlled and constant, while flow is the dependent variable that decelerates.

> 📷 **IMAGE: Labeled pressure-time scalar in ACPC showing: rapid rise to set inspiratory pressure, flat plateau maintained during Ti, drop to PEEP. Contrast with the ramping pressure in ACVC.**

### What the Pressure Waveform Tells You

| Finding | What It Means | Action |
|---------|--------------|--------|
| Rising PIP with stable Pplat | Increased airway resistance (secretions, bronchospasm, kinked ETT) | Suction, bronchodilators, check ETT |
| Rising PIP with rising Pplat | Decreased lung compliance (worsening ARDS, pneumothorax, pulmonary edema, abdominal distension) | Chest imaging, reduce Vt, increase PEEP |
| Concave "scooped" pressure during inspiration (ACVC) | Flow starvation — patient demand exceeds set flow | Increase flow rate or switch to ACPC |
| Pressure spike at end of inspiration | Delayed cycling — vent still inflating after patient wants to exhale | Shorten Ti, increase cycle-off threshold |
| Pressure not returning to set PEEP before next breath | Auto-PEEP / air trapping | Extend expiratory time, reduce RR |
| Negative deflection before breath triggers | Patient effort (trigger work) — normal but should be minimal | Adjust trigger sensitivity |

---

## 2.2 Flow-Time Scalar

The flow-time waveform shows gas flow (y-axis, in L/min) over time. **Inspiration is above the baseline; expiration is below.**

### Normal Flow Patterns

**ACVC — Square (Constant) Flow:**
Inspiratory flow is a flat horizontal line at the set flow rate. This is the default in most volume-control modes. Expiration shows a decelerating (exponential decay) pattern as the lung passively empties.

**ACVC — Decelerating Flow:**
Some ventilators allow a decelerating inspiratory flow pattern in volume control. Flow starts high and tapers. This mimics the flow pattern of pressure control and may improve gas distribution.

**ACPC — Decelerating Flow:**
Flow starts at maximum (determined by the pressure gradient between set pressure and alveolar pressure) and decelerates as the lung fills and the pressure gradient narrows. This is the natural flow pattern in all pressure-targeted modes.

> 📷 **IMAGE: Three flow-time waveforms side by side: (1) ACVC square flow with passive exponential expiratory flow, (2) ACVC decelerating flow, (3) ACPC decelerating flow. Label inspiration above baseline, expiration below baseline.**

### What the Flow Waveform Tells You

| Finding | What It Means | Action |
|---------|--------------|--------|
| Expiratory flow does not return to zero before next breath | **Auto-PEEP** — air trapping; the most reliable waveform sign | Extend expiratory time, reduce RR, bronchodilators |
| Abrupt expiratory flow cutoff (truncated) | Severe air trapping with premature breath delivery | Urgently extend I:E ratio |
| Inspiratory flow that appears "clipped" or inadequate | Flow starvation (correlates with scooped pressure waveform) | Increase flow rate |
| Saw-tooth pattern on expiratory limb | Secretions in the airway — airway vibration during exhalation | Suction the patient |
| Variable inspiratory flow breath-to-breath (ACPC) | Changing compliance or patient effort — monitor Vt closely | Assess for clinical change |
| Small flow deflections that don't trigger a breath | Ineffective efforts — patient trying to breathe but not triggering | Reduce trigger threshold, address auto-PEEP |

> 📷 **IMAGE: Flow-time scalar showing saw-tooth expiratory pattern from secretions. Clearly label the oscillations on the expiratory limb.**

> 📷 **IMAGE: Flow-time scalar showing expiratory flow not returning to zero (auto-PEEP). Arrow pointing to where the next breath starts before flow reaches zero.**

---

## 2.3 Volume-Time Scalar

The volume-time waveform tracks cumulative volume (y-axis, in mL) over time. It rises during inspiration to the delivered tidal volume, then falls during expiration back toward baseline.

### Normal Appearance

The inspiratory limb rises — its shape depends on the flow pattern (linear rise with square flow, curved rise with decelerating flow). The expiratory limb falls passively as an exponential decay curve back to baseline.

### What the Volume Waveform Tells You

| Finding | What It Means | Action |
|---------|--------------|--------|
| Exhaled volume doesn't return to baseline | **Circuit leak** — cuff leak, chest tube air leak, circuit disconnect | Check cuff pressure, circuit connections |
| Gradual upward drift of the baseline | Progressive air trapping / auto-PEEP | Address auto-PEEP (see Section 8) |
| Exhaled volume consistently less than inspired | Leak — quantify the difference | If ETT cuff: reinflate; if BPF: surgical consult |
| Variable tidal volumes breath-to-breath (ACPC) | Changing compliance/resistance OR variable patient effort | Assess patient; set appropriate Vt alarms |

> 📷 **IMAGE: Volume-time scalar showing a circuit leak — inspired volume rises to set Vt but exhaled volume doesn't return to baseline. Label the "leak volume" gap.**

---

# Section 3: Waveform Patterns by Mode

## 3.1 ACVC — Assist Control Volume Control

**Pressure:** Linear ramp up to PIP → plateau if inspiratory hold applied → drop to PEEP
**Flow:** Square (constant) during inspiration → exponential decay during expiration
**Volume:** Linear rise → exponential fall

> 📷 **IMAGE: Complete ACVC scalar set — all three waveforms (pressure, flow, volume) stacked vertically and time-aligned. Label PIP, Pplat, set flow rate, Vt, PEEP, inspiration, expiration.**

## 3.2 ACPC — Assist Control Pressure Control

**Pressure:** Rapid rise to set pressure → flat plateau for duration of Ti → drop to PEEP
**Flow:** Decelerating from peak → reaches zero or near-zero at end of Ti → passive expiration
**Volume:** Curved rise (concave down) → exponential fall

> 📷 **IMAGE: Complete ACPC scalar set — all three waveforms stacked vertically and time-aligned. Label set pressure, Ti, decelerating flow peak, Vt (variable), PEEP.**

## 3.3 Pressure Support Ventilation (PSV)

**Pressure:** Rapid rise to set PS level above PEEP → maintained until flow drops to cycle-off threshold → drop to PEEP
**Flow:** Decelerating from peak → terminates when flow reaches cycle-off percentage (typically 25% of peak)
**Volume:** Curved rise → fall (variable Vt depending on patient effort and mechanics)

> 📷 **IMAGE: Complete PSV scalar set. Label PS level, PEEP, cycle-off point on flow waveform (where inspiration ends), variable Vt.**

## 3.4 SIMV (Synchronized Intermittent Mandatory Ventilation)

SIMV delivers a set number of mandatory breaths (volume or pressure targeted) with spontaneous breaths in between. Waveform shows **two distinct breath patterns** alternating — larger mandatory breaths and smaller patient-triggered spontaneous breaths (supported by PS if set).

> 📷 **IMAGE: SIMV waveform showing a mandatory ACVC breath followed by a smaller PS-supported spontaneous breath. Label each breath type clearly.**

## 3.5 PRVC (Pressure Regulated Volume Control)

**Pressure:** Looks like ACPC — rapid rise to a variable pressure level → flat plateau → drop to PEEP. However, the pressure changes breath-to-breath as the ventilator auto-adjusts to achieve the target Vt.
**Flow:** Decelerating (like ACPC)
**Volume:** Target Vt is achieved, but the pressure needed varies

> **Clinical Pearl:** In PRVC, watch the pressure trend over multiple breaths. If the ventilator is progressively increasing pressure to maintain Vt, compliance is worsening. If pressure is dropping, compliance is improving. This is free information that many people miss.

> 📷 **IMAGE: PRVC pressure waveform over 5-6 breaths showing the ventilator progressively increasing the pressure level to maintain tidal volume as compliance worsens. Label the rising pressure trend.**

---

# Section 4: Pressure-Volume Loops

The pressure-volume (PV) loop plots airway pressure (x-axis) against volume (y-axis) during a single breath. The loop is traced counterclockwise — the inspiratory limb goes up and to the right, and the expiratory limb returns down and to the left.

## 4.1 Normal PV Loop

A normal PV loop is an elongated oval. The **slope of the loop** represents dynamic compliance — a steeper slope means more volume delivered per unit of pressure (more compliant lung). The width of the loop (the area between inspiratory and expiratory limbs) represents the **hysteresis** — energy lost to overcome resistance and tissue friction.

> 📷 **IMAGE: Normal PV loop labeled with: inspiratory limb (right side going up), expiratory limb (left side coming down), compliance slope drawn as a line through the loop, hysteresis area shaded, starting point at PEEP. Axes labeled: x = pressure (cmH₂O), y = volume (mL).**

## 4.2 Lower Inflection Point (LIP)

The lower inflection point is where there is a **sudden increase in compliance** on the inspiratory limb — the slope of the curve steepens. Below this point, significant portions of the lung are collapsed and not participating in ventilation. The LIP has been used historically to guide PEEP setting — setting PEEP at or just above the LIP theoretically maintains alveolar recruitment.

> ⚠️ **Important:** The LIP is most visible in patients with ARDS and significant atelectasis. In patients with normal compliance, the LIP may not be identifiable. Modern PEEP titration strategies (ARDSNet tables, driving pressure optimization, EIT) have largely replaced LIP-based PEEP setting, but recognizing it on the PV loop remains a valuable skill.

> 📷 **IMAGE: PV loop in ARDS showing a clear lower inflection point where the slope steepens. Mark the LIP with an arrow and label "optimal PEEP zone." Also show the flat initial portion below LIP labeled "atelectatic lung."**

## 4.3 Upper Inflection Point (UIP) — "Beaking"

The upper inflection point is where the inspiratory limb **flattens out** at the top of the loop — the slope decreases despite increasing pressure. This indicates **overdistension** — you are pushing more pressure into the lung but getting progressively less volume in return. The flattening creates a characteristic "beak" or "penguin beak" shape at the top of the loop.

> 🚨 **Overdistension = Lung Injury Risk**
>
> If you see beaking on the PV loop, you are overdistending alveoli. This is a direct visual sign of potential ventilator-induced lung injury (VILI). Actions:
> - Reduce tidal volume
> - Reduce inspiratory pressure (in ACPC)
> - Reassess driving pressure (target <15 cmH₂O)

> 📷 **IMAGE: PV loop showing "beaking" — the top of the loop flattens and bends to the right, creating a beak shape. Label the upper inflection point, the "beak," and annotate "overdistension zone." Show a normal loop overlaid for comparison.**

## 4.4 Compliance Changes on the PV Loop

| Change | PV Loop Appearance | Examples |
|--------|-------------------|----------|
| **Decreased compliance** | Loop shifts right and becomes flatter (wider) — more pressure needed for same volume | ARDS, pulmonary edema, pneumothorax, abdominal compartment syndrome, pleural effusion |
| **Increased compliance** | Loop shifts left and becomes steeper (taller/narrower) — less pressure needed | Emphysema, post-thoracentesis improvement, resolving edema |
| **Increased resistance** | Loop widens — increased hysteresis (larger area between limbs) | Bronchospasm, secretions, small ETT |
| **Air trapping** | Loop doesn't close — the expiratory limb doesn't return to the starting point | Auto-PEEP, inadequate expiratory time |

> 📷 **IMAGE: Four PV loops overlaid on the same axes: (1) Normal — green, (2) Decreased compliance — shifted right/flat, (3) Increased compliance — shifted left/steep, (4) Increased resistance — wider loop. Label each clearly.**

## 4.5 Work of Breathing on the PV Loop

The area to the left of the inspiratory limb of the PV loop represents the **work of breathing**. In a mechanically ventilated patient, this work is shared between the ventilator and the patient. Anything that increases the convexity of the inspiratory curve or shifts the entire loop to the right increases the total work of breathing.

In spontaneously breathing patients (PSV), the presence of a leftward deflection below the trigger point on the pressure axis represents **patient work** — the bigger this deflection, the more work the patient is doing to trigger breaths. The ventilator's contribution is represented by the area to the right of that trigger point.

**Clinical application:** In severe asthma or COPD, the PV loop shifts dramatically rightward and the inspiratory limb becomes more convex, reflecting the enormous work of breathing against airway resistance. This is visible in real time and can guide the aggressiveness of bronchodilator therapy and ventilator support.

> 📷 **IMAGE: Two PV loops overlaid: (1) Normal — moderate work of breathing area shaded in blue, (2) Severe asthma — massively increased work of breathing area shaded in red, with the loop shifted rightward and more convex. Label "ventilator work" and "patient work" zones.**

## 4.6 Dyssynchrony on the PV Loop

PV loops can also reveal patient-ventilator dyssynchrony that may not be immediately obvious on scalar waveforms:

- **Tight trigger / auto-triggering:** A small loop-within-a-loop at the bottom of the PV curve — the patient triggers a breath that wasn't intended
- **Mid-inspiratory effort:** A leftward dip in the inspiratory limb — the patient generates an additional inspiratory effort mid-breath, pulling pressure negative
- **Flow starvation:** The inspiratory limb becomes concave to the left rather than tracking smoothly — the patient is pulling harder than the vent is delivering
- **Active exhalation against the vent:** The expiratory limb shows a rightward bulge — the patient's expiratory muscles are pushing against continued inspiratory flow (delayed cycling)

> 📷 **IMAGE: PV loop showing multiple dyssynchrony features on a single breath — label each abnormality: trigger effort at bottom, mid-inspiratory dip, flow starvation concavity on inspiratory limb, and active exhalation bulge on expiratory limb. This is a "comedy of errors" loop for teaching purposes.**

## 4.7 Air Leak on the PV Loop

When there is a leak in the circuit (cuff leak, chest tube air leak, circuit disconnect), the PV loop **fails to close** — the expiratory limb does not return to the starting volume. The magnitude of the gap between where the loop starts and where it ends represents the volume of gas lost to the leak.

> 📷 **IMAGE: PV loop with a circuit leak — the loop does not close, with the expiratory limb ending at a lower volume than the inspiratory limb started. Label the "leak volume" gap at the bottom of the loop.**

---

# Section 5: Flow-Volume Loops

The flow-volume (FV) loop plots flow (y-axis) against volume (x-axis). Inspiration is typically displayed as the upper portion (positive flow) and expiration as the lower portion (negative flow).

## 5.1 Normal FV Loop

In volume control with square flow, the inspiratory portion is a flat horizontal line at the set flow rate. The expiratory portion shows a peak expiratory flow followed by a decelerating curve back to zero — shaped like a smooth downward slope.

In pressure control, the inspiratory portion shows decelerating flow (starts high, curves down), and the expiratory portion has a similar appearance to volume control.

> 📷 **IMAGE: Normal FV loops: (1) ACVC with square inspiratory flow and passive expiratory curve, (2) ACPC with decelerating inspiratory flow and passive expiratory curve. Label inspiration (upper) and expiration (lower).**

## 5.2 Obstructive Airway Disease Pattern

In patients with airway obstruction (COPD, asthma, bronchospasm), the expiratory limb shows a characteristic **concave scooped appearance** — peak expiratory flow drops rapidly and then the remaining flow is prolonged and reduced. This is the FV loop equivalent of obstructive physiology seen on PFTs.

> 📷 **IMAGE: FV loop showing obstructive pattern — normal inspiratory limb but concave/scooped expiratory limb compared to a normal loop overlaid. Label the scooped portion as "obstructive pattern."**

## 5.3 Bronchodilator Response

After administering bronchodilators, the expiratory limb of the FV loop should show **improvement in peak expiratory flow** and a **less concave expiratory curve** — the loop becomes more "full" on the expiratory side. Comparing pre- and post-bronchodilator FV loops at the bedside is an excellent way to assess treatment response in real time.

> 📷 **IMAGE: Two FV loops overlaid — pre-bronchodilator (scooped expiratory limb) and post-bronchodilator (improved/fuller expiratory limb). Label each loop.**

## 5.4 Restrictive Lung Disease Pattern

In patients with restrictive physiology (pulmonary fibrosis, severe ARDS, chest wall restriction), the FV loop shows:
- **Reduced tidal volume** — the loop is smaller overall
- **Rapid decrease in inspiratory flow** — the stiff lung fills quickly and stops accepting flow
- **High peak expiratory flow with rapid decay** — the inelastic lung recoils forcefully, generating a high initial expiratory flow that drops off quickly

The overall loop appears **small and compressed** compared to normal, but without the scooped expiratory pattern seen in obstruction. This is a useful distinction — obstruction scoops the expiratory limb, restriction shrinks the entire loop.

> 📷 **IMAGE: Three FV loops overlaid: (1) Normal — full size, (2) Obstructive — normal size with scooped expiratory limb, (3) Restrictive — small/compressed loop with high peak expiratory flow but rapid decay. Label each pattern clearly.**

## 5.5 Air Trapping on the FV Loop

If expiratory flow does not reach zero before the next breath, the FV loop will not close — the expiratory limb is **truncated** before reaching the volume axis. This is a visual confirmation of auto-PEEP/air trapping.

> 📷 **IMAGE: FV loop showing air trapping — expiratory flow is cut off before reaching zero flow, and the loop doesn't close. Arrow pointing to the gap/truncation.**

---

# Section 6: Recognizing Dyssynchrony on Waveforms

Patient-ventilator dyssynchrony affects 25–50% of mechanically ventilated patients and is associated with prolonged ventilation, increased sedation requirements, and worse outcomes. The waveform is your first detection tool — often identifying dyssynchrony before clinical signs are obvious.

## 6.1 Flow Starvation

**What it is:** The patient's inspiratory demand exceeds the ventilator's set flow rate (ACVC).

**Waveform signature:**
- **Pressure-time:** The normally linear or convex pressure rise becomes **concave (scooped)** during inspiration — the patient is pulling airway pressure down by generating negative pleural pressure faster than flow is delivered
- **Flow-time:** Flow appears "capped" at the set rate while the pressure waveform clearly shows unmet demand

**Fix:** Increase peak flow to 60–80 L/min or higher, switch to decelerating flow, or convert to ACPC

> 📷 **IMAGE: Side-by-side pressure-time waveforms: (1) Normal convex pressure rise in ACVC, (2) Concave/scooped pressure rise indicating flow starvation. Draw arrows showing the "scooped" portion.**

## 6.2 Double Triggering

**What it is:** A single patient effort triggers two consecutive ventilator breaths because the patient's neural inspiratory time exceeds the ventilator's set inspiratory time.

**Waveform signature:**
- **Flow-time:** Two complete inspiratory cycles back-to-back with no expiratory pause between them — the second breath fires immediately
- **Volume-time:** Stacked volumes — total delivered can reach 2× set Vt
- **Pressure-time:** Two pressure peaks in rapid succession

**Danger:** Vt stacking delivers excessive volume causing VILI — particularly dangerous in ARDS patients on lung-protective ventilation.

**Fix:** Increase Ti to match neural inspiratory time, increase Vt slightly (if safe), switch to ACPC, or deepen sedation if injurious

> 📷 **IMAGE: Flow-time and volume-time waveforms showing double triggering — two breaths fired in rapid succession without expiratory pause. Label the stacked volume (2× Vt).**

## 6.3 Ineffective Triggering (Missed Efforts)

**What it is:** The patient makes an inspiratory effort, but it fails to trigger the ventilator. The effort is "wasted."

**Waveform signature:**
- **Flow-time:** Small deflections in the expiratory flow tracing that don't result in a triggered breath — the flow moves slightly toward zero (or above baseline) and then falls back without triggering
- **Pressure-time:** Small negative dips in airway pressure during expiration that don't trigger a breath

**Common causes:** Trigger sensitivity set too low, significant auto-PEEP (patient must first overcome auto-PEEP before reaching trigger threshold), weak respiratory muscles

**Fix:** Increase trigger sensitivity (make it more sensitive), address auto-PEEP, consider flow triggering over pressure triggering

> 📷 **IMAGE: Flow-time waveform showing ineffective efforts — small upward deflections in the expiratory flow that don't trigger breaths. Circle each missed effort. Show a corresponding pressure tracing with small negative dips.**

## 6.4 Auto-Triggering

**What it is:** The ventilator triggers a breath without a patient effort — false triggering.

**Waveform signature:**
- **Pressure-time:** No negative deflection before the breath — the breath fires spontaneously
- **Flow-time:** Consistent breath delivery without evidence of patient-initiated flow demand
- **Clinical context:** Cardiac oscillations, circuit leaks, and water in the circuit can cause auto-triggering

**Fix:** Decrease trigger sensitivity (make it less sensitive), check for circuit leaks/water, rule out cardiac oscillations

> 📷 **IMAGE: Pressure-time waveform comparing (1) a normal patient-triggered breath showing a small negative deflection before inspiration and (2) an auto-triggered breath with no negative deflection — the breath fires from baseline without patient effort.**

## 6.5 Premature Cycling

**What it is:** The ventilator ends inspiration before the patient's neural inspiration is complete. The patient is still trying to inhale when the vent switches to expiration.

**Waveform signature:**
- **Pressure-time:** A brief **pressure spike or bump** at the transition from inspiration to expiration — the patient's continued inspiratory effort against the closing valve
- **Flow-time:** Active inspiratory flow effort visible during early expiration

**Fix:** Increase Ti (ACVC/ACPC), lower cycle-off threshold in PSV (from 25% to 10–15% of peak flow)

> 📷 **IMAGE: Pressure-time waveform showing premature cycling — a small positive pressure bump at the inspiration-to-expiration transition point. Arrow labeled "continued patient effort."**

## 6.6 Delayed Cycling

**What it is:** The ventilator continues delivering the breath after the patient's neural inspiration has ended. The patient wants to exhale but the vent is still inflating.

**Waveform signature:**
- **Pressure-time:** A sharp **pressure spike** at end-inspiration as the patient's expiratory muscles activate against the ventilator's continued inspiratory flow
- **Flow-time:** Evidence of patient expiratory effort (flow reversal) before the ventilator cycles

**Fix:** Shorten Ti, increase cycle-off threshold in PSV (to 40–50% of peak flow), check for leaks (leaks delay flow-based cycling)

> 📷 **IMAGE: Pressure-time waveform showing delayed cycling — a sharp pressure spike at the very end of inspiration. Contrast with normal smooth transition to expiration.**

## 6.7 Reverse Triggering

**What it is:** A reflexive diaphragm contraction triggered by passive lung inflation — the ventilator breath causes the diaphragm to contract, rather than the other way around. Seen in deeply sedated or recently paralyzed patients.

**Waveform signature:**
- **Pressure-time:** A small dip or irregularity in the pressure plateau during a mandatory breath — the diaphragm contraction creates a brief negative pressure deflection mid-breath
- **Flow-time:** A small secondary flow increase during what should be a steady inspiratory phase
- **May lead to:** Double triggering if the reflexive effort is strong enough to trigger a second breath

**Fix:** Deepen sedation, re-paralyze briefly, or switch to a mode less likely to entrain (consider APRV)

> 📷 **IMAGE: Pressure-time waveform showing reverse triggering — a small notch or dip in the inspiratory plateau pressure of a mandatory breath, indicating reflexive diaphragm contraction. Label the notch.**

---

# Section 7: Clinical Troubleshooting with Waveforms

## 7.1 Systematic Waveform Assessment — The 5-Step Approach

When you approach the ventilator, use this systematic approach:

**Step 1: Check the baseline** — Is PEEP where it should be? Is the pressure returning to set PEEP between breaths?

**Step 2: Examine the inspiratory pressure waveform** — Is PIP appropriate? Is the shape normal (convex in ACVC, flat in ACPC)?

**Step 3: Look at the expiratory flow** — Does it return to zero? Is there a saw-tooth pattern?

**Step 4: Compare inspired vs expired volumes** — Any leak?

**Step 5: Assess the loops** — Any beaking? Is the loop shape changing from the prior assessment?

## 7.2 Waveform-Based Differential Diagnosis

### Sudden High-Pressure Alarm (ACVC)

| Waveform Clue | Likely Cause | Immediate Action |
|----------------|-------------|-----------------|
| High PIP, normal Pplat | Airway resistance problem — secretions, bronchospasm, biting ETT, kinked tube | Suction, bronchodilators, bite block, check tube |
| High PIP, high Pplat | Compliance problem — pneumothorax, mainstem intubation, pulmonary edema, abdominal distension | CXR, assess abdomen, auscultate |
| High PIP, no plateau obtainable (air continues flowing) | Massive leak or circuit disconnect | Check all connections and cuff |

### Sudden Low Tidal Volume Alarm (ACPC)

| Waveform Clue | Likely Cause | Immediate Action |
|----------------|-------------|-----------------|
| Set pressure achieved but Vt dropped | Decreased compliance — atelectasis, edema, effusion, pneumothorax | CXR, increase pressure if needed |
| Pressure not reaching target | Massive leak | Check cuff, circuit |
| Vt variable with patient effort | Patient effort fluctuating | Consider sedation assessment, switch to ACVC for guaranteed volumes |

### Desaturation — What the Waveform Shows

| Waveform Clue | Consideration |
|---------------|--------------|
| Auto-PEEP visible (flow doesn't reach zero) | Air trapping causing V/Q mismatch; extend expiratory time |
| Rising Pplat over hours | Worsening compliance — developing ARDS, fluid overload |
| Beaking on PV loop | Overdistension — reduce Vt, reassess PEEP |
| Dyssynchrony patterns | Increased O₂ consumption from fighting vent; optimize synchrony |

---

# Section 8: Auto-PEEP Detection & Quantification

Auto-PEEP (intrinsic PEEP) is one of the most consequential and underdiagnosed findings on ventilator waveforms.

## 8.1 Waveform Detection

**The gold standard waveform sign:** Expiratory flow on the flow-time scalar **does not return to zero** before the next breath. There is residual flow at the moment the next inspiration begins. This means air is still leaving the lung when the next breath arrives — air trapping.

> 📷 **IMAGE: Flow-time scalar showing three consecutive breaths. First breath: expiratory flow returns to zero normally. Second and third breaths: expiratory flow is cut off before reaching zero, with an arrow showing "trapped air." Include a zoomed-in inset of the expiratory flow approaching but not reaching the zero line.**

## 8.2 Measuring Auto-PEEP

**Expiratory hold maneuver:** Press and hold the expiratory hold button for 2–3 seconds at end-expiration. This equilibrates the entire circuit and allows total PEEP to be displayed. Auto-PEEP = Total PEEP − Set PEEP.

- Example: Set PEEP = 5, Total PEEP measured = 12 → Auto-PEEP = 7 cmH₂O

> ⚠️ **Limitation:** The expiratory hold only works accurately in passive patients. In spontaneously breathing patients, the measurement is unreliable. In these patients, the waveform sign (flow not reaching zero) is your primary detection tool.

## 8.3 Consequences in Heart Failure Patients

Auto-PEEP is particularly dangerous in the HFICU population:
- Acts as **unintended PEEP** — increases intrathoracic pressure, reduces venous return, decreases RV preload
- In RV failure patients: auto-PEEP can cause acute hemodynamic decompensation by increasing RV afterload beyond tolerance
- In LVAD patients: auto-PEEP reduces RV preload → decreased LVAD preload → low flows and suction events
- Causes **triggering failure** — patient must generate negative pressure equal to auto-PEEP + set trigger sensitivity, leading to wasted efforts and respiratory distress

---

# Section 9: Waveform Changes with Interventions

One of the most practical applications of waveform analysis is **assessing real-time response to interventions**. Don't just order the treatment — watch the waveform to see if it worked.

## 9.1 Bronchodilator Response

**Before:** High PIP with normal Pplat (ACVC), saw-tooth expiratory flow, scooped expiratory FV loop
**After (if effective):** PIP decreases, PIP-Pplat gap narrows, expiratory flow returns to zero faster, FV loop expiratory limb becomes fuller

## 9.2 Suctioning Response

**Before:** Saw-tooth expiratory flow pattern, possibly elevated PIP
**After (if secretions cleared):** Flow pattern smooths out, PIP decreases, Pplat unchanged (confirming the problem was resistive, not elastic)

## 9.3 PEEP Titration

**Increasing PEEP — Recruitment:**
- If recruiting atelectatic lung: compliance improves → PV loop shifts left (steeper), driving pressure may decrease for same Vt, Pplat may paradoxically improve
- If overdistending: beaking appears on PV loop, Pplat rises proportionally, Vt may drop (ACPC)

**Decreasing PEEP — Derecruitment:**
- Compliance worsens → PV loop shifts right, driving pressure increases, oxygenation falls

## 9.4 Diuresis in Pulmonary Edema

**Progressive improvement over hours:**
- Pplat decreases (improving compliance as fluid clears)
- PV loop shifts left (steeper)
- Beaking resolves if present
- FV loop: expiratory flow may improve as small airway edema resolves

> 📷 **IMAGE: Sequential PV loops (2-3 overlaid) showing improvement with diuresis — loops progressively shift left and become steeper as compliance improves. Label "pre-diuresis" and "post-diuresis."**

## 9.5 Paralytic Administration

**Before:** Variable effort, possible dyssynchrony, irregular flow patterns
**After:** Completely uniform waveforms — every breath looks identical. Pressure waveform becomes smooth and predictable. This is the ideal time to accurately measure respiratory mechanics (Pplat, compliance, resistance).

> **Clinical Pearl:** If you need to accurately assess lung mechanics, paralyze the patient. Spontaneous effort makes Pplat measurement unreliable and can falsely alter compliance calculations. A single dose of neuromuscular blockade for 2–3 minutes is sufficient for accurate measurements.

---

# Section 10: Heart Failure & MCS-Specific Waveform Pearls

## 10.1 Cardiogenic Pulmonary Edema

- **Waveform signature:** Progressively rising Pplat over hours (worsening compliance) with normal or mildly elevated PIP-Pplat gap
- **PV loop:** Rightward shift (decreased compliance), may develop beaking if Vt is not reduced
- **Treatment response:** Diuresis and PEEP optimization should show progressive improvement on waveforms — if Pplat continues rising despite aggressive diuresis, consider additional pathology

## 10.2 RV Failure & Pulmonary Hypertension

- Every positive pressure breath increases RV afterload. In severe RV failure, you may see **hemodynamic consequences with each breath** — arterial line waveform showing systolic pressure variation or pulse pressure variation synchronized with the ventilator
- Keep mean airway pressure as low as possible: lowest effective PEEP, moderate Vt, avoid high RR
- Auto-PEEP is especially dangerous — monitor the flow-time waveform continuously

## 10.3 LVAD Patients

- Mean airway pressure directly affects RV preload and therefore LVAD flows
- **Waveform-to-LVAD flow correlation:** If you see rising PIP or evidence of auto-PEEP AND simultaneously see falling LVAD flows, the ventilator is the culprit — reduce mean airway pressure
- Pulsatility index (PI) on the LVAD may cycle with ventilator breaths — this is normal but exaggerated PI cycling suggests excessive intrathoracic pressure effects

## 10.4 VA-ECMO Lung Rest

- Ultra-protective settings: ACPC with low driving pressure (10–15 cmH₂O), low RR, moderate PEEP
- **Waveform:** Very small, uniform pressure deflections. Volume-time scalar shows tiny Vt (2–4 mL/kg)
- **Watch for:** Compliance improving (Vt rising on ACPC at same pressure) — this means the lung is recovering. Don't let Vt drift too high; reduce pressure to maintain ultra-protective volumes
- If using ACVC for lung rest: set very low Vt with pressure alarms set tightly

## 10.5 Post-Cardiac Surgery

- Phrenic nerve injury: unilateral diaphragm paralysis → asymmetric chest expansion. Waveform may show normal-appearing mechanics but patient fails SBTs
- Tamponade: acute compliance drop with rising Pplat, often with hemodynamic instability
- Chest tube air leak: volume-time waveform shows exhaled volume consistently less than inspired → quantify the leak over time. An increasing leak suggests worsening bronchopleural fistula

---

# Section 11: Rapid Reference Tables

## 11.1 Scalar Quick Reference

| Scalar | Primary Value | Key Abnormalities |
|--------|--------------|-------------------|
| **Pressure-Time** | Airway pressures, compliance, resistance | Scooped = flow starvation; Rising PIP = resistance; Rising Pplat = compliance |
| **Flow-Time** | Air trapping, secretions, dyssynchrony | Flow ≠ zero = auto-PEEP; Saw-tooth = secretions; Small deflections = missed efforts |
| **Volume-Time** | Leak detection, air trapping | Doesn't return to baseline = leak; Upward drift = air trapping |

## 11.2 Loop Quick Reference

| Loop | Primary Value | Key Abnormalities |
|------|--------------|-------------------|
| **Pressure-Volume** | Compliance, overdistension, PEEP optimization | Beaking = overdistension; Right shift = ↓ compliance; Left shift = ↑ compliance |
| **Flow-Volume** | Airway obstruction, bronchodilator response | Scooped expiratory limb = obstruction; Truncated = air trapping |

## 11.3 Dyssynchrony Quick Reference

| Dyssynchrony | Key Waveform Sign | Primary Fix |
|--------------|-------------------|-------------|
| **Flow starvation** | Scooped pressure during inspiration (ACVC) | ↑ Flow rate or switch to ACPC |
| **Double triggering** | Two breaths fired without expiratory pause | ↑ Ti, switch to ACPC, ↑ sedation |
| **Ineffective triggering** | Small flow/pressure deflections that don't trigger | ↑ Trigger sensitivity, treat auto-PEEP |
| **Auto-triggering** | Breaths fire without patient effort | ↓ Trigger sensitivity, check circuit |
| **Premature cycling** | Pressure bump at inspiration→expiration transition | ↑ Ti, ↓ cycle-off threshold (PSV) |
| **Delayed cycling** | Pressure spike at end-inspiration | ↓ Ti, ↑ cycle-off threshold (PSV) |
| **Reverse triggering** | Notch in pressure plateau during mandatory breath | Deepen sedation, re-paralyze |

## 11.4 "The Waveform Told Me" — Clinical Decision Cheat Sheet

| You See This on the Waveform | It Means | You Do This |
|------------------------------|----------|-------------|
| PIP ↑, Pplat normal | Airway resistance ↑ | Suction, bronchodilators, check ETT |
| PIP ↑, Pplat ↑ | Compliance ↓ | CXR, rule out PTX/edema/effusion |
| Expiratory flow ≠ 0 | Auto-PEEP | Extend expiratory time, ↓ RR |
| Saw-tooth expiratory flow | Secretions | Suction |
| Scooped inspiratory pressure | Flow starvation | ↑ Flow or switch to ACPC |
| PV loop beaking | Overdistension | ↓ Vt, ↓ pressure, reassess PEEP |
| PV loop not closing | Leak or air trapping | Check cuff/circuit; assess auto-PEEP |
| FV expiratory limb scooped | Airway obstruction | Bronchodilators, assess response on loop |
| Exhaled volume < inspired volume | Circuit or cuff leak | Check cuff pressure, connections |
| Pplat trending up over hours | Worsening compliance | Investigate — edema, ARDS, effusion |
| Two breaths back-to-back, no pause | Double triggering | ↑ Ti, consider mode change |
| Small flow blips without triggered breaths | Missed/ineffective efforts | ↑ Trigger sensitivity, treat auto-PEEP |

---

## References & Further Reading

- Holanda MA, et al. "Patient-ventilator asynchrony." *J Bras Pneumol.* 2018.
- Mellott KG, et al. "The Basics of Ventilator Waveforms." *Neonatal Netw.* 2021;40(1):51-62.
- Oto B, et al. "Patient-ventilator dyssynchrony in the intensive care unit: A practical approach." *Anaesth Intensive Care.* 2021;49(2):86-97.
- Hess DR. "Respiratory Mechanics in Mechanically Ventilated Patients." *Respir Care.* 2014;59(11):1773-1794.
- Deranged Physiology — Ventilator Waveform Analysis (derangedphysiology.com)
- LITFL — Ventilator Waveform Analysis, PV Loops, Patient-Ventilator Dyssynchrony (litfl.com)

---

*This document is a standalone reference for ventilator waveform interpretation. For mode-specific management protocols, see protocols-vent-management.md and protocols-vent-management-advanced.md.*
