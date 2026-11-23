import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPlaycustomappV1AccountsAccountCustomApps(
  args: InferRequestType<
    (typeof client.playcustomapp.v1.accounts)[':account']['customApps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.playcustomapp.v1.accounts[':account'].customApps.$post(args, options),
  )
}
