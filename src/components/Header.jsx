export const Header = ({ name, avatar }) => {
  return (
    <div className="header-section">
      <h1>Quizzz</h1>
      <div className="avatar">
        <h2>{name}</h2>
        <div>{avatar}</div>
      </div>
    </div>
  );
};
