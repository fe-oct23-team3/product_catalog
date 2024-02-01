import { Link } from 'react-router-dom';
import styles from './ContactsPage.module.scss';

interface TeamMember {
  name: string,
  linkedIn: string,
  gmail: string,
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Krasnoholovenko Dmytro',
    linkedIn: 'https://www.linkedin.com/in/dmytro-krasnoholovenko-b9a42a256/',
    gmail: 'dmytrokrasnoholovenko@gmail.com',
    description:
    'Versatile Full-Stack Developer based in Kyiv with'
    + 'a graphic design background. Proficient'
    + 'in web development using React,'
    + 'TypeScript, and various front-end tools.',
  },
  {
    name: 'Nikolaienko Kseniia',
    linkedIn: 'https://www.linkedin.com/in/kseniia-nikolaienko/',
    gmail: 'kseni.nikolaienko@gmail.com',
    description: 'A full-stack developer well-versed in JS/TS/HTML/CSS, React,'
     + ' and Node.js. Academic background includes studying English philology,'
     + ' also good in testing your product.'
     + ' She knows how to find any mistakes.',
  },
  {
    name: 'Sobakar Yuriy',
    linkedIn: '',
    gmail: '',
    description: 'Former DJ turned Full-Stack Developer with a diverse'
    + ' skill set. Proficient in HTML, CSS, and JavaScript for building'
    + ' dynamic and interactive web applications. Specializes in '
    + 'front-end development with React.',
  },
  {
    name: 'Hakk Mykhailo',
    linkedIn: 'https://www.linkedin.com/in/mykhailo-hakk/',
    gmail: 'mykhailohakk@gmail.com',
    description: 'Versatile Full-Stack Developer with a solid foundation'
    + 'in system engineering, offering a unique blend of technical '
    + 'expertise and creativity. Proficient in JavaScript'
    + ' React.js, Node.js, and SQL.',
  },
  {
    name: 'Trots Anatoliy',
    linkedIn: 'https://www.linkedin.com/in/anatoliy-trots/',
    gmail: 'trots.anatoliy@gmail.com',
    description: 'Someone who loves to code. His core skills include HTML/CSS,'
     + 'JavaScript ES6+, React JS, Redux, and He is also in'
     + ' the process of studying Node.js.',
  },
  {
    name: 'Shaparenko Viktor',
    linkedIn: 'https://www.linkedin.com/in/viktor-shaparenko-589a48250/',
    gmail: 'viktorshaparenko.work@gmail.com',
    description: 'Full-stack developer specializing in TypeScript,'
    + 'React, JavaScript, and Node.js.Find '
     + 'joy in tackling diverse challenges and take pride in the work process.',
  },
];

export const ContactPage = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__header}>LastSixSamurais</h2>
      <div className={styles.contacts__container}>
        {teamMembers.map(({
          name,
          linkedIn,
          gmail,
          description,
        }) => (
          <div className={styles.contacts__item}>
            <div>
              <p className={styles.contacts__name}>{name}</p>
              <p className={styles.contacts__description}>{description}</p>
            </div>
            <div className={styles.contacts__link}>
              <Link
                className={styles['contacts__link--item']}
                target="_blank"
                to={linkedIn}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16
                    32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366
                    0 16 0ZM7.68101
                    13.252H11.307V24.1464H7.68101V13.252ZM11.5479
                    9.8818C11.5244 8.8136 10.7605 8 9.5201 8C8.27969
                    8 7.46875 8.8136 7.46875 9.8818C7.46875 10.9279 8.25572
                    11.7649 9.47304 11.7649H9.49621C10.7605 11.7649 11.5479
                    10.9279 11.5479 9.8818ZM20.2088 12.9961C22.5948 12.9961
                    24.3836 14.5535 24.3836 17.8998L24.3834
                    24.1464H20.7576V18.3178C20.7576 16.8538 20.2329 15.8548
                    18.9203 15.8548C17.9186 15.8548 17.3219 16.5283 17.0599
                    17.1788C16.964 17.4119 16.9404 17.7367 16.9404
                    18.0623V24.1467H13.3141C13.3141 24.1467 13.3619
                    14.2745 13.3141 13.2522H16.9404V14.7953C17.4217
                    14.0535 18.2836 12.9961 20.2088 12.9961Z"
                    fill="#313237"
                  />
                </svg>
              </Link>
              <Link
                className={styles['contacts__link--item']}
                type="mail"
                to={`mailto:${gmail}`}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5
                    23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5
                    22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5
                    10V7.5L15 13.75L25 7.5V10Z"
                    fill="#313237"
                  />
                </svg>
              </Link>

            </div>
          </div>
        ))}
      </div>
      <div className={styles['contacts__hire-us']}>
        <p
          className={styles['contacts__hire-us--message']}
        >
          Feel free to hire us:)
        </p>
      </div>
    </div>
  );
};
