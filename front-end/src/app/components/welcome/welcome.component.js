import template from "./welcome.component.html";
import { Component } from "../../scripts/component";
import "./welcome.component.css";
import {cleanStorage} from "../game/localstorage/localstorage.component";

  export class  WelcomeComponent extends Component{

    /* class WelcomeComponent constructor  */
    constructor(){
        super(template)
        this.template = template;
    };

    /* method WelcomeComponent.init */
    async init() {
        let form = document.querySelector("form.form-signin");

        form.addEventListener(
          "submit", (event) => {
            event.preventDefault();
            if (form.checkValidity() === false) {
              event.stopPropagation();
              form.classList.add("was-validated");
            } else {
              let name = event.srcElement.querySelector("#nickname").value;
              let size = parseInt(event.srcElement.querySelector("#size").value);
              this._startGame(name, size);
            }
          }, false
        );
        await cleanStorage();
        return this;
    };

    _startGame(name, size) {
        let gamePage = "./#game";
        window.location =`${gamePage}?name=${name}&size=${size}`;
    };

  }
