'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');

describe('Sort modules', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    function getAllModulesName(browser, pathSortModule, modulelist, done) {
        var i = 1, j = 0;
        browser
            .waitUntil(function () {
                return browser.getAttribute(modulelist+'/div[' + i + ']', 'data-name').then(function (name) {
                    name_table[i] = name.toLowerCase();
                    i++;
                    return i === nb_module + 1;
                });
            }, 100000)
            .waitUntil(function () {
                return browser.waitForExist(modulelist).then(function () {
                    global.nameTable = sortModule(name_table, 'name');
                    j++;
                    return j === nb_module + 1;
                });
            }, 100000)
            .waitForExist(pathSortModule, 90000)
            .selectByIndex(pathSortModule, 1)
            .pause(2000)
            .call(done);
    }

    function getAllModulesNameAfterSort(browser,modulelist, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function () {
                return browser.getAttribute(modulelist+'/div[' + i + ']', 'data-name').then(function (name) {
                    nameTableAfterSort[i] = name.toLowerCase();
                    i++;
                    return i === nb_module + 1;
                });
            }, 100000)
            .waitUntil(function () {
                return browser.waitForExist(modulelist).then(function () {
                    if (nameTableAfterSort[j] === nameTable[j - 1]) {
                        j++;
                    } else {
                        done(new Error("something wrong in the sort by name"));
                    }
                    return j === nb_module + 1;
                });
            }, 100000).call(done);
    }

    function sortModule(table, sortBy) {
        if (sortBy === 'name') return table.sort();
        if (sortBy === 'increasing_price') return table.sort(function (a, b) {
            return a - b;
        });
        if (sortBy === 'decreasing_price') {
            return table.sort(function (a, b) {
                return a - b;
            }).reverse();
        }
    }

    function getAllModulesIncreasingPrice(browser, pathSortModule, modulelist, done) {
        var i = 1, j = 0;
        browser
            .waitUntil(function () {
                return browser.getAttribute(modulelist+'/div[' + i + ']', 'data-price').then(function (price) {
                    price_table[i] = price;
                    i++;
                    return i === nb_module + 1;
                });
            }, 100000)
            .waitUntil(function () {
                return browser.waitForExist(modulelist).then(function () {
                    global.priceIncreasingTable = sortModule(price_table, 'increasing_price');
                    j++;
                    return j === nb_module + 1;
                });
            }, 100000)
            .waitForExist(pathSortModule, 90000)
            .selectByIndex(pathSortModule, 2)
            .pause(2000)
            .call(done);
    }

    function getAllModulesIncreasingPriceAfterSort(browser, modulelist, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function () {
                return browser.getAttribute(modulelist+'/div[' + i + ']', 'data-price').then(function (price) {
                    priceTableAfterSort[i] = price;
                    i++;
                    return i === nb_module + 1;
                });
            }, 100000)
            .waitUntil(function () {
                return browser.waitForExist(modulelist).then(function (name) {
                    if (priceTableAfterSort[j] === priceIncreasingTable[j - 1]) {
                        j++;
                    } else {
                        done(new Error("something wrong in the sort by increasing price"));
                    }
                    return j === nb_module + 1;
                });
            }, 100000).call(done);
    }

    function getAllModulesDecreasingPrice(browser, pathSortModule, modulelist, done) {
        var i = 1, j = 0;
        browser
            .waitUntil(function () {
                return browser.getAttribute(modulelist+'/div[' + i + ']', 'data-price').then(function (price) {
                    decreasingPrice_table[i] = price;
                    i++;
                    return i === nb_module + 1;
                });
            }, 100000)
            .waitUntil(function () {
                return browser.waitForExist(modulelist).then(function () {
                    global.priceDecreasingTable = sortModule(decreasingPrice_table, 'decreasing_price');
                    j++;
                    return j === nb_module + 1;
                });
            }, 100000)
            .waitForExist(pathSortModule, 90000)
            .selectByIndex(pathSortModule, 3)
            .pause(2000)
            .call(done);
    }

    function getAllModulesDecreasingPriceAfterSort(browser,modulelist, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function () {
                return browser.getAttribute(modulelist+'/div[' + i + ']', 'data-price').then(function (price) {
                    decreasingPriceTableAfterSort[i] = price;
                    i++;
                    return i === nb_module + 1;
                });
            }, 100000)
            .waitUntil(function () {
                return browser.waitForExist(modulelist).then(function () {
                    if (decreasingPriceTableAfterSort[j] === priceDecreasingTable[j]) {
                        j++;
                    } else {
                        done(new Error("something wrong in the sort by decreasing price"));
                    }
                    return j === nb_module + 1;
                });
            }, 100000).call(done);
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

    describe('Go to modules page', function (done) {
        it('should go to module page', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .pause(3000)
                .getText(this.selector.nbr_module).then(function (nb) {
                global.nb_module = parseInt(nb.match(/[0-9]+/g)[0]);
            })
                .call(done);
        });
    });

    describe('sort module by name ', function (done) {
        it('should select sort module by name ', function (done) {
            global.fctname = this.test.title;
            getAllModulesName(this.client, this.selector.sort_module, this.selector.list_module, done)
        });

        it('should check sort modules by name ', function (done) {
            global.fctname = this.test.title;
            getAllModulesNameAfterSort(this.client,this.selector.list_module, done);
        });
    });

    describe('sort module by increasing price ', function (done) {
        it('should select sort module by increasing price ', function (done) {
            global.fctname = this.test.title;
            getAllModulesIncreasingPrice(this.client, this.selector.sort_module, this.selector.list_module, done)
        });

        it('should check sort modules by increasing price ', function (done) {
            global.fctname = this.test.title;
            getAllModulesIncreasingPriceAfterSort(this.client, this.selector.list_module, done);
        });
    });

    describe('sort module by decreasing price ', function (done) {
        it('should select sort module by decreasing price ', function (done) {
            global.fctname = this.test.title;
            getAllModulesDecreasingPrice(this.client, this.selector.sort_module,this.selector.list_module, done);
        });

        it('should check sort modules by decreasing price ', function (done) {
            global.fctname = this.test.title;
            getAllModulesDecreasingPriceAfterSort(this.client, this.selector.list_module, done);
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