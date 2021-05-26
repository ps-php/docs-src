import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy.svg').default,
    description: (
      <>
        Ps-PHP is a minimalistic framework, made in a non-OOP style that will make it easier for you to make simple and intermediate application.
      </>
    ),
  },
  {
    title: 'Beginner Friendly',
    Svg: require('../../static/img/beginner.svg').default,
    description: (
      <>
        We write this framework in a procedural style which means that all PHP users start from beginners can use Ps-PHP.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
