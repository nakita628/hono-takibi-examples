import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function getHtml(
  args: InferRequestType<typeof client.html.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.html.$get(args, options))
}

export async function getSelected(
  args: InferRequestType<typeof client.selected.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.selected.$get(args, options))
}

export async function getSelectedMultiple(
  args: InferRequestType<(typeof client)['selected-multiple']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['selected-multiple'].$get(args, options))
}
