import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postVersionV1VersionVersion(
  args: InferRequestType<(typeof client)['version.v1.Version']['Version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['version.v1.Version'].Version.$post(args, options))
}
