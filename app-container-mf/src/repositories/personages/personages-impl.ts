import { IPersonagesRepository } from "types/personages/personages-repository";
import { ApiClient } from "../../utils/ApiClient";
import { AxiosResponse } from "axios";
import { IPersonage } from "types/personages/personages.interface";

export class ApiPersonagesRepository implements IPersonagesRepository {
  private apiClient: ApiClient;
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getPersonages(movieId: number): Promise<IPersonage[]> {
    const response: AxiosResponse<{ cast: IPersonage[] }> = await this.apiClient
      .getHttpClient()
      .get(`${process.env.REACT_API_URL}/movie/${movieId}/credits`, {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_API_TOKEN,
        },
      });
    return response.data.cast;
  }
}
