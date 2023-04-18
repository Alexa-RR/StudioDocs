# Rec Room Studio - The "✨Circuit Editor✨" Edition

#
## Rec Room Studio now has a Circuit Editor!

Here's how to use our new Circuit Editor inside of Rec Room Studio.

1. Start by selecting any circuits in the main scene view in the editor.
2. Then open the circuit editor window by selecting the Rec Room Studio tab at the top \> Circuit Editor.
3. Now that the circuit editor is opened, you'll notice there's nothing there yet. While making sure your circuits are still selected, click the magnifying glass icon at the top left of the circuit editor, this will focus on the circuits you selected and show them in the window. ![](https://lh6.googleusercontent.com/P3cY4DmI4zSJqKIEwbHt_ohfhKqHHlh6wnsUm15Kz3jU6kgkFMrNlWuRHDpSdA84N9hhlrLQderKD9QPMYWyZ2mvCTwttXMNMQ1cmuGpI8LXKzcupoD2ORUr9j9lZsvL0-Yh3IMeZYi5fPtkFmifoXg=s800)

What you can do with the Circuit Editor.

- Move chips around, they will move on the same axis they are in within the scene.
- Connect chips together: click on a port and drag to another to connect chips together.
- Disconnect ports by selecting them and either right-clicking and selecting Delete, or by tapping the Delete key on your keyboard.
- Create new chips by either right-clicking in an empty space and selecting "CreateNode", this will open a menu where you can choose chip categories/simply search for a specific one, or by opening the Circuit Palette window from the Rec Room Studio tab at the top and dragging chips in the circuits editor view. You can also create a new chip with context by dragging a wire from a chip's input or output to nothing, which will open the menu and narrow it down to chips that support the type you are trying to connect. When created that way, the connection will already be established.

![](https://lh6.googleusercontent.com/UWrUZuNs0IkSmnymdKhmiiBULP3ckiZ9kpN8AKPQtiFEZMHqCMP7l0Z60u-NdN6Nl8Pavg8a7t2ONteHA3XQTsD9yW8ekY0-jiZv-k6r7bttfBlzHAJ5iY_5QAnzambloC_7pxMbB7ziZtzQb6Yg3Ns=s800)

- Right-click a chip to change its variable name (can also be done by hitting F2 on your keyboard while selecting the chip), copy, cut, duplicate, delete, etc.
- Selecting chips (multi-select by holding Shift, or by dragging over your selection) supports Copy/Pasting (Ctrl+C/Ctrl+V), Cutting (Ctrl+X) and Duplicating (Ctrl+D). You can even paste sets of chips between subrooms this way!
- Double-click a circuit board/control panel to edit inside of it. Click the back arrow to back out and stop editing it.
- While in a board, right-click the in/out buses to add functions and ports.
- The editor window will show all chips selected (at the time of hitting the magnifying glass) along with connected chips and nearby chips. Chips that are too far away or oriented differently will show up as transparent and will not show all its connections. Those can still be selected and you can hit the magnifying glass to keep browsing that cluster of chips.
- The little spinning arrow button dictates whether or not positions are saved as you move chips around in the editor. Turn it off if you want to temporarily arrange chips to make it easier to connect pins for distant connections. ![](https://lh5.googleusercontent.com/fYoHqosc0MECXFp5KyigXoWaeVWrrxNKN4T-Lx3hd5EKMWLWioRgWmZWxtMe1NTdpEXv30PuNsqvb2B0GLFpKf7dQYfkuYATX69bpDzAFI8j0m0mc57SQJTz3wJxx6AYllkLHyU-KNudMmvYhn7gErk=s800)

What you cannot do with the Circuit Editor.

- Configure chips, you'll have to hop in-game to configure except for changing the name of a variable, or default port settings. While this is not possible as of now, it's on our to-do list.

![](https://lh6.googleusercontent.com/pOIL3k6GsROHRh154-gnih3HMF__xLCj623WKrgBP64-rsIPP8P0CFDl7kosWy7RNUnL5P0Vt8M7qXD-MfM1I2E18gEss3UD93NNupbUcdjcWfW1XZbet2IojhCBESSsoSg3suiL1CBv9I2bmd5W5J0=s800)

#
## General Changes & Bug Fixes

- Fixed a bug that may prevent you from uploading your room while other creators are playing in the room.
- Fixed missing Sun Direction and Motion Trail Component objects when using Studio in a room containing them.
- Fixed several bugs with the creation and deletion of Control Panels.
- Circuits now show up in the Maker Room hierarchy.
- Updated circuit visuals in the scene.
- [OLD] Added a board configuration option to hide or show Studio Events/Properties on an object's control panel.
- [OLD] Added a button to remake object boards on an object, or across all prefabs of that object. Use this button after adding/removing events or properties to your object to update their board accordingly!

If you find any bugs, or need help, make use of the Rec Room Studio discord server and the respective forums to provide feedback, request help or log bugs!