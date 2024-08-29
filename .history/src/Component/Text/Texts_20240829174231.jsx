function Texts({ text }) {
  return (
    <div>
      {' '}
      {sectionTwo.map(text => {
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
