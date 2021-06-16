/**
 * This class contains functionality to handle keyboard input events
 * for matching the given inputs to the konami code sequence and triggering
 * an event on completion.
 */
export default class Konami {
    /**
     * This is the konami code sequence as `KeyboardEvent.code` names.
     */
    protected readonly sequence: string[];
    /**
     * Name of the custom event that will be triggered and can be listened for.
     */
    readonly eventName: string;
    /**
     * Current index (position) in the sequence of keyboard inputs.
     */
    protected index: number;
    /**
     * Event dispatching target.
     */
    protected target: HTMLElement;
    /**
     * Create a new konami code handler with an optional event target.
     * If no target is given `document.body` will be used by default.
     *
     * @param target Some element
     */
    constructor(target?: HTMLElement);
    /**
     * Event handler for the keyboard events.
     *
     * @param event The keyboard event that will be handled
     */
    protected handleCode: (event: KeyboardEvent) => void;
    /**
     * Enables the `keyup` input event listener for this instance.
     */
    enable(): void;
    /**
     * Disables the `keyup` input event listener for this instance.
     */
    disable(): void;
}
//# sourceMappingURL=Konami.d.ts.map