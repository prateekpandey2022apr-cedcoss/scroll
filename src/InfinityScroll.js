import React, { useEffect, useState } from "react";

const InfinityScroll = (props) => {
  const { fetchCb, EOF, setEOF } = props;

  useEffect(() => {
    if (EOF) {
      fetchCb();
    }

    function isBottom(el) {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        console.log(EOF);

        if (EOF) {
          console.log("returning");
          return;
        }

        console.log("reached bottom");
        setEOF(true);
      }

      console.log("scroll");
    }

    window.addEventListener("scroll", isBottom);
    return () => window.removeEventListener("scroll", isBottom);
  }, [EOF]);

  useEffect(() => {
    fetchCb();
  }, []);

  return props.children;
};

export default InfinityScroll;
