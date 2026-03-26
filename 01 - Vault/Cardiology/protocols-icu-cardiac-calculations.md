# ICU Cardiac & Critical Care Calculations

> Comprehensive evidence-based formulas for hemodynamic assessment, oxygenation, fluid management, and organ function monitoring in the cardiac ICU. Aligned with AHA/ACC 2024-2026 guidelines, ESICM 2025 hemodynamic monitoring recommendations, and SOFA-2 (2025) scoring.

---

## Quick Reference: Key Thresholds for Cardiac ICU

| Parameter | Critical Threshold | Clinical Implication |
|-----------|--------------------|----------------------|
| CI | < 2.2 L/min/m2 | Cardiogenic shock (SCAI/ACC 2025) |
| CPO | < 0.6 W | Severe CS; strongest mortality predictor |
| PAPi | < 0.9 | Severe RV failure |
| SvO2 / ScvO2 | < 60% / < 65% | Inadequate oxygen delivery |
| Lactate | >= 2.0 mmol/L | Tissue hypoperfusion (SCAI Stage C) |
| Lactate | > 5-10 mmol/L | Refractory shock (SCAI Stage E) |
| Driving Pressure | > 15 cmH2O | Increased ARDS mortality |
| P/F Ratio | < 100 | Severe ARDS; consider ECMO |
| QTc | > 500 ms | High risk TdP; stop offending agents |
| MAP | < 65 mmHg | Below perfusion target |
| Osmolar Gap | > 10 | Toxic alcohol ingestion |

---

## 1. Hemodynamic Calculations

### Systemic Vascular Resistance (SVR)

**Formula:**

```
SVR = [(MAP - CVP) / CO] x 80    (dynes-sec/cm5)
SVRI = SVR x BSA                  (dynes-sec/cm5/m2)
```

- **Normal SVR:** 800-1200 dynes-sec/cm5
- **Normal SVRI:** 1970-2390 dynes-sec/cm5/m2
- **Clinical significance:** Elevated in cardiogenic and hypovolemic shock; decreased in distributive/septic shock. Guides vasopressor vs. inotrope selection.

---

### Pulmonary Vascular Resistance (PVR)

**Formula:**

```
PVR = [(mPAP - PCWP) / CO] x 80    (dynes-sec/cm5)
PVR in Wood Units = (mPAP - PCWP) / CO    (WU)
```

- **Normal PVR:** 20-120 dynes-sec/cm5 (< 3 WU)
- **Clinical significance:** PVR > 3 WU with DPG >= 7 mmHg defines combined pre- and post-capillary pulmonary hypertension. Critical for LVAD candidacy evaluation and transplant listing.

**Related gradients:**

```
Transpulmonary Gradient (TPG) = mPAP - PCWP         (normal < 12 mmHg)
Diastolic Pulmonary Gradient (DPG) = dPAP - PCWP    (normal < 7 mmHg)
```

- DPG >= 7 mmHg suggests intrinsic pulmonary vascular disease beyond passive congestion. DPG is more reliable than TPG as it is less influenced by cardiac output and PCWP changes.

---

### Coronary Perfusion Pressure (CPP)

**Formula:**

```
CPP = Aortic DBP - LVEDP (or PCWP as surrogate)
```

- **Normal:** 60-80 mmHg
- **Target:** > 60 mmHg (critical threshold for myocardial perfusion)
- **Clinical significance:** Primary determinant of myocardial oxygen supply. Drops critically during IABP deflation timing errors and in severe aortic regurgitation.

---

### Cardiac Power Output (CPO) & Cardiac Power Index (CPI)

**Formulas:**

```
CPO = (MAP x CO) / 451              (Watts)
CPO (adjusted) = [(MAP - RAP) x CO] / 451    (Watts, when RAP > 8 mmHg)
CPI = CPO / BSA                      (W/m2)
```

- **Normal CPO:** 0.9-1.2 W
- **Normal CPI:** 0.5-0.7 W/m2
- **Critical threshold:** CPO < 0.6 W indicates severe cardiogenic shock (ACC 2025)
- **Clinical significance:** The single strongest hemodynamic predictor of mortality in cardiogenic shock (SHOCK trial). CPO < 0.53 W was associated with 58% in-hospital mortality. Incorporating RAP when elevated improves prognostic accuracy. Part of the SCAI SHOCK stage hemodynamic criteria.

---

### Pulmonary Artery Pulsatility Index (PAPi)

**Formula:**

```
PAPi = (PASP - PADP) / RAP
```

- **Normal:** >= 2.0 (varies by context; >= 5.5 in pulmonary arterial hypertension)
- **Critical threshold:** PAPi < 0.9 indicates severe RV failure
- **LVAD context:** PAPi < 1.85 predicts RV failure post-LVAD implantation
- **Clinical significance:** Assesses RV function relative to RV afterload. Used in SCAI SHOCK classification hemodynamic criteria alongside CPO. A PAPi < 0.9 combined with RAP/PCWP > 0.8 strongly suggests biventricular failure requiring MCS escalation. Lowest PAPi quartile associated with 60% greater mortality risk.

---

## 2. Oxygenation Calculations

### Alveolar-arterial (A-a) Gradient

**Formulas:**

```
PAO2 = FiO2 x (Patm - PH2O) - (PaCO2 / RQ)
PAO2 = FiO2 x (760 - 47) - (PaCO2 / 0.8)    (at sea level)

A-a Gradient = PAO2 - PaO2
```

- **Normal:** 5-15 mmHg (increases with age)
- **Age-adjusted normal:** (Age/4) + 4
- **Clinical significance:** Differentiates hypoventilation (normal A-a) from V/Q mismatch, shunt, or diffusion impairment (elevated A-a). Elevated A-a gradient with hypoxemia suggests parenchymal lung disease or intracardiac shunt.

---

### Oxygen Content (CaO2, CvO2)

**Formulas:**

```
CaO2 = (1.34 x Hgb x SaO2) + (0.003 x PaO2)    (mL O2/dL)
CvO2 = (1.34 x Hgb x SvO2) + (0.003 x PvO2)     (mL O2/dL)
```

- **Normal CaO2:** 16-22 mL O2/dL
- **Normal CvO2:** 12-17 mL O2/dL
- **Clinical significance:** The dissolved oxygen component (0.003 x PaO2) is minimal but becomes relevant during hyperbaric therapy. Hgb-bound O2 accounts for >98% of total oxygen content.

---

### Oxygen Delivery (DO2)

**Formula:**

```
DO2 = CO x CaO2 x 10    (mL O2/min)
DO2I = CI x CaO2 x 10   (mL O2/min/m2)
```

- **Normal DO2:** 950-1150 mL O2/min
- **Normal DO2I:** 520-720 mL O2/min/m2
- **Clinical significance:** Global oxygen supply to tissues. Critically dependent on CO and Hgb more than PaO2. Target optimization in cardiogenic and septic shock.

---

### Oxygen Consumption (VO2)

**Formula (Reverse Fick):**

```
VO2 = CO x (CaO2 - CvO2) x 10    (mL O2/min)
VO2I = CI x (CaO2 - CvO2) x 10   (mL O2/min/m2)
```

- **Normal VO2:** 200-250 mL O2/min
- **Normal VO2I:** 110-160 mL O2/min/m2
- **Clinical significance:** Reflects metabolic demand. Increased in fever, seizures, shivering; decreased in hypothermia, sedation, paralysis.

---

### Oxygen Extraction Ratio (O2ER)

**Formula:**

```
O2ER = (CaO2 - CvO2) / CaO2 x 100    (%)
O2ER = (SaO2 - SvO2) / SaO2 x 100     (simplified)
```

- **Normal:** 22-30%
- **Critical threshold:** > 50% (supply-dependent oxygen consumption)
- **Clinical significance:** Rising O2ER indicates tissues are extracting more oxygen to compensate for inadequate delivery. Values exceeding 50% indicate critical DO2 threshold has been reached and anaerobic metabolism is imminent. SvO2 < 60% is a SCAI SHOCK hemodynamic criterion.

---

### Intrapulmonary Shunt Fraction (Qs/Qt)

**Formula:**

```
Qs/Qt = (CcO2 - CaO2) / (CcO2 - CvO2)

Where CcO2 = (1.34 x Hgb x 1.0) + (0.003 x PAO2)
```

- **Normal:** 3-5%
- **Significant shunt:** > 15%
- **Refractory hypoxemia:** > 30%
- **Clinical significance:** Quantifies the fraction of cardiac output passing through non-ventilated lung. Shunt > 30% will not respond to supplemental O2 alone and may require PEEP optimization, prone positioning, or ECMO.

---

## 3. Fluid & Electrolyte Calculations

### Anion Gap (AG)

**Formula:**

```
AG = Na - (Cl + HCO3)
AG corrected for albumin = AG + 2.5 x (4.0 - Albumin)
```

- **Normal AG:** 8-12 mEq/L
- **Clinical significance:** Detects unmeasured anions (lactate, ketoacids, toxins). Always correct for albumin in ICU patients, as hypoalbuminemia (common in critical illness) falsely lowers the AG by approximately 2.5 mEq/L per 1 g/dL decrease in albumin.

**Delta-delta ratio:**

```
Delta Ratio = (AG - 12) / (24 - HCO3)
```

- < 1: concurrent non-AG metabolic acidosis
- 1-2: pure AG metabolic acidosis
- &gt; 2: concurrent metabolic alkalosis

---

### Serum Osmolality

**Calculated:**

```
Osm = 2(Na) + (Glucose / 18) + (BUN / 2.8)
```

**With ethanol:**

```
Osm = 2(Na) + (Glucose / 18) + (BUN / 2.8) + (EtOH / 4.6)
```

**Osmolar Gap:**

```
Osmolar Gap = Measured Osm - Calculated Osm
```

- **Normal Osm:** 275-295 mOsm/kg
- **Normal Osmolar Gap:** < 10 mOsm/kg
- **Clinical significance:** Osmolar gap > 10 suggests presence of unmeasured osmoles (toxic alcohols, mannitol, propylene glycol from IV medications).

---

### Free Water Deficit

**Formula:**

```
FWD = TBW x [(Serum Na / 140) - 1]

Where TBW = Weight (kg) x correction factor
  Male:    0.6 (young), 0.5 (elderly)
  Female:  0.5 (young), 0.45 (elderly)
```

- **Clinical significance:** Guides free water replacement in hypernatremia. Replace no faster than 10-12 mEq/L per 24 hours to avoid cerebral edema. In acute hypernatremia (< 48 hours), faster correction up to 1-2 mEq/L per hour is acceptable.

---

## 4. Cardiac-Specific Calculations

### QTc Interval

**Bazett Formula:**

```
QTc = QT / sqrt(RR interval in seconds)
```

**Fridericia Formula (preferred at HR extremes):**

```
QTc = QT / (RR interval)^(1/3)
```

- **Normal QTc:** < 440 ms (males), < 460 ms (females)
- **Prolonged:** > 500 ms (high risk for Torsades de Pointes)
- **Clinical significance:** Bazett overcorrects at high heart rates and undercorrects at low heart rates. Fridericia is more accurate across heart rate ranges and is preferred by the FDA for drug safety studies. Both should be monitored during dofetilide loading, amiodarone use, and in patients on multiple QT-prolonging agents. Per ACC/AHA, discontinue offending agents if QTc > 500 ms.

---

### Fick Cardiac Output

**Formula:**

```
CO = VO2 / [C(a-v)O2 x 10]
CO = VO2 / [(CaO2 - CvO2) x 10]    (L/min)
```

**Assumed VO2 (when direct measurement unavailable):**

```
VO2 (estimated) = 125 mL/min/m2 x BSA
```

- **Normal CO (Fick):** 4.0-8.0 L/min
- **Clinical significance:** The gold standard for cardiac output measurement. Assumed VO2 introduces error of 10-25%, particularly in critical illness (sepsis, fever, hypothermia). Direct VO2 measurement is preferred when available. The 2025 ACC cardiogenic shock guidance emphasizes Fick CI < 2.2 L/min/m2 as a hemodynamic criterion for cardiogenic shock.

---

### Thermodilution Cardiac Output

**Method:** Injection of known volume of cold or room-temperature saline through the proximal port of a PA catheter; temperature change detected at the distal thermistor.

```
CO = V x (Tb - Ti) x K / integral of delta T(t) dt
```

Where V = injectate volume, Tb = blood temp, Ti = injectate temp, K = computation constant.

- **Accuracy:** +/- 10-15% (average of 3 measurements within 10% of each other)
- **Clinical significance:** Most commonly used bedside CO measurement. Inaccurate with severe TR, intracardiac shunts, very low CO states, and rapid IV infusions through the introducer. Continuous thermodilution (CCO) provides trending but may lag by 5-10 minutes.

---

## 5. Ventilation Calculations

### Static Compliance (Cstat)

**Formula:**

```
Cstat = Vt / (Pplat - PEEP)    (mL/cmH2O)
```

- **Normal:** 60-100 mL/cmH2O
- **Intubated normal:** 40-60 mL/cmH2O
- **ARDS:** 20-40 mL/cmH2O (often < 30)
- **Clinical significance:** Reflects lung and chest wall elastance. Decreasing Cstat suggests worsening parenchymal disease, atelectasis, pneumothorax, or abdominal compartment syndrome. Used to titrate PEEP at the bedside (best compliance method).

---

### Dynamic Compliance (Cdyn)

**Formula:**

```
Cdyn = Vt / (PIP - PEEP)    (mL/cmH2O)
```

- **Normal:** 40-60 mL/cmH2O (intubated)
- **Clinical significance:** Includes airway resistance component. A drop in Cdyn with preserved Cstat suggests increased airway resistance (bronchospasm, mucus plugging, kinked ETT). A drop in both suggests parenchymal process.

---

### Dead Space Ventilation (Vd/Vt) - Bohr Equation

**Formula:**

```
Vd/Vt = (PaCO2 - PetCO2) / PaCO2
```

- **Normal:** 0.20-0.40 (20-40%)
- **Abnormal:** > 0.50
- **Clinical significance:** Elevated dead space fraction (> 0.60) in ARDS is an independent predictor of mortality. Useful for monitoring PE severity and response to thrombolytic therapy (improving Vd/Vt indicates clot lysis).

---

### Driving Pressure

**Formula:**

```
Driving Pressure = Pplat - PEEP    (cmH2O)
```

- **Target:** < 15 cmH2O
- **Clinical significance:** Normalized Vt for respiratory system compliance. In ARDS, driving pressure > 15 cmH2O is independently associated with increased mortality. This is the most consistent ventilator parameter associated with survival in ARDS (Amato 2015, still current per 2025 practice).

---

### Mechanical Power

**Simplified formula:**

```
MP = 0.098 x RR x Vt x (PIP - 0.5 x Driving Pressure)    (J/min)
```

- **Target:** < 17 J/min (proposed threshold for VILI risk)
- **Clinical significance:** Integrates all ventilator variables contributing to ventilator-induced lung injury (VILI) into a single parameter. Gaining traction in 2025 ICU practice as a comprehensive measure of mechanical stress, though specific guideline thresholds are still being validated.

---

## 6. Renal Calculations

### Creatinine Clearance (Cockcroft-Gault)

**Formula:**

```
CrCl = [(140 - Age) x Weight (kg)] / [72 x Serum Cr]    (mL/min)
Multiply by 0.85 for females
```

**Weight selection guidance:**
- Underweight: use actual body weight
- Normal weight: use ideal body weight
- Obese (> 130% IBW): use adjusted body weight

- **Normal:** 90-130 mL/min
- **Clinical significance:** Still required by FDA labeling for many drug dosing adjustments (vancomycin, enoxaparin, DOACs). Not interchangeable with eGFR (CKD-EPI). In ICU patients, augmented renal clearance (CrCl > 130 mL/min) is common in young, post-surgical, and septic patients and may cause subtherapeutic drug levels.

---

---

## 7. Heart Failure-Specific Metrics

### SCAI Shock Stage Classification (Updated 2022, Endorsed in ACC 2025 Guidance)

| Stage | Description | Key Criteria |
|-------|-------------|--------------|
| A | At Risk | Risk factors for CS present; no signs/symptoms |
| B | Beginning CS | Tachycardia, relative hypotension; SBP < 90 or MAP < 60; no hypoperfusion |
| C | Classic CS | Hypoperfusion requiring intervention; CI < 2.2, CPO < 0.6 W, lactate >= 2.0 mmol/L; cool extremities, altered mentation, oliguria < 30 mL/hr |
| D | Deteriorating | Failure to respond to initial interventions; escalating vasopressors/MCS; rising lactate |
| E | Extremis | Refractory shock; circulatory collapse; lactate > 5-10, pH < 7.2; multiple pressors/MCS devices; near-pulselessness or cardiac arrest |

- **Clinical significance:** The SCAI classification is the standard framework for cardiogenic shock severity endorsed by ACC, AHA, ESC, SCCM, and STS. The 2025 ACC cardiogenic shock guidance emphasizes using the mnemonic "SUSPECT CS" for early recognition and staging with SCAI at diagnosis.

---

### INTERMACS Profiles (for Advanced HF / MCS Candidacy)

| Profile | Description | Time to MCS |
|---------|-------------|-------------|
| 1 | Critical cardiogenic shock ("crash and burn") | Hours |
| 2 | Progressive decline on inotropes ("sliding on inotropes") | Days |
| 3 | Stable but inotrope-dependent ("dependent stability") | Weeks |
| 4 | Resting symptoms on oral therapy ("frequent flyer") | Weeks-Months |
| 5 | Exertion intolerant ("housebound") | Months |
| 6 | Exertion limited ("walking wounded") | Months |
| 7 | Advanced NYHA Class III ("placeholder") | Not yet indicated |

**Modifiers:** TCS (temporary circulatory support), A (arrhythmia), FF (frequent flyer)

- **Clinical significance:** Guides timing of LVAD/transplant referral. Lower profiles (1-3) associated with higher urgency and perioperative mortality. INTERMACS 4 patients have 39% composite adverse event rate at 12 months.

---

### SOFA-2 Cardiovascular Component (Published October 2025, JAMA)

| Score | Criteria |
|-------|----------|
| 0 | MAP >= 70 mmHg, no vasopressor or inotrope |
| 1 | MAP < 70 mmHg, no vasopressor or inotrope |
| 2 | NE + Epi sum <= 0.2 mcg/kg/min (or any other vasopressor/inotrope) |
| 3 | NE + Epi sum > 0.2 to <= 0.4 mcg/kg/min |
| 4 | NE + Epi sum > 0.4 mcg/kg/min, or any dose with MCS (VA-ECMO, IABP, Impella, LVAD) |

**Key changes from original SOFA:**
- Dopamine removed as primary agent; NE and Epi are now primary
- Vasopressors only scored if continuous IV infusion >= 1 hour
- Mechanical circulatory support explicitly scores as 4
- 1 mg norepinephrine base = 2 mg norepinephrine bitartrate monohydrate
- Developed from 3.34 million patients across 1,300+ ICUs in 9 countries

---

### Extended Cardiovascular SOFA (CE-SOFA) - Proposed 2025

**Components scored:**
- Standard CV-SOFA (MAP +/- vasoactive agent)
- High-sensitivity troponin T points (hs-cTnT)
- NT-proBNP points
- Atrial fibrillation points (doubled weighting)

- **Clinical significance:** Proposed extension that captures four aspects of cardiovascular dysfunction: hemodynamic instability, acute myocardial injury, myocardial dysfunction, and arrhythmia. Currently in validation phase and not yet adopted into standard SOFA-2, but endorses consideration of AF for future cardiovascular SOFA components.

---

### Cardiac Recovery Metrics (2025 Practice)

**Lactate Clearance:**

```
Lactate Clearance (%) = [(Initial Lactate - Repeat Lactate) / Initial Lactate] x 100
```

- **Target:** > 10% clearance per 2 hours
- **Clinical significance:** Lactate clearance > 10% at 2-6 hours is associated with improved survival in cardiogenic shock and sepsis. The 2025 SCAI "Door to Lactate Clearance" initiative parallels the door-to-balloon concept, emphasizing serial lactate monitoring to guide shock therapy escalation.

**ScvO2 (Central Venous Oxygen Saturation):**

- **Normal:** 65-75%
- **Target in shock:** > 65%
- **Clinical significance:** Surrogate for SvO2 when PA catheter is not available. The 2025 ESICM guidelines recommend serial ScvO2 and veno-arterial CO2 gap measurements in patients with central venous access to assess tissue perfusion adequacy.

**Veno-arterial CO2 Gap:**

```
Pv-aCO2 = PvCO2 - PaCO2
```

- **Normal:** < 6 mmHg
- **Abnormal:** > 6 mmHg suggests inadequate cardiac output relative to metabolic demand
- **Clinical significance:** Complements ScvO2; a normal ScvO2 with elevated Pv-aCO2 gap suggests persistent tissue hypoperfusion despite adequate global oxygen extraction. Recommended by 2025 ESICM guidelines as part of multimodal perfusion assessment.

---

## Guideline References (2024-2026)

1. **2025 ESICM Guidelines on Circulatory Shock and Hemodynamic Monitoring** - 50 recommendations for shock diagnosis and hemodynamic assessment including capillary refill time, dynamic fluid responsiveness variables, and echocardiography as first-line imaging.

2. **2025 ACC Expert Consensus Statement on Cardiogenic Shock** (JACC 2025) - SCAI staging, SUSPECT CS mnemonic, PA catheter-guided therapy with CPO, PAPI, and Fick CI thresholds.

3. **2025 AHA Guidelines for CPR and Emergency Cardiovascular Care** - Updated post-cardiac arrest care including hemodynamic targets and neuroprognostication.

4. **2025 ACC/AHA Acute Coronary Syndrome Guidelines** - CICU staffing, monitoring, and hemodynamic management in ACS complicated by shock.

5. **SOFA-2 Score** (JAMA, October 2025) - Complete revision of the SOFA score with updated cardiovascular component including NE/Epi summation dosing and MCS scoring.

6. **SCAI SHOCK Stage Classification Update** (JACC 2022, reaffirmed in ACC 2025 guidance) - Five-stage classification with hemodynamic, biochemical, and physical exam domains.

7. **CKD-EPI 2021 Race-Free eGFR Equation** (NKF/ASN 2021) - Standard GFR estimation without race coefficient.

---

_Last updated: March 2026 · HVI ICU APP Team_
