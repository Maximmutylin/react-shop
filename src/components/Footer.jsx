import React from 'react'

const Footer = () => {
    return (
        <footer className="teal darken-2 page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/Maximmutylin?tab=repositories">More Links</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer