import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration',
  ] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus',
  ] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules',
  ] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration',
  ] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration',
  ] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration',
  ] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource'] as const
}

export function getXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart'] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailability<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistry<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutability<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreview<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
