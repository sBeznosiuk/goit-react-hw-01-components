import React from "react";
import PropTypes from "prop-types";
import preview from "./social-profile/preview.png";
import { Wrapper, Avatar } from "./ProfileStyles";
import Stats from "./Stats";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Wrapper className="description">
        <Avatar
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
          width="120"
        />
        <p className="name">{name}</p>
        <p className="tag">{`@${tag}`}</p>
        <p className="location">{location}</p>
        <Stats
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </Wrapper>
    </div>
  );
};

Profile.defaultProps = {
  avatar: preview,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Profile;
