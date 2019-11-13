
//Sruvey For Web Development Role

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employment Screening",
    pages: [
        {
            //Page 1
            questions: [
                {
                    //Question 1
                    name: "Question1",
                    type: "text",
                    title: "What is the biggest challenge you’ve faced in your current or previous role? How did you overcome this challenge? What was the outcome?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 2
                    name: "Question2",
                    type: "text",
                    title: "What are your goals for professional development? How will getting this job help you advance toward your professional development goals?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 3
                    name: "Question3",
                    type: "text",
                    title: "What makes a job fun and motivating for you?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 4
                    name: "Question4",
                    type: "text",
                    title: "What career challenges have prepared you for the challenges you would face in this job?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 5
                    name: "Question5",
                    type: "text",
                    title: "Have you ever had to manage multiple deadlines set for the same day or week? How did you do it?",                   
                    placeHolder: "",
                    isRequired: true
                }
            ]
        }, 
        //Page 2
        {
            questions: [
                {
                    //Question 6
                    name: "Question6",
                    type: "text",
                    title: "What was the most frustrating part of your current role? Have you ever taken steps to try and make this part of your role less frustrating?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 7
                    name: "Question7",
                    type: "text",
                    title: "What does your typical work week look like in terms of responsibilities? How have these responsibilities changed over time?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 8
                    name: "Question8",
                    type: "text",
                    title: "What salary range do you expect from your next role?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 9
                    name: "Question9",
                    type: "text",
                    title: "When can you start if you’re hired?",                   
                    placeHolder: "",
                    isRequired: true
                },
                {
                    //Question 10
                    name: "Question10",
                    type: "text",
                    title: "Are you currently interviewing with any other companies?",                   
                    placeHolder: "",
                    isRequired: true
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });
