import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMessagesMessageId(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':messageId'].$get(args, options))
}

export async function postMessagesMessageId(
  args: InferRequestType<(typeof client.messages)[':messageId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':messageId'].$post(args, options))
}
