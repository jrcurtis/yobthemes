// ==UserScript==
// @name        YOB Themes
// @namespace   MW
// @description Play the YOB Themes while you post
// @include     http://forums.somethingawful.com/*
// @version     3
// @grant       none
// ==/UserScript==

var BASE_URL = "http://muskratwaltz.com/audio/themes/";

var themes = {
    "205623": "resident_evil.mp3",
     "46995": "kill_la_kill.mp3",
     "82110": "robot_rock.mp3",
     "143557": "you_get_high.mp3",
     "178339": "bandit_radio.mp3",
     "88310": "burning_bridges.mp3",
     "77545": "smoke_weed.mp3",
     "19302": "tupac_at_mcdonalds.mp3",
     "135560": "foot_foot.mp3",
     "149714": "althea.mp3",
     "187305": "soothing.mp3",
     "111346": "heart_survive.mp3",
     "49474": "voodoo.mp3",
     "140665": "hakke.mp3",
     "205323": "black_sabbath.mp3",
     "118951": "nightcall.mp3",
     "207515": "closer_to_the_heart.mp3",
     "75360": "polite_dance_song.mp3",
     "208035": "no_love.mp3",
     "57006": "brotherman_bill.mp3",
     "155641": "titantron.mp3",
     "100569": "star_destroyer.mp3",
     "193897": "no_tengo_dinero.mp3",
     "175496": "crazy_chili_dogs.mp3",
     "203662": "magnum_pi.mp3",
     "204584": "wu_tang.mp3",
     "137848": "monkey_news.mp3",
     "167001": "maradun.mp3",
     "208521": "inuka.mp3",
     "202925": "iwatodai.mp3",
     "167191": "bob.mp3",
     "208558": "aruarian.mp3",
     "173896": "kush_cloud.mp3",
     "72606": "move_on_up.mp3",
     "136188": "pizza_bell.mp3",
     "175825": "turks.mp3",
     "180145": "parents_suck.mp3",
     "137492": "friend_like_me.mp3",
     "161815": "feels.mp3",
     "163058": "fala.mp3",
     "108924": "oppressed.mp3"
};

var audio = {};

var user_id_pattern = /userid=(\d+)/;

var posts = document.getElementsByClassName("postdate");
for (var i = 0; i < posts.length; i++) {
    var user_link = posts[i].getElementsByClassName("user_jump")[0];
    var user_id = user_id_pattern.exec(user_link.href)[1];
    if (themes[user_id] === undefined) {
        continue;
    }

    if (!audio[user_id]) {
        audio[user_id] = document.createElement("audio");
        audio[user_id].setAttribute("src", BASE_URL + themes[user_id]);
        audio[user_id].setAttribute("autoplay", true);
        audio[user_id].setAttribute("loop", true);
        audio[user_id].volume = 0;
    }
    posts[i].setAttribute("data-yob-theme", user_id);
}

var minTheme = null;

var onscroll = function () {
    var minPost = -1;
    var minDist = Number.MAX_VALUE;
    for (var i = 0; i < posts.length; i++) {
        var rect = posts[i].parentNode.parentNode.getBoundingClientRect();
        var y = rect.top + rect.height / 2;
        var dist = Math.abs(y - window.innerHeight / 2);
        dist /= window.innerHeight / 10;
        
        if (dist < minDist) {
            minPost = i;
            minDist = dist;
            if (minTheme) {
                minTheme.volume = 0;
            }
            
            if (!posts[i].getAttribute("data-yob-theme")) {
               minTheme = null;
               continue;
            }
            
            var scaled = Math.pow(dist, 3);
            var volume = 1 - scaled / (1 + scaled);
            volume = Math.floor(volume * 100) / 100;
            minTheme = audio[posts[i].getAttribute("data-yob-theme")];
            if (minTheme) {
                minTheme.volume = volume;
            }
        }
    }
};

document.addEventListener("scroll", onscroll);
onscroll();








