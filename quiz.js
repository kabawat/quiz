const data = [
    {
        question: "What is JavaScript?", answers: ["A markup language", "A programming language", "A stylesheet language", "A database language"],
        correctAnswer: 1
    },
    {
        question: "What is the difference between let and var in JavaScript?",
        answers: ["let has block scope and var has function scope", "var has block scope and let has function scope", "let and var are interchangeable", "let has global scope and var has local scope"],
        correctAnswer: 0
    },
    {
        question: "What is a closure in JavaScript?",
        answers: ["A function that has no access to variables in its outer scope", "A function that returns an object", "A function that takes another function as an argument", "A function that has access to variables in its outer scope"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: ["To refer to the global object", "To refer to the parent object", "To refer to the current object", "To refer to the child object"],
        correctAnswer: 2
    }
]

module.exports = data