export interface RockRmsClientConfig {
    baseUrl: string;
    apiKey?: string;
}

export interface Resource {
    // Add common resource methods if needed
}

export interface Person {
    id: number | string;
    firstName: string;
    lastName: string;
    // Add other fields as needed
}
