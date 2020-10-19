# KONAMI CODE

Everybody knows the konami code `↑ ↑ ↓ ↓ → ← → ← B A`

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
