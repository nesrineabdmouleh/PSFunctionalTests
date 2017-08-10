'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');
var exit_welcome = false;

describe('Delete employee ', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function(done){
        it('should log in successfully in BO', function(done){
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Delete employee in Back Office', function (done) {
        it('should go to the advanced parameters > team', function (done) {
            this.client
                .moveToObject(this.selector.advanced_parameters)
                .pause(5000)
                .waitForExist(this.selector.team, 90000)
                .click(this.selector.team)
                .call(done);
        });

        it('should search the employee by email', function (done) {
            this.client
                .waitForExist(this.selector.customer_filter_by_email, 90000)
                .setValue(this.selector.customer_filter_by_email, 'testgmqa@testgmaqa.fr')
                .click(this.selector.click_outside_customer)
                .pause(2000)
                .click(this.selector.customer_submit_filter)
                .call(done);
        });

        it('should select the employee id', function (done) {
            this.client
                .pause(1000)
                .waitForExist(this.selector.customers_select_customer, 90000)
                .click(this.selector.customers_select_customer)
                .call(done);
        });

        it('should select the action to delete employee', function (done) {
            this.client
                .pause(1000)
                .waitForExist(this.selector.customer_bulk_action_button, 90000)
                .click(this.selector.customer_bulk_action_button)
                .pause(1000)
                .waitForExist(this.selector.customer_bulk_action_delete_option, 90000)
                .click(this.selector.customer_bulk_action_delete_option)
                .alertAccept()
                .call(done);
        });

        it("should check delete employee", function (done) {
            this.client
                .waitForExist(this.selector.customer_green_block_validation, 90000)
                .getText(this.selector.customer_green_block_validation).then(function (text) {
                    should(text).be.equal("×\nThe selection has been successfully deleted.");
                })
                .call(done);
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