## HQ Curves
#### **1. What an HQ curve is**
   For a **fixed pump speed**, the LVAD manufacturer gives you a curve:
	- **X‑axis**: head pressure (H) = pressure difference across the pump (≈ (AoP - LVP))
	- **Y‑axis**: flow $(Q)$ through the pump
  So for each speed (e.g., 4,800; 5,200; 5,600 RPM), you have one **HQ curve**:
$$Q = f(H)\quad \text{for that speed}$$
Key properties:
- As **head pressure (H) increases**, flow (Q) **decreases**.
- The **slope** of the curve (steep vs flat) tells you:
	- On a **steep** part: a given change in H → **small** change in Q
	- On a **flat** part: a given change in H → **large** change in Q
The HM3 is special in that:
- At **lower flows (<~4 L/min)**, the HQ curve is **flatter** → more sensitive to changes in $(H)$.
- At **higher flows**, it becomes **steeper** → less sensitive.

#### **2. How I apply HQ curves to a cardiac cycle**
For a given speed, the **patient’s hemodynamics** pick out two main operating points on that curve:
- **Diastole**:
	- LVP low, AoP relatively higher → $(H_{dia} = AoP - LVP)$ is **large** → move **to the right** on the HQ curve.
	- Read off $(Q_{dia})$ (lower flow).
- **Systole**:
	- LVP rises toward/above AoP → $(H_{sys} = AoP - LVP)$ becomes **smaller** → move **to the left** on the same HQ curve.
	- Read off **$(Q_{sys})$** (higher flow)
So on the HQ diagram for a fixed speed:
- You have two points:
	- Right‑hand point: $((H_{dia}, Q_{dia}))$
	- Left‑hand point: $((H_{sys}, Q_{sys}))$
- As the heart beats, the **operating point moves back and forth** between these two points along the same curve.

The **difference** $(Q_{sys} - Q_{dia})$ is the **flow pulsatility** the pump sees, and because power tracks flow, that’s what feeds into PI.

## Pulsatility Index in Hypovolemia
#### **1. How PI is computed on the HM3 (why timing matters)**
On the HM3:
- PI is based on **power variation** over about a **15‑second window**:
$$PI = \frac{Power_{max} - Power_{min}}{Power_{avg}}$$
• A **PI event** is triggered if a single second’s PI differs by >45% from the running average, and then the pump briefly drops speed.
So PI is not a beat‑by‑beat number—it is a **short‑term average**, and it’s very sensitive to **abrupt changes** in flow/power, such as those that happen during a suction beat.
#### **2. Progressive hypovolemia: why PI can drift down**
As your patient becomes hypovolemic over time (e.g., diuresis, poor intake, GI loss):
- LV filling pressure falls → LV is underfilled.
- LVAD flow decreases (both systolic and diastolic) because the pump is working across a larger pressure gradient much of the cycle.
- If the patient is on part of the HQ curve where both systolic and diastolic flow are being “pulled down together,” the **swing between max and min power** can actually get **smaller**.
In practice, for _a while_ you may see:
- **Average flow trending down**
- **PI also trending down or staying relatively flat**
This is still compatible with the paper; the “hypovolemia → higher PI in HM3” statement is a _comparative, steady‑state_ description, not a promise that PI monotonically rises from the first drop in preload.
#### **3. Just before suction: why PI suddenly spikes**
When the LV is very underfilled and the pump speed is high relative to filling:
• Toward the end of diastole or early systole, the **inflow cannula can abut or suck in the LV wall/septum**.
• On that suction beat:
	▪ Flow can **collase abruptly** for part of the cycle.
	▪ The controller sees a **very low instantaneous Power<sub>min</sub>** compared with the immediately preceding beats.
	▪ Over that 15‑second averaging window, you now have:
◦ A **much lower Power<sub>min</sub>
◦ Power<sub>max</sub> that hasn’t fallen proportionally as much yet
◦ Power<sub>avg</sub> that’s lower but not as low as Power<sub>min</sub>
That means the ratio

$$\frac{Power_{max} - Power_{min}}{Power_{avg}}$$
can **jump up sharply** → **PI spike**.
That abrupt relative change is exactly what triggers a **PI event** and the **automatic speed drop**, which is the device’s attempt to relieve suction.

So the pattern you see clinically is very logical:
1. **Preload gradually falling*
	- Flow drifts down
	- PI gradually drifts down or flattens
2. **Approaching suction**
	- LV gets intermittently very underfilled
	- A few beats show dramatic drop in flow/power during part of the cycle
	- **PI spikes** in that short window
	- A PI event is logged, speed drops
If suction persists and the ventricle is essentially stuck to the cannula, you can then see **low flow with low pulsatility again** (both max and min power are low and similar).


## Real World Example
**Step‑by‑step real‑world style example**
Let’s imagine a HeartMate 3 patient at a fixed speed (say 5,200 RPM), and follow them through:
1. Baseline (well filled)
2. Progressive hypovolemia (hours)
3. Right before suction (seconds)
I’ll use **made‑up but internally consistent numbers** to show how PI can first drift down, then spike just before suction.

#### **1. Baseline (well filled)**
Assume the LV is adequately filled, normal-ish hemodynamics for an LVAD patient:
- HM3 speed: 5,200 RPM
- True LVAD flow: around **4.5 L/min**
- There is a healthy beat‑to‑beat swing in flow/power.

Let’s assign some approximate **power values over a 15‑second window**:
- $(Power_{max} = 5.5\ \text{W})$ (during systole, when LV pressure is higher and pump has more work/flow)
- $(Power_{min} = 4.5\ \text{W})$ (during diastole, when LV pressure is lower vs AoP)
- $(Power_{avg} = 5.0\ \text{W})$

Then:
$$PI = \frac{5.5 - 4.5}{5.0} = \frac{1.0}{5.0} = 0.20$$

In real units the HM3 PI is typically reported around 2–6; think of this as an abstracted PI of **“around 4”** in real device units. We’ll just track _relative_ changes.

So:
• Flow: ~4.5 L/min
• PI: **moderate** (your “personal baseline” for this patient)

#### **2. Progressive hypovolemia (over time)**
Now the patient gets progressively underfilled (e.g., diuresis, poor oral intake):
- LV preload falls → LV underfilled
- True LVAD flow falls: say from **4.5 → 3.2 L/min**
- LV contractility may also worsen a bit because of lower preload.

Over a 15‑second window, you might see:
- $(Power_{max} = 4.7\ \text{W})$ (systole is weaker than before)
- $(Power_{min} = 3.9\ \text{W})$ (diastolic flow is also down)
- ($Power_{avg} = 4.3\ \text{W})$

Now:
$$PI = \frac{4.7 - 3.9}{4.3} = \frac{0.8}{4.3} \approx 0.186$$

Relative to baseline (0.20):
- **Average power/flow is down**
- The swing $(Power_{max} - Power_{min})$ is **slightly smaller**
- So **PI is a bit lower** than baseline
On the controller you might notice:
- Flow: trending from 4.5 → 3.2 L/min
- PI: from 4.0 → 3.4 (for example)
So you’re seeing a **downtrending PI** as the patient gets drier—this matches what you describe clinically.

#### **3. Right before a suction event**
Now the LV is very underfilled, and at 5,200 RPM the pump is _aggressively_ unloading a small LV. On certain beats:
- The inflow cannula starts to tug on the ventricular wall or septum.
- During part of the cycle, **inflow becomes severely restricted** → true flow (and thus power) drop sharply for that brief portion.
This drastic change can happen **abruptly over just a few beats** within the 15‑second PI window.
Let’s say, in this short window:
	- Peak systolic power doesn’t fall much more:
	- $(Power_{max} \approx 4.6\ \text{W})$ (similar to the previous hypovolemic state)
- But **on a suction beat**, diastolic/inflow power **plummets**:
	- $(Power_{min} \approx 3.0\ \text{W})$ (instead of ~3.9 W
- The overall average power in that 15‑second slice might be:
	- $(Power_{avg} \approx 3.8\ \text{W})$
Now the PI for that window becomes:
$$PI = \frac{4.6 - 3.0}{3.8} = \frac{1.6}{3.8} \approx 0.42$$

Compare:
- Baseline PI ≈ 0.20
- Progressive hypovolemia PI ≈ 0.186
- **Pre‑suction PI ≈ 0.42** → more than doubled

That **sudden jump** in $((Power_{max} - Power_{min})/Power_{avg})$ over a few seconds is exactly what:
- Creates the **“high PI” spike** you see,
- Triggers a **PI event**, and
- Makes the HM3 **auto‑drop speed** to its low‑speed limit to relieve suction.

You might notice:
- **Trend view**: PI slowly drifting from, say, 4–5 down to 3–3.5 as the patient gets drier.
- **Just before suction**: a **brief, sharp PI spike** (6–7) with a PI event, often with corresponding suction alarms or abdominal discomfort, dizziness, etc.
- After auto speed reduction and maybe volume resuscitation:
	- Flow stabilizes somewhat
	- PI goes back down toward a new, safer baseline.

#### **4. Why this doesn’t contradict the most education papers on PI**
Most article’s general heuristic for HM3 in **steady hypovolemia** is:
- Compared with HMII, HM3 tends to show **relatively higher PI** because it “sees” very low diastolic flows more accurately. (HMIII can under estimate systolics while HMII can under estimate diastolics)
Our **real-world observation** is about the **time course**:
1. As the patient is progressively dried out:
	- LV filling, power, and flow decrease
	- PI can **drift downward** (the swing in power is modestly smaller)
2. Right before or at suction:
	- A **very low Power<sub>min</sub>** appears during suction beats
	- $(Power_{max} - Power_{min}) **jumps**, (Power_{avg})$ is lower → **PI spikes**
	- PI event + suction alarms + auto speed change
Those are **different time scales** and **different parts of the hypovolemia spectrum**, and they fully fit together.

## Pulsatility Index in Hypertension
Hypertension is a **pure afterload problem**, so it mainly acts on the **aortic side** of the pump and changes the pressure gradient across it. That has two big effects:
- **Decreases mean LVAD flow**
- **Increases PI on the HeartMate 3**
Let’s tie that into the scenarios we’ve been talking about.

#### **1. What hypertension does to the pump gradient**
Think of the pump “head pressure” as:
$$\Delta P \approx AoP - LVP$$


With **hypertension**:
- Aortic pressure (**AoP**) rises.
- LV pressure (**LVP**) may rise somewhat, but in a sick LV it **often can’t keep up** with AoP.
- So (AoP - LVP) becomes **larger**, especially in **diastole**, where LVP is low and AoP is high.

Numerically (illustrative):
- Normotension:
	- Diastole: LVP 10, AoP 80 → $(\Delta P = 70)$ mmHg
	- Systole:  LVP 35, AoP 85 → $(\Delta P = 50)$ mmHg
- Hypertension:
	- Diastole: LVP 10, AoP 100 → $(\Delta P = 90)$ mmHg
	- Systole:  LVP 35, AoP 105 → $(\Delta P = 70)$ mmHg
So hypertension makes the gradient **bigger at every point**, but **diastole is hit hardest**.

#### **2. Effect on flow and PI in HM3**
For a fixed LVAD speed:
$$Q \propto \frac{1}{AoP - LVP}$$
So with hypertension:
- **Mean flow falls** (higher afterload → pump moves less blood).
- **Diastolic flow falls more than systolic flow** because:
	- In diastole: AoP is high and LVP is very low → huge (\Delta P).
	- In systole: LVP rises, so $(\Delta P)$ is still big, but **less extremely so**.
That means:
- $(Flow_{min})$ (diastolic) drops a lot.
- $(Flow_{max})$ (systolic) drops, but **less**.
- So the **swing** $(Flow_{max} - Flow_{min})$ actually **gets larger**, even though everything is shifted downward.
Because power tracks flow, the **power swing** $(Power_{max} - Power_{min})$ also **increases relative to the lower average power**, so:
$$PI_\text{raw} = \frac{Power_{max} - Power_{min}}{Power_{avg}}$$goes **up**, and the HM3 displays:
- **Lower flow**
- **Higher PI**
That’s exactly what the education from Abbott materials emphasize: for HM3,
- Hypertension → **low flow, high PI**.
#### **3. How this interacts with a “nonpulsatile” / very weak LV**
Even in your very sick, “nonpulsatile” patients:
- There is usually **some** LV pressure swing (even if you can’t feel a pulse).
- Hypertension **amplifies** how different diastole vs systole look **across the pump**:
	- Diastole: AoP way up, LVP low → very high $(\Delta P)$ → very low diastolic flow.
	- Systole: AoP up, LVP up some → $(\Delta P)$ still high, but not as extreme → relatively higher systolic flow.
So compared to their normotensive baseline:
- **Mean flow is down**.
- **Min flow is disproportionately down**.
- **Max–min difference is relatively bigger**.
- → **PI rises**, often into the high range (PI 6+, sometimes even >10 on HM3).
From your perspective at the bedside:
• A “nonpulsatile” HM3 patient with **MAP 120** or a Doppler 110–120
• LVAD flow might be 2.5–3.0 L/min
• PI might jump into the **6–9 range** despite no palpable peripheral pulse.

#### **4. Hypertension + hypovolemia → suction risk**
Now combine **progressive hypovolemia** with **hypertension**:
- Hypovolemia:
	- Drops LVP (especially in diastole) → increases (AoP - LVP) → lowers mean flow.

- Hypertension:
	- Raises AoP → further increases (AoP - LVP) → lowers flow more, especially in diastole.
Together they:
- **Severely underfill the LV** (low preload).
- **Greatly increase head pressure** the pump is working against.
- Push the LVAD into:
	- **Low flow**, and
	- **Very high PI** (because diastolic Power_min plummets relative to systolic Power_max).
This is a classic setup for:
- **Frequent PI events**
- **Suction events** (especially if speed is high relative to LV filling)
So the pattern you might see:
- Baseline: PI ~4, flow ~4 L/min, MAP ~80–85
- Hypertension develops: PI climbs (6–9), flow falls (3 → 2.5 L/min), MAP ~110–120
- If also hypovolemic/RV‑down: very low flow, **PI spikes around suction beats**, auto speed drops.

**In short:**
- Hypertension in HM3 **increases afterload**, especially in diastole → **lowers mean flow**.
- It also **increases PI**, because minimum (diastolic) flow/power falls more than maximum (systolic), widening the power swing relative to the average.
- In a weak, “nonpulsatile” LV, this can push a baseline PI in the 3–4 range into 6–10, even without a palpable arterial pulse—and, in the presence of low preload, can strongly predispose to suction.
- Higher gradient -> lower flow. Lower gradient -> higher flow