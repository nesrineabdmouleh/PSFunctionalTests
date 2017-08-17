'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');

describe('Add employee ', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Add employee in Back Office', function (done) {
        it('should go to the advanced parameters > team', function (done) {
            global.fctname = this.test.title;
            this.client
                .moveToObject(this.selector.advanced_parameters)
                .pause(5000)
                .waitForExist(this.selector.team, 90000)
                .click(this.selector.team)
                .call(done);
        });

        it('should click on add new employee button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.add_new_employee_button, 90000)
                .click(this.selector.add_new_employee_button)
                .pause(2000)
                .call(done);
        });

        it('should enter the first name ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_first_name, 90000)
                .setValue(this.selector.employee_first_name, 'testfirstname')
                .call(done);
        });

        it('should enter the last name ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_last_name, 90000)
                .setValue(this.selector.employee_last_name, 'testlastname')
                .call(done);
        });

        it('should enter the email ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_email, 90000)
                .setValue(this.selector.employee_email, 'testgmqa@testgmaqa.fr')
                .call(done);
        });

        it('should enter the password ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_passwd, 90000)
                .setValue(this.selector.employee_passwd, 'presta1234')
                .call(done);
        });

        it('should disable the subscribe to prestashop newsletter ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_subscribe_newsletter, 90000)
                .click(this.selector.employee_subscribe_newsletter)
                .call(done);
        });

        it('should select a profile ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_profile, 90000)
                .selectByValue(this.selector.employee_profile, 1)
                .call(done);
        });

        it('should click on save button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employee_save_button, 90000)
                .click(this.selector.employee_save_button)
                .pause(1000)
                .call(done);
        });

        it("should check the customer", function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.employees_firstname, 90000)
                .getText(this.selector.employees_firstname).then(function (first_name) {
                should(first_name).be.equal('testfirstname');
            })
                .waitForExist(this.selector.employees_lastname, 90000)
                .getText(this.selector.employees_lastname).then(function (last_name) {
                should(last_name).be.equal('testlastname');
            })
                .waitForExist(this.selector.employees_email, 90000)
                .getText(this.selector.employees_email).then(function (email) {
                should(email).be.equal('testgmqa@testgmaqa.fr');
            })
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signoutBO()
                .call(done);
        });
    });
});