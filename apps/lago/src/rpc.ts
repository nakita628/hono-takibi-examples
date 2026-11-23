import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBillingEntities(options?: ClientRequestOptions) {
  return await parseResponse(client.billing_entities.$get(undefined, options))
}

export async function postBillingEntities(
  args: InferRequestType<typeof client.billing_entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_entities.$post(args, options))
}

export async function getBillingEntitiesCode(
  args: InferRequestType<(typeof client.billing_entities)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_entities[':code'].$get(args, options))
}

export async function putBillingEntitiesCode(
  args: InferRequestType<(typeof client.billing_entities)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_entities[':code'].$put(args, options))
}

export async function getActivityLogs(
  args: InferRequestType<typeof client.activity_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activity_logs.$get(args, options))
}

export async function getActivityLogsActivityId(
  args: InferRequestType<(typeof client.activity_logs)[':activity_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activity_logs[':activity_id'].$get(args, options))
}

export async function getAddOns(
  args: InferRequestType<typeof client.add_ons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.add_ons.$get(args, options))
}

export async function postAddOns(
  args: InferRequestType<typeof client.add_ons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.add_ons.$post(args, options))
}

export async function getAddOnsCode(
  args: InferRequestType<(typeof client.add_ons)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.add_ons[':code'].$get(args, options))
}

export async function putAddOnsCode(
  args: InferRequestType<(typeof client.add_ons)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.add_ons[':code'].$put(args, options))
}

export async function deleteAddOnsCode(
  args: InferRequestType<(typeof client.add_ons)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.add_ons[':code'].$delete(args, options))
}

export async function getApiLogs(
  args: InferRequestType<typeof client.api_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_logs.$get(args, options))
}

export async function getApiLogsRequestId(
  args: InferRequestType<(typeof client.api_logs)[':request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_logs[':request_id'].$get(args, options))
}

export async function getAnalyticsGrossRevenue(
  args: InferRequestType<typeof client.analytics.gross_revenue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.gross_revenue.$get(args, options))
}

export async function getAnalyticsInvoiceCollection(
  args: InferRequestType<typeof client.analytics.invoice_collection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.invoice_collection.$get(args, options))
}

export async function getAnalyticsInvoicedUsage(
  args: InferRequestType<typeof client.analytics.invoiced_usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.invoiced_usage.$get(args, options))
}

export async function getAnalyticsMrr(
  args: InferRequestType<typeof client.analytics.mrr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.mrr.$get(args, options))
}

export async function getAnalyticsOverdueBalance(
  args: InferRequestType<typeof client.analytics.overdue_balance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.overdue_balance.$get(args, options))
}

export async function getAnalyticsUsage(
  args: InferRequestType<typeof client.analytics.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.analytics.usage.$get(args, options))
}

export async function getAppliedCoupons(
  args: InferRequestType<typeof client.applied_coupons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applied_coupons.$get(args, options))
}

export async function postAppliedCoupons(
  args: InferRequestType<typeof client.applied_coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applied_coupons.$post(args, options))
}

export async function getBillableMetrics(
  args: InferRequestType<typeof client.billable_metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billable_metrics.$get(args, options))
}

export async function postBillableMetrics(
  args: InferRequestType<typeof client.billable_metrics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billable_metrics.$post(args, options))
}

export async function postBillableMetricsEvaluateExpression(
  args: InferRequestType<typeof client.billable_metrics.evaluate_expression.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billable_metrics.evaluate_expression.$post(args, options))
}

export async function getBillableMetricsCode(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billable_metrics[':code'].$get(args, options))
}

export async function putBillableMetricsCode(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billable_metrics[':code'].$put(args, options))
}

export async function deleteBillableMetricsCode(
  args: InferRequestType<(typeof client.billable_metrics)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billable_metrics[':code'].$delete(args, options))
}

export async function getFeatures(
  args: InferRequestType<typeof client.features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features.$get(args, options))
}

export async function postFeatures(
  args: InferRequestType<typeof client.features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features.$post(args, options))
}

export async function getFeaturesCode(
  args: InferRequestType<(typeof client.features)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':code'].$get(args, options))
}

export async function putFeaturesCode(
  args: InferRequestType<(typeof client.features)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':code'].$put(args, options))
}

export async function deleteFeaturesCode(
  args: InferRequestType<(typeof client.features)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':code'].$delete(args, options))
}

export async function deleteFeaturesCodePrivilegesPrivilegeCode(
  args: InferRequestType<
    (typeof client.features)[':code']['privileges'][':privilege_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.features[':code'].privileges[':privilege_code'].$delete(args, options),
  )
}

export async function getCoupons(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.$get(args, options))
}

export async function postCoupons(
  args: InferRequestType<typeof client.coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.$post(args, options))
}

export async function getCouponsCode(
  args: InferRequestType<(typeof client.coupons)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':code'].$get(args, options))
}

export async function putCouponsCode(
  args: InferRequestType<(typeof client.coupons)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':code'].$put(args, options))
}

export async function deleteCouponsCode(
  args: InferRequestType<(typeof client.coupons)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':code'].$delete(args, options))
}

export async function getCreditNotes(
  args: InferRequestType<typeof client.credit_notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes.$get(args, options))
}

export async function postCreditNotes(
  args: InferRequestType<typeof client.credit_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes.$post(args, options))
}

export async function getCreditNotesLagoId(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].$get(args, options))
}

export async function putCreditNotesLagoId(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].$put(args, options))
}

export async function postCreditNotesLagoIdDownload(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['download']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].download.$post(args, options))
}

export async function postCreditNotesLagoIdDownloadXml(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['download_xml']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].download_xml.$post(args, options))
}

export async function postCreditNotesEstimate(
  args: InferRequestType<typeof client.credit_notes.estimate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes.estimate.$post(args, options))
}

export async function putCreditNotesLagoIdVoid(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['void']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].void.$put(args, options))
}

export async function postCreditNotesLagoIdMetadata(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].metadata.$post(args, options))
}

export async function deleteCreditNotesLagoIdMetadata(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].metadata.$delete(args, options))
}

export async function patchCreditNotesLagoIdMetadata(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':lago_id'].metadata.$patch(args, options))
}

export async function deleteCreditNotesLagoIdMetadataKey(
  args: InferRequestType<(typeof client.credit_notes)[':lago_id']['metadata'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_notes[':lago_id'].metadata[':key'].$delete(args, options),
  )
}

export async function getCustomers(
  args: InferRequestType<typeof client.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.$get(args, options))
}

export async function postCustomers(
  args: InferRequestType<typeof client.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.$post(args, options))
}

export async function getCustomersExternalCustomerId(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':external_customer_id'].$get(args, options))
}

export async function deleteCustomersExternalCustomerId(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':external_customer_id'].$delete(args, options))
}

export async function getCustomersExternalCustomerIdAppliedCoupons(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].applied_coupons.$get(args, options),
  )
}

export async function deleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponId(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['applied_coupons'][':applied_coupon_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].applied_coupons[':applied_coupon_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getCustomersExternalCustomerIdCreditNotes(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['credit_notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].credit_notes.$get(args, options),
  )
}

export async function getCustomersExternalCustomerIdInvoices(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':external_customer_id'].invoices.$get(args, options))
}

export async function getCustomersExternalCustomerIdPayments(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':external_customer_id'].payments.$get(args, options))
}

export async function getCustomersExternalCustomerIdPaymentRequests(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].payment_requests.$get(args, options),
  )
}

export async function getCustomersExternalCustomerIdPortalUrl(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['portal_url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].portal_url.$get(args, options),
  )
}

export async function getCustomersExternalCustomerIdSubscriptions(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].subscriptions.$get(args, options),
  )
}

export async function getCustomersExternalCustomerIdWallets(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':external_customer_id'].wallets.$get(args, options))
}

export async function postCustomersExternalCustomerIdWallets(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['wallets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':external_customer_id'].wallets.$post(args, options))
}

export async function getCustomersExternalCustomerIdWalletsCode(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':code'].$get(args, options),
  )
}

export async function putCustomersExternalCustomerIdWalletsCode(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':code'].$put(args, options),
  )
}

export async function deleteCustomersExternalCustomerIdWalletsCode(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':code'].$delete(args, options),
  )
}

export async function postCustomersExternalCustomerIdWalletsWalletCodeMetadata(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$post(args, options),
  )
}

export async function deleteCustomersExternalCustomerIdWalletsWalletCodeMetadata(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$delete(
      args,
      options,
    ),
  )
}

export async function patchCustomersExternalCustomerIdWalletsWalletCodeMetadata(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].metadata.$patch(
      args,
      options,
    ),
  )
}

export async function deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKey(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['metadata'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].metadata[':key'].$delete(
      args,
      options,
    ),
  )
}

export async function getCustomersExternalCustomerIdWalletsWalletCodeAlerts(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$get(args, options),
  )
}

export async function postCustomersExternalCustomerIdWalletsWalletCodeAlerts(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$post(args, options),
  )
}

export async function deleteCustomersExternalCustomerIdWalletsWalletCodeAlerts(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].alerts.$delete(args, options),
  )
}

export async function getCustomersExternalCustomerIdWalletsWalletCodeAlertsCode(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$get(
      args,
      options,
    ),
  )
}

export async function putCustomersExternalCustomerIdWalletsWalletCodeAlertsCode(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$put(
      args,
      options,
    ),
  )
}

export async function deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCode(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['wallets'][':wallet_code']['alerts'][':code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].wallets[':wallet_code'].alerts[':code'].$delete(
      args,
      options,
    ),
  )
}

export async function getCustomersExternalCustomerIdCurrentUsage(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['current_usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].current_usage.$get(args, options),
  )
}

export async function getCustomersExternalCustomerIdProjectedUsage(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['projected_usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].projected_usage.$get(args, options),
  )
}

export async function getCustomersExternalCustomerIdPastUsage(
  args: InferRequestType<(typeof client.customers)[':external_customer_id']['past_usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].past_usage.$get(args, options),
  )
}

export async function getCustomersExternalCustomerIdAttributedUsage(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['attributed_usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].attributed_usage.$get(args, options),
  )
}

export async function postCustomersExternalCustomerIdCheckoutUrl(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['checkout_url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].checkout_url.$post(args, options),
  )
}

export async function getCustomersExternalCustomerIdPaymentMethods(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].payment_methods.$get(args, options),
  )
}

export async function putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefault(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['set_as_default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].payment_methods[':lago_id'].set_as_default.$put(
      args,
      options,
    ),
  )
}

export async function deleteCustomersExternalCustomerIdPaymentMethodsLagoId(
  args: InferRequestType<
    (typeof client.customers)[':external_customer_id']['payment_methods'][':lago_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':external_customer_id'].payment_methods[':lago_id'].$delete(args, options),
  )
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function postEvents(
  args: InferRequestType<typeof client.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$post(args, options))
}

export async function postEventsBatch(
  args: InferRequestType<typeof client.events.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.batch.$post(args, options))
}

export async function postEventsEstimateFees(
  args: InferRequestType<typeof client.events.estimate_fees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.estimate_fees.$post(args, options))
}

export async function postEventsEstimateInstantFees(
  args: InferRequestType<typeof client.events.estimate_instant_fees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.estimate_instant_fees.$post(args, options))
}

export async function postEventsBatchEstimateInstantFees(
  args: InferRequestType<typeof client.events.batch_estimate_instant_fees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.batch_estimate_instant_fees.$post(args, options))
}

export async function getEventsTransactionId(
  args: InferRequestType<(typeof client.events)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':transaction_id'].$get(args, options))
}

export async function getFees(
  args: InferRequestType<typeof client.fees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fees.$get(args, options))
}

export async function getFeesLagoId(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fees[':lago_id'].$get(args, options))
}

export async function putFeesLagoId(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fees[':lago_id'].$put(args, options))
}

export async function deleteFeesLagoId(
  args: InferRequestType<(typeof client.fees)[':lago_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fees[':lago_id'].$delete(args, options))
}

export async function getInvoices(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$get(args, options))
}

export async function postInvoices(
  args: InferRequestType<typeof client.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$post(args, options))
}

export async function getInvoicesLagoId(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].$get(args, options))
}

export async function putInvoicesLagoId(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].$put(args, options))
}

export async function deleteInvoicesLagoId(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].$delete(args, options))
}

export async function postInvoicesLagoIdDownload(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['download']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].download.$post(args, options))
}

export async function postInvoicesLagoIdDownloadXml(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['download_xml']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].download_xml.$post(args, options))
}

export async function putInvoicesLagoIdFinalize(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['finalize']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].finalize.$put(args, options))
}

export async function postInvoicesLagoIdLoseDispute(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['lose_dispute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].lose_dispute.$post(args, options))
}

export async function putInvoicesLagoIdRefresh(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['refresh']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].refresh.$put(args, options))
}

export async function postInvoicesLagoIdRetry(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].retry.$post(args, options))
}

export async function postInvoicesLagoIdPaymentUrl(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['payment_url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].payment_url.$post(args, options))
}

export async function postInvoicesPreview(
  args: InferRequestType<typeof client.invoices.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.preview.$post(args, options))
}

export async function postInvoicesLagoIdRetryPayment(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['retry_payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].retry_payment.$post(args, options))
}

export async function postInvoicesLagoIdVoid(
  args: InferRequestType<(typeof client.invoices)[':lago_id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':lago_id'].void.$post(args, options))
}

export async function getOrderForms(
  args: InferRequestType<typeof client.order_forms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order_forms.$get(args, options))
}

export async function getOrderFormsLagoId(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order_forms[':lago_id'].$get(args, options))
}

export async function postOrderFormsLagoIdMarkAsSigned(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['mark_as_signed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order_forms[':lago_id'].mark_as_signed.$post(args, options))
}

export async function postOrderFormsLagoIdVoid(
  args: InferRequestType<(typeof client.order_forms)[':lago_id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.order_forms[':lago_id'].void.$post(args, options))
}

export async function getOrders(
  args: InferRequestType<typeof client.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$get(args, options))
}

export async function getOrdersLagoId(
  args: InferRequestType<(typeof client.orders)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':lago_id'].$get(args, options))
}

export async function postOrdersLagoIdExecute(
  args: InferRequestType<(typeof client.orders)[':lago_id']['execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':lago_id'].execute.$post(args, options))
}

export async function getOrganizations(options?: ClientRequestOptions) {
  return await parseResponse(client.organizations.$get(undefined, options))
}

export async function putOrganizations(
  args: InferRequestType<typeof client.organizations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$put(args, options))
}

export async function getPaymentReceipts(
  args: InferRequestType<typeof client.payment_receipts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_receipts.$get(args, options))
}

export async function getPaymentReceiptsLagoId(
  args: InferRequestType<(typeof client.payment_receipts)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_receipts[':lago_id'].$get(args, options))
}

export async function getPaymentRequests(
  args: InferRequestType<typeof client.payment_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_requests.$get(args, options))
}

export async function postPaymentRequests(
  args: InferRequestType<typeof client.payment_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_requests.$post(args, options))
}

export async function getPaymentRequestsLagoId(
  args: InferRequestType<(typeof client.payment_requests)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_requests[':lago_id'].$get(args, options))
}

export async function getPayments(
  args: InferRequestType<typeof client.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.$get(args, options))
}

export async function postPayments(
  args: InferRequestType<typeof client.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.$post(args, options))
}

export async function getPaymentsLagoId(
  args: InferRequestType<(typeof client.payments)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':lago_id'].$get(args, options))
}

export async function getPlans(
  args: InferRequestType<typeof client.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans.$get(args, options))
}

export async function postPlans(
  args: InferRequestType<typeof client.plans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans.$post(args, options))
}

export async function getPlansCode(
  args: InferRequestType<(typeof client.plans)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].$get(args, options))
}

export async function putPlansCode(
  args: InferRequestType<(typeof client.plans)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].$put(args, options))
}

export async function deletePlansCode(
  args: InferRequestType<(typeof client.plans)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].$delete(args, options))
}

export async function getPlansCodeEntitlements(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].entitlements.$get(args, options))
}

export async function postPlansCodeEntitlements(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].entitlements.$post(args, options))
}

export async function patchPlansCodeEntitlements(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].entitlements.$patch(args, options))
}

export async function getPlansCodeEntitlementsFeatureCode(
  args: InferRequestType<(typeof client.plans)[':code']['entitlements'][':feature_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].entitlements[':feature_code'].$get(args, options),
  )
}

export async function deletePlansCodeEntitlementsFeatureCode(
  args: InferRequestType<
    (typeof client.plans)[':code']['entitlements'][':feature_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].entitlements[':feature_code'].$delete(args, options),
  )
}

export async function deletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCode(
  args: InferRequestType<
    (typeof client.plans)[':code']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].entitlements[':feature_code'].privileges[':privilege_code'].$delete(
      args,
      options,
    ),
  )
}

export async function postPlansCodeMetadata(
  args: InferRequestType<(typeof client.plans)[':code']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].metadata.$post(args, options))
}

export async function deletePlansCodeMetadata(
  args: InferRequestType<(typeof client.plans)[':code']['metadata']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].metadata.$delete(args, options))
}

export async function patchPlansCodeMetadata(
  args: InferRequestType<(typeof client.plans)[':code']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].metadata.$patch(args, options))
}

export async function deletePlansCodeMetadataKey(
  args: InferRequestType<(typeof client.plans)[':code']['metadata'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].metadata[':key'].$delete(args, options))
}

export async function getPlansCodeCharges(
  args: InferRequestType<(typeof client.plans)[':code']['charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].charges.$get(args, options))
}

export async function postPlansCodeCharges(
  args: InferRequestType<(typeof client.plans)[':code']['charges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].charges.$post(args, options))
}

export async function getPlansCodeChargesChargeCode(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].charges[':charge_code'].$get(args, options))
}

export async function putPlansCodeChargesChargeCode(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].charges[':charge_code'].$put(args, options))
}

export async function deletePlansCodeChargesChargeCode(
  args: InferRequestType<(typeof client.plans)[':code']['charges'][':charge_code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].charges[':charge_code'].$delete(args, options))
}

export async function getPlansCodeChargesChargeCodeFilters(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].charges[':charge_code'].filters.$get(args, options),
  )
}

export async function postPlansCodeChargesChargeCodeFilters(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].charges[':charge_code'].filters.$post(args, options),
  )
}

export async function getPlansCodeChargesChargeCodeFiltersFilterId(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$get(args, options),
  )
}

export async function putPlansCodeChargesChargeCodeFiltersFilterId(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$put(args, options),
  )
}

export async function deletePlansCodeChargesChargeCodeFiltersFilterId(
  args: InferRequestType<
    (typeof client.plans)[':code']['charges'][':charge_code']['filters'][':filter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].charges[':charge_code'].filters[':filter_id'].$delete(args, options),
  )
}

export async function getPlansCodeFixedCharges(
  args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].fixed_charges.$get(args, options))
}

export async function postPlansCodeFixedCharges(
  args: InferRequestType<(typeof client.plans)[':code']['fixed_charges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':code'].fixed_charges.$post(args, options))
}

export async function getPlansCodeFixedChargesFixedChargeCode(
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].fixed_charges[':fixed_charge_code'].$get(args, options),
  )
}

export async function putPlansCodeFixedChargesFixedChargeCode(
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].fixed_charges[':fixed_charge_code'].$put(args, options),
  )
}

export async function deletePlansCodeFixedChargesFixedChargeCode(
  args: InferRequestType<
    (typeof client.plans)[':code']['fixed_charges'][':fixed_charge_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.plans[':code'].fixed_charges[':fixed_charge_code'].$delete(args, options),
  )
}

export async function getQuotes(
  args: InferRequestType<typeof client.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes.$get(args, options))
}

export async function getQuotesLagoId(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':lago_id'].$get(args, options))
}

export async function getQuotesLagoIdVersions(
  args: InferRequestType<(typeof client.quotes)[':lago_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':lago_id'].versions.$get(args, options))
}

export async function getQuoteVersionsLagoId(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote_versions[':lago_id'].$get(args, options))
}

export async function postQuoteVersionsLagoIdApprove(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote_versions[':lago_id'].approve.$post(args, options))
}

export async function postQuoteVersionsLagoIdVoid(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote_versions[':lago_id'].void.$post(args, options))
}

export async function postQuoteVersionsLagoIdClone(
  args: InferRequestType<(typeof client.quote_versions)[':lago_id']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quote_versions[':lago_id'].clone.$post(args, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function postSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$post(args, options))
}

export async function getSubscriptionsExternalId(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].$get(args, options))
}

export async function putSubscriptionsExternalId(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].$put(args, options))
}

export async function deleteSubscriptionsExternalId(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].$delete(args, options))
}

export async function getSubscriptionsExternalIdLifetimeUsage(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].lifetime_usage.$get(args, options),
  )
}

export async function putSubscriptionsExternalIdLifetimeUsage(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['lifetime_usage']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].lifetime_usage.$put(args, options),
  )
}

export async function getSubscriptionsExternalIdAlerts(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].alerts.$get(args, options))
}

export async function postSubscriptionsExternalIdAlerts(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].alerts.$post(args, options))
}

export async function deleteSubscriptionsExternalIdAlerts(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].alerts.$delete(args, options))
}

export async function getSubscriptionsExternalIdAlertsCode(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].alerts[':code'].$get(args, options),
  )
}

export async function putSubscriptionsExternalIdAlertsCode(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['alerts'][':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].alerts[':code'].$put(args, options),
  )
}

export async function deleteSubscriptionsExternalIdAlertsCode(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['alerts'][':code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].alerts[':code'].$delete(args, options),
  )
}

export async function getSubscriptionsExternalIdEntitlements(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].entitlements.$get(args, options))
}

export async function patchSubscriptionsExternalIdEntitlements(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['entitlements']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].entitlements.$patch(args, options),
  )
}

export async function deleteSubscriptionsExternalIdEntitlementsFeatureCode(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].entitlements[':feature_code'].$delete(args, options),
  )
}

export async function deleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCode(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['entitlements'][':feature_code']['privileges'][':privilege_code']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].entitlements[':feature_code'].privileges[
      ':privilege_code'
    ].$delete(args, options),
  )
}

export async function getSubscriptionsExternalIdFixedCharges(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['fixed_charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].fixed_charges.$get(args, options))
}

export async function getSubscriptionsExternalIdCharges(
  args: InferRequestType<(typeof client.subscriptions)[':external_id']['charges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':external_id'].charges.$get(args, options))
}

export async function getSubscriptionsExternalIdChargesChargeCode(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].charges[':charge_code'].$get(args, options),
  )
}

export async function putSubscriptionsExternalIdChargesChargeCode(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].charges[':charge_code'].$put(args, options),
  )
}

export async function getSubscriptionsExternalIdChargesChargeCodeFilters(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].charges[':charge_code'].filters.$get(args, options),
  )
}

export async function postSubscriptionsExternalIdChargesChargeCodeFilters(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].charges[':charge_code'].filters.$post(args, options),
  )
}

export async function getSubscriptionsExternalIdChargesChargeCodeFiltersFilterId(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$get(
      args,
      options,
    ),
  )
}

export async function putSubscriptionsExternalIdChargesChargeCodeFiltersFilterId(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterId(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['charges'][':charge_code']['filters'][':filter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].charges[':charge_code'].filters[':filter_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getSubscriptionsExternalIdFixedChargesFixedChargeCode(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$get(args, options),
  )
}

export async function putSubscriptionsExternalIdFixedChargesFixedChargeCode(
  args: InferRequestType<
    (typeof client.subscriptions)[':external_id']['fixed_charges'][':fixed_charge_code']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':external_id'].fixed_charges[':fixed_charge_code'].$put(args, options),
  )
}

export async function getTaxes(
  args: InferRequestType<typeof client.taxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxes.$get(args, options))
}

export async function postTaxes(
  args: InferRequestType<typeof client.taxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxes.$post(args, options))
}

export async function getTaxesCode(
  args: InferRequestType<(typeof client.taxes)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxes[':code'].$get(args, options))
}

export async function putTaxesCode(
  args: InferRequestType<(typeof client.taxes)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxes[':code'].$put(args, options))
}

export async function deleteTaxesCode(
  args: InferRequestType<(typeof client.taxes)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxes[':code'].$delete(args, options))
}

export async function getUsageAttributionTypes(
  args: InferRequestType<typeof client.usage_attribution_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_attribution_types.$get(args, options))
}

export async function postUsageAttributionTypes(
  args: InferRequestType<typeof client.usage_attribution_types.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_attribution_types.$post(args, options))
}

export async function getUsageAttributionTypesCode(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_attribution_types[':code'].$get(args, options))
}

export async function putUsageAttributionTypesCode(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_attribution_types[':code'].$put(args, options))
}

export async function deleteUsageAttributionTypesCode(
  args: InferRequestType<(typeof client.usage_attribution_types)[':code']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_attribution_types[':code'].$delete(args, options))
}

export async function getWallets(
  args: InferRequestType<typeof client.wallets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets.$get(args, options))
}

export async function postWallets(
  args: InferRequestType<typeof client.wallets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets.$post(args, options))
}

export async function getWalletsLagoId(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].$get(args, options))
}

export async function putWalletsLagoId(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].$put(args, options))
}

export async function deleteWalletsLagoId(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].$delete(args, options))
}

export async function postWalletsLagoIdMetadata(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].metadata.$post(args, options))
}

export async function deleteWalletsLagoIdMetadata(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].metadata.$delete(args, options))
}

export async function patchWalletsLagoIdMetadata(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].metadata.$patch(args, options))
}

export async function deleteWalletsLagoIdMetadataKey(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['metadata'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].metadata[':key'].$delete(args, options))
}

export async function postWalletTransactions(
  args: InferRequestType<typeof client.wallet_transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet_transactions.$post(args, options))
}

export async function getWalletTransactionsLagoId(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet_transactions[':lago_id'].$get(args, options))
}

export async function postWalletTransactionsLagoIdPaymentUrl(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['payment_url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wallet_transactions[':lago_id'].payment_url.$post(args, options),
  )
}

export async function getWalletTransactionsLagoIdConsumptions(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['consumptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wallet_transactions[':lago_id'].consumptions.$get(args, options),
  )
}

export async function getWalletTransactionsLagoIdFundings(
  args: InferRequestType<(typeof client.wallet_transactions)[':lago_id']['fundings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet_transactions[':lago_id'].fundings.$get(args, options))
}

export async function getWalletsLagoIdWalletTransactions(
  args: InferRequestType<(typeof client.wallets)[':lago_id']['wallet_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallets[':lago_id'].wallet_transactions.$get(args, options))
}

export async function getWebhooksPublicKey(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.public_key.$get(undefined, options))
}

export async function getWebhooksJsonPublicKey(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.json_public_key.$get(undefined, options))
}

export async function getWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$get(args, options))
}

export async function postWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$post(args, options))
}

export async function getWebhookEndpointsLagoId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':lago_id'].$get(args, options))
}

export async function putWebhookEndpointsLagoId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':lago_id'].$put(args, options))
}

export async function deleteWebhookEndpointsLagoId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':lago_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':lago_id'].$delete(args, options))
}
