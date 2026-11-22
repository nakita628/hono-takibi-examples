import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1GetIceServerConfig(
  args: InferRequestType<(typeof client.v1)['get-ice-server-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['get-ice-server-config'].$post(args, options))
}

export async function postV1SendAlexaOfferToMaster(
  args: InferRequestType<(typeof client.v1)['send-alexa-offer-to-master']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['send-alexa-offer-to-master'].$post(args, options))
}
