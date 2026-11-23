import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConversationsCustomChannels202609(
  args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations['custom-channels']['2026-09'].$get(args, options))
}

export async function postConversationsCustomChannels202609(
  args: InferRequestType<(typeof client.conversations)['custom-channels']['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'].$post(args, options),
  )
}

export async function getConversationsCustomChannels202609ChannelId(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId'].$get(args, options),
  )
}

export async function deleteConversationsCustomChannels202609ChannelId(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId'].$delete(args, options),
  )
}

export async function patchConversationsCustomChannels202609ChannelId(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId'].$patch(args, options),
  )
}

export async function patchConversationsCustomChannels202609ChannelIdChannelAccountStagingTokensAccountToken(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-account-staging-tokens'][':accountToken']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId'][
      'channel-account-staging-tokens'
    ][':accountToken'].$patch(args, options),
  )
}

export async function getConversationsCustomChannels202609ChannelIdChannelAccounts(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$get(
      args,
      options,
    ),
  )
}

export async function postConversationsCustomChannels202609ChannelIdChannelAccounts(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'].$post(
      args,
      options,
    ),
  )
}

export async function getConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
      ':channelAccountId'
    ].$get(args, options),
  )
}

export async function patchConversationsCustomChannels202609ChannelIdChannelAccountsChannelAccountId(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['channel-accounts'][':channelAccountId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId']['channel-accounts'][
      ':channelAccountId'
    ].$patch(args, options),
  )
}

export async function postConversationsCustomChannels202609ChannelIdMessages(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId'].messages.$post(args, options),
  )
}

export async function getConversationsCustomChannels202609ChannelIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId'].messages[':messageId'].$get(
      args,
      options,
    ),
  )
}

export async function patchConversationsCustomChannels202609ChannelIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.conversations)['custom-channels']['2026-09'][':channelId']['messages'][':messageId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations['custom-channels']['2026-09'][':channelId'].messages[':messageId'].$patch(
      args,
      options,
    ),
  )
}
