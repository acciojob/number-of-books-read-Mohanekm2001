function numberOfBooksRead(library) {
  // initialize a variable to count the number of books that have been read
  let count = 0;
  
  // iterate over each book in the library array
  for (let i = 0; i < library.length; i++) {
    // if the book has been marked as read, increment the count
    if (library[i].readingStatus === true) {
      count++;
    }
  }
  
  // return the total count of books that have been read
  return count;
}

const library = [
  {
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Philosopher\'s Stone',
    readingStatus: false
  },
  {
    author: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    readingStatus: false
  },
  {
    author: 'J.R.R. Tolkien',
    title: 'The Lord of the Rings',
    readingStatus: false
  }
];

const numBooksRead = numberOfBooksRead(library);

// update the span element in the HTML with the number of books read
document.getElementById('num-books').textContent = numBooksRead;
