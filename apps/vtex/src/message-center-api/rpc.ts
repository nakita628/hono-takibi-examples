import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiMailServicePvtProvidersEmailProviderDkim(
  args: InferRequestType<
    (typeof client.api)['mail-service']['pvt']['providers'][':EmailProvider']['dkim']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['mail-service'].pvt.providers[':EmailProvider'].dkim.$post(args, options),
  )
}
