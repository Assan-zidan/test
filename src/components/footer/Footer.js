import styles from './Footer.module.css'

import frenchFlag from "../../images/french-flag.png";
import ukFlag from "../../images/uk-flag.png";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PanToolIcon from '@mui/icons-material/PanTool';

import {
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TbMail } from "react-icons/tb";



const Footer = () => {
  return (
    <>
      <div id={styles.mainFooter}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <div className={styles.help}>
                <div>
                  <PanToolIcon />
                </div>
                <div className={styles.helpcenter}>
                  <p>help center</p>
                </div>
              </div>
              <div className={styles.howto}>
                <ul>
                  <li>How to create an account</li>
                  <li>How to track document proccessing progress</li>
                  <li>How to retrive password</li>
                  <li>How to change password</li>
                </ul>
              </div>
            </div>
            <div className={styles.address}>
              <p>
                <strong>Address</strong>:
                <span> N°8, Rue 3038 quartier du Lac </span> <br />
                <span>(Yaoundé III)</span>
              </p>
              <p>
                <strong>Telephone</strong>: <span> (00237) 222 23 04 68</span>
              </p>
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.copyright}
          >
            <div>
              <div className={styles.flags}>
                <img
                  src={frenchFlag}
                  alt="frenchFlag"
                  className={styles.frenchFlag}
                />
                <img src={ukFlag} alt="ukFlag" className={styles.ukFlag} />
              </div>
            </div>
            <div>
              <p>© 2022 | Ministry of public health - Cameroon</p>
            </div>
            <div className={styles.listIcon}>
              <div className={styles.icon}>
                <FaFacebookMessenger />
              </div>
              <div className={styles.icon}>
                <FaFacebookF />
              </div>
              <div className={styles.icon}>
                <FaTwitter />
              </div>
              <div className={styles.icon}>
                <FaYoutube />
              </div>
              <div className={styles.icon}>
                <TbMail />
              </div>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
