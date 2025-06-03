const transformationExercises = [
    {
        id: 0, // Example exercise
        sentence1: "Do you mind if I watch you while you paint?",
        givenWord: "objection",
        prefix: "Do you ",
        suffix: " you while you paint?",
        correctAnswer: ["have any objection to my watching", "have any objection to me watching"],
        minWords: 3,
        maxWords: 8,
        isExample: true, // Flag for example
        status: 'pending' // Initial status for progress tracking
    },
    {
        id: 1,
        sentence1: "It's impossible to predict how long it will take to do this job.",
        givenWord: "telling",
        prefix: "There is ",
        suffix: " will take.",
        correctAnswer: ["no telling how long it"],
        minWords: 3,
        maxWords: 8,
        status: 'pending' // Initial status for progress tracking
    },
    {
        id: 2,
        sentence1: "The manager is not to be disturbed on any account.",
        givenWord: "circumstances",
        prefix: "Under no ",
        suffix: " be disturbed.",
        correctAnswer: ["circumstances is the manager to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 3,
        sentence1: "I find his lack of professionalism utterly unacceptable.",
        givenWord: "nothing",
        prefix: "His lack of professionalism is ",
        suffix: " unacceptable.",
        correctAnswer: ["nothing short of utterly"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 4,
        sentence1: "They couldn't make sense of the instructions.",
        givenWord: "baffled",
        prefix: "The instructions ",
        suffix: " completely.",
        correctAnswer: ["baffled them"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 5,
        sentence1: "Her proposals were met with a great deal of opposition.",
        givenWord: "considerable",
        prefix: "There was ",
        suffix: " to her proposals.",
        correctAnswer: ["considerable opposition"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 6,
        sentence1: "The success of the project depended on the weather.",
        givenWord: "crucial",
        prefix: "The weather was ",
        suffix: " to the success of the project.",
        correctAnswer: ["crucial"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 7,
        sentence1: "It's unlikely that the company will go bankrupt.",
        givenWord: "prospect",
        prefix: "There's little ",
        suffix: " the company going bankrupt.",
        correctAnswer: ["prospect of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 8,
        sentence1: "He was so tired that he fell asleep in the armchair.",
        givenWord: "such",
        prefix: "He was ",
        suffix: " he fell asleep in the armchair.",
        correctAnswer: ["in such a state of tiredness that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 9,
        sentence1: "Only by working extra hours could she afford the new car.",
        givenWord: "did",
        prefix: "Only by working extra hours ",
        suffix: " afford the new car.",
        correctAnswer: ["did she manage to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 10,
        sentence1: "They were determined to finish the project by the deadline.",
        givenWord: "intent",
        prefix: "They were ",
        suffix: " the project by the deadline.",
        correctAnswer: ["intent on finishing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 11,
        sentence1: "I never intended to upset her.",
        givenWord: "least",
        prefix: "The ",
        suffix: " upset her.",
        correctAnswer: ["last thing I wanted was to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 12,
        sentence1: "His rude behaviour was unacceptable.",
        givenWord: "call",
        prefix: "His rude behaviour was ",
        suffix: ".",
        correctAnswer: ["beyond the call of duty"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 13,
        sentence1: "It's essential that you do not forget your passport.",
        givenWord: "importance",
        prefix: "It is of ",
        suffix: " you do not forget your passport.",
        correctAnswer: ["utmost importance that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 14,
        sentence1: "We would often spend hours talking about our dreams.",
        givenWord: "used",
        prefix: "We ",
        suffix: " hours talking about our dreams.",
        correctAnswer: ["used to spend"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 15,
        sentence1: "Very few people attended the conference.",
        givenWord: "turnout",
        prefix: "There was ",
        suffix: " for the conference.",
        correctAnswer: ["a poor turnout"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 16,
        sentence1: "He was completely unaware of the consequences of his actions.",
        givenWord: "heed",
        prefix: "He paid ",
        suffix: " the consequences of his actions.",
        correctAnswer: ["no heed whatsoever to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 17,
        sentence1: "I really don't feel like going out tonight.",
        givenWord: "mood",
        prefix: "I'm not ",
        suffix: " tonight.",
        correctAnswer: ["in the mood for going out"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 18,
        sentence1: "You must consider the broader implications of your decision.",
        givenWord: "account",
        prefix: "You must take ",
        suffix: " of your decision.",
        correctAnswer: ["into account the broader implications"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 19,
        sentence1: "It is often difficult to make ends meet these days.",
        givenWord: "difficulty",
        prefix: "People often ",
        suffix: " these days.",
        correctAnswer: ["have difficulty making ends meet"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 20,
        sentence1: "The new policy will be implemented immediately.",
        givenWord: "effect",
        prefix: "The new policy will ",
        suffix: " immediately.",
        correctAnswer: ["come into effect"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 21,
        sentence1: "She really admires her grandfather.",
        givenWord: "looks",
        prefix: "She really ",
        suffix: " her grandfather.",
        correctAnswer: ["looks up to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 22,
        sentence1: "I never doubted that he would succeed.",
        givenWord: "question",
        prefix: "There was ",
        suffix: " his success.",
        correctAnswer: ["no question about"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 23,
        sentence1: "He regrets not having said goodbye to her.",
        givenWord: "wished",
        prefix: "He ",
        suffix: " goodbye to her.",
        correctAnswer: ["wished he had said"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 24,
        sentence1: "This is the most challenging task I've ever faced.",
        givenWord: "faced",
        prefix: "Never ",
        suffix: " challenging task.",
        correctAnswer: ["have I faced such a"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 25,
        sentence1: "The meeting was cancelled due to lack of interest.",
        givenWord: "called",
        prefix: "The meeting was ",
        suffix: " of interest.",
        correctAnswer: ["called off due to a lack"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 26,
        sentence1: "It's futile to try and persuade him to change his mind.",
        givenWord: "point",
        prefix: "There's ",
        suffix: " try and persuade him to change his mind.",
        correctAnswer: ["no point in trying to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 27,
        sentence1: "Her new book is a great improvement on her previous one.",
        givenWord: "far",
        prefix: "Her new book is ",
        suffix: " her previous one.",
        correctAnswer: ["far better than"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 28,
        sentence1: "I wish I hadn't argued with my boss.",
        givenWord: "having",
        prefix: "I regret ",
        suffix: " with my boss.",
        correctAnswer: ["having argued"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 29,
        sentence1: "The bad weather prevented us from going for a picnic.",
        givenWord: "account",
        prefix: "On ",
        suffix: " go for a picnic.",
        correctAnswer: ["no account did we"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 30,
        sentence1: "He certainly isn't a trustworthy person.",
        givenWord: "means",
        prefix: "He is by ",
        suffix: " trustworthy person.",
        correctAnswer: ["no means a"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 31,
        sentence1: "I prefer to rely on myself rather than on others.",
        givenWord: "depend",
        prefix: "I prefer to ",
        suffix: " rather than on others.",
        correctAnswer: ["depend on myself"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 32,
        sentence1: "I don't intend to tolerate his rudeness any longer.",
        givenWord: "put",
        prefix: "I'm not going to ",
        suffix: " his rudeness any longer.",
        correctAnswer: ["put up with"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 33,
        sentence1: "He was dismissed for his negligence.",
        givenWord: "resulted",
        prefix: "His negligence ",
        suffix: " his dismissal.",
        correctAnswer: ["resulted in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 34,
        sentence1: "She managed to pass the exam despite her illness.",
        givenWord: "fact",
        prefix: "She managed to pass the exam ",
        suffix: " she was ill.",
        correctAnswer: ["in spite of the fact that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 35,
        sentence1: "He has no intention of apologising to her.",
        givenWord: "apologise",
        prefix: "He is not ",
        suffix: " to her.",
        correctAnswer: ["going to apologise"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 36,
        sentence1: "It's often the case that good intentions lead to disaster.",
        givenWord: "frequently",
        prefix: "Good intentions ",
        suffix: " disaster.",
        correctAnswer: ["frequently lead to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 37,
        sentence1: "They only realised the danger when they heard the explosion.",
        givenWord: "until",
        prefix: "It wasn't ",
        suffix: " they realised the danger.",
        correctAnswer: ["until they heard the explosion that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 38,
        sentence1: "I'm sure he didn't mean to offend you.",
        givenWord: "purpose",
        prefix: "I'm sure he didn't ",
        suffix: " offend you.",
        correctAnswer: ["do it on purpose to"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 39,
        sentence1: "He left without saying goodbye, which was rude.",
        givenWord: "took",
        prefix: "He ",
        suffix: " without saying goodbye.",
        correctAnswer: ["took his leave"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 40,
        sentence1: "I rarely go to the cinema these days.",
        givenWord: "hardly",
        prefix: "I ",
        suffix: " to the cinema these days.",
        correctAnswer: ["hardly ever go"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 41,
        sentence1: "The cost of living has risen considerably recently.",
        givenWord: "sharp",
        prefix: "There has been ",
        suffix: " the cost of living recently.",
        correctAnswer: ["a sharp rise in"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 42,
        sentence1: "People say that he's a very talented musician.",
        givenWord: "said",
        prefix: "He is ",
        suffix: " a very talented musician.",
        correctAnswer: ["said to be"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 43,
        sentence1: "Her performance was so outstanding that she won an award.",
        givenWord: "such",
        prefix: "It was ",
        suffix: " she won an award.",
        correctAnswer: ["such an outstanding performance that"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 44,
        sentence1: "I'm not willing to compromise on this issue.",
        givenWord: "prepared",
        prefix: "I'm not ",
        suffix: " on this issue.",
        correctAnswer: ["prepared to compromise"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 45,
        sentence1: "He has a reputation for being a very demanding boss.",
        givenWord: "known",
        prefix: "He is ",
        suffix: " a very demanding boss.",
        correctAnswer: ["known for being"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 46,
        sentence1: "She found the novel deeply moving.",
        givenWord: "impression",
        prefix: "The novel ",
        suffix: " her.",
        correctAnswer: ["made a deep impression on"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 47,
        sentence1: "I couldn't help laughing when I heard his joke.",
        givenWord: "burst",
        prefix: "I ",
        suffix: " when I heard his joke.",
        correctAnswer: ["burst out laughing"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 48,
        sentence1: "She never allows herself to be discouraged by setbacks.",
        givenWord: "lets",
        prefix: "She never ",
        suffix: " by setbacks.",
        correctAnswer: ["lets herself be discouraged"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 49,
        sentence1: "They offered me the job, but I turned it down.",
        givenWord: "refuse",
        prefix: "I had to ",
        suffix: " the job they offered me.",
        correctAnswer: ["refuse the offer of"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    },
    {
        id: 50,
        sentence1: "His disappearance remains a complete mystery.",
        givenWord: "no",
        prefix: "There is ",
        suffix: " his disappearance.",
        correctAnswer: ["no explanation for"],
        minWords: 3,
        maxWords: 8,
        status: 'pending'
    }
];

let currentExerciseIndex = 0;
let score = 0;
let exercisesCompleted = 0;

const questionsContainer = document.getElementById('questionsContainer');
const checkAnswersBtn = document.getElementById('checkAnswersBtn');
const skipExerciseBtn = document.getElementById('skipExerciseBtn'); // Get the skip button
const nextExerciseBtn = document.getElementById('nextExerciseBtn');
const exerciseFeedback = document.getElementById('exerciseFeedback'); // This is for overall feedback, not individual question feedback
const currentScoreSpan = document.getElementById('currentScore');
const exercisesCompletedSpan = document.getElementById('exercisesCompleted');
const totalExercisesSpan = document.getElementById('totalExercises');
const exerciseProgressList = document.getElementById('exerciseProgressList');
const failSound = document.getElementById('failSound');
const successSound = document.getElementById('successSound');
const externalWordLookupInput = document.getElementById('externalWordLookupInput');
const searchExternalDictionaryBtn = document.getElementById('searchExternalDictionaryBtn');
const dictionaryIframe = document.getElementById('dictionaryIframe');
const showExampleAnswerBtn = document.getElementById('showExampleAnswerBtn');

// Set total exercises count, excluding the example (id: 0)
// This will correctly show 50 for Phrase Forge 1
totalExercisesSpan.textContent = transformationExercises.length - 1;

function updateWordCount(inputId, countSpanId) {
    const inputField = document.getElementById(inputId);
    const countSpan = document.getElementById(countSpanId);
    if (inputField && countSpan) {
        const text = inputField.value.trim();
        // Split by one or more whitespace characters
        const words = text === "" ? 0 : text.split(/\s+/).length;
        countSpan.textContent = `${words} words`;
    }
}

// Modified updateExerciseProgress to handle different statuses
function updateExerciseProgress(exerciseId, newStatus) { // newStatus can be 'correct', 'incorrect', 'skipped', 'pending'
    let listItem = document.getElementById(`progress-q${exerciseId}`);
    const exercise = transformationExercises.find(ex => ex.id === exerciseId);

    if (exercise) {
        // Only update if the new status is 'correct', or if the current status is 'pending' or 'incorrect' or 'skipped'.
        // This prevents an incorrect/skipped from overwriting a correct status if the user revisits, but allows
        // 'correct' to overwrite anything. Also allows 'incorrect' to overwrite 'skipped' if they try it later.
        if (newStatus === 'correct' || exercise.status === 'pending' || exercise.status === 'incorrect' || exercise.status === 'skipped') {
             exercise.status = newStatus; // Update the internal status on the exercise object
        }
    }

    // Create list item if it doesn't exist
    if (!listItem) {
        listItem = document.createElement('li');
        listItem.id = `progress-q${exerciseId}`;
        exerciseProgressList.appendChild(listItem);
    }

    // Update text content and class based on the exercise's *current* status
    switch (exercise.status) {
        case 'correct':
            listItem.textContent = `Question ${exerciseId}: ✔`;
            listItem.className = 'correct-progress';
            break;
        case 'incorrect':
            listItem.textContent = `Question ${exerciseId}: ✖`;
            listItem.className = 'incorrect-progress';
            break;
        case 'skipped':
            listItem.textContent = `Question ${exerciseId}: ↷ (Skipped)`; // Using Unicode arrow for skipped
            listItem.className = 'skipped-progress';
            break;
        case 'pending':
        default:
            listItem.textContent = `Question ${exerciseId}: Pending`;
            listItem.className = ''; // No specific class, or 'pending-progress' if you define one
            break;
    }
}

function loadExercise() {
    // Handle the example exercise first (ID 0)
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const exampleWordCount = document.getElementById('exampleWordCount');

    // Reset example
    if (exampleInput) {
        exampleInput.value = "";
        exampleInput.disabled = false; // Enable example input
    }
    if (exampleFeedback) {
        exampleFeedback.style.display = 'none';
        exampleFeedback.classList.remove('correct', 'incorrect');
    }
    updateWordCount('exampleInput', 'exampleWordCount');
    if (showExampleAnswerBtn) {
        showExampleAnswerBtn.style.display = 'inline-block'; // Show "Show Answer" button
    }


    // Determine which exercise to load:
    // If currentExerciseIndex is 0 (first load), set it to 1 to load the first *actual* exercise (ID 1).
    // Otherwise, use the existing currentExerciseIndex.
    if (currentExerciseIndex === 0) {
        currentExerciseIndex = 1;
    }

    const exercise = transformationExercises[currentExerciseIndex];

    if (!exercise) {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none'; // Hide skip button on completion
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
        return;
    }

    questionsContainer.innerHTML = `
        <div class="transformation-question" data-id="${exercise.id}">
            <p>${exercise.id}. ${exercise.sentence1}</p>
            <p class="given-word">Word Given: ${exercise.givenWord}</p>
            <p><span class="input-sentence-part">${exercise.prefix}</span><input type="text" id="q${exercise.id}Input" class="transformation-input" placeholder="Enter your answer" onkeyup="updateWordCount('q${exercise.id}Input', 'q${exercise.id}WordCount')"><span class="input-sentence-part">${exercise.suffix}</span></p>
            <span class="word-count" id="q${exercise.id}WordCount">0 words</span>
            <div class="feedback-line" id="q${exercise.id}Feedback"></div>
        </div>
    `;

    // Initialize word count for the loaded question
    updateWordCount(`q${exercise.id}Input`, `q${exercise.id}WordCount`);

    exerciseFeedback.style.display = 'none'; // Hide general feedback
    checkAnswersBtn.style.display = 'inline-block';
    skipExerciseBtn.style.display = 'inline-block'; // Show skip button for new questions
    nextExerciseBtn.style.display = 'none'; // Hide next until check or skip
}


function checkAnswers() {
    // Check the example first
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');
    const example = transformationExercises[0]; // The example exercise
    const exampleUserAnswer = exampleInput.value.trim().toLowerCase();
    const exampleUserWords = exampleUserAnswer.split(/\s+/).filter(word => word !== '');

    // Ensure feedback element is visible
    exampleFeedback.style.display = 'block';

    let isExampleCorrect = false;
    const exampleWordCount = exampleUserWords.length;
    if (exampleWordCount >= example.minWords && exampleWordCount <= example.maxWords) {
        for (const correctOpt of example.correctAnswer) {
            if (exampleUserAnswer === correctOpt.toLowerCase() &&
                exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
                isExampleCorrect = true;
                break;
            }
        }
    }


    if (isExampleCorrect) {
        exampleFeedback.textContent = `Correct! (${exampleWordCount} words)`;
        exampleFeedback.className = 'feedback-line correct';
        exampleInput.disabled = true; // Disable example input if correct
        showExampleAnswerBtn.style.display = 'none'; // Hide "Show Answer" button
        updateExerciseProgress(example.id, 'correct'); // Update example progress
    } else {
        let exampleFeedbackMessage = `Incorrect. `;
        if (exampleWordCount < example.minWords || exampleWordCount > example.maxWords) {
            exampleFeedbackMessage += `You must use between ${example.minWords} and ${example.maxWords} words. You used ${exampleWordCount}. `;
        } else if (!exampleUserAnswer.includes(example.givenWord.toLowerCase())) {
            exampleFeedbackMessage += `You must use the word "${example.givenWord}". `;
        }
        if (exampleFeedbackMessage === `Incorrect. `) { // If only "Incorrect." is left, suggest show answer
             exampleFeedbackMessage += `Review instructions or use "Show Answer".`;
        }
        exampleFeedback.textContent = exampleFeedbackMessage;
        exampleFeedback.className = 'feedback-line incorrect';
    }


    // Now check the current actual exercise
    const exercise = transformationExercises[currentExerciseIndex];
    if (!exercise) return; // Should not happen if loadExercise handles completion

    const inputField = document.getElementById(`q${exercise.id}Input`);
    const feedbackLine = document.getElementById(`q${exercise.id}Feedback`);

    const userAnswer = inputField.value.trim();
    const normalizedUserAnswer = userAnswer.toLowerCase();
    const givenWord = exercise.givenWord.toLowerCase();

    const userWords = userAnswer.split(/\s+/).filter(word => word !== '');
    const wordCount = userWords.length;

    // Ensure feedback element is visible
    feedbackLine.style.display = 'block';

    let isCurrentExerciseCorrect = false;
    let currentExerciseFeedbackMessage = '';

    if (wordCount >= exercise.minWords && wordCount <= exercise.maxWords) {
        for (const correctOpt of exercise.correctAnswer) {
            if (normalizedUserAnswer === correctOpt.toLowerCase() &&
                normalizedUserAnswer.includes(givenWord)) {
                isCurrentExerciseCorrect = true;
                break;
            }
        }
    }

    if (isCurrentExerciseCorrect) {
        currentExerciseFeedbackMessage = `Correct! (${wordCount} words)`;
        feedbackLine.className = 'feedback-line correct';
        failSound.pause(); // Stop fail sound if playing
        failSound.currentTime = 0; // Reset sound
        successSound.play();
        if (exercise.status !== 'correct') { // Only increment if not already marked correct
            score++;
            exercisesCompleted++;
            updateExerciseProgress(exercise.id, 'correct'); // Update progress as correct
        }
    } else {
        currentExerciseFeedbackMessage = "Incorrect. ";
        if (wordCount < exercise.minWords || wordCount > exercise.maxWords) {
            currentExerciseFeedbackMessage += `You must use between ${exercise.minWords} and ${exercise.maxWords} words. You used ${wordCount}. `;
        } else if (!normalizedUserAnswer.includes(givenWord)) {
            currentExerciseFeedbackMessage += `You must use the word "${exercise.givenWord}". `;
        }
        if (currentExerciseFeedbackMessage === "Incorrect. ") {
            currentExerciseFeedbackMessage += `Please review the instructions and try again.`;
        }
        feedbackLine.className = 'feedback-line incorrect';
        successSound.pause(); // Stop success sound if playing
        successSound.currentTime = 0; // Reset sound
        failSound.play();
        if (exercise.status !== 'correct') { // Don't overwrite 'correct' if already correct
            updateExerciseProgress(exercise.id, 'incorrect'); // Update progress as incorrect
        }
    }
    feedbackLine.textContent = currentExerciseFeedbackMessage;


    currentScoreSpan.textContent = score;
    exercisesCompletedSpan.textContent = exercisesCompleted;

    nextExerciseBtn.style.display = 'inline-block';
    checkAnswersBtn.style.display = isCurrentExerciseCorrect ? 'none' : 'inline-block'; // Hide check if correct
    skipExerciseBtn.style.display = 'inline-block'; // Keep skip visible
}

function showExampleAnswer() {
    const example = transformationExercises[0];
    const exampleInput = document.getElementById('exampleInput');
    const exampleFeedback = document.getElementById('exampleFeedback');

    if (exampleInput && exampleFeedback) {
        // Display the first correct answer from the array
        exampleInput.value = example.correctAnswer[0];
        updateWordCount('exampleInput', 'exampleWordCount');
        exampleFeedback.textContent = `Correct Answer: "${example.correctAnswer[0]}"`;
        exampleFeedback.className = 'feedback-line correct';
        exampleFeedback.style.display = 'block';
        exampleInput.disabled = true; // Disable input after showing answer
        showExampleAnswerBtn.style.display = 'none'; // Hide the button
        updateExerciseProgress(example.id, 'correct'); // Mark example as correct in sidebar
    }
}

// NEW: Function to handle skipping an exercise
function skipExercise() {
    const exercise = transformationExercises[currentExerciseIndex];
    if (exercise && exercise.status !== 'correct') { // Only mark as skipped if not already correct
        updateExerciseProgress(exercise.id, 'skipped');
    }
    nextExercise(); // Move to the next exercise
}


function nextExercise() {
    currentExerciseIndex++;
    if (currentExerciseIndex < transformationExercises.length) {
        loadExercise();
    } else {
        questionsContainer.innerHTML = "<p>All exercises completed! Great job!</p>";
        checkAnswersBtn.style.display = 'none';
        skipExerciseBtn.style.display = 'none'; // Hide skip button on completion
        nextExerciseBtn.style.display = 'none';
        exerciseFeedback.textContent = "You've finished all exercises!";
        exerciseFeedback.className = 'feedback-message correct';
        exerciseFeedback.style.display = 'block';
    }
}

// Event Listeners
checkAnswersBtn.addEventListener('click', checkAnswers);
skipExerciseBtn.addEventListener('click', skipExercise); // Event listener for skip button
nextExerciseBtn.addEventListener('click', nextExercise);
showExampleAnswerBtn.addEventListener('click', showExampleAnswer);

searchExternalDictionaryBtn.addEventListener('click', () => {
    const word = externalWordLookupInput.value.trim();
    if (word) {
        // Example: Merriam-Webster
        dictionaryIframe.src = `https://www.merriam-webster.com/dictionary/${word}`;
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded. Initializing progress list.");
    // Ensure the list is cleared before re-populating to prevent duplicates on some reloads
    exerciseProgressList.innerHTML = '';

    // Initialize the status for all exercises (including the example) and build the progress list
    transformationExercises.forEach(exercise => {
        if (!exercise.status) { // Ensure status property exists, default to 'pending'
            exercise.status = 'pending';
        }
        updateExerciseProgress(exercise.id, exercise.status); // Use the unified function
        console.log(`Initialized Question ${exercise.id} with status: ${exercise.status}.`);
    });

    loadExercise();
    console.log("loadExercise called.");
});