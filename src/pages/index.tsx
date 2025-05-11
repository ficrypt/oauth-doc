import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomePageTechStackSelector from '@site/src/components/HomePageTechStackSelector';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
         <ThemedImage
            sources={{
               light: 'https://ficrypt.s3.us-east-1.amazonaws.com/branding/oauth/ficrypt-oauth-logo-black.png',
               dark: 'https://ficrypt.s3.us-east-1.amazonaws.com/branding/oauth/ficrypt-oauth-logo-white.png'
            }}
            alt="Ficrypt Oauth Logo"
            style={{width: 200, height: 200, borderRadius: 10}}
         />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Tutorial - Get Started
          </Link>
        </div>
        <HomePageTechStackSelector />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
