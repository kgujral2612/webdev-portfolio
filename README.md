# Portfolio
This is the final project submission for CS 463/563 - Intro to Web Development


> https://kgujral2612.github.io/webdev-portfolio/

## Quick Start

**Clone or Download**
Use **Git** to clone this project by using the below command: 
```
git clone https://github.com/kgujral2612/webdev-portfolio.git
```
Alternatively, you can also download a zip file of this repository.

**Install an IDE**
Visual studio code, Sublime or any IDE can be used to make changes to the code and can be used to commit, push or pull changes.

**Running**
You can use live server if you're using Visual Studio Code, or you can just simply open the index.html file in the web browser of your choice.

## Code Structure
    .
    ├── assets                  # images used in the project 
        ├── industry            # images used in the industry section
        ├── project             # images used in the projects section
        ├── skills              # images used in the skills section
        ├── favicon.png         # favicon for the project
        ├── logo-k.png          # logo for the project
        ├── mugshot.png         # mugshot image used in the about section
    ├── css                     # CSS files 
        ├── styles.css          # main styles for all project elements 
        ├── swiper.css          # styles for carousel in the projects section
        ├── typing-effect.css   # styles for typing effect in the home section 
    ├── js                      # JS files
        ├── script.js           # main script (lazy loading logic, navbar interactions, cursor animations, and sending email)
        ├── swiper.js           # script for carousel in the projects section
        ├── typing-effect.js    # script for typing effect in the home section 
    ├── .gitignore              # git ignore file
    ├── index.html              # source HTML file
    └── README.md               # readme


## Website Functionality
This is a SPA(Single Page Application) built using HTML, CSS, and JS.

The app has 6 major sections:
1) Home: includes buttons to jump to the contact section and to download resume and a typing effect using javascript
2) About: contains text and an mugshot image
3) Industry Experience: contains an image of dell.com deals pages (that I worked on) along with a description of my contributions during my time at Dell
4) Skill Set: Contains logos of all my skills
5) Work: Contains a carousel created using swiper.js API. Each card in the carousel contains an image and description of one project. When you click on the carousel buttons, you will hear a click sound. The carousel is reinitialized everytime the window is resized.
6) Contact: Sends an email to my personal email (kgujral@pdx.edu) using smtp js library

**Navbar:**
Navbar is in form of a hamburger menu on the top right. As the user scrolls down, it vanishes. when the user scrolls up, it becomes sticky again. 
The menu items on the navbar are clickable and can be used to jump to specific sections of the page.

**Lazy Loading**
All the images and the carousel are lazy loaded using intersection observer API. 

**Cursor Animation**
The cursor is animated by creating 2 HTML elements identified by the classes "cursor" and "inner-cursor" respectively. Two elements help create the two concentric circles in the cursor. 

**Curved SVG Dividers**
Each section is separated by an aesthetic yet light curved divider created using shapedivider.app.

**Reference material for Swiper API:**
https://swiperjs.com/swiper-api

**Reference material for SMTP JS:**
https://smtpjs.com/
https://www.youtube.com/watch?v=MV-Aqkjju64

**Reference material for Intersection Observer API:**
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

**Reference material for Curved Divider**
https://www.shapedivider.app/
