import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2CustomerPartnerReferrals(
  args: InferRequestType<(typeof client.v2.customer)['partner-referrals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer['partner-referrals'].$post(args, options))
}

export async function getV2CustomerPartnerReferralsPartnerReferralId(
  args: InferRequestType<
    (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer['partner-referrals'][':partner_referral_id'].$get(args, options),
  )
}
