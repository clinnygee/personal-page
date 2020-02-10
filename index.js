

// const page = document.querySelector('main');
// console.log(page)
// console.log(page);

// const content = document.querySelector('.content');

// const about = document.querySelector('about');

// const projects = document.querySelector('projects');

// const contact = document.querySelector('contact');

// // find out how far content is from <main>,
// // when you scroll to content, change the nav to a fixed position.

// const scrollDistance = content.offsetTop;

// const nav = document.querySelector('nav');

// console.log(nav);

// page.onscroll = function(){
//     console.log(page.scrollTop)
//     navUpdate();
// }

// const navUpdate = () => {
//     if (page.scrollTop >= scrollDistance){
//         // set nav to .sticky
//         nav.classList.add('sticky')
//     } else {
//         nav.classList.remove('sticky')
//     }
// };

// const navLinks = document.querySelectorAll('.page-link');

// console.log(navLinks);

// navLinks[0].addEventListener('click', (e) => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// })
// console.log(Array.from(document.querySelectorAll('.page-link')));

class navigation {

    

    // find the y co-ordinates of each nav item, 
    // pair it in an object with it's nav link
    // store the currently active nav item.
    constructor (){
        // an array of the navigation links
        const navLinks = document.querySelectorAll('.page-link');

        this.contentScrollDistance = document.querySelector('.content').offsetTop;

        this.nav = document.querySelector('.nav');

        this.header = {element: navLinks[0], position: 0};
        this.about = {element: navLinks[1], position: this.contentScrollDistance};
        this.projects = {element: navLinks[2], position:  document.querySelector('.projects').offsetTop};
        this.contact = {element: navLinks[3], position:  document.querySelector('.contact').offsetTop};

        this.active = this.header;

        // add event listeners to all nav elements, that will scroll to the correct Y co-ordinates of the screen.

        this.contact.element.addEventListener('click', (e) => {
            window.scrollTo({
                top: this.contact.position,
                left: 0,
                behavior: "smooth",
            });
            this.updateActive(this.contact)
        });

        this.about.element.addEventListener('click', (e) => {
            window.scrollTo({
                top: this.about.position,
                left: 0,
                behavior: "smooth",
            });
            this.updateActive(this.about);
        })

        this.projects.element.addEventListener('click', (e) => {
            window.scrollTo({
                top: this.projects.position,
                left: 0,
                behavior: "smooth",
            });
            this.updateActive(this.projects);
        })

        this.header.element.addEventListener('click', (e) => {
            window.scrollTo({
                top: this.header.position,
                left: 0,
                behavior: "smooth",
            });
            this.updateActive(this.header);
        })
        console.log(this.header)
        console.log(this.about);
        console.log(this.projects);
        console.log(this.contact)
        this.page = document.querySelector('body');

        


        window.addEventListener('scroll', () => {
            
            this.navUpdate();
        })
        console.log(this.page)
    };

    navUpdate = () => {

        // need to add a function here, that is called on scroll, that will call updateActive
        // depending on which portion of content is currently displayed.
        this.checkActive();
        
        if (this.page.scrollTop >= this.contentScrollDistance){
            // set nav to .sticky
            this.nav.classList.add('sticky')
            // need to set section to about

            // first find element with .active, and remove.active


        } else {
            this.nav.classList.remove('sticky')
        }
    };

    checkActive = () => {
        console.log(this.page.scrollTop);
        let scrollTop = this.page.scrollTop;

        if(scrollTop >= this.header.position && scrollTop < this.about.position){
            this.updateActive(this.header)
        } else if (scrollTop >= this.about.position && scrollTop < this.projects.position){
            this.updateActive(this.about)
        } else if (scrollTop >= this.projects.position && scrollTop < this.contact.position){
            this.updateActive(this.projects)
        } else {
            // this does not currently work
            this.updateActive(this.contact)
        }
        
    }

    updateActive = (element) => {
        // clears the .active class from this.active
        console.log(this.active.element);
        this.active.element.classList.remove('active');
        console.log(this.active);

        this.active = element;
        console.log(this.active)

        this.active.element.classList.add('active');
        console.log(this.active);
    }
};

let navigator = new navigation();



// console.log(content.offsetTop);