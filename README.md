# Node.js Quiz Application

This Node.js application implements a simple quiz application that tests users' knowledge of Node.js concepts. Users can answer multiple-choice questions and receive immediate feedback on their answers.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/someswar177/Quiz-Application
   ```

2. Navigate to the project directory:

   ```bash
   cd Quiz-Application
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Access the quiz in your web browser at `http://localhost:3000`.

3. Answer the quiz questions and submit your answers to receive feedback.

## Features

- Provides a set of multiple-choice questions related to Node.js concepts.
- Includes 15 questions in the quiz.
- Allows users to submit their answers and receive immediate feedback.
- Calculates the user's score based on the correctness of their answers.
- Displays whether the selected answer is correct or not beside the selected option.
- Shows the correct answer at the end of every question.

## Dependencies

- Express.js: For handling HTTP requests and routing.
- Body-parser: For parsing incoming request bodies.
- EJS: For rendering HTML templates.
