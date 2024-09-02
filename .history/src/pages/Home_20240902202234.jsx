import Texts from '../Component/Text/Texts';
import './home.css';
import section2 from '../assets/section2.svg';
import section3 from '../assets/section3.svg';
import section4 from '../assets/section4.svg';
import section5 from '../assets/section5.svg';
import section6 from '../assets/section6.svg';
import section7 from '../assets/section7.svg';
function Home() {
  const sectionTwo = [
    {
      id: 1,
      title: 'Global Reach',
      des: 'Accept payments from customers worldwide with international payment gateways',
    },
    {
      id: 2,
      title: 'Local Convenience',
      des: 'Offer popular local payment options to cater to your specific market',
    },
    {
      id: 3,
      title: 'Flexible Integration',
      des: 'Easily integrate with your preferred payment gateways in just a few clicks',
    },
  ];
  const sectionThree = [
    {
      id: 1,
      title: 'Security Priority',
      des: 'Security is our top priority. EasyGCO ensures that all transactions are processed securely to protect your business and your customers.',
    },
    {
      id: 2,
      title: 'PCI Compliance',
      des: 'Our platform is fully PCI DSS compliant, ensuring th highest level of security.',
    },
    {
      id: 3,
      title: 'Fraud Detection',
      des: 'Advanced fraud detection tools to safeguard against suspicious activities.',
    },
    {
      id: 4,
      title: 'Encryption',
      des: 'End-to-end encryption for all payment data to ensure secure transactions.',
    },
  ];

  const sectionFour = [
    {
      id: 1,
      title: 'Fast Transactions',
      des: 'Speedy processing to reduce waiting times for customers.',
    },
    {
      id: 2,
      title: 'Real-Time Updates',
      des: 'Instant payment confirmation and real-time transaction updates.',
    },
    {
      id: 3,
      title: 'Seamless Checkout',
      des: 'Smooth and intuitive checkout experience to minimize cart abandonment.',
    },
  ];

  const sectionFive = [
    {
      id: 1,
      title: 'Global Reach',
      des: 'Cryptocurrencies are used worldwide, allowing you to expand your market and reach customers across the globe',
    },
    {
      id: 2,
      title: 'Borderless Transactions',
      des: 'Accept payments from anywhere without the limitations of traditional banking.',
    },
    {
      id: 3,
      title: 'Attract New Customers',
      des: 'Tap into the growing community of cryptocurrency users',
    },
    {
      id: 4,
      title: 'Instant Settlements ',
      des: 'Receive payments quickly without the delays of international transfers',
    },
  ];

  const sectionSix = [
    {
      id: 1,
      title: 'Cost Effective',
      des: 'Enjoy lower processing fees, saving you money on each transaction.',
    },
    {
      id: 2,
      title: 'No Intermediaries',
      des: 'Direct peer-to-peer transactions eliminate the need for intermediaries.',
    },
    {
      id: 3,
      title: 'Transparent Fees',
      des: 'Know exactly what you re paying with clear,upfront fees.',
    },
  ];

  const sectionSeven = [
    {
      id: 1,
      title: 'Developer-Friendly',
      des: 'Comprehensive API documentation for easy integration',
    },
    {
      id: 2,
      title: 'Plug-and-Play',
      des: 'Simple plugins for popular e-commerce platforms.',
    },
    {
      id: 3,
      title: '24/7 Support',
      des: 'Access to our support team for assistance with integration and troubleshooting.',
    },
  ];
  return (
    <div className="home">
      <section className="d-flex justify-content-center align-items-center flex-column">
        <p className="fs-1 fw-bold mb-2 mt-5">Multiple Payment Gateways</p>
        <p className="text-center custom-font-size-p custom-max-width">
          Integrate with over 300 payment gateways to provide your customers
          with their preferred payment methods.
        </p>
      </section>

      <section className="d-flex flex-row custom-gap justify-content-between align-items-center mt-se">
        <span>
          <Texts text={sectionTwo} />
        </span>

        <img alt="section2" src={section2} className="s3-img se2-img" />
      </section>

      <section className="d-flex flex-row custom-gap justify-content-between align-items-center mt-se">
        <img alt="section3" src={section3} className="s3-img se3-img" />
        <span>
          <p className="s5-p fw-bold mx-0 px-0">Secure Transactions</p>
          <Texts text={sectionThree} />
        </span>
      </section>

      <section className="d-flex flex-column align-items-center w-100 mt-100">
        <div className="d-flex flex-column text-center">
          <p className="fw-bold f-32 mx-0 px-0">Multiple Currencies</p>
          <p className="f-17 mx-0 px-0">
            Ensure quick and efficient payment processing to enhance customer
            satisfaction.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 mt-40">
          {' '}
          <span>
            {' '}
            <Texts text={sectionFour} />
          </span>{' '}
          <img alt="section4" src={section4} className="s3-img se4-img" />
        </div>
      </section>

      <section className="d-flex flex-row custom-gap justify-content-between align-items-center mt-se">
        <img alt="section5" src={section5} className="s3-img se5-img" />
        <span>
          <p className="s5-p fw-bold mx-0 px-0 py-0">
            Accept Cryptocurrency Payments
          </p>
          <Texts text={sectionFive} />
        </span>
      </section>

      <section className="d-flex flex-row custom-gap justify-content-between align-items-center mt-se">
        <span>
          <p className="s5-p fw-bold mx-0 px-0">Lower Transaction Fees</p>
          <p className="f-17 mx-0 px-0 py-0">
            Reduce costs with lower transaction fees compared to traditional
            payment methods.
          </p>
          <Texts text={sectionSix} />
        </span>{' '}
        <img alt="section6" src={section6} className="s3-img se6-img" />
      </section>

      <section className="d-flex flex-row custom-gap justify-content-between align-items-center mt-se">
        <img alt="section7" src={section7} className="s3-img se7-img" />
        <span>
          <p className="s5-p fw-bold mx-0 px-0">Easy Integration</p>
          <p className="f-17 mx-0 px-0 py-0">
            Integrate payment processing seamlessly with your existing
            e-commerce setup.
          </p>
          <Texts text={sectionSeven} />
        </span>
      </section>
    </div>
  );
}

export default Home;
