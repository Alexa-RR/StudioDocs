Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]



## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://rec.net/user/Alexa"><img src="https://avatars.githubusercontent.com/u/53471801?v=4?s=100" width="100px;" alt="Alexa"/><br /><sub><b>Alexa</b></sub></a><br /><a href="https://github.com/Alexa-RR/StudioDocs/commits?author=Alexa-RR" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/projects-rr"><img src="https://avatars.githubusercontent.com/u/131033778?v=4?s=100" width="100px;" alt="Projects"/><br /><sub><b>Projects</b></sub></a><br /><a href="https://github.com/Alexa-RR/StudioDocs/commits?author=projects-rr" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/WolleyFreyrRR"><img src="https://avatars.githubusercontent.com/u/143228531?v=4?s=100" width="100px;" alt="WolleyFreyrRR"/><br /><sub><b>WolleyFreyrRR</b></sub></a><br /><a href="https://github.com/Alexa-RR/StudioDocs/commits?author=WolleyFreyrRR" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/techsideofficial"><img src="https://avatars.githubusercontent.com/u/68258126?v=4?s=100" width="100px;" alt="techsideofficial"/><br /><sub><b>techsideofficial</b></sub></a><br /><a href="https://github.com/Alexa-RR/StudioDocs/commits?author=techsideofficial" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.



[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
