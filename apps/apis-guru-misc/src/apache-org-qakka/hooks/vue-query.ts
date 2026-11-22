import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getQueuesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueuesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueues<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
          ReturnType<typeof getQueuesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueuesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.queues.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queues.$post>>>>
          >,
          TError,
          void,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>>,
) {
  return ['queues', '/queues/:queueName/config', toValue(args)] as const
}

export function getQueuesQueueNameConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueuesQueueNameConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queues[':queueName'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queues)[':queueName']['config']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queues)[':queueName']['config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueuesQueueNameConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueuesQueueNameConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queues[':queueName'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
  >,
) {
  return ['queues', '/queues/:queueName/data/:queueMessageId', toValue(args)] as const
}

export function getQueuesQueueNameDataQueueMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueuesQueueNameDataQueueMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queues[':queueName'].data[':queueMessageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.queues)[':queueName']['data'][':queueMessageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getQueuesQueueNameDataQueueMessageIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueuesQueueNameDataQueueMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queues[':queueName'].data[':queueMessageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueuesQueueNameMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>
  >,
) {
  return ['queues', '/queues/:queueName/messages', toValue(args)] as const
}

export function getQueuesQueueNameMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueuesQueueNameMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queues[':queueName'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.queues)[':queueName']['messages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queues)[':queueName']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueuesQueueNameMessagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueuesQueueNameMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queues[':queueName'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
