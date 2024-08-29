import './footer.css';
import logo from '../../assets/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
function Footer() {
  return (
    <>
      {' '}
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="logo-img" className="logo-img" />
          <p>
            EasyGCO: Your all-in-one e-commerce solution, offering powerful
            tools to build, manage, and grow your online store with ease.
          </p>
        </div>

        <div className="solution">
          <p className="f-title"> Solutions</p>
          <p>Digital products</p>
          <p>Physical products</p>
          <p>Customize your store</p>
          <p>Discount Coupon</p>
          <p>Payment Gateways</p>
          <p>Tax Management</p>
          <p>Automation</p>
          <p>Drop shipping</p>
          <p>Subscriptions</p>
        </div>

        <div className="about">
          <p className="f-title">About</p>
          <p>Home</p>
          <p>Pricing</p>
          <p>Members</p>
          <p>Features</p>
          <p>Contact</p>
        </div>

        <div className="recourse">
          <p className="f-title">Official Blog</p>
          <p>GitHub Profile</p>
          <p>Help Center</p>
        </div>
      </div>
      <div className="contact">
        <p>Copyright © 2024 EasyGCO.com </p>
        <div className="contact">
          {' '}
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Security</p>
        </div>
        <div>
          <FaFacebook />
          <RiInstagramFill />
          <AiFillGithub />
          <SiLinkedin />
          <FaTwitter />
        </div>
      </div>
    </>
  );
}

export default Footer;
