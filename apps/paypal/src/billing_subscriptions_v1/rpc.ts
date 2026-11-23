import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1BillingPlans(
  args: InferRequestType<typeof client.v1.billing.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.plans.$get(args, options))
}

export async function postV1BillingPlans(
  args: InferRequestType<typeof client.v1.billing.plans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.plans.$post(args, options))
}

export async function getV1BillingPlansId(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.plans[':id'].$get(args, options))
}

export async function patchV1BillingPlansId(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.plans[':id'].$patch(args, options))
}

export async function postV1BillingPlansIdActivate(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.plans[':id'].activate.$post(args, options))
}

export async function postV1BillingPlansIdDeactivate(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.plans[':id'].deactivate.$post(args, options))
}

export async function postV1BillingPlansIdUpdatePricingSchemes(
  args: InferRequestType<
    (typeof client.v1.billing.plans)[':id']['update-pricing-schemes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.billing.plans[':id']['update-pricing-schemes'].$post(args, options),
  )
}

export async function postV1BillingSubscriptions(
  args: InferRequestType<typeof client.v1.billing.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions.$post(args, options))
}

export async function getV1BillingSubscriptionsId(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions[':id'].$get(args, options))
}

export async function patchV1BillingSubscriptionsId(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions[':id'].$patch(args, options))
}

export async function postV1BillingSubscriptionsIdRevise(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['revise']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions[':id'].revise.$post(args, options))
}

export async function postV1BillingSubscriptionsIdSuspend(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions[':id'].suspend.$post(args, options))
}

export async function postV1BillingSubscriptionsIdCancel(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions[':id'].cancel.$post(args, options))
}

export async function postV1BillingSubscriptionsIdActivate(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions[':id'].activate.$post(args, options))
}

export async function postV1BillingSubscriptionsIdCapture(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing.subscriptions[':id'].capture.$post(args, options))
}

export async function getV1BillingSubscriptionsIdTransactions(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.billing.subscriptions[':id'].transactions.$get(args, options),
  )
}
