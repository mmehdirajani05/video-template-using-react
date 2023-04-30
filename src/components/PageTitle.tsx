import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from '../constant/styles.constant';

const title: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	textAlign: 'center',
	width: '100%',
  textTransform: 'capitalize'
};

const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block'
};

export const PageTitle: React.FC<{
	titleText: string;
	titleColor: string;
	textOptions: any;
}> = ({titleText, titleColor, textOptions}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<h1 style={{...title, ...textOptions }}>
			{words.map((t, i) => {
				const delay = i * 5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
