let timer;
let remainingTime = 30 * 60; // 30 minutes in seconds

document.getElementById('startPrank').addEventListener('click', startPrank);
document.getElementById('checkBan').addEventListener('click', checkBan);

function startPrank() {
    document.getElementById('initialDisplay').classList.add('hidden');
    document.getElementById('prankForm').classList.remove('hidden');
}

function checkBan() {
    const phoneNumber = document.getElementById('inputNumber').value.trim();

    if (!phoneNumber) {
        alert('Please enter a valid phone number!');
        return;
    }

    // Show fake loading screen for 30 minutes
    document.getElementById('loadingScreen').classList.remove('hidden');
    startFakeLoading();

    // Fake 30-minute loading
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hidden');
        document.getElementById('doneMessage').classList.remove('hidden');
    }, 3000); // Use 3000ms for instant demo; replace with 1800000ms for 30 minutes

    // Simulate the ban (this is just a fake simulation)
    console.log('Simulating ban for number: ' + phoneNumber);
}

function startFakeLoading() {
    let remainingTime = 30 * 60; // Reset the timer for 30 minutes
    timer = setInterval(function() {
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
