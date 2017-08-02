'use strict';
var common = require('../common.webdriverio');
var path = require('path');
var should = require('should');

var today = new Date();
today.setDate(today.getDate() + 30);
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = yyyy + '-' + mm + '-' + dd;

module.exports =
{
    name : "AutoNewStandard",
    type : "standard",
    new_type : "0",
    ean13 : "0123456789987",
    upc : "012345678901",
    resume : "new automate",
    desc : "create new product in automate",
    product_reference : "new product automate",
    tags : "new,auto,standard",
    active : "yes",
    visibility : "search",
    condition : "refurbished",
    wholesale : "5",
    on_sale : "0",
    priceTE : "10",
    unit : "10",
    unity : "1",
    metatitle : "metatitle",
    metadesc : "metadesc",
    shortlink : "test_auto",
    picture:"1.png//2.jpg//3.jpg//4.gif//5.jpg//6.jpg",
    isbn : "1234567890123",
    new_category_name : "NewCategory",
    new_category_parent : "",
    product_category : "",
    tax_choosen_shortcut : "1",
    tax_rule : "4",
    redirection_page : "1",
    price_priority : "id_shop//id_country//id_group//id_currency",
    price_priority_to_all : "",

    features : {
        feature1: {
            feature: "1",
            custom_value: "5",
            value: ""
        },
        feature2: {
            feature: "2",
            custom_value: "10",
            value: ""
        },
        feature3: {
            feature: "3",
            custom_value: "15",
            value: ""
        },
        feature4: {
            feature: "4",
            custom_value: "20",
            value: ""
        },
        feature5: {
            feature: "5",
            custom_value: "",
            value: "10"
        },
        feature6: {
            feature: "6",
            custom_value: "",
            value: "3"
        },
        feature7: {
            feature: "7",
            custom_value: "",
            value: "2"
        }
    },

    ad_price : "0",
    ad_quantity : "0",
    qty_manuel : "",
    quantity : "10",
    out_stock : "0",
    qty_min : "1",
    qty_msg_stock : "Product avalaible",
    qty_msg_unstock : "Product unavalaible",
    qty_date : today,

    variations : {
        variation1: {
            compose: "Size : S//Color : Grey",
            ref: "variation_1",
            ean13: "1313131313131",
            isbn: "121212121212",
            upc: "012345678901",
            wholesale: "5",
            price_impact: "1",
            price: "10",
            priceTI: "15",
            weight_impact: "1",
            weight: "2",
            unit_impact: "1",
            unity: "10",
            minimal_quantity: "1",
            available_date: today,
            default_value: "1",
            quantity: "20",
            img_checkbox: "",
            supplier_reference: "ref_supplier",
            supplier_product_price: "10",
            supplier_product_price_currency: "1"
        },
        variation2: {
            compose: "Size : M//Color : Beige",
            ref: "variation_2",
            ean13: "3131313131313",
            isbn: "212121212121",
            upc: "123456789012",
            wholesale: "10",
            price_impact: "-1",
            price: "-5",
            priceTI: "20",
            weight_impact: "-1",
            weight: "-5",
            unit_impact: "-1",
            unity: "-5",
            minimal_quantity: "2",
            available_date: today,
            default_value: "",
            quantity: "10",
            img_checkbox: "",
            supplier_reference: "",
            supplier_product_price: "20",
            supplier_product_price_currency: "1"
        }
    },

    cwidth : "10",
    cheight : "10",
    cdepth : "10",
    cweight : "2",
    cadd_ship_coast : "5",
    carrier : "Delivery",
    avalaible_orders : "1",
    show_price : "1",
    online_only : "1",
    options_suppliers : "0",
    default_supplier : "1",
    supplier_reference : "ref_supplier",
    product_price : "10",
    price_currency : "1",

    virtual_file : {
        virtual_file: "rouge.png",
        virtual_file_name: "test_virtual_product",
        virtual_file_nb_download: "5",
        //virtual_file_exp_date:"#now[%Y-%m-%d]+60d#",
        file_nb_days: "10"
    },

    pack : {
        search: "",
        quantity: ""
    },

    specific_price : {
        shop: "1",
        currency: "1",
        country: "8",
        group: "3",
        variation: "0",
        start_date: "#now[%Y-%m-%d]-30d#",
        end_date: today,
        quantity: "1",
        price: "20",
        show_price: "1",
        reduction: "10",
        reduction_type: "amount",
        reduction_tax: "0"
    },
    document_attach : {
        file: "bleue.jpg",
        name: "bleue",
        desc: "jpg of bleue"
    },
    personalization : {
        perso_text: {
            name: "perso_text",
            type: "1",
            mandatory: "1"
        },
        perso_file: {
            name: "perso_file",
            type: "0",
            mandatory: "0"
        }
    },
    search_related_products : "Printed Dress (ref: demo_3)//Printed Summer Dress (ref: demo_5)",
    manufacturer : "1"
};