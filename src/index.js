// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	
	if ( currency <= 0 ) return {};
	
	if ( currency > 10000 ) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	
	var money = {};
	
	var remainder = currency;
	
	var halfDollars = Math.floor( currency / 50 );
	if ( halfDollars > 0 ) {
		remainder = currency - halfDollars*50;
		money.H = halfDollars;
	}
	
	var quarters = Math.floor( remainder / 25 );
	if ( quarters > 0 ) {
		remainder = remainder - quarters*25;
		money.Q = quarters;
	}
	
	var dimes = Math.floor( remainder / 10 );
	if ( dimes > 0 ) {
		remainder = remainder - dimes*10;
		money.D = dimes;
	}

	var nickels = Math.floor( remainder / 5 );
	if ( nickels > 0 ) {
		remainder = remainder - nickels*5;
		money.N = nickels;
	}
	
	var pennies = Math.floor( remainder );
	if ( pennies > 0 ) {
		remainder = remainder - pennies;
		money.P = pennies;
	}	
	
	return money;	
}

