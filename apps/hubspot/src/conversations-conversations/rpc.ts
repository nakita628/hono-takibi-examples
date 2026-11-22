import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postConversationsConversations202609ActorsBatchRead(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].actors.batch.read.$post(args, options),
  )
}

export async function getConversationsConversations202609ActorsActorId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['actors'][':actorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].actors[':actorId'].$get(args, options),
  )
}

export async function getConversationsConversations202609ChannelAccounts(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09']['channel-accounts'].$get(args, options),
  )
}

export async function getConversationsConversations202609ChannelAccountsChannelAccountId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09']['channel-accounts'][':channelAccountId'].$get(
      args,
      options,
    ),
  )
}

export async function getConversationsConversations202609Channels(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].channels.$get(args, options),
  )
}

export async function getConversationsConversations202609ChannelsChannelId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['channels'][':channelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].channels[':channelId'].$get(args, options),
  )
}

export async function getConversationsConversations202609Inboxes(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['inboxes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].inboxes.$get(args, options),
  )
}

export async function getConversationsConversations202609InboxesInboxId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['inboxes'][':inboxId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].inboxes[':inboxId'].$get(args, options),
  )
}

export async function getConversationsConversations202609Threads(
  args: InferRequestType<(typeof client.conversations.conversations)['2026-09']['threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads.$get(args, options),
  )
}

export async function getConversationsConversations202609ThreadsThreadId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].$get(args, options),
  )
}

export async function deleteConversationsConversations202609ThreadsThreadId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].$delete(args, options),
  )
}

export async function patchConversationsConversations202609ThreadsThreadId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].$patch(args, options),
  )
}

export async function putConversationsConversations202609ThreadsThreadIdAssignee(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].assignee.$put(args, options),
  )
}

export async function deleteConversationsConversations202609ThreadsThreadIdAssignee(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['assignee']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].assignee.$delete(
      args,
      options,
    ),
  )
}

export async function getConversationsConversations202609ThreadsThreadIdMessages(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].messages.$get(args, options),
  )
}

export async function postConversationsConversations202609ThreadsThreadIdMessages(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].messages.$post(
      args,
      options,
    ),
  )
}

export async function getConversationsConversations202609ThreadsThreadIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].messages[':messageId'].$get(
      args,
      options,
    ),
  )
}

export async function getConversationsConversations202609ThreadsThreadIdMessagesMessageIdOriginalContent(
  args: InferRequestType<
    (typeof client.conversations.conversations)['2026-09']['threads'][':threadId']['messages'][':messageId']['original-content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.conversations['2026-09'].threads[':threadId'].messages[':messageId'][
      'original-content'
    ].$get(args, options),
  )
}
