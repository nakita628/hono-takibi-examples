import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFindEligibleItems(
  args: InferRequestType<typeof client.find_eligible_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.find_eligible_items.$get(args, options))
}

export async function postSendOfferToInterestedBuyers(
  args: InferRequestType<typeof client.send_offer_to_interested_buyers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.send_offer_to_interested_buyers.$post(args, options))
}
