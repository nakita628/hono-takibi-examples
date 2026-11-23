import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$get(args, options))
}

export async function deleteAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$delete(args, options))
}

export async function getAccountsAccountIdBilling(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].billing.$get(args, options))
}

export async function patchAccountsAccountIdBilling(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].billing.$patch(args, options))
}

export async function getAccountsAccountIdBillingInvoices(
  args: InferRequestType<(typeof client.accounts)[':accountId']['billing']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].billing.invoices.$get(args, options))
}

export async function getAccountsAccountIdBillingInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].billing.invoices[':invoiceId'].$get(args, options),
  )
}

export async function getAccountsAccountIdLockSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].lock_settings.$get(args, options))
}

export async function patchAccountsAccountIdLockSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['lock_settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].lock_settings.$patch(args, options))
}

export async function getAccountsAccountIdManagedDomains(
  args: InferRequestType<(typeof client.accounts)[':accountId']['managed_domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].managed_domains.$get(args, options))
}

export async function patchAccountsAccountIdOptions(
  args: InferRequestType<(typeof client.accounts)[':accountId']['options']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].options.$patch(args, options))
}

export async function putAccountsAccountIdOwner(
  args: InferRequestType<(typeof client.accounts)[':accountId']['owner']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].owner.$put(args, options))
}

export async function patchAccountsAccountIdPhoneSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['phone']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].phone.settings.$patch(args, options))
}

export async function postAccountsAccountIdPhoneSetup(
  args: InferRequestType<(typeof client.accounts)[':accountId']['phone']['setup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].phone.setup.$post(args, options))
}

export async function postAccountsAccountIdPhoneSipTrunkTrunks(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].phone.sip_trunk.trunks.$post(args, options),
  )
}

export async function patchAccountsAccountIdPhoneSipTrunkTrunksSipTrunkId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['phone']['sip_trunk']['trunks'][':sipTrunkId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].phone.sip_trunk.trunks[':sipTrunkId'].$patch(args, options),
  )
}

export async function getAccountsAccountIdPlans(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].plans.$get(args, options))
}

export async function postAccountsAccountIdPlans(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].plans.$post(args, options))
}

export async function putAccountsAccountIdPlansAddons(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].plans.addons.$put(args, options))
}

export async function postAccountsAccountIdPlansAddons(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['addons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].plans.addons.$post(args, options))
}

export async function patchAccountsAccountIdPlansAddonsStatus(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['plans']['addons']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].plans.addons.status.$patch(args, options),
  )
}

export async function putAccountsAccountIdPlansBase(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['base']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].plans.base.$put(args, options))
}

export async function patchAccountsAccountIdPlansBaseStatus(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['plans']['base']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].plans.base.status.$patch(args, options))
}

export async function getAccountsAccountIdPlansUsage(
  args: InferRequestType<(typeof client.accounts)[':accountId']['plans']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].plans.usage.$get(args, options))
}

export async function getAccountsAccountIdRecordings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].recordings.$get(args, options))
}

export async function getAccountsAccountIdSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].settings.$get(args, options))
}

export async function patchAccountsAccountIdSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].settings.$patch(args, options))
}

export async function postAccountsAccountIdSettingsVirtualBackgrounds(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].settings.virtual_backgrounds.$post(args, options),
  )
}

export async function deleteAccountsAccountIdSettingsVirtualBackgrounds(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['settings']['virtual_backgrounds']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].settings.virtual_backgrounds.$delete(args, options),
  )
}

export async function getAccountsAccountIdSipTrunkCalloutCountries(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].sip_trunk.callout_countries.$get(args, options),
  )
}

export async function postAccountsAccountIdSipTrunkCalloutCountries(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].sip_trunk.callout_countries.$post(args, options),
  )
}

export async function deleteAccountsAccountIdSipTrunkCalloutCountriesCountryId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['callout_countries'][':countryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].sip_trunk.callout_countries[':countryId'].$delete(args, options),
  )
}

export async function getAccountsAccountIdSipTrunkInternalNumbers(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].sip_trunk.internal_numbers.$get(args, options),
  )
}

export async function postAccountsAccountIdSipTrunkInternalNumbers(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].sip_trunk.internal_numbers.$post(args, options),
  )
}

export async function deleteAccountsAccountIdSipTrunkInternalNumbersNumberId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['internal_numbers'][':numberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].sip_trunk.internal_numbers[':numberId'].$delete(args, options),
  )
}

export async function postAccountsAccountIdSipTrunkNumbers(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].sip_trunk.numbers.$post(args, options))
}

export async function deleteAccountsAccountIdSipTrunkNumbers(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['numbers']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].sip_trunk.numbers.$delete(args, options))
}

export async function patchAccountsAccountIdSipTrunkSettings(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].sip_trunk.settings.$patch(args, options))
}

export async function getAccountsAccountIdSipTrunkTrunks(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].sip_trunk.trunks.$get(args, options))
}

export async function postAccountsAccountIdSipTrunkTrunks(
  args: InferRequestType<(typeof client.accounts)[':accountId']['sip_trunk']['trunks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].sip_trunk.trunks.$post(args, options))
}

export async function deleteAccountsAccountIdSipTrunkTrunksTrunkId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['sip_trunk']['trunks'][':trunkId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].sip_trunk.trunks[':trunkId'].$delete(args, options),
  )
}

export async function getAccountsAccountIdTrustedDomains(
  args: InferRequestType<(typeof client.accounts)[':accountId']['trusted_domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].trusted_domains.$get(args, options))
}

export async function putAccountsAccountIdUsersUserIdAccount(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['users'][':userId']['account']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].users[':userId'].account.$put(args, options),
  )
}

export async function getApiDownloadBillingInvoicesInvoiceId(
  args: InferRequestType<(typeof client.api.download.billing.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.download.billing.invoices[':invoiceId'].$get(args, options))
}

export async function getArchiveFiles(
  args: InferRequestType<typeof client.archive_files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archive_files.$get(args, options))
}

export async function getChatChannelsChannelId(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.channels[':channelId'].$get(args, options))
}

export async function deleteChatChannelsChannelId(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.channels[':channelId'].$delete(args, options))
}

export async function patchChatChannelsChannelId(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.channels[':channelId'].$patch(args, options))
}

export async function postChatChannelsChannelIdMembersMe(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.channels[':channelId'].members.me.$post(args, options))
}

export async function deleteChatChannelsChannelIdMembersMe(
  args: InferRequestType<(typeof client.chat.channels)[':channelId']['members']['me']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.channels[':channelId'].members.me.$delete(args, options))
}

export async function deleteChatChannelsChannelIdMembersMemberId(
  args: InferRequestType<
    (typeof client.chat.channels)[':channelId']['members'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.channels[':channelId'].members[':memberId'].$delete(args, options),
  )
}

export async function getChatUsersMeContacts(
  args: InferRequestType<typeof client.chat.users.me.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.users.me.contacts.$get(args, options))
}

export async function getChatUsersMeContactsContactId(
  args: InferRequestType<(typeof client.chat.users.me.contacts)[':contactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.users.me.contacts[':contactId'].$get(args, options))
}

export async function getChatUsersUserIdChannels(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.users[':userId'].channels.$get(args, options))
}

export async function postChatUsersUserIdChannels(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.users[':userId'].channels.$post(args, options))
}

export async function getChatUsersUserIdChannelsChannelId(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].channels[':channelId'].$get(args, options),
  )
}

export async function deleteChatUsersUserIdChannelsChannelId(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].channels[':channelId'].$delete(args, options),
  )
}

export async function patchChatUsersUserIdChannelsChannelId(
  args: InferRequestType<(typeof client.chat.users)[':userId']['channels'][':channelId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].channels[':channelId'].$patch(args, options),
  )
}

export async function getChatUsersUserIdChannelsChannelIdMembers(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].channels[':channelId'].members.$get(args, options),
  )
}

export async function postChatUsersUserIdChannelsChannelIdMembers(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].channels[':channelId'].members.$post(args, options),
  )
}

export async function deleteChatUsersUserIdChannelsChannelIdMembersMemberId(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['channels'][':channelId']['members'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].channels[':channelId'].members[':memberId'].$delete(args, options),
  )
}

export async function getChatUsersUserIdMessages(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.users[':userId'].messages.$get(args, options))
}

export async function postChatUsersUserIdMessages(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.users[':userId'].messages.$post(args, options))
}

export async function putChatUsersUserIdMessagesMessageId(
  args: InferRequestType<(typeof client.chat.users)[':userId']['messages'][':messageId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].messages[':messageId'].$put(args, options),
  )
}

export async function deleteChatUsersUserIdMessagesMessageId(
  args: InferRequestType<
    (typeof client.chat.users)[':userId']['messages'][':messageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chat.users[':userId'].messages[':messageId'].$delete(args, options),
  )
}

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function getGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.$get(undefined, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function getGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$get(args, options))
}

export async function deleteGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$delete(args, options))
}

export async function patchGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$patch(args, options))
}

export async function getGroupsGroupIdLockSettings(
  args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].lock_settings.$get(args, options))
}

export async function patchGroupsGroupIdLockSettings(
  args: InferRequestType<(typeof client.groups)[':groupId']['lock_settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].lock_settings.$patch(args, options))
}

export async function getGroupsGroupIdMembers(
  args: InferRequestType<(typeof client.groups)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].members.$get(args, options))
}

export async function postGroupsGroupIdMembers(
  args: InferRequestType<(typeof client.groups)[':groupId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].members.$post(args, options))
}

export async function deleteGroupsGroupIdMembersMemberId(
  args: InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].members[':memberId'].$delete(args, options))
}

export async function patchGroupsGroupIdMembersMemberId(
  args: InferRequestType<(typeof client.groups)[':groupId']['members'][':memberId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].members[':memberId'].$patch(args, options))
}

export async function getGroupsGroupIdSettings(
  args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].settings.$get(args, options))
}

export async function patchGroupsGroupIdSettings(
  args: InferRequestType<(typeof client.groups)[':groupId']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].settings.$patch(args, options))
}

export async function postGroupsGroupIdSettingsVirtualBackgrounds(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].settings.virtual_backgrounds.$post(args, options),
  )
}

export async function deleteGroupsGroupIdSettingsVirtualBackgrounds(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['settings']['virtual_backgrounds']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].settings.virtual_backgrounds.$delete(args, options),
  )
}

export async function getH323Devices(
  args: InferRequestType<typeof client.h323.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.h323.devices.$get(args, options))
}

export async function postH323Devices(
  args: InferRequestType<typeof client.h323.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.h323.devices.$post(args, options))
}

export async function deleteH323DevicesDeviceId(
  args: InferRequestType<(typeof client.h323.devices)[':deviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.h323.devices[':deviceId'].$delete(args, options))
}

export async function patchH323DevicesDeviceId(
  args: InferRequestType<(typeof client.h323.devices)[':deviceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.h323.devices[':deviceId'].$patch(args, options))
}

export async function postImChatMessages(
  args: InferRequestType<typeof client.im.chat.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.chat.messages.$post(args, options))
}

export async function putImChatMessagesMessageId(
  args: InferRequestType<(typeof client.im.chat.messages)[':message_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.chat.messages[':message_id'].$put(args, options))
}

export async function deleteImChatMessagesMessageId(
  args: InferRequestType<(typeof client.im.chat.messages)[':message_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.chat.messages[':message_id'].$delete(args, options))
}

export async function getImChatSessions(
  args: InferRequestType<typeof client.im.chat.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.chat.sessions.$get(args, options))
}

export async function getImChatSessionsSessionId(
  args: InferRequestType<(typeof client.im.chat.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.chat.sessions[':sessionId'].$get(args, options))
}

export async function getImGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.im.groups.$get(undefined, options))
}

export async function postImGroups(
  args: InferRequestType<typeof client.im.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.groups.$post(args, options))
}

export async function getImGroupsGroupId(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.groups[':groupId'].$get(args, options))
}

export async function deleteImGroupsGroupId(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.groups[':groupId'].$delete(args, options))
}

export async function patchImGroupsGroupId(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.groups[':groupId'].$patch(args, options))
}

export async function getImGroupsGroupIdMembers(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.groups[':groupId'].members.$get(args, options))
}

export async function postImGroupsGroupIdMembers(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.groups[':groupId'].members.$post(args, options))
}

export async function deleteImGroupsGroupIdMembersMemberId(
  args: InferRequestType<(typeof client.im.groups)[':groupId']['members'][':memberId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.im.groups[':groupId'].members[':memberId'].$delete(args, options),
  )
}

export async function postImUsersMeChatMessages(
  args: InferRequestType<typeof client.im.users.me.chat.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.users.me.chat.messages.$post(args, options))
}

export async function getImUsersUserIdChatMessages(
  args: InferRequestType<(typeof client.im.users)[':userId']['chat']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.im.users[':userId'].chat.messages.$get(args, options))
}

export async function patchLiveMeetingsMeetingIdEvents(
  args: InferRequestType<(typeof client.live_meetings)[':meetingId']['events']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.live_meetings[':meetingId'].events.$patch(args, options))
}

export async function getMeetingsMeetingId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].$get(args, options))
}

export async function deleteMeetingsMeetingId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].$delete(args, options))
}

export async function patchMeetingsMeetingId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].$patch(args, options))
}

export async function postMeetingsMeetingIdBatchPolls(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['batch_polls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].batch_polls.$post(args, options))
}

export async function getMeetingsMeetingIdInvitation(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['invitation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].invitation.$get(args, options))
}

export async function getMeetingsMeetingIdLivestream(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].livestream.$get(args, options))
}

export async function patchMeetingsMeetingIdLivestream(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].livestream.$patch(args, options))
}

export async function patchMeetingsMeetingIdLivestreamStatus(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['livestream']['status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].livestream.status.$patch(args, options))
}

export async function getMeetingsMeetingIdPolls(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].polls.$get(args, options))
}

export async function postMeetingsMeetingIdPolls(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].polls.$post(args, options))
}

export async function getMeetingsMeetingIdPollsPollId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].polls[':pollId'].$get(args, options))
}

export async function putMeetingsMeetingIdPollsPollId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].polls[':pollId'].$put(args, options))
}

export async function deleteMeetingsMeetingIdPollsPollId(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['polls'][':pollId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].polls[':pollId'].$delete(args, options))
}

export async function getMeetingsMeetingIdRecordings(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].recordings.$get(args, options))
}

export async function deleteMeetingsMeetingIdRecordings(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].recordings.$delete(args, options))
}

export async function getMeetingsMeetingIdRecordingsRegistrants(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings.registrants.$get(args, options),
  )
}

export async function postMeetingsMeetingIdRecordingsRegistrants(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings.registrants.$post(args, options),
  )
}

export async function getMeetingsMeetingIdRecordingsRegistrantsQuestions(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings.registrants.questions.$get(args, options),
  )
}

export async function patchMeetingsMeetingIdRecordingsRegistrantsQuestions(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['questions']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings.registrants.questions.$patch(args, options),
  )
}

export async function putMeetingsMeetingIdRecordingsRegistrantsStatus(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['registrants']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings.registrants.status.$put(args, options),
  )
}

export async function getMeetingsMeetingIdRecordingsSettings(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].recordings.settings.$get(args, options))
}

export async function patchMeetingsMeetingIdRecordingsSettings(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings.settings.$patch(args, options),
  )
}

export async function putMeetingsMeetingIdRecordingsStatus(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['recordings']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].recordings.status.$put(args, options))
}

export async function deleteMeetingsMeetingIdRecordingsRecordingId(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings[':recordingId'].$delete(args, options),
  )
}

export async function putMeetingsMeetingIdRecordingsRecordingIdStatus(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['recordings'][':recordingId']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].recordings[':recordingId'].status.$put(args, options),
  )
}

export async function getMeetingsMeetingIdRegistrants(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].registrants.$get(args, options))
}

export async function postMeetingsMeetingIdRegistrants(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].registrants.$post(args, options))
}

export async function getMeetingsMeetingIdRegistrantsQuestions(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].registrants.questions.$get(args, options),
  )
}

export async function patchMeetingsMeetingIdRegistrantsQuestions(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants']['questions']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].registrants.questions.$patch(args, options),
  )
}

export async function putMeetingsMeetingIdRegistrantsStatus(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['registrants']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].registrants.status.$put(args, options))
}

export async function deleteMeetingsMeetingIdRegistrantsRegistrantId(
  args: InferRequestType<
    (typeof client.meetings)[':meetingId']['registrants'][':registrantId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meetings[':meetingId'].registrants[':registrantId'].$delete(args, options),
  )
}

export async function putMeetingsMeetingIdStatus(
  args: InferRequestType<(typeof client.meetings)[':meetingId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meetings[':meetingId'].status.$put(args, options))
}

export async function getMetricsClientFeedback(
  args: InferRequestType<typeof client.metrics.client.feedback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.client.feedback.$get(args, options))
}

export async function getMetricsClientFeedbackFeedbackId(
  args: InferRequestType<(typeof client.metrics.client.feedback)[':feedbackId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.client.feedback[':feedbackId'].$get(args, options))
}

export async function getMetricsClientSatisfaction(
  args: InferRequestType<typeof client.metrics.client.satisfaction.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.client.satisfaction.$get(args, options))
}

export async function getMetricsCrc(
  args: InferRequestType<typeof client.metrics.crc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.crc.$get(args, options))
}

export async function getMetricsIm(
  args: InferRequestType<typeof client.metrics.im.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.im.$get(args, options))
}

export async function getMetricsIssuesZoomrooms(
  args: InferRequestType<typeof client.metrics.issues.zoomrooms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.issues.zoomrooms.$get(args, options))
}

export async function getMetricsIssuesZoomroomsZoomroomId(
  args: InferRequestType<(typeof client.metrics.issues.zoomrooms)[':zoomroomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.issues.zoomrooms[':zoomroomId'].$get(args, options))
}

export async function getMetricsMeetings(
  args: InferRequestType<typeof client.metrics.meetings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.meetings.$get(args, options))
}

export async function getMetricsMeetingsMeetingId(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.meetings[':meetingId'].$get(args, options))
}

export async function getMetricsMeetingsMeetingIdParticipants(
  args: InferRequestType<(typeof client.metrics.meetings)[':meetingId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.meetings[':meetingId'].participants.$get(args, options))
}

export async function getMetricsMeetingsMeetingIdParticipantsQos(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.meetings[':meetingId'].participants.qos.$get(args, options),
  )
}

export async function getMetricsMeetingsMeetingIdParticipantsSatisfaction(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['satisfaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.meetings[':meetingId'].participants.satisfaction.$get(args, options),
  )
}

export async function getMetricsMeetingsMeetingIdParticipantsSharing(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants']['sharing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.meetings[':meetingId'].participants.sharing.$get(args, options),
  )
}

export async function getMetricsMeetingsMeetingIdParticipantsParticipantIdQos(
  args: InferRequestType<
    (typeof client.metrics.meetings)[':meetingId']['participants'][':participantId']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.meetings[':meetingId'].participants[':participantId'].qos.$get(args, options),
  )
}

export async function getMetricsWebinars(
  args: InferRequestType<typeof client.metrics.webinars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.webinars.$get(args, options))
}

export async function getMetricsWebinarsWebinarId(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.webinars[':webinarId'].$get(args, options))
}

export async function getMetricsWebinarsWebinarIdParticipants(
  args: InferRequestType<(typeof client.metrics.webinars)[':webinarId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.webinars[':webinarId'].participants.$get(args, options))
}

export async function getMetricsWebinarsWebinarIdParticipantsQos(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.webinars[':webinarId'].participants.qos.$get(args, options),
  )
}

export async function getMetricsWebinarsWebinarIdParticipantsSatisfaction(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['satisfaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.webinars[':webinarId'].participants.satisfaction.$get(args, options),
  )
}

export async function getMetricsWebinarsWebinarIdParticipantsSharing(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants']['sharing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.webinars[':webinarId'].participants.sharing.$get(args, options),
  )
}

export async function getMetricsWebinarsWebinarIdParticipantsParticipantIdQos(
  args: InferRequestType<
    (typeof client.metrics.webinars)[':webinarId']['participants'][':participantId']['qos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metrics.webinars[':webinarId'].participants[':participantId'].qos.$get(args, options),
  )
}

export async function getMetricsZoomrooms(
  args: InferRequestType<typeof client.metrics.zoomrooms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.zoomrooms.$get(args, options))
}

export async function getMetricsZoomroomsIssues(
  args: InferRequestType<typeof client.metrics.zoomrooms.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.zoomrooms.issues.$get(args, options))
}

export async function getMetricsZoomroomsZoomroomId(
  args: InferRequestType<(typeof client.metrics.zoomrooms)[':zoomroomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.zoomrooms[':zoomroomId'].$get(args, options))
}

export async function getPastMeetingsMeetingIdFiles(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_meetings[':meetingId'].files.$get(args, options))
}

export async function getPastMeetingsMeetingIdInstances(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_meetings[':meetingId'].instances.$get(args, options))
}

export async function getPastMeetingsMeetingIdPolls(
  args: InferRequestType<(typeof client.past_meetings)[':meetingId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_meetings[':meetingId'].polls.$get(args, options))
}

export async function getPastMeetingsMeetingUUID(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_meetings[':meetingUUID'].$get(args, options))
}

export async function getPastMeetingsMeetingUUIDParticipants(
  args: InferRequestType<(typeof client.past_meetings)[':meetingUUID']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_meetings[':meetingUUID'].participants.$get(args, options))
}

export async function getPastWebinarsWebinarUUIDAbsentees(
  args: InferRequestType<(typeof client.past_webinars)[':WebinarUUID']['absentees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_webinars[':WebinarUUID'].absentees.$get(args, options))
}

export async function getPastWebinarsWebinarIdFiles(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_webinars[':webinarId'].files.$get(args, options))
}

export async function getPastWebinarsWebinarIdInstances(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_webinars[':webinarId'].instances.$get(args, options))
}

export async function getPastWebinarsWebinarIdParticipants(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_webinars[':webinarId'].participants.$get(args, options))
}

export async function getPastWebinarsWebinarIdPolls(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_webinars[':webinarId'].polls.$get(args, options))
}

export async function getPastWebinarsWebinarIdQa(
  args: InferRequestType<(typeof client.past_webinars)[':webinarId']['qa']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.past_webinars[':webinarId'].qa.$get(args, options))
}

export async function postPhoneAutoReceptionists(
  args: InferRequestType<typeof client.phone.auto_receptionists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.auto_receptionists.$post(args, options))
}

export async function patchPhoneAutoReceptionistsAutoReceptionistId(
  args: InferRequestType<(typeof client.phone.auto_receptionists)[':autoReceptionistId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.auto_receptionists[':autoReceptionistId'].$patch(args, options),
  )
}

export async function postPhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers.$post(args, options),
  )
}

export async function deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers.$delete(args, options),
  )
}

export async function deletePhoneAutoReceptionistsAutoReceptionistIdPhoneNumbersPhoneNumberId(
  args: InferRequestType<
    (typeof client.phone.auto_receptionists)[':autoReceptionistId']['phone_numbers'][':phoneNumberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.auto_receptionists[':autoReceptionistId'].phone_numbers[':phoneNumberId'].$delete(
      args,
      options,
    ),
  )
}

export async function getPhoneBlockedList(
  args: InferRequestType<typeof client.phone.blocked_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.blocked_list.$get(args, options))
}

export async function postPhoneBlockedList(
  args: InferRequestType<typeof client.phone.blocked_list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.blocked_list.$post(args, options))
}

export async function getPhoneBlockedListBlockedListId(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.blocked_list[':blockedListId'].$get(args, options))
}

export async function deletePhoneBlockedListBlockedListId(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.blocked_list[':blockedListId'].$delete(args, options))
}

export async function patchPhoneBlockedListBlockedListId(
  args: InferRequestType<(typeof client.phone.blocked_list)[':blockedListId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.blocked_list[':blockedListId'].$patch(args, options))
}

export async function postPhoneByocNumbers(
  args: InferRequestType<typeof client.phone.byoc_numbers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.byoc_numbers.$post(args, options))
}

export async function getPhoneCallLogs(
  args: InferRequestType<typeof client.phone.call_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_logs.$get(args, options))
}

export async function getPhoneCallQueues(
  args: InferRequestType<typeof client.phone.call_queues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_queues.$get(args, options))
}

export async function postPhoneCallQueues(
  args: InferRequestType<typeof client.phone.call_queues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_queues.$post(args, options))
}

export async function getPhoneCallQueuesCallQueueId(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_queues[':callQueueId'].$get(args, options))
}

export async function deletePhoneCallQueuesCallQueueId(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_queues[':callQueueId'].$delete(args, options))
}

export async function patchPhoneCallQueuesCallQueueId(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_queues[':callQueueId'].$patch(args, options))
}

export async function putPhoneCallQueuesCallQueueIdManager(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['manager']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_queues[':callQueueId'].manager.$put(args, options))
}

export async function postPhoneCallQueuesCallQueueIdMembers(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.call_queues[':callQueueId'].members.$post(args, options))
}

export async function deletePhoneCallQueuesCallQueueIdMembers(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['members']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.call_queues[':callQueueId'].members.$delete(args, options),
  )
}

export async function deletePhoneCallQueuesCallQueueIdMembersMemberId(
  args: InferRequestType<
    (typeof client.phone.call_queues)[':callQueueId']['members'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.call_queues[':callQueueId'].members[':memberId'].$delete(args, options),
  )
}

export async function postPhoneCallQueuesCallQueueIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.call_queues[':callQueueId'].phone_numbers.$post(args, options),
  )
}

export async function deletePhoneCallQueuesCallQueueIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.phone.call_queues)[':callQueueId']['phone_numbers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.call_queues[':callQueueId'].phone_numbers.$delete(args, options),
  )
}

export async function deletePhoneCallQueuesCallQueueIdPhoneNumbersPhoneNumberId(
  args: InferRequestType<
    (typeof client.phone.call_queues)[':callQueueId']['phone_numbers'][':phoneNumberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.call_queues[':callQueueId'].phone_numbers[':phoneNumberId'].$delete(args, options),
  )
}

export async function getPhoneCallQueuesCallQueueIdRecordings(
  args: InferRequestType<(typeof client.phone.call_queues)[':callQueueId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.call_queues[':callQueueId'].recordings.$get(args, options),
  )
}

export async function getPhoneCallingPlans(options?: ClientRequestOptions) {
  return await parseResponse(client.phone.calling_plans.$get(undefined, options))
}

export async function getPhoneCommonAreaPhones(
  args: InferRequestType<typeof client.phone.common_area_phones.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.common_area_phones.$get(args, options))
}

export async function postPhoneCommonAreaPhones(
  args: InferRequestType<typeof client.phone.common_area_phones.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.common_area_phones.$post(args, options))
}

export async function getPhoneCommonAreaPhonesCommonAreaPhoneId(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.common_area_phones[':commonAreaPhoneId'].$get(args, options),
  )
}

export async function deletePhoneCommonAreaPhonesCommonAreaPhoneId(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.common_area_phones[':commonAreaPhoneId'].$delete(args, options),
  )
}

export async function patchPhoneCommonAreaPhonesCommonAreaPhoneId(
  args: InferRequestType<(typeof client.phone.common_area_phones)[':commonAreaPhoneId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.common_area_phones[':commonAreaPhoneId'].$patch(args, options),
  )
}

export async function putPhoneCompanyNumber(
  args: InferRequestType<typeof client.phone.company_number.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.company_number.$put(args, options))
}

export async function getPhoneDevices(
  args: InferRequestType<typeof client.phone.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.devices.$get(args, options))
}

export async function postPhoneDevices(
  args: InferRequestType<typeof client.phone.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.devices.$post(args, options))
}

export async function getPhoneDevicesDeviceId(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.devices[':deviceId'].$get(args, options))
}

export async function deletePhoneDevicesDeviceId(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.devices[':deviceId'].$delete(args, options))
}

export async function patchPhoneDevicesDeviceId(
  args: InferRequestType<(typeof client.phone.devices)[':deviceId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.devices[':deviceId'].$patch(args, options))
}

export async function getPhoneMetricsCallLogs(
  args: InferRequestType<typeof client.phone.metrics.call_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.metrics.call_logs.$get(args, options))
}

export async function getPhoneMetricsCallLogsCallIdQos(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':callId']['qos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.metrics.call_logs[':callId'].qos.$get(args, options))
}

export async function getPhoneMetricsCallLogsCallId(
  args: InferRequestType<(typeof client.phone.metrics.call_logs)[':call_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.metrics.call_logs[':call_id'].$get(args, options))
}

export async function getPhoneNumbers(
  args: InferRequestType<typeof client.phone.numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.numbers.$get(args, options))
}

export async function getPhoneNumbersNumberId(
  args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.numbers[':numberId'].$get(args, options))
}

export async function patchPhoneNumbersNumberId(
  args: InferRequestType<(typeof client.phone.numbers)[':numberId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.numbers[':numberId'].$patch(args, options))
}

export async function getPhoneRecordings(
  args: InferRequestType<typeof client.phone.recordings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.recordings.$get(args, options))
}

export async function getPhoneReportsOperationlogs(
  args: InferRequestType<typeof client.phone.reports.operationlogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.reports.operationlogs.$get(args, options))
}

export async function getPhoneSettingTemplates(
  args: InferRequestType<typeof client.phone.setting_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.setting_templates.$get(args, options))
}

export async function postPhoneSettingTemplates(
  args: InferRequestType<typeof client.phone.setting_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.setting_templates.$post(args, options))
}

export async function getPhoneSettingTemplatesTemplateId(
  args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.setting_templates[':templateId'].$get(args, options))
}

export async function patchPhoneSettingTemplatesTemplateId(
  args: InferRequestType<(typeof client.phone.setting_templates)[':templateId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.setting_templates[':templateId'].$patch(args, options))
}

export async function getPhoneSharedLineGroups(
  args: InferRequestType<typeof client.phone.shared_line_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.shared_line_groups.$get(args, options))
}

export async function postPhoneSharedLineGroups(
  args: InferRequestType<typeof client.phone.shared_line_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.shared_line_groups.$post(args, options))
}

export async function getPhoneSharedLineGroupsSharedLineGroupId(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].$get(args, options),
  )
}

export async function deletePhoneSharedLineGroupsSharedLineGroupId(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].$delete(args, options),
  )
}

export async function patchPhoneSharedLineGroupsSharedLineGroupId(
  args: InferRequestType<(typeof client.phone.shared_line_groups)[':sharedLineGroupId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].$patch(args, options),
  )
}

export async function postPhoneSharedLineGroupsSharedLineGroupIdMembers(
  args: InferRequestType<
    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].members.$post(args, options),
  )
}

export async function deletePhoneSharedLineGroupsSharedLineGroupIdMembers(
  args: InferRequestType<
    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].members.$delete(args, options),
  )
}

export async function deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberId(
  args: InferRequestType<
    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['members'][':memberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].members[':memberId'].$delete(
      args,
      options,
    ),
  )
}

export async function postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbers(
  args: InferRequestType<
    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].phone_numbers.$post(args, options),
  )
}

export async function deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberId(
  args: InferRequestType<
    (typeof client.phone.shared_line_groups)[':sharedLineGroupId']['phone_numbers'][':phoneNumberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.shared_line_groups[':sharedLineGroupId'].phone_numbers[':phoneNumberId'].$delete(
      args,
      options,
    ),
  )
}

export async function getPhoneSipTrunkTrunks(
  args: InferRequestType<typeof client.phone.sip_trunk.trunks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.sip_trunk.trunks.$get(args, options))
}

export async function getPhoneSites(
  args: InferRequestType<typeof client.phone.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.sites.$get(args, options))
}

export async function postPhoneSites(
  args: InferRequestType<typeof client.phone.sites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.sites.$post(args, options))
}

export async function getPhoneSitesSiteId(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.sites[':siteId'].$get(args, options))
}

export async function deletePhoneSitesSiteId(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.sites[':siteId'].$delete(args, options))
}

export async function patchPhoneSitesSiteId(
  args: InferRequestType<(typeof client.phone.sites)[':siteId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.sites[':siteId'].$patch(args, options))
}

export async function getPhoneUsers(
  args: InferRequestType<typeof client.phone.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users.$get(args, options))
}

export async function getPhoneUsersUserId(
  args: InferRequestType<(typeof client.phone.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].$get(args, options))
}

export async function patchPhoneUsersUserId(
  args: InferRequestType<(typeof client.phone.users)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].$patch(args, options))
}

export async function getPhoneUsersUserIdCallLogs(
  args: InferRequestType<(typeof client.phone.users)[':userId']['call_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].call_logs.$get(args, options))
}

export async function deletePhoneUsersUserIdCallLogsCallLogId(
  args: InferRequestType<
    (typeof client.phone.users)[':userId']['call_logs'][':callLogId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.users[':userId'].call_logs[':callLogId'].$delete(args, options),
  )
}

export async function postPhoneUsersUserIdCallingPlans(
  args: InferRequestType<(typeof client.phone.users)[':userId']['calling_plans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].calling_plans.$post(args, options))
}

export async function deletePhoneUsersUserIdCallingPlansType(
  args: InferRequestType<
    (typeof client.phone.users)[':userId']['calling_plans'][':type']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.users[':userId'].calling_plans[':type'].$delete(args, options),
  )
}

export async function postPhoneUsersUserIdPhoneNumbers(
  args: InferRequestType<(typeof client.phone.users)[':userId']['phone_numbers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].phone_numbers.$post(args, options))
}

export async function deletePhoneUsersUserIdPhoneNumbersPhoneNumberId(
  args: InferRequestType<
    (typeof client.phone.users)[':userId']['phone_numbers'][':phoneNumberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.users[':userId'].phone_numbers[':phoneNumberId'].$delete(args, options),
  )
}

export async function getPhoneUsersUserIdRecordings(
  args: InferRequestType<(typeof client.phone.users)[':userId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].recordings.$get(args, options))
}

export async function getPhoneUsersUserIdSettings(
  args: InferRequestType<(typeof client.phone.users)[':userId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].settings.$get(args, options))
}

export async function postPhoneUsersUserIdSettingsSettingType(
  args: InferRequestType<
    (typeof client.phone.users)[':userId']['settings'][':settingType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.users[':userId'].settings[':settingType'].$post(args, options),
  )
}

export async function deletePhoneUsersUserIdSettingsSettingType(
  args: InferRequestType<
    (typeof client.phone.users)[':userId']['settings'][':settingType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.users[':userId'].settings[':settingType'].$delete(args, options),
  )
}

export async function patchPhoneUsersUserIdSettingsSettingType(
  args: InferRequestType<
    (typeof client.phone.users)[':userId']['settings'][':settingType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.phone.users[':userId'].settings[':settingType'].$patch(args, options),
  )
}

export async function getPhoneUsersUserIdVoiceMails(
  args: InferRequestType<(typeof client.phone.users)[':userId']['voice_mails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.users[':userId'].voice_mails.$get(args, options))
}

export async function deletePhoneVoiceMailsVoicemailId(
  args: InferRequestType<(typeof client.phone.voice_mails)[':voicemailId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone.voice_mails[':voicemailId'].$delete(args, options))
}

export async function getReportActivities(
  args: InferRequestType<typeof client.report.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.activities.$get(args, options))
}

export async function getReportCloudRecording(
  args: InferRequestType<typeof client.report.cloud_recording.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.cloud_recording.$get(args, options))
}

export async function getReportDaily(
  args: InferRequestType<typeof client.report.daily.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.daily.$get(args, options))
}

export async function getReportMeetingsMeetingId(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.meetings[':meetingId'].$get(args, options))
}

export async function getReportMeetingsMeetingIdParticipants(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.meetings[':meetingId'].participants.$get(args, options))
}

export async function getReportMeetingsMeetingIdPolls(
  args: InferRequestType<(typeof client.report.meetings)[':meetingId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.meetings[':meetingId'].polls.$get(args, options))
}

export async function getReportOperationlogs(
  args: InferRequestType<typeof client.report.operationlogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.operationlogs.$get(args, options))
}

export async function getReportTelephone(
  args: InferRequestType<typeof client.report.telephone.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.telephone.$get(args, options))
}

export async function getReportUsers(
  args: InferRequestType<typeof client.report.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.users.$get(args, options))
}

export async function getReportUsersUserIdMeetings(
  args: InferRequestType<(typeof client.report.users)[':userId']['meetings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.users[':userId'].meetings.$get(args, options))
}

export async function getReportWebinarsWebinarId(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.webinars[':webinarId'].$get(args, options))
}

export async function getReportWebinarsWebinarIdParticipants(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['participants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.webinars[':webinarId'].participants.$get(args, options))
}

export async function getReportWebinarsWebinarIdPolls(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.webinars[':webinarId'].polls.$get(args, options))
}

export async function getReportWebinarsWebinarIdQa(
  args: InferRequestType<(typeof client.report.webinars)[':webinarId']['qa']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.webinars[':webinarId'].qa.$get(args, options))
}

export async function getRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.roles.$get(undefined, options))
}

export async function postRoles(
  args: InferRequestType<typeof client.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$post(args, options))
}

export async function getRolesRoleId(
  args: InferRequestType<(typeof client.roles)[':roleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':roleId'].$get(args, options))
}

export async function deleteRolesRoleId(
  args: InferRequestType<(typeof client.roles)[':roleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':roleId'].$delete(args, options))
}

export async function patchRolesRoleId(
  args: InferRequestType<(typeof client.roles)[':roleId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':roleId'].$patch(args, options))
}

export async function getRolesRoleIdMembers(
  args: InferRequestType<(typeof client.roles)[':roleId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':roleId'].members.$get(args, options))
}

export async function postRolesRoleIdMembers(
  args: InferRequestType<(typeof client.roles)[':roleId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':roleId'].members.$post(args, options))
}

export async function deleteRolesRoleIdMembersMemberId(
  args: InferRequestType<(typeof client.roles)[':roleId']['members'][':memberId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':roleId'].members[':memberId'].$delete(args, options))
}

export async function getRooms(
  args: InferRequestType<typeof client.rooms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.$get(args, options))
}

export async function postRooms(
  args: InferRequestType<typeof client.rooms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.$post(args, options))
}

export async function getRoomsAccountProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.rooms.account_profile.$get(undefined, options))
}

export async function patchRoomsAccountProfile(
  args: InferRequestType<typeof client.rooms.account_profile.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.account_profile.$patch(args, options))
}

export async function getRoomsAccountSettings(
  args: InferRequestType<typeof client.rooms.account_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.account_settings.$get(args, options))
}

export async function patchRoomsAccountSettings(
  args: InferRequestType<typeof client.rooms.account_settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.account_settings.$patch(args, options))
}

export async function getRoomsDigitalSignage(
  args: InferRequestType<typeof client.rooms.digital_signage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.digital_signage.$get(args, options))
}

export async function patchRoomsEvents(
  args: InferRequestType<typeof client.rooms.events.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.events.$patch(args, options))
}

export async function getRoomsLocations(
  args: InferRequestType<typeof client.rooms.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations.$get(args, options))
}

export async function postRoomsLocations(
  args: InferRequestType<typeof client.rooms.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations.$post(args, options))
}

export async function getRoomsLocationsStructure(options?: ClientRequestOptions) {
  return await parseResponse(client.rooms.locations.structure.$get(undefined, options))
}

export async function patchRoomsLocationsStructure(
  args: InferRequestType<typeof client.rooms.locations.structure.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations.structure.$patch(args, options))
}

export async function getRoomsLocationsLocationId(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations[':locationId'].$get(args, options))
}

export async function patchRoomsLocationsLocationId(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations[':locationId'].$patch(args, options))
}

export async function putRoomsLocationsLocationIdLocation(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['location']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations[':locationId'].location.$put(args, options))
}

export async function getRoomsLocationsLocationIdSettings(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations[':locationId'].settings.$get(args, options))
}

export async function patchRoomsLocationsLocationIdSettings(
  args: InferRequestType<(typeof client.rooms.locations)[':locationId']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms.locations[':locationId'].settings.$patch(args, options))
}

export async function patchRoomsIdEvents(
  args: InferRequestType<(typeof client.rooms)[':id']['events']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':id'].events.$patch(args, options))
}

export async function getRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':roomId'].$get(args, options))
}

export async function deleteRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':roomId'].$delete(args, options))
}

export async function patchRoomsRoomId(
  args: InferRequestType<(typeof client.rooms)[':roomId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':roomId'].$patch(args, options))
}

export async function getRoomsRoomIdDevices(
  args: InferRequestType<(typeof client.rooms)[':roomId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':roomId'].devices.$get(args, options))
}

export async function putRoomsRoomIdDevicesDeviceIdAppVersion(
  args: InferRequestType<
    (typeof client.rooms)[':roomId']['devices'][':deviceId']['app_version']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rooms[':roomId'].devices[':deviceId'].app_version.$put(args, options),
  )
}

export async function putRoomsRoomIdLocation(
  args: InferRequestType<(typeof client.rooms)[':roomId']['location']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':roomId'].location.$put(args, options))
}

export async function getRoomsRoomIdSettings(
  args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':roomId'].settings.$get(args, options))
}

export async function patchRoomsRoomIdSettings(
  args: InferRequestType<(typeof client.rooms)[':roomId']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rooms[':roomId'].settings.$patch(args, options))
}

export async function getSipPhones(
  args: InferRequestType<typeof client.sip_phones.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sip_phones.$get(args, options))
}

export async function postSipPhones(
  args: InferRequestType<typeof client.sip_phones.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sip_phones.$post(args, options))
}

export async function deleteSipPhonesPhoneId(
  args: InferRequestType<(typeof client.sip_phones)[':phoneId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sip_phones[':phoneId'].$delete(args, options))
}

export async function patchSipPhonesPhoneId(
  args: InferRequestType<(typeof client.sip_phones)[':phoneId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sip_phones[':phoneId'].$patch(args, options))
}

export async function getSipTrunkNumbers(options?: ClientRequestOptions) {
  return await parseResponse(client.sip_trunk.numbers.$get(undefined, options))
}

export async function getTrackingFields(options?: ClientRequestOptions) {
  return await parseResponse(client.tracking_fields.$get(undefined, options))
}

export async function postTrackingFields(
  args: InferRequestType<typeof client.tracking_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_fields.$post(args, options))
}

export async function getTrackingFieldsFieldId(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_fields[':fieldId'].$get(args, options))
}

export async function deleteTrackingFieldsFieldId(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_fields[':fieldId'].$delete(args, options))
}

export async function patchTrackingFieldsFieldId(
  args: InferRequestType<(typeof client.tracking_fields)[':fieldId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracking_fields[':fieldId'].$patch(args, options))
}

export async function getTsp(options?: ClientRequestOptions) {
  return await parseResponse(client.tsp.$get(undefined, options))
}

export async function patchTsp(
  args: InferRequestType<typeof client.tsp.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tsp.$patch(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersEmail(
  args: InferRequestType<typeof client.users.email.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.email.$get(args, options))
}

export async function getUsersMeZak(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.zak.$get(undefined, options))
}

export async function getUsersVanityName(
  args: InferRequestType<typeof client.users.vanity_name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.vanity_name.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$delete(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$patch(args, options))
}

export async function getUsersUserIdAssistants(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].assistants.$get(args, options))
}

export async function postUsersUserIdAssistants(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].assistants.$post(args, options))
}

export async function deleteUsersUserIdAssistants(
  args: InferRequestType<(typeof client.users)[':userId']['assistants']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].assistants.$delete(args, options))
}

export async function deleteUsersUserIdAssistantsAssistantId(
  args: InferRequestType<(typeof client.users)[':userId']['assistants'][':assistantId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userId'].assistants[':assistantId'].$delete(args, options),
  )
}

export async function putUsersUserIdEmail(
  args: InferRequestType<(typeof client.users)[':userId']['email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].email.$put(args, options))
}

export async function getUsersUserIdMeetingTemplates(
  args: InferRequestType<(typeof client.users)[':userId']['meeting_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].meeting_templates.$get(args, options))
}

export async function getUsersUserIdMeetings(
  args: InferRequestType<(typeof client.users)[':userId']['meetings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].meetings.$get(args, options))
}

export async function postUsersUserIdMeetings(
  args: InferRequestType<(typeof client.users)[':userId']['meetings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].meetings.$post(args, options))
}

export async function getUsersUserIdPac(
  args: InferRequestType<(typeof client.users)[':userId']['pac']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].pac.$get(args, options))
}

export async function putUsersUserIdPassword(
  args: InferRequestType<(typeof client.users)[':userId']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].password.$put(args, options))
}

export async function getUsersUserIdPermissions(
  args: InferRequestType<(typeof client.users)[':userId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].permissions.$get(args, options))
}

export async function postUsersUserIdPicture(
  args: InferRequestType<(typeof client.users)[':userId']['picture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].picture.$post(args, options))
}

export async function putUsersUserIdPresenceStatus(
  args: InferRequestType<(typeof client.users)[':userId']['presence_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].presence_status.$put(args, options))
}

export async function getUsersUserIdRecordings(
  args: InferRequestType<(typeof client.users)[':userId']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].recordings.$get(args, options))
}

export async function getUsersUserIdSchedulers(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].schedulers.$get(args, options))
}

export async function deleteUsersUserIdSchedulers(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].schedulers.$delete(args, options))
}

export async function deleteUsersUserIdSchedulersSchedulerId(
  args: InferRequestType<(typeof client.users)[':userId']['schedulers'][':schedulerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userId'].schedulers[':schedulerId'].$delete(args, options),
  )
}

export async function getUsersUserIdSettings(
  args: InferRequestType<(typeof client.users)[':userId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].settings.$get(args, options))
}

export async function patchUsersUserIdSettings(
  args: InferRequestType<(typeof client.users)[':userId']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].settings.$patch(args, options))
}

export async function postUsersUserIdSettingsVirtualBackgrounds(
  args: InferRequestType<
    (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userId'].settings.virtual_backgrounds.$post(args, options),
  )
}

export async function deleteUsersUserIdSettingsVirtualBackgrounds(
  args: InferRequestType<
    (typeof client.users)[':userId']['settings']['virtual_backgrounds']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userId'].settings.virtual_backgrounds.$delete(args, options),
  )
}

export async function putUsersUserIdStatus(
  args: InferRequestType<(typeof client.users)[':userId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].status.$put(args, options))
}

export async function getUsersUserIdToken(
  args: InferRequestType<(typeof client.users)[':userId']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].token.$get(args, options))
}

export async function deleteUsersUserIdToken(
  args: InferRequestType<(typeof client.users)[':userId']['token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].token.$delete(args, options))
}

export async function getUsersUserIdTsp(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].tsp.$get(args, options))
}

export async function postUsersUserIdTsp(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].tsp.$post(args, options))
}

export async function patchUsersUserIdTspSettings(
  args: InferRequestType<(typeof client.users)[':userId']['tsp']['settings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].tsp.settings.$patch(args, options))
}

export async function getUsersUserIdTspTspId(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].tsp[':tspId'].$get(args, options))
}

export async function deleteUsersUserIdTspTspId(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].tsp[':tspId'].$delete(args, options))
}

export async function patchUsersUserIdTspTspId(
  args: InferRequestType<(typeof client.users)[':userId']['tsp'][':tspId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].tsp[':tspId'].$patch(args, options))
}

export async function getUsersUserIdWebinarTemplates(
  args: InferRequestType<(typeof client.users)[':userId']['webinar_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].webinar_templates.$get(args, options))
}

export async function getUsersUserIdWebinars(
  args: InferRequestType<(typeof client.users)[':userId']['webinars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].webinars.$get(args, options))
}

export async function postUsersUserIdWebinars(
  args: InferRequestType<(typeof client.users)[':userId']['webinars']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].webinars.$post(args, options))
}

export async function getWebinarsWebinarId(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].$get(args, options))
}

export async function deleteWebinarsWebinarId(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].$delete(args, options))
}

export async function patchWebinarsWebinarId(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].$patch(args, options))
}

export async function postWebinarsWebinarIdBatchRegistrants(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['batch_registrants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].batch_registrants.$post(args, options))
}

export async function getWebinarsWebinarIdPanelists(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].panelists.$get(args, options))
}

export async function postWebinarsWebinarIdPanelists(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].panelists.$post(args, options))
}

export async function deleteWebinarsWebinarIdPanelists(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['panelists']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].panelists.$delete(args, options))
}

export async function deleteWebinarsWebinarIdPanelistsPanelistId(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['panelists'][':panelistId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webinars[':webinarId'].panelists[':panelistId'].$delete(args, options),
  )
}

export async function getWebinarsWebinarIdPolls(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].polls.$get(args, options))
}

export async function postWebinarsWebinarIdPolls(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].polls.$post(args, options))
}

export async function getWebinarsWebinarIdPollsPollId(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].polls[':pollId'].$get(args, options))
}

export async function putWebinarsWebinarIdPollsPollId(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].polls[':pollId'].$put(args, options))
}

export async function deleteWebinarsWebinarIdPollsPollId(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['polls'][':pollId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].polls[':pollId'].$delete(args, options))
}

export async function getWebinarsWebinarIdRegistrants(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].registrants.$get(args, options))
}

export async function postWebinarsWebinarIdRegistrants(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].registrants.$post(args, options))
}

export async function getWebinarsWebinarIdRegistrantsQuestions(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webinars[':webinarId'].registrants.questions.$get(args, options),
  )
}

export async function patchWebinarsWebinarIdRegistrantsQuestions(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants']['questions']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webinars[':webinarId'].registrants.questions.$patch(args, options),
  )
}

export async function putWebinarsWebinarIdRegistrantsStatus(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['registrants']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].registrants.status.$put(args, options))
}

export async function getWebinarsWebinarIdRegistrantsRegistrantId(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webinars[':webinarId'].registrants[':registrantId'].$get(args, options),
  )
}

export async function deleteWebinarsWebinarIdRegistrantsRegistrantId(
  args: InferRequestType<
    (typeof client.webinars)[':webinarId']['registrants'][':registrantId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webinars[':webinarId'].registrants[':registrantId'].$delete(args, options),
  )
}

export async function putWebinarsWebinarIdStatus(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].status.$put(args, options))
}

export async function getWebinarsWebinarIdTrackingSources(
  args: InferRequestType<(typeof client.webinars)[':webinarId']['tracking_sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webinars[':webinarId'].tracking_sources.$get(args, options))
}
