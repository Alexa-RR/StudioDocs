# Post Processing

In Unity, post-processing refers to a set of effects and techniques that are applied to the final rendered image of a game or application, after the rendering pipeline has already completed its work.

The post-processing effects can help to enhance the visual quality of the game, add atmosphere, or simply provide a unique look and feel to the game. Some common examples of post-processing effects include bloom, motion blur, depth of field, color grading, and lens distortion.


## Setup

In the hierarchy, search for `VisualPostProcessing`

![VisualPostProcessing](/img/DarkMode/VisualPostProcessing.png)

:::tip
If you can't find the object you might need to build (local play) or upload your room, Refer to [Testing and Publishing Rooms](../SavingRooms) for more info
:::


In the inspector, scroll down until you find `Rec Room Visual Post Processing (Script)` 

![VisualPostProcessingInspector](/img/DarkMode/VisualPostProcessingInspector.png)

When pressing `Add Override` > `Post Processing` you will be presented with the currently available effects you can use

![VisualPostProcessingEffects](/img/DarkMode/VisualPostProcessingEffects.png)

:::info
for more information about Post Processing Effects, check out the [Unity Documentation](https://docs.unity3d.com/Manual/PostProcessingOverview.html)
:::


**After you add your effects and build / upload, you will have Post Processing in your room!**

![PostProcessingExample]