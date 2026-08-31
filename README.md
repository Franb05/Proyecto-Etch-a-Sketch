# Etch-a-Sketch

A browser-based Etch-a-Sketch drawing application built as part of [The Odin Project](https://www.theodinproject.com/) Foundations course.

## About

This project is an interactive drawing grid that allows the user to draw by moving the mouse over the squares.

The grid can be resized dynamically by entering the desired number of squares per side. The application supports grid sizes from **1×1 up to 100×100**, while keeping the same total drawing area.

Each interaction with a square generates a random RGB color and progressively darkens the square with repeated interactions.

## Features

- Dynamic grid size from 1×1 to 100×100.
- User input handled through `prompt()`.
- Previous grids are removed before generating a new one.
- The drawing area keeps the same total size regardless of grid dimensions.
- Random RGB colors are generated when interacting with squares.
- Squares progressively darken by 10% with each interaction.
- Mouse interaction using the `mouseenter` event.
- Grid generated dynamically with JavaScript.
- Flexbox used to organize the grid.

## Technologies

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Git & GitHub

## What I Practiced

This project helped me practice:

- Creating and manipulating DOM elements with JavaScript.
- Using `querySelector()` and event listeners.
- Working with `mouseenter` events.
- Using loops to dynamically generate elements.
- Validating user input with `while` loops.
- Working with RGB colors and random values.
- Modifying element styles through JavaScript.
- Managing variables and scope.
- Using Git for version control.

## How to Use

1. Open the application in your browser.
2. Click the button to choose the grid size.
3. Enter a number between 1 and 100.
4. Move your mouse over the grid to draw.
5. Interact with the same square multiple times to progressively darken it.

## Project

This project was created as part of **The Odin Project – Foundations** curriculum.

Created by: Franco Ariel Brasa
