"use client";
import { Tab, Tabs } from "react-bootstrap";

export default function Home() {
  const [key, setKey] = useState("directory");
  return (
    <>
      <Tabs
        defaultActiveKey={key}
        id="uncontrolled-tab-example"
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="directory" title="Directory">
          Directory
        </Tab>
        <Tab eventKey="businessGroups" title="Business Groups">
          Business Groups
        </Tab>
      </Tabs>
    </>
  );
}
