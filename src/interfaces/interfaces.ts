export interface RockRmsClientConfig {
    baseUrl: string;
    apiKey: string;
}

export interface Resource<T> {
    getById(id: string | number): Promise<T>;
}
