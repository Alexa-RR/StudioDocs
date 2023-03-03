---
sidebar_position: 6
---

# Audio Tools

To utilize the existing audio channels in Rec Room, there are special Mixers generated in Rec Room Studio projects.

:::info
You do not need to add an Audio Listener to your scenes. The Audio Listener is handled by Rec Room in the game client
:::

The Audio Mixer in a Rec Room Studio project scene comes with 3 Master Mixers that correlate to the named in-client audio channels: Ambience, Music, and Sounds. These Master Mixers act as the sound input for respective named channels in-client.
![mixer](/img/mixer.png)

:::danger
Do not remove, rename, or reroute these Mixers. Only the Ambience, Music, and Sounds Master Mixers’ output will be heard in the game.
:::

## Adding Audio Sources to your scene

You can add Audio to your scene by either:

<details>

<summary>Adding Audio Source objects directly to the scene hierarchy</summary>

Select the GameObject menu or right-click in the hierarchy, then select Audio>Audio Source

</details>

<details>

<summary>Adding Audio Source components to Unity Objects in the scene</summary>

Select Add Component>Audio Source
<img src="/img/addaudio2.png" alt="drawing" width="200"/>

</details>

<details>

<summary>Adding Audio Source components to Rec Room Studio Objects via the Prefab Editor</summary>

Select Add Component>Audio Source
<img src="/img/addaudio2.png" alt="drawing" width="200"/>

</details>

- Set the output of each Audio Source used in your scene and prefabs to either:
  - One of the Ambience, Music, or Sounds Master Mixers
  - Additional Mixers you have added that will output to the Ambience, Music, or Sounds Master
  ![output](/img/output.png)

When adding effects, you can add them either directly to the Ambience, Music, or
Sounds Master Mixers, or to additional Mixers you make in the project.

:::tip
It is recommended to add scene or area effects to custom Mixers you make
because Mixer settings are carried across all scenes in a project.
:::