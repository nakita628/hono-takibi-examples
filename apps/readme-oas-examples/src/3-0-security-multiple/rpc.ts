import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAnythingAnd(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.and.$post(undefined, options))
}

export async function postAnythingOr(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.or.$post(undefined, options))
}

export async function postAnythingAndOr(options?: ClientRequestOptions) {
  return await parseResponse(client.anything['and-or'].$post(undefined, options))
}

export async function postAnythingManyAndOr(options?: ClientRequestOptions) {
  return await parseResponse(client.anything['many-and-or'].$post(undefined, options))
}
