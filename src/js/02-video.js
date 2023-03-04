import Player from "@vimeo/player";

import { save, load } from "./storage";
import throttle from 'lodash.throttle';

// initialization of the player
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate({ seconds }) {
  save(STORAGE_KEY, seconds);
}
const durationTime = load(STORAGE_KEY);
player.setCurrentTime(durationTime || 0);


// timeupdate {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }


