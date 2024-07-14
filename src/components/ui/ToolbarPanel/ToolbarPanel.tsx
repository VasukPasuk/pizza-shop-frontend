import React from 'react';
import './style.scss';
import { MdSearch } from 'react-icons/md';
import { AiFillFilter } from 'react-icons/ai';
import { FaSort } from 'react-icons/fa6';

function ToolbarPanel(props) {
  return (
    <div id="toolbar-panel">
      <div className="tools-box">
        <div className="tool-button">
          <AiFillFilter />
          <span>Filter</span>
        </div>
        <div className="tool-button">
          <FaSort />
          <span>Sort</span>
        </div>
      </div>
      <div className="search-part">
        <div className="search-input__wrapper">
          <input
            type="text"
            id="search-input"
            autoComplete="off"
          />
        </div>
        <label htmlFor="search-input">
          <MdSearch id="search-button"/>
        </label>
      </div>
    </div>
  );
}

export default ToolbarPanel;
