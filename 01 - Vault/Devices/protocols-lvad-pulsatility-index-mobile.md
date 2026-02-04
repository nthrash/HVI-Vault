# LVAD pulsatility index (PI) — mobile-friendly

## Quick nav
* [[#HQ curves]]
* [[#HM3 PI in hypovolemia]]
* [[#Real-world example (numbers)]]
* [[#HM3 PI in hypertension]]

---

## HQ curves

### What an HQ curve is
For a **fixed pump speed**, the LVAD manufacturer provides a curve:

* **Y-axis:** head pressure \(H\)
    * Pressure difference across the pump \(\approx (AoP - LVP)\)
* **X-axis:** flow \(Q\)

For each speed (example: 4,800 / 5,200 / 5,600 RPM) you have one HQ curve:

\[Q = f(H)\quad \text{(for that speed)}\]

Key properties:

* As **head pressure increases**, **flow decreases**.
* The **slope** matters:
    * **Steep** segment: \(\Delta H\) → **small** \(\Delta Q\)
    * **Flat** segment: \(\Delta H\) → **large** \(\Delta Q\)

HeartMate 3 (HM3) nuance:

* At **lower flows** (roughly <4 L/min), the HQ curve is **flatter** → more sensitive to changes in \(H\)
* At **higher flows**, it becomes **steeper** → less sensitive

Image:

![](99%20-%20Meta/Assets/Images/LVAD%20Pulsatility%20Index-1765872461334-optimized.png)

### Applying an HQ curve across the cardiac cycle
At a fixed speed, the patient’s physiology selects two main operating points on the same HQ curve:

* **Diastole**
    * LVP low, AoP relatively higher
    * \(H_{dia} = AoP - LVP\) is **larger**
    * Operating point shifts to **higher H / lower Q** → read \(Q_{dia}\)
* **Systole**
    * LVP rises toward/above AoP
    * \(H_{sys} = AoP - LVP\) becomes **smaller**
    * Operating point shifts to **lower H / higher Q** → read \(Q_{sys}\)

As the heart beats, the operating point moves back and forth along the same curve.

* **Flow pulsatility** the pump experiences:

\[\Delta Q = Q_{sys} - Q_{dia}\]

Because **power tracks flow**, this pulsatility is what drives PI behavior.

---

## HM3 PI in hypovolemia

### How PI is computed on the HM3 (timing matters)
HM3 PI is based on **power variation** over roughly a **15-second window**:

\[PI = \frac{Power_{max} - Power_{min}}{Power_{avg}}\]

Notes:

* A **PI event** is triggered if a single second’s PI differs by >45% from the running average.
* When triggered, the pump briefly drops speed.
* So PI is **not** purely beat-to-beat; it’s a short-term trend metric and is very sensitive to abrupt power/flow changes (e.g., suction beats).

### Progressive hypovolemia (why PI can drift down)
As preload gradually falls (diuresis, poor intake, GI loss):

* LV filling pressure falls → LV underfilled
* LVAD flow falls (systolic and diastolic)
* On some parts of the HQ curve, both \(Q_{sys}\) and \(Q_{dia}\) decrease together → the **swing** in power/flow can shrink

What you may see over hours:

* **Flow trending down**
* **PI trending down** (or staying flat)

This can still be consistent with “HM3 hypovolemia tends to show higher PI” statements, because those are often **comparisons at steady state**, not guaranteed monotonic changes during a time course.

### Approaching suction (why PI can spike)
When the LV is very underfilled and speed is high relative to filling:

* The inflow cannula may intermittently contact/"suck" the LV wall or septum
* On a suction beat, inflow can be abruptly restricted → flow collapses briefly

What the controller “sees” in that 15-second window:

* **Power_min** can drop abruptly
* **Power_max** may not fall proportionally (at first)
* **Power_avg** drops, but not as dramatically as **Power_min**

Result:

\[PI = \frac{Power_{max} - Power_{min}}{Power_{avg}}\]

The numerator increases relative to the denominator → **PI spikes** → can trigger a **PI event** and speed drop.

### Typical clinical pattern
* Preload gradually falling:
    * Flow drifts down
    * PI drifts down or flattens
* Just before/at suction:
    * A few beats show dramatic drop in flow/power
    * **PI spikes** (short window)
    * PI event logged; speed drops
* If persistent suction / “stuck” ventricle:
    * Low flow with low pulsatility again (max and min power both low and closer together)

---

## Real-world example (numbers)
Made-up but internally consistent numbers to illustrate “down, then spike.”

### 1) Baseline (well filled)
Assume:

* Speed: 5,200 RPM
* True flow: ~4.5 L/min

15-second window power values:

* \(Power_{max} = 5.5\ \text6\)
* \(Power_{min} = 4.5\ \text6\)
* \(Power_{avg} = 5.0\ \text6\)

\[PI = \frac{5.5 - 4.5}{5.0} = 0.20\]

(Think: a moderate “personal baseline” PI.)

### 2) Progressive hypovolemia (hours)
Assume flow falls: ~4.5 → 3.2 L/min.

* \(Power_{max} = 4.7\ \text6\)
* \(Power_{min} = 3.9\ \text6\)
* \(Power_{avg} = 4.3\ \text6\)

\[PI = \frac{4.7 - 3.9}{4.3} \approx 0.186\]

So:

* Mean flow/power down
* Swing modestly smaller
* PI slightly down

### 3) Right before suction (seconds)
Suction beat appears in the window:

* \(Power_{max} \approx 4.6\ \text6\)
* \(Power_{min} \approx 3.0\ \text6\)
* \(Power_{avg} \approx 3.8\ \text6\)

\[PI = \frac{4.6 - 3.0}{3.8} \approx 0.42\]

Compare:

* Baseline: 0.20
* Progressive hypovolemia: 0.186
* Pre-suction: 0.42 (spike)

---

## HM3 PI in hypertension
Hypertension is primarily an **afterload** change (aortic side), changing the pressure gradient across the pump.

Typical HM3 pattern with hypertension:

* **Mean flow decreases**
* **PI increases**

### What hypertension does to the pump gradient
Head pressure:

\[\Delta P \approx AoP - LVP\]

With hypertension:

* AoP rises
* LVP may rise somewhat, but often not enough to match AoP
* So \(AoP - LVP\) becomes larger, especially in diastole

Illustrative numbers:

* Normotension:
    * Diastole: LVP 10, AoP 80 → \(\Delta P = 70\) mmHg
    * Systole: LVP 35, AoP 85 → \(\Delta P = 50\) mmHg
* Hypertension:
    * Diastole: LVP 10, AoP 100 → \(\Delta P = 90\) mmHg
    * Systole: LVP 35, AoP 105 → \(\Delta P = 70\) mmHg

### Effect on flow and PI
For a fixed speed, higher gradient → lower flow (directionally):

\[Q \propto \frac{1}{AoP - LVP}\]

Why PI rises:

* **Diastolic flow** falls more (AoP high + LVP low → very large gradient)
* **Systolic flow** falls too, but typically less
* So \(Flow_{max} - Flow_{min}\) increases relative to the lower mean
* Since power tracks flow, **power swing** increases relative to average → PI increases

### “Nonpulsatile” / very weak LV patients
Even if you can’t feel a peripheral pulse, there is usually **some** LV pressure swing.

Hypertension magnifies the diastole-vs-systole difference across the pump, so you can see:

* MAP high (e.g., 110–120)
* Flow low (~2.5–3.0 L/min)
* PI higher (often 6–9) despite minimal palpable pulsatility

### Hypertension + hypovolemia = suction risk
Combination effects:

* Hypovolemia lowers LVP (especially diastole) → increases \(AoP - LVP\)
* Hypertension raises AoP → further increases \(AoP - LVP\)

Together:

* Mean flow can fall significantly
* Diastolic power/flow can plummet
* PI can run high and become unstable
* Higher risk of PI events and suction

### Takeaway
* Higher gradient → lower flow
* Lower gradient → higher flow
