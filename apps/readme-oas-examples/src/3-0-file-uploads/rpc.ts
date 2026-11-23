import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAnythingImagePng(
  args: InferRequestType<(typeof client.anything)['image-png']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['image-png'].$post(args, options))
}

export async function putAnythingMultipartFormdata(
  args: InferRequestType<(typeof client.anything)['multipart-formdata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['multipart-formdata'].$put(args, options))
}

export async function postAnythingMultipartFormdata(
  args: InferRequestType<(typeof client.anything)['multipart-formdata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything['multipart-formdata'].$post(args, options))
}
