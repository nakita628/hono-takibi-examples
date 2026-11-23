import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMarketingEmailCampaigns202609SingleSend(
  args: InferRequestType<
    (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.marketing['email-campaigns']['2026-09']['single-send'].$post(args, options),
  )
}
