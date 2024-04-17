function calculateMarks() {
    // Retrieve desired CGPA and difficulty levels of subjects
    var desiredCGPA = parseFloat(document.getElementById("marks").value);
    var mathDifficulty = parseFloat(document.getElementById("Mathematics").value);
    var mechanicsPPSDifficulty = parseFloat(document.getElementById("Mechanics_PPS").value);
    var physicsChemistryDifficulty = parseFloat(document.getElementById("Physics_Chemistry").value);
    var subject4Difficulty = parseFloat(document.getElementById("Subject4").value);
    var subject5Difficulty = parseFloat(document.getElementById("Subject5").value);

    // Calculate insem and endsem marks for each subject using the provided formulas
    var mathMarksI = (1 - mathDifficulty / 10) * (30) * (desiredCGPA) / 10 + 22.5 * (mathDifficulty / 10);
    var mechanicsPPSMarksI = (1 - mechanicsPPSDifficulty / 10) * (30) * (desiredCGPA) / 10 + 14 * (mechanicsPPSDifficulty / 10);
    var physicsChemistryMarksI = (1 - physicsChemistryDifficulty / 10) * (30) * (desiredCGPA) / 10 + 20.5 * (physicsChemistryDifficulty / 10);
    var subject4MarksI = (1 - subject4Difficulty / 10) * (30) * (desiredCGPA) / 10 + 22.5 * (subject4Difficulty / 10);
    var subject5MarksI = (1 - subject5Difficulty / 10) * (30) * (desiredCGPA) / 10 + 24.5 * (subject5Difficulty / 10);

    var mathMarksE = (1 - mathDifficulty / 10) * (70) * (desiredCGPA) / 10 + 65.5 * (mathDifficulty / 10);
    var mechanicsPPSMarksE = (1 - mechanicsPPSDifficulty / 10) * (70) * (desiredCGPA) / 10 + 49.5 * (mechanicsPPSDifficulty / 10);
    var physicsChemistryMarksE = (1 - physicsChemistryDifficulty / 10) * (70) * (desiredCGPA) / 10 + 44 * (physicsChemistryDifficulty / 10);
    var subject4MarksE = (1 - subject4Difficulty / 10) * (70) * (desiredCGPA) / 10 + 40 * (subject4Difficulty / 10);
    var subject5MarksE = (1 - subject5Difficulty / 10) * (70) * (desiredCGPA) / 10 + 55.5 * (subject5Difficulty / 10);

    // Create ticket HTML
    var ticketHTML = "<div class='ticket'>";
    ticketHTML += "<h2>Subject Wise Marks</h2>";
    ticketHTML += "<div class='subject'><b>Mathematics:</b> Insem: " + Math.round(mathMarksI) + ", Endsem: " + Math.round(mathMarksE) + "</div>";
    ticketHTML += "<div class='subject'><b>Mechanics / PPS:</b> Insem: " + Math.round(mechanicsPPSMarksI) + ", Endsem: " + Math.round(mechanicsPPSMarksE) + "</div>";
    ticketHTML += "<div class='subject'><b>Physics / Chemistry:</b> Insem: " + Math.round(physicsChemistryMarksI) + ", Endsem: " + Math.round(physicsChemistryMarksE) + "</div>";
    ticketHTML += "<div class='subject'><b>BXE / BEE:</b> Insem: " + Math.round(subject4MarksI) + ", Endsem: " + Math.round(subject4MarksE) + "</div>";
    ticketHTML += "<div class='subject'><b>SME / Graphics:</b> Insem: " + Math.round(subject5MarksI) + ", Endsem: " + Math.round(subject5MarksE) + "</div>";
    ticketHTML += "</div>";

    // Display the ticket
    var ticketContainer = document.getElementById("ticket");
    ticketContainer.innerHTML = ticketHTML;
    ticketContainer.style.display = "block";
}
