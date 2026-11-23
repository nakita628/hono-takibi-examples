import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV1Login(
  args: InferRequestType<typeof client.api.v1.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.login.$post(args, options))
}

export async function getApiV1Activities(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.activities.$get(args, options))
}

export async function getApiV1ActivitiesDownloadEntityActivityId(
  args: InferRequestType<(typeof client.api.v1.activities.download_entity)[':activity_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.activities.download_entity[':activity_id'].$get(args, options),
  )
}

export async function postApiV1ActivitiesEntity(
  args: InferRequestType<typeof client.api.v1.activities.entity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.activities.entity.$post(args, options))
}

export async function postApiV1ActivitiesNotes(
  args: InferRequestType<typeof client.api.v1.activities.notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.activities.notes.$post(args, options))
}

export async function postApiV1PasskeysLoginOptions(
  args: InferRequestType<typeof client.api.v1.passkeys.login.options.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.passkeys.login.options.$post(args, options))
}

export async function getApiV1SettingsPasskeys(
  args: InferRequestType<typeof client.api.v1.settings.passkeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings.passkeys.$get(args, options))
}

export async function postApiV1SettingsPasskeys(
  args: InferRequestType<typeof client.api.v1.settings.passkeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings.passkeys.$post(args, options))
}

export async function postApiV1SettingsPasskeysOptions(
  args: InferRequestType<typeof client.api.v1.settings.passkeys.options.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings.passkeys.options.$post(args, options))
}

export async function deleteApiV1SettingsPasskeysPasskey(
  args: InferRequestType<(typeof client.api.v1.settings.passkeys)[':passkey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings.passkeys[':passkey'].$delete(args, options))
}

export async function postApiV1Refresh(
  args: InferRequestType<typeof client.api.v1.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.refresh.$post(args, options))
}

export async function postApiV1YodleeRefresh(
  args: InferRequestType<typeof client.api.v1.yodlee.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.yodlee.refresh.$post(args, options))
}

export async function getApiV1BankIntegrations(
  args: InferRequestType<typeof client.api.v1.bank_integrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations.$get(args, options))
}

export async function postApiV1BankIntegrations(
  args: InferRequestType<typeof client.api.v1.bank_integrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations.$post(args, options))
}

export async function getApiV1BankIntegrationsId(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations[':id'].$get(args, options))
}

export async function putApiV1BankIntegrationsId(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations[':id'].$put(args, options))
}

export async function deleteApiV1BankIntegrationsId(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations[':id'].$delete(args, options))
}

export async function getApiV1BankIntegrationsIdEdit(
  args: InferRequestType<(typeof client.api.v1.bank_integrations)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations[':id'].edit.$get(args, options))
}

export async function getApiV1BankIntegrationsCreate(
  args: InferRequestType<typeof client.api.v1.bank_integrations.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations.create.$get(args, options))
}

export async function postApiV1BankIntegrationsBulk(
  args: InferRequestType<typeof client.api.v1.bank_integrations.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations.bulk.$post(args, options))
}

export async function postApiV1BankIntegrationsRefreshAccounts(
  args: InferRequestType<typeof client.api.v1.bank_integrations.refresh_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_integrations.refresh_accounts.$post(args, options))
}

export async function postApiV1BankIntegrationsRemoveAccountAccountId(
  args: InferRequestType<typeof client.api.v1.bank_integrations.remove_account.account_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.bank_integrations.remove_account.account_id.$post(args, options),
  )
}

export async function postApiV1BankIntegrationsGetTransactionsAccountId(
  args: InferRequestType<typeof client.api.v1.bank_integrations.get_transactions.account_id.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.bank_integrations.get_transactions.account_id.$post(args, options),
  )
}

export async function getApiV1BankTransactions(
  args: InferRequestType<typeof client.api.v1.bank_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions.$get(args, options))
}

export async function postApiV1BankTransactions(
  args: InferRequestType<typeof client.api.v1.bank_transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions.$post(args, options))
}

export async function getApiV1BankTransactionsId(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions[':id'].$get(args, options))
}

export async function putApiV1BankTransactionsId(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions[':id'].$put(args, options))
}

export async function deleteApiV1BankTransactionsId(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions[':id'].$delete(args, options))
}

export async function getApiV1BankTransactionsIdEdit(
  args: InferRequestType<(typeof client.api.v1.bank_transactions)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions[':id'].edit.$get(args, options))
}

export async function getApiV1BankTransactionsCreate(
  args: InferRequestType<typeof client.api.v1.bank_transactions.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions.create.$get(args, options))
}

export async function postApiV1BankTransactionsBulk(
  args: InferRequestType<typeof client.api.v1.bank_transactions.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions.bulk.$post(args, options))
}

export async function postApiV1BankTransactionsMatch(
  args: InferRequestType<typeof client.api.v1.bank_transactions.match.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transactions.match.$post(args, options))
}

export async function getApiV1BankTransactionRules(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules.$get(args, options))
}

export async function postApiV1BankTransactionRules(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules.$post(args, options))
}

export async function getApiV1BankTransactionRulesId(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules[':id'].$get(args, options))
}

export async function putApiV1BankTransactionRulesId(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules[':id'].$put(args, options))
}

export async function deleteApiV1BankTransactionRulesId(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules[':id'].$delete(args, options))
}

export async function getApiV1BankTransactionRulesIdEdit(
  args: InferRequestType<(typeof client.api.v1.bank_transaction_rules)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules[':id'].edit.$get(args, options))
}

export async function getApiV1BankTransactionRulesCreate(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules.create.$get(args, options))
}

export async function postApiV1BankTransactionRulesBulk(
  args: InferRequestType<typeof client.api.v1.bank_transaction_rules.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.bank_transaction_rules.bulk.$post(args, options))
}

export async function postApiV1ChartsTotals(
  args: InferRequestType<typeof client.api.v1.charts.totals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.charts.totals.$post(args, options))
}

export async function postApiV1ChartsTotalsV2(
  args: InferRequestType<typeof client.api.v1.charts.totals_v2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.charts.totals_v2.$post(args, options))
}

export async function postApiV1ChartsChartSummaryV2(
  args: InferRequestType<typeof client.api.v1.charts.chart_summary_v2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.charts.chart_summary_v2.$post(args, options))
}

export async function postApiV1ChartsCalculatedFields(
  args: InferRequestType<typeof client.api.v1.charts.calculated_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.charts.calculated_fields.$post(args, options))
}

export async function getApiV1ClientGatewayTokens(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_gateway_tokens.$get(args, options))
}

export async function postApiV1ClientGatewayTokens(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_gateway_tokens.$post(args, options))
}

export async function getApiV1ClientGatewayTokensId(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_gateway_tokens[':id'].$get(args, options))
}

export async function putApiV1ClientGatewayTokensId(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_gateway_tokens[':id'].$put(args, options))
}

export async function deleteApiV1ClientGatewayTokensId(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_gateway_tokens[':id'].$delete(args, options))
}

export async function getApiV1ClientGatewayTokensIdEdit(
  args: InferRequestType<(typeof client.api.v1.client_gateway_tokens)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_gateway_tokens[':id'].edit.$get(args, options))
}

export async function getApiV1ClientGatewayTokensCreate(
  args: InferRequestType<typeof client.api.v1.client_gateway_tokens.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_gateway_tokens.create.$get(args, options))
}

export async function getApiV1Companies(
  args: InferRequestType<typeof client.api.v1.companies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies.$get(args, options))
}

export async function postApiV1Companies(
  args: InferRequestType<typeof client.api.v1.companies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies.$post(args, options))
}

export async function getApiV1CompaniesCreate(
  args: InferRequestType<typeof client.api.v1.companies.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies.create.$get(args, options))
}

export async function getApiV1CompaniesId(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies[':id'].$get(args, options))
}

export async function putApiV1CompaniesId(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies[':id'].$put(args, options))
}

export async function deleteApiV1CompaniesId(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies[':id'].$delete(args, options))
}

export async function getApiV1CompaniesIdEdit(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies[':id'].edit.$get(args, options))
}

export async function postApiV1CompaniesIdUpload(
  args: InferRequestType<(typeof client.api.v1.companies)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies[':id'].upload.$post(args, options))
}

export async function postApiV1CompaniesCompanyDefault(
  args: InferRequestType<(typeof client.api.v1.companies)[':company']['default']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies[':company'].default.$post(args, options))
}

export async function postApiV1CompaniesCurrent(
  args: InferRequestType<typeof client.api.v1.companies.current.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.companies.current.$post(args, options))
}

export async function getApiV1CompanyGateways(
  args: InferRequestType<typeof client.api.v1.company_gateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways.$get(args, options))
}

export async function postApiV1CompanyGateways(
  args: InferRequestType<typeof client.api.v1.company_gateways.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways.$post(args, options))
}

export async function getApiV1CompanyGatewaysCreate(
  args: InferRequestType<typeof client.api.v1.company_gateways.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways.create.$get(args, options))
}

export async function getApiV1CompanyGatewaysId(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways[':id'].$get(args, options))
}

export async function putApiV1CompanyGatewaysId(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways[':id'].$put(args, options))
}

export async function deleteApiV1CompanyGatewaysId(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways[':id'].$delete(args, options))
}

export async function getApiV1CompanyGatewaysIdEdit(
  args: InferRequestType<(typeof client.api.v1.company_gateways)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways[':id'].edit.$get(args, options))
}

export async function postApiV1CompanyGatewaysBulk(
  args: InferRequestType<typeof client.api.v1.company_gateways.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_gateways.bulk.$post(args, options))
}

export async function getApiV1CompanyLedger(
  args: InferRequestType<typeof client.api.v1.company_ledger.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_ledger.$get(args, options))
}

export async function postApiV1CompanyUsers(
  args: InferRequestType<typeof client.api.v1.company_users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.company_users.$post(args, options))
}

export async function postApiV1ConnectedAccount(
  args: InferRequestType<typeof client.api.v1.connected_account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.connected_account.$post(args, options))
}

export async function getApiV1Designs(
  args: InferRequestType<typeof client.api.v1.designs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs.$get(args, options))
}

export async function postApiV1Designs(
  args: InferRequestType<typeof client.api.v1.designs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs.$post(args, options))
}

export async function getApiV1DesignsId(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs[':id'].$get(args, options))
}

export async function putApiV1DesignsId(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs[':id'].$put(args, options))
}

export async function deleteApiV1DesignsId(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs[':id'].$delete(args, options))
}

export async function getApiV1DesignsIdEdit(
  args: InferRequestType<(typeof client.api.v1.designs)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs[':id'].edit.$get(args, options))
}

export async function getApiV1DesignsCreate(
  args: InferRequestType<typeof client.api.v1.designs.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs.create.$get(args, options))
}

export async function postApiV1DesignsBulk(
  args: InferRequestType<typeof client.api.v1.designs.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.designs.bulk.$post(args, options))
}

export async function getApiV1Documents(
  args: InferRequestType<typeof client.api.v1.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents.$get(args, options))
}

export async function postApiV1Emails(
  args: InferRequestType<typeof client.api.v1.emails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.emails.$post(args, options))
}

export async function getApiV1ExpenseCategories(
  args: InferRequestType<typeof client.api.v1.expense_categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories.$get(args, options))
}

export async function postApiV1ExpenseCategories(
  args: InferRequestType<typeof client.api.v1.expense_categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories.$post(args, options))
}

export async function getApiV1ExpenseCategoriesCreate(
  args: InferRequestType<typeof client.api.v1.expense_categories.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories.create.$get(args, options))
}

export async function getApiV1ExpenseCategoriesId(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories[':id'].$get(args, options))
}

export async function putApiV1ExpenseCategoriesId(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories[':id'].$put(args, options))
}

export async function deleteApiV1ExpenseCategoriesId(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories[':id'].$delete(args, options))
}

export async function getApiV1ExpenseCategoriesIdEdit(
  args: InferRequestType<(typeof client.api.v1.expense_categories)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories[':id'].edit.$get(args, options))
}

export async function postApiV1ExpenseCategoriesBulk(
  args: InferRequestType<typeof client.api.v1.expense_categories.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expense_categories.bulk.$post(args, options))
}

export async function getApiV1Expenses(
  args: InferRequestType<typeof client.api.v1.expenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses.$get(args, options))
}

export async function postApiV1Expenses(
  args: InferRequestType<typeof client.api.v1.expenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses.$post(args, options))
}

export async function getApiV1ExpensesId(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses[':id'].$get(args, options))
}

export async function putApiV1ExpensesId(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses[':id'].$put(args, options))
}

export async function deleteApiV1ExpensesId(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses[':id'].$delete(args, options))
}

export async function getApiV1ExpensesIdEdit(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses[':id'].edit.$get(args, options))
}

export async function getApiV1ExpensesCreate(
  args: InferRequestType<typeof client.api.v1.expenses.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses.create.$get(args, options))
}

export async function postApiV1ExpensesBulk(
  args: InferRequestType<typeof client.api.v1.expenses.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses.bulk.$post(args, options))
}

export async function postApiV1ExpensesIdUpload(
  args: InferRequestType<(typeof client.api.v1.expenses)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.expenses[':id'].upload.$post(args, options))
}

export async function postApiV1Export(
  args: InferRequestType<typeof client.api.v1.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.export.$post(args, options))
}

export async function getApiV1GroupSettings(
  args: InferRequestType<typeof client.api.v1.group_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings.$get(args, options))
}

export async function postApiV1GroupSettings(
  args: InferRequestType<typeof client.api.v1.group_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings.$post(args, options))
}

export async function getApiV1GroupSettingsCreate(
  args: InferRequestType<typeof client.api.v1.group_settings.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings.create.$get(args, options))
}

export async function getApiV1GroupSettingsId(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings[':id'].$get(args, options))
}

export async function putApiV1GroupSettingsId(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings[':id'].$put(args, options))
}

export async function deleteApiV1GroupSettingsId(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings[':id'].$delete(args, options))
}

export async function getApiV1GroupSettingsIdEdit(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings[':id'].edit.$get(args, options))
}

export async function postApiV1GroupSettingsBulk(
  args: InferRequestType<typeof client.api.v1.group_settings.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings.bulk.$post(args, options))
}

export async function postApiV1GroupSettingsIdUpload(
  args: InferRequestType<(typeof client.api.v1.group_settings)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.group_settings[':id'].upload.$post(args, options))
}

export async function postApiV1Preimport(
  args: InferRequestType<typeof client.api.v1.preimport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.preimport.$post(args, options))
}

export async function postApiV1Import(
  args: InferRequestType<typeof client.api.v1.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.import.$post(args, options))
}

export async function postApiV1ImportJson(
  args: InferRequestType<typeof client.api.v1.import_json.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.import_json.$post(args, options))
}

export async function postApiV1AppleConfirmPurchase(
  args: InferRequestType<typeof client.api.v1.apple.confirm_purchase.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apple.confirm_purchase.$post(args, options))
}

export async function postApiV1AppleProcessWebhook(
  args: InferRequestType<typeof client.api.v1.apple.process_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apple.process_webhook.$post(args, options))
}

export async function getApiV1ClaimLicense(
  args: InferRequestType<typeof client.api.v1.claim_license.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.claim_license.$get(args, options))
}

export async function postApiV1Logout(
  args: InferRequestType<typeof client.api.v1.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.logout.$post(args, options))
}

export async function postApiV1MigrationPurgeCompany(
  args: InferRequestType<(typeof client.api.v1.migration.purge)[':company']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.migration.purge[':company'].$post(args, options))
}

export async function postApiV1MigrationPurgeSaveSettingsCompany(
  args: InferRequestType<(typeof client.api.v1.migration.purge_save_settings)[':company']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.migration.purge_save_settings[':company'].$post(args, options),
  )
}

export async function postApiV1MigrationStart(
  args: InferRequestType<typeof client.api.v1.migration.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.migration.start.$post(args, options))
}

export async function postApiV1OneTimeToken(
  args: InferRequestType<typeof client.api.v1.one_time_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.one_time_token.$post(args, options))
}

export async function getApiV1PaymentTerms(
  args: InferRequestType<typeof client.api.v1.payment_terms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms.$get(args, options))
}

export async function postApiV1PaymentTerms(
  args: InferRequestType<typeof client.api.v1.payment_terms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms.$post(args, options))
}

export async function getApiV1PaymentTermsCreate(
  args: InferRequestType<typeof client.api.v1.payment_terms.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms.create.$get(args, options))
}

export async function getApiV1PaymentTermsId(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms[':id'].$get(args, options))
}

export async function putApiV1PaymentTermsId(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms[':id'].$put(args, options))
}

export async function deleteApiV1PaymentTermsId(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms[':id'].$delete(args, options))
}

export async function getApiV1PaymentTermsIdEdit(
  args: InferRequestType<(typeof client.api.v1.payment_terms)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms[':id'].edit.$get(args, options))
}

export async function postApiV1PaymentTermsBulk(
  args: InferRequestType<typeof client.api.v1.payment_terms.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payment_terms.bulk.$post(args, options))
}

export async function getApiV1Ping(
  args: InferRequestType<typeof client.api.v1.ping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.ping.$get(args, options))
}

export async function getApiV1HealthCheck(
  args: InferRequestType<typeof client.api.v1.health_check.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.health_check.$get(args, options))
}

export async function getApiV1LastError(
  args: InferRequestType<typeof client.api.v1.last_error.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.last_error.$get(args, options))
}

export async function postApiV1PostmarkWebhook(
  args: InferRequestType<typeof client.api.v1.postmark_webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.postmark_webhook.$post(args, options))
}

export async function postApiV1Preview(
  args: InferRequestType<typeof client.api.v1.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.preview.$post(args, options))
}

export async function postApiV1PreviewPurchaseOrder(
  args: InferRequestType<typeof client.api.v1.preview.purchase_order.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.preview.purchase_order.$post(args, options))
}

export async function getApiV1RecurringExpenses(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses.$get(args, options))
}

export async function postApiV1RecurringExpenses(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses.$post(args, options))
}

export async function getApiV1RecurringExpensesId(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses[':id'].$get(args, options))
}

export async function putApiV1RecurringExpensesId(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses[':id'].$put(args, options))
}

export async function deleteApiV1RecurringExpensesId(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses[':id'].$delete(args, options))
}

export async function getApiV1RecurringExpensesIdEdit(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses[':id'].edit.$get(args, options))
}

export async function getApiV1RecurringExpensesCreate(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses.create.$get(args, options))
}

export async function postApiV1RecurringExpensesBulk(
  args: InferRequestType<typeof client.api.v1.recurring_expenses.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses.bulk.$post(args, options))
}

export async function postApiV1RecurringExpensesIdUpload(
  args: InferRequestType<(typeof client.api.v1.recurring_expenses)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_expenses[':id'].upload.$post(args, options))
}

export async function getApiV1RecurringQuotes(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes.$get(args, options))
}

export async function postApiV1RecurringQuotes(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes.$post(args, options))
}

export async function getApiV1RecurringQuotesCreate(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes.create.$get(args, options))
}

export async function getApiV1RecurringQuotesId(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes[':id'].$get(args, options))
}

export async function putApiV1RecurringQuotesId(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes[':id'].$put(args, options))
}

export async function deleteApiV1RecurringQuotesId(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes[':id'].$delete(args, options))
}

export async function getApiV1RecurringQuotesIdEdit(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes[':id'].edit.$get(args, options))
}

export async function postApiV1RecurringQuotesBulk(
  args: InferRequestType<typeof client.api.v1.recurring_quotes.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes.bulk.$post(args, options))
}

export async function getApiV1RecurringQuotesIdAction(
  args: InferRequestType<(typeof client.api.v1.recurring_quotes)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_quotes[':id'][':action'].$get(args, options))
}

export async function postApiV1ReportsContacts(
  args: InferRequestType<typeof client.api.v1.reports.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.contacts.$post(args, options))
}

export async function postApiV1ReportsClients(
  args: InferRequestType<typeof client.api.v1.reports.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.clients.$post(args, options))
}

export async function postApiV1ReportsCredits(
  args: InferRequestType<typeof client.api.v1.reports.credits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.credits.$post(args, options))
}

export async function postApiV1ReportsDocuments(
  args: InferRequestType<typeof client.api.v1.reports.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.documents.$post(args, options))
}

export async function postApiV1ReportsExpenses(
  args: InferRequestType<typeof client.api.v1.reports.expenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.expenses.$post(args, options))
}

export async function postApiV1ReportsInvoiceItems(
  args: InferRequestType<typeof client.api.v1.reports.invoice_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.invoice_items.$post(args, options))
}

export async function postApiV1ReportsInvoices(
  args: InferRequestType<typeof client.api.v1.reports.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.invoices.$post(args, options))
}

export async function postApiV1ReportsPayments(
  args: InferRequestType<typeof client.api.v1.reports.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.payments.$post(args, options))
}

export async function postApiV1ReportsProducts(
  args: InferRequestType<typeof client.api.v1.reports.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.products.$post(args, options))
}

export async function postApiV1ReportsProductSales(
  args: InferRequestType<typeof client.api.v1.reports.product_sales.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.product_sales.$post(args, options))
}

export async function postApiV1ReportsProfitloss(
  args: InferRequestType<typeof client.api.v1.reports.profitloss.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.profitloss.$post(args, options))
}

export async function postApiV1ReportsQuoteItems(
  args: InferRequestType<typeof client.api.v1.reports.quote_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.quote_items.$post(args, options))
}

export async function postApiV1ReportsQuotes(
  args: InferRequestType<typeof client.api.v1.reports.quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.quotes.$post(args, options))
}

export async function postApiV1ReportsRecurringInvoices(
  args: InferRequestType<typeof client.api.v1.reports.recurring_invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.recurring_invoices.$post(args, options))
}

export async function postApiV1ReportsTasks(
  args: InferRequestType<typeof client.api.v1.reports.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.tasks.$post(args, options))
}

export async function postApiV1ReportsActivities(
  args: InferRequestType<typeof client.api.v1.reports.activities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.activities.$post(args, options))
}

export async function postApiV1ReportsClientContacts(
  args: InferRequestType<typeof client.api.v1.reports.client_contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.client_contacts.$post(args, options))
}

export async function postApiV1ReportsArDetailReport(
  args: InferRequestType<typeof client.api.v1.reports.ar_detail_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.ar_detail_report.$post(args, options))
}

export async function postApiV1ReportsArSummaryReport(
  args: InferRequestType<typeof client.api.v1.reports.ar_summary_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.ar_summary_report.$post(args, options))
}

export async function postApiV1ReportsClientBalanceReport(
  args: InferRequestType<typeof client.api.v1.reports.client_balance_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.client_balance_report.$post(args, options))
}

export async function postApiV1ReportsClientSalesReport(
  args: InferRequestType<typeof client.api.v1.reports.client_sales_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.client_sales_report.$post(args, options))
}

export async function postApiV1ReportsTaxSummaryReport(
  args: InferRequestType<typeof client.api.v1.reports.tax_summary_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.tax_summary_report.$post(args, options))
}

export async function postApiV1ReportsTaxPeriodReport(
  args: InferRequestType<typeof client.api.v1.reports.tax_period_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.tax_period_report.$post(args, options))
}

export async function postApiV1ReportsUserSalesReport(
  args: InferRequestType<typeof client.api.v1.reports.user_sales_report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.user_sales_report.$post(args, options))
}

export async function postApiV1ReportsProjects(
  args: InferRequestType<typeof client.api.v1.reports.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.projects.$post(args, options))
}

export async function postApiV1ReportsPreviewHash(
  args: InferRequestType<(typeof client.api.v1.reports.preview)[':hash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reports.preview[':hash'].$post(args, options))
}

export async function postApiV1ExportsPreviewHash(
  args: InferRequestType<(typeof client.api.v1.exports.preview)[':hash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.exports.preview[':hash'].$post(args, options))
}

export async function postApiV1SelfUpdate(
  args: InferRequestType<(typeof client.api.v1)['self-update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['self-update'].$post(args, options))
}

export async function postApiV1SelfUpdateCheckVersion(
  args: InferRequestType<(typeof client.api.v1)['self-update']['check_version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['self-update'].check_version.$post(args, options))
}

export async function getApiV1Statics(
  args: InferRequestType<typeof client.api.v1.statics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.statics.$get(args, options))
}

export async function getApiV1Subscriptions(
  args: InferRequestType<typeof client.api.v1.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions.$get(args, options))
}

export async function postApiV1Subscriptions(
  args: InferRequestType<typeof client.api.v1.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions.$post(args, options))
}

export async function getApiV1SubscriptionsCreate(
  args: InferRequestType<typeof client.api.v1.subscriptions.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions.create.$get(args, options))
}

export async function getApiV1SubscriptionsId(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions[':id'].$get(args, options))
}

export async function putApiV1SubscriptionsId(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions[':id'].$put(args, options))
}

export async function deleteApiV1SubscriptionsId(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions[':id'].$delete(args, options))
}

export async function getApiV1SubscriptionsIdEdit(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions[':id'].edit.$get(args, options))
}

export async function postApiV1SubscriptionsBulk(
  args: InferRequestType<typeof client.api.v1.subscriptions.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions.bulk.$post(args, options))
}

export async function getApiV1Scheduler(
  args: InferRequestType<typeof client.api.v1.scheduler.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scheduler.$get(args, options))
}

export async function postApiV1SupportMessagesSend(
  args: InferRequestType<typeof client.api.v1.support.messages.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.support.messages.send.$post(args, options))
}

export async function getApiV1SystemLogs(
  args: InferRequestType<typeof client.api.v1.system_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.system_logs.$get(args, options))
}

export async function getApiV1SystemLogsId(
  args: InferRequestType<(typeof client.api.v1.system_logs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.system_logs[':id'].$get(args, options))
}

export async function getApiV1TaskSchedulers(
  args: InferRequestType<typeof client.api.v1.task_schedulers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_schedulers.$get(args, options))
}

export async function postApiV1TaskSchedulers(
  args: InferRequestType<typeof client.api.v1.task_schedulers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_schedulers.$post(args, options))
}

export async function getApiV1TaskSchedulersCreate(
  args: InferRequestType<typeof client.api.v1.task_schedulers.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_schedulers.create.$get(args, options))
}

export async function getApiV1TaskSchedulersId(
  args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_schedulers[':id'].$get(args, options))
}

export async function putApiV1TaskSchedulersId(
  args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_schedulers[':id'].$put(args, options))
}

export async function deleteApiV1TaskSchedulersId(
  args: InferRequestType<(typeof client.api.v1.task_schedulers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_schedulers[':id'].$delete(args, options))
}

export async function postApiV1TaskSchedulersBulk(
  args: InferRequestType<typeof client.api.v1.task_schedulers.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_schedulers.bulk.$post(args, options))
}

export async function getApiV1TaskStatuses(
  args: InferRequestType<typeof client.api.v1.task_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses.$get(args, options))
}

export async function postApiV1TaskStatuses(
  args: InferRequestType<typeof client.api.v1.task_statuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses.$post(args, options))
}

export async function getApiV1TaskStatusesCreate(
  args: InferRequestType<typeof client.api.v1.task_statuses.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses.create.$get(args, options))
}

export async function getApiV1TaskStatusesId(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses[':id'].$get(args, options))
}

export async function putApiV1TaskStatusesId(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses[':id'].$put(args, options))
}

export async function deleteApiV1TaskStatusesId(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses[':id'].$delete(args, options))
}

export async function getApiV1TaskStatusesIdEdit(
  args: InferRequestType<(typeof client.api.v1.task_statuses)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses[':id'].edit.$get(args, options))
}

export async function postApiV1TaskStatusesBulk(
  args: InferRequestType<typeof client.api.v1.task_statuses.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.task_statuses.bulk.$post(args, options))
}

export async function getApiV1TaxRates(
  args: InferRequestType<typeof client.api.v1.tax_rates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tax_rates.$get(args, options))
}

export async function getApiV1TaxRatesCreate(
  args: InferRequestType<typeof client.api.v1.tax_rates.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tax_rates.create.$get(args, options))
}

export async function getApiV1TaxRatesId(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tax_rates[':id'].$get(args, options))
}

export async function putApiV1TaxRatesId(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tax_rates[':id'].$put(args, options))
}

export async function deleteApiV1TaxRatesId(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tax_rates[':id'].$delete(args, options))
}

export async function getApiV1TaxRatesIdEdit(
  args: InferRequestType<(typeof client.api.v1.tax_rates)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tax_rates[':id'].edit.$get(args, options))
}

export async function postApiV1TaxRatesBulk(
  args: InferRequestType<typeof client.api.v1.tax_rates.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tax_rates.bulk.$post(args, options))
}

export async function postApiV1Templates(
  args: InferRequestType<typeof client.api.v1.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.templates.$post(args, options))
}

export async function postApiV1TemplatesPreviewHash(
  args: InferRequestType<(typeof client.api.v1.templates.preview)[':hash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.templates.preview[':hash'].$post(args, options))
}

export async function postApiV1Search(
  args: InferRequestType<typeof client.api.v1.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.$post(args, options))
}

export async function getApiV1Tokens(
  args: InferRequestType<typeof client.api.v1.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens.$get(args, options))
}

export async function postApiV1Tokens(
  args: InferRequestType<typeof client.api.v1.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens.$post(args, options))
}

export async function getApiV1TokensId(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens[':id'].$get(args, options))
}

export async function putApiV1TokensId(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens[':id'].$put(args, options))
}

export async function deleteApiV1TokensId(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens[':id'].$delete(args, options))
}

export async function getApiV1TokensIdEdit(
  args: InferRequestType<(typeof client.api.v1.tokens)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens[':id'].edit.$get(args, options))
}

export async function getApiV1TokensCreate(
  args: InferRequestType<typeof client.api.v1.tokens.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens.create.$get(args, options))
}

export async function postApiV1TokensBulk(
  args: InferRequestType<typeof client.api.v1.tokens.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tokens.bulk.$post(args, options))
}

export async function getApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$get(args, options))
}

export async function postApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$post(args, options))
}

export async function getApiV1UsersCreate(
  args: InferRequestType<typeof client.api.v1.users.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.create.$get(args, options))
}

export async function getApiV1UsersId(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id'].$get(args, options))
}

export async function putApiV1UsersId(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id'].$put(args, options))
}

export async function deleteApiV1UsersId(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id'].$delete(args, options))
}

export async function getApiV1UsersIdEdit(
  args: InferRequestType<(typeof client.api.v1.users)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':id'].edit.$get(args, options))
}

export async function postApiV1UsersBulk(
  args: InferRequestType<typeof client.api.v1.users.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.bulk.$post(args, options))
}

export async function deleteApiV1UsersUserDetachFromCompany(
  args: InferRequestType<(typeof client.api.v1.users)[':user']['detach_from_company']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.users[':user'].detach_from_company.$delete(args, options),
  )
}

export async function postApiV1UsersUserInvite(
  args: InferRequestType<(typeof client.api.v1.users)[':user']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':user'].invite.$post(args, options))
}

export async function postApiV1UsersUserReconfirm(
  args: InferRequestType<(typeof client.api.v1.users)[':user']['reconfirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':user'].reconfirm.$post(args, options))
}

export async function getApiV1Webcron(
  args: InferRequestType<typeof client.api.v1.webcron.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webcron.$get(args, options))
}

export async function getApiV1Webhooks(
  args: InferRequestType<typeof client.api.v1.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks.$get(args, options))
}

export async function postApiV1Webhooks(
  args: InferRequestType<typeof client.api.v1.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks.$post(args, options))
}

export async function getApiV1WebhooksId(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks[':id'].$get(args, options))
}

export async function putApiV1WebhooksId(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks[':id'].$put(args, options))
}

export async function deleteApiV1WebhooksId(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks[':id'].$delete(args, options))
}

export async function getApiV1WebhooksIdEdit(
  args: InferRequestType<(typeof client.api.v1.webhooks)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks[':id'].edit.$get(args, options))
}

export async function getApiV1WebhooksCreate(
  args: InferRequestType<typeof client.api.v1.webhooks.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks.create.$get(args, options))
}

export async function postApiV1WebhooksBulk(
  args: InferRequestType<typeof client.api.v1.webhooks.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.webhooks.bulk.$post(args, options))
}

export async function getApiV1Credits(
  args: InferRequestType<typeof client.api.v1.credits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits.$get(args, options))
}

export async function postApiV1Credits(
  args: InferRequestType<typeof client.api.v1.credits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits.$post(args, options))
}

export async function getApiV1CreditsId(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits[':id'].$get(args, options))
}

export async function putApiV1CreditsId(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits[':id'].$put(args, options))
}

export async function deleteApiV1CreditsId(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits[':id'].$delete(args, options))
}

export async function getApiV1CreditsIdEdit(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits[':id'].edit.$get(args, options))
}

export async function getApiV1CreditsCreate(
  args: InferRequestType<typeof client.api.v1.credits.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits.create.$get(args, options))
}

export async function postApiV1CreditsBulk(
  args: InferRequestType<typeof client.api.v1.credits.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits.bulk.$post(args, options))
}

export async function getApiV1CreditInvitationKeyDownload(
  args: InferRequestType<(typeof client.api.v1.credit)[':invitation_key']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credit[':invitation_key'].download.$get(args, options))
}

export async function postApiV1CreditsIdUpload(
  args: InferRequestType<(typeof client.api.v1.credits)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.credits[':id'].upload.$post(args, options))
}

export async function getApiV1Tags(
  args: InferRequestType<typeof client.api.v1.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags.$get(args, options))
}

export async function postApiV1Tags(
  args: InferRequestType<typeof client.api.v1.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags.$post(args, options))
}

export async function getApiV1TagsCreate(
  args: InferRequestType<typeof client.api.v1.tags.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags.create.$get(args, options))
}

export async function getApiV1TagsId(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags[':id'].$get(args, options))
}

export async function putApiV1TagsId(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags[':id'].$put(args, options))
}

export async function deleteApiV1TagsId(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags[':id'].$delete(args, options))
}

export async function getApiV1TagsIdEdit(
  args: InferRequestType<(typeof client.api.v1.tags)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags[':id'].edit.$get(args, options))
}

export async function postApiV1TagsBulk(
  args: InferRequestType<typeof client.api.v1.tags.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tags.bulk.$post(args, options))
}

export async function getApiV1Locations(
  args: InferRequestType<typeof client.api.v1.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.locations.$get(args, options))
}

export async function postApiV1Locations(
  args: InferRequestType<typeof client.api.v1.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.locations.$post(args, options))
}

export async function getApiV1LocationsId(
  args: InferRequestType<(typeof client.api.v1.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.locations[':id'].$get(args, options))
}

export async function putApiV1LocationsId(
  args: InferRequestType<(typeof client.api.v1.locations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.locations[':id'].$put(args, options))
}

export async function deleteApiV1LocationsId(
  args: InferRequestType<(typeof client.api.v1.locations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.locations[':id'].$delete(args, options))
}

export async function getApiV1LocationsCreate(
  args: InferRequestType<typeof client.api.v1.locations.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.locations.create.$get(args, options))
}

export async function postApiV1LocationsBulk(
  args: InferRequestType<typeof client.api.v1.locations.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.locations.bulk.$post(args, options))
}

export async function getApiV1RecurringInvoices(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices.$get(args, options))
}

export async function postApiV1RecurringInvoices(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices.$post(args, options))
}

export async function getApiV1RecurringInvoicesId(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices[':id'].$get(args, options))
}

export async function putApiV1RecurringInvoicesId(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices[':id'].$put(args, options))
}

export async function deleteApiV1RecurringInvoicesId(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices[':id'].$delete(args, options))
}

export async function getApiV1RecurringInvoicesIdEdit(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices[':id'].edit.$get(args, options))
}

export async function getApiV1RecurringInvoicesCreate(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices.create.$get(args, options))
}

export async function postApiV1RecurringInvoicesBulk(
  args: InferRequestType<typeof client.api.v1.recurring_invoices.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices.bulk.$post(args, options))
}

export async function getApiV1RecurringInvoicesIdAction(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices[':id'][':action'].$get(args, options))
}

export async function getApiV1RecurringInvoiceInvitationKeyDownload(
  args: InferRequestType<
    (typeof client.api.v1.recurring_invoice)[':invitation_key']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.recurring_invoice[':invitation_key'].download.$get(args, options),
  )
}

export async function postApiV1RecurringInvoicesIdUpload(
  args: InferRequestType<(typeof client.api.v1.recurring_invoices)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.recurring_invoices[':id'].upload.$post(args, options))
}

export async function getApiV1Tasks(
  args: InferRequestType<typeof client.api.v1.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks.$get(args, options))
}

export async function postApiV1Tasks(
  args: InferRequestType<typeof client.api.v1.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks.$post(args, options))
}

export async function getApiV1TasksId(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks[':id'].$get(args, options))
}

export async function putApiV1TasksId(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks[':id'].$put(args, options))
}

export async function deleteApiV1TasksId(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks[':id'].$delete(args, options))
}

export async function getApiV1TasksIdEdit(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks[':id'].edit.$get(args, options))
}

export async function getApiV1TasksCreate(
  args: InferRequestType<typeof client.api.v1.tasks.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks.create.$get(args, options))
}

export async function postApiV1TasksBulk(
  args: InferRequestType<typeof client.api.v1.tasks.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks.bulk.$post(args, options))
}

export async function postApiV1TasksIdUpload(
  args: InferRequestType<(typeof client.api.v1.tasks)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks[':id'].upload.$post(args, options))
}

export async function postApiV1TasksSort(
  args: InferRequestType<typeof client.api.v1.tasks.sort.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.tasks.sort.$post(args, options))
}

export async function getApiV1Quotes(
  args: InferRequestType<typeof client.api.v1.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes.$get(args, options))
}

export async function postApiV1Quotes(
  args: InferRequestType<typeof client.api.v1.quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes.$post(args, options))
}

export async function getApiV1QuotesId(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes[':id'].$get(args, options))
}

export async function putApiV1QuotesId(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes[':id'].$put(args, options))
}

export async function deleteApiV1QuotesId(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes[':id'].$delete(args, options))
}

export async function getApiV1QuotesIdEdit(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes[':id'].edit.$get(args, options))
}

export async function getApiV1QuotesCreate(
  args: InferRequestType<typeof client.api.v1.quotes.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes.create.$get(args, options))
}

export async function postApiV1QuotesBulk(
  args: InferRequestType<typeof client.api.v1.quotes.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes.bulk.$post(args, options))
}

export async function getApiV1QuotesIdAction(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes[':id'][':action'].$get(args, options))
}

export async function getApiV1QuoteInvitationKeyDownload(
  args: InferRequestType<(typeof client.api.v1.quote)[':invitation_key']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quote[':invitation_key'].download.$get(args, options))
}

export async function postApiV1QuotesIdUpload(
  args: InferRequestType<(typeof client.api.v1.quotes)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.quotes[':id'].upload.$post(args, options))
}

export async function getApiV1Invoices(
  args: InferRequestType<typeof client.api.v1.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices.$get(args, options))
}

export async function postApiV1Invoices(
  args: InferRequestType<typeof client.api.v1.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices.$post(args, options))
}

export async function getApiV1InvoicesId(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices[':id'].$get(args, options))
}

export async function putApiV1InvoicesId(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices[':id'].$put(args, options))
}

export async function deleteApiV1InvoicesId(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices[':id'].$delete(args, options))
}

export async function getApiV1InvoicesIdEdit(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices[':id'].edit.$get(args, options))
}

export async function getApiV1InvoicesCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.invoices.create.$get(undefined, options))
}

export async function postApiV1InvoicesBulk(
  args: InferRequestType<typeof client.api.v1.invoices.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices.bulk.$post(args, options))
}

export async function getApiV1InvoicesIdAction(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices[':id'][':action'].$get(args, options))
}

export async function getApiV1InvoiceInvitationKeyDownload(
  args: InferRequestType<(typeof client.api.v1.invoice)[':invitation_key']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoice[':invitation_key'].download.$get(args, options))
}

export async function getApiV1InvoicesIdDeliveryNote(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['delivery_note']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices[':id'].delivery_note.$get(args, options))
}

export async function postApiV1InvoicesIdUpload(
  args: InferRequestType<(typeof client.api.v1.invoices)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.invoices[':id'].upload.$post(args, options))
}

export async function getApiV1Projects(
  args: InferRequestType<typeof client.api.v1.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects.$get(args, options))
}

export async function postApiV1Projects(
  args: InferRequestType<typeof client.api.v1.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects.$post(args, options))
}

export async function getApiV1ProjectsId(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects[':id'].$get(args, options))
}

export async function putApiV1ProjectsId(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects[':id'].$put(args, options))
}

export async function deleteApiV1ProjectsId(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects[':id'].$delete(args, options))
}

export async function getApiV1ProjectsIdEdit(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects[':id'].edit.$get(args, options))
}

export async function getApiV1ProjectsCreate(
  args: InferRequestType<typeof client.api.v1.projects.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects.create.$get(args, options))
}

export async function postApiV1ProjectsBulk(
  args: InferRequestType<typeof client.api.v1.projects.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects.bulk.$post(args, options))
}

export async function postApiV1ProjectsIdUpload(
  args: InferRequestType<(typeof client.api.v1.projects)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.projects[':id'].upload.$post(args, options))
}

export async function getApiV1Vendors(
  args: InferRequestType<typeof client.api.v1.vendors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors.$get(args, options))
}

export async function postApiV1Vendors(
  args: InferRequestType<typeof client.api.v1.vendors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors.$post(args, options))
}

export async function getApiV1VendorsId(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors[':id'].$get(args, options))
}

export async function putApiV1VendorsId(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors[':id'].$put(args, options))
}

export async function deleteApiV1VendorsId(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors[':id'].$delete(args, options))
}

export async function getApiV1VendorsIdEdit(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors[':id'].edit.$get(args, options))
}

export async function getApiV1VendorsCreate(
  args: InferRequestType<typeof client.api.v1.vendors.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors.create.$get(args, options))
}

export async function postApiV1VendorsBulk(
  args: InferRequestType<typeof client.api.v1.vendors.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors.bulk.$post(args, options))
}

export async function postApiV1VendorsIdUpload(
  args: InferRequestType<(typeof client.api.v1.vendors)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.vendors[':id'].upload.$post(args, options))
}

export async function getApiV1Payments(
  args: InferRequestType<typeof client.api.v1.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments.$get(args, options))
}

export async function postApiV1Payments(
  args: InferRequestType<typeof client.api.v1.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments.$post(args, options))
}

export async function getApiV1PaymentsId(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments[':id'].$get(args, options))
}

export async function putApiV1PaymentsId(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments[':id'].$put(args, options))
}

export async function deleteApiV1PaymentsId(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments[':id'].$delete(args, options))
}

export async function getApiV1PaymentsIdEdit(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments[':id'].edit.$get(args, options))
}

export async function getApiV1PaymentsCreate(
  args: InferRequestType<typeof client.api.v1.payments.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments.create.$get(args, options))
}

export async function postApiV1PaymentsRefund(
  args: InferRequestType<typeof client.api.v1.payments.refund.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments.refund.$post(args, options))
}

export async function postApiV1PaymentsBulk(
  args: InferRequestType<typeof client.api.v1.payments.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments.bulk.$post(args, options))
}

export async function getApiV1PaymentsIdAction(
  args: InferRequestType<(typeof client.api.v1.payments)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments[':id'][':action'].$get(args, options))
}

export async function postApiV1PaymentsIdUpload(
  args: InferRequestType<(typeof client.api.v1.payments)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.payments[':id'].upload.$post(args, options))
}

export async function getApiV1Clients(
  args: InferRequestType<typeof client.api.v1.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients.$get(args, options))
}

export async function postApiV1Clients(
  args: InferRequestType<typeof client.api.v1.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients.$post(args, options))
}

export async function getApiV1ClientsId(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients[':id'].$get(args, options))
}

export async function putApiV1ClientsId(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients[':id'].$put(args, options))
}

export async function deleteApiV1ClientsId(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients[':id'].$delete(args, options))
}

export async function getApiV1ClientsIdEdit(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients[':id'].edit.$get(args, options))
}

export async function getApiV1ClientsCreate(
  args: InferRequestType<typeof client.api.v1.clients.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients.create.$get(args, options))
}

export async function postApiV1ClientsBulk(
  args: InferRequestType<typeof client.api.v1.clients.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients.bulk.$post(args, options))
}

export async function postApiV1ClientsIdUpload(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients[':id'].upload.$post(args, options))
}

export async function postApiV1ClientsIdPurge(
  args: InferRequestType<(typeof client.api.v1.clients)[':id']['purge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients[':id'].purge.$post(args, options))
}

export async function postApiV1ClientsIdMergeableClientHashedIdMerge(
  args: InferRequestType<
    (typeof client.api.v1.clients)[':id'][':mergeable_client_hashed_id']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.clients[':id'][':mergeable_client_hashed_id'].merge.$post(args, options),
  )
}

export async function postApiV1ClientStatement(
  args: InferRequestType<typeof client.api.v1.client_statement.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.client_statement.$post(args, options))
}

export async function postApiV1ReactivateEmailBounceId(
  args: InferRequestType<(typeof client.api.v1.reactivate_email)[':bounce_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.reactivate_email[':bounce_id'].$post(args, options))
}

export async function postApiV1ClientsClientUpdateTaxData(
  args: InferRequestType<(typeof client.api.v1.clients)[':client']['updateTaxData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.clients[':client'].updateTaxData.$post(args, options))
}

export async function getApiV1PurchaseOrders(
  args: InferRequestType<typeof client.api.v1.purchase_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders.$get(args, options))
}

export async function postApiV1PurchaseOrders(
  args: InferRequestType<typeof client.api.v1.purchase_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders.$post(args, options))
}

export async function getApiV1PurchaseOrdersId(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders[':id'].$get(args, options))
}

export async function putApiV1PurchaseOrderId(
  args: InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_order[':id'].$put(args, options))
}

export async function deleteApiV1PurchaseOrderId(
  args: InferRequestType<(typeof client.api.v1.purchase_order)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_order[':id'].$delete(args, options))
}

export async function getApiV1PurchaseOrdersIdEdit(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders[':id'].edit.$get(args, options))
}

export async function getApiV1PurchaseOrdersCreate(
  args: InferRequestType<typeof client.api.v1.purchase_orders.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders.create.$get(args, options))
}

export async function postApiV1PurchaseOrdersBulk(
  args: InferRequestType<typeof client.api.v1.purchase_orders.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders.bulk.$post(args, options))
}

export async function getApiV1PurchaseOrdersIdAction(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id'][':action']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders[':id'][':action'].$get(args, options))
}

export async function postApiV1PurchaseOrdersIdUpload(
  args: InferRequestType<(typeof client.api.v1.purchase_orders)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.purchase_orders[':id'].upload.$post(args, options))
}

export async function getApiV1PurchaseOrderInvitationKeyDownload(
  args: InferRequestType<
    (typeof client.api.v1.purchase_order)[':invitation_key']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.purchase_order[':invitation_key'].download.$get(args, options),
  )
}

export async function getApiV1Products(
  args: InferRequestType<typeof client.api.v1.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products.$get(args, options))
}

export async function postApiV1Products(
  args: InferRequestType<typeof client.api.v1.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products.$post(args, options))
}

export async function getApiV1ProductsId(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products[':id'].$get(args, options))
}

export async function putApiV1ProductsId(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products[':id'].$put(args, options))
}

export async function deleteApiV1ProductsId(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products[':id'].$delete(args, options))
}

export async function getApiV1ProductsIdEdit(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products[':id'].edit.$get(args, options))
}

export async function getApiV1ProductsCreate(
  args: InferRequestType<typeof client.api.v1.products.create.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products.create.$get(args, options))
}

export async function postApiV1ProductsBulk(
  args: InferRequestType<typeof client.api.v1.products.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products.bulk.$post(args, options))
}

export async function postApiV1ProductsIdUpload(
  args: InferRequestType<(typeof client.api.v1.products)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.products[':id'].upload.$post(args, options))
}
