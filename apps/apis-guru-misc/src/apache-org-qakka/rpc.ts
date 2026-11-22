import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getQueues(options?: ClientRequestOptions) {
  return await parseResponse(client.queues.$get(undefined, options))
}

export async function postQueues(options?: ClientRequestOptions) {
  return await parseResponse(client.queues.$post(undefined, options))
}

export async function deleteQueuesQueueName(
  args: InferRequestType<(typeof client.queues)[':queueName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queueName'].$delete(args, options))
}

export async function getQueuesQueueNameConfig(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queueName'].config.$get(args, options))
}

export async function putQueuesQueueNameConfig(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queueName'].config.$put(args, options))
}

export async function getQueuesQueueNameDataQueueMessageId(
  args: InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':queueName'].data[':queueMessageId'].$get(args, options),
  )
}

export async function getQueuesQueueNameMessages(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queueName'].messages.$get(args, options))
}

export async function postQueuesQueueNameMessages(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queues[':queueName'].messages.$post(args, options))
}

export async function deleteQueuesQueueNameMessagesQueueMessageId(
  args: InferRequestType<
    (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queues[':queueName'].messages[':queueMessageId'].$delete(args, options),
  )
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}
