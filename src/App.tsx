
import Navbar from "./Elements/Navbar";
import Blocks from "./Elements/Blocks";
import MyCalendar from "./Elements/MyCalendar";
import MySlider from "./Elements/MySlider";
import SearchBar from "./Elements/SearchBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-8">AboGanem Awsan lab6</h1>
      <Blocks />
      <MyCalendar />
      <MySlider />
      <SearchBar />
    </div>
  );
};

export default App;
