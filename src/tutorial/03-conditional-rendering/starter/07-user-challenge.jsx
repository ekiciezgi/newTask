import { useState } from "react";

const UserChallenge = () => {
  const [user, setuser] = useState(null);
  const login = () => {
    setuser({ name: 'ayse', status: 'login' })
  };
  const logout = () => {
    setuser(null)
    alert("logout")
  }
  return (
    <div>
      {user ?
        (<div>
          <h4>hello there</h4>
          <button className='btn' onClick={logout}>logout</button>
        </div>)
        :
        (<div>
          <h4>please login</h4>
          <button className='btn' onClick={login}>login</button>
        </div>)
      }
    </div>
  );
};

export default UserChallenge;
