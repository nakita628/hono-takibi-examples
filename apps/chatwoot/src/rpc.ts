import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPlatformApiV1Accounts(
  args: InferRequestType<typeof client.platform.api.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.accounts.$post(args, options))
}

export async function getPlatformApiV1AccountsAccountId(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.accounts[':account_id'].$get(args, options))
}

export async function deletePlatformApiV1AccountsAccountId(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.accounts[':account_id'].$delete(args, options))
}

export async function patchPlatformApiV1AccountsAccountId(
  args: InferRequestType<(typeof client.platform.api.v1.accounts)[':account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.accounts[':account_id'].$patch(args, options))
}

export async function getPlatformApiV1AccountsAccountIdAccountUsers(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.platform.api.v1.accounts[':account_id'].account_users.$get(args, options),
  )
}

export async function postPlatformApiV1AccountsAccountIdAccountUsers(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.platform.api.v1.accounts[':account_id'].account_users.$post(args, options),
  )
}

export async function deletePlatformApiV1AccountsAccountIdAccountUsers(
  args: InferRequestType<
    (typeof client.platform.api.v1.accounts)[':account_id']['account_users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.platform.api.v1.accounts[':account_id'].account_users.$delete(args, options),
  )
}

export async function getPlatformApiV1AgentBots(options?: ClientRequestOptions) {
  return await parseResponse(client.platform.api.v1.agent_bots.$get(undefined, options))
}

export async function postPlatformApiV1AgentBots(
  args: InferRequestType<typeof client.platform.api.v1.agent_bots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.agent_bots.$post(args, options))
}

export async function getPlatformApiV1AgentBotsId(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.agent_bots[':id'].$get(args, options))
}

export async function deletePlatformApiV1AgentBotsId(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.agent_bots[':id'].$delete(args, options))
}

export async function patchPlatformApiV1AgentBotsId(
  args: InferRequestType<(typeof client.platform.api.v1.agent_bots)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.agent_bots[':id'].$patch(args, options))
}

export async function postPlatformApiV1Users(
  args: InferRequestType<typeof client.platform.api.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.users.$post(args, options))
}

export async function getPlatformApiV1UsersId(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.users[':id'].$get(args, options))
}

export async function deletePlatformApiV1UsersId(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.users[':id'].$delete(args, options))
}

export async function patchPlatformApiV1UsersId(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.users[':id'].$patch(args, options))
}

export async function getPlatformApiV1UsersIdLogin(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.users[':id'].login.$get(args, options))
}

export async function postPlatformApiV1UsersIdToken(
  args: InferRequestType<(typeof client.platform.api.v1.users)[':id']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.platform.api.v1.users[':id'].token.$post(args, options))
}

export async function getPublicApiV1InboxesInboxIdentifier(
  args: InferRequestType<(typeof client.public.api.v1.inboxes)[':inbox_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.public.api.v1.inboxes[':inbox_identifier'].$get(args, options))
}

export async function postPublicApiV1InboxesInboxIdentifierContacts(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts.$post(args, options),
  )
}

export async function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifier(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$get(
      args,
      options,
    ),
  )
}

export async function patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifier(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].$patch(
      args,
      options,
    ),
  )
}

export async function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[
      ':contact_identifier'
    ].conversations.$get(args, options),
  )
}

export async function postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversations(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[
      ':contact_identifier'
    ].conversations.$post(args, options),
  )
}

export async function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationId(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].conversations[
      ':conversation_id'
    ].$get(args, options),
  )
}

export async function postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleStatus(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].conversations[
      ':conversation_id'
    ].toggle_status.$post(args, options),
  )
}

export async function postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdToggleTyping(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['toggle_typing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].conversations[
      ':conversation_id'
    ].toggle_typing.$post(args, options),
  )
}

export async function postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdUpdateLastSeen(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['update_last_seen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].conversations[
      ':conversation_id'
    ].update_last_seen.$post(args, options),
  )
}

export async function getPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].conversations[
      ':conversation_id'
    ].messages.$get(args, options),
  )
}

export async function postPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessages(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].conversations[
      ':conversation_id'
    ].messages.$post(args, options),
  )
}

export async function patchPublicApiV1InboxesInboxIdentifierContactsContactIdentifierConversationsConversationIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.public.api.v1.inboxes)[':inbox_identifier']['contacts'][':contact_identifier']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.public.api.v1.inboxes[':inbox_identifier'].contacts[':contact_identifier'].conversations[
      ':conversation_id'
    ].messages[':message_id'].$patch(args, options),
  )
}

export async function getSurveyResponsesConversationUuid(
  args: InferRequestType<(typeof client.survey.responses)[':conversation_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.survey.responses[':conversation_uuid'].$get(args, options))
}

export async function getApiV1AccountsAccountId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].$get(args, options))
}

export async function patchApiV1AccountsAccountId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].$patch(args, options))
}

export async function getApiV1AccountsAccountIdAuditLogs(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['audit_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].audit_logs.$get(args, options))
}

export async function getApiV1AccountsAccountIdAgentBots(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].agent_bots.$get(args, options))
}

export async function postApiV1AccountsAccountIdAgentBots(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agent_bots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].agent_bots.$post(args, options))
}

export async function getApiV1AccountsAccountIdAgentBotsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].agent_bots[':id'].$get(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdAgentBotsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].agent_bots[':id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdAgentBotsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agent_bots'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].agent_bots[':id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdAgents(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].agents.$get(args, options))
}

export async function postApiV1AccountsAccountIdAgents(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].agents.$post(args, options))
}

export async function deleteApiV1AccountsAccountIdAgentsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].agents[':id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdAgentsId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['agents'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].agents[':id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdCannedResponses(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].canned_responses.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdCannedResponses(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].canned_responses.$post(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdCannedResponsesId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].canned_responses[':id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdCannedResponsesId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['canned_responses'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].canned_responses[':id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdCustomAttributeDefinitions(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_attribute_definitions.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdCustomAttributeDefinitions(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_attribute_definitions.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdCustomAttributeDefinitionsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$get(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdCustomAttributeDefinitionsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV1AccountsAccountIdCustomAttributeDefinitionsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_attribute_definitions'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_attribute_definitions[':id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdContacts(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].contacts.$get(args, options))
}

export async function postApiV1AccountsAccountIdContacts(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].contacts.$post(args, options))
}

export async function getApiV1AccountsAccountIdContactsId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].$get(args, options),
  )
}

export async function putApiV1AccountsAccountIdContactsId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].$put(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdContactsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].$delete(args, options),
  )
}

export async function getApiV1AccountsAccountIdContactsIdConversations(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['conversations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].conversations.$get(args, options),
  )
}

export async function getApiV1AccountsAccountIdContactsIdLabels(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].labels.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdContactsIdLabels(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].labels.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdContactsSearch(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts.search.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdContactsFilter(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts']['filter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts.filter.$post(args, options),
  )
}

export async function postApiV1AccountsAccountIdContactsIdContactInboxes(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contact_inboxes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].contact_inboxes.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdContactsIdContactableInboxes(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['contacts'][':id']['contactable_inboxes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].contacts[':id'].contactable_inboxes.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdDataExports(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['data_exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].data_exports.$post(args, options),
  )
}

export async function postApiV1AccountsAccountIdActionsContactMerge(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['actions']['contact_merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].actions.contact_merge.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdAutomationRules(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].automation_rules.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdAutomationRules(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].automation_rules.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdAutomationRulesId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].automation_rules[':id'].$get(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdAutomationRulesId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].automation_rules[':id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdAutomationRulesId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['automation_rules'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].automation_rules[':id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdPortals(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].portals.$get(args, options))
}

export async function postApiV1AccountsAccountIdPortals(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['portals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].portals.$post(args, options))
}

export async function getApiV1AccountsAccountIdPortalsPortalSlug(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].portals[':portal_slug'].$get(args, options),
  )
}

export async function patchApiV1AccountsAccountIdPortalsPortalSlug(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].portals[':portal_slug'].$patch(args, options),
  )
}

export async function postApiV1AccountsAccountIdPortalsPortalSlugCategories(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['categories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].portals[':portal_slug'].categories.$post(args, options),
  )
}

export async function postApiV1AccountsAccountIdPortalsPortalSlugArticles(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['portals'][':portal_slug']['articles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].portals[':portal_slug'].articles.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdConversationsMeta(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations.meta.$get(args, options),
  )
}

export async function getApiV1AccountsAccountIdConversations(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdConversations(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['conversations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations.$post(args, options),
  )
}

export async function postApiV1AccountsAccountIdConversationsFilter(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations']['filter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations.filter.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdConversationsConversationId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$get(args, options),
  )
}

export async function patchApiV1AccountsAccountIdConversationsConversationId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].$patch(args, options),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdToggleStatus(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].toggle_status.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdTogglePriority(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].toggle_priority.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdToggleTypingStatus(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['toggle_typing_status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[
      ':conversation_id'
    ].toggle_typing_status.$post(args, options),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdUpdateLastSeen(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['update_last_seen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].update_last_seen.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdCustomAttributes(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['custom_attributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].custom_attributes.$post(
      args,
      options,
    ),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdDestroyCustomAttributes(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['destroy_custom_attributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[
      ':conversation_id'
    ].destroy_custom_attributes.$post(args, options),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdAssignments(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].assignments.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1AccountsAccountIdConversationsConversationIdLabels(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$get(
      args,
      options,
    ),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdLabels(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].labels.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1AccountsAccountIdConversationsConversationIdReportingEvents(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['reporting_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].reporting_events.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1AccountsAccountIdBrandedEmailLayout(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].branded_email_layout.$get(args, options),
  )
}

export async function patchApiV1AccountsAccountIdBrandedEmailLayout(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['branded_email_layout']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].branded_email_layout.$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdInboxes(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].inboxes.$get(args, options))
}

export async function postApiV1AccountsAccountIdInboxes(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].inboxes.$post(args, options))
}

export async function getApiV1AccountsAccountIdInboxesId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inboxes[':id'].$get(args, options),
  )
}

export async function patchApiV1AccountsAccountIdInboxesId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inboxes[':id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdInboxesIdMessageTemplates(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['message_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inboxes[':id'].message_templates.$get(args, options),
  )
}

export async function getApiV1AccountsAccountIdInboxesIdAgentBot(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['agent_bot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inboxes[':id'].agent_bot.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdInboxesIdSetAgentBot(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inboxes'][':id']['set_agent_bot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inboxes[':id'].set_agent_bot.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdInboxMembersInboxId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members'][':inbox_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inbox_members[':inbox_id'].$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdInboxMembers(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inbox_members.$post(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdInboxMembers(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['inbox_members']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inbox_members.$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdInboxMembers(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['inbox_members']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].inbox_members.$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdLabels(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].labels.$get(args, options))
}

export async function postApiV1AccountsAccountIdLabels(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].labels.$post(args, options))
}

export async function getApiV1AccountsAccountIdLabelsId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].labels[':id'].$get(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdLabelsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].labels[':id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdLabelsId(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['labels'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].labels[':id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdConversationsConversationIdMessages(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$get(
      args,
      options,
    ),
  )
}

export async function postApiV1AccountsAccountIdConversationsConversationIdMessages(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiV1AccountsAccountIdConversationsConversationIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages[
      ':message_id'
    ].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdConversationsConversationIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['conversations'][':conversation_id']['messages'][':message_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].conversations[':conversation_id'].messages[
      ':message_id'
    ].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdIntegrationsApps(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['apps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].integrations.apps.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdIntegrationsHooks(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].integrations.hooks.$post(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdIntegrationsHooksHookId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].integrations.hooks[':hook_id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdIntegrationsHooksHookId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['integrations']['hooks'][':hook_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].integrations.hooks[':hook_id'].$patch(args, options),
  )
}

export async function getApiV1Profile(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.profile.$get(undefined, options))
}

export async function putApiV1Profile(
  args: InferRequestType<typeof client.api.v1.profile.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.profile.$put(args, options))
}

export async function getApiV1AccountsAccountIdTeams(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].teams.$get(args, options))
}

export async function postApiV1AccountsAccountIdTeams(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].teams.$post(args, options))
}

export async function getApiV1AccountsAccountIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].teams[':team_id'].$get(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].teams[':team_id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdTeamsTeamId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].teams[':team_id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdTeamsTeamIdTeamMembers(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdTeamsTeamIdTeamMembers(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$post(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdTeamsTeamIdTeamMembers(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdTeamsTeamIdTeamMembers(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['teams'][':team_id']['team_members']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].teams[':team_id'].team_members.$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdCustomFilters(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_filters.$get(args, options),
  )
}

export async function postApiV1AccountsAccountIdCustomFilters(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['custom_filters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_filters.$post(args, options),
  )
}

export async function getApiV1AccountsAccountIdCustomFiltersCustomFilterId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$get(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdCustomFiltersCustomFilterId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV1AccountsAccountIdCustomFiltersCustomFilterId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['custom_filters'][':custom_filter_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].custom_filters[':custom_filter_id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdWebhooks(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].webhooks.$get(args, options))
}

export async function postApiV1AccountsAccountIdWebhooks(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].webhooks.$post(args, options))
}

export async function deleteApiV1AccountsAccountIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].webhooks[':webhook_id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['webhooks'][':webhook_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].webhooks[':webhook_id'].$patch(args, options),
  )
}

export async function getApiV1AccountsAccountIdReportingEvents(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['reporting_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].reporting_events.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdReports(
  args: InferRequestType<(typeof client.api.v2.accounts)[':account_id']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.accounts[':account_id'].reports.$get(args, options))
}

export async function getApiV2AccountsAccountIdReportsSummary(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].reports.summary.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdReportsConversations(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].reports.conversations.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdReportsConversationsIndex(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['conversations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].reports.conversations.index.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdSummaryReportsChannel(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['channel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].summary_reports.channel.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdSummaryReportsInbox(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['inbox']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].summary_reports.inbox.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdSummaryReportsAgent(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['agent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].summary_reports.agent.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdSummaryReportsTeam(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['summary_reports']['team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].summary_reports.team.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdReportsFirstResponseTimeDistribution(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['first_response_time_distribution']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].reports.first_response_time_distribution.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2AccountsAccountIdReportsInboxLabelMatrix(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['inbox_label_matrix']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].reports.inbox_label_matrix.$get(args, options),
  )
}

export async function getApiV2AccountsAccountIdReportsOutgoingMessagesCount(
  args: InferRequestType<
    (typeof client.api.v2.accounts)[':account_id']['reports']['outgoing_messages_count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.accounts[':account_id'].reports.outgoing_messages_count.$get(args, options),
  )
}

export async function getAccountsAccountIdConversationsConversationIdMessages(
  args: InferRequestType<
    (typeof client.accounts)[':account_id']['conversations'][':conversation_id']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':account_id'].conversations[':conversation_id'].messages.$get(args, options),
  )
}

export async function getApiV1AccountsAccountIdCampaigns(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].campaigns.$get(args, options))
}

export async function postApiV1AccountsAccountIdCampaigns(
  args: InferRequestType<(typeof client.api.v1.accounts)[':account_id']['campaigns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.accounts[':account_id'].campaigns.$post(args, options))
}

export async function getApiV1AccountsAccountIdCampaignsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].campaigns[':id'].$get(args, options),
  )
}

export async function deleteApiV1AccountsAccountIdCampaignsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].campaigns[':id'].$delete(args, options),
  )
}

export async function patchApiV1AccountsAccountIdCampaignsId(
  args: InferRequestType<
    (typeof client.api.v1.accounts)[':account_id']['campaigns'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.accounts[':account_id'].campaigns[':id'].$patch(args, options),
  )
}
