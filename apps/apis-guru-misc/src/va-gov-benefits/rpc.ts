import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putPath(
  args: InferRequestType<typeof client.path.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.path.$put(args, options))
}

export async function postUploads(options?: ClientRequestOptions) {
  return await parseResponse(client.uploads.$post(undefined, options))
}

export async function postUploadsReport(
  args: InferRequestType<typeof client.uploads.report.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads.report.$post(args, options))
}

export async function postUploadsValidateDocument(options?: ClientRequestOptions) {
  return await parseResponse(client.uploads.validate_document.$post(undefined, options))
}

export async function getUploadsId(
  args: InferRequestType<(typeof client.uploads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':id'].$get(args, options))
}

export async function getUploadsIdDownload(
  args: InferRequestType<(typeof client.uploads)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':id'].download.$get(args, options))
}
