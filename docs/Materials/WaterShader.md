---

---


# Water Shader
Rec Room Studio has a water shader that can be used to make a myriad of fun different liquids that have depth, flow, and produce foam effects where they collide with objects. This section will explain how to use the water shader and include some tips and tricks.

![](https://lh7-us.googleusercontent.com/LgcNctgbZujsUeStfQ0vwVuuPeCh_KhbLg60WMNe5SS4YsPahRbL7vP98QUarp9mhlheelH1FyOjwFkCq8_lRnxSRMZKlLEYuvLV0gtThiwpyDb6HnlFieLSbr1Tn1lcxBEYOCK1930pEsU8UsHUnHg)


## Getting started with the water shader

### How to add the water shader to your #rrstudio room

In your Project window, right-click Create>Material to make a new Material. Select your newly-created material. In the Inspector window’s Shader section, select the Rec Room Studio Water. You can now add the material to your room by dragging it onto a 3D object (like a plane, cube, etc) in your Scene or Hierarchy window.


### Default Water Assets

If your version of Rec Room Studio is older, you can download a package of premade prefabs and materials that use the water shader from here: <https://discord.com/channels/1032079737234915398/1202372332304212009>

Once you have the default water assets created by the Rec Room art team, you can find them in your Project window in the Assets\DefaultAssets\Prefabs\Environmental Assets\Water Examples

In this folder are prefabs and materials that you can add directly to your room by dragging them from the Project window into your Scene or Hierarchy window.

![](https://lh7-us.googleusercontent.com/7po-EUJXvU59I7K_zPJkcyaYdxU9pV-cpqRc2q2LhVQ4Wu-yoFe-6-OK-eZXU-IG5uf17tnyeMAYHHTAjasYvbWcxuaHBiHojHTX4MpSF3Qk9azTsEJYlPq5QAepzdcgYc0lcLNMmrqNlkIgo2zfqUk)


# Water shader settings

### Base texture

Here is where you can add custom textures to the water shader and control the size, speed, angle, and oscillation (Back and forth movement)

Your surface fade depth is how much the shoreline fades and your depth color strength controls the amount of your depth color![](https://lh7-us.googleusercontent.com/G5x04yciLpIjpdnaB0KCvu1JYzf3h-FUsarqGJ2JDGl3Lw2XPgxIyaS1hv8iW1BrjMlpy2quCU8Lxk3PQGAhKvA50Ap_kWBVcTGwN0BOLVmvXOS1N8LVoUWAsoRKHdpGltjuTFFnU3wFLMZsqKwJt6c)

![](https://lh7-us.googleusercontent.com/DfAiRo9XfDt3Nd4YEZ8PdWnHrf_dvYDQ_2ytKYCKM5wDIiEr6s2BknjdTZhysYzF2W6fJFuUfwPVbK-pewFtAHm8-UM0WwBajoz3mdzJ3ykNTu_UgzvXlBPlYJgzX72O_vSHzpT3aih28ID-nesCfew)


### Emission

This color controls how much something glows, so you can make as many radioactive waterfalls as you'd like! 

![](https://lh7-us.googleusercontent.com/-SeD4U5c2DQkB9vng874bI-WWXm7ZgGF-nw1hHKadDLjOtkE_PcVPaqoAc32Ck_9MbohlCW8uJP9lxnh0gZay_8Tt90cCLspKb9y1pRr2L0znWwwivCCoK28rdCDv9m9qZoDbKYu3xqA7GnY-rCM0YI)

![](https://lh7-us.googleusercontent.com/GLvFOySbUTxBch8X3sH6CFiN16e0LLdJwHISChgSwkMTgenyLbyZg3DdawlQLpJZHUZh-I8HigvksDwfYcFLN0czYae990Xauf0rncbkz73VcaXxS8XtP1YbJvUbcMOmeN_T2R1YLwB2xj4h1EyqhQM)

There is subtle emission used on the ice waterfall example to emulate depth. The Ice Base Map has an alpha texture which controls what parts of the texture emit. 

![](https://lh7-us.googleusercontent.com/Lbs8XTZzoxC3rt30Jz25fgMyaMLXEoVpFPyYrJmKWXxEMnjWO-K3jO68RHN_QMj7nHN97buPylmP5udstbJMfkZAOfQzX6nGcnQy0Jrs7pe5_0KzQNdZ7uPJajYn_Vt9V2x9rl2LUzHXmY2C7ghMhNc)


### Specular

![](https://lh7-us.googleusercontent.com/Fz-qRc7uwaySU7D6zPzSXLxYRygrJWSFpNuqv0nk0nBBjvnFT7wuffvultblP93AH-z_zAz3cDTz-sgYZbCcOOfiVM2JKVfHPtJAucBz9z-ei2xuDdTGGexuJPxi80KFzgxfdpfaBQvnpz_KYwKXk6I)

Here is where you can alter the reflection and shininess of your liquid. A specular map and color controls the tint and strength of the reflection. Smoothness determines if the surface is rough/matte or smooth/polished.

![](https://lh7-us.googleusercontent.com/M1-GbVW13QzKudf8t57VrGex3FzysaYCAGdrI_fSao6FHyqHbYCbOpxMV3tbPuvkk_vdphSNewRMS1tLZH3ol5EJRn4dQttodL39ARFY71BPMcVFe2XLOKMPzXsvLzkBzmLPGOGrs5GtHuX9JRRD7V0)



### Normal Maps 

<a name="Normals2"> </a>


In this shader you get two normal map slots! You can control the strength, tiling, offset, angle, speed, and oscillation of each one to produce different effects. For example, for a river you could increase the speed and adjust the angle so it flows in the direction you want. Having two normal maps scrolling at different angles creates a nice layering effect!

![](https://lh7-us.googleusercontent.com/GU7ewNOyD-i0ON053fVfMuVhNB7K7Tvb9CKeUEKYYqUTVhN9T92eG9oJvnAN9MKyAnCsz8DDbAj7UQc1DeL39CQkvTVbgV_KWhwa18cJiDugJSm53tcLER3mCMN_TrA6vatJUUwOe9oFdQeBGP3oyQs)

****![](https://lh7-us.googleusercontent.com/F4BeaBVZGMLSx64AzchvG3VwcfnfwDm6XcljQ9qagY1N93u3MecMgCQwhW3mJk772OuExKLoN4eoOfrCWBsOTBTtJzgEGnmuCml_6mfKY8ptu-5TGgp0-Vsa9VzRMv3yztV5qITb7ttzkzTrigsRm6U)****


### Foam

Foam is what gathers at the edges of your water and is generated automatically based on these settings on high-memory platforms. Whatever texture you use is put through a threshold filter to make a cutout which gives you your foam shape! You have the same amount of control for this as the base color and normal maps. There are some foam specific settings:

**Min Foam Depth** - How much the foam fades from the shore

**Max Foam Depth** - Amount of foam

**Foam Clip** - Runs your texture through a threshold filter

**Foam Gloss** - How shiny the foam is

![](https://lh7-us.googleusercontent.com/1B4OiZBcijiUVHlp1ARZQ0W4MiGpRo5c2qs-7AIpJgUahTRljA743W9j-ETNXMWCTYNDXCu2To1V0-yEOGkOLt6ZKBfBXQ_kU4Y5gos602Pyn3ceYptG5KNvIj7MEYafEkgNZ1SiO6Zq_yYvb2KJ-Qk)

![](https://lh7-us.googleusercontent.com/aSB0k2cSUVh_8Nmxr3xhspO1M5i_2ATpF2yPDPPVxwnhWH2-GnTQtwA4Vki8cB-XAUA0hsqLFNk7Ti2WkBQ5KqjZ6yeRsgDAg9FqyDQxTTRqr96WJtH9-jAHMMblvATDowfWaLGZ1WA-lNgEg8Niz-g)


### Waves

The water shader has the ability to have waves so you add movement to your water. Waves rely on the geometry of your mesh, so make sure you have enough vertices for a smooth wave. 

**Angle** - Direction of the wave

**Wavelength** - Width of the wave

**Steepness** - Height of the wave

![](https://lh7-us.googleusercontent.com/2QIRmydQofvKDSU0r5W2FKhgYXXcAGRFUwbkKB4-u2flYv-4srCJymBK_jN7nw-sK4LTNFoar69MNYrKgMI47T984pr8INa8iBIOGGxADJ11UYm9N4giZUKbVfdVjTLfXcSxDtaYNeUu3-yY-wFQxDM)

![](Wave.gif)


## Tips and Tricks

### Vertex Colors

Vertex colors give you some more control of your water shader. These can be applied in your modeling program or choice or if you're using probuilder, use the vertex colors panel. Here are the colors you can use and what they do:

**Yellow** = Foam + Waves

**Red** = Foam + No Waves

**Green** = No Foam + Waves

**Black** = Nothing

**Important Note:**  Foam painted in using vertex colors appears on all platforms, including mobile. This is the best way to get foam on all platforms.

****![](https://lh7-us.googleusercontent.com/LwyX0t8jI5lhQOwJVHyP_B3ug3Q5o9KKqa_MNuOA0Ct7R7Asyl0iRbLy12tf2HIm1OxVUlpCl9PMrF8A3QGoQ9BQgRa0dF_yYAr8LqwoW7tWnAAlKjGNa78RXIRNwcDPzOPis2heFmZXK2UWFkuCLf0)****

\*Colors used in the vertex color example asset

****![](https://lh7-us.googleusercontent.com/o--lgPSgt81HH8IXMA_Vul4QItqhVqJ7Cz8RNuiTa2HzouW0p-O4DPqWuiqJzL2zs06nC4LIFq86i1WEiF8yNp-kDAARGFSS3_1pjA8oGa07aOGA4tXfkNWjXKN3uZBWfEB7MpdtGJhqq_N-MKWtcew)****

\*Colors used in the waterfall example asset


### UVs

You can utilize your UV layout in order to get different results with your water shader. Having your UV edges closer together will result in faster motion whereas spacing them further apart will result in slower motion. This is great to create the effect of water rushing through a waterfall and slow down at the base.

![](https://lh7-us.googleusercontent.com/MaqOKym5rJhr_vPo8mL4XUnbJtapsMWPMAi_F10PH-CaAFJqJiXmHvhxn2y_eEkFDBxtbxCwj1ElULGLrPd0X44k5A4OqIJrX6ywriknWdEASpV3479daZKW0SBz-yppPaH15Opy117HgfXCeeR30gU)

This also works for other materials, such as Lava. Moving verts in your UV sheet will result in warping. In the UV sheet down below, you can see how the model’s UVs were edited in order to create the warping effect.

![](https://lh7-us.googleusercontent.com/FrCWlacsxQpNoeYbROj0tB06vp3tLwhq43BoTuO9ea6TUBw4Y4CoEA3d4Mu92r646K9roIAbtWPaLk_Zx1qIlPyOnce25sW9PDZzM9U24TOVPzkz6Og61io0w6H1xFCrNoar4bxu0bBbhBlrX_kkX0s)
