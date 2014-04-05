// ==UserScript==
// @name        YOB Themes
// @namespace   MW
// @description Play the YOB Themes while you post
// @include     http://forums.somethingawful.com/*
// @version     5
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

var BASE_URL = "http://muskratwaltz.com/audio/themes/";

var themes = {
    "205623": {
        "file": "resident_evil.mp3",
        "url": "https://www.youtube.com/watch?v=0kcF7E69C6Q",
        "title": "Mansion Basement"
    },
    "46995": {
        "file": "kill_la_kill.mp3",
        "url": "https://www.youtube.com/watch?v=-SSz_F5wOiM",
        "title": "Don't lose your way"
    },
    "82110": {
        "file": "robot_rock.mp3",
        "url": "https://soundcloud.com/d-j-detweiler/daft-punk-robot-rock-d-j",
        "title": "Robot Rock"
    },
    "143557": {
        "file": "you_get_high.mp3",
        "url": "https://www.youtube.com/watch?v=4IfREYplcjI",
        "title": "You Get High"
    },
    "178339": {
        "file": "bandit_radio.mp3",
        "url": "https://www.youtube.com/watch?v=-9wgI6rCbY4",
        "title": "Bandit Radio"
    },
    "88310": {
        "file": "burning_bridges.mp3",
        "url": "https://www.youtube.com/watch?v=kgeIINs1TrQ",
        "title": "Burning Bridges"
    },
    "77545": {
        "file": "smoke_weed.mp3",
        "url": "https://www.youtube.com/watch?v=2NszEN3mNic",
        "title": "Smoke Weed Every Day"
    },
    "19302": {
        "file": "tupac_at_mcdonalds.mp3",
        "url": "https://www.youtube.com/watch?v=RgU02Rom244",
        "title": "I Saw Tupac at McDonalds"
    },
    "135560": {
        "file": "foot_foot.mp3",
        "url": "https://www.youtube.com/watch?v=XR9d4ESlpHY",
        "title": "My Pal Foot Foot"
    },
    "149714": {
        "file": "althea.mp3",
        "url": "https://www.youtube.com/watch?v=VnTgoI6JTZQ",
        "title": "Althea"
    },
    "187305": {
        "file": "soothing.mp3",
        "url": "https://www.youtube.com/watch?v=cr6eFl7hCiA",
        "title": "The soothing sounds of 14 pitched down crying babies"
    },
    "111346": {
        "file": "heart_survive.mp3",
        "url": "https://www.youtube.com/watch?v=t4Vnb57jNv8",
        "title": "Will My Heart Survive"
    },
    "49474": {
        "file": "voodoo.mp3",
        "url": "https://www.youtube.com/watch?v=PQhtR-yoObs",
        "title": "Voodoo, Roots 'n Grog"
    },
    "140665": {
        "file": "hakke.mp3",
        "url": "https://www.youtube.com/watch?v=tz1aZq3axgg",
        "title": "Hakke en Zage"
    },
    "205323": {
        "file": "black_sabbath.mp3",
        "url": "https://www.youtube.com/watch?v=YpBBUMjo8Ng&feature=youtu.be&t=54m23s",
        "title": "I dunno something by Black Sabbath"
    },
    "118951": {
        "file": "nightcall.mp3",
        "url": "https://www.youtube.com/watch?v=MV_3Dpw-BRY&feature=youtu.be",
        "title": "Nightcall"
    },
    "207515": {
        "file": "closer_to_the_heart.mp3",
        "url": "https://www.youtube.com/watch?v=ouupqXlFbyQ",
        "title": "Closer to the heart"
    },
    "75360": {
        "file": "polite_dance_song.mp3",
        "url": "https://www.youtube.com/watch?v=HhDVSiidt_4",
        "title": "Polite Dance Song"
    },
    "208035": {
        "file": "no_love.mp3",
        "url": "https://www.youtube.com/watch?v=2MHhLDCJ57E",
        "title": "No Love"
    },
    "57006": {
        "file": "brotherman_bill.mp3",
        "url": "https://www.youtube.com/watch?v=qkUVToIfrKg",
        "title": "Brotherman Bill"
    },
    "155641": {
         "file": "titantron.mp3",
        "url": "https://www.youtube.com/watch?v=0hlO_1JGTww",
        "title": "Titantron"
     },
    "100569": {
        "file": "star_destroyer.mp3",
        "url": "https://www.youtube.com/watch?v=1PPXsKrV2Ws",
        "title": "Star Destroyer"
    },
    "193897": {
        "file": "no_tengo_dinero.mp3",
        "url": "https://www.youtube.com/watch?v=N4nNZbauQl0",
        "title": "No tengo dinero"
    },
    "175496": {
        "file": "crazy_chili_dogs.mp3",
        "url": "https://www.youtube.com/watch?v=5k1Znk7P75c",
        "title": "Crazy Chili Dog"
    },
    "203662": {
        "file": "magnum_pi.mp3",
        "url": "https://www.youtube.com/watch?v=3CquMO3vJvo",
        "title": "Magnum PI"
    },
    "204584": {
        "file": "wu_tang.mp3",
        "url": "https://www.youtube.com/watch?v=ucdEIMKTD7U&feature=youtu.be",
        "title": "Forget me not"
    },
    "137848": {
        "file": "monkey_news.mp3",
        "url": "https://www.youtube.com/watch?v=zQwFIu6pdkA",
        "title": "Monkey News"
    },
    "167001": {
        "file": "maradun.mp3",
        "url": "https://www.youtube.com/watch?v=UB7bxRNswo0",
        "title": "Ana Maradun"
    },
    "208521": {
        "file": "inuka.mp3",
        "url": "https://dl.dropboxusercontent.com/u/90334294/Inuka3l.mp3",
        "title": "Inuka"
    },
    "202925": {
        "file": "iwatodai.mp3",
        "url": "https://www.youtube.com/watch?v=lXNQrwX9QOU",
        "title": "Iwatodai Dorm"
    },
    "167191": {
        "file": "bob.mp3",
        "url": "https://www.youtube.com/watch?v=9A4_qL_CU-k",
        "title": "Bob The Builder Theme Song"
    },
    "208558": {
        "file": "aruarian.mp3",
        "url": "https://www.youtube.com/watch?v=g9hwjQBQFIo",
        "title": "Aruarian dance"
    },
    "173896": {
        "file": "kush_cloud.mp3",
        "url": "https://www.youtube.com/watch?v=V9XPJvWc1-o",
        "title": "Kush Cloud"
    },
    "72606": {
        "file": "move_on_up.mp3",
        "url": "https://www.youtube.com/watch?v=6Z66wVo7uNw",
        "title": "Move On Up"
    },
    "136188": {
        "file": "pizza_bell.mp3",
        "url": "https://www.youtube.com/watch?v=SIt2CdbBo_w",
        "title": "Combination Pizza Hut and Taco Bell"
    },
    "175825": {
        "file": "turks.mp3",
        "url": "https://www.youtube.com/watch?v=jSAjNWypykQ",
        "title": "Turks Theme"
    },
    "180145": {
        "file": "parents_suck.mp3",
        "url": "https://www.youtube.com/watch?v=eDxa2tmbhSg",
        "title": "Parents Suck"
    },
    "137492": {
        "file": "friend_like_me.mp3",
        "url": "https://www.youtube.com/watch?v=CXiitlwnXPY",
        "title": "You Ain't Never Had A Friend Like Me"
    },
    "161815": {
        "file": "feels.mp3",
        "url": "https://www.youtube.com/watch?v=8Pl1YU1rXuE",
        "title": "Feels So Good"
    },
    "163058": {
        "file": "fala.mp3",
        "url": "https://www.youtube.com/watch?v=vwdnNyySDLI&feature=youtu.b",
        "title": "Falalalan"
    },
    "108924": {
        "file": "oppressed.mp3",
        "url": "https://www.youtube.com/watch?v=vgvXCg1e_T8",
        "title": "Oppressed People"
    },
    "182192": {
        "file": "satan_worshipping.mp3",
        "url": "https://www.youtube.com/watch?v=MsDz5qphC3c",
        "title": "Satan Worshipping Doom"
    },
    "35012": {
        "file": "wait_till_you_see.mp3",
        "url": "https://www.youtube.com/watch?v=JaXp7VBkThI",
        "title": "Wait Till You See"
    },
    "196833": {
        "file": "elle_fanning.mp3",
        "url": "https://www.youtube.com/watch?v=a2y3GkEJDrQ",
        "title": "Elle Fanning"
    },
    "35012": {
        "file": "fight.mp3",
        "url": "https://www.youtube.com/watch?v=QOv3NG62jfY",
        "title": "The Fight"
    },
    "162644": {
        "file": "needleprick.mp3",
        "url": "https://kevindrumm.bandcamp.com/track/needleprick",
        "title": "Needleprick",
        "whitelist": ["162644"]
    },
    "115374": {
        "file": "miku.mp3",
        "url": "https://www.youtube.com/watch?v=tAVg013wVo0",
        "title": "Ceremony"
    },
    "100085": {
        "file": "hat_dance.mp3",
        "url": "https://www.youtube.com/watch?v=q-Rqdgna3Yw",
        "title": "The Mexican Hat Dance"
    },
    "158627": {
        "file": "your_party.mp3",
        "url": "https://www.youtube.com/watch?v=UtBIgZ1IVFQ",
        "title": "Your Party"
    },
    "174729": {
        "file": "pizzatime.mp3",
        "url": "https://www.youtube.com/watch?v=ufQ_EUFSnSs",
        "title": "Pizzatime"
    },
    "204983": {
        "file": "redemption.mp3",
        "url": "https://www.youtube.com/watch?v=QrY9eHkXTa4",
        "title": "Redemption Song"
    },
    "150375": {
        "file": "hunger.mp3",
        "url": "https://www.youtube.com/watch?v=oPrek1oAjG0",
        "title": "Hunger"
    },
    "196032": {
        "file": "king_of_the_streets.mp3",
        "url": "https://www.youtube.com/watch?v=eyZQUEMZlCU",
        "title": "King of The Streets"
    },
    "155056": {
        "file": "linus.mp3",
        "url": "https://www.youtube.com/watch?v=cyJSfYxSQaw",
        "title": "Linus and Lucy"
    },
    "200811": {
        "file": "smoke_crack.mp3",
        "url": "https://www.youtube.com/watch?v=dl0uFtClAmw",
        "title": "Y'all cowards don't even smoke crack"
    },
    "126752": {
        "file": "4_club_use_only.mp3",
        "url": "https://www.youtube.com/watch?v=4a1Qw4jQqrM",
        "title": "4 club use only"
    },
    "209058": {
        "file": "addams_groove.mp3",
        "url": "https://www.youtube.com/watch?v=jqQwzgixHAM#t=14",
        "title": "Addams Groove"
    }
};

var audio = {};

var userIdPattern = /userid=(\d+)/;
var currentUserId = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent("bbuserid").replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1");

var posts = document.getElementsByClassName("postdate");
for (var i = 0; i < posts.length; i++) {
    var user_link = posts[i].getElementsByClassName("user_jump")[0];
    var user_id = userIdPattern.exec(user_link.href)[1];
    if (themes[user_id] === undefined) {
        continue;
    }

    if (!audio[user_id]) {
        audio[user_id] = document.createElement("audio");
        audio[user_id].setAttribute("src", BASE_URL + themes[user_id].file);
        audio[user_id].setAttribute("autoplay", true);
        audio[user_id].setAttribute("loop", true);
        audio[user_id].volume = 0;
    }
    posts[i].setAttribute("data-yob-theme", user_id);
}

var muted = GM_getValue("muted", false);
var playerActivated = false;

var mute = document.createElement("img");
mute.src = "http://muskratwaltz.com/audio/themes/speaker.png";
mute.style.position = "absolute";
mute.style.right = "3px";
var unmute = document.createElement("img");
unmute.src = "http://muskratwaltz.com/audio/themes/speaker_mute.png";
unmute.style.position = "absolute";
unmute.style.right = "3px";
unmute.style.display = "none";

var player = document.createElement("div");
player.style.position = "fixed";
player.style.width = "20em";
player.style.height = "4em";
player.style.right = "0.5em";
player.style.top = "19px";
player.style.backgroundColor = "#CCFFFF";
player.style.borderWidth = "3px";
player.style.borderStyle = "solid";
player.style.borderColor = "#CCCCFF";
player.style.borderRadius = "5px";
player.style.fontFamily = "Comic Sans MS";
player.style.textOverflow = "ellipsis";
player.style.boxShadow = "0px 0px 4px 4px rgba(0, 0, 0, 0.3)";
player.style.visibility = "hidden";

player.innerHTML = "<i>You are listening to...</i><br/>";

var themeLink = document.createElement("a");
themeLink.style.whiteSpace = "nowrap";
themeLink.target = "_blank";

player.appendChild(themeLink);
player.appendChild(mute);
player.appendChild(unmute);

var icon = document.createElement("img");
icon.src = "http://muskratwaltz.com/audio/themes/icon.png";
icon.style.position = "fixed";
icon.style.right = "85px";
icon.style.top = "0.5em";

document.body.appendChild(player);
document.body.appendChild(icon);

var onmousemove = function (e) {
    if (!playerActivated) {
        return;
    }

    var playerRect = player.getBoundingClientRect();
    playerRect.left += window.scrollX;
    playerRect.top += window.scrollY;

    var iconRect = icon.getBoundingClientRect();
    iconRect.left += window.scrollX;
    iconRect.top += window.scrollY;
    
    if ((e.clientX > playerRect.left && e.clientX < playerRect.left + playerRect.width
         && e.clientY > playerRect.top && e.clientY < playerRect.top + playerRect.height)
        || (e.clientX > iconRect.left && e.clientX < iconRect.left + iconRect.width
            && e.clientY > iconRect.top && e.clientY < iconRect.top + iconRect.height)) {
        player.style.visibility = "visible";
    } else {
        player.style.visibility = "hidden";
        playerActivated = false;
    }
};

document.addEventListener("mousemove", onmousemove);

var onclickMute = function (e) {
    muted = true;
    GM_setValue("muted", muted);
    mute.style.display = "none";
    unmute.style.display = "inline";

    for (var key in audio) {
        if (audio.hasOwnProperty(key)) {
            audio[key].muted = true;
        }
    }
    if (e) {
        e.stopPropagation();
    }
};

mute.addEventListener("click", onclickMute);
if (muted) {
    onclickMute();
}

var onclickUnmute = function (e) {
    muted = false;
    GM_setValue("muted", muted);
    mute.style.display = "inline";
    unmute.style.display = "none";
    
    for (var key in audio) {
        if (audio.hasOwnProperty(key)) {
            audio[key].muted = false;
        }
    }
    if (e) {
        e.stopPropagation();
    }
};

unmute.addEventListener("click", onclickUnmute);

var onmouseenterIcon = function (e) {
    playerActivated = true;
};

icon.addEventListener("mouseenter", onmouseenterIcon);

var fadeDist = 100;
var minTheme = null;
var onscroll = function () {
    var minPost = -1;
    var minDist = Number.MAX_VALUE;
    var minUserId = null;
    for (var i = 0; i < posts.length; i++) {
        var rect = posts[i].parentNode.parentNode.getBoundingClientRect();
        var y = rect.top + rect.height / 2;
        var dist = Math.abs(y - window.innerHeight / 2);
        
        if (dist < rect.height / 2) {
            minPost = i;
            minDist = dist;
            minUserId = posts[i].getAttribute("data-yob-theme");
            if (minTheme) {
                minTheme.volume = 0;
            }
            
            if (!minUserId) {
               minTheme = null;
               continue;
            }

            var volume = 0;
            if (themes[minUserId].whitelist
                && themes[minUserId].whitelist.indexOf(currentUserId) < 0) {
                volume = 0;
            } else if (dist < Math.max(rect.height / 2 - fadeDist, 0)) {
                volume = 1;
            } else {
                var pow = Math.pow((dist - Math.max(rect.height / 2 - fadeDist, 0)) / fadeDist * 5, 2);
                volume = Math.max(1 - pow / (1 + pow), 0);
            }
            volume = Math.floor(volume * 100) / 100;
            minTheme = audio[minUserId];
            if (minTheme) {
                minTheme.volume = volume;
            }
            
            break;
        }
    }
    if (minUserId) {
        themeLink.textContent = themes[minUserId].title;
        themeLink.href = themes[minUserId].url;
    } else {
        themeLink.textContent = "Nothing at all";
        themeLink.href = "http://www.youtube.com/watch?v=i6vPQL_aYfI";
    }
};

document.addEventListener("scroll", onscroll);
onscroll();








