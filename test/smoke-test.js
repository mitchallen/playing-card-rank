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

    it('first should equal 1', function(done) {
        RANK.first.should.eql(1);
        done();
    });

    it('last should equal 13', function(done) {
        RANK.last.should.eql(13);
        done();
    });

    it('1 should be first', function(done) {
        RANK.isFirst(1).should.eql(true);
        done();
    });

    it('13 should not be first', function(done) {
        RANK.isFirst(13).should.eql(false);
        done();
    });

    it('13 should be last', function(done) {
        RANK.isLast(13).should.eql(true);
        done();
    });

    it('1 should not be last', function(done) {
        RANK.isLast(1).should.eql(false);
        done();
    });

    it('ACE rank should exist and equal to 1', function(done) {
        const rank = RANK.ACE;
        should.exist(rank);
        rank.should.eql(1);
        done();
    });

    it('ACE is rank', function(done) {
        const rank = RANK.ACE;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('ACE is not face card', function(done) {
        const rank = RANK.ACE;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('TWO rank should exist and equal 2', function(done) {
        const rank = RANK.TWO;
        should.exist(rank);
        rank.should.eql(2);
        done();
    });

    it('TWO is rank', function(done) {
        const rank = RANK.TWO;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('TWO is not face card', function(done) {
        const rank = RANK.TWO;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('THREE rank should exist and equal 3', function(done) {
        const rank = RANK.THREE;
        should.exist(rank);
        rank.should.eql(3);
        done();
    });

    it('THREE is rank', function(done) {
        const rank = RANK.THREE;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('THREE is not face card', function(done) {
        const rank = RANK.THREE;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('FOUR rank should exist and equal 4', function(done) {
        const rank = RANK.FOUR;
        should.exist(rank);
        rank.should.eql(4);
        done();
    });

    it('FOUR is rank', function(done) {
        const rank = RANK.FOUR;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('FOUR is not face card', function(done) {
        const rank = RANK.FOUR;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('FIVE rank should exist and equal 5', function(done) {
        const rank = RANK.FIVE;
        should.exist(rank);
        rank.should.eql(5);
        done();
    });

    it('FIVE is rank', function(done) {
        const rank = RANK.FIVE;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('FIVE is not face card', function(done) {
        const rank = RANK.FIVE;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('SIX rank should exist and equal 6', function(done) {
        const rank = RANK.SIX;
        should.exist(rank);
        rank.should.eql(6);
        done();
    });

    it('SIX is rank', function(done) {
        const rank = RANK.SIX;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('SIX is not face card', function(done) {
        const rank = RANK.SIX;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('SEVEN rank should exist and equal 7', function(done) {
        const rank = RANK.SEVEN;
        should.exist(rank);
        rank.should.eql(7);
        done();
    });

    it('SEVEN is rank', function(done) {
        const rank = RANK.SEVEN;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('SEVEN is not face card', function(done) {
        const rank = RANK.SEVEN;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('EIGHT rank should exist and equal 8', function(done) {
        const rank = RANK.EIGHT;
        should.exist(rank);
        rank.should.eql(8);
        done();
    });

    it('EIGHT is rank', function(done) {
        const rank = RANK.EIGHT;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('EIGHT is not face card', function(done) {
        const rank = RANK.EIGHT;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('NINE rank should exist and equal 9', function(done) {
        const rank = RANK.NINE;
        should.exist(rank);
        rank.should.eql(9);
        done();
    });

    it('NINE is rank', function(done) {
        const rank = RANK.NINE;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('NINE is not face card', function(done) {
        const rank = RANK.NINE;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('TEN rank should exist and equal 10', function(done) {
        const rank = RANK.TEN;
        should.exist(rank);
        rank.should.eql(10);
        done();
    });

    it('TEN is rank', function(done) {
        const rank = RANK.TEN;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('TEN is not face card', function(done) {
        const rank = RANK.TEN;
        RANK.isFaceCard(rank).should.eql(false);
        done();
    });

    it('JACK rank should exist and equal 11', function(done) {
        const rank = RANK.JACK;
        should.exist(rank);
        rank.should.eql(11);
        done();
    });

    it('JACK is rank', function(done) {
        const rank = RANK.JACK;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('JACK is face card', function(done) {
        const rank = RANK.JACK;
        RANK.isFaceCard(rank).should.eql(true);
        done();
    });

    it('QUEEN rank should exist and equal 12', function(done) {
        const rank = RANK.QUEEN;
        should.exist(rank);
        rank.should.eql(12);
        done();
    });

    it('QUEEN is rank', function(done) {
        const rank = RANK.QUEEN;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('QUEEN is face card', function(done) {
        const rank = RANK.QUEEN;
        RANK.isFaceCard(rank).should.eql(true);
        done();
    });

    it('KING rank should exist and equal 13', function(done) {
        const rank = RANK.KING;
        should.exist(rank);
        rank.should.eql(13);
        done();
    });

    it('KING is rank', function(done) {
        const rank = RANK.KING;
        RANK.isRank(rank).should.eql(true);
        done();
    });

    it('KING is face card', function(done) {
        const rank = RANK.KING;
        RANK.isFaceCard(rank).should.eql(true);
        done();
    });

    it('invalid is not rank', function(done) {
        RANK.isRank(-1).should.eql(false);
        RANK.isRank(0).should.eql(false);
        RANK.isRank(14).should.eql(false);
        done();
    });

    it('invalid is not face card', function(done) {
        RANK.isFaceCard(-1).should.eql(false);
        RANK.isFaceCard(0).should.eql(false);
        RANK.isFaceCard(14).should.eql(false);
        done();
    });

 
});
