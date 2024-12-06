import usersData from "./assets/users.json";
import User from "./components/users/user";

const App = () => {
  return (
    <>
      <User />
      {usersData.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </>
  );
};

export default App;
