import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPermissionGroupPermissionGroupIdUsersUserId(
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['permission-group'][':permissionGroupId'].users[':userId'].$post(args, options),
  )
}

export async function deletePermissionGroupPermissionGroupIdUsersUserId(
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['permission-group'][':permissionGroupId'].users[':userId'].$delete(args, options),
  )
}

export async function getDatasetsDatasetIdChangesetsv2(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].changesetsv2.$get(args, options))
}

export async function postDatasetsDatasetIdChangesetsv2(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['changesetsv2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].changesetsv2.$post(args, options))
}

export async function getDatasetsDatasetIdDataviewsv2(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].dataviewsv2.$get(args, options))
}

export async function postDatasetsDatasetIdDataviewsv2(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['dataviewsv2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':datasetId'].dataviewsv2.$post(args, options))
}

export async function getDatasetsv2(
  args: InferRequestType<typeof client.datasetsv2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasetsv2.$get(args, options))
}

export async function postDatasetsv2(
  args: InferRequestType<typeof client.datasetsv2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasetsv2.$post(args, options))
}

export async function postPermissionGroup(
  args: InferRequestType<(typeof client)['permission-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['permission-group'].$post(args, options))
}

export async function postUser(
  args: InferRequestType<typeof client.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$post(args, options))
}

export async function getDatasetsv2DatasetId(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasetsv2[':datasetId'].$get(args, options))
}

export async function putDatasetsv2DatasetId(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasetsv2[':datasetId'].$put(args, options))
}

export async function deleteDatasetsv2DatasetId(
  args: InferRequestType<(typeof client.datasetsv2)[':datasetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasetsv2[':datasetId'].$delete(args, options))
}

export async function getPermissionGroupPermissionGroupId(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['permission-group'][':permissionGroupId'].$get(args, options))
}

export async function putPermissionGroupPermissionGroupId(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['permission-group'][':permissionGroupId'].$put(args, options))
}

export async function deletePermissionGroupPermissionGroupId(
  args: InferRequestType<(typeof client)['permission-group'][':permissionGroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['permission-group'][':permissionGroupId'].$delete(args, options),
  )
}

export async function postUserUserIdDisable(
  args: InferRequestType<(typeof client.user)[':userId']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].disable.$post(args, options))
}

export async function postUserUserIdEnable(
  args: InferRequestType<(typeof client.user)[':userId']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].enable.$post(args, options))
}

export async function getDatasetsDatasetIdChangesetsv2ChangesetId(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasets[':datasetId'].changesetsv2[':changesetId'].$get(args, options),
  )
}

export async function putDatasetsDatasetIdChangesetsv2ChangesetId(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['changesetsv2'][':changesetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasets[':datasetId'].changesetsv2[':changesetId'].$put(args, options),
  )
}

export async function getDatasetsDatasetIdDataviewsv2DataviewId(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasets[':datasetId'].dataviewsv2[':dataviewId'].$get(args, options),
  )
}

export async function postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetails(
  args: InferRequestType<
    (typeof client.datasets)[':datasetId']['dataviewsv2'][':dataviewId']['external-access-details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.datasets[':datasetId'].dataviewsv2[':dataviewId']['external-access-details'].$post(
      args,
      options,
    ),
  )
}

export async function getCredentialsProgrammaticEnvironmentId(
  args: InferRequestType<(typeof client.credentials)['programmatic#environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials['programmatic#environmentId'].$get(args, options))
}

export async function getUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$get(args, options))
}

export async function putUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$put(args, options))
}

export async function postWorkingLocationV1(
  args: InferRequestType<typeof client.workingLocationV1.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workingLocationV1.$post(args, options))
}

export async function getPermissionGroupMaxResults(
  args: InferRequestType<(typeof client)['permission-group#maxResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['permission-group#maxResults'].$get(args, options))
}

export async function getUserUserIdPermissionGroupsMaxResults(
  args: InferRequestType<(typeof client.user)[':userId']['permission-groups#maxResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userId']['permission-groups#maxResults'].$get(args, options),
  )
}

export async function getUserMaxResults(
  args: InferRequestType<(typeof client)['user#maxResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user#maxResults'].$get(args, options))
}

export async function getPermissionGroupPermissionGroupIdUsersMaxResults(
  args: InferRequestType<
    (typeof client)['permission-group'][':permissionGroupId']['users#maxResults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['permission-group'][':permissionGroupId']['users#maxResults'].$get(args, options),
  )
}

export async function postUserUserIdPassword(
  args: InferRequestType<(typeof client.user)[':userId']['password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].password.$post(args, options))
}
