import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="p-4" style={{ backgroundColor: '#eee' }}>
                {/*  Footer */}
                <footer className="text-center text-lg-start bg-white text-muted">
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        {/* Left */}

                        {/* Right */}
                        <div>
                            <a href="#" className="me-4 link-secondary">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="me-4 link-secondary">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="me-4 link-secondary">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="me-4 link-secondary">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="me-4 link-secondary">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="me-4 link-secondary">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        {/* Right */}
                    </section>
                    {/* Section: Social media */}

                    {/* Section: Links */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        IntrustCA
                                    </h6>
                                    <p>
                                        Kết nối chuỗi giá trị số
                                    </p>
                                </div>
                                {/* Grid column */}

                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Angular</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Vue</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Laravel</a>
                                    </p>
                                </div>
                                {/* Grid column */}

                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>
                                {/* Grid column */}

                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p>Hanoi, HN 100000, VN</p>
                                    <p>chinhnd@intrust.com.vn</p>
                                    <p>+ 84 963 493 240</p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </div>
                    </section>
                    {/* Section: Links */}

                    {/* Copyright */}
                    <div className="text-center p-4" style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.025)',
                    }}>
                        © 2023 Copyright: 
                        <a className="text-reset fw-bold" href="https://intrustca.com.vn/"> intrustca.com.vn</a>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}
            </section>
        </div>
    )
}

export default Footer