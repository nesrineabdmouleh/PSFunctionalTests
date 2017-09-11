'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');

describe('Search module', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    function getAllModulesInformations(browser, pathListModule, done) {
        var i = 0, j = 0, k = 1;
        browser
            .waitUntil(function () {
                i++;
                check_module[i] = [];
                return browser
                    .getAttribute(pathListModule + '/div[' + i + ']', 'data-name').then(function (name) {
                        name_table[i] = name.toLowerCase();
                        if (name_table[i].includes("contact") || name_table[i].includes("form")) check_module[i][1] = true; else check_module[i][1] = false;
                        return i === nbr;
                    })
                    .getAttribute(pathListModule + '/div[' + i + ']', 'data-author').then(function (author) {
                        author_table[i] = author.toLowerCase();
                        if (author_table[i].includes("contact") || author_table[i].includes("form")) check_module[i][2] = true; else check_module[i][2] = false;
                        return i === nbr;
                    })
                    .getAttribute(pathListModule + '/div[' + i + ']', 'data-description').then(function (description) {
                        description_table[i] = description.toLowerCase();
                        if (description_table[i].includes("contact") || description_table[i].includes("form")) check_module[i][3] = true; else check_module[i][3] = false;
                        return i === nbr;
                    })
                    .getAttribute(pathListModule + '/div[' + i + ']', 'data-tech-name').then(function (tech_name) {
                        tech_name_table[i] = tech_name.toLowerCase();
                        if (tech_name_table[i].includes("contact") || tech_name_table[i].includes("form")) check_module[i][4] = true; else check_module[i][4] = false;
                        return i === nbr;
                    })
                    .getAttribute(pathListModule + '/div[' + i + ']', 'data-child-categories').then(function (child_categorie) {
                        child_categories_table[i] = child_categorie.toLowerCase();
                        if (child_categories_table[i].includes("contact") || child_categories_table[i].includes("form")) check_module[i][5] = true; else check_module[i][5] = false;
                        return i === nbr;
                    })
                    .getAttribute(pathListModule + '/div[' + i + ']', 'data-categories').then(function (categorie) {
                        categories_table[i] = categorie.toLowerCase();
                        if (categories_table[i].includes("contact") || categories_table[i].includes("form")) check_module[i][6] = true; else check_module[i][6] = false;
                        return i === nbr;
                    })
                    .getAttribute(pathListModule + '/div[' + i + ']', 'data-type').then(function (type) {
                        type_table[i] = type.toLowerCase();
                        if (type_table[i].includes("contact") || type_table[i].includes("form")) check_module[i][7] = true; else check_module[i][7] = false;
                        return i === nbr;
                    })
            }, 50000)
            .waitUntil(function () {
                return browser
                    .getAttribute(pathListModule + '/div[' + k + ']', 'data-name').then(function () {
                        if (check_module[k][1] === true ||
                            check_module[k][2] === true || check_module[k][3] === true ||
                            check_module[k][4] === true || check_module[k][5] === true ||
                            check_module[k][6] === true || check_module[k][7] === true) {
                            j++;
                            global.nb_module_after_search = j;
                        }
                        k++;
                        return k === nbr + 1;
                    })

            }, 10000)
            .waitUntil(function () {
                if (nb_module_after_search == nbr) {
                    done();
                }
                else {
                    done(new Error("something wrong in the search of modules"));
                }
            }, 10000)
            .call(done);
    }

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Go to module page', function (done) {
        it('should go to modules page', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .pause(3000)
                .call(done);
        });
    });

    describe('search module', function (done) {
        it('should search the module', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.modules_search, 90000)
                .setValue(this.selector.modules_search, 'contact form')
                .click(this.selector.modules_search_button)
                .getText(this.selector.nbr_module).then(function (text) {
                global.nbr = parseInt(text.match(/[0-9]+/g)[0]);
                if (global.nbr == 0) {
                    done(new Error('The module you are searching for does not exist!'));
                }
                else
                    done();
            })
        });

        it('should check the search of modules', function (done) {
            global.fctname = this.test.title;
            if (global.nbr == 0) {
                done(new Error('The module does not exist!'));
            }
            else
                getAllModulesInformations(this.client, this.selector.list_module, done);

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