'use strict';
var should = require('should');
var common = require('./common.webdriverio');


describe('Allscenario', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.client = common.getClient();
        this.client.call(done);
    });

    after(function (done) {
        this.client
            .end()
            .call(done);
    });

    //install prestashop
    //require('./install_prestashop.js');

    //install and uninstall module + search and sort modules
    if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        require('./scenario/BO/Module/install_and_uninstall_module.js');
        require('./scenario/BO/Module/install_module.js');
        require('./scenario/BO/Module/sort_modules.webdriverio');
        require('./scenario/BO/Module/search_module.webdriverio');
    }

    //create a product in BO and check it in FO
    require('./scenario/BO/Product/create_standard_product.webdriverio');
    require('./scenario/BO/Product/create_virtual_product.webdriverio');
    require('./scenario/BO/Product/create_pack_product.webdriverio');
    require('./scenario/BO/create_product.webdriverio');
    require('./scenario/FO/check_product.webdriverio');

    //Create and delete employee
    require('./scenario/BO/Employee/create_employee.webdriverio');
    require('./scenario/BO/Employee/delete_employee.webdriverio');

    //create an order in FO and check it in BO
    require('./scenario/FO/buy_product.webdriverio');
    require('./scenario/BO/Order/check_order.webdriverio');

    //create an account in FO
    require('./scenario/FO/create_account.webdriverio');

    if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        require('./scenario/BO/Module/uninstall_module.js');
    }

});
