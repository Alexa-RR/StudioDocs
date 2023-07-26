# Circuits Editor

Rec Room studio has a system which allows you to create Circuits (or more commonly referred to as cv2 ) in the editor, for information about Circuits click [here](https://recroom.com/cv2) (might be outdated)

## Accessing the circuits window 

1. Click `Rec Room Studio` > `Circuits Editor`

![CircuitsEditor](/img/CircuitsEditor.png)

The Circuits Window should be open now

![CircuitsWindow](/img/CircuitsWindow.png)


### Creating New Circuits

Right click anywhere in the circuits window to pull up then context menu, then click on `CreateNode`

![CreateNode](/img/CreateNode.gif)

-------------------------------------
### Accessing existing Circuits

1. Start by selecting any circuits in the main scene view in the editor.

2. In the Circuits Editor window, While making sure your circuits are still selected, click the magnifying glass icon at the top left of the circuit editor, this will focus on the circuits you selected and show them in the window.

![magnifyingGlass](/img/MagnifyingGlass.png)

-------------------------------------

## Features
*(taken from [the patch notes](/Updates/2023/04/17/studio-update)) *
* Move chips around, they will move on the same axis they are in within the scene.

* Connect chips together: click on a port and drag to another to connect chips together.

* Disconnect ports by selecting them and either right-clicking and selecting Delete, or by tapping the Delete key on your keyboard.

* Right-click a chip to change its variable name (can also be done by hitting F2 on your keyboard while selecting the chip), copy, cut, duplicate, delete, etc.

* Selecting chips (multi-select by holding Shift, or by dragging over your selection) supports Copy/Pasting (Ctrl+C/Ctrl+V), Cutting (Ctrl+X) and Duplicating (Ctrl+D). You can even paste sets of chips between subrooms this way!

* Double-click a circuit board/control panel to edit inside of it. Click the back arrow to back out and stop editing it.

* While in a board, right-click the in/out buses to add functions and ports.
* The editor window will show all chips selected (at the time of hitting the magnifying glass) along with connected chips and nearby chips. Chips that are too far away or oriented differently will show up as transparent and will not show all its connections. Those can still be selected and you can hit the magnifying glass to keep browsing that cluster of chips.

* The little spinning arrow button dictates whether or not positions are saved as you move chips around in the editor. Turn it off if you want to temporarily arrange chips to make it easier to connect pins for distant connections.
