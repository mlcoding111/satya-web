import React from 'react'

function Element({img, description}) {
  return (
    <div className="element-container">
      <div className="inner">
        <img src={img.default} width="250" />
        {description}
      </div>
    </div>
  );
}

export default Element