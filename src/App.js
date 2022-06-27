import "./App.css";
import Counter from "./Counter";
import Listing from "./Listing";
const listings = [
  {
    title: "new t",
    description: "2asdfghjkl",
    src: "https://cdn.myanimelist.net/images/anime/1108/121157.jpg",
  },
  {
    title: "diff title",
    description: "12slapdfjs",
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Counter />
      {listings.map((listing, index) => (
        <Listing
          title={listing.title}
          description={listing.description}
          src={listing.src}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
