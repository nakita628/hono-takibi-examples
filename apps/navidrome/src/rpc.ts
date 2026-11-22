import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getServer(options?: ClientRequestOptions) {
  return await parseResponse(client.server.$get(undefined, options))
}

export async function getOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.json'].$get(undefined, options))
}

export async function getOpenapiYaml(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.yaml'].$get(undefined, options))
}
