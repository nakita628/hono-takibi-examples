import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiOrdersExtendsearchOrders(
  args: InferRequestType<typeof client.api.orders.extendsearch.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.extendsearch.orders.$post(args, options))
}

export async function getApiOrdersPvtDocumentOrderId(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.pvt.document[':orderId'].$get(args, options))
}

export async function postApiOrdersPvtDocumentOrderIdActionsStartHandling(
  args: InferRequestType<
    (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.orders.pvt.document[':orderId'].actions['start-handling'].$post(args, options),
  )
}

export async function postApiOrdersPvtDocumentOrderIdCancel(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.pvt.document[':orderId'].cancel.$post(args, options))
}

export async function postApiOrdersPvtDocumentOrderIdInvoices(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.orders.pvt.document[':orderId'].invoices.$post(args, options),
  )
}

export async function postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPayment(
  args: InferRequestType<
    (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.orders.pvt.document[':orderId'].payment[':paymentId']['notify-payment'].$post(
      args,
      options,
    ),
  )
}
