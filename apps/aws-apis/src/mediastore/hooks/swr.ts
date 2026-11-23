import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetMediaStore_20170901CreateContainerKey() {
  return ['#X-Amz-Target=MediaStore_20170901.CreateContainer'] as const
}

export function getXAmzTargetMediaStore_20170901DeleteContainerKey() {
  return ['#X-Amz-Target=MediaStore_20170901.DeleteContainer'] as const
}

export function getXAmzTargetMediaStore_20170901DeleteContainerPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901DeleteCorsPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901DeleteLifecyclePolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy'] as const
}

export function getXAmzTargetMediaStore_20170901DeleteMetricPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901DescribeContainerKey() {
  return ['#X-Amz-Target=MediaStore_20170901.DescribeContainer'] as const
}

export function getXAmzTargetMediaStore_20170901GetContainerPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901GetCorsPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901GetLifecyclePolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy'] as const
}

export function getXAmzTargetMediaStore_20170901GetMetricPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901ListContainersKey() {
  return ['#X-Amz-Target=MediaStore_20170901.ListContainers'] as const
}

export function getXAmzTargetMediaStore_20170901ListTagsForResourceKey() {
  return ['#X-Amz-Target=MediaStore_20170901.ListTagsForResource'] as const
}

export function getXAmzTargetMediaStore_20170901PutContainerPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901PutCorsPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901PutLifecyclePolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy'] as const
}

export function getXAmzTargetMediaStore_20170901PutMetricPolicyKey() {
  return ['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy'] as const
}

export function getXAmzTargetMediaStore_20170901StartAccessLoggingKey() {
  return ['#X-Amz-Target=MediaStore_20170901.StartAccessLogging'] as const
}

export function getXAmzTargetMediaStore_20170901StopAccessLoggingKey() {
  return ['#X-Amz-Target=MediaStore_20170901.StopAccessLogging'] as const
}

export function getXAmzTargetMediaStore_20170901TagResourceKey() {
  return ['#X-Amz-Target=MediaStore_20170901.TagResource'] as const
}

export function getXAmzTargetMediaStore_20170901UntagResourceKey() {
  return ['#X-Amz-Target=MediaStore_20170901.UntagResource'] as const
}

export function getPostXAmzTargetMediaStore20170901CreateContainerKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.CreateContainer',
    '/#X-Amz-Target=MediaStore_20170901.CreateContainer',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901CreateContainer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901CreateContainerKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.CreateContainer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901DeleteContainerKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteContainer',
    '/#X-Amz-Target=MediaStore_20170901.DeleteContainer',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901DeleteContainer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901DeleteContainerKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.DeleteContainer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901DeleteContainerPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901DeleteContainerPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901DeleteContainerPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901DeleteCorsPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901DeleteCorsPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901DeleteCorsPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901DeleteLifecyclePolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901DeleteLifecyclePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901DeleteLifecyclePolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901DeleteMetricPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901DeleteMetricPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901DeleteMetricPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901DescribeContainerKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DescribeContainer',
    '/#X-Amz-Target=MediaStore_20170901.DescribeContainer',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901DescribeContainer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901DescribeContainerKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.DescribeContainer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901GetContainerPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetContainerPolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetContainerPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901GetContainerPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901GetContainerPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901GetCorsPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetCorsPolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetCorsPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901GetCorsPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901GetCorsPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901GetLifecyclePolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901GetLifecyclePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901GetLifecyclePolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901GetMetricPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetMetricPolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetMetricPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901GetMetricPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901GetMetricPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901ListContainersKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.ListContainers',
    '/#X-Amz-Target=MediaStore_20170901.ListContainers',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901ListContainers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901ListContainersKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.ListContainers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.ListTagsForResource',
    '/#X-Amz-Target=MediaStore_20170901.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901PutContainerPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutContainerPolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutContainerPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901PutContainerPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901PutContainerPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901PutCorsPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutCorsPolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutCorsPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901PutCorsPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901PutCorsPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901PutLifecyclePolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901PutLifecyclePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901PutLifecyclePolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901PutMetricPolicyKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutMetricPolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutMetricPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901PutMetricPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901PutMetricPolicyKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901StartAccessLoggingKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.StartAccessLogging',
    '/#X-Amz-Target=MediaStore_20170901.StartAccessLogging',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901StartAccessLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901StartAccessLoggingKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.StartAccessLogging'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901StopAccessLoggingKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.StopAccessLogging',
    '/#X-Amz-Target=MediaStore_20170901.StopAccessLogging',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901StopAccessLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901StopAccessLoggingKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.StopAccessLogging'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901TagResourceKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.TagResource',
    '/#X-Amz-Target=MediaStore_20170901.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901TagResourceKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMediaStore20170901UntagResourceKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.UntagResource',
    '/#X-Amz-Target=MediaStore_20170901.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetMediaStore20170901UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMediaStore20170901UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MediaStore_20170901.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
