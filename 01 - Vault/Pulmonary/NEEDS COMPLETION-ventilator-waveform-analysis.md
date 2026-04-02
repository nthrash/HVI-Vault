# Ventilator Waveform Analysis
## A Comprehensive Guide
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

> 🖼️ **![Ventilator Waveform Schematic — Deranged Physiology|1130x909](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20waveform.JPG)** 
> — Pressure, flow, and volume scalars time-aligned. Note which waveform shape is "set" (flat/square) vs "variable" (dependent on lung mechanics) in each mode.

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

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20pressure%20waveform.JPG)
> *Normal Pressure-Time Scalar (ACVC) — Deranged Physiology* — Labeled PEEP baseline, linear rise, PIP, inspiratory hold/plateau, and return to PEEP. The PIP−Pplat gap = airway resistance; Pplat−PEEP = driving pressure (elastic recoil).

> **Key Equation:**
> - **PIP = Resistive Pressure + Elastic Pressure + PEEP**
> - **Resistive Pressure = PIP − Pplat** (airway resistance component)
> - **Elastic Pressure = Pplat − PEEP** (driving pressure / lung compliance component)

### Normal Appearance — ACPC

In pressure control, the ventilator targets a set inspiratory pressure. The pressure waveform shows a **rapid rise to the set pressure** and then maintains a **flat plateau** for the duration of the set inspiratory time before dropping to PEEP.

The square/flat pressure waveform in ACPC is the inverse of ACVC — here, pressure is controlled and constant, while flow is the dependent variable that decelerates.

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/pressure%20ciurve%20high%20vs%20normal%20airway%20resistance.JPG)
> *Pressure-Time Scalar: High vs Normal Airway Resistance — Deranged Physiology* — In ACPC the pressure plateau is flat (set value); contrast the rapid rise and flat top against ACVC's linear ramp. Also illustrates how PIP rises while Pplat stays stable when resistance increases.

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

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20flow%20waveform.JPG)
> *Normal Flow-Time Waveform — Deranged Physiology* — Square inspiratory flow (ACVC) above the baseline; passive exponential expiratory decay below. Inspiration is positive, expiration is negative.
>
> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/CICM%20Primary/F%20Respiratory%20system/pressure%20control%20ventilation%20flow%20rate%20reaches%20zero.JPG)
> *ACPC Flow: Decelerating to Zero — Deranged Physiology* — In pressure control, inspiratory flow decelerates and reaches zero at end Ti — the lung is fully filled at the set pressure.

### What the Flow Waveform Tells You

| Finding | What It Means | Action |
|---------|--------------|--------|
| Expiratory flow does not return to zero before next breath | **Auto-PEEP** — air trapping; the most reliable waveform sign | Extend expiratory time, reduce RR, bronchodilators |
| Abrupt expiratory flow cutoff (truncated) | Severe air trapping with premature breath delivery | Urgently extend I:E ratio |
| Inspiratory flow that appears "clipped" or inadequate | Flow starvation (correlates with scooped pressure waveform) | Increase flow rate |
| Saw-tooth pattern on expiratory limb | Secretions in the airway — airway vibration during exhalation | Suction the patient |
| Variable inspiratory flow breath-to-breath (ACPC) | Changing compliance or patient effort — monitor Vt closely | Assess for clinical change |
| Small flow deflections that don't trigger a breath | Ineffective efforts — patient trying to breathe but not triggering | Reduce trigger threshold, address auto-PEEP |

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/flow%20curves%20in%20increased%20airway%20resistance%20and%20gas%20trapping.JPG)
> *Flow Curves: Increased Airway Resistance & Air Trapping — Deranged Physiology* — Saw-tooth oscillations on the expiratory limb = secretions vibrating in the airway. Also shows expiratory flow not returning to zero (auto-PEEP). The next breath fires before the lung has fully emptied.
>
> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20auto-PEEP%20causing%20increased%20respiratory%20effort.JPG)
> *Auto-PEEP Causing Increased Respiratory Effort — Deranged Physiology* — Flow not reaching zero before the next triggered breath. Note the patient effort required to overcome intrinsic PEEP before triggering.

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

> ![|1130x909](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20waveform.JPG)
> *Ventilator Waveform Schematic — Deranged Physiology* — Review the volume-time scalar (bottom panel): a circuit leak is identified when the exhaled volume tracing does not return fully to baseline — the gap between inspired and expired volume represents the leak volume.

---

# Section 3: Waveform Patterns by Mode

## 3.1 ACVC — Assist Control Volume Control

**Pressure:** Linear ramp up to PIP → plateau if inspiratory hold applied → drop to PEEP
**Flow:** Square (constant) during inspiration → exponential decay during expiration
**Volume:** Linear rise → exponential fall

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/CICM%20Primary/F%20Respiratory%20system/ventilator%20graphics.JPG)
> *Ventilator Graphics Overview — Deranged Physiology* — All three scalars (pressure, flow, volume) stacked and time-aligned as seen on a real ventilator screen. Note the square flow pattern (ACVC), linear volume rise, and return to PEEP on the pressure tracing.

## 3.2 ACPC — Assist Control Pressure Control

**Pressure:** Rapid rise to set pressure → flat plateau for duration of Ti → drop to PEEP
**Flow:** Decelerating from peak → reaches zero or near-zero at end of Ti → passive expiration
**Volume:** Curved rise (concave down) → exponential fall

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/CICM%20Primary/F%20Respiratory%20system/pressure%20control%20ventilation%20flow%20rate%20reaches%20zero.JPG)
> *ACPC Flow — Decelerating to Zero at End Ti — Deranged Physiology* — In ACPC, pressure rises rapidly and holds flat (set value); flow decelerates and reaches zero at end Ti; tidal volume is variable — determined by compliance and resistance, not set by the clinician.

## 3.3 Pressure Support Ventilation (PSV)

**Pressure:** Rapid rise to set PS level above PEEP → maintained until flow drops to cycle-off threshold → drop to PEEP
**Flow:** Decelerating from peak → terminates when flow reaches cycle-off percentage (typically 25% of peak)
**Volume:** Curved rise → fall (variable Vt depending on patient effort and mechanics)

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20flow%20waveform.JPG)
> *Normal Flow Waveform — Deranged Physiology* — In PSV, the inspiratory flow decelerates (like ACPC) and terminates when flow drops to the cycle-off threshold (typically 25% of peak). Tidal volume is entirely variable — driven by patient effort and lung mechanics.

## 3.4 SIMV (Synchronized Intermittent Mandatory Ventilation)

SIMV delivers a set number of mandatory breaths (volume or pressure targeted) with spontaneous breaths in between. Waveform shows **two distinct breath patterns** alternating — larger mandatory breaths and smaller patient-triggered spontaneous breaths (supported by PS if set).

> ![|1135x767](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/pressure%20volume%20loop%20in%20SIMV-PRVC.jpg)
> *PV Loop — SIMV/PRVC — Deranged Physiology* — In SIMV the scalar alternates between larger mandatory breaths and smaller PS-supported spontaneous breaths; the two patterns look distinctly different on the pressure and flow scalars.

## 3.5 PRVC (Pressure Regulated Volume Control)

**Pressure:** Looks like ACPC — rapid rise to a variable pressure level → flat plateau → drop to PEEP. However, the pressure changes breath-to-breath as the ventilator auto-adjusts to achieve the target Vt.
**Flow:** Decelerating (like ACPC)
**Volume:** Target Vt is achieved, but the pressure needed varies

> **Clinical Pearl:** In PRVC, watch the pressure trend over multiple breaths. If the ventilator is progressively increasing pressure to maintain Vt, compliance is worsening. If pressure is dropping, compliance is improving. This is free information that many people miss.

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/pressure-volume%20loop%20of%20an%20ideal%20CMV%20patient.jpg)
> *PV Loop — Ideal CMV/ACVC — Deranged Physiology* — In PRVC, watch the *pressure* level change breath-to-breath on the scalar (not the loop): if pressure is rising to maintain Vt, compliance is worsening; if pressure is dropping, compliance is improving. Each breath's PV loop will be identical in shape but the pressure axis will shift.

---

# Section 4: Pressure-Volume Loops

The pressure-volume (PV) loop plots airway pressure (x-axis) against volume (y-axis) during a single breath. The loop is traced counterclockwise — the inspiratory limb goes up and to the right, and the expiratory limb returns down and to the left.

## 4.1 Normal PV Loop

A normal PV loop is an elongated oval. The **slope of the loop** represents dynamic compliance — a steeper slope means more volume delivered per unit of pressure (more compliant lung). The width of the loop (the area between inspiratory and expiratory limbs) represents the **hysteresis** — energy lost to overcome resistance and tissue friction.

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/anatomy%20of%20the%20pressure-volume%20loop.JPG)
> *Anatomy of the PV Loop — Deranged Physiology* — Labeled inspiratory and expiratory limbs, compliance slope, hysteresis area, and starting point at PEEP. The loop is traced counterclockwise.
>
> ![](https://litfl.com/wp-content/uploads/2019/01/pressure-vol-loop-1.jpg)
> *Normal PV Loop (LITFL — Part 1)* — LITFL's labeled diagram showing compliance slope, loop anatomy, and normal hysteresis.

## 4.2 Lower Inflection Point (LIP)

The lower inflection point is where there is a **sudden increase in compliance** on the inspiratory limb — the slope of the curve steepens. Below this point, significant portions of the lung are collapsed and not participating in ventilation. The LIP has been used historically to guide PEEP setting — setting PEEP at or just above the LIP theoretically maintains alveolar recruitment.

> ⚠️ **Important:** The LIP is most visible in patients with ARDS and significant atelectasis. In patients with normal compliance, the LIP may not be identifiable. Modern PEEP titration strategies (ARDSNet tables, driving pressure optimization, EIT) have largely replaced LIP-based PEEP setting, but recognizing it on the PV loop remains a valuable skill.

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/pressure%20volume%20loops%20in%20disease%20states.JPG)
> *PV Loops in Disease States — Deranged Physiology* — Includes the ARDS pattern with a visible lower inflection point (LIP) where the slope steepens — below the LIP, lung is atelectatic and not recruiting. Setting PEEP at or just above the LIP promotes alveolar recruitment.

## 4.3 Upper Inflection Point (UIP) — "Beaking"

The upper inflection point is where the inspiratory limb **flattens out** at the top of the loop — the slope decreases despite increasing pressure. This indicates **overdistension** — you are pushing more pressure into the lung but getting progressively less volume in return. The flattening creates a characteristic "beak" or "penguin beak" shape at the top of the loop.

> 🚨 **Overdistension = Lung Injury Risk**
>
> If you see beaking on the PV loop, you are overdistending alveoli. This is a direct visual sign of potential ventilator-induced lung injury (VILI). Actions:
> - Reduce tidal volume
> - Reduce inspiratory pressure (in ACPC)
> - Reassess driving pressure (target <15 cmH₂O)

> ![](https://litfl.com/wp-content/uploads/2019/01/pressure-vol-loop-2.jpg)
> *PV Loop — LITFL (Overdistension/Beaking)* — Shows the "beak" pattern at the upper inflection point — the inspiratory limb flattens and bends rightward at the top. This is overdistension: more pressure, less volume in return. Reduce Vt or inspiratory pressure immediately.
>
> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/pressure%20volume%20loops%20in%20brief%20summary.JPG)
> *PV Loops Summary — Deranged Physiology* — Side-by-side comparison of normal vs beaking loop.

## 4.4 Compliance Changes on the PV Loop

| Change | PV Loop Appearance | Examples |
|--------|-------------------|----------|
| **Decreased compliance** | Loop shifts right and becomes flatter (wider) — more pressure needed for same volume | ARDS, pulmonary edema, pneumothorax, abdominal compartment syndrome, pleural effusion |
| **Increased compliance** | Loop shifts left and becomes steeper (taller/narrower) — less pressure needed | Emphysema, post-thoracentesis improvement, resolving edema |
| **Increased resistance** | Loop widens — increased hysteresis (larger area between limbs) | Bronchospasm, secretions, small ETT |
| **Air trapping** | Loop doesn't close — the expiratory limb doesn't return to the starting point | Auto-PEEP, inadequate expiratory time |

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/pressure%20volume%20loops%20in%20disease%20states.JPG)
> *PV Loops in Disease States — Deranged Physiology* — Overlaid loops showing decreased compliance (rightward shift, flatter slope), increased compliance (leftward shift, steeper slope), and increased resistance (wider loop with greater hysteresis).

## 4.5 Work of Breathing on the PV Loop

The area to the left of the inspiratory limb of the PV loop represents the **work of breathing**. In a mechanically ventilated patient, this work is shared between the ventilator and the patient. Anything that increases the convexity of the inspiratory curve or shifts the entire loop to the right increases the total work of breathing.

In spontaneously breathing patients (PSV), the presence of a leftward deflection below the trigger point on the pressure axis represents **patient work** — the bigger this deflection, the more work the patient is doing to trigger breaths. The ventilator's contribution is represented by the area to the right of that trigger point.

**Clinical application:** In severe asthma or COPD, the PV loop shifts dramatically rightward and the inspiratory limb becomes more convex, reflecting the enormous work of breathing against airway resistance. This is visible in real time and can guide the aggressiveness of bronchodilator therapy and ventilator support.

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/pressure%20volume%20loop%20in%20a%20spontaneously%20breathing%20patient.JPG)
> *PV Loop — Spontaneous Breathing (Work of Breathing) — Deranged Physiology* — In PSV and spontaneous breathing, the leftward deflection below the trigger point represents patient work. The larger this deflection, the more work the patient is doing. In severe asthma/COPD, the entire loop shifts rightward and widens dramatically.

## 4.6 Dyssynchrony on the PV Loop

PV loops can also reveal patient-ventilator dyssynchrony that may not be immediately obvious on scalar waveforms:

- **Tight trigger / auto-triggering:** A small loop-within-a-loop at the bottom of the PV curve — the patient triggers a breath that wasn't intended
- **Mid-inspiratory effort:** A leftward dip in the inspiratory limb — the patient generates an additional inspiratory effort mid-breath, pulling pressure negative
- **Flow starvation:** The inspiratory limb becomes concave to the left rather than tracking smoothly — the patient is pulling harder than the vent is delivering
- **Active exhalation against the vent:** The expiratory limb shows a rightward bulge — the patient's expiratory muscles are pushing against continued inspiratory flow (delayed cycling)

> ![](https://litfl.com/wp-content/uploads/2019/01/pressure-vol-loop-2.jpg)
> *PV Loop — LITFL (Dyssynchrony Features)* — Review the abnormal loop shapes: a concave (leftward) inspiratory limb = flow starvation; a rightward bulge on the expiratory limb = active exhalation against the vent (delayed cycling); a small loop-within-loop at the bottom = auto-triggering.

## 4.7 Air Leak on the PV Loop

When there is a leak in the circuit (cuff leak, chest tube air leak, circuit disconnect), the PV loop **fails to close** — the expiratory limb does not return to the starting volume. The magnitude of the gap between where the loop starts and where it ends represents the volume of gas lost to the leak.

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/pressure%20volume%20loops%20in%20brief%20summary.JPG)
> *PV Loops Summary — Deranged Physiology* — An air leak is identified when the expiratory limb of the PV loop does not return to the starting point — the gap at the bottom of the loop equals the volume lost to the leak. Also visible on the volume-time scalar as exhaled < inhaled.

---

# Section 5: Flow-Volume Loops

The flow-volume (FV) loop plots flow (y-axis) against volume (x-axis). Inspiration is typically displayed as the upper portion (positive flow) and expiration as the lower portion (negative flow).

## 5.1 Normal FV Loop

In volume control with square flow, the inspiratory portion is a flat horizontal line at the set flow rate. The expiratory portion shows a peak expiratory flow followed by a decelerating curve back to zero — shaped like a smooth downward slope.

In pressure control, the inspiratory portion shows decelerating flow (starts high, curves down), and the expiratory portion has a similar appearance to volume control.

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/flow%20volume%20loops.JPG)
> *Flow-Volume Loops — Deranged Physiology* — Normal FV loop: inspiratory limb is upper (positive flow), expiratory limb is lower (negative flow). In ACVC, the inspiratory portion is flat (square flow); in ACPC/PSV, it decelerates.
>
> ![](https://litfl.com/wp-content/uploads/2019/01/flow-vol-loop-1.jpg)
> *FV Loop — LITFL* — Labeled diagram of FV loop anatomy with inspiration and expiration clearly marked.

## 5.2 Obstructive Airway Disease Pattern

In patients with airway obstruction (COPD, asthma, bronchospasm), the expiratory limb shows a characteristic **concave scooped appearance** — peak expiratory flow drops rapidly and then the remaining flow is prolonged and reduced. This is the FV loop equivalent of obstructive physiology seen on PFTs.

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/flow%20volume%20loops.JPG)
> *Flow-Volume Loops — Deranged Physiology* — Obstructive pattern: normal inspiratory limb but **scooped/concave expiratory limb** — peak expiratory flow is reduced and the remaining expiratory flow is prolonged and diminished. This is the bedside PFT equivalent of an obstructive spirometry pattern.

## 5.3 Bronchodilator Response

After administering bronchodilators, the expiratory limb of the FV loop should show **improvement in peak expiratory flow** and a **less concave expiratory curve** — the loop becomes more "full" on the expiratory side. Comparing pre- and post-bronchodilator FV loops at the bedside is an excellent way to assess treatment response in real time.

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/flow%20curves%20in%20increased%20airway%20resistance%20and%20gas%20trapping.JPG)
> *Flow Curves — Increased Airway Resistance & Air Trapping — Deranged Physiology* — Pre-bronchodilator: scooped expiratory limb with prolonged flow. Post-bronchodilator (if effective): expiratory limb fills out, peak expiratory flow increases, flow returns to zero faster. Compare loops before and after treatment at the bedside in real time.

## 5.4 Restrictive Lung Disease Pattern

In patients with restrictive physiology (pulmonary fibrosis, severe ARDS, chest wall restriction), the FV loop shows:
- **Reduced tidal volume** — the loop is smaller overall
- **Rapid decrease in inspiratory flow** — the stiff lung fills quickly and stops accepting flow
- **High peak expiratory flow with rapid decay** — the inelastic lung recoils forcefully, generating a high initial expiratory flow that drops off quickly

The overall loop appears **small and compressed** compared to normal, but without the scooped expiratory pattern seen in obstruction. This is a useful distinction — obstruction scoops the expiratory limb, restriction shrinks the entire loop.

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/flow%20volume%20loops.JPG)
> *Flow-Volume Loops — All Patterns — Deranged Physiology* — Normal vs obstructive (scooped expiratory limb, normal size) vs restrictive (small compressed loop, high initial expiratory flow with rapid decay). Key distinction: obstruction scoops the expiratory limb; restriction shrinks the whole loop.

## 5.5 Air Trapping on the FV Loop

If expiratory flow does not reach zero before the next breath, the FV loop will not close — the expiratory limb is **truncated** before reaching the volume axis. This is a visual confirmation of auto-PEEP/air trapping.

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/flow%20insufficient%20inspiration%20time.JPG)
> *Flow — Insufficient Inspiration Time / Air Trapping — Deranged Physiology* — Air trapping on the FV loop: the expiratory limb is truncated before reaching zero flow — the loop doesn't close. The next breath begins before expiration is complete. This is the FV loop equivalent of the flow-time scalar sign of auto-PEEP.

---

# Section 6: Recognizing Dyssynchrony on Waveforms

Patient-ventilator dyssynchrony affects 25–50% of mechanically ventilated patients and is associated with prolonged ventilation, increased sedation requirements, and worse outcomes. The waveform is your first detection tool — often identifying dyssynchrony before clinical signs are obvious.

## 6.1 Flow Starvation

**What it is:** The patient's inspiratory demand exceeds the ventilator's set flow rate (ACVC).

**Waveform signature:**
- **Pressure-time:** The normally linear or convex pressure rise becomes **concave (scooped)** during inspiration — the patient is pulling airway pressure down by generating negative pleural pressure faster than flow is delivered
- **Flow-time:** Flow appears "capped" at the set rate while the pressure waveform clearly shows unmet demand

**Fix:** Increase peak flow to 60–80 L/min or higher, switch to decelerating flow, or convert to ACPC

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20scalloping%20of%20the%20pressure-time%20curve%20with%20inadequate%20flow%20rate.JPG)
> *Flow Starvation — Pressure Scalloping — Deranged Physiology* — The normally linear/convex pressure rise in ACVC becomes **concave ("scooped" or "scalloped")** — the patient is pulling airway pressure down faster than the set flow can satisfy demand. Compare the normal convex rise against the scooped curve.

## 6.2 Double Triggering

**What it is:** A single patient effort triggers two consecutive ventilator breaths because the patient's neural inspiratory time exceeds the ventilator's set inspiratory time.

**Waveform signature:**
- **Flow-time:** Two complete inspiratory cycles back-to-back with no expiratory pause between them — the second breath fires immediately
- **Volume-time:** Stacked volumes — total delivered can reach 2× set Vt
- **Pressure-time:** Two pressure peaks in rapid succession

**Danger:** Vt stacking delivers excessive volume causing VILI — particularly dangerous in ARDS patients on lung-protective ventilation.

**Fix:** Increase Ti to match neural inspiratory time, increase Vt slightly (if safe), switch to ACPC, or deepen sedation if injurious

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20double%20triggering%20and%20premature%20breath%20termination.JPG)
> *Double Triggering & Premature Breath Termination — Deranged Physiology* — Two complete breaths fire in rapid succession with no expiratory pause between them. On the volume-time scalar, stacked volume can reach 2× the set Vt — extremely dangerous in ARDS patients on lung-protective ventilation.

## 6.3 Ineffective Triggering (Missed Efforts)

**What it is:** The patient makes an inspiratory effort, but it fails to trigger the ventilator. The effort is "wasted."

**Waveform signature:**
- **Flow-time:** Small deflections in the expiratory flow tracing that don't result in a triggered breath — the flow moves slightly toward zero (or above baseline) and then falls back without triggering
- **Pressure-time:** Small negative dips in airway pressure during expiration that don't trigger a breath

**Common causes:** Trigger sensitivity set too low, significant auto-PEEP (patient must first overcome auto-PEEP before reaching trigger threshold), weak respiratory muscles

**Fix:** Increase trigger sensitivity (make it more sensitive), address auto-PEEP, consider flow triggering over pressure triggering

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20-%20example%20of%20wasted%20effort%20in%20a%20mandatory%20mode.JPG)
> *Wasted Effort — Mandatory Mode — Deranged Physiology* — Small flow deflections visible during the expiratory phase that don't result in a triggered breath. On the pressure tracing, look for small negative dips that fall short of the trigger threshold. Each represents a wasted patient effort.
>
> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20-%20example%20of%20wasted%20effort%20when%20a%20trigger%20is%20set%20too%20high.JPG)
> *Wasted Effort — Trigger Set Too High — Deranged Physiology* — Patient effort visible but not reaching the trigger threshold. Patient is working hard without ventilator response.

## 6.4 Auto-Triggering

**What it is:** The ventilator triggers a breath without a patient effort — false triggering.

**Waveform signature:**
- **Pressure-time:** No negative deflection before the breath — the breath fires spontaneously
- **Flow-time:** Consistent breath delivery without evidence of patient-initiated flow demand
- **Clinical context:** Cardiac oscillations, circuit leaks, and water in the circuit can cause auto-triggering

**Fix:** Decrease trigger sensitivity (make it less sensitive), check for circuit leaks/water, rule out cardiac oscillations

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20cardiac%20oscillations.JPG)
> *Auto-Triggering — Cardiac Oscillations — Deranged Physiology* — An auto-triggered breath has **no negative deflection** before inspiration — the breath fires from baseline without patient effort. Compare against a normal patient-triggered breath which shows a small negative dip at the start. Cardiac oscillations are shown as a cause of false triggering.

## 6.5 Premature Cycling

**What it is:** The ventilator ends inspiration before the patient's neural inspiration is complete. The patient is still trying to inhale when the vent switches to expiration.

**Waveform signature:**
- **Pressure-time:** A brief **pressure spike or bump** at the transition from inspiration to expiration — the patient's continued inspiratory effort against the closing valve
- **Flow-time:** Active inspiratory flow effort visible during early expiration

**Fix:** Increase Ti (ACVC/ACPC), lower cycle-off threshold in PSV (from 25% to 10–15% of peak flow)

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20double%20triggering%20and%20premature%20breath%20termination.JPG)
> *Double Triggering & Premature Breath Termination — Deranged Physiology* — Premature cycling: the vent ends inspiration while the patient is still trying to inhale. Look for a small positive pressure bump or spike at the inspiration-to-expiration transition — the patient's continued inspiratory effort against the closing valve.

## 6.6 Delayed Cycling

**What it is:** The ventilator continues delivering the breath after the patient's neural inspiration has ended. The patient wants to exhale but the vent is still inflating.

**Waveform signature:**
- **Pressure-time:** A sharp **pressure spike** at end-inspiration as the patient's expiratory muscles activate against the ventilator's continued inspiratory flow
- **Flow-time:** Evidence of patient expiratory effort (flow reversal) before the ventilator cycles

**Fix:** Shorten Ti, increase cycle-off threshold in PSV (to 40–50% of peak flow), check for leaks (leaks delay flow-based cycling)

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20pressure%20waveform.JPG)
> *Normal Pressure Waveform — Deranged Physiology* — Delayed cycling produces a **sharp pressure spike** at the very end of inspiration as the patient's expiratory muscles activate against the vent's continued inspiratory flow. Contrast this against the normal smooth descent from PIP to PEEP.

## 6.7 Reverse Triggering

**What it is:** A reflexive diaphragm contraction triggered by passive lung inflation — the ventilator breath causes the diaphragm to contract, rather than the other way around. Seen in deeply sedated or recently paralyzed patients.

**Waveform signature:**
- **Pressure-time:** A small dip or irregularity in the pressure plateau during a mandatory breath — the diaphragm contraction creates a brief negative pressure deflection mid-breath
- **Flow-time:** A small secondary flow increase during what should be a steady inspiratory phase
- **May lead to:** Double triggering if the reflexive effort is strong enough to trigger a second breath

**Fix:** Deepen sedation, re-paralyze briefly, or switch to a mode less likely to entrain (consider APRV)

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20scalloping%20of%20the%20pressure-time%20curve%20with%20inadequate%20flow%20rate.JPG)
> *Flow Starvation — Pressure Scalloping — Deranged Physiology* — Reverse triggering produces a **small notch or dip in the plateau pressure** of a passive mandatory breath — the reflexive diaphragm contraction creates a brief negative deflection mid-breath. May progress to double triggering if the effort is strong enough.

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

> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/flow%20curves%20in%20increased%20airway%20resistance%20and%20gas%20trapping.JPG)
> *Flow Curves — Air Trapping & Increased Resistance — Deranged Physiology* — Gold standard sign: expiratory flow **does not return to zero** before the next breath begins. The next inspiration fires while the lung is still emptying — this is air trapping. Quantify by performing an expiratory hold maneuver (Auto-PEEP = Total PEEP − Set PEEP).
>
> ![](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20auto-PEEP%20causing%20increased%20respiratory%20effort.JPG)
> *Auto-PEEP Causing Increased Respiratory Effort — Deranged Physiology* — Shows the consequence: patient must overcome intrinsic PEEP before reaching the trigger threshold, leading to wasted efforts and respiratory distress.

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

> ![](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/pressure%20volume%20loops%20in%20disease%20states.JPG)
> *PV Loops in Disease States — Deranged Physiology* — With effective diuresis, the PV loop should progressively shift leftward (steeper slope) as pulmonary edema clears and compliance improves. If the loop continues shifting right despite aggressive diuresis, investigate for additional pathology.

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
