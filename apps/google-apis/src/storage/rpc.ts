import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getB(
  args: InferRequestType<typeof client.b.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b.$get(args, options))
}

export async function postB(
  args: InferRequestType<typeof client.b.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b.$post(args, options))
}

export async function getBBucket(
  args: InferRequestType<(typeof client.b)[':bucket']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].$get(args, options))
}

export async function putBBucket(
  args: InferRequestType<(typeof client.b)[':bucket']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].$put(args, options))
}

export async function deleteBBucket(
  args: InferRequestType<(typeof client.b)[':bucket']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].$delete(args, options))
}

export async function patchBBucket(
  args: InferRequestType<(typeof client.b)[':bucket']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].$patch(args, options))
}

export async function getBBucketAcl(
  args: InferRequestType<(typeof client.b)[':bucket']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].acl.$get(args, options))
}

export async function postBBucketAcl(
  args: InferRequestType<(typeof client.b)[':bucket']['acl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].acl.$post(args, options))
}

export async function getBBucketAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].acl[':entity'].$get(args, options))
}

export async function putBBucketAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].acl[':entity'].$put(args, options))
}

export async function deleteBBucketAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].acl[':entity'].$delete(args, options))
}

export async function patchBBucketAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['acl'][':entity']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].acl[':entity'].$patch(args, options))
}

export async function getBBucketDefaultObjectAcl(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].defaultObjectAcl.$get(args, options))
}

export async function postBBucketDefaultObjectAcl(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].defaultObjectAcl.$post(args, options))
}

export async function getBBucketDefaultObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$get(args, options))
}

export async function putBBucketDefaultObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$put(args, options))
}

export async function deleteBBucketDefaultObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$delete(args, options))
}

export async function patchBBucketDefaultObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['defaultObjectAcl'][':entity']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].defaultObjectAcl[':entity'].$patch(args, options))
}

export async function getBBucketIam(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].iam.$get(args, options))
}

export async function putBBucketIam(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].iam.$put(args, options))
}

export async function getBBucketIamTestPermissions(
  args: InferRequestType<(typeof client.b)[':bucket']['iam']['testPermissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].iam.testPermissions.$get(args, options))
}

export async function postBBucketLockRetentionPolicy(
  args: InferRequestType<(typeof client.b)[':bucket']['lockRetentionPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].lockRetentionPolicy.$post(args, options))
}

export async function getBBucketNotificationConfigs(
  args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].notificationConfigs.$get(args, options))
}

export async function postBBucketNotificationConfigs(
  args: InferRequestType<(typeof client.b)[':bucket']['notificationConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].notificationConfigs.$post(args, options))
}

export async function getBBucketNotificationConfigsNotification(
  args: InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.b[':bucket'].notificationConfigs[':notification'].$get(args, options),
  )
}

export async function deleteBBucketNotificationConfigsNotification(
  args: InferRequestType<
    (typeof client.b)[':bucket']['notificationConfigs'][':notification']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.b[':bucket'].notificationConfigs[':notification'].$delete(args, options),
  )
}

export async function getBBucketO(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o.$get(args, options))
}

export async function postBBucketO(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o.$post(args, options))
}

export async function postBBucketOWatch(
  args: InferRequestType<(typeof client.b)[':bucket']['o']['watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o.watch.$post(args, options))
}

export async function getBBucketOObject(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].$get(args, options))
}

export async function putBBucketOObject(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].$put(args, options))
}

export async function deleteBBucketOObject(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].$delete(args, options))
}

export async function patchBBucketOObject(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].$patch(args, options))
}

export async function getBBucketOObjectAcl(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].acl.$get(args, options))
}

export async function postBBucketOObjectAcl(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].acl.$post(args, options))
}

export async function getBBucketOObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$get(args, options))
}

export async function putBBucketOObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$put(args, options))
}

export async function deleteBBucketOObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$delete(args, options))
}

export async function patchBBucketOObjectAclEntity(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['acl'][':entity']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].acl[':entity'].$patch(args, options))
}

export async function getBBucketOObjectIam(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].iam.$get(args, options))
}

export async function putBBucketOObjectIam(
  args: InferRequestType<(typeof client.b)[':bucket']['o'][':object']['iam']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.b[':bucket'].o[':object'].iam.$put(args, options))
}

export async function getBBucketOObjectIamTestPermissions(
  args: InferRequestType<
    (typeof client.b)[':bucket']['o'][':object']['iam']['testPermissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.b[':bucket'].o[':object'].iam.testPermissions.$get(args, options),
  )
}

export async function postBDestinationBucketODestinationObjectCompose(
  args: InferRequestType<
    (typeof client.b)[':destinationBucket']['o'][':destinationObject']['compose']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.b[':destinationBucket'].o[':destinationObject'].compose.$post(args, options),
  )
}

export async function postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObject(
  args: InferRequestType<
    (typeof client.b)[':sourceBucket']['o'][':sourceObject']['copyTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.b[':sourceBucket'].o[':sourceObject'].copyTo.b[':destinationBucket'].o[
      ':destinationObject'
    ].$post(args, options),
  )
}

export async function postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObject(
  args: InferRequestType<
    (typeof client.b)[':sourceBucket']['o'][':sourceObject']['rewriteTo']['b'][':destinationBucket']['o'][':destinationObject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.b[':sourceBucket'].o[':sourceObject'].rewriteTo.b[':destinationBucket'].o[
      ':destinationObject'
    ].$post(args, options),
  )
}

export async function postChannelsStop(
  args: InferRequestType<typeof client.channels.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.stop.$post(args, options))
}

export async function getProjectsProjectIdHmacKeys(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].hmacKeys.$get(args, options))
}

export async function postProjectsProjectIdHmacKeys(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].hmacKeys.$post(args, options))
}

export async function getProjectsProjectIdHmacKeysAccessId(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].hmacKeys[':accessId'].$get(args, options),
  )
}

export async function putProjectsProjectIdHmacKeysAccessId(
  args: InferRequestType<(typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].hmacKeys[':accessId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdHmacKeysAccessId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['hmacKeys'][':accessId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].hmacKeys[':accessId'].$delete(args, options),
  )
}

export async function getProjectsProjectIdServiceAccount(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].serviceAccount.$get(args, options))
}
