/* eslint-disable react/prop-types */
function Texts({ text }) {
  return (
    <div>
      {text.map(text => {
        return (
          <div key={text.id}>
            <p>{text.title}</p>
            <p>{text.des}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Texts;
