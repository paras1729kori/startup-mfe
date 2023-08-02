import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  // getting the reference of the div
  const ref = useRef(null);

  useEffect(() => {
    // mounting the div to root
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
