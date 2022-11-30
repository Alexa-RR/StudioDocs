---
sidebar_position: 2
---

# Mixed-Mode Creation

Creation in Rec Room Studio is a collaboration between Unity developers and Rec Room builders.

:::info
Edits made to a room in-game with the Maker Pen are built in real-time and committed when the room is saved.
:::

:::note
Before a room is published, there can be only 1 private instance of a subroom.
:::

:::caution
After a room is published, creators can make edits in different instances of a
subroom at the same time. This creates conflicts in save states, so avoid doing
so.
:::

Edits made in Rec Room Studio are done asynchronously and committed and built to the
room when the Upload & Build option is selected. There is a 3-10 minute wait while the room is built on the Rec.net servers before it can be played in-game.

:::caution
If the Start Build box under the Upload button is unchecked, the current state of the scene will be saved to the Rec.net servers for download to other devices
running Rec Room Studio, but that save will not be made playable in-game
![save](/img/save.png)
:::

:::danger
While saves from Rec Room Studio are being built on the server, avoid making changes in-game to that subroom. Any changes made to the subroom while a Rec Room Studio save is in-progress will not be included.
:::

:::tip
Multiple creators can work on the same scene in Rec Room Studio simultaneously by creating prefabs within the scene for each creator to work in. When uploading edits to Rec.net, choose to only upload changes to your prefab and not the whole Unity scene.
:::
