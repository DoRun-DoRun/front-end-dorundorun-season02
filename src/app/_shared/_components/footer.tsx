import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-row gap-5">
        <li>
          <a href="">이용약관</a>
        </li>
        <li>
          <a href="">개인정보처리방침</a>
        </li>
      </ul>
    </div>
  );
}
