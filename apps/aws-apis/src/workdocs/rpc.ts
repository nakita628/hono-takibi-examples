import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1DocumentsDocumentIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':DocumentId'].versions[':VersionId'].$get(args, options),
  )
}

export async function deleteApiV1DocumentsDocumentIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':DocumentId'].versions[':VersionId'].$delete(args, options),
  )
}

export async function patchApiV1DocumentsDocumentIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':DocumentId'].versions[':VersionId'].$patch(args, options),
  )
}

export async function postApiV1UsersUserIdActivation(
  args: InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':UserId'].activation.$post(args, options))
}

export async function deleteApiV1UsersUserIdActivation(
  args: InferRequestType<(typeof client.api.v1.users)[':UserId']['activation']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':UserId'].activation.$delete(args, options))
}

export async function getApiV1ResourcesResourceIdPermissions(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.resources[':ResourceId'].permissions.$get(args, options))
}

export async function postApiV1ResourcesResourceIdPermissions(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.resources[':ResourceId'].permissions.$post(args, options),
  )
}

export async function deleteApiV1ResourcesResourceIdPermissions(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['permissions']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.resources[':ResourceId'].permissions.$delete(args, options),
  )
}

export async function postApiV1DocumentsDocumentIdVersionsVersionIdComment(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':DocumentId'].versions[':VersionId'].comment.$post(args, options),
  )
}

export async function putApiV1ResourcesResourceIdCustomMetadata(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.resources[':ResourceId'].customMetadata.$put(args, options),
  )
}

export async function deleteApiV1ResourcesResourceIdCustomMetadata(
  args: InferRequestType<
    (typeof client.api.v1.resources)[':ResourceId']['customMetadata']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.resources[':ResourceId'].customMetadata.$delete(args, options),
  )
}

export async function postApiV1Folders(
  args: InferRequestType<typeof client.api.v1.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.folders.$post(args, options))
}

export async function putApiV1ResourcesResourceIdLabels(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.resources[':ResourceId'].labels.$put(args, options))
}

export async function deleteApiV1ResourcesResourceIdLabels(
  args: InferRequestType<(typeof client.api.v1.resources)[':ResourceId']['labels']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.resources[':ResourceId'].labels.$delete(args, options))
}

export async function getApiV1OrganizationsOrganizationIdSubscriptions(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':OrganizationId'].subscriptions.$get(args, options),
  )
}

export async function postApiV1OrganizationsOrganizationIdSubscriptions(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':OrganizationId'].subscriptions.$post(args, options),
  )
}

export async function getApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$get(args, options))
}

export async function postApiV1Users(
  args: InferRequestType<typeof client.api.v1.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users.$post(args, options))
}

export async function deleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentId(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comment'][':CommentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':DocumentId'].versions[':VersionId'].comment[':CommentId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiV1DocumentsDocumentId(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents[':DocumentId'].$get(args, options))
}

export async function deleteApiV1DocumentsDocumentId(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents[':DocumentId'].$delete(args, options))
}

export async function patchApiV1DocumentsDocumentId(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents[':DocumentId'].$patch(args, options))
}

export async function deleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersions(
  args: InferRequestType<
    (typeof client.api.v1.documentVersions)[':DocumentId']['versions'][':VersionId#deletePriorVersions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documentVersions[':DocumentId'].versions[
      ':VersionId#deletePriorVersions'
    ].$delete(args, options),
  )
}

export async function getApiV1FoldersFolderId(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.folders[':FolderId'].$get(args, options))
}

export async function deleteApiV1FoldersFolderId(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.folders[':FolderId'].$delete(args, options))
}

export async function patchApiV1FoldersFolderId(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.folders[':FolderId'].$patch(args, options))
}

export async function getApiV1FoldersFolderIdContents(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.folders[':FolderId'].contents.$get(args, options))
}

export async function deleteApiV1FoldersFolderIdContents(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['contents']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.folders[':FolderId'].contents.$delete(args, options))
}

export async function deleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.api.v1.organizations)[':OrganizationId']['subscriptions'][':SubscriptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.organizations[':OrganizationId'].subscriptions[':SubscriptionId'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteApiV1UsersUserId(
  args: InferRequestType<(typeof client.api.v1.users)[':UserId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':UserId'].$delete(args, options))
}

export async function patchApiV1UsersUserId(
  args: InferRequestType<(typeof client.api.v1.users)[':UserId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.users[':UserId'].$patch(args, options))
}

export async function getApiV1Activities(
  args: InferRequestType<typeof client.api.v1.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.activities.$get(args, options))
}

export async function getApiV1DocumentsDocumentIdVersionsVersionIdComments(
  args: InferRequestType<
    (typeof client.api.v1.documents)[':DocumentId']['versions'][':VersionId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documents[':DocumentId'].versions[':VersionId'].comments.$get(args, options),
  )
}

export async function getApiV1DocumentsDocumentIdVersions(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents[':DocumentId'].versions.$get(args, options))
}

export async function getApiV1GroupsSearchQuery(
  args: InferRequestType<(typeof client.api.v1)['groups#searchQuery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['groups#searchQuery'].$get(args, options))
}

export async function getApiV1MeRootAuthentication(
  args: InferRequestType<(typeof client.api.v1.me)['root#Authentication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.me['root#Authentication'].$get(args, options))
}

export async function getApiV1MeAuthentication(
  args: InferRequestType<(typeof client.api.v1)['me#Authentication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['me#Authentication'].$get(args, options))
}

export async function getApiV1DocumentsDocumentIdPath(
  args: InferRequestType<(typeof client.api.v1.documents)[':DocumentId']['path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents[':DocumentId'].path.$get(args, options))
}

export async function getApiV1FoldersFolderIdPath(
  args: InferRequestType<(typeof client.api.v1.folders)[':FolderId']['path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.folders[':FolderId'].path.$get(args, options))
}

export async function getApiV1Resources(
  args: InferRequestType<typeof client.api.v1.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.resources.$get(args, options))
}

export async function postApiV1Documents(
  args: InferRequestType<typeof client.api.v1.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.documents.$post(args, options))
}

export async function deleteApiV1ResourcesResourceIdPermissionsPrincipalId(
  args: InferRequestType<
    (typeof client.api.v1.resources)[':ResourceId']['permissions'][':PrincipalId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.resources[':ResourceId'].permissions[':PrincipalId'].$delete(args, options),
  )
}

export async function postApiV1DocumentVersionsRestoreDocumentId(
  args: InferRequestType<(typeof client.api.v1.documentVersions.restore)[':DocumentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.documentVersions.restore[':DocumentId'].$post(args, options),
  )
}

export async function postApiV1Search(
  args: InferRequestType<typeof client.api.v1.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.search.$post(args, options))
}
