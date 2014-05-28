(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
	  {
		  name: 'Emerald',
			price: 1000,
			description: ". . .",
			canPurchase: false,
			soldOut: false
	  },
	  {
			name: 'Ruby',
			price: 500,
			description: ". . .",
			canPurchase: true,
			soldOut: false
	  }
 
	];

	})();