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
      { number: "1.", name: "I Looked Away", duration: "3:07" },
      { number: "2.", name: "Bell Bottom Blues", duration: "5:03" },
      { number: "3.", name: "Keep On Growing", duration: "6:23" },
      { number: "4.", name: "Nobody Knows You", duration: "4:58" },
      { number: "5.", name: "I Am Yours", duration: "3:37" },
      { number: "6.", name: "Anyday", duration: "6:37" },
      { number: "7.", name: "Key to the Highway", duration: "9:41" },
      { number: "8.", name: "Tell the Truth", duration: "6:40" },
      {
        number: "9.",
        name: "Why Does Love Got to Be So Sad?",
        duration: "4:44",
      },
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
showCollection = (array) => {
  console.log(array.length);
  for (let item of array) {
    console.log(`${item.title} by ${item.artist} published in ${item.year}`);
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

search = (searchTerm) => {
  let matches = [];
  for (let item of collection) {
    if (
      item.title === searchTerm ||
      item.artist === searchTerm ||
      item.year === searchTerm
    ) {
      matches.push(item);
    } else if (searchTerm === undefined) {
      return collection;
    }
  }
  return matches;
};

console.log(search());
console.log(search(1989));
