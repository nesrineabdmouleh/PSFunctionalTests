'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');
var virtual_product = require('../../../datas/virtual_product');

var path = require('path');
var newFile = path.join(__dirname, '../../..', 'datas', 'bleue.jpg');

function getPicture(name) {
    return path.join(__dirname, '../../..', 'datas', name);
}


describe('Add new virtual product', function () {
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

    describe('Create new product', function (done) {
        it("should go to the products page", function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.products)
                .waitForExist(this.selector.new_product, 120000)
                .call(done);
        });

        it("should click on add new product button", function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.new_product, 120000)
                .click(this.selector.new_product)
                .waitForExist(this.selector.product_name, 60000)
                .call(done);
        });

        it('should enter the product name', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_name, 90000)
                .setValue(this.selector.product_name, virtual_product.name + product_id)
                .pause(6000)
                .call(done);
        });

        it('should choose virtual product type', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.virtual_product_type, 90000)
                .click(this.selector.virtual_product_type)
                .pause(3000)
                .selectByIndex(this.selector.virtual_product_type, 2)
                .pause(3000)
                .call(done);
        });

        it('should upload the picture of product', function (done) {
            global.fctname = this.test.title;
            this.client
                .execute(function () {
                    document.getElementsByClassName(this.selector.picture).style = "";
                })
                .chooseFile(this.selector.picture, getPicture('1.png'))
                .waitForExist(this.selector.picture_cover, 90000)
                .call(done);
        });

        it('should enter the product summary', function (done) {
            global.fctname = this.test.title;
            this.client
                .frame(this.selector.summary, function (err, result) {
                    if (err) console.log(err);
                })
                .setValue("#tinymce", virtual_product.resume)
                .frameParent()
                .pause(2000)
                .call(done);
        });

        it('should enter the product description', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.description_button, 90000)
                .click(this.selector.description_button)
                .frame(this.selector.description, function (err, result) {
                    if (err) console.log(err);
                })
                .setValue("#tinymce", virtual_product.desc)
                .frameParent()
                .pause(2000)
                .call(done);
        });

        it('should click on create category button', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 600)
                .waitForExist(this.selector.product_create_category_btn, 90000)
                .click(this.selector.product_create_category_btn)
                .pause(2000)
                .call(done);
        });

        it('should enter the category name', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_category_name_input, 90000)
                .setValue(this.selector.product_category_name_input, virtual_product.new_category_name + product_id)
                .pause(2000)
                .call(done);
        });

        it('should click on category create button', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 600)
                .waitForExist(this.selector.category_create_btn, 90000)
                .click(this.selector.category_create_btn)
                .pause(2000)
                .call(done);
        });

        it('should click on add brand button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_add_brand_btn, 90000)
                .click(this.selector.product_add_brand_btn)
                .pause(2000)
                .call(done);
        });

        it('should select a brand', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_brand_select, 90000)
                .click(this.selector.product_brand_select)
                .pause(2000)
                .waitForExist(this.selector.product_brand_select_option, 90000)
                .click(this.selector.product_brand_select_option)
                .pause(2000)
                .call(done);
        });

        it('should click on add a related product button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.add_related_product_btn, 90000)
                .click(this.selector.add_related_product_btn)
                .pause(2000)
                .call(done);
        });

        it('should search and add a related product', function (done) {
            global.fctname = this.test.title;
            var search_products = virtual_product.search_related_products.split('//');
            this.client
                .waitForExist(this.selector.search_add_related_product_input, 90000)
                .setValue(this.selector.search_add_related_product_input, search_products[0])
                .waitForExist(this.selector.related_product_item, 90000)
                .click(this.selector.related_product_item)
                .pause(2000)
                .setValue(this.selector.search_add_related_product_input, search_products[1])
                .waitForExist(this.selector.related_product_item, 90000)
                .click(this.selector.related_product_item)
                .pause(2000)
                .call(done);
        });

        it('should enter the product price tax excluded', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(800, 0)
                .waitForExist(this.selector.priceTE_shortcut, 60000)
                .click(this.selector.priceTE_shortcut)
                .pause(2000)
                .setValue(this.selector.priceTE_shortcut, virtual_product.priceTE)
                .call(done);
        });

        it('should enter the product reference', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_reference, 60000)
                .click(this.selector.product_reference)
                .setValue(this.selector.product_reference, virtual_product.product_reference)
                .call(done);
        });

        it('should switch the product online', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_online, 60000)
                .click(this.selector.product_online)
                .pause(2000)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Edit product pricing', function (done) {
        it('should go to the product pricing form ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_pricing_tab, 90000)
                .click(this.selector.product_pricing_tab)
                .call(done);
        });

        it('should enter the pricing unity', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.pricing_unity, 60000)
                .execute(function () {
                    document.querySelector("#form_step2_unity").value = "";
                })
                .setValue(this.selector.pricing_unity, virtual_product.unity)
                .call(done);
        });

        it('should enter the pricing tax rule', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.pricing_tax_rule_select, 60000)
                .click(this.selector.pricing_tax_rule_select)
                .pause(2000)
                .waitForExist(this.selector.pricing_tax_rule_option, 60000)
                .click(this.selector.pricing_tax_rule_option)
                .pause(2000)
                .call(done);
        });

        it('should enter the pricing wholesale', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.pricing_wholesale, 60000)
                .click(this.selector.pricing_wholesale)
                .pause(2000)
                .setValue(this.selector.pricing_wholesale, virtual_product.wholesale)
                .call(done);
        });

        it('should select the pricing priorities', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 250)
                .waitForExist(this.selector.pricing_first_priorities_select, 60000)
                .click(this.selector.pricing_first_priorities_select)
                .pause(2000)
                .waitForExist(this.selector.pricing_first_priorities_option, 60000)
                .click(this.selector.pricing_first_priorities_option)
                .pause(2000)
                .waitForExist(this.selector.pricing_second_priorities_select, 60000)
                .click(this.selector.pricing_second_priorities_select)
                .pause(2000)
                .waitForExist(this.selector.pricing_second_priorities_option, 60000)
                .click(this.selector.pricing_second_priorities_option)
                .pause(2000)
                .waitForExist(this.selector.pricing_third_priorities_select, 60000)
                .click(this.selector.pricing_third_priorities_select)
                .pause(2000)
                .waitForExist(this.selector.pricing_third_priorities_option, 60000)
                .click(this.selector.pricing_third_priorities_option)
                .pause(2000)
                .waitForExist(this.selector.pricing_foreth_priorities_select, 60000)
                .click(this.selector.pricing_foreth_priorities_select)
                .pause(2000)
                .waitForExist(this.selector.pricing_foreth_priorities_option, 60000)
                .click(this.selector.pricing_foreth_priorities_option)
                .pause(2000)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Edit the search engine optimization', function (done) {
        it('should go to the product SEO form ', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(800, 0)
                .waitForExist(this.selector.product_SEO_tab, 90000)
                .click(this.selector.product_SEO_tab)
                .call(done);
        });

        it('should enter the meta title ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.SEO_meta_title, 90000)
                .click(this.selector.SEO_meta_title)
                .pause(2000)
                .setValue(this.selector.SEO_meta_title, virtual_product.metatitle)
                .call(done);
        });

        it('should enter the meta description ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.SEO_meta_description, 90000)
                .click(this.selector.SEO_meta_description)
                .pause(2000)
                .setValue(this.selector.SEO_meta_description, virtual_product.metadesc)
                .call(done);
        });

        it('should enter the friendly url ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.SEO_friendly_url, 90000)
                .click(this.selector.SEO_friendly_url)
                .pause(2000)
                .setValue(this.selector.SEO_friendly_url, virtual_product.shortlink)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Edit the product options', function (done) {
        it('should go to the product options form ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_options_tab, 90000)
                .click(this.selector.product_options_tab)
                .call(done);
        });

        it('should select the visibility ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.options_visibility, 90000)
                .click(this.selector.options_visibility)
                .pause(2000)
                .waitForExist(this.selector.options_visibility_option, 90000)
                .click(this.selector.options_visibility_option)
                .pause(2000)
                .call(done);
        });

        it('should enable the web only visibility ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.options_online_only, 90000)
                .click(this.selector.options_online_only)
                .call(done);
        });

        it('should select the condition ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.options_condition_select, 90000)
                .click(this.selector.options_condition_select)
                .pause(2000)
                .waitForExist(this.selector.options_condition_option, 90000)
                .click(this.selector.options_condition_option)
                .call(done);
        });

        it('should enter the ISBN ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.options_isbn, 90000)
                .click(this.selector.options_isbn)
                .pause(2000)
                .setValue(this.selector.options_isbn, virtual_product.isbn)
                .call(done);
        });

        it('should enter the EAN-13 ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.options_ean13, 90000)
                .click(this.selector.options_ean13)
                .pause(2000)
                .setValue(this.selector.options_ean13, virtual_product.ean13)
                .call(done);
        });

        it('should enter the UPC ', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0.600)
                .pause(5000)
                .waitForExist(this.selector.options_upc, 90000)
                .setValue(this.selector.options_upc, virtual_product.upc)
                .call(done);
        });

        it('should click on customization button ', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 800)
                .waitForExist(this.selector.options_add_customization_field_button, 90000)
                .click(this.selector.options_add_customization_field_button)
                .pause(2000)
                .call(done);
        });

        it('should create new custom field ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.options_first_custom_field_label, 90000)
                .click(this.selector.options_first_custom_field_label)
                .pause(2000)
                .setValue(this.selector.options_first_custom_field_label, virtual_product.personalization.perso_text.name)
                .pause(2000)
                .waitForExist(this.selector.options_first_custom_field_type, 90000)
                .click(this.selector.options_first_custom_field_type)
                .pause(2000)
                .waitForExist(this.selector.options_first_custom_field_require, 90000)
                .click(this.selector.options_first_custom_field_require)
                .call(done);
        });

        it('should click on add a customization field button ', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 400)
                .waitForExist(this.selector.options_add_customization_field_button, 90000)
                .click(this.selector.options_add_customization_field_button)
                .pause(2000)
                .call(done);
        });

        it('should create new custom field ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.options_second_custom_field_label, 90000)
                .click(this.selector.options_second_custom_field_label)
                .pause(2000)
                .setValue(this.selector.options_second_custom_field_label, virtual_product.personalization.perso_file.name)
                .pause(2000)
                .waitForExist(this.selector.options_second_custom_field_type, 90000)
                .selectByValue(this.selector.options_second_custom_field_type, 0)
                .call(done);
        });

        it('should click on attach a new file button ', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 1200)
                .waitForExist(this.selector.options_add_new_file_button, 90000)
                .click(this.selector.options_add_new_file_button)
                .pause(2000)
                .call(done);
        });

        it('should add a file ', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 1200)
                .waitForExist(this.selector.options_select_file, 90000)
                .chooseFile(this.selector.options_select_file, newFile)
                .pause(2000)
                .waitForExist(this.selector.options_file_name, 90000)
                .click(this.selector.options_file_name)
                .pause(2000)
                .setValue(this.selector.options_file_name, virtual_product.document_attach.name)
                .pause(2000)
                .waitForExist(this.selector.options_file_description, 90000)
                .click(this.selector.options_file_description)
                .pause(2000)
                .setValue(this.selector.options_file_description, virtual_product.document_attach.desc)
                .pause(2000)
                .call(done);
        });

        it('should select the previous added file ', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 1200)
                .moveToObject(this.selector.options_file_add_button)
                .pause(2000)
                .click(this.selector.options_file_add_button)
                .pause(2000)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.save_product_btn, 90000)
                .click(this.selector.save_product_btn)
                .pause(10000)
                .call(done);
        });

        it('should go to catalog list of product ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.go_to_catalog, 90000)
                .click(this.selector.go_to_catalog)
                .pause(9000)
                .call(done);
        });
    });

    describe('check the product name ', function (done) {
        it('should check the product name ', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.catalogue_filter_by_name, 90000)
                .click(this.selector.catalogue_filter_by_name)
                .pause(4000)
                .setValue(this.selector.catalogue_filter_by_name, virtual_product.name + product_id)
                .pause(2000)
                .click(this.selector.click_outside)
                .waitForExist(this.selector.catalogue_submit_filter, 60000)
                .click(this.selector.catalogue_submit_filter)
                .pause(3000)
                .waitForExist(this.selector.catalog_product_name, 60000)
                .getText(this.selector.catalog_product_name).then(function (name) {
                should(name).be.equal(virtual_product.name + product_id)
            })
                .pause(2000)
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