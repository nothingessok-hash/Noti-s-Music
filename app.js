// Array holding local song data paths so files never expire
const tracks = [
    { title: "Born To Sin", artist: "Desire4u", url: "music/borntosin.mp3", img: "images/mi9.jpg" },
    { title: "I call your name", artist: "Desire4u", url: "music/icallyourname.mp3", img: "images/mi11.jpg" },
    { title: "Twin Flame", artist: "Desire4u", url: "music/twinflames.mp3", img: "images/mi12.jpg" },
    { title: "Endlessly", artist: "Desire4u", url: "music/endlessly.mp3", img: "images/mi16.jpg" },
    { title: "Fallen Angels", artist: "Desire4u", url: "music/fallenangels.mp3", img: "images/mi10.jpg" },
    { tittle: "All Mine", artist: "Whatsaheart", url: "music/allmine.mp3", img: "images/mi7.jpg" },
    { tittle: "Drown", artist: "Whatsaheart", url: "music/drown.mp3", img: "images/mi1.jpg" },
    { tittle: "For Her", artist: "Whatsaheart", url: "music/forher.mp3", img: "images/mi2.jpg" },
    { tittle: "Howlling", artist: "Whatsaheart", url: "music/howling.mp3", img: "images/mi4.jpg" },
    { tittle: "Love Sick", artist: "Whatsaheart", url: "music/lovesick.mp3", img: "images/mi5.jpg" },
    { tittle: "Sky Falling For You", artist: "Whatsaheart", url: "music/skyfallingforyou.mp3", img: "images/mi8.jpg" },
    { tittle: "Snakelike", artist: "Whatsaheart", url: "music/snakelike.mp3", img: "images/mi3.jpg" },
    { tittle: "Taking Over Me", artist: "Whatsaheart", url: "music/takingoverme.mp3", img: "images/mi6.jpg" },
    { tittle: "Vxlentine", artist: "Whatsaheart", url: "music/vxlentine.mp3", img: "images/mi46.jpg" },
    { tittle: "Wishing Dead", artist: "Blacklite District", url: "music/wishingdead.mp3", img: "images/mi21.jpg" },
    { tittle: "To Live Is To Suffer", artist: "Blacklite District", url: "music/toliveistosuffer.mp3", img: "images/mi17.jpg" },
    { tittle: "The Struggle Is Real", artist: "Blacklite District", url: "music/thestruggleisreal.mp3", img: "images/mi21.jpg" },
    { tittle: "Over This", artist: "Blacklite District", url: "music/overthis.mp3", img: "images/mi17.jpg" },
    { tittle: "One Way", artist: "Blacklite District", url: "music/oneway.mp3", img: "images/mi21.jpg" },
    { tittle: "More Than Ready", artist: "Blacklite District", url: "music/morethanready.mp3", img: "images/mi21.jpg" },
    { tittle: "Live Another Day", artist: "Blacklite District", url: "music/liveanotherday.mp3", img: "images/mi17.jpg" },
    { tittle: "Just So You Know", artist: "Blacklite District", url: "music/justsoyouknow.mp3", img: "images/mi21.jpg" },
    { tittle: "I Gambled And Won", artist: "Blacklite District", url: "music/igambledandwon.mp3", img: "images/mi17.jpg" },
    { tittle: "I Dont Really Care", artist: "Blacklite District", url: "music/idontreallycare.mp3", img: "images/mi17.jpg" },
    { tittle: "Hard Pill To Swallow", artist: "Blacklite District", url: "music/hardpilltoswallow.mp3", img: "images/mi21.jpg" },
    { tittle: "Go Home", artist: "Blacklite District", url: "music/gohome.mp3", img: "images/mi17.jpg" },
    { tittle: "Falling", artist: "Blacklite District", url: "music/Falling.mp3", img: "images/mi21.jpg" },
    { tittle: "Cold As Ice", artist: "Blacklite District", url: "music/coldasice.mp3", img: "images/mi31.jpg" },
    { tittle: "Be Afraid", artist: "Blacklite District", url: "music/beafraid.mp3", img: "images/mi21.jpg" },
    { tittle: "1 Of A Kind", artist: "Blacklite District", url: "music/1ofakind.mp3", img: "images/mi17.jpg" },
    { tittle: "YALLA", artist: "Ilyaugust", url: "music/YALLA.mp3", img: "images/mi47.jpg" },
    { tittle: "Night Life", artist: "Ilyaugust", url: "music/NIGHTLIFE.mp3", img: "images/mi36.jpg" },
    { tittle: "Trufle", artist: "Oliver Gigon", url: "music/Trufle.mp3", img: "images/mi45.jpg" },
    { tittle: "Łatwy Kąsek", artist: "Oliver Gigon", url: "music/latwykasek.mp3", img: "images/mi32.jpg" },
    { tittle: "Dla Fabuły", artist: "Oliver Gigon", url: "music/dlafabuly.mp3", img: "images/mi25.jpg" },
    { tittle: "Taste Your Love", artist: "I Have No Fucking Idea", url: "music/tasteyourlove.mp3", img: "images/mi44.jpg" },
    { tittle: "What Lurks on Channel X", artist: "Rob Zombie", url: "music/whatlurksonchannelx.mp3", img: "images/mi24.jpg" },
    { tittle: "The Ballad OF Resurrection Joe And Rose A Whore", artist: "Rob Zombie", url: "music/theballadofresurrectionjoeandrosawhore.mp3", img: "images/mi44.jpg" },
    { tittle: "Super Beast", artist: "Rob Zombie", url: "music/superbeast.mp3", img: "images/mi44.jpg" },
    { tittle: "Spook Show Baby", artist: "Rob Zombie", url: "music/spookshowbaby.mp3", img: "images/mi44.jpg" },
    { tittle: "Return Of The Phantom Stranger", artist: "Rob Zombie", url: "music/returnofthephantomstranger.mp3", img: "images/mi44.jpg" },
    { tittle: "Meet The Creeper", artist: "Rob Zombie", url: "music/meetthecreeper.mp3", img: "images/mi44.jpg" },
    { tittle: "Living Dead Girl", artist: "Rob Zombie", url: "music/livingdeadgirl.mp3", img: "images/mi44.jpg" },
    { tittle: "How To Make A Monster", artist: "Rob Zombie", url: "music/howtoamkeamonster.mp3", img: "images/mi44.jpg" },
    { tittle: "Break Stuff", artist: "Limp Bizkit", url: "music/breakstuff.mp3", img: "images/mi18.jpg" },
    { tittle: "Super Psycho Love", artist: "Simon Curtis", url: "music/superpsycholove.mp3", img: "images/mi43.jpg" },
    { tittle: "CARNAL", artist: "Tequya", url: "music/CARNAL.mp3", img: "images/mi19.jpg" },
    { tittle: "HEARTLOCK", artist: "Tequya", url: "music/HEARTLOCK.mp3", img: "images/mi28.jpg" },
    { tittle: "Perfect Pair", artist: "R.L Beats", url: "music/perfectpair.mp3", img: "images/mi38.jpg" },
    { tittle: "Scream And Shout Remix", artist: "Some No Name", url: "music/screamandshout.mp3", img: "images/mi41.jpg" },
    { tittle: "Snow Eden", artist: "Dorian", url: "music/snoweden.mp3", img: "images/mi42.jpg" },
    { tittle: "Death lungs", artist: "Dorian", url: "music/deathlungs.mp3", img: "images/mi23.jpg" },
    { tittle: "House Of Ballons", artist: "The Weekend", url: "music/houseofballons.mp3", img: "images/mi29.jpg" },
    { tittle: "Come As You Are", artist: "Nirvana", url: "music/comeasyouare.mp3", img: "images/mi22.jpg" },
    { tittle: "Lithium", artist: "Nirvana", url: "music/lithium.mp3", img: "images/mi22.jpg" },
    { tittle: "Smells Like Teen Spirit", artist: "Nirvana", url: "music/smellsliketeensoirit.mp3", img: "images/mi22.jpg" },
    { tittle: "Nero Forte", artist: "Slipknot", url: "music/neroforte.mp3", img: "images/mi35.jpg" },
    { tittle: "Duality", artist: "Slipknot", url: "music/Duality.mp3", img: "images/mi26.jpg" },
    { tittle: "Eyeless", artist: "Slipknot", url: "music/Eyeless.mp3", img: "images/mi27.jpg" },
     { tittle: "People = Shit", artist: "Slipknot", url: "music/peopleshit.mp3", img: "images/mi37.jpg" },
     { tittle: "Puppeteer", artist: "Noturtype", url: "music/puppeteer.mp3", img: "images/mi40.jpg" },
     { tittle: "Hypocrite", artist: "Noturtype", url: "music/Hypocrite.mp3", img: "images/mi30.jpg" },
     { tittle: "Hypocritical", artist: "Noturtype", url: "music/Hypocritical.mp3", img: "images/mi40.jpg" },
      { tittle: "Like That", artist: "Loveshy", url: "music/likethat.mp3", img: "images/mi33.jpg" },
    
];

let currentTrackIndex = -1;
let currentView = 'home'; // Keeps track of current viewing template context

const player = document.getElementById('audio-player');
const mainPlayBtn = document.getElementById('main-play-btn');
const seekSlider = document.getElementById('seek-slider');
const currentTimeDisplay = document.getElementById('current-time');
const totalDurationDisplay = document.getElementById('total-duration');

// Load existing liked songs array from LocalStorage memory logs
let likedSongs = JSON.parse(localStorage.getItem('neonStreamLikedSongs')) || [];

// Setup heart displays on app startup
updateHeartsUI();

// Safe execution wrapper ensuring heart clicks don't fire audio changes
function handleRowClick(event, title, artist, audioUrl, imageUrl) {
    if (event.target.classList.contains('like-btn')) return;
    playSong(title, artist, audioUrl, imageUrl);
}

function playSong(title, artist, audioUrl, imageUrl) {
    const source = document.getElementById('audio-source');
    const playerTitle = document.getElementById('player-title');
    const playerArtist = document.getElementById('player-artist');

    currentTrackIndex = tracks.findIndex(t => t.url === audioUrl);

    playerTitle.innerText = title;
    playerArtist.innerText = artist;
    source.src = audioUrl;

    player.load();
    player.play();
    mainPlayBtn.innerText = "⏸"; 

    updateActiveGlow();
}

// Scrapes and maps violet tracking frames matching running song references
function updateActiveGlow() {
    const songItems = document.getElementsByClassName('song-item');
    for (let i = 0; i < songItems.length; i++) {
        songItems[i].classList.remove('playing');
    }
    
    if (currentTrackIndex !== -1) {
        const activeTrack = tracks[currentTrackIndex];
        for (let i = 0; i < songItems.length; i++) {
            const rowTitle = songItems[i].querySelector('.track-title').innerText;
            if (rowTitle === activeTrack.title) {
                songItems[i].classList.add('playing');
            }
        }
    }
}

// Heart Toggling Logic
function toggleLike(event, songTitle) {
    event.stopPropagation(); 
    
    const index = likedSongs.indexOf(songTitle);
    if (index === -1) {
        likedSongs.push(songTitle); 
    } else {
        likedSongs.splice(index, 1); 
    }

    localStorage.setItem('neonStreamLikedSongs', JSON.stringify(likedSongs));
    updateHeartsUI();

    if (currentView === 'library') {
        showView('library');
    }
}

// Sync heart configurations with values in storage notebooks
function updateHeartsUI() {
    const songItems = document.getElementsByClassName('song-item');
    for (let i = 0; i < songItems.length; i++) {
        const title = songItems[i].querySelector('.track-title').innerText;
        const heartElement = songItems[i].querySelector('.like-btn');
        
        if (heartElement) {
            if (likedSongs.includes(title)) {
                heartElement.classList.add('liked');
            } else {
                heartElement.classList.remove('liked');
            }
        }
    }
}

// Layout Switcher: Swaps displays between 'home' and 'library' options
function showView(viewName) {
    currentView = viewName;
    const heading = document.getElementById('dynamic-heading');
    const songItems = document.getElementsByClassName('song-item');
    
    document.getElementById('nav-home').classList.remove('active');
    document.getElementById('nav-library').classList.remove('active');

    if (viewName === 'home') {
        document.getElementById('nav-home').classList.add('active');
        if (heading) heading.innerText = "Trending Tracks";
        
        for (let i = 0; i < songItems.length; i++) {
            songItems[i].style.display = "flex";
        }
    } else if (viewName === 'library') {
        document.getElementById('nav-library').classList.add('active');
        if (heading) heading.innerText = "Your Liked Songs";
        
        for (let i = 0; i < songItems.length; i++) {
            const title = songItems[i].querySelector('.track-title').innerText;
            if (likedSongs.includes(title)) {
                songItems[i].style.display = "flex";
            } else {
                songItems[i].style.display = "none";
            }
        }
    }
    updateActiveGlow();
}

function togglePlay() {
    if (currentTrackIndex === -1) {
        if(tracks.length > 0) playSong(tracks[0].title, tracks[0].artist, tracks[0].url, tracks[0].img);
        return;
    }
    
    if (player.paused) {
        player.play();
        mainPlayBtn.innerText = "⏸";
    } else {
        player.pause();
        mainPlayBtn.innerText = "▶";
    }
}

function nextTrack() {
    if (currentTrackIndex === -1) return;
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; 
    const next = tracks[currentTrackIndex];
    playSong(next.title, next.artist, next.url, next.img);
}

function prevTrack() {
    if (currentTrackIndex === -1) return;
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length; 
    const prev = tracks[currentTrackIndex];
    playSong(prev.title, prev.artist, prev.url, prev.img);
}

// Search Filter Engine
function filterSongs() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const songItems = document.getElementsByClassName('song-item');

    for (let i = 0; i < songItems.length; i++) {
        const title = songItems[i].querySelector('.track-title').innerText.toLowerCase();
        const artist = songItems[i].querySelector('.track-artist').innerText.toLowerCase();

        const matchesSearch = title.includes(input) || artist.includes(input);
        let matchesView = true;

        if (currentView === 'library') {
            matchesView = likedSongs.includes(songItems[i].querySelector('.track-title').innerText);
        }

        if (matchesSearch && matchesView) {
            songItems[i].style.display = "flex";
        } else {
            songItems[i].style.display = "none";
        }
    }
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return min + ":" + sec;
}

// Timeline Progress Track Drivers
player.addEventListener('timeupdate', () => {
    if (!isNaN(player.duration)) {
        const progress = (player.currentTime / player.duration) * 100;
        seekSlider.value = progress;
        currentTimeDisplay.innerText = formatTime(player.currentTime);
    }
});

player.addEventListener('loadedmetadata', () => {
    totalDurationDisplay.innerText = formatTime(player.duration);
});

function seekSong() {
    if (player.duration) {
        const newTime = (seekSlider.value / 100) * player.duration;
        player.currentTime = newTime;
    }
}

// Auto chain skip progression when a song ends
player.addEventListener('ended', nextTrack);