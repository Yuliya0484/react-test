const User = ({ name, email, bio }) => {
  return (
    <ul>
      <li>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{bio}</p>
      </li>
    </ul>
  );
};
export default User;
