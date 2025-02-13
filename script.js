function nextStep(step) {
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step' + step).classList.add('active');
}
function prevStep(step) {
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step' + step).classList.add('active');
}
function generateStatement() {
    let role = document.getElementById('role').value;
    let experience = document.getElementById('experience').value;
    let motivation = document.getElementById('motivation').value;
    let statement = `I am a ${role} with ${experience} years of experience. I am passionate about ${motivation}.`;
    document.getElementById('statement').innerText = statement;
    nextStep('result');
}
function downloadText() {
    let statement = document.getElementById('statement').innerText;
    let blob = new Blob([statement], { type: 'text/plain' });
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'career_identity.txt';
    link.click();
}