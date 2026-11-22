import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDealSplits202609BatchRead(
  args: InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['deal-splits']['2026-09'].batch.read.$post(args, options))
}

export async function postDealSplits202609BatchUpsert(
  args: InferRequestType<(typeof client)['deal-splits']['2026-09']['batch']['upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['deal-splits']['2026-09'].batch.upsert.$post(args, options))
}
