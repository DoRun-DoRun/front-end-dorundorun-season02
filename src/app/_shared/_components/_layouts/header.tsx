import React from "react";

export default function Header() {
  return (
    <div>
      <ul className="flex flex-row gap-5">
        <li className="font-bold">Logo</li>
        <li>
          <a href="">TASK</a>
        </li>
        <li>
          <a href="">커뮤니티</a>
        </li>
        <li>
          <a href="">about us</a>
        </li>
      </ul>
    </div>
  );
}
