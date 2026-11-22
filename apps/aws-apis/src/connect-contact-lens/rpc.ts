import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRealtimeContactAnalysisAnalysisSegments(
  args: InferRequestType<
    (typeof client)['realtime-contact-analysis']['analysis-segments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['realtime-contact-analysis']['analysis-segments'].$post(args, options),
  )
}
