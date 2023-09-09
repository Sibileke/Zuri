document.addEventListener("DOMContentLoaded", function (){
const slackUserName = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function updateDateTime(){
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDate()];
    const formattedTime = now.toLocaleString('en-US', {timeZone:'UTC'});

    slackUserName.textContent = "Ibileke Samuel";
    currentDayOfTheWeek.textContent = dayOfWeek
    currentUTCTime.textContent = formattedTime

}
updateDateTime();

});