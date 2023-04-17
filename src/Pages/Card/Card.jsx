import { CgClose, CgInfo } from "react-icons/cg";
import "./Card.css";

export function Card(props) {
  return (
    <div className="cardStyle">
      <strong>{props.name}</strong>

      <div className="boxInformation">
        <button type="submit" className="info">
          <a href="./about">
            <CgInfo />
          </a>
        </button>

        <button onClick={props.onDelete} type="submit" className="remove">
          <CgClose />
        </button>
      </div>
    </div>
  );
}
