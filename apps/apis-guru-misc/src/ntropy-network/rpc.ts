import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getClassifierBusinessBatchId(
  args: InferRequestType<(typeof client.classifier.business.batch)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifier.business.batch[':id'].$get(args, options))
}

export async function getClassifierConsumerBatchId(
  args: InferRequestType<(typeof client.classifier.consumer.batch)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classifier.consumer.batch[':id'].$get(args, options))
}
