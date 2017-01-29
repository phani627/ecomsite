import Ember from 'ember';

export default Ember.Route.extend({


	setupController : function(controller, model){
		this._super(controller, model);
        controller.set("model", model);
        controller.set("name", "");
        controller.set("description", "");
        controller.set("price", "");
    },

	renderTemplate: function() {
        this.render('products.new', {
            into: 'application'
        });
    },

    actions:{

    	formSubmit: function(){
    		var controller = this.get("controller");
    		var product = this.store.createRecord('product',{
    			"name": controller.get("name"),
    			"description": controller.get("description"),
    			"price": controller.get("price")
    		});
    		product.save().then(
    			function(response){
    				alert("Product Created Successfully");
    		    },
    		    function(err){
    		    	alert("Error occured while creating the product");
    		    }
    		);

    	}
    }

	
});
