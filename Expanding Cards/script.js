var panels = document.querySelectorAll('.panel');
var activeClass;

function returnActive(){
    panels.forEach(panel => {
        if(panel.classList.contains('active')){
            activeClass = panel;
        }
    });
    return activeClass;
}

panels.forEach(panel => {
    
    panel.addEventListener('click', () =>{
        activeClass = returnActive(); 
        activeClass.classList.remove('active');
        panel.classList.add('active');
        
    });
});

