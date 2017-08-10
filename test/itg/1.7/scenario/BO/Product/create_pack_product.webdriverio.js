'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');
var pack_product = require('../../../datas/pack_product.js');

var path = require('path');
var toUpload = path.join(__dirname, '../../..', 'datas', '1.png');
var newFile = path.join(__dirname, '../../..', 'datas', 'bleue.jpg');

describe('Add new pack product', function(){
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

        it("should click on add new product button", function (done) {
            this.client
                .waitForExist(this.selector.new_product, 120000)
                .click(this.selector.new_product)
                .waitForExist(this.selector.product_name, 60000)
                .call(done);
        });

        it('should select the product type', function (done) {
            this.client
                .waitForExist(this.selector.product_type, 90000)
                .click(this.selector.product_type)
                .pause(3000)
                .waitForExist(this.selector.product_pack_type, 90000)
                .click(this.selector.product_pack_type)
                .pause(3000)
                .call(done);
        });

        it('should enter the product name', function (done) {
            this.client
                .waitForExist(this.selector.product_name, 90000)
                .setValue(this.selector.product_name, pack_product.name + product_id)
                .pause(6000)
                .call(done);
        });

        it('should enter the product summary', function (done) {
            this.client
                .frame(this.selector.summary, function (err, result) {
                    if (err) console.log(err);
                })
                .setValue("#tinymce", pack_product.resume)
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
                .setValue("#tinymce", pack_product.desc)
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
                .setValue(this.selector.product_category_name_input, pack_product.new_category_name + product_id)
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
            var search_products = pack_product.search_related_products.split('//');
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

        it('should enter the product price tax excluded', function (done) {
            this.client
                .scroll(800, 0)
                .waitForExist(this.selector.priceTE_shortcut, 60000)
                .click(this.selector.priceTE_shortcut)
                .pause(2000)
                .setValue(this.selector.priceTE_shortcut, pack_product.priceTE)
                .call(done);
        });

        it('should enter the product reference', function (done) {
            this.client
                .waitForExist(this.selector.product_reference, 60000)
                .click(this.selector.product_reference)
                .setValue(this.selector.product_reference, pack_product.product_reference)
                .call(done);
        });

        it('should enter the product quantity', function (done) {
            this.client
                .waitForExist(this.selector.product_quantity_shortcut, 60000)
                .click(this.selector.product_quantity_shortcut)
                .setValue(this.selector.product_quantity_shortcut, pack_product.quantity)
                .call(done);
        });

        it('should search product item for pack ', function (done) {
            this.client
                .waitForExist(this.selector.search_product_pack, 60000)
                .click(this.selector.search_product_pack)
                .pause(2000)
                .setValue(this.selector.search_product_pack, pack_product.pack.pack1.search)
                .pause(2000)
                .waitForExist(this.selector.product_item_pack, 60000)
                .click(this.selector.product_item_pack)
                .pause(2000)
                .call(done);
        });

        it('should enter the product quantity for pack ', function (done) {
            this.client
                .waitForExist(this.selector.product_pack_item_quantity, 60000)
                .click(this.selector.product_pack_item_quantity)
                .pause(2000)
                .setValue(this.selector.product_pack_item_quantity, pack_product.pack.pack1.quantity)
                .call(done);
        });

        it('should click on add the product item for pack ', function (done) {
            this.client
                .waitForExist(this.selector.product_pack_add_button, 60000)
                .click(this.selector.product_pack_add_button)
                .pause(2000)
                .call(done);
        });

        it('should search product item for pack ', function (done) {
            this.client
                .waitForExist(this.selector.search_product_pack, 60000)
                .click(this.selector.search_product_pack)
                .pause(2000)
                .setValue(this.selector.search_product_pack, pack_product.pack.pack2.search)
                .pause(2000)
                .waitForExist(this.selector.product_item_pack, 60000)
                .click(this.selector.product_item_pack)
                .pause(2000)
                .call(done);
        });

        it('should enter the product quantity for pack ', function (done) {
            this.client
                .waitForExist(this.selector.product_pack_item_quantity, 60000)
                .click(this.selector.product_pack_item_quantity)
                .pause(2000)
                .setValue(this.selector.product_pack_item_quantity, pack_product.pack.pack2.quantity)
                .call(done);
        });

        it('should click on add the product item for pack ', function (done) {
            this.client
                .waitForExist(this.selector.product_pack_add_button, 60000)
                .click(this.selector.product_pack_add_button)
                .pause(2000)
                .call(done);
        });

        it('should select product online', function (done) {
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

    describe('Edit quantities of pack product ', function (done) {
        it('should go to the product quantities form', function (done) {
            this.client
                .waitForExist(this.selector.product_quantities_tab, 60000)
                .click(this.selector.product_quantities_tab)
                .call(done);
        });

        it('should enter the product quantity ', function (done) {
            this.client
                .waitForExist(this.selector.product_quantity_input, 60000)
                .click(this.selector.product_quantity_input)
                .setValue(this.selector.product_quantity_input, pack_product.quantity)
                .call(done);
        });

        it('should enter the minimum quantity for sale ', function (done) {
            this.client
                .waitForExist(this.selector.minimum_quantity_sale, 60000)
                .click(this.selector.minimum_quantity_sale)
                .setValue(this.selector.minimum_quantity_sale, pack_product.qty_min)
                .call(done);
        });

        it('should select the pack quantities ', function (done) {
            this.client
                .waitForExist(this.selector.pack_stock_type, 60000)
                .click(this.selector.pack_stock_type)
                .pause(2000)
                .waitForExist(this.selector.pack_stock_type_option, 60000)
                .click(this.selector.pack_stock_type_option)
                .pause(2000)
                .call(done);
        });

        it('should select the availability preferences ', function (done) {
            this.client
                .waitForExist(this.selector.pack_availability_preferences, 60000)
                .click(this.selector.pack_availability_preferences)
                .pause(2000)
                .call(done);
        });

        it('should enter the available label in stock ', function (done) {
            this.client
                .waitForExist(this.selector.pack_label_in_stock, 90000)
                .click(this.selector.pack_label_in_stock)
                .pause(2000)
                .setValue(this.selector.pack_label_in_stock, pack_product.qty_msg_stock)
                .pause(2000)
                .call(done);
        });

        it('should enter the available label out of stock ', function (done) {
            this.client
                .waitForExist(this.selector.pack_label_out_stock, 90000)
                .click(this.selector.pack_label_out_stock)
                .pause(2000)
                .setValue(this.selector.pack_label_out_stock, pack_product.qty_msg_unstock)
                .pause(2000)
                .call(done);
        });

        it('should enter the availability date ', function (done) {
            this.client
                .waitForExist(this.selector.pack_availability_date, 90000)
                .click(this.selector.pack_availability_date)
                .pause(2000)
                .setValue(this.selector.pack_availability_date, pack_product.qty_date)
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

    describe('Create product shipping', function(done){
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
                .setValue(this.selector.shipping_width, pack_product.cwidth)
                .call(done);
        });

        it('should enter the shipping height ', function(done){
            this.client
                .waitForExist(this.selector.shipping_height, 90000)
                .click(this.selector.shipping_height)
                .pause(2000)
                .setValue(this.selector.shipping_height, pack_product.cheight)
                .call(done);
        });

        it('should enter the shipping depth ', function(done){
            this.client
                .waitForExist(this.selector.shipping_depth, 90000)
                .click(this.selector.shipping_depth)
                .pause(2000)
                .setValue(this.selector.shipping_depth, pack_product.cdepth)
                .call(done);
        });

        it('should enter the shipping weight ', function(done){
            this.client
                .waitForExist(this.selector.shipping_weight, 90000)
                .click(this.selector.shipping_weight)
                .pause(2000)
                .setValue(this.selector.shipping_weight, pack_product.cweight)
                .call(done);
        });

        it('should enter the additional shipping costs ', function(done){
            this.client
                .waitForExist(this.selector.shipping_fees, 90000)
                .click(this.selector.shipping_fees)
                .pause(2000)
                .setValue(this.selector.shipping_fees, pack_product.cadd_ship_coast)
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

    describe('Edit product pricing', function(done){
        it('should go to the product pricing form ', function(done){
            this.client
                .waitForExist(this.selector.product_pricing_tab, 90000)
                .click(this.selector.product_pricing_tab)
                .call(done);
        });

        it('should enter the unit price', function (done) {
            this.client
                .waitForExist(this.selector.pack_unit_price, 60000)
                .click(this.selector.pack_unit_price)
                .setValue(this.selector.pack_unit_price, pack_product.unit)
                .call(done);
        });

        it('should enter the pricing unity', function (done) {
            this.client
                .waitForExist(this.selector.pricing_unity, 60000)
                .execute(function () {
                    document.querySelector('#form_step2_unity').value = "";
                })
                .setValue(this.selector.pricing_unity, pack_product.unity)
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
                .setValue(this.selector.pricing_wholesale, pack_product.wholesale)
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
                .setValue(this.selector.SEO_meta_title, pack_product.metatitle)
                .call(done);
        });

        it('should enter the meta description ', function(done){
            this.client
                .waitForExist(this.selector.SEO_meta_description, 90000)
                .click(this.selector.SEO_meta_description)
                .pause(2000)
                .setValue(this.selector.SEO_meta_description, pack_product.metadesc)
                .call(done);
        });

        it('should enter the friendly url ', function(done){
            this.client
                .waitForExist(this.selector.SEO_friendly_url, 90000)
                .click(this.selector.SEO_friendly_url)
                .pause(2000)
                .setValue(this.selector.SEO_friendly_url, pack_product.shortlink)
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

    describe('Edit the product options', function(done){
        it('should go to the product options form ', function(done){
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
                .setValue(this.selector.options_isbn, pack_product.isbn)
                .call(done);
        });

        it('should enter the EAN-13 ', function(done){
            this.client
                .waitForExist(this.selector.options_ean13, 90000)
                .click(this.selector.options_ean13)
                .pause(2000)
                .setValue(this.selector.options_ean13, pack_product.ean13)
                .call(done);
        });

        it('should enter the UPC ', function(done){
            this.client
                .waitForExist(this.selector.options_upc, 90000)
                .click(this.selector.options_upc)
                .pause(2000)
                .setValue(this.selector.options_upc, pack_product.upc)
                .call(done);
        });

        it('should click on customization button ', function(done){
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
                .setValue(this.selector.options_first_custom_field_label, pack_product.personalization.perso_text.name)
                .pause(2000)
                .waitForExist(this.selector.options_first_custom_field_type, 90000)
                .click(this.selector.options_first_custom_field_type)
                .pause(2000)
                .waitForExist(this.selector.options_first_custom_field_require, 90000)
                .click(this.selector.options_first_custom_field_require)
                .call(done);
        });

        it('should click on add a customization field button ', function(done){
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
                .setValue(this.selector.options_second_custom_field_label, pack_product.personalization.perso_file.name)
                .pause(2000)
                .waitForExist(this.selector.options_second_custom_field_type, 90000)
                .selectByValue(this.selector.options_second_custom_field_type, 0)
                .call(done);
        });

        it('should click on attach a new file button ', function(done){
            this.client
                .scroll(0,1200)
                .pause(2000)
                .waitForExist(this.selector.options_add_new_file_button, 90000)
                .click(this.selector.options_add_new_file_button)
                .pause(2000)
                .call(done);
        });

        it('should add file ', function(done){
            this.client
                .scroll(0,1200)
                .pause(2000)
                .waitForExist(this.selector.options_select_file, 90000)
                .chooseFile(this.selector.options_select_file, newFile)
                .pause(2000)
                .call(done);
        });

        it('should enter the name and description of file ', function(done){
            this.client
                .scroll(0,1200)
                .pause(2000)
                .waitForExist(this.selector.options_file_name, 90000)
                .click(this.selector.options_file_name)
                .pause(2000)
                .setValue(this.selector.options_file_name, pack_product.document_attach.name)
                .pause(2000)
                .waitForExist(this.selector.options_file_description, 90000)
                .click(this.selector.options_file_description)
                .pause(2000)
                .setValue(this.selector.options_file_description, pack_product.document_attach.desc)
                .pause(2000)
                .call(done);
        });

        it('should select the previous added file ', function(done){
            this.client
                .scroll(0,1200)
                .waitForExist(this.selector.options_file_add_button, 90000)
                .click(this.selector.options_file_add_button)
                .pause(2000)
                .call(done);
        });

        it('should choose the supplier ', function(done){
            this.client
                .scroll(0,1600)
                .pause(2000)
                .waitForExist(this.selector.options_choose_supplier, 90000)
                .click(this.selector.options_choose_supplier)
                .pause(2000)
                .call(done);
        });

        it('should enable the default supplier ', function(done){
            this.client
                .waitForExist(this.selector.options_default_supplier, 90000)
                .click(this.selector.options_default_supplier)
                .pause(2000)
                .call(done);
        });

        it('should enter the supplier reference ', function(done){
            this.client
                .scroll(0,1800)
                .pause(2000)
                .waitForExist(this.selector.options_supplier_reference, 90000)
                .click(this.selector.options_supplier_reference)
                .pause(2000)
                .setValue(this.selector.options_supplier_reference, pack_product.supplier_reference)
                .call(done);
        });

        it('should enter the product price ', function(done){
            this.client
                .waitForExist(this.selector.options_supplier_price, 90000)
                .click(this.selector.options_supplier_price)
                .pause(2000)
                .setValue(this.selector.options_supplier_price, pack_product.product_price)
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

    describe('check product ', function(done){
        it('should check the product name ', function (done) {
            this.client
                .waitForExist(this.selector.catalogue_filter_by_name, 60000)
                .click(this.selector.catalogue_filter_by_name)
                .pause(3000)
                .setValue(this.selector.catalogue_filter_by_name, pack_product.name + product_id)
                .pause(2000)
                .click(this.selector.click_outside)
                .waitForExist(this.selector.catalogue_submit_filter, 60000)
                .click(this.selector.catalogue_submit_filter)
                .pause(3000)
                .waitForExist(this.selector.catalog_product_name, 60000)
                .getText(this.selector.catalog_product_name).then(function (name) {
                    should(name).be.equal(pack_product.name + product_id)
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