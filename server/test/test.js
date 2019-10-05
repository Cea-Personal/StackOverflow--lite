import {expect} from 'chai';
import request from "supertest";
import app from '../app';

const should = chai.should()

// Test status

describe('Test for question', () => {
  it('get all questions', (done) => {
    request(app)
      .get('/api/v1/questions')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.error.should.equal(false)
      });
      done();
  });

});
