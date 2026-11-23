import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postItemDraftIndex(
  args: InferRequestType<typeof client.item_draft.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_draft.index.$post(args, options))
}
