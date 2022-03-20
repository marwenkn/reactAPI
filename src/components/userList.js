const userList = ({ users }) => {
  return (
    <ul className="list-group">
      {users.map((user) => {
        <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
          {user.name}
        </li>
      })}
    </ul>
  );
};

export default userList;
