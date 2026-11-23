import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiCheckoutPvtConfigurationWindowToChangeSeller(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pvt.configuration['window-to-change-seller'].$get(args, options),
  )
}

export async function postApiCheckoutPvtConfigurationWindowToChangeSeller(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.checkout.pvt.configuration['window-to-change-seller'].$post(args, options),
  )
}

export async function getApiOmsPvtAdminReportsCompleted(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.admin.reports.completed.$get(args, options))
}

export async function getApiOmsPvtAdminReportsInprogress(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.admin.reports.inprogress.$get(args, options))
}

export async function getApiOmsPvtFeedOrdersStatus(
  args: InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.feed.orders.status.$get(args, options))
}

export async function getApiOmsPvtOrders(
  args: InferRequestType<typeof client.api.oms.pvt.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.orders.$get(args, options))
}

export async function getApiOmsPvtOrdersOrderId(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.orders[':orderId'].$get(args, options))
}

export async function postApiOmsPvtOrdersOrderIdCancel(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.orders[':orderId'].cancel.$post(args, options))
}

export async function postApiOmsPvtOrdersOrderIdChanges(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.orders[':orderId'].changes.$post(args, options))
}

export async function getApiOmsPvtOrdersOrderIdConversationMessage(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.oms.pvt.orders[':orderId']['conversation-message'].$get(args, options),
  )
}

export async function postApiOmsPvtOrdersOrderIdInteractions(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.oms.pvt.orders[':orderId'].interactions.$post(args, options),
  )
}

export async function postApiOmsPvtOrdersOrderIdInvoice(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.pvt.orders[':orderId'].invoice.$post(args, options))
}

export async function patchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumber(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.oms.pvt.orders[':orderId'].invoice[':invoiceNumber'].$patch(args, options),
  )
}

export async function putApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTracking(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.oms.pvt.orders[':orderId'].invoice[':invoiceNumber'].tracking.$put(args, options),
  )
}

export async function getApiOmsPvtOrdersOrderIdPaymentTransaction(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.oms.pvt.orders[':orderId']['payment-transaction'].$get(args, options),
  )
}

export async function postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotification(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.oms.pvt.orders[':orderId'].payments[':paymentId']['payment-notification'].$post(
      args,
      options,
    ),
  )
}

export async function postApiOmsPvtOrdersOrderIdStartHandling(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.oms.pvt.orders[':orderId']['start-handling'].$post(args, options),
  )
}

export async function getApiOmsUserOrders(
  args: InferRequestType<typeof client.api.oms.user.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.user.orders.$get(args, options))
}

export async function getApiOmsUserOrdersOrderId(
  args: InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.oms.user.orders[':orderId'].$get(args, options))
}

export async function postApiOrdersExpressionsJsonata(
  args: InferRequestType<typeof client.api.orders.expressions.jsonata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.expressions.jsonata.$post(args, options))
}

export async function getApiOrdersFeed(
  args: InferRequestType<typeof client.api.orders.feed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.feed.$get(args, options))
}

export async function postApiOrdersFeed(
  args: InferRequestType<typeof client.api.orders.feed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.feed.$post(args, options))
}

export async function getApiOrdersFeedConfig(
  args: InferRequestType<typeof client.api.orders.feed.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.feed.config.$get(args, options))
}

export async function postApiOrdersFeedConfig(
  args: InferRequestType<typeof client.api.orders.feed.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.feed.config.$post(args, options))
}

export async function deleteApiOrdersFeedConfig(
  args: InferRequestType<typeof client.api.orders.feed.config.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.feed.config.$delete(args, options))
}

export async function getApiOrdersHookConfig(
  args: InferRequestType<typeof client.api.orders.hook.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.hook.config.$get(args, options))
}

export async function postApiOrdersHookConfig(
  args: InferRequestType<typeof client.api.orders.hook.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.hook.config.$post(args, options))
}

export async function deleteApiOrdersHookConfig(
  args: InferRequestType<typeof client.api.orders.hook.config.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.orders.hook.config.$delete(args, options))
}
