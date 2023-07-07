# Troubleshooting

## Studio installer

### Rec Room Studio Installer is stuck on `Installing Unity 2020.3.33f1`
1. Close the installer
2. Click on [unityhub://2020.3.33f1/915a7af8b0d5](unityhub://2020.3.33f1/915a7af8b0d5)

This will now install the correct unity version for studio in unity hub
    
-----------------------------
## Studio Editor

### The project you are opening contains compilation errors
Your studio project is probobly corrupted:
1. go to the folder where you saved your studio project, it should look like this:
![studiofolder](/img/studiofolder.png)

Delete the following folders: `Build`, `Library`, `Logs`, `ProjectSettings`, `Temp` and `UserSettings`.

when you open the project the error should be gone, If not you will have to make a new project from the studio installer


### "Access Denied" screen when trying to sign in
log out of rec.net in your browser https://rec.net/auth/signout before trying to login to studio


