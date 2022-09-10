import React from "react";

function StoryContent(props) {
  const { side, description, img, name, width } = props;

  function renderContent() {
    if (props.side == "reverse") {
      return (
        <>
          <div className="story-text">
              {description}
          </div>
          <div className="story-img">
            <img
              src={img}
              alt="story-img"
              width={`${width}px`}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="story-img">
            <img
              src={img}
              alt="story-img"
              width={width}
            />
          </div>
          <div className="story-text">
            {description}
          </div>
        </>
      );
    }
  }

  return (
    <div className={`story-content-${name} story-content`}>
     {
       renderContent()
     }
    </div>
  );
}

export default StoryContent;
