import React from "react";

import Input from "../../../components/Input";

type Props = {};

function Sample({}: Props) {
  return (
    <Input
      wrapperClassName="w-56"
      placeholder="Your Email Here"
      label="email"
      name="email"
      type="email"
      id="email"
    />
  );
}

export default Sample;
