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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2PublishDestinationMutationKey() {
  return ['v2', '/v2/publish/:destination', 'POST'] as const
}

export function getPostV2PublishDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.publish)[':destination']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.publish)[':destination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PublishDestinationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.publish)[':destination']['$post']>) {
      return parseResponse(client.v2.publish[':destination'].$post(args, options))
    },
  })
}

export function usePostV2PublishDestination<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.publish)[':destination']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.publish)[':destination']['$post']>,
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
  const mutationDefaults = getPostV2PublishDestinationMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2EnqueueQueueNameDestinationMutationKey() {
  return ['v2', '/v2/enqueue/:queueName/:destination', 'POST'] as const
}

export function getPostV2EnqueueQueueNameDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EnqueueQueueNameDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>,
    ) {
      return parseResponse(client.v2.enqueue[':queueName'][':destination'].$post(args, options))
    },
  })
}

export function usePostV2EnqueueQueueNameDestination<
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
                  ReturnType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>,
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
  const mutationDefaults = getPostV2EnqueueQueueNameDestinationMutationOptions<
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

export function getPostV2BatchMutationKey() {
  return ['v2', '/v2/batch', 'POST'] as const
}

export function getPostV2BatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.batch.$post>) {
      return parseResponse(client.v2.batch.$post(args, options))
    },
  })
}

export function usePostV2Batch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.batch.$post>,
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
  const mutationDefaults = getPostV2BatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2MessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.messages)[':messageId']['$get']>>,
) {
  return ['v2', '/v2/messages/:messageId', toValue(args)] as const
}

export function getV2MessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.messages)[':messageId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.messages[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.messages)[':messageId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2MessagesMessageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.messages[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2MessagesMessageIdMutationKey() {
  return ['v2', '/v2/messages/:messageId', 'DELETE'] as const
}

export function getDeleteV2MessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.messages)[':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2MessagesMessageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.messages)[':messageId']['$delete']>) {
      return parseResponse(client.v2.messages[':messageId'].$delete(args, options))
    },
  })
}

export function useDeleteV2MessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.messages)[':messageId']['$delete']>,
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
  const mutationDefaults = getDeleteV2MessagesMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2MessagesMessageIdRetryMutationKey() {
  return ['v2', '/v2/messages/:messageId/retry', 'POST'] as const
}

export function getPostV2MessagesMessageIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MessagesMessageIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
    ) {
      return parseResponse(client.v2.messages[':messageId'].retry.$post(args, options))
    },
  })
}

export function usePostV2MessagesMessageIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
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
  const mutationDefaults = getPostV2MessagesMessageIdRetryMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2MessagesMutationKey() {
  return ['v2', '/v2/messages', 'DELETE'] as const
}

export function getDeleteV2MessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.messages.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.messages.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2MessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.messages.$delete>) {
      return parseResponse(client.v2.messages.$delete(args, options))
    },
  })
}

export function useDeleteV2Messages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.messages.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.messages.$delete>,
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
  const mutationDefaults = getDeleteV2MessagesMutationOptions<TError, TOnMutateResult>(
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

export function getV2BulkActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bulkActions.$get>>,
) {
  return ['v2', '/v2/bulkActions', toValue(args)] as const
}

export function getV2BulkActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bulkActions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BulkActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bulkActions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BulkActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.bulkActions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
          >,
          ReturnType<typeof getV2BulkActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BulkActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BulkActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bulkActions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2BulkActionsActionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bulkActions)[':actionId']['$get']>>,
) {
  return ['v2', '/v2/bulkActions/:actionId', toValue(args)] as const
}

export function getV2BulkActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bulkActions)[':actionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BulkActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.bulkActions[':actionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BulkActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bulkActions)[':actionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.bulkActions)[':actionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bulkActions)[':actionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.bulkActions)[':actionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2BulkActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.bulkActions)[':actionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BulkActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BulkActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.bulkActions[':actionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2QueuesQueryKey() {
  return ['v2', '/v2/queues'] as const
}

export function getV2QueuesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2QueuesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.queues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Queues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>
          >,
          ReturnType<typeof getV2QueuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2QueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2QueuesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.queues.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2QueuesMutationKey() {
  return ['v2', '/v2/queues', 'POST'] as const
}

export function getPostV2QueuesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.queues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QueuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.queues.$post>) {
      return parseResponse(client.v2.queues.$post(args, options))
    },
  })
}

export function usePostV2Queues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.queues.$post>,
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
  const mutationDefaults = getPostV2QueuesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2QueuesQueueNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.queues)[':queueName']['$get']>>,
) {
  return ['v2', '/v2/queues/:queueName', toValue(args)] as const
}

export function getV2QueuesQueueNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.queues)[':queueName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2QueuesQueueNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.queues[':queueName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2QueuesQueueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.queues)[':queueName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2QueuesQueueNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QueuesQueueNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2QueuesQueueNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.queues[':queueName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2QueuesQueueNameMutationKey() {
  return ['v2', '/v2/queues/:queueName', 'DELETE'] as const
}

export function getDeleteV2QueuesQueueNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.queues)[':queueName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2QueuesQueueNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.queues)[':queueName']['$delete']>) {
      return parseResponse(client.v2.queues[':queueName'].$delete(args, options))
    },
  })
}

export function useDeleteV2QueuesQueueName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.queues)[':queueName']['$delete']>,
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
  const mutationDefaults = getDeleteV2QueuesQueueNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2QueuesQueueNamePauseMutationKey() {
  return ['v2', '/v2/queues/:queueName/pause', 'POST'] as const
}

export function getPostV2QueuesQueueNamePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.queues)[':queueName']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QueuesQueueNamePauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.queues)[':queueName']['pause']['$post']>,
    ) {
      return parseResponse(client.v2.queues[':queueName'].pause.$post(args, options))
    },
  })
}

export function usePostV2QueuesQueueNamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['pause']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.queues)[':queueName']['pause']['$post']>,
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
  const mutationDefaults = getPostV2QueuesQueueNamePauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2QueuesQueueNameResumeMutationKey() {
  return ['v2', '/v2/queues/:queueName/resume', 'POST'] as const
}

export function getPostV2QueuesQueueNameResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.queues)[':queueName']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2QueuesQueueNameResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.queues)[':queueName']['resume']['$post']>,
    ) {
      return parseResponse(client.v2.queues[':queueName'].resume.$post(args, options))
    },
  })
}

export function usePostV2QueuesQueueNameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['resume']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.queues)[':queueName']['resume']['$post']>,
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
  const mutationDefaults = getPostV2QueuesQueueNameResumeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SchedulesDestinationMutationKey() {
  return ['v2', '/v2/schedules/:destination', 'POST'] as const
}

export function getPostV2SchedulesDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':destination']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':destination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SchedulesDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':destination']['$post']>,
    ) {
      return parseResponse(client.v2.schedules[':destination'].$post(args, options))
    },
  })
}

export function usePostV2SchedulesDestination<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':destination']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':destination']['$post']>,
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
  const mutationDefaults = getPostV2SchedulesDestinationMutationOptions<TError, TOnMutateResult>(
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

export function getV2SchedulesQueryKey() {
  return ['v2', '/v2/schedules'] as const
}

export function getV2SchedulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2SchedulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.schedules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
          >,
          ReturnType<typeof getV2SchedulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2SchedulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.schedules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SchedulesScheduleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>>,
) {
  return ['v2', '/v2/schedules/:scheduleId', toValue(args)] as const
}

export function getV2SchedulesScheduleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SchedulesScheduleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.schedules[':scheduleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SchedulesScheduleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SchedulesScheduleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.schedules[':scheduleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2SchedulesScheduleIdMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId', 'DELETE'] as const
}

export function getDeleteV2SchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
    ) {
      return parseResponse(client.v2.schedules[':scheduleId'].$delete(args, options))
    },
  })
}

export function useDeleteV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$delete']>,
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
  const mutationDefaults = getDeleteV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SchedulesScheduleIdPauseMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId/pause', 'POST'] as const
}

export function getPostV2SchedulesScheduleIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SchedulesScheduleIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>,
    ) {
      return parseResponse(client.v2.schedules[':scheduleId'].pause.$post(args, options))
    },
  })
}

export function usePostV2SchedulesScheduleIdPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>,
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
  const mutationDefaults = getPostV2SchedulesScheduleIdPauseMutationOptions<
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

export function getPostV2SchedulesScheduleIdResumeMutationKey() {
  return ['v2', '/v2/schedules/:scheduleId/resume', 'POST'] as const
}

export function getPostV2SchedulesScheduleIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SchedulesScheduleIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>,
    ) {
      return parseResponse(client.v2.schedules[':scheduleId'].resume.$post(args, options))
    },
  })
}

export function usePostV2SchedulesScheduleIdResume<
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
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>,
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
  const mutationDefaults = getPostV2SchedulesScheduleIdResumeMutationOptions<
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

export function getV2TopicsQueryKey() {
  return ['v2', '/v2/topics'] as const
}

export function getV2TopicsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2TopicsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.topics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Topics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
          >,
          ReturnType<typeof getV2TopicsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2TopicsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.topics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TopicsUrlGroupNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$get']>>,
) {
  return ['v2', '/v2/topics/:urlGroupName', toValue(args)] as const
}

export function getV2TopicsUrlGroupNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TopicsUrlGroupNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.topics[':urlGroupName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TopicsUrlGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TopicsUrlGroupNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TopicsUrlGroupNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TopicsUrlGroupNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.topics[':urlGroupName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2TopicsUrlGroupNameMutationKey() {
  return ['v2', '/v2/topics/:urlGroupName', 'DELETE'] as const
}

export function getDeleteV2TopicsUrlGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TopicsUrlGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$delete']>,
    ) {
      return parseResponse(client.v2.topics[':urlGroupName'].$delete(args, options))
    },
  })
}

export function useDeleteV2TopicsUrlGroupName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$delete']>,
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
  const mutationDefaults = getDeleteV2TopicsUrlGroupNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TopicsUrlGroupNameEndpointsMutationKey() {
  return ['v2', '/v2/topics/:urlGroupName/endpoints', 'POST'] as const
}

export function getPostV2TopicsUrlGroupNameEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TopicsUrlGroupNameEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>,
    ) {
      return parseResponse(client.v2.topics[':urlGroupName'].endpoints.$post(args, options))
    },
  })
}

export function usePostV2TopicsUrlGroupNameEndpoints<
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
                  ReturnType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>,
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
  const mutationDefaults = getPostV2TopicsUrlGroupNameEndpointsMutationOptions<
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

export function getDeleteV2TopicsUrlGroupNameEndpointsMutationKey() {
  return ['v2', '/v2/topics/:urlGroupName/endpoints', 'DELETE'] as const
}

export function getDeleteV2TopicsUrlGroupNameEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TopicsUrlGroupNameEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>,
    ) {
      return parseResponse(client.v2.topics[':urlGroupName'].endpoints.$delete(args, options))
    },
  })
}

export function useDeleteV2TopicsUrlGroupNameEndpoints<
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
                  ReturnType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>,
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
  const mutationDefaults = getDeleteV2TopicsUrlGroupNameEndpointsMutationOptions<
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

export function getV2DlqQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.dlq.$get>>,
) {
  return ['v2', '/v2/dlq', toValue(args)] as const
}

export function getV2DlqQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.dlq.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DlqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.dlq.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Dlq<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.dlq.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
          ReturnType<typeof getV2DlqQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DlqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DlqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.dlq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DlqMutationKey() {
  return ['v2', '/v2/dlq', 'DELETE'] as const
}

export function getDeleteV2DlqMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$delete>>>>>,
    TError,
    InferRequestType<typeof client.v2.dlq.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DlqMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.dlq.$delete>) {
      return parseResponse(client.v2.dlq.$delete(args, options))
    },
  })
}

export function useDeleteV2Dlq<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.dlq.$delete>,
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
  const mutationDefaults = getDeleteV2DlqMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2DlqDlqIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.dlq)[':dlqId']['$get']>>,
) {
  return ['v2', '/v2/dlq/:dlqId', toValue(args)] as const
}

export function getV2DlqDlqIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.dlq)[':dlqId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DlqDlqIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.dlq[':dlqId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DlqDlqId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.dlq)[':dlqId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>
            >
          >,
          ReturnType<typeof getV2DlqDlqIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DlqDlqIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DlqDlqIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.dlq[':dlqId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DlqDlqIdMutationKey() {
  return ['v2', '/v2/dlq/:dlqId', 'DELETE'] as const
}

export function getDeleteV2DlqDlqIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.dlq)[':dlqId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DlqDlqIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.dlq)[':dlqId']['$delete']>) {
      return parseResponse(client.v2.dlq[':dlqId'].$delete(args, options))
    },
  })
}

export function useDeleteV2DlqDlqId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.dlq)[':dlqId']['$delete']>,
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
  const mutationDefaults = getDeleteV2DlqDlqIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2DlqRetryDlqIdMutationKey() {
  return ['v2', '/v2/dlq/retry/:dlqId', 'POST'] as const
}

export function getPostV2DlqRetryDlqIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq.retry)[':dlqId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.dlq.retry)[':dlqId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DlqRetryDlqIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.dlq.retry)[':dlqId']['$post']>) {
      return parseResponse(client.v2.dlq.retry[':dlqId'].$post(args, options))
    },
  })
}

export function usePostV2DlqRetryDlqId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.dlq.retry)[':dlqId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.dlq.retry)[':dlqId']['$post']>,
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
  const mutationDefaults = getPostV2DlqRetryDlqIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2DlqRetryMutationKey() {
  return ['v2', '/v2/dlq/retry', 'POST'] as const
}

export function getPostV2DlqRetryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.retry.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.dlq.retry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DlqRetryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.dlq.retry.$post>) {
      return parseResponse(client.v2.dlq.retry.$post(args, options))
    },
  })
}

export function usePostV2DlqRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.retry.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.dlq.retry.$post>,
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
  const mutationDefaults = getPostV2DlqRetryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2FlowControlQueryKey() {
  return ['v2', '/v2/flowControl'] as const
}

export function getV2FlowControlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2FlowControlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.flowControl.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2FlowControl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
          >,
          ReturnType<typeof getV2FlowControlQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2FlowControlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2FlowControlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.flowControl.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FlowControlFlowControlKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>
  >,
) {
  return ['v2', '/v2/flowControl/:flowControlKey', toValue(args)] as const
}

export function getV2FlowControlFlowControlKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FlowControlFlowControlKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.flowControl[':flowControlKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FlowControlFlowControlKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FlowControlFlowControlKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FlowControlFlowControlKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FlowControlFlowControlKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.flowControl[':flowControlKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FlowControlFlowControlKeyPauseMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/pause', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].pause.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyPause<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyPauseMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyResumeMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/resume', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].resume.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyResume<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyResumeMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyPinMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/pin', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyPinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].pin.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyPin<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyPinMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyUnpinMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/unpin', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyUnpinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyUnpinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].unpin.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyUnpin<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyUnpinMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyResetRateMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/resetRate', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyResetRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyResetRateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']
      >,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].resetRate.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyResetRate<
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
                    (typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyResetRateMutationOptions<
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

export function getV2GlobalParallelismQueryKey() {
  return ['v2', '/v2/globalParallelism'] as const
}

export function getV2GlobalParallelismQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2GlobalParallelismQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.globalParallelism.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GlobalParallelism<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>
            >
          >,
          ReturnType<typeof getV2GlobalParallelismQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GlobalParallelismQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2GlobalParallelismQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.globalParallelism.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KeysQueryKey() {
  return ['v2', '/v2/keys'] as const
}

export function getV2KeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2KeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Keys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
          >,
          ReturnType<typeof getV2KeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2KeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2KeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KeysRotateMutationKey() {
  return ['v2', '/v2/keys/rotate', 'POST'] as const
}

export function getPostV2KeysRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV2KeysRotateMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.keys.rotate.$post(undefined, options))
    },
  })
}

export function usePostV2KeysRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$post>>>
            >
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
  const mutationDefaults = getPostV2KeysRotateMutationOptions<TError, TOnMutateResult>(
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

export function getV2LogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.logs.$get>>,
) {
  return ['v2', '/v2/logs', toValue(args)] as const
}

export function getV2LogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>
          >,
          ReturnType<typeof getV2LogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
