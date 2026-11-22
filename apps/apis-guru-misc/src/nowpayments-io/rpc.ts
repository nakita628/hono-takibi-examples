import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Estimate(
  args: InferRequestType<typeof client.v1.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.estimate.$get(args, options))
}

export async function getV1MinAmount(
  args: InferRequestType<(typeof client.v1)['min-amount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['min-amount'].$get(args, options))
}

export async function getV1PaymentIndex(
  args: InferRequestType<typeof client.v1.payment.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment.index.$get(args, options))
}

export async function postV1PaymentIdUpdateMerchantEstimate(
  args: InferRequestType<(typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payment[':id']['update-merchant-estimate'].$post(args, options),
  )
}

export async function getV1PaymentPaymentId(
  args: InferRequestType<(typeof client.v1.payment)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment[':payment_id'].$get(args, options))
}

export async function postV1PayoutWithdrawalsIdVerify(
  args: InferRequestType<(typeof client.v1.payout)[':withdrawals-id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payout[':withdrawals-id'].verify.$post(args, options))
}

export async function getV1SubPartner(
  args: InferRequestType<(typeof client.v1)['sub-partner']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sub-partner'].$get(args, options))
}

export async function getV1SubPartnerBalanceId(
  args: InferRequestType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sub-partner'].balance[':id'].$get(args, options))
}

export async function getV1SubPartnerTransferId(
  args: InferRequestType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sub-partner'].transfer[':id'].$get(args, options))
}

export async function getV1SubPartnerTransfers(
  args: InferRequestType<(typeof client.v1)['sub-partner']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sub-partner'].transfers.$get(args, options))
}

export async function getV1Subscriptions(
  args: InferRequestType<typeof client.v1.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.$get(args, options))
}

export async function getV1SubscriptionsPlans(
  args: InferRequestType<typeof client.v1.subscriptions.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.plans.$get(args, options))
}

export async function getV1SubscriptionsPlansPlanId(
  args: InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.plans[':plan-id'].$get(args, options))
}

export async function patchV1SubscriptionsPlansPlanId(
  args: InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.plans[':plan-id'].$patch(args, options))
}

export async function getV1SubscriptionsSubId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':sub_id'].$get(args, options))
}

export async function deleteV1SubscriptionsSubId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':sub_id'].$delete(args, options))
}
