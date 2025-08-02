import { RockRmsClientConfig, Resource } from '../interfaces/interfaces.js';
import { Person } from '../interfaces/people.js';
import axios from 'axios';

export class PeopleResource implements Resource<Person> {
    private config: RockRmsClientConfig;

    constructor(config: RockRmsClientConfig) {
        this.config = config;
    }

    async getById(id: string | number): Promise<Person> {
        const url = `${this.config.baseUrl}/api/People/${id}`;
        const headers: Record<string, string> = {};
        if (this.config.apiKey) {
            headers['Authorization-Token'] = `${this.config.apiKey}`;
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
