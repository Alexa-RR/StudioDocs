---
sidebar_position: 4
---

# Importing Unity Assets

:::info
You can use Unity Assets (from other projects, the Unity Asset store, etc) in your Rec Room Studio project. Once imported (via Window > Package Manager or just dropping the files into your project Assets directory), you’ll just need to make sure settings are changed to be
compatible.
:::

## Baked Lighting
First off, make sure your scene is set to not use baked lighting. Rec Room
doesn’t support baked lighting and Rec Room Studio won’t let you Build with it
on.

Go to Window>Rendering>Lighting Settings and make sure the check box for
Baked Global Illumination is unchecked
![window](/img/window.png)
![lighting](/img/lighting.png)

## Shaders
Rec Room Studio is built on top of Unity’s Universal Render Pipeline. All Shaders used in your scene should use a Rec Room Studio shader. If you import 3D object prefabs and they show up hot pink, check the shader used on the prefabs’ material settings in the Inspector
![shaders](/img/shaders.png)

## URP
If the Materials of your imported assets aren’t loading Base textures (albedo), use the Render Pipeline tool to set them correctly.

Go to Edit > Rendering > Materials > Convert Selected Built-in Materials to URP
![urp](/img/urp.png)