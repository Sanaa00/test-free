import Texts from '../Component/Text/Texts';
import './home.css';
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
  return (
    <div>
      <section className="s1">
        <p className="s1-title">Multiple Payment Gateways</p>
        <p className="s1-p">
          Integrate with over 300 payment gateways to provide your customers
          with their preferred payment methods.
        </p>
      </section>

      <section className="s2">
        <Texts text={sectionTwo} />
        <img alt="eeeeeeeeeeee image" />
      </section>

      <section className="s3">
        <img alt="hhhhhhhhhh image" />
        <span>
          {' '}
          <Texts text={sectionTwo} />
        </span>
      </section>
    </div>
  );
}

export default Home;
