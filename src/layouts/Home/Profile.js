import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/ryancoll.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/ryancoll.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there, I'm Ryan." start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    I'm an embedded software engineer based in the United States. My world revolves around the domains of radio frequency, cybersecurity, and artificial intelligence. 
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    When I'm not immersed in the realm of embedded software, you'll often find me diving into a variety of other interests that keep my life exciting. 
    Electronics have always been a fascination, and tinkering with them is one of my favorite pastimes. 
    Additionally, I find immense joy in creating music, sim racing and flying planes. 
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Curiosity and a thirst for fresh challenges drive me, and I'm always exploring new projects.
     Whether it's collaborating on innovative ideas or simply exchanging thoughts, I'm all ears! 
     If you're curious about the tools and software I use, take a peek at my <Link href="/uses">uses page</Link>. 
    Feel free to drop me a line anytime – I'm eager to embark on new adventures and bring creative visions to life.
    </Text>
    

  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="mailto:admin@ryancollingham.com"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of my school's computing building."
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
