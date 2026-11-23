import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOauth2Token(
  args: InferRequestType<typeof client.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.token.$post(args, options))
}

export async function getV1AccountsAccountIdCampaigns(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].campaigns.$get(args, options))
}

export async function postV1AccountsAccountIdCampaigns(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].campaigns.$post(args, options))
}

export async function getV1AccountsAccountIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].campaigns[':campaignId'].$get(args, options),
  )
}

export async function putV1AccountsAccountIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].campaigns[':campaignId'].$put(args, options),
  )
}

export async function deleteV1AccountsAccountIdCampaignsCampaignId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['campaigns'][':campaignId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].campaigns[':campaignId'].$delete(args, options),
  )
}

export async function getV1AccountsAccountIdContacts(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].contacts.$get(args, options))
}

export async function postV1AccountsAccountIdContacts(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].contacts.$post(args, options))
}

export async function getV1AccountsAccountIdContactsContactId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].contacts[':contactId'].$get(args, options),
  )
}

export async function putV1AccountsAccountIdContactsContactId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].contacts[':contactId'].$put(args, options),
  )
}

export async function deleteV1AccountsAccountIdContactsContactId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['contacts'][':contactId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].contacts[':contactId'].$delete(args, options),
  )
}

export async function getV1AccountsAccountIdConversations(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].conversations.$get(args, options))
}

export async function getV1AccountsAccountIdConversationsConversationId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].conversations[':conversationId'].$get(args, options),
  )
}

export async function putV1AccountsAccountIdConversationsConversationIdClose(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['conversations'][':conversationId']['close']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].conversations[':conversationId'].close.$put(args, options),
  )
}

export async function getV1AccountsAccountIdMessages(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].messages.$get(args, options))
}

export async function postV1AccountsAccountIdMessages(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].messages.$post(args, options))
}

export async function getV1AccountsAccountIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['messages'][':messageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].messages[':messageId'].$get(args, options),
  )
}

export async function getV1AccountsAccountIdTemplates(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].templates.$get(args, options))
}

export async function postV1AccountsAccountIdTemplates(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].templates.$post(args, options))
}

export async function getV1AccountsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].templates[':templateId'].$get(args, options),
  )
}

export async function putV1AccountsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].templates[':templateId'].$put(args, options),
  )
}

export async function deleteV1AccountsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':accountId']['templates'][':templateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].templates[':templateId'].$delete(args, options),
  )
}

export async function getV1AccountsAccountIdWebhooks(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].webhooks.$get(args, options))
}

export async function postV1AccountsAccountIdWebhooks(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':accountId'].webhooks.$post(args, options))
}

export async function deleteV1AccountsAccountIdWebhooksUrl(
  args: InferRequestType<(typeof client.v1.accounts)[':accountId']['webhooks'][':url']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':accountId'].webhooks[':url'].$delete(args, options),
  )
}

export async function postV1ToolsSharefile(
  args: InferRequestType<typeof client.v1.tools.sharefile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tools.sharefile.$post(args, options))
}
