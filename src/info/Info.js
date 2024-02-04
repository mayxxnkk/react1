import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mayank",
    lastName: "Singla",
    initials: "am", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Freelancer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Freelancer"
        },
        {
            emoji: "📧",
            text: "mynksingla@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/mayxxnkk",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/mayxxnkk",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mayank-singla-957476285/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Mayxxnkk",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Mayank Singla. I'm a Freelancer. I build and fix pipeline but I am not a PLUMBER . I am Software engineer. I am doing engineering from the National Institute of Technology, Jalandhar in Information Technology, I enjoy Playing Football , & to Code is My Favourite Thing , and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['JavaScript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3','Jenkins','terraform','Kubernates','Docker ' ],
            exposedTo: ['nodejs', 'Python', 'Linux','Burp Suite','NIST','ISO27000','CIS Top 20 Controls',]
        }
    ,
    hobbies: [
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'travel',
            emoji: '✈️'
        },
        {
            label: 'football',
            emoji: '⚽'
        },
        {
            label: 'food',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "#", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/aayanmtn", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "#",
            source: "#",
            image: mock2
        },
        {
            title: "Project 3",
            live: "#",
            source: "#",
            image: mock3
        },
        {
            title: "Project 4",
            live: "#",
            source: "#",
            image: mock4
        },
        {
            title: "Project 5",
            live: "#",
            source: "#",
            image: mock5
        }
    ]
}
