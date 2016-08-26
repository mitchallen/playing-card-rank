
@mitchallen/playing-card-rank
==
An enum-like object for representing the ranks in a playing card deck.
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/playing-card-rank --save
  
* * *

## Usage

This module returns an object that has thirteend frozen and unique properties that can be used to represent playing card ranks:


* __ACE__
* __TWO__
* __THREE__ 
* __FOUR__
* __FIVE__
* __SIX__
* __SEVEN__
* __EIGHT__
* __NINE__
* __TEN__
* __JACK__
* __QUEEN__
* __KING__

You can use them to define the rank of each card in a deck.

	var SUIT = require("@mitchallen/playing-card-suit");
    var RANK = require("@mitchallen/playing-card-rank");
    
	card[0].suit = SUIT.HEART;
	card[0].rank = RANK.ACE;


## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/playing-card-rank.git](https://bitbucket.org/mitchallen/playing-card-rank.git)
* [github.com/mitchallen/playing-card-rank.git](https://github.com/mitchallen/playing-card-rank.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *
