---
sidebar_position: 1
---
# Installer / Launcher

## Studio installer

### Rec Room Studio Installer is stuck on `Installing Unity 2021.3.29f1`
1. Close the installer
2. Click on [unityhub://2021.3.29f1/204d6dc9ae1c](unityhub://2021.3.29f1/204d6dc9ae1c)

:::info
Make sure to install the `Windows Build Support (IL2CPP)` module for local builds to work, see more [here](/docs/SavingRooms/localbuild#installing-il2cpp)
![InstallIL2CPP](/img/LightMode/DownloadIL2CPP.png#gh-light-mode-only)
![InstallIL2CPP](/img/DarkMode/DownloadIL2CPP.png#gh-dark-mode-only)
:::

**Now wait for the correct unity version for studio to be installed**

## Launching Rec Room Studio

### Unity fails to open after creating a new projet or opening a recent project
Unity can fail to open your project for a few reasons.  Here are some steps that you can try to get your project to open.

#### Check Unity Hub for updates & valid licenses
Somtimes your Unity license may be out of date, or Unity Hub requires an update.  

1. Open Unity Hub and install an updates if there are any available.
2. Check that your Unity license is valid & not expired
    1. At the top left of Unity Hub, click your account icon and select 'Manage licenses'.
    2. Hit the 'Refresh' button on the top right then check that your license isn't expired.


#### Open your project directly from the Unity Hub
Try opening your project directly from Unity Hub.

- Under the projects tab, click the `Open` button and select the path of your Rec Room Studio project.  This will be the path that contains sub-folders like `Assets` and `Packages`

If this doesn't work, try creating a [sample project](#create-a-sample-unity-projects) and seeing if that works.  If the sample project does not work, the issue is likely with Unity itself.


#### Create a sample unity project

You can try to create a sample Unity project to see if the problem is with Unity itself, or Rec Room Studio.

1. Launch Unity Hub.
2. Under `Projects``, press the `New Project`
3. If you have multiple Unity versions installed, make sure the correct Unity version is selected. `2020.3.33f1`.
4. Select the `3D Sample Scene (URP)` template and create your sample project.

If the sample project has issues loading, the issue is with Unity itself.  You can try re-installing Unity, or seeking help on the [Unity forums](https://forum.unity.com/)
