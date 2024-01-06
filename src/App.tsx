import Profile from "./sections/profile";
import Base from "./sections/base";
import Navigation from "./sections/navigation";

function App() {
  return (
    <div className="App flex justify-between h-full pl-2 pr-2">
      <video className='fixed w-full h-full left-0 top-0 -z-10 object-cover' loop autoPlay muted>
        <source src="https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video1.mp4" type='video/mp4'></source>
      </video>
      <div>
        <Profile />
      </div>

      <div>
        <Base />
      </div>

      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;