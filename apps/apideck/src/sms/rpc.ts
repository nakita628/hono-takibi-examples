import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSmsMessages(
  args: InferRequestType<typeof client.sms.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.messages.$get(args, options))
}

export async function postSmsMessages(
  args: InferRequestType<typeof client.sms.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.messages.$post(args, options))
}

export async function getSmsMessagesId(
  args: InferRequestType<(typeof client.sms.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.messages[':id'].$get(args, options))
}

export async function deleteSmsMessagesId(
  args: InferRequestType<(typeof client.sms.messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.messages[':id'].$delete(args, options))
}

export async function patchSmsMessagesId(
  args: InferRequestType<(typeof client.sms.messages)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sms.messages[':id'].$patch(args, options))
}
