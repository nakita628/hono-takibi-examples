import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiMessageMessageAnnunciatorCurrent(
  args: InferRequestType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Message.message[':annunciator'].current.$get(args, options))
}

export async function getApiMessageMessageAnnunciatorDate(
  args: InferRequestType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Message.message[':annunciator'][':date'].$get(args, options),
  )
}
