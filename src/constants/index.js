import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  
  discordBlack,
  facebook,
  
  file02,
  
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  
  
  plusSquare,
  
  
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,

  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "IDS",
    url: "#IDS_Home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Timeline",
    url: "#timeline",
  },
  {
    id: "3",
    title: "FAQs",
    url: "#faq",
  },

  {
    id: "5",
    title: "Register",
    url: "#Register",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Innovative Challenges",
  "Creative Collaboration",
  "Expert Interaction",
  "Nationwide Platform",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Build Strong Teams",
    text: "Collaborate with talented individuals and form dynamic teams to tackle exciting challenges.",
    date: "Building Team Connections",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: " Create Impactful Projects",
    text: "Turn your innovative ideas into real-world solutions and showcase your technical expertise.",
    date: "Creating Innovative Projects",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Gain Hands-On Experience",
    text: "Work with the latest technologies and tools to enhance your skills and problem-solving abilities.",
    date: "Upskilling",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Expand Your Network",
    text: "Connect with peers, mentors, and industry leaders to create lasting professional relationships.",
    date: "Networking",
    status: "progress",
    imageUrl: roadmap4,
  },
];




export const benefits = [
  {
    id: "0",
    title: "How Do I Register For CodeBizz?",
    text: "Click on any 'Register Now' button on the website.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "What is the participation fee?",
    text: "Just some enthusiasm. We don't charge any money!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "What if I don't have a team or idea?",
    text: "You are still welcome to apply for the qualification round. If you can innovate or just want to have a fun weekend, you are most welcome.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Who can participate?",
    text: "Everyone from VNIT is welcome to apply for the qualification round..",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "When and how will the teams be shortlisted?",
    text: "Teams will be selected for consideration based on the responses provided in the questionnaires and other established criteria.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Why should I participate in CodeBizz?",
    text: "You will be eligible to participate in the nationwide hackathon scheduled for the month of April, with the potential to secure cash prizes in the event of victory. Otherwise, you will always get an excellent opportunity to network with like-minded people and learn many things.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
