'use strict';
var common = require('../common.webdriverio');
var path = require('path');
var should = require('should');

function getCustomDate(numberOfDay) {
    var today = new Date();
    today.setDate(today.getDate() + numberOfDay);
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd;
    }

    if(mm<10) {
        mm = '0'+mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

module.exports =
{
    name:"AutoNewPack",
    type:"pack of products",
    new_type:"1",
    ref:"new product automate",
    ean13:"0123456789987",
    upc:"012345678901",
    resume:"nouveau automate",
    desc:"nouveau produit cree en automate",
    tags:"new,auto,standard",
    active:"yes",
    visibility:"search",
    condition:"refurbished",
    wholesale:"5",
    on_sale:"0",
    priceTE:"10",
    unit:"10",
    unity:"1",
    metatitle:"metatitle",
    metadesc:"metadesc",
    shortlink:"test_auto",
    picture:"1.png",
    isbn:"1234567890123",
    new_category_name:"1",
    new_category_parent:"",
    product_category:"",
    tax_choosen_shortcut:"0",
    tax_rule:"4",
    redirection_page:"1",
    price_priority: "id_shop//id_country//id_group//id_currency",
    price_priority_to_all: "",
    features:"",
    ad_price:"0",
    ad_quantity:"0",
    qty_manuel:"",
    quantity:"10",
    out_stock:"0",
    qty_min:"1",
    qty_msg_stock:"Product avalaible",
    qty_msg_unstock:"Product unavalaible",
    qty_date:getCustomDate(30),
    variation:"",
    cwidth:"10",
    cheight:"10",
    cdepth:"10",
    cweight:"2",
    cadd_ship_coast:"5",
    carrier:"Delivery",
    avalaible_orders:"1",
    show_price:"1",
    online_only:"1",
    options_suppliers:"0",
    default_supplier:"1",
    supplier_reference:"ref_supplier",
    product_price:"10",
    price_currency:"1",
    virtual_file:
        {
            virtual_file:"rouge.png",
            virtual_file_name:"test_virtual_product",
            virtual_file_nb_download:"5",
            virtual_file_exp_date:getCustomDate(60),
            file_nb_days:"10"
        },
    pack: {
        pack1: {
            search: "Printed Dress",
            quantity: "1"
        },
        pack2: {
            search: "Printed Chiffon Dress",
            quantity: "3"
        }
    },
    specific_price:
        {
            shop:"1",
            currency:"1",
            country:"8",
            group:"3",
            variation:"0",
            start_date:getCustomDate(-30),
            end_date:getCustomDate(30),
            quantity:"1",
            price:"20",
            show_price:"1",
            reduction:"10",
            reduction_type:"amount",
            reduction_tax:"0"
        },
    document_attach:
        {
            file:"bleue.jpg",
            name:"",
            desc:"jpg of bleue"
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
    search_related_products:"Printed Dress (ref: demo_3)//Printed Summer Dress (ref: demo_5)",
    manufacturer:"1",
    quantity_pack:"2"
};