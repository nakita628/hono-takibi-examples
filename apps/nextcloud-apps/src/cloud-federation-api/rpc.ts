import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIndexPhpOcmShares(
  args: InferRequestType<(typeof client)['index.php']['ocm']['shares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].ocm.shares.$post(args, options))
}

export async function postIndexPhpOcmNotifications(
  args: InferRequestType<(typeof client)['index.php']['ocm']['notifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['index.php'].ocm.notifications.$post(args, options))
}
