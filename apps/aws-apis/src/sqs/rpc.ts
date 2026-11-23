import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountNumberQueueNameActionAddPermission(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=AddPermission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=AddPermission'].$get(args, options),
  )
}

export async function postActionAddPermission(
  args: InferRequestType<(typeof client)['#Action=AddPermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddPermission'].$post(args, options))
}

export async function getActionCancelMessageMoveTask(
  args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelMessageMoveTask'].$get(args, options))
}

export async function postActionCancelMessageMoveTask(
  args: InferRequestType<(typeof client)['#Action=CancelMessageMoveTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CancelMessageMoveTask'].$post(args, options))
}

export async function getAccountNumberQueueNameActionChangeMessageVisibility(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibility'].$get(args, options),
  )
}

export async function postActionChangeMessageVisibility(
  args: InferRequestType<(typeof client)['#Action=ChangeMessageVisibility']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ChangeMessageVisibility'].$post(args, options))
}

export async function getAccountNumberQueueNameActionChangeMessageVisibilityBatch(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=ChangeMessageVisibilityBatch'].$get(
      args,
      options,
    ),
  )
}

export async function postActionChangeMessageVisibilityBatch(
  args: InferRequestType<(typeof client)['#Action=ChangeMessageVisibilityBatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ChangeMessageVisibilityBatch'].$post(args, options))
}

export async function getActionCreateQueue(
  args: InferRequestType<(typeof client)['#Action=CreateQueue']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateQueue'].$get(args, options))
}

export async function postActionCreateQueue(
  args: InferRequestType<(typeof client)['#Action=CreateQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateQueue'].$post(args, options))
}

export async function getAccountNumberQueueNameActionDeleteMessage(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=DeleteMessage'].$get(args, options),
  )
}

export async function postActionDeleteMessage(
  args: InferRequestType<(typeof client)['#Action=DeleteMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteMessage'].$post(args, options))
}

export async function getAccountNumberQueueNameActionDeleteMessageBatch(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=DeleteMessageBatch'].$get(args, options),
  )
}

export async function postActionDeleteMessageBatch(
  args: InferRequestType<(typeof client)['#Action=DeleteMessageBatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteMessageBatch'].$post(args, options))
}

export async function getAccountNumberQueueNameActionDeleteQueue(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=DeleteQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=DeleteQueue'].$get(args, options),
  )
}

export async function postActionDeleteQueue(
  args: InferRequestType<(typeof client)['#Action=DeleteQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteQueue'].$post(args, options))
}

export async function getAccountNumberQueueNameActionGetQueueAttributes(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=GetQueueAttributes'].$get(args, options),
  )
}

export async function postActionGetQueueAttributes(
  args: InferRequestType<(typeof client)['#Action=GetQueueAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetQueueAttributes'].$post(args, options))
}

export async function getActionGetQueueUrl(
  args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetQueueUrl'].$get(args, options))
}

export async function postActionGetQueueUrl(
  args: InferRequestType<(typeof client)['#Action=GetQueueUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetQueueUrl'].$post(args, options))
}

export async function getAccountNumberQueueNameActionListDeadLetterSourceQueues(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=ListDeadLetterSourceQueues'].$get(
      args,
      options,
    ),
  )
}

export async function postActionListDeadLetterSourceQueues(
  args: InferRequestType<(typeof client)['#Action=ListDeadLetterSourceQueues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListDeadLetterSourceQueues'].$post(args, options))
}

export async function getActionListMessageMoveTasks(
  args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMessageMoveTasks'].$get(args, options))
}

export async function postActionListMessageMoveTasks(
  args: InferRequestType<(typeof client)['#Action=ListMessageMoveTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMessageMoveTasks'].$post(args, options))
}

export async function getAccountNumberQueueNameActionListQueueTags(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ListQueueTags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=ListQueueTags'].$get(args, options),
  )
}

export async function postActionListQueueTags(
  args: InferRequestType<(typeof client)['#Action=ListQueueTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListQueueTags'].$post(args, options))
}

export async function getActionListQueues(
  args: InferRequestType<(typeof client)['#Action=ListQueues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListQueues'].$get(args, options))
}

export async function postActionListQueues(
  args: InferRequestType<(typeof client)['#Action=ListQueues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListQueues'].$post(args, options))
}

export async function getAccountNumberQueueNameActionPurgeQueue(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=PurgeQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=PurgeQueue'].$get(args, options),
  )
}

export async function postActionPurgeQueue(
  args: InferRequestType<(typeof client)['#Action=PurgeQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PurgeQueue'].$post(args, options))
}

export async function getAccountNumberQueueNameActionReceiveMessage(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=ReceiveMessage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=ReceiveMessage'].$get(args, options),
  )
}

export async function postActionReceiveMessage(
  args: InferRequestType<(typeof client)['#Action=ReceiveMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ReceiveMessage'].$post(args, options))
}

export async function getAccountNumberQueueNameActionRemovePermission(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=RemovePermission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=RemovePermission'].$get(args, options),
  )
}

export async function postActionRemovePermission(
  args: InferRequestType<(typeof client)['#Action=RemovePermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemovePermission'].$post(args, options))
}

export async function getAccountNumberQueueNameActionSendMessage(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=SendMessage'].$get(args, options),
  )
}

export async function postActionSendMessage(
  args: InferRequestType<(typeof client)['#Action=SendMessage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendMessage'].$post(args, options))
}

export async function getAccountNumberQueueNameActionSendMessageBatch(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SendMessageBatch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=SendMessageBatch'].$get(args, options),
  )
}

export async function postActionSendMessageBatch(
  args: InferRequestType<(typeof client)['#Action=SendMessageBatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SendMessageBatch'].$post(args, options))
}

export async function getAccountNumberQueueNameActionSetQueueAttributes(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=SetQueueAttributes'].$get(args, options),
  )
}

export async function postActionSetQueueAttributes(
  args: InferRequestType<(typeof client)['#Action=SetQueueAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetQueueAttributes'].$post(args, options))
}

export async function getActionStartMessageMoveTask(
  args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartMessageMoveTask'].$get(args, options))
}

export async function postActionStartMessageMoveTask(
  args: InferRequestType<(typeof client)['#Action=StartMessageMoveTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=StartMessageMoveTask'].$post(args, options))
}

export async function getAccountNumberQueueNameActionTagQueue(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=TagQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=TagQueue'].$get(args, options),
  )
}

export async function postActionTagQueue(
  args: InferRequestType<(typeof client)['#Action=TagQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagQueue'].$post(args, options))
}

export async function getAccountNumberQueueNameActionUntagQueue(
  args: InferRequestType<
    (typeof client)[':AccountNumber'][':QueueName']['#Action=UntagQueue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':AccountNumber'][':QueueName']['#Action=UntagQueue'].$get(args, options),
  )
}

export async function postActionUntagQueue(
  args: InferRequestType<(typeof client)['#Action=UntagQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagQueue'].$post(args, options))
}
