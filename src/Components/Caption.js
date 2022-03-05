const Caption = (props) => {
  return (
    <figure>
      <img src={props.img} alt="-" />
      <figcaption>
        <p>{props.title}</p>
        <p>{props.price}</p>
        <button href="#">BUY NOW</button>
      </figcaption>
    </figure>
  );
}

export default Caption;