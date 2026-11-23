import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFacilities(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.facilities.$get(args, options))
}

export async function getFacilitiesAll(
  args: InferRequestType<typeof client.facilities.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.facilities.all.$get(args, options))
}

export async function getFacilitiesId(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.facilities[':id'].$get(args, options))
}

export async function getIds(
  args: InferRequestType<typeof client.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ids.$get(args, options))
}

export async function getNearby(
  args: InferRequestType<typeof client.nearby.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nearby.$get(args, options))
}
