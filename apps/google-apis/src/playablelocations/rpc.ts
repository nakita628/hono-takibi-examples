import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV3LogImpressions(
  args: InferRequestType<(typeof client)['v3:logImpressions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v3:logImpressions'].$post(args, options))
}

export async function postV3LogPlayerReports(
  args: InferRequestType<(typeof client)['v3:logPlayerReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v3:logPlayerReports'].$post(args, options))
}

export async function postV3SamplePlayableLocations(
  args: InferRequestType<(typeof client)['v3:samplePlayableLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v3:samplePlayableLocations'].$post(args, options))
}
