import {Composition} from 'remotion';
import {FoodTemplate} from './FoodTemplate';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="FoodTemplate"
				component={FoodTemplate}
				durationInFrames={400}
				fps={10}
				width={1920}
				height={1080}
			/>
		</>
	);
};
