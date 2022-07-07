import { people } from '../fakebook.js';

const activityUrl = 'http://www.boredapi.com/api/activity/';


export function populateFeed() {
    const feed = document.getElementById('feed');

    for (let i = 1; i <= 6; i++) {

        fetch(activityUrl)
            .then((response) => response.json()
                .then((activity) => {
                    console.log(activity)
                    feed.innerHTML += `
                    <div class="card" id="feed" style="width: 14rem;">
                    <img src= ${people[i].picture.medium} </div>
                    <div>Name: ${people[i].name.first}</div>
                    <div>Activity: ${activity.activity}</div>
                    <div>Type: ${activity.type}</div>
                    <div>Participants: ${activity.participants}</div>
                    `
                }))
    }
}


const activityButton = document.getElementById('room');
const room = document.getElementById('divRoom');
activityButton.onclick = () => roomActivity();

export function roomActivity() {
    fetch(activityUrl)
        .then((response) => response.json()
            .then((activity) => {
                console.log(activity)
                room.innerHTML += `
                <ul class="card" id="feed" style="width: 14rem;">
                <h5 class="card-title"></h5>
                        ACTIVITY ROOM!
                <li>Activity: ${activity.activity}</li>
                <li>Type: ${activity.type}</li>
                <li>Participants: ${activity.participants}</li>
                </ul>
                `
            }))

}

