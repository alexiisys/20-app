import React from 'react';
import Svg, {
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  type SvgProps,
} from 'react-native-svg';

const CopyIcon: React.FC<SvgProps> = (props) => (
  <Svg
    width={props.width ?? 18}
    height={props.height ?? 18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M15 6H7.5C6.67157 6 6 6.67157 6 7.5V15C6 15.8284 6.67157 16.5 7.5 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V7.5C16.5 6.67157 15.8284 6 15 6Z"
        stroke={props.color ?? '#8D8D8D'}
        strokeWidth={props.strokeWidth ?? 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 12C2.175 12 1.5 11.325 1.5 10.5V3C1.5 2.175 2.175 1.5 3 1.5H10.5C11.325 1.5 12 2.175 12 3"
        stroke={props.color ?? '#8D8D8D'}
        strokeWidth={props.strokeWidth ?? 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={18} height={18} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CopyIcon;
