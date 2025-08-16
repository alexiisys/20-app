import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const HomeIcon: React.FC<SvgProps> = (props) => (
  <Svg
    width={props.width ?? 25}
    height={props.height ?? 24}
    viewBox="0 0 25 24"
    fill="none"
    {...props}
  >
    <Path
      d="M15.5 21V13C15.5 12.7348 15.3946 12.4804 15.2071 12.2929C15.0196 12.1054 14.7652 12 14.5 12H10.5C10.2348 12 9.98043 12.1054 9.79289 12.2929C9.60536 12.4804 9.5 12.7348 9.5 13V21"
      stroke={props.color ?? '#161616'}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 10C3.49993 9.7091 3.56333 9.42165 3.68579 9.15775C3.80824 8.89384 3.9868 8.65983 4.209 8.47203L11.209 2.47303C11.57 2.16794 12.0274 2.00055 12.5 2.00055C12.9726 2.00055 13.43 2.16794 13.791 2.47303L20.791 8.47203C21.0132 8.65983 21.1918 8.89384 21.3142 9.15775C21.4367 9.42165 21.5001 9.7091 21.5 10V19C21.5 19.5305 21.2893 20.0392 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0392 3.5 19.5305 3.5 19V10Z"
      stroke={props.color ?? '#161616'}
      strokeWidth={props.strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
