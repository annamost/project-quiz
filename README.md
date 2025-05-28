# Project Quiz

Project brief: Build a quiz with React focusing on React state and controlled forms.

## Tech stack

- React
- JavaScript
- HTML
- CSS
- Figma

## Project Description

The goal for this project was getting more familiar with React state and controlled forms. I started out by designing the website in Figma for both the mobile and desktop versions. Then I sketched out which part of the website would be turned into its own component and where it would sit in the hierarchie. I started of using two different types of "questions" (controlled forms: radiobuttons and select) and started building the components for each like the question title (question itself) and the question card where the form would be. The selected answer is stored as a state using the useState hook and is compared to the correct answer, when the "next" button is pressed. The total points is another state that allows me to keep track of the total points to show the user in the end. The "submit" at the end will trigger the points to be displayed on the page. As I wanted to have a more "game" feeling to the quiz, I created another state variable to define in which "section" of the quiz we are in that would be initialised after pressing the start button. I also thought it would be fun if the user could put in their own name and select an avatar for the quiz, so I used two more controlled forms to keep track of those and display them in the header. After the app was functional I went on to styling with CSS starting with mobile version first and then adapting it for bigger screens.

Outlook: Showing the user which answers where correct and adding validations to the forms with custom error messages.

## View it live

Project is deployed here: [Quizzz](https://littlequizzz.netlify.app)

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
