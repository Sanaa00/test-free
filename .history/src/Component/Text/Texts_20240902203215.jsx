/* eslint-disable react/prop-types */
import './text.css';
import icon from '../../assets/check.svg';
// import { FaCheck } from 'react-icons/fa6';
function Texts({ text }) {
  return (
    <div className="text-size">
      {text.map(text => {
        return (
          <div
            key={text.id}
            className="custom-margin-bottom d-flex w-100 align-items-start"
          >
            <img src={icon} className="icon" />{' '}
            <div className="d-flex flex-column custom-width custom-margin-left ">
              {' '}
              <p className="mx-0 p-0 title fw-bold ">{text.title}</p>{' '}
              <p className="des m-0 p-0">{text.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Texts;
