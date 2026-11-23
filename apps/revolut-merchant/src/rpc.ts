import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiOrders(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.$get(args, options))
}

export async function postApiOrders(
  args: InferRequestType<typeof client.api.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.$post(args, options))
}

export async function getApiOrdersOrderId(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id'].$get(args, options))
}

export async function patchApiOrdersOrderId(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id'].$patch(args, options))
}

export async function postApiOrdersOrderIdIncrementAuthorisation(
  args: InferRequestType<
    (typeof client.api.orders)[':order_id']['increment-authorisation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.orders[':order_id']['increment-authorisation'].$post(args, options),
  )
}

export async function postApiOrdersOrderIdCapture(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id'].capture.$post(args, options))
}

export async function postApiOrdersOrderIdCancel(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id'].cancel.$post(args, options))
}

export async function postApiOrdersOrderIdRefund(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id'].refund.$post(args, options))
}

export async function getApiOrdersOrderIdPayments(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id'].payments.$get(args, options))
}

export async function postApiOrdersOrderIdPayments(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id'].payments.$post(args, options))
}

export async function getApiCustomers(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.customers.$get(args, options))
}

export async function postApiCustomers(
  args: InferRequestType<typeof client.api.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.customers.$post(args, options))
}

export async function getApiCustomersCustomerId(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.customers[':customer_id'].$get(args, options))
}

export async function deleteApiCustomersCustomerId(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.customers[':customer_id'].$delete(args, options))
}

export async function patchApiCustomersCustomerId(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.customers[':customer_id'].$patch(args, options))
}

export async function getApiCustomersCustomerIdPaymentMethods(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.customers[':customer_id']['payment-methods'].$get(args, options),
  )
}

export async function getApiCustomersCustomerIdPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiCustomersCustomerIdPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiDisputes(
  args: InferRequestType<typeof client.api.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.disputes.$get(args, options))
}

export async function getApiDisputesDisputeId(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.disputes[':dispute_id'].$get(args, options))
}

export async function postApiDisputesDisputeIdAccept(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.disputes[':dispute_id'].accept.$post(args, options))
}

export async function postApiDisputesDisputeIdEvidences(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.disputes[':dispute_id'].evidences.$post(args, options))
}

export async function postApiDisputesDisputeIdChallenge(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.disputes[':dispute_id'].challenge.$post(args, options))
}

export async function getApiPaymentsPaymentId(
  args: InferRequestType<(typeof client.api.payments)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payments[':payment_id'].$get(args, options))
}

export async function getApiSubscriptionPlans(
  args: InferRequestType<(typeof client.api)['subscription-plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['subscription-plans'].$get(args, options))
}

export async function postApiSubscriptionPlans(
  args: InferRequestType<(typeof client.api)['subscription-plans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['subscription-plans'].$post(args, options))
}

export async function getApiSubscriptionPlansSubscriptionPlanId(
  args: InferRequestType<
    (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['subscription-plans'][':subscription_plan_id'].$get(args, options),
  )
}

export async function getApiSubscriptions(
  args: InferRequestType<typeof client.api.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subscriptions.$get(args, options))
}

export async function postApiSubscriptions(
  args: InferRequestType<typeof client.api.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subscriptions.$post(args, options))
}

export async function getApiSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subscriptions[':subscription_id'].$get(args, options))
}

export async function patchApiSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.subscriptions[':subscription_id'].$patch(args, options))
}

export async function postApiSubscriptionsSubscriptionIdCancel(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.subscriptions[':subscription_id'].cancel.$post(args, options),
  )
}

export async function postApiSubscriptionsSubscriptionIdChangePlan(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['change-plan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.subscriptions[':subscription_id']['change-plan'].$post(args, options),
  )
}

export async function postApiSubscriptionsSubscriptionIdChangeRenewalDate(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['change-renewal-date']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.subscriptions[':subscription_id']['change-renewal-date'].$post(args, options),
  )
}

export async function getApiSubscriptionsSubscriptionIdCycles(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.subscriptions[':subscription_id'].cycles.$get(args, options),
  )
}

export async function getApiSubscriptionsSubscriptionIdCyclesCycleId(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.subscriptions[':subscription_id'].cycles[':cycle_id'].$get(args, options),
  )
}

export async function getApiSubscriptionUsages(
  args: InferRequestType<(typeof client.api)['subscription-usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['subscription-usages'].$get(args, options))
}

export async function postApiSubscriptionUsages(
  args: InferRequestType<(typeof client.api)['subscription-usages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['subscription-usages'].$post(args, options))
}

export async function getApiSubscriptionUsagesUsageId(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['subscription-usages'][':usage_id'].$get(args, options))
}

export async function deleteApiSubscriptionUsagesUsageId(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['subscription-usages'][':usage_id'].$delete(args, options))
}

export async function patchApiSubscriptionUsagesUsageId(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['subscription-usages'][':usage_id'].$patch(args, options))
}

export async function getApiPayouts(
  args: InferRequestType<typeof client.api.payouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payouts.$get(args, options))
}

export async function getApiPayoutsPayoutId(
  args: InferRequestType<(typeof client.api.payouts)[':payout_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.payouts[':payout_id'].$get(args, options))
}

export async function postApiReportRuns(
  args: InferRequestType<(typeof client.api)['report-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['report-runs'].$post(args, options))
}

export async function getApiReportRunsReportRunId(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['report-runs'][':report_run_id'].$get(args, options))
}

export async function getApiReportRunsReportRunIdFile(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['report-runs'][':report_run_id'].file.$get(args, options))
}

export async function getApiWebhooks(
  args: InferRequestType<typeof client.api.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks.$get(args, options))
}

export async function postApiWebhooks(
  args: InferRequestType<typeof client.api.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks.$post(args, options))
}

export async function getApiWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':webhook_id'].$get(args, options))
}

export async function deleteApiWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':webhook_id'].$delete(args, options))
}

export async function patchApiWebhooksWebhookId(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':webhook_id'].$patch(args, options))
}

export async function postApiWebhooksWebhookIdRotateSigningSecret(
  args: InferRequestType<
    (typeof client.api.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.webhooks[':webhook_id']['rotate-signing-secret'].$post(args, options),
  )
}

export async function postApiApplePayDomainsRegister(
  args: InferRequestType<(typeof client.api)['apple-pay']['domains']['register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['apple-pay'].domains.register.$post(args, options))
}

export async function postApiApplePayDomainsUnregister(
  args: InferRequestType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['apple-pay'].domains.unregister.$post(args, options))
}

export async function getApiSynchronousWebhooks(
  args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['synchronous-webhooks'].$get(args, options))
}

export async function postApiSynchronousWebhooks(
  args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['synchronous-webhooks'].$post(args, options))
}

export async function deleteApiSynchronousWebhooksSynchronousWebhookId(
  args: InferRequestType<
    (typeof client.api)['synchronous-webhooks'][':synchronous_webhook_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['synchronous-webhooks'][':synchronous_webhook_id'].$delete(args, options),
  )
}

export async function getApiLocations(
  args: InferRequestType<typeof client.api.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.locations.$get(args, options))
}

export async function postApiLocations(
  args: InferRequestType<typeof client.api.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.locations.$post(args, options))
}

export async function getApiLocationsLocationId(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.locations[':location_id'].$get(args, options))
}

export async function deleteApiLocationsLocationId(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.locations[':location_id'].$delete(args, options))
}

export async function patchApiLocationsLocationId(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.locations[':location_id'].$patch(args, options))
}

export async function getApiTerminals(
  args: InferRequestType<typeof client.api.terminals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.terminals.$get(args, options))
}

export async function postApiOrdersOrderIdPaymentIntents(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders[':order_id']['payment-intents'].$post(args, options))
}

export async function getApiPaymentIntentsPaymentIntentId(
  args: InferRequestType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['payment-intents'][':payment_intent_id'].$get(args, options),
  )
}

export async function postApiPaymentIntentsPaymentIntentIdCancel(
  args: InferRequestType<
    (typeof client.api)['payment-intents'][':payment_intent_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['payment-intents'][':payment_intent_id'].cancel.$post(args, options),
  )
}
