import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3Deployments(options?: ClientRequestOptions) {
  return await parseResponse(client.v3.deployments.$get(undefined, options))
}

export async function postV3Deployments(
  args: InferRequestType<typeof client.v3.deployments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.deployments.$post(args, options))
}

export async function getV3DeploymentsId(
  args: InferRequestType<(typeof client.v3.deployments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.deployments[':id'].$get(args, options))
}

export async function deleteV3DeploymentsId(
  args: InferRequestType<(typeof client.v3.deployments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.deployments[':id'].$delete(args, options))
}

export async function postV3HeartbeatsLogIdId(
  args: InferRequestType<(typeof client.v3.heartbeats)[':logId'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.heartbeats[':logId'][':id'].$post(args, options))
}

export async function getV3Logs(options?: ClientRequestOptions) {
  return await parseResponse(client.v3.logs.$get(undefined, options))
}

export async function postV3Logs(
  args: InferRequestType<typeof client.v3.logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs.$post(args, options))
}

export async function getV3LogsId(
  args: InferRequestType<(typeof client.v3.logs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':id'].$get(args, options))
}

export async function getV3LogsIdDiagnose(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_diagnose']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':id']._diagnose.$get(args, options))
}

export async function postV3LogsIdDisable(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':id']._disable.$post(args, options))
}

export async function postV3LogsIdEnable(
  args: InferRequestType<(typeof client.v3.logs)[':id']['_enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.logs[':id']._enable.$post(args, options))
}

export async function getV3MessagesLogId(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId'].$get(args, options))
}

export async function postV3MessagesLogId(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId'].$post(args, options))
}

export async function deleteV3MessagesLogId(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId'].$delete(args, options))
}

export async function postV3MessagesLogIdBulk(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['_bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId']._bulk.$post(args, options))
}

export async function postV3MessagesLogIdFix(
  args: InferRequestType<(typeof client.v3.messages)[':logId']['_fix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId']._fix.$post(args, options))
}

export async function getV3MessagesLogIdId(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId'][':id'].$get(args, options))
}

export async function deleteV3MessagesLogIdId(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId'][':id'].$delete(args, options))
}

export async function postV3MessagesLogIdIdFix(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_fix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId'][':id']._fix.$post(args, options))
}

export async function postV3MessagesLogIdIdHide(
  args: InferRequestType<(typeof client.v3.messages)[':logId'][':id']['_hide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.messages[':logId'][':id']._hide.$post(args, options))
}

export async function postV3SourcemapsLogId(
  args: InferRequestType<(typeof client.v3.sourcemaps)[':logId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.sourcemaps[':logId'].$post(args, options))
}

export async function getV3Uptimechecks(options?: ClientRequestOptions) {
  return await parseResponse(client.v3.uptimechecks.$get(undefined, options))
}
