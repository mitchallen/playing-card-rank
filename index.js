/**
    Module: @mitchallen/playing-card-rank
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

module.exports = Object.freeze({
    ACE: 1,
    TWO: 2,
    THREE: 3, 
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    isRank: function(value) {
        return (value >= 1 && value <= 13);
    },
    isFaceCard: function(value) {
        return (value == this.JACK  || 
                value == this.QUEEN || 
                value == this.KING);
    },
});