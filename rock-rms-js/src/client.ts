import { RockRmsClientConfig, Resource, Person } from './interfaces';
import axios from 'axios';

const defaultConfig: RockRmsClientConfig = {
    baseUrl: process.env.ROCK_RMS_URL || '',
    apiKey: process.env.ROCK_RMS_API_KEY,
};

export class RockRmsClient {
    private config: RockRmsClientConfig;

    constructor(config: RockRmsClientConfig = defaultConfig) {
        this.config = config;
    }

    person(): PersonResource {
        return new PersonResource(this.config);
    }
}

export class PersonResource implements Resource {
    private config: RockRmsClientConfig;

    constructor(config: RockRmsClientConfig) {
        this.config = config;
    }

    async get(id: string | number): Promise<Person> {
        const url = `${this.config.baseUrl}/api/People/${id}`;
        const headers: Record<string, string> = {};
        if (this.config.apiKey) {
            headers['Authorization'] = `Bearer ${this.config.apiKey}`;
        }
        try {
            const response = await axios.get(url, { headers });
            return response.data as Person;
        } catch (error) {
            // Handle error as needed
            throw error;
        }
    }
}

export class RockRmsClient {
    // TODO: Implement client logic here, following btreejs style
}
