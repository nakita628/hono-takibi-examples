import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApi(options?: ClientRequestOptions) {
  return await parseResponse(client.api.$get(undefined, options))
}

export async function getApiProjectsIdFormat(
  args: InferRequestType<(typeof client.api.projects)[':id:.format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id:.format'].$get(args, options))
}

export async function getApiProjectsFormat(
  args: InferRequestType<(typeof client.api)['projects:.format']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['projects:.format'].$get(args, options))
}
