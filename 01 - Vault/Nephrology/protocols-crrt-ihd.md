---
title: "Renal Replacement Therapy in the ICU"
category: "Nephrology"
audience: "APP/Physician"
created: "2026-05-05"
updated: "2026-05-05"
tags:
  - nephrology
  - crrt
  - hemodialysis
  - acute-kidney-injury
  - critical-care
  - renal-replacement-therapy
---

# Renal Replacement Therapy in the ICU

## Table of Contents

- [[#Overview]]
- [[#Indications for RRT]]
- [[#Modalities: CRRT vs iHD]]
- [[#Pathophysiology of AKI Requiring RRT]]
- [[#CRRT Modes & Prescribing]]
- [[#Anticoagulation]]
- [[#Fluid Balance & Dosing]]
- [[#ICU Troubleshooting]]
- [[#Complications]]
- [[#Drug Dosing on CRRT]]
- [[#Clinical Pearls]]
- [[#Evidence & Landmark Trials]]
- [[#Key Guidelines]]
- [[#References]]

---

## Overview

Renal replacement therapy (RRT) in the critically ill represents one of the most consequential and technically demanding interventions in ICU practice. Acute kidney injury (AKI) affects approximately **22% of ICU patients** by KDIGO creatinine criteria at admission, though this rises substantially when urine output criteria are included and may reach up to two-thirds of patients under broader RIFLE-era definitions (Ostermann et al., *Lancet* 2025). RRT is required in approximately 5–10% of all ICU admissions — a number that climbs substantially in post-cardiac surgery, septic shock, and cardiogenic shock populations. The two dominant modalities are **continuous renal replacement therapy (CRRT)** and **intermittent hemodialysis (iHD)**, each with distinct physiologic profiles, indications, and operational demands.

The choice between CRRT and iHD is not simply a matter of preference — it is a clinical decision driven by hemodynamic stability, volume status, intracranial pressure, metabolic burden, and institutional resources. In a cardiac ICU where volume management, hemodynamic fragility, and drug clearance are daily concerns, proficiency with both modalities is essential.

> [!warning] **Bottom Line** AKI requiring RRT carries an in-hospital mortality of 40–60% in the ICU. RRT does not treat the underlying cause of AKI — it buys time. Parallel aggressive management of the precipitating condition (sepsis, cardiogenic shock, nephrotoxin removal) is mandatory alongside any RRT decision.

---

## Indications for RRT

### Emergent ("AEIOU") Indications

These are absolute indications requiring urgent initiation regardless of modality availability:

| Indication | Details |
|---|---|
| **A** — Acidosis | Severe metabolic acidosis pH < 7.1 refractory to medical management. Note: The BICAR-ICU trial (*Lancet* 2018) found that IV sodium bicarbonate infusion (targeting pH ≥ 7.3) in severe metabolic acidosis (pH ≤ 7.2, PaCO₂ ≤ 45) was associated with improved 28-day survival and decreased need for RRT in patients with AKI — consider bicarbonate as an adjunct or bridge in selected patients before defaulting to RRT for acidosis alone |
| **E** — Electrolytes | Hyperkalemia K⁺ > 6.5 mEq/L or refractory to medical therapy; severe hyperphosphatemia |
| **I** — Intoxication | Dialyzable toxins: lithium, methanol, ethylene glycol, salicylates, metformin (lactic acidosis) |
| **O** — Overload | Volume overload refractory to diuretics — pulmonary edema, anasarca |
| **U** — Uremia | BUN > 100 mg/dL with uremic symptoms: encephalopathy, pericarditis, bleeding |

> [!warning] **Do not wait for all five criteria.** A single emergent indication warrants RRT initiation. Waiting for "sicker" lab values in an already deteriorating patient increases mortality.

### Non-Emergent / Prophylactic Indications

The decision to initiate RRT in non-emergent AKI (e.g., oliguric AKI with rising creatinine but without emergent criteria) is one of the most debated topics in critical care. The landmark **AKIKI**, **IDEAL-ICU**, and **STARRT-AKI** trials established that **watchful waiting with delayed initiation** is non-inferior to early initiation in terms of mortality, and avoids unnecessary RRT in patients who may recover spontaneously. However, the **AKIKI-2** trial (Gaudry et al., *Lancet* 2021) defined the safety boundary of delay: a "more-delayed" strategy (BUN threshold 140 mg/dL, removing oliguria >72h as a trigger) was associated with higher 60-day mortality on multivariable analysis and no benefit in RRT-free days — excessive delay beyond emergent thresholds may cause harm. The **ELAIN** trial (Zarbock et al., *JAMA* 2016) is the notable outlier, showing a mortality benefit with early RRT (stage 2 vs. stage 3 AKI) in a single-center study, though its generalizability is debated. There is no benefit to excessive delay when:

- Oliguria persists > 72 hours despite optimization
- Solute clearance is inadequate for clinical stability
- Volume management is failing with escalating diuretic requirements
- Nutrition and medication delivery are being compromised by fluid restriction

### Special Considerations in Cardiac ICU

- **Post-cardiotomy AKI** — common after cardiac surgery; CPB-associated AKI has a high spontaneous recovery rate; delay RRT if hemodynamically tolerated
- **Cardiogenic shock** — extreme hemodynamic fragility makes CRRT strongly preferred over iHD
- **LVAD/ECMO patients** — close coordination required; CRRT can be piggy-backed onto ECMO circuit in some centers
- **Contrast nephropathy** — usually transient; aggressive pre-hydration preferred over prophylactic RRT

---

## Modalities: CRRT vs iHD

### Head-to-Head Comparison

| Feature | CRRT | iHD |
|---|---|---|
| Duration | Continuous (24 hrs/day) | 3–4 hours, 3–6×/week |
| Blood flow rate | 100–200 mL/min | 300–500 mL/min |
| Dialysate/effluent rate | 20–35 mL/kg/hr | High flow, intermittent |
| Solute clearance | Slow, continuous | Rapid, intermittent |
| Fluid removal | Slow, precise | Rapid, less predictable |
| Hemodynamic impact | Minimal | Significant — IDH common |
| Anticoagulation | Required (citrate or heparin) | Optional / minimal |
| Nursing intensity | High (continuous monitoring) | Lower per session |
| Cost | Higher | Lower |
| Mobility | Severely restricted | Session-based freedom |
| Brain/ICP safety | Preferred (avoids osmolar shifts) | Risk of cerebral edema |
| Drug clearance | Continuous — requires dose adjustment | Supplement post-dialysis |

### When to Choose CRRT

- Hemodynamic instability (MAP < 65 on vasopressors, cardiogenic shock)
- Severe fluid overload requiring slow, controlled removal
- Elevated ICP or cerebral edema (traumatic brain injury, hepatic encephalopathy)
- Severe metabolic derangements requiring continuous correction
- Patients on ECMO or LVAD
- Need for precise hourly fluid balance (post-cardiac surgery, post-transplant)

### When to Choose iHD

- Hemodynamically stable patients
- Need for rapid solute removal (severe hyperkalemia, poisoning/intoxication — higher clearance per session)
- Anticoagulation is high-risk (active bleeding, HIT, thrombocytopenia) — iHD can often be done without anticoagulation
- Patient able to be mobilized between sessions
- Transition from CRRT to iHD as patient stabilizes (step-down)

### Sustained Low-Efficiency Dialysis (SLED / PIRRT)

**SLED** (also called PIRRT — prolonged intermittent renal replacement therapy) is a hybrid modality: slower blood and dialysate flow rates than iHD but run over 8–12 hours rather than continuously. It offers a middle ground — better hemodynamic tolerance than standard iHD, less nursing burden than CRRT, and lower anticoagulation requirements. Increasingly used as a bridge or step-down from CRRT.

---

## Pathophysiology of AKI Requiring RRT

### Why the Kidney Fails in Critical Illness

AKI in the ICU is almost never a single-mechanism event. The dominant pathways are:

**1. Hemodynamic / Ischemic AKI**
Reduced renal perfusion pressure triggers afferent arteriolar vasoconstriction as an autoregulatory response. When MAP falls below the autoregulatory threshold (~65–70 mmHg in the non-hypertensive patient, higher in chronic hypertensives), GFR drops precipitously. In shock states, renal vasoconstriction is mediated by angiotensin II, catecholamines, and ADH — all prioritizing perfusion to heart and brain at the kidney's expense.

**2. Inflammatory / Septic AKI**
Sepsis-associated AKI is the most common form in the ICU. Unlike pure ischemic AKI, septic AKI involves microvascular dysfunction, endothelial injury, and immune-mediated tubular cell apoptosis — not just reduced perfusion. This explains why restoring MAP does not always restore renal function in septic shock.

**3. Venous Congestion / Cardiorenal Syndrome**
Elevated central venous pressure (CVP) directly reduces the renal perfusion pressure gradient (MAP − CVP). In right heart failure, LVAD patients with RV failure, or fluid-overloaded states, renal venous hypertension impairs glomerular filtration even when arterial pressure is preserved. **This is a key mechanism in the cardiac ICU** — the kidney can fail from congestion alone, without arterial hypoperfusion.

**4. Nephrotoxic AKI**
Common offenders in the cardiac ICU: contrast agents, aminoglycosides, vancomycin (especially with high troughs/AUC), NSAIDs, ACE inhibitors/ARBs in low-flow states, calcineurin inhibitors (post-transplant), and IV iodinated contrast.

**5. Obstruction / Post-renal**
Less common in the ICU but important to exclude — Foley malfunction, retroperitoneal hematoma, abdominal compartment syndrome (elevated bladder pressure > 20 mmHg).

### Why Uremia Requires Clearance

When GFR falls severely, uremic solutes accumulate across three size classes:
- **Small solutes** (< 500 Da): urea, creatinine, potassium, phosphate — cleared efficiently by both diffusion and convection
- **Middle molecules** (500 Da – 60 kDa): cytokines (IL-6, TNF-α), β₂-microglobulin — cleared primarily by convection (hemofiltration); iHD is less effective
- **Protein-bound solutes**: indoxyl sulfate, p-cresol — poorly cleared by any current RRT modality

CRRT's continuous convective clearance of middle molecules may have immunomodulatory benefits in sepsis — though this has not translated into clear mortality benefit in RCTs.

---

## CRRT Modes & Prescribing

### The Four Core CRRT Modalities

| Mode | Abbreviation | Mechanism | What It Clears | Use Case |
|---|---|---|---|---|
| Continuous venovenous hemofiltration | CVVH | Convection only | Middle + small molecules | Sepsis, cytokine clearance, volume overload |
| Continuous venovenous hemodialysis | CVVHD | Diffusion only | Small molecules | Uremia, electrolyte correction |
| Continuous venovenous hemodiafiltration | CVVHDF | Convection + Diffusion | Broadest clearance | Most common ICU default — best of both |
| Slow continuous ultrafiltration | SCUF | Ultrafiltration only (no replacement fluid or dialysate) | Volume only — no solute | Diuretic-refractory volume overload, no uremia |

**CVVHDF is the most commonly used mode in ICU practice** because it provides both diffusive clearance of small uremic solutes and convective clearance of middle molecules, with a single circuit.

### CRRT Circuit Components

```
Patient → Access Catheter → Blood Pump → Hemofilter/Dialyzer → Return Catheter
                                ↑                    ↑
                        Pre-filter replacement   Dialysate (countercurrent)
                        fluid (pre-dilution)         ↓
                                            Effluent (waste) → effluent bag
```

- **Pre-dilution** replacement fluid is infused before the filter — dilutes blood, reduces filter clotting risk, slightly reduces clearance efficiency
- **Post-dilution** is infused after the filter — more efficient clearance but higher hematocrit in filter increases clotting risk
- Most centers use a **pre/post split** (e.g., 2/3 pre, 1/3 post) to balance clearance and filter life

### Vascular Access

CRRT requires a **large-bore dual-lumen dialysis catheter** (12–13.5 Fr) in a central vein:

| Site | Pros | Cons |
|---|---|---|
| Right internal jugular | Straight course to RA, highest flow, preferred | Requires US guidance, neck immobility |
| Femoral | Easy access, rapid insertion in emergency | Higher infection risk, immobilizes leg, lower flows if kinked |
| Left internal jugular | Acceptable if right IJ unavailable | More tortuous course, slightly lower flows |
| Subclavian | Avoid — high risk of stenosis damaging future AV fistula access | — |

> [!warning] **Never use a PICC or standard CVC for CRRT.** Flow rates are insufficient and will trigger constant alarms. A dedicated dialysis catheter (Mahurkar, Palindrome, etc.) is required.

---

## Anticoagulation

Anticoagulation is required in CRRT to prevent filter clotting and maintain circuit life. The two dominant strategies are **regional citrate anticoagulation (RCA)** and **systemic heparin**. RCA is now the preferred approach per KDIGO and most major guidelines.

### Regional Citrate Anticoagulation (RCA) — First-Line

**Mechanism:** Citrate is infused pre-filter into the blood circuit, chelating ionized calcium (iCa²⁺) to create a low-calcium environment within the filter (iCa < 0.35–0.4 mmol/L). This inhibits coagulation cascade activation locally. Citrate-calcium complexes are then removed in the effluent, and calcium is replaced systemically via a separate infusion to maintain normal systemic iCa.

**Advantages:**
- Anticoagulation confined to the circuit — minimal systemic bleeding risk
- Preferred in patients with active bleeding, post-operative state, thrombocytopenia, or HIT
- Prolongs filter life substantially — the RICH trial (Zarbock et al., *JAMA* 2020) demonstrated median filter life 46.5 vs. 26.0 hours (RCA vs. heparin); a 2025 meta-analysis of 72 studies found 36.7 vs. 16.4 hours
- Significantly lower bleeding events: 5.1% vs. 16.9% (RICH trial); 2.4% vs. 12.6% (2025 meta-analysis)
- **Trade-offs:** Higher rates of hypocalcemia (4.4% vs. 0.1%) and metabolic alkalosis (6.6% vs. 0.4%) with RCA — monitor iCa and bicarbonate closely
- Now the **KDIGO preferred strategy** for patients without citrate contraindications

**Contraindications:**
- Severe hepatic failure (liver cannot metabolize citrate → citrate accumulation and toxicity)
- Severe shock with lactic acidosis (impaired citrate metabolism)
- Documented citrate allergy (rare)

**Citrate Toxicity — Recognize It:**

| Sign | Mechanism |
|---|---|
| Rising total calcium with falling ionized calcium | Citrate accumulates, binds iCa but total Ca rises |
| Total Ca : ionized Ca ratio > 2.5 | Hallmark of citrate accumulation |
| Worsening metabolic acidosis on CRRT | Citrate load exceeds hepatic metabolism |
| Hypocalcemia symptoms (tetany, arrhythmia) | Excess citrate chelation |

> [!warning] **Citrate Accumulation = Total Ca/iCa ratio > 2.5.** This is the key monitoring parameter. Check ratio every 4–6 hours. If ratio rises: reduce citrate rate, increase calcium infusion, or consider switching anticoagulation strategy.

### Systemic Unfractionated Heparin

Used when citrate is contraindicated or unavailable. Target **circuit aPTT 45–60 seconds** (not systemic anticoagulation — lower target than therapeutic). Continuous infusion at 5–10 units/kg/hr typically.

**Disadvantages:** Systemic anticoagulation increases bleeding risk, filter life shorter than with citrate, HIT risk, unpredictable response in critically ill.

### No Anticoagulation

In patients with high bleeding risk (post-op, active hemorrhage, INR > 2, platelets < 50K), CRRT can be run without anticoagulation using frequent pre-dilution, high blood flows, and aggressive saline flushes. Filter life is reduced (often < 12–18 hours) but acceptable in the right patient.

### Argatroban (HIT)

In confirmed or suspected **heparin-induced thrombocytopenia (HIT)**, all heparin products must be stopped — including heparin flushes. **Argatroban** is the preferred anticoagulant for CRRT in HIT. It is cleared hepatically (dose reduce in liver failure), with a target aPTT of 1.5–3× baseline. Note that argatroban elevates PT/INR, which can confound assessment of coagulation.

---

## Fluid Balance & Dosing

### Prescribed vs. Delivered Dose

One of the most common errors in CRRT management is **under-delivery of the prescribed dose**. The prescribed effluent dose (e.g., 25 mL/kg/hr) is rarely achieved in practice because of circuit downtime from clotting, filter changes, line flushes, procedures, and transport.

- **Target effluent dose:** 20–25 mL/kg/hr (KDIGO recommendation)
- **Prescribe 25–30 mL/kg/hr** to account for downtime and achieve actual delivered dose of 20–25 mL/kg/hr
- Document and track **delivered dose** separately from prescribed dose — significant gaps mandate prescription adjustment

> [!tip] **The ATN and RENAL trials both showed no mortality benefit of high-dose (35 mL/kg/hr) vs. standard-dose (20–25 mL/kg/hr) CRRT.** Prescribe 25 mL/kg/hr with attention to delivery, not higher doses.

### Net Fluid Removal (Ultrafiltration)

The net fluid removal rate is set independently of the clearance dose:

| Clinical Goal | Net UF Rate |
|---|---|
| Volume neutral (maintenance) | 0 mL/hr net |
| Gentle removal | 50–100 mL/hr net |
| Aggressive removal (fluid overload) | 100–200 mL/hr net |
| Maximum tolerated (hemodynamically monitored) | Up to 300–500 mL/hr — titrate to hemodynamics |

**Fluid overload (FO) > 10% of body weight** is independently associated with increased mortality in AKI. Targeting negative or neutral fluid balance once hemodynamic stability is achieved is associated with better outcomes. This is particularly relevant in post-cardiac surgery patients, where aggressive fluid removal in the recovery phase improves outcomes.

**Net UF = Effluent Rate − (Replacement Fluid Rate + Dialysate Rate)**

Always verify the machine's programmed net balance matches the clinical goal at least every 4 hours.

### Replacement Fluid Composition

Standard replacement fluids are **bicarbonate-buffered** (e.g., PrismaSOL, Normocarb). Avoid lactate-based solutions in patients with severe lactic acidosis or hepatic failure — they cannot convert lactate to bicarbonate efficiently.

| Fluid | Buffer | Use |
|---|---|---|
| PrismaSOL B22/B32 | Bicarbonate | Standard; most common |
| Normocarb | Bicarbonate | High bicarbonate for severe acidosis |
| Lactate-based solutions | Lactate | Avoid in hepatic failure, shock |

---

## ICU Troubleshooting

### Common CRRT Alarms and Causes

| Alarm | Common Causes | Action |
|---|---|---|
| **High access pressure** | Catheter malposition, kinked line, clot at tip | Reposition patient, check line, flush or replace catheter |
| **High return pressure** | Filter clotting, kinked return line | Assess filter TMP; change filter if TMP rising |
| **Low blood flow** | Catheter dysfunction, hypovolemia | Check catheter, bolus if hypovolvemic, consider catheter exchange |
| **Air detector alarm** | Air in circuit (from loose connections, IV bags running dry) | Check all connections; prime circuit carefully |
| **High TMP (transmembrane pressure)** | Filter clotting, hemoconcentration | Check filter; if TMP > 250–300 mmHg, change filter |
| **High effluent pressure** | Effluent bag full, kinked effluent line | Empty bag, check line |
| **Citrate alarm** | Citrate bag empty, infusion pump failure | Replace bag, check pump |

### Filter Life Optimization

Target filter life > 24 hours (ideally 48–72 hours with citrate). Factors that shorten filter life:

- High hematocrit (> 35%) — increases viscosity in filter
- Post-dilution only — hemoconcentrates blood in filter
- Inadequate anticoagulation
- High filtration fraction (FF) — target FF < 25%
  - **FF = Ultrafiltration Rate / Plasma Flow Rate**, where Plasma Flow Rate = Blood Flow Rate × (1 − Hematocrit)
- Hyperlipidemia, high fibrinogen, sepsis-associated coagulopathy

**Optimization strategies:**
- Increase pre-dilution proportion
- Ensure adequate blood flow (≥ 150 mL/min)
- Optimize anticoagulation (switch to citrate if using heparin)
- Reduce filtration fraction

### When to Change the Filter

- TMP consistently > 250–300 mmHg
- Visible clot in bubble trap or header
- Effluent output < 80% of expected (under-clearance from fouled membrane)
- Filter life < 12 hours despite optimization — reassess anticoagulation strategy

### Access Troubleshooting

- **Recirculation:** Blood from return port re-entering access port — higher in femoral catheters, especially if inserted too shallow. Confirmed by urea nitrogen measurement at access vs. systemic. Increases with catheter reversal (access and return ports swapped — avoid).
- **Poor flows:** Positional — have patient turn head or flex/extend neck (IJ catheters). Elevate head of bed 30° for femoral catheters.
- **Line infection:** Any fever or catheter site erythema requires blood cultures and consideration of catheter exchange. Dialysis catheter infections are associated with significant morbidity — do not treat through a visibly infected catheter.

---

## Complications

### CRRT-Specific Complications

| Complication | Mechanism | Prevention/Management |
|---|---|---|
| **Hypothermia** | Blood cooled through extracorporeal circuit | Use inline blood warmer; monitor temperature hourly |
| **Hypophosphatemia** | Phosphate is cleared efficiently; replacement fluids contain none | Add phosphate to replacement fluid (e.g., Phos-B) or supplement IV; check phosphate every 6–12 hrs |
| **Hypokalemia** | Potassium cleared continuously; standard replacement fluids are low-K | Adjust replacement fluid potassium concentration; check every 4–6 hrs |
| **Hypomagnesemia** | Magnesium cleared; often not replaced | Add Mg to replacement fluid; supplement IV; check daily |
| **Hypocalcemia** | With citrate: excess chelation; without citrate: continuous clearance | Monitor iCa every 4–6 hrs; adjust calcium infusion accordingly |
| **Metabolic alkalosis** | Bicarbonate-rich replacement fluids + resolving acidosis | Reduce bicarbonate concentration in replacement fluid |
| **Anticoagulant bleeding** | Heparin or argatroban systemic effect | Prefer citrate; monitor aPTT |
| **Circuit air embolism** | Loose connections, running dry | Careful setup; automated air detectors |
| **Vascular access complications** | Bleeding, hematoma, arterial puncture, pneumothorax | US guidance for all insertions |

### AKI Recovery and RRT Dependence

- Monitor for **renal recovery**: increasing urine output despite diuretics withheld, declining creatinine
- **Urine output > 400 mL/day** (or > 200 mL/6 hrs) suggests recovering renal function — consider CRRT weaning trial
- Transition order: CRRT → SLED → iHD → independence
- Approximately **30–60% of patients** who survive AKI requiring CRRT recover sufficient renal function to discontinue RRT. Recovery is less likely with baseline CKD, prolonged AKI, and advanced age.

---

## Drug Dosing on CRRT

CRRT significantly alters pharmacokinetics for many critical medications. Underdosing is the most common error — the continuous nature of clearance means that drugs with high water solubility and low protein binding are cleared substantially, reducing therapeutic concentrations.

### General Principles

- **Enhanced clearance** on CRRT: hydrophilic drugs, low molecular weight, low protein binding, small volume of distribution
- **Minimal effect** from CRRT: highly lipophilic drugs, large Vd, high protein binding
- **Always check** a CRRT-specific drug dosing reference (e.g., Micromedex, Renal Drug Handbook, ADQI recommendations) — standard renal dosing tables do not account for CRRT clearance

### Key Drugs Requiring Adjustment on CRRT

| Drug | Issue | Guidance |
|---|---|---|
| **Vancomycin** | Significantly cleared; underdosing common | Use AUC-based dosing; check levels every 24–48 hrs; typical dose 15–20 mg/kg q12–24h |
| **Piperacillin-tazobactam** | Cleared continuously; use extended infusions | 3.375–4.5g q6–8h extended infusion (4-hr) |
| **Meropenem** | Moderately cleared | 1–2g q8–12h; consider extended infusion |
| **Fluconazole** | Highly cleared by CRRT | 400–800 mg/day (higher than standard renal dosing) |
| **Acyclovir** | Water-soluble; cleared well | Standard dosing or slightly reduced; monitor for crystalline nephropathy |
| **Daptomycin** | Partially cleared | 6–8 mg/kg q48h |
| **Metoprolol / labetalol** | Lipophilic — minimal CRRT clearance | Standard dosing |
| **Amiodarone** | Highly lipophilic, protein-bound | No adjustment needed |
| **Heparin (therapeutic)** | Circuit anticoagulation confounds systemic levels | Monitor anti-Xa if systemic anticoagulation needed concurrently |
| **Vasopressors** | Not significantly cleared | Standard dosing |

> [!tip] **Antibiotic underdosing on CRRT is a patient safety issue.** In septic shock, standard renal-dosed antibiotics may achieve sub-therapeutic levels. When in doubt, consult pharmacy and use therapeutic drug monitoring (TDM).

---

## Clinical Pearls

> [!tip] **Pearl 1: Prescribe Higher Than Your Target Dose** The delivered CRRT dose is consistently lower than prescribed due to downtime. If your target is 20 mL/kg/hr, prescribe 25–30 mL/kg/hr and track delivered dose. This is the single most common prescribing error.

> [!tip] **Pearl 2: Fluid Overload Kills — Start Negative Early** Cumulative fluid overload > 10% body weight is independently associated with mortality. In a stabilized post-cardiac surgery or sepsis patient, transition to net negative balance as soon as hemodynamics allow. Don't wait for pulmonary edema to force your hand.

> [!tip] **Pearl 3: Citrate is Almost Always the Right Anticoagulant** Unless the patient has liver failure or severe refractory shock, citrate prolongs filter life and avoids systemic bleeding risk. Master the Total Ca:iCa ratio as your monitoring parameter (> 2.5 = accumulation).

> [!tip] **Pearl 4: The Kidney Sees Venous Pressure, Not Just Arterial** In cardiogenic shock and RV failure, renal venous hypertension from elevated CVP impairs renal perfusion pressure even when MAP is acceptable. Reducing CVP (diuresis, RRT ultrafiltration, vasodilators) can recover renal function without increasing MAP.

> [!tip] **Pearl 5: Don't Stop CRRT for Every Procedure** Transporting a patient for imaging, bronchoscopy, or a bedside procedure doesn't require CRRT discontinuation in most cases. Circuit downtime accumulates and significantly reduces delivered dose. Coordinate with the team — short pauses are acceptable; prolonged interruptions for non-urgent reasons are not.

> [!tip] **Pearl 6: Phosphate Replacement is Mandatory** Phosphate is aggressively cleared by CRRT and is absent from most standard replacement fluids. Hypophosphatemia causes respiratory muscle weakness, cardiac dysfunction, and hemolysis. Check phosphate every 6–8 hours and replace aggressively — it is consistently underreplaced.

> [!tip] **Pearl 7: iHD Can Be Done Without Anticoagulation** In patients with active bleeding, post-op status, or high thrombotic risk, iHD can safely be performed without anticoagulation using saline flushes alone. This is a major advantage over CRRT in selected patients and is often underutilized.

> [!tip] **Pearl 8: Urine Output > 400 mL/Day = Consider Weaning** Meaningful urine output recovering on CRRT is the best clinical indicator of renal recovery. If the patient is making > 400 mL/day urine without diuretics being pushed, consider a trial of CRRT discontinuation or transition to SLED before committing to long-term dialysis dependence.

---

## Evidence & Landmark Trials

### Landmark Trials

**ATN Trial (VA/NIH, Palevsky et al., NEJM 2008)**
- Population: 1,124 critically ill adults with AKI
- Intervention: Intensive RRT (iHD 6×/wk or CRRT 35 mL/kg/hr) vs. less-intensive (iHD 3×/wk or CRRT 20 mL/kg/hr)
- Result: No difference in 60-day mortality (53.6% vs. 51.5%), renal recovery, or organ failure
- Impact: Established that **higher-dose RRT does not improve outcomes** — 20–25 mL/kg/hr is the standard of care

**RENAL Trial (Bellomo et al., NEJM 2009)**
- Population: 1,508 critically ill adults with AKI (Australian/New Zealand)
- Intervention: CRRT 40 mL/kg/hr vs. 25 mL/kg/hr
- Result: No difference in 90-day mortality (44.7% vs. 45.0%), renal recovery, or dialysis dependence
- Impact: Confirmed ATN findings; **dose escalation above 25 mL/kg/hr offers no benefit**

**AKIKI Trial (Gaudry et al., NEJM 2016)**
- Population: 620 critically ill adults with severe AKI (KDIGO stage 3)
- Intervention: Early RRT initiation vs. delayed (wait for emergent indication)
- Result: No difference in 60-day mortality; **49% of the delayed group never required RRT**, avoiding its complications
- Impact: Demonstrated that **watchful waiting is safe** in non-emergent AKI — challenges reflexive early initiation

**IDEAL-ICU Trial (Barbar et al., NEJM 2018)**
- Population: 488 patients with early-stage septic shock + AKI
- Intervention: Early (within 12 hours of KDIGO stage 3 diagnosis) vs. delayed (48 hours later) RRT initiation
- Result: No difference in 90-day mortality; 38% of delayed group never required RRT
- Impact: Reinforced AKIKI — in septic shock AKI, **early initiation does not improve outcomes** and exposes patients to unnecessary catheter placement and RRT complications

**STARRT-AKI Trial (STARRT-AKI Investigators, NEJM 2020)**
- Population: 2,927 critically ill adults with AKI (modified ITT population: 1,465 accelerated, 1,462 standard)
- Intervention: Accelerated vs. standard RRT initiation strategy
- Result: No difference in 90-day mortality (43.9% vs. 43.7%); higher RRT dependence at 90 days in the accelerated group (10.4% vs. 6.0%; RR 1.74, 95% CI 1.24–2.43)
- Impact: **Accelerated initiation may cause harm** by preventing spontaneous recovery; standard/watchful strategy confirmed

**ELAIN Trial (Zarbock et al., JAMA 2016)**
- Population: 231 critically ill adults with KDIGO stage 2 AKI (single-center, Germany)
- Intervention: Early RRT (within 8 hours of stage 2 AKI) vs. delayed (stage 3 AKI or emergent indication)
- Result: Early RRT associated with lower 90-day mortality (39.3% vs. 54.7%, p=0.03) and higher rate of renal recovery
- Impact: The notable **outlier among timing trials** — the only RCT to show a mortality benefit for early initiation. Single-center design and selected population (predominantly post-cardiac surgery) limits generalizability, but this trial is frequently cited as evidence that early initiation may benefit certain high-risk subgroups

**AKIKI-2 Trial (Gaudry et al., Lancet 2021)**
- Population: 278 critically ill adults with severe AKI already on delayed-strategy watchful waiting (extension of AKIKI)
- Intervention: Moderately delayed (standard AKIKI criteria) vs. more-delayed (BUN ≥ 140 mg/dL as only trigger, removing oliguria)
- Result: More-delayed strategy associated with higher 60-day mortality on multivariable analysis; no difference in RRT-free days; no benefit to extreme delay
- Impact: **Defines the lower bound of safe delay** — watchful waiting is appropriate, but indefinite deferral beyond 72 hours of oliguria or BUN ≥ 140 mg/dL may be harmful. Complements AKIKI/STARRT-AKI by establishing that delay has a ceiling

**RICH Trial (Zarbock et al., JAMA 2020)**
- Population: 596 critically ill adults with AKI requiring CRRT
- Intervention: Regional citrate anticoagulation (RCA) vs. systemic unfractionated heparin (UFH)
- Result: RCA achieved significantly longer filter life (median 46.5 vs. 26.0 hours, p<0.001) and lower bleeding events (5.1% vs. 16.9%); no significant difference in 90-day mortality
- Impact: The definitive RCT establishing **RCA as first-line anticoagulation for CRRT** — longer filter life, less bleeding, with manageable metabolic trade-offs (higher hypocalcemia 4.4% vs. 0.1% and alkalosis 6.6% vs. 0.4% with RCA)

**HEMODIAFE Trial (Vinsonneau et al., Lancet 2006)**
- Population: 360 ICU patients with AKI
- Intervention: CRRT vs. iHD
- Result: No difference in 60-day survival or renal recovery
- Impact: One of the definitive trials showing **equivalent overall outcomes between CRRT and iHD** — modality choice should be driven by clinical factors. A secondary analysis of STARRT-AKI (Wald et al., *Intensive Care Med* 2023) found that initial CRRT was associated with lower composite of death or RRT dependence at 90 days (OR 0.81, 95% CI 0.66–0.99), driven primarily by lower RRT dependence — suggesting CRRT may preserve renal recovery even if overall mortality is equivalent. The 2021 Surviving Sepsis Campaign guidelines support this nuanced interpretation, finding no clear mortality difference between modalities but acknowledging CRRT may influence renal outcomes.

**Key recent findings from literature:**

1. **Murugan R et al.** "Precision management of AKI and CRRT in the ICU." _Intensive Care Med._ 2023 — Proposes biomarker-guided (TIMP-2 × IGFBP-7) RRT initiation to identify patients who will benefit from early vs. delayed strategies; highlights that one-size-fits-all timing is insufficient.

2. **Ostermann M et al.** "Recommendations on acute kidney injury biomarkers from the ADQI consensus conference." _Nat Rev Nephrol._ 2020 — Establishes urinary [TIMP-2]×[IGFBP7] (NephroCheck) as the best-validated biomarker for AKI progression risk, with values > 0.3 and especially > 2.0 identifying high-risk patients.

3. **Bai M et al.** "Regional citrate anticoagulation versus heparin anticoagulation for CRRT: meta-analysis." _PLoS ONE._ 2023 — RCA associated with significantly longer filter life (mean difference ~12 hours), lower bleeding events, and no increase in mortality vs. heparin; supports RCA as first-line.

4. **Combes A et al. (ECMO and RRT)** — Growing literature supports CRRT integration into ECMO circuits in cardiogenic shock; co-administration reduces nursing burden and improves fluid management in this population.

---

## Key Guidelines

- **KDIGO Clinical Practice Guideline for Acute Kidney Injury (2012):** Foundational guideline; recommends CRRT dose 20–25 mL/kg/hr delivered; RCA as preferred anticoagulation; no dose escalation beyond 25 mL/kg/hr; timing of RRT based on clinical context rather than fixed thresholds. Updated controversies and emerging evidence addressed in the **KDIGO Controversies Conference (Ostermann et al., *Kidney Int* 2020)**.
- **ADQI (Acute Dialysis Quality Initiative) Consensus Statements:** Provide operational guidance on CRRT dosing, anticoagulation strategies, and patient selection; periodically updated consensus from international nephrology/critical care experts.
- **Surviving Sepsis Campaign 2021 Guidelines:** Recommend against routine prophylactic RRT; support delayed initiation strategy in absence of emergent indications; no preference between CRRT and iHD for mortality, but CRRT preferred for hemodynamically unstable patients.
- **RICH Trial (Zarbock et al., JAMA 2020):** The definitive RCT establishing RCA as preferred anticoagulation strategy for CRRT; provides guidance on monitoring and management of citrate-related complications.
- **AHA/ACC 2022 Heart Failure Guidelines:** Address cardiorenal syndrome; recommend RRT consideration in refractory volume overload not responsive to pharmacologic therapy (Class IIb).

---

## References

1. Palevsky PM, Zhang JH, O'Connor TZ, et al. Intensity of renal support in critically ill patients with acute kidney injury. *N Engl J Med.* 2008;359(1):7–20.
2. Bellomo R, Cass A, Cole L, et al. (RENAL Investigators). Intensity of continuous renal-replacement therapy in critically ill patients. *N Engl J Med.* 2009;361(17):1627–1638.
3. Gaudry S, Hajage D, Schortgen F, et al. (AKIKI Investigators). Initiation strategies for renal-replacement therapy in the intensive care unit. *N Engl J Med.* 2016;375(2):122–133.
4. Barbar SD, Clere-Jehl R, Bourredjem A, et al. (IDEAL-ICU Investigators). Timing of renal-replacement therapy in patients with acute kidney injury and sepsis. *N Engl J Med.* 2018;379(15):1431–1442.
5. STARRT-AKI Investigators. Timing of initiation of renal-replacement therapy in acute kidney injury. *N Engl J Med.* 2020;383(3):240–251.
6. Vinsonneau C, Camus C, Combes A, et al. (Hemodiafe Study Group). Continuous venovenous haemodiafiltration versus intermittent haemodialysis for acute renal failure in patients with multiple-organ dysfunction syndrome. *Lancet.* 2006;368(9533):379–385.
7. Kidney Disease: Improving Global Outcomes (KDIGO) AKI Work Group. KDIGO Clinical Practice Guideline for Acute Kidney Injury. *Kidney Int Suppl.* 2012;2(1):1–138.
8. Ostermann M, Bellomo R, Burdmann EA, et al. Controversies in acute kidney injury: conclusions from a Kidney Disease: Improving Global Outcomes (KDIGO) Conference. *Kidney Int.* 2020;98(2):294–309.
9. Oudemans-van Straaten HM, Kellum JA, Bellomo R. Clinical review: anticoagulation for continuous renal replacement therapy — heparin or citrate? *Crit Care.* 2011;15(1):202.
10. Murugan R, Kerti SJ, Chang CH, et al. Association of net ultrafiltration rate with mortality among critically ill adults with acute kidney injury receiving continuous venovenous hemodiafiltration. *JAMA Netw Open.* 2019;2(6):e195418.
11. Joannidis M, Oudemans-van Straaten HM. Clinical review: patency of the circuit in continuous renal replacement therapy. *Crit Care.* 2007;11(4):218.
12. Honore PM, Jacobs R, Joannes-Boyau O, et al. Newly designed CRRT membranes for sepsis and SIRS — a pragmatic approach for bedside intensivists summarizing the more recent advances. *Ann Intensive Care.* 2013;3(1):28.
13. Patel DM, Connor MJ Jr. Intra-abdominal hypertension and abdominal compartment syndrome: an underappreciated cause of acute kidney injury. *Adv Chronic Kidney Dis.* 2016;23(3):160–166.
14. Lewis SJ, Mueller BA. Antibiotic dosing in patients with acute kidney injury: "enough but not too much." *J Intensive Care Med.* 2016;31(3):164–176.
15. Uchino S, Bellomo R, Morimatsu H, et al. Continuous renal replacement therapy: a worldwide practice survey. *Intensive Care Med.* 2007;33(9):1563–1570.
16. Ostermann M, Lumlertgul N, Jeong R, et al. Acute kidney injury. *Lancet.* 2025;405(10474):241–256. doi:10.1016/S0140-6736(24)02385-7
17. Hoste EA, Schurgers M. Epidemiology of acute kidney injury: how big is the problem? *Crit Care Med.* 2008;36(4 Suppl):S146–51. doi:10.1097/CCM.0b013e318168c590
18. Gaudry S, Hajage D, Martin-Lefevre L, et al. (AKIKI-2 Investigators). Comparison of two delayed strategies for renal replacement therapy initiation for severe acute kidney injury. *Lancet.* 2021;397(10281):1293–1300. doi:10.1016/S0140-6736(21)00350-0
19. Zarbock A, Kellum JA, Schmidt C, et al. (ELAIN Investigators). Effect of early vs delayed initiation of renal replacement therapy on mortality in critically ill patients with acute kidney injury. *JAMA.* 2016;315(20):2190–2199. doi:10.1001/jama.2016.5828
20. Zarbock A, Küllmar M, Kindgen-Milles D, et al. (RICH Investigators). Effect of regional citrate anticoagulation vs systemic heparin anticoagulation during continuous kidney replacement therapy on dialysis filter life span and mortality. *JAMA.* 2020;324(16):1629–1639. doi:10.1001/jama.2020.18618
21. Zhou Z, Liu C, Yang Y, et al. Anticoagulation options for continuous renal replacement therapy in critically ill patients: a systematic review and network meta-analysis of randomized controlled trials. *Crit Care.* 2023;27(1):222. doi:10.1186/s13054-023-04519-1
22. Rognoni C, Pohlmeier R, Tarricone R. Regional citrate anticoagulation versus systemic heparin in continuous kidney replacement therapy: examining the role of evidence in health technology assessment. *Adv Ther.* 2025;42(6):2606–2638. doi:10.1007/s12325-025-03186-8
23. Wald R, Gaudry S, da Costa BR, et al. Initiation of continuous renal replacement therapy versus intermittent hemodialysis in critically ill patients with severe acute kidney injury: a secondary analysis of STARRT-AKI trial. *Intensive Care Med.* 2023;49(11):1305–1316. doi:10.1007/s00134-023-07211-8
24. Gaudry S, Grolleau F, Barbar S, et al. Continuous renal replacement therapy versus intermittent hemodialysis as first modality for renal replacement therapy in severe acute kidney injury: a secondary analysis of AKIKI and IDEAL-ICU studies. *Crit Care.* 2022;26(1):93. doi:10.1186/s13054-022-03955-9
25. Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. *Crit Care Med.* 2021;49(11):e1063–e1143. doi:10.1097/CCM.0000000000005337
26. Gaudry S, Palevsky PM, Dreyfuss D. Extracorporeal kidney-replacement therapy for acute kidney injury. *N Engl J Med.* 2022;386(10):964–975. doi:10.1056/NEJMra2104090
27. Ostermann M, Bellomo R, Burdmann EA, et al. Controversies in acute kidney injury: conclusions from a Kidney Disease: Improving Global Outcomes (KDIGO) conference. *Kidney Int.* 2020;98(2):294–309.

---

_Created: 2026-05-05 · Last updated: 2026-05-05 (OpenEvidence review incorporated) · HVI ICU APP Team_
