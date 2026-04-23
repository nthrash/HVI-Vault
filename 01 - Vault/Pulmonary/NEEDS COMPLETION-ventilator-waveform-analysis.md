# Ventilator Waveform Analysis
*A bedside reference for providers*

---

## Table of Contents

**Part I — Anatomy**
1. The Vent Screen — What You're Looking At
2. Pressure-Time Scalar
3. Flow-Time Scalar
4. Volume-Time Scalar
5. Pressure-Volume Loop
6. Flow-Volume Loop
7. The 10-Second Bedside Read

**Part II — Scenarios**
8. Alarm Troubleshooting
9. Dyssynchrony Atlas
10. Air Trapping / Auto-PEEP
11. Leaks
12. Bedside Response to an Intervention

**Appendices**
A. Quick Reference Tables
B. Figure Index

---

# Part I — Anatomy

# Section 1: The Vent Screen — What You're Looking At

The ventilator displays five graphics: three **scalars** that plot a variable against time, and two **loops** that plot two variables against each other during a single breath.

| Graphic | Plots | Primarily tells you |
|---------|-------|---------------------|
| Pressure-time scalar | Airway pressure vs time | Airway resistance, compliance, patient effort |
| Flow-time scalar | Gas flow vs time | Air trapping, secretions, dyssynchrony |
| Volume-time scalar | Cumulative volume vs time | Leaks, progressive air trapping |
| Pressure-volume (PV) loop | Volume vs pressure | Compliance, overdistension, work of breathing |
| Flow-volume (FV) loop | Flow vs volume | Airway obstruction, bronchodilator response |

## The single most important concept: set vs. measured

Every mode controls some variables and lets others float. **The variables the vent controls are flat or preset on the waveform. The variables that float are the ones that reveal changes in lung mechanics — so those are the ones you watch.**

| Mode | Set (flat/preset) | Measured (watch these) |
|------|-------------------|------------------------|
| ACVC (Volume Control) | Tidal volume, flow rate, flow pattern | Peak pressure, plateau pressure |
| ACPC (Pressure Control) | Inspiratory pressure, inspiratory time | Tidal volume, flow pattern |
| PSV | Pressure support level | Tidal volume, flow, inspiratory time |
| PRVC | Target tidal volume | Pressure (breath-to-breath) |

> **Figure 1.1** — *[Placeholder: labeled ventilator screen showing all five waveforms time-aligned, with "set" and "measured" annotations on each graphic for a VC breath.]*

---

# Section 2: Pressure-Time Scalar

Airway pressure (cmH₂O) on the y-axis, time (seconds) on the x-axis.

## Normal appearance

**In volume control (VC):** pressure rises in a **linear ramp** during inspiration, reaches PIP, and drops back to PEEP at exhalation.

**In pressure control (PC):** pressure **rises rapidly to the set value and holds flat** for the duration of Ti, then drops to PEEP.

## Landmarks

- **PEEP** — the baseline pressure between breaths
- **Rise phase** — the inspiratory climb
- **Peak Inspiratory Pressure (PIP)** — the highest pressure reached; reflects *both* airway resistance and lung compliance
- **Plateau Pressure (Pplat)** — measured during an inspiratory hold; reflects *only* alveolar pressure (elastic recoil)
- **PIP–Pplat gradient** — the resistive component alone
- **Negative pre-trigger dip** — small downward deflection when the patient triggers a breath (should be small)

## The equation that matters

> **PIP = Resistive pressure + Elastic pressure + PEEP**
> - Resistive pressure = PIP − Pplat *(airway resistance)*
> - Elastic pressure = Pplat − PEEP *(driving pressure — target < 15 cmH₂O)*

> **Figure 2.1** — *[Placeholder: normal VC pressure-time tracing with labeled PEEP, linear rise, PIP, inspiratory-hold plateau (Pplat), and return to PEEP.]*

> **Figure 2.2** — *[Placeholder: normal PC pressure-time tracing with labeled rapid rise to set pressure, flat plateau across Ti, and return to PEEP.]*

---

# Section 3: Flow-Time Scalar

Flow (L/min) on the y-axis, time on the x-axis. **Inspiration is above the zero line; expiration is below.**

## Normal patterns

- **VC, square flow (default):** flat horizontal line at the set flow rate during inspiration; expiration is an exponential decay back to zero
- **VC, decelerating flow:** inspiratory flow starts high and tapers — mimics PC, may improve gas distribution
- **PC / PSV:** inspiratory flow starts at a high peak (driven by the pressure gradient) and **decelerates to zero** at end-Ti — this "flow reaches zero at end-Ti" appearance is the visual signature of adequate Ti in PC

## The one normal feature that matters most

> **Expiratory flow should return to zero before the next breath fires.** If it doesn't, there is auto-PEEP — see Section 10.

> **Figure 3.1** — *[Placeholder: two panels side-by-side — VC square inspiratory flow with passive expiratory decay; PC decelerating flow reaching zero at end-Ti. Both show expiratory flow cleanly returning to zero.]*

---

# Section 4: Volume-Time Scalar

Cumulative volume (mL) on the y-axis, time on the x-axis. Rises during inspiration to the delivered Vt, then falls back to baseline during expiration.

## Normal appearance

- Inspiratory limb rises — **linear** with square flow, **curved** with decelerating flow
- Expiratory limb falls as a passive exponential decay
- Returns cleanly to baseline before the next breath

## The one normal feature that matters most

> **Exhaled volume should equal inspired volume.** A persistent gap = a leak. A gradual upward drift of the baseline = progressive air trapping.

> **Figure 4.1** — *[Placeholder: normal volume-time tracing showing inspiratory rise, expiratory fall, and return to baseline.]*

---

# Section 5: Pressure-Volume Loop

Pressure on the x-axis, volume on the y-axis. The loop is traced **counterclockwise** — inspiration goes up and to the right, expiration returns down and to the left.

## What the loop tells you

- **Slope of the inspiratory limb = dynamic compliance.** Steeper = more compliant.
- **Width (hysteresis) = resistive + tissue losses.** Wider = more resistance.
- **Starting point on the x-axis = PEEP.**

## Key landmarks

- **Lower Inflection Point (LIP)** — the "knee" on the inspiratory limb where compliance abruptly improves. Below the LIP, lung is atelectatic. Historically used to set PEEP; mostly replaced by ARDSNet tables and driving pressure, but the pattern still matters.
- **Upper Inflection Point (UIP) — "beaking"** — the flattening at the top of the loop where more pressure yields less volume. This is **overdistension**: reduce Vt or inspiratory pressure immediately.

> **Figure 5.1** — *[Placeholder: anatomy of a normal PV loop with PEEP, LIP, optimal compliance zone, UIP/beaking, tidal volume, and peak airway pressure all labeled.]*

---

# Section 6: Flow-Volume Loop

Flow on the y-axis, volume on the x-axis. **Inspiration is the upper portion (positive flow); expiration is the lower portion (negative flow).**

## Normal appearance

**In VC (square flow):** the inspiratory portion is a flat horizontal line at the set flow rate. The expiratory portion shows a peak expiratory flow followed by a smooth decelerating curve back to zero.

**In PC / PSV:** the inspiratory portion shows decelerating flow (high peak, curving down); the expiratory portion looks similar to VC.

## The one normal feature that matters most

> **The loop should close.** The expiratory limb should return to the same volume-axis starting point. If it doesn't, there is air trapping (loop truncated) or a leak (loop "open").

> **Figure 6.1** — *[Placeholder: normal FV loop labeled with inspiratory limb (upper), expiratory limb (lower), peak expiratory flow, and loop closure at the starting volume.]*

---

# Section 7: The 10-Second Bedside Read

When you approach a vent, run this five-step check before you touch anything. It catches ~90% of problems.

1. **Baseline** — is the pressure tracing returning to the set PEEP between breaths?
2. **Inspiratory pressure shape** — convex ramp (VC) or flat plateau (PC), as expected? Any scooping?
3. **Expiratory flow** — does it return to zero before the next breath? Any saw-tooth pattern?
4. **Volumes** — does exhaled match inspired?
5. **Loops** — any beaking on the PV loop? Does the loop close?

If any answer is "no," jump to the relevant scenario in Part II.

---

# Part II — Scenarios

# Section 8: Alarm Troubleshooting

Two alarms account for most of what you'll chase: **high peak pressure** (in VC) and **low tidal volume** (in PC). The waveform tells you which compartment of the lung is the problem.

## 8.1 High peak pressure alarm (VC modes)

Get a plateau pressure. The PIP–Pplat relationship is the whole answer.

| Waveform finding | What broke | First move |
|------------------|------------|------------|
| PIP ↑, Pplat **stable** | Airway resistance ↑ — secretions, bronchospasm, kinked or bitten ETT | Suction, bronchodilators, bite block, check tube position |
| PIP ↑, Pplat ↑ (both rise together) | Compliance ↓ — pneumothorax, mainstem intubation, pulmonary edema, abdominal distension, effusion | CXR, auscultate, assess abdomen, reduce Vt |
| PIP ↑, no plateau obtainable | Massive leak or circuit disconnect | Check all connections and cuff integrity |

## 8.2 Low tidal volume alarm (PC modes)

In PC, Vt is the dependent variable — a dropping Vt at the same set pressure means mechanics changed.

| Waveform finding | What broke | First move |
|------------------|------------|------------|
| Set pressure achieved, Vt dropped | Compliance ↓ — atelectasis, edema, effusion, pneumothorax | CXR, consider increasing pressure |
| Set pressure not reached | Massive leak | Check cuff, circuit, tube position |
| Vt variable with patient effort | Spontaneous effort fluctuating | Assess sedation; consider switching to VC for guaranteed volumes |

> **Figure 8.1** — *[Placeholder: four-panel pressure-time scalar — (A) normal VC baseline, (B) isolated PIP rise with stable Pplat, (C) both PIP and Pplat rising together, (D) leak with no obtainable plateau. Inspiratory holds visible in each.]*

---

# Section 9: Dyssynchrony Atlas

Patient-ventilator dyssynchrony affects 25–50% of ventilated patients and is linked to prolonged ventilation, higher sedation need, and worse outcomes. The waveform is usually the first clue.

| Dyssynchrony | Where to look first | Waveform fingerprint | Fix |
|--------------|---------------------|-----------------------|-----|
| **Flow starvation** | Pressure-time | Normally linear/convex inspiratory rise becomes **concave ("scooped")** — patient pulling airway pressure down faster than set flow can satisfy | ↑ Peak flow to 60–80 L/min, switch to decelerating flow, or convert to PC |
| **Double triggering** | Volume-time | **Two inspiratory cycles back-to-back with no expiratory pause**; stacked Vt can reach 2× set — dangerous in ARDS | ↑ Ti to match neural inspiratory time, ↑ Vt slightly if safe, switch to PC, deepen sedation if injurious |
| **Ineffective triggering** | Flow-time (expiratory limb) | Small flow deflections during expiration that **don't fire a breath** — wasted efforts | ↑ Trigger sensitivity, treat auto-PEEP, consider flow-triggering |
| **Auto-triggering** | Pressure-time | Breaths fire with **no preceding negative deflection** — cardiac oscillations, circuit water, or leaks triggering the vent | ↓ Trigger sensitivity, check circuit for water/leak, rule out cardiac oscillations |
| **Premature cycling** | Pressure-time (I→E transition) | Brief **pressure bump** at the transition from inspiration to expiration — patient still pulling against a closing valve | ↑ Ti (VC/PC), ↓ cycle-off threshold in PSV (25% → 10–15% of peak flow) |
| **Delayed cycling** | Pressure-time (end-inspiration) | Sharp **pressure spike at end-inspiration** — patient's expiratory muscles firing against continued inspiratory flow | ↓ Ti, ↑ cycle-off threshold in PSV (→ 40–50% of peak flow), check for leaks |
| **Reverse triggering** | Pressure-time (plateau) | Small **notch/dip in the plateau** of a passive mandatory breath — reflexive diaphragm contraction entrained by the vent breath; may progress to double triggering | Deepen sedation, re-paralyze briefly, consider APRV |

> **Figures 9.1–9.7** — *[Placeholder: seven separate waveform panels, one per dyssynchrony, each showing the fingerprint pattern clearly labeled. Consistent axes and styling across all seven.]*

---

# Section 10: Air Trapping / Auto-PEEP

Auto-PEEP (intrinsic PEEP) is the single most consequential underdiagnosed waveform finding.

## The gold-standard waveform sign

> **Expiratory flow on the flow-time scalar does not return to zero before the next breath fires.**

There is still air leaving the lung when the next inspiration arrives — the lung hasn't fully emptied.

## Confirming and quantifying

Perform an **expiratory hold** for 2–3 seconds at end-expiration. This equilibrates the circuit to total PEEP.

> **Auto-PEEP = Total PEEP − Set PEEP**
>
> Example: set PEEP = 5, total measured PEEP = 12 → auto-PEEP = 7 cmH₂O

The expiratory hold is reliable only in passive patients. In spontaneously breathing patients, the flow-time waveform sign is the primary tool.

## Secondary consequence on the waveform

Auto-PEEP raises the pressure the patient must generate before triggering a breath. Expect to see **small ineffective flow deflections** during expiration that fail to fire — wasted efforts, as in Section 9.

> **Figure 10.1** — *[Placeholder: flow-time scalar showing the classic sign — expiratory flow interrupted by the next breath before returning to zero — with an inset expiratory-hold panel showing total PEEP > set PEEP.]*

---

# Section 11: Leaks

A leak presents on **two** waveforms simultaneously. Both should be checked.

## On the volume-time scalar

Exhaled volume fails to return to baseline — the gap between inspired and expired volume is the per-breath leak volume.

## On the PV loop

The loop **fails to close** — the expiratory limb doesn't return to the starting point on the volume axis. The gap size = leak volume.

## Differential

| Source | Typical finding | Next step |
|--------|-----------------|-----------|
| **ETT cuff leak** | Audible leak at the mouth; leak worsens with inspiratory pressure | Measure cuff pressure, reinflate (target 20–30 cmH₂O); if persistent, consider tube exchange |
| **Circuit disconnect / loose connection** | Sudden large leak, possible low-pressure alarm | Trace the entire circuit — connections, heat-moisture exchanger, water trap |
| **Bronchopleural fistula (chest tube air leak)** | Persistent leak that may worsen with PEEP; bubbling in the chest tube chamber | Quantify leak over time; surgical consult if large or worsening |

> **Figure 11.1** — *[Placeholder: two-panel figure — (A) volume-time scalar with exhaled volume falling short of baseline, gap labeled as leak volume; (B) PV loop with the expiratory limb ending short of the starting point.]*

---

# Section 12: Bedside Response to an Intervention

Don't just order the treatment — watch the waveform to see if it worked.

| Intervention | Before | After (if effective) |
|--------------|--------|----------------------|
| **Suctioning** | Saw-tooth pattern on expiratory flow, ↑ PIP | Flow smooths out, PIP drops, Pplat unchanged (confirms resistive problem) |
| **Bronchodilator** | ↑ PIP with normal Pplat, scooped expiratory FV loop | PIP ↓, PIP–Pplat gap narrows, expiratory flow returns to zero faster, FV loop expiratory limb fills out |
| **PEEP increase — recruitment** | Decreased compliance pattern | PV loop steepens (leftward shift), driving pressure ↓ for same Vt |
| **PEEP increase — overdistension** | Same baseline | **Beaking appears** on PV loop, Pplat rises, Vt drops in PC |
| **Diuresis (over hours)** | Pplat elevated, PV loop shifted right | Pplat ↓, PV loop progressively shifts leftward (steeper slope), beaking resolves |
| **Paralysis** | Variable effort, dyssynchrony, irregular flow | Every breath looks identical; accurate Pplat and compliance measurement possible |

> **Clinical Pearl:** To get an accurate Pplat and compliance measurement, the patient must be fully passive. A single dose of neuromuscular blockade for 2–3 minutes is enough.

> **Figures 12.1–12.2** — *[Placeholder: two paired before/after figures — one for bronchodilator response on the FV loop, one for PEEP titration showing recruitment (leftward shift) vs overdistension (beaking) on the PV loop.]*

---

# Appendix A: Quick Reference Tables

## A.1 What each waveform tells you

| Waveform | Watch for |
|----------|-----------|
| Pressure-time | Scooped = flow starvation · PIP ↑ alone = resistance · PIP and Pplat both ↑ = compliance · no return to PEEP = auto-PEEP · end-inspiratory spike = delayed cycling |
| Flow-time | Expiratory flow ≠ zero = auto-PEEP · saw-tooth = secretions · small expiratory deflections = missed efforts |
| Volume-time | Exhaled < inspired = leak · upward baseline drift = progressive air trapping |
| PV loop | Beaking = overdistension · rightward shift = ↓ compliance · leftward shift = ↑ compliance · loop doesn't close = leak or air trapping |
| FV loop | Scooped expiratory limb = obstruction · truncated = air trapping · open = leak · small vertical loop = restriction |

## A.2 "I see this → it means → I do this"

| Waveform sign | Meaning | Action |
|---------------|---------|--------|
| PIP ↑, Pplat normal | Airway resistance ↑ | Suction · bronchodilators · check ETT |
| PIP ↑, Pplat ↑ | Compliance ↓ | CXR · rule out PTX/edema/effusion |
| Expiratory flow ≠ 0 | Auto-PEEP | ↑ Expiratory time · ↓ RR |
| Saw-tooth expiratory flow | Secretions | Suction |
| Scooped inspiratory pressure | Flow starvation | ↑ Flow or switch to PC |
| PV loop beaking | Overdistension | ↓ Vt · ↓ pressure · reassess PEEP |
| Loop fails to close | Leak or air trapping | Check cuff/circuit; check auto-PEEP |
| Exhaled < inspired volume | Leak | Check cuff pressure and connections |
| Pplat trending up over hours | Worsening compliance | Investigate — edema, ARDS, effusion |
| Two breaths back-to-back, no pause | Double triggering | ↑ Ti · consider mode change |
| Small flow blips not triggering | Missed efforts | ↑ Trigger sensitivity · treat auto-PEEP |

---

# Appendix B: Figure Index

| Figure | Shows | Home section |
|--------|-------|--------------|
| 1.1 | Labeled vent screen — all five waveforms with set-vs-measured annotations (VC) | §1 |
| 2.1 | Normal VC pressure-time scalar — PEEP, rise, PIP, Pplat, return to PEEP | §2 |
| 2.2 | Normal PC pressure-time scalar — rapid rise, flat plateau, return to PEEP | §2 |
| 3.1 | Normal flow-time scalars — VC square vs PC decelerating, both returning to zero | §3 |
| 4.1 | Normal volume-time scalar — rise, fall, return to baseline | §4 |
| 5.1 | Anatomy of a normal PV loop — PEEP, LIP, compliance zone, UIP/beaking, Vt, peak pressure | §5 |
| 6.1 | Normal FV loop labeled — inspiratory limb, expiratory limb, peak flow, loop closure | §6 |
| 8.1 | Four-panel pressure-time — normal VC, isolated PIP rise, PIP+Pplat rise, leak | §8 |
| 9.1–9.7 | Seven dyssynchrony fingerprints — one panel per type | §9 |
| 10.1 | Auto-PEEP — flow-time with incomplete expiratory return + expiratory-hold inset | §10 |
| 11.1 | Leak — volume-time gap + PV loop failing to close | §11 |
| 12.1 | Bronchodilator response — paired pre/post FV loops | §12 |
| 12.2 | PEEP titration — recruitment (leftward shift) vs overdistension (beaking) on PV loop | §12 |

---

*Draft — structure locked 2026-04-21. Figures to be generated as custom waveforms once document content is finalized.*
