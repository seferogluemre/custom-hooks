import './App.css'
import useLocalStorage from './hooks/useLocalStorage';
import PostParams from './components/interface/PostParams';
import useFetch from './hooks/useFetch';


function App() {

  // const [username, setUsername] = useState(localStorage.getItem("username") ?? "");

  // const [userName, setUserName] = useLocalStorage("username");
  // const [firstName, setFirstName] = useLocalStorage("firstname");

  const { data: posts, loading, error } = useFetch<PostParams[]>("https://jsonplaceholder.typicode.com/posts");


  if (loading) {
    return (
      <div>
        Yükleniyor....
      </div>
    )
  }
  if (error) {
    return (
      <div>Hata: {error}</div>
    )
  }


  return (
    <>
      <div>
        <div>
          {
            posts?.map((post: PostParams) => (
              <li key={post.id}>{post.title} </li>
            ))
          }
        </div>
      </div>


      {/* <div>
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
      </div> */}
    </>
  )
}

export default App
