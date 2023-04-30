import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
  spring,
  staticFile
} from 'remotion';
import {Logo} from './components/Logo';
import {ContentContainer} from './components/ContentContainer';
import {Title} from './components/Title';
import { TemplateConstant, TemplateContentConstant } from './constant/template.constant';

export const FoodTemplate: React.FC<{}> = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 5,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

  const screenOneOpacity = interpolate(
		frame,
		[0, 100],
		[1, 0]
	);

  const screenTwoOpacity = interpolate(
		frame,
		[0, 100, 101, 300],
		[0, 0 , 1, 0]
	);

  const bgImageStyles = {
    backgroundImage: `url(${staticFile("bg-image.jpg")})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={bgImageStyles}>

      <AbsoluteFill>

        {/*  screen one start  */}
        <AbsoluteFill style={{opacity: screenOneOpacity}}>
          <AbsoluteFill style={{transform: `translateY(${logoTranslation}px)`}}>
            <Logo />
          </AbsoluteFill>	

          <Sequence from={10}>
            <Title 
              titleText={TemplateContentConstant.titleText} 
              titleColor={TemplateConstant.titleColor}
              themeColor={TemplateConstant.themeColor}
            />
          </Sequence>
        
        </AbsoluteFill>
        {/*  screen one end  */}

        {/*  screen two start  */}
        <AbsoluteFill style={{opacity: screenTwoOpacity}}>
          <AbsoluteFill>
            <ContentContainer templateConstant={TemplateConstant} templateContentConstant={TemplateContentConstant} />
          </AbsoluteFill>	
        
        </AbsoluteFill>
        {/*  screen two end  */}






      </ AbsoluteFill>
		</AbsoluteFill>
	);
};
