import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHumanLoopsHumanLoopName(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['human-loops'][':HumanLoopName'].$get(args, options))
}

export async function deleteHumanLoopsHumanLoopName(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['human-loops'][':HumanLoopName'].$delete(args, options))
}

export async function getHumanLoopsFlowDefinitionArn(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['human-loops#FlowDefinitionArn'].$get(args, options))
}

export async function postHumanLoops(
  args: InferRequestType<(typeof client)['human-loops']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['human-loops'].$post(args, options))
}

export async function postHumanLoopsStop(
  args: InferRequestType<(typeof client)['human-loops']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['human-loops'].stop.$post(args, options))
}
