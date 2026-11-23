import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUpload(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistry(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreview(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUpload(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921ListImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutability(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScan(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreview(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPart(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart'].$post(
      args,
      options,
    ),
  )
}
