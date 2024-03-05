# Welcome to MEME-Ory!
MEME-Ory is a memory game based on memes ¯\(ツ)\/¯. This README will guide you through setting up and playing the game.

## Prerequisites
Before getting started, make sure you have the following:

* __Node.js__ : Have a recent LTS version of Node.js installed. You can check your Node.js version by running node -v. Ensure it's at least v16.13.0.
* __Web Browser__ : Have a web browser with good debugging capabilities for JavaScript (e.g., Google Chrome, Chromium, or Firefox).
* __IDE__ : Have a good Integrated Development Environment (IDE) for web development. We recommend Visual Studio Code as it's free and excellent for web development.
* __Optional__ : Install Prettier, a code formatter, to automatically rearrange JS, HTML, and CSS code when you save a file.

## Folders

* __back-end__: Contains the code for the application server. You are not intended to modify it.
* __front-end__: Contains the code for the web UI. We will rewrite it step by step using modern ES6.

## Start and Try the Application
Install and start the back-end:

```bash
cd back-end
npm install
npm run start
```

Start the HTTP server for the front-end:

```bash
cd front-end
npm install
npm run start
```
Test the application by going to http://localhost:8080/ and play through the whole game.

## Views

As you can see, the game consists of three views:

* Game view
* Score view
* Checklist
