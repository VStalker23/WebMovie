import React from 'react'
import "../styles/footer.css"

export const Footer = () => {
    return (

        <footer className="page-footer font-small blue pt-4 Footer bg-secondary bg-gradient text-white rounded-5" >
            <div className="container-fluid text-center text-md-left" >
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase text-warning" style={{ fontSize: 20 }}>Movie Storm Content</h5>
                        <p className='text-warning' style={{ fontSize: 15 }}>Here you can use rows and columns to organize your footer content.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-1 mb-md-0 mb-3" style={{ fontSize: 17 }}>
                        <h5 className="text-uppercase text-warning" >Info Pages</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className='b'>Home</a></li>
                            <li><a href="/login" className='b'>Login</a></li>
                            <li><a href="/signup" className='b'>Sign Up</a></li>
                            <li><a href="/ContactForm" className='b'>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-md-1 mb-md-0 mb-3" style={{ fontSize: 17 }}>
                        <h5 className="text-uppercase text-warning" >Users Pages</h5>
                        <ul className="list-unstyled">
                            <li><a href="/adminpage" className='c'>AdminPage</a></li>
                            <li><a href="userpage" className='c'>UserPage</a></li>

                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3" style={{ fontSize: 17 }}>
                        <h5 className="text-uppercase text-warning" >Contact Us pages</h5>
                        <ul className="list-unstyled text-success">
                            <li><a href="#!" className='a'>My Email</a></li>
                            <li><a href="#!" className='a'>My Instagram</a></li>
                            <li><a href="#!" className='a'>My Facebook</a></li>
                            <li><a href="#!" className='a'>My Linkedin</a></li>
                            <li><a href="#!" className='a'>My Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3 text-warning">© 2023 Copyright:
                <a href="http://localhost:3000/" className='cr'>Movie Storm</a>
            </div>
        </footer>


    )
}
