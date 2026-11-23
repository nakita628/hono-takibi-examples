import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiRnsPubCycles(
  args: InferRequestType<typeof client.api.rns.pub.cycles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.cycles.$get(args, options))
}

export async function getApiRnsPubCyclesCycleId(
  args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.cycles[':cycleId'].$get(args, options))
}

export async function postApiRnsPubCyclesCycleIdRetry(
  args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.cycles[':cycleId'].retry.$post(args, options))
}

export async function getApiRnsPubSubscriptions(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.subscriptions.$get(args, options))
}

export async function postApiRnsPubSubscriptions(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.subscriptions.$post(args, options))
}

export async function postApiRnsPubSubscriptionsSimulate(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.subscriptions.simulate.$post(args, options))
}

export async function getApiRnsPubSubscriptionsId(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.subscriptions[':id'].$get(args, options))
}

export async function patchApiRnsPubSubscriptionsId(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.subscriptions[':id'].$patch(args, options))
}

export async function postApiRnsPubSubscriptionsIdItems(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.subscriptions[':id'].items.$post(args, options))
}

export async function deleteApiRnsPubSubscriptionsIdItemsItemId(
  args: InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rns.pub.subscriptions[':id'].items[':itemId'].$delete(args, options),
  )
}

export async function patchApiRnsPubSubscriptionsIdItemsItemId(
  args: InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rns.pub.subscriptions[':id'].items[':itemId'].$patch(args, options),
  )
}

export async function postApiRnsPubSubscriptionsIdSimulate(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pub.subscriptions[':id'].simulate.$post(args, options))
}

export async function getApiRnsPubSubscriptionsSubscriptionIdConversationMessage(
  args: InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rns.pub.subscriptions[':subscriptionId']['conversation-message'].$get(args, options),
  )
}

export async function getApiRnsPvtPlans(
  args: InferRequestType<typeof client.api.rns.pvt.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pvt.plans.$get(args, options))
}

export async function getApiRnsPvtPlansId(
  args: InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pvt.plans[':id'].$get(args, options))
}

export async function getApiRnsPvtReports(
  args: InferRequestType<typeof client.api.rns.pvt.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.pvt.reports.$get(args, options))
}

export async function postApiRnsPvtReportsReportNameDocuments(
  args: InferRequestType<(typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rns.pvt.reports[':reportName'].documents.$post(args, options),
  )
}

export async function getApiRnsPvtReportsReportNameDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rns.pvt.reports[':reportName'].documents[':documentId'].$get(args, options),
  )
}

export async function getApiRnsSettings(
  args: InferRequestType<typeof client.api.rns.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.settings.$get(args, options))
}

export async function postApiRnsSettings(
  args: InferRequestType<typeof client.api.rns.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rns.settings.$post(args, options))
}
