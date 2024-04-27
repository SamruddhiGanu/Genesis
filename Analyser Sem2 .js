function calculateMarks() {
    var cgpa = parseFloat(document.getElementById('cgpa').value);
    var subject1MarksI = parseFloat(document.getElementById('subject1').value);
    var subject2MarksI = parseFloat(document.getElementById('subject2').value);
    var subject3MarksI = parseFloat(document.getElementById('subject3').value);
    var subject4MarksI = parseFloat(document.getElementById('subject4').value);

    // Assuming maximum marks for each subject in in-semester exams is 30
    var totalMarks = 30 * 4; // Total marks for 4 subjects

    // Calculating marks obtained in in-semester exams
    var inSemMarks = subject1MarksI + subject2MarksI + subject3MarksI + subject4MarksI;

    // Calculating predicted marks for end semester exams
    var endTotal = (cgpa - 1.2) * 50 - inSemMarks;

    // Predicting end semester marks for each subject
    var subject1MarksE = Math.round( 0.7 * (endTotal / 5) + 0.4 * ((30 - subject1MarksI) / 30) * 70);
    var subject2MarksE = Math.round( 0.7 * (endTotal / 5) + 0.4 * ((30 - subject2MarksI) / 30) * 70);
    var subject3MarksE = Math.round( 0.7 * (endTotal / 5) + 0.4 * ((30 - subject3MarksI) / 30) * 70);
    var subject4MarksE = Math.round( 0.7 * (endTotal / 5) + 0.4 * ((30 - subject4MarksI) / 30) * 70);
    var subject5MarksE = Math.round( ((endTotal-20) / 5)*50/70 -2);

    // Displaying the results
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <div class="ticket">
            <h2>Predicted End Semester Marks</h2>
            <p>EM 1: ${subject1MarksE.toFixed(2)}</p>
            <p>Chem / Phy: ${subject2MarksE.toFixed(2)}</p>
            <p>Bxe / Bee: ${subject3MarksE.toFixed(2)}</p>
            <p>PPS/ Mech: ${subject4MarksE.toFixed(2)}</p>
            <p>Graphics: ${subject5MarksE.toFixed(2)}</p>
            <p>Consideration : Term work marks should be 20+ </p>
        </div>
    `;
}
