export interface IGenericAtributesForCollections {
  name: string;
  description: string;
  img?: string;
}

//* Interface de la collection PositiveTraits
export interface IPositiveTraits extends IGenericAtributesForCollections {
  category: string;
  is_negative: boolean;
}
//* Interface de la collection NegativeTraits
export interface INegativeTraits extends IGenericAtributesForCollections {
  category: string;
  is_negative: boolean;
}
//* Interface de la collection Animal
export interface IAnimal extends IGenericAtributesForCollections {}
//* Interface de la collection Stone
export interface IStone extends IGenericAtributesForCollections {}
//* Interface de la collection RulingPlanet
export interface IRulingPlanet extends IGenericAtributesForCollections {
  day_of_week?: string;
  orbit_period?: string;
  mythology?: string;
}
//* Interface de la collection Modality
export interface IModality extends IGenericAtributesForCollections {
  characteristics: string[];
}

//* Interface de la collection Element
export interface IElement extends IGenericAtributesForCollections {
  colors: string[];
}

export interface ISignsModel {
  name: string;
  date: string;
  img: string[];
  element: IElement;
  modality: IModality;
  ruling_planet: IRulingPlanet;
  lucky_number: number[];
  compatibilities: ISignsModel[];
  positive_traits: IPositiveTraits[];
  negative_traits: INegativeTraits[];
  stone: IStone;
  animal: IAnimal;
  createdAt: Date;
  updatedAt: Date;
}
