import { RockRmsClient } from './client.js';
import { expect } from 'chai';

describe('PersonResource', function () {
    it('should fetch person with ID 358837', async function () {
        // You may need to set ROCK_RMS_URL and ROCK_RMS_API_KEY in your .env file
        const client = new RockRmsClient();
        const person = await client.person().get(358837);
        expect(person).to.be.an('object');
        expect(person).to.have.property('id');
        expect(person.id).to.equal(358837);
        expect(person).to.have.property('firstName');
        expect(person).to.have.property('lastName');
    });
});
