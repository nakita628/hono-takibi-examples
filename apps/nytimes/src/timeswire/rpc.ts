import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getContentJson(
  args: InferRequestType<(typeof client)['content.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['content.json'].$get(args, options))
}

export async function getContentSourceSectionJson(
  args: InferRequestType<(typeof client.content)[':source'][':section.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content[':source'][':section.json'].$get(args, options))
}

export async function getContentSourceSectionTimePeriodJson(
  args: InferRequestType<
    (typeof client.content)[':source'][':section'][':time-period.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.content[':source'][':section'][':time-period.json'].$get(args, options),
  )
}
