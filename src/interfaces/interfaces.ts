export interface RockRmsClientConfig {
    baseUrl: string;
    apiKey: string;
}

export interface Resource<T> {
    get(id: string | number): Promise<T>;
}
