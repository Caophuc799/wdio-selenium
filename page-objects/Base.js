import { short } from "../config/timeouts";

class Base {
    pauseShort() {
        browser.pause(short)
    }

    pauseMedium() {
        browser.pause(long)
    }

    pauseLong() {
        browser.pause(long)
    }
}

export default Base;