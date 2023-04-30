import { FoodContentConfig, FoodTemplateConfig } from "../interface/food-config.interface";

export const TemplateConstant: FoodTemplateConfig = {
  titleColor: 'white',
  subTitleColor: 'black',
  themeColor: '#8e5123'
}

export const TemplateContentConstant: FoodContentConfig = {
  logoImage: '',
  titleText: 'Alfredo Creamy Pasta',
  frames: [{
    fTitleText: 'Ingredients',
    fSubTitleText: 'Creamy Pasta',
    fItems: ['cream', 'paste', 'chicken', 'onion', 'salt', 'pepper']
  }, {
    fTitleText: 'Recipe one ',
    fSubTitleText: 'Creamy Pasta',
    fItems: ['Take bowl', 'Add cream', 'Add chicken', 'Add onion', 'Add salt', 'Add pepper']
  }, {
    fTitleText: 'Recipe Two',
    fSubTitleText: 'Creamy Pasta',
    fItems: ['Take bowl', 'Add tomoto and onion paste', 'Add chicken', 'Pour Sauce']
  }]
}