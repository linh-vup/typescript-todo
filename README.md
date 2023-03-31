# TypeScript To-Do

> ✨ Bootstrapped with Create Snowpack App (CSA).

Codealong to Web Dev Simplified ['How To Build Your First TypeScript Project - TODO List Application'](https://youtu.be/jBmrduvKl5w) tutorial to practice TypeScript with some custom changes and styling.

## Getting Started

- Install node modules: `npm i`
- Run server: `npm start`

Link to deployed version: [https://linhs-typescript-todo.netlify.app/](https://linhs-typescript-todo.netlify.app/)

## Additions

In addition to the codealong, I added ids and classes to elements and styling to checked list items (`text-decoration: line-through;`). In order for it to change with the `eventListener`, there's an additional line of code to toggle the class `checked` with each change, as well as adding a condition to toggle the class in the `addListItem()` function based on the value of the completed property of the task object.

I also added styling to the page to make it look less bleak.

Before:
![To-Do project before](./src/before.png 'To-Do project before')
After:
![To-Do project after](./src/after.png 'To-Do project after')
