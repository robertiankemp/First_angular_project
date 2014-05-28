(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('TabController', function() {
		this.tab = 1;
		  this.setTab = function(selectedTab){
      this.tab = selectedTab;
    };
      this.isSet = function(checkTab){
      return this.tab === checkTab; 
      };
	});

	var gems = [
	  {
		  name: 'Emerald',
			price: 1000,
			description: "A lovely green emerald for all occasions",
			canPurchase: false,
			soldOut: false,
			shine: 5
	  },
	  {
			name: 'Ruby',
			price: 500,
			description: "A deep red",
			canPurchase: true,
			soldOut: false,
			shine: 5,
			images: [
				"images/rubylang.png",
				"images/ruby-on-rails-steams-critical-security-patch.jpg"
			]
	  },
	  {
			name: 'Diamond',
			price: 2000,
			description: "the daddy of the gems",
			canPurchase: true,
			soldOut: false,
			shine: 7
	  }
 
	];

	})();