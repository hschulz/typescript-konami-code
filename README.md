# KONAMI CODE

[travis-img]: https://img.shields.io/travis/com/hschulz/typescript-konami-code?style=flat-square
[codecov-img]: https://img.shields.io/codecov/c/github/hschulz/typescript-konami-code.svg?style=flat-square
[github-issues-img]: https://img.shields.io/github/issues/hschulz/typescript-konami-code.svg?style=flat-square
[contrib-welcome-img]: https://img.shields.io/badge/contributions-welcome-blue.svg?style=flat-square
[license-img]: https://img.shields.io/github/license/hschulz/typescript-konami-code.svg?style=flat-square

[![travis-img]](https://travis-ci.com/github/hschulz/typescript-konami-code)
[![codecov-img]](https://codecov.io/gh/hschulz/typescript-konami-code)
[![github-issues-img]](https://github.com/hschulz/typescript-konami-code/issues)
[![contrib-welcome-img]](https://github.com/hschulz/typescript-konami-code/blob/master/CONTRIBUTING.md)
[![license-img]](https://github.com/hschulz/typescript-konami-code/blob/master/LICENSE)

Everybody knows the konami code `↑ ↑ ↓ ↓ ← → ← → B A`

Now you can add it to your projects.

```typescript
// Import the konami class
import Konami from 'typescript-konami-code'

// Create a new instance and enable it
const k: Konami = new Konami()
k.enable()

// Add the event listener and callback
document.addEventListener(k.eventName, () => {

    // Successful konami kode will change the body background color
    document.body.style.backgroundColor = '#666'

    // Disable the event now; if you want
    k.disable()
})
```
