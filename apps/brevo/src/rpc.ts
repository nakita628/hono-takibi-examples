import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function postCorporateGroup(
  args: InferRequestType<typeof client.corporate.group.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.group.$post(args, options))
}

export async function putCorporateGroupUnlinkGroupIdSubAccounts(
  args: InferRequestType<(typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.corporate.group.unlink[':groupId'].subAccounts.$put(args, options),
  )
}

export async function getCorporateGroupId(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.group[':id'].$get(args, options))
}

export async function putCorporateGroupId(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.group[':id'].$put(args, options))
}

export async function deleteCorporateGroupId(
  args: InferRequestType<(typeof client.corporate.group)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.group[':id'].$delete(args, options))
}

export async function getCorporateGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.corporate.groups.$get(undefined, options))
}

export async function getCorporateInvitedUsers(
  args: InferRequestType<typeof client.corporate.invited.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.invited.users.$get(args, options))
}

export async function getCorporateIp(options?: ClientRequestOptions) {
  return await parseResponse(client.corporate.ip.$get(undefined, options))
}

export async function getCorporateMasterAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.corporate.masterAccount.$get(undefined, options))
}

export async function postCorporateSsoToken(
  args: InferRequestType<typeof client.corporate.ssoToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.ssoToken.$post(args, options))
}

export async function getCorporateSubAccount(
  args: InferRequestType<typeof client.corporate.subAccount.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount.$get(args, options))
}

export async function postCorporateSubAccount(
  args: InferRequestType<typeof client.corporate.subAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount.$post(args, options))
}

export async function postCorporateSubAccountIpAssociate(
  args: InferRequestType<typeof client.corporate.subAccount.ip.associate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount.ip.associate.$post(args, options))
}

export async function putCorporateSubAccountIpDissociate(
  args: InferRequestType<typeof client.corporate.subAccount.ip.dissociate.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount.ip.dissociate.$put(args, options))
}

export async function postCorporateSubAccountKey(
  args: InferRequestType<typeof client.corporate.subAccount.key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount.key.$post(args, options))
}

export async function postCorporateSubAccountSsoToken(
  args: InferRequestType<typeof client.corporate.subAccount.ssoToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount.ssoToken.$post(args, options))
}

export async function getCorporateSubAccountId(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount[':id'].$get(args, options))
}

export async function deleteCorporateSubAccountId(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount[':id'].$delete(args, options))
}

export async function putCorporateSubAccountIdApplicationsToggle(
  args: InferRequestType<
    (typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.corporate.subAccount[':id'].applications.toggle.$put(args, options),
  )
}

export async function putCorporateSubAccountIdPlan(
  args: InferRequestType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccount[':id'].plan.$put(args, options))
}

export async function putCorporateSubAccountsPlan(
  args: InferRequestType<typeof client.corporate.subAccounts.plan.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.subAccounts.plan.$put(args, options))
}

export async function postCorporateUserInvitationSend(
  args: InferRequestType<typeof client.corporate.user.invitation.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.user.invitation.send.$post(args, options))
}

export async function putCorporateUserInvitationActionEmail(
  args: InferRequestType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.corporate.user.invitation[':action'][':email'].$put(args, options),
  )
}

export async function deleteCorporateUserRevokeEmail(
  args: InferRequestType<(typeof client.corporate.user.revoke)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.user.revoke[':email'].$delete(args, options))
}

export async function getCorporateUserEmailPermissions(
  args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.user[':email'].permissions.$get(args, options))
}

export async function putCorporateUserEmailPermissions(
  args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.user[':email'].permissions.$put(args, options))
}

export async function getOrganizationActivities(
  args: InferRequestType<typeof client.organization.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.activities.$get(args, options))
}

export async function getOrganizationInvitedUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.organization.invited.users.$get(undefined, options))
}

export async function putOrganizationUserInvitationRevokeEmail(
  args: InferRequestType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.user.invitation.revoke[':email'].$put(args, options),
  )
}

export async function postOrganizationUserInvitationSend(
  args: InferRequestType<typeof client.organization.user.invitation.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.user.invitation.send.$post(args, options))
}

export async function putOrganizationUserInvitationActionEmail(
  args: InferRequestType<(typeof client.organization.user.invitation)[':action'][':email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization.user.invitation[':action'][':email'].$put(args, options),
  )
}

export async function postOrganizationUserUpdatePermissions(
  args: InferRequestType<typeof client.organization.user.update.permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.user.update.permissions.$post(args, options))
}

export async function getOrganizationUserEmailPermissions(
  args: InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.user[':email'].permissions.$get(args, options))
}

export async function getProcesses(
  args: InferRequestType<typeof client.processes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processes.$get(args, options))
}

export async function getProcessesProcessId(
  args: InferRequestType<(typeof client.processes)[':processId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.processes[':processId'].$get(args, options))
}

export async function getSenders(
  args: InferRequestType<typeof client.senders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.$get(args, options))
}

export async function postSenders(
  args: InferRequestType<typeof client.senders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.$post(args, options))
}

export async function getSendersDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.senders.domains.$get(undefined, options))
}

export async function postSendersDomains(
  args: InferRequestType<typeof client.senders.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.domains.$post(args, options))
}

export async function getSendersDomainsDomainName(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.domains[':domainName'].$get(args, options))
}

export async function deleteSendersDomainsDomainName(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.domains[':domainName'].$delete(args, options))
}

export async function putSendersDomainsDomainNameAuthenticate(
  args: InferRequestType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders.domains[':domainName'].authenticate.$put(args, options))
}

export async function getSendersIps(options?: ClientRequestOptions) {
  return await parseResponse(client.senders.ips.$get(undefined, options))
}

export async function putSendersSenderId(
  args: InferRequestType<(typeof client.senders)[':senderId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':senderId'].$put(args, options))
}

export async function deleteSendersSenderId(
  args: InferRequestType<(typeof client.senders)[':senderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':senderId'].$delete(args, options))
}

export async function getSendersSenderIdIps(
  args: InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':senderId'].ips.$get(args, options))
}

export async function putSendersSenderIdValidate(
  args: InferRequestType<(typeof client.senders)[':senderId']['validate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.senders[':senderId'].validate.$put(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function postWebhooksExport(
  args: InferRequestType<typeof client.webhooks.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.export.$post(args, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$get(args, options))
}

export async function putWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$put(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhookId'].$delete(args, options))
}

export async function getFeeds(
  args: InferRequestType<typeof client.feeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.$get(args, options))
}

export async function postFeeds(
  args: InferRequestType<typeof client.feeds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds.$post(args, options))
}

export async function getFeedsUuid(
  args: InferRequestType<(typeof client.feeds)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds[':uuid'].$get(args, options))
}

export async function putFeedsUuid(
  args: InferRequestType<(typeof client.feeds)[':uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds[':uuid'].$put(args, options))
}

export async function deleteFeedsUuid(
  args: InferRequestType<(typeof client.feeds)[':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feeds[':uuid'].$delete(args, options))
}

export async function postObjectsObjectTypeBatchUpsert(
  args: InferRequestType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_type'].batch.upsert.$post(args, options))
}

export async function getObjectsObjectTypeRecords(
  args: InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_type'].records.$get(args, options))
}

export async function postObjectsObjectTypeBatchDelete(
  args: InferRequestType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects[':object_type'].batch.delete.$post(args, options))
}

export async function getObjectsObjectTypeAssociatedRecords(
  args: InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.objects[':object_type']['associated-records'].$get(args, options),
  )
}

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
}

export async function getContactsAttributes(options?: ClientRequestOptions) {
  return await parseResponse(client.contacts.attributes.$get(undefined, options))
}

export async function putContactsAttributesAttributeCategoryAttributeName(
  args: InferRequestType<
    (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts.attributes[':attributeCategory'][':attributeName'].$put(args, options),
  )
}

export async function postContactsAttributesAttributeCategoryAttributeName(
  args: InferRequestType<
    (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts.attributes[':attributeCategory'][':attributeName'].$post(args, options),
  )
}

export async function deleteContactsAttributesAttributeCategoryAttributeName(
  args: InferRequestType<
    (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts.attributes[':attributeCategory'][':attributeName'].$delete(args, options),
  )
}

export async function deleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOption(
  args: InferRequestType<
    (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts.attributes[':attributeType'][':multipleChoiceAttribute'][
      ':multipleChoiceAttributeOption'
    ].$delete(args, options),
  )
}

export async function postContactsBatch(
  args: InferRequestType<typeof client.contacts.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.batch.$post(args, options))
}

export async function postContactsDoubleOptinConfirmation(
  args: InferRequestType<typeof client.contacts.doubleOptinConfirmation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.doubleOptinConfirmation.$post(args, options))
}

export async function postContactsExport(
  args: InferRequestType<typeof client.contacts.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.export.$post(args, options))
}

export async function getContactsFolders(
  args: InferRequestType<typeof client.contacts.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.folders.$get(args, options))
}

export async function postContactsFolders(
  args: InferRequestType<typeof client.contacts.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.folders.$post(args, options))
}

export async function getContactsFoldersFolderId(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.folders[':folderId'].$get(args, options))
}

export async function putContactsFoldersFolderId(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.folders[':folderId'].$put(args, options))
}

export async function deleteContactsFoldersFolderId(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.folders[':folderId'].$delete(args, options))
}

export async function getContactsFoldersFolderIdLists(
  args: InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.folders[':folderId'].lists.$get(args, options))
}

export async function postContactsImport(
  args: InferRequestType<typeof client.contacts.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.import.$post(args, options))
}

export async function getContactsLists(
  args: InferRequestType<typeof client.contacts.lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists.$get(args, options))
}

export async function postContactsLists(
  args: InferRequestType<typeof client.contacts.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists.$post(args, options))
}

export async function getContactsListsListId(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists[':listId'].$get(args, options))
}

export async function putContactsListsListId(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists[':listId'].$put(args, options))
}

export async function deleteContactsListsListId(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists[':listId'].$delete(args, options))
}

export async function getContactsListsListIdContacts(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists[':listId'].contacts.$get(args, options))
}

export async function postContactsListsListIdContactsAdd(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists[':listId'].contacts.add.$post(args, options))
}

export async function postContactsListsListIdContactsRemove(
  args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.lists[':listId'].contacts.remove.$post(args, options))
}

export async function getContactsSegments(
  args: InferRequestType<typeof client.contacts.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.segments.$get(args, options))
}

export async function getContactsConsentGroups(
  args: InferRequestType<(typeof client.contacts)['consent-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts['consent-groups'].$get(args, options))
}

export async function postContactsConsentGroups(
  args: InferRequestType<(typeof client.contacts)['consent-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts['consent-groups'].$post(args, options))
}

export async function getContactsConsentGroupsId(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts['consent-groups'][':id'].$get(args, options))
}

export async function putContactsConsentGroupsId(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts['consent-groups'][':id'].$put(args, options))
}

export async function deleteContactsConsentGroupsId(
  args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts['consent-groups'][':id'].$delete(args, options))
}

export async function getContactsIdentifier(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':identifier'].$get(args, options))
}

export async function putContactsIdentifier(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':identifier'].$put(args, options))
}

export async function deleteContactsIdentifier(
  args: InferRequestType<(typeof client.contacts)[':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':identifier'].$delete(args, options))
}

export async function getContactsIdentifierCampaignStats(
  args: InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':identifier'].campaignStats.$get(args, options))
}

export async function postConversationsAgentOnlinePing(
  args: InferRequestType<typeof client.conversations.agentOnlinePing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.agentOnlinePing.$post(args, options))
}

export async function postConversationsMessages(
  args: InferRequestType<typeof client.conversations.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.messages.$post(args, options))
}

export async function getConversationsMessagesId(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.messages[':id'].$get(args, options))
}

export async function putConversationsMessagesId(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.messages[':id'].$put(args, options))
}

export async function deleteConversationsMessagesId(
  args: InferRequestType<(typeof client.conversations.messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.messages[':id'].$delete(args, options))
}

export async function postConversationsPushedMessages(
  args: InferRequestType<typeof client.conversations.pushedMessages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.pushedMessages.$post(args, options))
}

export async function getConversationsPushedMessagesId(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.pushedMessages[':id'].$get(args, options))
}

export async function putConversationsPushedMessagesId(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.pushedMessages[':id'].$put(args, options))
}

export async function deleteConversationsPushedMessagesId(
  args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.pushedMessages[':id'].$delete(args, options))
}

export async function putConversationsVisitorGroup(
  args: InferRequestType<typeof client.conversations.visitorGroup.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.visitorGroup.$put(args, options))
}

export async function getCategories(
  args: InferRequestType<typeof client.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$get(args, options))
}

export async function postCategories(
  args: InferRequestType<typeof client.categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$post(args, options))
}

export async function postCategoriesBatch(
  args: InferRequestType<typeof client.categories.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.batch.$post(args, options))
}

export async function getCategoriesId(
  args: InferRequestType<(typeof client.categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories[':id'].$get(args, options))
}

export async function getCouponCollections(
  args: InferRequestType<typeof client.couponCollections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.couponCollections.$get(args, options))
}

export async function postCouponCollections(
  args: InferRequestType<typeof client.couponCollections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.couponCollections.$post(args, options))
}

export async function getCouponCollectionsId(
  args: InferRequestType<(typeof client.couponCollections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.couponCollections[':id'].$get(args, options))
}

export async function patchCouponCollectionsId(
  args: InferRequestType<(typeof client.couponCollections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.couponCollections[':id'].$patch(args, options))
}

export async function postCoupons(
  args: InferRequestType<typeof client.coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.$post(args, options))
}

export async function postEcommerceActivate(options?: ClientRequestOptions) {
  return await parseResponse(client.ecommerce.activate.$post(undefined, options))
}

export async function getEcommerceAttributionMetrics(
  args: InferRequestType<typeof client.ecommerce.attribution.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.attribution.metrics.$get(args, options))
}

export async function getEcommerceAttributionMetricsConversionSourceConversionSourceId(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ecommerce.attribution.metrics[':conversionSource'][':conversionSourceId'].$get(
      args,
      options,
    ),
  )
}

export async function getEcommerceAttributionProductsConversionSourceConversionSourceId(
  args: InferRequestType<
    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ecommerce.attribution.products[':conversionSource'][':conversionSourceId'].$get(
      args,
      options,
    ),
  )
}

export async function getEcommerceConfigDisplayCurrency(options?: ClientRequestOptions) {
  return await parseResponse(client.ecommerce.config.displayCurrency.$get(undefined, options))
}

export async function postEcommerceConfigDisplayCurrency(
  args: InferRequestType<typeof client.ecommerce.config.displayCurrency.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerce.config.displayCurrency.$post(args, options))
}

export async function getOrders(
  args: InferRequestType<typeof client.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$get(args, options))
}

export async function postOrdersStatus(
  args: InferRequestType<typeof client.orders.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.status.$post(args, options))
}

export async function postOrdersStatusBatch(
  args: InferRequestType<typeof client.orders.status.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.status.batch.$post(args, options))
}

export async function postPaymentsRequests(
  args: InferRequestType<typeof client.payments.requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.requests.$post(args, options))
}

export async function getPaymentsRequestsId(
  args: InferRequestType<(typeof client.payments.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.requests[':id'].$get(args, options))
}

export async function deletePaymentsRequestsId(
  args: InferRequestType<(typeof client.payments.requests)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.requests[':id'].$delete(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function postProducts(
  args: InferRequestType<typeof client.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$post(args, options))
}

export async function postProductsBatch(
  args: InferRequestType<typeof client.products.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.batch.$post(args, options))
}

export async function getProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$get(args, options))
}

export async function postProductsIdAlertsType(
  args: InferRequestType<(typeof client.products)[':id']['alerts'][':type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].alerts[':type'].$post(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function postEvents(
  args: InferRequestType<typeof client.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$post(args, options))
}

export async function postEventsBatch(
  args: InferRequestType<typeof client.events.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.batch.$post(args, options))
}

export async function getInboundEvents(
  args: InferRequestType<typeof client.inbound.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound.events.$get(args, options))
}

export async function getInboundEventsUuid(
  args: InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound.events[':uuid'].$get(args, options))
}

export async function getInboundAttachmentsDownloadToken(
  args: InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inbound.attachments[':downloadToken'].$get(args, options))
}

export async function getLoyaltyBalanceProgramsPidActiveBalance(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['active-balance'].$get(args, options),
  )
}

export async function getLoyaltyBalanceProgramsPidBalanceDefinitions(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'].$get(args, options),
  )
}

export async function postLoyaltyBalanceProgramsPidBalanceDefinitions(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'].$post(args, options),
  )
}

export async function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdid(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$get(args, options),
  )
}

export async function putLoyaltyBalanceProgramsPidBalanceDefinitionsBdid(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$put(args, options),
  )
}

export async function deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdid(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$delete(args, options),
  )
}

export async function postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimits(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits.$post(
      args,
      options,
    ),
  )
}

export async function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[':blid'].$get(
      args,
      options,
    ),
  )
}

export async function putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[':blid'].$put(
      args,
      options,
    ),
  )
}

export async function deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[':blid'].$delete(
      args,
      options,
    ),
  )
}

export async function getLoyaltyBalanceProgramsPidContactBalances(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['contact-balances'].$get(args, options),
  )
}

export async function postLoyaltyBalanceProgramsPidCreateOrder(
  args: InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['create-order'].$post(args, options),
  )
}

export async function getLoyaltyBalanceProgramsPidSubscriptionsCidBalances(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$get(args, options),
  )
}

export async function postLoyaltyBalanceProgramsPidSubscriptionsCidBalances(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$post(args, options),
  )
}

export async function getLoyaltyBalanceProgramsPidTransactionHistory(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid']['transaction-history'].$get(args, options),
  )
}

export async function postLoyaltyBalanceProgramsPidTransactions(
  args: InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid'].transactions.$post(args, options),
  )
}

export async function postLoyaltyBalanceProgramsPidTransactionsTidCancel(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid'].transactions[':tid'].cancel.$post(args, options),
  )
}

export async function postLoyaltyBalanceProgramsPidTransactionsTidComplete(
  args: InferRequestType<
    (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.balance.programs[':pid'].transactions[':tid'].complete.$post(args, options),
  )
}

export async function getLoyaltyConfigPrograms(
  args: InferRequestType<typeof client.loyalty.config.programs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.config.programs.$get(args, options))
}

export async function postLoyaltyConfigPrograms(
  args: InferRequestType<typeof client.loyalty.config.programs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.config.programs.$post(args, options))
}

export async function getLoyaltyConfigProgramsPid(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.config.programs[':pid'].$get(args, options))
}

export async function putLoyaltyConfigProgramsPid(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.config.programs[':pid'].$put(args, options))
}

export async function deleteLoyaltyConfigProgramsPid(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.config.programs[':pid'].$delete(args, options))
}

export async function patchLoyaltyConfigProgramsPid(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.config.programs[':pid'].$patch(args, options))
}

export async function getLoyaltyConfigProgramsPidAccountInfo(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.config.programs[':pid']['account-info'].$get(args, options),
  )
}

export async function deleteLoyaltyConfigProgramsPidContactCid(
  args: InferRequestType<
    (typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.config.programs[':pid'].contact[':cid'].$delete(args, options),
  )
}

export async function postLoyaltyConfigProgramsPidPublish(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.config.programs[':pid'].publish.$post(args, options))
}

export async function postLoyaltyConfigProgramsPidSubscriptionMembers(
  args: InferRequestType<
    (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.config.programs[':pid']['subscription-members'].$post(args, options),
  )
}

export async function deleteLoyaltyConfigProgramsPidSubscriptionMembers(
  args: InferRequestType<
    (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.config.programs[':pid']['subscription-members'].$delete(args, options),
  )
}

export async function postLoyaltyConfigProgramsPidSubscriptions(
  args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.config.programs[':pid'].subscriptions.$post(args, options),
  )
}

export async function getLoyaltyOfferProgramsPidCodePoolsCpidCodesCount(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.offer.programs[':pid']['code-pools'][':cpid']['codes-count'].$get(args, options),
  )
}

export async function getLoyaltyOfferProgramsPidOffers(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.offer.programs[':pid'].offers.$get(args, options))
}

export async function postLoyaltyOfferProgramsPidOffers(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.offer.programs[':pid'].offers.$post(args, options))
}

export async function postLoyaltyOfferProgramsPidRewardsAttribute(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.offer.programs[':pid'].rewards.attribute.$post(args, options),
  )
}

export async function postLoyaltyOfferProgramsPidRewardsRedeem(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.offer.programs[':pid'].rewards.redeem.$post(args, options),
  )
}

export async function postLoyaltyOfferProgramsPidRewardsRedeemTidComplete(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.offer.programs[':pid'].rewards.redeem[':tid'].complete.$post(args, options),
  )
}

export async function deleteLoyaltyOfferProgramsPidRewardsRevoke(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.offer.programs[':pid'].rewards.revoke.$delete(args, options),
  )
}

export async function postLoyaltyOfferProgramsPidRewardsValidate(
  args: InferRequestType<
    (typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.offer.programs[':pid'].rewards.validate.$post(args, options),
  )
}

export async function getLoyaltyOfferProgramsPidRewardsRid(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.offer.programs[':pid'].rewards[':rid'].$get(args, options),
  )
}

export async function getLoyaltyOfferProgramsPidVouchers(
  args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.offer.programs[':pid'].vouchers.$get(args, options))
}

export async function postLoyaltyTierProgramsPidContactsCidTiersTid(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid'].contacts[':cid'].tiers[':tid'].$post(args, options),
  )
}

export async function getLoyaltyTierProgramsPidTierGroups(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid']['tier-groups'].$get(args, options),
  )
}

export async function postLoyaltyTierProgramsPidTierGroups(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid']['tier-groups'].$post(args, options),
  )
}

export async function getLoyaltyTierProgramsPidTierGroupsGid(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$get(args, options),
  )
}

export async function putLoyaltyTierProgramsPidTierGroupsGid(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$put(args, options),
  )
}

export async function deleteLoyaltyTierProgramsPidTierGroupsGid(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$delete(args, options),
  )
}

export async function postLoyaltyTierProgramsPidTierGroupsGidTiers(
  args: InferRequestType<
    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].tiers.$post(args, options),
  )
}

export async function getLoyaltyTierProgramsPidTiers(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.tier.programs[':pid'].tiers.$get(args, options))
}

export async function putLoyaltyTierProgramsPidTiersTid(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.loyalty.tier.programs[':pid'].tiers[':tid'].$put(args, options))
}

export async function deleteLoyaltyTierProgramsPidTiersTid(
  args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.loyalty.tier.programs[':pid'].tiers[':tid'].$delete(args, options),
  )
}

export async function getWalletPassesPassIdInstallUrlContactId(
  args: InferRequestType<
    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wallet.passes[':passId'].installUrl[':contactId'].$get(args, options),
  )
}

export async function postWalletPassesInstallationIdRedeem(
  args: InferRequestType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wallet.passes[':installationId'].redeem.$post(args, options))
}

export async function getEmailCampaigns(
  args: InferRequestType<typeof client.emailCampaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns.$get(args, options))
}

export async function postEmailCampaigns(
  args: InferRequestType<typeof client.emailCampaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns.$post(args, options))
}

export async function postEmailCampaignsImages(
  args: InferRequestType<typeof client.emailCampaigns.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns.images.$post(args, options))
}

export async function getEmailCampaignsCampaignId(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].$get(args, options))
}

export async function putEmailCampaignsCampaignId(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].$put(args, options))
}

export async function deleteEmailCampaignsCampaignId(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].$delete(args, options))
}

export async function getEmailCampaignsCampaignIdAbTestCampaignResult(
  args: InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.emailCampaigns[':campaignId'].abTestCampaignResult.$get(args, options),
  )
}

export async function postEmailCampaignsCampaignIdExportRecipients(
  args: InferRequestType<
    (typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.emailCampaigns[':campaignId'].exportRecipients.$post(args, options),
  )
}

export async function postEmailCampaignsCampaignIdSendNow(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].sendNow.$post(args, options))
}

export async function postEmailCampaignsCampaignIdSendReport(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].sendReport.$post(args, options))
}

export async function postEmailCampaignsCampaignIdSendTest(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].sendTest.$post(args, options))
}

export async function getEmailCampaignsCampaignIdSharedUrl(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].sharedUrl.$get(args, options))
}

export async function putEmailCampaignsCampaignIdStatus(
  args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emailCampaigns[':campaignId'].status.$put(args, options))
}

export async function getSmsCampaigns(
  args: InferRequestType<typeof client.smsCampaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns.$get(args, options))
}

export async function postSmsCampaigns(
  args: InferRequestType<typeof client.smsCampaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns.$post(args, options))
}

export async function getSmsCampaignsCampaignId(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns[':campaignId'].$get(args, options))
}

export async function putSmsCampaignsCampaignId(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns[':campaignId'].$put(args, options))
}

export async function deleteSmsCampaignsCampaignId(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns[':campaignId'].$delete(args, options))
}

export async function postSmsCampaignsCampaignIdExportRecipients(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.smsCampaigns[':campaignId'].exportRecipients.$post(args, options),
  )
}

export async function postSmsCampaignsCampaignIdSendNow(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns[':campaignId'].sendNow.$post(args, options))
}

export async function postSmsCampaignsCampaignIdSendReport(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns[':campaignId'].sendReport.$post(args, options))
}

export async function postSmsCampaignsCampaignIdSendTest(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns[':campaignId'].sendTest.$post(args, options))
}

export async function putSmsCampaignsCampaignIdStatus(
  args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smsCampaigns[':campaignId'].status.$put(args, options))
}

export async function getWhatsappCampaigns(
  args: InferRequestType<typeof client.whatsappCampaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsappCampaigns.$get(args, options))
}

export async function postWhatsappCampaigns(
  args: InferRequestType<typeof client.whatsappCampaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsappCampaigns.$post(args, options))
}

export async function getWhatsappCampaignsConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.whatsappCampaigns.config.$get(undefined, options))
}

export async function postWhatsappCampaignsTemplate(
  args: InferRequestType<typeof client.whatsappCampaigns.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsappCampaigns.template.$post(args, options))
}

export async function getWhatsappCampaignsTemplateList(
  args: InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsappCampaigns['template-list'].$get(args, options))
}

export async function postWhatsappCampaignsTemplateApprovalTemplateId(
  args: InferRequestType<
    (typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.whatsappCampaigns.template.approval[':templateId'].$post(args, options),
  )
}

export async function getWhatsappCampaignsCampaignId(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsappCampaigns[':campaignId'].$get(args, options))
}

export async function putWhatsappCampaignsCampaignId(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsappCampaigns[':campaignId'].$put(args, options))
}

export async function deleteWhatsappCampaignsCampaignId(
  args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsappCampaigns[':campaignId'].$delete(args, options))
}

export async function getCompanies(
  args: InferRequestType<typeof client.companies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.$get(args, options))
}

export async function postCompanies(
  args: InferRequestType<typeof client.companies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.$post(args, options))
}

export async function postCompaniesImport(
  args: InferRequestType<typeof client.companies.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.import.$post(args, options))
}

export async function patchCompaniesLinkUnlinkId(
  args: InferRequestType<(typeof client.companies)['link-unlink'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies['link-unlink'][':id'].$patch(args, options))
}

export async function getCompaniesId(
  args: InferRequestType<(typeof client.companies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':id'].$get(args, options))
}

export async function deleteCompaniesId(
  args: InferRequestType<(typeof client.companies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':id'].$delete(args, options))
}

export async function patchCompaniesId(
  args: InferRequestType<(typeof client.companies)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':id'].$patch(args, options))
}

export async function postCrmAttributes(
  args: InferRequestType<typeof client.crm.attributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.attributes.$post(args, options))
}

export async function deleteCrmAttributesId(
  args: InferRequestType<(typeof client.crm.attributes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.attributes[':id'].$delete(args, options))
}

export async function patchCrmAttributesId(
  args: InferRequestType<(typeof client.crm.attributes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.attributes[':id'].$patch(args, options))
}

export async function getCrmAttributesCompanies(options?: ClientRequestOptions) {
  return await parseResponse(client.crm.attributes.companies.$get(undefined, options))
}

export async function getCrmAttributesDeals(options?: ClientRequestOptions) {
  return await parseResponse(client.crm.attributes.deals.$get(undefined, options))
}

export async function getCrmDeals(
  args: InferRequestType<typeof client.crm.deals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.deals.$get(args, options))
}

export async function postCrmDeals(
  args: InferRequestType<typeof client.crm.deals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.deals.$post(args, options))
}

export async function postCrmDealsImport(
  args: InferRequestType<typeof client.crm.deals.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.deals.import.$post(args, options))
}

export async function patchCrmDealsLinkUnlinkId(
  args: InferRequestType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.deals['link-unlink'][':id'].$patch(args, options))
}

export async function getCrmDealsId(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.deals[':id'].$get(args, options))
}

export async function deleteCrmDealsId(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.deals[':id'].$delete(args, options))
}

export async function patchCrmDealsId(
  args: InferRequestType<(typeof client.crm.deals)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.deals[':id'].$patch(args, options))
}

export async function getCrmFiles(
  args: InferRequestType<typeof client.crm.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.files.$get(args, options))
}

export async function postCrmFiles(
  args: InferRequestType<typeof client.crm.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.files.$post(args, options))
}

export async function getCrmFilesId(
  args: InferRequestType<(typeof client.crm.files)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.files[':id'].$get(args, options))
}

export async function deleteCrmFilesId(
  args: InferRequestType<(typeof client.crm.files)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.files[':id'].$delete(args, options))
}

export async function getCrmFilesIdData(
  args: InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.files[':id'].data.$get(args, options))
}

export async function getCrmNotes(
  args: InferRequestType<typeof client.crm.notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes.$get(args, options))
}

export async function postCrmNotes(
  args: InferRequestType<typeof client.crm.notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes.$post(args, options))
}

export async function getCrmNotesId(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes[':id'].$get(args, options))
}

export async function deleteCrmNotesId(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes[':id'].$delete(args, options))
}

export async function patchCrmNotesId(
  args: InferRequestType<(typeof client.crm.notes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.notes[':id'].$patch(args, options))
}

export async function getCrmPipelineDetails(options?: ClientRequestOptions) {
  return await parseResponse(client.crm.pipeline.details.$get(undefined, options))
}

export async function getCrmPipelineDetailsAll(options?: ClientRequestOptions) {
  return await parseResponse(client.crm.pipeline.details.all.$get(undefined, options))
}

export async function getCrmPipelineDetailsPipelineID(
  args: InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.pipeline.details[':pipelineID'].$get(args, options))
}

export async function getCrmTasks(
  args: InferRequestType<typeof client.crm.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.tasks.$get(args, options))
}

export async function postCrmTasks(
  args: InferRequestType<typeof client.crm.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.tasks.$post(args, options))
}

export async function getCrmTasksId(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.tasks[':id'].$get(args, options))
}

export async function deleteCrmTasksId(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.tasks[':id'].$delete(args, options))
}

export async function patchCrmTasksId(
  args: InferRequestType<(typeof client.crm.tasks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.tasks[':id'].$patch(args, options))
}

export async function getCrmTasktypes(options?: ClientRequestOptions) {
  return await parseResponse(client.crm.tasktypes.$get(undefined, options))
}

export async function postWhatsappSendMessage(
  args: InferRequestType<typeof client.whatsapp.sendMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.sendMessage.$post(args, options))
}

export async function getWhatsappStatisticsEvents(
  args: InferRequestType<typeof client.whatsapp.statistics.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whatsapp.statistics.events.$get(args, options))
}

export async function getSmtpBlockedContacts(
  args: InferRequestType<typeof client.smtp.blockedContacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.blockedContacts.$get(args, options))
}

export async function deleteSmtpBlockedContactsEmail(
  args: InferRequestType<(typeof client.smtp.blockedContacts)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.blockedContacts[':email'].$delete(args, options))
}

export async function getSmtpBlockedDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.smtp.blockedDomains.$get(undefined, options))
}

export async function postSmtpBlockedDomains(
  args: InferRequestType<typeof client.smtp.blockedDomains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.blockedDomains.$post(args, options))
}

export async function deleteSmtpBlockedDomainsDomain(
  args: InferRequestType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.blockedDomains[':domain'].$delete(args, options))
}

export async function postSmtpDeleteHardbounces(
  args: InferRequestType<typeof client.smtp.deleteHardbounces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.deleteHardbounces.$post(args, options))
}

export async function postSmtpEmail(
  args: InferRequestType<typeof client.smtp.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.email.$post(args, options))
}

export async function deleteSmtpEmailIdentifier(
  args: InferRequestType<(typeof client.smtp.email)[':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.email[':identifier'].$delete(args, options))
}

export async function getSmtpEmailStatusIdentifier(
  args: InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.emailStatus[':identifier'].$get(args, options))
}

export async function getSmtpEmails(
  args: InferRequestType<typeof client.smtp.emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.emails.$get(args, options))
}

export async function getSmtpEmailsUuid(
  args: InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.emails[':uuid'].$get(args, options))
}

export async function deleteSmtpLogIdentifier(
  args: InferRequestType<(typeof client.smtp.log)[':identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.log[':identifier'].$delete(args, options))
}

export async function getSmtpStatisticsAggregatedReport(
  args: InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.statistics.aggregatedReport.$get(args, options))
}

export async function getSmtpStatisticsEvents(
  args: InferRequestType<typeof client.smtp.statistics.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.statistics.events.$get(args, options))
}

export async function getSmtpStatisticsReports(
  args: InferRequestType<typeof client.smtp.statistics.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.statistics.reports.$get(args, options))
}

export async function postSmtpTemplatePreview(
  args: InferRequestType<typeof client.smtp.template.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.template.preview.$post(args, options))
}

export async function getSmtpTemplates(
  args: InferRequestType<typeof client.smtp.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.templates.$get(args, options))
}

export async function postSmtpTemplates(
  args: InferRequestType<typeof client.smtp.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.templates.$post(args, options))
}

export async function getSmtpTemplatesTemplateId(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.templates[':templateId'].$get(args, options))
}

export async function putSmtpTemplatesTemplateId(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.templates[':templateId'].$put(args, options))
}

export async function deleteSmtpTemplatesTemplateId(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.templates[':templateId'].$delete(args, options))
}

export async function postSmtpTemplatesTemplateIdSendTest(
  args: InferRequestType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.smtp.templates[':templateId'].sendTest.$post(args, options))
}

export async function postTransactionalSMSSend(
  args: InferRequestType<typeof client.transactionalSMS.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionalSMS.send.$post(args, options))
}

export async function postTransactionalSMSSms(
  args: InferRequestType<typeof client.transactionalSMS.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionalSMS.sms.$post(args, options))
}

export async function getTransactionalSMSStatisticsAggregatedReport(
  args: InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactionalSMS.statistics.aggregatedReport.$get(args, options),
  )
}

export async function getTransactionalSMSStatisticsEvents(
  args: InferRequestType<typeof client.transactionalSMS.statistics.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionalSMS.statistics.events.$get(args, options))
}

export async function getTransactionalSMSStatisticsReports(
  args: InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionalSMS.statistics.reports.$get(args, options))
}

export async function getTransactionalSMSTemplates(
  args: InferRequestType<typeof client.transactionalSMS.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactionalSMS.templates.$get(args, options))
}
