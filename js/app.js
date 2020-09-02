// The user hovers their mouse over an element
var header = document.getElementById('header');
header.addEventListener('mouseover', function(){
    header.style.fontSize = '4em';
    header.style.color = 'red';
});

// The user clicks an element

var paragraph = document.getElementById('paragraph');
paragraph.addEventListener('click', function(){
    paragraph.style.fontSize = '4rem';
    paragraph.style.color = 'blue';
});

// The user presses the space key on their keyboard

let bodyElement = document.getElementById('body')
bodyElement.addEventListener('keypress', function(eventDetails){
    let headerElement = document.getElementById('header2');
    console.log(eventDetails);
   if(eventDetails.code == 'Space'){
    headerElement.style.transition = 'all 3s ease-in-out';
    headerElement.style.color = 'blue';
   }
   else if( eventDetails.key == 'r'){
    headerElement.style.transition = 'all 3s ease-in-out';
    headerElement.style.color = 'red';
   }
})

