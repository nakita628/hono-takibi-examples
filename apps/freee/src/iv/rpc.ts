import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDeliverySlips(
  args: InferRequestType<typeof client.delivery_slips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery_slips.$get(args, options))
}

export async function postDeliverySlips(
  args: InferRequestType<typeof client.delivery_slips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery_slips.$post(args, options))
}

export async function getDeliverySlipsTemplates(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery_slips.templates.$get(args, options))
}

export async function getDeliverySlipsId(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery_slips[':id'].$get(args, options))
}

export async function putDeliverySlipsId(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery_slips[':id'].$put(args, options))
}

export async function putDeliverySlipsIdCancel(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery_slips[':id'].cancel.$put(args, options))
}

export async function putDeliverySlipsIdUncancel(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delivery_slips[':id'].uncancel.$put(args, options))
}

export async function getInvoices(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$get(args, options))
}

export async function postInvoices(
  args: InferRequestType<typeof client.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$post(args, options))
}

export async function getInvoicesTemplates(
  args: InferRequestType<typeof client.invoices.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.templates.$get(args, options))
}

export async function getInvoicesId(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].$get(args, options))
}

export async function putInvoicesId(
  args: InferRequestType<(typeof client.invoices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].$put(args, options))
}

export async function putInvoicesIdCancel(
  args: InferRequestType<(typeof client.invoices)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].cancel.$put(args, options))
}

export async function putInvoicesIdUncancel(
  args: InferRequestType<(typeof client.invoices)[':id']['uncancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].uncancel.$put(args, options))
}

export async function getPaymentNotices(
  args: InferRequestType<typeof client.payment_notices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_notices.$get(args, options))
}

export async function postPaymentNotices(
  args: InferRequestType<typeof client.payment_notices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_notices.$post(args, options))
}

export async function getPaymentNoticesTemplates(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_notices.templates.$get(args, options))
}

export async function getPaymentNoticesId(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_notices[':id'].$get(args, options))
}

export async function putPaymentNoticesId(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_notices[':id'].$put(args, options))
}

export async function putPaymentNoticesIdCancel(
  args: InferRequestType<(typeof client.payment_notices)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_notices[':id'].cancel.$put(args, options))
}

export async function putPaymentNoticesIdUncancel(
  args: InferRequestType<(typeof client.payment_notices)[':id']['uncancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_notices[':id'].uncancel.$put(args, options))
}

export async function getPurchaseOrders(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders.$get(args, options))
}

export async function postPurchaseOrders(
  args: InferRequestType<typeof client.purchase_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders.$post(args, options))
}

export async function getPurchaseOrdersTemplates(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders.templates.$get(args, options))
}

export async function getPurchaseOrdersId(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders[':id'].$get(args, options))
}

export async function putPurchaseOrdersId(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders[':id'].$put(args, options))
}

export async function putPurchaseOrdersIdCancel(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders[':id'].cancel.$put(args, options))
}

export async function putPurchaseOrdersIdUncancel(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders[':id'].uncancel.$put(args, options))
}

export async function getQuotations(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations.$get(args, options))
}

export async function postQuotations(
  args: InferRequestType<typeof client.quotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations.$post(args, options))
}

export async function getQuotationsTemplates(
  args: InferRequestType<typeof client.quotations.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations.templates.$get(args, options))
}

export async function getQuotationsId(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].$get(args, options))
}

export async function putQuotationsId(
  args: InferRequestType<(typeof client.quotations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].$put(args, options))
}

export async function putQuotationsIdCancel(
  args: InferRequestType<(typeof client.quotations)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].cancel.$put(args, options))
}

export async function putQuotationsIdUncancel(
  args: InferRequestType<(typeof client.quotations)[':id']['uncancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].uncancel.$put(args, options))
}

export async function getReceipts(
  args: InferRequestType<typeof client.receipts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.receipts.$get(args, options))
}

export async function postReceipts(
  args: InferRequestType<typeof client.receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.receipts.$post(args, options))
}

export async function getReceiptsTemplates(
  args: InferRequestType<typeof client.receipts.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.receipts.templates.$get(args, options))
}

export async function getReceiptsId(
  args: InferRequestType<(typeof client.receipts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.receipts[':id'].$get(args, options))
}

export async function putReceiptsId(
  args: InferRequestType<(typeof client.receipts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.receipts[':id'].$put(args, options))
}

export async function putReceiptsIdCancel(
  args: InferRequestType<(typeof client.receipts)[':id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.receipts[':id'].cancel.$put(args, options))
}

export async function putReceiptsIdUncancel(
  args: InferRequestType<(typeof client.receipts)[':id']['uncancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.receipts[':id'].uncancel.$put(args, options))
}
