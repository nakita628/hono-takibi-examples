import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAcceptDispute(
  args: InferRequestType<typeof client.acceptDispute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acceptDispute.$post(args, options))
}

export async function postDefendDispute(
  args: InferRequestType<typeof client.defendDispute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.defendDispute.$post(args, options))
}

export async function postDeleteDisputeDefenseDocument(
  args: InferRequestType<typeof client.deleteDisputeDefenseDocument.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteDisputeDefenseDocument.$post(args, options))
}

export async function postRetrieveApplicableDefenseReasons(
  args: InferRequestType<typeof client.retrieveApplicableDefenseReasons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retrieveApplicableDefenseReasons.$post(args, options))
}

export async function postSupplyDefenseDocument(
  args: InferRequestType<typeof client.supplyDefenseDocument.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.supplyDefenseDocument.$post(args, options))
}
