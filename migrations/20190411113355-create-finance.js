'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('finances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      case_id: {
        type: Sequelize.STRING
      },
      cvrnr: {
        type: Sequelize.CHAR(8)
      },
      reportingperiodstartdate: {
        type: Sequelize.DATEONLY
      },
      reportingperiodenddate: {
        type: Sequelize.DATEONLY
      },
      dateofapprovalofannualreport: {
        type: Sequelize.DATEONLY
      },
      dateofgeneralmeeting: {
        type: Sequelize.DATEONLY
      },
      informationontypeofsubmittedreport: {
        type: Sequelize.ENUM,
        values: [null]
      },
      typeofauditorassistance: {
        type: Sequelize.ENUM,
        values: ['AUDITOR\'\'S REPORT', 'AUDITOR\'\'S REPORT (OTHER NON-ASSURANCE REPORTS)', 'NO AUDITOR ASSISTANCE', 'THE INDEPENDENT AUDITOR\'\'S REPORT (REVIEW)', 'AUDITOR\'\'S REPORT ON EXTENDED REVIEW', null]
      },
      classofreportingentity: {
        type: Sequelize.ENUM,
        values: ['REPORTING CLASS A', 'REPORTING CLASS B', 'REPORTING CLASS C', 'REPORTING CLASS D', null]
      },
      indentificationnumbercvrofauditfirm: {
        type: Sequelize.CHAR(8)
      },
      descriptionofauditor: {
        type: Sequelize.TEXT
      },
      nameandsurnameofauditor: {
        type: Sequelize.STRING
      },
      audtiors_opinion: {
        type: Sequelize.STRING
      },
      audtiors_description: {
        type: Sequelize.STRING
      },
      auditors_statement_on_management_review: {
        type: Sequelize.STRING
      },
      responsibility_management: {
        type: Sequelize.STRING
      },
      responsibility_auditor: {
        type: Sequelize.STRING
      },
      auditor_comments: {
        type: Sequelize.STRING
      },
      management_review: {
        type: Sequelize.STRING
      },
      name_of_financial_institution: {
        type: Sequelize.STRING
      },
      name_of_law_firm: {
        type: Sequelize.STRING
      },
      averagenumberofemployees: {
        type: Sequelize.STRING
      },
      ifrs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number_scale: {
        type: Sequelize.ENUM,
        values: ['1E0', '1E3', '1E6', '1E9', null],
        defaultValue: '1E0'
      },
      revenue: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_income: {
        type: Sequelize.NUMERIC(18,2)
      },
      costs: {
        type: Sequelize.NUMERIC(18,2)
      },
      gross_result: {
        type: Sequelize.NUMERIC(18,2)
      },
      operating_costs: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_operating_income: {
        type: Sequelize.NUMERIC(18,2)
      },
      staff_expenses: {
        type: Sequelize.NUMERIC(18,2)
      },
      ebitda: {
        type: Sequelize.NUMERIC(18,2)
      },
      depreciation: {
        type: Sequelize.NUMERIC(18,2)
      },
      ebit: {
        type: Sequelize.NUMERIC(18,2)
      },
      interest_income: {
        type: Sequelize.NUMERIC(18,2)
      },
      interest_expenses: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_net_financial_income: {
        type: Sequelize.NUMERIC(18,2)
      },
      net_financial_income: {
        type: Sequelize.NUMERIC(18,2)
      },
      ordinary_profit: {
        type: Sequelize.NUMERIC(18,2)
      },
      extraordinary_item: {
        type: Sequelize.NUMERIC(18,2)
      },
      profit_loss_before_tax: {
        type: Sequelize.NUMERIC(18,2)
      },
      tax_expenses: {
        type: Sequelize.NUMERIC(18,2)
      },
      profit_loss: {
        type: Sequelize.NUMERIC(18,2),
        allowNull: false
      },
      goodwill: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_intangible_assets: {
        type: Sequelize.NUMERIC(18,2)
      },
      intangible_assets: {
        type: Sequelize.NUMERIC(18,2)
      },
      land_and_buildings: {
        type: Sequelize.NUMERIC(18,2)
      },
      plant_equipment_and_fixtures: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_property_plant_and_equipment: {
        type: Sequelize.NUMERIC(18,2)
      },
      property_plant_and_equipment: {
        type: Sequelize.NUMERIC(18,2)
      },
      noncurrent_receivables: {
        type: Sequelize.NUMERIC(18,2)
      },
      noncurrent_investments: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_noncurrent_financial_assets: {
        type: Sequelize.NUMERIC(18,2)
      },
      noncurrent_financial_assets: {
        type: Sequelize.NUMERIC(18,2)
      },
      noncurrent_assets: {
        type: Sequelize.NUMERIC(18,2)
      },
      inventories: {
        type: Sequelize.NUMERIC(18,2)
      },
      current_prepayments: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_receivables_from_sales_and_services: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_receivables_from_group_enterprises: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_short_term_receivables: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_receivables: {
        type: Sequelize.NUMERIC(18,2)
      },
      current_financial_assets: {
        type: Sequelize.NUMERIC(18,2)
      },
      cash: {
        type: Sequelize.NUMERIC(18,2)
      },
      current_assets: {
        type: Sequelize.NUMERIC(18,2)
      },
      assets: {
        type: Sequelize.NUMERIC(18,2),
        allowNull: false
      },
      contributed_capital: {
        type: Sequelize.NUMERIC(18,2),
        allowNull: false
      },
      reserves: {
        type: Sequelize.NUMERIC(18,2)
      },
      dividend: {
        type: Sequelize.NUMERIC(18,2)
      },
      retained_earnings: {
        type: Sequelize.NUMERIC(18,2)
      },
      equity_before_minority_interests: {
        type: Sequelize.NUMERIC(18,2)
      },
      minority_interests: {
        type: Sequelize.NUMERIC(18,2)
      },
      equity: {
        type: Sequelize.NUMERIC(18,2),
        allowNull: false
      },
      provisions: {
        type: Sequelize.NUMERIC(18,2)
      },
      long_term_debt_to_group_enterprises: {
        type: Sequelize.NUMERIC(18,2)
      },
      long_term_debt_to_banks: {
        type: Sequelize.NUMERIC(18,2)
      },
      long_term_mortgage_debt: {
        type: Sequelize.NUMERIC(18,2)
      },
      equity_loan: {
        type: Sequelize.NUMERIC(18,2)
      },
      deferred_tax: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_long_term_debt: {
        type: Sequelize.NUMERIC(18,2)
      },
      long_term_debt: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_debt_to_group_enterprises: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_debt_to_banks: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_mortgage_debt: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_trade_payables: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_tax_payables: {
        type: Sequelize.NUMERIC(18,2)
      },
      other_short_term_debt: {
        type: Sequelize.NUMERIC(18,2)
      },
      short_term_debt: {
        type: Sequelize.NUMERIC(18,2)
      },
      debt: {
        type: Sequelize.NUMERIC(18,2)
      },
      liabilities_and_equity: {
        type: Sequelize.NUMERIC(18,2),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('finances');
  }
};