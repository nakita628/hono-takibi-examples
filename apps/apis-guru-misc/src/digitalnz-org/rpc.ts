import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRecordsFormat(
  args: InferRequestType<(typeof client)['records.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['records.:format'].$get(args, options))
}

export async function getRecordsRecordIdFormat(
  args: InferRequestType<(typeof client.records)[':record_id.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.records[':record_id.:format'].$get(args, options))
}

export async function getRecordsRecordIdMoreLikeThisFormat(
  args: InferRequestType<(typeof client.records)[':record_id']['more_like_this.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.records[':record_id']['more_like_this.:format'].$get(args, options),
  )
}
