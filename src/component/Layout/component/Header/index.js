import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AccoutItem from "~/component/AccountItem";

const cx = classNames.bind(styles);

function Header() {
  const [seachResult, setSeachResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSeachResult([]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img className={cx("logo-img")} src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          interactive
          visible={seachResult.length > 0}
          render={(attrs) => (
            <div className={cx("seach-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccoutItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("seach")}>
            <input placeholder="Seach accoust video" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("seach-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
