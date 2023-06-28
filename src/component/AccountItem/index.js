import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountItem.module.scss";
const cx = classNames.bind(styles);
function AccoutItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avata")}
        src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/356249220_4123762364429970_7786203859962472517_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=cd4uScED35MAX95NlCF&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfABgvF5FTBq7ogKfCBmZ4-42F0YPBLm3Wgp4tu7pKh5rw&oe=64A1E409"
        alt="hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>dwq</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("userName")}>Nguyen van a</span>
      </div>
    </div>
  );
}

export default AccoutItem;
