import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGlobal(options?: ClientRequestOptions) {
  return await parseResponse(client.global.$post(undefined, options))
}

export async function postOperation(options?: ClientRequestOptions) {
  return await parseResponse(client.operation.$post(undefined, options))
}

export async function putPath(options?: ClientRequestOptions) {
  return await parseResponse(client.path.$put(undefined, options))
}

export async function putCombo(options?: ClientRequestOptions) {
  return await parseResponse(client.combo.$put(undefined, options))
}
