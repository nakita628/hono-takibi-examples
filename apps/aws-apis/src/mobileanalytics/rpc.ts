import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post20140605EventsXAmzClientContext(
  args: InferRequestType<(typeof client)['2014-06-05']['events#x-amz-Client-Context']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2014-06-05']['events#x-amz-Client-Context'].$post(args, options),
  )
}
