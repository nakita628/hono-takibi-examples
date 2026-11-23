import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getPostXAmzTargetMediaStore20170901CreateContainerMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.CreateContainer',
    '/#X-Amz-Target=MediaStore_20170901.CreateContainer',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901CreateContainerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901CreateContainerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.CreateContainer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901CreateContainer<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.CreateContainer']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901CreateContainerMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901DeleteContainerMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteContainer',
    '/#X-Amz-Target=MediaStore_20170901.DeleteContainer',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901DeleteContainerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901DeleteContainerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.DeleteContainer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901DeleteContainer<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainer']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901DeleteContainerMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901DeleteContainerPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901DeleteContainerPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901DeleteContainerPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901DeleteContainerPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901DeleteContainerPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901DeleteCorsPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901DeleteCorsPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901DeleteCorsPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901DeleteCorsPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901DeleteCorsPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901DeleteLifecyclePolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901DeleteLifecyclePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901DeleteLifecyclePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901DeleteLifecyclePolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901DeleteLifecyclePolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901DeleteMetricPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy',
    '/#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901DeleteMetricPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901DeleteMetricPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901DeleteMetricPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901DeleteMetricPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901DescribeContainerMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.DescribeContainer',
    '/#X-Amz-Target=MediaStore_20170901.DescribeContainer',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901DescribeContainerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901DescribeContainerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.DescribeContainer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901DescribeContainer<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.DescribeContainer']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901DescribeContainerMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901GetContainerPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetContainerPolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetContainerPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901GetContainerPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901GetContainerPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901GetContainerPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.GetContainerPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901GetContainerPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901GetCorsPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetCorsPolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetCorsPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901GetCorsPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901GetCorsPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901GetCorsPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.GetCorsPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901GetCorsPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901GetLifecyclePolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901GetLifecyclePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901GetLifecyclePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901GetLifecyclePolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901GetLifecyclePolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901GetMetricPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.GetMetricPolicy',
    '/#X-Amz-Target=MediaStore_20170901.GetMetricPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901GetMetricPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901GetMetricPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901GetMetricPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.GetMetricPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901GetMetricPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901ListContainersMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.ListContainers',
    '/#X-Amz-Target=MediaStore_20170901.ListContainers',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901ListContainersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901ListContainersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.ListContainers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901ListContainers<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.ListContainers']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901ListContainersMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.ListTagsForResource',
    '/#X-Amz-Target=MediaStore_20170901.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901ListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901PutContainerPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutContainerPolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutContainerPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901PutContainerPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901PutContainerPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901PutContainerPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.PutContainerPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901PutContainerPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901PutCorsPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutCorsPolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutCorsPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901PutCorsPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901PutCorsPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901PutCorsPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.PutCorsPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901PutCorsPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901PutLifecyclePolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901PutLifecyclePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901PutLifecyclePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901PutLifecyclePolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901PutLifecyclePolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901PutMetricPolicyMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.PutMetricPolicy',
    '/#X-Amz-Target=MediaStore_20170901.PutMetricPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901PutMetricPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901PutMetricPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901PutMetricPolicy<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.PutMetricPolicy']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901PutMetricPolicyMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901StartAccessLoggingMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.StartAccessLogging',
    '/#X-Amz-Target=MediaStore_20170901.StartAccessLogging',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901StartAccessLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901StartAccessLoggingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.StartAccessLogging'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901StartAccessLogging<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.StartAccessLogging']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901StartAccessLoggingMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901StopAccessLoggingMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.StopAccessLogging',
    '/#X-Amz-Target=MediaStore_20170901.StopAccessLogging',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901StopAccessLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901StopAccessLoggingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.StopAccessLogging'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901StopAccessLogging<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.StopAccessLogging']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901StopAccessLoggingMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901TagResourceMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.TagResource',
    '/#X-Amz-Target=MediaStore_20170901.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901TagResource<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMediaStore20170901TagResourceMutationOptions<
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

export function getPostXAmzTargetMediaStore20170901UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=MediaStore_20170901.UntagResource',
    '/#X-Amz-Target=MediaStore_20170901.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetMediaStore20170901UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMediaStore20170901UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MediaStore_20170901.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMediaStore20170901UntagResource<
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
                  (typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=MediaStore_20170901.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetMediaStore20170901UntagResourceMutationOptions<
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
