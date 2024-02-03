import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{"The Community RR Studio Manual"}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  var pickimage = '/img/BlueNest_ad_long_meme.svg'
   function pick_image() {
    console.log("picking image");
    var x = Math.random(); 
    if(x < 0.2) {
        console.log('a');
        pickimage = "/img/BlueNest_ad_long_meme.svg"
    } else {
        console.log('b');
        pickimage = "/img/BlueNest_ad_long_serious.svg"
    }
  };
  pick_image()
  return (
    <Layout
      title={`Documentation for Rec Room Studio`}
      description="Hello From Alexa <3">
      <HomepageHeader />
      <main>
      <a href="https://bluenest.it" rel="noopener noreferrer" class='divbluenest' >
        <img src={pickimage} class='bluenestimage' id='bluenestbiglogo'/>
      </a>
    

      </main>
    </Layout>
  );
}

// <HomepageFeatures />


