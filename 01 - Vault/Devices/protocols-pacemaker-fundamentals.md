# Temporary Pacemaker Fundamentals

---

## 1. NASPE/BPEG Generic Pacemaker Code

| Position                      | Parameter                                        | Common Values              |
| ----------------------------- | ------------------------------------------------ | -------------------------- |
| **I** — Chamber Paced         | A = Atrium, V = Ventricle, D = Dual              | V (ventricle most common)  |
| **II** — Chamber Sensed       | A = Atrium, V = Ventricle, D = Dual, O = None    | V or D; O = asynchronous   |
| **III** — Response to Sensing | I = Inhibited, T = Triggered, D = Both, O = None | I (inhibited most common)  |
| **IV** — Programmability      | R = Rate-responsive, O = None                    | R (rate-adaptive) or O     |
| **V** — Antitachyarrhythmia   | P = Pacing, S = Shock, D = Both, O = None        | O (none) for temp pacers   |

---

## 2. Common Pacing Modes

| Mode | Meaning | Clinical Use |
|------|---------|-------------|
| **VVI** | Ventricle paced, ventricle sensed, inhibited | Most common; backup ventricular pacing in AF or complete heart block |
| **AAI** | Atrium paced, atrium sensed, inhibited | Sinus node dysfunction with intact AV conduction |
| **DDD** | Dual paced, dual sensed, dual response | Preserves AV synchrony; preferred in sinus bradycardia with intact conduction |
| **DDDR** | Same as DDD + rate-responsive | Physical activity compensation |
| **VOO** | Ventricle paced, no sensing | Asynchronous; magnet mode for PPM (risk of R-on-T) |
| **DOO** | Dual paced, no sensing | Asynchronous; magnet mode for ICD |
| **AOO** | Atrium paced, no sensing | Asynchronous atrial pacing |

---

## 3. Key Settings

| Setting | Definition | Typical Range |
|---------|-----------|--------------|
| **Rate** | Impulses per minute delivered by pacemaker | 60–100 bpm (set above intrinsic for threshold testing) |
| **Output (mA)** | Energy delivered per impulse; determines capture | 2–20 mA (set at 2–3× stimulation threshold) |
| **Sensitivity (mV)** | Minimum signal amplitude to inhibit pacing | Ventricular: 2–5 mV; Atrial: 1–2 mV |

### Sensitivity — The Fence Analogy

Sensitivity is **inversely proportional** to the number on the dial:

| Setting | Effect | Clinical Use |
|---------|--------|-------------|
| **↑ mV (higher number)** | Less sensitive — "raises the fence" — filters out small signals | Use when oversensing (T-wave, artifact sensing) |
| **↓ mV (lower number)** | More sensitive — "lowers the fence" — detects smaller signals | Use when undersensing (low QRS amplitude) |
| **Asynchronous mode** | Sensing disabled entirely | Magnet application; electromagnetic interference |

---

## 4. Pacemaker Failure Modes

### Failure to Pace (No Spike When Expected)

**Cause:** Oversensing — pacemaker is detecting non-cardiac signals (T-wave, artifact, EMI) and inhibiting its output.

| Cause | Intervention |
|-------|-------------|
| Oversensing (T-wave, muscle artifact) | ↑ sensitivity number (↑ mV) = less sensitive |
| Battery depletion | Replace/charge battery |
| Connection issue | Inspect and secure lead connections |
| Magnet / EMI source | Remove magnet; move away from EMI source |

### Failure to Capture (Spike Present, No QRS)

**Cause:** Electrical stimulus reaches tissue but fails to depolarize it.

| Cause | Intervention |
|-------|-------------|
| Output set below threshold | ↑ Output (mA) |
| Lead dislodgement | Reposition lead; stat CXR |
| Elevated pacing threshold | ↑ Output; check electrolytes |
| Refractory period pacing | Reassess timing |
| Exit block / fibrosis | ↑ Output; consider lead repositioning |

### Failure to Sense (Spike Fires Inappropriately — R-on-T Risk)

**Cause:** Pacemaker does not detect intrinsic cardiac activity — fires during cardiac cycle.

| Cause | Intervention |
|-------|-------------|
| Low QRS/P-wave voltage | ↓ sensitivity number (↓ mV) = more sensitive |
| Lead dislodgement | Reposition lead |
| Inappropriate sensitivity setting | Decrease sensitivity (↓ mV) |

⚠️ **R-on-T Phenomenon:** Pacing spike delivered during T-wave vulnerable period → risk of VT/VF. Most dangerous consequence of undersensing.

---

## 5. Stimulation Threshold Testing

*Goal: Determine minimum output (mA) needed to reliably capture myocardium.*

1. Set pacemaker rate 10 bpm **above** patient's intrinsic rate (to ensure pacing)
2. Confirm consistent capture (pacing spike followed by QRS/P wave)
3. Slowly **decrease output (mA)** until loss of capture is observed
4. Slowly **increase output (mA)** until capture returns — this is the **stimulation threshold**
5. Set final output at **2–3× the threshold** (safety margin)

*Example: threshold = 3 mA → set output to 6–9 mA*

---

## 6. Epicardial vs. Transvenous Temporary Pacing

| Feature | Epicardial Wires | Transvenous |
|---------|-----------------|-------------|
| Placement | Sewn onto epicardium at cardiac surgery | Floated via central vein (IJ, subclavian, femoral) |
| Indication | Post-cardiac surgery bradycardia or heart block | Non-surgical patients; elective or emergent pacing |
| Wire color/location | Atrial: right of sternum (Black = cathode/negative, Red = anode/positive) | Single or dual chamber catheter |
| Reliability | Threshold rises over days; typically removed POD 3–5 | More stable long-term but infection risk |
| Emergency use | Available immediately post-op | Can float blindly in emergency |

**Epicardial Wire Convention:**
- **Black wire = Negative (cathode)** — distal/ventricular
- **Red wire = Positive (anode)** — proximal/atrial side

---

## 7. Magnet Application

| Device | Effect of Magnet |
|--------|----------------|
| **Permanent pacemaker (PPM)** | Converts to asynchronous mode (VOO/DOO/AOO) at programmed rate — does **NOT** turn off device |
| **ICD** | Disables tachyarrhythmia detection (shock/ATP therapy suspended) — does **NOT** affect bradycardia pacing |

⚠️ Asynchronous pacing from magnet application carries R-on-T risk in patients with intrinsic rhythm. Use with caution.

---

## 8. Troubleshooting Quick Reference

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| No spike, no capture | Failure to pace (oversensing or battery) | ↑ mV (↓ sensitivity), check connections/battery |
| Spike present, no QRS | Failure to capture | ↑ Output mA |
| Spike fires on T-wave | Failure to sense (undersensing) | ↓ mV (↑ sensitivity) |
| High threshold over days | Epicardial wire aging, fibrosis | ↑ Output; consider transvenous placement |
| Hemodynamic instability | Loss of AV synchrony, inappropriate rate | Adjust mode/rate; assess for underlying rhythm |

---

_Last updated: 2026 · HVI ICU APP Team_
