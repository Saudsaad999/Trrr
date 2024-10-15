document.addEventListener('DOMContentLoaded', function () {
    handleLoginForm();
    initializeClock();
    displayDates();
});

// Handle login form submission
function handleLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const role = document.getElementById('role').value;
            const roleRedirects = {
                'student': 'main_student.html',
                'department_supervisor': 'main_department.html',
                'company_supervisor': 'main_company.html'
            };
            if (roleRedirects[role]) {
                window.location.href = roleRedirects[role];
            }
        });
    }
}

// Initialize clock
function initializeClock() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock').text