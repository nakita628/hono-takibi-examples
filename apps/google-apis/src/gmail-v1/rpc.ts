import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGmailV1UsersUserIdDrafts(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].drafts.$get(args, options))
}

export async function postGmailV1UsersUserIdDrafts(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].drafts.$post(args, options))
}

export async function postGmailV1UsersUserIdDraftsSend(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].drafts.send.$post(args, options))
}

export async function getGmailV1UsersUserIdDraftsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$get(args, options))
}

export async function putGmailV1UsersUserIdDraftsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$put(args, options))
}

export async function deleteGmailV1UsersUserIdDraftsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$delete(args, options))
}

export async function getGmailV1UsersUserIdHistory(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].history.$get(args, options))
}

export async function getGmailV1UsersUserIdLabels(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].labels.$get(args, options))
}

export async function postGmailV1UsersUserIdLabels(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].labels.$post(args, options))
}

export async function getGmailV1UsersUserIdLabelsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$get(args, options))
}

export async function putGmailV1UsersUserIdLabelsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$put(args, options))
}

export async function deleteGmailV1UsersUserIdLabelsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$delete(args, options))
}

export async function patchGmailV1UsersUserIdLabelsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$patch(args, options))
}

export async function getGmailV1UsersUserIdMessages(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].messages.$get(args, options))
}

export async function postGmailV1UsersUserIdMessages(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].messages.$post(args, options))
}

export async function postGmailV1UsersUserIdMessagesBatchDelete(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].messages.batchDelete.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdMessagesBatchModify(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].messages.batchModify.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdMessagesImport(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].messages.import.$post(args, options))
}

export async function postGmailV1UsersUserIdMessagesSend(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].messages.send.$post(args, options))
}

export async function getGmailV1UsersUserIdMessagesId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].messages[':id'].$get(args, options))
}

export async function deleteGmailV1UsersUserIdMessagesId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].messages[':id'].$delete(args, options),
  )
}

export async function postGmailV1UsersUserIdMessagesIdModify(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].messages[':id'].modify.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdMessagesIdTrash(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].messages[':id'].trash.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdMessagesIdUntrash(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].messages[':id'].untrash.$post(args, options),
  )
}

export async function getGmailV1UsersUserIdMessagesMessageIdAttachmentsId(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].messages[':messageId'].attachments[':id'].$get(args, options),
  )
}

export async function getGmailV1UsersUserIdProfile(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].profile.$get(args, options))
}

export async function getGmailV1UsersUserIdSettingsAutoForwarding(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.autoForwarding.$get(args, options),
  )
}

export async function putGmailV1UsersUserIdSettingsAutoForwarding(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.autoForwarding.$put(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsCseIdentities(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.identities.$get(args, options),
  )
}

export async function postGmailV1UsersUserIdSettingsCseIdentities(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.identities.$post(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$get(
      args,
      options,
    ),
  )
}

export async function deleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$delete(
      args,
      options,
    ),
  )
}

export async function patchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddress(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.identities[':emailAddress'].$patch(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsCseKeypairs(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.keypairs.$get(args, options),
  )
}

export async function postGmailV1UsersUserIdSettingsCseKeypairs(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.keypairs.$post(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsCseKeypairsKeyPairId(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId'].$get(args, options),
  )
}

export async function postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisable(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:disable'].$post(
      args,
      options,
    ),
  )
}

export async function postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnable(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:enable'].$post(
      args,
      options,
    ),
  )
}

export async function postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterate(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:obliterate'].$post(
      args,
      options,
    ),
  )
}

export async function getGmailV1UsersUserIdSettingsDelegates(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.delegates.$get(args, options),
  )
}

export async function postGmailV1UsersUserIdSettingsDelegates(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.delegates.$post(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsDelegatesDelegateEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$get(args, options),
  )
}

export async function deleteGmailV1UsersUserIdSettingsDelegatesDelegateEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$delete(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsFilters(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.filters.$get(args, options))
}

export async function postGmailV1UsersUserIdSettingsFilters(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.filters.$post(args, options))
}

export async function getGmailV1UsersUserIdSettingsFiltersId(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.filters[':id'].$get(args, options),
  )
}

export async function deleteGmailV1UsersUserIdSettingsFiltersId(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.filters[':id'].$delete(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsForwardingAddresses(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.forwardingAddresses.$get(args, options),
  )
}

export async function postGmailV1UsersUserIdSettingsForwardingAddresses(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.forwardingAddresses.$post(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$get(
      args,
      options,
    ),
  )
}

export async function deleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$delete(
      args,
      options,
    ),
  )
}

export async function getGmailV1UsersUserIdSettingsImap(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.imap.$get(args, options))
}

export async function putGmailV1UsersUserIdSettingsImap(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.imap.$put(args, options))
}

export async function getGmailV1UsersUserIdSettingsLanguage(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.language.$get(args, options))
}

export async function putGmailV1UsersUserIdSettingsLanguage(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.language.$put(args, options))
}

export async function getGmailV1UsersUserIdSettingsPop(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.pop.$get(args, options))
}

export async function putGmailV1UsersUserIdSettingsPop(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.pop.$put(args, options))
}

export async function getGmailV1UsersUserIdSettingsSendAs(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.sendAs.$get(args, options))
}

export async function postGmailV1UsersUserIdSettingsSendAs(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.sendAs.$post(args, options))
}

export async function getGmailV1UsersUserIdSettingsSendAsSendAsEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$get(args, options),
  )
}

export async function putGmailV1UsersUserIdSettingsSendAsSendAsEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$put(args, options),
  )
}

export async function deleteGmailV1UsersUserIdSettingsSendAsSendAsEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$delete(args, options),
  )
}

export async function patchGmailV1UsersUserIdSettingsSendAsSendAsEmail(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$patch(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$get(args, options),
  )
}

export async function postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$post(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefault(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[
      ':id'
    ].setDefault.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdSettingsSendAsSendAsEmailVerify(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].verify.$post(args, options),
  )
}

export async function getGmailV1UsersUserIdSettingsVacation(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.vacation.$get(args, options))
}

export async function putGmailV1UsersUserIdSettingsVacation(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].settings.vacation.$put(args, options))
}

export async function postGmailV1UsersUserIdStop(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].stop.$post(args, options))
}

export async function getGmailV1UsersUserIdThreads(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].threads.$get(args, options))
}

export async function getGmailV1UsersUserIdThreadsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].threads[':id'].$get(args, options))
}

export async function deleteGmailV1UsersUserIdThreadsId(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].threads[':id'].$delete(args, options))
}

export async function postGmailV1UsersUserIdThreadsIdModify(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].threads[':id'].modify.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdThreadsIdTrash(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].threads[':id'].trash.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdThreadsIdUntrash(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gmail.v1.users[':userId'].threads[':id'].untrash.$post(args, options),
  )
}

export async function postGmailV1UsersUserIdWatch(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gmail.v1.users[':userId'].watch.$post(args, options))
}
