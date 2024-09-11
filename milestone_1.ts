const toggleAssignmentButton = document.getElementById('Assignment') as HTMLButtonElement;
const sectionAssignment = document.getElementById('section-Assignment') as HTMLElement;

toggleAssignmentButton.addEventListener('click', () => {
    if (sectionAssignment.style.display === 'none') {
        sectionAssignment.style.display = 'block';
    } else {
        sectionAssignment.style.display = 'none';
    }
});
