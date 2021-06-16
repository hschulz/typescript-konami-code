"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class contains functionality to handle keyboard input events
 * for matching the given inputs to the konami code sequence and triggering
 * an event on completion.
 */
var Konami = /** @class */ (function () {
    /**
     * Create a new konami code handler with an optional event target.
     * If no target is given `document.body` will be used by default.
     *
     * @param target Some element
     */
    function Konami(target) {
        var _this = this;
        /**
         * This is the konami code sequence as `KeyboardEvent.code` names.
         */
        this.sequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        /**
         * Name of the custom event that will be triggered and can be listened for.
         */
        this.eventName = 'konami.code';
        /**
         * Current index (position) in the sequence of keyboard inputs.
         */
        this.index = 0;
        /**
         * Event dispatching target.
         */
        this.target = document.body;
        /**
         * Event handler for the keyboard events.
         *
         * @param event The keyboard event that will be handled
         */
        this.handleCode = function (event) {
            /* Get the code name of the event and compare it to the current index */
            if (event.code === _this.sequence[_this.index]) {
                _this.index++;
            }
            else {
                _this.index = 0; // reset index on error
            }
            /* When the code has been entered */
            if (_this.index === _this.sequence.length) {
                _this.target.dispatchEvent(new CustomEvent(_this.eventName, { bubbles: true }));
                _this.index = 0; // reset index on completion
            }
        };
        if (target !== undefined) {
            this.target = target;
        }
    }
    /**
     * Enables the `keyup` input event listener for this instance.
     */
    Konami.prototype.enable = function () {
        document.addEventListener('keyup', this.handleCode);
    };
    /**
     * Disables the `keyup` input event listener for this instance.
     */
    Konami.prototype.disable = function () {
        document.removeEventListener('keyup', this.handleCode);
    };
    return Konami;
}());
exports.default = Konami;
//# sourceMappingURL=Konami.js.map