
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://use.fontawesome.com/b28ca47341.js"></script>
    <title>Clinton Gillespie - Web Developer</title>
    
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css' type="text/css">
    <link rel="stylesheet" type= 'text/css' href="/build/index.css">
    <script src="https://kit.fontawesome.com/e95f3572b7.js" crossorigin="anonymous"></script>
</head>
<body>
    <main id="main">
        <div class="mobile-nav">
            <div class="hamburger">
                <h1><i class="fas fa-bars"></i></h1>
            </div>
            
        </div>
       
        <header class="header">
            <h1><span class='heading-white'>Hello, I'm </span><span class="name">Clinton Gillespie</span><span class='heading-white'>.</span></h1>
            <h1><span class='heading-white'>I'm a Developer from Brisbane</span></h1>
            <div class="button">
                <button id='about-button'>
                    Check me out!
                </button>
            </div>
            <canvas style='position: absolute'></canvas>
            
            
        </header>
        <section class='content'>
            <nav class='nav'>
                <div class="nav-wrapper">
                    <div class='page-link active' >Home</div>
                    <div class='page-link' >About</div>
                    <div class='page-link' >Projects</div>
                    <div class='page-link' >Contact</div>

                </div>
            </nav>
            <section class="about">
                <div class='container'>
                    <div class="heading"><h1>About & Skills</h1></div>
                    <div class="cards">
                       
                        <div class="card">
                            <div class="icon-container">
                                <i class="fab fa-js-square"></i>
                                
                                
                            </div>
                            <div class="text-container">
                                <h1>Technologies</h1>
                                <p>ES6, HTML, CSS, PHP, Linux, SQL</p>
                            </div>

                        </div>
                        <div class="card">
                            
                                <div class="icon-container">
                                    <i class="fas fa-book"></i>
                                </div>
                                <div class="text-container">
                                    <h1>Frameworks & Libraries</h1>
                                    <p>React, Node, Express, Material UI, Bootstrap, Sequelize</p>
                                </div>
                            
                        </div>
                        <div class="card">
                            <div class="icon-container">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <div class="text-container">
                                <h1>Tools</h1>
                                <p>NPM, SCSS, Webpack, Babel, AWS S3, EC2, RDS</p>
                            </div>
                        </div>
                        <div class="personal">
                            <div class="avatar">
                            <h1>Who Am I?</h1>
                                <img src="https://res.cloudinary.com/clinnygee/image/upload/v1594015157/mugshot_b1koep.jpg" alt="Clinton Gillespie" class="user">
                                <p>I'm Clinton Gillespie (@clinnygee), 
                                    I'm a web developer based in brisbane. 
                                    I focus on creating dynamic UIs using React, and Backends using Node or Laravel. 
                                    I have been developing for two years, and I hope to work together someday.
                                </p>
                            </div>
                                                            
                                
                            
                        </div>
                    </div>
                    
                </div>

            </section>
            <section class="projects">
                <div class="container">
                    <div class="heading"><h1>Projects</h1></div>
                    <p>Here's some things that I have made that are open source,
                        you can view them in the browser, or check out the code on my <a href='https://github.com/clinnygee'>Github!</a>
                    </p>
                    <p>    
                        Mostly i use <a href='https://reactjs.org'>React</a>, on the server I use <a href='https://nodejs.org'>Node</a> and <a href='https://sequelize.org'>Sequelize</a> for the database connection.
                        <a href='https://clintongillespie.dev'>This</a> page (the one you are on now) is made with vanilla js and served from an nginx/PHP server.
                    </p>
                    <div class='projects-box'>
                        <?php foreach($projects as $key => $project) : ?>
                            <div class='project'>
                                <div class='project-image-container'>
                                    <img src=<?=$project['image'] ?> class='project-image'>
                                    </img>
                                    <div class='project-image-expand'>
                                        <i class="fas fa-expand-arrows-alt"></i>
                                    </div>
                                </div>
                                <div class='project-title-container'>
                                    <span class='project-number'>No. <?= $key?></span>
                                    <h4 class='project-title'><?=$project['title'] ?></h4>
                                    <div style='font-size:1.2em;'>
                                    <a class='projects-link' href=<?=$project['github']?>>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a class='projects-link' href=<?=$project['url'] ?>>
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                    
                                    </div>
                                </div>
                            </div>
                        <?php endforeach ?>
                    </div>
                    </div>
                </div>
                
            </section>
            <section class="contact">
                <div class="triangle"></div>
                <div class="container">

                    <div class="heading"><h1>Contact</h1></div>
                        <form 
                            id='my-form'
                            action="https://formspree.io/xzbrjyjp"
                            method="POST"
                            class="form"
                        >
                            
                                <input placeholder="Your Name:" type="text" name="name" required>
                            
                            
                                <input placeholder="Your Email:" type="text" name="_replyto">
                            
                            
                                <input placeholder='Message' type="text" name="message">
                            
                            <input id='my-form-button' type="submit" value="Send">
                            <p id='my-form-status'></p>
                        </form>
                    
                </div>
            </section>
        </section>

        
        <footer>
            <div class='container'>
                <a href="https://www.linkedin.com/in/clinton-gillespie-128624175/">
                    <div class="socials-button">
                        <i class='fab fa-linkedin'></i>
                    </div>
                </a>
                <a href="https://github.com/clinnygee">
                    <div class="socials-button">
                        <i class="fab fa-github-square"></i>
                    </div>
                </a>
                
                <div class="socials-button">
                    <i class="fab fa-twitter-square"></i>
                </div>
                <p>Clinton Gillespie - @Clinnygee</p>
                
            </div>
        </footer>

    </main>




    <script src="./index.js"></script>
    <script src='./bubbles.js'></script>
    <script src='./modal.js'></script>    
</body>
</html>