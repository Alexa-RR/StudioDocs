import styles from './index.module.css';
import React from 'react';
import Link from '@docusaurus/Link';



export default function ButtonLink({title, link}) {
    return (
    <div className={styles.buttons}>
        <Link
        className="button button--secondary"
        to={link}>
        {title}
        </Link>
    </div>
    )
}