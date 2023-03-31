# TypeScript To-Do

> ✨ Bootstrapped with Create Snowpack App (CSA).

Codealong to Web Dev Simplified ['How To Build Your First TypeScript Project - TODO List Application'](https://youtu.be/jBmrduvKl5w) tutorial to practice TypeScript with some custom changes and styling.

## Getting Started

- Install node modules: `npm i`
- Run server: `npm start`

## Additions

In addition to the code-along, I added a class to list elements and styling to checked list items (`text-decoration: line-through;`). In order for it to change with the eventlistener, there's an additional line of code to toggle the class `checked` with each change, as well as adding adding a condition to toggle the class in the `addListItem()` function based on the value of the completed property of the task object.

I also added styling to the page to make it look less bleak.

Before:
![To-Do project before](./src/before.png 'To-Do project before')
After:
![To-Do project after](./src/after.png 'To-Do project after')
