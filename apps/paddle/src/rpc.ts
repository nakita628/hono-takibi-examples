import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function patchAccount(
  args: InferRequestType<typeof client.account.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$patch(args, options))
}

export async function getCustomersCustomerIdAddresses(
  args: InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].addresses.$get(args, options))
}

export async function postCustomersCustomerIdAddresses(
  args: InferRequestType<(typeof client.customers)[':customer_id']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].addresses.$post(args, options))
}

export async function getCustomersCustomerIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id'].addresses[':address_id'].$get(args, options),
  )
}

export async function patchCustomersCustomerIdAddressesAddressId(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['addresses'][':address_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id'].addresses[':address_id'].$patch(args, options),
  )
}

export async function getAdjustments(
  args: InferRequestType<typeof client.adjustments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adjustments.$get(args, options))
}

export async function postAdjustments(
  args: InferRequestType<typeof client.adjustments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.adjustments.$post(args, options))
}

export async function getAdjustmentsAdjustmentIdCreditNote(
  args: InferRequestType<(typeof client.adjustments)[':adjustment_id']['credit-note']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.adjustments[':adjustment_id']['credit-note'].$get(args, options),
  )
}

export async function getSettingsBalanceCurrency(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['balance-currency'].$get(undefined, options))
}

export async function patchSettingsBalanceCurrency(
  args: InferRequestType<(typeof client.settings)['balance-currency']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['balance-currency'].$patch(args, options))
}

export async function getCustomersCustomerIdBusinesses(
  args: InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].businesses.$get(args, options))
}

export async function postCustomersCustomerIdBusinesses(
  args: InferRequestType<(typeof client.customers)[':customer_id']['businesses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].businesses.$post(args, options))
}

export async function getCustomersCustomerIdBusinessesBusinessId(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id'].businesses[':business_id'].$get(args, options),
  )
}

export async function patchCustomersCustomerIdBusinessesBusinessId(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['businesses'][':business_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id'].businesses[':business_id'].$patch(args, options),
  )
}

export async function getCheckoutDomains(
  args: InferRequestType<(typeof client)['checkout-domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['checkout-domains'].$get(args, options))
}

export async function getCheckoutDomainsDomainId(
  args: InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['checkout-domains'][':domain_id'].$get(args, options))
}

export async function deleteCheckoutDomainsDomainId(
  args: InferRequestType<(typeof client)['checkout-domains'][':domain_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['checkout-domains'][':domain_id'].$delete(args, options))
}

export async function postCheckoutDomainsDomainIdVerifyPaymentMethod(
  args: InferRequestType<
    (typeof client)['checkout-domains'][':domain_id']['verify-payment-method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['checkout-domains'][':domain_id']['verify-payment-method'].$post(args, options),
  )
}

export async function getSettingsCheckoutFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['checkout-features'].$get(undefined, options))
}

export async function patchSettingsCheckoutFeatures(
  args: InferRequestType<(typeof client.settings)['checkout-features']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['checkout-features'].$patch(args, options))
}

export async function getSettingsCheckoutPaymentMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['checkout-payment-methods'].$get(undefined, options))
}

export async function patchSettingsCheckoutPaymentMethods(
  args: InferRequestType<(typeof client.settings)['checkout-payment-methods']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['checkout-payment-methods'].$patch(args, options))
}

export async function getSettingsCheckoutRecovery(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['checkout-recovery'].$get(undefined, options))
}

export async function patchSettingsCheckoutRecovery(
  args: InferRequestType<(typeof client.settings)['checkout-recovery']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['checkout-recovery'].$patch(args, options))
}

export async function getSettingsCheckoutStylesOverlay(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['checkout-styles-overlay'].$get(undefined, options))
}

export async function patchSettingsCheckoutStylesOverlay(
  args: InferRequestType<(typeof client.settings)['checkout-styles-overlay']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['checkout-styles-overlay'].$patch(args, options))
}

export async function getSettingsCheckoutUrl(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['checkout-url'].$get(undefined, options))
}

export async function patchSettingsCheckoutUrl(
  args: InferRequestType<(typeof client.settings)['checkout-url']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['checkout-url'].$patch(args, options))
}

export async function getClientTokens(
  args: InferRequestType<(typeof client)['client-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['client-tokens'].$get(args, options))
}

export async function postClientTokens(
  args: InferRequestType<(typeof client)['client-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['client-tokens'].$post(args, options))
}

export async function getClientTokensClientTokenId(
  args: InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['client-tokens'][':client_token_id'].$get(args, options))
}

export async function patchClientTokensClientTokenId(
  args: InferRequestType<(typeof client)['client-tokens'][':client_token_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['client-tokens'][':client_token_id'].$patch(args, options))
}

export async function getCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.countries.$get(undefined, options))
}

export async function getCurrencies(options?: ClientRequestOptions) {
  return await parseResponse(client.currencies.$get(undefined, options))
}

export async function getSettingsCurrencyConversions(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['currency-conversions'].$get(undefined, options))
}

export async function patchSettingsCurrencyConversions(
  args: InferRequestType<(typeof client.settings)['currency-conversions']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['currency-conversions'].$patch(args, options))
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

export async function getCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].$get(args, options))
}

export async function patchCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].$patch(args, options))
}

export async function getCustomersCustomerIdCreditBalances(
  args: InferRequestType<(typeof client.customers)[':customer_id']['credit-balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id']['credit-balances'].$get(args, options),
  )
}

export async function postCustomersCustomerIdAuthToken(
  args: InferRequestType<(typeof client.customers)[':customer_id']['auth-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id']['auth-token'].$post(args, options))
}

export async function postCustomersCustomerIdPortalSessions(
  args: InferRequestType<(typeof client.customers)[':customer_id']['portal-sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id']['portal-sessions'].$post(args, options),
  )
}

export async function getDiscountGroups(
  args: InferRequestType<(typeof client)['discount-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discount-groups'].$get(args, options))
}

export async function postDiscountGroups(
  args: InferRequestType<(typeof client)['discount-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discount-groups'].$post(args, options))
}

export async function getDiscountGroupsDiscountGroupId(
  args: InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discount-groups'][':discount_group_id'].$get(args, options))
}

export async function patchDiscountGroupsDiscountGroupId(
  args: InferRequestType<(typeof client)['discount-groups'][':discount_group_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['discount-groups'][':discount_group_id'].$patch(args, options))
}

export async function getDiscounts(
  args: InferRequestType<typeof client.discounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discounts.$get(args, options))
}

export async function postDiscounts(
  args: InferRequestType<typeof client.discounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discounts.$post(args, options))
}

export async function getDiscountsDiscountId(
  args: InferRequestType<(typeof client.discounts)[':discount_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discounts[':discount_id'].$get(args, options))
}

export async function patchDiscountsDiscountId(
  args: InferRequestType<(typeof client.discounts)[':discount_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discounts[':discount_id'].$patch(args, options))
}

export async function getEventTypes(options?: ClientRequestOptions) {
  return await parseResponse(client['event-types'].$get(undefined, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getIps(options?: ClientRequestOptions) {
  return await parseResponse(client.ips.$get(undefined, options))
}

export async function getMetricsExploreEntities(
  args: InferRequestType<typeof client.metrics.explore.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.explore.entities.$get(args, options))
}

export async function postMetricsExplore(
  args: InferRequestType<typeof client.metrics.explore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.explore.$post(args, options))
}

export async function getMetricsMonthlyRecurringRevenue(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['monthly-recurring-revenue'].$get(args, options))
}

export async function getMetricsActiveSubscribers(
  args: InferRequestType<(typeof client.metrics)['active-subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['active-subscribers'].$get(args, options))
}

export async function getMetricsMonthlyRecurringRevenueChange(
  args: InferRequestType<(typeof client.metrics)['monthly-recurring-revenue-change']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['monthly-recurring-revenue-change'].$get(args, options))
}

export async function getMetricsRevenue(
  args: InferRequestType<typeof client.metrics.revenue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.revenue.$get(args, options))
}

export async function getMetricsRefunds(
  args: InferRequestType<typeof client.metrics.refunds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.refunds.$get(args, options))
}

export async function getMetricsChargebacks(
  args: InferRequestType<typeof client.metrics.chargebacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.chargebacks.$get(args, options))
}

export async function getMetricsCheckoutConversion(
  args: InferRequestType<(typeof client.metrics)['checkout-conversion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics['checkout-conversion'].$get(args, options))
}

export async function getNotificationSettings(
  args: InferRequestType<(typeof client)['notification-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['notification-settings'].$get(args, options))
}

export async function postNotificationSettings(
  args: InferRequestType<(typeof client)['notification-settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['notification-settings'].$post(args, options))
}

export async function getNotificationSettingsNotificationSettingId(
  args: InferRequestType<
    (typeof client)['notification-settings'][':notification_setting_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['notification-settings'][':notification_setting_id'].$get(args, options),
  )
}

export async function deleteNotificationSettingsNotificationSettingId(
  args: InferRequestType<
    (typeof client)['notification-settings'][':notification_setting_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['notification-settings'][':notification_setting_id'].$delete(args, options),
  )
}

export async function patchNotificationSettingsNotificationSettingId(
  args: InferRequestType<
    (typeof client)['notification-settings'][':notification_setting_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['notification-settings'][':notification_setting_id'].$patch(args, options),
  )
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function getNotificationsNotificationId(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':notification_id'].$get(args, options))
}

export async function getNotificationsNotificationIdLogs(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':notification_id'].logs.$get(args, options))
}

export async function postNotificationsNotificationIdReplay(
  args: InferRequestType<(typeof client.notifications)[':notification_id']['replay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications[':notification_id'].replay.$post(args, options))
}

export async function getCustomersCustomerIdPaymentMethods(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id']['payment-methods'].$get(args, options),
  )
}

export async function getCustomersCustomerIdPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(args, options),
  )
}

export async function deleteCustomersCustomerIdPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer_id']['payment-methods'][':payment_method_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getPrices(
  args: InferRequestType<typeof client.prices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prices.$get(args, options))
}

export async function postPrices(
  args: InferRequestType<typeof client.prices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prices.$post(args, options))
}

export async function getPricesPriceId(
  args: InferRequestType<(typeof client.prices)[':price_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prices[':price_id'].$get(args, options))
}

export async function patchPricesPriceId(
  args: InferRequestType<(typeof client.prices)[':price_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prices[':price_id'].$patch(args, options))
}

export async function postPricingPreview(
  args: InferRequestType<(typeof client)['pricing-preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pricing-preview'].$post(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function postProducts(
  args: InferRequestType<typeof client.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$post(args, options))
}

export async function getProductsProductId(
  args: InferRequestType<(typeof client.products)[':product_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product_id'].$get(args, options))
}

export async function patchProductsProductId(
  args: InferRequestType<(typeof client.products)[':product_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product_id'].$patch(args, options))
}

export async function getReports(
  args: InferRequestType<typeof client.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$get(args, options))
}

export async function postReports(
  args: InferRequestType<typeof client.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$post(args, options))
}

export async function getReportsReportId(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':report_id'].$get(args, options))
}

export async function getReportsReportIdDownloadUrl(
  args: InferRequestType<(typeof client.reports)[':report_id']['download-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':report_id']['download-url'].$get(args, options))
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getSettingsStatementDescriptor(options?: ClientRequestOptions) {
  return await parseResponse(client.settings['statement-descriptor'].$get(undefined, options))
}

export async function patchSettingsStatementDescriptor(
  args: InferRequestType<(typeof client.settings)['statement-descriptor']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['statement-descriptor'].$patch(args, options))
}

export async function getSimulationTypes(options?: ClientRequestOptions) {
  return await parseResponse(client['simulation-types'].$get(undefined, options))
}

export async function getSimulations(
  args: InferRequestType<typeof client.simulations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.$get(args, options))
}

export async function postSimulations(
  args: InferRequestType<typeof client.simulations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations.$post(args, options))
}

export async function getSimulationsSimulationId(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations[':simulation_id'].$get(args, options))
}

export async function patchSimulationsSimulationId(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations[':simulation_id'].$patch(args, options))
}

export async function getSimulationsSimulationIdRuns(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations[':simulation_id'].runs.$get(args, options))
}

export async function postSimulationsSimulationIdRuns(
  args: InferRequestType<(typeof client.simulations)[':simulation_id']['runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.simulations[':simulation_id'].runs.$post(args, options))
}

export async function getSimulationsSimulationIdRunsSimulationRunId(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations[':simulation_id'].runs[':simulation_run_id'].$get(args, options),
  )
}

export async function getSimulationsSimulationIdRunsSimulationRunIdEvents(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations[':simulation_id'].runs[':simulation_run_id'].events.$get(args, options),
  )
}

export async function getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventId(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations[':simulation_id'].runs[':simulation_run_id'].events[
      ':simulation_event_id'
    ].$get(args, options),
  )
}

export async function postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplay(
  args: InferRequestType<
    (typeof client.simulations)[':simulation_id']['runs'][':simulation_run_id']['events'][':simulation_event_id']['replay']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.simulations[':simulation_id'].runs[':simulation_run_id'].events[
      ':simulation_event_id'
    ].replay.$post(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdHistory(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].history.$get(args, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function getSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].$get(args, options))
}

export async function patchSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].$patch(args, options))
}

export async function postSubscriptionsSubscriptionIdCancel(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].cancel.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdPause(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].pause.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdResume(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].resume.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdActivate(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].activate.$post(args, options))
}

export async function getSubscriptionsSubscriptionIdUpdatePaymentMethodTransaction(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription_id']['update-payment-method-transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription_id']['update-payment-method-transaction'].$get(
      args,
      options,
    ),
  )
}

export async function patchSubscriptionsSubscriptionIdPreview(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['preview']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].preview.$patch(args, options))
}

export async function postSubscriptionsSubscriptionIdCharge(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['charge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].charge.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdChargePreview(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription_id']['charge']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription_id'].charge.preview.$post(args, options),
  )
}

export async function getSettingsTax(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.tax.$get(undefined, options))
}

export async function patchSettingsTax(
  args: InferRequestType<typeof client.settings.tax.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.tax.$patch(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function postTransactions(
  args: InferRequestType<typeof client.transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$post(args, options))
}

export async function getTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction_id'].$get(args, options))
}

export async function patchTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction_id'].$patch(args, options))
}

export async function postTransactionsPreview(
  args: InferRequestType<typeof client.transactions.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.preview.$post(args, options))
}

export async function postTransactionsTransactionIdRevise(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['revise']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction_id'].revise.$post(args, options))
}

export async function getTransactionsTransactionIdInvoice(
  args: InferRequestType<(typeof client.transactions)[':transaction_id']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction_id'].invoice.$get(args, options))
}

export async function getVerifications(
  args: InferRequestType<typeof client.verifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications.$get(args, options))
}

export async function getVerificationsVerificationId(
  args: InferRequestType<(typeof client.verifications)[':verification_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifications[':verification_id'].$get(args, options))
}
