'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var test_green_validation = false;


describe('The Install of a Module', function(){
	common.initMocha.call(this);

	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);

	});
	after(common.after);


	describe('Log in in Back Office', function(done){
        it('should log in successfully in BO', function(done){
			this.client
				.signinBO()
				.waitForExist(this.selector.menu, 90000)
				.call(done);
		});
	});


	describe('Install module', function(done){
        it('sould go to the module', function(done){
			this.client
				.click(this.selector.modules_menu)
				.waitForExist(this.selector.modules_page_loaded, 90000)
				.call(done);
		});

		it('should install the module', function(done){
				this.client
				.setValue(this.selector.modules_search, module_tech_name)
				.click(this.selector.modules_search_button)
				.waitForExist('//div[@data-tech-name="' + module_tech_name + '" and not(@style)]', 90000)
				.click('//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//a[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]')
				.pause(2000)
				.isVisible(this.selector.red_validation).then(function(isVisible) {
			        global.test_red_validation = isVisible;
				})
				.pause(1000)
                .isVisible(this.selector.green_validation).then(function(isVisible) {
				    test_green_validation = isVisible;
				    if (test_red_validation == true)
				    {
				        done(new Error("red validation exist"));
				    }
				    else if (test_green_validation == true){
				        done();
				    }
				    else {
				        done();}
				 })
		});
	});
		
	describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
			this.client
				.signoutBO()
				.call(done);
		});
	});

});	