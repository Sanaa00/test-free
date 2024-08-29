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
        <img alt="hhere image" />
      </section>

      <section className="s3">
        <img alt="hhhhhhhhhh image" />
        <Texts text={sectionTwo} />
      </section>
    </div>
  );
}

export default Home;
