import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMovies(options?: ClientRequestOptions) {
  return await parseResponse(client.movies.$get(undefined, options))
}

export async function postMovies(
  args: InferRequestType<typeof client.movies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movies.$post(args, options))
}
