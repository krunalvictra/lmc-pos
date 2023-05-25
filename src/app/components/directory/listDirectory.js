import Image from "next/image";
import React from "react";
import styles from "./directory.module.scss";
import { EmailIcon, LocationIcon, PhoneIcon } from "@Icons/icons";

const ListDirectory = ({ list }) => {
  return (
    <div className="row">
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
      <div className="col-xl-3 px-2 pb-3">
        <StoreCard />
      </div>
    </div>
  );
};

export default ListDirectory;

const StoreCard = () => {
  return (
    <div className={`card ${styles.store}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.status}`}>Open</div>
        <div className={`${styles.image}`}>
          <Image
            src="/stores/store-1.jpg"
            width={200}
            height={124.52}
            alt="Picture of the author"
          />
        </div>
        <div className={`${styles.name}`}>AK-Anchorage</div>
      </div>
      <div className={`${styles.body}`}>
        <div className={`${styles.phone}`}>
          <PhoneIcon className="me-2" />
          <span>(907) 290-8133</span>
        </div>
        <div className={`${styles.email}`}>
          <EmailIcon className="me-2" />
          <span>jeffrey.edson@victra.com</span>
        </div>
        <div className={`${styles.address}`}>
          <LocationIcon className="me-2" />
          <span title="110 W. Tudor Road, Suite A Anchorage, AK 99503">
            110 W. Tudor Road, Suite A Anchorage, AK 99503
          </span>
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <button className="btn btn-primary">View Store</button>
      </div>
    </div>
  );
};
