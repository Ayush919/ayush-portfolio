import React, {useEffect, useState} from "react";
import "./style.css";
import '../../css/fonts.css'
import '../../css/base.css'
import '../../css/main.css'
import '../../css/vendor.css'
import {introdata,} from "../../../content_option";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';


export const About = () => {
    const [loading, setLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu handler
    const handleToggle = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Cleanup the timer when component unmounts
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        console.log("isMenuOpen:", isMenuOpen)
    }, [isMenuOpen])

    return (
        <>
            {loading ? (
                    <div id="preloader">
                        <div id="loader"></div>
                    </div>
                ) :
                <div>
                    <section>
                        <header>
                            <div className="row">

                                <div className="top-bar">
                                    <a className={`menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} href="#"
                                       onClick={handleToggle}>
                                        <span>Menu</span>
                                    </a>

                                    <div className="logo">
                                        <div href="#"
                                             style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>MENU
                                        </div>
                                    </div>

                                    <nav id="main-nav-wrap" className={isMenuOpen ? 'open' : 'closed'}>
                                        {isMenuOpen && <ul className="main-navigation">
                                            <li className="current">
                                                <a className="smoothScroll" href="#intro" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#about" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#resume" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Experience
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#portfolio" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Projects
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#services" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a className="smoothScroll" href="#contact" title=""
                                                   onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>}
                                    </nav>
                                </div>

                            </div>
                        </header>
                        <section id="intro">

                            <div className="intro-overlay"></div>

                            <div className="intro-content">
                                <div className="row">
                                    <div className="col-twelve">
                                        <h1>I'm Ayush Mathur</h1>
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    introdata.animated.first,
                                                    introdata.animated.second,
                                                    introdata.animated.third,
                                                    introdata.animated.forth,
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                deleteSpeed: 10,
                                            }}
                                        />
                                        <br/>
                                        <p className="intro-position">
                                            <span>Full Stack Developer</span>
                                        </p>

                                        <a className="button stroke smoothScroll" href="#about" title="">More About
                                            Me</a>

                                    </div>

                                </div>
                            </div>

                            <ul className="intro-social">
                                <li><a href="https://www.linkedin.com/in/ayush-mathur-658428197/"
                                       target={"_blank"} rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                </li>
                                <li><a href="https://www.hackerrank.com/profile/ayushmathur919"
                                       target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faHackerrank} /></a>
                                </li>
                                <li><a href="https://leetcode.com/u/ayushmathur919/"
                                       target={"_blank"} rel="noreferrer"><i className="fa fa-code"></i></a>
                                </li>
                            </ul>

                        </section>


                        <section id="about">

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>About</h5>
                                    <h1>Let me introduce myself.</h1>

                                    <div className="intro-info">
                                        <div className="profile-image">
                                            <img src="/images/profile-pic.jpg" alt="Profile Picture"/>
                                        </div>

                                        <div className="profile-text">
                                            <p className="lead">{introdata.description}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="row about-content">

                                <div className="col-six tab-full">

                                <h3>Profile</h3>

                                    <ul className="info-list">
                                        <li>
                                            <strong>Full Name:</strong>
                                            <span>Ayush Mathur</span>
                                        </li>
                                        <li>
                                            <strong>Birth Date:</strong>
                                            <span>December 02, 2000</span>
                                        </li>
                                        <li>
                                            <strong>Job:</strong>
                                            <span>Full Stack Developer</span>
                                        </li>
                                        <li>
                                            <strong>Website:</strong>
                                            <span>ayush-portfolio-ayush919s-projects.vercel.app/</span>
                                        </li>
                                        <li>
                                            <strong>Email:</strong>
                                            <span>ayushmathur919@gmail.com {"\n"}<br/> </span>
                                        </li>

                                    </ul>

                                </div>

                                <div className="col-six tab-full">

                                    <h3>Skills</h3>

                                    <ul className="skill-bars">
                                        <li>
                                            <div className="progress percent90"><span>90%</span></div>
                                            <strong>HTML5</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent85"><span>85%</span></div>
                                            <strong>CSS3</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent70"><span>70%</span></div>
                                            <strong>Bootstrap</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>React</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>NextJS</strong>
                                        </li>

                                        <li>
                                            <div className="progress percent75"><span>75%</span></div>
                                            <strong>Typescript</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>React Native</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>NodeJS</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>ExpressJS</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>Prisma ORM</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>80%</span></div>
                                            <strong>Postgres</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent80"><span>70%</span></div>
                                            <strong>MongoDB</strong>
                                        </li>
                                        <li>
                                            <div className="progress percent90"><span>90%</span></div>
                                            <strong>Adobe WorkFront</strong>
                                        </li>


                                    </ul>

                                </div>

                            </div>

                            <div className="row button-section">
                                <div className="col-twelve">
                                    <a href="#contact" title="Hire Me" className="button stroke smoothScroll">Hire
                                        Me</a>
                                    <a href="/Ayush_Mathur.pdf" download="Ayush_Mathur_Resume.pdf" title="Download CV"
                                       className="button button-primary">Download CV</a>
                                </div>
                            </div>

                        </section>
                        <section id="resume" className="grey-section">

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>Experience</h5>
                                    <h1>More of my credentials.</h1>

                                    <p className="lead">{introdata.shortDescription}</p>

                                </div>
                            </div>

                            <div className="row resume-timeline">

                                <div className="col-twelve resume-header">

                                    <h2>Work Experience</h2>

                                </div>
                                <div className="col-twelve">

                                    <div className="timeline-wrap">

                                        <div className="timeline-block">

                                            <div className="timeline-ico">
                                                <i className="fa fa-graduation-cap"></i>
                                            </div>

                                            <div className="timeline-header">
                                                <h3>Full Stack Developer</h3>
                                                <p>June 2022 - Present</p>
                                            </div>

                                            <div className="timeline-content">
                                                <h4>Responsibilities</h4>

                                                <p style={{color: "black"}}
                                                   dangerouslySetInnerHTML={{__html: introdata.experience}}/>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="row resume-timeline">

                                <div className="col-twelve resume-header">

                                    <h2>Education</h2>

                                </div>

                                <div className="col-twelve">

                                    <div className="timeline-wrap">
                                        <div className="timeline-block">

                                            <div className="timeline-ico">
                                                <i className="fa fa-briefcase"></i>
                                            </div>

                                            <div className="timeline-header">
                                                <h3>Bachelor Degree</h3>
                                                <p>July 2018 - May 2022</p>
                                            </div>

                                            <div className="timeline-content">
                                                <h4>B. Tech in Information Technology</h4>
                                                <p style={{color: "black"}}>AP J Abdul Kalam University, B. N. College
                                                    of Engineering and Technology
                                                    Graduated with an 8.3 CGPA, acquiring a strong foundation in
                                                    software development, database management, and IT systems.</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>
                        <section id="portfolio" className="portfolio-section">

                            <div className="intro">
                                <h5>PROJECTS</h5>
                                <h1>Check Out Some of My Works.</h1>
                                <p className="lead">{introdata.myWork}</p>
                            </div>

                            <div className="portfolio-grid">
                                {/* Project 1 */}
                                <div className="portfolio-item">
                                    <img src="/images/portfolio/gold.jpg" alt="MMTC PAMP"/>
                                    <a
                                        href="https://www.mmtcpamp.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="overlay"
                                    >
                                        <div className="content">
                                            <h1 style={{"color":"#423e3e"}}>MMTC PAMP</h1>
                                            <h2 style={{"color":"#4c4c4c"}}>Front-End Developer</h2>
                                        </div>
                                    </a>
                                </div>

                                {/* Project 2 */}
                                <div className="portfolio-item">
                                    <img src="/images/portfolio/study.jpg" alt="Viaduct"/>
                                    <a
                                        href="https://www.app.viaductlearn.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="overlay"
                                    >
                                        <div className="content">
                                            <h1 style={{"color":"#423e3e"}}>Viaduct</h1>
                                            <h2 style={{"color":"#4c4c4c"}}>Full-Stack Developer</h2>
                                        </div>
                                    </a>
                                </div>

                                {/* Project 3 */}
                                <div className="portfolio-item">
                                    <img src="/images/portfolio/foodies-only.avif" alt="Foodies Only"/>
                                    <a
                                        href="https://foodiesonly.in/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="overlay"
                                    >
                                        <div className="content">
                                            <h1 style={{"color":"#423e3e"}}>Foodies Only</h1>
                                            <h2 style={{"color":"#4c4c4c"}}>Full-Stack Developer</h2>
                                        </div>
                                    </a>
                                </div>

                                {/* Project 4 */}
                                <div className="portfolio-item">
                                    <img src="/images/portfolio/rsth.png" alt="MOT"/>
                                    <a
                                        href="https://rsth.info/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="overlay"
                                    >
                                        <div className="content">
                                            <h1 style={{"color":"#423e3e"}}>MOT</h1>
                                            <h2 style={{"color":"#4c4c4c"}}>Front-End Developer</h2>
                                        </div>
                                    </a>
                                </div>

                                {/* Project 5 */}
                                <div className="portfolio-item">
                                    <img src="/images/portfolio/basmati.jpg" alt="Nano Basmati"/>
                                    <a
                                        href="https://master.d31ijq6kxmo9cl.amplifyapp.com/login"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="overlay"
                                    >
                                        <div className="content">
                                            <h1 style={{"color":"#423e3e"}}>Nano Basmati</h1>
                                            <h2 style={{"color":"#4c4c4c"}}>Full-Stack Developer</h2>
                                        </div>
                                    </a>
                                </div>

                                {/* Project 6 */}
                                <div className="portfolio-item">
                                    <img src="/images/portfolio/ez-grow-infra.webp" alt="Nano Basmati"/>
                                    <a
                                        href="https://the-real-state.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="overlay"
                                    >
                                        <div className="content">
                                            <h1 style={{"color":"#423e3e"}}>Ez Grow Infra</h1>
                                            <h2 style={{"color":"#4c4c4c"}}>Full-Stack Developer</h2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </section>


                        <section id="services">

                            <div className="overlay"></div>

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>Services</h5>
                                    <h1>What Can I Do For You?</h1>

                                    <p className="lead">{introdata.whatCanIDo}</p>

                                </div>
                            </div>

                            <div className="row services-content">

                                <div id="owl-slider" className="owl-carousel services-list">

                                    <div className="service">

                                        <span className="icon"><i className="icon-earth"></i></span>

                                        <div className="service-content">

                                            <h3>Webdesign</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-window"></i></span>

                                        <div className="service-content">

                                            <h3>Web Development</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-paint-brush"></i></span>

                                        <div className="service-content">

                                            <h3>Branding</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-toggles"></i></span>

                                        <div className="service-content">

                                            <h3>UI/UX Design</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-image"></i></span>

                                        <div className="service-content">

                                            <h3>Graphics Design</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="service">

                                        <span className="icon"><i className="icon-chat"></i></span>

                                        <div className="service-content">

                                            <h3>Consultancy</h3>

                                            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                inventore veritatis et quasi
                                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                quia voluptas sit
                                                aspernatur aut odit aut fugit.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </section>


                        <section id="stats" className="count-up">

                            <div className="row">
                                <div className="col-twelve">

                                    <div className="block-1-4 block-s-1-3 block-tab-1-2 block-mob-full stats-list">

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-pencil-ruler"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                6
                                            </h3>

                                            <h5 className="stat-title">
                                                Projects Completed
                                            </h5>

                                        </div>

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-badge"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                4
                                            </h3>

                                            <h5 className="stat-title">
                                                Live Projects
                                            </h5>

                                        </div>

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-pie-chart"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                3
                                            </h3>

                                            <h5 className="stat-title">
                                                Pending/Upcoming Project
                                            </h5>

                                        </div>

                                        <div className="bgrid stat">

                                            <div className="icon-part">
                                                <i className="icon-clock"></i>
                                            </div>

                                            <h3 className="stat-count">
                                                7200
                                            </h3>

                                            <h5 className="stat-title">
                                                Hours
                                            </h5>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </section>


                        <section id="contact">

                            <div className="row section-intro">
                                <div className="col-twelve">

                                    <h5>Contact</h5>
                                    <h1>I'd Love To Hear From You.</h1>

                                    <p className="lead">
                                        Feel free to reach out at <b>ayushmathur919@gmail.com'</b>! Whether you have a
                                        project in mind, need advice, or just
                                        want to connect, I’m always open to new opportunities and collaborations. Let’s
                                        discuss how I can help bring your ideas to life.</p>

                                </div>
                            </div>
                            {/*                  <div className="row contact-form">*/}

                            {/*                      <div className="col-twelve">*/}

                            {/*                          <form onSubmit={handleSubmit}>*/}
                            {/*                              <fieldset>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <input*/}
                            {/*                                          name="contactName"*/}
                            {/*                                          type="text"*/}
                            {/*                                          id="contactName"*/}
                            {/*                                          placeholder="Name"*/}
                            {/*                                          value={formData.contactName}*/}
                            {/*                                          onChange={handleChange}*/}
                            {/*                                          minLength="2"*/}
                            {/*                                          required*/}
                            {/*                                      />*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <input*/}
                            {/*                                          name="contactEmail"*/}
                            {/*                                          type="email"*/}
                            {/*                                          id="contactEmail"*/}
                            {/*                                          placeholder="Email"*/}
                            {/*                                          value={formData.contactEmail}*/}
                            {/*                                          onChange={handleChange}*/}
                            {/*                                          required*/}
                            {/*                                      />*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <input*/}
                            {/*                                          name="contactSubject"*/}
                            {/*                                          type="text"*/}
                            {/*                                          id="contactSubject"*/}
                            {/*                                          placeholder="Subject"*/}
                            {/*                                          value={formData.contactSubject}*/}
                            {/*                                          onChange={handleChange}*/}
                            {/*                                      />*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*<textarea*/}
                            {/*    name="contactMessage"*/}
                            {/*    id="contactMessage"*/}
                            {/*    placeholder="Message"*/}
                            {/*    rows="10"*/}
                            {/*    cols="50"*/}
                            {/*    value={formData.contactMessage}*/}
                            {/*    onChange={handleChange}*/}
                            {/*    required*/}
                            {/*/>*/}
                            {/*                                  </div>*/}

                            {/*                                  <div className="form-field">*/}
                            {/*                                      <button className="submitform" type="submit" disabled={loading}>*/}
                            {/*                                          {loading ? 'Sending...' : 'Submit'}*/}
                            {/*                                      </button>*/}
                            {/*                                      {sent && <div>Message Sent!</div>}*/}
                            {/*                                      {error && <div>Failed to send. Try again later.</div>}*/}
                            {/*                                  </div>*/}

                            {/*                              </fieldset>*/}
                            {/*                          </form>*/}

                            {/*                          <div id="message-warning">*/}
                            {/*                          </div>*/}
                            {/*                          <div id="message-success">*/}
                            {/*                              <i className="fa fa-check"></i>Your message was sent, thank you!<br/>*/}
                            {/*                          </div>*/}

                            {/*                      </div>*/}

                            {/*                  </div>*/}

                            <div className="row contact-info">

                                <div className="col-four tab-full">

                                    <div className="icon">
                                        <i className="icon-pin"></i>
                                    </div>

                                    <h5>Where to find me</h5>

                                    <p>
                                        Aero city block-C<br/>
                                        Chandigarh<br/>
                                        160055 INDIA
                                    </p>

                                </div>

                                <div className="col-four tab-full ">

                                    <div className="icon">
                                        <i className="icon-mail"></i>
                                    </div>

                                    <h5>Email Me At</h5>

                                    <p>ayushmathur919@gmail.com<br/>
                                    </p>

                                </div>

                                <div className="col-four tab-full">

                                    <div className="icon">
                                        <i className="icon-phone"></i>
                                    </div>

                                    <h5>Call Me At</h5>

                                    <p>Phone: (+91) 6393199037<br/>
                                    </p>

                                </div>

                            </div>

                        </section>


                        <footer>
                            <div className="row align-center">

                                <div className=" tab-full pull-right social">

                                    <ul className="footer-social pt-5">
                                        <li><a href="https://www.linkedin.com/in/ayush-mathur-658428197/"
                                               target={"_blank"} rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li><a href="https://www.hackerrank.com/profile/ayushmathur919"
                                               target={"_blank"} rel="noreferrer"><i className="fa fa-code"></i></a>
                                        </li>
                                    </ul>

                                </div>

                                <div id="go-top">
                                    <a className="smoothScroll" title="Back to Top" href="#top"><i
                                        className="fa fa-long-arrow-up"></i></a>
                                </div>

                            </div>
                        </footer>

                        <script src="../../js/jquery-2.1.3.min.js"></script>
                        <script src="../../js/plugins.js"></script>
                        <script src="../../js/main.js"></script>

                        {/*</body>*/}
                    </section>
                </div>}
        </>
    );
};
