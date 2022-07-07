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
console.log(
  addToCollection(
    "Sgt. Pepper's Lonley Hearts Club Band",
    "The Beatles",
    1967,
    [
      { name: "Sgt. Pepper's Lonley Hearts Club Band", duration: "2:00" },
      { name: "With a Little Help from My Friends", duration: "2:42" },
      { name: "Lucy in the Sky with Diamonds", duration: "3:28" },
      { name: "Getting Better", duration: "2:48" },
      { name: "Fixing a Hole", duration: "2:36" },
      { name: "She's Leaving Home", duration: "3:25" },
      { name: "Being for the Benefit of Mr. Kite!", duration: "2:37" },
      { name: "Within You Without You", duration: "5:05" },
      { name: "When I'm Sixty-Four", duration: "2:37" },
      { name: "Lovely Rita", duration: "2:42" },
      { name: "Good Morning Good Morning", duration: "2:42" },
      {
        name: "Sgt. Pepper's Lonely Hearts Club Band (Reprise)",
        duration: "1:18",
      },
      { name: "A Day in the Life", duration: "5:38" },
    ]
  )
);
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
    //for (i = 0; i < collection.length; i++) {
    console.log(
      `${record.title} by ${record.artist} published in ${record.year}`
    );
    if (record.tracks) {
      i = 0;
      for (let track of record.tracks) {
        i++;
        console.log(i + ". " + track.name + ": " + track.duration);
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
