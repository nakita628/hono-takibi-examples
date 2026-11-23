import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function postAccount(
  args: InferRequestType<typeof client.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$post(args, options))
}

export async function patchAccountEmail(
  args: InferRequestType<typeof client.account.email.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.email.$patch(args, options))
}

export async function getAccountIdentities(
  args: InferRequestType<typeof client.account.identities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.identities.$get(args, options))
}

export async function deleteAccountIdentitiesIdentityId(
  args: InferRequestType<(typeof client.account.identities)[':identityId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.identities[':identityId'].$delete(args, options))
}

export async function postAccountJwts(options?: ClientRequestOptions) {
  return await parseResponse(client.account.jwts.$post(undefined, options))
}

export async function getAccountLogs(
  args: InferRequestType<typeof client.account.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.logs.$get(args, options))
}

export async function patchAccountMfa(
  args: InferRequestType<typeof client.account.mfa.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.mfa.$patch(args, options))
}

export async function putAccountMfaAuthenticatorsType(
  args: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.mfa.authenticators[':type'].$put(args, options))
}

export async function postAccountMfaAuthenticatorsType(
  args: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.mfa.authenticators[':type'].$post(args, options))
}

export async function deleteAccountMfaAuthenticatorsType(
  args: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.mfa.authenticators[':type'].$delete(args, options))
}

export async function putAccountMfaChallenge(
  args: InferRequestType<typeof client.account.mfa.challenge.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.mfa.challenge.$put(args, options))
}

export async function postAccountMfaChallenge(
  args: InferRequestType<typeof client.account.mfa.challenge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.mfa.challenge.$post(args, options))
}

export async function getAccountMfaFactors(options?: ClientRequestOptions) {
  return await parseResponse(client.account.mfa.factors.$get(undefined, options))
}

export async function getAccountMfaRecoveryCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.account.mfa['recovery-codes'].$get(undefined, options))
}

export async function postAccountMfaRecoveryCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.account.mfa['recovery-codes'].$post(undefined, options))
}

export async function patchAccountMfaRecoveryCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.account.mfa['recovery-codes'].$patch(undefined, options))
}

export async function patchAccountName(
  args: InferRequestType<typeof client.account.name.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.name.$patch(args, options))
}

export async function patchAccountPassword(
  args: InferRequestType<typeof client.account.password.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.password.$patch(args, options))
}

export async function patchAccountPhone(
  args: InferRequestType<typeof client.account.phone.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.phone.$patch(args, options))
}

export async function getAccountPrefs(options?: ClientRequestOptions) {
  return await parseResponse(client.account.prefs.$get(undefined, options))
}

export async function patchAccountPrefs(
  args: InferRequestType<typeof client.account.prefs.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.prefs.$patch(args, options))
}

export async function putAccountRecovery(
  args: InferRequestType<typeof client.account.recovery.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.recovery.$put(args, options))
}

export async function postAccountRecovery(
  args: InferRequestType<typeof client.account.recovery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.recovery.$post(args, options))
}

export async function getAccountSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.account.sessions.$get(undefined, options))
}

export async function deleteAccountSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.account.sessions.$delete(undefined, options))
}

export async function postAccountSessionsAnonymous(options?: ClientRequestOptions) {
  return await parseResponse(client.account.sessions.anonymous.$post(undefined, options))
}

export async function postAccountSessionsEmail(
  args: InferRequestType<typeof client.account.sessions.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sessions.email.$post(args, options))
}

export async function putAccountSessionsMagicUrl(
  args: InferRequestType<(typeof client.account.sessions)['magic-url']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sessions['magic-url'].$put(args, options))
}

export async function putAccountSessionsPhone(
  args: InferRequestType<typeof client.account.sessions.phone.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sessions.phone.$put(args, options))
}

export async function postAccountSessionsToken(
  args: InferRequestType<typeof client.account.sessions.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sessions.token.$post(args, options))
}

export async function getAccountSessionsSessionId(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sessions[':sessionId'].$get(args, options))
}

export async function deleteAccountSessionsSessionId(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sessions[':sessionId'].$delete(args, options))
}

export async function patchAccountSessionsSessionId(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sessions[':sessionId'].$patch(args, options))
}

export async function patchAccountStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.account.status.$patch(undefined, options))
}

export async function postAccountTokensEmail(
  args: InferRequestType<typeof client.account.tokens.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tokens.email.$post(args, options))
}

export async function postAccountTokensMagicUrl(
  args: InferRequestType<(typeof client.account.tokens)['magic-url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tokens['magic-url'].$post(args, options))
}

export async function getAccountTokensOauth2Provider(
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tokens.oauth2[':provider'].$get(args, options))
}

export async function postAccountTokensPhone(
  args: InferRequestType<typeof client.account.tokens.phone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tokens.phone.$post(args, options))
}

export async function putAccountVerification(
  args: InferRequestType<typeof client.account.verification.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.verification.$put(args, options))
}

export async function postAccountVerification(
  args: InferRequestType<typeof client.account.verification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.verification.$post(args, options))
}

export async function putAccountVerificationPhone(
  args: InferRequestType<typeof client.account.verification.phone.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.verification.phone.$put(args, options))
}

export async function postAccountVerificationPhone(options?: ClientRequestOptions) {
  return await parseResponse(client.account.verification.phone.$post(undefined, options))
}

export async function getAvatarsBrowsersCode(
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatars.browsers[':code'].$get(args, options))
}

export async function getAvatarsCreditCardsCode(
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatars['credit-cards'][':code'].$get(args, options))
}

export async function getAvatarsFavicon(
  args: InferRequestType<typeof client.avatars.favicon.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatars.favicon.$get(args, options))
}

export async function getAvatarsFlagsCode(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatars.flags[':code'].$get(args, options))
}

export async function getAvatarsImage(
  args: InferRequestType<typeof client.avatars.image.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatars.image.$get(args, options))
}

export async function getAvatarsInitials(
  args: InferRequestType<typeof client.avatars.initials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatars.initials.$get(args, options))
}

export async function getAvatarsQr(
  args: InferRequestType<typeof client.avatars.qr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatars.qr.$get(args, options))
}

export async function getDatabases(
  args: InferRequestType<typeof client.databases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.$get(args, options))
}

export async function postDatabases(
  args: InferRequestType<typeof client.databases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.$post(args, options))
}

export async function getDatabasesDatabaseId(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':databaseId'].$get(args, options))
}

export async function putDatabasesDatabaseId(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':databaseId'].$put(args, options))
}

export async function deleteDatabasesDatabaseId(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':databaseId'].$delete(args, options))
}

export async function getDatabasesDatabaseIdCollections(
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':databaseId'].collections.$get(args, options))
}

export async function postDatabasesDatabaseIdCollections(
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases[':databaseId'].collections.$post(args, options))
}

export async function getDatabasesDatabaseIdCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].$get(args, options),
  )
}

export async function putDatabasesDatabaseIdCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].$put(args, options),
  )
}

export async function deleteDatabasesDatabaseIdCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].$delete(args, options),
  )
}

export async function getDatabasesDatabaseIdCollectionsCollectionIdAttributes(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.$get(args, options),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesBoolean(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.boolean.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.boolean[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetime(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.datetime.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.datetime[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmail(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.email.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.email[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnum(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.enum.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.enum[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloat(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.float.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.float[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesInteger(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.integer.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.integer[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesIp(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.ip.$post(args, options),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.ip[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationship(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.relationship.$post(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesString(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.string.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.string[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrl(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.url.$post(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes.url[':key'].$patch(
      args,
      options,
    ),
  )
}

export async function getDatabasesDatabaseIdCollectionsCollectionIdAttributesKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$get(
      args,
      options,
    ),
  )
}

export async function deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$delete(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationship(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].attributes[
      ':key'
    ].relationship.$patch(args, options),
  )
}

export async function getDatabasesDatabaseIdCollectionsCollectionIdDocuments(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents.$get(args, options),
  )
}

export async function putDatabasesDatabaseIdCollectionsCollectionIdDocuments(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents.$put(args, options),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdDocuments(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents.$post(args, options),
  )
}

export async function deleteDatabasesDatabaseIdCollectionsCollectionIdDocuments(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents.$delete(args, options),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdDocuments(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents.$patch(args, options),
  )
}

export async function getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'].$get(
      args,
      options,
    ),
  )
}

export async function putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'].$patch(
      args,
      options,
    ),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrement(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'][
      ':attribute'
    ].decrement.$patch(args, options),
  )
}

export async function patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrement(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'][
      ':attribute'
    ].increment.$patch(args, options),
  )
}

export async function getDatabasesDatabaseIdCollectionsCollectionIdIndexes(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].indexes.$get(args, options),
  )
}

export async function postDatabasesDatabaseIdCollectionsCollectionIdIndexes(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].indexes.$post(args, options),
  )
}

export async function getDatabasesDatabaseIdCollectionsCollectionIdIndexesKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$get(
      args,
      options,
    ),
  )
}

export async function deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKey(
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$delete(
      args,
      options,
    ),
  )
}

export async function getFunctions(
  args: InferRequestType<typeof client.functions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.$get(args, options))
}

export async function postFunctions(
  args: InferRequestType<typeof client.functions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions.$post(args, options))
}

export async function getFunctionsRuntimes(options?: ClientRequestOptions) {
  return await parseResponse(client.functions.runtimes.$get(undefined, options))
}

export async function getFunctionsSpecifications(options?: ClientRequestOptions) {
  return await parseResponse(client.functions.specifications.$get(undefined, options))
}

export async function getFunctionsFunctionId(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].$get(args, options))
}

export async function putFunctionsFunctionId(
  args: InferRequestType<(typeof client.functions)[':functionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].$put(args, options))
}

export async function deleteFunctionsFunctionId(
  args: InferRequestType<(typeof client.functions)[':functionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].$delete(args, options))
}

export async function patchFunctionsFunctionIdDeployment(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployment']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].deployment.$patch(args, options))
}

export async function getFunctionsFunctionIdDeployments(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].deployments.$get(args, options))
}

export async function postFunctionsFunctionIdDeployments(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].deployments.$post(args, options))
}

export async function postFunctionsFunctionIdDeploymentsDuplicate(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments']['duplicate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].deployments.duplicate.$post(args, options),
  )
}

export async function postFunctionsFunctionIdDeploymentsTemplate(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments']['template']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].deployments.template.$post(args, options),
  )
}

export async function postFunctionsFunctionIdDeploymentsVcs(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['vcs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].deployments.vcs.$post(args, options))
}

export async function getFunctionsFunctionIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].deployments[':deploymentId'].$get(args, options),
  )
}

export async function deleteFunctionsFunctionIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].deployments[':deploymentId'].$delete(args, options),
  )
}

export async function getFunctionsFunctionIdDeploymentsDeploymentIdDownload(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].deployments[':deploymentId'].download.$get(args, options),
  )
}

export async function patchFunctionsFunctionIdDeploymentsDeploymentIdStatus(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].deployments[':deploymentId'].status.$patch(args, options),
  )
}

export async function getFunctionsFunctionIdExecutions(
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].executions.$get(args, options))
}

export async function postFunctionsFunctionIdExecutions(
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].executions.$post(args, options))
}

export async function getFunctionsFunctionIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].executions[':executionId'].$get(args, options),
  )
}

export async function deleteFunctionsFunctionIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].executions[':executionId'].$delete(args, options),
  )
}

export async function getFunctionsFunctionIdVariables(
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].variables.$get(args, options))
}

export async function postFunctionsFunctionIdVariables(
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.functions[':functionId'].variables.$post(args, options))
}

export async function getFunctionsFunctionIdVariablesVariableId(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].variables[':variableId'].$get(args, options),
  )
}

export async function putFunctionsFunctionIdVariablesVariableId(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].variables[':variableId'].$put(args, options),
  )
}

export async function deleteFunctionsFunctionIdVariablesVariableId(
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.functions[':functionId'].variables[':variableId'].$delete(args, options),
  )
}

export async function postGraphql(options?: ClientRequestOptions) {
  return await parseResponse(client.graphql.$post(undefined, options))
}

export async function postGraphqlMutation(options?: ClientRequestOptions) {
  return await parseResponse(client.graphql.mutation.$post(undefined, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getHealthAntiVirus(options?: ClientRequestOptions) {
  return await parseResponse(client.health['anti-virus'].$get(undefined, options))
}

export async function getHealthCache(options?: ClientRequestOptions) {
  return await parseResponse(client.health.cache.$get(undefined, options))
}

export async function getHealthCertificate(
  args: InferRequestType<typeof client.health.certificate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.certificate.$get(args, options))
}

export async function getHealthDb(options?: ClientRequestOptions) {
  return await parseResponse(client.health.db.$get(undefined, options))
}

export async function getHealthPubsub(options?: ClientRequestOptions) {
  return await parseResponse(client.health.pubsub.$get(undefined, options))
}

export async function getHealthQueueBuilds(
  args: InferRequestType<typeof client.health.queue.builds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.builds.$get(args, options))
}

export async function getHealthQueueCertificates(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.certificates.$get(args, options))
}

export async function getHealthQueueDatabases(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.databases.$get(args, options))
}

export async function getHealthQueueDeletes(
  args: InferRequestType<typeof client.health.queue.deletes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.deletes.$get(args, options))
}

export async function getHealthQueueFailedName(
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.failed[':name'].$get(args, options))
}

export async function getHealthQueueFunctions(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.functions.$get(args, options))
}

export async function getHealthQueueLogs(
  args: InferRequestType<typeof client.health.queue.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.logs.$get(args, options))
}

export async function getHealthQueueMails(
  args: InferRequestType<typeof client.health.queue.mails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.mails.$get(args, options))
}

export async function getHealthQueueMessaging(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.messaging.$get(args, options))
}

export async function getHealthQueueMigrations(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.migrations.$get(args, options))
}

export async function getHealthQueueStatsResources(
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue['stats-resources'].$get(args, options))
}

export async function getHealthQueueStatsUsage(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue['stats-usage'].$get(args, options))
}

export async function getHealthQueueWebhooks(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.queue.webhooks.$get(args, options))
}

export async function getHealthStorage(options?: ClientRequestOptions) {
  return await parseResponse(client.health.storage.$get(undefined, options))
}

export async function getHealthStorageLocal(options?: ClientRequestOptions) {
  return await parseResponse(client.health.storage.local.$get(undefined, options))
}

export async function getHealthTime(options?: ClientRequestOptions) {
  return await parseResponse(client.health.time.$get(undefined, options))
}

export async function getLocale(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.$get(undefined, options))
}

export async function getLocaleCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.codes.$get(undefined, options))
}

export async function getLocaleContinents(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.continents.$get(undefined, options))
}

export async function getLocaleCountries(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.countries.$get(undefined, options))
}

export async function getLocaleCountriesEu(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.countries.eu.$get(undefined, options))
}

export async function getLocaleCountriesPhones(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.countries.phones.$get(undefined, options))
}

export async function getLocaleCurrencies(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.currencies.$get(undefined, options))
}

export async function getLocaleLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.locale.languages.$get(undefined, options))
}

export async function getMessagingMessages(
  args: InferRequestType<typeof client.messaging.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages.$get(args, options))
}

export async function postMessagingMessagesEmail(
  args: InferRequestType<typeof client.messaging.messages.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages.email.$post(args, options))
}

export async function patchMessagingMessagesEmailMessageId(
  args: InferRequestType<(typeof client.messaging.messages.email)[':messageId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages.email[':messageId'].$patch(args, options))
}

export async function postMessagingMessagesPush(
  args: InferRequestType<typeof client.messaging.messages.push.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages.push.$post(args, options))
}

export async function patchMessagingMessagesPushMessageId(
  args: InferRequestType<(typeof client.messaging.messages.push)[':messageId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages.push[':messageId'].$patch(args, options))
}

export async function postMessagingMessagesSms(
  args: InferRequestType<typeof client.messaging.messages.sms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages.sms.$post(args, options))
}

export async function patchMessagingMessagesSmsMessageId(
  args: InferRequestType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages.sms[':messageId'].$patch(args, options))
}

export async function getMessagingMessagesMessageId(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages[':messageId'].$get(args, options))
}

export async function deleteMessagingMessagesMessageId(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages[':messageId'].$delete(args, options))
}

export async function getMessagingMessagesMessageIdLogs(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages[':messageId'].logs.$get(args, options))
}

export async function getMessagingMessagesMessageIdTargets(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.messages[':messageId'].targets.$get(args, options))
}

export async function getMessagingProviders(
  args: InferRequestType<typeof client.messaging.providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.$get(args, options))
}

export async function postMessagingProvidersApns(
  args: InferRequestType<typeof client.messaging.providers.apns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.apns.$post(args, options))
}

export async function patchMessagingProvidersApnsProviderId(
  args: InferRequestType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.apns[':providerId'].$patch(args, options))
}

export async function postMessagingProvidersFcm(
  args: InferRequestType<typeof client.messaging.providers.fcm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.fcm.$post(args, options))
}

export async function patchMessagingProvidersFcmProviderId(
  args: InferRequestType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.fcm[':providerId'].$patch(args, options))
}

export async function postMessagingProvidersMailgun(
  args: InferRequestType<typeof client.messaging.providers.mailgun.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.mailgun.$post(args, options))
}

export async function patchMessagingProvidersMailgunProviderId(
  args: InferRequestType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.providers.mailgun[':providerId'].$patch(args, options),
  )
}

export async function postMessagingProvidersMsg91(
  args: InferRequestType<typeof client.messaging.providers.msg91.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.msg91.$post(args, options))
}

export async function patchMessagingProvidersMsg91ProviderId(
  args: InferRequestType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.msg91[':providerId'].$patch(args, options))
}

export async function postMessagingProvidersSendgrid(
  args: InferRequestType<typeof client.messaging.providers.sendgrid.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.sendgrid.$post(args, options))
}

export async function patchMessagingProvidersSendgridProviderId(
  args: InferRequestType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.providers.sendgrid[':providerId'].$patch(args, options),
  )
}

export async function postMessagingProvidersSmtp(
  args: InferRequestType<typeof client.messaging.providers.smtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.smtp.$post(args, options))
}

export async function patchMessagingProvidersSmtpProviderId(
  args: InferRequestType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.smtp[':providerId'].$patch(args, options))
}

export async function postMessagingProvidersTelesign(
  args: InferRequestType<typeof client.messaging.providers.telesign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.telesign.$post(args, options))
}

export async function patchMessagingProvidersTelesignProviderId(
  args: InferRequestType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.providers.telesign[':providerId'].$patch(args, options),
  )
}

export async function postMessagingProvidersTextmagic(
  args: InferRequestType<typeof client.messaging.providers.textmagic.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.textmagic.$post(args, options))
}

export async function patchMessagingProvidersTextmagicProviderId(
  args: InferRequestType<(typeof client.messaging.providers.textmagic)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.providers.textmagic[':providerId'].$patch(args, options),
  )
}

export async function postMessagingProvidersTwilio(
  args: InferRequestType<typeof client.messaging.providers.twilio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.twilio.$post(args, options))
}

export async function patchMessagingProvidersTwilioProviderId(
  args: InferRequestType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.twilio[':providerId'].$patch(args, options))
}

export async function postMessagingProvidersVonage(
  args: InferRequestType<typeof client.messaging.providers.vonage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.vonage.$post(args, options))
}

export async function patchMessagingProvidersVonageProviderId(
  args: InferRequestType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers.vonage[':providerId'].$patch(args, options))
}

export async function getMessagingProvidersProviderId(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers[':providerId'].$get(args, options))
}

export async function deleteMessagingProvidersProviderId(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers[':providerId'].$delete(args, options))
}

export async function getMessagingProvidersProviderIdLogs(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.providers[':providerId'].logs.$get(args, options))
}

export async function getMessagingSubscribersSubscriberIdLogs(
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.subscribers[':subscriberId'].logs.$get(args, options))
}

export async function getMessagingTopics(
  args: InferRequestType<typeof client.messaging.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics.$get(args, options))
}

export async function postMessagingTopics(
  args: InferRequestType<typeof client.messaging.topics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics.$post(args, options))
}

export async function getMessagingTopicsTopicId(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics[':topicId'].$get(args, options))
}

export async function deleteMessagingTopicsTopicId(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics[':topicId'].$delete(args, options))
}

export async function patchMessagingTopicsTopicId(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics[':topicId'].$patch(args, options))
}

export async function getMessagingTopicsTopicIdLogs(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics[':topicId'].logs.$get(args, options))
}

export async function getMessagingTopicsTopicIdSubscribers(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics[':topicId'].subscribers.$get(args, options))
}

export async function postMessagingTopicsTopicIdSubscribers(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messaging.topics[':topicId'].subscribers.$post(args, options))
}

export async function getMessagingTopicsTopicIdSubscribersSubscriberId(
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.topics[':topicId'].subscribers[':subscriberId'].$get(args, options),
  )
}

export async function deleteMessagingTopicsTopicIdSubscribersSubscriberId(
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.messaging.topics[':topicId'].subscribers[':subscriberId'].$delete(args, options),
  )
}

export async function getSites(
  args: InferRequestType<typeof client.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$get(args, options))
}

export async function postSites(
  args: InferRequestType<typeof client.sites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites.$post(args, options))
}

export async function getSitesFrameworks(options?: ClientRequestOptions) {
  return await parseResponse(client.sites.frameworks.$get(undefined, options))
}

export async function getSitesSpecifications(options?: ClientRequestOptions) {
  return await parseResponse(client.sites.specifications.$get(undefined, options))
}

export async function getSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].$get(args, options))
}

export async function putSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':siteId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].$put(args, options))
}

export async function deleteSitesSiteId(
  args: InferRequestType<(typeof client.sites)[':siteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].$delete(args, options))
}

export async function patchSitesSiteIdDeployment(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployment']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].deployment.$patch(args, options))
}

export async function getSitesSiteIdDeployments(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].deployments.$get(args, options))
}

export async function postSitesSiteIdDeployments(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].deployments.$post(args, options))
}

export async function postSitesSiteIdDeploymentsDuplicate(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].deployments.duplicate.$post(args, options))
}

export async function postSitesSiteIdDeploymentsTemplate(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].deployments.template.$post(args, options))
}

export async function postSitesSiteIdDeploymentsVcs(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].deployments.vcs.$post(args, options))
}

export async function getSitesSiteIdDeploymentsDeploymentId(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':siteId'].deployments[':deploymentId'].$get(args, options),
  )
}

export async function deleteSitesSiteIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':siteId'].deployments[':deploymentId'].$delete(args, options),
  )
}

export async function getSitesSiteIdDeploymentsDeploymentIdDownload(
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':siteId'].deployments[':deploymentId'].download.$get(args, options),
  )
}

export async function patchSitesSiteIdDeploymentsDeploymentIdStatus(
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':siteId'].deployments[':deploymentId'].status.$patch(args, options),
  )
}

export async function getSitesSiteIdLogs(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].logs.$get(args, options))
}

export async function getSitesSiteIdLogsLogId(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].logs[':logId'].$get(args, options))
}

export async function deleteSitesSiteIdLogsLogId(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].logs[':logId'].$delete(args, options))
}

export async function getSitesSiteIdVariables(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].variables.$get(args, options))
}

export async function postSitesSiteIdVariables(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].variables.$post(args, options))
}

export async function getSitesSiteIdVariablesVariableId(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].variables[':variableId'].$get(args, options))
}

export async function putSitesSiteIdVariablesVariableId(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sites[':siteId'].variables[':variableId'].$put(args, options))
}

export async function deleteSitesSiteIdVariablesVariableId(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sites[':siteId'].variables[':variableId'].$delete(args, options),
  )
}

export async function getStorageBuckets(
  args: InferRequestType<typeof client.storage.buckets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets.$get(args, options))
}

export async function postStorageBuckets(
  args: InferRequestType<typeof client.storage.buckets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets.$post(args, options))
}

export async function getStorageBucketsBucketId(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets[':bucketId'].$get(args, options))
}

export async function putStorageBucketsBucketId(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets[':bucketId'].$put(args, options))
}

export async function deleteStorageBucketsBucketId(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets[':bucketId'].$delete(args, options))
}

export async function getStorageBucketsBucketIdFiles(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets[':bucketId'].files.$get(args, options))
}

export async function postStorageBucketsBucketIdFiles(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage.buckets[':bucketId'].files.$post(args, options))
}

export async function getStorageBucketsBucketIdFilesFileId(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketId'].files[':fileId'].$get(args, options),
  )
}

export async function putStorageBucketsBucketIdFilesFileId(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketId'].files[':fileId'].$put(args, options),
  )
}

export async function deleteStorageBucketsBucketIdFilesFileId(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketId'].files[':fileId'].$delete(args, options),
  )
}

export async function getStorageBucketsBucketIdFilesFileIdDownload(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketId'].files[':fileId'].download.$get(args, options),
  )
}

export async function getStorageBucketsBucketIdFilesFileIdPreview(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketId'].files[':fileId'].preview.$get(args, options),
  )
}

export async function getStorageBucketsBucketIdFilesFileIdView(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage.buckets[':bucketId'].files[':fileId'].view.$get(args, options),
  )
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function postTeams(
  args: InferRequestType<typeof client.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$post(args, options))
}

export async function getTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].$get(args, options))
}

export async function putTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':teamId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].$put(args, options))
}

export async function deleteTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':teamId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].$delete(args, options))
}

export async function getTeamsTeamIdMemberships(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].memberships.$get(args, options))
}

export async function postTeamsTeamIdMemberships(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].memberships.$post(args, options))
}

export async function getTeamsTeamIdMembershipsMembershipId(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':teamId'].memberships[':membershipId'].$get(args, options),
  )
}

export async function deleteTeamsTeamIdMembershipsMembershipId(
  args: InferRequestType<
    (typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':teamId'].memberships[':membershipId'].$delete(args, options),
  )
}

export async function patchTeamsTeamIdMembershipsMembershipId(
  args: InferRequestType<
    (typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':teamId'].memberships[':membershipId'].$patch(args, options),
  )
}

export async function patchTeamsTeamIdMembershipsMembershipIdStatus(
  args: InferRequestType<
    (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams[':teamId'].memberships[':membershipId'].status.$patch(args, options),
  )
}

export async function getTeamsTeamIdPrefs(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].prefs.$get(args, options))
}

export async function putTeamsTeamIdPrefs(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':teamId'].prefs.$put(args, options))
}

export async function getTokensBucketsBucketIdFilesFileId(
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tokens.buckets[':bucketId'].files[':fileId'].$get(args, options),
  )
}

export async function postTokensBucketsBucketIdFilesFileId(
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tokens.buckets[':bucketId'].files[':fileId'].$post(args, options),
  )
}

export async function getTokensTokenId(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':tokenId'].$get(args, options))
}

export async function deleteTokensTokenId(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':tokenId'].$delete(args, options))
}

export async function patchTokensTokenId(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':tokenId'].$patch(args, options))
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

export async function postUsersArgon2(
  args: InferRequestType<typeof client.users.argon2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.argon2.$post(args, options))
}

export async function postUsersBcrypt(
  args: InferRequestType<typeof client.users.bcrypt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.bcrypt.$post(args, options))
}

export async function getUsersIdentities(
  args: InferRequestType<typeof client.users.identities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.identities.$get(args, options))
}

export async function deleteUsersIdentitiesIdentityId(
  args: InferRequestType<(typeof client.users.identities)[':identityId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.identities[':identityId'].$delete(args, options))
}

export async function postUsersMd5(
  args: InferRequestType<typeof client.users.md5.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.md5.$post(args, options))
}

export async function postUsersPhpass(
  args: InferRequestType<typeof client.users.phpass.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.phpass.$post(args, options))
}

export async function postUsersScrypt(
  args: InferRequestType<typeof client.users.scrypt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.scrypt.$post(args, options))
}

export async function postUsersScryptModified(
  args: InferRequestType<(typeof client.users)['scrypt-modified']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['scrypt-modified'].$post(args, options))
}

export async function postUsersSha(
  args: InferRequestType<typeof client.users.sha.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.sha.$post(args, options))
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

export async function patchUsersUserIdEmail(
  args: InferRequestType<(typeof client.users)[':userId']['email']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].email.$patch(args, options))
}

export async function postUsersUserIdJwts(
  args: InferRequestType<(typeof client.users)[':userId']['jwts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].jwts.$post(args, options))
}

export async function putUsersUserIdLabels(
  args: InferRequestType<(typeof client.users)[':userId']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].labels.$put(args, options))
}

export async function getUsersUserIdLogs(
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].logs.$get(args, options))
}

export async function getUsersUserIdMemberships(
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].memberships.$get(args, options))
}

export async function patchUsersUserIdMfa(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].mfa.$patch(args, options))
}

export async function deleteUsersUserIdMfaAuthenticatorsType(
  args: InferRequestType<
    (typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':userId'].mfa.authenticators[':type'].$delete(args, options),
  )
}

export async function getUsersUserIdMfaFactors(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].mfa.factors.$get(args, options))
}

export async function getUsersUserIdMfaRecoveryCodes(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].mfa['recovery-codes'].$get(args, options))
}

export async function putUsersUserIdMfaRecoveryCodes(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].mfa['recovery-codes'].$put(args, options))
}

export async function patchUsersUserIdMfaRecoveryCodes(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].mfa['recovery-codes'].$patch(args, options))
}

export async function patchUsersUserIdName(
  args: InferRequestType<(typeof client.users)[':userId']['name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].name.$patch(args, options))
}

export async function patchUsersUserIdPassword(
  args: InferRequestType<(typeof client.users)[':userId']['password']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].password.$patch(args, options))
}

export async function patchUsersUserIdPhone(
  args: InferRequestType<(typeof client.users)[':userId']['phone']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].phone.$patch(args, options))
}

export async function getUsersUserIdPrefs(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].prefs.$get(args, options))
}

export async function patchUsersUserIdPrefs(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].prefs.$patch(args, options))
}

export async function getUsersUserIdSessions(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].sessions.$get(args, options))
}

export async function postUsersUserIdSessions(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].sessions.$post(args, options))
}

export async function deleteUsersUserIdSessions(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].sessions.$delete(args, options))
}

export async function deleteUsersUserIdSessionsSessionId(
  args: InferRequestType<(typeof client.users)[':userId']['sessions'][':sessionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].sessions[':sessionId'].$delete(args, options))
}

export async function patchUsersUserIdStatus(
  args: InferRequestType<(typeof client.users)[':userId']['status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].status.$patch(args, options))
}

export async function getUsersUserIdTargets(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].targets.$get(args, options))
}

export async function postUsersUserIdTargets(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].targets.$post(args, options))
}

export async function getUsersUserIdTargetsTargetId(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].targets[':targetId'].$get(args, options))
}

export async function deleteUsersUserIdTargetsTargetId(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].targets[':targetId'].$delete(args, options))
}

export async function patchUsersUserIdTargetsTargetId(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].targets[':targetId'].$patch(args, options))
}

export async function postUsersUserIdTokens(
  args: InferRequestType<(typeof client.users)[':userId']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].tokens.$post(args, options))
}

export async function patchUsersUserIdVerification(
  args: InferRequestType<(typeof client.users)[':userId']['verification']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].verification.$patch(args, options))
}

export async function patchUsersUserIdVerificationPhone(
  args: InferRequestType<(typeof client.users)[':userId']['verification']['phone']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].verification.phone.$patch(args, options))
}
