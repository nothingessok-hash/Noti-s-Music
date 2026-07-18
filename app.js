const tracks = [
    { 
        title: "Born To Sin", 
        artist: "Desire4u", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/borntosin.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg"
    },
    { 
        title: "I call your name", 
        artist: "Desire4u", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/icallyourname.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi11.jpg" 
    },

    { 
        title: "Twin Flame", 
        artist: "Desire4u", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/twinflames.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi12.jpg" 
    },
    { 
        title: "Endlessly", 
        artist: "Desire4u", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/endlessly.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi16.jpg" 
    },
    { 
        title: "Fallen Angels", 
        artist: "Desire4u", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/fallenangels.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi10.jpg" 
    },
    { 
        title: "All Mine", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/allmine.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi7.jpg" 
    },
    { 
        title: "Sky Falling For You", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/skyfallingforyou.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi8.jpg" 
    },
    { 
        title: "Drown", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/drown.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi1.jpg" 
    },{ 
        title: "For Her", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/forher.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi2.jpg" 
    },
    {
        title: "Howlling", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/howling.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi4.jpg" 
    },
    { 
        title: "Love Sick", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/lovesick.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi5.jpg" 
    },
    {
        title: "Safeword", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/safeword.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi50.jpg" 
    },
    { 
        title: "Snakelike", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/snakelike.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi3.jpg" 
    },
    { 
        title: "Taking Over Me", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/takingoverme.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi6.jpg" 
    },
    { 
        title: "Vxlentine", 
        artist: "Whatsaheart", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/vxlentine.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi46.jpg" 
    },
    {
        title: "Psycho", 
        artist: "Mia Rodrizgues", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Psycho.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/im53.jpg" 
    },
    { 
        title: "My Own Summer", 
        artist: "Deftones", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/myownsummer.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi34.jpg" 
    },
    { 
        title: "Wishing Dead", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/wishingdead.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "To Live Is To Suffer", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/toliveistosuffer.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg" 
    },
    { 
        title: "The Struggle Is Real", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/thestruggleisreal.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "Over This", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/overthis.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg" 
    },
    { 
        title: "One Way", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/oneway.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "More Than ready", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/morethanready.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "Live Another Day", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/liveanotherday.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg" 
    },
    { 
        title: "Just So You Know", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/justsoyouknow.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "I Gambled And Won", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/igambledandwon.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg" 
    },
    { 
        title: "I Dont Really Care", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/idontreallycare.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg" 
    },
    { 
        title: "Hard Pill To Swallow", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/hardpilltoswallow.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "Go Home", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/gohome.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg" 
    },
    { 
        title: "Falling", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Falling.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "Cold As Ice", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/coldasice.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi31.jpg" 
    },
    { 
        title: "Be Afraid", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/beafraid.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi21.jpg" 
    },
    { 
        title: "1 Of A Kind", 
        artist: "Blacklite District", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/1ofakind.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi17.jpg" 
    },
    { 
        title: "YALLA", 
        artist: "Ilyaugust", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/YALLA.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi47.jpg" 
    },
    { 
        title: "Night Life", 
        artist: "Ilyaugust", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/NIGHTLIFE.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi36.jpg" 
    },
    { 
        title: "Trufle", 
        artist: "Oliver Gigon", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Trufle.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi45.jpg" 
    },
    { 
        title: "Łatwy Kąsek", 
        artist: "Oliver Gigon", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/latwykasek.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi32.jpg" 
    },
    { 
        title: "Dla Fabuły", 
        artist: "Oliver Gigon", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/dlafabuly.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi25.jpg" 
    },
    { 
        title: "Taste Your Love", 
        artist: "I Have No Fucking Idea", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/tasteyourlove.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi44.jpg" 
    },
    { 
        title: "What Lurks on Channel X", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/whatlurksonchannelx.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "The Ballad Of Resurrection Joe And Rose A Whore", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/theballadofresurrectionjoeandrosawhore.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Demonoid Phenomenon", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/demonoidphenomenon.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Super Beast", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/superbeast.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Spook Show Baby", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/spookshowbaby.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Return Of The Phantom Stranger", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/returnofthephantomstranger.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Meet The Creeper", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/meetthecreeper.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Living Dead Girl", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/livingdeadgirl.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "How To Make A Monster", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/howtomakeamonster.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Dragula", 
        artist: "Rob Zombie", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Dragula.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi24.jpg" 
    },
    { 
        title: "Break Stuff", 
        artist: "Limp Bizkit", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/breakstuff.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi18.jpg" 
    },
    { 
        title: "Super Psycho Love", 
        artist: "Simon Curtis", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/superpsycholove.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi43.jpg" 
    },
    { 
        title: "CARNAL", 
        artist: "Tequya", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/CARNAL.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi19.jpg" 
    },
    { 
        title: "HEARTLOCK", 
        artist: "Tequya", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/HEARTLOCK.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi28.jpg" 
    },
    { 
        title: "Perfect Pair", 
        artist: "R.L Beats", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/perfectpair.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi38.jpg" 
    },
    { 
        title: "Pretty Please", 
        artist: "I dont know", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/prettyplease.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi39.jpg" 
    },
    { 
        title: "Scream And Shout Remix", 
        artist: "Some No Name", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/screamandshout.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi41.jpg" 
    },
    { 
        title: "Snow Eden", 
        artist: "Dorian", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/snoweden.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi42.jpg" 
    },
    { 
        title: "Death Lungs", 
        artist: "Dorian", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/deathlungs.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi23.jpg" 
    },
    { 
        title: "House Of Ballons", 
        artist: "The Weekend", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/houseofballons.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi29.jpg" 
    },
    { 
        title: "Come As You Are", 
        artist: "Nirvana", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/comeasyouare.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi22.jpg" 
    },
    { 
        title: "Lithium", 
        artist: "Nirvana", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Lithium.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi22.jpg" 
    },
    { 
        title: "Smells Like Teen Spirit", 
        artist: "Nirvana", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/smellsliketeenspirit.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi22.jpg" 
    },
    { 
        title: "Nero Forte", 
        artist: "Slipknot", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/neroforte.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi35.jpg" 
    },
    { 
        title: "Duality", 
        artist: "Slipknot", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Duality.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi26.jpg" 
    },
    { 
        title: "Eyeless", 
        artist: "Slipknot", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Eyeless.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi27.jpg" 
    },

    { 
        title: "People = Shit", 
        artist: "Slipknot", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/peopleshit.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi37.jpg" 
    },
    { 
        title: "Puppeteer", 
        artist: "Noturtype", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/puppeteer.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi40.jpg" 
    },
    { 
        title: "Hypocrite", 
        artist: "Noturtype", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Hypocrite.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi30.jpg" 
    },
    { 
        title: "Hypocritical", 
        artist: "Noturtype", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Hypocritical.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi40.jpg" 
    },
    { 
        title: "Like That", 
        artist: "Loveshy", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/likethat.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi33.jpg" 
    },
    { 
        title: "Pyscho Love", 
        artist: "Simon Curtis", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Super%20Psycho%20Love%20(2024%20Remaster).mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi48.jpg" 
    },
    { 
        title: "Shut Me Up", 
        artist: "MSI", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Shut%20Me%20Up.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi54.jpg" 
    },
    { 
        title: "Lights Out", 
        artist: "MSI", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Lights%20Out.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi54.jpg" 
    },
    { 
        title: "For The Love Of God", 
        artist: "MSI", 
        url: "hhttps://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/For%20The%20Love%20of%20God.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi55.jpg" 
    },
    { 
        title: "Stupid Mf", 
        artist: "MSI", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Stupid%20MF.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi56.jpg." 
    },
    { 
        title: "This hurts", 
        artist: "MSI", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/This%20Hurts.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi56.jpg" 
    },
     { 
        title: "It Only Gets Worse", 
        artist: "MSI", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/It%20Gets%20Worse.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/im57.jpg" 
    },
      { 
        title: "Whenevr I may roam", 
        artist: "Metalica", 
        url: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/music/Wherever%20I%20May%20Roam%20-%20Remastered%202021.mp3", 
        img: "https://wwwhllpfwubcnfxrgsmz.supabase.co/storage/v1/object/public/music-player/images/mi49.jpg" 
    },



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