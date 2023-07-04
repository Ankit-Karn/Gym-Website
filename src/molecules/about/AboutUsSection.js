import React from 'react';
import styles from './AboutUsSection.module.css';


const AboutUsSection = () => {
  const handleLearnMoreClick = () => {
    alert('Clicked from the About Us section');
  };

  return (
    <div>
    <section className={styles.aboutSection} id='#about'>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <iframe width="100%" height="100%"  src='https://www.youtube.com/embed/Im5wJLdudDg' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
   
        <div className={styles.textContainer}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius, ex ut tincidunt eleifend, elit mi vestibulum odio, nec
            fringilla nisi mauris in purus. Suspendisse potenti. Mauris nec
            ipsum ac enim gravida dictum nec et diam. Fusce congue scelerisque
            velit, in venenatis sem auctor in.
          </p>
          <button onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>
    </section>



    <section className={styles.chooseUsSection}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2>Why Choose Us?</h2>
          <h3>Consultation with Expert</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius, ex ut tincidunt eleifend, elit mi vestibulum odio, nec
            fringilla nisi mauris in purus.
          </p>
          <h3>Best Workout Facilities</h3>
          <p>
            Suspendisse potenti. Mauris nec ipsum ac enim gravida dictum nec et
            diam. Fusce congue scelerisque velit, in venenatis sem auctor in.
          </p>
        </div>
        <div className={styles.imageContainer}>
        <iframe width="100%" height="100%"  src='https://www.youtube.com/embed/Im5wJLdudDg' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    </div>
  );
};

export default AboutUsSection;
