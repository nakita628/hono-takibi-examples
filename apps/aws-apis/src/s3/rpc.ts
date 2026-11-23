import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBucketKeyUploadId(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#uploadId'].$get(args, options))
}

export async function postBucketKeyUploadId(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#uploadId'].$post(args, options))
}

export async function deleteBucketKeyUploadId(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploadId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#uploadId'].$delete(args, options))
}

export async function putBucketKeyXAmzCopySource(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#x-amz-copy-source']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#x-amz-copy-source'].$put(args, options))
}

export async function getBucket(
  args: InferRequestType<(typeof client)[':Bucket']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'].$get(args, options))
}

export async function putBucket(
  args: InferRequestType<(typeof client)[':Bucket']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'].$put(args, options))
}

export async function deleteBucket(
  args: InferRequestType<(typeof client)[':Bucket']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'].$delete(args, options))
}

export async function headBucket(
  args: InferRequestType<(typeof client)[':Bucket']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'].$head(args, options))
}

export async function postBucketKeyUploads(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#uploads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#uploads'].$post(args, options))
}

export async function getBucketAnalyticsId(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#analytics&id'].$get(args, options))
}

export async function putBucketAnalyticsId(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#analytics&id'].$put(args, options))
}

export async function deleteBucketAnalyticsId(
  args: InferRequestType<(typeof client)[':Bucket#analytics&id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#analytics&id'].$delete(args, options))
}

export async function getBucketCors(
  args: InferRequestType<(typeof client)[':Bucket#cors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#cors'].$get(args, options))
}

export async function putBucketCors(
  args: InferRequestType<(typeof client)[':Bucket#cors']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#cors'].$put(args, options))
}

export async function deleteBucketCors(
  args: InferRequestType<(typeof client)[':Bucket#cors']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#cors'].$delete(args, options))
}

export async function getBucketEncryption(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#encryption'].$get(args, options))
}

export async function putBucketEncryption(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#encryption'].$put(args, options))
}

export async function deleteBucketEncryption(
  args: InferRequestType<(typeof client)[':Bucket#encryption']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#encryption'].$delete(args, options))
}

export async function getBucketIntelligentTieringId(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#intelligent-tiering&id'].$get(args, options))
}

export async function putBucketIntelligentTieringId(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#intelligent-tiering&id'].$put(args, options))
}

export async function deleteBucketIntelligentTieringId(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering&id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#intelligent-tiering&id'].$delete(args, options))
}

export async function getBucketInventoryId(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#inventory&id'].$get(args, options))
}

export async function putBucketInventoryId(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#inventory&id'].$put(args, options))
}

export async function deleteBucketInventoryId(
  args: InferRequestType<(typeof client)[':Bucket#inventory&id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#inventory&id'].$delete(args, options))
}

export async function getBucketLifecycle(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#lifecycle'].$get(args, options))
}

export async function putBucketLifecycle(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#lifecycle'].$put(args, options))
}

export async function deleteBucketLifecycle(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#lifecycle'].$delete(args, options))
}

export async function getBucketMetricsId(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#metrics&id'].$get(args, options))
}

export async function putBucketMetricsId(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#metrics&id'].$put(args, options))
}

export async function deleteBucketMetricsId(
  args: InferRequestType<(typeof client)[':Bucket#metrics&id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#metrics&id'].$delete(args, options))
}

export async function getBucketOwnershipControls(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#ownershipControls'].$get(args, options))
}

export async function putBucketOwnershipControls(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#ownershipControls'].$put(args, options))
}

export async function deleteBucketOwnershipControls(
  args: InferRequestType<(typeof client)[':Bucket#ownershipControls']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#ownershipControls'].$delete(args, options))
}

export async function getBucketPolicy(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#policy'].$get(args, options))
}

export async function putBucketPolicy(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#policy'].$put(args, options))
}

export async function deleteBucketPolicy(
  args: InferRequestType<(typeof client)[':Bucket#policy']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#policy'].$delete(args, options))
}

export async function getBucketReplication(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#replication'].$get(args, options))
}

export async function putBucketReplication(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#replication'].$put(args, options))
}

export async function deleteBucketReplication(
  args: InferRequestType<(typeof client)[':Bucket#replication']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#replication'].$delete(args, options))
}

export async function getBucketTagging(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#tagging'].$get(args, options))
}

export async function putBucketTagging(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#tagging'].$put(args, options))
}

export async function deleteBucketTagging(
  args: InferRequestType<(typeof client)[':Bucket#tagging']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#tagging'].$delete(args, options))
}

export async function getBucketWebsite(
  args: InferRequestType<(typeof client)[':Bucket#website']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#website'].$get(args, options))
}

export async function putBucketWebsite(
  args: InferRequestType<(typeof client)[':Bucket#website']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#website'].$put(args, options))
}

export async function deleteBucketWebsite(
  args: InferRequestType<(typeof client)[':Bucket#website']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#website'].$delete(args, options))
}

export async function getBucketKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key'].$get(args, options))
}

export async function putBucketKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key'].$put(args, options))
}

export async function deleteBucketKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key'].$delete(args, options))
}

export async function headBucketKey(
  args: InferRequestType<(typeof client)[':Bucket'][':Key']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key'].$head(args, options))
}

export async function getBucketKeyTagging(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#tagging'].$get(args, options))
}

export async function putBucketKeyTagging(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#tagging'].$put(args, options))
}

export async function deleteBucketKeyTagging(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#tagging']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#tagging'].$delete(args, options))
}

export async function postBucketDelete(
  args: InferRequestType<(typeof client)[':Bucket#delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#delete'].$post(args, options))
}

export async function getBucketPublicAccessBlock(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#publicAccessBlock'].$get(args, options))
}

export async function putBucketPublicAccessBlock(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#publicAccessBlock'].$put(args, options))
}

export async function deleteBucketPublicAccessBlock(
  args: InferRequestType<(typeof client)[':Bucket#publicAccessBlock']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#publicAccessBlock'].$delete(args, options))
}

export async function getBucketAccelerate(
  args: InferRequestType<(typeof client)[':Bucket#accelerate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#accelerate'].$get(args, options))
}

export async function putBucketAccelerate(
  args: InferRequestType<(typeof client)[':Bucket#accelerate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#accelerate'].$put(args, options))
}

export async function getBucketAcl(
  args: InferRequestType<(typeof client)[':Bucket#acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#acl'].$get(args, options))
}

export async function putBucketAcl(
  args: InferRequestType<(typeof client)[':Bucket#acl']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#acl'].$put(args, options))
}

export async function getBucketLifecycleDeprecated(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#lifecycle&deprecated!'].$get(args, options))
}

export async function putBucketLifecycleDeprecated(
  args: InferRequestType<(typeof client)[':Bucket#lifecycle&deprecated!']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#lifecycle&deprecated!'].$put(args, options))
}

export async function getBucketLocation(
  args: InferRequestType<(typeof client)[':Bucket#location']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#location'].$get(args, options))
}

export async function getBucketLogging(
  args: InferRequestType<(typeof client)[':Bucket#logging']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#logging'].$get(args, options))
}

export async function putBucketLogging(
  args: InferRequestType<(typeof client)[':Bucket#logging']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#logging'].$put(args, options))
}

export async function getBucketNotification(
  args: InferRequestType<(typeof client)[':Bucket#notification']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#notification'].$get(args, options))
}

export async function putBucketNotification(
  args: InferRequestType<(typeof client)[':Bucket#notification']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#notification'].$put(args, options))
}

export async function getBucketNotificationDeprecated(
  args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#notification&deprecated!'].$get(args, options))
}

export async function putBucketNotificationDeprecated(
  args: InferRequestType<(typeof client)[':Bucket#notification&deprecated!']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#notification&deprecated!'].$put(args, options))
}

export async function getBucketPolicyStatus(
  args: InferRequestType<(typeof client)[':Bucket#policyStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#policyStatus'].$get(args, options))
}

export async function getBucketRequestPayment(
  args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#requestPayment'].$get(args, options))
}

export async function putBucketRequestPayment(
  args: InferRequestType<(typeof client)[':Bucket#requestPayment']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#requestPayment'].$put(args, options))
}

export async function getBucketVersioning(
  args: InferRequestType<(typeof client)[':Bucket#versioning']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#versioning'].$get(args, options))
}

export async function putBucketVersioning(
  args: InferRequestType<(typeof client)[':Bucket#versioning']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#versioning'].$put(args, options))
}

export async function getBucketKeyAcl(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#acl'].$get(args, options))
}

export async function putBucketKeyAcl(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#acl']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#acl'].$put(args, options))
}

export async function getBucketKeyAttributesXAmzObjectAttributes(
  args: InferRequestType<
    (typeof client)[':Bucket'][':Key#attributes&x-amz-object-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Bucket'][':Key#attributes&x-amz-object-attributes'].$get(args, options),
  )
}

export async function getBucketKeyLegalHold(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#legal-hold'].$get(args, options))
}

export async function putBucketKeyLegalHold(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#legal-hold']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#legal-hold'].$put(args, options))
}

export async function getBucketObjectLock(
  args: InferRequestType<(typeof client)[':Bucket#object-lock']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#object-lock'].$get(args, options))
}

export async function putBucketObjectLock(
  args: InferRequestType<(typeof client)[':Bucket#object-lock']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#object-lock'].$put(args, options))
}

export async function getBucketKeyRetention(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#retention'].$get(args, options))
}

export async function putBucketKeyRetention(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#retention']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#retention'].$put(args, options))
}

export async function getBucketKeyTorrent(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#torrent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#torrent'].$get(args, options))
}

export async function getBucketAnalytics(
  args: InferRequestType<(typeof client)[':Bucket#analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#analytics'].$get(args, options))
}

export async function getBucketIntelligentTiering(
  args: InferRequestType<(typeof client)[':Bucket#intelligent-tiering']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#intelligent-tiering'].$get(args, options))
}

export async function getBucketInventory(
  args: InferRequestType<(typeof client)[':Bucket#inventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#inventory'].$get(args, options))
}

export async function getBucketMetrics(
  args: InferRequestType<(typeof client)[':Bucket#metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#metrics'].$get(args, options))
}

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function getBucketUploads(
  args: InferRequestType<(typeof client)[':Bucket#uploads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#uploads'].$get(args, options))
}

export async function getBucketVersions(
  args: InferRequestType<(typeof client)[':Bucket#versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#versions'].$get(args, options))
}

export async function getBucketListType2(
  args: InferRequestType<(typeof client)[':Bucket#list-type=2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket#list-type=2'].$get(args, options))
}

export async function postBucketKeyRestore(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#restore'].$post(args, options))
}

export async function postBucketKeySelectSelectType2(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#select&select-type=2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#select&select-type=2'].$post(args, options))
}

export async function putBucketKeyPartNumberUploadId(
  args: InferRequestType<(typeof client)[':Bucket'][':Key#partNumber&uploadId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':Bucket'][':Key#partNumber&uploadId'].$put(args, options))
}

export async function putBucketKeyXAmzCopySourcePartNumberUploadId(
  args: InferRequestType<
    (typeof client)[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':Bucket'][':Key#x-amz-copy-source&partNumber&uploadId'].$put(args, options),
  )
}

export async function postWriteGetObjectResponseXAmzRequestRouteXAmzRequestToken(
  args: InferRequestType<
    (typeof client)['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['WriteGetObjectResponse#x-amz-request-route&x-amz-request-token'].$post(args, options),
  )
}
