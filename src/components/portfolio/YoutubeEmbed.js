import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId, big }) => (
  <div className="video-responsive">
    <iframe
      width={big ? "700" : "400"}
      height={big ? "420" : "280"}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  big: PropTypes.bool
};

export default YoutubeEmbed;