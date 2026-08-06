## Table of Contents

1. [HQ Curves](#hq-curves)
2. [Pulsatility Index in Hypovolemia](#pulsatility-index-in-hypovolemia)
3. [Real World Example](#real-world-example)
4. [Pulsatility Index in Hypertension](#pulsatility-index-in-hypertension)

---
## Governing Relationship Equations
The three relationships used in the worked examples correspond to three distinct physical layers: a **pressure term** the pump must overcome, a **hydraulic transfer function** (the H-Q curve) that converts that pressure into flow, and an **electromechanical readout** (motor power) from which the console back-calculates everything it displays.
  
$$\Delta P_{inst} = AoP_{inst} - LVP_{inst}$$
$$Q_{inst} \approx f(\text{rpm}, \Delta P_{inst}) \quad \text{— at fixed rpm, } Q \downarrow \text{ as } \Delta P \uparrow$$
$$PI = \frac{Power_{max} - Power_{min}}{Power_{avg}}$$
  
  
**1. Head pressure:** $\Delta P = AoP - LVP$ (e.g. ) $\Delta P_{inst} = AoP_{inst} - LVP_{inst}$ - which adds the ${inst}$ to each value of the equation. Discussed below.
The pump is a conduit between two pressure chambers; the gradient it must work against is the instantaneous difference between the outflow anastomosis (ascending aorta) and the inflow cannula (LV apex). The AHA states this directly: CF-LVAD flow is directly proportional to pump speed and **inversely related to the pressure difference across the inlet and outlet orifices**.
  
Key properties of this term:  
- It is **instantaneous, not mean** — it changes continuously through the cardiac cycle. Native LV contraction raises LVP, which lowers ΔP, which is why flow is greater in systole than diastole.
- **ΔP is minimized in systole and maximized in diastole.** In diastole, LVP falls to LVEDP (single digits to low teens) while AoP is still supported by pump output, so ΔP is at its widest and flow at its lowest.
- ΔP is never zero in a well-supported patient; when it approaches zero the LV pressure crosses aortic pressure and the aortic valve opens.  
- **Preload and afterload move it differently.** Hypovolemia lowers both LVP peaks and troughs, shifting the entire ΔP range upward. Hypertension raises AoP (diastolic disproportionately), also shifting ΔP upward but with a widened excursion.
  
**2. Transfer function: At a fixed rpm, the pump has a characteristic pressure–flow (H-Q) curve. The **local slope of that curve** — what was written as \(k\) in $Q = Q_0 - k\Delta P$ — determines how much flow excursion a given ΔP swing produces. This is a linearization for teaching; the real curve is nonlinear, particularly near low flow and backflow. $Q_{inst} \approx f(rpm, \Delta P_{inst})$
- **Flat H-Q curve (large k)**: small pressure change → large flow change. More preload/afterload sensitive, more pulsatile waveform, larger flow excursions (roughly 0–10 L/min). Flat curves also confer a degree of protection against suction, since rising ΔP from underfilling produces a large compensatory flow drop
- **Steep H-Q curve (small k)**: pressure changes produce relatively small flow changes; flow range narrower (~3–7 L/min for the axial HMII).
- Terminology is not settled: the older framing maps axial → steep and centrifugal → flat, but bench characterization of four pumps found **flat characteristics for the HVAD and HeartMate II, and steeper curves for the HeartMate 3 and Incor** — the opposite of the class-based assumption for HMII and HM3. Device-specific curves should govern reasoning, not pump architecture.
- The intercept $Q_0$ is set by **rpm**; raising speed shifts the whole curve upward without much changing its slope. Consequently, higher speeds increase mean flow and unloading but tend to **reduce** pulsatility, since the LV contributes proportionally less.
- Modeling work confirms the clinical consequence: at the same mean pump flow, flatter-curve pumps generate higher flow pulsatility and greater arterial pulse pressure, but slightly inferior ventricular unloading and peripheral perfusion.
  
The following figure contrasts the two curve morphologies and marks shutoff pressure, low-flow alarm, and maximum flow.  
![|431|478x665](https://storage.googleapis.com/wiley-multimedia/cms/9781119633846_c3/asset/a26996a7-a705-469d-916b-8cdea39f17c6/assets/images/large/c03f006.jpg)
Figure 6 A) With a “steep” pressure–flow relationship, any given change in pressure is associated with a relatively small change in flow. B) In a “flat” pressure–flow relationship, a small change in pressure is associated with a relatively larger change in flow. Pumps with a “flat” pressure–flow relationship are more sensitive to changes in preload and afterload conditions and in general impart a greater degree of pulsatility to the systemic circulation. Source : With permission from Abbott Laboratories, Chicago, IL.  
  
**3. Readout:  This is where the physics becomes an estimate. There is no flow sensor and no pressure sensor. The controller holds rpm constant and measures how much **motor power** is required to do so; since power varies with the hydraulic work being done, flow is back-calculated from speed and power. $PI = (P_{max} - P_{min})/P_{avg}$

Two consequences follow directly from that derivation:  
- **Displayed flow is directly proportional to power consumption.** Anything that increases the work of spinning the impeller at a set speed — most importantly **thrombus on the rotor** — raises power and therefore raises displayed flow, which may not represent true output to the patient.
- **PI is a power-derived surrogate for flow pulsatility**, reflecting how much the LV is filling and how much native contraction is contributing. It is most useful as a **trend** against the patient's own baseline rather than an absolute number.
  
**Where the simplification breaks down**  
The static H-Q curve assumes steady flow. Under real pulsatile conditions the ΔP–Q relationship traces a **counterclockwise loop** rather than a single line, because of inertance and the phase offset between pressure and flow — so the same ΔP corresponds to different flows depending on where in the cycle it occurs.Bench and hybrid-loop validation of the HM3 similarly found the current-to-flow relationship can be ambiguous, reinforcing that all three equations should be used to reason about **direction of change**, not to compute a patient's cardiac output.  



  
## Real World Scenarios
Worked examples below chain the physiology explicitly: **ΔP = AoP − LVP** at each phase of the cardiac cycle → instantaneous flow off the pump's H-Q curve → power → PI. The pressure and flow numbers are illustrative (the console does not measure ΔP), but the directional relationships are the validated ones: flow is proportional to speed and **inversely related to ΔP**, and displayed flow is derived from power, not measured.

For a locally linear H-Q segment at fixed speed: $Q = Q_0 - k \cdot \Delta P$, where **k is the H-Q slope** (L/min per mm Hg). A flatter H-Q curve = larger k = more flow swing per unit ΔP swing as discussed above.
  
**Case 1 — Baseline euvolemia, HM3 at 5,400 rpm, AoP 110/85**  
- Systole: ΔP = 110 − 95 (peak LVP) = **15 mm Hg** → Q ≈ 6.4 L/min  
- Diastole: ΔP = 85 − 10 (LVEDP) = **75 mm Hg** → Q ≈ 3.6 L/min  
- ΔP swing = 60 mm Hg; flow swing = 2.8 L/min; mean Q ≈ 5.0 L/min  
- Power tracks flow: max 5.4 W, min 4.6 W, avg 5.0 W  
- $PI = (5.4 - 4.6)/5.0 = \mathbf{0.16}$ 
  
**Case 2 — Hypovolemia / RV failure (preload ↓)**  
Lower LV filling drops both systolic and diastolic LVP, so **every ΔP in the cycle rises** and the swing narrows.  
- Systole: ΔP = 100 − 70 = **30 mm Hg** → Q ≈ 5.2 L/min  
- Diastole: ΔP = 88 − 3 = **85 mm Hg** → Q ≈ 3.1 L/min  
- ΔP swing = 55 mm Hg but **absolute ΔP shifted upward** → mean Q falls to ≈ 4.0 L/min  
- Power: max 4.9, min 4.5, avg 4.7 → $PI = 0.4/4.7 = \mathbf{0.085}$
  
If ΔP in diastole rises enough that flow approaches zero, the inflow cannula draws the septum in — a **suction event**, seen as sharp downward deflections toward 0 L/min. Low PI with falling flow should prompt evaluation for hypovolemia, bleeding, RV failure, tamponade, or arrhythmia.  

**Case 3** - **Suction Event**
The LV cavity collapses far enough that the lateral wall/septum intermittently apposes the inflow cannula. This is a **mechanical inlet obstruction superimposed on low preload**, so the H-Q relationship no longer applies during the occluded portion of the cycle — effective inflow ΔP becomes very large as intracannular pressure drops sharply. 
- Diastole (cannula occluded by endocardium): inflow effectively obstructed → Q ≈ 0.5 L/min, power collapses to 3.2 W. Because remember power is liner to flow.
- Systole (contraction pulls wall off the inlet, LVP transiently 80 mm Hg): ΔP = 95 − 80 = 15 mm Hg → Q ≈ 6.4 L/min, power 5.3 W
- Mean Q ≈ 2.4 L/min → **low-flow alarm**
- Power: max 5.3 W, min 3.2 W, avg 3.9 W
- $PI=(5.3−3.2)/3.9=\mathbf{0.54}$ 

Interpretation: **flow down, PI up sharply.** Numerator widened (near-zero diastolic power against preserved systolic ejection) while the denominator fell. This is the published pattern — persistent flow <2.5 L/min with a high PI in a HM3 patient, which on 4D cardiac CT proved to be suction of the midventricular lateral wall against the inflow cannula, most prominent in systole; echo alone missed it because of metallic artifact. Volume repletion resolved alarms and symptoms. 
Note that the ±0.54 excursion from a 0.14 baseline far exceeds the **±45% change from the previous 15-second running average** that defines a logged PI event.

That **sudden jump** in $((Power_{max} - Power_{min})/Power_{avg})$ over a few seconds is exactly what:
- Creates the **“high PI” spike** you see,
- Triggers a **PI event**, and
- Makes the HM3 **auto‑drop speed** to its low‑speed limit to relieve suction.
  
**Case 4 — Uncontrolled hypertension (afterload ↑), AoP 160/120**  
The distinguishing feature is that **diastolic ΔP rises far more than systolic ΔP**, because the LV still generates a systolic pressure while diastolic AoP climbs unopposed.  
- Systole: ΔP = 160 − 130 = **30 mm Hg** → Q ≈ 5.2 L/min (peak only modestly reduced)  
- Diastole: ΔP = 120 − 12 = **108 mm Hg** → Q ≈ 1.8 L/min (trough markedly reduced)  
- Mean Q falls to ≈ 3.5 L/min while the **flow swing widens to 3.4 L/min**  
- Power: max 5.1, min 3.9, avg 4.3 → \(PI = 1.2/4.3 = \mathbf{0.28}\)  

This is the counterintuitive one: **PI rises while mean flow falls**, and diastolic flow may approach zero or go negative. Higher LVAD speeds raise aortic pressure and unload the LV further, reducing peak systolic pressure and native systolic contribution.
  
**Case 5 — Improved native contractility / reduced afterload**  
- Systole: ΔP = 105 − 100 = **5 mm Hg** → Q ≈ 7.4 L/min  
- Diastole: ΔP = 78 − 8 = **70 mm Hg** → Q ≈ 3.8 L/min  
- Wide swing (3.6 L/min) with preserved mean Q ≈ 5.5 L/min  
- Power: max 6.2, min 4.4, avg 5.2 → \(PI = 1.8/5.2 = \mathbf{0.35}\)  
  
At ΔP ≈ 0–5 mm Hg the LV pressure transiently exceeds aortic pressure and the **aortic valve opens**, adding ejection in parallel with pump flow.  
  
**Case 6 — Pump thrombosis (ΔP unchanged, power decoupled)**  
Here the hemodynamics are stable, so the ΔP values are the same as baseline (systolic 15, diastolic 75 mm Hg), but rotor drag increases the power needed to spin at 5,400 rpm.  
- Power: max 9.8, min 8.4, avg 9.0 — a **+4 W rise from the 5.0 W baseline**  
- $PI = 1.4/9.0 = \mathbf{0.156}$ — essentially unchanged from baseline  
  
Recurrent power values ≥2 W above baseline raise concern for impeller thrombosis, and because estimated flow is derived proportionally from power, thrombosis produces a **falsely elevated displayed flow** despite unchanged or worsened true output. This is why absolute power must be read alongside PI rather than PI alone.  
  
**Why the same ΔP swing gives different PI across devices**  
  
The value of k differs by pump architecture. For the same pressure change, centrifugal pumps generate flow excursions ranging roughly **0 to 10 L/min**, whereas axial (HMII) flow ranges about **3 to 7 L/min**. In a simulated partial-support condition, flow pulsatility ranged from **4.1 L/min (Incor) to 9.1 L/min (HVAD)**, with negative diastolic flow observed in three of four pumps tested. Note that hydraulic characterization work describes the HVAD and HMII as having flat curves and the HM3 and Incor as steeper — terminology that differs from the older axial-versus-centrifugal framing, so device-specific curves matter more than pump class.
  
The power-flow relationship underlying every calculation above is shown here for both pump architectures.  
  
![|506x600](https://storage.googleapis.com/wiley-multimedia/cms/9781119633846_c3/asset/d36db143-a697-4cc2-91ee-f667de197efd/assets/images/large/c03f010.jpg)
Figure 10 Relationship between pump power (motor current) and flow for (A) HeartMate 3 pump (centrifugal) (where relationship is nearly linear over operating range of pump) and (B) HeartMate II pump (axial) (where relationship is not as linear, particularly at lower ranges of flow). Source : With permission from Abbott Laboratories, Chicago, IL.  
  
One important caveat on the steady-state H-Q assumption used in these examples: under pulsatile conditions the pressure-flow relationship inscribes a **counterclockwise loop** in the H-Q domain rather than following a single curve, because the phase relationship between ΔP and flow varies continuously through the cycle. Simulated LV dysfunction decreases the loop area. The dynamic H-Q loop is a more accurate representation of clinical operating conditions than the steady-flow curve.

## Aortic Valve
The aortic valve (AV) is central to understanding PI because it determines **how much of total cardiac output flows through the pump versus through the native outflow tract**.

**AV Opening and PI**
Whether the AV opens during systole depends on whether **LV pressure exceeds aortic pressure**. At higher pump speeds, the LVAD aggressively unloads the LV, reducing LV systolic pressure while simultaneously raising aortic pressure via pump outflow. This keeps the **transaortic valve gradient reversed** (aortic > LV), so the AV remains closed and nearly all cardiac output goes through the pump. The result is **lower PI** — the flow waveform flattens because the native LV contributes minimally to pulsatile ejection.

At **lower pump speeds**, the LV retains more volume, generates higher systolic pressures, and can overcome aortic pressure to **open the AV**. When this happens, the native LV ejects through both the pump and the AV, producing a larger systolic flow surge and **higher PI**. [1] Echocardiographically, intermittent AV opening is considered desirable and is a goal of speed optimization.

Conversely, an AV that **opens widely every beat** suggests the LVAD is not adequately unloading the LV — the pump may be malfunctioning or the speed is too low.
**Consequences of a Persistently Closed AV**

When the AV remains chronically closed, several problems develop:
- **Commissural fusion** — lack of leaflet motion leads to fibrosis and fusion of the AV commissures
- **De novo aortic insufficiency (AI)** — develops in **~25%–33%** of patients within 12 months, driven by leaflet fusion, reduced compliance, and aortic root dilation.
- **Stasis and thrombosis** — a closed valve creates a zone of blood stasis in the aortic root above the valve.

Once AI develops, it creates a **recirculation loop**: blood pumped into the aorta regurgitates back through the incompetent AV into the LV, then back through the pump — increasing pump flow without increasing effective forward cardiac output. This can falsely elevate displayed pump flow and PI while the patient's hemodynamics deteriorate.

**Speed Modulation to Promote AV Opening**

The HeartMate 3 incorporates an **"artificial pulse"**  (Or previously known as Lavare cycle) — a cyclical speed modulation every 2 seconds that intermittently reduces rotor speed, transiently lowering aortic pressure to promote AV opening. However, this artificial pulse is **asynchronous** with the cardiac cycle, so its ability to promote AV opening varies depending on timing relative to native systole. Programmed speed reduction algorithms (e.g., in HMII) have been shown to **quadruple aortic pulsatility index** in the aortic root when AV opening is achieved.

---

_Created: 2026-03-01 · Last updated: 2026-03-01 · HVI ICU APP Team_
