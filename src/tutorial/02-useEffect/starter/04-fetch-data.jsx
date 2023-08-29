const url = 'https://api.github.com/users';
import { useState, useEffect } from 'react';
import './index.css'
const FetchData = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const users = await data.json();
        setUser(users);
        console.log(user)
      } catch (error) {
        console.log(error);
        setisError(true);
      }
    }
    fetchData();
  }, [])


  return (
    <section>
      <h3>github users</h3>
      <ul className='user'>
        {user.map((dt) => {
          const { id, login, avatar_url, html_url } = dt;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h1>{login}</h1>
                <h1>{html_url}</h1>
              </div>
            </li>
          );

        })}
      </ul>
    </section>
  );

};
export default FetchData;
