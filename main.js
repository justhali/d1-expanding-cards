/**
 * SHOW ACTIVE CARDS 
*/

// Récupérer les cartes 
const cardsToExpand = document.querySelectorAll('.card-soins');

for( let i = 0 ; i < cardsToExpand.length; i++){
    cardsToExpand[i].addEventListener('click', function(){
        
        let otherCards = document.querySelector('.card-soins.active');

        otherCards.classList.remove('active');
        cardsToExpand[i].classList.add('active');
        
    })
}

