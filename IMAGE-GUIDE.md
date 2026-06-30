# Where to put your images

Create the folder structure below inside `public/images/` (already scaffolded in the zip,
just empty). Vite serves everything in `public/` at the site root, so a file at
`public/images/hero/hero-bg.jpg` is referenced in code as `/images/hero/hero-bg.jpg` —
this is already wired into every page. You only need to DROP FILES IN with these exact
names. Don't touch any .jsx code unless you want to change which images appear.

If a filename doesn't match exactly, that image slot will just show broken/blank —
nothing else breaks.

---

## /public/images/hero/

| Filename | Used for | Suggested source (from PDF) |
|---|---|---|
| `hero-bg.jpg` | Home page hero background (dark overlay applied automatically) | A wide industrial/BMS/control-room shot. Page 1 cover collage, page 2 control room photo, or page 13 city-skyline-with-tech-overlay image all work. Pick the widest/highest-res one — it gets stretched full-bleed. |
| `about-control-room.jpg` | Home page "About" section image | Page 2's control room photo (woman at multi-screen desk) is ideal — already the right subject. |

## /public/images/services/ (one image per service, 9 total)

| Filename | Service | Source page in PDF |
|---|---|---|
| `ibms.jpg` | Integrated BMS | Page 7 — the BMS wheel/building icon graphic, or the smart-building diagram |
| `lighting.jpg` | Lighting & Utility | No direct PDF photo — use the BMS wheel graphic again (page 7) or source a generic smart-lighting stock photo |
| `energy-management.jpg` | Energy Management | Page 13 — the city skyline with glowing tech overlay |
| `cctv.jpg` | CCTV Surveillance | Page 10 — either the camera/NVR kit photo or the dome camera array photo |
| `access-control.jpg` | Access Control | Page 11 — the biometric fingerprint scan photo, or the door/turnstile reader photo |
| `fire-detection.jpg` | Fire Detection & Suppression | Page 8 — fire alarm control panel + detector photo, OR page 9 — the gas suppression cylinders photo |
| `public-address.jpg` | Public Address & Evacuation | No direct PDF photo — reuse the fire alarm notification appliance photo (page 8, the speaker/strobe devices) since PA systems are adjacent, or source a generic PA speaker stock photo |
| `rodent-water-leak.jpg` | Rodent & Water Leak Detection | Page 12 — the water leak detection panel photo, or the ultrasonic rodent repeller photo |
| `dcim.jpg` | Data Center Infrastructure (DCIM) | Page 14 — the server rack / "Server Management" cycle graphic |

**Crop tip:** every service image displays at a 4:3 aspect ratio (`aspect-[4/3]` in code). Crop
roughly 4:3 before exporting so nothing gets awkwardly cropped by the browser.

## /public/images/clients/ (15 logos, transparent PNG preferred)

Filenames must match exactly (lowercase, hyphenated):

```
siemens.png        voltas.png          capitaland.png
sterlite.png        lodha.png           bajaj.png
podtech.png          lakeshore.png       hiranandani.png
lifecare.png         fts-cleanrooms.png  cosmos-bank.png
prasa.png            ajanta-pharma.png   karkinos.png
```

Source: page 5 of the PDF has all 15 logos in a grid. Crop each one out individually.
If a logo has a white background, that's fine — they sit inside white cards already
(grayscale filter applied automatically, color reveals on hover).

## /public/images/team/ (5 photos, optional)

```
sameer-pawar.jpg   vikas-singh.jpg   sudha-singh.jpg
ravindra-gupta.jpg nikita-chaubey.jpg
```

The PDF has no individual headshots — these are NOT in the source material. Current
code uses colored initials circles as a fallback (already working, no action needed).
Only add these files if you get real headshots from the client later — code doesn't
reference team photos currently, so adding files alone won't do anything until you
also swap the avatar div for an `<img>` tag in `Home.jsx` and `Contact.jsx`.

---

## Quick way to extract images from the PDF

Since Antigravity won't accept the PDF directly and only takes images in batches of 5:

1. Open the PDF, screenshot or crop each needed image individually (Mac: Cmd+Shift+4,
   Windows: Snipping Tool / Win+Shift+S)
2. Save each crop directly into the correct folder above with the correct filename
3. For client logos specifically — if screenshots look soft/blurry at small size, it's
   fine, they render small in the grid (max-height 40px)
4. Once your `public/images/` folder is fully populated, you don't need to feed any
   images to Antigravity for these slots at all — they're already wired into the code
   by filename. Only feed Antigravity images if you want it to generate NEW sections
   or change layouts, not to fill these existing slots.
