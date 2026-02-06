
import User from "./user/User";
import usefath from '../hook/usefath'

export default function Users() {
   const {users , loading , error}=usefath();

  if (loading) return <h2 className="text-center mt-5">loading.....</h2>;
  if (error) return <h2 className="text-center mt-5 text-danger">{error}</h2>;
  if (users.length === 0) return <h2 className="text-center mt-5">no some one</h2>;

  return (
    <div className="container mt-4 d-flex g-3">
      <div className="row g-3">
        {users.map(item => (
        <User key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
