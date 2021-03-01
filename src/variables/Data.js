import jpc from '../images/jpc.png'
import wakeside from '../images/wakeside.png'
import portfolio from '../images/old-portfolio.png'
import css from '../images/cssboston.png'



import {FaReact} from 'react-icons/fa'
import {SiStyledComponents, SiGatsby, SiGraphql} from 'react-icons/si'
import {AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { GrTwitter} from 'react-icons/gr'

export const data = [
  {
    date: 'Web Dev',
    description: 'Madison Haradine',
    title: 'About',
    info: 'Frontend Developer',
    image: null,
  },
  {
    date: '2019-2021',
    description: 'JPC Commercial Sewing',
    title: 'Work',
    info: "A mobile responsive website designed and developed for a client. I was the sole designer, developer and worked closely with the owner as the content writer. I also used basic Photoshop to enhance the professionalism of the photos in his portfolio.",
    image: jpc,
    link: {  
      name: 'View Live',
      linkhref: 'http://www.jpcscustom.com'
    },
    icons: [
      {
        name: 'React',
        icon: <FaReact/>
      },
      {
        name: 'Gatsby',
        icon: <SiGatsby/>
      },
      {
        name: 'GraphQL',
        icon: <SiGraphql/>
      },
      {
        name: 'Styled Components',
        icon: <SiStyledComponents/>
      },
      {
        name: 'ContentfulCMS',
        icon: <FaReact/>
      },
    ],
  },
  {
    date: '2020-2021',
    description: 'WakeSide',
    title: 'Work',
    info: "A Gatsby site I am working on for a client.  It is in the early stages of development and mobile responsiveness has not been developed yet, but is coming.  I am in charge of design and development of the entire site and will be setting up a CMS of the client's choosing using GraphQL as the querying language.",
    image: wakeside,
    link: {
      name: 'View Live',
      linkhref: 'https://reverent-montalcini-a70fee.netlify.app/'
    }
  },
  {
    date: '2019-2020',
    description: 'Portfolio',
    title: 'Work',
    info: "A mobile responsive site designed and developed using CSS Modules and React.",
    image: portfolio,
  },
  {
    date: '2019',
    description: 'CSS Art',
    title: 'Work',
    info: "     While learning CSS I decided to take on a fun side project and make a pure CSS image of my dog.",
    image: css,
    link: {
      name: 'CodePen',
      linkhref: 'https://codepen.io/madihara/pen/bGGPLBP'
    }
  },
  
]