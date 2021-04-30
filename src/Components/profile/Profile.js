import React from "react";
import PropTypes from "prop-types";
import preview from "./social-profile/preview.png";
import {Wrapper,Avatar} from "./styles";

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
        {renderStats(stats)}
      </Wrapper>
    </div>
  );
};

function renderStats(stats) {
  const statsKeys = Object.keys(stats);
  return (
    <ul className="stats">
      {statsKeys.map((item) => {
        return (
          <li key={item}>
            <span className="label">{item}</span>
            <span className="quantity">{stats[item]}</span>
          </li>
        );
      })}
    </ul>
  );
}

Profile.defaultProps = {
  avatar: preview,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
