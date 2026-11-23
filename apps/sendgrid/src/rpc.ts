import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV3MailBatch(
  args: InferRequestType<typeof client.v3.mail.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.mail.batch.$post(args, options))
}

export async function getV3MailBatchBatchId(
  args: InferRequestType<(typeof client.v3.mail.batch)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.mail.batch[':batch_id'].$get(args, options))
}

export async function postV3MailSend(
  args: InferRequestType<typeof client.v3.mail.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.mail.send.$post(args, options))
}
