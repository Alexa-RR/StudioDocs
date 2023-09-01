---
description: Quickly check your changes
---

# Local build

## Prerequisites
You must have the **Windows Build Support (IL2CPP) module** installed in order to compile locally. You can ensure this module is installed using the Unity Hub application:
## Installing IL2CPP
Open the Unity Hub application, Select the Installs option from the list on the left side of the Unity Hub application, In the list of Installs on the right, locate the entry with the heading 2020.3.33f1, Click the gear icon (highlighted in orange in the screenshot below)
![intsallUnity](/img/LightMode/UnityHub.png#gh-light-mode-only)
![intsallUnity](/img/DarkMode/UnityHub.png#gh-dark-mode-only)

A context menu will appear, from which you should select the Add Modules option.

![ContextMenuUnity](/img/LightMode/UnityHubContext.png#gh-light-mode-only)
![ContextMenuUnity](/img/DarkMode/UnityHubContext.png#gh-dark-mode-only)
:::info
If the **Add Modules** option does not appear in this context menu, then you have to manually install the Windows IL2CPP package:

Download `IL2CPP Module` from [here](https://download.unity3d.com/download_unity/915a7af8b0d5/TargetSupportInstaller/UnitySetup-Windows-IL2CPP-Support-for-Editor-2020.3.33f1.exe)
:::

A list of additional modules that can be installed for Unity should appear.  Scroll down the list until you locate the module Windows Build Support (IL2CPP).  If this module is already installed, the word Installed will appear to the right of the module name, and you can exit the Add modules… dialog.  Otherwise there will be an empty check box to the left of the module name.  Check this box (as shown in the screenshot below), then click the blue Continue button and wait for the module installation to complete.
![InstallIL2CPP](/img/LightMode/DownloadIL2CPP.png#gh-light-mode-only)
![InstallIL2CPP](/img/DarkMode/DownloadIL2CPP.png#gh-dark-mode-only)

## Building Locally
“Local” refers to playing your Rec Room Studio room within the Rec Room Client you installed with Rec Room Studio- on the same computer you’re running Unity! When the play mode is set to Local, clicking on the Play button will launch Rec Room on your computer. Then it will send you to the latest version of your room on your computer. When in Local Play mode, select “Send to Studio” to save changes you make with the Maker Pen to the room.

If you want to try out your work, but you’re not ready to build your room and save your changes on RecNet, then you’ll want to use the “Play Room” options located within the Rec Room Studio menu.
![testing](/img/testing.png)
:::note
If Rec Room is not open, You will be promted to lanuch it.

To test in VR, Open the Rec Room Client in VR before building
:::


