var menudownc = document.querySelector('.menu-downc');
var menuItems = document.querySelector('.menu-items');
var k = menudownc.getAttribute('data-up');
var r = menudownc.getAttribute('data-reverse');

if(k=='true'){
    menuItems.style.bottom='20px';
    menuItems.style.position='absolute';
}
if(k=='false'){
    menuItems.style.top='20px';
    menuItems.style.position='absolute';
}
 
if(r=='true'){
    var qwe = menuItems.childNodes;
    for(var i = menuItems.childNodes.length-1; i>=0 ; i--){
         menuItems.appendChild(qwe[i]);
    }
    
    
}

var check = 'open';
function handler() {
    if(check == 'open') {menuItems.style.display='block';
                        check = 'close';
                        }
    else{menuItems.style.display='none';
        check = 'open';}
};


function hand () {
    if( menuItems.style.display='block'){
        menuItems.style.display='none';
    }
}

menudownc.addEventListener('click' , handler);