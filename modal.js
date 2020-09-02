
const projects = [
    {
        name:'Weather App',
        url:'https://clinnygee.github.io/weather-api-app-BOM/',
        github:'https://github.com/clinnygee/weather-api-app-BOM',
        image:'https://res.cloudinary.com/clinnygee/image/upload/v1598499639/Screenshot_from_2020-02-10_08-34-09_e1swzk.png',
        title : 'BOM Weather Application',
        about : 'Best viewed on Mobile devices. Made using React and the OpenWeatherApi. This will tell you todays hourly forecast, Alongside the highs and lows for the rest of the week!'
    },
    {
        name:'Instagram Clone',
        url:'http://3.24.180.28',
        github:'https://github.com/clinnygee/instant-messenger',
        title : 'Instagram Clone',
        image:'https://res.cloudinary.com/clinnygee/image/upload/v1592182294/103949435_910650822734973_9044607956827929333_n_wanlac.jpg',
        about: `Works just like instagram! After you sign up you can send DM's in real time, post photos, comment, like etc. 
                Made with React, Node, Sequelize and Socket.io. 
                No CSS framework is used, and it's all written in SCSS.`
    },
    {
        name:'Weight Manager',
        url:'http://3.25.111.216',
        github:'https://github.com/clinnygee/weight-manager',
        title : 'Food & Calorie Tracker',
        image:'https://res.cloudinary.com/clinnygee/image/upload/v1592182281/103986881_585404782388164_7223331908744595873_n_jexwqj.jpg',
        about: `Very similar to MyFitnessPal. After signing up you enter your biometrics, and you will receive an estimation of your TDEE.
                From there you can select a goal, whether you want to gain, lose or maintain weight.
                You can search for foods, and add them to your diary to track to kjs and macronutrients you eat.
                This uses React, MaterialUi, Node, Sequelize.
                `,
    },{
        name:'Weight Manager',
        url:'http://3.25.111.216',
        github:'https://github.com/clinnygee/weight-manager',
        title : 'Food & Calorie Tracker',
        image:'https://res.cloudinary.com/clinnygee/image/upload/v1592182281/103986881_585404782388164_7223331908744595873_n_jexwqj.jpg',
        about: `Very similar to MyFitnessPal. After signing up you enter your biometrics, and you will receive an estimation of your TDEE.
                From there you can select a goal, whether you want to gain, lose or maintain weight.
                You can search for foods, and add them to your diary to track to kjs and macronutrients you eat.
                This uses React, MaterialUi, Node, Sequelize.
                `,
    }
];

// const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

const body = document.querySelector('body');

const modalOpeners = document.querySelectorAll('.project-image-expand');

modalOpeners.forEach((button, index) => {
    button.addEventListener(touchEvent, () => {
        console.log(index);
        let modal = new Modal(index);
    })
});

class Modal{
    constructor(index){
        console.log('constructahhh')
        console.log(index);
        // the container, takes up 100vw/vh and sets the background to 0,0,0,0.4
        this.container = document.createElement('div');
        this.container.className = 'modal-container';
        this.container.addEventListener(touchEvent, (e) => {
            if(e.target !== e.currentTarget){
                return;
            }
            this.remove();
        });
        console.log(body);
        console.log(this.container);

        this.modal = document.createElement('div');
        this.modal.className = 'modal';
        this.container.appendChild(this.modal);

        this.header = document.createElement('div');
        this.header.className = 'modal-header';
        this.modal.appendChild(this.header);


        this.closeContainer = document.createElement('div');
        this.closeContainer.className = 'close-button';
        this.closeButton = document.createElement('i');
        this.closeButton.className = 'far fa-window-close';
        this.closeContainer.appendChild(this.closeButton);
        this.closeContainer.addEventListener(touchEvent, () => {this.remove()});
        this.header.appendChild(this.closeContainer);

        this.imageContainer = document.createElement('div');
        this.imageContainer.className = 'modal-image-container';

        this.image = document.createElement('img');
        this.image.className = 'modal-image';
        this.image.src = projects[index].image;

        this.imageContainer.appendChild(this.image);

        this.modal.appendChild(this.imageContainer);

        this.modalContentContainer = document.createElement('div');
        this.modalContentContainer.className = 'modal-content-container';
        this.modalContentHeader = document.createElement('div');
        this.modalContentHeader.className = 'modal-content-header';
        this.modalContentHeaderH4 = document.createElement('h4');
        this.modalContentHeaderH4.className = '';
        this.modalContentHeaderH4.textContent = projects[index].title;
        this.modalContentHeader.appendChild(this.modalContentHeaderH4);
        this.modalContent = document.createElement('p');
        this.modalContent.textContent = projects[index].about;
        this.modalContentContainer.appendChild(this.modalContentHeader);
        this.modalContentContainer.appendChild(this.modalContent);
        this.modal.appendChild(this.modalContentContainer);
        body.appendChild(this.container);
    }
    // removes the modal.
    remove(){
        console.log(this.container);
        this.container.parentNode.removeChild(this.container);
    }
};

console.log(modalOpeners);