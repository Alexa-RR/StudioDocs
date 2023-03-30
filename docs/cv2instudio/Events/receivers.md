---
sidebar_position: 2
description: Receiving execution from Rec Room Studio Objects
---

# Receiver

Event Receivers allow you to receive execution from studio objects.

## Create A Receiver

To create a receiver we need an object with an existing UnityEvent, for this example we will use a Button GameObject as it has an "OnClick" Event.


<img src="/img/DarkMode/Button.png" width="50%"/>


We are gonna add a new event to detect when a button has been pressed:


Drag the root GameObject prefab (the one with the rec room studio competent) and give it the event `SendCircuitsEvent (string)` 

<img src="/img/DarkMode/CreatingReceiver.png" width="50%"/>

The string field is the name of your event
<img src="/img/DarkMode/EventName.png" width="50%"/>

Go into the root prefab and click on `Remake Object Boards For All Prefab Instances`

![RemakeObjectboard](/img/DarkMode/RemakeObjectboard.png)

Now hop ingame to test your Receiver! (Take a look at [Testing Your Room](../../SavingRooms) for more info!)


## In Game

When in game, find the UI with the object board attached to it

![IngameEvent](/img/InGameEvent.png)

**Now when you press the button, the output exec port `OnClick` (your chosen event name) in the circuit board will run!**