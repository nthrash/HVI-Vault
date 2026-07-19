# Contacts Comparison Report
**CSVs (June 2025) vs contacts.json (last modified 2026-03-28)**

---

## ✅ No Phone Number Discrepancies
For all contacts found in both sources, phone numbers match. Good.

---

## 🆕 Missing from contacts.json — Need to Add

| Name | Role | Phone | Source |
|------|------|-------|--------|
| Donabel | AHF NP | (408) 515-8433 | AHF Contacts 6/6/2025 |
| Monica Martin | LBJ Noninvasive Front Desk | (832) 360-7175 | Master Contacts 6/7/2025 |

---

## ✏️ Contacts Needing Updates

### Jonathan You — Add Missing Phone
- **contacts.json**: phone is blank
- **Master CSV**: phone = 857-256-0996
- **Action**: Add phone number

### Hariharan — Add First Name
- **contacts.json**: `firstName="Hariharan"`, `lastName=""` (no first name)
- **EP CSV**: Listed as **Ramesh Hariharan**, "UT EPHeart Attending and Director"
- **Action**: Set `firstName="Ramesh"`, `lastName="Hariharan"`, update name field

### Jay Patel — Full Name Update
- **contacts.json**: Listed as "Jay Patel" (CV Surgeon)
- **AHF CSV**: Full name is **Jayeshkumar Patel**, "AHF Cardiothoracic Surgery Attending" (same phone: 832-803-7489)
- **Action**: Update firstName to "Jayeshkumar", update display name

### Carl Zehner — Role/Category Change
- **contacts.json**: Cardiology Fellow, category = `cardiology`, phone (508) 221-2382
- **Master CSV**: Now listed as **MD Anderson Cardiology Attending** (same phone)
- **Action**: Update role to "MDA Cardiology Attending", move to `mda` category, update display name

### Ahmed Zedan — Affiliation Change
- **contacts.json**: "LBJ Cardiology Attending for EP", category = `lbj`
- **EP CSV**: Listed as **"UT EPHeart Attending"**
- **Action**: Update role and category to `ep` (or `ut_cardiology`), update display name

### Myrshia Hunter — Possible Name Change
- **contacts.json**: "Myrshia Hunter - MDA PA", phone (281) 384-3098
- **Master CSV**: "Myrishia Woods - MDA PA" with the same phone number
- **Action**: Confirm whether she changed her name (married?) and update accordingly

---

## 🗑️ Likely Departed Cardiology Fellows
The following fellows are in contacts.json but **not in the UTH Cardiology Fellows CSV (June 2025)**. They may have graduated or left the program. Review and consider removing or archiving:

| Name | Phone |
|------|-------|
| Alexander Dang | (405) 488-4281 |
| Alexander Diaz | (618) 445-3568 |
| Andrew Huebert | (504) 725-7807 |
| Andrew Kim | (714) 345-6337 |
| Andrew Lai | (908) 543-6565 |
| Andrew Li | (321) 652-2163 |
| Avinash Thangirala | (516) 491-2834 |
| Bhanu Maturi | (334) 777-9303 |
| Carl Zehner *(now MDA attending — see above)* | (508) 221-2382 |
| Daniel McNeish | (678) 907-7187 |
| David Boone | (832) 209-9760 |
| Grace Huang | (402) 422-0061 |
| Husain Shadid | (310) 745-6345 |
| Jawad Chohan | (405) 850-5506 |
| Joshua Hahn | (903) 530-0801 |
| Joshua Irfan | (903) 310-0961 |
| Kemal Patel | (561) 827-5168 |
| Kenneth Hoang | (901) 438-3552 |
| Kevin Horan | (713) 540-9921 |
| Martin Chacon Portillo | (940) 594-7563 |
| Matthew Brown | (205) 210-7111 |
| Matthew Bruce | (713) 865-6470 |
| Mohammed Tanbir | (214) 609-4073 |
| Mustafa Al Qaysi | (832) 890-0113 |
| Shruti Singh | (713) 575-4715 |
| Shyam Desai | (864) 525-0051 |
| Sid Chauhan | (360) 341-4743 |
| Siddharthana Datta | (617) 800-6837 |
| Talha Ahmed | (859) 893-7922 |
| Tarun Kadeni | (925) 324-4951 |

---

## ℹ️ Notes
- PCCM contacts in contacts.json have no corresponding CSV — no comparison possible for that group.
- The "other" category in contacts.json was excluded from the "not in CSV" check (catch-all bucket).
- Non-person entries (lines, spectra phones, unit desks) were excluded from person-matching comparison.
