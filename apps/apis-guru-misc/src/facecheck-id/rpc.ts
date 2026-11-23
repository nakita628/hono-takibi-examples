import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiDeletePic(
  args: InferRequestType<typeof client.api.delete_pic.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.delete_pic.$post(args, options))
}

export async function postApiInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api.info.$post(undefined, options))
}

export async function postApiSearch(
  args: InferRequestType<typeof client.api.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.search.$post(args, options))
}

export async function postApiUploadPic(
  args: InferRequestType<typeof client.api.upload_pic.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.upload_pic.$post(args, options))
}
