import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import styles from './HomePage.module.css'

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Input from "../../components/input/Input";

import {Link} from 'react-router-dom'

import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'

const HomePage = () => {
    return (
      <>
        <section>
          <Header />
        </section>
        <section className={styles.search}>
          <Container maxWidth="lg">
            <Grid>
              <Input placeholder="How can we help you" icon="true" />
            </Grid>
          </Container>
        </section>
        <section className={styles.search}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
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
                        <Link to="/">Read more</Link>
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
                        <Link to="/">Read more</Link>
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                les amis
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