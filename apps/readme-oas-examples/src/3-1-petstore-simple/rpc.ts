import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPetId(
  args: InferRequestType<(typeof client.pet)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet[':id'].$get(args, options))
}

export async function putPetId(
  args: InferRequestType<(typeof client.pet)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pet[':id'].$put(args, options))
}
