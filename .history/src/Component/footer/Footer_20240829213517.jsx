import './footer.css';
import logo from '../../assets/logo.png';
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
      <div>
        <p>Copyright © 2024 EasyGCO.com </p>
        <p></p>
      </div>
    </>
  );
}

export default Footer;
