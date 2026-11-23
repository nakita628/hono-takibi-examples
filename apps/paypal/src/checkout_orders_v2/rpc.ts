import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2CheckoutOrders(
  args: InferRequestType<typeof client.v2.checkout.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.checkout.orders.$post(args, options))
}

export async function getV2CheckoutOrdersId(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.checkout.orders[':id'].$get(args, options))
}

export async function patchV2CheckoutOrdersId(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.checkout.orders[':id'].$patch(args, options))
}

export async function postV2CheckoutOrdersIdConfirmPaymentSource(
  args: InferRequestType<
    (typeof client.v2.checkout.orders)[':id']['confirm-payment-source']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.checkout.orders[':id']['confirm-payment-source'].$post(args, options),
  )
}

export async function postV2CheckoutOrdersIdAuthorize(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.checkout.orders[':id'].authorize.$post(args, options))
}

export async function postV2CheckoutOrdersIdCapture(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.checkout.orders[':id'].capture.$post(args, options))
}

export async function postV2CheckoutOrdersIdTrack(
  args: InferRequestType<(typeof client.v2.checkout.orders)[':id']['track']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.checkout.orders[':id'].track.$post(args, options))
}

export async function patchV2CheckoutOrdersIdTrackersTrackerId(
  args: InferRequestType<
    (typeof client.v2.checkout.orders)[':id']['trackers'][':tracker_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.checkout.orders[':id'].trackers[':tracker_id'].$patch(args, options),
  )
}

export async function postV2CheckoutOrdersOrderUpdateCallback(
  args: InferRequestType<(typeof client.v2.checkout.orders)['order-update-callback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.checkout.orders['order-update-callback'].$post(args, options),
  )
}
