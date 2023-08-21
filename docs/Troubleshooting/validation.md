---
sidebar_position: 3
slug: validation
---
# Asset Validation

Whenever you hit Upload or Play, RRStudio runs a series of validation steps steps to help detect common issues with your room.

:::info

Asset validation rules will change over time.  It's possible that older rooms may have validation errors when re-uploading with a newer version.

:::

### Material &lt;mateiral&gt; uses an unsupported shader &lt;shader&gt;. Edit this material to use one of the Rec Room Studio shaders.{#invalid-material}

Rec Room Studio supports a limited number of shaders.  You must use one of the `Rec Room Studio/*` shaders.  Shaders like `Standard` or custom shaders & shader graphs are not supported.

See [Importing Unity Assets](/docs/BuildinginRRS/import#urp) for more information about updating your shaders.


### Baked Global Illumination is not supported. Turn it off in the Lighting Settings window. {#baked-global-illumination}

Rec Room does not support baked global illumination.  To disable it open the lighting panel (Window -> Rendering -> Lighting) and uncheck `Baked Global Illumination`


### Fog mode &lt;mode&gt; is not supported. Fog mode must be set to linear. Change this in the Lighting Settings window {#fog-mode}

Rec Room only supports linear fog mode.  To change the fog mode open the lighting panel (Window -> Rendering -> Lighting) and select the `Environment` tab, and under Fog, change the mode to `Linear`

![Fog mode setting](validation-fog-mode.png)