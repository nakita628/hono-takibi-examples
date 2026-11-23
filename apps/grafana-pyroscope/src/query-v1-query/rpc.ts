import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postQueryV1QueryBackendServiceInvoke(
  args: InferRequestType<(typeof client)['query.v1.QueryBackendService']['Invoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query.v1.QueryBackendService'].Invoke.$post(args, options))
}

export async function postQueryV1QueryFrontendServiceQuery(
  args: InferRequestType<(typeof client)['query.v1.QueryFrontendService']['Query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['query.v1.QueryFrontendService'].Query.$post(args, options))
}
