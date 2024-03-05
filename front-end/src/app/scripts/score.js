import template from "../views/score.html";
import { parseUrl } from "./utils";
import { Component } from "./component";

  export class ScoreComponent extends Component{
      /* class ScoreComponent constructor */
      constructor() {
        super(template)
        let params = parseUrl();
        this.template = template;
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
      };

      /* method ScoreComponent.init */
      init() {
          document.getElementById("name").innerText = this.name;
          document.getElementById("size").innerText = this.size;
          document.getElementById("time").innerText = this.time;
      };
  }
