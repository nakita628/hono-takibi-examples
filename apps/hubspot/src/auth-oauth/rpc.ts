import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOauth202609Token(
  args: InferRequestType<(typeof client.oauth)['2026-09']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth['2026-09'].token.$post(args, options))
}

export async function postOauth202609TokenIntrospect(
  args: InferRequestType<(typeof client.oauth)['2026-09']['token']['introspect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth['2026-09'].token.introspect.$post(args, options))
}

export async function postOauth202609TokenRevoke(
  args: InferRequestType<(typeof client.oauth)['2026-09']['token']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth['2026-09'].token.revoke.$post(args, options))
}
