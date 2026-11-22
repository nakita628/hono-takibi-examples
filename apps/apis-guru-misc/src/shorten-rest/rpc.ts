import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAliases(
  args: InferRequestType<typeof client.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.$get(args, options))
}

export async function putAliases(
  args: InferRequestType<typeof client.aliases.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.$put(args, options))
}

export async function postAliases(
  args: InferRequestType<typeof client.aliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.$post(args, options))
}

export async function deleteAliases(
  args: InferRequestType<typeof client.aliases.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.$delete(args, options))
}

export async function getAliasesAll(
  args: InferRequestType<typeof client.aliases.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aliases.all.$get(args, options))
}

export async function getClicks(
  args: InferRequestType<typeof client.clicks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clicks.$get(args, options))
}

export async function postClicksPg(
  args: InferRequestType<typeof client.clicks.pg.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clicks.pg.$post(args, options))
}
