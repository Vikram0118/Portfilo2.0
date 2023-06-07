import {
    css,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    tailwind,
    threejs,
    typescript,

    awsccp,
    awsssa,

    peerxp,
    aero,

    github,
    linkedin

} from '../assets'

const technologiesAtWork = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];

  const technologiesForFun = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    }
  ];

const certifications = [
  {
    id : 'awsssa',
    name : 'AWS Solution Architect Associate',
    percentage : '89',
    icon : awsssa,
    des : 'Got the ability to design architectures that are secure, resilient, high-performing, and cost-optimized using AWS services'
  },
  {
    id : 'awsccp',
    name : 'AWS Cloud Particitioner',
    percentage : '93',
    icon : awsccp,
    des : 'Got a deep understanding of AWS Cloud concepts, Security and compliance within the AWS Cloudand economics of the AWS Cloud'
  }
]

const experienece = [
  {
    id:'aero',
    name : 'Aerobiosys Innovations',
    role : 'Backend Engineering Intern',
    icon : aero,
    des : 'Worked in the developemnet of an ERP'
  },
  {
    id:'peerxp',
    name : 'PeerXP Technologies',
    role : 'Frontend Developer Intern',
    icon : peerxp,
    des : 'Worked in the developmenyt of a custom React component library'
  }
]

const socialLinks = [
  {
    name : 'github',
    icon : github
  },
  {
    name : 'linkedin',
    icon : linkedin
  },
]

export {
  technologiesAtWork,
  technologiesForFun,
  certifications,
  experienece,
  socialLinks
}