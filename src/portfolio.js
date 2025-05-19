const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/portfolio',
  title: 'KM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Malathi',
  role: 'Looking for an opportunity',
  description:
    'Aspiring Computer Science Engineer with a strong foundation in programming and web development. Eager to apply technical knowledge and problem-solving skills in a dynamic environment. Seeking an entry-level position where I can contribute to impactful projects, grow with emerging technologies and continuously develop both professionally and personally.',
  resume: 'https://drive.google.com/file/d/1CpNLiZBg1o00rwycDk-l_ycxZv8TCX1B/view?usp=drivesdk',
  social: {
    linkedin: 'https://linkedin.com/in/kondasanimalathi',
    github: 'https://github.com/kondasanimalathi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Federated Learning and Explainable AI:\nA Transparent and Secure Approach to Fraud Detection',
    description: [
      'Improves financial fraud detection using Explainable AI (XAI) and Federated Learning (FL).',
      'Enhances transparency and protects privacy in financial systems.',
      'Compares traditional algorithms with newer methods.',
      'Develops a robust, interpretable, and confidential detection system.',
    ],
    // stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'Tableau',
  'SQL',
  'Git',
  'GitHub',
  'VS Code',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'malathikondasani1813@gmail.com',
}

export { header, about, projects, skills, contact }
