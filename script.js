document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const questionInput = document.getElementById('question');
    const question = questionInput.value;
    if (question) {
        const questionDiv = document.createElement('div');
        questionDiv.textContent = question;
        document.getElementById('questions-list').appendChild(questionDiv);
        questionInput.value = '';  // Clear the input field
    }
});
