import { AbsoluteFill } from 'remotion';
import { FoodTemplateConfig } from '../interface/food-config.interface';
import { FONT_FAMILY } from '../constant/styles.constant' 
import { PageTitle } from './PageTitle';

export const ContentContainer: React.FC<{
  templateConstant: FoodTemplateConfig;
  frameItem: any
}> = ({templateConstant, frameItem})  => {
  
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
	
	return (
    <AbsoluteFill>
      <div style={{ ...animatedContainer, position: 'absolute', backgroundColor: templateConstant.themeColor }}>
        <div style={{position: 'relative', top: 20}}>
          <PageTitle titleText={frameItem.fTitleText}  titleColor={templateConstant.titleColor} textOptions={{fontSize: 100, textAlign: 'center', fontWeight: 'bold'}} />
          <ul style={listStyles}>
            { frameItem.fItems.map((item :any, i: number) => {
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
	);

};
