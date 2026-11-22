import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTimestream_20181101CancelQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.CancelQuery'] as const
}

export function getXAmzTargetTimestream_20181101CreateScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101DeleteScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101DescribeEndpointsKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'] as const
}

export function getXAmzTargetTimestream_20181101DescribeScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101ExecuteScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery'] as const
}

export function getXAmzTargetTimestream_20181101ListScheduledQueriesKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListScheduledQueries'] as const
}

export function getXAmzTargetTimestream_20181101ListTagsForResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListTagsForResource'] as const
}

export function getXAmzTargetTimestream_20181101PrepareQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.PrepareQuery'] as const
}

export function getXAmzTargetTimestream_20181101QueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.Query'] as const
}

export function getXAmzTargetTimestream_20181101TagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.TagResource'] as const
}

export function getXAmzTargetTimestream_20181101UntagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.UntagResource'] as const
}

export function getXAmzTargetTimestream_20181101UpdateScheduledQueryKey() {
  return ['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery'] as const
}

export function getPostXAmzTargetTimestream20181101CancelQueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CancelQuery',
    '/#X-Amz-Target=Timestream_20181101.CancelQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101CancelQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101CancelQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.CancelQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101CancelQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.CancelQuery']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101CancelQueryMutationOptions<
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

export function getPostXAmzTargetTimestream20181101CreateScheduledQueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.CreateScheduledQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101CreateScheduledQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101CreateScheduledQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101CreateScheduledQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateScheduledQuery']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101CreateScheduledQueryMutationOptions<
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

export function getPostXAmzTargetTimestream20181101DeleteScheduledQueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DeleteScheduledQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DeleteScheduledQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101DeleteScheduledQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101DeleteScheduledQueryMutationOptions<
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

export function getPostXAmzTargetTimestream20181101DescribeEndpointsMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    '/#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DescribeEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DescribeEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101DescribeEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101DescribeEndpointsMutationOptions<
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

export function getPostXAmzTargetTimestream20181101DescribeScheduledQueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DescribeScheduledQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DescribeScheduledQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101DescribeScheduledQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101DescribeScheduledQueryMutationOptions<
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

export function getPostXAmzTargetTimestream20181101ExecuteScheduledQueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ExecuteScheduledQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ExecuteScheduledQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101ExecuteScheduledQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101ExecuteScheduledQueryMutationOptions<
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

export function getPostXAmzTargetTimestream20181101ListScheduledQueriesMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListScheduledQueries',
    '/#X-Amz-Target=Timestream_20181101.ListScheduledQueries',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ListScheduledQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ListScheduledQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ListScheduledQueries'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101ListScheduledQueries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListScheduledQueries']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101ListScheduledQueriesMutationOptions<
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

export function getPostXAmzTargetTimestream20181101ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    '/#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetTimestream20181101PrepareQueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.PrepareQuery',
    '/#X-Amz-Target=Timestream_20181101.PrepareQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101PrepareQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101PrepareQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.PrepareQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101PrepareQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.PrepareQuery']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101PrepareQueryMutationOptions<
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

export function getPostXAmzTargetTimestream20181101QueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.Query',
    '/#X-Amz-Target=Timestream_20181101.Query',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101QueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101QueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Timestream_20181101.Query'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetTimestream20181101Query<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.Query']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101QueryMutationOptions<
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

export function getPostXAmzTargetTimestream20181101TagResourceMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.TagResource',
    '/#X-Amz-Target=Timestream_20181101.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101TagResourceMutationOptions<
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

export function getPostXAmzTargetTimestream20181101UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UntagResource',
    '/#X-Amz-Target=Timestream_20181101.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101UntagResourceMutationOptions<
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

export function getPostXAmzTargetTimestream20181101UpdateScheduledQueryMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery',
    '/#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101UpdateScheduledQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101UpdateScheduledQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetTimestream20181101UpdateScheduledQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetTimestream20181101UpdateScheduledQueryMutationOptions<
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
