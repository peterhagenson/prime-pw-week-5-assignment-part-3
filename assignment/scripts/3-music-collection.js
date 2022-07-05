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

console.log(
  addToCollection(
    "Layla and Other Assorted Love Songs",
    "Derek and the Dominos",
    1971
  )
);
console.log(collection);

//Test the `addToCollection` function:
console.log(addToCollection("The White Album", "The Beatles", 1968));
console.log(addToCollection("Harvest", "Neil Young", 1972));
console.log(addToCollection("Jason Isbell", "Southeastern", 2013));
console.log(
  addToCollection("Car Wheels on a Gravel Road", "Lucinda Williams", 1998)
);
console.log(addToCollection("Oh Mercy", "Bob Dylan", 1989));
console.log(
  addToCollection("Full Moon Fever", "Tom Petty and the Heartbreakers", 1989)
);

console.log(collection);

//
showCollection = (array) => {
  console.log(array.length);
  for (let item of array) {
    console.log(
      `${item.title} by ${item.artist} published in ${item.published}`
    );
  }
};

showCollection(collection);
