import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1NameGenerateAccessToken(
  args: InferRequestType<(typeof client.v1)[':name:generateAccessToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:generateAccessToken'].$post(args, options))
}

export async function postV1NameGenerateIdToken(
  args: InferRequestType<(typeof client.v1)[':name:generateIdToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:generateIdToken'].$post(args, options))
}

export async function postV1NameSignBlob(
  args: InferRequestType<(typeof client.v1)[':name:signBlob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:signBlob'].$post(args, options))
}

export async function postV1NameSignJwt(
  args: InferRequestType<(typeof client.v1)[':name:signJwt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:signJwt'].$post(args, options))
}
