// Start Navbar
const navbuttons = document.querySelector('.navbuttons');
// console.log(navbuttons); 
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

// for navbar 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log(getscrolly); 
    
    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }

});

//End Navbar


//Start Footer Section
const showyear = document.getElementById('showyear');
    const getfullyear = new Date().getUTCFullYear();

    showyear.textContent = getfullyear;
//end Footer Section