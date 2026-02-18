### Advanced Ventilator Modes & Rescue Strategies: A Deep-Dive for Advanced Practice Providers

## Overview
This protocol is designed for advanced practice providers who are fluent in basic mechanical ventilation and need a deeper framework for managing refractory respiratory failure, complex heart-lung interactions, and ventilator dyssynchrony. It covers the physiology, clinical decision-making, and rescue escalation strategies beyond standard ARDSNet protocols — with specific emphasis on the cardiac ICU patient population.

---

## Part I: Advanced Ventilator Mode Physiology

Understanding the fundamental difference between **control variables** (what the ventilator guarantees) and **target variables** (what the clinician sets) is critical before choosing any mode. Every mode is a combination of two decisions: what is *controlled* (volume vs. pressure) and what *triggers* the breath (time vs. patient effort).

---

### 1. Volume-Controlled Assist Control (VC-AC)

**What the vent guarantees:** Tidal volume
**What varies:** Peak airway pressure

**Deep physiology:**
In VC-AC, flow is constant and square-wave by default (though decelerating waveforms are available). The ventilator delivers a fixed volume regardless of patient effort or lung compliance. Because volume is fixed, **any change in compliance or resistance will directly alter peak and plateau pressures** — making pressure monitoring the safety parameter.

**Key clinical nuances:**
- The **inspiratory flow rate** setting directly determines I:E ratio and patient comfort. If flow is too low relative to patient demand, the patient "fights" for air — double-triggering and flow starvation result. Increase flow to 60–80 L/min or switch to a decelerating waveform.
- **Decelerating waveform** (ramp) lowers peak pressure and improves gas distribution compared to square-wave, but increases mean airway pressure — relevant in RV failure patients.
- In stiff lungs (ARDS, pulmonary edema), the same Vt generates much higher pressures. **Monitor driving pressure (Pplat − PEEP)** as the primary safety signal, not peak pressure alone.
- Post-cardiac surgery patients with decreased chest wall compliance (sternal closure, post-bypass inflammation) will have elevated Pplat that may not represent true alveolar overdistension. Consider esophageal pressure monitoring to assess true transpulmonary driving pressure.

**When VC-AC fails:**
- Pplat consistently >30 cmH2O despite minimum Vt (4 mL/kg IBW) → consider PC-AC or APRV
- Severe dyssynchrony despite flow and rate optimization → consider pressure-targeted modes

---

### 2. Pressure-Controlled Assist Control (PC-AC)

**What the vent guarantees:** Inspiratory pressure (above PEEP)
**What varies:** Tidal volume

**Deep physiology:**
In PC-AC, the ventilator delivers a decelerating flow until the set inspiratory pressure is reached and maintained for the set inspiratory time. **Tidal volume becomes the dependent variable** — determined by:

> Vt = Driving Pressure × Respiratory System Compliance

This means **as compliance improves (e.g., resolution of pulmonary edema), Vt will increase** without any ventilator adjustment. This is a critical danger: a patient improving on PC-AC can generate progressively larger tidal volumes → P-SILI (patient self-inflicted lung injury) or volutrauma.

**Key clinical nuances:**
- Always monitor delivered Vt on PC-AC, not just pressure. Set a Vt high alarm at 8–9 mL/kg IBW.
- The decelerating flow waveform is inherent to PC-AC — lowers peak pressure versus VC-AC at the same mean airway pressure and improves gas distribution in heterogeneous lungs.
- In **acute cor pulmonale** or **RV-dominant heart failure**, PC-AC may be preferred because it caps peak pressures more reliably and protects the RV from acute pressure spikes.
- **Inspiratory time (Ti)** is set explicitly in PC-AC (not derived from flow as in VC-AC). Mismatch between set Ti and patient neural Ti is a major source of dyssynchrony.

**When PC-AC fails:**
- Rising Vt despite fixed driving pressure (improving compliance) → requires active down-titration of pressure or mode change
- Highly variable patient effort → volume guarantee modes (PRVC, volume-assured) may be safer

---

### 3. Pressure-Regulated Volume Control (PRVC) / Adaptive Pressure Ventilation

**What the vent guarantees:** Target tidal volume, delivered via pressure control
**What varies:** The inspiratory pressure is automatically adjusted breath-to-breath

**Deep physiology:**
PRVC is a **dual-control mode** — it uses PC-AC breath delivery (decelerating flow) but automatically titrates the inspiratory pressure each breath to achieve a target Vt. The vent calculates compliance from the prior breath and adjusts pressure accordingly.

**Key clinical nuances:**
- Provides the lung-distribution advantages of pressure control with the volume guarantee of volume control — the "best of both worlds" in stable, passively ventilated patients.
- **Critical hazard in spontaneously breathing patients:** Strong patient effort contributes to volume delivery. The vent perceives "volume achieved easily" → decreases driving pressure → patient must work even harder to maintain the same volume. This progressive effort escalation can drive P-SILI without obvious alarm.
- Best used in **sedated or paralyzed patients** where patient effort is suppressed and compliance is the only variable.
- Not appropriate in patients with highly variable respiratory drive without close Vt trend monitoring.

---

### 4. Pressure Support Ventilation (PSV)

**What the vent guarantees:** A pressure boost above PEEP for every patient-triggered breath
**What varies:** Respiratory rate, Vt, inspiratory flow — all patient-determined

**Deep physiology:**
PSV is a **fully spontaneous mode** — no mandatory breaths. The patient determines rate and Ti. The vent provides a set pressure assist above PEEP when it detects effort, and cycles off when inspiratory flow drops to a threshold percentage of peak flow (typically 25% — the **cycle-off criterion**).

**Key clinical nuances:**
- **Cycle-off threshold** is adjustable on most modern vents. In obstructive disease, high airway resistance prevents flow from dropping to 25% → the vent holds inspiration too long → patient actively exhales against the vent. **Increase cycle-off to 40–50%** to terminate inspiration earlier.
- **P0.1** (airway occlusion pressure at 100 ms) is the best single bedside measure of respiratory drive during PSV. Target P0.1 of 1.5–3.5 cmH2O. Values >4 cmH2O indicate excessive drive and fatigue risk; <1 cmH2O indicates over-support.
- In **cardiac ICU patients**, PSV reduces the large negative intrathoracic pressure swings that increase LV afterload — relevant in cardiogenic pulmonary edema where excessive inspiratory effort worsens cardiac function.

| PSV Level | Clinical Implication |
|-----------|---------------------|
| ≥15 cmH2O | Near full support; appropriate in acute phase |
| 8–14 cmH2O | Partial support; transitional weaning phase |
| 5–8 cmH2O | Near T-piece equivalent; appropriate for SBT |
| 0 cmH2O (CPAP only) | Pure spontaneous; assesses true WOB at baseline |

---

### 5. Airway Pressure Release Ventilation (APRV)

**What the vent guarantees:** Two levels of CPAP (P-High and P-Low) with set time intervals
**What varies:** Patient breathes spontaneously throughout the entire cycle

APRV is fundamentally a **time-cycled, pressure-targeted, inverse-ratio mode** that prioritizes alveolar recruitment while preserving spontaneous breathing. It is the most complex commonly used mode and is frequently misapplied.

**The physics of APRV:**
The vent holds pressure at **P-High** for a long time (T-High: typically 4–6 seconds) to recruit and stabilize alveoli, then briefly releases to **P-Low** (typically 0 cmH2O) for a very short time (T-Low: typically 0.4–0.8 seconds). The release is terminated before exhalation is complete — this creates **intrinsic PEEP at the alveolar level** even though P-Low is set to zero.

The critical target: **terminate T-Low when expiratory flow reaches 50–75% of peak expiratory flow.** This preserves alveolar recruitment during the release phase and prevents de-recruitment.

**APRV Settings — Systematic Approach:**

| Parameter | Target | Rationale |
|-----------|--------|-----------|
| P-High | 20–30 cmH2O (typically = prior mean airway pressure) | Sustained recruitment pressure |
| P-Low | 0 cmH2O | Maximize release gradient for CO2 clearance |
| T-High | 4.5–5.5 seconds | Long inflation time; recruits heterogeneous lung |
| T-Low | 0.4–0.8 sec; titrate to flow termination at 50–75% peak | Prevents de-recruitment on release |
| FiO2 | 0.4–0.6 initially | APRV recruits aggressively; wean FiO2 rapidly |

**Key clinical nuances:**
- Spontaneous breathing during T-High phase improves **dorsal lung recruitment** and reduces atelectasis in dependent zones — a key advantage over mandatory-breath modes in heterogeneous ARDS.
- **Do NOT use APRV in obstructive lung disease** — prolonged expiratory time constants prevent adequate exhalation during T-Low, causing dangerous air trapping.
- In **RV failure**, the high mean airway pressure of APRV increases RV afterload — use with extreme caution or avoid entirely.
- APRV is most appropriate for: early, recruitable ARDS with preserved spontaneous effort where conventional modes have failed to achieve oxygenation targets.
- **Transitioning off APRV:** Gradually reduce P-High and extend T-Low over 24–48 hours, then transition to PSV once P-High is <16 cmH2O and patient effort is manageable.

---

### 6. High-Frequency Oscillatory Ventilation (HFOV)

**What the vent guarantees:** A constant mean airway pressure (mPaw) with superimposed oscillatory pressure swings
**What varies:** CO2 clearance is determined by amplitude and frequency

HFOV operates on fundamentally different gas exchange principles. It is a **rescue mode** for refractory ARDS.

**The physics:**

| Conventional Ventilation | HFOV |
|--------------------------|------|
| Bulk convective flow | Asymmetric velocity profiles, Taylor dispersion, molecular diffusion |
| Vt > anatomical dead space | Vt << anatomical dead space (1–3 mL/kg) |
| CO2 cleared by RR × Vt | CO2 cleared by Amplitude² × Frequency |

**Settings and titration:**

| Parameter | Initial Setting | Effect |
|-----------|----------------|--------|
| mPaw | 5 cmH2O above prior conventional MAP (typically 25–35) | Oxygenation / recruitment |
| Amplitude (ΔP) | 60–90 cmH2O; titrate to chest wiggle at mid-thigh | CO2 clearance |
| Frequency | 5 Hz to start; reduce toward 3 Hz for better CO2 clearance | CO2 clearance (lower = better) |
| I:E | 1:2 (33% duty cycle) | Standard |
| Bias flow | 35–45 L/min | Maintains mPaw, flushes CO2 |
| FiO2 | 1.0 initially, wean rapidly once oxygenation stable | Oxygenation |

**Key clinical nuances:**
- Lower frequency = larger effective Vt = better CO2 clearance. Optimize CO2 with amplitude before lowering frequency.
- **OSCAR and OSCILLATE trials** failed to show mortality benefit; OSCILLATE showed harm in unselected ARDS. Reserve HFOV for **truly refractory hypoxemia (P/F <80) after prone, NMB, and optimized conventional ventilation have failed.**
- Requires continuous deep sedation and typically neuromuscular blockade.
- **Cardiac considerations:** Continuously elevated mPaw impairs venous return significantly. Anticipate hemodynamic deterioration requiring vasopressor escalation. Avoid HFOV in cardiogenic shock or significant RV failure.
- Closed-circuit suctioning every 4 hours minimum — HFOV circuits are prone to secretion impaction.

---

### 7. Neurally Adjusted Ventilatory Assist (NAVA)

**What the vent guarantees:** Pressure support proportional to the electrical activity of the diaphragm (EAdi)
**What varies:** Everything — the vent follows the patient's neural respiratory drive in real time

**The physiology:**
A specialized nasogastric catheter detects **electrical activity of the diaphragm (EAdi)** via esophageal electrodes. The vent delivers pressure proportional to EAdi:

> P_support = NAVA Level (cmH2O/μV) × EAdi (μV)

Because the vent tracks actual neural output, **trigger delay is eliminated** and **cycling synchronizes with diaphragmatic relaxation** rather than airflow thresholds.

**Key clinical advantages:**
- Eliminates the two most common dyssynchrony types: trigger delay and cycling asynchrony
- EAdi monitoring provides quantitative, real-time assessment of respiratory drive — the best bedside WOB monitor available
- **NAVA Level titration:** Start at 1–2 cmH2O/μV. Increase until patient effort (accessory muscle use, EAdi peak) normalizes. Reduce if Vt >8 mL/kg or if patient effort disappears entirely (over-support).
- In **post-cardiac surgery diaphragm dysfunction** (phrenic nerve injury), EAdi signal will be absent or attenuated on the affected side. Use with diaphragm ultrasound monitoring to correlate.
- **EAdi monitoring as a diagnostic tool:** The NAVA catheter can be used purely to monitor neural drive without switching to NAVA mode — invaluable for dyssynchrony assessment in any mode.

**NAVA in the cardiac ICU:**
- Reduces patient-ventilator dyssynchrony → reduces intrathoracic pressure swings → more stable hemodynamics
- EAdi "tonic" activity (persistent baseline signal between breaths) is an early sign of diaphragm fatigue — detectable before clinical deterioration
- Not well-studied in acute cardiogenic shock; use conventional modes until hemodynamically stable, then transition

---

### 8. Proportional Assist Ventilation Plus (PAV+)

**What the vent guarantees:** Pressure support proportional to patient effort, amplified by a set percentage
**What varies:** Pressure, flow, volume — all follow patient demand dynamically

PAV+ automatically measures respiratory system compliance and resistance every 4–10 breaths and delivers support as a **percentage of the total work of breathing:**

> P_vent = % Assist × (R_RS × Flow + E_RS × Vt)

**Key clinical points:**
- At 50% assist: the vent performs 50% of WOB, the patient 50% — regardless of breath-to-breath effort variability
- More physiologically natural breathing pattern than PSV; allows normal tidal volume variability
- Requires meaningful spontaneous effort — not appropriate for deeply sedated patients
- Superior to PSV for comfort and dyssynchrony reduction in cooperative, alert patients
- Limited to Puritan Bennett 840/980 series vents; less widely available than NAVA

---

## Part II: Heart-Lung Interactions — The Deep Physiology

This is the most critical concept differentiating cardiac ICU ventilator management from general ICU practice.

---

### Intrathoracic Pressure and the Two-Ventricle Response

**The fundamental principle:** Positive pressure ventilation (PPV) increases intrathoracic pressure (ITP). This has **opposite effects on the right and left hearts.**

#### Effects on the Right Ventricle:

| PPV Effect | Mechanism | Clinical Result |
|-----------|-----------|----------------|
| Reduces RV preload | Increased ITP compresses great veins → reduced venous return | Decreased RV filling → decreased CO in preload-dependent states |
| Increases RV afterload | Lung inflation compresses alveolar vessels → increased PVR | RV pressure overload; risk of acute cor pulmonale |
| Excessive PEEP | Over-inflation compresses alveolar capillaries | Increased PVR → RV dilation → septal shift → decreased LV filling |

**The RV is the primary victim of aggressive PPV.** In patients with pre-existing RV dysfunction, pulmonary hypertension, or massive PE, high PEEP and high mean airway pressure can precipitate acute RV failure.

#### Effects on the Left Ventricle:

| PPV Effect | Mechanism | Clinical Result |
|-----------|-----------|----------------|
| Reduces LV preload | Via reduced RV output (serial ventricle coupling) | Decreased LV filling |
| **Reduces LV afterload** | Increased ITP during systole reduces LV transmural pressure | **Beneficial in LV failure — PPV assists systolic ejection** |
| PEEP on pulmonary veins | Increased alveolar pressure compresses pulmonary veins | Reduces pulmonary venous return to LA |

**In LV failure and cardiogenic pulmonary edema:** Positive pressure is therapeutic. PEEP:
1. Reduces preload (decreases pulmonary venous congestion)
2. Reduces LV afterload (transmural pressure reduction assists ejection)
3. Improves FRC and oxygenation by recruiting flooded alveoli

This is why **CPAP/BiPAP is first-line for cardiogenic pulmonary edema** — and why **abrupt extubation** in poorly compensated LV failure can precipitate flash pulmonary edema (loss of afterload reduction + preload surge).

---

### PEEP and the Two-Zone RV Injury Model

**Zone 1 — Under-inflation (PEEP too low):**
Atelectasis → hypoxic pulmonary vasoconstriction (HPV) → PVR elevated from non-recruited vasculature → RV afterload ↑

**Zone 3 — Over-inflation (PEEP too high):**
Overdistension → alveolar capillary compression → PVR elevated from mechanical obstruction → RV afterload ↑

**The optimal PEEP for RV protection sits between these zones** — where recruited lung area is maximized without overdistension. Identify this optimum using:
- **Lowest driving pressure** at a given Vt (Amato driving pressure method)
- **Peak cardiac output** during a stepwise PEEP trial with continuous hemodynamic monitoring
- **Echo assessment:** RV:LV diameter ratio <0.6, no septal flattening in systole

| PEEP Level | RV Risk | LV Benefit |
|-----------|---------|-----------|
| Low (0–5 cmH2O) | HPV from atelectasis → RV afterload ↑ | Minimal preload/afterload effect |
| Moderate (8–12 cmH2O) | Balanced zone; ideal for most cardiac patients | Moderate afterload reduction |
| High (>14 cmH2O) | Alveolar compression → RV afterload ↑, preload ↓ | Maximum afterload reduction; may reduce net CO |

---

### Ventricular Interdependence and Septal Shift

The LV and RV share the interventricular septum within a fixed pericardium. **When the RV dilates acutely, the septum shifts leftward** → impairs LV filling and distorts LV geometry → reduced LV systolic performance (Bernheim effect).

**Clinical recognition:**
- **Echo:** D-shaped LV in parasternal short-axis view (septal flattening in systole = RV pressure overload; diastole = RV volume overload)
- **Hemodynamics:** Rising CVP, falling CO, worsening ScvO2 despite preserved LV systolic function
- **EKG:** New right heart strain pattern (S1Q3T3, right axis deviation, new RBBB) coinciding with ventilator changes

**Management:** Reduce PEEP if RV afterload is the driver. Add inhaled pulmonary vasodilators. Optimize RV preload (judicious volume if hypovolemic). Aggressively treat hypoxia, hypercapnia, and acidosis — each is a potent pulmonary vasoconstrictor.

---

### Pulse Pressure Variation (PPV) and Stroke Volume Variation (SVV)

In fully mechanically ventilated patients with regular rhythm:

> PPV = [(PP_max − PP_min) / mean PP] × 100

- **PPV >13% or SVV >13%:** Fluid responsive (preload dependent)
- **PPV <9%:** Not fluid responsive

**Most valid when:** Vt ≥8 mL/kg, regular rate, no spontaneous effort, no RV failure, no arrhythmia

**Limitations in the cardiac ICU — know these:**

| Condition | Effect on PPV/SVV | Alternative |
|-----------|------------------|-------------|
| Atrial fibrillation | Completely invalidated — irregular RR creates artifact variation | Passive leg raise (PLR) test |
| RV failure | Elevated PPV may reflect cyclic RV output change, not volume responsiveness | Echo-guided PLR |
| Low Vt (6 mL/kg) | Falsely reduces PPV → misses fluid responsiveness | PLR or end-expiratory occlusion test |
| LVAD in situ | PPV/SVV unreliable; LVAD decouples cardiac from vent cycling | LVAD flow trends + PI |

---

## Part III: Patient-Ventilator Dyssynchrony — Recognition and Management

Dyssynchrony occurs when the patient's neural respiratory timing conflicts with the ventilator's mechanical timing. It prolongs ICU stay, increases sedation requirements, drives lung injury, and is independently associated with worse outcomes. **The flow-time waveform on the bedside vent screen is the most powerful and underused diagnostic tool in the ICU.**

---

### Type 1: Ineffective Triggering (Missed Efforts)

**Mechanism:** Patient generates inspiratory effort that fails to meet the trigger threshold → no breath delivered
**Waveform sign:** Small downward pressure deflection without a delivered breath; small positive flow spike at end-expiration on the flow-time waveform

**Causes:**
- High auto-PEEP: Patient must first overcome auto-PEEP before net pressure change triggers the vent
- Trigger sensitivity set too insensitively
- Severe neuromuscular weakness

**Management:**
1. Measure auto-PEEP (expiratory hold maneuver)
2. Apply extrinsic PEEP to 80–85% of measured auto-PEEP to reduce the effective trigger threshold
3. Increase trigger sensitivity cautiously (risk of autotriggering if too sensitive)
4. Bronchodilators and reduce RR/increase expiratory time to address auto-PEEP
5. Consider NAVA (eliminates trigger delay entirely by tracking EAdi directly)

---

### Type 2: Autotriggering

**Mechanism:** Ventilator delivers breaths not triggered by patient neural effort
**Causes:** Circuit leak, hyperdynamic cardiac oscillations triggering the flow sensor, water in circuit, hiccups

**Management:** Identify trigger source; switch from flow trigger to pressure trigger; drain circuit condensate; reduce trigger sensitivity

---

### Type 3: Double-Triggering

**Mechanism:** A single neural inspiration triggers two ventilator breaths in rapid succession. Neural Ti exceeds mechanical Ti → patient's effort continues into the vent's expiratory phase → triggers a second breath immediately
**Result:** Stacked breaths delivering 2× Vt → barotrauma and volutrauma risk

**Management:**
- Extend mechanical inspiratory time to match patient neural Ti
- Switch to PC-AC (patient effort more naturally determines delivery duration)
- Consider NAVA

---

### Type 4: Flow Starvation (Flow Dyssynchrony)

**Mechanism:** Delivered inspiratory flow rate is insufficient to match patient's peak inspiratory demand
**Waveform sign:** In VC-AC, pressure waveform should form a smooth convex curve. A **concave (scooped) pressure waveform** indicates demand exceeding delivery — the patient is pulling air faster than the vent can deliver it.

**Management:**
- Increase peak flow to 60–80 L/min
- Switch from square-wave to decelerating (ramp) waveform
- Consider PC-AC, where flow is entirely demand-driven

---

### Type 5: Cycling Dyssynchrony

#### Premature Cycling (in PSV)
**Mechanism:** Vent terminates the breath before patient's neural inspiration ends
**Waveform sign:** Secondary pressure spike at end of the breath as patient pushes against the closing valve
**Management:** Lower cycle-off threshold (e.g., 25% → 10–15% of peak flow)

#### Delayed Cycling (in PSV — most common in COPD)
**Mechanism:** Vent continues delivering breath after patient's neural inspiration ends; patient actively exhales against ongoing insufflation
**Waveform sign:** Pressure rise at the end of inspiration
**Cause:** High airway resistance prevents flow from decaying to cycle threshold
**Management:** Increase cycle-off threshold to 40–50%; bronchodilators; reduce set inspiratory time

---

### Type 6: Reverse Triggering

**Mechanism:** A ventilator-delivered mandatory breath triggers diaphragmatic contraction via the Hering-Breuer stretch reflex → patient's diaphragm fires *after* the vent breath begins → asynchrony and potential breath stacking
**Population:** Deeply sedated patients — a paradox because it worsens with increasing sedation

**Recognition:** EAdi monitoring reveals diaphragmatic firing time-locked to vent cycle but delayed; esophageal manometry can confirm

**Management:**
- Reduce sedation (counterintuitively, lighter sedation often reduces reverse triggering)
- Adjust respiratory rate to desynchronize neural from mechanical timing
- Neuromuscular blockade if causing significant breath stacking with hemodynamic or barotrauma risk

---

## Part IV: Refractory Hypoxemia — Escalation Ladder

When conventional lung-protective ventilation (VC-AC, 6 mL/kg IBW, optimized PEEP, FiO2 1.0) fails to achieve SpO2 >88% or PaO2 >55 mmHg, proceed stepwise:

---

### Step 1: Optimize Before Escalating
- Confirm ETT position (CXR, symmetric breath sounds, EtCO2 waveform)
- Rule out: pneumothorax, hemothorax, large pleural effusion, endobronchial intubation, mucus plug
- Perform PEEP trial — optimize PEEP using driving pressure method
- Ensure NMB is active if ARDS P/F <150 (cisatracurium 48h — ACURASYS data)
- Optimize sedation to eliminate dyssynchrony and breath stacking

### Step 2: Prone Positioning
- **Strongest mortality evidence in ARDS (PROSEVA 2013: 28-day mortality 16% vs. 33%)**
- Indication: P/F <150 mmHg on FiO2 ≥0.6 and PEEP ≥5, despite ≥12–24h of optimized supine ventilation
- Mechanism: Homogenizes lung stress distribution, recruits dorsal lung, improves V/Q matching, reduces driving pressure
- Duration: ≥16 continuous hours per session; repeat daily until P/F >150 sustained in supine position
- **Cardiac ICU considerations:**

| Situation | Approach |
|-----------|---------|
| Post-CABG >72h, stable sternum | Generally safe; coordinate with surgical team |
| Post-sternotomy <72h | Defer; discuss with surgery |
| LVAD in situ | Monitor LVAD flow and PI continuously during turn; typically tolerated if flow stable |
| Active arrhythmia requiring defibrillation | Relative contraindication (pad access impaired in prone) |
| Open chest / VAC dressing | Contraindicated |

### Step 3: Rescue Lung Modes
- **APRV:** Recruitable ARDS + preserved spontaneous drive + no obstructive physiology + no significant RV failure
- **HFOV:** Severe refractory hypoxemia (P/F <80), hemodynamically stable, no RV failure — used as bridge to ECMO evaluation

### Step 4: Inhaled Pulmonary Vasodilators

| Agent | Dose | Key Points |
|-------|------|-----------|
| Inhaled Nitric Oxide (iNO) | 5–40 ppm (start 20 ppm) | Assess response at 30 min; wean slowly (rebound PH with abrupt stop); preferred in RV failure; monitor methemoglobin (<5%) |
| Inhaled Epoprostenol (iEPO) | 10–50 ng/kg/min via in-line nebulizer | No special delivery system; short half-life (2–3 min); may cause systemic vasodilation at high doses; cost-effective alternative |

**Mechanism for both:** Selective pulmonary vasodilation in ventilated (recruited) lung units → improved V/Q matching → improved oxygenation without systemic vasodilation

**Selecting between them:** Clinical equivalence for oxygenation. Prefer iNO in RV failure (stronger pulmonary selectivity, more evidence). Prefer iEPO when cost or iNO unavailability is a factor.

### Step 5: VV-ECMO
- Indication: Refractory ARDS (P/F <80 on optimal conventional settings), reversible etiology, no contraindications
- Provides complete extracorporeal gas exchange; native lungs placed on ultra-protective settings (Vt 2–4 mL/kg, RR 5–10, PEEP 10–15, FiO2 0.3)
- **Does not provide hemodynamic support** — VV-ECMO is gas exchange only
- Transition to VA-ECMO if cardiogenic shock component is present or emerges

---

## Part V: Heart Failure and Cardiac ICU — Specific Scenarios

---

### Scenario 1: Cardiogenic Pulmonary Edema (CPE)

**Pathophysiology:** Elevated LV filling pressures → pulmonary venous hypertension → interstitial and alveolar flooding → decreased compliance, impaired gas exchange, massively increased WOB

**Non-invasive approach first:**
- **CPAP 5–10 cmH2O:** First-line for hypoxemia without hypercapnia
- **BiPAP:** Add inspiratory support if hypercapnic or excessive WOB; typical: PS 8–12 above PEEP 5–8 cmH2O

**If intubated:**

| Priority | Setting | Rationale |
|----------|---------|-----------|
| PEEP | 8–12 cmH2O | Reduces preload; LV afterload reduction; recruits flooded alveoli |
| Vt | 6–8 mL/kg IBW | Standard lung-protective |
| FiO2 | Wean rapidly | CPE resolves with diuresis; avoid hyperoxia |
| Mode | VC-AC or PC-AC | Monitor for rapidly improving compliance on PC-AC |
| Diuresis | Aggressive IV (furosemide 1–2× home dose or continuous infusion) | Primary treatment — do not delay for vent optimization |
| Vasodilators | IV nitroglycerin or nitroprusside | Direct afterload reduction if SBP permits |

**Liberation pitfalls in CPE:**
- Extubate only when euvolemic — assess by CXR, lung ultrasound (B-line resolution), daily weights
- **Pre-extubation hemodynamic SBT:** Conduct SBT on CPAP alone (no PS). Tachycardia, new B-lines, or desaturation on CPAP = cardiac-limited SBT failure → diurese before retry
- **Post-extubation:** Prophylactic HFNC or NIV strongly recommended. The return of negative intrathoracic pressure increases LV afterload significantly — flash pulmonary edema is common in patients extubated before adequate diuresis

---

### Scenario 2: RV Failure on Mechanical Ventilation

RV failure is the most dangerous cardiac complication of mechanical ventilation — and the ventilator itself is frequently the precipitant.

**The Five Killers of the Ventilated RV:**
1. **Hypoxia** → HPV → PVR ↑ → RV afterload ↑
2. **Hypercapnia** → pulmonary vasoconstriction + direct RV myocardial depression
3. **Acidosis** → pulmonary vasoconstriction + reduced RV contractility
4. **High PEEP** → alveolar capillary compression → zone 3 PVR ↑
5. **High Vt / Driving Pressure** → lung overdistension → zone 3 PVR ↑

**Ventilator strategy for established RV failure:**

| Parameter | Target | Rationale |
|-----------|--------|-----------|
| Vt | 6 mL/kg IBW strict | Minimize lung overdistension and zone 3 PVR |
| PEEP | Lowest that maintains SpO2 >90% (typically 5–8 cmH2O) | Balance recruitment vs. RV afterload |
| Driving pressure | <13 cmH2O | Direct correlation with RV afterload via lung stress |
| pH | >7.35 | Prevent pulmonary vasoconstriction |
| PaCO2 | Normalize; avoid hypercapnia even at cost of higher rates | Hypercapnia is a pulmonary vasoconstrictor |
| SpO2 | >92% | Prevent HPV |
| MAP | ≥65–70 mmHg | Maintain RV coronary perfusion pressure |
| iNO or iEPO | Add if RV failure refractory to vent optimization | Reduce PVR without systemic vasodilation |

**Acute cor pulmonale on vent — recognition:**
- Echo: D-shaped LV on PSAX, RV:LV ratio >0.6, septal dyskinesia
- Hemodynamics: CVP rising, CO falling, MAP falling, ScvO2 worsening
- New R heart strain on EKG in context of vent changes

**RV failure + refractory hypoxemia dilemma:**
When both ARDS and RV failure coexist, the standard ARDS rescue ladder conflicts:
- High PEEP needed for oxygenation → worsens RV afterload
- iNO/iEPO: First escalation — treats both hypoxemia (V/Q improvement) and RV afterload (pulmonary vasodilation) simultaneously
- Prone positioning: May improve oxygenation AND reduce PVR (via lung recruitment) — reasonable to attempt if RV failure secondary to ARDS-driven PVR elevation
- VA-ECMO: If RV failure is refractory and hemodynamics cannot be maintained

---

### Scenario 3: Post-Cardiac Surgery Ventilator Management

**Standard initial settings:**
VC-AC, Vt 6–8 mL/kg IBW, RR 12–14, PEEP 5, FiO2 0.5–0.6
Target early extubation within 6–8 hours in uncomplicated, hemodynamically stable cases

**Common post-cardiac surgery vent complications:**

| Problem | Recognition | Management |
|---------|-------------|-----------|
| Phrenic nerve injury | Elevated hemidiaphragm on CXR; hypercapnia during SBT despite adequate strength | Diaphragm ultrasound to confirm; increase RR; may need prolonged ventilation or tracheostomy |
| Bilateral diaphragm paralysis | Paradoxical abdominal motion on SBT; hypercapnia on PSV | NAVA (EAdi quantifies residual drive), PAV+, or PSV with high support; trach early if no recovery by 7–10d |
| Post-bypass pulmonary dysfunction | Bilateral infiltrates, decreased compliance 4–8h post-op | Increase PEEP to 8–10; defer extubation; lung-protective settings |
| Pleural effusions (post-bypass) | Dullness to percussion, opacification on CXR | Drain if >40% hemithorax — drainage significantly improves compliance |
| Post-op tamponade | Tachycardia, equalized filling pressures, falling CO | Minimize PEEP and Vt to reduce ITP impact on cardiac filling; emergent drainage |
| Sternal wound concern | Paradoxical sternal movement, crepitus | Avoid high PEEP and high Vt; urgent surgical reassessment |

**Post-operative RV failure (post-CPB):**
- Common after valve surgery (especially tricuspid and mitral), CABG with RV territory involvement, cardiac transplant
- iNO is first-line pulmonary vasodilator in post-op setting (rapid onset, titratable, pulmonary-selective)
- Mechanical support if refractory: Impella RP, temporary RVAD, or VA-ECMO

---

### Scenario 4: LVAD Patient on Mechanical Ventilation

**Unique physiology:**
The LVAD bypasses LV function — systemic output is now device-dependent. Mechanical ventilation affects LVAD performance via changes in venous return, RV output, and LV preload.

> High PEEP → reduced venous return → reduced RV output → reduced LVAD preload → LVAD flow ↓ → suction events

**Ventilator strategy:**

| Parameter | Approach |
|-----------|---------|
| PEEP | Start 5 cmH2O; increase cautiously while monitoring LVAD flow (target ≥4 L/min) |
| Vt | Standard 6–8 mL/kg IBW |
| Mean airway pressure | Minimize; use lowest PEEP consistent with oxygenation targets |
| LVAD monitoring | Check flow, pulsatility index (PI), and suction alarms with every vent change |
| Volume status | Maintain euvolemia to mildly hypervolemic for adequate LVAD preload |

**LVAD suction event during vent adjustment:**
Acute PEEP increase → venous return ↓ → RV output ↓ → LVAD preload ↓ → suction alarm
**Response:** Immediately reduce PEEP; IV fluid bolus if hypovolemic; alert LVAD team; reduce LVAD speed if persistent

**Weaning LVAD patients:**
- SBT increases WOB → increases O2 demand and potentially CO demand → may challenge LVAD flow adequacy
- Monitor LVAD flow throughout SBT; consider shorter initial SBTs (30 min)
- Ensure hemodynamic stability at current LVAD speed before extubating

---

### Scenario 5: Pulmonary Hypertension on Mechanical Ventilation

**Critical principle:** The PH pulmonary vasculature has minimal reserve. Any physiological insult can precipitate acute RV decompensation and cardiovascular collapse.

**Triggers to eliminate aggressively:**

| Trigger | Impact | Prevention |
|---------|--------|-----------|
| Hypoxia (SpO2 <90%) | HPV → acute PVR spike | FiO2 to maintain SpO2 >92%; iNO/iEPO ready |
| Hypercapnia (PaCO2 >45) | Pulmonary vasoconstriction | Increase RR; accept slightly elevated pressures before accepting hypercapnia |
| Acidosis (pH <7.35) | PVC + RV depression | Treat underlying cause; sodium bicarbonate if severe metabolic acidosis |
| High PEEP (>10 cmH2O) | Zone 3 PVR ↑ | Keep PEEP 5–8 cmH2O unless essential |
| Intubation/induction period | Sympathetic surge + hypoxic apnea = PVR crisis | Pre-oxygenate with NIV; iNO before induction if possible |

**Induction strategy for decompensated PH:**
- Pre-oxygenate with BiPAP to prevent hypoxic insult during induction
- Start iNO before intubation if available
- Ketamine or etomidate preferred — maintain SVR; avoid propofol as primary agent (vasodilatory)
- Vasopressin or norepinephrine immediately available (maintains SVR without worsening PVR)
- Minimize apnea time — use RSI with succinylcholine or rocuronium

---

## Part VI: Auto-PEEP — Advanced Management

Auto-PEEP (intrinsic PEEP, air trapping) occurs when expiratory time is insufficient to allow full exhalation before the next breath begins.

**Measurement:**
1. **Expiratory hold maneuver:** Pause the vent at end-expiration for 1–2 seconds. Displayed pressure = total PEEP (set + intrinsic). Auto-PEEP = total PEEP − set PEEP.
2. **Flow-time waveform:** Expiratory flow does not return to zero before the next breath initiates.

> **Caution:** In spontaneously breathing patients, the expiratory hold underestimates auto-PEEP because patient effort masks the trapped volume.

**Consequences of unrecognized auto-PEEP:**
- Hemodynamic compromise (equivalent to applying unmeasured PEEP)
- Ineffective triggering (patient must overcome auto-PEEP with each breath before triggering)
- Breath stacking → elevated Pplat → barotrauma risk

**Management by mechanism:**

| Cause | Intervention |
|-------|-------------|
| Obstructive disease (COPD, asthma) | Reduce RR, reduce Vt, increase expiratory time (I:E 1:4–1:5), aggressive bronchodilators |
| Excessive patient rate | Optimize sedoanalgesia; treat underlying tachypnea cause (pain, fever, metabolic acidosis) |
| High set RR on VC-AC | Reduce set rate; accept permissive hypercapnia if pH >7.20 |
| Applied PEEP < auto-PEEP | Counter-PEEP: apply extrinsic PEEP to 80–85% of measured auto-PEEP — reduces trigger threshold without worsening air trapping |

**Status asthmaticus — controlled hypoventilation strategy:**

| Parameter | Target | Rationale |
|-----------|--------|-----------|
| Vt | 6–8 mL/kg IBW | Minimize hyperinflation |
| RR | 8–12 breaths/min | Maximize expiratory time |
| I:E | 1:4 or greater | Short inspiration; long expiration |
| Peak flow | 80–100 L/min | Minimizes inspiratory time |
| Permissive hypercapnia | Accept pH >7.15–7.20 | Safety valve — avoid dangerous airway pressures |
| Sedation/NMB | Deep sedation; NMB (cisatracurium or vecuronium) if breath stacking persists | Eliminate all patient-added effort |
| Set PEEP | Start at 0; reassess | Adding PEEP to high auto-PEEP worsens hyperinflation unless auto-PEEP measured and counter-PEEP strategy applied |

---

## Part VII: Integrated Decision Algorithm — When Conventional Fails

```
Refractory Hypoxemia (SpO2 <88% on FiO2 1.0, PEEP optimized)
│
├─ Step 1: Mechanistic exclusion
│    ├─ R/O PTX, pleural effusion, mucus plug, right mainstem intubation
│    ├─ Optimize PEEP via driving pressure method
│    └─ Confirm NMB active if P/F <150
│
├─ Step 2: Prone positioning
│    ├─ P/F <150, ≥16h sessions, repeat daily
│    └─ Cardiac ICU: check sternal stability, LVAD flow, arrhythmia risk
│
├─ Step 3: Rescue ventilator modes
│    ├─ APRV → recruitable ARDS + preserved drive + no obstructive disease + no severe RV failure
│    └─ HFOV → P/F <80, hemodynamically stable, bridge to ECMO evaluation
│
├─ Step 4: Inhaled pulmonary vasodilators
│    ├─ iNO 20 ppm → preferred in RV failure / pulmonary hypertension
│    └─ iEPO 20–40 ng/kg/min → alternative or adjunct
│
└─ Step 5: ECMO consultation
     ├─ VV-ECMO: Refractory hypoxemia, reversible cause, P/F <80, hemodynamically stable
     └─ VA-ECMO: Cardiogenic shock + refractory respiratory failure combined
```

---

## Key Takeaways

1. **Mode selection is a pathophysiology decision, not a habit.** PC-AC for pressure-sensitive lungs and RV failure, PSV for cooperative weaners, APRV for recruitable ARDS with preserved effort, NAVA for dyssynchrony elimination.

2. **The RV is the primary victim of aggressive PPV.** High PEEP injures the RV via two opposite mechanisms: zone 1 HPV at low end, zone 3 alveolar compression at high end. The optimal PEEP sits between them — find it with driving pressure or hemodynamic PEEP titration.

3. **Cardiogenic pulmonary edema is the one condition where PPV is therapeutic.** Positive pressure reduces LV afterload and preload. Do not rush to extubate before adequate diuresis — the return of spontaneous breathing re-loads the failing LV.

4. **Dyssynchrony is underdiagnosed.** Flow waveform analysis at the bedside takes 60 seconds and identifies the majority. Know all six types: ineffective trigger, autotrigger, double-trigger, flow starvation, premature cycling, delayed cycling (and reverse triggering in sedated patients).

5. **APRV is not a passive mode.** T-Low must be titrated to flow termination at 50–75% of peak expiratory flow — this is the most critical APRV parameter and is often ignored. Without it, APRV causes de-recruitment rather than preventing it.

6. **Prone positioning has the strongest mortality evidence in ARDS.** If your patient has P/F <150 and has not been proned, that is the single highest-yield intervention available before escalating to HFOV or ECMO.

7. **In LVAD patients, the ventilator is a hemodynamic variable.** Every PEEP change is a preload change. Monitor LVAD flow with every vent adjustment and respond to suction events as a vent complication.

8. **Auto-PEEP is invisible unless you actively measure it.** Perform expiratory hold maneuvers on all obstructive patients at least daily. In status asthmaticus, controlled hypoventilation (RR 8–12, I:E 1:4+, permissive hypercapnia) is the primary ventilator strategy.

9. **In pulmonary hypertension, the intubation itself can kill.** Pre-treat with iNO, pre-oxygenate with BiPAP, have vasopressors drawn, and minimize apnea time. Normalize CO2 even at the cost of higher airway pressures — hypercapnia in PH is a hemodynamic emergency.

10. **The escalation sequence matters.** Optimize basics → prone → APRV or HFOV → iNO/iEPO → ECMO. Skipping steps or escalating prematurely exposes patients to the risks of rescue therapies before simpler interventions are optimized.

---

### References

1. [Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury and the Acute Respiratory Distress Syndrome](https://www.nejm.org/doi/full/10.1056/NEJM200005043421801). Acute Respiratory Distress Syndrome Network. NEJM. 2000;342(18):1301-8. doi:10.1056/NEJM200005043421801.

2. [Prone Positioning in Severe Acute Respiratory Distress Syndrome (PROSEVA)](https://www.nejm.org/doi/full/10.1056/NEJMoa1214103). Guérin C, Reignier J, Richard JC, et al. NEJM. 2013;368(23):2159-68. doi:10.1056/NEJMoa1214103.

3. [Driving Pressure and Survival in the Acute Respiratory Distress Syndrome](https://www.nejm.org/doi/full/10.1056/NEJMsa1410639). Amato MB, Meade MO, Slutsky AS, et al. NEJM. 2015;372(8):747-55. doi:10.1056/NEJMsa1410639.

4. [High-Frequency Oscillation in Early Acute Respiratory Distress Syndrome — OSCILLATE](https://www.nejm.org/doi/full/10.1056/NEJMoa1215554). Ferguson ND, Cook DJ, Guyatt GH, et al. NEJM. 2013;368(9):795-805. doi:10.1056/NEJMoa1215554.

5. [High-Frequency Oscillatory Ventilation for Acute Respiratory Distress Syndrome — OSCAR](https://www.nejm.org/doi/full/10.1056/NEJMoa1215066). Young D, Lamb SE, Shah S, et al. NEJM. 2013;368(9):806-13. doi:10.1056/NEJMoa1215066.

6. [Effect of Lung Recruitment and Titrated PEEP vs Low PEEP on Mortality in Patients with ARDS — ART Trial](https://pubmed.ncbi.nlm.nih.gov/28973363). Writing Group for the ART Investigators. JAMA. 2017;318(14):1335-1345. doi:10.1001/jama.2017.14171.

7. [Early Neuromuscular Blockade in the Acute Respiratory Distress Syndrome — ACURASYS](https://www.nejm.org/doi/full/10.1056/NEJMoa1901686). NHLBI PETAL Clinical Trials Network. NEJM. 2019;380(21):1997-2008. doi:10.1056/NEJMoa1901686.

8. [Patient-Ventilator Asynchrony](https://pubmed.ncbi.nlm.nih.gov/21459151). Branson RD, Blakeman TC, Robinson BRH. Respiratory Care. 2013;58(6):973-96. doi:10.4187/respcare.02205.

9. [Reverse Triggering Dyssynchrony](https://pubmed.ncbi.nlm.nih.gov/28209673). Akoumianaki E, Lyazidi A, Rey N, et al. American Journal of Respiratory and Critical Care Medicine. 2013;187(12):1355-61. doi:10.1164/rccm.201212-2212OC.

10. [Neurally Adjusted Ventilatory Assist vs Pressure Support Ventilation in Patients Recovering from Acute Respiratory Failure](https://pubmed.ncbi.nlm.nih.gov/24824653). Piquilloud L, Vignaux L, Bialais E, et al. Critical Care. 2011;15(3):R196. doi:10.1186/cc10360.

11. [Airway Pressure Release Ventilation: Emerging Concepts and Monitoring](https://pubmed.ncbi.nlm.nih.gov/31481605). Emr B, Gatto LA, Roy S, et al. Respiratory Care. 2013;58(2):282-95. doi:10.4187/respcare.02268.

12. [Acute Cor Pulmonale in ARDS: Rationale for Protecting the Right Ventricle](https://pubmed.ncbi.nlm.nih.gov/26818454). Vieillard-Baron A, Naeije R, Haddad F, et al. Chest. 2018;153(1):181-192. doi:10.1016/j.chest.2017.06.046.

13. [Hemodynamic Effects of Mechanical Ventilation in Heart Failure](https://pubmed.ncbi.nlm.nih.gov/11742248). Pinsky MR. Heart Failure Reviews. 2000;5(3):267-78. doi:10.1023/A:1009888522009.

14. [Positive-Pressure Ventilation in the Hemodynamically Compromised Patient](https://pubmed.ncbi.nlm.nih.gov/15588036). Pinsky MR. Critical Care Clinics. 2001;17(3):537-61. doi:10.1016/S0749-0704(05)70201-X.

15. [Pulse Pressure Variation and Stroke Volume Variation — Physiology to Clinical Application](https://pubmed.ncbi.nlm.nih.gov/19636562). Marik PE, Cavallazzi R, Vasu T, et al. Critical Care Medicine. 2009;37(9):2642-7. doi:10.1097/CCM.0b013e3181a590aa.

16. [Inhaled Nitric Oxide Therapy in Adults](https://pubmed.ncbi.nlm.nih.gov/15731623). Griffiths MJ, Evans TW. NEJM. 2005;353(25):2683-95. doi:10.1056/NEJMra051884.

17. [Mechanical Ventilation Management During ECMO for ARDS](https://pubmed.ncbi.nlm.nih.gov/30021085). Schmidt M, Pham T, Arcadipane A, et al. Anesthesiology. 2019;130(6):905-917. doi:10.1097/ALN.0000000000002626.

18. [Ventilatory Management of the Patient with Pulmonary Hypertension](https://pubmed.ncbi.nlm.nih.gov/31353048). Lahm T, Douglas IS, Archer SL, et al. Chest. 2014;145(2):401-408. doi:10.1378/chest.12-2440.

19. [Management of Refractory Hypoxemia in Mechanically Ventilated Patients](https://pubmed.ncbi.nlm.nih.gov/30048025). Guérin C, Papazian L, Reignier J, et al. Intensive Care Medicine. 2019;45(5):616-637. doi:10.1007/s00134-019-05577-4.

20. [Official ERS/ATS Clinical Practice Guidelines on Noninvasive Ventilation for Acute Respiratory Failure](https://pubmed.ncbi.nlm.nih.gov/28860265). Rochwerg B, Brochard L, Elliott MW, et al. European Respiratory Journal. 2017;50(2):1602426. doi:10.1183/13993003.02426-2016.
