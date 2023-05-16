import React from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={`${style.header}`}>
      <div className="container d-flex justify-content-md-between align-items-md-center h-100">
        <div className={`py-2 ${style.header_left}`}>
          <div className={`${style.logo}`}>
            <Link href="/">
              <Image
                src="/VISION_logo.png"
                width={110}
                height={30}
                alt="Picture of the author"
              />
            </Link>
          </div>
        </div>
        <div className={`${style.header_center}`}></div>
        <div className={`${style.header_right}`}>
          <ul className={``}>
            <li className=""></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
