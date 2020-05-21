import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'

const name = 'Doğukan Öksüz'
export const siteTitle = 'Next.js örnek websitesi'

export default function Layout({ children, home })
{
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Testing out Next.js head module"
                />
                <meta
                    property="og:image"
                    content="https://avatars2.githubusercontent.com/u/32539161?s=400&u=d12cd9ec655e098d040c96a5ad9ad3bf79c52e2c&v=4"
                />
                <meta
                    name="og:title"
                    content={siteTitle}
                />
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="https://avatars2.githubusercontent.com/u/32539161?s=400&u=d12cd9ec655e098d040c96a5ad9ad3bf79c52e2c&v=4"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name} />

                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img src="https://avatars2.githubusercontent.com/u/32539161?s=400&u=d12cd9ec655e098d040c96a5ad9ad3bf79c52e2c&v=4" alt={name}
                                className={`${styles.headerImage} ${utilStyles.borderCircle}`} />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>&laquo; Anasayfaya geri dön</a>
                    </Link>
                </div>
            )}
        </div>
    )
}


