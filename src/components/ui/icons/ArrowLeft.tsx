import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowLeftIcon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 19L5 12L12 5"
      stroke={props.stroke ?? '#161616'}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 12L5 12"
      stroke={props.stroke ?? '#161616'}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowLeftIcon;
