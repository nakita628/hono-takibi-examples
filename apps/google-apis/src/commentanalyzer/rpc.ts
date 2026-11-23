import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1alpha1CommentsAnalyze(
  args: InferRequestType<(typeof client.v1alpha1)['comments:analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['comments:analyze'].$post(args, options))
}

export async function postV1alpha1CommentsSuggestscore(
  args: InferRequestType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1['comments:suggestscore'].$post(args, options))
}
