import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: "https://ficrypt.s3.us-east-1.amazonaws.com/images/oauth/easy-to-use-image.png",
    description: (
      <>
         Ficrypt OAuth is designed for developers.
         With just a few lines of code, you can integrate secure authentication into your app—no complex setup.
         Clear docs, copy-paste examples, and instant testing make getting started simple.
      </>
    ),
  },
  {
    title: 'Fully White Label',
    image: "https://ficrypt.s3.us-east-1.amazonaws.com/images/oauth/oauth-white-label-image.png",
    description: (
      <>
         Make Ficrypt your own—customize logos, colors, domains, and email templates to match your brand and deliver a seamless authentication experience to your users.
      </>
    ),
  },
  {
    title: 'Flexible Integration',
    image: "https://ficrypt.s3.us-east-1.amazonaws.com/images/oauth/flexible-integration.png",
    description: (
      <>
         Whether you’re building in Go, Node.js, Python, or React, Ficrypt provides clean, well-documented APIs and SDKs to integrate authentication seamlessly into any stack.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} role="img" style={{width: 150, height: 150, borderRadius: 10}} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
