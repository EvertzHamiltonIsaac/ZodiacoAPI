export interface IGenericAtributesForCollections {
  name: string;
  descripcion: string;
  img?: string;
  createdAt: Date;
  updatedAt: Date;
}

//* Interface de la collection PositiveTraits
export interface IPositiveTraits extends IGenericAtributesForCollections {}
//* Interface de la collection NegativeTraits
export interface INegativeTraits extends IGenericAtributesForCollections {}
//* Interface de la collection Animal
export interface IAnimal extends IGenericAtributesForCollections {}
//* Interface de la collection Stone
export interface IStone extends IGenericAtributesForCollections {}
//* Interface de la collection RulingPlanet
export interface IRulingPlanet extends IGenericAtributesForCollections {}
//* Interface de la collection Modality
export interface IModality extends IGenericAtributesForCollections {}
//* Interface de la collection Element
export interface IElement extends IGenericAtributesForCollections {}

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
