import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchCheckLayerAvailabilityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchDeleteImageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetImageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921BatchGetRepositoryScanningConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CompleteLayerUploadMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreatePullThroughCacheRuleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921CreateRepositoryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteLifecyclePolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeletePullThroughCacheRuleMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRegistryPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DeleteRepositoryPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImagesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribePullThroughCacheRulesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRegistryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeRepositoriesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetAuthorizationTokenMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetDownloadUrlForLayerMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetLifecyclePolicyPreviewMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRegistryScanningConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921GetRepositoryPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921InitiateLayerUploadMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListImagesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921ListTagsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageScanningConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutImageTagMutabilityMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutLifecyclePolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutRegistryScanningConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921PutReplicationConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921SetRepositoryPolicyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartImageScanMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921StartLifecyclePolicyPreviewMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921TagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UntagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart',
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerRegistryV20150921UploadLayerPartMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
