import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCommercePaymentLinks202609PaymentLinks(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['payment-links']['2026-09']['payment-links'].$get(args, options),
  )
}

export async function postCommercePaymentLinks202609PaymentLinks(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['payment-links']['2026-09']['payment-links'].$post(args, options),
  )
}

export async function getCommercePaymentLinks202609PaymentLinksPaymentLinkId(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteCommercePaymentLinks202609PaymentLinksPaymentLinkId(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchCommercePaymentLinks202609PaymentLinksPaymentLinkId(
  args: InferRequestType<
    (typeof client.commerce)['payment-links']['2026-09']['payment-links'][':paymentLinkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['payment-links']['2026-09']['payment-links'][':paymentLinkId'].$patch(
      args,
      options,
    ),
  )
}
