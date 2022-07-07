console.log("***** Music Collection *****");

//Add a function named `addToCollection."
let collection = [];

addToCollection = (title, artist, year, tracks) => {
  let album = {
    title: title,
    artist: artist,
    year: year,
    tracks: tracks,
  };

  collection.push(album);
  return collection[collection.length - 1];
};

console.log(
  addToCollection(
    "Layla and Other Assorted Love Songs",
    "Derek and the Dominos",
    1971,
    [
      { name: "I Looked Away", duration: "3:07" },
      { name: "Bell Bottom Blues", duration: "5:03" },
      { name: "Keep On Growing", duration: "6:23" },
      { name: "Nobody Knows You", duration: "4:58" },
      { name: "I Am Yours", duration: "3:37" },
      { name: "Anyday", duration: "6:37" },
      { name: "Key to the Highway", duration: "9:41" },
      { name: "Tell the Truth", duration: "6:40" },
      { name: "Why Does Love Got to Be So Sad?", duration: "4:44" },
    ]
  )
);
console.log(collection);

//Test the `addToCollection` function:
console.log(addToCollection("The White Album", "The Beatles", 1968));
console.log(addToCollection("Harvest", "Neil Young", 1972));
console.log(addToCollection("Let It Be", "The Beatles", 1970));
console.log(
  addToCollection("Car Wheels on a Gravel Road", "Lucinda Williams", 1998)
);
console.log(addToCollection("Oh Mercy", "Bob Dylan", 1989));
console.log(
  addToCollection("Full Moon Fever", "Tom Petty and the Heartbreakers", 1989)
);

console.log(collection);

// Write showCollection function

//still need to add number before track name
showCollection = (collection) => {
  console.log(collection.length);
  for (let record of collection) {
    console.log(
      `${record.title} by ${record.artist} published in ${record.year}`
    );
    if (record.tracks) {
      for (let track of record.tracks) {
        console.log(track.name + ": " + track.duration);
      }
    }
  }
};

showCollection(collection);

//write findByArtist function

findByArtist = (artist) => {
  let results = [];
  for (let item of collection) {
    if (item.artist === artist) {
      results.push(item);
    }
  }
  return results;
};

console.log(findByArtist("Derek and the Dominos"));
console.log(findByArtist("Otis Redding"));

//stretch goals

search = (searchObject) => {
  let matches = [];

  if (searchObject) {
    if (
      searchObject.artist === undefined ||
      searchObject.year === undefined ||
      searchObject.trackName === undefined
    ) {
      return collection;
    }

    for (let item of collection) {
      let isTrackFound = false;

      if (item.tracks) {
        for (let track of item.tracks) {
          if (track.name === searchObject.trackName) {
            isTrackFound = true;
          }
        }
      }

      if (
        item.artist === searchObject.artist &&
        item.year === searchObject.year &&
        isTrackFound
      ) {
        matches.push(item);
      }
    }
    return matches;
  } else {
    return collection;
  }
};

console.log(
  search({
    artist: "Derek and the Dominos",
    year: 1971,
    trackName: "I Looked Away",
  })
);
console.log(search());
