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

## 1.0.18
<!-- date: 2026-11-18T02:01 -->
- Pet editor, Cut: a piece's chip (Upper arm, Forearm and hand, Thigh, Shin and foot) now also paints the hidden part of its arm or leg: what you painted in Layers where other parts hide it, and its striped Missing area. You decide which piece it goes into; nothing else of the pet changes.
- Pet editor, Cut: when a piece's brush goes over nothing of its arm or leg, the line under the picture just says so.
- A second kind of hair, Close hair, for a bob or the hair over the head: paint it in Cut with its own chip. It goes with the head and springs a little behind it, only squashing and stretching, and never comes off. Nothing becomes close hair unless you paint it.
- Pet editor, 3D: Close hair, under Head, sets how much it lags and squashes. Layers has a row for it above the Head. A pet with close hair needs this version or a newer one.

## 1.0.17
<!-- date: 2026-11-17T23:51 -->
- Idle pets say goodbye: switching Idle mode off, pressing Stop or a song ending makes them sink away instead of popping off the screen.
- Pets bump into the sides of windows: they can't pass through them, and a window you move into a pet pushes it along.
- New setting, Inertia on windows (Background mode → Desktop pet): a pet on a window you move lags, slides and catches up, and can slide off one you pull away fast. Off unless you turn it up.
- Explanations are behind a small "i" in Settings, the player and the pet editor.
- Clothing no longer goes up with a raised arm: a layer hung from the body moves only with the body and the legs.
- Pet editor: animations have a tab of their own, Animations, with your own animations and the dances. The puppet stays beside every tab, and Animation under it chooses what it plays.
- Pet editor, Cut: a piece's chip shows that arm or leg alone, hidden parts and all, and while you move a point you see the parts it cuts.
- Pet editor, Hands and legs: Start from the picture copies the arm or leg as it is cut out, with what you painted where other parts hide it.
- Pet editor, Face: paint past an eye's or the mouth's box and the box grows to hold it.
- Pet editor, 3D: your clothing layers are listed there too, with the same How it moves settings.

## 1.0.16
<!-- date: 2026-11-17T00:45 -->
- Idle mode and background mode no longer run together: while Idle mode is on, Start background mode is greyed and says why, and while background mode plays, Idle mode can't be switched on.
- A song you ask an idle pet for shows its name and a stop button only on the little controls, and the player says "A pet is singing".
- The words on the piano roll's notes never sit on a dark box, in background mode too.
- Pet editor, Cut: every piece of an arm and a leg has its own chip (Upper arm, Forearm and hand, Thigh, Shin and foot), so you decide exactly where a limb is cut. It still bends at its point.
- Pet editor, Cut: a Hair in front chip for a fringe, drawn over the eyes and the mouth.
- Pet editor: Show the points shows every point with its name, and the face and hand boxes, while you paint.
- Pets can wear clothing that moves. In Cut, New clothing layer… gives a piece of clothing its own chip: paint over it, and on the pet it lags, sways, stretches over a lifted leg and settles back to how you drew it. Up to 32 layers.
- How it moves (beside the puppet) sets what each layer hangs from, what it is in front of or behind, and how it swings, how heavy and stiff it is, how far it stretches and flutters. Shake it gives the pet a push to watch it.
- Layers: each clothing layer has a row of its own. Where it covered the body, the body has a striped Missing area to paint; nothing is filled in for you. A pet with clothing layers needs this version or a newer one.

## 1.0.15
<!-- date: 2026-11-16T02:44 -->
- Pets can wink: in your own animations a key pose says what the left eye and the right eye show, each by itself (Wink left, Wink right in the pose editor). Pets you made before can wink too.
- Pet editor, Face: each eye can have pictures of its own, as many as you need (New picture…). Paint one, start from your picture, bring in a file, or copy it mirrored to the other eye.
- Pet editor, new tab Hands and legs: a box on each hand, and other pictures for each hand and each leg (the whole leg, or its lower piece). A key pose chooses which one shows.
- Every such picture is placed by dragging: move it, size it, turn it, mirror it, put it in front or behind. A pet with pictures of its own needs this version or a newer one to open.
- The player now reads every VOCALOID project file, from VOCALOID1 to VOCALOID7 (.mid, .vsq, .vsqx, .vpr, .vprx): its notes, words, singers and tempo.
- More kinds of song file: MusicXML (.musicxml, .xml, .mxl), Synthesizer V's first editor (.s5p), Piapro Studio (.ppsf, the newer kind) and UtaFormatix (.ufdata).
- When a song file can't be read, the player says why if it knows.
- Voicebank pictures finds VOCALOID7's voices.

## 1.0.14
<!-- date: 2026-11-15T23:30 -->
- The update popup shows What's new the way the What's new page does: each version with the day it came out, its points and its pictures (click a picture to see it large). You see it from the update after this one: the popup is drawn by the version you already have.

## 1.0.13
<!-- date: 2026-11-15T23:00 -->
- Lyrics from a text file: add a .txt with the song's words along with its score, and the lyrics, the notes and the pets' bubbles show the file's words in time with the notes. Lines it can't match for sure keep the score's words, and it says which (Settings → Score).
- Scrolling over the lyrics or the piano roll now moves through the song in the Full screen layout too (not while the window itself is fullscreen).
- Desktop pets no longer dance by themselves: Dance while singing is Off unless you choose My own dances or Made for me (automatic).
- Make your own dances in the pet editor (Dances): line up ready-made moves and your own animations by beats, or place moves on a timeline for one song.
- Idle mode: chosen pets stay on your taskbar with no song. Click one to pick a song it sings in; after it, they are idle again.
- A pet's speech bubble goes with it when it hops, lands or jumps.
- Variety (Desktop pet settings): no fall, landing, hop or wave is quite like the last. 0% is as before.
- Pet editor, Face: double-click an eye's box or the mouth's to paint that face picture there. A painted shut or smiling eye covers the open eye fully and changes nothing outside its box.
- The scared (>_<) face can be your own: paint Scared eyes and a Scared mouth, or set the lines' colour and thickness.
- Pet editor: the brush's ring is exact now. Everything inside it is painted or rubbed out fully, at any size or speed, also on an arm or leg you straightened.
- Pet editor, Layers: Clothes in front of your paint has a switch for each arm. Off, nothing is drawn over your paint.
- Pet editor: an arm or leg your picture hides can be opened in Layers and painted.

## 1.0.12
<!-- date: 2026-11-14T20:58 -->
- In the lyrics bar (Settings → Score → Layout: Bar), scroll over the lyrics or the piano roll to go back or forward in the song: down or right is later, Shift goes 5 times as far. Not in the Full screen layout, fullscreen or background mode.
- Desktop pets dance while they sing a song with a score: a long dance each, on the song's beat, calm in the verses, bigger in the choruses (the same moves each time), punchier where the words come fast, a jump into each chorus, a pose held on a long note, an arm up on a high one, and a bow together at the end. Every other pet dances it mirrored, and their legs stay straight. Settings → Background mode → Dance while singing: Gentle or Lively.
  <!-- picture: changelog/1.0.12/dance.gif | Dancing into a chorus -->
- Desktop pets: picked up with the mouse, a pet holds on to your pointer by one hand and hangs from that arm, legs dangling, with a scared (>_<) face until you let go. Carry a pet: Like a doll (as before) brings back the old way, and Scared face when carried is a switch of its own.
  <!-- picture: changelog/1.0.12/carried.gif | 1.0.11 on the left, 1.0.12 on the right -->
- Desktop pets: a singer whose words have "view" in them sings again (it stood silent).
- Pet editor: Hidden parts is gone. Layers shows your picture part by part: click a part to paint it alone, its own pixels too; what other parts hide of it, its Missing area, is striped. Nothing is filled in for you any more, and a bent arm or leg can be straightened.
- Pet editor: a new picture asks: Cut it out for me, or I'll do it myself. Cut's brush colours outlines and the picture's edge, follows the mouse and doesn't lag; its Bucket takes an arm's soft edge with it. Carried shows the carry you chose.

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
