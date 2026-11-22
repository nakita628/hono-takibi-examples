import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetMediaStore20170901CreateContainer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.CreateContainer'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901DeleteContainer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.DeleteContainer'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901DeleteContainerPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901DeleteCorsPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901DeleteLifecyclePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901DeleteMetricPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901DescribeContainer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.DescribeContainer'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901GetContainerPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901GetCorsPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901GetLifecyclePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901GetMetricPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901ListContainers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.ListContainers'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901PutContainerPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901PutCorsPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901PutLifecyclePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901PutMetricPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901StartAccessLogging(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.StartAccessLogging'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901StopAccessLogging(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.StopAccessLogging'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetMediaStore20170901UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=MediaStore_20170901.UntagResource'].$post(args, options),
  )
}
