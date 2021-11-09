import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

class Footer extends React.Component {
    render() { 
        return (<footer className="_Footer">
            <article className="Footer_cards">
                <h5>Socials</h5>
                <ul>
                    <li><a href="#"><FacebookIcon color="primary"/></a></li>
                    <li><a href="#"><TwitterIcon color="primary"/></a></li>
                    <li><a href="#"><InstagramIcon color="primary"/></a></li>
                </ul>
            </article>
            <article className="Footer_cards">
                <h5>Links</h5>
                <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </article>
            <article className="Footer_cards">
                <ul>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </article>
            <p className="Footer_final">Customer Service</p>
            <p className="Footer_final">&copy; All Rights Preserved 2021</p>
        </footer>);
    }
}
 
export default Footer;
