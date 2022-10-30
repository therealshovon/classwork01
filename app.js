class Book {
    constructor(author) {
      
      this.author = author;
      
    }
  }

  class UI {
    add(book) {
        const show =  document.getElementById('show-author')
        show.textContent=book.author
    }

    nullValue()
    {
        const show =  document.getElementById('show-author')
        show.textContent='Please input author name'
    }
  
    clearField() { 
      document.getElementById('author').value = '';
    }
  }
  
  
  
  // Event Listener for adding author
  document.getElementById('author-form').addEventListener('submit', function(e){
    // Get form values
    const author = document.getElementById('author').value
      
  
    // Instantiate book author
    const book = new Book(author);
  
    // Instantiate UI
    const ui = new UI();
  
    console.log(ui);
  
    
    if(author === '') {
      
       ui.nullValue();
     
    } else {
      
      ui.add(book);
      ui.clearField();
      
      
    }
  
    e.preventDefault();
  });
  
  