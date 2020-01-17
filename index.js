// let main = document.getElementById('main');

// const navUpdate = (e) => {
//     console.log(e);
//     let x = main.scrollTop;

//     console.log(x);
// }

// main.addEventListener('scroll', navUpdate)



// console.log(main);

// need to find the pixel size of the screen

// console.log(document.body.clientHeight)

// const height = document.body.clientHeight;

// window.onscroll = function(){
//     navUpdate()
// }

// const navUpdate = () => {
//     console.log(document.body.scrollTop);

//     if(document.body.scrollTop >= height){
//         makeNavSticky();
//     }
// }

// const makeNavSticky = () => {
//     let nav = document.querySelector('.nav');
//     nav.classList.remove('set')
//     nav.classList.add('sticky');

//     let stickyNav = nav.cloneNode(true);

//     let body = document.querySelector('body');

//     console.log(body);
//     console.log(stickyNav);
//     body.appendChild(stickyNav);

//     console.log(nav)
// }