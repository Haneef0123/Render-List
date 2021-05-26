import React from "react";

import User from "./User";

const UserList = (props) => {
  if (props.userItems.length <= 0) {
    return <p>"No more elements"</p>;
    {
      /* we can use logic to display some thing useful if there are no items */
    }
  }
  return (
    <div>
      {props.userItems.map(
        (
          userItem // looping over each user item
        ) => (
          <User
            key={userItem.id}
            body={userItem.body.slice(0, 10)}
            id={userItem.id}
          />
        )
      )}
    </div>
  );
};
export default UserList;
