/* eslint-disable react/prop-types */
import './text.css';
import { FaCheck } from 'react-icons/fa6';
function Texts({ text }) {
  return (
    <div>
      {text.map(text => {
        return (
          <div key={text.id} className="text-con">
            <div>
              {' '}
              <FaCheck /> <p className="title">{text.title}</p>
            </div>

            <p className="des">{text.des}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Texts;
