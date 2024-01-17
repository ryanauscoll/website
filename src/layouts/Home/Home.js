
import gamestackTexture2Large from 'assets/securescape1.jpg';
import gamestackTexture2Placeholder from 'assets/securescape1.jpg';
import gamestackTexture2 from 'assets/securescape1.jpg';
import gamestackTextureLarge from 'assets/securescape1.jpg';
import gamestackTexturePlaceholder from 'assets/securescape1.jpg';
import gamestackTexture from 'assets/securescape2.jpg';
import sliceTextureLarge from 'assets/desktopconfig.png';
import sliceTexturePlaceholder from 'assets/desktopconfig.png';
import sliceTexture from 'assets/desktopconfig.png';
import sprTextureLarge from 'assets/waterassist.jpeg';
import sprTexturePlaceholder from 'assets/waterassist.jpeg';
import sprTexture from 'assets/waterassist.jpeg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Cyber Security Researcher', 'Musician','Private Pilot'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Engineer"
        description="Personal website of Ryan Collingham — an engineering student with interests in radio frequency, cybersecurity and AI."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}

        title="Plant Moisture Assistant"
        description="A project using a Nucleo-64 microcontroller that displays the percentage of soil moisture in a plant, indicating to the user when to water their plant"
        buttonText="View repository"
        buttonLink="https://github.com/icekeys/water-assistant"

        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Securescape"
        description="Securescape is an ongoing cyber security blog started by my friends and I to educate beginners in the field"
        buttonText="View site"
        buttonLink="https://blog.securescape.cc/about-us/welcome-to-securescape"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Personal Dotfiles"
        description="My personal MacOS configurations"
        buttonText="View repository"
        buttonLink="https://github.com/icekeys/dotfiles"
        model={{
          type: 'laptop',
          alt: 'My desktop configuration',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
