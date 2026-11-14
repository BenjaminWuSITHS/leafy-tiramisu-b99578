# What's new

The app shows these notes on its What's new page (Settings → App updates → What's new…; on a phone, Settings → What's
new…), and the desktop app in its update popup. Each version has a part that starts with `## ` and its number, then
short points that each start with `- `, written for the people who use the app. Right under that line,
`<!-- date: 2026-11-13T14:05 -->` says when the version came out (the local time, a date alone will do). A picture goes
on a line of its own right after the point it belongs to, indented two spaces so that GitHub keeps the points one list,
as `  <!-- picture: changelog/1.0.10/name.gif | what it shows -->`: the file is in `changelog/` and its version's folder
(PNG, JPEG, GIF or WebP, under about 1.5 MB, a version's under 4 MB), and the words after `|` go under it. Dates and
pictures are comments so that the release text on GitHub, and apps from before the page, never show them as text.
Keep a part, comments and all, under 1,800 characters.
The newest part goes first, and its number is the version the release build makes when it is above every version
out already (otherwise the build is the last one's number plus one). The build copies its version's part into that
release on GitHub, which is where the app reads it for the popup. A push that changes only this file or `changelog/`
makes a new version too, so a fix to an older part's words, dates or pictures is best pushed with the next version.
If a version has no part here, the build lists the first line of each commit since the last release instead.

## 1.0.11
<!-- date: 2026-11-14T11:25 -->
- Pet editor: the body under an arm in front is filled in from its own colours and lines: no more streaks when the arm moves.
- Pet editor: an arm can go behind the clothes (Hidden parts, "This arm goes behind the clothes"): the skirt or apron covers it, and the part you can't see is drawn in to paint over (your other arm, mirrored, if it is held alike). Hidden parts now lists what the picture hides, one job at a time.
  <!-- picture: changelog/1.0.11/arms.gif | 1.0.10 on the left, 1.0.11 on the right -->
- Pet editor: a new 3D tab sets how each piece of the body turns: the head and what is on it, the body, each arm and leg and the piece under it.
- Desktop pets: a singer on a window comes down a split second after the window closes, is minimised or is covered. One let go over a window drops onto it with a bounce, as onto the taskbar.
- Pet editor: legs have a knee. In the pose editor, drag a foot to bend its knee. Only your own animations bend a knee.
  <!-- picture: changelog/1.0.11/knee.png | A knee bent in poses of your own -->
- Background mode: Previous and Next have the player's own icons, not emoji.
- Pet editor: a finished pet can be painted in its new Paint tab.
- Pet editor: every place that paints has Brush, Line, Bucket and Picker.
- Desktop pets no longer walk about. The settings "Singers with nothing to sing wander" and "Takes steps as it wanders", and Faces right / Faces left on the cards, are gone.
- Pet editor: Watch the tutorial plays a short film of the steps.
- Pet editor: Save for later keeps a pet you haven't finished without giving it to a singer: it waits under Pets you're working on, or in a .petdraft file.
- A pet with an arm behind the clothes is a version 3 pet sheet: versions before 1.0.11 won't open it.

## 1.0.10
<!-- date: 2026-11-13T20:41 -->
- Desktop pets come up from the taskbar. One you left on a window comes up below it and hops on, instead of appearing mid-screen. Changing Character size mid-song leaves everyone where they stand.
  <!-- picture: changelog/1.0.10/hop-onto-window.gif | 1.0.9 on the left, 1.0.10 on the right -->
- Desktop pets: a singer stays on its window when that window is missing for a moment, or you open the player's window.
- Desktop pets: new setting Gravity (off at first): a singer with nothing under its feet falls onto the next window below or the taskbar.
- Desktop pets: overlapping singers step apart wherever they stand, on a low window or in mid-air.
- Settings: the "i" is smaller and stays beside what it explains. Popups have the side panel's thin scrollbar.
- Pet editor: a cleaner cut (a strap or name tag by the shoulder stays on the body), a steady brush size, and Stay inside the lines stops the brush at the drawn lines. Undo takes back anything.
  <!-- picture: changelog/1.0.10/cleaner-cut.png | The straps and the name tag stay on the body -->
- Pet editor: new tabs. Hidden parts: paint what an arm or leg covers. Face: your own eye and mouth pictures, and eyebrows that move. Layers: which part is in front.
- Pet editor: Edit poses… and New animation… open a pose editor: drag hands, elbows, feet, head and chest into key poses on a timeline. Standing's Breathing and Swaying bars are gone.
  <!-- picture: changelog/1.0.10/own-animation.gif | Its own animation (right): a pose, then a hop -->
- Animated pets stand as if in a room: a shadow under the feet, the head turns, the body twists, arms and legs come towards you. Depth in the pet editor turns each down.
- What's new… in Settings: every version on a page of its own, with pictures.

## 1.0.9
<!-- date: 2026-11-12T02:00 -->
- Animated pets…: Open a singer's picture… lists every singer you have given a picture, in the playlist or not. Press one to make a pet from its picture, or to set the animations of a singer that is already animated. Use for this singer then gives the pet back to that singer.

## 1.0.8
<!-- date: 2026-11-12T00:12 -->
- Pet sheets: a puppet's knees never bend. Its legs stay straight and swing from the hips when it walks, hops, sings, is carried or lands; a hop starts with a squash instead of a crouch.
- Animated pets… is now a pet editor: choose one picture of a character standing, seen from the front, and it is cut into a puppet that sings, blinks, walks and hops. Drag its points and paint its parts where the cut isn't right, watch each animation play, then use it for a singer or save it as a .petsheet.png.
- Each animation of a pet has its own settings in the editor: how much it breathes and sways, how it sings and walks, how high it hops, which arm waves and how fast, how heavy it is when carried, how it falls and lands, and how often it blinks.
- Characters…: a singer whose picture is a pet sheet has Edit…, which opens its pet in the editor. The settings that were in Animated pets… are behind Puppet settings… there.

## 1.0.7
<!-- date: 2026-11-11T20:02 -->
- Pet sheets: a puppet you carry has weight now. It swings less and hangs still sooner, its arms and legs no longer spin when you pick it up, pull it down fast or shake it, and a small pet is as heavy as a medium one.
- Pet sheets: let go just above the taskbar, a puppet simply drops instead of flailing, and a landing no longer bends its knees.
- Desktop pets: a pet you catch while it is falling stays under the pointer instead of jumping as the drag begins.

## 1.0.6
<!-- date: 2026-11-11T11:34 -->
- Video in step by timing: on a computer, after play or a seek the video waits at its place and starts as the sound reaches your speakers, instead of being sped up or slowed down afterwards to catch up.
- For smoother video, 4K most of all: when the player looks at the video for the controls' colours and for black bars, it now asks to keep that on the graphics card, and the colour tint no longer restyles the whole page. Graphics quality on Auto steps down to Light when a video keeps dropping frames.
- Bluetooth headphones: how late the sound device plays is allowed for by itself. When the device changes, the song stops for a moment and goes on timed for the new one; with no device left it pauses, and carries on if one is connected in the next 5 minutes.
- Only with Audio engine set to Standard: a Speaker delay set before is put back to 0 once; Sync can put it back.
- Desktop pets: a singer standing on a window stays on it while you drag the window, and nobody steps aside while you carry a singer.
- Desktop pets: a wandering singer faces the way it walks; Characters… has Faces right / Faces left for each picture.
- Desktop pets: a singer that sings two lines at once is two pets. "How many pets" has a third choice, "One singer", who sings every line.
- Pet sheets: a singer's picture can be a puppet whose mouth follows the words, and that blinks, walks, swings from the mouse and hops. "Pet sheet kit…" in Characters… has a template, a sample and a guide; "Animated pets…" has their settings.
- Every explanation, in every view, panel and dialog, now sits behind a small "i": rest the mouse on the setting, tap the "i", or Tab to it.

## 1.0.5
<!-- date: 2026-11-11T00:07 -->
- The update popup now shows what's new in the version on offer, and in any versions you skipped.

## 1.0.4
<!-- date: 2026-11-10T23:45 -->
- Desktop pets: drag a singer anywhere on the screen, and let go on the top edge of a window to stand it there.
- Desktop pets: singers with nothing to sing wander, singers that overlap move apart, and speech bubbles come back down once there's room.
- Desktop pets: "As few pets as possible" lets singers who never sing at the same time share one pet. The pets' controls sit at the top middle of the screen.
- Characters…: "Voicebank pictures" gives each singer the picture from its voicebank, if that voicebank is installed on this computer. The list goes song by song, and Ctrl or Shift selects several cards to change together.
- Sync: each row has one step button (1, 0.1 or 0.01 s) with − and +, instead of six buttons.
- Playlist: drag songs to reorder them. Projects: "Export current…" saves what's loaded right now. Settings: "Remove all files" takes the files away and keeps every setting.

## 1.0.3
<!-- date: 2026-11-10T00:11 -->
- Desktop pets: up to 100 singers on screen (it was 6).

## 1.0.2
<!-- date: 2026-11-09T05:55 -->
- A Sync area: move the audio, each track, the video and the score earlier or later on one timeline.
- Characters…: the playlist's singers and their pictures, to look over before the pets start.

## 1.0.1
<!-- date: 2026-11-08T19:55 -->
- Updates arrive as an installer: a popup at the start offers them, and Settings has Check for updates.
