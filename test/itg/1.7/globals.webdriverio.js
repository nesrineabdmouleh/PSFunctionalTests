'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = argv.MODULE;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';
global.name_table= [];
global.nameTableAfterSort= [];
global.price_table= [];
global.priceTableAfterSort= [];
global.decreasingPrice_table= [];
global.decreasingPriceTableAfterSort= [];
global.product_id_table = [];
global.product_id_table_after_sort = [];
global.product_name_table = [];
global.product_name_table_after_sort = [];
global.product_reference_table = [];
global.product_reference_table_after_sort = [];
global.author_table= [];
global.description_table= [];
global.tech_name_table= [];
global.child_categories_table= [];
global.categories_table= [];
global.type_table= [];
global.check_module= new Array();

module.exports = {
    selector: {
        //Installation
        language: '//*[@id="langList"]',
        next_step: '//*[@id="btNext"]',
        agree_checkbox: '//*[@id="set_license"]',
        test_result_compatibility: '//*[@id="sheet_"]/h3',
        shop_name: '//*[@id="infosShop"]',
        country_fo: '//*[@id="infosCountry_chosen"]',
        country_france: '//*[@id="infosCountry_chosen"]/div/ul/li[2]',
        first_name: '//*[@id="infosFirstname"]',
        last_name: '//*[@id="infosName"]',
        email_address: '//*[@id="infosEmail"]',
        shop_password: '//*[@id="infosPassword"]',
        retype_password: '//*[@id="infosPasswordRepeat"]',
        database_address: '//*[@id="dbServer"]',
        database_name: '//*[@id="dbName"]',
        database_login: '//*[@id="dbLogin"]',
        database_password: '//*[@id="dbPassword"]',
        database_server_address: '//*[@id="dbServer"]',
        test_conection: '#btTestDB',
        dbResultCheck: '//*[@id="dbResultCheck"]',
        step_success: '[class:"class="process_step success"]',
        create_file_parameter_step: '//li[@id="process_step_generateSettingsFile" and @class="process_step success"]',
        create_database_step: '//li[@id="process_step_installDatabase" and @class="process_step success"]',
        create_default_shop_step: '//li[@id="process_step_installDefaultData" and @class="process_step success"]',
        create_database_table_step: '//li[@id="process_step_populateDatabase" and @class="process_step success"]',
        create_shop_informations_step: '//li[@id="process_step_configureShop" and @class="process_step success"]',
        create_demonstration_data_step: '//li[@id="process_step_installFixtures" and @class="process_step success"]',
        install_module_step: '//li[@id="process_step_installModules" and @class="process_step success"]',
        install_addons_modules_step: '//li[@id="process_step_installModulesAddons" and @class="process_step success"]',
        install_theme_step: '//li[@id="process_step_installTheme" and @class="process_step success"]',
        finish_step: '//*[@id="install_process_success"]/div[1]/h2',


        //BO
        //Log in & Log out
        login: '#email',
        password: '#passwd',
        login_btn: '[name="submitLogin"]',
        exit_welcome: '[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
        click_outside: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
        profil: '#employee_infos',
        new_profil: '.employee-dropdown.dropdown > div',
        logout: '#header_logout',
        products: '#subtab-AdminCatalog',
        //go_to_catalog: '//*[@id="form"]/div[4]/div[2]/div/div[2]/a[2]',
        go_to_catalog: '//*[@id="product_form_save_go_to_catalog_btn"]',
        more_option: '[class="btn btn-primary dropdown-toggle"]',
        new_product: '#page-header-desc-configuration-add',
        menu: '#nav-sidebar',
        product_name: '#form_step1_name_1',
        catalog_list: '#product_catalog_list',
        green_validation: '[class="growl growl-notice growl-medium"]',
        close_green_validation: '.growl-close',
        red_validation: '[class="growl growl-error growl-medium"]',
        summary_button: '[href="#description_short"]',
        summary: 'form_step1_description_short_1_ifr', //not declare than an id because using into function "frame" that not need this information;
        description_button: '[href="#description"]',
        description: 'form_step1_description_1_ifr',//not declare than an id because using into function "frame" that not need this information;
        priceTE_shortcut: '#form_step1_price_shortcut',
        quantity_shortcut: '#form_step1_qty_0_shortcut',
        picture: '[class="dz-hidden-input"]',
        save_product_btn: '//*[@id="submit"]',
        save_product: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
        product_combinations_tab: '//*[@id="tab_step3"]/a',
        product_shipping_tab: '//*[@id="tab_step4"]/a',
        product_pricing_tab: '//*[@id="tab_step2"]/a',
        product_SEO_tab: '//*[@id="tab_step5"]/a',
        product_options_tab: '//*[@id="tab_step6"]/a',
        catalog_product_name: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[3]/a',
        picture_cover: '.iscover',
        product_online: '.switch-input ',
        catalogue_filter_by_name: '//input[@name="filter_column_name"]',
        catalogue_submit_filter: '//button[@name="products_filter_submit"]',
        catalogue_filter_reset:  '//button[@type="reset" and @name="products_filter_reset"]',
        orders: '#subtab-AdminParentOrders',
        orders_form: '#form-order',
        order_product_name: '.productName',
        order_quantity: '.product_quantity_show',
        order_total: '#total_order > td.amount.text-right.nowrap',
        //order_reference: '#content > div.row > div > div:nth-child(5) > div.col-lg-7 > div:nth-child(1) > div.panel-heading > span:nth-child(2)',
        order_reference: '((//div[@class="panel-heading"])[1]/span)[1]',
        modules_menu: '#subtab-AdminParentModulesSf',
        //For 1.7.2.0
        modules_search: '.pstaggerAddTagInput.module-tags-input',
        modules_search_button: '.input-group-addon.module-search-icon',
        //For 1.7.2.1
        /*modules_search: '//!*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[4]/div/div[1]/div/div/div[2]/input',
        modules_search_button: '.btn.btn-primary.pull-right.search-button',*/
        modules_page_loaded: '.module-search-result-wording',
        modules_installed: '(//div[@class="page-head-tabs"]/a)[2]',
        modules_validate_uninstall: '//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
        close_sf_toolbar: '//a[@class="hide-button"]',
        module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
        install_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
        //For 1.7.2.0
        uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle light-button"]',
        //For 1.7.2.1
        //uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
        uninstall_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
        modal_confirm_uninstall : '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
        catalogue_select_product: '//input[@name="bulk_action_selected_products[]"]',
        catalogue_bulk_action_button: '#product_bulk_menu',
        catalogue_bulk_action_delete_option: '//div[@class="btn-group dropup open"]/div[1]/a[4]',
        catalogue_delete_now_button: '//div[@class="modal-footer"]/button[2]',
        add_new_employee_button: '//*[@id="page-header-desc-employee-new_employee"]',
        employee_first_name: '//*[@id="firstname"]',
        employee_last_name: '//*[@id="lastname"]',
        employee_email: '//*[@id="email"]',
        employee_passwd: '//*[@id="passwd"]',
        employee_subscribe_newsletter: '//*[@id="fieldset_0"]/div[2]/div[6]/div/span/label[2]',
        employee_profile_select: '//*[@id="id_profile"]',
        employee_save_button: '//*[@id="employee_form_submit_btn"]',
        employees_firstname: '//*[@id="form-employee"]/div/div[2]/table/tbody/tr[2]/td[3]',
        employees_lastname: '//*[@id="form-employee"]/div/div[2]/table/tbody/tr[2]/td[4]',
        employees_email: '//*[@id="form-employee"]/div/div[2]/table/tbody/tr[2]/td[5]',
        employee_filter_by_email: '//input[@name="employeeFilter_email"]',
        employee_submit_filter: '//button[@id="submitFilterButtonemployee"]',
        employees_select_employee: '//input[@name="employeeBox[]"]',
        employee_bulk_action_button: '//div[@class="btn-group bulk-actions dropup"]/button',
        employee_bulk_action_delete_option: '//div[@class="btn-group bulk-actions dropup open"]/ul/li[7]/a',
        employee_delete_mode: '#deleteMode_deleted',
        employee_delete_button: '//div[@class="alert alert-warning"]/input[@type="submit" and @value="Delete"]',
        employee_green_block_validation: '//div[@class="alert alert-success"]',
        //For 1.7.2.0
        sort_module: '#main-div > div.content-div > div.row > div > div.row > div > div.module-sorting-menu > div > div:nth-child(2) > div.module-sorting.module-sorting-author.pull-right > select',

        //For 1.7.2.1
        //sort_module: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[7]/div/div[2]/div/select',
        view_list: '//*[@id="module-sort-list"]',
        advanced_parameters: '#subtab-AdminAdvancedParameters',
        team: '//*[@id="subtab-AdminParentEmployees"]/a',
        click_outside_employee: '//*[@id="form-employee"]/div/div[1]/span[1]',
        nbr_module: '[class="module-sorting-search-wording"]',
        sort_id_desc: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[1]/span[2]',
        sort_id_asc: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[1]/span[1]',
        sort_name_desc: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]/span[2]',
        sort_name_asc: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]/span[1]',
        sort_reference_desc: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[4]/span[2]',
        sort_reference_asc: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[4]/span[1]',
        sort_category_desc: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[5]/span[2]',

        //FO
        access_loginFO: 'div.user-info > a',
        loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
        passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
        login_btnFO: '//*[@id="login-form"]/footer/button',
        logoutFO: '.logout',
        //create_account: '#email_create',
        create_account_button: '[data-link-action="display-register-form"]',
        create_account_firstname: '[name="firstname"]',
        create_account_lastname: '[name="lastname"]',
        create_account_email: '[name="email"]',
        create_account_password: '[name="password"]',
        create_account_info_validate: '[data-link-action="save-customer"]',
        logo_home_pageFO: '.logo.img-responsive',
        first_product_home_page: '.thumbnail.product-thumbnail',
        add_to_cart: '.btn.btn-primary.add-to-cart',
        first_product_home_page_name: '[itemprop="name"]',
        product_image: '#content',
        product_name_details: '[itemprop="name"]',
        product_price_details: '[itemprop="price"]',
        product_quantity_details: '#quantity_wanted',
        layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
        layer_cart_name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
        layer_cart_price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
        layer_cart_quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
        layer_cart_command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
        //*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/a
        //for 1.7.1.0
        //layer_cart_command_button: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
        //command_product_quantity: '//div[@class="product-line-grid-body col-md-5 col-xs-5"]/div[5]',
        command_product_name: '(//div[@class="product-line-info"])[1]/a',
        command_product_price: '//*[@id="main"]/div/div[1]/div/div[2]/ul/li/div/div[2]/div[2]/div/span',

        command_button_checkout: '//*[@id="main"]/div/div[2]/div[1]/div[2]/div/a',
        check_out_step1: '#checkout-personal-information-step',
        check_out_step2: '#checkout-addresses-step',
        checkout_step2_continue_button: '//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
        check_out_step3: '#checkout-delivery-step',
        checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
        check_out_step4: '#checkout-payment-step',
        checkout_step4_payment: '//*[@id="payment-option-2"]',
        checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
        checkout_step4_order: '#payment-confirmation >div > button',
        checkout_total: '//div[@class="cart-summary-line cart-total"]/span[2]',
        order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
        order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
        order_confirmation_price2: '#content-hook_payment_return > div > div > div > dl > dd:nth-child(2)',
        order_confirmation_ref: '(//div[@id="order-details"]/ul/li)[1]',
        search_product: '.ui-autocomplete-input',
        search_product_button: '.material-icons.search',
        search_product_result_image: '.thumbnail.product-thumbnail',
        search_product_result_name: '.h3.product-title > a',
        search_product_result_price: '[itemprop="price"]',
        close_error: '//*[@id="error-modal"]/div/div/button',
        list_module: '//*[@id="modules-list-container-all"]',
        product_combinations: '//*[@id="show_variations_selector"]/div[2]/label/input',
        product_create_category_btn: '//*[@id="add-category-button"]',
        product_category_name_input: '//*[@id="form_step1_new_category_name"]',
        category_create_btn: '//*[@id="form_step1_new_category_save"]',
        product_add_brand_btn: '//*[@id="add_brand_button"]',
        product_brand_select: '//*[@id="manufacturer-content"]/div/div[1]/fieldset/span',
        product_brand_select_option: '//*[@id="select2-form_step1_id_manufacturer-results"]/li[2]',
        add_related_product_btn: '//*[@id="add-related-product-button"]',
        search_add_related_product_input: '//*[@id="form_step1_related_products"]',
        related_product_item: '//*[@id="related-content"]/div[2]/fieldset/div/span/div/div/div[1]',
        product_add_feature_btn: '//*[@id="add_feature_button"]',
        feature_select: '//*[@id="features-content"]/div/div/div[1]/fieldset/span/span[1]/span',
        feature_select2: '//*[@id="features-content"]/div/div[2]/div[1]/fieldset/span/span[1]/span',
        feature_select3: '//*[@id="features-content"]/div/div[3]/div[1]/fieldset/span/span[1]/span',
        feature_select4: '//*[@id="features-content"]/div/div[4]/div[1]/fieldset/span/span[1]/span',
        feature_select5: '//*[@id="features-content"]/div/div[5]/div[1]/fieldset/span/span[1]/span',
        feature_select6: '//*[@id="features-content"]/div/div[6]/div[1]/fieldset/span/span[1]/span',
        feature_select7: '//*[@id="features-content"]/div/div[7]/div[1]/fieldset/span/span[1]/span',
        feature_select_option_height: '//*[@id="select2-form_step1_features_0_feature-results"]/li[2]',
        feature_custom_value_height: '//*[@id="form_step1_features_0_custom_value_1"]',
        feature_select_option_width: '//*[@id="select2-form_step1_features_1_feature-results"]/li[3]',
        feature_custom_value_width: '//*[@id="form_step1_features_1_custom_value_1"]',
        feature_select_option_depth: '//*[@id="select2-form_step1_features_2_feature-results"]/li[4]',
        feature_custom_value_depth: '//*[@id="form_step1_features_2_custom_value_1"]',
        feature_select_option_weight: '//*[@id="select2-form_step1_features_3_feature-results"]/li[5]',
        feature_custom_value_weight: '//*[@id="form_step1_features_3_custom_value_1"]',
        feature_select_option_compositions: '//*[@id="select2-form_step1_features_4_feature-results"]/li[6]',
        feature_value_compositions: '//*[@id="features-content"]/div/div[5]/div[2]/fieldset/span/span[1]/span',
        feature_option_value_compositions: '//*[@id="select2-form_step1_features_4_value-results"]/li[10]',
        feature_select_option_styles: '//*[@id="select2-form_step1_features_5_feature-results"]/li[7]',
        feature_value_styles: '//*[@id="features-content"]/div/div[6]/div[2]/fieldset/span/span[1]/span',
        feature_option_value_styles: '//*[@id="select2-form_step1_features_5_value-results"]/li[3]',
        feature_select_option_properties: '//*[@id="select2-form_step1_features_6_feature-results"]/li[8]',
        feature_value_properties: '//*[@id="features-content"]/div/div[7]/div[2]/fieldset/span/span[1]/span',
        feature_option_value_properties: '//*[@id="select2-form_step1_features_6_value-results"]/li[2]',
        product_reference: '//*[@id="form_step6_reference"]',
        combination_size_s: '//*[@id="attribute-group-1"]/div/div[1]/label',
        combination_size_m: '//*[@id="attribute-group-1"]/div/div[2]/label',
        combination_color_gray: '//*[@id="attribute-group-3"]/div/div[1]/label',
        combination_color_beige: '//*[@id="attribute-group-3"]/div/div[3]/label',
        combination_generate_button: '//*[@id="create-combinations"]',
        combination_edit_first_variation: '//*[@id="accordion_combinations"]/tr[1]/td[7]/div[1]/a',
        combination_edit_second_variation: '//*[@id="accordion_combinations"]/tr[2]/td[7]/div[1]/a',
        combination_first_details_qty: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[1]/fieldset/input',//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[1]/fieldset/input
        combination_first_details_ref: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[4]/fieldset/input',
        combination_first_details_minimal_quantity: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[3]/fieldset/input',
        combination_first_details_available_date: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[2]/fieldset/div/input',
        combination_first_details_wholesale: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[4]/div[1]/fieldset/div/input',
        combination_first_details_priceTI: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[4]/div[3]/fieldset/div/input',
        combination_first_details_unity: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[5]/div[2]/fieldset/div/input',
        combination_first_details_weight: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[5]/div[3]/fieldset/div/input',
        combination_first_details_ISBN_code: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[6]/div[1]/fieldset/input',
        combination_first_details_EAN13: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[6]/div[2]/fieldset/input',
        combination_first_details_UPC: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[6]/div[3]/fieldset/input',
        combination_first_details_back_to_product_btn: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[1]/button',
        combination_second_details_qty: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[1]/fieldset/input',//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[1]/fieldset/input
        combination_second_details_ref: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[4]/fieldset/input',
        combination_second_details_minimal_quantity: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[3]/fieldset/input',
        combination_second_details_available_date: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[2]/fieldset/div/input',
        combination_second_details_wholesale: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[4]/div[1]/fieldset/div/input',
        combination_second_details_priceTI: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[4]/div[3]/fieldset/div/input',
        combination_second_details_unity: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[5]/div[2]/fieldset/div/input',
        combination_second_details_weight: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[5]/div[3]/fieldset/div/input',
        combination_second_details_ISBN_code: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[6]/div[1]/fieldset/input',
        combination_second_details_EAN13: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[6]/div[2]/fieldset/input',
        combination_second_details_UPC: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[6]/div[3]/fieldset/input',
        combination_second_details_back_to_product_btn: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[1]/button',
        combination_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
        combination_label_in_stock: '//*[@id="form_step3_available_now_1"]',
        combination_label_out_stock: '//*[@id="form_step3_available_later_1"]',
        shipping_width: '//*[@id="form_step4_width"]',
        shipping_height: '//*[@id="form_step4_height"]',
        shipping_depth: '//*[@id="form_step4_depth"]',
        shipping_weight: '//*[@id="form_step4_weight"]',
        shipping_fees: '//*[@id="form_step4_additional_shipping_cost"]',
        shipping_available_carriers: '//*[@id="form_step4_selectedCarriers_1"]',
        pricing_unity: '#form_step2_unity',
        pricing_tax_rule_select: '//*[@id="step2"]/div/div/div/div/div[3]/div/div[1]/span',
        pricing_tax_rule_option: '//*[@id="select2-form_step2_id_tax_rules_group-results"]/li[4]',
        pricing_wholesale: '//*[@id="form_step2_wholesale_price"]',
        pricing_first_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[2]/fieldset/span',
        pricing_first_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_0-results"]/li[1]',
        pricing_second_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[3]/fieldset/span',
        pricing_second_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_1-results"]/li[3]',
        pricing_third_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[4]/fieldset/span',
        pricing_third_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_2-results"]/li[4]',
        pricing_foreth_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[5]/fieldset/span',
        pricing_foreth_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_3-results"]/li[2]',
        SEO_meta_title: '//*[@id="form_step5_meta_title_1"]',
        SEO_meta_description: '//*[@id="form_step5_meta_description_1"]',
        SEO_friendly_url: '//*[@id="form_step5_link_rewrite_1"]',
        options_visibility: '//*[@id="step6"]/div/div/div/div/div/div[2]/div/span',
        options_visibility_option: '//*[@id="select2-form_step6_visibility-results"]/li[3]',
        options_online_only: '//*[@id="form_step6_display_options_online_only"]',
        options_condition_select: '//*[@id="step6"]/div/div/div/div/div/div[6]/fieldset[1]/span',
        options_condition_option: '//*[@id="select2-form_step6_condition-results"]/li[3]',
        options_isbn: '//*[@id="form_step6_isbn"]',
        options_ean13: '//*[@id="form_step6_ean13"]',
        options_upc: '//*[@id="form_step6_upc"]',
        options_add_customization_field_button: '//*[@id="custom_fields"]/a',
        options_first_custom_field_label: '//*[@id="form_step6_custom_fields_0_label_1"]',
        options_first_custom_field_type: '//*[@id="form_step6_custom_fields_0_type"]/option[1]',
        options_first_custom_field_require: '//*[@id="form_step6_custom_fields_0_require"]',
        options_second_custom_field_label: '//*[@id="form_step6_custom_fields_1_label_1"]',
        options_second_custom_field_type: '//*[@id="form_step6_custom_fields_1_type"]',
        options_add_new_file_button: '//*[@id="step6"]/div/div/div/div/div/div[11]/div/a',
        options_select_file: '//*[@id="form_step6_attachment_product_file"]',
        options_file_name: '//*[@id="form_step6_attachment_product_name"]',
        options_file_description: '//*[@id="form_step6_attachment_product_description"]',
        options_file_add_button: '//*[@id="form_step6_attachment_product_add"]',
        options_file_checkbox: '//*[@id="form_step6_attachments_0"]',
        options_choose_supplier: '//*[@id="form_step6_suppliers_0"]',


        //pack product
        product_quantities_tab: '//*[@id="tab_step3"]/a',
        product_type: '//*[@id="select2-form_step1_type_product-container"]',
        product_pack_type: '//*[@id="select2-form_step1_type_product-results"]/li[2]',
        product_quantity_shortcut: '//*[@id="form_step1_qty_0_shortcut"]',
        search_product_pack: '//*[@id="form_step1_inputPackItems"]',
        product_item_pack: '//*[@id="js_form_step1_inputPackItems"]/div/div[1]/span/div/div/div[1]/table/tbody/tr[1]',
        product_pack_item_quantity: '//*[@id="form_step1_inputPackItems-curPackItemQty"]',
        product_pack_add_button: '//*[@id="form_step1_inputPackItems-curPackItemAdd"]',
        product_quantity_input: '//*[@id="form_step3_qty_0"]',
        minimum_quantity_sale: '//*[@id="form_step3_minimal_quantity"]',
        pack_stock_type: '//*[@id="select2-form_step3_pack_stock_type-container"]',
        pack_stock_type_option: '//*[@id="select2-form_step3_pack_stock_type-results"]/li[3]',
        pack_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
        pack_label_in_stock: '//*[@id="form_step3_available_now_1"]',
        pack_label_out_stock: '//*[@id="form_step3_available_later_1"]',
        pack_availability_date: '//*[@id="form_step3_available_date"]',
        pack_unit_price: '//*[@id="form_step2_unit_price"]',
        options_default_supplier: '//*[@id="form_step6_default_supplier_0"]',
        options_supplier_reference: '//*[@id="form_step6_supplier_combination_1_0_supplier_reference"]',
        options_supplier_price: '//*[@id="form_step6_supplier_combination_1_0_product_price"]',


        //virtual product
        virtual_product_tab : '//*[@id="tab_step3"]/a',
        virtual_product_associated_file : '//*[@id="form_step3_virtual_product_is_virtual_file_0"]',
        virtual_product_file : '//*[@id="form_step3_virtual_product_file"]',
        virtual_product_file_name : '//*[@id="form_step3_virtual_product_name"]',
        virtual_product_file_nb_download : '//*[@id="form_step3_virtual_product_nb_downloadable"]',
        virtual_product_file_exp_date : '//*[@id="form_step3_virtual_product_expiration_date"]',
        virtual_product_file_nb_days : '//*[@id="form_step3_virtual_product_nb_days"]',
        virtual_product_save_button : '//*[@id="form_step3_virtual_product_save"]',
        virtual_product_availability_preferences : '//*[@id="form_step3_out_of_stock_0"]',
        virtual_product_label_in_stock: '//*[@id="form_step3_available_now_1"]',
        virtual_product_label_out_stock: '//*[@id="form_step3_available_later_1"]',
        virtual_product_availability_date: '//*[@id="form_step3_available_date"]',
        virtual_product_type : '//*[@id="form"]/div[1]/div[1]/div[1]/div[2]',


    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};