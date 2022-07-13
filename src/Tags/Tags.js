import React, { useState, useEffect } from "react";

import { fetchTags } from "../api";

export const Tags = ({ tagList, tags, setTags, setTagList }) => {
  const handleSelect = (e) => {
    if (tags === e) {
      setTags(null);
    } else {
      setTags(e);
    }
  };

  useEffect(() => {
    const getTags = async () => {
      let tags = [];
      const tagList = await fetchTags();
      tagList.map((i) => {
        tags.push(Object.values(i.tags));
      });
      setTagList([...new Set(tags.flat())]);
    };
    getTags();
  }, []);

  return (
    <div>
      <h3>Filter by Tag</h3>
      <div>
        {tagList &&
          tagList.map((i) => <div onClick={() => handleSelect(i)}>{i}</div>)}
      </div>
    </div>
  );
};
