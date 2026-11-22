import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPassportsId(
  args: InferRequestType<(typeof client.passports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passports[':id'].$get(args, options))
}

export async function postPassportsId(
  args: InferRequestType<(typeof client.passports)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.passports[':id'].$post(args, options))
}

export async function getImagesFilename(
  args: InferRequestType<(typeof client.images)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':filename'].$get(args, options))
}

export async function putImagesFilename(
  args: InferRequestType<(typeof client.images)[':filename']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':filename'].$put(args, options))
}

export async function deleteImagesFilename(
  args: InferRequestType<(typeof client.images)[':filename']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':filename'].$delete(args, options))
}
