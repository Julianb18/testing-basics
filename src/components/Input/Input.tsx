import React, { useState } from "react";

interface IInputProps {
  isVisible: boolean;
}
export const Input = ({ isVisible }: IInputProps) => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div>
      <input
        data-testid="searchBar"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <h1 data-testid="displaySearch">{searchWord}</h1>
      {isVisible && <p data-testid="shownText">Learning testing</p>}
    </div>
  );
};
