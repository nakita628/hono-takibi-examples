import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedBalanceSheet']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].reports.enhancedBalanceSheet.accounts.$get(args, options),
  )
}

export async function getCompaniesCompanyIdReportsEnhancedCashFlowTransactions(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedCashFlow']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].reports.enhancedCashFlow.transactions.$get(args, options),
  )
}

export async function getCompaniesCompanyIdReportsEnhancedInvoices(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedInvoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].reports.enhancedInvoices.$get(args, options),
  )
}

export async function getCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['reports']['enhancedProfitAndLoss']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].reports.enhancedProfitAndLoss.accounts.$get(args, options),
  )
}

export async function getDataAssessAccountsCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.data.assess.accounts.categories.$get(undefined, options))
}

export async function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].assess.dataTypes[':dataType'].dataIntegrity.details.$get(
      args,
      options,
    ),
  )
}

export async function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].assess.dataTypes[':dataType'].dataIntegrity.status.$get(
      args,
      options,
    ),
  )
}

export async function getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['dataTypes'][':dataType']['dataIntegrity']['summaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].assess.dataTypes[':dataType'].dataIntegrity.summaries.$get(
      args,
      options,
    ),
  )
}

export async function getDataCompaniesCompanyIdAssessExcel(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.companies[':companyId'].assess.excel.$get(args, options))
}

export async function postDataCompaniesCompanyIdAssessExcel(
  args: InferRequestType<(typeof client.data.companies)[':companyId']['assess']['excel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data.companies[':companyId'].assess.excel.$post(args, options))
}

export async function getDataCompaniesCompanyIdAssessExcelDownload(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].assess.excel.download.$get(args, options),
  )
}

export async function postDataCompaniesCompanyIdAssessExcelDownload(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['assess']['excel']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].assess.excel.download.$post(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accountingMetrics']['marketing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.accountingMetrics.marketing.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.accounts.categories.$get(args, options),
  )
}

export async function patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts']['categories']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.accounts.categories.$patch(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
      ':accountId'
    ].categories.$get(args, options),
  )
}

export async function patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['accounts'][':accountId']['categories']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[':connectionId'].assess.accounts[
      ':accountId'
    ].categories.$patch(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['customerRetention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.commerceMetrics.customerRetention.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['lifetimeValue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.commerceMetrics.lifetimeValue.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.commerceMetrics.orders.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['refunds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.commerceMetrics.refunds.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['commerceMetrics']['revenue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.commerceMetrics.revenue.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedBalanceSheet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.enhancedBalanceSheet.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['enhancedProfitAndLoss']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.enhancedProfitAndLoss.$get(args, options),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['financialMetrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[':connectionId'].assess.financialMetrics.$get(
      args,
      options,
    ),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['mrr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[':connectionId'].assess.subscriptions.mrr.$get(
      args,
      options,
    ),
  )
}

export async function getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess(
  args: InferRequestType<
    (typeof client.data.companies)[':companyId']['connections'][':connectionId']['assess']['subscriptions']['process']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data.companies[':companyId'].connections[
      ':connectionId'
    ].assess.subscriptions.process.$get(args, options),
  )
}
