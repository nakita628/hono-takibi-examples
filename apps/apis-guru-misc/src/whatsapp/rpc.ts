import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccount(
  args: InferRequestType<typeof client.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$post(args, options))
}

export async function postAccountShards(
  args: InferRequestType<typeof client.account.shards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.shards.$post(args, options))
}

export async function postAccountVerify(
  args: InferRequestType<typeof client.account.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.verify.$post(args, options))
}

export async function postCertificatesExternal(
  args: InferRequestType<typeof client.certificates.external.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.external.$post(args, options))
}

export async function getCertificatesExternalCa(options?: ClientRequestOptions) {
  return await parseResponse(client.certificates.external.ca.$get(undefined, options))
}

export async function getCertificatesWebhooksCa(options?: ClientRequestOptions) {
  return await parseResponse(client.certificates.webhooks.ca.$get(undefined, options))
}

export async function postCertificatesWebhooksCa(
  args: InferRequestType<typeof client.certificates.webhooks.ca.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.webhooks.ca.$post(args, options))
}

export async function deleteCertificatesWebhooksCa(options?: ClientRequestOptions) {
  return await parseResponse(client.certificates.webhooks.ca.$delete(undefined, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
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
  args: InferRequestType<(typeof client.groups)[':GroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].$get(args, options))
}

export async function putGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':GroupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].$put(args, options))
}

export async function deleteGroupsGroupIdAdmins(
  args: InferRequestType<(typeof client.groups)[':GroupId']['admins']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].admins.$delete(args, options))
}

export async function patchGroupsGroupIdAdmins(
  args: InferRequestType<(typeof client.groups)[':GroupId']['admins']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].admins.$patch(args, options))
}

export async function getGroupsGroupIdIcon(
  args: InferRequestType<(typeof client.groups)[':GroupId']['icon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].icon.$get(args, options))
}

export async function postGroupsGroupIdIcon(
  args: InferRequestType<(typeof client.groups)[':GroupId']['icon']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].icon.$post(args, options))
}

export async function deleteGroupsGroupIdIcon(
  args: InferRequestType<(typeof client.groups)[':GroupId']['icon']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].icon.$delete(args, options))
}

export async function getGroupsGroupIdInvite(
  args: InferRequestType<(typeof client.groups)[':GroupId']['invite']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].invite.$get(args, options))
}

export async function deleteGroupsGroupIdInvite(
  args: InferRequestType<(typeof client.groups)[':GroupId']['invite']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].invite.$delete(args, options))
}

export async function postGroupsGroupIdLeave(
  args: InferRequestType<(typeof client.groups)[':GroupId']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].leave.$post(args, options))
}

export async function deleteGroupsGroupIdParticipants(
  args: InferRequestType<(typeof client.groups)[':GroupId']['participants']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':GroupId'].participants.$delete(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function postMedia(
  args: InferRequestType<typeof client.media.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.$post(args, options))
}

export async function getMediaMediaId(
  args: InferRequestType<(typeof client.media)[':MediaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':MediaId'].$get(args, options))
}

export async function deleteMediaMediaId(
  args: InferRequestType<(typeof client.media)[':MediaId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':MediaId'].$delete(args, options))
}

export async function postMessages(
  args: InferRequestType<typeof client.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$post(args, options))
}

export async function putMessagesMessageID(
  args: InferRequestType<(typeof client.messages)[':MessageID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages[':MessageID'].$put(args, options))
}

export async function getMetrics(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.$get(args, options))
}

export async function postSettingsAccountTwoStep(
  args: InferRequestType<(typeof client.settings.account)['two-step']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.account['two-step'].$post(args, options))
}

export async function deleteSettingsAccountTwoStep(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.account['two-step'].$delete(undefined, options))
}

export async function getSettingsApplication(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.application.$get(undefined, options))
}

export async function deleteSettingsApplication(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.application.$delete(undefined, options))
}

export async function patchSettingsApplication(
  args: InferRequestType<typeof client.settings.application.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.application.$patch(args, options))
}

export async function getSettingsApplicationMediaProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.application.media.providers.$get(undefined, options))
}

export async function postSettingsApplicationMediaProviders(
  args: InferRequestType<typeof client.settings.application.media.providers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.application.media.providers.$post(args, options))
}

export async function deleteSettingsApplicationMediaProvidersProviderName(
  args: InferRequestType<
    (typeof client.settings.application.media.providers)[':ProviderName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.application.media.providers[':ProviderName'].$delete(args, options),
  )
}

export async function postSettingsBackup(
  args: InferRequestType<typeof client.settings.backup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.backup.$post(args, options))
}

export async function getSettingsBusinessProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.business.profile.$get(undefined, options))
}

export async function postSettingsBusinessProfile(
  args: InferRequestType<typeof client.settings.business.profile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.business.profile.$post(args, options))
}

export async function getSettingsProfileAbout(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.profile.about.$get(undefined, options))
}

export async function patchSettingsProfileAbout(
  args: InferRequestType<typeof client.settings.profile.about.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.profile.about.$patch(args, options))
}

export async function getSettingsProfilePhoto(
  args: InferRequestType<typeof client.settings.profile.photo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.profile.photo.$get(args, options))
}

export async function postSettingsProfilePhoto(
  args: InferRequestType<typeof client.settings.profile.photo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.profile.photo.$post(args, options))
}

export async function deleteSettingsProfilePhoto(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.profile.photo.$delete(undefined, options))
}

export async function postSettingsRestore(
  args: InferRequestType<typeof client.settings.restore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.restore.$post(args, options))
}

export async function getStatsApp(
  args: InferRequestType<typeof client.stats.app.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.app.$get(args, options))
}

export async function getStatsDb(
  args: InferRequestType<typeof client.stats.db.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.db.$get(args, options))
}

export async function getSupport(options?: ClientRequestOptions) {
  return await parseResponse(client.support.$get(undefined, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function postUsersLogin(
  args: InferRequestType<typeof client.users.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.login.$post(args, options))
}

export async function postUsersLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.users.logout.$post(undefined, options))
}

export async function getUsersUserUsername(
  args: InferRequestType<(typeof client.users)[':UserUsername']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':UserUsername'].$get(args, options))
}

export async function putUsersUserUsername(
  args: InferRequestType<(typeof client.users)[':UserUsername']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':UserUsername'].$put(args, options))
}

export async function deleteUsersUserUsername(
  args: InferRequestType<(typeof client.users)[':UserUsername']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':UserUsername'].$delete(args, options))
}
