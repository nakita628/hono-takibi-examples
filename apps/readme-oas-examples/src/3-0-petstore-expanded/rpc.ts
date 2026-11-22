import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPets(
  args: InferRequestType<typeof client.pets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pets.$get(args, options))
}

export async function postPets(
  args: InferRequestType<typeof client.pets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pets.$post(args, options))
}

export async function getPetsId(
  args: InferRequestType<(typeof client.pets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pets[':id'].$get(args, options))
}

export async function deletePetsId(
  args: InferRequestType<(typeof client.pets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pets[':id'].$delete(args, options))
}
