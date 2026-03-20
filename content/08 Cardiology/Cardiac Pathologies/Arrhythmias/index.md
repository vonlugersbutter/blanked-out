---
title:
description:
created: 2025-10-17T15:54:21-04:00
modified: 2026-01-29T00:18:50-05:00
---
Let's talk about the basics behind cardiac arrhythmias, before we actually get into the specific kinds. 

These are also called dysrhythmias. 
- Bradycardias 
- Tachycardias
	- Supraventricular (atrium/AV node)
	- Ventricular (His-Purkinje, ventricles)
- You can have ==issues with impulse formation and/or conduction==
## Start with the basics
Recall the whole gradual depolarization associated with a pacemaker cell. Remember that from [Normal Cardiac Anatomy and Physiology](08%20Cardiology/Normal%20Cardiac%20Anatomy%20and%20Physiology.md)? 

![](00%20media/{90EFE3D5-7133-4345-8517-BD953CAEB2B3}.png)

Remember that these cells don't activate the fast Na+ channels, because their RMP is too high. Instead, they've got that funny current, the channels of which open at around -50 mV. In cells in the SA, this gradual phase 4 depolarization is also driven by 
- Slow inward Ca++ through L-type channel
- Outward K+ flow ↓ 
- Inward Na+ through Na+/Ca++ exchanger
	- Driven by Ca++ release from the SR, which is referred to as the calcium clock

Slow Ca++ movement through L-type channels is what's behind the slower depolarization. Note that it's less rapid than places like the myocardium, hence why the Purkinje fibers are faster. But then, do the Purkinje fibers use Na+ fast channels to depolarize? Either way, repolarization occurs through the closure of these Ca++ channels, and opening of K+ channels to allow it to leave. 

So we can think about these pacemaker cells (-60 mV RMP) in relation to non-pacemaker cells (-90 mV). If they're close together, the lower RMP in the non-pacemaker cell will compete with the higher RMP in the pacemaker cells → ↓ funny current → ↓ automaticity. This is more important when it comes to areas where these different cells are closely coupled, like in AV node or near Purkinje. Also, if this decoupling gets diminished because cells have died due to ischemia, then that would ↑ automaticity → ↑ arrythmias. 

3 things control the rate of firing from these pacemakers
- Rate of phase 4 depolarization
	- Funny current ↑ → ↑ depolarization speed 
- Maximum negative diastolic potential
- Threshold potential 

Automaticity gets suppressed (overdrive suppression) by activity of the Na+/K+ ATPase. It hyperpolarizes the cell. If there's too much depolarization → intracellular Na+ ↑ → more Na+/K+ activity → restoration.

- The SA node is the native pacemaker at 60-100 bpm
- Ectopic pacemakers have the potential to be pacemakers if necessary
	- AV + bundle of His: 50-60 bpm
	- Purkinje: 30-40 bpm 
## Altered impulse formation
Happens in the following three ways
- Altered automaticity
	- SNS ↑ → ↑ funny channels open + ↑ Ca++ channels open
		- Steeper phase 4 slope → ↑ depolarization
		- And better phase 0 depolarization 
	- PNS (major controller, especially of the SA node and AV node that are more sensitive to PNS than the myocardium)
		- Funny channels ↓ 
		- Ca++ channels open ↓ 
		- Ach sensitive K+ channels open ↑ 
	- Escape rhythms 
		- SA node get suppressed by ↑ PNS
		- Latent pacemaker escape beat, which can turn into a persistent escape rhythm 
		- The latent pacemaker can also assume control if it is faster than the SA node
			- Catecholamines can do this, or ischemia/hypoxemia 
			- This is considered an ectopic beat (ectopic beat is quicker than normal rhythm, escape beat is later due to slowed sinus)
- Abnormal automaticity
	- Myocardial cells outside special conduction pathway can acquire automaticity
		- No funny current
		- Can create an ectopic beat, which turns into an ectopic rhythm 
		- Become leakier, so their RMP goes up to -60 mV, which would also mean that their Na+ fast channels wouldn't work 
		- They start showing that slow phase 4 depolarization 
- Triggered activity
	- Abnormal extra heartbeats (see [Electrocardiograms](08%20Cardiology/Electrocardiograms.md) for afterdepolarization discussion)
	- Early afterdepolarizations
		- Phase 2: Na+ channels are inactive, so upstroke here is Ca++ governed
		- Phase 3: Na+ channel upstroke 
		- Leads to polymorphic V tach, Torsades de pointes
	- Delayed afterdepolarizations 
		- Usually caused by too much intracellular Ca++ → leads to chloride currents and Na+/Ca++ exchanger activity
## Altered impulse conduction
- Conduction block → unexcitable portion 
	- Caused by ischemia, fibrosis, inflammation, some drugs
	- Could be transient vs permanent
	- Could be unidirectional or bidirectional
	- Functional block 
		- Depolarization to cells that are still in the refractory period
		- Can be fixed with drugs that prolong AP duration
	- Fixed block 
		- Barrier like fibrosis or scarring
- AV block → causes escape beats or rhythms 
	- Removes the normal overdrive suppression that keeps latent pacemakers in the His-Purkinje system in check. Thus, conduction block usually results in emergence of escape beats or escape rhythms, as the more distal sites assume the pacemaker function
### Re-entry 
- Re-entry is something that can commonly cause tachycardias → repeated, circular depolarization
- Unidirectional block = usually where refractory periods are heterogenous or there is cellular dysfunction like in fibrosis
- Requirements for a re-entry loop
	- Unidirectional block
	- Slowed conduction through alternative pathway 
- This will show up as a monomorphic V tach → QRS all look the same
![400](00%20media/{ADB12298-A9A5-4990-947A-E116C280159E}.png)
- There's a way to get polymorphic V tach → caused by spiral waves, a form of re-entry
- Continuously changing QRS complexes
- No QRS complexes at all = [Ventricular Fibrillation (VF or V-fib)](08%20Cardiology/Cardiac%20Pathologies/Arrhythmias/Ventricular%20Fibrillation%20(VF%20or%20V-fib).md)
### Wolff-Parkinson-White (WPW) syndrome
- AV node causes normal slowing, right?
- In 1/1500 people there's an additional connection between atria and ventricles called the accessory pathway
	- This is usually the bundle of Kent, some microscopic conductive fibers near the mitral or tricuspid annulus 
- This leads to a very short PR interval, because this pathway is not slowed like the AV node is 
- So we have a faster accessory pathway, but it is slower later down because it has to go through myocardium, instead of Purkinje fibers
- The normal AV going to Purkinje + the accessory going to the myocardium causes a wider QRS complex and a delta wave to show up 
![](00%20media/{185DAAB6-297F-464A-93A8-5339DC99CCF0}%201.png)

- This forms the ideal conditions for re-entry
- A premature beat could encounter a block in one pathway, but not the other. Then it goes down, and then back up through the free pathway to the atria. Then it goes down again to the ventricles. This creates a large anatomical loop, that has a lot of potential for tachycardia

![](00%20media/{D52E2F52-616A-4FB9-B81B-EABF9AEF672A}.png)
## Therapies
- Shocks for tachycardia
- Pacing for bradycardias
- Drugs
### Bradycardias
- Anticholinergics → ↓ PNS activity
- Beta 1 receptor agonists to mimic NE or epi function
- Temporary pacemakers for bradycardia
	- External thoracic = usually only used for emergencies, can be painful because it's also shocking muscle and nerves 
	- Transvenous unit = through electrode catheter in RA/RV; less uncomfortable, but there is risk of infection or clot formation 
- Permanent pacemakers
	- Leads, pacing electrodes through axillary or subclavian veins → RA/RV 
	- Coronary sinus to cardiac vein, if you want it to LV 
	- Can also be used for heart failures
	- Pacemaker responds to things, it's adaptive
### Tachyarrhythmias
- Protection of patient
- Specific resolution of the issue
- Examples of pharmacologic strategies
	- Rhythms caused by too much automaticity
		- Reduce slope of phase 4 depolarization
		- Make diastolic potential more negative
		- Make threshold potential less negative
	- Re-entry circuits
		- Inhibit conduction in re-entry circuit to make it fail
		- Increase refractory period in the re-entrant circuit
		- Suppress premature beats
	- Triggered activity
		- Shorten action potential duration (for early afterdepolarizations)
		- Lower intracellular Ca++ (for delayed afterdepolarizations)
- Keep in mind, a lot of these drugs can cause proarrhythmia
- Can also be toxic noncardiac side effects, so we can use other strategies
- Other strategies
	- Vagotonic maneuvers
		- Carotic sinus massage → located at the bifurcation of the internal and external carotid arteries on either side of the neck → increase vagal tone
		- Valsalva maneuver → inhale and then to forcefully exhale against a closed glottis for ~10 seconds
		- Modified Valsalva → Valsalva maneuver is undertaken in the semi-recumbent position, immediately followed by shifting the patient to a supine position and lifting both of the patient’s legs (“passive leg raising”) for 45 seconds
	- External cardioversion = terminate SVTs by sedating patient and administer shock at QRS complex
	- External defibrillation = terminate V fib and polymorphic V tach, but there is no dominant QRS complex 
	- Implantable cardioverter-defibrillators = artificial pacing whenever it detects too high HR
	- Catheter ablation = locate the conduction tissue making problems, heat and destroy 
# All the arrythmias
![](00%20media/{F40AD359-6F86-49EF-B48D-91C266DE65E4}.png)

## Easy EKG findings chart :3

| Condition                        | Speed                        | P waves                                                                                                                                                                                                                                                                                                                                        | QRS complex                                                                                                                                             | T waves                  |
| -------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Sinus bradycardia                | <60                          | Normal                                                                                                                                                                                                                                                                                                                                         | Normal                                                                                                                                                  | Normal                   |
| Bradycardia-tachycardia syndrome | Brief fast, followed by slow | Normal                                                                                                                                                                                                                                                                                                                                         | Normal                                                                                                                                                  | Normal                   |
| Junctional escape rhythm         | 40-60                        | Absent, or if they're there, after QRS and inverted                                                                                                                                                                                                                                                                                            | Normal                                                                                                                                                  | Normal                   |
| Ventricular escape rhythm        | 30-40                        | Not present                                                                                                                                                                                                                                                                                                                                    | Wide<br><br>Rabbit ears for BBB. Escape rhythm on one side will show BBB of the other side.                                                             |                          |
| First degree AV block            | Bradycardia                  | PR interval prolonged >0.2 s                                                                                                                                                                                                                                                                                                                   | Normal                                                                                                                                                  | Normal                   |
| Second degree type I AV block    | Bradycardia                  | PR interval prolonged >0.2 s until there is a dropped beat                                                                                                                                                                                                                                                                                     | Dropped beat                                                                                                                                            | Dropped                  |
| Second degree type II AV block   | Bradycardia                  | Regular PR interval                                                                                                                                                                                                                                                                                                                            | Dropped randomly<br><br>Two or more dropped beats in a row is high-grade                                                                                | Dropped                  |
| Third degree complete AV block   | Bradycardia                  | Irregular PR interval, no coordination between atria and ventricles                                                                                                                                                                                                                                                                            | Widened, might show rabbit ears for BBB                                                                                                                 | Might merge with P waves |
| Sinus tachycardia                | >100 bpm                     | Normal                                                                                                                                                                                                                                                                                                                                         | Normal                                                                                                                                                  | Normal                   |
| Atrial premature beats           | Depends                      | Earlier than expected P wave with a weird shape                                                                                                                                                                                                                                                                                                | If premature P wave not followed by QRS, blocked APB<br><br>If ectopic focus fires when His is still refractory, wide QRS, APB with aberrant conduction | Normal                   |
| Atrial flutter                   | Depends                      | Sawtooth P waves                                                                                                                                                                                                                                                                                                                               | Variable depending on degree of AV block. Narrow.                                                                                                       | Normal                   |
| Atrial fibrillation              | Depends                      | No organized P waves, not even visible                                                                                                                                                                                                                                                                                                         | Irregular QRS rate                                                                                                                                      |                          |
| PSVT                             | Tachycardia                  | In AVNRT, P waves are hidden in QRS terminal portion, and inverted<br><br>In uncommon AVNRT, retrograde P waves following the QRS complex.<br><br>In Wolf-Parkinson-White syndrome, see shorter PR interval.<br><br>Orthodromic AVNT will have retrograde P waves. <br><br>Antidromic AVNT will have retrograde P waves and maybe rabbit ears. | Normal<br><br>In Wolf-Parkinson-White syndrome, see a delta wave (slurring of the QRS).                                                                 | Normal                   |
| Focal atrial tachycardia         | Tachycardia                  | P wave looks weird                                                                                                                                                                                                                                                                                                                             | Normal                                                                                                                                                  | Normal                   |
| Multifocal atrial tachycardia    | Tachycardia                  | 3+ P wave morphologies                                                                                                                                                                                                                                                                                                                         | Normal                                                                                                                                                  | Normal                   |
| Ventricular premature beats      | Tachycardia                  | Normal                                                                                                                                                                                                                                                                                                                                         | Random large beat in the middle.                                                                                                                        | Normal                   |
| Ventricular tachycardia          | Tachycardia                  | Can't really see these.                                                                                                                                                                                                                                                                                                                        | Wide QRS complexes.                                                                                                                                     | Can't really see         |
| Torsades de pointes              | Tachycardia                  | Can't really see                                                                                                                                                                                                                                                                                                                               | Kind of looks like the waves are being twisted around like DNA                                                                                          | Can't really see         |
| Ventricular fibrillation         | Doesn't even apply           | Not visible                                                                                                                                                                                                                                                                                                                                    | Not visible                                                                                                                                             | Not visible              |
# Bradycardias 
## Sinoatrial node
### Sinus bradycardia
- Slowing of normal heart rhythm, <60 bpm
- Usually benign, or could be [Ischemic Heart Disease](08%20Cardiology/Cardiac%20Pathologies/Ischemic%20Heart%20Diseases/Ischemic%20Heart%20Disease.md) or [Cardiomyopathies](08%20Cardiology/Cardiac%20Pathologies/Cardiomyopathies.md)
- Extrinsic blockade or metabolic causes like hyperthyroidism
- High vagal tone 
- On EKG, everything's just fast 
![](00%20media/{A3EA1F71-752D-4906-89AC-00F3A8FFF850}.png)
### Sick sinus syndrome
- Inappropriate bradycardia
- Treat with beta agonist 
- Elderly patients, also susceptible to A fib
- This is bradycardia-tachycardia syndrome 
![](00%20media/{0717930C-A5BC-4031-84AC-4B398D00D20C}.png)
## Escape rhythms
If SA node is blocked or impaired, distant pacemakers set the rhythm. 
- Junctional escape rhythm
	- Normal, narrow QRS complex, occur in sequence, appear at a rate of 40-60 bpm
	- Normal P waves might not be there, because below the atria, but if there are they will be retrograde inverted P waves after the QRS complex as the impulse travels upwards 
![](00%20media/{8D42AF13-25A1-4773-A2F0-6F035882287D}.png)
- Ventricular escape rhythm
	- 30-40 bpm
	- Widened QRS complex, not using the normal BBB conduction
	- An escape rhythm from the LBBB will show a RBBB block pattern, because it's going to spread there more slowly. Vice versa 
	- Even more distally, in the myocardium, the QRS would be even wider because they're being conducted outside the Purkinje fibers 
![](00%20media/{8823FA60-2087-46D6-860D-AFFA430C0EDC}.png)
## Atrioventricular conduction system
- See [Heart Block](08%20Cardiology/Cardiac%20Pathologies/Arrhythmias/Heart%20Block.md) 
# Tachyarrhythmias
## Supraventricular arrhythmias
![500](00%20media/{0ABD8426-3936-4E45-82A8-1AEA2B5752AE}.png)
### Sinus tachycardia
- SA node discharge of >100 bpm
- Sympathetic stimulation, decreased vagal tone 
- Fever, hypoxemia, hyperthyroidism, hypovolemia, anemia
![](00%20media/{06A446E3-D820-43C6-B808-366F4CF8AD1A}.png)
### Atrial premature beats
![](00%20media/{49CF8A42-C100-4813-8C5C-D37CC5CD81A7}.png)
- Common in healthy and diseased hearts
- Automaticity or re-entry in an atrial focus outside SA node, usually from SNS stimulation
- Earlier P wave with abnormal shape 
- Usually normal QRS
- Blocked APB = premature P wave not followed by QRS
- APB with aberrant conduction = goes through, His-Purkinje still refractory, impulse goes through ventricles producing wide QRS
- Caffeine, alcohol, adrenergic stimulation can cause this, so like, do something about it 
### Atrial flutter
- See [Atrial Flutter](08%20Cardiology/Cardiac%20Pathologies/Arrhythmias/Atrial%20Flutter.md) 
### Atrial fibrillation
[Atrial Fibrillation (AF)](08%20Cardiology/Cardiac%20Pathologies/Arrhythmias/Atrial%20Fibrillation%20(AF).md)
### SVTs
[Supraventricular Tachycardia (SVT)](08%20Cardiology/Cardiac%20Pathologies/Arrhythmias/Supraventricular%20Tachycardia%20(SVT).md)

Concealed accessory pathway
- Only retrograde

Focal atrial tachycardia 
- Automaticity of atrial ectopic site, allowing for re-entry
- P wave will look weird

Multi-focal atrial tachycardia
- 3+ P wave morphologies
- Isoelectric baseline between P waves to help distinguish from A fib
- Usually in severe pulmonary disease/hypoxemia
- High mortality 
- Use Ca++ channel blockers 
![](00%20media/{5F69F6CB-1814-4E5D-BAE0-CCEF1BE85F50}.png)
## Ventricular arrhythmias 
### Ventricular premature beat
- Wide QRS complex, going cell-to-cell
- Ectopic beat not related to P wave
- "When every alternate beat is a VPB, the rhythm is termed bigeminy. When two normal beats precede every VPB, trigeminy is present. Consecutive VPBs are referred to as couplets (two in a row) or triplets (three in a row)"
- Not really bad, but can indicate underlying disorder
- Treat with reassurance and beta blockers (what a mix)
![](00%20media/{18F3F734-DCBF-4E1C-A987-2C9B8805F960}.png)

[Ventricular Tachycardia (VT or V-tach)](08%20Cardiology/Cardiac%20Pathologies/Arrhythmias/Ventricular%20Tachycardia%20(VT%20or%20V-tach).md)

### Torsades de pointes
![](00%20media/{55C9D1B1-2D6E-4000-83C7-26512A04D4C7}.png)
- Early afterdepolarizations from a prolonged QT interval
- From hypokalemia, hypomagnesemia, persistent bradycardia, and some antiarrhythmics
- Anything that prolongs QT basically increases risk for this
- Causes light-headedness or syncope, and is usually self-limited
- Can use intravenous magnesium
- Could also shorten heart rate with beta agonists or artificial pacemakers
- When it is congenital, beta blockers are used because SNS may aggravate the arrhythmia in these patients 

[Ventricular Fibrillation (VF or V-fib)](08%20Cardiology/Cardiac%20Pathologies/Arrhythmias/Ventricular%20Fibrillation%20(VF%20or%20V-fib).md)