import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV20180820AccesspointNameXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspoint[':name#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820AccesspointNameXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspoint[':name#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820AccesspointNameXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspoint[':name#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820AccesspointforobjectlambdaNameXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820AccesspointforobjectlambdaNameXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820AccesspointforobjectlambdaNameXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name#x-amz-account-id'].$delete(args, options),
  )
}

export async function putV20180820BucketName(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820.bucket[':name'].$put(args, options))
}

export async function getV20180820JobsXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820['jobs#x-amz-account-id'].$get(args, options))
}

export async function postV20180820JobsXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820)['jobs#x-amz-account-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820['jobs#x-amz-account-id'].$post(args, options))
}

export async function postV20180820AsyncRequestsMrapCreateXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap']['create#x-amz-account-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820['async-requests'].mrap['create#x-amz-account-id'].$post(args, options),
  )
}

export async function getV20180820AccesspointNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820AccesspointNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820AccesspointNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policy#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspoint[':name']['policy#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$get(
      args,
      options,
    ),
  )
}

export async function putV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV20180820AccesspointforobjectlambdaNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policy#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name']['policy#x-amz-account-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV20180820BucketNameXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820.bucket[':name#x-amz-account-id'].$get(args, options))
}

export async function deleteV20180820BucketNameXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.bucket)[':name#x-amz-account-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820BucketNameLifecycleconfigurationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820BucketNameLifecycleconfigurationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820BucketNameLifecycleconfigurationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['lifecycleconfiguration#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['lifecycleconfiguration#x-amz-account-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV20180820BucketNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['policy#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820BucketNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['policy#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820BucketNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['policy#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['policy#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820BucketNameReplicationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['replication#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820BucketNameReplicationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['replication#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820BucketNameReplicationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['replication#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['replication#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820BucketNameTaggingXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820BucketNameTaggingXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820BucketNameTaggingXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['tagging#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['tagging#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820JobsIdTaggingXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820JobsIdTaggingXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820JobsIdTaggingXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.jobs)[':id']['tagging#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.jobs[':id']['tagging#x-amz-account-id'].$delete(args, options),
  )
}

export async function postV20180820AsyncRequestsMrapDeleteXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap']['delete#x-amz-account-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820['async-requests'].mrap['delete#x-amz-account-id'].$post(args, options),
  )
}

export async function getV20180820ConfigurationPublicAccessBlockXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820ConfigurationPublicAccessBlockXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820ConfigurationPublicAccessBlockXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.configuration)['publicAccessBlock#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.configuration['publicAccessBlock#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820StoragelensStoragelensidXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820StoragelensStoragelensidXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820StoragelensStoragelensidXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.storagelens[':storagelensid#x-amz-account-id'].$delete(args, options),
  )
}

export async function getV20180820StoragelensStoragelensidTaggingXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820StoragelensStoragelensidTaggingXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$put(args, options),
  )
}

export async function deleteV20180820StoragelensStoragelensidTaggingXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.storagelens)[':storagelensid']['tagging#x-amz-account-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.storagelens[':storagelensid']['tagging#x-amz-account-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV20180820JobsIdXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.jobs)[':id#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820.jobs[':id#x-amz-account-id'].$get(args, options))
}

export async function getV20180820AsyncRequestsMrapRequestTokenXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap'][':request_token#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820['async-requests'].mrap[':request_token#x-amz-account-id'].$get(args, options),
  )
}

export async function getV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name']['configuration#x-amz-account-id'].$get(
      args,
      options,
    ),
  )
}

export async function putV20180820AccesspointforobjectlambdaNameConfigurationXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['configuration#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name']['configuration#x-amz-account-id'].$put(
      args,
      options,
    ),
  )
}

export async function getV20180820AccesspointNamePolicyStatusXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspoint)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspoint[':name']['policyStatus#x-amz-account-id'].$get(args, options),
  )
}

export async function getV20180820AccesspointforobjectlambdaNamePolicyStatusXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.accesspointforobjectlambda)[':name']['policyStatus#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.accesspointforobjectlambda[':name']['policyStatus#x-amz-account-id'].$get(
      args,
      options,
    ),
  )
}

export async function getV20180820BucketNameVersioningXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$get(args, options),
  )
}

export async function putV20180820BucketNameVersioningXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.bucket)[':name']['versioning#x-amz-account-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.bucket[':name']['versioning#x-amz-account-id'].$put(args, options),
  )
}

export async function getV20180820MrapInstancesNameXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.mrap.instances[':name#x-amz-account-id'].$get(args, options),
  )
}

export async function getV20180820MrapInstancesNamePolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policy#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.mrap.instances[':name']['policy#x-amz-account-id'].$get(args, options),
  )
}

export async function getV20180820MrapInstancesNamePolicystatusXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':name']['policystatus#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.mrap.instances[':name']['policystatus#x-amz-account-id'].$get(args, options),
  )
}

export async function getV20180820MrapInstancesMrapRoutesXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$get(args, options),
  )
}

export async function patchV20180820MrapInstancesMrapRoutesXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820.mrap.instances)[':mrap']['routes#x-amz-account-id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.mrap.instances[':mrap']['routes#x-amz-account-id'].$patch(args, options),
  )
}

export async function getV20180820AccesspointXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820)['accesspoint#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820['accesspoint#x-amz-account-id'].$get(args, options))
}

export async function getV20180820AccesspointforobjectlambdaXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820)['accesspointforobjectlambda#x-amz-account-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820['accesspointforobjectlambda#x-amz-account-id'].$get(args, options),
  )
}

export async function getV20180820MrapInstancesXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820.mrap)['instances#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.mrap['instances#x-amz-account-id'].$get(args, options),
  )
}

export async function getV20180820BucketXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820)['bucket#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820['bucket#x-amz-account-id'].$get(args, options))
}

export async function getV20180820StoragelensXAmzAccountId(
  args: InferRequestType<(typeof client.v20180820)['storagelens#x-amz-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20180820['storagelens#x-amz-account-id'].$get(args, options))
}

export async function postV20180820AsyncRequestsMrapPutPolicyXAmzAccountId(
  args: InferRequestType<
    (typeof client.v20180820)['async-requests']['mrap']['put-policy#x-amz-account-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820['async-requests'].mrap['put-policy#x-amz-account-id'].$post(args, options),
  )
}

export async function postV20180820JobsIdPriorityXAmzAccountIdPriority(
  args: InferRequestType<
    (typeof client.v20180820.jobs)[':id']['priority#x-amz-account-id&priority']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.jobs[':id']['priority#x-amz-account-id&priority'].$post(args, options),
  )
}

export async function postV20180820JobsIdStatusXAmzAccountIdRequestedJobStatus(
  args: InferRequestType<
    (typeof client.v20180820.jobs)[':id']['status#x-amz-account-id&requestedJobStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20180820.jobs[':id']['status#x-amz-account-id&requestedJobStatus'].$post(args, options),
  )
}
