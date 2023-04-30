import React from 'react';
import { FONT_FAMILY } from '../constant/styles.constant';

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 40,
	textAlign: 'center',
	position: 'absolute',
	bottom: 140,
	width: '100%',
	color: 'white',
	backgroundColor: 'black'
};


export const Subtitle: React.FC<{
	subTitleText: string;
}> = ({subTitleText}) => {
	
	
	return (
		<div style={{...subtitle}}>
			{ subTitleText }
		</div>
	);
};
