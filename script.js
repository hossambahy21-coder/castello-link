document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('clientName').value.trim();
    
    if (name) {
        document.getElementById('showName').textContent = name;
        document.getElementById('greetingCard').classList.add('hidden');
        document.getElementById('resultCard').classList.remove('hidden');
    }
});

function resetForm() {
    document.getElementById('clientName').value = '';
    document.getElementById('greetingCard').classList.remove('hidden');
    document.getElementById('resultCard').classList.add('hidden');
}
