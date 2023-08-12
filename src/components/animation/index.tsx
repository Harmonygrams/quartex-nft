const Animation = () => {
  return (
    <div>
      <div className="cube" id="interactive-cube">
        <div className="top-bot"></div>
        <div className="left-right"></div>
        <div className="front-back">
          <iframe
            src="https://giphy.com/embed/26BRIYJNRAreymGwE"
            width="100%"
            height="100%"
            style={{ position: "absolute", border: 0 }}
            className="giphy-embed"
            allowFullScreen={true}
          ></iframe>
          <iframe
            src="https://giphy.com/embed/26BRIYJNRAreymGwE"
            width="100%"
            height="100%"
            style={{ position: "absolute", border: 0 }}
            className="giphy-embed"
            allowFullScreen={true}
          ></iframe>
          <iframe
            src="https://giphy.com/embed/26BRIYJNRAreymGwE"
            width="100%"
            height="100%"
            style={{ position: "absolute", border: 0 }}
            className="giphy-embed"
            allowFullScreen={true}
          ></iframe>
          <iframe
            src="https://giphy.com/embed/26BRIYJNRAreymGwE"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder={0}
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lenses">
          <div className="base">
            <div className="lr"></div>
            <div className="led"></div>
          </div>
          <div className="lense"></div>
        </div>
      </div>
    </div>
  );
};
export default Animation;
