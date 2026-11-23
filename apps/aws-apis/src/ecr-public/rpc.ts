import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceBatchDeleteImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceCompleteLayerUpload(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceCreateRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.CreateRepository'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceDeleteRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.DeleteRepository'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceDescribeImageTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.DescribeImageTags'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceDescribeImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.DescribeImages'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceDescribeRegistries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.DescribeRegistries'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceDescribeRepositories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.DescribeRepositories'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceGetAuthorizationToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceGetRegistryCatalogData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceGetRepositoryCatalogData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceGetRepositoryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceInitiateLayerUpload(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServicePutImage(
  args: InferRequestType<(typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.PutImage'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServicePutRegistryCatalogData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServicePutRepositoryCatalogData(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceSetRepositoryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetSpencerFrontendServiceUploadLayerPart(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SpencerFrontendService.UploadLayerPart'].$post(args, options),
  )
}
