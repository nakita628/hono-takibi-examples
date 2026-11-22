import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndexPhpAppsOauth2Authorize(
  args: InferRequestType<(typeof client)['index.php']['apps']['oauth2']['authorize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.oauth2.authorize.$get(args, options))
}

export async function postIndexPhpAppsOauth2ApiV1Token(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['oauth2']['api']['v1']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].apps.oauth2.api.v1.token.$post(args, options))
}
