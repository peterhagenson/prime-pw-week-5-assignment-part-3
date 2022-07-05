console.log("***** Music Collection *****");

//Add a function named `addToCollection."
let collection = [];

addToCollection = (title, artist, yearPublished) => {
  let album = {
    title: title,
    artist: artist,
    published: yearPublished,
  };
  collection.push(album);
  return collection[collection.length - 1];
};

console.log(addToCollection("Layla", "Eric Clapton", 1971));
console.log(collection);

//
