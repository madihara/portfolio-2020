import jpc from '../images/jpc.png'



import {FaReact} from 'react-icons/fa'
import {SiStyledComponents, SiGatsby, SiGraphql} from 'react-icons/si'
import {AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { GrTwitter} from 'react-icons/gr'

export const data = [
  {
    date: 'Web Dev',
    description: 'Madison Haradine',
    title: 'About',
    info: `I'm a passionate Front End Developer and lover of React. I have experience using modern HTML, CSS, and JavaScript to create responsive, user focused websites.<br></br><br></br>

    I also have a big desire to extend my knowledge to the backend and have dabbled with Nodejs and Express. I am particularly fond of GraphQL, interested in data visualization, and eager to learn about cloud computing.<br></br><br></br>
    
    When I'm not building webpages, I love to spend time with my dog, stay active boxing and playing in Co-Ed sports leagues, and improve my cooking and baking skills. I'm often spotted surfing, paddleboarding, or otherwise enjoying the water and the outdoors.<br></br><br></br>`,
    image: null,
    icons: [
      {
        name: 'Gatsby',
        icon: <SiGatsby/>
      }
    ]
  },
  {
    date: 'Web Dev',
    description: 'JPC',
    title: 'About',
    info: "I'm a passionate Front End Developer and lover of React. I have experience using modern HTML, CSS, and JavaScript to create responsive, user focused websites.",
    image: jpc
  },
  {
    date: '444v',
    description: 'WakeSide',
    title: 'About',
    info: "I'm a passionate Front End Developer and lover of React. I have experience using modern HTML, CSS, and JavaScript to create responsive, user focused websites."
  },
  {
    date: '111',
    description: 'Portfolio',
    title: 'About',
    info: "I'm a passionate Front End Developer and lover of React. I have experience using modern HTML, CSS, and JavaScript to create responsive, user focused websites."
  }
]