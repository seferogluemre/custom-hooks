import './App.css'
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  // const [username, setUsername] = useState(localStorage.getItem("username") ?? "");

  const [userName, setUserName] = useLocalStorage("username");
  const [firstName, setFirstName] = useLocalStorage("firstname");


  return (
    <>
      <div>
        <label htmlFor="username">Kullanıcı adı</label>
        <input type='text' id='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>

      <div>
        <label htmlFor="firstname">İsim</label>
        <input type='text' id='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>

      <br /><br />
      <br />
      <div>
        Kullanıcı adı: {userName}
      </div>
      <div>
        İsim: {firstName}
      </div>
    </>
  )
}

export default App
