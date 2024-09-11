var toggleAssignmentButton = document.getElementById('Assignment');
var sectionAssignment = document.getElementById('section-Assignment');
toggleAssignmentButton.addEventListener('click', function () {
    if (sectionAssignment.style.display === 'none') {
        sectionAssignment.style.display = 'block';
    }
    else {
        sectionAssignment.style.display = 'none';
    }
});
