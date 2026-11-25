import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSearch(
  args: InferRequestType<typeof client.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$post(args, options))
}

export async function postAutocomplete(
  args: InferRequestType<typeof client.autocomplete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.autocomplete.$post(args, options))
}

export async function postBulk(
  args: InferRequestType<typeof client.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.$post(args, options))
}

export async function postDelete(
  args: InferRequestType<typeof client.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delete.$post(args, options))
}

export async function postInsert(
  args: InferRequestType<typeof client.insert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insert.$post(args, options))
}

export async function postPqTableSearch(
  args: InferRequestType<(typeof client.pq)[':table']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pq[':table'].search.$post(args, options))
}

export async function postReplace(
  args: InferRequestType<typeof client.replace.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replace.$post(args, options))
}

export async function postSql(
  args: InferRequestType<typeof client.sql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sql.$post(args, options))
}

export async function postToken(
  args: InferRequestType<typeof client.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token.$post(args, options))
}

export async function postUpdate(
  args: InferRequestType<typeof client.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.update.$post(args, options))
}

export async function postTableUpdateId(
  args: InferRequestType<(typeof client)[':table']['_update'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':table']._update[':id'].$post(args, options))
}
