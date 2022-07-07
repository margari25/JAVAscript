import { populateFeed } from './feed.js';
import { roomActivity } from './feed.js';

const baseUrl = 'https://randomuser.me/api/';
const people100 = '?results=100';
const mainInfo = document.getElementById('mainInfo')
const yourPhoto = document.getElementById('yourPhoto');

export let people;

function getPeople() {
    fetch(baseUrl + people100)
        .then((response) => response.json()
            .then((data) => {
                people = data.results;
                console.log(people);

                mainInfo.innerHTML = `
                
                <div>Name: ${people[0].name.first}</div>
                <div>LastName: ${people[0].name.last}</div>
                <div>Age: ${people[0].dob.age}</div>
                <div>Location: ${people[0].location.city} ${people[0].location.country}</div>
                `
                yourPhoto.src = people[0].picture.medium;

                populateFeed();
            }))
}
getPeople();
