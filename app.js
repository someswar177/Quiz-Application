const express = require('express');
const bodyParser = require('body-parser');
const quizData = require('./quizData.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve quiz questions
app.get('/', (req, res) => {
    res.render('quiz', { quizData });
});

// Handle user submissions
// Handle user submissions
app.post('/submit', (req, res) => {
    const userAnswers = req.body;
    let score = 0;
    let feedback = [];
    console.log(userAnswers)

    // Calculate score and provide feedback
    quizData.forEach(question => {
        if (userAnswers[question.id] === question.answer) {
            score++;
            feedback.push({ id: question.id, correct: true });
        } else {
            feedback.push({ id: question.id, correct: false, correctAnswer: question.answer });
        }
    });

    // Render the feedback page with score, feedback, and userAnswers
    res.render('feedback', { score, feedback, userAnswers,quizData });
});


app.listen(PORT, () => {
    console.log(`Server is running at \n http://localhost:${PORT}`);
});
