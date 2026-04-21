# Ventilator Waveform Analysis
## A Comprehensive Guide
*Standalone Reference

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

>  **![Ventilator Waveform Schematic — Deranged Physiology|1130x909](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20waveform.JPG)** 
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

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20pressure%20waveform.JPG)
> *Normal Pressure-Time Scalar (ACVC) — Deranged Physiology* — Labeled PEEP baseline, linear rise, PIP, inspiratory hold/plateau, and return to PEEP. The PIP−Pplat gap = airway resistance; Pplat−PEEP = driving pressure (elastic recoil).

> **Key Equation:**
> - **PIP = Resistive Pressure + Elastic Pressure + PEEP**
> - **Resistive Pressure = PIP − Pplat** (airway resistance component)
> - **Elastic Pressure = Pplat − PEEP** (driving pressure / lung compliance component)

### Normal Appearance — ACPC

In pressure control, the ventilator targets a set inspiratory pressure. The pressure waveform shows a **rapid rise to the set pressure** and then maintains a **flat plateau** for the duration of the set inspiratory time before dropping to PEEP.

The square/flat pressure waveform in ACPC is the inverse of ACVC — here, pressure is controlled and constant, while flow is the dependent variable that decelerates.

> *[Image needed — find an ACPC pressure-time scalar showing the rapid rise to set pressure and flat plateau across Ti, ideally side-by-side with an ACVC linear ramp for contrast.]*

> ![|716x309](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/pressure%20ciurve%20high%20vs%20normal%20airway%20resistance.JPG)
> *Pressure-Time Scalar — High vs Normal Airway Resistance (ACVC) — Deranged Physiology* — Volume-control pressure tracings comparing normal vs increased airway resistance: PIP rises substantially while Pplat (measured during inspiratory hold) stays nearly unchanged. The widened PIP–Pplat gradient is the resistive component. Useful here as a reference for the **PIP vs Pplat** discussion below, not as an ACPC waveform.

### What the Pressure Waveform Tells You

| Finding                                               | What It Means                                                                                   | Action                                   |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Rising PIP with stable Pplat                          | Increased airway resistance (secretions, bronchospasm, kinked ETT)                              | Suction, bronchodilators, check ETT      |
| Rising PIP with rising Pplat                          | Decreased lung compliance (worsening ARDS, pneumothorax, pulmonary edema, abdominal distension) | Chest imaging, reduce Vt, increase PEEP  |
| Concave "scooped" pressure during inspiration (ACVC)  | Flow starvation — patient demand exceeds set flow                                               | Increase flow rate or switch to ACPC     |
| Pressure spike at end of inspiration                  | Delayed cycling — vent still inflating after patient wants to exhale                            | Shorten Ti, increase cycle-off threshold |
| Pressure not returning to set PEEP before next breath | Auto-PEEP / air trapping                                                                        | Extend expiratory time, reduce RR        |
| Negative deflection before breath triggers            | Patient effort (trigger work) — normal but should be minimal                                    | Adjust trigger sensitivity               |

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

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20flow%20waveform.JPG)
> *Normal Flow-Time Waveform (ACVC) — Deranged Physiology* — Canonical square-wave inspiratory flow above the zero line (set flow rate, constant across Ti), followed by the passive exponential expiratory decay below the zero line. Note that expiratory flow returns to zero before the next breath — no auto-PEEP. Use this as your "normal" reference.
>
> ![500](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/CICM%20Primary/F%20Respiratory%20system/pressure%20control%20ventilation%20flow%20rate%20reaches%20zero.JPG)
> *ACPC Flow: Decelerating to Zero — Deranged Physiology* — In pressure control, inspiratory flow starts at a high peak (driven by the initial gradient between set pressure and alveolar pressure) and decelerates to zero at end-Ti, indicating the lung has fully equilibrated with the set pressure. This is the visual signature of "adequate Ti" in ACPC.

### What the Flow Waveform Tells You

| Finding | What It Means | Action |
|---------|--------------|--------|
| Expiratory flow does not return to zero before next breath | **Auto-PEEP** — air trapping; the most reliable waveform sign | Extend expiratory time, reduce RR, bronchodilators |
| Abrupt expiratory flow cutoff (truncated) | Severe air trapping with premature breath delivery | Urgently extend I:E ratio |
| Inspiratory flow that appears "clipped" or inadequate | Flow starvation (correlates with scooped pressure waveform) | Increase flow rate |
| Saw-tooth pattern on expiratory limb | Secretions in the airway — airway vibration during exhalation | Suction the patient |
| Variable inspiratory flow breath-to-breath (ACPC) | Changing compliance or patient effort — monitor Vt closely | Assess for clinical change |
| Small flow deflections that don't trigger a breath | Ineffective efforts — patient trying to breathe but not triggering | Reduce trigger threshold, address auto-PEEP |

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/flow%20curves%20in%20increased%20airway%20resistance%20and%20gas%20trapping.JPG)
> *Flow Curves — Increased Airway Resistance & Gas Trapping — Deranged Physiology* — Obstructive-pattern flow-time tracing showing the two hallmark findings stacked in one figure: (1) low peak expiratory flow with a prolonged, slow expiratory phase, and (2) expiratory flow that **does not reach zero** before the next breath fires — the textbook waveform sign of auto-PEEP / gas trapping.
>
> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20auto-PEEP%20causing%20increased%20respiratory%20effort.JPG)
> *Auto-PEEP Causing Wasted Patient Effort — Deranged Physiology* — The downstream consequence of the pattern above: because the lung sits above set PEEP at end-expiration, the patient has to generate a negative deflection equal to (auto-PEEP + trigger sensitivity) before the vent will respond. Small pressure/flow dips that fail to trigger are **wasted efforts** — a marker of excess work of breathing.

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

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/ventilator%20waveform.JPG)
> *Three-Scalar Schematic (Pressure/Flow/Volume) — Deranged Physiology* — Use this as your orientation figure for the volume-time tracing (bottom panel). In a healthy circuit, the volume scalar returns cleanly to baseline at end-expiration. On a real vent screen, a circuit leak presents as the exhaled volume falling short of baseline — the **size of the residual offset equals the per-breath leak volume**. This schematic itself shows a normal, non-leaking tracing; look for the "failure-to-return-to-zero" pattern on your actual patient.

---

# Section 3: Waveform Patterns by Mode

## 3.1 ACVC — Assist Control Volume Control

**Pressure:** Linear ramp up to PIP → plateau if inspiratory hold applied → drop to PEEP
**Flow:** Square (constant) during inspiration → exponential decay during expiration
**Volume:** Linear rise → exponential fall

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/CICM%20Primary/F%20Respiratory%20system/ventilator%20graphics.JPG)
> *Ventilator Graphics Overview — Deranged Physiology* — All three scalars (pressure, flow, volume) stacked and time-aligned as seen on a real ventilator screen. Note the square flow pattern (ACVC), linear volume rise, and return to PEEP on the pressure tracing.

## 3.2 ACPC — Assist Control Pressure Control

**Pressure:** Rapid rise to set pressure → flat plateau for duration of Ti → drop to PEEP
**Flow:** Decelerating from peak → reaches zero or near-zero at end of Ti → passive expiration
**Volume:** Curved rise (concave down) → exponential fall

> ![500](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/CICM%20Primary/F%20Respiratory%20system/pressure%20control%20ventilation%20flow%20rate%20reaches%20zero.JPG)
> *ACPC Flow — Decelerating to Zero at End Ti — Deranged Physiology* — In ACPC, pressure rises rapidly and holds flat (set value); flow decelerates and reaches zero at end Ti; tidal volume is variable — determined by compliance and resistance, not set by the clinician.

## 3.3 Pressure Support Ventilation (PSV)

**Pressure:** Rapid rise to set PS level above PEEP → maintained until flow drops to cycle-off threshold → drop to PEEP
**Flow:** Decelerating from peak → terminates when flow reaches cycle-off percentage (typically 25% of peak)
**Volume:** Curved rise → fall (variable Vt depending on patient effort and mechanics)

> *[Image needed — find a true PSV flow-time tracing showing the decelerating inspiratory flow with a labeled cycle-off point at ~25% of peak flow, ideally with the corresponding pressure-time tracing showing the rapid rise to the set PS level.]*
>
> **What to look for on your patient's PSV waveform:** a decelerating inspiratory flow pattern (similar in shape to ACPC) that terminates the moment flow falls below the set cycle-off threshold (default ~25% of peak flow). Each breath's tidal volume will differ depending on patient effort, lung compliance, and airway resistance.

## 3.4 SIMV (Synchronized Intermittent Mandatory Ventilation)

SIMV delivers a set number of mandatory breaths (volume or pressure targeted) with spontaneous breaths in between. Waveform shows **two distinct breath patterns** alternating — larger mandatory breaths and smaller patient-triggered spontaneous breaths (supported by PS if set).

> *[Image needed — find a true SIMV scalar tracing showing the alternating pattern of larger mandatory breaths interleaved with smaller PS-supported spontaneous breaths on pressure and flow over time.]*
>
> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/pressure%20volume%20loop%20in%20SIMV-PRVC.jpg)
> *PV Loops in SIMV/PRVC — Deranged Physiology* — Bonus loop view: in SIMV the **PV loop overlay** shows two distinct loop morphologies superimposed — one for the large mandatory breath and one for the smaller spontaneous breath. This is loop data, not scalar data — it complements (but does not replace) the scalar tracing referenced above.

## 3.5 PRVC (Pressure Regulated Volume Control)

**Pressure:** Looks like ACPC — rapid rise to a variable pressure level → flat plateau → drop to PEEP. However, the pressure changes breath-to-breath as the ventilator auto-adjusts to achieve the target Vt.
**Flow:** Decelerating (like ACPC)
**Volume:** Target Vt is achieved, but the pressure needed varies

> **Clinical Pearl:** In PRVC, watch the pressure trend over multiple breaths. If the ventilator is progressively increasing pressure to maintain Vt, compliance is worsening. If pressure is dropping, compliance is improving. This is free information that many people miss.
>
> **Bedside tip:** On the *scalar* display (not the loop), watch how the peak pressure level shifts breath-to-breath — a rising trend at constant Vt = falling compliance; a falling trend = recovering compliance.
>
> *[Image needed — find a figure showing sequential PRVC breaths with the pressure level stepping up over several breaths as compliance decreases.]*

---

# Section 4: Pressure-Volume Loops

The pressure-volume (PV) loop plots airway pressure (x-axis) against volume (y-axis) during a single breath. The loop is traced counterclockwise — the inspiratory limb goes up and to the right, and the expiratory limb returns down and to the left.

## 4.1 Normal PV Loop

A normal PV loop is an elongated oval. The **slope of the loop** represents dynamic compliance — a steeper slope means more volume delivered per unit of pressure (more compliant lung). The width of the loop (the area between inspiratory and expiratory limbs) represents the **hysteresis** — energy lost to overcome resistance and tissue friction.

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/anatomy%20of%20the%20pressure-volume%20loop.JPG)
> *Anatomy of the PV Loop — Deranged Physiology* — Master teaching figure for the PV loop. Labeled features: **PEEP** (starting point on x-axis), **Lower Inflection Point (LIP)** — "minimum pressure required for alveolar recruitment" — §4.2, **optimal compliance zone** (the steep middle portion of the inspiratory limb), **Upper Inflection Point (UIP)** — "pressure at which there is regional overdistension" — and **"beaking"** at the top right — §4.3, plus **peak airway pressure** and **tidal volume** landmarks. Re-referenced below in §4.2 and §4.3 for LIP and UIP discussions respectively.


## 4.2 Lower Inflection Point (LIP)

The lower inflection point is where there is a **sudden increase in compliance** on the inspiratory limb — the slope of the curve steepens. Below this point, significant portions of the lung are collapsed and not participating in ventilation. The LIP has been used historically to guide PEEP setting — setting PEEP at or just above the LIP theoretically maintains alveolar recruitment.

> ⚠️ **Important:** The LIP is most visible in patients with ARDS and significant atelectasis. In patients with normal compliance, the LIP may not be identifiable. Modern PEEP titration strategies (ARDSNet tables, driving pressure optimization, EIT) have largely replaced LIP-based PEEP setting, but recognizing it on the PV loop remains a valuable skill.

*(See the labeled **Lower Inflection Point** arrow on the "Anatomy of the PV Loop" figure in §4.1 — "minimum pressure required for alveolar recruitment.")*

## 4.3 Upper Inflection Point (UIP) — "Beaking"

The upper inflection point is where the inspiratory limb **flattens out** at the top of the loop — the slope decreases despite increasing pressure. This indicates **overdistension** — you are pushing more pressure into the lung but getting progressively less volume in return. The flattening creates a characteristic "beak" or "penguin beak" shape at the top of the loop.

> 🚨 **Overdistension = Lung Injury Risk**
>
> If you see beaking on the PV loop, you are overdistending alveoli. This is a direct visual sign of potential ventilator-induced lung injury (VILI). Actions:
> - Reduce tidal volume
> - Reduce inspiratory pressure (in ACPC)
> - Reassess driving pressure (target <15 cmH₂O)

> ![500|500x368](https://litfl.com/wp-content/uploads/2019/01/pressure-vol-loop-2.jpg)
> *PV Loop — LITFL (Overdistension/Beaking)* — Shows the "beak" pattern at the upper inflection point — the inspiratory limb flattens and bends rightward at the top. This is overdistension: more pressure, less volume in return. Reduce Vt or inspiratory pressure immediately.

## 4.4 Compliance Changes on the PV Loop

| Change | PV Loop Appearance | Examples |
|--------|-------------------|----------|
| **Decreased compliance** | Loop shifts right and becomes flatter (wider) — more pressure needed for same volume | ARDS, pulmonary edema, pneumothorax, abdominal compartment syndrome, pleural effusion |
| **Increased compliance** | Loop shifts left and becomes steeper (taller/narrower) — less pressure needed | Emphysema, post-thoracentesis improvement, resolving edema |
| **Increased resistance** | Loop widens — increased hysteresis (larger area between limbs) | Bronchospasm, secretions, small ETT |
| **Air trapping** | Loop doesn't close — the expiratory limb doesn't return to the starting point | Auto-PEEP, inadequate expiratory time |

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/pressure%20volume%20loops%20in%20brief%20summary.JPG)
> *PV Loops — Compliance Changes in VC vs PC Modes — Deranged Physiology* — Top row: a normal PV loop in volume-controlled mode (left) and pressure-controlled mode (right). Bottom row: the loop morphology as compliance progressively decreases. **In volume-controlled mode** the loop shifts rightward (peak pressure rises at fixed volume). **In pressure-controlled mode** the loop stays anchored at the set pressure on the x-axis but the volume drops (the loop gets shorter). Use this to orient which axis is expected to change as compliance worsens, depending on what the ventilator is controlling.

## 4.5 Work of Breathing on the PV Loop

The area to the left of the inspiratory limb of the PV loop represents the **work of breathing**. In a mechanically ventilated patient, this work is shared between the ventilator and the patient. Anything that increases the convexity of the inspiratory curve or shifts the entire loop to the right increases the total work of breathing.

In spontaneously breathing patients (PSV), the presence of a leftward deflection below the trigger point on the pressure axis represents **patient work** — the bigger this deflection, the more work the patient is doing to trigger breaths. The ventilator's contribution is represented by the area to the right of that trigger point.

**Clinical application:** In severe asthma or COPD, the PV loop shifts dramatically rightward and the inspiratory limb becomes more convex, reflecting the enormous work of breathing against airway resistance. This is visible in real time and can guide the aggressiveness of bronchodilator therapy and ventilator support.

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/pressure%20volume%20loop%20in%20a%20spontaneously%20breathing%20patient.JPG)
> *PV Loop — Spontaneous Breathing (Work of Breathing) — Deranged Physiology* — In PSV and spontaneous breathing, the leftward deflection below the trigger point represents patient work. The larger this deflection, the more work the patient is doing. In severe asthma/COPD, the entire loop shifts rightward and widens dramatically.

## 4.6 Dyssynchrony on the PV Loop

PV loops can also reveal patient-ventilator dyssynchrony that may not be immediately obvious on scalar waveforms:

- **Tight trigger / auto-triggering:** A small loop-within-a-loop at the bottom of the PV curve — the patient triggers a breath that wasn't intended
- **Mid-inspiratory effort:** A leftward dip in the inspiratory limb — the patient generates an additional inspiratory effort mid-breath, pulling pressure negative
- **Flow starvation:** The inspiratory limb becomes concave to the left rather than tracking smoothly — the patient is pulling harder than the vent is delivering
- **Active exhalation against the vent:** The expiratory limb shows a rightward bulge — the patient's expiratory muscles are pushing against continued inspiratory flow (delayed cycling)


## 4.7 Air Leak on the PV Loop

When there is a leak in the circuit (cuff leak, chest tube air leak, circuit disconnect), the PV loop **fails to close** — the expiratory limb does not return to the starting volume. The magnitude of the gap between where the loop starts and where it ends represents the volume of gas lost to the leak.

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/pressure%20volume%20loops%20in%20disease%20states.JPG)
> *PV Loops in Disease States (4-panel) — Deranged Physiology* — Four-panel pathology atlas. **Bottom-left panel** is the key figure for this section: *"Leak in the circuit (open loop)"* — the inspiratory limb climbs normally, but the expiratory limb never returns to the starting volume on the x-axis. The gap is the per-breath leak volume. The other three panels (top-left: increased expiratory resistance / bronchospasm; top-right: increased inspiratory resistance / kinked or bitten ETT; bottom-right: increased compliance / emphysema) are useful supplementary references for §4.4.
>
> **Corroborating scalar sign:** On the volume-time tracing, the exhaled volume does not return to baseline — the residual gap equals the per-breath leak volume.

---

# Section 5: Flow-Volume Loops

The flow-volume (FV) loop plots flow (y-axis) against volume (x-axis). Inspiration is typically displayed as the upper portion (positive flow) and expiration as the lower portion (negative flow).

## 5.1 Normal FV Loop

In volume control with square flow, the inspiratory portion is a flat horizontal line at the set flow rate. The expiratory portion shows a peak expiratory flow followed by a decelerating curve back to zero — shaped like a smooth downward slope.

In pressure control, the inspiratory portion shows decelerating flow (starts high, curves down), and the expiratory portion has a similar appearance to volume control.

> ![500](https://litfl.com/wp-content/uploads/2019/01/flow-vol-loop-1.jpg)
> *FV Loop Anatomy — LITFL* — Labeled diagram of FV loop with inspiration (upper/positive flow) and expiration (lower/negative flow) clearly marked. Use this as the reference shape before interpreting abnormal patterns.

## 5.2 Obstructive Airway Disease Pattern

In patients with airway obstruction (COPD, asthma, bronchospasm), the expiratory limb shows a characteristic **concave scooped appearance** — peak expiratory flow drops rapidly and then the remaining flow is prolonged and reduced. This is the FV loop equivalent of obstructive physiology seen on PFTs.

*(See the combined Normal/Obstructive/Restrictive comparison figure in Section 5.4 — the obstructive panel shows exactly this scooped expiratory limb.)*

## 5.3 Bronchodilator Response

After administering bronchodilators, the expiratory limb of the FV loop should show **improvement in peak expiratory flow** and a **less concave expiratory curve** — the loop becomes more "full" on the expiratory side. Comparing pre- and post-bronchodilator FV loops at the bedside is an excellent way to assess treatment response in real time.

> *[Image needed — paired pre/post-bronchodilator FV loops showing the expiratory limb filling out after treatment. The previously embedded "flow curves" figure shows only the pre-treatment air-trapping pattern, not a paired comparison.]*
>
> **Bedside method:** Freeze the FV loop on the vent before albuterol, screenshot or note the shape, then re-evaluate 10–15 minutes after the treatment is complete. A measurable rise in peak expiratory flow and a less concave expiratory limb confirms response.

## 5.4 Restrictive Lung Disease Pattern

In patients with restrictive physiology (pulmonary fibrosis, severe ARDS, chest wall restriction), the FV loop shows:
- **Reduced tidal volume** — the loop is smaller overall
- **Rapid decrease in inspiratory flow** — the stiff lung fills quickly and stops accepting flow
- **High peak expiratory flow with rapid decay** — the inelastic lung recoils forcefully, generating a high initial expiratory flow that drops off quickly

The overall loop appears **small and compressed** compared to normal, but without the scooped expiratory pattern seen in obstruction. This is a useful distinction — obstruction scoops the expiratory limb, restriction shrinks the entire loop.

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/sites/default/files/old%20image%20pile/CICM/Required-Reading/Revision-Notes-for-Respiratory-Problems/flow%20volume%20loops.JPG)
> *Flow-Volume Loops — Pattern Atlas (9 panels) — Deranged Physiology* — A complete bedside FV-loop atlas: **Top row** — Normal · Reduced lung volume with preserved compliance · Circuit leak. **Middle row** — Obstructive airways disease · Obstructive with gas trapping · Fixed large-airway obstruction (e.g., main bronchus). **Bottom row** — Restrictive lung disease · Mixed restrictive + obstructive · Airway secretions (note the saw-toothed expiratory limb). For the §5 discussion, focus on: **obstructive** = scooped expiratory limb at near-normal volume; **restrictive** = a small, narrow, vertically-elongated loop with rapid expiratory flow decay.

## 5.5 Air Trapping on the FV Loop

If expiratory flow does not reach zero before the next breath, the FV loop will not close — the expiratory limb is **truncated** before reaching the volume axis. This is a visual confirmation of auto-PEEP/air trapping.

> *[Image needed — find a true FV loop figure showing a truncated expiratory limb that fails to close back to the volume axis, illustrating air trapping on the FV loop specifically.]*

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/flow%20insufficient%20inspiration%20time.JPG)
> *Flow-Time Scalar — Insufficient Inspiratory Time (ACPC) — Deranged Physiology* — **Note: this is a flow-time scalar, not an FV loop.** It shows the sister problem in pressure-control: inspiratory flow is cut off before it can decelerate to zero — the ventilator cycles to expiration while flow is still mid-descent. The callout reads *"Flow has not returned to zero before cycling to expiration."* On ACPC this means Ti is too short for the lung to equilibrate with set pressure → delivered Vt will be lower than it could be. Fix by lengthening Ti.

---

# Section 6: Recognizing Dyssynchrony on Waveforms

Patient-ventilator dyssynchrony affects 25–50% of mechanically ventilated patients and is associated with prolonged ventilation, increased sedation requirements, and worse outcomes. The waveform is your first detection tool — often identifying dyssynchrony before clinical signs are obvious.

## 6.1 Flow Starvation

**What it is:** The patient's inspiratory demand exceeds the ventilator's set flow rate (ACVC).

**Waveform signature:**
- **Pressure-time:** The normally linear or convex pressure rise becomes **concave (scooped)** during inspiration — the patient is pulling airway pressure down by generating negative pleural pressure faster than flow is delivered
- **Flow-time:** Flow appears "capped" at the set rate while the pressure waveform clearly shows unmet demand

**Fix:** Increase peak flow to 60–80 L/min or higher, switch to decelerating flow, or convert to ACPC

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20scalloping%20of%20the%20pressure-time%20curve%20with%20inadequate%20flow%20rate.JPG)
> *Flow Starvation — Pressure Scalloping — Deranged Physiology* — The normally linear/convex pressure rise in ACVC becomes **concave ("scooped" or "scalloped")** — the patient is pulling airway pressure down faster than the set flow can satisfy demand. Compare the normal convex rise against the scooped curve.

## 6.2 Double Triggering

**What it is:** A single patient effort triggers two consecutive ventilator breaths because the patient's neural inspiratory time exceeds the ventilator's set inspiratory time.

**Waveform signature:**
- **Flow-time:** Two complete inspiratory cycles back-to-back with no expiratory pause between them — the second breath fires immediately
- **Volume-time:** Stacked volumes — total delivered can reach 2× set Vt
- **Pressure-time:** Two pressure peaks in rapid succession

**Danger:** Vt stacking delivers excessive volume causing VILI — particularly dangerous in ARDS patients on lung-protective ventilation.

**Fix:** Increase Ti to match neural inspiratory time, increase Vt slightly (if safe), switch to ACPC, or deepen sedation if injurious

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20double%20triggering%20and%20premature%20breath%20termination.JPG)
> *Double Triggering & Premature Breath Termination — Deranged Physiology* — **Focus on the double-triggering panel:** two complete inspiratory cycles fire back-to-back with no expiratory pause between them. The volume scalar shows the second breath stacking on top of the first — total delivered volume can approach 2× set Vt. Extremely dangerous in ARDS on lung-protective ventilation. *(The same composite figure also illustrates premature termination — referenced again in Section 6.5.)*

## 6.3 Ineffective Triggering (Missed Efforts)

**What it is:** The patient makes an inspiratory effort, but it fails to trigger the ventilator. The effort is "wasted."

**Waveform signature:**
- **Flow-time:** Small deflections in the expiratory flow tracing that don't result in a triggered breath — the flow moves slightly toward zero (or above baseline) and then falls back without triggering
- **Pressure-time:** Small negative dips in airway pressure during expiration that don't trigger a breath

**Common causes:** Trigger sensitivity set too low, significant auto-PEEP (patient must first overcome auto-PEEP before reaching trigger threshold), weak respiratory muscles

**Fix:** Increase trigger sensitivity (make it more sensitive), address auto-PEEP, consider flow triggering over pressure triggering

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20-%20example%20of%20wasted%20effort%20in%20a%20mandatory%20mode.JPG)
> *Wasted Effort — Mandatory Mode — Deranged Physiology* — Small flow deflections visible during the expiratory phase that don't result in a triggered breath. On the pressure tracing, look for small negative dips that fall short of the trigger threshold. Each represents a wasted patient effort.
>
> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20-%20example%20of%20wasted%20effort%20when%20a%20trigger%20is%20set%20too%20high.JPG)
> *Wasted Effort — Trigger Set Too High — Deranged Physiology* — Patient effort visible but not reaching the trigger threshold. Patient is working hard without ventilator response.

## 6.4 Auto-Triggering

**What it is:** The ventilator triggers a breath without a patient effort — false triggering.

**Waveform signature:**
- **Pressure-time:** No negative deflection before the breath — the breath fires spontaneously
- **Flow-time:** Consistent breath delivery without evidence of patient-initiated flow demand
- **Clinical context:** Cardiac oscillations, circuit leaks, and water in the circuit can cause auto-triggering

**Fix:** Decrease trigger sensitivity (make it less sensitive), check for circuit leaks/water, rule out cardiac oscillations

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20cardiac%20oscillations.JPG)
> *Auto-Triggering — Cardiac Oscillations — Deranged Physiology* — An auto-triggered breath has **no negative deflection** before inspiration — the breath fires from baseline without patient effort. Compare against a normal patient-triggered breath which shows a small negative dip at the start. Cardiac oscillations are shown as a cause of false triggering.

## 6.5 Premature Cycling

**What it is:** The ventilator ends inspiration before the patient's neural inspiration is complete. The patient is still trying to inhale when the vent switches to expiration.

**Waveform signature:**
- **Pressure-time:** A brief **pressure spike or bump** at the transition from inspiration to expiration — the patient's continued inspiratory effort against the closing valve
- **Flow-time:** Active inspiratory flow effort visible during early expiration

**Fix:** Increase Ti (ACVC/ACPC), lower cycle-off threshold in PSV (from 25% to 10–15% of peak flow)

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20double%20triggering%20and%20premature%20breath%20termination.JPG)
> *Double Triggering & Premature Breath Termination — Deranged Physiology* — Premature cycling: the vent ends inspiration while the patient is still trying to inhale. Look for a small positive pressure bump or spike at the inspiration-to-expiration transition — the patient's continued inspiratory effort against the closing valve.

## 6.6 Delayed Cycling

**What it is:** The ventilator continues delivering the breath after the patient's neural inspiration has ended. The patient wants to exhale but the vent is still inflating.

**Waveform signature:**
- **Pressure-time:** A sharp **pressure spike** at end-inspiration as the patient's expiratory muscles activate against the ventilator's continued inspiratory flow
- **Flow-time:** Evidence of patient expiratory effort (flow reversal) before the ventilator cycles

**Fix:** Shorten Ti, increase cycle-off threshold in PSV (to 40–50% of peak flow), check for leaks (leaks delay flow-based cycling)

> *[Image needed — find a figure specifically showing the sharp pressure spike at end-inspiration characteristic of delayed cycling. The generic normal pressure waveform previously embedded here does not demonstrate this pattern.]*
>
> **What to look for at the bedside:** On the pressure-time scalar, a brief upward "pressure bump" immediately before the transition to expiration — this is the patient's expiratory muscles activating against the vent's continued inspiratory flow. On the flow-time scalar, inspiratory flow may linger flat instead of decelerating smoothly to cycle-off.

## 6.7 Reverse Triggering

**What it is:** A reflexive diaphragm contraction triggered by passive lung inflation — the ventilator breath causes the diaphragm to contract, rather than the other way around. Seen in deeply sedated or recently paralyzed patients.

**Waveform signature:**
- **Pressure-time:** A small dip or irregularity in the pressure plateau during a mandatory breath — the diaphragm contraction creates a brief negative pressure deflection mid-breath
- **Flow-time:** A small secondary flow increase during what should be a steady inspiratory phase
- **May lead to:** Double triggering if the reflexive effort is strong enough to trigger a second breath

**Fix:** Deepen sedation, re-paralyze briefly, or switch to a mode less likely to entrain (consider APRV)

> *[Image needed — find a figure specifically showing reverse triggering: a passive mandatory breath with a small notch/dip in the pressure plateau from a reflexive diaphragm contraction, ideally with an esophageal or diaphragm EMG tracing confirming the mechanism. The "scalloping" figure previously embedded here shows flow starvation, not reverse triggering.]*
>
> **Distinguishing feature:** Unlike flow starvation (where the scooping occurs during the rise phase and reflects active patient demand), reverse triggering produces a brief deflection on the *plateau* of an otherwise passive breath in a sedated/paralyzed patient. If the reflexive effort is strong enough, it may progress to overt double triggering on the next breath.

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

> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/flow%20curves%20in%20increased%20airway%20resistance%20and%20gas%20trapping.JPG)
> *Flow Curves — Air Trapping & Increased Resistance — Deranged Physiology* — Gold standard sign: expiratory flow **does not return to zero** before the next breath begins. The next inspiration fires while the lung is still emptying — this is air trapping. Quantify by performing an expiratory hold maneuver (Auto-PEEP = Total PEEP − Set PEEP).
>
> ![1000](https://www.derangedphysiology.com/main/sites/default/files/php/Respiratory-failure-and-mechanical-ventilation/images/patient-ventilatory%20dyssynchrony%20%20auto-PEEP%20causing%20increased%20respiratory%20effort.JPG)
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

> *[Image needed — find paired before/after PV loops showing the leftward shift (increased slope) after effective diuresis in pulmonary edema.]*
>
> **What to watch at the bedside:** Take a screenshot of the PV loop at baseline before starting diuresis, then re-check after each 1–2 L net negative balance. A progressively steeper (leftward, more vertical) loop at the same Vt = improving compliance. A loop that fails to shift despite aggressive diuresis should prompt re-evaluation for an alternative or additional cause (ARDS, pneumonia, effusion, cardiogenic shock).

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

---

_Created: 2026-03-01 · Last updated: 2026-04-21 · HVI ICU APP Team_

