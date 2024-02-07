import React from "react";

function SocialLink({ href, target, icon, itemClass}) {
  return (
    <li>
      <a href={href} target={target} className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default SocialLink;
