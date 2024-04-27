
function calculateMarks() {
    var cgpa = parseFloat(document.getElementById('cgpa').value);
    var subject1MarksI = parseFloat(document.getElementById('subject1').value);
    var subject2MarksI = parseFloat(document.getElementById('subject2').value);
    var subject3MarksI = parseFloat(document.getElementById('subject3').value);
    var subject4MarksI = parseFloat(document.getElementById('subject4').value);
    var subject5MarksI = parseFloat(document.getElementById('subject5').value);

    // Assuming maximum marks for each subject in in-semester exams is 100
    var totalMarks = 500; // You can change this if necessary

    // Assuming a linear relationship between CGPA and marks in in-semester exams

    // Calculating marks obtained in in-semester exams
    var inSemMarks = subject1MarksI + subject2MarksI+ subject3MarksI+ subject4MarksI + subject5MarksI;
    // Calculating predicted marks for end semester exams
    var endSemMarks = totalMarks - inSemMarks;
    var endTotal = (cgpa-1.2)*50 - inSemMarks;

    // var subject1MarksE = Math.round(2+ 1 * ((cgpa-1.2 )/ 10) * 70 + 0.3* ((100-subject1MarksI )/ 100) * 70);
    // var subject2MarksE = Math.round(2+ 1 * ((cgpa-1.2 )/ 10) * 70 + 0.3* ((100-subject2MarksI )/ 100) * 70);     
    // var subject3MarksE = Math.round(2+ 1 * ((cgpa-1.2 )/ 10) * 70 + 0.3* ((100-subject3MarksI )/ 100) * 70);     
    // var subject4MarksE = Math.round(2+ 1 * ((cgpa-1.2 )/ 10) * 70 + 0.3* ((100-subject4MarksI )/ 100) * 70);     
    // var subject5MarksE = Math.round(2+ 1 * ((cgpa-1.2 )/ 10) * 70 + 0.3* ((100-subject5MarksI )/ 100) * 70);     
    
    var subject1MarksE = Math.round(4+ 0.7 * (endTotal/5) + 0.4* ((30-subject1MarksI )/ 30) * 70);
    var subject2MarksE = Math.round(4+ 0.7 * (endTotal/5) + 0.4* ((30-subject2MarksI )/ 30) * 70);
    var subject3MarksE = Math.round(4+ 0.7 * (endTotal/5) + 0.4* ((30-subject3MarksI )/ 30) * 70);
    var subject4MarksE = Math.round(4+ 0.7 * (endTotal/5) + 0.4* ((30-subject4MarksI )/ 30) * 70);
    var subject5MarksE = Math.round(4+ 0.7 * (endTotal/5) + 0.4* ((30-subject5MarksI )/ 30) * 70);
 

    
    var ticketHTML = `
        <div class="ticket">
            <h2>Predicted End Semester Marks</h2>
            <p>EM 1: ${subject1MarksE.toFixed(2)}</p>
            <p>Chem/Phy: ${subject2MarksE.toFixed(2)}</p>
            <p>Bxe/Bee: ${subject3MarksE.toFixed(2)}</p>
            <p>PPS?Mechanics: ${subject4MarksE.toFixed(2)}</p>
            <p>SME: ${subject5MarksE.toFixed(2)}</p>
            <p>Consideration : Term work marks should be 20+ </p>
        </div>
    `;

    // Append the ticket HTML to the result container
    document.body.insertAdjacentHTML('beforeend', ticketHTML);
}
    
    
    

    // // Displaying the result
    // document.getElementById('subject1EndSemMarks').innerText = "Predicted marks for Subject 1 end semester exams: " + subject1MarksE.toFixed(2);
    // document.getElementById('subject2EndSemMarks').innerText = "Predicted marks for Subject 2 end semester exams: " + subject2MarksE.toFixed(2);
    // document.getElementById('subject3EndSemMarks').innerText = "Predicted marks for Subject 3 end semester exams: " + subject3MarksE.toFixed(2);
    // document.getElementById('subject4EndSemMarks').innerText = "Predicted marks for Subject 4 end semester exams: " + subject4MarksE.toFixed(2);
    // document.getElementById('subject5EndSemMarks').innerText = "Predicted marks for Subject 5 end semester exams: " + subject5MarksE.toFixed(2);}

