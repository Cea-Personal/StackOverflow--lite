import {expect} from 'chai';
import request from "supertest";
import app from '../app';

describe('Test for question', () => {
  it('get all questions', (done) => {
    request(app)
      .get('/api/v1/questions')
      .end((err, res) => {
        expect(res.status).to.equal(200);
      });
      done();
  });
  it('get single questions',(done) =>{
    request(app)
    .get('/api/v1/questions/1')
    .end((err,res) =>{
      expect(res.status).to.equal(200);
    });
    done();
  });
  it('post questions', (done) =>{
    request(app)
    .post('/api/v1/questions')
    .send({
      subject:"subject",
      description:"description",
      author:"name"
    })
    .end((err,res) =>{
      expect(res.status).to.equal(201);
    });
    done()
  });
});

describe('Test for answers', () =>{
  it('post answers',(done) =>{
    request(app)
    .post('/api/v1/questions/1/answers')
    .send({
      description:'description',
      author: 'name'
  })
    .end((err,res) =>{
      expect(res.status).to.equal(201);
    });
    done()
  });
});