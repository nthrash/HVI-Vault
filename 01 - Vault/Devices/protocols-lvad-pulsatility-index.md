## Understanding LVAD Pump Parameters: Equations, Mechanics, and Case-Based Teaching  
---
### Part 1 — The four console parameters
Only one of these is directly set by the clinician. The others are consequences.  

| Parameter              | Set or derived? | What it actually is                                                                         |
| ---------------------- | --------------- | ------------------------------------------------------------------------------------------- |
| Speed (rpm)            | **Set**         | The only true input. Fixed; does not vary with the cardiac cycle.                           |
| Power (W)              | **Measured**    | Real, directly measured motor current × voltage. The most trustworthy number on the screen. |
| Flow (L/min)           | **Estimated**   | Back-calculated from power and speed using a manufacturer algorithm. Not a measurement.     |
| Pulsatility index (PI) | **Derived**     | Beat-to-beat variation in power, scaled to mean power.                                      |
|                        |                 |                                                                                             |
  
VAD parameters are the "vital signs" of the pump, but only power is directly measured. Flow is calculated, not measured, and is derived from speed and power consumption, so anything that changes power (for example, thrombus on the impeller, which requires more work to spin at the same speed) will change the displayed flow. **The flow on the controller may not represent the true output of blood to the patient.
  
---    
### Part 2 — The governing equation
All continuous-flow LVADs obey one relationship:
$$Q = f(\text{rpm}, \Delta P)$$
$$\Delta P = \text{AoP} - \text{LVP}$$ 
Flow is **directly proportional to pump speed** and **inversely related to the pressure difference** across the inlet (LV pressure) and outlet (aortic pressure). ΔP is the **head pressure** — the pressure hill the pump must climb.  
  
_Analogy:_ a garden hose at a fixed spigot setting. Aim it uphill and less water comes out the end. The spigot has not changed; the hill has.  
  
**Why flow pulsates even though the pump does not.** Speed is constant, but LVP is not. During native systole, LV contraction raises intracardiac pressure, which **lowers** ΔP, so pump flow **rises**. During diastole, LVP falls, ΔP **widens**, and flow **falls**. These phasic swings impart a diminished pulse to the circulation. If native contraction is absent — for example, ventricular fibrillation — LVP stops swinging and flow becomes **truly nonpulsatile**.
  
**The H-Q curve.** Plotting flow against head pressure at a fixed speed yields a downward-sloping line (H = head, Q = flow) — the pump's "spec sheet." The patient's operating point slides along this single curve twice per second: 
- Systole → ΔP shrinks → slide right → more flow  
- Diastole → ΔP widens → slide left → less flow  
  
Over a narrow range this is approximated by:  $$Q \approx Q_0 - k \cdot \Delta P$$  
where **k is the slope** — liters per minute of flow gained or lost per mm Hg of ΔP.  
- **Large k (flat curve, centrifugal pumps such as HM3/HVAD):** small pressure changes produce large flow changes. More preload/afterload sensitive, more pulsatile, wider flow range.  
- **Small k (steep curve, axial pumps such as HMII):** flow stays in a narrow band regardless of pressure.  

![508](99%20-%20Meta/Assets/Images/LVAD%20Pulsatility%20Index-1765872461334-optimized.png)
  
This is why centrifugal pumps are **more sensitive to systemic hypertension** than axial-flow pumps, with decreases in flow and cardiac output and less effective ventricular unloading at elevated afterload.

Raising rpm does not change the slope much; it shifts the entire curve upward. This is the physiologic basis of a ramp study.  
  
_Caveat:_ the single-curve model assumes steady flow. In a beating heart, ΔP and flow are slightly out of phase because blood has inertia, so the operating point actually inscribes a small counterclockwise loop each beat rather than retracing one line. The steady-flow curve is the teaching tool; the loop is reality.  
  
---  
  
### Part 3 — How flow is actually calculated, and why hematocrit matters

This section explains the single most misunderstood number on the console.  

**The algorithm.** Displayed pump flow is calculated to integrate the hydraulic power required to move blood across the pressure head, **accounting for estimated viscous losses based on the manually entered hematocrit**. Bench and hybrid-loop identification work on the HeartMate 3 confirmed that estimation is based on **speed, motor current, and viscosity**, with a very strong correlation between estimated flow and torque-generating current (r² > 0.99). The pulsatility index is likewise derived directly from current.
  
Conceptually:  
  
$$Q_{est} = f(\text{rpm},\ I_{motor},\ \text{viscosity [from entered Hct]})$$  
  
**Why hematocrit is in the equation.** Blood is viscous. At a given rpm, a thicker fluid requires more motor torque — and therefore more current — to move the same volume. The algorithm must decide whether a rise in current means _more flow_ or _thicker blood_. It resolves this using the hematocrit value a human typed into the controller. If that number is wrong, the flow display is wrong.  
  
**The two directional errors to teach:**  
- **Entered Hct too high (blood actually thinner than the device believes):** the algorithm attributes some of the measured current to viscous drag that is not present, and **underestimates** true flow.  
- **Entered Hct too low (blood actually thicker than the device believes):** the algorithm credits the extra current to flow, and **overestimates** true flow.  
  
**Practical ICU implications:**  
1. **Hematocrit must be updated when it changes materially** — after transfusion, after a GI bleed, after aggressive diuresis or volume loading. A patient transfused from Hct 22% to 32% with no hemodynamic change at all will show a shift in displayed flow purely from the viscosity term.  
2. **Anemia is common in this population** (GI bleeding from arteriovenous malformations and acquired von Willebrand syndrome), so this is not a theoretical concern.
3. **Displayed flow is not cardiac output.** Only a moderate correlation exists between LVAD-estimated flow and PA-catheter cardiac output. The discordance is explained by aortic valve opening (blood leaving the LV _around_ the pump is invisible to the device), hematocrit differences, and aortic regurgitation with recirculation.
4. **Accuracy is limited even under ideal conditions.** The HM3 flow estimator has an RMSE of **1.63 L/min** (r = 0.86). The current–flow relationship is **ambiguous — one current value can correspond to two different flow rates** — and the nonlinearity obscures the systolic portion of flow because current declines during peak systole at higher flow rates. Accuracy is worst precisely in the transition between full and partial support, which is where most patients live. The authors recommend interpreting HM3 values and trends with caution.
5. **Pump design matters for estimator reliability.** With correction for viscosity, flow estimation is more reliable for the centrifugal HeartMate 3, whose current–flow relationship is nearly linear over the operating range, than for the axial HeartMate II. Bench comparisons similarly found that power-based flow estimation is accurate for the centrifugal HeartWare pump, where flow increases linearly with power uptake, but not for axial pumps, where low flows are overestimated unless pressure-head data are added.
  
**Bottom line for the bedside:** trust power, respect trends, and treat the absolute flow number as an estimate with roughly ±1.5 L/min of uncertainty. **Never titrate therapy to the displayed flow alone** — corroborate with MAP, perfusion, urine output, lactate, echo, or invasive hemodynamics.  
  
---  
  
### Part 4 — The aortic valve
  
The aortic valve is the switch that determines how the ventricle empties.  
- **Valve opening intermittently:** the LV ejects both through the pump and across the valve. Larger LVP swings, wider ΔP swings, higher PI. Generally desirable — it washes the aortic root, reduces the risk of root thrombus and de novo aortic insufficiency, and preserves some native work. (Note that flow crossing the valve is _not_ counted by the console.)  
- **Valve permanently closed (higher speeds, low preload, high afterload):** 100% of output goes through the pump. LVP swings are blunted, ΔP swings narrow, PI falls, and the arterial waveform becomes nearly flat with a narrow pulse pressure.  
  
Chronic valve closure matters: aortic regurgitation develops from commissural fusion of the leaflets, increased leaflet strain, and higher retrograde flow velocity. Intermittent valve opening and BP control help reduce this risk.
  
Speed titration is largely a negotiation about how often this valve opens.  
  
---  
  
### Part 5 — Pulsatility index 
$$PI = \frac{P_{max} - P_{min}}{P_{avg}}$$
measured as a running average over the preceding interval (some references express the identical concept using flow rather than power).  

**Reading the fraction:**  
- **Numerator $(P{max} − P{min})$** = how much the native ventricle contributes and LV preload. It reflects the size of the LVP swing, which reflects preload and contractility.  
- **Denominator $P{avg}$** = the total workload of the pump.  
  
So PI answers: _how much of the total circulatory work is the patient's own heart still doing and how much preload is there for the LV?_ Trends in PI assist providers in assessing the impact of therapies or conditions that expand or contract intravascular volume.
  
**Critical caveat on units.** PI scaling is not uniform. Consoles and some protocols report PI multiplied by 10 (typical HeartMate values roughly 3–7; a normal Doppler-derived pulsatility index is <10, with higher values suggesting inflow obstruction). The unmultiplied ratio yields values an order of magnitude smaller (0.1–0.7). 
**Never compare a PI across scaling conventions.** What matters clinically is the trend against that patient's own baseline on their own console.  
  
**The PI event.** The controller logs a discrete PI event when there is a **±45% change from the previous 15-second running average**. On the HeartMate II this triggers an automatic drop to the low-speed limit. A PI excursion in _either_ direction flags instability in LV filling.  
  
---  
  
### Part 6 — Worked examples
Single HM3 patient at fixed 5,400 rpm. Linearized H-Q slope used throughout: **k ≈ 0.047 L/min per mm Hg**, i.e. Q ≈ 7.1 − 0.047·ΔP. Numbers are illustrative and use the unmultiplied PI convention; recall the ±1.63 L/min estimator error in real life.
  
**Case 1 — Baseline euvolemia, AoP 110/85**  
- Systole: ΔP = 110 − 95 (peak LVP) = 15 mm Hg → Q ≈ 6.4 L/min  
- Diastole: ΔP = 85 − 10 (LVEDP) = 75 mm Hg → Q ≈ 3.6 L/min  
- ΔP swing = 60 mm Hg; flow swing = 2.8 L/min; mean Q ≈ 5.0 L/min  
- Power: max 5.4 W, min 4.6 W, avg 5.0 W  
$$PI = (5.4 - 4.6)/5.0 = 0.16$$  
  
_Interpretation:_ normal. Ventricle contributing meaningful pulsatile work.  
  
**Case 2 — Early hypovolemia (over-diuresis), AoP 100/85**  
Reduced preload lowers both peak LVP and LVEDP, so ΔP shifts upward across the whole cycle and the LV contributes less pulsatile work.  
- Systole: ΔP = 100 − 70 (blunted peak LVP) = 30 mm Hg → Q ≈ 5.7 L/min  
- Diastole: ΔP = 85 − 4 (LVEDP) = 81 mm Hg → Q ≈ 3.3 L/min  
- ΔP swing = 51 mm Hg; flow swing = 2.4 L/min; mean Q ≈ 4.4 L/min  
- Power: max 4.7 W, min 4.1 W, avg 4.4 W  
$$PI = (4.7 - 4.1)/4.4 = 0.14$$   
_Interpretation:_ **flow down, PI down** — the classic underfilling pattern. Aortic valve now permanently closed. Nothing yet obstructing the inlet.  
  
**Case 3 — Progression to intermittent suction, AoP 95/85**  
The LV cavity collapses far enough that the lateral wall or septum intermittently apposes the inflow cannula. This is a **mechanical inlet obstruction superimposed on low preload**, so the H-Q relationship no longer applies during the occluded portion of the cycle.  
- Diastole (cannula occluded by endocardium): inflow effectively obstructed → Q ≈ 0.5 L/min, power collapses to 3.2 W  
- Systole (contraction pulls the wall off the inlet, LVP transiently 80 mm Hg): ΔP = 95 − 80 = 15 mm Hg → Q ≈ 6.4 L/min, power 5.3 W  
- Mean Q ≈ 2.4 L/min → **low-flow alarm**  
- Power: max 5.3 W, min 3.2 W, avg 3.9 W  
$$PI = (5.3 - 3.2)/3.9 = 0.54$$  
  
_Interpretation:_ **flow down, PI up sharply.** The numerator widened (near-zero diastolic power against preserved systolic ejection) while the denominator fell. The excursion from a 0.14 baseline far exceeds the ±45% threshold that defines a logged PI event.  
  
**Case 4 — Uncontrolled hypertension, same 5,400 rpm, euvolemic, AoP 150/125 (MAP ≈ 133)**  
Nothing about the patient's volume status or the pump has changed. Afterload alone has risen, so **every point on the cardiac cycle now sits at a higher ΔP** and the operating point slides left along the same H-Q curve. Because the LV can no longer eject across the valve, LVP builds and LVEDP rises.  
- Systole: ΔP = 150 − 100 (peak LVP, now higher because the LV is poorly unloaded) = 50 mm Hg → Q ≈ 4.8 L/min  
- Diastole: ΔP = 125 − 15 (elevated LVEDP) = 110 mm Hg → Q ≈ 1.9 L/min  
- ΔP swing = 60 mm Hg; flow swing = 2.9 L/min; mean Q ≈ 3.3 L/min → **low-flow alarm despite a full ventricle**  
- Power: max 4.0 W, min 3.0 W, avg 3.4 W  
$$PI = (4.0 - 3.0)/3.4 = 0.29$$  
  
_Interpretation:_ **flow down, PI up, LV dilating.** This is the mirror image of hypovolemia. The numerator is preserved or increased (a loaded LV still generates a large pressure swing) while mean power falls, so PI rises. The critical teaching point is that **increasing pump speed will not fix this** — patients with uncontrolled BP are at risk for low flow "for which increasing LVAD speed will not help," along with pump thrombosis, aortic insufficiency, RV failure, and stroke. The correct intervention is **afterload reduction**.  
  
_Why this matters beyond the alarm:_ high systemic vascular resistance leads to decreased LVAD flow, increased stasis, and increased risk of pump thrombosis; hypertension also worsens HF symptoms by decreasing LV unloading, creating subendocardial ischemia, and fueling ventricular arrhythmias. An MAP >90 mm Hg at discharge is associated with stroke and thrombosis. Elevated MAP can also produce **false-positive results for flow obstruction on ramp testing** — check and treat the BP before concluding a pump is thrombosed.
  
_Treatment:_ beta-blockers are the most frequently used antihypertensives, followed by ACE inhibitors and aldosterone antagonists; diuretics for volume and hydralazine/nitrates for further afterload reduction. **Avoid** rate-limiting (nondihydropyridine) calcium antagonists such as verapamil and diltiazem, and avoid routine ACE+ARB dual therapy unless part of a myocardial recovery protocol. Renal function should be considered before using aldosterone antagonists. 

**Side-by-side**  

|Parameter|Case 1: Euvolemic|Case 2: Hypovolemic|Case 3: Suction|Case 4: Hypertensive|
|---|---|---|---|---|
|Systolic ΔP|15 mm Hg|30 mm Hg|15 mm Hg (only when wall releases)|50 mm Hg|
|Diastolic ΔP|75 mm Hg|81 mm Hg|Inlet occluded|110 mm Hg|
|Q systole / diastole|6.4 / 3.6|5.7 / 3.3|6.4 / 0.5|4.8 / 1.9|
|Mean Q|5.0 L/min|4.4 L/min|2.4 L/min|3.3 L/min|
|Power max/min/avg (W)|5.4 / 4.6 / 5.0|4.7 / 4.1 / 4.4|5.3 / 3.2 / 3.9|4.0 / 3.0 / 3.4|
|PI|0.16|0.14|**0.54**|**0.29**|
|LV size|Normal|Small|Collapsed|**Dilated**|
|Signature|Normal|↓flow, ↓PI, small LV|↓flow, ↑PI, collapsed LV|↓flow, ↑PI, **large LV + high MAP**|
|Fix|—|Volume|Volume ± temporary ↓speed|**Afterload reduction, not ↑speed**|

**The discriminator between Case 3 and Case 4** — both show low flow with high PI — is **LV size and blood pressure**. Suction has a collapsed LV with a low or normal MAP; hypertension has a dilated LV with a high MAP. A Doppler MAP and a quick echo separate them in minutes.  
  
---  
  
### Part 7 — The published real-world case
A 72-year-old man with ischemic cardiomyopathy, four months post-HeartMate 3, was referred for recurrent low-flow alarms with ten days of fatigue and dizziness. Exam was unremarkable and inflammatory markers were normal. Device interrogation showed **persistent flow <2.5 L/min with a high PI**. Echocardiography was unchanged from prior except for a collapsible IVC; the inflow cannula could not be visualized because of metallic artifact. **4D cardiac CT** demonstrated suction of the midventricular lateral wall against the inflow cannula, most prominent in systole. Gradual volume repletion (weight 77 → 80 kg) resolved both symptoms and alarms, and a new dry weight with an adjusted diuretic regimen was established.
  
Two teaching points: echocardiography alone can miss dynamic suction because of metallic artifact, and device telemetry must be correlated with imaging to establish the mechanism.
  
---  
  
**Part 8 — Bedside pattern recognition**  

|Pattern|Most likely mechanism|First moves|
|---|---|---|
|↓ Flow, ↓ PI, ↓ power|Hypovolemia, RV failure, tamponade, arrhythmia|Volume/CVP assessment, echo, rhythm check|
|↓ Flow, ↑ PI, **small/collapsed LV**|Intermittent inflow limitation — suction or cannula malposition|Volume repletion; consider temporary speed reduction; escalate imaging if echo non-diagnostic|
|↓ Flow, ↑ PI, **dilated LV, high MAP**|**Uncontrolled hypertension / excessive afterload**|Doppler MAP, afterload reduction — do **not** increase speed|
|↑ Power with ↓ or discordant flow|Pump thrombosis|LDH, plasma free hemoglobin, urgent VAD team notification|
|Flow number shifts with no clinical change|**Stale hematocrit entry, or post-transfusion viscosity change**|Update Hct in the controller; correlate with clinical perfusion|
|Flat/absent pulsatility|Ventricular arrhythmia or absent native contraction|ECG, rhythm strip|

Higher pulsatility index values specifically suggest the possibility of **inflow obstruction**, but confirm with imaging and BP before acting.  
  
---  
  
### Part 9 — Management of a suction event
Any condition producing LV underfilling places a patient at risk: hypovolemia, RV failure, cardiac tamponade, or a pump speed set too high for prevailing hemodynamics. During suction the LVAD "sucks down" the LV to an abnormally small size, producing a right-to-left septal shift. Patients with a malpositioned inflow cannula are predisposed to intermittent obstruction and to ventricular arrhythmias from mechanical endocardial contact. Large increases in pump speed unload the LV and may predispose to suction events, which can precipitate ventricular arrhythmias.
  
The recommended treatment is **twofold: (1) decrease the pump speed, and (2) identify and treat the underlying cause.** Monitoring for suction is also an integral component of any ramp or speed-change protocol.
  
Practical sequence:  
1. **Assess the patient, not just the console** — mentation, Doppler MAP, perfusion, rhythm.  
2. **Confirm underfilling** — IVC collapsibility, small LVEDD, septal shift toward the inflow cannula.  
3. **Differentiate the cause before touching the speed dial** — hypovolemia (low CVP and PAWP); RV failure (high CVP, low PAPi, RV dilation); tamponade (high CVP, effusion); hypertension (high MAP, dilated LV — opposite management).  
4. **Treat the cause.** Simulator data indicate that speed reduction alone mitigates suction but does not improve hemodynamics, whereas volume infusion and systemic vasoconstriction both mitigate suction and improve cardiac power. Speed reduction buys time; it is not the definitive fix.  
5. **Escalate imaging if echo is non-diagnostic**, given metallic artifact over the inflow.
6. **Involve the VAD coordinator/team early** and review the controller log file — abrupt flow drops point to pre-pump/inflow problems, gradual drops to post-pump/outflow problems.  
  
---  
### Part 10 — Seven things to take away
1. Speed is the only thing set; flow and PI are consequences of the pressure the pump is fighting.  
2. Flow rises in systole and falls in diastole because LV contraction narrows ΔP — not because the pump changes
3. **Flow is calculated, not measured** — derived from speed, motor current, and a viscosity correction based on the hematocrit someone typed in. Keep the entered Hct current.
4. Displayed flow correlates only moderately with true cardiac output and carries roughly ±1.5 L/min of error; aortic valve opening and aortic regurgitation make it worse
5. PI is a measure of how much work the native ventricle is still contributing and LV preload.  
6. **Low flow + low PI = underfilling. Low flow + high PI = either inflow obstruction or excessive afterload** — distinguish by LV size and MAP.  
7. **CF-LVADs are preload dependent and afterload sensitive.** In a hypertensive patient with low flow, increasing speed will not help; lower the blood pressure.
  

### References
1. [HFSA/SAEM/ISHLT Clinical Expert Consensus Document on the Emergency Management of Patients With Ventricular Assist Devices](https://linkinghub.elsevier.com/retrieve/pii/S1053-2498\(19\)31499-8). Givertz MM, DeFilippis EM, Colvin M, et al. The Journal of Heart and Lung Transplantation : The Official Publication of the International Society for Heart Transplantation. 2019;38(7):677-698. doi:10.1016/j.healun.2019.05.004.
2. [Device Therapy and Arrhythmia Management in Left Ventricular Assist Device Recipients: A Scientific Statement From the American Heart Association](https://www.ahajournals.org/doi/abs/10.1161/CIR.0000000000000673?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed). Gopinathannair R, Cornwell WK, Dukes JW, et al. Circulation. 2019;139(20):e967-e989. doi:10.1161/CIR.0000000000000673.
3. [Management of Hypertension in Patients With Ventricular Assist Devices: A Scientific Statement From the American Heart Association](https://www.ahajournals.org/doi/abs/10.1161/HHF.0000000000000074?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed). Eisen HJ, Flack JM, Atluri P, et al. Circulation. Heart Failure. 2022;15(5):e000074. doi:10.1161/HHF.0000000000000074.
4. [Value of Invasive Hemodynamic Assessments in Patients Supported By Continuous-Flow Left Ventricular Assist Devices](https://pubmed.ncbi.nlm.nih.gov/37804313). Rodenas-Alesina E, Brahmbhatt DH, Mak S, et al. JACC. Heart Failure. 2024;12(1):16-27. doi:10.1016/j.jchf.2023.08.019.
5. [Accuracy of the HeartMate 3 Left Ventricular Assist Device Flow Estimation](https://pubmed.ncbi.nlm.nih.gov/40447681). Abart T, Grujic M, Aigner P, et al. Scientific Reports. 2025;15(1):18971. doi:10.1038/s41598-025-03743-9.
6. [Continuous‐Flow Left Ventricular Assist Devices: Perspective on Engineering and Pump Technology](https://onlinelibrary.wiley.com/doi/10.1002/9781119633884.ch3). Paul C. Tang,, and Francis D. Pagani,. Chapter 3.
7. [Pump Flow Estimation From Pressure Head and Power Uptake for the HeartAssist5, HeartMate II, and HeartWare VADs](https://pubmed.ncbi.nlm.nih.gov/23820282). Pennings KA, Martina JR, Rodermans BF, et al. ASAIO Journal (American Society for Artificial Internal Organs : 1992). 2013 Jul-Aug;59(4):420-6. doi:10.1097/MAT.0b013e3182937a3a.
8. [Multimodality Imaging Vignettes of Left Ventricular Assist Device Complications](https://pubmed.ncbi.nlm.nih.gov/41263712). Ciocca N, Reineke D, Hunziker L, et al. JACC. Cardiovascular Imaging. 2026;19(3):412-425. doi:10.1016/j.jcmg.2025.10.017.
9. [Echocardiography in the Management of Patients With Left Ventricular Assist Devices: Recommendations From the American Society of Echocardiography](https://linkinghub.elsevier.com/retrieve/pii/S0894-7317\(15\)00380-6). Stainback RF, Estep JD, Agler DA, et al. Journal of the American Society of Echocardiography : Official Publication of the American Society of Echocardiography. 2015;28(8):853-909. doi:10.1016/j.echo.2015.05.008.
---

_Created: 2026-03-01 · Last updated: 2026-08-05 · HVI ICU APP Team_
