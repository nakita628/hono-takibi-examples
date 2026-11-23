import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$get(args, options))
}

export async function getUsersUseridPhoto(
  args: InferRequestType<(typeof client.users)[':userid']['photo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userid'].photo.$get(args, options))
}
