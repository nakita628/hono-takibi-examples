import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGetzipcodeinfo(
  args: InferRequestType<typeof client.getzipcodeinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getzipcodeinfo.$get(args, options))
}
