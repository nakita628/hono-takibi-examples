import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRestV1Feed(
  args: InferRequestType<typeof client.rest.v1.feed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.v1.feed.$get(args, options))
}

export async function getRestV1FeedToday(
  args: InferRequestType<typeof client.rest.v1.feed.today.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.v1.feed.today.$get(args, options))
}

export async function getRestV1NeoBrowse(
  args: InferRequestType<typeof client.rest.v1.neo.browse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.v1.neo.browse.$get(args, options))
}

export async function getRestV1NeoSentry(
  args: InferRequestType<typeof client.rest.v1.neo.sentry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.v1.neo.sentry.$get(args, options))
}

export async function getRestV1NeoSentryAsteroidId(
  args: InferRequestType<(typeof client.rest.v1.neo.sentry)[':asteroid_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.v1.neo.sentry[':asteroid_id'].$get(args, options))
}

export async function getRestV1NeoAsteroidId(
  args: InferRequestType<(typeof client.rest.v1.neo)[':asteroid_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.v1.neo[':asteroid_id'].$get(args, options))
}

export async function getRestV1Stats(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.v1.stats.$get(undefined, options))
}
