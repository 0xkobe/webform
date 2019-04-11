function initFields() {
    $("input").val("");
    $("input[name=ifrs]").prop("checked", false);
    $("select[name=informationontypeofsubmittedreport]").val("");
    $("select[name=typeofauditorassistance]").val("");
    $("select[name=classofreportingentity]").val("");
    $("select[name=number_scale]").val("1E0");
}

function onSubmit() {
    var fields = {
        "case_id": $("input[name=case_id]").val(),
        "cvrnr": $("input[name=cvrnr]").val(),
        "reportingperiodstartdate": $("input[name=reportingperiodstartdate]").val(),
        "reportingperiodenddate": $("input[name=reportingperiodenddate]").val(),
        "dateofapprovalofannualreport": $("input[name=dateofapprovalofannualreport]").val(),
        "dateofgeneralmeeting": $("input[name=dateofgeneralmeeting]").val(),
        "informationontypeofsubmittedreport": $("select[name=informationontypeofsubmittedreport]").val(),
        "typeofauditorassistance": $("select[name=typeofauditorassistance]").val(),
        "classofreportingentity": $("select[name=classofreportingentity]").val(),
        "indentificationnumbercvrofauditfirm": $("input[name=indentificationnumbercvrofauditfirm]").val(),
        "descriptionofauditor": $("input[name=descriptionofauditor]").val(),
        "nameandsurnameofauditor": $("input[name=nameandsurnameofauditor]").val(),
        "audtiors_opinion": $("input[name=audtiors_opinion]").val(),
        "audtiors_description": $("input[name=audtiors_description]").val(),
        "auditors_statement_on_management_review": $("input[name=auditors_statement_on_management_review]").val(),
        "responsibility_management": $("input[name=responsibility_management]").val(),
        "responsibility_auditor": $("input[name=responsibility_auditor]").val(),
        "auditor_comments": $("input[name=auditor_comments]").val(),
        "management_review": $("input[name=management_review]").val(),
        "name_of_financial_institution": $("input[name=name_of_financial_institution]").val(),
        "name_of_law_firm": $("input[name=name_of_law_firm]").val(),
        "averagenumberofemployees": $("input[name=averagenumberofemployees]").val(),
        "ifrs": $("input[name=ifrs]").prop("checked"),
        "unit": $("input[name=unit]").val(),
        "number_scale": $("select[name=number_scale]").val(),
        "revenue": $("input[name=revenue]").val(),
        "other_income": $("input[name=other_income]").val(),
        "costs": $("input[name=costs]").val(),
        "gross_result": $("input[name=gross_result]").val(),
        "operating_costs": $("input[name=operating_costs]").val(),
        "other_operating_income": $("input[name=other_operating_income]").val(),
        "staff_expenses": $("input[name=staff_expenses]").val(),
        "ebitda": $("input[name=ebitda]").val(),
        "depreciation": $("input[name=depreciation]").val(),
        "ebit": $("input[name=ebit]").val(),
        "interest_income": $("input[name=interest_income]").val(),
        "interest_expenses": $("input[name=interest_expenses]").val(),
        "other_net_financial_income": $("input[name=other_net_financial_income]").val(),
        "net_financial_income": $("input[name=net_financial_income]").val(),
        "ordinary_profit": $("input[name=ordinary_profit]").val(),
        "extraordinary_item": $("input[name=extraordinary_item]").val(),
        "profit_loss_before_tax": $("input[name=profit_loss_before_tax]").val(),
        "tax_expenses": $("input[name=tax_expenses]").val(),
        "profit_loss": $("input[name=profit_loss]").val(),
        "goodwill": $("input[name=goodwill]").val(),
        "other_intangible_assets": $("input[name=other_intangible_assets]").val(),
        "intangible_assets": $("input[name=intangible_assets]").val(),
        "land_and_buildings": $("input[name=land_and_buildings]").val(),
        "plant_equipment_and_fixtures": $("input[name=plant_equipment_and_fixtures]").val(),
        "other_property_plant_and_equipment": $("input[name=other_property_plant_and_equipment]").val(),
        "property_plant_and_equipment": $("input[name=property_plant_and_equipment]").val(),
        "noncurrent_receivables": $("input[name=noncurrent_receivables]").val(),
        "noncurrent_investments": $("input[name=noncurrent_investments]").val(),
        "other_noncurrent_financial_assets": $("input[name=other_noncurrent_financial_assets]").val(),
        "noncurrent_financial_assets": $("input[name=noncurrent_financial_assets]").val(),
        "noncurrent_assets": $("input[name=noncurrent_assets]").val(),
        "inventories": $("input[name=inventories]").val(),
        "current_prepayments": $("input[name=current_prepayments]").val(),
        "short_term_receivables_from_sales_and_services": $("input[name=short_term_receivables_from_sales_and_services]").val(),
        "short_term_receivables_from_group_enterprises": $("input[name=short_term_receivables_from_group_enterprises]").val(),
        "other_short_term_receivables": $("input[name=other_short_term_receivables]").val(),
        "short_term_receivables": $("input[name=short_term_receivables]").val(),
        "current_financial_assets": $("input[name=current_financial_assets]").val(),
        "cash": $("input[name=cash]").val(),
        "current_assets": $("input[name=current_assets]").val(),
        "assets": $("input[name=assets]").val(),
        "contributed_capital": $("input[name=contributed_capital]").val(),
        "reserves": $("input[name=reserves]").val(),
        'dividend': $("input[name=dividend]").val(),
        "retained_earnings": $("input[name=retained_earnings]").val(),
        "equity_before_minority_interests": $("input[name=equity_before_minority_interests]").val(),
        "minority_interests": $("input[name=minority_interests]").val(),
        "equity": $("input[name=equity]").val(),
        "provisions": $("input[name=provisions]").val(),
        "long_term_debt_to_group_enterprises": $("input[name=long_term_debt_to_group_enterprises]").val(),
        "long_term_debt_to_banks": $("input[name=long_term_debt_to_banks]").val(),
        "long_term_mortgage_debt": $("input[name=long_term_mortgage_debt]").val(),
        "equity_loan": $("input[name=equity_loan]").val(),
        "deferred_tax": $("input[name=deferred_tax]").val(),
        "other_long_term_debt": $("input[name=other_long_term_debt]").val(),
        "long_term_debt": $("input[name=long_term_debt]").val(),
        "short_term_debt_to_group_enterprises": $("input[name=short_term_debt_to_group_enterprises]").val(),
        "short_term_debt_to_banks": $("input[name=short_term_debt_to_banks]").val(),
        "short_term_mortgage_debt": $("input[name=short_term_mortgage_debt]").val(),
        "short_term_trade_payables": $("input[name=short_term_trade_payables]").val(),
        "short_term_tax_payables": $("input[name=short_term_tax_payables]").val(),
        "other_short_term_debt": $("input[name=other_short_term_debt]").val(),
        "short_term_debt": $("input[name=short_term_debt]").val(),
        "debt": $("input[name=debt]").val(),
        "liabilities_and_equity": $("input[name=liabilities_and_equity]").val()
    }

    if (fields.unit == "") {
        alert("unit field can't be null!");
        return;
    }

    if (fields.profit_loss == "") {
        alert("profit loss field can't be null!");
        return;
    }

    if (fields.assets == "") {
        alert("assets field can't be null!");
        return;
    }

    if (fields.contributed_capital == "") {
        alert("contributed capital field can't be null!");
        return;
    }

    if (fields.equity == "") {
        alert("equity field can't be null!");
        return;
    }

    if (fields.liabilities_and_equity == "") {
        alert("liabilities and equity field can't be null!");
        return;
    }

    var ebitda = new BigNumber(fields.ebitda);
    var ebit = new BigNumber(fields.ebit);
    var depreciation = new BigNumber(fields.depreciation);
    if (!ebitda.isEqualTo(ebit.plus(depreciation))) {
        alert("EBITDA should be same with EBIT + depreciation!");
        return;
    }

    var net_financial_income = new BigNumber(fields.net_financial_income);
    var interest_income = new BigNumber(fields.interest_income);
    var interest_expenses = new BigNumber(fields.interest_expenses);
    var other_net_financial_income = new BigNumber(fields.other_net_financial_income);
    if (!net_financial_income.isEqualTo(interest_income.plus(interest_expenses.plus(other_net_financial_income)))) {
        alert("net financial income should be same with interest income + interest expenses + other net financial income!");
        return;
    }

    var profit_loss = new BigNumber(fields.profit_loss);
    var extraordinary_item = new BigNumber(fields.extraordinary_item);
    var tax_expenses = new BigNumber(fields.tax_expenses);
    if (!profit_loss.isEqualTo(ebit.plus(net_financial_income.plus(extraordinary_item.plus(tax_expenses))))) {
        alert("profit loss should be same with EBIT + net financial income + extraordinary item + tax expenses!");
        return;
    }

    var intangible_assets = new BigNumber(fields.intangible_assets);
    var goodwill = new BigNumber(fields.goodwill);
    var other_intangible_assets = new BigNumber(fields.other_intangible_assets);
    if (!intangible_assets.isEqualTo(goodwill.plus(other_intangible_assets))) {
        alert("intangible assets should be same with goodwill + other_intangible_assets!");
        return;
    }

    var property_plant_and_equipment = new BigNumber(fields.property_plant_and_equipment);
    var land_and_buildings = new BigNumber(fields.land_and_buildings);
    var plant_equipment_and_fixtures = new BigNumber(fields.plant_equipment_and_fixtures);
    var other_property_plant_and_equipment = new BigNumber(fields.other_property_plant_and_equipment);
    if (!property_plant_and_equipment.isEqualTo(land_and_buildings.plus(plant_equipment_and_fixtures.plus(other_property_plant_and_equipment)))) {
        alert("property plant and equipment should be same with land_and_buildings + plant_equipment_and_fixtures + other_property_plant_and_equipment!");
        return;
    }

    var noncurrent_financial_assets = new BigNumber(fields.noncurrent_financial_assets);
    var noncurrent_receivables = new BigNumber(fields.noncurrent_receivables);
    var noncurrent_investments = new BigNumber(fields.noncurrent_investments);
    var other_noncurrent_financial_assets = new BigNumber(fields.other_noncurrent_financial_assets);
    if (!noncurrent_financial_assets.isEqualTo(noncurrent_receivables.plus(noncurrent_investments.plus(other_noncurrent_financial_assets)))) {
        alert("noncurrent financial assets should be same with noncurrent_receivables + noncurrent_investments + other_noncurrent_financial_assets!");
        return;
    }

    var noncurrent_assets = new BigNumber(fields.noncurrent_assets);
    if (!noncurrent_assets.isEqualTo(intangible_assets.plus(property_plant_and_equipment.plus(noncurrent_financial_assets)))) {
        alert("nnoncurrent assets should be same with intangible_assets + property_plant_and_equipment + noncurrent_financial_assets!");
        return;
    }

    var short_term_receivables = new BigNumber(fields.short_term_receivables);
    var short_term_receivables_from_sales_and_services = new BigNumber(fields.short_term_receivables_from_sales_and_services);
    var short_term_receivables_from_group_enterprises = new BigNumber(fields.short_term_receivables_from_group_enterprises);
    var other_short_term_receivables = new BigNumber(fields.other_short_term_receivables);
    if (!short_term_receivables.isEqualTo(short_term_receivables_from_sales_and_services.plus(short_term_receivables_from_group_enterprises.plus(other_short_term_receivables)))) {
        alert("short term receivables should be same with short_term_receivables_from_sales_and_services + short_term_receivables_from_group_enterprises + other_short_term_receivables!");
        return;
    }

    var current_assets = new BigNumber(fields.current_assets);
    var inventories = new BigNumber(fields.inventories);
    var current_financial_assets = new BigNumber(fields.current_financial_assets);
    var cash = new BigNumber(fields.cash);
    if (!current_assets.isEqualTo(inventories.plus(short_term_receivables.plus(current_financial_assets.plus(cash))))) {
        alert("current assets should be same with inventories + short_term_receivables + current_financial_assets + cash!");
        return;
    }

    var assets = new BigNumber(fields.assets);
    if (!assets.isEqualTo(noncurrent_assets.plus(current_assets))) {
        alert("assets should be same with noncurrent assets + current assets!");
        return;
    }

    var equity = new BigNumber(fields.equity);
    var contributed_capital = new BigNumber(fields.contributed_capital);
    var reserves = new BigNumber(fields.reserves);
    var dividend = new BigNumber(fields.dividend);
    var retained_earnings = new BigNumber(fields.retained_earnings);
    var minority_interests = new BigNumber(fields.minority_interests);
    if (!equity.isEqualTo(contributed_capital.plus(reserves.plus(dividend.plus(retained_earnings.plus(minority_interests)))))) {
        alert("equity should be same with contributed capital + reserves + dividend + retained earnings + minority interests!");
        return;
    }

    var long_term_debt = new BigNumber(fields.long_term_debt);
    var long_term_debt_to_group_enterprises = new BigNumber(fields.long_term_debt_to_group_enterprises);
    var long_term_debt_to_banks = new BigNumber(fields.long_term_debt_to_banks);
    var long_term_mortgage_debt = new BigNumber(fields.long_term_mortgage_debt);
    var equity_loan = new BigNumber(fields.equity_loan);
    var deferred_tax = new BigNumber(fields.deferred_tax);
    var other_long_term_debt = new BigNumber(fields.other_long_term_debt);
    if (!long_term_debt.isEqualTo(long_term_debt_to_group_enterprises.plus(long_term_debt_to_banks.plus(long_term_mortgage_debt.plus(equity_loan.plus(deferred_tax.plus(other_long_term_debt))))))) {
        alert("long term debt should be same with long_term_debt_to_group_enterprises + long_term_debt_to_banks + long_term_mortgage_debt + equity_loan + deferred_tax + other_long_term_debt!");
        return;
    }

    var short_term_debt = new BigNumber(fields.short_term_debt);
    var short_term_debt_to_group_enterprises = new BigNumber(fields.short_term_debt_to_group_enterprises);
    var short_term_debt_to_banks = new BigNumber(fields.short_term_debt_to_banks);
    var short_term_mortgage_debt = new BigNumber(fields.short_term_mortgage_debt);
    var short_term_trade_payables = new BigNumber(fields.short_term_trade_payables);
    var short_term_tax_payables = new BigNumber(fields.short_term_tax_payables);
    var other_short_term_debt = new BigNumber(fields.other_short_term_debt);
    if (!short_term_debt.isEqualTo(short_term_debt_to_group_enterprises.plus(short_term_debt_to_banks.plus(short_term_mortgage_debt.plus(short_term_trade_payables.plus(short_term_tax_payables.plus(other_short_term_debt))))))) {
        alert("short term debt should be same with short_term_debt_to_group_enterprises + short_term_debt_to_banks + short_term_mortgage_debt + short_term_trade_payables + short_term_tax_payables + other_short_term_debt!");
        return;
    }

    var debt = new BigNumber(fields.debt);
    if (!debt.isEqualTo(short_term_debt.plus(long_term_debt))) {
        alert("debt should be same with short term debt + long term debt!");
        return;
    }

    var liabilities_and_equity = new BigNumber(fields.liabilities_and_equity);
    if (!liabilities_and_equity.isEqualTo(assets)) {
        alert("liabilities and equity should be same with assets!");
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Verified and Stored in the Database!");
            initFields();
        }
    };
    xhttp.open("POST", "/store", true);
    xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhttp.send(JSON.stringify(fields));
}