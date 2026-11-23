import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1CheckIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.check.index.$get(undefined, options))
}

export async function getApiV1ConfigurationLinkIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['configuration-link'].index.$get(undefined, options))
}

export async function getApiV1ExposedIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.exposed.index.$get(undefined, options))
}

export async function postApiV1ExposedExposedAppActionIdExecuteIndex(
  args: InferRequestType<
    (typeof client.api.v1.exposed)[':exposed_app_action_id']['execute']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.exposed[':exposed_app_action_id'].execute.index.$post(args, options),
  )
}
