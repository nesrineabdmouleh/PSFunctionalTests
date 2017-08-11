'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');

describe('Sort products', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });
    /*process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);*/
    after(common.after);

    /****************************Sort product by id**********************************/
    function getProductsId(browser, sort_mode, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getAttribute('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+i+']', 'data-product-id').then(function (productIds) {
                    product_id_table[i] = productIds;
                    i++;
                    return i === productNumber+1;
                });
            }, 10000)
            .waitUntil(function() {
                global.sortProductsById = getSortProductsId(product_id_table, sort_mode);
                return browser.getAttribute('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+j+']', 'data-product-id').then(function () {
                    j++;
                    return j === productNumber+1;
                });
            }, 10000)
            .call(done);
    }

    function getProductsIdAfterSort(browser, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getAttribute('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+i+']', 'data-product-id').then(function (productIds) {
                    product_id_table_after_sort[i] = productIds;
                    i++;
                    return i === productNumber+1;
                });
            }, 10000)

            .waitUntil(function() {
                return browser.getAttribute('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+j+']', 'data-product-id').then(function () {
                    if(product_id_table_after_sort[j] === sortProductsById[j]) {
                        j++;
                    }else{
                        return done(new Error("something wrong in the sort by id"));
                    }
                    return j === productNumber+1;
                });
            }, 10000)
            .call(done);
    }

    function getSortProductsId(table, sort_mode) {
        if(sort_mode === 'ASC') return table.sort(function (a, b) {  return b - a; }).reverse();
        if(sort_mode === 'DESC') return table.sort(function (a, b) {  return a - b; }).reverse();
    }

    /****************************Sort product by name**********************************/
    function getProductsName(browser, sort_mode, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+i+']/td[3]').then(function (productName) {
                    product_name_table[i] = productName.toLowerCase();
                    i++;
                    return i === productNumber+1;
                });
            }, 10000)
            .waitUntil(function() {
                global.sortProductsByName = getSortProductsName(product_name_table, sort_mode);
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+j+']/td[3]').then(function () {
                    j++;
                    return j === productNumber+1;
                });
            }, 10000)
            .call(done);
    }

    function getProductsNameAfterSort(browser, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+i+']/td[3]').then(function (productName) {
                    product_name_table_after_sort[i] = productName.toLowerCase();
                    i++;
                    return i === productNumber+1;
                });
            }, 10000)

            .waitUntil(function() {
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+j+']/td[3]').then(function () {
                    if(product_name_table_after_sort[j] === sortProductsByName[j]) {
                        j++;
                    }else{
                        return done(new Error("something wrong in the sort by name"));
                    }
                    return j === productNumber+1;
                });
            }, 10000)
            .call(done);
    }

    function getSortProductsName(table, sort_mode) {
        if(sort_mode === 'ASC') return table.sort(function (a, b) {  return a < b; }).reverse();
        if(sort_mode === 'DESC') return table.sort().reverse();
    }

    /****************************Sort product by reference**********************************/
    function getProductsReference(browser, sort_mode, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+i+']/td[4]').then(function (productReference) {
                    product_reference_table[i] = productReference.toLowerCase();
                    i++;
                    return i === productNumber+1;
                });
            }, 10000)
            .waitUntil(function() {
                global.sortProductsByReference = getSortProductsReference(product_reference_table, sort_mode);
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+j+']/td[4]').then(function () {
                    j++;
                    return j === productNumber+1;
                });
            }, 10000)
            .call(done);
    }

    function getProductsReferenceAfterSort(browser, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+i+']/td[4]').then(function (productReference) {
                    product_reference_table_after_sort[i] = productReference.toLowerCase();
                    i++;
                    return i === productNumber+1;
                });
            }, 10000)

            .waitUntil(function() {
                return browser.getText('//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr['+j+']/td[4]').then(function () {
                    if(product_reference_table_after_sort[j] === sortProductsByReference[j]) {
                        j++;
                    }else{
                        return done(new Error("something wrong in the sort by reference"));
                    }
                    return j === productNumber+1;
                });
            }, 10000)
            .call(done);
    }

    function getSortProductsReference(table, sort_mode) {
        if(sort_mode === 'ASC') return table.sort(function (a, b) {  return a < b; }).reverse();
        if(sort_mode === 'DESC') return table.sort(function (a, b) {  return a > b; }).reverse();
    }

    function countProduct(browser, done) {
        browser
            .execute(function () {
                var rows = document.querySelector("table > tbody").childElementCount;
                return rows;
            }).then(function (rows) {
            global.productNumber = rows.value;
        })
    }

    describe('Log in in Back Office', function(done){
        it('should log in successfully in BO', function(done){
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });

        it("should go to the products page", function (done) {

            this.client
                .waitForExist(this.selector.products, 90000)
                .click(this.selector.products)
                .pause(5000)
                //.waitForExist(this.selector.catalogue_filter_reset, 90000)
                //.click(this.selector.catalogue_filter_reset)
                //.pause(5000)
                .call(done);
        });
    });

    describe('sort product by id', function (done) {
        it("should get All product ids before sort", function (done) {
            countProduct(this.client, done);
            getProductsId(this.client, 'DESC', done);
        });

        it("should click on sort by desc", function (done) {
            this.client
                .waitForExist(this.selector.sort_id_desc, 90000)
                .click(this.selector.sort_id_desc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by desc", function (done) {
            getProductsIdAfterSort(this.client, done)
        });

        it("should get All product ids before sort", function (done) {
            getProductsId(this.client, 'ASC', done);
        });

        it("should click on sort by asc", function (done) {
            this.client
                .waitForExist(this.selector.sort_id_asc, 90000)
                .click(this.selector.sort_id_asc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by asc", function (done) {
            getProductsIdAfterSort(this.client, done)
        });

    });

    describe('sort product by name', function (done) {

        it("should get All product names before sort", function (done) {
            getProductsName(this.client, 'DESC', done);
        });

        it("should click on sort by desc", function (done) {
            this.client
                .waitForExist(this.selector.sort_name_desc, 90000)
                .click(this.selector.sort_name_desc)
                .pause(2000)
                .call(done)
        });

        it("should check the products name sorted by desc", function (done) {
            getProductsNameAfterSort(this.client, done)
        });

        it("should get All product names before sort", function (done) {
            getProductsName(this.client, 'ASC', done);
        });

        it("should click on sort by asc", function (done) {
            this.client
                .waitForExist(this.selector.sort_name_asc, 90000)
                .click(this.selector.sort_name_asc)
                .pause(2000)
                .call(done)
        });

        it("should check the product names sorted by asc", function (done) {
            getProductsNameAfterSort(this.client, done)
        });

    });

    describe('sort product by reference', function (done) {
        it("should get All product references before sort", function (done) {
            getProductsReference(this.client, 'DESC', done);
        });

        it("should click on sort by desc", function (done) {
            this.client
                .waitForExist(this.selector.sort_reference_desc, 90000)
                .click(this.selector.sort_reference_desc)
                .pause(2000)
                .call(done)
        });

        it("should check the products reference sorted by desc", function (done) {
            getProductsReferenceAfterSort(this.client, done)
        });

        it("should get All product references before sort", function (done) {
            getProductsReference(this.client, 'ASC', done);
        });

        it("should click on sort by asc", function (done) {
            this.client
                .waitForExist(this.selector.sort_reference_asc, 90000)
                .click(this.selector.sort_reference_asc)
                .pause(2000)
                .call(done)
        });

        it("should check the product references sorted by asc", function (done) {
            getProductsReferenceAfterSort(this.client, done)
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