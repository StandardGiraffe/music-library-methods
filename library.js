var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }

// ### Methods Below ###

  countTracks: function (listID) {
    return library["playlists"][listID].tracks.length;
  }


  printPlaylists: function () {
    // prints a list of all playlists, in the form:
    // p01: Coding Music - 2 tracks
    // p02: Other Playlist - 1 tracks
    var countTracks = function (listID) {
      return library["playlists"][listID].tracks.length;
    }

    for (var i in library.playlists) {
      console.log(`${library.playlists[i].id}: ${library.playlists[i].name} - ${countTracks(i)} tracks`);
    }

  }

  // console.log(printPlaylists()); // for testing porpoises


  printTracks: function () {

    // prints a list of all tracks, in the form:
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)
    // t03: Four Thirty-Three by John Cage (Woodstock 1952)

    for (var i in library.tracks) {
      console.log(`${library.tracks[i].id}: ${library.tracks[i].name} by ${library.tracks[i].artist} (${library.tracks[i].album})`);
    }

  }

  // printTracks(); // for testing porpoises


  printPlaylist: function (playlistId) {

    // prints a list of tracks for a given playlist, in the form:
    // p01: Coding Music - 2 tracks
    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    // t02: Model View Controller by James Dempsey (WWDC 2003)

    var countTracks = function (listID) {
      return library["playlists"][listID].tracks.length;
    }

    console.log(`${library.playlists[playlistId].id}: ${library.playlists[playlistId].name} - ${countTracks(playlistId)} tracks`);

    for (var i of library.playlists[playlistId].tracks) {
        console.log(`${library.tracks[i].id}: ${library.tracks[i].name} by ${library.tracks[i].artist} (${library.tracks[i].album})`);
    }

  }

  // printPlaylist("p01"); // for testing porpoises
  // printPlaylist("p02"); // for testing porpoises

  addTrackToPlaylist: function (trackId, playlistId) {
    // adds an existing track to an existing playlist
    // console.log(`trackId is ${trackId}`); // for testing porpoises
    // console.log(`playlistId is ${playlistId}`); // for testing porpoises
    library.playlists[playlistId].tracks.push(trackId);
  }

  // addTrackToPlaylist("t01", "p02"); // for testing porpoises
  // console.log("\n"); // for testing porpoises
  // printPlaylist("p02"); // for testing porpoises


  addTrack: function (name, artist, album) {
    // adds a track to the library
    // count current number of tracks and name the id as an increment of that

    var uid = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      // generates a unique id
      // (use this for addTrack and addPlaylist)
    }


    var totalTracks = Object.entries(library.tracks).length;
    console.log(`Before adding tracks, there were ${totalTracks} total tracks.`);

    var newTrackID = uid();
    library.tracks[newTrackID] = { "id": `t0${totalTracks + 1}`, "name": name, "artist": artist, "album": album}

    totalTracks = Object.entries(library.tracks).length;
    console.log(`Now, there are ${totalTracks} total tracks.`);

  }

  /* Test porp
  addTrack("4ware", "deadmau5", `w:/2016ALBUM`);
  addTrack("The Drinking Song", "Moxy Fruvous", `That album it was on`);
  printTracks(); // for testing porpoises
  */


  // console.log("Test print:\n" + printTracks());

  // adds a playlist to the library

  addPlaylist: function (name) {

    var uid = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }


    var totalPlaylists = Object.entries(library.playlists).length;
    console.log(`Before adding playlists, there were ${totalPlaylists} total playlists.`);

    var newPlaylistID = uid();
    library.playlists[newPlaylistID] = { "id": `p0${totalPlaylists + 1}`, "name": name, "tracks": []}

    totalPlaylists = Object.entries(library.playlists).length;
    console.log(`Before adding playlists, there were ${totalPlaylists} total playlists.`);

  }

}


// addPlaylist("Victory Music");
// printPlaylists();
// addTrackToPlaylist("t01", "p03");
// printPlaylists();


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}