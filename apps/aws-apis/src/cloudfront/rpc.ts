import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function put20200531DistributionTargetDistributionIdAssociateAliasAlias(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':TargetDistributionId']['associate-alias#Alias']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distribution[':TargetDistributionId']['associate-alias#Alias'].$put(
      args,
      options,
    ),
  )
}

export async function post20200531DistributionPrimaryDistributionIdCopy(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':PrimaryDistributionId']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distribution[':PrimaryDistributionId'].copy.$post(args, options),
  )
}

export async function get20200531CachePolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['cache-policy'].$get(args, options))
}

export async function post20200531CachePolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['cache-policy'].$post(args, options))
}

export async function get20200531OriginAccessIdentityCloudfront(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-identity'].cloudfront.$get(args, options),
  )
}

export async function post20200531OriginAccessIdentityCloudfront(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-identity'].cloudfront.$post(args, options),
  )
}

export async function get20200531ContinuousDeploymentPolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['continuous-deployment-policy'].$get(args, options),
  )
}

export async function post20200531ContinuousDeploymentPolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['continuous-deployment-policy'].$post(args, options),
  )
}

export async function get20200531Distribution(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].distribution.$get(args, options))
}

export async function post20200531Distribution(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].distribution.$post(args, options))
}

export async function post20200531DistributionWithTags(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['distribution#WithTags'].$post(args, options))
}

export async function get20200531FieldLevelEncryption(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['field-level-encryption'].$get(args, options))
}

export async function post20200531FieldLevelEncryption(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['field-level-encryption'].$post(args, options))
}

export async function get20200531FieldLevelEncryptionProfile(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption-profile'].$get(args, options),
  )
}

export async function post20200531FieldLevelEncryptionProfile(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption-profile'].$post(args, options),
  )
}

export async function get20200531Function(
  args: InferRequestType<(typeof client)['2020-05-31']['function']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].function.$get(args, options))
}

export async function post20200531Function(
  args: InferRequestType<(typeof client)['2020-05-31']['function']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].function.$post(args, options))
}

export async function get20200531DistributionDistributionIdInvalidation(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distribution[':DistributionId'].invalidation.$get(args, options),
  )
}

export async function post20200531DistributionDistributionIdInvalidation(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distribution[':DistributionId'].invalidation.$post(args, options),
  )
}

export async function get20200531KeyGroup(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['key-group'].$get(args, options))
}

export async function post20200531KeyGroup(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['key-group'].$post(args, options))
}

export async function get20200531DistributionsDistributionIdMonitoringSubscriptionIndex(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributions[':DistributionId']['monitoring-subscription'].index.$get(
      args,
      options,
    ),
  )
}

export async function post20200531DistributionsDistributionIdMonitoringSubscriptionIndex(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributions[':DistributionId']['monitoring-subscription'].index.$post(
      args,
      options,
    ),
  )
}

export async function delete20200531DistributionsDistributionIdMonitoringSubscriptionIndex(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributions[':DistributionId']['monitoring-subscription'].index.$delete(
      args,
      options,
    ),
  )
}

export async function get20200531OriginAccessControl(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['origin-access-control'].$get(args, options))
}

export async function post20200531OriginAccessControl(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['origin-access-control'].$post(args, options))
}

export async function get20200531OriginRequestPolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['origin-request-policy'].$get(args, options))
}

export async function post20200531OriginRequestPolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['origin-request-policy'].$post(args, options))
}

export async function get20200531PublicKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['public-key'].$get(args, options))
}

export async function post20200531PublicKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['public-key'].$post(args, options))
}

export async function get20200531RealtimeLogConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['realtime-log-config'].$get(args, options))
}

export async function post20200531RealtimeLogConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['realtime-log-config'].$post(args, options))
}

export async function get20200531ResponseHeadersPolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['response-headers-policy'].$get(args, options))
}

export async function post20200531ResponseHeadersPolicy(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['response-headers-policy'].$post(args, options))
}

export async function get20200531StreamingDistribution(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['streaming-distribution'].$get(args, options))
}

export async function post20200531StreamingDistribution(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['streaming-distribution'].$post(args, options))
}

export async function post20200531StreamingDistributionWithTags(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['streaming-distribution#WithTags'].$post(args, options),
  )
}

export async function get20200531CachePolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['cache-policy'][':Id'].$get(args, options))
}

export async function put20200531CachePolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['cache-policy'][':Id'].$put(args, options))
}

export async function delete20200531CachePolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['cache-policy'][':Id'].$delete(args, options))
}

export async function get20200531OriginAccessIdentityCloudfrontId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$get(args, options),
  )
}

export async function delete20200531OriginAccessIdentityCloudfrontId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$delete(args, options),
  )
}

export async function get20200531ContinuousDeploymentPolicyId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['continuous-deployment-policy'][':Id'].$get(args, options),
  )
}

export async function put20200531ContinuousDeploymentPolicyId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['continuous-deployment-policy'][':Id'].$put(args, options),
  )
}

export async function delete20200531ContinuousDeploymentPolicyId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['continuous-deployment-policy'][':Id'].$delete(args, options),
  )
}

export async function get20200531DistributionId(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].distribution[':Id'].$get(args, options))
}

export async function delete20200531DistributionId(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].distribution[':Id'].$delete(args, options))
}

export async function get20200531FieldLevelEncryptionId(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption'][':Id'].$get(args, options),
  )
}

export async function delete20200531FieldLevelEncryptionId(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption'][':Id'].$delete(args, options),
  )
}

export async function get20200531FieldLevelEncryptionProfileId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption-profile'][':Id'].$get(args, options),
  )
}

export async function delete20200531FieldLevelEncryptionProfileId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption-profile'][':Id'].$delete(args, options),
  )
}

export async function put20200531FunctionNameIfMatch(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].function[':Name#If-Match'].$put(args, options))
}

export async function delete20200531FunctionNameIfMatch(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].function[':Name#If-Match'].$delete(args, options))
}

export async function get20200531KeyGroupId(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['key-group'][':Id'].$get(args, options))
}

export async function put20200531KeyGroupId(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['key-group'][':Id'].$put(args, options))
}

export async function delete20200531KeyGroupId(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['key-group'][':Id'].$delete(args, options))
}

export async function get20200531OriginAccessControlId(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-control'][':Id'].$get(args, options),
  )
}

export async function delete20200531OriginAccessControlId(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-control'][':Id'].$delete(args, options),
  )
}

export async function get20200531OriginRequestPolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-request-policy'][':Id'].$get(args, options),
  )
}

export async function put20200531OriginRequestPolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-request-policy'][':Id'].$put(args, options),
  )
}

export async function delete20200531OriginRequestPolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-request-policy'][':Id'].$delete(args, options),
  )
}

export async function get20200531PublicKeyId(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['public-key'][':Id'].$get(args, options))
}

export async function delete20200531PublicKeyId(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['public-key'][':Id'].$delete(args, options))
}

export async function post20200531DeleteRealtimeLogConfigIndex(
  args: InferRequestType<
    (typeof client)['2020-05-31']['delete-realtime-log-config']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['delete-realtime-log-config'].index.$post(args, options),
  )
}

export async function get20200531ResponseHeadersPolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['response-headers-policy'][':Id'].$get(args, options),
  )
}

export async function put20200531ResponseHeadersPolicyId(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['response-headers-policy'][':Id'].$put(args, options),
  )
}

export async function delete20200531ResponseHeadersPolicyId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['response-headers-policy'][':Id'].$delete(args, options),
  )
}

export async function get20200531StreamingDistributionId(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['streaming-distribution'][':Id'].$get(args, options),
  )
}

export async function delete20200531StreamingDistributionId(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['streaming-distribution'][':Id'].$delete(args, options),
  )
}

export async function get20200531FunctionNameDescribe(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].function[':Name'].describe.$get(args, options))
}

export async function get20200531CachePolicyIdConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['cache-policy'][':Id'].config.$get(args, options))
}

export async function get20200531OriginAccessIdentityCloudfrontIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$get(args, options),
  )
}

export async function put20200531OriginAccessIdentityCloudfrontIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$put(args, options),
  )
}

export async function get20200531ContinuousDeploymentPolicyIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['continuous-deployment-policy'][':Id'].config.$get(args, options),
  )
}

export async function get20200531DistributionIdConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].distribution[':Id'].config.$get(args, options))
}

export async function put20200531DistributionIdConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].distribution[':Id'].config.$put(args, options))
}

export async function get20200531FieldLevelEncryptionIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption'][':Id'].config.$get(args, options),
  )
}

export async function put20200531FieldLevelEncryptionIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption'][':Id'].config.$put(args, options),
  )
}

export async function get20200531FieldLevelEncryptionProfileIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$get(args, options),
  )
}

export async function put20200531FieldLevelEncryptionProfileIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$put(args, options),
  )
}

export async function get20200531FunctionName(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31'].function[':Name'].$get(args, options))
}

export async function get20200531DistributionDistributionIdInvalidationId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distribution[':DistributionId'].invalidation[':Id'].$get(args, options),
  )
}

export async function get20200531KeyGroupIdConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['key-group'][':Id'].config.$get(args, options))
}

export async function get20200531OriginAccessControlIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-control'][':Id'].config.$get(args, options),
  )
}

export async function put20200531OriginAccessControlIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-access-control'][':Id'].config.$put(args, options),
  )
}

export async function get20200531OriginRequestPolicyIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['origin-request-policy'][':Id'].config.$get(args, options),
  )
}

export async function get20200531PublicKeyIdConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['public-key'][':Id'].config.$get(args, options))
}

export async function put20200531PublicKeyIdConfig(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['public-key'][':Id'].config.$put(args, options))
}

export async function post20200531GetRealtimeLogConfigIndex(
  args: InferRequestType<
    (typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['get-realtime-log-config'].index.$post(args, options),
  )
}

export async function get20200531ResponseHeadersPolicyIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['response-headers-policy'][':Id'].config.$get(args, options),
  )
}

export async function get20200531StreamingDistributionIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['streaming-distribution'][':Id'].config.$get(args, options),
  )
}

export async function put20200531StreamingDistributionIdConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['streaming-distribution'][':Id'].config.$put(args, options),
  )
}

export async function get20200531ConflictingAliasDistributionIdAlias(
  args: InferRequestType<
    (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['conflicting-alias#DistributionId&Alias'].$get(args, options),
  )
}

export async function get20200531DistributionsByCachePolicyIdCachePolicyId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributionsByCachePolicyId[':CachePolicyId'].$get(args, options),
  )
}

export async function get20200531DistributionsByKeyGroupIdKeyGroupId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributionsByKeyGroupId[':KeyGroupId'].$get(args, options),
  )
}

export async function get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributionsByOriginRequestPolicyId[':OriginRequestPolicyId'].$get(
      args,
      options,
    ),
  )
}

export async function post20200531DistributionsByRealtimeLogConfigIndex(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByRealtimeLogConfig']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributionsByRealtimeLogConfig.index.$post(args, options),
  )
}

export async function get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributionsByResponseHeadersPolicyId[':ResponseHeadersPolicyId'].$get(
      args,
      options,
    ),
  )
}

export async function get20200531DistributionsByWebACLIdWebACLId(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distributionsByWebACLId[':WebACLId'].$get(args, options),
  )
}

export async function get20200531TaggingResource(
  args: InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['tagging#Resource'].$get(args, options))
}

export async function post20200531FunctionNamePublishIfMatch(
  args: InferRequestType<
    (typeof client)['2020-05-31']['function'][':Name']['publish#If-Match']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].function[':Name']['publish#If-Match'].$post(args, options),
  )
}

export async function post20200531TaggingOperationTagResource(
  args: InferRequestType<(typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['tagging#Operation=Tag&Resource'].$post(args, options),
  )
}

export async function post20200531FunctionNameTestIfMatch(
  args: InferRequestType<
    (typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].function[':Name']['test#If-Match'].$post(args, options),
  )
}

export async function post20200531TaggingOperationUntagResource(
  args: InferRequestType<
    (typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31']['tagging#Operation=Untag&Resource'].$post(args, options),
  )
}

export async function put20200531DistributionIdPromoteStagingConfig(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':Id']['promote-staging-config']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2020-05-31'].distribution[':Id']['promote-staging-config'].$put(args, options),
  )
}

export async function put20200531RealtimeLogConfigIndex(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2020-05-31']['realtime-log-config'].index.$put(args, options))
}
