import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAppsResellerV1Customers(
  args: InferRequestType<typeof client.apps.reseller.v1.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.reseller.v1.customers.$post(args, options))
}

export async function getAppsResellerV1CustomersCustomerId(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.reseller.v1.customers[':customerId'].$get(args, options))
}

export async function putAppsResellerV1CustomersCustomerId(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.reseller.v1.customers[':customerId'].$put(args, options))
}

export async function patchAppsResellerV1CustomersCustomerId(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.reseller.v1.customers[':customerId'].$patch(args, options))
}

export async function postAppsResellerV1CustomersCustomerIdSubscriptions(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions.$post(args, options),
  )
}

export async function getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$delete(
      args,
      options,
    ),
  )
}

export async function postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivate(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[
      ':subscriptionId'
    ].activate.$post(args, options),
  )
}

export async function postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlan(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[
      ':subscriptionId'
    ].changePlan.$post(args, options),
  )
}

export async function postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettings(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[
      ':subscriptionId'
    ].changeRenewalSettings.$post(args, options),
  )
}

export async function postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeats(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[
      ':subscriptionId'
    ].changeSeats.$post(args, options),
  )
}

export async function postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidService(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[
      ':subscriptionId'
    ].startPaidService.$post(args, options),
  )
}

export async function postAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspend(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].suspend.$post(
      args,
      options,
    ),
  )
}

export async function getAppsResellerV1ResellernotifyGetwatchdetails(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.reseller.v1.resellernotify.getwatchdetails.$get(args, options),
  )
}

export async function postAppsResellerV1ResellernotifyRegister(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.reseller.v1.resellernotify.register.$post(args, options))
}

export async function postAppsResellerV1ResellernotifyUnregister(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.reseller.v1.resellernotify.unregister.$post(args, options))
}

export async function getAppsResellerV1Subscriptions(
  args: InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.reseller.v1.subscriptions.$get(args, options))
}
