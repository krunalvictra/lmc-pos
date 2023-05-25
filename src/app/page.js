"use client";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import styles from "@styles/Home.module.scss";
import Directory from "@Component/directory/directory";

export default function Home() {
  const [key, setKey] = useState("directory");

  return (
    <div className={`${styles.main}`}>
      <Tabs
        defaultActiveKey={key}
        id="uncontrolled-tab-example"
        onSelect={(k) => setKey(k)}
        className=""
      >
        <Tab eventKey="directory" title="Directory">
          <Directory />
        </Tab>
        <Tab eventKey="businessGroups" title="Business Groups">
          Business Groups
        </Tab>
      </Tabs>
    </div>
  );
}
