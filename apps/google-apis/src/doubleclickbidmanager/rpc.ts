import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getQueries(
  args: InferRequestType<typeof client.queries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries.$get(args, options))
}

export async function getQueriesQueryIdReports(
  args: InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':queryId'].reports.$get(args, options))
}

export async function postQuery(
  args: InferRequestType<typeof client.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.$post(args, options))
}

export async function getQueryQueryId(
  args: InferRequestType<(typeof client.query)[':queryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query[':queryId'].$get(args, options))
}

export async function postQueryQueryId(
  args: InferRequestType<(typeof client.query)[':queryId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query[':queryId'].$post(args, options))
}

export async function deleteQueryQueryId(
  args: InferRequestType<(typeof client.query)[':queryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query[':queryId'].$delete(args, options))
}
