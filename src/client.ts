import { RockRmsClientConfig } from './interfaces/interfaces.js';
import { PeopleResource } from './resources/people.js';

export class RockRmsClient {
    private config: RockRmsClientConfig;

    constructor(config: RockRmsClientConfig) {
        this.config = config;
    }

    person(): PeopleResource {
        return new PeopleResource(this.config);
    }
}
