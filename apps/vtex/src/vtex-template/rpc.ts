import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPets(
  args: InferRequestType<typeof client.pets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pets.$get(args, options))
}

export async function postPets(options?: ClientRequestOptions) {
  return await parseResponse(client.pets.$post(undefined, options))
}

export async function getPetsPetId(
  args: InferRequestType<(typeof client.pets)[':petId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pets[':petId'].$get(args, options))
}
