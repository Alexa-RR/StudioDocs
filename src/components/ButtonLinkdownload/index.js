import styles from './index.module.css';
import React from 'react';
import Link from '@docusaurus/Link';



export default function ButtonLink({title, link, filename}) {
    return (
    <div className={styles.buttons}>
        <a
        href={link}
        download={filename}
        className="button button--secondary">
        {title}
        </a>
    </div>
    )
}