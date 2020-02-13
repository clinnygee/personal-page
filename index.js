
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

// get the form elements defined in your form HTML above
    
var form = document.getElementById("my-form");
var button = document.getElementById("my-form-button");
var status = document.getElementById("my-form-status");

// Success and Error functions for after the form is submitted

function success() {
  form.reset();
  button.style = "display: none ";
  status.innerHTML = "Thanks!";
}

function error() {
  status.innerHTML = "Oops! There was a problem.";
}

// handle the form submission event

form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});


// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function() {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  if (xhr.status === 200) {
    success(xhr.response, xhr.responseType);
  } else {
    error(xhr.status, xhr.response, xhr.responseType);
  }
};
xhr.send(data);
}



// Set up navigation

const clearDesktopNavigation = () => {
    let nav = document.querySelector('.nav');
    nav.parentNode.removeChild(nav);
}

const clearMobileNavigation = () => {
    let nav = document.querySelector('.mobile-nav');
    nav.parentNode.removeChild(nav);
}

class MobileNavigation {
    constructor(){
        const navLinks = document.querySelectorAll('.link');

        this.contentScrollDistance = document.querySelector('.content').offsetTop;

        this.nav = document.querySelector('.mobile-nav');

        this.header = {element: navLinks[0], position: 0};
        this.about = {element: navLinks[1], position: this.contentScrollDistance};
        this.aboutButton = document.querySelector('#about-button');
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
        });

        this.aboutButton.addEventListener('click', (e) => {
            window.scrollTo({
                top: this.about.position,
                left: 0,
                behavior: "smooth",
            });
            this.updateActive(this.about);
        });

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
        // console.log(this.header)
        // console.log(this.about);
        // console.log(this.projects);
        // console.log(this.contact)
        this.page = document.querySelector('body');

        


        window.addEventListener('scroll', () => {
            
            this.navUpdate();
        })
        // console.log(this.page)
    }
    navUpdate = () => {

        // need to add a function here, that is called on scroll, that will call updateActive
        // depending on which portion of content is currently displayed.
        this.checkActive();
        
        // if (this.page.scrollTop >= this.contentScrollDistance){
        //     // set nav to .sticky
        //     this.nav.classList.add('sticky')
        //     // need to set section to about

        //     // first find element with .active, and remove.active


        // } else {
        //     this.nav.classList.remove('sticky')
        // }
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
    };
}

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
        this.aboutButton = document.querySelector('#about-button');
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
        });

        this.aboutButton.addEventListener('click', (e) => {
            window.scrollTo({
                top: this.about.position,
                left: 0,
                behavior: "smooth",
            });
            this.updateActive(this.about);
        });

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
        // console.log(this.header)
        // console.log(this.about);
        // console.log(this.projects);
        // console.log(this.contact)
        this.page = document.querySelector('body');

        


        window.addEventListener('scroll', () => {
            
            this.navUpdate();
        })
        // console.log(this.page)
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
        // console.log(this.page.scrollTop);
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
        // console.log(this.active.element);
        this.active.element.classList.remove('active');
        // console.log(this.active);

        this.active = element;
        // console.log(this.active)

        this.active.element.classList.add('active');
        // console.log(this.active);
    }
};

if(width <= 768){
    // run mobile nav set up
    // console.log('viewing from mobile device');
    clearDesktopNavigation();
    let navigator = new MobileNavigation();
    const menu = document.querySelector('.hamburger');

    menu.addEventListener('click', (e) => {
        let navBar = e.target.parentNode.parentNode.parentNode;
        // console.log(navBar.classList.length);
        navBar.classList.length > 1 ? navBar.classList.remove('open') : navBar.classList.add('open');
        // console.log(navBar.classList);
    })
} else {
    // run desktop nav setup
    clearMobileNavigation();
    let navigator = new navigation();
}





// let navigator = new navigation();



// console.log(content.offsetTop);