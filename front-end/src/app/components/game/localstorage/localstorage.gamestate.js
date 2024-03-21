import * as localstorage from "./localstorage.component"

export class LocalstorageGamestate {
    constructor() {
        this.ids = null;
        this.flipped = null;
        this.elapsedTime = 0;
        this._matchedPairs = 0;
        this.gameStarted = false;
    }

    async init(){
        const data = await localstorage.getStorage();
        if (data != null){
            this.ids = data.ids;
            this.flipped = data.flipped;
            this.elapsedTime = data.elapsedTime;
            this._matchedPairs = data._matchedPairs;
            this.gameStarted = true;
            this.flippedCardIndex = null;
            this.findFlippedCardIndex();
        }
    }

    cardFlipped(index){
        if(this.flipped != null){
            this.flipped[index] = !this.flipped[index];
        }
    }

    async storeData(){
        let data = {};
        data.ids = this.ids;
        data.flipped = this.flipped;
        data.elapsedTime = this.elapsedTime;
        data._matchedPairs = this._matchedPairs;
        await localstorage.setStorage(data);
    }

    async cleanData(){
        await localstorage.cleanStorage();
        this.constructor();
    }

    findFlippedCardIndex(){
        if (this.flipped != null &&
            this.flipped.filter((card)=>card === true).length % 2 === 1){

            for (let index = 0;
                 index < this.ids.length;
                 index ++){

                if (this.flipped[index]){

                    const cardId = this.ids[index];
                    const pairIndex = this.flipped
                        .findIndex((cardFlipped, idx) => {
                            return idx !== index && cardFlipped && this.ids[idx] === cardId;
                        });

                    if (pairIndex===-1){
                        this.flippedCardIndex = index;
                        break;
                    }
                }
            }
        }
    }
}
