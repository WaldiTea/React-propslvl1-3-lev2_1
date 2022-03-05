import Captions from "../Data/Captions.json";
import Caption from "./Caption";

const Figurecaption = () => {
  return (
    <main>
      {Captions.map((item => <Caption
        img = {item.img}
        title = {item.title}
        price = {item.price}
      />))}
    </main>
  );
}

export default Figurecaption;