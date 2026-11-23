import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability',
    '/#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailability<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSpencerFrontendServiceBatchCheckLayerAvailabilityKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceBatchDeleteImageKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.BatchDeleteImage',
    '/#X-Amz-Target=SpencerFrontendService.BatchDeleteImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceBatchDeleteImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceBatchDeleteImageKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.BatchDeleteImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceCompleteLayerUploadKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload',
    '/#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceCompleteLayerUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceCompleteLayerUploadKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceCreateRepositoryKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.CreateRepository',
    '/#X-Amz-Target=SpencerFrontendService.CreateRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceCreateRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceCreateRepositoryKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.CreateRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.CreateRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DeleteRepository',
    '/#X-Amz-Target=SpencerFrontendService.DeleteRepository',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceDeleteRepository<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepository']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.DeleteRepository'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy',
    '/#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceDeleteRepositoryPolicyKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeImageTagsKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeImageTags',
    '/#X-Amz-Target=SpencerFrontendService.DescribeImageTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeImageTags<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceDescribeImageTagsKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImageTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.DescribeImageTags'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeImagesKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeImages',
    '/#X-Amz-Target=SpencerFrontendService.DescribeImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceDescribeImagesKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.DescribeImages'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeRegistriesKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeRegistries',
    '/#X-Amz-Target=SpencerFrontendService.DescribeRegistries',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeRegistries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceDescribeRegistriesKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRegistries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.DescribeRegistries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceDescribeRepositoriesKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.DescribeRepositories',
    '/#X-Amz-Target=SpencerFrontendService.DescribeRepositories',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceDescribeRepositories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceDescribeRepositoriesKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.DescribeRepositories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.DescribeRepositories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceGetAuthorizationTokenKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken',
    '/#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceGetAuthorizationToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceGetAuthorizationTokenKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceGetRegistryCatalogData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceGetRegistryCatalogDataKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceGetRepositoryCatalogDataKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceGetRepositoryPolicyKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy',
    '/#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceGetRepositoryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceGetRepositoryPolicyKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceInitiateLayerUploadKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload',
    '/#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceInitiateLayerUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceInitiateLayerUploadKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.ListTagsForResource',
    '/#X-Amz-Target=SpencerFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServicePutImageKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.PutImage',
    '/#X-Amz-Target=SpencerFrontendService.PutImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServicePutImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServicePutImageKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.PutImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.PutImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServicePutRegistryCatalogDataKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServicePutRegistryCatalogData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServicePutRegistryCatalogDataKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData',
    '/#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServicePutRepositoryCatalogData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServicePutRepositoryCatalogDataKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceSetRepositoryPolicyKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy',
    '/#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceSetRepositoryPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceSetRepositoryPolicyKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceTagResourceKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.TagResource',
    '/#X-Amz-Target=SpencerFrontendService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.UntagResource',
    '/#X-Amz-Target=SpencerFrontendService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSpencerFrontendServiceUploadLayerPartKey() {
  return [
    '#X-Amz-Target=SpencerFrontendService.UploadLayerPart',
    '/#X-Amz-Target=SpencerFrontendService.UploadLayerPart',
    'POST',
  ] as const
}

export function usePostXAmzTargetSpencerFrontendServiceUploadLayerPart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSpencerFrontendServiceUploadLayerPartKey()
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
            (typeof client)['#X-Amz-Target=SpencerFrontendService.UploadLayerPart']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SpencerFrontendService.UploadLayerPart'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
