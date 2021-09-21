export interface IHero {
  id: string;
  title: string;
  image: string;
  description: string;
}
 
export interface IHeroUI extends IHero {
  published: boolean;
}

export interface IState {
  heroes: Array<IHero>;
  value: string;
  works: Array<IHero>;
}

export interface IItem {
  id: string;
  title: string;
  image: string;
}

export interface IItemProps {
  item: IItem;
}

export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}
