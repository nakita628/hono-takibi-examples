import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putFilesFilename(
  args: InferRequestType<(typeof client.files)[':filename']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':filename'].$put(args, options))
}
