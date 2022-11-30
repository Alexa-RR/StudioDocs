---
sidebar_position: 3
---

# Creating Custom Rec Room Studio Objects
Create a fancy new GameObject! It can have an arbitrarily deep hierarchy with as many children, grand-children, great-grand-children, etc as you want. These prefabs can contain all kinds of assets, like meshes with materials, animations, physics joints, colliders.

For example: here’s a palm tree GameObject made from a model imported from Blender. There are some “coconuts” parented to the tree.
![tree](/img/tree.png)

Select your object in the scene and drag it into a directory in the Unity Project Window to convert it into a prefab
![prefab](/img/prefab.png)

Select your prefab in the Unity Project Window - this will make your prefab show up in the Inspector.
![openprefab](/img/openprefab.png)
Click Open Prefab in the Inspector.

Use the Add Component button in the Inspector to add the RecRoomObject component
![Component](/img/component.png)

Select Add Component then choose to add a Box, Sphere, or Capsule collider
:::tip
If you have a Mesh Collider on your prefab already, set its property to “Convex” and not
“Concave”
:::


Click the left-facing Arrow in the top-left of the Hierarchy Window to exit Prefab Edit Mode.
![exitedit](/img/exitedit.png)
:::note
If auto-save prefabs is not enabled then you’ll be asked whether you want to save the changes you made to your prefab - select Yes.
:::

When you drag your prefab into the scene it will now show up in the Rec Room Objects
hierarchy rather than the Unity Scene hierarchy - this indicates that your prefab has been successfully converted to a Rec Room Object.
![rrsobject](/img/rrsobject.png)

