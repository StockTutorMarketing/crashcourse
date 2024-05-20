import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/termscondition">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/refund">Cancellation\Refund</a>
        <a href="/ContactUs">Contact Us</a>
      </div>
      <div className="footer-copyright">
        © 2024 <a href="http://stocktutor.com" target='_blank'>Varah Educom Pvt Ltd</a> | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
