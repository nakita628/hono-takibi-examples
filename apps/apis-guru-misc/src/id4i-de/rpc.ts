import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putAccountPassword(
  args: InferRequestType<typeof client.account.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.password.$put(args, options))
}

export async function postAccountPassword(
  args: InferRequestType<typeof client.account.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.password.$post(args, options))
}

export async function putAccountRegistration(
  args: InferRequestType<typeof client.account.registration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.registration.$put(args, options))
}

export async function postAccountRegistration(
  args: InferRequestType<typeof client.account.registration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.registration.$post(args, options))
}

export async function postAccountVerification(
  args: InferRequestType<typeof client.account.verification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.verification.$post(args, options))
}

export async function getApiV1Apikeys(
  args: InferRequestType<typeof client.api.v1.apikeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys.$get(args, options))
}

export async function postApiV1Apikeys(
  args: InferRequestType<typeof client.api.v1.apikeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys.$post(args, options))
}

export async function getApiV1ApikeysPrivileges(
  args: InferRequestType<typeof client.api.v1.apikeys.privileges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys.privileges.$get(args, options))
}

export async function getApiV1ApikeysKey(
  args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys[':key'].$get(args, options))
}

export async function putApiV1ApikeysKey(
  args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys[':key'].$put(args, options))
}

export async function deleteApiV1ApikeysKey(
  args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys[':key'].$delete(args, options))
}

export async function getApiV1ApikeysKeyPrivileges(
  args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys[':key'].privileges.$get(args, options))
}

export async function postApiV1ApikeysKeyPrivileges(
  args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys[':key'].privileges.$post(args, options))
}

export async function deleteApiV1ApikeysKeyPrivileges(
  args: InferRequestType<(typeof client.api.v1.apikeys)[':key']['privileges']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.apikeys[':key'].privileges.$delete(args, options))
}

export async function getApiV1ApikeysKeyPrivilegesPrivilegeId4ns(
  args: InferRequestType<
    (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.apikeys[':key'].privileges[':privilege'].id4ns.$get(args, options),
  )
}

export async function postApiV1ApikeysKeyPrivilegesPrivilegeId4ns(
  args: InferRequestType<
    (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.apikeys[':key'].privileges[':privilege'].id4ns.$post(args, options),
  )
}

export async function deleteApiV1ApikeysKeyPrivilegesPrivilegeId4ns(
  args: InferRequestType<
    (typeof client.api.v1.apikeys)[':key']['privileges'][':privilege']['id4ns']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.apikeys[':key'].privileges[':privilege'].id4ns.$delete(args, options),
  )
}

export async function getApiV1BillingOrganizationId(
  args: InferRequestType<(typeof client.api.v1.billing)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing[':organizationId'].$get(args, options))
}

export async function getApiV1BillingOrganizationIdPositions(
  args: InferRequestType<(typeof client.api.v1.billing)[':organizationId']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.billing[':organizationId'].positions.$get(args, options))
}

export async function getApiV1ChangelogOrganizationOrganizationIdIndex(
  args: InferRequestType<
    (typeof client.api.v1.changelog.organization)[':organizationId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.changelog.organization[':organizationId'].index.$get(args, options),
  )
}

export async function postApiV1Collections(
  args: InferRequestType<typeof client.api.v1.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections.$post(args, options))
}

export async function getApiV1CollectionsId4n(
  args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id4n'].$get(args, options))
}

export async function deleteApiV1CollectionsId4n(
  args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id4n'].$delete(args, options))
}

export async function patchApiV1CollectionsId4n(
  args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id4n'].$patch(args, options))
}

export async function getApiV1CollectionsId4nElements(
  args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id4n'].elements.$get(args, options))
}

export async function postApiV1CollectionsId4nElements(
  args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id4n'].elements.$post(args, options))
}

export async function deleteApiV1CollectionsId4nElements(
  args: InferRequestType<(typeof client.api.v1.collections)[':id4n']['elements']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.collections[':id4n'].elements.$delete(args, options))
}

export async function getApiV1Countries(
  args: InferRequestType<typeof client.api.v1.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.countries.$get(args, options))
}

export async function getApiV1DocumentsId4n(
  args: InferRequestType<(typeof client.api.v1.documents)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents[':id4n'].$get(args, options))
}

export async function getApiV1DocumentsId4nOrganizationId(
  args: InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':id4n'][':organizationId'].$get(args, options),
  )
}

export async function putApiV1DocumentsId4nOrganizationId(
  args: InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':id4n'][':organizationId'].$put(args, options),
  )
}

export async function postApiV1DocumentsId4nOrganizationId(
  args: InferRequestType<(typeof client.api.v1.documents)[':id4n'][':organizationId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':id4n'][':organizationId'].$post(args, options),
  )
}

export async function getApiV1DocumentsId4nOrganizationIdFileName(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':id4n'][':organizationId'][':fileName'].$get(args, options),
  )
}

export async function deleteApiV1DocumentsId4nOrganizationIdFileName(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':id4n'][':organizationId'][':fileName'].$delete(args, options),
  )
}

export async function getApiV1DocumentsId4nOrganizationIdFileNameMetadata(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':id4n'][':organizationId'][':fileName'].metadata.$get(args, options),
  )
}

export async function patchApiV1DocumentsId4nOrganizationIdFileNameMetadata(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':id4n'][':organizationId'][':fileName'].metadata.$patch(args, options),
  )
}

export async function postApiV1Guids(
  args: InferRequestType<typeof client.api.v1.guids.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.guids.$post(args, options))
}

export async function getApiV1GuidsWithoutCollection(
  args: InferRequestType<typeof client.api.v1.guids.withoutCollection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.guids.withoutCollection.$get(args, options))
}

export async function getApiV1GuidsId4n(
  args: InferRequestType<(typeof client.api.v1.guids)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.guids[':id4n'].$get(args, options))
}

export async function patchApiV1GuidsId4n(
  args: InferRequestType<(typeof client.api.v1.guids)[':id4n']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.guids[':id4n'].$patch(args, options))
}

export async function getApiV1HistoryId4n(
  args: InferRequestType<(typeof client.api.v1.history)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history[':id4n'].$get(args, options))
}

export async function postApiV1HistoryId4n(
  args: InferRequestType<(typeof client.api.v1.history)[':id4n']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history[':id4n'].$post(args, options))
}

export async function getApiV1HistoryId4nOrganizationId(
  args: InferRequestType<(typeof client.api.v1.history)[':id4n'][':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.history[':id4n'][':organizationId'].$get(args, options))
}

export async function getApiV1HistoryId4nOrganizationIdSequenceId(
  args: InferRequestType<
    (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.history[':id4n'][':organizationId'][':sequenceId'].$get(args, options),
  )
}

export async function patchApiV1HistoryId4nOrganizationIdSequenceId(
  args: InferRequestType<
    (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.history[':id4n'][':organizationId'][':sequenceId'].$patch(args, options),
  )
}

export async function putApiV1HistoryId4nOrganizationIdSequenceIdVisibility(
  args: InferRequestType<
    (typeof client.api.v1.history)[':id4n'][':organizationId'][':sequenceId']['visibility']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.history[':id4n'][':organizationId'][':sequenceId'].visibility.$put(args, options),
  )
}

export async function getApiV1Id4nsId4n(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.id4ns[':id4n'].$get(args, options))
}

export async function getApiV1Id4nsId4nAlias(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.id4ns[':id4n'].alias.$get(args, options))
}

export async function postApiV1Id4nsId4nAliasAliasType(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.id4ns[':id4n'].alias[':aliasType'].$post(args, options))
}

export async function deleteApiV1Id4nsId4nAliasAliasType(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['alias'][':aliasType']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.id4ns[':id4n'].alias[':aliasType'].$delete(args, options),
  )
}

export async function getApiV1Id4nsId4nCollections(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.id4ns[':id4n'].collections.$get(args, options))
}

export async function getApiV1Id4nsId4nProperties(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.id4ns[':id4n'].properties.$get(args, options))
}

export async function deleteApiV1Id4nsId4nProperties(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.id4ns[':id4n'].properties.$delete(args, options))
}

export async function patchApiV1Id4nsId4nProperties(
  args: InferRequestType<(typeof client.api.v1.id4ns)[':id4n']['properties']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.id4ns[':id4n'].properties.$patch(args, options))
}

export async function postApiV1ImportGs1(
  args: InferRequestType<typeof client.api.v1.import.gs1.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.import.gs1.$post(args, options))
}

export async function getApiV1Info(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.info.$get(undefined, options))
}

export async function getApiV1MicrostorageId4nOrganization(
  args: InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.microstorage[':id4n'][':organization'].$get(args, options),
  )
}

export async function putApiV1MicrostorageId4nOrganization(
  args: InferRequestType<(typeof client.api.v1.microstorage)[':id4n'][':organization']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.microstorage[':id4n'][':organization'].$put(args, options),
  )
}

export async function getApiV1MultipleId4nsProperties(
  args: InferRequestType<typeof client.api.v1.multiple.id4ns.properties.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.multiple.id4ns.properties.$get(args, options))
}

export async function postApiV1Organizations(
  args: InferRequestType<typeof client.api.v1.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.organizations.$post(args, options))
}

export async function getApiV1OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.organizations[':organizationId'].$get(args, options))
}

export async function putApiV1OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.organizations[':organizationId'].$put(args, options))
}

export async function deleteApiV1OrganizationsOrganizationId(
  args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.organizations[':organizationId'].$delete(args, options))
}

export async function getApiV1OrganizationsOrganizationIdAddressesBilling(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].addresses.billing.$get(args, options),
  )
}

export async function putApiV1OrganizationsOrganizationIdAddressesBilling(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].addresses.billing.$put(args, options),
  )
}

export async function deleteApiV1OrganizationsOrganizationIdAddressesBilling(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['addresses']['billing']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].addresses.billing.$delete(args, options),
  )
}

export async function getApiV1OrganizationsOrganizationIdAddressesDefault(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].addresses.default.$get(args, options),
  )
}

export async function putApiV1OrganizationsOrganizationIdAddressesDefault(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['addresses']['default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].addresses.default.$put(args, options),
  )
}

export async function getApiV1OrganizationsOrganizationIdCollections(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['collections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].collections.$get(args, options),
  )
}

export async function postApiV1OrganizationsOrganizationIdLogo(
  args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['logo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].logo.$post(args, options),
  )
}

export async function deleteApiV1OrganizationsOrganizationIdLogo(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['logo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].logo.$delete(args, options),
  )
}

export async function getApiV1OrganizationsOrganizationIdMessaging(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['messaging']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].messaging.$get(args, options),
  )
}

export async function patchApiV1OrganizationsOrganizationIdMessaging(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['messaging']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].messaging.$patch(args, options),
  )
}

export async function postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessage(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['messaging']['enqueueCustomMessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].messaging.enqueueCustomMessage.$post(
      args,
      options,
    ),
  )
}

export async function getApiV1OrganizationsOrganizationIdPartner(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['partner']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].partner.$get(args, options),
  )
}

export async function putApiV1OrganizationsOrganizationIdPartner(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['partner']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].partner.$put(args, options),
  )
}

export async function deleteApiV1OrganizationsOrganizationIdPartner(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['partner']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].partner.$delete(args, options),
  )
}

export async function getApiV1OrganizationsOrganizationIdPrivileges(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['privileges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].privileges.$get(args, options),
  )
}

export async function getApiV1OrganizationsOrganizationIdRoles(
  args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].roles.$get(args, options),
  )
}

export async function getApiV1OrganizationsOrganizationIdUsers(
  args: InferRequestType<(typeof client.api.v1.organizations)[':organizationId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].users.$get(args, options),
  )
}

export async function postApiV1OrganizationsOrganizationIdUsersInvite(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['users']['invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].users.invite.$post(args, options),
  )
}

export async function getApiV1OrganizationsOrganizationIdUsersUsernameRoles(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].users[':username'].roles.$get(args, options),
  )
}

export async function postApiV1OrganizationsOrganizationIdUsersUsernameRoles(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].users[':username'].roles.$post(args, options),
  )
}

export async function deleteApiV1OrganizationsOrganizationIdUsersUsernameRoles(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':organizationId']['users'][':username']['roles']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':organizationId'].users[':username'].roles.$delete(args, options),
  )
}

export async function getApiV1PublicDocumentsId4n(
  args: InferRequestType<(typeof client.api.v1.public.documents)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.public.documents[':id4n'].$get(args, options))
}

export async function getApiV1PublicDocumentsId4nOrganizationIdFileName(
  args: InferRequestType<
    (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.public.documents[':id4n'][':organizationId'][':fileName'].$get(args, options),
  )
}

export async function getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadata(
  args: InferRequestType<
    (typeof client.api.v1.public.documents)[':id4n'][':organizationId'][':fileName']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.public.documents[':id4n'][':organizationId'][':fileName'].metadata.$get(
      args,
      options,
    ),
  )
}

export async function getApiV1PublicHistoryId4n(
  args: InferRequestType<(typeof client.api.v1.public.history)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.public.history[':id4n'].$get(args, options))
}

export async function getApiV1PublicImageImageID(
  args: InferRequestType<(typeof client.api.v1.public.image)[':imageID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.public.image[':imageID'].$get(args, options))
}

export async function getApiV1PublicOrganizationsOrganizationId(
  args: InferRequestType<(typeof client.api.v1.public.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.public.organizations[':organizationId'].$get(args, options),
  )
}

export async function getApiV1PublicRoutesId4n(
  args: InferRequestType<(typeof client.api.v1.public.routes)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.public.routes[':id4n'].$get(args, options))
}

export async function getApiV1Roles(
  args: InferRequestType<typeof client.api.v1.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.roles.$get(args, options))
}

export async function getApiV1RoutingfilesId4n(
  args: InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.routingfiles[':id4n'].$get(args, options))
}

export async function putApiV1RoutingfilesId4n(
  args: InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.routingfiles[':id4n'].$put(args, options))
}

export async function getApiV1RoutingfilesId4nRouteType(
  args: InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['route'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.routingfiles[':id4n'].route[':type'].$get(args, options))
}

export async function getApiV1RoutingfilesId4nRoutesType(
  args: InferRequestType<(typeof client.api.v1.routingfiles)[':id4n']['routes'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.routingfiles[':id4n'].routes[':type'].$get(args, options),
  )
}

export async function getApiV1SearchGuids(
  args: InferRequestType<typeof client.api.v1.search.guids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.guids.$get(args, options))
}

export async function getApiV1SearchGuidsAliasesTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.search.guids.aliases.types.$get(undefined, options))
}

export async function putApiV1TransfersId4nReceiveInfo(
  args: InferRequestType<(typeof client.api.v1.transfers)[':id4n']['receiveInfo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.transfers[':id4n'].receiveInfo.$put(args, options))
}

export async function getApiV1TransfersId4nSendInfo(
  args: InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.transfers[':id4n'].sendInfo.$get(args, options))
}

export async function putApiV1TransfersId4nSendInfo(
  args: InferRequestType<(typeof client.api.v1.transfers)[':id4n']['sendInfo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.transfers[':id4n'].sendInfo.$put(args, options))
}

export async function getApiV1UserOrganizations(
  args: InferRequestType<typeof client.api.v1.user.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.user.organizations.$get(args, options))
}

export async function getApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$get(args, options))
}

export async function getApiV1UsersUsername(
  args: InferRequestType<(typeof client.api.v1.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':username'].$get(args, options))
}

export async function getGoGuid(
  args: InferRequestType<(typeof client.go)[':guid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.go[':guid'].$get(args, options))
}

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function getWhoisId4n(
  args: InferRequestType<(typeof client.whois)[':id4n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.whois[':id4n'].$get(args, options))
}
