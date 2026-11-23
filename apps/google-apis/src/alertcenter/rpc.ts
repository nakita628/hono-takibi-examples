import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Alerts(
  args: InferRequestType<typeof client.v1beta1.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.alerts.$get(args, options))
}

export async function getV1beta1AlertsAlertId(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.alerts[':alertId'].$get(args, options))
}

export async function deleteV1beta1AlertsAlertId(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.alerts[':alertId'].$delete(args, options))
}

export async function getV1beta1AlertsAlertIdFeedback(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.alerts[':alertId'].feedback.$get(args, options))
}

export async function postV1beta1AlertsAlertIdFeedback(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['feedback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.alerts[':alertId'].feedback.$post(args, options))
}

export async function getV1beta1AlertsAlertIdMetadata(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.alerts[':alertId'].metadata.$get(args, options))
}

export async function postV1beta1AlertsAlertIdUndelete(
  args: InferRequestType<(typeof client.v1beta1.alerts)[':alertId:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.alerts[':alertId:undelete'].$post(args, options))
}

export async function postV1beta1AlertsBatchDelete(
  args: InferRequestType<(typeof client.v1beta1)['alerts:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['alerts:batchDelete'].$post(args, options))
}

export async function postV1beta1AlertsBatchUndelete(
  args: InferRequestType<(typeof client.v1beta1)['alerts:batchUndelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['alerts:batchUndelete'].$post(args, options))
}

export async function getV1beta1Settings(
  args: InferRequestType<typeof client.v1beta1.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.settings.$get(args, options))
}

export async function patchV1beta1Settings(
  args: InferRequestType<typeof client.v1beta1.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.settings.$patch(args, options))
}
