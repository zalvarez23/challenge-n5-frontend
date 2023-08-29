import { IPersonage } from "./personages.interface";

export interface IPersonagesRepository {
  getPersonages(movieId: number): Promise<IPersonage[]>;
}
