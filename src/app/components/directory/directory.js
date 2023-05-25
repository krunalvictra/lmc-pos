import React from "react";
import FilterDirectory from "./filterDirectory";
import ListDirectory from "./listDirectory";

const Directory = () => {
  const [filter, setFilter] = React.useState({
    status: [1],
    businessGroup: 1,
    level: null,
  });

  return (
    <div className="p-3">
      <div className="row">
        <div className="col-md-3">
          <FilterDirectory setFilter={setFilter} filter={filter} />
        </div>
        <div className="col-md-9">
          <ListDirectory />
        </div>
      </div>
    </div>
  );
};

export default Directory;
