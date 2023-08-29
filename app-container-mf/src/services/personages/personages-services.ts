import { ApiPersonagesRepository } from "./../../repositories/personages/personages-impl";
import { IPersonagesRepository } from "./../../types/personages/personages-repository";
import { IPersonage } from "./../../types/personages/personages.interface";

export class PersonagesServices implements IPersonagesRepository {
  private apiPersonagesRepository: ApiPersonagesRepository;
  constructor() {
    this.apiPersonagesRepository = new ApiPersonagesRepository();
  }

  async getPersonages(movieId: number): Promise<IPersonage[]> {
    return this.apiPersonagesRepository.getPersonages(movieId);
  }
}
