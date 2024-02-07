import React from "react";

function PageLink({ Link, itemClass }) {
  return (
    <li>
      <a href={Link.href} className={itemClass}>
        {Link.text}
      </a>
    </li>
  );
}

export default PageLink;
