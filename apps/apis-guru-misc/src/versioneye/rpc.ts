import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Scans(
  args: InferRequestType<typeof client.api.v1.scans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scans.$get(args, options))
}

export async function getApiV1ScansId(
  args: InferRequestType<(typeof client.api.v1.scans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scans[':id'].$get(args, options))
}

export async function getApiV1ScansIdFilesFileId(
  args: InferRequestType<(typeof client.api.v1.scans)[':id']['files'][':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.scans[':id'].files[':file_id'].$get(args, options))
}
