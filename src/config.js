// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/light.jpg";
import HeroDark from "./images/dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ARDev14";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am passionate about leveraging technology 💻 to create innovative solutions that enhance user experiences and drive business success 🚀. My expertise spans various programming languages and frameworks, allowing me to tackle diverse projects with confidence 💪. I thrive in collaborative environments 🤝 and enjoy learning new skills 📚 to stay updated with industry trends. I'm excited about the opportunity to connect and collaborate with like-minded individuals!"
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 2,

    skill: <Icon icon="skill-icons:remix-dark" className="display-4" />,
    name: "Remix",
  },
  {
    id: 3,
    skill: <Icon icon="devicon-plain:nodejs-wordmark" className="display-4" />,
    name: "Node js",
  },
  {
    id: 4,
    skill: <Icon icon="devicon-plain:csharp" className="display-4" />,
    name: ".NET",
  },
  {
    id: 5,
    skill: <Icon icon="ic:baseline-shopify" className="display-4" />,
    name: "Public Shopify app",
  },
  {
    id: 6,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python",
  },
  {
    id: 7,
    skill: <Icon icon="skill-icons:mysql-dark" className="display-4" />,
    name: "MySQL",
  },
  {
    id: 8,
    skill: <Icon icon="bxl:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "./../AREESHA_WASEEM_CV.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
