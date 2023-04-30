import {
	AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig,
} from 'remotion';
import { FoodContentConfig, FoodTemplateConfig } from '../interface/food-config.interface';
import { centerlized, FONT_FAMILY } from '../constant/styles.constant' 
import { PageTitle } from './PageTitle';

export const ContentContainer: React.FC<{
  templateConstant: FoodTemplateConfig;
  templateContentConstant: FoodContentConfig;
}> = ({templateConstant, templateContentConstant})  => {
  const {durationInFrames} = useVideoConfig();

  const list = ['Coffee', 'tea', 'Coca Cola', '7up', 'pepsi']

  const animatedContainer = {
    height: '70%',
    width: '100%',
    bottom: 0,
    borderRadius: '20% 20% 0 0'
  }

  const listStyles = {
    fontFamily: FONT_FAMILY,
    listStyleType: 'square',
    fontWeight: 'bold',
    padding: '0 60px 0 150px',
    color: templateConstant.titleColor,
    fontSize: 70
  }

  const sequenceRange = Math.ceil((durationInFrames -100) / templateContentConstant.frames.length)
	
	return (
		<>
      {
        templateContentConstant.frames.length > 0 && templateContentConstant.frames.map((frame, index) => {
          return <AbsoluteFill key={`frmae_${index}`}>
            <div style={{ ...animatedContainer, position: 'absolute', backgroundColor: templateConstant.themeColor }}>
              <div style={{position: 'relative', top: 20}}>
                <PageTitle titleText={frame.fTitleText}  titleColor={templateConstant.titleColor} textOptions={{fontSize: 100, textAlign: 'center', fontWeight: 'bold'}} />
                <ul style={listStyles}>
                  { frame.fItems.map((item :any, i: number) => {
                      return (
                        <li key={i} >
                          <PageTitle titleText={item} titleColor={templateConstant.titleColor} textOptions={{fontSize: 60, textAlign: 'left'}} />
                        </li>
                      )
                    })   
                  }
                </ul>
              </div>
            </div>
          </AbsoluteFill>
        })
      }
      
		</>
	);

};
