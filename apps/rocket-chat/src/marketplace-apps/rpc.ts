import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiAppsPublicAppIdIncoming(
  args: InferRequestType<(typeof client.api.apps.public)[':app-id']['incoming']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.public[':app-id'].incoming.$post(args, options))
}

export async function postApiAppsPublicAppIdTemplateMessage(
  args: InferRequestType<(typeof client.api.apps.public)[':appId']['templateMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.public[':appId'].templateMessage.$post(args, options))
}

export async function postApiApps(
  args: InferRequestType<typeof client.api.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.$post(args, options))
}

export async function getApiAppsLogs(
  args: InferRequestType<typeof client.api.apps.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.logs.$get(args, options))
}

export async function getAppIdLogs(
  args: InferRequestType<(typeof client.app)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.app[':id'].logs.$get(args, options))
}

export async function postApiV1VideoConferenceJitsiUpdateTimeout(
  args: InferRequestType<
    (typeof client.api.v1)['video-conference']['jitsi.update-timeout']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-conference']['jitsi.update-timeout'].$post(args, options),
  )
}

export async function getApiAppsMarketplace(
  args: InferRequestType<typeof client.api.apps.marketplace.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.marketplace.$get(args, options))
}

export async function getApiAppsCategories(
  args: InferRequestType<typeof client.api.apps.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.categories.$get(args, options))
}

export async function getApiAppsInstalled(
  args: InferRequestType<typeof client.api.apps.installed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps.installed.$get(args, options))
}

export async function getAppsCount(
  args: InferRequestType<typeof client.apps.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.count.$get(args, options))
}

export async function getAppsBuildExternalAppRequest(
  args: InferRequestType<typeof client.apps.buildExternalAppRequest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.buildExternalAppRequest.$get(args, options))
}

export async function getApiAppsAppId(
  args: InferRequestType<(typeof client.api.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps[':appId'].$get(args, options))
}

export async function deleteApiAppsAppId(
  args: InferRequestType<(typeof client.api.apps)[':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.apps[':appId'].$delete(args, options))
}
