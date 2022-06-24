function Listing(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.src} width="100px" height="100px"></img>
    </div>
  );
}
export default Listing;
