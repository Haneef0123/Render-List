import React from "react";

import Card from "../UI/Card";

const User = (props) => {
  return (
    <Card>
      {props.body} ---- {props.id}
    </Card>
  );
};
export default User;
