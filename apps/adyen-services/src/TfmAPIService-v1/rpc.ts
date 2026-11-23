import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAssignTerminals(
  args: InferRequestType<typeof client.assignTerminals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assignTerminals.$post(args, options))
}

export async function postFindTerminal(
  args: InferRequestType<typeof client.findTerminal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findTerminal.$post(args, options))
}

export async function postGetStoresUnderAccount(
  args: InferRequestType<typeof client.getStoresUnderAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getStoresUnderAccount.$post(args, options))
}

export async function postGetTerminalDetails(
  args: InferRequestType<typeof client.getTerminalDetails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getTerminalDetails.$post(args, options))
}

export async function postGetTerminalsUnderAccount(
  args: InferRequestType<typeof client.getTerminalsUnderAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getTerminalsUnderAccount.$post(args, options))
}
