import logo from './logo.svg';
import './App.css';
import AvatarGroup from './AvatarGroup';

const avatarr = [
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'},
  {src: 'https://cdn-icons-png.flaticon.com/512/1004/1004873.png?w=1380&t=st=1676462318~exp=1676462918~hmac=73d24cf0f1a7d81b05da5ea2332fd3dcd9d1bd8520ef710d31753f92ad51953a', alt:'image 1', initials: 'plp'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{ padding: 20 }}>
        <AvatarGroup
          avatars={avatarr}
          maxAvatars={3}
          size={50}
          maxInitialsLength={2}
          avatarStyle={{ border: '2px solid white', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}
          moreStyle={{ fontSize: 20, fontWeight: 'bold' }}
        />
      </div>
      </header>
    </div>
  );
}

export default App;
