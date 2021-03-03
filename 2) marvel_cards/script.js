const panels = document.querySelectorAll('.panel'); 

// reason behind using queryselector all is we have to select
// all panel classes and make transiton effect on each of them
// also with this all panels are put in node list i.e a form of
//  arry



//here on line 13 will loop through node list for each iteration
// for each loop takes function as an argument

panels.forEach( (panel) => {

    panel.addEventListener('click', () => {

        removeActiveClasses()

// here at line 17 this function is removing all active classes present
// so that active class can be put in a single particular class of panel

        panel.classList.add('active')
    })
})


function removeActiveClasses () {
    panels.forEach( (panel) => {
        panel.classList.remove('active')
    })
}