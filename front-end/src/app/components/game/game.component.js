import { parseUrl } from "../../scripts/utils";
import template from "./game.component.html";
import { Component } from "../../scripts/component";
import "./game.component.css";
import { CardComponent } from "./card/card.component";
import { LocalstorageGamestate } from "./localstorage/localstorage.gamestate";

let environment = {
    api: {
        host: "http://localhost:8081",
    },
};

export class GameComponent extends Component {

    /* class GameComponent constructor */
    constructor(){
        super(template);
        // gather parameters from URL
        let params = parseUrl();

        // save player name & game size
        this.template = template;
        this._name = params.name;
        this._size = parseInt(params.size) || 9;
        this._flippedCard = null;
    };

    /* method GameComponent.init */
    async init() {
        // fetch the cards configuration from the server
        this.gameState = new LocalstorageGamestate();
        await this.fetchConfig();
        this._boardElement = document.querySelector(".cards");

        this.gameState.ids
            .map((id, index)=> {
                const card = new CardComponent(id, index)
                this._boardElement.appendChild(card.getElement());
                card.getElement().addEventListener(
                    "click", () => {
                        this._flipCard(card);
                    });
                if(this.gameState.flipped[index]===true){
                    card.flip();
                }
                if (this.gameState.flippedCardIndex
                    && this.gameState.flippedCardIndex === index){
                    this._flippedCard = card;
                }
            })

        this.start();
    };

    /* method GameComponent.start */
    start() {
        this._startTime = Date.now() - this.gameState.elapsedTime * 1000;
        let seconds = this.gameState.elapsedTime;
        document.querySelector("nav .navbar-title").textContent =
          `Player: ${this._name}. Elapsed time: ${seconds++}`;

        this._timer = setInterval(() => {
            document.querySelector("nav .navbar-title").textContent =
              `Player: ${this._name}. Elapsed time: ${seconds++}`;
            },1000
        );
    };

    /* method GameComponent.fetchConfig */
     async fetchConfig() {
         await this.gameState.init();
         if (this.gameState.gameStarted === false){
             const response = await fetch(
                    `${environment.api.host}/board?size=${this._size}`
             ).then((config)=>config.json());
             this.gameState.ids = response.ids;
             this.gameState.flipped = [];
             await this.gameState.ids.forEach(() => this.gameState.flipped.push(false));
         }
     }

    /* method GameComponent.goToScore */
    goToScore() {
        let timeElapsedInSeconds = Math.floor(
            (Date.now() - this._startTime) / 1000
        );
        clearInterval(this._timer);

        setTimeout(() => {
            let scorePage = "./#score";
            window.location =
                `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
          }, 750);
    };

    /* method GameComponent._flipCard */
    async _flipCard(card) {
        if (this._busy) {
            return;
        }

        if (card.flipped) {
            return;
        }

        // flip the card
        card.flip();
        this.gameState.cardFlipped(card.index);

        // if flipped first card of the pair
        if (!this._flippedCard) {
            // keep this card flipped and wait for the second card of the pair
            this._flippedCard = card;
        } else {
            // second card of the pair flipped...

            // if cards are the same
            if (card.equals(this._flippedCard)) {
                this._flippedCard.matched = true;
                card.matched = true;
                this.gameState._matchedPairs += 1;

                // reset flipped card for the next turn.
                this._flippedCard = null;

                if (this.gameState._matchedPairs === this._size) {
                    this.goToScore();
                    await this.gameState.cleanData()
                }
            } else {
                this._busy = true;

                // cards did not match
                // wait a short amount of time before hiding both cards
                setTimeout(async () => {
                    // hide the cards
                    this._flippedCard.flip();
                    card.flip();

                    // update card state
                    this.gameState.cardFlipped(card.index);
                    this.gameState.cardFlipped(this._flippedCard.index);
                    await this.gameState.storeData();
                    this._busy = false;

                    // reset flipped card for the next turn.
                    this._flippedCard = null;
                }, 500);
            }
        }

        // store date for local storage
        this.gameState.elapsedTime = Math.floor(
            (Date.now() - this._startTime) / 1000
        );
        await this.gameState.storeData();
    };
}
