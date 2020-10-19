/**
 * This class contains functionality to handle keyboard input events
 * for matching the given inputs to the konami code sequence and triggering
 * an event on completion.
 */
export default class Konami {

    /**
     * This is the konami code sequence as `KeyboardEvent.code` names.
     */
    protected readonly sequence: string[] = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ]

    /**
     * Name of the custom event that will be triggered and can be listened for.
     */
    public readonly eventName: string = 'konami.code'

    /**
     * Current index (position) in the sequence of keyboard inputs.
     */
    protected index: number = 0

    /**
     * Event dispatching target.
     */
    protected target: HTMLElement = document.body

    /**
     * Create a new konami code handler with an optional event target.
     * If no target is given `document.body` will be used by default.
     *
     * @param target Some element
     */
    public constructor(target?: HTMLElement) {

        if (target !== undefined) {
            this.target = target
        }
    }

    /**
     * Event handler for the keyboard events.
     *
     * @param event The keyboard event that will be handled
     */
    protected handleCode = (event: KeyboardEvent): void => {

        /* Get the code name of the event and compare it to the current index */
        if (event.code === this.sequence[this.index]) {
            this.index++
        } else {
            this.index = 0 // reset index on error
        }

        /* When the code has been entered */
        if (this.index === this.sequence.length) {
            this.target.dispatchEvent(new CustomEvent(this.eventName, { bubbles: true }))
            this.index = 0 // reset index on completion
        }
    }

    /**
     * Enables the `keyup` input event listener for this instance.
     */
    public enable(): void {
        document.addEventListener('keyup', this.handleCode)
    }

    /**
     * Disables the `keyup` input event listener for this instance.
     */
    public disable(): void {
        document.removeEventListener('keyup', this.handleCode)
    }
}
