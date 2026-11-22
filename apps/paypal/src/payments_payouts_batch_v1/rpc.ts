import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1PaymentsPayouts(
  args: InferRequestType<typeof client.v1.payments.payouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.payouts.$post(args, options))
}

export async function getV1PaymentsPayoutsId(
  args: InferRequestType<(typeof client.v1.payments.payouts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.payouts[':id'].$get(args, options))
}

export async function getV1PaymentsPayoutsItemPayoutItemId(
  args: InferRequestType<(typeof client.v1.payments)['payouts-item'][':payout_item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payments['payouts-item'][':payout_item_id'].$get(args, options),
  )
}

export async function postV1PaymentsPayoutsItemPayoutItemIdCancel(
  args: InferRequestType<
    (typeof client.v1.payments)['payouts-item'][':payout_item_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payments['payouts-item'][':payout_item_id'].cancel.$post(args, options),
  )
}
