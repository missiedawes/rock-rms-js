import { error } from 'console';
import { RockRmsClient } from '../client.js';
import { expect } from 'chai';

const config = {
    baseUrl: process.env.ROCK_RMS_URL || '',
    apiKey: process.env.ROCK_RMS_API_KEY || '',
};

describe('People', function () {
    it('should fetch person with ID 358837', async function () {
        const client = new RockRmsClient(config);
        const person = await client.person().get(358837);
        expect(person.FirstName).to.equal('Melissa');
        expect(person.LastName).to.equal('Dawes');
    });
});
