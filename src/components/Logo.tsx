import {
	AbsoluteFill,
  Img,
  staticFile
} from 'remotion';
import { centerlized } from '../constant/styles.constant' 
import { TemplateConstant } from '../constant/template.constant';

export const Logo: React.FC = () => {
	
  const logoStyle = {
    with: '400px',
    height: '400px',
    borderRadius: '10%'
  }

	return (
		<AbsoluteFill	style={centerlized}>
			<Img style={logoStyle} src={staticFile(`${TemplateConstant.logoFileName}`)} />
		</AbsoluteFill>
	);
};
