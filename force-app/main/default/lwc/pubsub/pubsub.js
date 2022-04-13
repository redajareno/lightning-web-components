// publish, subscribe

/* eslint-disable no-console */
const store = {};

/**
 * @description subscribes a callback for an event
 * @param {string} eventName - Name of the event to listen for.
 * @param {function} callback - Function to invoke when said event is fired.
 */
// Example:
// subscribe('zeroToHero', function(message) {
//     console.log(message);
// })
const subscribe = (eventName, callback) => {
    if (!store[eventName]) {
        store[eventName] = new Set();
    }
    store[eventName].add(callback);
};

/**
 * @description unsubscribes a callback for an event
 * @param {string} eventName - Name of the event to unsubscribe from.
 * @param {function} callback - Function to unsubscribe.
 */
const unsubscribe = (eventName, callback) => {
    if (store[eventName]) {
        store[eventName].delete(callback);
    }
};

/**
 * @description Publish an event to listeners.
 * @param {string} eventName - Name of the event to publish.
 * @param {*} payload - Payload of the event to publish.
 */
const publish = (eventName, payload) => {
    if (store[eventName]) {
        store[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.error(error);
            }
        });
    }
};

export default {
    subscribe,
    unsubscribe,
    publish
};