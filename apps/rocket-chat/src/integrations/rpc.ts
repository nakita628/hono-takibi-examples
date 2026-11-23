import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiV1IntegrationsCreate(
  args: InferRequestType<(typeof client.api.v1)['integrations.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.create'].$post(args, options))
}

export async function getApiV1IntegrationsGet(
  args: InferRequestType<(typeof client.api.v1)['integrations.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.get'].$get(args, options))
}

export async function getApiV1IntegrationsHistory(
  args: InferRequestType<(typeof client.api.v1)['integrations.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.history'].$get(args, options))
}

export async function postApiV1IntegrationsClearHistory(
  args: InferRequestType<(typeof client.api.v1)['integrations.clearHistory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.clearHistory'].$post(args, options))
}

export async function postApiV1IntegrationsReplayOutgoing(
  args: InferRequestType<(typeof client.api.v1)['integrations.replayOutgoing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.replayOutgoing'].$post(args, options))
}

export async function getApiV1IntegrationsList(
  args: InferRequestType<(typeof client.api.v1)['integrations.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.list'].$get(args, options))
}

export async function putApiV1IntegrationsUpdate(
  args: InferRequestType<(typeof client.api.v1)['integrations.update']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.update'].$put(args, options))
}

export async function postApiV1IntegrationsRemove(
  args: InferRequestType<(typeof client.api.v1)['integrations.remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['integrations.remove'].$post(args, options))
}

export async function postApiV1OauthAppsCreate(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['oauth-apps.create'].$post(args, options))
}

export async function postApiV1OauthAppsUpdate(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['oauth-apps.update'].$post(args, options))
}

export async function getApiV1OauthAppsList(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['oauth-apps.list'].$get(args, options))
}

export async function getApiV1OauthAppsGet(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['oauth-apps.get'].$get(args, options))
}

export async function postApiV1OauthAppsDelete(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['oauth-apps.delete'].$post(args, options))
}
