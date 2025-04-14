// Function to filter skills based on category
function filterSkills(category) {
    // Update active button
    const buttons = document.querySelectorAll('.skill-filter button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.category === category) {
            button.classList.add('active');
        }
    });

    // Filter skills with animation
    const skills = document.querySelectorAll('#skill-list li');
    skills.forEach(skill => {
        skill.classList.remove('fade-in');
        
        if (category === 'all' || skill.getAttribute('data-category') === category) {
            skill.style.display = 'flex';
            // Trigger reflow for animation
            void skill.offsetWidth;
            skill.classList.add('fade-in');
        } else {
            skill.style.display = 'none';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set up click event listeners for filter buttons
    const filterButtons = document.querySelectorAll('.skill-filter button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterSkills(this.dataset.category);
        });
    });

    // Initialize with "all" filter
    filterSkills('all');
});