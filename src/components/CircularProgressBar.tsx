import React from 'react';

import PropTypes from 'prop-types'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type CircleProgressBarProps = {
  percentage: string;
};

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ percentage }) => {
  return (
    <div style={{ width: '64px' }}>
      <CircularProgressbar
        value={Math.floor(Number(percentage)/3)}
        text={String(60-Math.floor(Number(percentage)/5))}
        styles={buildStyles({
            textSize: '28px',
            textColor: '#fff',
            pathColor: '#2196F3',
            trailColor: '#fff',
        })}
      />
    </div>
  );
};

CircleProgressBar.propTypes = {
    percentage: PropTypes.string.isRequired
}

export default CircleProgressBar;