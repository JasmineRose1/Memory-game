  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  //randomize cards array for new positions
  cardsArray.sort(()=>0.5 - Math.random())

  //create the board
  const grid= document.querySelector('.grid');
  const resultDisplay=document.querySelector('#result')
  var cardsChosen=[]
  var cardsWon=[]


  function createBoard(){
      for (let i=0;i<cardArray.length;i++){
          let card=document.createElement('img');
          card.setAttribute('src',images/blank.png);
          card.setAttribute('data-id',i)
          card.addEventListener('click' flipcard)
          grid.appendChild(card)
      }
  }



// check for matches

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {//if the cards in our array have been all aollected -two of each card
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }


  //flip your card
  function flipCard(){
      let cardId=this.getAttribtue('data-id')
      cardsChosen.push(cardArray[cardId].name);
      cardsChoseId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if(cardsChosen.length===2){
          setTimeout(checkForMatch, 500)
      }
  }

  createBoard();
 
