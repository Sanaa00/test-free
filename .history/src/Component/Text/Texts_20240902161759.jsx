/* eslint-disable react/prop-types */
import './text.css';
import { FaCheck } from 'react-icons/fa6';
function Texts({ text }) {
  return (
    <div className="text-size">
      {text.map(text => {
        return (
          <div key={text.id} className="custom-margin-bottom d-flex w-100">
            <FaCheck className="icon" />{' '}
            <div className="d-flex flex-column custom-width custom-margin-left">
              {' '}
              <p className="title fw-bold ">{text.title}</p>{' '}
              <p className="des">{text.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Texts;
