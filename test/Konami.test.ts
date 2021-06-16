import jsdomGlobal = require('jsdom-global')
import Konami from '../src/Konami'

describe('Konami', function() {

    this.beforeEach(() => {
        jsdomGlobal()
    })

    it('should trigger the custom event when the sequence is correct', (done: Mocha.Done) => {

        /* Create instance and enable */
        const k = new Konami()
        k.enable()

        /* When the callback is called the test is successfull */
        const handler: EventListener = () => { done() }

        /* Add event handler */
        document.addEventListener(k.eventName, handler)

        /* Prepare keyboard input sequence */
        const sequence: KeyboardEvent[] = []
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyB' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyA' }))

        /* Emit sequence of keyboard inputs */
        for (const event of sequence) {
            document.dispatchEvent(event)
        }
    })

    it('should restart and work with a wrong sequence', (done: Mocha.Done) => {

        /* Create instance and enable */
        const k = new Konami()
        k.enable()

        /* when the function is called the test is successfull */
        const handler: EventListener = () => { done() }

        /* Add event handler to elements */
        document.addEventListener(k.eventName, handler)

        /* Prepare keyboard input sequence */
        const sequence: KeyboardEvent[] = []
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyZ' }))

        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyB' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyA' }))

        /* Emit sequence of keyboard inputs */
        for (const event of sequence) {
            document.dispatchEvent(event)
        }
    })

    it('should work with any given html element', (done: Mocha.Done) => {

        /* Create a new html element and add it to the body */
        const e: HTMLElement = document.createElement('section')
        document.body.appendChild(e)

        /* Create new instance with the created element and enable */
        const k = new Konami(e)
        k.enable()

        /* when the function is called the test is successfull */
        const handler: EventListener = () => { done() }

        /* Add event handler to elements */
        document.addEventListener(k.eventName, handler)

        /* Prepare keyboard input sequence */
        const sequence: KeyboardEvent[] = []
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyB' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyA' }))

        /* Emit sequence of keyboard inputs */
        for (const event of sequence) {
            document.dispatchEvent(event)
        }
    })

    it('should not work when disabled', (done: Mocha.Done) => {

        /* Test is successful if the callback wasn't called until timeout */
        const id: NodeJS.Timeout = setTimeout(() => {
            done()
        }, 100)

        /* Create instance and enable */
        const k = new Konami()
        k.enable()

        /* when the function is called the test is not a success */
        const handler: EventListener = () => {
            clearTimeout(id) // Clear success timeout
            done(new Error('konami code was triggered')) // Emit error
        }

        /* Add event handler to elements */
        document.addEventListener(k.eventName, handler)

        /* Disable konami code event listener */
        k.disable()

        /* Prepare keyboard input sequence */
        const sequence: KeyboardEvent[] = []
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyB' }))
        sequence.push(new KeyboardEvent('keyup', { code: 'KeyA' }))

        /* Emit sequence of keyboard inputs */
        for (const event of sequence) {
            document.dispatchEvent(event)
        }
    })
})
