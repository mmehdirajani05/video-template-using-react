import {
	AbsoluteFill,
  Img,
  staticFile
} from 'remotion';
import { centerlized } from '../constant/styles.constant' 

export const Logo: React.FC = () => {
	
  const logoStyle = {
    with: '400px',
    height: '400px',
    borderRadius: '10%'
  }

	return (
		<AbsoluteFill	style={centerlized}>
			<Img style={logoStyle} src={staticFile("logo.png")} />
		</AbsoluteFill>
	);
};
