import * as localforage from "localforage/dist/localforage";

let storageName = "gameState";

// store game state
export async function setStorage(gameState){
    try {
        await localforage.setItem(storageName, gameState);
    } catch (err) {
        console.error("Error saving game state:", err);
    }
}

// Retrieving game state
export async function getStorage(){
    try {
        const savedState = await localforage.getItem(storageName);
        if (savedState) {
            return savedState;
        } else {
            console.log("No previous game state found.");
            return null;
        }
    } catch (err) {
        console.error("Error retrieving game state:", err);
        return null;
    }
}

// cleaning old game state
export async function cleanStorage(){
    try {
        await localforage.removeItem(storageName);
    } catch (err) {
        console.error("Error clearing game state:", err);
    }
}
