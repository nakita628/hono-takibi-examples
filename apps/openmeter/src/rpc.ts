import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Addons(
  args: InferRequestType<typeof client.api.v1.addons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.addons.$get(args, options))
}

export async function postApiV1Addons(
  args: InferRequestType<typeof client.api.v1.addons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.addons.$post(args, options))
}

export async function getApiV1AddonsAddonId(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.addons[':addonId'].$get(args, options))
}

export async function putApiV1AddonsAddonId(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.addons[':addonId'].$put(args, options))
}

export async function deleteApiV1AddonsAddonId(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.addons[':addonId'].$delete(args, options))
}

export async function postApiV1AddonsAddonIdArchive(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.addons[':addonId'].archive.$post(args, options))
}

export async function postApiV1AddonsAddonIdPublish(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.addons[':addonId'].publish.$post(args, options))
}

export async function getApiV1Apps(
  args: InferRequestType<typeof client.api.v1.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apps.$get(args, options))
}

export async function postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronized(
  args: InferRequestType<
    (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.apps['custom-invoicing'][':invoiceId'].draft.synchronized.$post(args, options),
  )
}

export async function postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronized(
  args: InferRequestType<
    (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.apps['custom-invoicing'][':invoiceId'].issuing.synchronized.$post(args, options),
  )
}

export async function postApiV1AppsCustomInvoicingInvoiceIdPaymentStatus(
  args: InferRequestType<
    (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.apps['custom-invoicing'][':invoiceId'].payment.status.$post(args, options),
  )
}

export async function getApiV1AppsId(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apps[':id'].$get(args, options))
}

export async function putApiV1AppsId(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apps[':id'].$put(args, options))
}

export async function deleteApiV1AppsId(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apps[':id'].$delete(args, options))
}

export async function putApiV1AppsIdStripeApiKey(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apps[':id'].stripe['api-key'].$put(args, options))
}

export async function postApiV1AppsIdStripeWebhook(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apps[':id'].stripe.webhook.$post(args, options))
}

export async function getApiV1BillingCustomers(
  args: InferRequestType<typeof client.api.v1.billing.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.customers.$get(args, options))
}

export async function getApiV1BillingCustomersCustomerId(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.customers[':customerId'].$get(args, options))
}

export async function putApiV1BillingCustomersCustomerId(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.customers[':customerId'].$put(args, options))
}

export async function deleteApiV1BillingCustomersCustomerId(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.customers[':customerId'].$delete(args, options))
}

export async function postApiV1BillingCustomersCustomerIdInvoicesPendingLines(
  args: InferRequestType<
    (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.billing.customers[':customerId'].invoices['pending-lines'].$post(args, options),
  )
}

export async function postApiV1BillingCustomersCustomerIdInvoicesSimulate(
  args: InferRequestType<
    (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.billing.customers[':customerId'].invoices.simulate.$post(args, options),
  )
}

export async function getApiV1BillingInvoices(
  args: InferRequestType<typeof client.api.v1.billing.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.invoices.$get(args, options))
}

export async function postApiV1BillingInvoicesInvoice(
  args: InferRequestType<typeof client.api.v1.billing.invoices.invoice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.invoices.invoice.$post(args, options))
}

export async function getApiV1BillingInvoicesInvoiceId(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.invoices[':invoiceId'].$get(args, options))
}

export async function putApiV1BillingInvoicesInvoiceId(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.invoices[':invoiceId'].$put(args, options))
}

export async function deleteApiV1BillingInvoicesInvoiceId(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.invoices[':invoiceId'].$delete(args, options))
}

export async function postApiV1BillingInvoicesInvoiceIdAdvance(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.billing.invoices[':invoiceId'].advance.$post(args, options),
  )
}

export async function postApiV1BillingInvoicesInvoiceIdApprove(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.billing.invoices[':invoiceId'].approve.$post(args, options),
  )
}

export async function postApiV1BillingInvoicesInvoiceIdRetry(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.billing.invoices[':invoiceId'].retry.$post(args, options),
  )
}

export async function postApiV1BillingInvoicesInvoiceIdSnapshotQuantities(
  args: InferRequestType<
    (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.billing.invoices[':invoiceId']['snapshot-quantities'].$post(args, options),
  )
}

export async function postApiV1BillingInvoicesInvoiceIdTaxesRecalculate(
  args: InferRequestType<
    (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.billing.invoices[':invoiceId'].taxes.recalculate.$post(args, options),
  )
}

export async function postApiV1BillingInvoicesInvoiceIdVoid(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.invoices[':invoiceId'].void.$post(args, options))
}

export async function getApiV1BillingProfiles(
  args: InferRequestType<typeof client.api.v1.billing.profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.profiles.$get(args, options))
}

export async function postApiV1BillingProfiles(
  args: InferRequestType<typeof client.api.v1.billing.profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.profiles.$post(args, options))
}

export async function getApiV1BillingProfilesId(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.profiles[':id'].$get(args, options))
}

export async function putApiV1BillingProfilesId(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.profiles[':id'].$put(args, options))
}

export async function deleteApiV1BillingProfilesId(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing.profiles[':id'].$delete(args, options))
}

export async function getApiV1Customers(
  args: InferRequestType<typeof client.api.v1.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers.$get(args, options))
}

export async function postApiV1Customers(
  args: InferRequestType<typeof client.api.v1.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers.$post(args, options))
}

export async function getApiV1CustomersCustomerIdOrKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].$get(args, options))
}

export async function putApiV1CustomersCustomerIdOrKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].$put(args, options))
}

export async function deleteApiV1CustomersCustomerIdOrKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].$delete(args, options))
}

export async function getApiV1CustomersCustomerIdOrKeyAccess(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].access.$get(args, options))
}

export async function getApiV1CustomersCustomerIdOrKeyApps(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].apps.$get(args, options))
}

export async function putApiV1CustomersCustomerIdOrKeyApps(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].apps.$put(args, options))
}

export async function deleteApiV1CustomersCustomerIdOrKeyAppsAppId(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.customers[':customerIdOrKey'].apps[':appId'].$delete(args, options),
  )
}

export async function getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValue(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.customers[':customerIdOrKey'].entitlements[':featureKey'].value.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1CustomersCustomerIdOrKeyStripe(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].stripe.$get(args, options))
}

export async function putApiV1CustomersCustomerIdOrKeyStripe(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.customers[':customerIdOrKey'].stripe.$put(args, options))
}

export async function postApiV1CustomersCustomerIdOrKeyStripePortal(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.customers[':customerIdOrKey'].stripe.portal.$post(args, options),
  )
}

export async function getApiV1CustomersCustomerIdOrKeySubscriptions(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.customers[':customerIdOrKey'].subscriptions.$get(args, options),
  )
}

export async function getApiV1DebugMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.debug.metrics.$get(undefined, options))
}

export async function getApiV1Entitlements(
  args: InferRequestType<typeof client.api.v1.entitlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.entitlements.$get(args, options))
}

export async function getApiV1EntitlementsEntitlementId(
  args: InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.entitlements[':entitlementId'].$get(args, options))
}

export async function getApiV1Events(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.events.$get(args, options))
}

export async function postApiV1Events(
  args: InferRequestType<typeof client.api.v1.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.events.$post(args, options))
}

export async function getApiV1Features(
  args: InferRequestType<typeof client.api.v1.features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.features.$get(args, options))
}

export async function postApiV1Features(
  args: InferRequestType<typeof client.api.v1.features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.features.$post(args, options))
}

export async function getApiV1FeaturesFeatureId(
  args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.features[':featureId'].$get(args, options))
}

export async function deleteApiV1FeaturesFeatureId(
  args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.features[':featureId'].$delete(args, options))
}

export async function getApiV1Grants(
  args: InferRequestType<typeof client.api.v1.grants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.grants.$get(args, options))
}

export async function deleteApiV1GrantsGrantId(
  args: InferRequestType<(typeof client.api.v1.grants)[':grantId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.grants[':grantId'].$delete(args, options))
}

export async function getApiV1InfoCurrencies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.info.currencies.$get(undefined, options))
}

export async function getApiV1InfoProgressId(
  args: InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.info.progress[':id'].$get(args, options))
}

export async function getApiV1MarketplaceListings(
  args: InferRequestType<typeof client.api.v1.marketplace.listings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.marketplace.listings.$get(args, options))
}

export async function getApiV1MarketplaceListingsType(
  args: InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.marketplace.listings[':type'].$get(args, options))
}

export async function postApiV1MarketplaceListingsTypeInstall(
  args: InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['install']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.marketplace.listings[':type'].install.$post(args, options),
  )
}

export async function postApiV1MarketplaceListingsTypeInstallApikey(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.marketplace.listings[':type'].install.apikey.$post(args, options),
  )
}

export async function getApiV1MarketplaceListingsTypeInstallOauth2(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.marketplace.listings[':type'].install.oauth2.$get(args, options),
  )
}

export async function getApiV1MarketplaceListingsTypeInstallOauth2Authorize(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.marketplace.listings[':type'].install.oauth2.authorize.$get(args, options),
  )
}

export async function getApiV1Meters(
  args: InferRequestType<typeof client.api.v1.meters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters.$get(args, options))
}

export async function postApiV1Meters(
  args: InferRequestType<typeof client.api.v1.meters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters.$post(args, options))
}

export async function getApiV1MetersMeterIdOrSlug(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters[':meterIdOrSlug'].$get(args, options))
}

export async function putApiV1MetersMeterIdOrSlug(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters[':meterIdOrSlug'].$put(args, options))
}

export async function deleteApiV1MetersMeterIdOrSlug(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters[':meterIdOrSlug'].$delete(args, options))
}

export async function getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValues(
  args: InferRequestType<
    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.meters[':meterIdOrSlug']['group-by'][':groupByKey'].values.$get(args, options),
  )
}

export async function getApiV1MetersMeterIdOrSlugQuery(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters[':meterIdOrSlug'].query.$get(args, options))
}

export async function postApiV1MetersMeterIdOrSlugQuery(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters[':meterIdOrSlug'].query.$post(args, options))
}

export async function getApiV1MetersMeterIdOrSlugSubjects(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.meters[':meterIdOrSlug'].subjects.$get(args, options))
}

export async function getApiV1NotificationChannels(
  args: InferRequestType<typeof client.api.v1.notification.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.channels.$get(args, options))
}

export async function postApiV1NotificationChannels(
  args: InferRequestType<typeof client.api.v1.notification.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.channels.$post(args, options))
}

export async function getApiV1NotificationChannelsChannelId(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.channels[':channelId'].$get(args, options))
}

export async function putApiV1NotificationChannelsChannelId(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.channels[':channelId'].$put(args, options))
}

export async function deleteApiV1NotificationChannelsChannelId(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.notification.channels[':channelId'].$delete(args, options),
  )
}

export async function getApiV1NotificationEvents(
  args: InferRequestType<typeof client.api.v1.notification.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.events.$get(args, options))
}

export async function getApiV1NotificationEventsEventId(
  args: InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.events[':eventId'].$get(args, options))
}

export async function postApiV1NotificationEventsEventIdResend(
  args: InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.notification.events[':eventId'].resend.$post(args, options),
  )
}

export async function getApiV1NotificationRules(
  args: InferRequestType<typeof client.api.v1.notification.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.rules.$get(args, options))
}

export async function postApiV1NotificationRules(
  args: InferRequestType<typeof client.api.v1.notification.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.rules.$post(args, options))
}

export async function getApiV1NotificationRulesRuleId(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.rules[':ruleId'].$get(args, options))
}

export async function putApiV1NotificationRulesRuleId(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.rules[':ruleId'].$put(args, options))
}

export async function deleteApiV1NotificationRulesRuleId(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.rules[':ruleId'].$delete(args, options))
}

export async function postApiV1NotificationRulesRuleIdTest(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.notification.rules[':ruleId'].test.$post(args, options))
}

export async function getApiV1Plans(
  args: InferRequestType<typeof client.api.v1.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans.$get(args, options))
}

export async function postApiV1Plans(
  args: InferRequestType<typeof client.api.v1.plans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans.$post(args, options))
}

export async function postApiV1PlansPlanIdOrKeyNext(
  args: InferRequestType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planIdOrKey'].next.$post(args, options))
}

export async function getApiV1PlansPlanId(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planId'].$get(args, options))
}

export async function putApiV1PlansPlanId(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planId'].$put(args, options))
}

export async function deleteApiV1PlansPlanId(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planId'].$delete(args, options))
}

export async function getApiV1PlansPlanIdAddons(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planId'].addons.$get(args, options))
}

export async function postApiV1PlansPlanIdAddons(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planId'].addons.$post(args, options))
}

export async function getApiV1PlansPlanIdAddonsPlanAddonId(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.plans[':planId'].addons[':planAddonId'].$get(args, options),
  )
}

export async function putApiV1PlansPlanIdAddonsPlanAddonId(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.plans[':planId'].addons[':planAddonId'].$put(args, options),
  )
}

export async function deleteApiV1PlansPlanIdAddonsPlanAddonId(
  args: InferRequestType<
    (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.plans[':planId'].addons[':planAddonId'].$delete(args, options),
  )
}

export async function postApiV1PlansPlanIdArchive(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planId'].archive.$post(args, options))
}

export async function postApiV1PlansPlanIdPublish(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.plans[':planId'].publish.$post(args, options))
}

export async function getApiV1PortalMetersMeterSlugQuery(
  args: InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.portal.meters[':meterSlug'].query.$get(args, options))
}

export async function getApiV1PortalTokens(
  args: InferRequestType<typeof client.api.v1.portal.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.portal.tokens.$get(args, options))
}

export async function postApiV1PortalTokens(
  args: InferRequestType<typeof client.api.v1.portal.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.portal.tokens.$post(args, options))
}

export async function postApiV1PortalTokensInvalidate(
  args: InferRequestType<typeof client.api.v1.portal.tokens.invalidate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.portal.tokens.invalidate.$post(args, options))
}

export async function postApiV1StripeCheckoutSessions(
  args: InferRequestType<typeof client.api.v1.stripe.checkout.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.stripe.checkout.sessions.$post(args, options))
}

export async function getApiV1Subjects(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.subjects.$get(undefined, options))
}

export async function postApiV1Subjects(
  args: InferRequestType<typeof client.api.v1.subjects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subjects.$post(args, options))
}

export async function getApiV1SubjectsSubjectIdOrKey(
  args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subjects[':subjectIdOrKey'].$get(args, options))
}

export async function deleteApiV1SubjectsSubjectIdOrKey(
  args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subjects[':subjectIdOrKey'].$delete(args, options))
}

export async function getApiV1SubjectsSubjectIdOrKeyEntitlements(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements.$get(args, options),
  )
}

export async function postApiV1SubjectsSubjectIdOrKeyEntitlements(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements.$post(args, options),
  )
}

export async function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].grants.$get(args, options),
  )
}

export async function postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].grants.$post(args, options),
  )
}

export async function putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].override.$put(args, options),
  )
}

export async function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementIdOrFeatureKey'].value.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$get(args, options),
  )
}

export async function deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$delete(args, options),
  )
}

export async function getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistory(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].history.$get(
      args,
      options,
    ),
  )
}

export async function postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdReset(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].reset.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1Subscriptions(
  args: InferRequestType<typeof client.api.v1.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions.$post(args, options))
}

export async function getApiV1SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions[':subscriptionId'].$get(args, options))
}

export async function deleteApiV1SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions[':subscriptionId'].$delete(args, options))
}

export async function patchApiV1SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.subscriptions[':subscriptionId'].$patch(args, options))
}

export async function getApiV1SubscriptionsSubscriptionIdAddons(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].addons.$get(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdAddons(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].addons.$post(args, options),
  )
}

export async function getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$get(
      args,
      options,
    ),
  )
}

export async function patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$patch(
      args,
      options,
    ),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdCancel(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].cancel.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdChange(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].change.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdMigrate(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].migrate.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdRestore(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId'].restore.$post(args, options),
  )
}

export async function postApiV1SubscriptionsSubscriptionIdUnscheduleCancelation(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.subscriptions[':subscriptionId']['unschedule-cancelation'].$post(args, options),
  )
}

export async function getApiV2CustomersCustomerIdOrKeyEntitlements(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements.$get(args, options),
  )
}

export async function postApiV2CustomersCustomerIdOrKeyEntitlements(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements.$post(args, options),
  )
}

export async function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[':entitlementIdOrFeatureKey'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[':entitlementIdOrFeatureKey'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].grants.$get(args, options),
  )
}

export async function postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].grants.$post(args, options),
  )
}

export async function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistory(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].history.$get(args, options),
  )
}

export async function putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].override.$put(args, options),
  )
}

export async function postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyReset(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].reset.$post(args, options),
  )
}

export async function getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.customers[':customerIdOrKey'].entitlements[
      ':entitlementIdOrFeatureKey'
    ].value.$get(args, options),
  )
}

export async function getApiV2Entitlements(
  args: InferRequestType<typeof client.api.v2.entitlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.entitlements.$get(args, options))
}

export async function getApiV2EntitlementsEntitlementId(
  args: InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.entitlements[':entitlementId'].$get(args, options))
}

export async function getApiV2Events(
  args: InferRequestType<typeof client.api.v2.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.events.$get(args, options))
}

export async function getApiV2Grants(
  args: InferRequestType<typeof client.api.v2.grants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.grants.$get(args, options))
}
