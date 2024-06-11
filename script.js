document.addEventListener("DOMContentLoaded", function() {
    const entries = document.querySelectorAll('.entry');
    
    function showEntries() {
        entries.forEach((entry, index) => {
            setTimeout(() => {
                entry.classList.add('visible');
            }, index * 500);
        });
    }
    
    showEntries();
});
function goToIndex() {
    window.location.href = 'index.html';
}