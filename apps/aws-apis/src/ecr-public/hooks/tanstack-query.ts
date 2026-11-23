import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityKey() {
  return ['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability'] as const
}

export function getXAmzTargetSpencerFrontendServiceBatchDeleteImageKey() {
  return ['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage'] as const
}

export function getXAmzTargetSpencerFrontendServiceCompleteLayerUploadKey() {
  return ['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload'] as const
}

export function getXAmzTargetSpencerFrontendServiceCreateRepositoryKey() {
  return ['#X-Amz-Target=SpencerFrontendService.CreateRepository'] as const
}

export function getXAmzTargetSpencerFrontendServiceDeleteRepositoryKey() {
  return ['#X-Amz-Target=SpencerFrontendService.DeleteRepository'] as const
}

export function getXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyKey() {
  return ['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy'] as const
}

export function getXAmzTargetSpencerFrontendServiceDescribeImageTagsKey() {
  return ['#X-Amz-Target=SpencerFrontendService.DescribeImageTags'] as const
}

export function getXAmzTargetSpencerFrontendServiceDescribeImagesKey() {
  return ['#X-Amz-Target=SpencerFrontendService.DescribeImages'] as const
}

export function getXAmzTargetSpencerFrontendServiceDescribeRegistriesKey() {
  return ['#X-Amz-Target=SpencerFrontendService.DescribeRegistries'] as const
}

export function getXAmzTargetSpencerFrontendServiceDescribeRepositoriesKey() {
  return ['#X-Amz-Target=SpencerFrontendService.DescribeRepositories'] as const
}

export function getXAmzTargetSpencerFrontendServiceGetAuthorizationTokenKey() {
  return ['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken'] as const
}

export function getXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataKey() {
  return ['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData'] as const
}

export function getXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataKey() {
  return ['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData'] as const
}

export function getXAmzTargetSpencerFrontendServiceGetRepositoryPolicyKey() {
  return ['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy'] as const
}

export function getXAmzTargetSpencerFrontendServiceInitiateLayerUploadKey() {
  return ['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload'] as const
}

export function getXAmzTargetSpencerFrontendServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=SpencerFrontendService.ListTagsForResource'] as const
}

export function getXAmzTargetSpencerFrontendServicePutImageKey() {
  return ['#X-Amz-Target=SpencerFrontendService.PutImage'] as const
}

export function getXAmzTargetSpencerFrontendServicePutRegistryCatalogDataKey() {
  return ['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData'] as const
}

export function getXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataKey() {
  return ['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData'] as const
}

export function getXAmzTargetSpencerFrontendServiceSetRepositoryPolicyKey() {
  return ['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy'] as const
}

export function getXAmzTargetSpencerFrontendServiceTagResourceKey() {
  return ['#X-Amz-Target=SpencerFrontendService.TagResource'] as const
}

export function getXAmzTargetSpencerFrontendServiceUntagResourceKey() {
  return ['#X-Amz-Target=SpencerFrontendService.UntagResource'] as const
}

export function getXAmzTargetSpencerFrontendServiceUploadLayerPartKey() {
  return ['#X-Amz-Target=SpencerFrontendService.UploadLayerPart'] as const
}

export function getPostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability',
    '/#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceBatchDeleteImageMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.BatchDeleteImage',
    '/#X-Amz-Target=SpencerFrontendService.BatchDeleteImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceBatchDeleteImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceBatchDeleteImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceBatchDeleteImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceBatchDeleteImageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceCompleteLayerUploadMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload',
    '/#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceCompleteLayerUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceCompleteLayerUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceCompleteLayerUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceCompleteLayerUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceCreateRepositoryMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.CreateRepository',
    '/#X-Amz-Target=SpencerFrontendService.CreateRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceCreateRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceCreateRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.CreateRepository'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceCreateRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceCreateRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DeleteRepository',
    '/#X-Amz-Target=SpencerFrontendService.DeleteRepository',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.DeleteRepository'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceDeleteRepository<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy',
    '/#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeImageTagsMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeImageTags',
    '/#X-Amz-Target=SpencerFrontendService.DescribeImageTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeImageTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceDescribeImageTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.DescribeImageTags'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeImageTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceDescribeImageTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeImagesMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeImages',
    '/#X-Amz-Target=SpencerFrontendService.DescribeImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceDescribeImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.DescribeImages'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceDescribeImagesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeRegistriesMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeRegistries',
    '/#X-Amz-Target=SpencerFrontendService.DescribeRegistries',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeRegistriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceDescribeRegistriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.DescribeRegistries'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeRegistries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceDescribeRegistriesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeRepositoriesMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeRepositories',
    '/#X-Amz-Target=SpencerFrontendService.DescribeRepositories',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceDescribeRepositoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.DescribeRepositories'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeRepositories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceDescribeRepositoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceGetAuthorizationTokenMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken',
    '/#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceGetAuthorizationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceGetAuthorizationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceGetAuthorizationToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceGetAuthorizationTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceGetRegistryCatalogData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceGetRepositoryPolicyMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy',
    '/#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceGetRepositoryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceGetRepositoryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceGetRepositoryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceGetRepositoryPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceInitiateLayerUploadMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload',
    '/#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceInitiateLayerUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceInitiateLayerUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceInitiateLayerUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceInitiateLayerUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.ListTagsForResource',
    '/#X-Amz-Target=SpencerFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServicePutImageMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.PutImage',
    '/#X-Amz-Target=SpencerFrontendService.PutImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServicePutImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServicePutImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.PutImage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServicePutImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServicePutImageMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServicePutRegistryCatalogDataMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServicePutRegistryCatalogDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServicePutRegistryCatalogDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServicePutRegistryCatalogData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServicePutRegistryCatalogDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServicePutRepositoryCatalogData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceSetRepositoryPolicyMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy',
    '/#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceSetRepositoryPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceSetRepositoryPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceSetRepositoryPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSpencerFrontendServiceSetRepositoryPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.TagResource',
    '/#X-Amz-Target=SpencerFrontendService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceTagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.UntagResource',
    '/#X-Amz-Target=SpencerFrontendService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceUntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetSpencerFrontendServiceUploadLayerPartMutationKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.UploadLayerPart',
    '/#X-Amz-Target=SpencerFrontendService.UploadLayerPart',
    'POST',
  ] as const
}

export function getPostXAmzTargetSpencerFrontendServiceUploadLayerPartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSpencerFrontendServiceUploadLayerPartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SpencerFrontendService.UploadLayerPart'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSpencerFrontendServiceUploadLayerPart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSpencerFrontendServiceUploadLayerPartMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
