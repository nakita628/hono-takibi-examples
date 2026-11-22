import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPostV2PublishDestination<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV2PublishDestinationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2EnqueueQueueNameDestination<
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
                  ReturnType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.enqueue)[':queueName'][':destination']['$post']>,
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
    const mutationDefaults = getPostV2EnqueueQueueNameDestinationMutationOptions<
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

export function createPostV2Batch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.batch.$post>,
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
    const mutationDefaults = getPostV2BatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2MessagesMessageIdQueryKey(
  args: InferRequestType<(typeof client.v2.messages)[':messageId']['$get']>,
) {
  return ['v2', '/v2/messages/:messageId', args] as const
}

export function getV2MessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MessagesMessageIdQueryKey>
  >({
    queryKey: getV2MessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2MessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.messages)[':messageId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2MessagesMessageIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2MessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV2MessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteV2MessagesMessageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2MessagesMessageIdRetry<
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
                Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
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
    const mutationDefaults = getPostV2MessagesMessageIdRetryMutationOptions<
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

export function createDeleteV2Messages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.messages.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.messages.$delete>,
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
    const mutationDefaults = getDeleteV2MessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BulkActionsQueryKey(
  args: InferRequestType<typeof client.v2.bulkActions.$get>,
) {
  return ['v2', '/v2/bulkActions', args] as const
}

export function getV2BulkActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.bulkActions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2BulkActionsQueryKey>
  >({
    queryKey: getV2BulkActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bulkActions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2BulkActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.bulkActions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulkActions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2BulkActionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BulkActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2BulkActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.v2.bulkActions)[':actionId']['$get']>,
) {
  return ['v2', '/v2/bulkActions/:actionId', args] as const
}

export function getV2BulkActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bulkActions)[':actionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.bulkActions)[':actionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2BulkActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.bulkActions[':actionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2BulkActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.bulkActions)[':actionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.bulkActions)[':actionId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2BulkActionsActionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2QueuesQueryKey() {
  return ['v2', '/v2/queues'] as const
}

export function getV2QueuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2QueuesQueryKey>
  >({
    queryKey: getV2QueuesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.queues.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Queues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2QueuesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2QueuesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV2Queues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.queues.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.queues.$post>,
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
    const mutationDefaults = getPostV2QueuesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2QueuesQueueNameQueryKey(
  args: InferRequestType<(typeof client.v2.queues)[':queueName']['$get']>,
) {
  return ['v2', '/v2/queues/:queueName', args] as const
}

export function getV2QueuesQueueNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.queues)[':queueName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2QueuesQueueNameQueryKey>
  >({
    queryKey: getV2QueuesQueueNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.queues[':queueName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2QueuesQueueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.queues)[':queueName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.queues)[':queueName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2QueuesQueueNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2QueuesQueueNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV2QueuesQueueName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteV2QueuesQueueNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2QueuesQueueNamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV2QueuesQueueNamePauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2QueuesQueueNameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV2QueuesQueueNameResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2SchedulesDestination<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV2SchedulesDestinationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2SchedulesQueryKey() {
  return ['v2', '/v2/schedules'] as const
}

export function getV2SchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SchedulesQueryKey>
  >({
    queryKey: getV2SchedulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Schedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.schedules.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2SchedulesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SchedulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2SchedulesScheduleIdQueryKey(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
) {
  return ['v2', '/v2/schedules/:scheduleId', args] as const
}

export function getV2SchedulesScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2SchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.schedules[':scheduleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2SchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.schedules)[':scheduleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2SchedulesScheduleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV2SchedulesScheduleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteV2SchedulesScheduleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2SchedulesScheduleIdPause<
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
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['pause']['$post']>,
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
    const mutationDefaults = getPostV2SchedulesScheduleIdPauseMutationOptions<
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

export function createPostV2SchedulesScheduleIdResume<
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
                Awaited<ReturnType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.schedules)[':scheduleId']['resume']['$post']>,
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
    const mutationDefaults = getPostV2SchedulesScheduleIdResumeMutationOptions<
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

export function getV2TopicsQueryKey() {
  return ['v2', '/v2/topics'] as const
}

export function getV2TopicsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TopicsQueryKey>
  >({
    queryKey: getV2TopicsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.topics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Topics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2TopicsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TopicsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2TopicsUrlGroupNameQueryKey(
  args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$get']>,
) {
  return ['v2', '/v2/topics/:urlGroupName', args] as const
}

export function getV2TopicsUrlGroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2TopicsUrlGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.topics[':urlGroupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2TopicsUrlGroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':urlGroupName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.topics)[':urlGroupName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2TopicsUrlGroupNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV2TopicsUrlGroupName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteV2TopicsUrlGroupNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2TopicsUrlGroupNameEndpoints<
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
                  ReturnType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$post']>,
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
    const mutationDefaults = getPostV2TopicsUrlGroupNameEndpointsMutationOptions<
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

export function createDeleteV2TopicsUrlGroupNameEndpoints<
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
                  ReturnType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.topics)[':urlGroupName']['endpoints']['$delete']>,
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
    const mutationDefaults = getDeleteV2TopicsUrlGroupNameEndpointsMutationOptions<
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

export function getV2DlqQueryKey(args: InferRequestType<typeof client.v2.dlq.$get>) {
  return ['v2', '/v2/dlq', args] as const
}

export function getV2DlqQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.dlq.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DlqQueryKey>
  >({
    queryKey: getV2DlqQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.dlq.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Dlq<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.dlq.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getV2DlqQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DlqQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV2Dlq<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.dlq.$delete>,
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
    const mutationDefaults = getDeleteV2DlqMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2DlqDlqIdQueryKey(
  args: InferRequestType<(typeof client.v2.dlq)[':dlqId']['$get']>,
) {
  return ['v2', '/v2/dlq/:dlqId', args] as const
}

export function getV2DlqDlqIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.dlq)[':dlqId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DlqDlqIdQueryKey>
  >({
    queryKey: getV2DlqDlqIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.dlq[':dlqId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2DlqDlqId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.dlq)[':dlqId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2DlqDlqIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DlqDlqIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV2DlqDlqId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.dlq)[':dlqId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.dlq)[':dlqId']['$delete']>,
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
    const mutationDefaults = getDeleteV2DlqDlqIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2DlqRetryDlqId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV2DlqRetryDlqIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2DlqRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.dlq.retry.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.dlq.retry.$post>,
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
    const mutationDefaults = getPostV2DlqRetryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2FlowControlQueryKey() {
  return ['v2', '/v2/flowControl'] as const
}

export function getV2FlowControlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2FlowControlQueryKey>
  >({
    queryKey: getV2FlowControlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.flowControl.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2FlowControl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2FlowControlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2FlowControlQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2FlowControlFlowControlKeyQueryKey(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>,
) {
  return ['v2', '/v2/flowControl/:flowControlKey', args] as const
}

export function getV2FlowControlFlowControlKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2FlowControlFlowControlKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.flowControl[':flowControlKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2FlowControlFlowControlKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2FlowControlFlowControlKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2FlowControlFlowControlKeyPause<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
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
    const mutationDefaults = getPostV2FlowControlFlowControlKeyPauseMutationOptions<
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

export function createPostV2FlowControlFlowControlKeyResume<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
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
    const mutationDefaults = getPostV2FlowControlFlowControlKeyResumeMutationOptions<
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

export function createPostV2FlowControlFlowControlKeyPin<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
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
    const mutationDefaults = getPostV2FlowControlFlowControlKeyPinMutationOptions<
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

export function createPostV2FlowControlFlowControlKeyUnpin<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
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
    const mutationDefaults = getPostV2FlowControlFlowControlKeyUnpinMutationOptions<
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

export function createPostV2FlowControlFlowControlKeyResetRate<
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
                    (typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>,
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
    const mutationDefaults = getPostV2FlowControlFlowControlKeyResetRateMutationOptions<
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

export function getV2GlobalParallelismQueryKey() {
  return ['v2', '/v2/globalParallelism'] as const
}

export function getV2GlobalParallelismQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GlobalParallelismQueryKey>
  >({
    queryKey: getV2GlobalParallelismQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.globalParallelism.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2GlobalParallelism<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV2GlobalParallelismQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2GlobalParallelismQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2KeysQueryKey() {
  return ['v2', '/v2/keys'] as const
}

export function getV2KeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2KeysQueryKey>
  >({
    queryKey: getV2KeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Keys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2KeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2KeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV2KeysRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostV2KeysRotateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2LogsQueryKey(args: InferRequestType<typeof client.v2.logs.$get>) {
  return ['v2', '/v2/logs', args] as const
}

export function getV2LogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LogsQueryKey>
  >({
    queryKey: getV2LogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.logs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2LogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
