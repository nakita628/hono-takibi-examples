import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1StatusBuildinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.status.buildinfo.$get(undefined, options))
}

export async function getApiV1StatusConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.status.config.$get(undefined, options))
}

export async function getApiV1StatusConfigDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.status.config.default.$get(undefined, options))
}

export async function getApiV1StatusConfigDiff(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.status.config.diff.$get(undefined, options))
}
