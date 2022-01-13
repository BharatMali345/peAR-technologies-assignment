export interface FoodItemModel {
  Customisation: CustomisationModel[];
  _id: string; //
  AR: boolean; //
  AcPrice: number; //
  Best_seller: boolean; //
  Chefs_special: boolean; //
  Description: string; //
  Gluten_free: boolean; //
  Live: boolean; //
  Name: string; //
  Price: number; //
  Seasonal: boolean; //
  Vegan: boolean; //
  gst: number; //
  item_image: string; //
  item_type: number; //
  model_android: string; //
  model_ios: string; //
  nor: number;
  rating: number; //
  serving_time: number; //
  vat: number; //
}

export interface CustomisationModel {
  Options: OptionsModel[];
  _id: string;
  Live: boolean;
  Name: string;
  max: number;
  min: number;
}

export interface OptionsModel {
  _id: string;
  Live: boolean;
  Name: string;
  Price: number;
  option_type: number;
}
