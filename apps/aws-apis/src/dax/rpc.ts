import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonDAXV3CreateCluster(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonDAXV3.CreateCluster'].$post(args, options))
}

export async function postXAmzTargetAmazonDAXV3CreateParameterGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3CreateSubnetGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DecreaseReplicationFactor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DeleteCluster(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonDAXV3.DeleteCluster'].$post(args, options))
}

export async function postXAmzTargetAmazonDAXV3DeleteParameterGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DeleteSubnetGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DescribeClusters(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DescribeClusters'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DescribeDefaultParameters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DescribeEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DescribeEvents'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DescribeParameterGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DescribeParameters(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DescribeParameters'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3DescribeSubnetGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3IncreaseReplicationFactor(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3ListTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonDAXV3.ListTags'].$post(args, options))
}

export async function postXAmzTargetAmazonDAXV3RebootNode(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonDAXV3.RebootNode'].$post(args, options))
}

export async function postXAmzTargetAmazonDAXV3TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonDAXV3.TagResource'].$post(args, options))
}

export async function postXAmzTargetAmazonDAXV3UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonDAXV3.UntagResource'].$post(args, options))
}

export async function postXAmzTargetAmazonDAXV3UpdateCluster(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AmazonDAXV3.UpdateCluster'].$post(args, options))
}

export async function postXAmzTargetAmazonDAXV3UpdateParameterGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonDAXV3UpdateSubnetGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup'].$post(args, options),
  )
}
