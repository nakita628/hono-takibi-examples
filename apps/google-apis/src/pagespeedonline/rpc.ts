import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getPagespeedonlineV5RunPagespeed(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pagespeedonline.v5.runPagespeed.$get(args, options))
}
