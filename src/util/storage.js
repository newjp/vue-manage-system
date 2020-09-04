export function isObject (val) {
    return val !== null && typeof val === 'object';
}

export function setItem(key, val) {
    if (isObject(val)) {
        sessionStorage.setItem(key, JSON.stringify(val));
    } else {
        sessionStorage.setItem(key, val);
    }
}

export function getItem(key) {
    var val = sessionStorage.getItem(key);

    try {
        return JSON.parse(val);
    } catch (e) {
        return val;
    }
}

export function removeItem(key) {
    sessionStorage.removeItem(key);
}

export function clear() {
    sessionStorage.clear();
}

export default {
    isObject,
    setItem,
    getItem,
    removeItem,
    clear
}