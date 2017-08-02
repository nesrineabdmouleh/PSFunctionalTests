'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var standard_product = require('../../datas/standard_product');

var path = require('path');
var toUpload = path.join(__dirname, '../..', 'datas', 'image_test.jpg');
var newFile = path.join(__dirname, '../..', 'datas', 'bleue.jpg');

describe('Test case n°2 = Add new pack product', function(){
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

    describe('Create new product', function (done) {
        it("should go to the products page", function (done) {
            this.client
                .click(this.selector.products)
                .waitForExist(this.selector.new_product, 120000)
                .call(done);
        });

        it("should click on the add new product button", function (done) {
            this.client
                .waitForExist(this.selector.new_product, 120000)
                .click(this.selector.new_product)
                .waitForExist(this.selector.product_name, 60000)
                .call(done);
        });

        it('should select the product combinations', function (done) {
            this.client
                .waitForExist(this.selector.product_combinations, 90000)
                .click(this.selector.product_combinations)
                .pause(3000)
                .call(done);
        });

        it('should enter the product name', function (done) {
            this.client
                .waitForExist(this.selector.product_name, 90000)
                .setValue(this.selector.product_name, standard_product.name + product_id)
                .pause(6000)
                .call(done);
        });

        it('should enter the product summary', function (done) {
            this.client
                .frame(this.selector.summary, function (err, result) {
                    if (err) console.log(err);
                })
                .setValue("#tinymce", standard_product.resume)
                .frameParent()
                .pause(2000)
                .call(done);
        });

        it('should enter the product description', function (done) {
            this.client
                .waitForExist(this.selector.description_button, 90000)
                .click(this.selector.description_button)
                .frame(this.selector.description, function (err, result) {
                    if (err) console.log(err);
                })
                .setValue("#tinymce", standard_product.desc)
                .frameParent()
                .pause(2000)
                .call(done);
        });

        it('should upload the picture of product', function (done) {
            this.client
                .execute(function () {
                    document.getElementsByClassName("dz-hidden-input").style = "";
                })
                .chooseFile(this.selector.picture, toUpload)
                .waitForExist(this.selector.picture_cover, 90000)
                .getAttribute('.dz-preview.dz-image-preview.ui-sortable-handle.dz-complete', "data-id").then(function (text) {
                    global.image_data_id = text;
                })
                .pause(2000)
                .call(done);
        });

        it('should click on create category button', function (done) {
            this.client
                .scroll(0, 600)
                .waitForExist(this.selector.product_create_category_btn, 90000)
                .click(this.selector.product_create_category_btn)
                .pause(2000)
                .call(done);
        });

        it('should enter the category name', function (done) {
            this.client
                .waitForExist(this.selector.product_category_name_input, 90000)
                .setValue(this.selector.product_category_name_input, standard_product.new_category_name + product_id)
                .pause(2000)
                .call(done);
        });

        it('should click on category create button', function (done) {
            this.client
                .scroll(0, 600)
                .waitForExist(this.selector.category_create_btn, 90000)
                .click(this.selector.category_create_btn)
                .pause(2000)
                .call(done);
        });

        it('should click on add brand button', function (done) {
            this.client
                .waitForExist(this.selector.product_add_brand_btn, 90000)
                .click(this.selector.product_add_brand_btn)
                .pause(2000)
                .call(done);
        });

        it('should select a brand', function (done) {
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
            this.client
                .waitForExist(this.selector.add_related_product_btn, 90000)
                .click(this.selector.add_related_product_btn)
                .pause(2000)
                .call(done);
        });

        it('should search and add a related product', function (done) {
            var search_products = standard_product.search_related_products.split('//');
            this.client
                .waitForExist(this.selector.search_add_related_product_input, 90000)
                .setValue(this.selector.search_add_related_product_input,search_products[0])
                .waitForExist(this.selector.related_product_item, 90000)
                .click(this.selector.related_product_item)
                .pause(2000)
                .setValue(this.selector.search_add_related_product_input,search_products[1])
                .waitForExist(this.selector.related_product_item, 90000)
                .click(this.selector.related_product_item)
                .pause(2000)
                .call(done);
        });

        it('should add feature height', function (done) {
            this.client
                .waitForExist(this.selector.product_add_feature_btn, 90000)
                .click(this.selector.product_add_feature_btn)
                .pause(2000)
                .waitForExist(this.selector.feature_select, 90000)
                .click(this.selector.feature_select)
                .waitForExist(this.selector.feature_select_option_height, 90000)
                .click(this.selector.feature_select_option_height)
                .waitForExist(this.selector.feature_custom_value_height, 90000)
                .setValue(this.selector.feature_custom_value_height, standard_product.features.feature1.custom_value)
                .pause(2000)
                .call(done);
        });

        it('should add feature width', function (done) {
            this.client
                .waitForExist(this.selector.product_add_feature_btn, 90000)
                .click(this.selector.product_add_feature_btn)
                .pause(2000)
                .waitForExist(this.selector.feature_select2, 90000)
                .click(this.selector.feature_select2)
                .waitForExist(this.selector.feature_select_option_width, 90000)
                .click(this.selector.feature_select_option_width)
                .waitForExist(this.selector.feature_custom_value_width, 90000)
                .setValue(this.selector.feature_custom_value_width, standard_product.features.feature2.custom_value)
                .pause(2000)
                .call(done);
        });

        it('should add feature depth', function (done) {
            this.client
                .waitForExist(this.selector.product_add_feature_btn, 90000)
                .click(this.selector.product_add_feature_btn)
                .pause(2000)
                .waitForExist(this.selector.feature_select3, 90000)
                .click(this.selector.feature_select3)
                .waitForExist(this.selector.feature_select_option_depth, 90000)
                .click(this.selector.feature_select_option_depth)
                .waitForExist(this.selector.feature_custom_value_depth, 90000)
                .setValue(this.selector.feature_custom_value_depth, standard_product.features.feature3.custom_value)
                .pause(2000)
                .call(done);
        });

        it('should add feature weight', function (done) {
            this.client
                .waitForExist(this.selector.product_add_feature_btn, 90000)
                .click(this.selector.product_add_feature_btn)
                .pause(2000)
                .waitForExist(this.selector.feature_select4, 90000)
                .click(this.selector.feature_select4)
                .waitForExist(this.selector.feature_select_option_weight, 90000)
                .click(this.selector.feature_select_option_weight)
                .waitForExist(this.selector.feature_custom_value_weight, 90000)
                .setValue(this.selector.feature_custom_value_weight, standard_product.features.feature4.custom_value)
                .pause(2000)
                .call(done);
        });

        it('should add feature compositions', function (done) {
            this.client
                .waitForExist(this.selector.product_add_feature_btn, 90000)
                .click(this.selector.product_add_feature_btn)
                .pause(2000)
                .waitForExist(this.selector.feature_select5, 90000)
                .click(this.selector.feature_select5)
                .waitForExist(this.selector.feature_select_option_compositions, 90000)
                .click(this.selector.feature_select_option_compositions)
                .pause(2000)
                .waitForExist(this.selector.feature_value_compositions, 90000)
                .click(this.selector.feature_value_compositions)
                .waitForExist(this.selector.feature_option_value_compositions, 90000)
                .click(this.selector.feature_option_value_compositions)
                .pause(2000)
                .call(done);
        });

        it('should add feature styles', function (done) {
            this.client
                .waitForExist(this.selector.product_add_feature_btn, 90000)
                .click(this.selector.product_add_feature_btn)
                .pause(2000)
                .waitForExist(this.selector.feature_select6, 90000)
                .click(this.selector.feature_select6)
                .waitForExist(this.selector.feature_select_option_styles, 90000)
                .click(this.selector.feature_select_option_styles)
                .pause(2000)
                .waitForExist(this.selector.feature_value_styles, 90000)
                .click(this.selector.feature_value_styles)
                .waitForExist(this.selector.feature_option_value_styles, 90000)
                .click(this.selector.feature_option_value_styles)
                .pause(2000)
                .call(done);
        });

        it('should add feature properties', function (done) {
            this.client
                .waitForExist(this.selector.product_add_feature_btn, 90000)
                .click(this.selector.product_add_feature_btn)
                .pause(2000)
                .scroll(0, 600)
                .waitForExist(this.selector.feature_select7, 90000)
                .click(this.selector.feature_select7)
                .waitForExist(this.selector.feature_select_option_properties, 90000)
                .click(this.selector.feature_select_option_properties)
                .pause(2000)
                .waitForExist(this.selector.feature_value_properties, 90000)
                .click(this.selector.feature_value_properties)
                .waitForExist(this.selector.feature_option_value_properties, 90000)
                .click(this.selector.feature_option_value_properties)
                .pause(2000)
                .call(done);
        });

        it('should enter the product price tax excluded', function (done) {
            this.client
                .scroll(800, 0)
                .waitForExist(this.selector.priceTE_shortcut, 60000)
                .click(this.selector.priceTE_shortcut)
                .pause(2000)
                .setValue(this.selector.priceTE_shortcut, standard_product.priceTE)
                .call(done);
        });

        it('should enter the product reference', function (done) {
            this.client
                .waitForExist(this.selector.product_reference, 60000)
                .click(this.selector.product_reference)
                .setValue(this.selector.product_reference, standard_product.product_reference)
                .call(done);
        });

        it('should switch the product online', function (done) {
            this.client
                .waitForExist(this.selector.product_online, 60000)
                .click(this.selector.product_online)
                .pause(2000)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Create combinations of product ', function (done) {
        it('should go to the product combinations form', function (done) {
            this.client
                .waitForExist(this.selector.product_combinations_tab, 60000)
                .click(this.selector.product_combinations_tab)
                .call(done);
        });

        it('should create variation ', function (done) {
            this.client
                .waitForExist(this.selector.combination_size_s, 60000)
                .click(this.selector.combination_size_s)
                .pause(2000)
                .waitForExist(this.selector.combination_color_gray, 60000)
                .click(this.selector.combination_color_gray)
                .pause(2000)
                .waitForExist(this.selector.combination_generate_button, 60000)
                .click(this.selector.combination_generate_button)
                .pause(2000)
                .call(done);
        });

        it('should create variation ', function (done) {
            this.client
                .waitForExist(this.selector.combination_size_m, 60000)
                .click(this.selector.combination_size_m)
                .pause(2000)
                .waitForExist(this.selector.combination_color_beige, 60000)
                .click(this.selector.combination_color_beige)
                .pause(2000)
                .waitForExist(this.selector.combination_generate_button, 60000)
                .click(this.selector.combination_generate_button)
                .pause(2000)
                .call(done);
        });

        it('should click on edit the first combination ', function (done) {
            this.client
                .waitForExist(this.selector.combination_edit_first_variation, 60000)
                .click(this.selector.combination_edit_first_variation)
                .pause(2000)
                .call(done);
        });

        it('should edit the first combination', function (done) {
            this.client
                .waitForExist(this.selector.combination_first_details_qty, 60000)
                .click(this.selector.combination_first_details_qty)
                .pause(2000)
                .setValue(this.selector.combination_first_details_qty, standard_product.variations.variation1.quantity)
                .waitForExist(this.selector.combination_first_details_ref, 60000)
                .click(this.selector.combination_first_details_ref)
                .pause(2000)
                .setValue(this.selector.combination_first_details_ref, standard_product.variations.variation1.ref)
                .waitForExist(this.selector.combination_first_details_minimal_quantity, 60000)
                .click(this.selector.combination_first_details_minimal_quantity)
                .pause(2000)
                .setValue(this.selector.combination_first_details_minimal_quantity, standard_product.variations.variation1.minimal_quantity)
                .waitForExist(this.selector.combination_first_details_available_date, 60000)
                .click(this.selector.combination_first_details_available_date)
                .pause(2000)
                .setValue(this.selector.combination_first_details_available_date, standard_product.variations.variation1.available_date)
                .waitForExist(this.selector.combination_first_details_wholesale, 60000)
                .click(this.selector.combination_first_details_wholesale)
                .pause(2000)
                .setValue(this.selector.combination_first_details_wholesale, standard_product.variations.variation1.wholesale)
                .waitForExist(this.selector.combination_first_details_priceTI, 60000)
                .click(this.selector.combination_first_details_priceTI)
                .pause(2000)
                .setValue(this.selector.combination_first_details_priceTI, standard_product.variations.variation1.priceTI)
                .waitForExist(this.selector.combination_first_details_unity, 60000)
                .click(this.selector.combination_first_details_unity)
                .pause(2000)
                .setValue(this.selector.combination_first_details_unity, standard_product.variations.variation1.unity)
                .waitForExist(this.selector.combination_first_details_weight, 60000)
                .click(this.selector.combination_first_details_weight)
                .pause(2000)
                .setValue(this.selector.combination_first_details_weight, standard_product.variations.variation1.weight)
                .waitForExist(this.selector.combination_first_details_ISBN_code, 60000)
                .click(this.selector.combination_first_details_ISBN_code)
                .pause(2000)
                .setValue(this.selector.combination_first_details_ISBN_code, standard_product.variations.variation1.isbn)
                .waitForExist(this.selector.combination_first_details_EAN13, 60000)
                .click(this.selector.combination_first_details_EAN13)
                .pause(2000)
                .setValue(this.selector.combination_first_details_EAN13, standard_product.variations.variation1.ean13)
                .waitForExist(this.selector.combination_first_details_UPC, 60000)
                .click(this.selector.combination_first_details_UPC)
                .pause(2000)
                .setValue(this.selector.combination_first_details_UPC, standard_product.variations.variation1.upc)
                .call(done);
        });

        it('should click on back to product button', function (done) {
            this.client
                .waitForExist(this.selector.combination_first_details_back_to_product_btn, 60000)
                .click(this.selector.combination_first_details_back_to_product_btn)
                .pause(3000)
                .call(done);
        });

        it('should click on edit the first combination ', function (done) {
            this.client
                .waitForExist(this.selector.combination_edit_second_variation, 60000)
                .click(this.selector.combination_edit_second_variation)
                .pause(2000)
                .call(done);
        });

        it('should edit the second combination', function (done) {
            this.client
                .waitForExist(this.selector.combination_second_details_qty, 60000)
                .click(this.selector.combination_second_details_qty)
                .pause(2000)
                .setValue(this.selector.combination_second_details_qty, standard_product.variations.variation2.quantity)
                .waitForExist(this.selector.combination_second_details_ref, 60000)
                .click(this.selector.combination_second_details_ref)
                .pause(2000)
                .setValue(this.selector.combination_second_details_ref, standard_product.variations.variation2.ref)
                .waitForExist(this.selector.combination_second_details_minimal_quantity, 60000)
                .click(this.selector.combination_second_details_minimal_quantity)
                .pause(2000)
                .setValue(this.selector.combination_second_details_minimal_quantity, standard_product.variations.variation2.minimal_quantity)
                .waitForExist(this.selector.combination_second_details_available_date, 60000)
                .click(this.selector.combination_second_details_available_date)
                .pause(2000)
                .setValue(this.selector.combination_second_details_available_date, standard_product.variations.variation2.available_date)
                .waitForExist(this.selector.combination_second_details_wholesale, 60000)
                .click(this.selector.combination_second_details_wholesale)
                .pause(2000)
                .setValue(this.selector.combination_second_details_wholesale, standard_product.variations.variation2.wholesale)
                .waitForExist(this.selector.combination_second_details_priceTI, 60000)
                .click(this.selector.combination_second_details_priceTI)
                .pause(2000)
                .setValue(this.selector.combination_second_details_priceTI, standard_product.variations.variation2.priceTI)
                .waitForExist(this.selector.combination_second_details_unity, 60000)
                .click(this.selector.combination_second_details_unity)
                .pause(2000)
                .setValue(this.selector.combination_second_details_unity, standard_product.variations.variation2.unity)
                .waitForExist(this.selector.combination_second_details_weight, 60000)
                .click(this.selector.combination_second_details_weight)
                .pause(2000)
                .setValue(this.selector.combination_second_details_weight, standard_product.variations.variation2.weight)
                .waitForExist(this.selector.combination_second_details_ISBN_code, 60000)
                .click(this.selector.combination_second_details_ISBN_code)
                .pause(2000)
                .setValue(this.selector.combination_second_details_ISBN_code, standard_product.variations.variation2.isbn)
                .waitForExist(this.selector.combination_second_details_EAN13, 60000)
                .click(this.selector.combination_second_details_EAN13)
                .pause(2000)
                .setValue(this.selector.combination_second_details_EAN13, standard_product.variations.variation2.ean13)
                .waitForExist(this.selector.combination_second_details_UPC, 60000)
                .click(this.selector.combination_second_details_UPC)
                .pause(2000)
                .setValue(this.selector.combination_second_details_UPC, standard_product.variations.variation2.upc)
                .call(done);
        });

        it('should click on back to product button', function (done) {
            this.client
                .waitForExist(this.selector.combination_second_details_back_to_product_btn, 60000)
                .click(this.selector.combination_second_details_back_to_product_btn)
                .pause(3000)
                .call(done);
        });

        it('should select the availability preferences ', function (done) {
            this.client
                .scroll(0, 600)
                .waitForExist(this.selector.combination_availability_preferences, 90000)
                .click(this.selector.combination_availability_preferences)
                .pause(2000)
                .call(done);
        });

        it('should enter the available label in stock ', function (done) {
            this.client
                .waitForExist(this.selector.combination_label_in_stock, 90000)
                .click(this.selector.combination_label_in_stock)
                .pause(2000)
                .setValue(this.selector.combination_label_in_stock, standard_product.qty_msg_stock)
                .pause(2000)
                .call(done);
        });

        it('should enter the available label out of stock ', function (done) {
            this.client
                .waitForExist(this.selector.combination_label_out_stock, 90000)
                .click(this.selector.combination_label_out_stock)
                .pause(2000)
                .setValue(this.selector.combination_label_out_stock, standard_product.qty_msg_unstock)
                .pause(2000)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Create shipping of product', function(done){
        it('should go to the product shipping form ', function(done){
            this.client
                .scroll(800, 0)
                .waitForExist(this.selector.product_shipping_tab, 90000)
                .click(this.selector.product_shipping_tab)
                .call(done);
        });

        it('should enter the shipping width ', function(done){
            this.client
                .waitForExist(this.selector.shipping_width, 90000)
                .click(this.selector.shipping_width)
                .pause(2000)
                .setValue(this.selector.shipping_width, standard_product.cwidth)
                .call(done);
        });

        it('should enter the shipping height ', function(done){
            this.client
                .waitForExist(this.selector.shipping_height, 90000)
                .click(this.selector.shipping_height)
                .pause(2000)
                .setValue(this.selector.shipping_height, standard_product.cheight)
                .call(done);
        });

        it('should enter the shipping depth ', function(done){
            this.client
                .waitForExist(this.selector.shipping_depth, 90000)
                .click(this.selector.shipping_depth)
                .pause(2000)
                .setValue(this.selector.shipping_depth, standard_product.cdepth)
                .call(done);
        });

        it('should enter the shipping weight ', function(done){
            this.client
                .waitForExist(this.selector.shipping_weight, 90000)
                .click(this.selector.shipping_weight)
                .pause(2000)
                .setValue(this.selector.shipping_weight, standard_product.cweight)
                .call(done);
        });

        it('should enter the additional shipping costs ', function(done){
            this.client
                .waitForExist(this.selector.shipping_fees, 90000)
                .click(this.selector.shipping_fees)
                .pause(2000)
                .setValue(this.selector.shipping_fees, standard_product.cadd_ship_coast)
                .call(done);
        });

        it('should select the available carrier ', function(done){
            this.client
                .waitForExist(this.selector.shipping_available_carriers, 90000)
                .click(this.selector.shipping_available_carriers)
                .pause(2000)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Edit pricing of product', function(done){
        it('should go to the product pricing form ', function(done){
            this.client
                .waitForExist(this.selector.product_pricing_tab, 90000)
                .click(this.selector.product_pricing_tab)
                .call(done);
        });

        it('should enter the pricing unity', function (done) {
            this.client
                .waitForExist(this.selector.pricing_unity, 60000)
                .execute(function () {
                    document.querySelector('#form_step2_unity').value = "";
                })
                .setValue(this.selector.pricing_unity, standard_product.unity)
                .call(done);
        });

        it('should enter the pricing tax rule', function (done) {
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
            this.client
                .waitForExist(this.selector.pricing_wholesale, 60000)
                .click(this.selector.pricing_wholesale)
                .pause(2000)
                .setValue(this.selector.pricing_wholesale, standard_product.wholesale)
                .call(done);
        });

        it('should select the pricing priorities', function (done) {
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
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Edit the search engine optimization', function(done){
        it('should go to the product SEO form ', function(done){
            this.client
                .scroll(800, 0)
                .waitForExist(this.selector.product_SEO_tab, 90000)
                .click(this.selector.product_SEO_tab)
                .call(done);
        });

        it('should enter the meta title ', function(done){
            this.client
                .waitForExist(this.selector.SEO_meta_title, 90000)
                .click(this.selector.SEO_meta_title)
                .pause(2000)
                .setValue(this.selector.SEO_meta_title, standard_product.metatitle)
                .call(done);
        });

        it('should enter the meta description ', function(done){
            this.client
                .waitForExist(this.selector.SEO_meta_description, 90000)
                .click(this.selector.SEO_meta_description)
                .pause(2000)
                .setValue(this.selector.SEO_meta_description, standard_product.metadesc)
                .call(done);
        });

        it('should enter the friendly url ', function(done){
            this.client
                .waitForExist(this.selector.SEO_friendly_url, 90000)
                .click(this.selector.SEO_friendly_url)
                .pause(2000)
                .setValue(this.selector.SEO_friendly_url, standard_product.shortlink)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(3000)
                .call(done);
        });
    });

    describe('Edit the options of product', function(done){
        it('should go to the product option form ', function(done){
            this.client
                .waitForExist(this.selector.product_options_tab, 90000)
                .click(this.selector.product_options_tab)
                .call(done);
        });

        it('should select the visibility ', function(done){
            this.client
                .waitForExist(this.selector.options_visibility, 90000)
                .click(this.selector.options_visibility)
                .pause(2000)
                .waitForExist(this.selector.options_visibility_option, 90000)
                .click(this.selector.options_visibility_option)
                .pause(2000)
                .call(done);
        });

        it('should enable the web only visibility ', function(done){
            this.client
                .waitForExist(this.selector.options_online_only, 90000)
                .click(this.selector.options_online_only)
                .call(done);
        });

        it('should select the condition ', function(done){
            this.client
                .waitForExist(this.selector.options_condition_select, 90000)
                .click(this.selector.options_condition_select)
                .pause(2000)
                .waitForExist(this.selector.options_condition_option, 90000)
                .click(this.selector.options_condition_option)
                .call(done);
        });

        it('should enter the ISBN ', function(done){
            this.client
                .waitForExist(this.selector.options_isbn, 90000)
                .click(this.selector.options_isbn)
                .pause(2000)
                .setValue(this.selector.options_isbn, standard_product.isbn)
                .call(done);
        });

        it('should enter the EAN-13 ', function(done){
            this.client
                .waitForExist(this.selector.options_ean13, 90000)
                .click(this.selector.options_ean13)
                .pause(2000)
                .setValue(this.selector.options_ean13, standard_product.ean13)
                .call(done);
        });

        it('should enter the UPC ', function(done){
            this.client
                .waitForExist(this.selector.options_upc, 90000)
                .click(this.selector.options_upc)
                .pause(2000)
                .setValue(this.selector.options_upc, standard_product.upc)
                .call(done);
        });

        it('should click on the customization button ', function(done){
            this.client
                .scroll(0,800)
                .waitForExist(this.selector.options_add_customization_field_button, 90000)
                .click(this.selector.options_add_customization_field_button)
                .pause(2000)
                .call(done);
        });

        it('should create new custom field ', function(done){
            this.client
                .waitForExist(this.selector.options_first_custom_field_label, 90000)
                .click(this.selector.options_first_custom_field_label)
                .pause(2000)
                .setValue(this.selector.options_first_custom_field_label, standard_product.personalization.perso_text.name)
                .pause(2000)
                .waitForExist(this.selector.options_first_custom_field_type, 90000)
                .click(this.selector.options_first_custom_field_type)
                .pause(2000)
                .waitForExist(this.selector.options_first_custom_field_require, 90000)
                .click(this.selector.options_first_custom_field_require)
                .call(done);
        });

        it('should click on the add a customization field button ', function(done){
            this.client
                .scroll(0,400)
                .waitForExist(this.selector.options_add_customization_field_button, 90000)
                .click(this.selector.options_add_customization_field_button)
                .pause(2000)
                .call(done);
        });

        it('should create new custom field ', function(done){
            this.client
                .waitForExist(this.selector.options_second_custom_field_label, 90000)
                .click(this.selector.options_second_custom_field_label)
                .pause(2000)
                .setValue(this.selector.options_second_custom_field_label, standard_product.personalization.perso_file.name)
                .pause(2000)
                .waitForExist(this.selector.options_second_custom_field_type, 90000)
                .selectByValue(this.selector.options_second_custom_field_type, 0)
                .call(done);
        });

        it('should click on the attach a new file button ', function(done){
            this.client
                .scroll(0,800)
                .waitForExist(this.selector.options_add_new_file_button, 90000)
                .click(this.selector.options_add_new_file_button)
                .pause(2000)
                .call(done);
        });

        it('should add a file ', function(done){
            this.client
                .waitForExist(this.selector.options_select_file, 90000)
                .chooseFile(this.selector.options_select_file, newFile)
                .pause(2000)
                .waitForExist(this.selector.options_file_name, 90000)
                .click(this.selector.options_file_name)
                .pause(2000)
                .setValue(this.selector.options_file_name, standard_product.document_attach.name)
                .pause(2000)
                .waitForExist(this.selector.options_file_description, 90000)
                .click(this.selector.options_file_description)
                .pause(2000)
                .setValue(this.selector.options_file_description, standard_product.document_attach.desc)
                .pause(2000)
                .call(done);
        });

        it('should select the previous added file ', function(done){
            this.client
                .scroll(0, 400)
                .waitForExist(this.selector.options_file_add_button, 90000)
                .click(this.selector.options_file_add_button)
                .pause(2000)
                .call(done);
        });

        it('should save and stay in the product page', function (done) {
            this.client
                .waitForExist(this.selector.save_product_btn, 60000)
                .click(this.selector.save_product_btn)
                .pause(6000)
                .call(done);
        });

        it('should go to catalog list of product ', function (done) {
            this.client
                .waitForExist(this.selector.go_to_catalog, 60000)
                .click(this.selector.go_to_catalog)
                .pause(3000)
                .call(done);
        });
    });

    describe('should check the previous product ', function(done){
        it('should enter the filter name ', function (done) {
            this.client
                .waitForExist(this.selector.catalogue_filter_by_name, 60000)
                .click(this.selector.catalogue_filter_by_name)
                .pause(3000)
                .setValue(this.selector.catalogue_filter_by_name, standard_product.name + product_id)
                .pause(2000)
                .click(this.selector.click_outside)
                .call(done);
        });
        it('should click on the filter apply button ', function (done) {
            this.client
                .waitForExist(this.selector.catalogue_submit_filter, 60000)
                .click(this.selector.catalogue_submit_filter)
                .pause(3000)
                .call(done);
        });
        it('should check the product name ', function (done) {
            this.client
                .waitForExist(this.selector.catalog_product_name, 60000)
                .getText(this.selector.catalog_product_name).then(function (name) {
                    should(name).be.equal(standard_product.name + product_id)
                })
                .pause(2000)
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