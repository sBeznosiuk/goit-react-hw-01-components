import React from 'react';
import PropTypes from 'prop-types';

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const styles = {
  section: {
    display: 'flex',
    color: 'black',
    flexDirection: 'column',
    alignItems: 'center',
  },

  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginBottom: 0,
  },
};

const Statistics = ({ title, stats }) => (
  <section className="statistics" style={styles.section}>
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list" style={styles.list}>
      {stats.map(item => (
        <li
          className="item"
          key={item.id}
          style={{
            ...styles.item,
            backgroundColor: '#' + randomColor(),
          }}
        >
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage + '%'}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
