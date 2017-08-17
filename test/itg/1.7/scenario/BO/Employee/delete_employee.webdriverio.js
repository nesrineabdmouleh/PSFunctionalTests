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
            global.fctname = this.test.title;
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Delete employee in Back Office', function (done) {
        it('should go to the advanced parameters > team', function (done) {
            global.fctname = this.test.title;
            this.client
                .moveToObject(this.selector.advanced_parameters)
                .pause(5000)
                .waitForExist(this.selector.team, 90000)
                .click(this.selector.team)
                .call(done);
        });

        it('should search the employee by email', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_filter_by_email, 90000)
                .setValue(this.selector.employee_filter_by_email, 'testgmqa@testgmaqa.fr')
                .click(this.selector.click_outside_employee)
                .pause(2000)
                .click(this.selector.employee_submit_filter)
                .call(done);
        });

        it('should select the employee id', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(1000)
                .waitForExist(this.selector.employees_select_employee, 90000)
                .click(this.selector.employees_select_employee)
                .call(done);
        });

        it('should select the action to delete employee', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(1000)
                .waitForExist(this.selector.employee_bulk_action_button, 90000)
                .click(this.selector.employee_bulk_action_button)
                .pause(1000)
                .waitForExist(this.selector.employee_bulk_action_delete_option, 90000)
                .click(this.selector.employee_bulk_action_delete_option)
                .alertAccept()
                .call(done);
        });

        it("should check delete employee", function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_green_block_validation, 90000)
                .call(done);
        });
    });

    describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
            global.fctname = this.test.title;
            this.client
                .signoutBO()
                .call(done);
        });
    });
});