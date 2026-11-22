import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSegmentwriterV1SegmentWriterServicePush(
  args: InferRequestType<(typeof client)['segmentwriter.v1.SegmentWriterService']['Push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['segmentwriter.v1.SegmentWriterService'].Push.$post(args, options),
  )
}
