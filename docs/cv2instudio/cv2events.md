---
sidebar_position: 1
description: Sending data from Rec Room to Unity Objects
---

# CV2 Events

CV2 circuits in Rec Room can interact with objects on Prefabs in Rec Room Studio Rooms via Unity Events. Some properties of Rec Room Studio Objects (such as enabled) can be controlled by Unity Events, and additional objects can be added to prefabs that can be controlled with Unity Events.

:::note
Studio Objects are different from Objects, so circuits that interpret info from Rec Room Objects will not work with custom Rec Room Studio Objects. However, tags on Studio Objects function well.
:::

First, make sure the object in your room’s scene has been made into a Rec Room Studio Object, see [Creating Custom Rec Room Studio Objects](../BuildinginRRS/custom.md)

From the Rec Room Object script, add a Unity Event to do the action you want with that Rec Room Studio Object. Give your Unity Event a name, and remember it for later

<details>

<summary>Example</summary>

In this example, I want to make a prefab I made of a tennis ball squeak when picked up or it hits the ground. In the Rec Room Object script on the tennis ball prefab, I have added an AudioSource.Play Unity Event and specified the Audio Source on the tennis ball as the target of the Event. I named the event “squeak”
<img src="/img/example.png" alt="drawing"/>
</details>

- Play Local or Upload & Build your room to enter game mode and enter the room where your Rec Room Studio Object is

- Bring out your Maker Pen and go to the Palette
- Search for “studio” to find the Studio Event Sender chips
![makerpen](/img/makerpen.png)
- Select the version of the Studio Event Sender chip you need.
:::note
If your Unity Event calls for variables, select the Studio Event Sender chip version that has the variables you need
:::

For the tennis ball example, the AudioSource.Play event doesn’t need a variable, so the plain Studio Event Sender chip will do

:::tip
If you are triggering a Unity Animation Event, you need a string is to specify the animation parameter name, and another variable to set the value of that parameter (either a bool toggle the parameter on and off, an int, or a float)
:::

- Connect the Studio Event Sender Chip to the circuit
- Add the Studio Event Sender chip to the room, and Connect the Studio Object chip to the Studio Event Sender chip via the yellow tab
- Configure the top purple Event string and give it the name of the Unity Event you want to control (for the tennis ball, this is “squeak”)
- Connect other circuits to the Studio Event sender chip Exec wires


<details>

<summary>Example</summary>

To make the tennis ball make a noise when picked up or hits something, I anchored a Trigger Volume to the Tennis Ball Studio Object using a rotator.

Then the Exec wires for Player Entered and Object Entered are connected to the Studio Event Sender configured to trigger the “squeak” Unity Event

<img src="/img/example2.png" alt="drawing"/>
</details>