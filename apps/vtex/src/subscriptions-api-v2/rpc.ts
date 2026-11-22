import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getReportReportStatusReportId(
  args: InferRequestType<(typeof client.report.reportStatus)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.reportStatus[':reportId'].$get(args, options))
}

export async function getReportSubscriptionsByDate(
  args: InferRequestType<typeof client.report.subscriptionsByDate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.subscriptionsByDate.$get(args, options))
}

export async function getReportSubscriptionsByStatus(
  args: InferRequestType<typeof client.report.subscriptionsByStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.subscriptionsByStatus.$get(args, options))
}

export async function getReportSubscriptionsOrderByDate(
  args: InferRequestType<typeof client.report.subscriptionsOrderByDate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.subscriptionsOrderByDate.$get(args, options))
}

export async function getReportSubscriptionsScheduled(
  args: InferRequestType<typeof client.report.subscriptionsScheduled.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.subscriptionsScheduled.$get(args, options))
}

export async function getReportSubscriptionsUpdated(
  args: InferRequestType<typeof client.report.subscriptionsUpdated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.subscriptionsUpdated.$get(args, options))
}

export async function getSettings(
  args: InferRequestType<typeof client.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$get(args, options))
}

export async function postSettings(
  args: InferRequestType<typeof client.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$post(args, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function getSubscriptionsGroup(
  args: InferRequestType<(typeof client)['subscriptions-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'].$get(args, options))
}

export async function getSubscriptionsGroupList(
  args: InferRequestType<(typeof client)['subscriptions-group']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'].list.$get(args, options))
}

export async function getSubscriptionsGroupNextPurchaseDateStr(
  args: InferRequestType<
    (typeof client)['subscriptions-group']['nextPurchase'][':dateStr']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'].nextPurchase[':dateStr'].$get(args, options),
  )
}

export async function getSubscriptionsGroupSimulateGroupId(
  args: InferRequestType<(typeof client)['subscriptions-group']['simulate'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'].simulate[':groupId'].$get(args, options))
}

export async function getSubscriptionsGroupGroupId(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'][':groupId'].$get(args, options))
}

export async function patchSubscriptionsGroupGroupId(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'][':groupId'].$patch(args, options))
}

export async function postSubscriptionsGroupGroupIdAdditem(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['additem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'][':groupId'].additem.$post(args, options))
}

export async function getSubscriptionsGroupGroupIdAddresses(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'][':groupId'].addresses.$get(args, options),
  )
}

export async function postSubscriptionsGroupGroupIdAddresses(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'][':groupId'].addresses.$post(args, options),
  )
}

export async function patchSubscriptionsGroupGroupIdCancel(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['cancel']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'][':groupId'].cancel.$patch(args, options))
}

export async function getSubscriptionsGroupGroupIdConfig(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions-group'][':groupId'].config.$get(args, options))
}

export async function getSubscriptionsGroupGroupIdConversationMessage(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['conversation-message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'][':groupId']['conversation-message'].$get(args, options),
  )
}

export async function getSubscriptionsGroupGroupIdFrequencyOptions(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['frequency-options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'][':groupId']['frequency-options'].$get(args, options),
  )
}

export async function getSubscriptionsGroupGroupIdPaymentSystems(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupId']['payment-systems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'][':groupId']['payment-systems'].$get(args, options),
  )
}

export async function getSubscriptionsGroupGroupIdWillCreate(
  args: InferRequestType<(typeof client)['subscriptions-group'][':groupId']['will-create']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'][':groupId']['will-create'].$get(args, options),
  )
}

export async function postSubscriptionsGroupGroupidInstancesInstanceIdRetry(
  args: InferRequestType<
    (typeof client)['subscriptions-group'][':groupid']['instances'][':instanceId']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['subscriptions-group'][':groupid'].instances[':instanceId'].retry.$post(args, options),
  )
}

export async function getSubscriptionsList(
  args: InferRequestType<typeof client.subscriptions.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.list.$get(args, options))
}

export async function getSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$get(args, options))
}

export async function patchSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].$patch(args, options))
}

export async function postSubscriptionsSubscriptionIdAddresses(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['addresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].addresses.$post(args, options))
}

export async function patchSubscriptionsSubscriptionIdCancel(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['cancel']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscriptionId'].cancel.$patch(args, options))
}

export async function getSubscriptionsSubscriptionIdFrequencyOptions(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscriptionId']['frequency-options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscriptionId']['frequency-options'].$get(args, options),
  )
}
