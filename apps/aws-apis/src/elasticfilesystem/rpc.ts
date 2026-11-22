import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get20150201AccessPoints(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['access-points'].$get(args, options))
}

export async function post20150201AccessPoints(
  args: InferRequestType<(typeof client)['2015-02-01']['access-points']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['access-points'].$post(args, options))
}

export async function get20150201FileSystems(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['file-systems'].$get(args, options))
}

export async function post20150201FileSystems(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['file-systems'].$post(args, options))
}

export async function get20150201MountTargets(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['mount-targets'].$get(args, options))
}

export async function post20150201MountTargets(
  args: InferRequestType<(typeof client)['2015-02-01']['mount-targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['mount-targets'].$post(args, options))
}

export async function post20150201FileSystemsSourceFileSystemIdReplicationConfiguration(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration'].$post(
      args,
      options,
    ),
  )
}

export async function delete20150201FileSystemsSourceFileSystemIdReplicationConfiguration(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':SourceFileSystemId']['replication-configuration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':SourceFileSystemId'][
      'replication-configuration'
    ].$delete(args, options),
  )
}

export async function post20150201CreateTagsFileSystemId(
  args: InferRequestType<(typeof client)['2015-02-01']['create-tags'][':FileSystemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['create-tags'][':FileSystemId'].$post(args, options),
  )
}

export async function delete20150201AccessPointsAccessPointId(
  args: InferRequestType<
    (typeof client)['2015-02-01']['access-points'][':AccessPointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['access-points'][':AccessPointId'].$delete(args, options),
  )
}

export async function put20150201FileSystemsFileSystemId(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId'].$put(args, options),
  )
}

export async function delete20150201FileSystemsFileSystemId(
  args: InferRequestType<(typeof client)['2015-02-01']['file-systems'][':FileSystemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId'].$delete(args, options),
  )
}

export async function get20150201FileSystemsFileSystemIdPolicy(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId'].policy.$get(args, options),
  )
}

export async function put20150201FileSystemsFileSystemIdPolicy(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId'].policy.$put(args, options),
  )
}

export async function delete20150201FileSystemsFileSystemIdPolicy(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['policy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId'].policy.$delete(args, options),
  )
}

export async function delete20150201MountTargetsMountTargetId(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['mount-targets'][':MountTargetId'].$delete(args, options),
  )
}

export async function post20150201DeleteTagsFileSystemId(
  args: InferRequestType<(typeof client)['2015-02-01']['delete-tags'][':FileSystemId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['delete-tags'][':FileSystemId'].$post(args, options),
  )
}

export async function get20150201AccountPreferences(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['account-preferences'].$get(args, options))
}

export async function put20150201AccountPreferences(
  args: InferRequestType<(typeof client)['2015-02-01']['account-preferences']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01']['account-preferences'].$put(args, options))
}

export async function get20150201FileSystemsFileSystemIdBackupPolicy(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId']['backup-policy'].$get(args, options),
  )
}

export async function put20150201FileSystemsFileSystemIdBackupPolicy(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['backup-policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId']['backup-policy'].$put(args, options),
  )
}

export async function get20150201FileSystemsFileSystemIdLifecycleConfiguration(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration'].$get(
      args,
      options,
    ),
  )
}

export async function put20150201FileSystemsFileSystemIdLifecycleConfiguration(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems'][':FileSystemId']['lifecycle-configuration'].$put(
      args,
      options,
    ),
  )
}

export async function get20150201MountTargetsMountTargetIdSecurityGroups(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['mount-targets'][':MountTargetId']['security-groups'].$get(args, options),
  )
}

export async function put20150201MountTargetsMountTargetIdSecurityGroups(
  args: InferRequestType<
    (typeof client)['2015-02-01']['mount-targets'][':MountTargetId']['security-groups']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['mount-targets'][':MountTargetId']['security-groups'].$put(args, options),
  )
}

export async function get20150201FileSystemsReplicationConfigurations(
  args: InferRequestType<
    (typeof client)['2015-02-01']['file-systems']['replication-configurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['file-systems']['replication-configurations'].$get(args, options),
  )
}

export async function get20150201TagsFileSystemIdIndex(
  args: InferRequestType<(typeof client)['2015-02-01']['tags'][':FileSystemId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-02-01'].tags[':FileSystemId'].index.$get(args, options))
}

export async function get20150201ResourceTagsResourceId(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['resource-tags'][':ResourceId'].$get(args, options),
  )
}

export async function post20150201ResourceTagsResourceId(
  args: InferRequestType<(typeof client)['2015-02-01']['resource-tags'][':ResourceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['resource-tags'][':ResourceId'].$post(args, options),
  )
}

export async function delete20150201ResourceTagsResourceIdTagKeys(
  args: InferRequestType<
    (typeof client)['2015-02-01']['resource-tags'][':ResourceId#tagKeys']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-02-01']['resource-tags'][':ResourceId#tagKeys'].$delete(args, options),
  )
}
