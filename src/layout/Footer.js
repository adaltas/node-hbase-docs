import React, { Component } from 'react'
import { Link } from 'gatsby'

class Footer extends Component {
  styles = {
    root: {
      maxWidth: 800,
      display: 'flex',
      flexWrap: 'wrap',
      borderTop: '1rem solid #fff',
      paddingBottom: '1rem',
      '@media (max-width: 960px)': {
        margin: '0 1rem',
      },
      '@media (min-width: 960px)': {
        margin: '0 2rem 0 15%',
        textAlign: 'justify',
      },
      '& h1': {
        margin: '1rem 0 .5rem 0',
        color: '#000',
        fontFamily: 'Arvo sans-serif',
        fontWeight: 'normal',
        fontSize: '1.4rem',
        textAlign: 'left',
      },
      '& ul, & p': {
        margin: '0 0 0 0',
      },
      '& li': {
        margin: 0,
        textIndent: 0,
        listStyleType: 'none',
      },
      '& a': {
        color: 'hsla(0,0%,0%,0.8)',
        ':hover': {
          color: '#34BF1C',
        },
      },
      '& p a': {
        textDecoration: 'underline',
      },
    },
    navigate: {
      // width: '25%',
      flex: '1',
      '@media (max-width: 960px)': {
        // width: '50%',
        flex: '0 0 50%',
      },
    },
    contribute: {
      // width: '25%',
      flex: '1',
      '@media (max-width: 960px)': {
        // width: '50%',
        flex: '0 0 50%',
      },
    },
    about: {
      // width: '100%',
      flex: '2',
      '@media (max-width: 960px)': {
        // width: '100%',
        flex: '0 0 100%',
      },
    },
  }
  render() {
    const { styles } = this
    return (
      <footer css={styles.root}>
        <nav css={styles.navigate}>
          <h1>Navigate</h1>
          <ul>
            <li>
              <Link to="/learn/quickstart/">Getting Started</Link>
            </li>
            <li>
              <Link to="/learn/changelog/">Changelog</Link>
            </li>
            <li>
              <Link to="/learn/license/">License</Link>
            </li>
          </ul>
        </nav>
        <nav css={styles.contribute}>
          <h1>Contribute</h1>
          <ul>
            <li>
              <Link to="/learn/contribute/">How to contribute</Link>
            </li>
            <li>
              <a href="https://github.com/adaltas/node-hbase">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://github.com/adaltas/node-hbase/issues">
                Issue Tracker
              </a>
            </li>
          </ul>
        </nav>
        <div css={styles.about}>
          <h1>About</h1>
          <p>
            Node.js HBase is an open source product hosted on{' '}
            <a href="https://www.github.com">
              GitHub
            </a>{' '}
            and developed by{' '}
            <a href="http://www.adaltas.com">
              Adaltas
            </a>
            .
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
