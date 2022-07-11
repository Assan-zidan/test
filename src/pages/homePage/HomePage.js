import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import styles from './HomePage.module.css'

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Input from "../../components/input/Input";
import Button from '@mui/material/Button';

import {Link} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import playStore from '../../images/playStore.png'
import AppStore from '../../images/AppStore.png'
import woman from "../../images/woman.png";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { AiOutlineWarning} from "react-icons/ai";

const HomePage = () => {
    return (
      <>
        <section>
          <Header />
        </section>
        <section className={styles.search}>
          <Container maxWidth="lg">
            <Grid>
              <Input
                type="text"
                placeholder="How can we help you"
                icon="true"
              />
            </Grid>
          </Container>
        </section>
        <section className={styles.search}>
          <Container maxWidth="lg" className={styles.home}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6}>
                <div className={styles.full}>
                  <h1>Full knowledge of all your documents as they go</h1>
                  <p>
                    Document tracking software, also known as DMS (Document
                    Management System), is a computer program that helps you
                    store, find, manage, edit, and control your organizational
                    documents in a single place.
                  </p>
                </div>
                <Grid container spacing={2} className={styles.listCard}>
                  <Grid item xs={12} sm={6}>
                    <div className={styles.card}>
                      <div className={styles.cardImg}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <img src={icon1} alt="icon1" />
                        </Grid>
                      </div>
                      <p>
                        Know exactly where your files are at any given time of
                        the day and be at peace as we treat them .{" "}
                        <Link to="#">Read more</Link>
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div className={styles.card}>
                      <div className={styles.cardImg}>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <img src={icon2} alt="icon2" id={styles.icon2} />
                        </Grid>
                      </div>

                      <p>
                        We peruse thoroughly to vet emergencies from everyday
                        cases because our mission is to save lives.{" "}
                        <Link to="#">Read more</Link>
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <div className={styles.woman}>
                  <div>
                    <img src={woman} alt="women" />
                  </div>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    id={styles.overlay}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <div className={styles.covid}>
                        <AiOutlineWarning /> <span>COVID-19 NEWS</span>
                      </div>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      className={styles.arrows}
                    >
                      <IoIosArrowDropleft />
                      <IoIosArrowDropright />
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      className={styles.infected}
                    >
                      <p>
                        Most infected people will develop mild to moderate{" "}
                        <br />
                        illness and recover without hospitalization.
                        <span>
                          <Link to="#"> Read more</Link>
                        </span>
                      </p>
                    </Grid>
                  </Grid>
                </div>
                <div className={styles.terms}>
                  <h6>Terms and conditions*</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea{" "}
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.moukiri}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    className={styles.block}
                  >
                    <div className={styles.connexion}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        className={styles.info}
                      >
                        <div className={styles.user}>
                          <FaUserCircle></FaUserCircle>
                        </div>
                        <div className={styles.form}>
                          <Input placeholder="Enter your name" type="text" />
                          <Input
                            placeholder="Enter your password"
                            type="password"
                          />
                        </div>
                        <div className={styles.forgot}>
                          <p>
                            <Link to="/">Forgot/Reset Password ?</Link>
                          </p>
                        </div>
                        <div>
                          <Button variant="contained" className={styles.button}>
                            Login
                          </Button>
                        </div>
                        <div className={styles.register}>
                          <p>
                            Not Registered ? <Link to="/">Register Now </Link>
                          </p>
                        </div>
                      </Grid>
                    </div>
                    <div className={styles.store}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <img src={playStore} alt="" />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <img src={AppStore} alt="" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Footer />
        </section>
      </>
    );
}
export default HomePage