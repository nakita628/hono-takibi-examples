import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQueuesKey() {
  return ['queues'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getQueuesQueryKey() {
  return ['queues', '/queues'] as const
}

export function getQueuesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueuesQueryKey>
  >({
    queryKey: getQueuesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.queues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQueues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueuesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQueues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueuesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQueuesMutationKey() {
  return ['queues', '/queues', 'POST'] as const
}

export function getPostQueuesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesMutationKey(),
    async mutationFn() {
      return parseResponse(client.queues.$post(undefined, options))
    },
  })
}

export function usePostQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueuesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQueuesQueueNameMutationKey() {
  return ['queues', '/queues/:queueName', 'DELETE'] as const
}

export function getDeleteQueuesQueueNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queues)[':queueName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':queueName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueuesQueueNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queues)[':queueName']['$delete']>) {
      return parseResponse(client.queues[':queueName'].$delete(args, options))
    },
  })
}

export function useDeleteQueuesQueueName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':queueName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQueuesQueueNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueuesQueueNameConfigQueryKey(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
) {
  return ['queues', '/queues/:queueName/config', args] as const
}

export function getQueuesQueueNameConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameConfigQueryKey>
  >({
    queryKey: getQueuesQueueNameConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queueName'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesQueueNameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getQueuesQueueNameConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueuesQueueNameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getQueuesQueueNameConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutQueuesQueueNameConfigMutationKey() {
  return ['queues', '/queues/:queueName/config', 'PUT'] as const
}

export function getPutQueuesQueueNameConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':queueName']['config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQueuesQueueNameConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.queues)[':queueName']['config']['$put']>,
    ) {
      return parseResponse(client.queues[':queueName'].config.$put(args, options))
    },
  })
}

export function usePutQueuesQueueNameConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':queueName']['config']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQueuesQueueNameConfigMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueuesQueueNameDataQueueMessageIdQueryKey(
  args: InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>,
) {
  return ['queues', '/queues/:queueName/data/:queueMessageId', args] as const
}

export function getQueuesQueueNameDataQueueMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameDataQueueMessageIdQueryKey>
  >({
    queryKey: getQueuesQueueNameDataQueueMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queueName'].data[':queueMessageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesQueueNameDataQueueMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameDataQueueMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getQueuesQueueNameDataQueueMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueuesQueueNameDataQueueMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameDataQueueMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getQueuesQueueNameDataQueueMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQueuesQueueNameMessagesQueryKey(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
) {
  return ['queues', '/queues/:queueName/messages', args] as const
}

export function getQueuesQueueNameMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueuesQueueNameMessagesQueryKey>
  >({
    queryKey: getQueuesQueueNameMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queues[':queueName'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQueuesQueueNameMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getQueuesQueueNameMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQueuesQueueNameMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueuesQueueNameMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getQueuesQueueNameMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostQueuesQueueNameMessagesMutationKey() {
  return ['queues', '/queues/:queueName/messages', 'POST'] as const
}

export function getPostQueuesQueueNameMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.queues)[':queueName']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueuesQueueNameMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.queues)[':queueName']['messages']['$post']>,
    ) {
      return parseResponse(client.queues[':queueName'].messages.$post(args, options))
    },
  })
}

export function usePostQueuesQueueNameMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.queues)[':queueName']['messages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueuesQueueNameMessagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQueuesQueueNameMessagesQueueMessageIdMutationKey() {
  return ['queues', '/queues/:queueName/messages/:queueMessageId', 'DELETE'] as const
}

export function getDeleteQueuesQueueNameMessagesQueueMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueuesQueueNameMessagesQueueMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.queues[':queueName'].messages[':queueMessageId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteQueuesQueueNameMessagesQueueMessageId<
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
                  (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.queues)[':queueName']['messages'][':queueMessageId']['$delete']
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
  const mutationDefaults = getDeleteQueuesQueueNameMessagesQueueMessageIdMutationOptions<
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

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
