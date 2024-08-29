/* eslint-disable react/prop-types */
import './text.css';
import { FaCheck } from 'react-icons/fa6';
function Texts({ text }) {
  return (
    <div>
      {text.map(text => {
        return (
          <div key={text.id} className="text-con">
            <FaCheck /> <p className="title">{text.title}</p>
            <p className="des">{text.des}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Texts;
