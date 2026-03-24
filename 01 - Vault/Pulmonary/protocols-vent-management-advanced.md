# Advanced Ventilator Management
## Heart Failure & Critical Care ICU Protocol
*For Advanced Practice Providers — UTHealth Houston HFICU*

This protocol is designed for APPs with working ventilator knowledge who need to navigate **unconventional rescue strategies** when standard approaches fail — with special emphasis on heart failure physiology, RV-LV interdependence, cardiogenic shock, ECMO patients, and high-acuity MCS.

---

## Table of Contents

1. [Ventilator Mode Deep Dive](#section-1-ventilator-mode-deep-dive)
2. [Patient-Ventilator Dyssynchrony](#section-2-patient-ventilator-dyssynchrony--recognition--rescue)
3. [Refractory Hypoxemia — Rescue Strategies](#section-3-refractory-hypoxemia--escalating-rescue-strategies)
4. [Obstructive Physiology — Auto-PEEP & Hyperinflation](#section-4-obstructive-physiology--auto-peep--dynamic-hyperinflation)
5. [Heart Failure-Specific Ventilation Strategies](#section-5-heart-failure-specific-ventilation-strategies)
6. [Ventilation on ECMO](#section-6-ventilation-on-ecmo)
7. [Liberation from Mechanical Ventilation — Advanced Approach](#section-7-liberation-from-mechanical-ventilation--advanced-approach)
8. [Rescue Modes & Emerging Strategies](#section-8-rescue-modes--emerging-ventilatory-strategies)
9. [Rapid Reference — Decision Frameworks](#section-9-rapid-reference--decision-frameworks)

---

# Section 1: Ventilator Mode Deep Dive

The basics are reviewed here not as a refresher, but as a foundation for understanding **why modes fail**. Each mode has a failure signature — knowing it allows you to rescue rather than react.

---

## 1.1 Volume-Controlled Assist Control (VC-AC)

### Mechanics & Physiology

VC-AC guarantees delivery of a set tidal volume (Vt) with every triggered or mandatory breath. The ventilator delivers a constant or decelerating flow to reach that Vt regardless of the patient's inspiratory effort or lung compliance. Because the volume is fixed, the resulting peak airway pressure is entirely determined by the patient's respiratory system mechanics.

> **Key equation:** Peak Pressure = Flow Resistance Pressure + Plateau Pressure. Plateau pressure (Pplat) reflects alveolar pressure (static compliance). The gap between Peak and Pplat reflects airway resistance. A widening Peak-Pplat gap means airway obstruction; a rising Pplat means worsening lung compliance or auto-PEEP.

### VC-AC Failure Modes

> ⚠️ **VC-AC Failure Recognition**
>
> 1. **High peak with normal Pplat** → secretions, bronchospasm, kinked ETT. Treat the airway, not the vent.
> 2. **High Pplat despite low Vt** → severe ARDS, tension pneumothorax, abdominal compartment syndrome.
> 3. **Patient dyssynchrony** → flow starvation if flow rate too low; increase flow to 80-100 L/min or switch to PC-AC.
> 4. **Auto-PEEP accumulation** → undetected unless you perform expiratory hold; treat by extending I:E ratio.
> 5. **CO2 retention despite high RR** → dead space ventilation; adding PEEP or treating underlying cause more useful than increasing rate.

### Heart Failure-Specific Considerations

- Positive pressure ventilation reduces LV preload and afterload — beneficial in decompensated HF; maintain PEEP 8–12 if pulmonary edema present
- RV afterload increases with every breath in positive pressure ventilation. In RV failure, keep mean airway pressure as low as possible; target lowest effective PEEP
- Post-CABG or post-valve patients: phrenic nerve injury from topical cooling → unilateral diaphragm paralysis → asymmetric lung expansion → apparent refractory atelectasis on CXR; diaphragm US is confirmatory (TFdi <20% on affected side)
- In LVAD patients on VC-AC: mean airway pressure directly affects RV preload and thus LVAD flows; rising Ppeak with falling LVAD flow suggests auto-PEEP or worsening RV failure — not just a vent problem

---

## 1.2 Pressure-Controlled Assist Control (PC-AC)

### Mechanics & Physiology

PC-AC delivers breaths to a set inspiratory pressure above PEEP, generating a decelerating flow waveform. Tidal volume is the **dependent variable** — it changes breath-to-breath based on compliance and resistance. This is fundamentally different from VC-AC: you are setting the driving pressure, not the volume.

```
Vt = (ΔP × Compliance) − (Resistance × Flow integral)
```

The decelerating flow waveform is physiologically more natural and reduces peak pressure compared to constant-flow VC-AC, but at the cost of volume guarantee.

### When to Prefer PC-AC

- Severe ARDS with Pplat >30 cmH2O on VC-AC despite Vt reduction to 4 mL/kg IBW
- Severe bronchospasm — decelerating flow allows more complete alveolar filling
- Significant patient-ventilator dyssynchrony that persists despite flow titration in VC-AC
- Bronchopleural fistula — pressure limit may reduce leak-driven volume loss
- Post-cardiac surgery patient with highly variable compliance (e.g., re-expansion after tamponade drainage)

### The Critical Danger of PC-AC in the HFICU

> 🚨 **Volume Alarm is Your Lifeline in PC-AC**
>
> When compliance drops suddenly (pneumothorax, mucus plug, bronchospasm), Vt drops silently unless your low-Vt alarm is set. **Set low Vt alarm at 5 mL/kg IBW** (e.g., 350 mL for 70 kg IBW patient).
>
> Conversely, when sedation is lightened or patient effort increases, Vt can exceed safe limits — patient's inspiratory effort ADDS to ventilator-delivered volume. This is **P-SILI** (patient self-inflicted lung injury).
>
> Watch for: RR >30, SpO2 declining, rising plateau trend → convert to VC-AC with neuromuscular blockade if P-SILI suspected (Brochard et al., *ICM* 2017). Note: the ATS 2024 and ESICM 2023 guidelines diverge on routine NMB use — see Section 3.5 for current evidence.

### PC-AC in Cardiogenic Shock / ECMO

- For patients on VA-ECMO with severe LV dysfunction: lung rest ventilation uses PC-AC with ΔP of 10–15 cmH2O, RR 8–12, PEEP 8–12 cmH2O
- Watch Vt trends closely — with improving ECMO flows and lung recruitment, compliance may improve rapidly and Vt may rise above intended targets
- Use PC-AC for ECMO lung rest only if you can monitor Vt continuously; otherwise VC-AC with very low Vt (2–4 mL/kg) is safer operationally

---

## 1.3 Pressure Support Ventilation (PSV)

### Mechanics & Physiology

PSV is a fully spontaneous mode — every breath is patient-initiated. The ventilator augments each effort with a set pressure above PEEP (PS level), and inspiration terminates when inspiratory flow falls below a threshold (typically 25% of peak flow). There is **no backup rate** — if the patient stops breathing, the ventilator does not deliver a breath.

### The PS Titration Problem

Many APPs set PS at 5 cmH2O for "weaning" and leave it. This is overly simplistic. **PS should be titrated to achieve a Vt of 6–8 mL/kg IBW and RR of 12–25.** Too-high PS supports respiratory muscles excessively and delays weaning. Too-low PS causes respiratory muscle fatigue and leads to rapid shallow breathing.

> **RSBI** (Rapid Shallow Breathing Index) = RR / Vt (in liters). RSBI >105 during an SBT predicts extubation failure with high sensitivity.

### When PSV Fails — The Hidden Traps

> ⚠️ **PSV Failure Scenarios**
>
> **INEFFECTIVE TRIGGERING:** In auto-PEEP states, the patient must first overcome auto-PEEP before the trigger threshold is reached. Each failed effort = wasted work. Solution: set PEEP to ~80% of measured auto-PEEP, or consider VC-AC.
>
> **DOUBLE TRIGGERING:** Patient effort outlasts the ventilator inspiratory time → second breath triggered immediately. Watch for double humps on flow waveform. Increase cycle-off threshold (e.g., 30–40% peak flow) or switch mode.
>
> **REVERSE TRIGGERING:** Diaphragm activation triggered BY ventilator inflation — a reflex seen in heavily sedated or paralyzed patients. Can cause patient-ventilator asynchrony even without conscious effort. Recognition requires esophageal manometry in most cases.
>
> **P-SILI IN CARDIAC PATIENTS:** Severe acute HF — high respiratory drive → large swings in pleural pressure → increases LV transmural pressure → worsens pulmonary edema. Intubation to control work of breathing is sometimes the right move.

### PSV in Post-Cardiac Surgery

- Most straightforward ventilated patients: goal is extubation within 6–8 hours; PSV 5–8/5 is appropriate once awakened and hemodynamically stable
- Exception: patients with sternal instability, post-tamponade, or post-repair of rupture — extubation criteria must account for cough and deep breathing demands on sternal closure
- For LVAD patients on PSV: unloaded RV may tolerate spontaneous breathing better than positive-pressure mandatory ventilation; trial of SBT is appropriate when hemodynamics stable and MCS optimized

---

## 1.4 SIMV — Why It Is Almost Always the Wrong Choice

SIMV synchronizes mandatory breaths with patient efforts and allows spontaneous breaths between them. In practice, the evidence is clear: **SIMV prolongs mechanical ventilation.**

> 🚨 **Why SIMV Fails**
>
> The respiratory muscles do not fatigue and recover on a breath-by-breath schedule. Alternating full support and unsupported breaths within the same minute creates variable load with no consistent rest or training effect.
>
> SIMV with PS adds complexity without benefit — you are now managing two variables (mandatory rate + PS level) when a single PS titration achieves the same goal more effectively.
>
> The Esteban 1995 NEJM trial demonstrated that daily SBT on PSV led to extubation **3x faster** than SIMV-based weaning.
>
> **Exception:** SIMV may be useful in specific neurological patients where breath-stacking risk is high and a rate floor is desired — discuss with neurocritical care.

---

## 1.5 Airway Pressure Release Ventilation (APRV)

### Conceptual Framework

APRV is a time-cycled pressure-control mode that spends the majority of the respiratory cycle at high continuous positive airway pressure (P-high), recruiting alveoli, while releasing to a low pressure (P-low) briefly to allow CO2 elimination. It is the **inverse of conventional ventilation** in terms of I:E ratio.

| Parameter | Typical Setting | Physiologic Goal |
|-----------|----------------|-----------------|
| P-high | 25–30 cmH2O | Sustained recruitment; alveolar stabilization |
| P-low | 0–5 cmH2O | Adequate expiratory flow for CO2 elimination |
| T-high | 4–6 seconds | Maximize recruitment time (80–90% of cycle) |
| T-low | 0.4–0.8 seconds | Expiratory flow terminates at 50–75% peak expiratory flow |

### The T-low Titration — The Most Misunderstood Setting

T-low should be set to allow expiratory flow to fall to **50–75% of peak expiratory flow** before the next P-high opens. This is the key distinction from CPAP.

- If T-low is too short: inadequate CO2 clearance
- If T-low is too long: alveolar de-recruitment defeats the purpose of APRV

Watch the expiratory flow waveform: the release breath should **not reach zero flow**. This is the signature of APRV — you are riding the lung's own expiratory effort before it fully collapses.

### APRV Evidence Update (2024–2026)

A small RCT (Zou et al., *CHEST* 2025; PMID: 39299389; n=40) using EIT demonstrated that APRV improved dorsal recruitment, V/Q matching, and respiratory compliance compared to low-Vt ventilation in moderate-severe ARDS — but this was a physiologic study, not powered for mortality. An earlier meta-analysis of 6 small RCTs (360 patients total; 2021) showed improved 28-day mortality (RR 0.66; 95% CI 0.47–0.94), but all studies were small and mostly single-center. The **APRVplus trial** (protocol published BMC Pulmonary Medicine 2024; PMID: 38783268), a multicenter RCT planning 840 patients across ≥35 hospitals in China, is ongoing and will provide the first definitive evidence on APRV in ARDS. **Until APRVplus results are available, APRV should be considered a rescue strategy rather than first-line ARDS management.**

### APRV: When to Use It and When to Abandon It

| Use APRV When... | Avoid or Abandon APRV When... |
|-----------------|------------------------------|
| Moderate-severe ARDS refractory to conventional VC-AC | Severe obstructive physiology (COPD, asthma) — air trapping guaranteed |
| De-recruitment loop: each recruitment maneuver followed by rapid de-recruitment | Elevated ICP — sustained high ITP reduces cerebral venous drainage |
| Patient is awake/semi-awake with preserved respiratory drive | Severe RV failure — P-high sustained > RVPP → RV impedes pulmonary flow |
| Secretion clearance is a primary problem (cough during release phase) | Hemodynamic instability requiring high vasopressors |
| Traditional prone + VC-AC has failed and ECMO is not yet available | Patient is paralyzed — APRV relies on spontaneous breathing for optimal benefit |

### APRV in the HFICU — Special Cautions

> 🚨 **RV and APRV: A Difficult Marriage**
>
> P-high of 28–30 cmH2O sustained for 80–90% of the cycle creates significant mean airway pressure. In RV failure, pulmonary hypertension, or post-cardiac surgery, this may:
> - Impair RV output by compressing pulmonary vasculature (West Zone I conditions)
> - Reduce LVAD preload by decreasing RV output to the left heart
> - Mask worsening RV function because the ventilator "splints" the chest
>
> If using APRV in an RV-at-risk patient: continuous CVP monitoring, PA catheter if available, frequent LVAD flow trend review, and low threshold to abandon APRV if mean LVAD flow drops >20% from baseline.

---

# Section 2: Patient-Ventilator Dyssynchrony — Recognition & Rescue

Dyssynchrony is underdiagnosed. Studies suggest **25–50% of mechanically ventilated patients** have significant dyssynchrony when waveforms are analyzed carefully. In the HFICU population with dynamic hemodynamics, dyssynchrony is both more common and more consequential.

---

## 2.1 Types of Dyssynchrony — A Waveform-Based Classification

### Flow Starvation (VC-AC)

The patient's inspiratory demand exceeds the set flow rate. The pressure waveform shows a **concave "scooped" appearance** during inspiration. The patient is trying to breathe faster than the vent delivers flow.

- **Fix:** Increase peak flow to 80–100 L/min OR switch to decelerating flow OR convert to PC-AC
- In cardiac patients: flow starvation increases work of breathing substantially, worsens oxygen consumption, and can precipitate myocardial ischemia in CAD patients

### Double Triggering

A single patient inspiratory effort triggers two ventilator cycles. On the flow waveform: a full delivered breath followed immediately by another with no expiratory pause. This creates **Vt stacking** — delivered volume can reach 2x the set Vt, causing lung injury.

- **Fix:** Increase Ti to match patient's neural inspiratory time, switch to PC-AC, or increase sedation if Vt stacking is causing injury

### Reverse Triggering

The diaphragm contracts in response to passive inflation — a reflex, not conscious effort. Seen in deeply sedated or recently paralyzed patients. Creates asynchrony without obvious distress.

> ⚠️ **Reverse Triggering — The Silent Injurer**
>
> Reverse triggering creates entrainment-disentrainment cycles. If diaphragm contraction occurs during the ventilator's expiration phase, the result is a brake-like eccentric contraction against the closing ventilator — potentially causing lung injury at normal Vt.
>
> **Clinical clue:** Rhythmic chest wall movement in a paralyzed patient, or "unexplained" dyssynchrony alarms in a heavily sedated patient.
>
> **Management:** Deepen sedation, re-paralysis (short-term), or switch to APRV where continuous pressure may reduce triggering threshold.

### Premature Cycling (Early Termination)

The ventilator cycles to expiration before the patient's neural inspiration is complete. Patient appears to be "fighting the vent" despite adequate sedation.

- **Fix in PC-AC/PSV:** Reduce cycle-off threshold (from 25% to 10–15% of peak flow)
- **Fix in VC-AC:** Increase Ti or reduce inspiratory flow rate

### Delayed Cycling (Late Termination)

The ventilator continues to inflate after neural inspiration ends. On pressure waveform: **spike at end of inspiration** (patient pushing against closed airway).

- **Fix in PSV:** Increase cycle-off threshold (e.g., 40–50% of peak flow)
- If cuff leak suspected: check cuff pressure (target 25–30 cmH2O); consider ETT exchange if leak persists

### Auto-PEEP Triggering Failure

In patients with significant auto-PEEP, the patient must generate negative pressure equal to auto-PEEP + set trigger sensitivity before the ventilator recognizes the breath. This creates massive **wasted effort** without vent response.

- **Detection:** Perform expiratory hold maneuver — the plateau pressure reading = auto-PEEP + set PEEP
- **Fix:** Apply extrinsic PEEP to ~80% of measured auto-PEEP; extend expiratory time; bronchodilators; reduce RR if permissible

---

## 2.2 Advanced Dyssynchrony Monitoring — Emerging Technologies

### Electrical Impedance Tomography (EIT)

EIT provides real-time, radiation-free bedside imaging of regional ventilation distribution. It can detect regional overdistension, pendelluft (intrapulmonary gas redistribution during dyssynchrony), and ventral-dorsal ventilation imbalance. EIT-guided PEEP titration and dyssynchrony identification are emerging clinical applications, though availability remains limited to specialized centers.

### AI-Powered Waveform Analysis

Machine learning algorithms for automated ventilator waveform analysis are in active development for detecting dyssynchrony events including double-triggering, flow starvation, and reverse triggering with higher sensitivity than clinical observation. These systems analyze pressure, flow, and volume waveforms continuously and can detect dyssynchrony in real-time. While several commercial systems are in clinical validation (2024–2025), none have yet demonstrated improved patient outcomes in RCTs. These tools may complement — but do not replace — clinician waveform assessment.

### Esophageal Manometry (Pes Monitoring)

Esophageal pressure monitoring remains the gold standard for assessing patient effort, transpulmonary pressure, and detecting occult dyssynchrony (particularly reverse triggering). The EPVent-2 trial (Beitler et al., *JAMA* 2019) did not show mortality benefit for esophageal pressure-guided PEEP titration in moderate-severe ARDS, but Pes monitoring remains invaluable for diagnosing complex dyssynchrony and guiding management in refractory cases.

---

## 2.3 Dyssynchrony Index and When to Act

Clinically significant dyssynchrony is generally defined as >10% of all breaths being asynchronous. Practical triggers for action include:

- Any double-triggering that results in Vt >2x set volume → **immediate intervention**
- Visible patient distress, accessory muscle use, or tracheal tug with >4 cmH2O negative pressure swings on airway pressure waveform
- SpO2 deterioration or escalating vasopressor requirements in a patient who was recently stable
- LVAD PI events correlated with vent cycles — suggests mean airway pressure excursions are driving suction episodes

---

# Section 3: Refractory Hypoxemia — Escalating Rescue Strategies

Refractory hypoxemia (PaO2 <60 mmHg or SpO2 <88% despite FiO2 1.0 and PEEP ≥15 cmH2O) requires a systematic rescue approach. In the HFICU, the cause is often mixed — cardiogenic pulmonary edema superimposed on ARDS physiology.

---

## 3.1 Systematic Failure Analysis Before Escalating

> 🔵 **HFICU Hypoxemia Differential (Before Escalating Rescue)**
>
> 1. **ETT malposition** — right mainstem intubation is the most common reversible cause. Always confirm with CXR.
> 2. **Unrecognized tension pneumothorax** — in post-cardiac surgery patients, can present subtly due to pericardial adhesions. US > CXR for rapid bedside diagnosis.
> 3. **Massive PE** — can present as refractory hypoxemia post-op. TTE or CTA if PE not excluded.
> 4. **LVAD-related North-South syndrome** — differential oxygenation between upper and lower extremities; cerebral NIRS drop. Not a ventilator problem.
> 5. **Dynamic mitral regurgitation** — in ischemic HF, worsening MR creates recurrent flash pulmonary edema. Optimize preload/afterload before escalating vent.
> 6. **Auto-PEEP with hyperinflation** — paradoxically worsens oxygenation by creating West Zone I conditions. Removing PEEP briefly may improve O2.
> 7. **Abdominal compartment syndrome** — IAP >20 mmHg causes diaphragm elevation, reduced FRC, and refractory hypoxemia. Check bladder pressure.

---

## 3.2 PEEP Optimization — Beyond the ARDSNet Tables

### The Problem with ARDSNet PEEP/FiO2 Tables

ARDSNet tables provide a population-based starting point, not an individualized PEEP target. A PEEP that opens alveoli in one patient may overdistend them in another with different chest wall compliance. The correct PEEP is the one that **maximizes alveolar recruitment while minimizing overdistension** — which requires either advanced monitoring or bedside physiology assessment.

> 🔵 **2024 ATS Guideline Update on PEEP**
>
> The ATS 2024 Clinical Practice Guideline (Qadir et al., *AJRCCM* 2024;209:24-36) provides a **conditional recommendation** for higher PEEP (without recruitment maneuvers) in moderate-severe ARDS, based on low-to-moderate certainty evidence. The ESICM 2023 guidelines (Grasselli et al., *ICM* 2023;49:727-759) make no specific recommendation for or against routine higher vs. lower PEEP, emphasizing individualized titration.
>
> **Bottom line:** Neither guideline endorses a fixed PEEP strategy. Individualized PEEP titration guided by driving pressure, compliance, and hemodynamics remains the standard of care.

### Driving Pressure and Mechanical Power — Key Ventilator Targets

> 🔵 **Driving Pressure (ΔP = Pplat − PEEP)**
>
> Driving pressure is the ventilator variable most strongly associated with survival in ARDS (Amato et al., *NEJM* 2015;372:747-755; PMID: 25693014). In a multilevel mediation analysis of 3,562 patients across 9 RCTs, a 7 cmH2O increase in ΔP was associated with a relative risk of 1.41 for mortality (p<0.001) — even within "protective" ventilation ranges. Changes in Vt or PEEP were only associated with survival if they resulted in a reduction in ΔP.
>
> **Target: ΔP <15 cmH2O.** Observational data consistently associate ΔP >15 cmH2O with ~19% increased mortality risk (HR 1.19; 95% CI 1.07–1.33). While no adequately powered RCT has confirmed a ΔP-limiting strategy (the STAMINA trial [Maia et al., *BJA* 2024; PMID: 39592365] was stopped early for slow enrollment after 214 of 500 planned patients), the physiologic rationale and observational evidence are strong enough that ΔP should be monitored as a primary safety target alongside Pplat.
>
> **Practical application:** If increasing PEEP raises ΔP, you are overdistending — back down. If increasing PEEP lowers ΔP, you are recruiting — continue. Use ΔP as the tiebreaker when PEEP titration decisions are ambiguous.

> 🔵 **Mechanical Power (MP)**
>
> Mechanical power quantifies total energy delivered to the respiratory system per minute, integrating Vt, pressures, respiratory rate, and flow into a single variable reflecting VILI risk (Serpa Neto et al., *ICM* 2018;44:1914-1922; PMID: 30291378). In 8,207 ICU patients, MP was independently associated with in-hospital mortality even at low tidal volumes (OR 1.70; 95% CI 1.32–2.18 when MP >17 J/min).
>
> **Target: MP <17 J/min.** This is the most widely cited clinical threshold, though the exact cutoff varies by patient size and lung compliance. Normalizing MP to compliance or well-aerated lung volume improves its predictive value (Cressoni et al., *ICM* 2023). No large RCT has yet tested an MP-limiting strategy for clinical outcomes — this remains a critical evidence gap.
>
> **Simplified calculation (VC-AC):**
> `MP (J/min) = 0.098 × RR × Vt × (Ppeak − ΔP/2)`

### Bedside PEEP Titration Without Esophageal Manometry

1. Perform incremental PEEP trial: increase PEEP by 2 cmH2O every 5–10 minutes (e.g., 10 → 12 → 14 → 16 cmH2O)
2. At each step, assess: SpO2, Pplat, driving pressure (ΔP = Pplat - PEEP), mechanical power, LVAD flows (if applicable), vasopressor requirements
3. Optimal PEEP = level at which SpO2 improves, ΔP stops increasing or decreases, hemodynamics remain stable
4. If ΔP **increases** with PEEP increase → you are overdistending, not recruiting. Back down.
5. If SpO2 improves but LVAD flows fall and BP drops → beneficial for lungs but harmful for RV. Find the balance or reconsider strategy.
6. **Track mechanical power** at each step — if MP exceeds 17 J/min, reassess Vt and RR in addition to PEEP

### Stress Index — Reading the Pressure Waveform for PEEP Titration

In volume-controlled ventilation with constant flow, the airway pressure waveform during inspiration should be linear. Deviations indicate:

| Waveform Shape (Constant Flow VC-AC) | Interpretation |
|--------------------------------------|----------------|
| Upward concavity (accelerating pressure rise) | Stress index >1 → progressive overdistension; PEEP too high or Vt too large |
| Linear (straight line) | Stress index ~1 → optimal recruitment-overdistension balance |
| Downward concavity (decelerating pressure rise) | Stress index <1 → ongoing recruitment during tidal breath; PEEP may be suboptimal |

> **Note:** Stress index requires constant-flow VC-AC to be interpretable. Spontaneous efforts invalidate this assessment.

### PEEP in Heart Failure Specifically

- **Cardiogenic pulmonary edema:** PEEP reduces preload and afterload. PEEP is therapeutic. Target PEEP 10–15 cmH2O.
- **RV failure (post-cardiac surgery, pulmonary HTN, massive PE):** PEEP increases RV afterload by compressing pulmonary vasculature. Target lowest effective PEEP. Prioritize oxygenation by other means (prone, iNO).
- **LVAD patients:** Rising PEEP reduces LVAD flows by reducing RV output to left heart. For each 2 cmH2O increase in PEEP, expect 0.1–0.2 L/min decrease in LVAD flow. Monitor PI trends.
- **Biventricular failure or ECMO:** PEEP titration must be done with hemodynamic monitoring; PA catheter or frequent POCUS is necessary.

---

## 3.3 Recruitment Maneuvers

### Sustained Inflation RM

CPAP at 40 cmH2O for 40 seconds. Effective at short-term alveolar recruitment but carries hemodynamic compromise and barotrauma risk. **NOT recommended** — the ART trial (Writing Group for the Alveolar Recruitment for ARDS Trial, *JAMA* 2017;318:1335-1345) demonstrated **increased mortality** with prolonged high-pressure recruitment maneuvers (≥35 cmH2O for ≥1 min) combined with high PEEP titration.

> 🔵 **2024 ATS & 2023 ESICM Guideline Agreement on Recruitment Maneuvers**
>
> Both ATS 2024 and ESICM 2023 guidelines **strongly recommend against** prolonged high-pressure recruitment maneuvers (≥35 cmH2O for ≥1 minute) based on moderate certainty evidence. This is one of the few points of complete agreement between the two guideline sets. Brief, lower-pressure RMs (e.g., 30 cmH2O for 30 seconds) have not been specifically studied in large RCTs but carry theoretical risk in the same direction.

> 🚨 **RM Contraindications in HFICU**
>
> Any patient with: active vasopressor dependence >0.2 mcg/kg/min norepinephrine equivalent, MAP <65, suspected pneumothorax, severe RV failure (CVP >18, PAPi <1), recent sternotomy within 24–48 hours.
>
> **Alternative:** Incremental PEEP titration (step-up by 2 cmH2O over 20–30 min) is safer in hemodynamically vulnerable patients and achieves sustained recruitment without acute hemodynamic stress.

### Prone Positioning in the HFICU

Prone positioning for moderate-severe ARDS (P/F <150) reduces mortality when maintained ≥16 hours per session (PROSEVA trial, Guérin et al., *NEJM* 2013). Both the **ATS 2024** (strong recommendation, moderate certainty for >12 hr/day in severe ARDS) and **ESICM 2023** (strong recommendation, high certainty for ≥16 consecutive hours in moderate-severe ARDS with P/F <150) guidelines endorse early prone positioning as a cornerstone of ARDS management. In the HFICU, the decision to prone is more complex:

| Factor | Prone Benefit | HFICU Concern | Practical Note |
|--------|--------------|----------------|----------------|
| Pulmonary edema | Redistributes dependent edema | May shift fluid to airway | Watch for secretion surge on turn |
| Post-CABG (sternotomy) | Generally safe if closure stable | Wound dehiscence, drain displacement | Coordinate with CT surgery; pad sternal wound |
| LVAD patient | May improve oxygenation | Driveline tension, console access | Use specialized foam padding; monitor driveline carefully |
| ECMO patient | Occasionally attempted | Circuit management, cannula stability | Requires dedicated team; specialized protocols |
| RV failure | Improves V/Q matching | RV preload may drop in prone | PA catheter or POCUS monitoring essential |
| Hemodynamic instability | May improve if hypoxemia is driver | Positional vasodilation | Acceptable MAP threshold: >65 on stable vasopressors |

### Awake Prone Positioning — Emerging Evidence

> 🔵 **Awake Prone Positioning in Non-Intubated Patients**
>
> A 2025 individual patient data meta-analysis of 14 RCTs (>3,000 patients) demonstrated that awake prone positioning in acute hypoxemic respiratory failure improves survival without intubation (OR 1.42), reduces intubation risk (OR 0.70), and reduces in-hospital mortality (OR 0.77) (Luo et al., *JAMA Internal Medicine* 2025; PMID: 40063016). Duration ≥10 hours/day within the first 3 days yielded the strongest benefit (OR 1.85 for survival without intubation).
>
> **Practical implications for HFICU:**
> - Consider awake prone positioning for non-intubated patients with hypoxemic respiratory failure on HFNC or NIV who are cooperative
> - Target ≥10 hours/day when tolerated; even shorter durations show benefit
> - Safe — no increase in serious adverse events in pooled analysis
> - **Caveat:** Nearly all evidence derives from COVID-19 populations; generalizability to non-COVID acute hypoxemic respiratory failure (including cardiogenic pulmonary edema) remains uncertain
> - In LVAD patients: consider driveline position and padding; feasibility depends on patient cooperation and driveline security
> - Post-sternotomy patients: assess wound stability before attempting; may be contraindicated in early post-operative period

---

## 3.4 Inhaled Pulmonary Vasodilators

### Inhaled Nitric Oxide (iNO)

iNO selectively vasodilates pulmonary vasculature only in ventilated alveoli (V/Q matching effect), reducing intrapulmonary shunt and improving oxygenation **without systemic vasodilation**. In the HFICU, iNO has a dual role:

- **Oxygenation rescue in ARDS/hypoxemia:** Typically 20–40 ppm. Assess response in 1–2 hours; non-responders (SpO2 improvement <10%) unlikely to benefit from continued use
- **RV afterload reduction:** iNO reduces PAP and improves RV function — critical in post-cardiac surgery RV failure, Protek Duo weaning, and biventricular support bridging

> ⚠️ **iNO Rebound Vasoconstriction**
>
> Discontinuing iNO abruptly after >24 hours causes rebound pulmonary vasoconstriction — sometimes worse than baseline — due to suppression of endogenous NO production.
>
> Wean stepwise: 40 → 20 → 10 → 5 → 4 → 3 → 2 → 1 ppm, with hemodynamic reassessment at each step.
> Bridge with sildenafil or inhaled iloprost when approaching discontinuation if PAP elevation is a concern.

### Inhaled Epoprostenol (iEPO)

Inhaled epoprostenol achieves similar pulmonary vasodilation to iNO and is substantially less expensive. Delivered via continuous nebulization (typically 50 ng/kg/min). Some systemic absorption occurs, which can cause mild systemic vasodilation — a consideration in vasoplegic states.

- Equivalent oxygenation improvement to iNO in ARDS
- Not as well-studied for post-cardiac surgery RV failure, but commonly used given cost profile
- Requires dedicated nebulizer in-circuit; ensure compatibility with heated humidifier

---

## 3.5 Neuromuscular Blockade in ARDS — Updated Evidence

### The ACURASYS-to-ROSE Evolution

The ACURASYS trial (Papazian et al., *NEJM* 2010) showed mortality benefit with 48-hour cisatracurium infusion in early severe ARDS. However, the **ROSE trial** (National Heart, Lung, and Blood Institute PETAL Network, *NEJM* 2019;380:1997-2008) — a larger, more rigorous multicenter RCT of 1,006 patients — found **no mortality benefit** of early continuous cisatracurium infusion versus usual care with lighter sedation targets.

Key differences explaining discordant results:
- ACURASYS used deep sedation in both arms; ROSE used lighter sedation in the control group
- The benefit in ACURASYS may have been driven by avoiding deep sedation-related harm in the control arm rather than a direct benefit of paralysis

### 2024 Guideline Discordance on NMB

> ⚠️ **ATS vs. ESICM Disagreement on NMB**
>
> - **ATS 2024**: Conditional suggestion **for** NMB in early severe ARDS (low certainty evidence)
> - **ESICM 2023**: Recommends **against** routine NMB in moderate-severe ARDS
>
> This discordance reflects differing interpretations of the ACURASYS and ROSE trial data. In practice, **NMB should not be used routinely** but remains appropriate in specific scenarios.

### When to Use NMB in the HFICU

| Indication | Rationale | Duration |
|-----------|-----------|----------|
| Severe dyssynchrony causing Vt stacking or P-SILI despite deep sedation | Eliminate patient effort to protect lungs | 24–48 hr, reassess |
| Refractory hypoxemia (P/F <80) during prone positioning | Optimize prone mechanics; prevent fighting vent | Duration of prone session |
| Abdominal compartment syndrome with vent-splinting | Reduce abdominal wall tone to improve compliance | Until decompression |
| Severe RV failure with dyssynchrony-driven hemodynamic instability | Eliminate negative-pressure swings that worsen RV loading | 24–48 hr |
| Post-cardiac arrest with shivering and refractory hypoxemia | Eliminate oxygen consumption from shivering | 24–48 hr |

**Cisatracurium** remains the preferred agent (organ-independent Hofmann elimination). Monitor with train-of-four; target 1–2 twitches. Discontinue as soon as clinical indication resolves — prolonged NMB increases risk of ICU-acquired weakness and ventilator-induced diaphragm dysfunction (VIDD).

---

## 3.6 Corticosteroids in ARDS — New Guideline Recommendation

> 🔵 **ATS 2024: Conditional Recommendation for Corticosteroids in ARDS**
>
> The ATS 2024 guideline update introduces a **new conditional recommendation** for corticosteroids in ARDS (moderate certainty evidence). This is the first time the ATS has formally recommended corticosteroids for ARDS in their practice guidelines, based on cumulative evidence from multiple RCTs including:
>
> - **DEXA-ARDS** (Villar et al., *Lancet Respiratory Medicine* 2020): Dexamethasone 20 mg × 5 days then 10 mg × 5 days in moderate-severe ARDS reduced ventilator-free days and mortality
> - **COVID-ARDS data** (RECOVERY, CoDEX, and others): Reinforced benefit of dexamethasone in ARDS
> - **Meta-analyses** (2020–2024): Consistent signal for reduced mortality and ventilator-free days
>
> **Practical application in HFICU:** Dexamethasone 20 mg IV daily × 5 days, then 10 mg IV daily × 5 days is a reasonable protocol for moderate-severe ARDS (P/F <200). Consider earlier initiation (within 14 days of ARDS onset). Use caution in: post-cardiac surgery patients at risk for wound infection, post-transplant patients already on immunosuppression (coordinate with transplant team), and patients with uncontrolled infection.

---

# Section 4: Obstructive Physiology — Auto-PEEP & Dynamic Hyperinflation

Auto-PEEP (intrinsic PEEP, air trapping) occurs when expiratory time is insufficient to allow complete lung emptying before the next breath begins. It is most common in obstructive disease but occurs in **any mechanically ventilated patient** with high respiratory rates, prolonged Ti, or high resistive loads.

---

## 4.1 Detection and Quantification

### Expiratory Hold Maneuver

Apply an expiratory pause (typically 0.5–2 seconds) at end-expiration. The airway pressure equilibrates to reflect total PEEP (set PEEP + auto-PEEP). Subtract set PEEP to isolate auto-PEEP.

> 🔵 **Auto-PEEP Measurement Caveats**
>
> - Only valid in **passively ventilated patients** — spontaneous efforts invalidate the measurement
> - Significantly underestimates true auto-PEEP in patients with dynamic airway collapse (trapped lung units not in communication with circuit)
> - More accurate than inspection alone, but esophageal manometry remains the gold standard
> - In LVAD patients: even 5 cmH2O of unrecognized auto-PEEP can reduce LVAD flows by creating sustained RV afterload elevation

---

## 4.2 Rescue Strategy for Dynamic Hyperinflation

> ⚡ **Acute Deterioration from Air Trapping — Immediate Steps**
>
> If a ventilated asthmatic or COPD patient acutely decompensates hemodynamically:
>
> 1. **DISCONNECT from the ventilator for 30–60 seconds.** Allow complete passive exhalation. Dramatic hemodynamic improvement is diagnostic of tension hyperinflation.
> 2. If improved after disconnection: reduce RR (target 10–14), extend Ti (I:E 1:4 or 1:5), accept permissive hypercapnia (pH >7.20), reduce Vt to 5–6 mL/kg IBW
> 3. Establish auto-PEEP (expiratory hold) and set extrinsic PEEP at 80% of auto-PEEP
> 4. Consider paralysis (cisatracurium) — active expiratory effort paradoxically worsens air trapping via dynamic airway closure
> 5. Maximize bronchodilation: continuous albuterol, magnesium 2g IV, IV epinephrine if near-arrest, ketamine for bronchodilation and sedation

### Permissive Hypercapnia in Obstructive Disease

In status asthmaticus and severe COPD exacerbations, the priority is protecting against tension hyperinflation, not normalizing PaCO2. Accept pH down to 7.20 with bicarbonate supplementation if needed. PaCO2 of 80–100 mmHg is acceptable if pH is maintained.

- **Contraindications:** Elevated ICP, right-to-left intracardiac shunt, severe pulmonary HTN, pre-existing severe metabolic acidosis
- In post-cardiac surgery COPD patients: CO2 retention post-op is common from diaphragm dysfunction + obstructive physiology; distinguish from true weaning failure by checking diaphragm ultrasound before escalating vent settings

---

## 4.3 Managing the Asthma Patient in the Cardiac ICU

A mechanically ventilated asthmatic in the HFICU (e.g., comorbid asthma + cardiogenic shock) presents specific challenges:

- **Ketamine:** Dissociative anesthetic with potent bronchodilator properties; 1–2 mg/kg IV push or infusion at 1–2 mg/kg/hr; hemodynamic stimulation (sympathomimetic) is beneficial in shock but may worsen ischemia in ACS
- **Heliox (70:30 or 80:20):** Lower density gas reduces turbulent flow resistance in large airways; temporarily improves Vt delivery and reduces work of breathing while bronchodilators take effect; not a definitive treatment
- **ECMO as bridge in near-fatal asthma:** VA or VV ECMO has been used in status asthmaticus with respiratory arrest to allow time for bronchospasm to resolve without ventilator-related lung injury; ELSO registry supports this as a rescue strategy

---

# Section 5: Heart Failure-Specific Ventilation Strategies

Mechanically ventilating a patient with severe heart failure is fundamentally different from ventilating a patient with isolated ARDS or pneumonia. The cardiopulmonary interaction is the dominant physiology, and vent settings that are "protective" by ARDS standards may be hemodynamically catastrophic.

---

## 5.1 Heart-Lung Interactions — The Framework

### Effect of Positive Pressure on the Right Heart

Positive pressure ventilation increases intrathoracic pressure (ITP), which directly compresses the right heart and pulmonary vasculature:

- **Increases RV afterload:** Alveolar vessel compression → increased PVR → increased RV work → RV dilation and potential failure
- **Reduces RV preload:** Increased ITP limits venous return; most pronounced with high PEEP and high tidal volumes
- **Ventricular interdependence:** Dilated RV shifts the interventricular septum leftward → impairs LV filling → reduces LV output
- **PAPi monitoring:** PAPi (PA pulse pressure / RA pressure) should be tracked in PA catheter patients; PAPi <1 indicates RV failure and intolerance of increasing ventilator support

### Effect of Positive Pressure on the Left Heart

- **Reduces LV afterload:** Increased ITP reduces the transmural pressure against which the LV contracts — equivalent to afterload reduction
- This is why PEEP is beneficial in cardiogenic pulmonary edema — it reduces LV afterload and increases cardiac output in a preload-independent failing LV
- **Reduces LV preload:** Reduced venous return reduces LVEDP and LVEDV — beneficial in volume overload, potentially harmful in hypovolemia
- The net LV effect of PEEP in HF is almost always beneficial until the patient becomes hypovolemic or RV failure supervenes

### The PEEP Sweet Spot in Biventricular Failure

> 🔵 **Balancing RV and LV Effects of PEEP**
>
> In biventricular failure or cardiogenic shock without MCS:
> - Start PEEP at 8–10 cmH2O
> - Monitor CVP, MAP, SvO2 (or lactate trend), LVAD flows if applicable
> - If MAP drops with PEEP increase → RV-predominant failure; reduce PEEP
> - If MAP improves with PEEP → LV predominant; PEEP is therapeutic
> - Ideal: PA catheter showing reduced PCWP and maintained CO with PEEP titration
>
> Most HFICU patients with biventricular failure will tolerate PEEP 8–12 cmH2O. Above 14–15 cmH2O, RV compromise becomes the limiting factor for most.

---

## 5.2 Cardiogenic Shock — Ventilating the Failing Heart

### Initial Management

In cardiogenic shock requiring intubation, your vent settings directly affect hemodynamics minute-to-minute. The goal is to reduce myocardial oxygen demand (work of breathing eliminated), support oxygenation, and use positive pressure therapeutically for afterload reduction.

| Parameter | Target | Rationale | Cardiogenic Shock Caveat |
|-----------|--------|-----------|--------------------------|
| Mode | VC-AC initially | Guarantees minute ventilation | PC-AC acceptable; SIMV avoid |
| Vt | 6–8 mL/kg IBW | Lung protective | Lower end (6 mL/kg) if pulmonary edema severe |
| RR | 16–20 initially | Maintain minute ventilation | Avoid high RR → auto-PEEP risk |
| PEEP | 8–12 cmH2O | Afterload reduction, edema clearance | Reduce if MAP drops (RV compromise) |
| FiO2 | SpO2 92–96% | Avoid hyperoxia | 100% initially post-intubation |
| Pplat target | ≤30 cmH2O | Lung protection | Non-negotiable even in shock |
| CO2 target | PaCO2 35–45 | Avoid hypocapnia (vasoconstriction) | Allow 45–55 if driving pressure limiting |

### Intubation-Associated Hemodynamic Collapse in Cardiogenic Shock

> 🚨 **Pre-Intubation Checklist in Cardiogenic Shock**
>
> Patients in cardiogenic shock tolerate intubation poorly. Anticipate and prevent:
>
> 1. **Vasopressor loading:** Norepinephrine 0.1–0.2 mcg/kg/min RUNNING before laryngoscopy
> 2. **Pre-oxygenate aggressively:** HFNC 60 L/min, CPAP or BiPAP if tolerated
> 3. **Drug choice:** Ketamine (1–2 mg/kg) preferred — maintains sympathetic tone; avoid etomidate in adrenal insufficiency; avoid propofol in shock (profound vasodilation)
> 4. **RSI with succinylcholine or rocuronium** (1.6 mg/kg); full paralysis reduces oxygen consumption 15–20%
> 5. **Post-intubation:** Expect immediate hemodynamic improvement as work of breathing eliminated, BUT also expect PEEP effect reducing venous return
> 6. **First vent breath may cause cardiovascular collapse** — have pushers ready: 1–2 mg phenylephrine, 200 mcg norepinephrine, 1L LR flush

---

## 5.3 Post-Cardiac Surgery Ventilation — Specific Protocols

### Fast-Track Extubation (Goal: 4–8 hours post-op)

Fast-track extubation reduces ICU LOS, sedation requirements, and pulmonary complications without increasing adverse events in appropriate patients.

| Extubation Readiness Criteria | Red Flags for Delayed Extubation |
|-------------------------------|----------------------------------|
| Awake, following commands, cooperative | Hemodynamic instability requiring vasopressor escalation |
| SpO2 >95% on FiO2 ≤0.40 with PEEP ≤5 | Active bleeding (chest tube output >200 mL/hr) |
| Adequate tidal volumes on PS 5/5 trial | Post-op MI or new significant dysrhythmia |
| Minimal secretions, intact cough | Reopening within 24 hours anticipated |
| Temperature >36°C | Significant phrenic nerve injury suspected |
| Chest tube output <100 mL/hr | New RV failure or hemodynamically significant tamponade |
| No planned return to OR | Persistent metabolic acidosis (pH <7.30) |

### Phrenic Nerve Injury After Cardiac Surgery

Phrenic nerve injury causing hemidiaphragm paralysis occurs in up to 20% of open cardiac surgeries using topical ice cooling. Right hemidiaphragm paralysis is most common.

- **Clinical presentation:** Failure to wean despite apparent readiness, paradoxical diaphragm movement, atelectasis refractory to repositioning, consistently poor SBT performance
- **Diagnosis:** Diaphragm ultrasound (TFdi <20% on affected side, absent excursion, compensatory hyperactivity of contralateral hemidiaphragm)
- **Management:** NIV or HFNC as bridge, respiratory physiotherapy, diaphragmatic pacing in severe bilateral cases, surgical plication for persistent symptomatic unilateral paralysis (typically considered after 6–12 months)
- **Prognosis:** ~54–60% of patients regain function; cold-injury has better prognosis than mechanical transection; most recovery within first year

---

## 5.4 LVAD Patients on Mechanical Ventilation

### The LVAD-Ventilator Interaction Matrix

| Ventilator Change | Expected LVAD Effect |
|-------------------|---------------------|
| Increase PEEP by 2 cmH2O | LVAD flow decreases 0.1–0.2 L/min (reduced RV output → reduced LV preload) |
| Increase Vt (more overdistension) | PI may rise (higher ITP compresses aorta → higher head pressure) |
| Develop auto-PEEP (air trapping) | Sustained PEEP effect → may cause PI events or suction events if LV underfilled |
| Switch to spontaneous breathing (PSV) | Often improves LVAD flows — lower mean airway pressure → better RV output |
| Start iNO | RV afterload decreases → RV output increases → LVAD preload improves → LVAD flow may increase |
| APRV (high P-high) | Sustained RV afterload increase → potential for reduced LVAD flows; close monitoring required |

### Weaning the LVAD Patient from Mechanical Ventilation

- No unique protocol required, but ensure: MAP goal 70–90 mmHg, LVAD speed optimized before SBT (suction risk during increased respiratory work)
- Increase LVAD speed if needed to maintain LVAD flows during spontaneous breathing trial
- Post-extubation HFNC is appropriate and preferred — modest CPAP effect may actually benefit by reducing LV transmural pressure
- Watch for LVAD PI events post-extubation — increased respiratory effort without positive pressure support can increase preload demand; early vasodilator adjustment may help

---

# Section 6: Ventilation on ECMO

Ventilator management on ECMO represents the most advanced application of these principles. The vent is no longer the primary gas exchange device — ECMO owns that role — and the vent's job changes from gas exchange support to **lung protection and recovery facilitation.**

---

## 6.1 VV-ECMO Ventilation — Lung Rest Strategy

### VV-ECMO Lung Rest Targets

The EOLIA trial (Combes et al., *NEJM* 2018) established the framework for VV-ECMO in severe ARDS, and a post-hoc Bayesian analysis demonstrated a high posterior probability of mortality benefit. The **ESICM 2023 guidelines** strongly recommend VV-ECMO in severe ARDS at experienced centers following the EOLIA protocol (strong recommendation, moderate certainty). The **ATS 2024 guidelines** offer a more cautious conditional recommendation (low certainty evidence).

Ultra-protective lung rest ventilation during ECMO aims to minimize ongoing VILI while maintaining some alveolar recruitment. Current evidence supports the targets below, which align with ELSO guidelines and post-EOLIA practice patterns:

> 🔵 **Ultra-Protective Ventilation on VV-ECMO**
>
> - **Vt:** 2–4 mL/kg IBW (some centers use ≤4 mL/kg; lower is generally preferred)
> - **RR:** 5–10 breaths/min
> - **PEEP:** 10–15 cmH2O (higher than off-ECMO to maintain open lung)
> - **FiO2:** 0.30–0.40 (avoid excessive O2 toxicity)
> - **Pplat target:** ≤25 cmH2O (≤24 cmH2O per EOLIA protocol)
> - **Driving pressure target:** ≤10 cmH2O (emerging as the critical safety target on ECMO)
> - **Mechanical power:** Minimize — target <10 J/min on ECMO when possible
> - **Mode:** VC-AC or PC-AC; APRV sometimes used for recruitment, but not universally adopted

### Monitoring Native Lung Recovery on VV-ECMO

- **Daily sweep gas reduction trials:** Reduce ECMO sweep gas flow to zero for 5–10 minutes while monitoring SpO2 and PaCO2 — tolerance indicates improving native lung function
- **P/F ratio on sweep gas off:** The most meaningful lung function assessment on VV-ECMO; target P/F >150–200 before considering decannulation
- **Lung compliance trend:** If Vt delivery improves on the same pressure settings over days → lung recovery
- **Diaphragm ultrasound:** Thickening fraction and excursion trends can document diaphragm recovery. VIDD risk on ECMO is high; early spontaneous breathing trials are appropriate when hemodynamically tolerated

---

## 6.2 VA-ECMO Ventilation — The Cardiac Arrest and Cardiogenic Shock Context

### Early Post-Cannulation Phase

| VA-ECMO Vent Setting | Rationale |
|---------------------|-----------|
| Mode: PC-AC | Decelerating flow; pressure limit safer in stiff, edematous lungs |
| P-high: 20–25 cmH2O above PEEP | Lung recruitment while limiting overdistension |
| PEEP: 8–12 cmH2O | Open lung strategy; also reduces LV preload (helps LV unloading) |
| RR: 12–16 | Maintain some ventilation; ECMO handling CO2 but vent contributes |
| FiO2: 0.40–0.60 | ECMO delivering O2; avoid hyperoxia to the native coronary circulation |
| Vt monitoring: 4–6 mL/kg IBW | Lung protection; adjust P-high accordingly |

### LV Distension on VA-ECMO — The Vent Cannot Fix This

> ⚠️ **LV Distension Warning**
>
> VA-ECMO improves systemic perfusion but does **NOT** unload the LV in patients with severe LV dysfunction. Blood enters the LV through bronchial and mitral inflow but cannot be ejected — LV distension occurs, causing pulmonary edema and elevated LVEDP.
>
> **Signs:** Rising PCWP, worsening hypoxemia despite optimal vent settings, new or worsening pulmonary infiltrates on CXR.
>
> **Fix: NOT a vent problem.** Solutions include: Impella placement for LV unloading (ECMELLA), increasing native LV function with inotropes, intra-aortic balloon pump, or atrial septostomy. Escalating PEEP will help momentarily but is not the solution.

### North-South Syndrome — Differential Oxygenation

In patients with recovering cardiac function on VA-ECMO with femoral return cannula, the native heart pumps hypoxic blood (due to pulmonary failure) into the aortic root, while ECMO returns well-oxygenated blood retrograde from the femoral artery.

- The ventilator cannot fully correct this — ECMO circuit reconfiguration (adding SVC or subclavian return cannula) is the primary fix
- Vent optimization contributes: maximize native lung oxygenation with highest FiO2 and recruit-first strategy; prone positioning may improve native pulmonary oxygenation sufficiently to shift the mixing point favorably
- **NIRS monitoring:** Right arm and cerebral NIRS lower than left arm NIRS confirms differential hypoxia

---

## 6.3 Weaning from ECMO — The Ventilator's Role

| ECMO Wean Phase | Vent Adjustment |
|-----------------|----------------|
| VV-ECMO: Reduce sweep gas 50% | Increase vent RR by 2–4; monitor PaCO2 |
| VV-ECMO: Reduce sweep to 1 L/min | Transition to standard lung-protective settings (6 mL/kg, PEEP 10–12) |
| VV-ECMO: Sweep gas off trial | VC-AC 6 mL/kg, PEEP 10, FiO2 0.60; check ABG at 10–15 min |
| VA-ECMO: Flow reduction to 1–2 L/min | Increase vasoactives for hemodynamic support; vent remains constant |
| ECMO decannulation | Extubation or SBT based on standard criteria; high threshold for early extubation post-decannulation |

---

# Section 7: Liberation from Mechanical Ventilation — Advanced Approach

The basics of SBT-based liberation are well-known. This section addresses the harder cases: the patient who fails repeated SBTs, the post-LVAD implant patient, the chronically ventilated HFICU patient, and extubation strategies for high-risk cardiac patients.

---

## 7.1 Repeated SBT Failure — Systematic Approach

A patient who fails multiple SBTs is not simply "not ready" — they have a **fixable problem.** The same patient failing the same way repeatedly tells you something about the mechanism.

| SBT Failure Pattern | Most Likely Cause and Fix |
|---------------------|--------------------------|
| Fails within 10–15 min: rapid SpO2 drop | Underlying pulmonary edema; optimize diuresis, add CPAP post-extubation plan |
| Fails within 10–15 min: hemodynamic collapse | SBT-induced hemodynamic stress; assess RV function; consider post-extubation NIV |
| Fails within 30–60 min: respiratory acidosis | Weak respiratory muscles (phrenic injury, ICU-acquired weakness, COPD); diaphragm US |
| Fails consistently at RSBI >105 | Respiratory muscle weakness or intrinsic lung dysfunction; rehabilitation focus |
| Passes SBT but fails after extubation (re-intubation within 72 hr) | Secretion clearance issue OR upper airway dysfunction; consider tracheostomy |
| Fails SBT with new ischemic EKG changes or troponin bump | SBT-induced demand ischemia; optimize CAD therapy, reassess extubation timing |

### The SBT-Induced Cardiac Stress Response

Spontaneous breathing creates negative pleural pressure with each breath, which increases LV transmural pressure (equivalent to increasing afterload) and increases venous return (preload). In a patient with significant LV dysfunction, this is equivalent to a **cardiac stress test** — and it can unmask significant systolic or diastolic dysfunction.

> 🔵 **Cardiac SBT Assessment**
>
> Consider performing SBT with PA catheter in place for patients with: EF <30%, prior SBT failure with hemodynamic changes, known diastolic dysfunction with PHT, suspected cardiac cause of weaning failure.
>
> **Diagnostic criteria for cardiac SBT failure:**
> - PCWP rise >18 mmHg during SBT
> - New S3 or pulmonary crackles developing during SBT
> - SpO2 drop with concurrent BP elevation (flash pulmonary edema pattern)
>
> **Treatment:** Diuresis to dry BNP target before next SBT, afterload reduction optimization, consider early tracheostomy for planned rehabilitation without repeated intubation.

---

## 7.2 Post-Extubation Management in Cardiac Patients

### High-Flow Nasal Cannula (HFNC) After Extubation

HFNC provides significant respiratory support and modest CPAP effect (~1–2 cmH2O per 10 L/min of flow). Multiple RCTs have established HFNC as a standard post-extubation strategy:

- **FLORALI trial** (Frat et al., *NEJM* 2015): HFNC reduced intubation rates and 90-day mortality vs. standard O2 in acute hypoxemic respiratory failure
- **Hernández et al., *JAMA* 2016**: HFNC non-inferior to NIV for preventing reintubation in high-risk patients post-extubation
- **ATS/ESICM 2024 alignment**: Both guidelines support HFNC or prophylactic NIV for high-risk extubations

In cardiac patients, HFNC post-extubation:

- Reduces work of breathing (heated, humidified gas reduces nasal airway resistance)
- Provides modest LV afterload reduction through CPAP effect — beneficial in HF patients
- Maintains upper airway patency — especially important in obese patients with sleep apnea (common in HF population)
- Safe for LVAD patients post-extubation: the CPAP effect may modestly reduce LVAD flows, but this is typically clinically insignificant
- **Consider HFNC as the default post-extubation support** for all HFICU patients unless contraindicated (e.g., high aspiration risk, facial trauma)

### NIV as a Bridge After Extubation

Prophylactic NIV (BiPAP) after planned extubation reduces re-intubation rates in high-risk patients. High-risk criteria in HFICU include: EF <30%, prior SBT-induced PCWP elevation, BMI >35, prior extubation failure, cardiogenic pulmonary edema as primary indication for intubation.

- **Protocol:** BiPAP 10/5 cmH2O immediately post-extubation; titrate to comfort; target initial period of 4–8 hours; wean to HFNC or low-flow O2 as tolerated
- **Caution:** Post-CABG patients with sternal wound — coughing into NIV mask may not be well tolerated; assess sternotomy integrity before applying

---

## 7.3 Tracheostomy Decision in the HFICU

### When to Recommend Early Tracheostomy

Early tracheostomy (within 7–10 days) is appropriate when 2 or more of the following are present:

- Expected prolonged ventilation >14 days based on clinical trajectory
- Significant secretion management problem (suctioning >q2h, recurrent mucus plugging, failed bronchoscopic clearance)
- LVAD patient with anticipated HFICU stay >2 weeks (tracheostomy dramatically improves comfort, mobility, and communication for driveline management)
- Post-transplant patient with rejection episode requiring prolonged support
- Recurrent aspiration in ICU-acquired weakness patient with intact cardiac recovery
- Patient or family preference for wakeful, communicative state during prolonged critical illness

### Tracheostomy and ECMO

Tracheostomy in the presence of ECMO anticoagulation is high-risk but not absolutely contraindicated. PDT (percutaneous dilational tracheostomy) is increasingly performed in ECMO patients with appropriate anticoagulation bridging (hold heparin, target ACT <150 for procedure, restart 4–6 hours post-procedure). Surgical tracheostomy is preferred when available. Full discussion with perfusionist and cardiac surgery team is mandatory.

---

# Section 8: Rescue Modes & Emerging Ventilatory Strategies

---

## 8.1 High-Frequency Oscillatory Ventilation (HFOV)

### Mechanism

HFOV delivers very small tidal volumes (1–3 mL/kg) at extremely high frequencies (3–15 Hz), oscillating around a fixed mean airway pressure. Gas exchange occurs by multiple non-convective mechanisms (asymmetric velocity profiles, molecular diffusion, collateral flow). HFOV maintains near-constant lung volume, potentially minimizing atelectrauma.

> ⚠️ **HFOV in 2026 — Where Does It Stand?**
>
> The OSCAR and OSCILLATE trials (2013) failed to show benefit of HFOV over conventional ventilation in moderate-severe ARDS, and OSCILLATE was stopped early for harm (increased mortality) in the HFOV group. Both the **ATS 2024** and **ESICM 2023** guidelines **strongly recommend against** routine HFOV use in ARDS (high certainty evidence) — one of the strongest points of agreement between the two guideline sets.
>
> **Current role:** HFOV is considered a last-resort rescue strategy when all other options — including prone positioning, NMB, inhaled vasodilators, and ECMO — have failed or are unavailable. It should **NOT** be used as first-line or routine ARDS management. No new evidence since OSCAR/OSCILLATE has changed this position.
>
> In HFICU: HFOV is particularly poorly suited for patients with any RV compromise — the very high mean airway pressures (30–35 cmH2O) routinely needed are catastrophic for failing RVs.

---

## 8.2 Neurally Adjusted Ventilatory Assist (NAVA)

### Concept

NAVA uses a signal from the crural diaphragm (via esophageal catheter with bipolar electrodes) to trigger and cycle the ventilator. The electrical activity of the diaphragm (Edi) drives ventilator support proportional to neural drive. NAVA virtually eliminates dyssynchrony from the trigger mechanism.

| NAVA Advantage | HFICU Limitation |
|----------------|-----------------|
| Eliminates trigger dyssynchrony | Requires Edi catheter placement; additional procedure in anticoagulated patients |
| Proportional support reduces respiratory muscle fatigue cycles | Not available on all ventilators in most HFICUs |
| Better-preserved diaphragm function vs standard PSV | If diaphragm is paralyzed (phrenic injury), no Edi signal — mode non-functional |
| Auto-PEEP sensing not required (diaphragm overcomes it naturally) | In heavy sedation, Edi signal may be suppressed |
| Useful in weaning failure from dyssynchrony | Limited evidence in cardiogenic shock context |

NAVA is most appropriate when: repeated SBT failure appears dyssynchrony-driven, patient has high respiratory drive, conventional trigger sensitivity optimization hasn't resolved asynchrony, or diaphragm function is intact but patient-vent interaction is the limiting issue.

---

## 8.3 Extracorporeal CO2 Removal (ECCO2R)

ECCO2R uses a low-flow ECMO circuit (typically 200–800 mL/min) to remove CO2 without providing meaningful O2 support. It is not VV-ECMO — it does not treat hypoxemia. Its theoretical role includes:

- Allow extreme reduction in respiratory rate and Vt in ARDS (ultra-protective ventilation without hypercapnia)
- Provide CO2 buffer in refractory obstructive disease without requiring full ECMO
- Enable SBT by offloading CO2 work in patients with severe respiratory muscle weakness

> 🚨 **ECCO2R — Critical Evidence Update (REST and VENT-AVOID Trials)**
>
> **The REST trial** (McNamee et al., *JAMA* 2021;326:1013-1023; PMID: 34463700) — a multicenter RCT at 51 UK ICUs (412 patients) — was **stopped early for futility**. ECCO2R showed:
> - **No mortality benefit:** 90-day mortality 41.5% vs. 39.5% (RR 1.05; 95% CI 0.83–1.33)
> - **Fewer ventilator-free days** in the ECCO2R group (7.1 vs. 9.2 days; p=0.02)
> - **Significantly more serious adverse events:** 31% vs. 9%, including **intracranial hemorrhage in 4.5% vs. 0%**
>
> **The VENT-AVOID trial** (*AJRCCM* 2024) in COPD exacerbations was also stopped early (113 of 180 patients) with no improvement in ventilator-free days.
>
> **ESICM 2023 guidelines recommend against ECCO2R outside of RCTs.** A secondary analysis of REST (*NEJM Evidence*) suggested patients with ventilatory ratio ≥3 might benefit (posterior probability 82%), but this is hypothesis-generating only.

In the HFICU, ECCO2R has a very limited niche given these results. Its use should be restricted to highly selected patients (e.g., potential ECCO2R responders with high ventilatory ratio) within a clinical trial or with explicit multidisciplinary discussion of the risk-benefit profile. Its anticoagulation requirement and serious bleeding risk make it particularly concerning in post-cardiac surgery patients.

---

## 8.4 Awake ECMO and Extubation on ECMO

"Awake ECMO" refers to VV-ECMO support without mechanical ventilation — the patient breathes spontaneously while ECMO manages gas exchange. This approach has several advantages in the HFICU:

- Eliminates VILI entirely during severe ARDS recovery phase
- Preserves diaphragm function (VIDD is a major cause of difficult-to-wean ECMO patients)
- Allows earlier rehabilitation, ambulation, and family interaction
- May reduce ICU delirium from reduced sedation requirements

> 🔵 **Awake ECMO Requirements**
>
> Highly cooperative patient; reliable airway (tracheostomy preferred); stable ECMO circuit; ECMO team expertise; individual nursing ratios adequate for continuous monitoring.
>
> **Not appropriate for:** patients with high aspiration risk, hemodynamically unstable VA-ECMO, patients requiring deep sedation for other reasons, or institutions without dedicated ECMO nursing competency.

---

# Section 9: Rapid Reference — Decision Frameworks

---

## 9.1 Escalating Hypoxemia Algorithm

Use this sequential framework when SpO2 is persistently <88% despite initial ventilator optimization.

| Step | Action | Time Frame | If Fails |
|------|--------|------------|----------|
| 1 | Confirm ETT position (CXR), rule out pneumothorax (US), suction/bronchoscopy for mucus plug | 0–30 min | Step 2 |
| 2 | Optimize PEEP (titrate to driving pressure; target ΔP <15, MP <17 J/min) | 30–60 min | Step 3 |
| 3 | **Prone positioning ≥16 hr if P/F <150** (strong recommendation, ATS 2024 + ESICM 2023) | 16 hr cycle | Step 4 |
| 4 | Inhaled vasodilator (iNO 20–40 ppm or inhaled epoprostenol) | 1–2 hr trial | Step 5 |
| 5 | Consider NMB if severe dyssynchrony, P-SILI, or refractory hypoxemia during prone | 24–48 hr | Step 6 |
| 6 | APRV if not contraindicated by RV failure or obstruction | 4–8 hr trial | Step 7 |
| 7 | ECMO consultation — VV-ECMO if P/F <80 despite optimal strategy, or pH <7.15 from hypercapnia | Urgent | ECMO |

> **Note on algorithm changes (2024–2026):** Prone positioning has been elevated above recruitment maneuvers in this algorithm based on ATS 2024 and ESICM 2023 guidelines. Prolonged high-pressure recruitment maneuvers (≥35 cmH2O for ≥1 min) are **no longer recommended** (strong recommendation against, both guidelines). NMB has been added as an explicit step for specific indications. Corticosteroids (dexamethasone) should be considered early for moderate-severe ARDS per ATS 2024 conditional recommendation (see Section 3.6).

---

## 9.2 Hemodynamic Instability During Ventilator Change

Any acute hemodynamic deterioration temporally linked to a vent change should be treated with high suspicion for a vent-related cause **before escalating vasopressors.**

| Scenario | Most Likely Vent Cause + Fix |
|----------|------------------------------|
| BP drops after PEEP increase | Reduced venous return OR RV failure from increased afterload → reduce PEEP, fluid bolus, reassess RV with POCUS |
| BP drops after mode change to APRV | Sustained high ITP → venous return compromise → reduce P-high by 2–4 cmH2O, extend T-low |
| LVAD flows drop suddenly after vent change | Auto-PEEP developing or PEEP too high → expiratory hold to check auto-PEEP; reduce PEEP if appropriate |
| SpO2 drops after extubation | Upper airway obstruction, mucus plug, or flash pulmonary edema → non-invasive intervention first; reintubate if not correcting within 10–15 min |
| Worsening EKG, troponin rise after extubation | SBT-induced demand ischemia → reintubate and plan cardiac optimization before re-attempt |
| pH drops suddenly on ECMO after sweep gas reduction | CO2 retention → temporarily restore sweep gas; re-evaluate readiness for wean |

---

## 9.3 Vent Settings at a Glance by Patient Context

| Patient Context | Mode | Vt | ΔP Target | PEEP | MP Target | Key Special Consideration |
|-----------------|------|-----|-----------|------|-----------|--------------------------|
| Standard ARDS, no HF | VC-AC | 6 mL/kg IBW | <15 cmH2O | Per ARDSNet table | <17 J/min | Prone if P/F <150; dexamethasone per ATS 2024; iNO if RV strain |
| Cardiogenic pulmonary edema | VC-AC | 6–8 mL/kg IBW | <15 cmH2O | 10–14 cmH2O (therapeutic) | <17 J/min | PEEP = afterload reduction; watch for RV compromise if PHT present |
| Cardiogenic shock, MCS pending | VC-AC | 6–7 mL/kg IBW | <15 cmH2O | 8–10 cmH2O | <17 J/min | Pre-intubation vasopressor mandatory; NMB post-intubation if needed |
| Post-CABG, uncomplicated | VC-AC → PSV | 6–8 mL/kg IBW | N/A | 5–8 cmH2O | N/A | Fast-track; SBT at 4–6 hr; diaphragm US if weaning difficulty |
| Post-LVAD implant | VC-AC / PC-AC | 6–7 mL/kg IBW | <15 cmH2O | 8–10 cmH2O | <17 J/min | RV failure risk; minimize PEEP if CVP rising; iNO if RV support needed |
| VV-ECMO, lung rest | VC-AC or PC-AC | 2–4 mL/kg IBW | ≤10 cmH2O | 10–15 cmH2O | <10 J/min | Ultra-protective; FiO2 0.40; watch for VIDD; consider awake ECMO early |
| VA-ECMO, cardiogenic shock | PC-AC | 4–6 mL/kg IBW | ≤10 cmH2O | 8–12 cmH2O | <10 J/min | LV distension → ECMELLA; North-South → circuit reconfiguration |
| Status asthmaticus | VC-AC | 5–6 mL/kg IBW | <15 cmH2O | 80% of auto-PEEP | <17 J/min | Permissive hypercapnia pH >7.20; disconnect if tension hyperinflation |
| COPD exacerbation | VC-AC | 6–8 mL/kg IBW | <15 cmH2O | 5–8 cmH2O (match auto-PEEP) | <17 J/min | Long Ti forbidden; I:E 1:4 minimum; NAVA if trigger failure |
| Post-transplant early | VC-AC | 6 mL/kg IBW | <15 cmH2O | 8–10 cmH2O | <17 J/min | Denervated heart; volume-sensitive; early diuresis; watch for rejection-induced pulm edema |


---

# Key References & Evidence Base

This protocol is informed by the following landmark trials, guidelines, and systematic reviews. References are organized by topic and include PubMed IDs (PMIDs) where available.

## Practice Guidelines

1. **ATS 2024 ARDS Guideline Update:** Qadir N, Sahetya S, Munshi L, et al. An Update on Management of Adult Patients with Acute Respiratory Distress Syndrome: An Official ATS Clinical Practice Guideline. *Am J Respir Crit Care Med* 2024;209(1):24-36.
2. **ESICM 2023 ARDS Guidelines:** Grasselli G, Calfee CS, Camporota L, et al. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. *Intensive Care Med* 2023;49(7):727-759.
3. **ATS/ESICM/SCCM 2017 Mechanical Ventilation Guideline:** Fan E, Del Sorbo L, Goligher EC, et al. An Official ATS/ESICM/SCCM Clinical Practice Guideline: Mechanical Ventilation in Adult Patients with ARDS. *Am J Respir Crit Care Med* 2017;195(9):1253-1263.

## Lung-Protective Ventilation & ARDS

4. **ARDSNet:** Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes for ALI and ARDS. *NEJM* 2000;342:1301-1308.
5. **Driving Pressure:** Amato MBP, Meade MO, Slutsky AS, et al. Driving pressure and survival in ARDS. *NEJM* 2015;372:747-755. PMID: 25693014.
6. **STAMINA Trial:** Maia IS, et al. Driving pressure-limited strategy in moderate-severe ARDS. *Br J Anaesth* 2024. PMID: 39592365.
7. **Mechanical Power:** Serpa Neto A, et al. Mechanical power of ventilation is associated with mortality in critically ill patients. *Intensive Care Med* 2018;44:1914-1922. PMID: 30291378.
8. **ART Trial:** Writing Group for the Alveolar Recruitment for ARDS Trial. Effect of lung recruitment and titrated PEEP vs low PEEP on mortality in ARDS. *JAMA* 2017;318:1335-1345.
9. **EPVent-2:** Beitler JR, et al. Effect of titrating PEEP with esophageal pressure-guided strategy vs empirical high PEEP-FiO2 in ARDS. *JAMA* 2019;321:846-857.

## Prone Positioning

10. **PROSEVA:** Guérin C, Reignier J, Richard JC, et al. Prone positioning in severe ARDS. *NEJM* 2013;368:2159-2168.
11. **Awake Prone IPD Meta-Analysis:** Luo J, et al. Awake prone positioning in acute hypoxemic respiratory failure: individual patient data meta-analysis. *JAMA Internal Medicine* 2025. PMID: 40063016.

## Neuromuscular Blockade

12. **ACURASYS:** Papazian L, Forel JM, Gacouin A, et al. Neuromuscular blockers in early ARDS. *NEJM* 2010;363:1107-1116.
13. **ROSE Trial:** National Heart, Lung, and Blood Institute PETAL Clinical Trials Network. Early neuromuscular blockade in ARDS. *NEJM* 2019;380:1997-2008.

## ECMO

14. **EOLIA:** Combes A, Hajage D, Capellier G, et al. Extracorporeal membrane oxygenation for severe ARDS. *NEJM* 2018;378:1965-1975.

## ECCO2R

15. **REST Trial:** McNamee JJ, Gillies MA, Barrett NA, et al. Effect of lower tidal volume ventilation facilitated by ECCO2R vs standard care on 90-day mortality in AHRF. *JAMA* 2021;326:1013-1023. PMID: 34463700.
16. **VENT-AVOID:** ECCO2R in COPD exacerbations. *AJRCCM* 2024.

## Corticosteroids in ARDS

17. **DEXA-ARDS:** Villar J, et al. Dexamethasone treatment for the ARDS: a multicentre, randomised controlled trial. *Lancet Respir Med* 2020;8:267-276.

## Rescue Modes

18. **OSCAR:** Young D, et al. High-frequency oscillation for ARDS. *NEJM* 2013;368:806-813.
19. **OSCILLATE:** Ferguson ND, et al. High-frequency oscillation in early ARDS. *NEJM* 2013;368:795-805.
20. **APRVplus Trial (ongoing):** Protocol in *BMC Pulmonary Medicine* 2024. PMID: 38783268.
21. **APRV EIT Study:** Zou X, et al. APRV vs low Vt ventilation in moderate-severe ARDS. *CHEST* 2025. PMID: 39299389.

## Dyssynchrony & Monitoring

22. **P-SILI Concept:** Brochard L, Slutsky A, Pesenti A. Mechanical ventilation to minimize progression of lung injury in acute respiratory failure. *Am J Respir Crit Care Med* 2017;195:438-442.

## Liberation & Post-Extubation

23. **FLORALI:** Frat JP, Thille AW, Mercat A, et al. High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure. *NEJM* 2015;372:2185-2196.
24. **SBT Weaning:** Esteban A, et al. A comparison of four methods of weaning patients from mechanical ventilation. *NEJM* 1995;332:345-350.

---
_Last updated: March 2026 · HVI ICU APP Team · Evidence review current through March 2026_
_Key guideline sources: ATS 2024, ESICM 2023, ELSO Guidelines_