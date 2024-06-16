# NBA Fantasy Website

This is an NBA Fantasy Website built using React. The project is structured following the Atomic Design methodology to ensure a scalable and maintainable component architecture.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)

## Introduction

This project is an NBA Fantasy Website where users can view player statistics, team standings, and other relevant information for their fantasy basketball league.

## Features

- View detailed player statistics.
- Navigate through different sections like Home, Players, Teams, Contact, etc.
- Modular design following Atomic Design principles.
- Responsive layout for different screen sizes.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/jkobb510/NBAWebsite.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nba-fantasy-website
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm start
```
This will start the application at http://localhost:3000.

The project is structured as follows:

src/
  client/
  Components/
    Atoms/
      Stat/
        Stat.js
        atoms.css
        Logo.js
    Molecules/
      CardStats.js
      molecules.css

    Organisms/
        CardButton/
        LeftNavigationBar/
        NBACard/
            NBACard.js
            NBACard.css
        TopNavigationBar/
    Pages/
        Main
    ...
  ...

Atoms: Basic building blocks like buttons, inputs, labels, and stat components.

Molecules: More complex components composed of atoms, such as CardStats.

Organisms: Even more complex components composed of molecules and atoms.

# Dependencies
Runtime Dependencies
react ^18.0.0
react-dom ^18.0.0
react-router-dom ^6.23.1
react-scripts ^5.0.0
Development Dependencies
@types/react 18.2.38
@types/react-dom 18.2.15
loader-utils 3.2.1
typescript 4.4.4

# Scripts
The following scripts are available in this project:

start: Starts the development server.
build: Builds the application for production.
test: Runs the test suite.
eject: Ejects the create-react-app configuration.