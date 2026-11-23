import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putFormPrimitive(
  args: InferRequestType<typeof client.form.primitive.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.form.primitive.$put(args, options))
}
