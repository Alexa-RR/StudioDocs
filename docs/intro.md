---
sidebar_position: 1
slug: /
---

# Introduction

Rec Room Studio is a Unity Editor Package that extends the off-the-shelf editor, available for free at [unity.com](https://unity.com), to support building and publishing Rec Room content (rooms for now, inventions and avatar items in the future!)

That means the creation tools you use in Rec Room Studio are the same Unity Editor tools that professional Unity developers use to build games and apps.

### Resources
If you’re not familiar with Unity, or need a refresher, here are a few helpful resources:


[Unity Manual - Editor interface](https://docs.unity3d.com/Manual/UsingTheEditor.html)

[Unity Manual - Importing Assets](https://docs.unity3d.com/Manual/ImportingAssets.html)

[Unity Manual - Graphics](https://docs.unity3d.com/Manual/Graphics.html)

[Unity Universal Render Pipeline Documentation](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@10.9/manual/index.html)


### What you'll need

- [Unity](https://unity.com/download) version 2020.3.33f1
  - When installing Unity, you are recommended to use the Unity Hub for managing your projects.
- [Standalone PC Rec Room client](https://rec.net/settings/recroomstudio) This comes with the Rec Room Studio installer



:::info
The Rec Room Studio installer will download and install Unity Hub, Unity, and Rec Room for PC. It might take awhile depending on your internet connaction 

If you already have **Unity 2020.3.33f1** installed, you may not have the **Windows Build Support (IL2CPP)** module required to run local tests of Rec Room Studio projects, as it is not installed by default. for more info on how to install the module refer to [Local Build](/SavingRooms/localbuild)
:::

## Initial Setup

### Rec Room Studio Installer
In your internet browser on your PC, go to https://rec.net/settings/recroomstudio

:::note
make sure you’re signed into your Rec Room account you submitted to the beta program survey first
:::

Click the Download Rec Room Studio button and open `RecRoomStudioInstaller.exe` when downloaded

![DownloadWindow](/img/DarkMode/RRSDownload.png#gh-dark-mode-only)
![DownloadWindow](/img/LightMode/RRSDownload.png#gh-light-mode-only)
:::note
When you open the app for the first time, you will need to agree to the terms of service
![Tos](/img/tos.png)
:::


Select your desired install path and and click on `Install Now`:
![InstallNow](/img/installnow.png)



### Creating a new Project
Once the Installer is finished, open the Rec Room Studio Project by clicking on `Create New Project`


![NewProject](/img/CreateProject.png)

:::tip 
When promted to select a folder for the project, make sure to create a new one
![SelectFolder](/img/DarkMode/SelectFolder.png#gh-dark-mode-only)
![SelectFolder](/img/LightMode/SelectFolder.png#gh-light-mode-only)
:::
 - Select RecRoomStudioProject from the list of projects in Unity Hub
 - Wait for Unity to import the project, this might take a few minutes
 ![Unity](/img/unityload.png)

### Logging in
- Click `Rec Room Studio` > `Rec Room Studio` to open the Rec Room Studio Window (if it isn’t already open)
  - Click Sign in to automatically open a new tab in your browser pointed at auth.rec.net
    ![Logginin](/img/DarkMode/NotSignedIn.png)
    - Click “Yes, Allow” on the Rec Room Studio is requesting your permission web page.
  - Return to Unity and verify that your Rec Room Account shows up in the Rec Room Account Window
    ![Account](/img/DarkMode/Account.png)

#### That’s it! Rec Room Studio is now installed and you’re ready to start building the next great room!
