/* eslint-disable react/prop-types */
function Texts({ text }) {
  return (
    <div>
      {text.map(text => {
        return (
          <div key={text.id} className="con">
            <p className="title">{text.title}</p>
            <p className="des">{text.des}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Texts;
