/**
    Module: @mitchallen/playing-card-rank
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('module smoke test', function() {

    var RANK = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        let options = {};
        RANK = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('rank should not be null', function(done) {
        should.exist(RANK);
        done();
    });

    it('ACE rank should exist and equal 1', function(done) {
        should.exist(RANK.ACE);
        RANK.ACE.should.eql(1);
        done();
    });

    it('TWO rank should exist and equal 2', function(done) {
        should.exist(RANK.TWO);
        RANK.TWO.should.eql(2);
        done();
    });

    it('THREE rank should exist and equal 3', function(done) {
        should.exist(RANK.THREE);
        RANK.THREE.should.eql(3);
        done();
    });

    it('FOUR rank should exist and equal 4', function(done) {
        should.exist(RANK.FOUR);
        RANK.FOUR.should.eql(4);
        done();
    });

    it('FIVE rank should exist and equal 5', function(done) {
        should.exist(RANK.FIVE);
        RANK.FIVE.should.eql(5);
        done();
    });

    it('SIX rank should exist and equal 6', function(done) {
        should.exist(RANK.SIX);
        RANK.SIX.should.eql(6);
        done();
    });

    it('SEVEN rank should exist and equal 7', function(done) {
        should.exist(RANK.SEVEN);
        RANK.SEVEN.should.eql(7);
        done();
    });

    it('EIGHT rank should exist and equal 8', function(done) {
        should.exist(RANK.EIGHT);
        RANK.EIGHT.should.eql(8);
        done();
    });

    it('NINE rank should exist and equal 9', function(done) {
        should.exist(RANK.NINE);
        RANK.NINE.should.eql(9);
        done();
    });

    it('TEN rank should exist and equal 10', function(done) {
        should.exist(RANK.TEN);
        RANK.TEN.should.eql(10);
        done();
    });

    it('JACK rank should exist and equal 11', function(done) {
        should.exist(RANK.JACK);
        RANK.JACK.should.eql(11);
        done();
    });

    it('QUEEN rank should exist and equal 12', function(done) {
        should.exist(RANK.QUEEN);
        RANK.QUEEN.should.eql(12);
        done();
    });

    it('KING rank should exist and equal 13', function(done) {
        should.exist(RANK.KING);
        RANK.KING.should.eql(13);
        done();
    });

 
});
