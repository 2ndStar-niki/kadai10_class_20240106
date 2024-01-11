import React from 'react';
import { MdMap, MdDashboard, } from "react-icons/md";

import logo from './icon/silhouette_white.png';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img src={logo} className="logo" alt="logo" />
      <p className="icon-text-container"><MdDashboard />ダッシュボード</p>
      <p className="icon-text-container"><MdMap />マップ</p>
    </div>
  );
};

export default Sidebar;