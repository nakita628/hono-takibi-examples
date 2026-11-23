import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV1EnvironmentsQueryKey() {
  return ['v1', '/v1/environments'] as const
}

export function getV1EnvironmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentsQueryKey>
  >({
    queryKey: getV1EnvironmentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.environments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Environments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EnvironmentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Environments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EnvironmentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1EnvironmentsMutationKey() {
  return ['v1', '/v1/environments', 'POST'] as const
}

export function getPostV1EnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.environments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.environments.$post>) {
      return parseResponse(client.v1.environments.$post(args, options))
    },
  })
}

export function usePostV1Environments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.environments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EnvironmentsMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1EnvironmentsEnvironmentIdMutationKey() {
  return ['v1', '/v1/environments/:environmentId', 'PUT'] as const
}

export function getPutV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
    ) {
      return parseResponse(client.v1.environments[':environmentId'].$put(args, options))
    },
  })
}

export function usePutV1EnvironmentsEnvironmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getDeleteV1EnvironmentsEnvironmentIdMutationKey() {
  return ['v1', '/v1/environments/:environmentId', 'DELETE'] as const
}

export function getDeleteV1EnvironmentsEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EnvironmentsEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
    ) {
      return parseResponse(client.v1.environments[':environmentId'].$delete(args, options))
    },
  })
}

export function useDeleteV1EnvironmentsEnvironmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1EnvironmentsEnvironmentIdMutationOptions<
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

export function getPostV1EventsTriggerMutationKey() {
  return ['v1', '/v1/events/trigger', 'POST'] as const
}

export function getPostV1EventsTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.events.trigger.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventsTriggerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.events.trigger.$post>) {
      return parseResponse(client.v1.events.trigger.$post(args, options))
    },
  })
}

export function usePostV1EventsTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.events.trigger.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EventsTriggerMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1EventsTriggerBulkMutationKey() {
  return ['v1', '/v1/events/trigger/bulk', 'POST'] as const
}

export function getPostV1EventsTriggerBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.bulk.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.events.trigger.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventsTriggerBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.events.trigger.bulk.$post>) {
      return parseResponse(client.v1.events.trigger.bulk.$post(args, options))
    },
  })
}

export function usePostV1EventsTriggerBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.bulk.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.events.trigger.bulk.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EventsTriggerBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1EventsTriggerBroadcastMutationKey() {
  return ['v1', '/v1/events/trigger/broadcast', 'POST'] as const
}

export function getPostV1EventsTriggerBroadcastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.broadcast.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.events.trigger.broadcast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EventsTriggerBroadcastMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.events.trigger.broadcast.$post>) {
      return parseResponse(client.v1.events.trigger.broadcast.$post(args, options))
    },
  })
}

export function usePostV1EventsTriggerBroadcast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.events.trigger.broadcast.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.events.trigger.broadcast.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EventsTriggerBroadcastMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1EventsTriggerTransactionIdMutationKey() {
  return ['v1', '/v1/events/trigger/:transactionId', 'DELETE'] as const
}

export function getDeleteV1EventsTriggerTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EventsTriggerTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>,
    ) {
      return parseResponse(client.v1.events.trigger[':transactionId'].$delete(args, options))
    },
  })
}

export function useDeleteV1EventsTriggerTransactionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1EventsTriggerTransactionIdMutationOptions<
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

export function getV1NotificationsQueryKey(
  args: InferRequestType<typeof client.v1.notifications.$get>,
) {
  return ['v1', '/v1/notifications', args] as const
}

export function getV1NotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsQueryKey>
  >({
    queryKey: getV1NotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Notifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.notifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Notifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.notifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1NotificationsNotificationIdQueryKey(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
) {
  return ['v1', '/v1/notifications/:notificationId', args] as const
}

export function getV1NotificationsNotificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsNotificationIdQueryKey>
  >({
    queryKey: getV1NotificationsNotificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications[':notificationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1NotificationsNotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsNotificationIdQueryKey>
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
      ...getV1NotificationsNotificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1NotificationsNotificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsNotificationIdQueryKey>
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
      ...getV1NotificationsNotificationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1AgentsQueryKey(args: InferRequestType<typeof client.v1.agents.$get>) {
  return ['v1', '/v1/agents', args] as const
}

export function getV1AgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AgentsQueryKey>
  >({
    queryKey: getV1AgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AgentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Agents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AgentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1AgentsMutationKey() {
  return ['v1', '/v1/agents', 'POST'] as const
}

export function getPostV1AgentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.agents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.agents.$post>) {
      return parseResponse(client.v1.agents.$post(args, options))
    },
  })
}

export function usePostV1Agents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.agents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AgentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV1AgentsIdentifierBridgeMutationKey() {
  return ['v1', '/v1/agents/:identifier/bridge', 'PUT'] as const
}

export function getPutV1AgentsIdentifierBridgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1AgentsIdentifierBridgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>,
    ) {
      return parseResponse(client.v1.agents[':identifier'].bridge.$put(args, options))
    },
  })
}

export function usePutV1AgentsIdentifierBridge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1AgentsIdentifierBridgeMutationOptions<TError, TOnMutateResult>(
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

export function getV1AgentsIdentifierQueryKey(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
) {
  return ['v1', '/v1/agents/:identifier', args] as const
}

export function getV1AgentsIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsIdentifierQueryKey>
  >({
    queryKey: getV1AgentsIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents[':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AgentsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AgentsIdentifierQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AgentsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsIdentifierQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AgentsIdentifierQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1AgentsIdentifierMutationKey() {
  return ['v1', '/v1/agents/:identifier', 'DELETE'] as const
}

export function getDeleteV1AgentsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.agents)[':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AgentsIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.agents)[':identifier']['$delete']>) {
      return parseResponse(client.v1.agents[':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1AgentsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.agents)[':identifier']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1AgentsIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1AgentsIdentifierMutationKey() {
  return ['v1', '/v1/agents/:identifier', 'PATCH'] as const
}

export function getPatchV1AgentsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)[':identifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AgentsIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.agents)[':identifier']['$patch']>) {
      return parseResponse(client.v1.agents[':identifier'].$patch(args, options))
    },
  })
}

export function usePatchV1AgentsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents)[':identifier']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1AgentsIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getV1AgentsIdentifierIntegrationsQueryKey(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
) {
  return ['v1', '/v1/agents/:identifier/integrations', args] as const
}

export function getV1AgentsIdentifierIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgentsIdentifierIntegrationsQueryKey>
  >({
    queryKey: getV1AgentsIdentifierIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.agents[':identifier'].integrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AgentsIdentifierIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsIdentifierIntegrationsQueryKey>
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
      ...getV1AgentsIdentifierIntegrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1AgentsIdentifierIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AgentsIdentifierIntegrationsQueryKey>
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
      ...getV1AgentsIdentifierIntegrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1AgentsIdentifierIntegrationsMutationKey() {
  return ['v1', '/v1/agents/:identifier/integrations', 'POST'] as const
}

export function getPostV1AgentsIdentifierIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsIdentifierIntegrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>,
    ) {
      return parseResponse(client.v1.agents[':identifier'].integrations.$post(args, options))
    },
  })
}

export function usePostV1AgentsIdentifierIntegrations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AgentsIdentifierIntegrationsMutationOptions<
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

export function getDeleteV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationKey() {
  return ['v1', '/v1/agents/:identifier/integrations/:agentIntegrationId', 'DELETE'] as const
}

export function getDeleteV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.agents[':identifier'].integrations[':agentIntegrationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1AgentsIdentifierIntegrationsAgentIntegrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
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
  const mutationDefaults = getDeleteV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationOptions<
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

export function getPatchV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationKey() {
  return ['v1', '/v1/agents/:identifier/integrations/:agentIntegrationId', 'PATCH'] as const
}

export function getPatchV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.agents[':identifier'].integrations[':agentIntegrationId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1AgentsIdentifierIntegrationsAgentIntegrationId<
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
                  (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
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
  const mutationDefaults = getPatchV1AgentsIdentifierIntegrationsAgentIntegrationIdMutationOptions<
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

export function getPostV1AgentsAgentIdReplyMutationKey() {
  return ['v1', '/v1/agents/:agentId/reply', 'POST'] as const
}

export function getPostV1AgentsAgentIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':agentId']['reply']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.agents)[':agentId']['reply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AgentsAgentIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.agents)[':agentId']['reply']['$post']>,
    ) {
      return parseResponse(client.v1.agents[':agentId'].reply.$post(args, options))
    },
  })
}

export function usePostV1AgentsAgentIdReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.agents)[':agentId']['reply']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.agents)[':agentId']['reply']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AgentsAgentIdReplyMutationOptions<TError, TOnMutateResult>(
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

export function getV1DomainsQueryKey(args: InferRequestType<typeof client.v1.domains.$get>) {
  return ['v1', '/v1/domains', args] as const
}

export function getV1DomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DomainsQueryKey>
  >({
    queryKey: getV1DomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1DomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1DomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1DomainsMutationKey() {
  return ['v1', '/v1/domains', 'POST'] as const
}

export function getPostV1DomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.domains.$post>) {
      return parseResponse(client.v1.domains.$post(args, options))
    },
  })
}

export function usePostV1Domains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DomainsDomainQueryKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
) {
  return ['v1', '/v1/domains/:domain', args] as const
}

export function getV1DomainsDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsDomainQueryKey>
  >({
    queryKey: getV1DomainsDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domains[':domain'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1DomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1DomainsDomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1DomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1DomainsDomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1DomainsDomainMutationKey() {
  return ['v1', '/v1/domains/:domain', 'DELETE'] as const
}

export function getDeleteV1DomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>) {
      return parseResponse(client.v1.domains[':domain'].$delete(args, options))
    },
  })
}

export function useDeleteV1DomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DomainsDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1DomainsDomainMutationKey() {
  return ['v1', '/v1/domains/:domain', 'PATCH'] as const
}

export function getPatchV1DomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>) {
      return parseResponse(client.v1.domains[':domain'].$patch(args, options))
    },
  })
}

export function usePatchV1DomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1DomainsDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DomainsDomainVerifyMutationKey() {
  return ['v1', '/v1/domains/:domain/verify', 'POST'] as const
}

export function getPostV1DomainsDomainVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['verify']['$post']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].verify.$post(args, options))
    },
  })
}

export function usePostV1DomainsDomainVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainsDomainVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1DomainsDomainDiagnoseMutationKey() {
  return ['v1', '/v1/domains/:domain/diagnose', 'POST'] as const
}

export function getPostV1DomainsDomainDiagnoseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainDiagnoseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].diagnose.$post(args, options))
    },
  })
}

export function usePostV1DomainsDomainDiagnose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainsDomainDiagnoseMutationOptions<TError, TOnMutateResult>(
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

export function getV1DomainsDomainRoutesQueryKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
) {
  return ['v1', '/v1/domains/:domain/routes', args] as const
}

export function getV1DomainsDomainRoutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsDomainRoutesQueryKey>
  >({
    queryKey: getV1DomainsDomainRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domains[':domain'].routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DomainsDomainRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainRoutesQueryKey>
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
      ...getV1DomainsDomainRoutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DomainsDomainRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainRoutesQueryKey>
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
      ...getV1DomainsDomainRoutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1DomainsDomainRoutesMutationKey() {
  return ['v1', '/v1/domains/:domain/routes', 'POST'] as const
}

export function getPostV1DomainsDomainRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$post']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].routes.$post(args, options))
    },
  })
}

export function usePostV1DomainsDomainRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainsDomainRoutesMutationOptions<TError, TOnMutateResult>(
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

export function getV1DomainsDomainRoutesAddressQueryKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
) {
  return ['v1', '/v1/domains/:domain/routes/:address', args] as const
}

export function getV1DomainsDomainRoutesAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsDomainRoutesAddressQueryKey>
  >({
    queryKey: getV1DomainsDomainRoutesAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domains[':domain'].routes[':address'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DomainsDomainRoutesAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainRoutesAddressQueryKey>
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
      ...getV1DomainsDomainRoutesAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DomainsDomainRoutesAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainRoutesAddressQueryKey>
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
      ...getV1DomainsDomainRoutesAddressQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1DomainsDomainRoutesAddressMutationKey() {
  return ['v1', '/v1/domains/:domain/routes/:address', 'DELETE'] as const
}

export function getDeleteV1DomainsDomainRoutesAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DomainsDomainRoutesAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domains)[':domain']['routes'][':address']['$delete']
      >,
    ) {
      return parseResponse(client.v1.domains[':domain'].routes[':address'].$delete(args, options))
    },
  })
}

export function useDeleteV1DomainsDomainRoutesAddress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1DomainsDomainRoutesAddressMutationOptions<
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

export function getPatchV1DomainsDomainRoutesAddressMutationKey() {
  return ['v1', '/v1/domains/:domain/routes/:address', 'PATCH'] as const
}

export function getPatchV1DomainsDomainRoutesAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DomainsDomainRoutesAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>,
    ) {
      return parseResponse(client.v1.domains[':domain'].routes[':address'].$patch(args, options))
    },
  })
}

export function usePatchV1DomainsDomainRoutesAddress<
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
                ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1DomainsDomainRoutesAddressMutationOptions<
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

export function getPostV1DomainsDomainRoutesAddressTestMutationKey() {
  return ['v1', '/v1/domains/:domain/routes/:address/test', 'POST'] as const
}

export function getPostV1DomainsDomainRoutesAddressTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainRoutesAddressTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.domains[':domain'].routes[':address'].test.$post(args, options),
      )
    },
  })
}

export function usePostV1DomainsDomainRoutesAddressTest<
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
                  (typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']
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
  const mutationDefaults = getPostV1DomainsDomainRoutesAddressTestMutationOptions<
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

export function getV1DomainsDomainAutoConfigureQueryKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
) {
  return ['v1', '/v1/domains/:domain/auto-configure', args] as const
}

export function getV1DomainsDomainAutoConfigureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DomainsDomainAutoConfigureQueryKey>
  >({
    queryKey: getV1DomainsDomainAutoConfigureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.domains[':domain']['auto-configure'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DomainsDomainAutoConfigure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainAutoConfigureQueryKey>
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
      ...getV1DomainsDomainAutoConfigureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DomainsDomainAutoConfigure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DomainsDomainAutoConfigureQueryKey>
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
      ...getV1DomainsDomainAutoConfigureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1DomainsDomainAutoConfigureStartMutationKey() {
  return ['v1', '/v1/domains/:domain/auto-configure/start', 'POST'] as const
}

export function getPostV1DomainsDomainAutoConfigureStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DomainsDomainAutoConfigureStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.domains[':domain']['auto-configure'].start.$post(args, options),
      )
    },
  })
}

export function usePostV1DomainsDomainAutoConfigureStart<
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
                  (typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DomainsDomainAutoConfigureStartMutationOptions<
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

export function getV1IntegrationsQueryKey() {
  return ['v1', '/v1/integrations'] as const
}

export function getV1IntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsQueryKey>
  >({
    queryKey: getV1IntegrationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Integrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IntegrationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Integrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IntegrationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1IntegrationsMutationKey() {
  return ['v1', '/v1/integrations', 'POST'] as const
}

export function getPostV1IntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.integrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.integrations.$post>) {
      return parseResponse(client.v1.integrations.$post(args, options))
    },
  })
}

export function usePostV1Integrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.integrations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1IntegrationsActiveQueryKey() {
  return ['v1', '/v1/integrations/active'] as const
}

export function getV1IntegrationsActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsActiveQueryKey>
  >({
    queryKey: getV1IntegrationsActiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrations.active.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IntegrationsActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsActiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IntegrationsActiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1IntegrationsActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsActiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IntegrationsActiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1IntegrationsIntegrationIdMutationKey() {
  return ['v1', '/v1/integrations/:integrationId', 'PUT'] as const
}

export function getPutV1IntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)[':integrationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1IntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.integrations)[':integrationId']['$put']>,
    ) {
      return parseResponse(client.v1.integrations[':integrationId'].$put(args, options))
    },
  })
}

export function usePutV1IntegrationsIntegrationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations)[':integrationId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.integrations)[':integrationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1IntegrationsIntegrationIdMutationOptions<
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

export function getDeleteV1IntegrationsIntegrationIdMutationKey() {
  return ['v1', '/v1/integrations/:integrationId', 'DELETE'] as const
}

export function getDeleteV1IntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)[':integrationId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1IntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.integrations)[':integrationId']['$delete']>,
    ) {
      return parseResponse(client.v1.integrations[':integrationId'].$delete(args, options))
    },
  })
}

export function useDeleteV1IntegrationsIntegrationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations)[':integrationId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.integrations)[':integrationId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1IntegrationsIntegrationIdMutationOptions<
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

export function getPostV1IntegrationsIntegrationIdAutoConfigureMutationKey() {
  return ['v1', '/v1/integrations/:integrationId/auto-configure', 'POST'] as const
}

export function getPostV1IntegrationsIntegrationIdAutoConfigureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsIntegrationIdAutoConfigureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.integrations[':integrationId']['auto-configure'].$post(args, options),
      )
    },
  })
}

export function usePostV1IntegrationsIntegrationIdAutoConfigure<
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
                  (typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']
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
  const mutationDefaults = getPostV1IntegrationsIntegrationIdAutoConfigureMutationOptions<
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

export function getPostV1IntegrationsIntegrationIdSetPrimaryMutationKey() {
  return ['v1', '/v1/integrations/:integrationId/set-primary', 'POST'] as const
}

export function getPostV1IntegrationsIntegrationIdSetPrimaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.integrations)[':integrationId']['set-primary']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['set-primary']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsIntegrationIdSetPrimaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.integrations)[':integrationId']['set-primary']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.integrations[':integrationId']['set-primary'].$post(args, options),
      )
    },
  })
}

export function usePostV1IntegrationsIntegrationIdSetPrimary<
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
                  (typeof client.v1.integrations)[':integrationId']['set-primary']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.integrations)[':integrationId']['set-primary']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IntegrationsIntegrationIdSetPrimaryMutationOptions<
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

export function getPostV1IntegrationsChatOauthMutationKey() {
  return ['v1', '/v1/integrations/chat/oauth', 'POST'] as const
}

export function getPostV1IntegrationsChatOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.chat.oauth.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.integrations.chat.oauth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsChatOauthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.integrations.chat.oauth.$post>) {
      return parseResponse(client.v1.integrations.chat.oauth.$post(args, options))
    },
  })
}

export function usePostV1IntegrationsChatOauth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.integrations.chat.oauth.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.integrations.chat.oauth.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IntegrationsChatOauthMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1IntegrationsChannelConnectionsOauthMutationKey() {
  return ['v1', '/v1/integrations/channel-connections/oauth', 'POST'] as const
}

export function getPostV1IntegrationsChannelConnectionsOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.integrations)['channel-connections']['oauth']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations)['channel-connections']['oauth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsChannelConnectionsOauthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.integrations)['channel-connections']['oauth']['$post']
      >,
    ) {
      return parseResponse(client.v1.integrations['channel-connections'].oauth.$post(args, options))
    },
  })
}

export function usePostV1IntegrationsChannelConnectionsOauth<
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
                ReturnType<(typeof client.v1.integrations)['channel-connections']['oauth']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.integrations)['channel-connections']['oauth']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IntegrationsChannelConnectionsOauthMutationOptions<
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

export function getPostV1IntegrationsChannelEndpointsOauthMutationKey() {
  return ['v1', '/v1/integrations/channel-endpoints/oauth', 'POST'] as const
}

export function getPostV1IntegrationsChannelEndpointsOauthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsChannelEndpointsOauthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']
      >,
    ) {
      return parseResponse(client.v1.integrations['channel-endpoints'].oauth.$post(args, options))
    },
  })
}

export function usePostV1IntegrationsChannelEndpointsOauth<
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
                ReturnType<(typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IntegrationsChannelEndpointsOauthMutationOptions<
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

export function getPostV1IntegrationsChannelEndpointsLinkMutationKey() {
  return ['v1', '/v1/integrations/channel-endpoints/link', 'POST'] as const
}

export function getPostV1IntegrationsChannelEndpointsLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsChannelEndpointsLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>,
    ) {
      return parseResponse(client.v1.integrations['channel-endpoints'].link.$post(args, options))
    },
  })
}

export function usePostV1IntegrationsChannelEndpointsLink<
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
                ReturnType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IntegrationsChannelEndpointsLinkMutationOptions<
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

export function getPostV1IntegrationsIntegrationIdentifierWebhookConfigureMutationKey() {
  return ['v1', '/v1/integrations/:integrationIdentifier/webhook/configure', 'POST'] as const
}

export function getPostV1IntegrationsIntegrationIdentifierWebhookConfigureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsIntegrationIdentifierWebhookConfigureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.integrations[':integrationIdentifier'].webhook.configure.$post(args, options),
      )
    },
  })
}

export function usePostV1IntegrationsIntegrationIdentifierWebhookConfigure<
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
                  (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
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
    getPostV1IntegrationsIntegrationIdentifierWebhookConfigureMutationOptions<
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

export function getPostV1IntegrationsIntegrationIdentifierMobileLinkMutationKey() {
  return ['v1', '/v1/integrations/:integrationIdentifier/mobile-link', 'POST'] as const
}

export function getPostV1IntegrationsIntegrationIdentifierMobileLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsIntegrationIdentifierMobileLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.integrations[':integrationIdentifier']['mobile-link'].$post(args, options),
      )
    },
  })
}

export function usePostV1IntegrationsIntegrationIdentifierMobileLink<
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
                  (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
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
  const mutationDefaults = getPostV1IntegrationsIntegrationIdentifierMobileLinkMutationOptions<
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

export function getV2ContextsQueryKey(args: InferRequestType<typeof client.v2.contexts.$get>) {
  return ['v2', '/v2/contexts', args] as const
}

export function getV2ContextsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.contexts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ContextsQueryKey>
  >({
    queryKey: getV2ContextsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.contexts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.contexts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.contexts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ContextsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ContextsMutationKey() {
  return ['v2', '/v2/contexts', 'POST'] as const
}

export function getPostV2ContextsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.contexts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ContextsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.contexts.$post>) {
      return parseResponse(client.v2.contexts.$post(args, options))
    },
  })
}

export function usePostV2Contexts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.contexts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ContextsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ContextsTypeIdQueryKey(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
) {
  return ['v2', '/v2/contexts/:type/:id', args] as const
}

export function getV2ContextsTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ContextsTypeIdQueryKey>
  >({
    queryKey: getV2ContextsTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.contexts[':type'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2ContextsTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ContextsTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ContextsTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2ContextsTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ContextsTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ContextsTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2ContextsTypeIdMutationKey() {
  return ['v2', '/v2/contexts/:type/:id', 'DELETE'] as const
}

export function getDeleteV2ContextsTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ContextsTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$delete']>,
    ) {
      return parseResponse(client.v2.contexts[':type'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2ContextsTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ContextsTypeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2ContextsTypeIdMutationKey() {
  return ['v2', '/v2/contexts/:type/:id', 'PATCH'] as const
}

export function getPatchV2ContextsTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ContextsTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$patch']>,
    ) {
      return parseResponse(client.v2.contexts[':type'][':id'].$patch(args, options))
    },
  })
}

export function usePatchV2ContextsTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2ContextsTypeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SubscribersBulkMutationKey() {
  return ['v1', '/v1/subscribers/bulk', 'POST'] as const
}

export function getPostV1SubscribersBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscribers.bulk.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.subscribers.bulk.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscribersBulkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.subscribers.bulk.$post>) {
      return parseResponse(client.v1.subscribers.bulk.$post(args, options))
    },
  })
}

export function usePostV1SubscribersBulk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscribers.bulk.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.subscribers.bulk.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SubscribersBulkMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1SubscribersSubscriberIdCredentialsMutationKey() {
  return ['v1', '/v1/subscribers/:subscriberId/credentials', 'PUT'] as const
}

export function getPutV1SubscribersSubscriberIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SubscribersSubscriberIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']
      >,
    ) {
      return parseResponse(client.v1.subscribers[':subscriberId'].credentials.$put(args, options))
    },
  })
}

export function usePutV1SubscribersSubscriberIdCredentials<
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
                ReturnType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SubscribersSubscriberIdCredentialsMutationOptions<
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

export function getPatchV1SubscribersSubscriberIdCredentialsMutationKey() {
  return ['v1', '/v1/subscribers/:subscriberId/credentials', 'PATCH'] as const
}

export function getPatchV1SubscribersSubscriberIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SubscribersSubscriberIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']
      >,
    ) {
      return parseResponse(client.v1.subscribers[':subscriberId'].credentials.$patch(args, options))
    },
  })
}

export function usePatchV1SubscribersSubscriberIdCredentials<
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
                ReturnType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1SubscribersSubscriberIdCredentialsMutationOptions<
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

export function getDeleteV1SubscribersSubscriberIdCredentialsProviderIdMutationKey() {
  return ['v1', '/v1/subscribers/:subscriberId/credentials/:providerId', 'DELETE'] as const
}

export function getDeleteV1SubscribersSubscriberIdCredentialsProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SubscribersSubscriberIdCredentialsProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.subscribers[':subscriberId'].credentials[':providerId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1SubscribersSubscriberIdCredentialsProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
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
  const mutationDefaults = getDeleteV1SubscribersSubscriberIdCredentialsProviderIdMutationOptions<
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

export function getPatchV1SubscribersSubscriberIdOnlineStatusMutationKey() {
  return ['v1', '/v1/subscribers/:subscriberId/online-status', 'PATCH'] as const
}

export function getPatchV1SubscribersSubscriberIdOnlineStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SubscribersSubscriberIdOnlineStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.subscribers[':subscriberId']['online-status'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1SubscribersSubscriberIdOnlineStatus<
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
                  (typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']
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
  const mutationDefaults = getPatchV1SubscribersSubscriberIdOnlineStatusMutationOptions<
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

export function getV1SubscribersSubscriberIdNotificationsFeedQueryKey(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
) {
  return ['v1', '/v1/subscribers/:subscriberId/notifications/feed', args] as const
}

export function getV1SubscribersSubscriberIdNotificationsFeedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscribersSubscriberIdNotificationsFeedQueryKey>
  >({
    queryKey: getV1SubscribersSubscriberIdNotificationsFeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscribers[':subscriberId'].notifications.feed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SubscribersSubscriberIdNotificationsFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SubscribersSubscriberIdNotificationsFeedQueryKey>
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
      ...getV1SubscribersSubscriberIdNotificationsFeedQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SubscribersSubscriberIdNotificationsFeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SubscribersSubscriberIdNotificationsFeedQueryKey>
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
      ...getV1SubscribersSubscriberIdNotificationsFeedQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1SubscribersSubscriberIdNotificationsUnseenQueryKey(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
) {
  return ['v1', '/v1/subscribers/:subscriberId/notifications/unseen', args] as const
}

export function getV1SubscribersSubscriberIdNotificationsUnseenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscribersSubscriberIdNotificationsUnseenQueryKey>
  >({
    queryKey: getV1SubscribersSubscriberIdNotificationsUnseenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscribers[':subscriberId'].notifications.unseen.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SubscribersSubscriberIdNotificationsUnseen<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SubscribersSubscriberIdNotificationsUnseenQueryKey>
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
      ...getV1SubscribersSubscriberIdNotificationsUnseenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SubscribersSubscriberIdNotificationsUnseen<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SubscribersSubscriberIdNotificationsUnseenQueryKey>
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
      ...getV1SubscribersSubscriberIdNotificationsUnseenQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1SubscribersSubscriberIdMessagesMarkAsMutationKey() {
  return ['v1', '/v1/subscribers/:subscriberId/messages/mark-as', 'POST'] as const
}

export function getPostV1SubscribersSubscriberIdMessagesMarkAsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscribersSubscriberIdMessagesMarkAsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.subscribers[':subscriberId'].messages['mark-as'].$post(args, options),
      )
    },
  })
}

export function usePostV1SubscribersSubscriberIdMessagesMarkAs<
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
                  (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
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
  const mutationDefaults = getPostV1SubscribersSubscriberIdMessagesMarkAsMutationOptions<
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

export function getPostV1SubscribersSubscriberIdMessagesMarkAllMutationKey() {
  return ['v1', '/v1/subscribers/:subscriberId/messages/mark-all', 'POST'] as const
}

export function getPostV1SubscribersSubscriberIdMessagesMarkAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscribersSubscriberIdMessagesMarkAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.subscribers[':subscriberId'].messages['mark-all'].$post(args, options),
      )
    },
  })
}

export function usePostV1SubscribersSubscriberIdMessagesMarkAll<
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
                  (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
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
  const mutationDefaults = getPostV1SubscribersSubscriberIdMessagesMarkAllMutationOptions<
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

export function getPostV1SubscribersSubscriberIdMessagesMessageIdActionsTypeMutationKey() {
  return ['v1', '/v1/subscribers/:subscriberId/messages/:messageId/actions/:type', 'POST'] as const
}

export function getPostV1SubscribersSubscriberIdMessagesMessageIdActionsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SubscribersSubscriberIdMessagesMessageIdActionsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.subscribers[':subscriberId'].messages[':messageId'].actions[':type'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1SubscribersSubscriberIdMessagesMessageIdActionsType<
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
                  (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
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
    getPostV1SubscribersSubscriberIdMessagesMessageIdActionsTypeMutationOptions<
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

export function getV2SubscribersQueryKey(
  args: InferRequestType<typeof client.v2.subscribers.$get>,
) {
  return ['v2', '/v2/subscribers', args] as const
}

export function getV2SubscribersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.subscribers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscribersQueryKey>
  >({
    queryKey: getV2SubscribersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscribers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Subscribers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.subscribers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SubscribersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Subscribers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.subscribers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SubscribersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2SubscribersMutationKey() {
  return ['v2', '/v2/subscribers', 'POST'] as const
}

export function getPostV2SubscribersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.subscribers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscribersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.subscribers.$post>) {
      return parseResponse(client.v2.subscribers.$post(args, options))
    },
  })
}

export function usePostV2Subscribers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.subscribers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SubscribersMutationOptions<TError, TOnMutateResult>(
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

export function getV2SubscribersSubscriberIdQueryKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId', args] as const
}

export function getV2SubscribersSubscriberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscribersSubscriberIdQueryKey>
  >({
    queryKey: getV2SubscribersSubscriberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SubscribersSubscriberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdQueryKey>
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
      ...getV2SubscribersSubscriberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SubscribersSubscriberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdQueryKey>
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
      ...getV2SubscribersSubscriberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2SubscribersSubscriberIdMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId', 'DELETE'] as const
}

export function getDeleteV2SubscribersSubscriberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SubscribersSubscriberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>,
    ) {
      return parseResponse(client.v2.subscribers[':subscriberId'].$delete(args, options))
    },
  })
}

export function useDeleteV2SubscribersSubscriberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2SubscribersSubscriberIdMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId', 'PATCH'] as const
}

export function getPatchV2SubscribersSubscriberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>,
    ) {
      return parseResponse(client.v2.subscribers[':subscriberId'].$patch(args, options))
    },
  })
}

export function usePatchV2SubscribersSubscriberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2SubscribersSubscriberIdMutationOptions<
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

export function getV2SubscribersSubscriberIdPreferencesQueryKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId/preferences', args] as const
}

export function getV2SubscribersSubscriberIdPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscribersSubscriberIdPreferencesQueryKey>
  >({
    queryKey: getV2SubscribersSubscriberIdPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].preferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SubscribersSubscriberIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdPreferencesQueryKey>
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
      ...getV2SubscribersSubscriberIdPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SubscribersSubscriberIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdPreferencesQueryKey>
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
      ...getV2SubscribersSubscriberIdPreferencesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV2SubscribersSubscriberIdPreferencesMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/preferences', 'PATCH'] as const
}

export function getPatchV2SubscribersSubscriberIdPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']
      >,
    ) {
      return parseResponse(client.v2.subscribers[':subscriberId'].preferences.$patch(args, options))
    },
  })
}

export function usePatchV2SubscribersSubscriberIdPreferences<
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
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2SubscribersSubscriberIdPreferencesMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdPreferencesBulkMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/preferences/bulk', 'PATCH'] as const
}

export function getPatchV2SubscribersSubscriberIdPreferencesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdPreferencesBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].preferences.bulk.$patch(args, options),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdPreferencesBulk<
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
                  (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
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
  const mutationDefaults = getPatchV2SubscribersSubscriberIdPreferencesBulkMutationOptions<
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

export function getV2SubscribersSubscriberIdSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId/subscriptions', args] as const
}

export function getV2SubscribersSubscriberIdSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscribersSubscriberIdSubscriptionsQueryKey>
  >({
    queryKey: getV2SubscribersSubscriberIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SubscribersSubscriberIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdSubscriptionsQueryKey>
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
      ...getV2SubscribersSubscriberIdSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SubscribersSubscriberIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdSubscriptionsQueryKey>
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
      ...getV2SubscribersSubscriberIdSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2SubscribersSubscriberIdTokensMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/tokens', 'POST'] as const
}

export function getPostV2SubscribersSubscriberIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscribersSubscriberIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>,
    ) {
      return parseResponse(client.v2.subscribers[':subscriberId'].tokens.$post(args, options))
    },
  })
}

export function usePostV2SubscribersSubscriberIdTokens<
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
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SubscribersSubscriberIdTokensMutationOptions<
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

export function getV2SubscribersSubscriberIdNotificationsQueryKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId/notifications', args] as const
}

export function getV2SubscribersSubscriberIdNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscribersSubscriberIdNotificationsQueryKey>
  >({
    queryKey: getV2SubscribersSubscriberIdNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SubscribersSubscriberIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdNotificationsQueryKey>
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
      ...getV2SubscribersSubscriberIdNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SubscribersSubscriberIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdNotificationsQueryKey>
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
      ...getV2SubscribersSubscriberIdNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2SubscribersSubscriberIdNotificationsCountQueryKey(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
) {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/count', args] as const
}

export function getV2SubscribersSubscriberIdNotificationsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SubscribersSubscriberIdNotificationsCountQueryKey>
  >({
    queryKey: getV2SubscribersSubscriberIdNotificationsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SubscribersSubscriberIdNotificationsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdNotificationsCountQueryKey>
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
      ...getV2SubscribersSubscriberIdNotificationsCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SubscribersSubscriberIdNotificationsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SubscribersSubscriberIdNotificationsCountQueryKey>
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
      ...getV2SubscribersSubscriberIdNotificationsCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdReadMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/read',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdNotificationsNotificationIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].read.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdRead<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdReadMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unread',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unread.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdUnread<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/archive',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].archive.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdArchive<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unarchive',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unarchive.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchive<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/snooze',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].snooze.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdSnooze<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unsnooze',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unsnooze.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnooze<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeMutationOptions<
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

export function getDeleteV2SubscribersSubscriberIdNotificationsNotificationIdMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/:notificationId', 'DELETE'] as const
}

export function getDeleteV2SubscribersSubscriberIdNotificationsNotificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SubscribersSubscriberIdNotificationsNotificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2SubscribersSubscriberIdNotificationsNotificationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
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
    getDeleteV2SubscribersSubscriberIdNotificationsNotificationIdMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/actions/:actionType/complete',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].actions[
          ':actionType'
        ].complete.$patch(args, options),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeComplete<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteMutationOptions<
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

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertMutationKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/actions/:actionType/revert',
    'PATCH',
  ] as const
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications[':notificationId'].actions[
          ':actionType'
        ].revert.$patch(args, options),
      )
    },
  })
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevert<
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
                  (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
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
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertMutationOptions<
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

export function getPostV2SubscribersSubscriberIdNotificationsSeenMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/seen', 'POST'] as const
}

export function getPostV2SubscribersSubscriberIdNotificationsSeenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscribersSubscriberIdNotificationsSeenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications.seen.$post(args, options),
      )
    },
  })
}

export function usePostV2SubscribersSubscriberIdNotificationsSeen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
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
  const mutationDefaults = getPostV2SubscribersSubscriberIdNotificationsSeenMutationOptions<
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

export function getPostV2SubscribersSubscriberIdNotificationsReadMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/read', 'POST'] as const
}

export function getPostV2SubscribersSubscriberIdNotificationsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscribersSubscriberIdNotificationsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications.read.$post(args, options),
      )
    },
  })
}

export function usePostV2SubscribersSubscriberIdNotificationsRead<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
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
  const mutationDefaults = getPostV2SubscribersSubscriberIdNotificationsReadMutationOptions<
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

export function getPostV2SubscribersSubscriberIdNotificationsArchiveMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/archive', 'POST'] as const
}

export function getPostV2SubscribersSubscriberIdNotificationsArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscribersSubscriberIdNotificationsArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications.archive.$post(args, options),
      )
    },
  })
}

export function usePostV2SubscribersSubscriberIdNotificationsArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
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
  const mutationDefaults = getPostV2SubscribersSubscriberIdNotificationsArchiveMutationOptions<
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

export function getPostV2SubscribersSubscriberIdNotificationsReadArchiveMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/read-archive', 'POST'] as const
}

export function getPostV2SubscribersSubscriberIdNotificationsReadArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscribersSubscriberIdNotificationsReadArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications['read-archive'].$post(args, options),
      )
    },
  })
}

export function usePostV2SubscribersSubscriberIdNotificationsReadArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
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
  const mutationDefaults = getPostV2SubscribersSubscriberIdNotificationsReadArchiveMutationOptions<
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

export function getPostV2SubscribersSubscriberIdNotificationsDeleteMutationKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/delete', 'POST'] as const
}

export function getPostV2SubscribersSubscriberIdNotificationsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2SubscribersSubscriberIdNotificationsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.subscribers[':subscriberId'].notifications.delete.$post(args, options),
      )
    },
  })
}

export function usePostV2SubscribersSubscriberIdNotificationsDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
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
  const mutationDefaults = getPostV2SubscribersSubscriberIdNotificationsDeleteMutationOptions<
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

export function getV2LayoutsQueryKey(args: InferRequestType<typeof client.v2.layouts.$get>) {
  return ['v2', '/v2/layouts', args] as const
}

export function getV2LayoutsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.layouts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2LayoutsQueryKey>
  >({
    queryKey: getV2LayoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.layouts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Layouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.layouts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LayoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LayoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Layouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.layouts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2LayoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LayoutsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2LayoutsMutationKey() {
  return ['v2', '/v2/layouts', 'POST'] as const
}

export function getPostV2LayoutsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.layouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LayoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.layouts.$post>) {
      return parseResponse(client.v2.layouts.$post(args, options))
    },
  })
}

export function usePostV2Layouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.layouts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LayoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2LayoutsLayoutIdQueryKey(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
) {
  return ['v2', '/v2/layouts/:layoutId', args] as const
}

export function getV2LayoutsLayoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LayoutsLayoutIdQueryKey>
  >({
    queryKey: getV2LayoutsLayoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.layouts[':layoutId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LayoutsLayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LayoutsLayoutIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2LayoutsLayoutIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2LayoutsLayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LayoutsLayoutIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2LayoutsLayoutIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV2LayoutsLayoutIdMutationKey() {
  return ['v2', '/v2/layouts/:layoutId', 'PUT'] as const
}

export function getPutV2LayoutsLayoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LayoutsLayoutIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$put']>) {
      return parseResponse(client.v2.layouts[':layoutId'].$put(args, options))
    },
  })
}

export function usePutV2LayoutsLayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.layouts)[':layoutId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2LayoutsLayoutIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2LayoutsLayoutIdMutationKey() {
  return ['v2', '/v2/layouts/:layoutId', 'DELETE'] as const
}

export function getDeleteV2LayoutsLayoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LayoutsLayoutIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$delete']>) {
      return parseResponse(client.v2.layouts[':layoutId'].$delete(args, options))
    },
  })
}

export function useDeleteV2LayoutsLayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.layouts)[':layoutId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2LayoutsLayoutIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LayoutsLayoutIdDuplicateMutationKey() {
  return ['v2', '/v2/layouts/:layoutId/duplicate', 'POST'] as const
}

export function getPostV2LayoutsLayoutIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LayoutsLayoutIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>,
    ) {
      return parseResponse(client.v2.layouts[':layoutId'].duplicate.$post(args, options))
    },
  })
}

export function usePostV2LayoutsLayoutIdDuplicate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LayoutsLayoutIdDuplicateMutationOptions<
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

export function getPostV2LayoutsLayoutIdPreviewMutationKey() {
  return ['v2', '/v2/layouts/:layoutId/preview', 'POST'] as const
}

export function getPostV2LayoutsLayoutIdPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LayoutsLayoutIdPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>,
    ) {
      return parseResponse(client.v2.layouts[':layoutId'].preview.$post(args, options))
    },
  })
}

export function usePostV2LayoutsLayoutIdPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2LayoutsLayoutIdPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getV2LayoutsLayoutIdUsageQueryKey(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
) {
  return ['v2', '/v2/layouts/:layoutId/usage', args] as const
}

export function getV2LayoutsLayoutIdUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LayoutsLayoutIdUsageQueryKey>
  >({
    queryKey: getV2LayoutsLayoutIdUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.layouts[':layoutId'].usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2LayoutsLayoutIdUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LayoutsLayoutIdUsageQueryKey>
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
      ...getV2LayoutsLayoutIdUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2LayoutsLayoutIdUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LayoutsLayoutIdUsageQueryKey>
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
      ...getV2LayoutsLayoutIdUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1MessagesQueryKey(args: InferRequestType<typeof client.v1.messages.$get>) {
  return ['v1', '/v1/messages', args] as const
}

export function getV1MessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1MessagesQueryKey>
  >({
    queryKey: getV1MessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Messages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Messages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1MessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1MessagesMessageIdMutationKey() {
  return ['v1', '/v1/messages/:messageId', 'DELETE'] as const
}

export function getDeleteV1MessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':messageId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.messages)[':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesMessageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.messages)[':messageId']['$delete']>) {
      return parseResponse(client.v1.messages[':messageId'].$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.messages)[':messageId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.messages)[':messageId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1MessagesMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1MessagesTransactionTransactionIdMutationKey() {
  return ['v1', '/v1/messages/transaction/:transactionId', 'DELETE'] as const
}

export function getDeleteV1MessagesTransactionTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.messages.transaction)[':transactionId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.messages.transaction)[':transactionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1MessagesTransactionTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.messages.transaction)[':transactionId']['$delete']>,
    ) {
      return parseResponse(client.v1.messages.transaction[':transactionId'].$delete(args, options))
    },
  })
}

export function useDeleteV1MessagesTransactionTransactionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.messages.transaction)[':transactionId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.messages.transaction)[':transactionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1MessagesTransactionTransactionIdMutationOptions<
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

export function getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
) {
  return ['v1', '/v1/topics/:topicKey/subscribers/:externalSubscriberId', args] as const
}

export function getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryKey>
  >({
    queryKey: getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.topics[':topicKey'].subscribers[':externalSubscriberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1TopicsTopicKeySubscribersExternalSubscriberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryKey>
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
      ...getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1TopicsTopicKeySubscribersExternalSubscriberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryKey>
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
      ...getV1TopicsTopicKeySubscribersExternalSubscriberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2TopicsQueryKey(args: InferRequestType<typeof client.v2.topics.$get>) {
  return ['v2', '/v2/topics', args] as const
}

export function getV2TopicsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.topics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TopicsQueryKey>
  >({
    queryKey: getV2TopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.topics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Topics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.topics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Topics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.topics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2TopicsMutationKey() {
  return ['v2', '/v2/topics', 'POST'] as const
}

export function getPostV2TopicsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.topics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TopicsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.topics.$post>) {
      return parseResponse(client.v2.topics.$post(args, options))
    },
  })
}

export function usePostV2Topics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.topics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TopicsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TopicsTopicKeyQueryKey(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
) {
  return ['v2', '/v2/topics/:topicKey', args] as const
}

export function getV2TopicsTopicKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TopicsTopicKeyQueryKey>
  >({
    queryKey: getV2TopicsTopicKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.topics[':topicKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TopicsTopicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsTopicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TopicsTopicKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2TopicsTopicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsTopicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TopicsTopicKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2TopicsTopicKeyMutationKey() {
  return ['v2', '/v2/topics/:topicKey', 'DELETE'] as const
}

export function getDeleteV2TopicsTopicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TopicsTopicKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$delete']>) {
      return parseResponse(client.v2.topics[':topicKey'].$delete(args, options))
    },
  })
}

export function useDeleteV2TopicsTopicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.topics)[':topicKey']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2TopicsTopicKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2TopicsTopicKeyMutationKey() {
  return ['v2', '/v2/topics/:topicKey', 'PATCH'] as const
}

export function getPatchV2TopicsTopicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2TopicsTopicKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$patch']>) {
      return parseResponse(client.v2.topics[':topicKey'].$patch(args, options))
    },
  })
}

export function usePatchV2TopicsTopicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.topics)[':topicKey']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2TopicsTopicKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV2TopicsTopicKeySubscriptionsQueryKey(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
) {
  return ['v2', '/v2/topics/:topicKey/subscriptions', args] as const
}

export function getV2TopicsTopicKeySubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TopicsTopicKeySubscriptionsQueryKey>
  >({
    queryKey: getV2TopicsTopicKeySubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.topics[':topicKey'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TopicsTopicKeySubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsTopicKeySubscriptionsQueryKey>
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
      ...getV2TopicsTopicKeySubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TopicsTopicKeySubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsTopicKeySubscriptionsQueryKey>
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
      ...getV2TopicsTopicKeySubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2TopicsTopicKeySubscriptionsMutationKey() {
  return ['v2', '/v2/topics/:topicKey/subscriptions', 'POST'] as const
}

export function getPostV2TopicsTopicKeySubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TopicsTopicKeySubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>,
    ) {
      return parseResponse(client.v2.topics[':topicKey'].subscriptions.$post(args, options))
    },
  })
}

export function usePostV2TopicsTopicKeySubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TopicsTopicKeySubscriptionsMutationOptions<
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

export function getDeleteV2TopicsTopicKeySubscriptionsMutationKey() {
  return ['v2', '/v2/topics/:topicKey/subscriptions', 'DELETE'] as const
}

export function getDeleteV2TopicsTopicKeySubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TopicsTopicKeySubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>,
    ) {
      return parseResponse(client.v2.topics[':topicKey'].subscriptions.$delete(args, options))
    },
  })
}

export function useDeleteV2TopicsTopicKeySubscriptions<
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
                ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2TopicsTopicKeySubscriptionsMutationOptions<
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

export function getV2TopicsTopicKeySubscriptionsIdentifierQueryKey(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
) {
  return ['v2', '/v2/topics/:topicKey/subscriptions/:identifier', args] as const
}

export function getV2TopicsTopicKeySubscriptionsIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TopicsTopicKeySubscriptionsIdentifierQueryKey>
  >({
    queryKey: getV2TopicsTopicKeySubscriptionsIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.topics[':topicKey'].subscriptions[':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TopicsTopicKeySubscriptionsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsTopicKeySubscriptionsIdentifierQueryKey>
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
      ...getV2TopicsTopicKeySubscriptionsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TopicsTopicKeySubscriptionsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TopicsTopicKeySubscriptionsIdentifierQueryKey>
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
      ...getV2TopicsTopicKeySubscriptionsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV2TopicsTopicKeySubscriptionsIdentifierMutationKey() {
  return ['v2', '/v2/topics/:topicKey/subscriptions/:identifier', 'PATCH'] as const
}

export function getPatchV2TopicsTopicKeySubscriptionsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2TopicsTopicKeySubscriptionsIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.topics[':topicKey'].subscriptions[':identifier'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2TopicsTopicKeySubscriptionsIdentifier<
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
                  (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
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
  const mutationDefaults = getPatchV2TopicsTopicKeySubscriptionsIdentifierMutationOptions<
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

export function getV1EnvironmentVariablesQueryKey(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
) {
  return ['v1', '/v1/environment-variables', args] as const
}

export function getV1EnvironmentVariablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentVariablesQueryKey>
  >({
    queryKey: getV1EnvironmentVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['environment-variables'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EnvironmentVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentVariablesQueryKey>
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
      ...getV1EnvironmentVariablesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EnvironmentVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentVariablesQueryKey>
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
      ...getV1EnvironmentVariablesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1EnvironmentVariablesMutationKey() {
  return ['v1', '/v1/environment-variables', 'POST'] as const
}

export function getPostV1EnvironmentVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['environment-variables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['environment-variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EnvironmentVariablesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['environment-variables']['$post']>) {
      return parseResponse(client.v1['environment-variables'].$post(args, options))
    },
  })
}

export function usePostV1EnvironmentVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['environment-variables']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['environment-variables']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EnvironmentVariablesMutationOptions<TError, TOnMutateResult>(
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

export function getV1EnvironmentVariablesVariableKeyUsageQueryKey(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
) {
  return ['v1', '/v1/environment-variables/:variableKey/usage', args] as const
}

export function getV1EnvironmentVariablesVariableKeyUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentVariablesVariableKeyUsageQueryKey>
  >({
    queryKey: getV1EnvironmentVariablesVariableKeyUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['environment-variables'][':variableKey'].usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EnvironmentVariablesVariableKeyUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentVariablesVariableKeyUsageQueryKey>
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
      ...getV1EnvironmentVariablesVariableKeyUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EnvironmentVariablesVariableKeyUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentVariablesVariableKeyUsageQueryKey>
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
      ...getV1EnvironmentVariablesVariableKeyUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1EnvironmentVariablesVariableKeyQueryKey(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
) {
  return ['v1', '/v1/environment-variables/:variableKey', args] as const
}

export function getV1EnvironmentVariablesVariableKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnvironmentVariablesVariableKeyQueryKey>
  >({
    queryKey: getV1EnvironmentVariablesVariableKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['environment-variables'][':variableKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EnvironmentVariablesVariableKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentVariablesVariableKeyQueryKey>
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
      ...getV1EnvironmentVariablesVariableKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EnvironmentVariablesVariableKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnvironmentVariablesVariableKeyQueryKey>
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
      ...getV1EnvironmentVariablesVariableKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1EnvironmentVariablesVariableKeyMutationKey() {
  return ['v1', '/v1/environment-variables/:variableKey', 'DELETE'] as const
}

export function getDeleteV1EnvironmentVariablesVariableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1EnvironmentVariablesVariableKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['environment-variables'][':variableKey']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['environment-variables'][':variableKey'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1EnvironmentVariablesVariableKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1EnvironmentVariablesVariableKeyMutationOptions<
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

export function getPatchV1EnvironmentVariablesVariableKeyMutationKey() {
  return ['v1', '/v1/environment-variables/:variableKey', 'PATCH'] as const
}

export function getPatchV1EnvironmentVariablesVariableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1EnvironmentVariablesVariableKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>,
    ) {
      return parseResponse(client.v1['environment-variables'][':variableKey'].$patch(args, options))
    },
  })
}

export function usePatchV1EnvironmentVariablesVariableKey<
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
                ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1EnvironmentVariablesVariableKeyMutationOptions<
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

export function getV2WorkflowsQueryKey(args: InferRequestType<typeof client.v2.workflows.$get>) {
  return ['v2', '/v2/workflows', args] as const
}

export function getV2WorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsQueryKey>
  >({
    queryKey: getV2WorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Workflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.workflows.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Workflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.workflows.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WorkflowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2WorkflowsMutationKey() {
  return ['v2', '/v2/workflows', 'POST'] as const
}

export function getPostV2WorkflowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.workflows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.workflows.$post>) {
      return parseResponse(client.v2.workflows.$post(args, options))
    },
  })
}

export function usePostV2Workflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.workflows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2WorkflowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV2WorkflowsWorkflowIdSyncMutationKey() {
  return ['v2', '/v2/workflows/:workflowId/sync', 'PUT'] as const
}

export function getPutV2WorkflowsWorkflowIdSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2WorkflowsWorkflowIdSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>,
    ) {
      return parseResponse(client.v2.workflows[':workflowId'].sync.$put(args, options))
    },
  })
}

export function usePutV2WorkflowsWorkflowIdSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2WorkflowsWorkflowIdSyncMutationOptions<TError, TOnMutateResult>(
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

export function getV2WorkflowsWorkflowIdQueryKey(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
) {
  return ['v2', '/v2/workflows/:workflowId', args] as const
}

export function getV2WorkflowsWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsWorkflowIdQueryKey>
  >({
    queryKey: getV2WorkflowsWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.workflows[':workflowId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2WorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WorkflowsWorkflowIdQueryKey>
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
      ...getV2WorkflowsWorkflowIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2WorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WorkflowsWorkflowIdQueryKey>
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
      ...getV2WorkflowsWorkflowIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV2WorkflowsWorkflowIdMutationKey() {
  return ['v2', '/v2/workflows/:workflowId', 'PUT'] as const
}

export function getPutV2WorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2WorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$put']>) {
      return parseResponse(client.v2.workflows[':workflowId'].$put(args, options))
    },
  })
}

export function usePutV2WorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.workflows)[':workflowId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV2WorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2WorkflowsWorkflowIdMutationKey() {
  return ['v2', '/v2/workflows/:workflowId', 'DELETE'] as const
}

export function getDeleteV2WorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$delete']>,
    ) {
      return parseResponse(client.v2.workflows[':workflowId'].$delete(args, options))
    },
  })
}

export function useDeleteV2WorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.workflows)[':workflowId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2WorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2WorkflowsWorkflowIdMutationKey() {
  return ['v2', '/v2/workflows/:workflowId', 'PATCH'] as const
}

export function getPatchV2WorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2WorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$patch']>,
    ) {
      return parseResponse(client.v2.workflows[':workflowId'].$patch(args, options))
    },
  })
}

export function usePatchV2WorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.workflows)[':workflowId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2WorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WorkflowsWorkflowIdStepStepIdPreviewMutationKey() {
  return ['v2', '/v2/workflows/:workflowId/step/:stepId/preview', 'POST'] as const
}

export function getPostV2WorkflowsWorkflowIdStepStepIdPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2WorkflowsWorkflowIdStepStepIdPreviewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.workflows[':workflowId'].step[':stepId'].preview.$post(args, options),
      )
    },
  })
}

export function usePostV2WorkflowsWorkflowIdStepStepIdPreview<
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
                  (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
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
  const mutationDefaults = getPostV2WorkflowsWorkflowIdStepStepIdPreviewMutationOptions<
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

export function getV2WorkflowsWorkflowIdStepsStepIdQueryKey(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
) {
  return ['v2', '/v2/workflows/:workflowId/steps/:stepId', args] as const
}

export function getV2WorkflowsWorkflowIdStepsStepIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsWorkflowIdStepsStepIdQueryKey>
  >({
    queryKey: getV2WorkflowsWorkflowIdStepsStepIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.workflows[':workflowId'].steps[':stepId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2WorkflowsWorkflowIdStepsStepId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WorkflowsWorkflowIdStepsStepIdQueryKey>
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
      ...getV2WorkflowsWorkflowIdStepsStepIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2WorkflowsWorkflowIdStepsStepId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WorkflowsWorkflowIdStepsStepIdQueryKey>
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
      ...getV2WorkflowsWorkflowIdStepsStepIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2EnvironmentsEnvironmentIdTagsQueryKey(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
) {
  return ['v2', '/v2/environments/:environmentId/tags', args] as const
}

export function getV2EnvironmentsEnvironmentIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EnvironmentsEnvironmentIdTagsQueryKey>
  >({
    queryKey: getV2EnvironmentsEnvironmentIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.environments[':environmentId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2EnvironmentsEnvironmentIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EnvironmentsEnvironmentIdTagsQueryKey>
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
      ...getV2EnvironmentsEnvironmentIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2EnvironmentsEnvironmentIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EnvironmentsEnvironmentIdTagsQueryKey>
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
      ...getV2EnvironmentsEnvironmentIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2EnvironmentsTargetEnvironmentIdPublishMutationKey() {
  return ['v2', '/v2/environments/:targetEnvironmentId/publish', 'POST'] as const
}

export function getPostV2EnvironmentsTargetEnvironmentIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EnvironmentsTargetEnvironmentIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.environments[':targetEnvironmentId'].publish.$post(args, options),
      )
    },
  })
}

export function usePostV2EnvironmentsTargetEnvironmentIdPublish<
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
                  (typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']
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
  const mutationDefaults = getPostV2EnvironmentsTargetEnvironmentIdPublishMutationOptions<
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

export function getPostV2EnvironmentsTargetEnvironmentIdDiffMutationKey() {
  return ['v2', '/v2/environments/:targetEnvironmentId/diff', 'POST'] as const
}

export function getPostV2EnvironmentsTargetEnvironmentIdDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EnvironmentsTargetEnvironmentIdDiffMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']
      >,
    ) {
      return parseResponse(client.v2.environments[':targetEnvironmentId'].diff.$post(args, options))
    },
  })
}

export function usePostV2EnvironmentsTargetEnvironmentIdDiff<
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
                ReturnType<(typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2EnvironmentsTargetEnvironmentIdDiffMutationOptions<
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

export function getV1ChannelConnectionsQueryKey(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
) {
  return ['v1', '/v1/channel-connections', args] as const
}

export function getV1ChannelConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelConnectionsQueryKey>
  >({
    queryKey: getV1ChannelConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['channel-connections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ChannelConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ChannelConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ChannelConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ChannelConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ChannelConnectionsMutationKey() {
  return ['v1', '/v1/channel-connections', 'POST'] as const
}

export function getPostV1ChannelConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-connections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['channel-connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChannelConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['channel-connections']['$post']>) {
      return parseResponse(client.v1['channel-connections'].$post(args, options))
    },
  })
}

export function usePostV1ChannelConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-connections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['channel-connections']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ChannelConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ChannelConnectionsIdentifierQueryKey(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
) {
  return ['v1', '/v1/channel-connections/:identifier', args] as const
}

export function getV1ChannelConnectionsIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelConnectionsIdentifierQueryKey>
  >({
    queryKey: getV1ChannelConnectionsIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['channel-connections'][':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ChannelConnectionsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelConnectionsIdentifierQueryKey>
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
      ...getV1ChannelConnectionsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ChannelConnectionsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelConnectionsIdentifierQueryKey>
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
      ...getV1ChannelConnectionsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ChannelConnectionsIdentifierMutationKey() {
  return ['v1', '/v1/channel-connections/:identifier', 'DELETE'] as const
}

export function getDeleteV1ChannelConnectionsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ChannelConnectionsIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>,
    ) {
      return parseResponse(client.v1['channel-connections'][':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1ChannelConnectionsIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ChannelConnectionsIdentifierMutationOptions<
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

export function getPatchV1ChannelConnectionsIdentifierMutationKey() {
  return ['v1', '/v1/channel-connections/:identifier', 'PATCH'] as const
}

export function getPatchV1ChannelConnectionsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ChannelConnectionsIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>,
    ) {
      return parseResponse(client.v1['channel-connections'][':identifier'].$patch(args, options))
    },
  })
}

export function usePatchV1ChannelConnectionsIdentifier<
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
                ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ChannelConnectionsIdentifierMutationOptions<
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

export function getV1ChannelEndpointsQueryKey(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
) {
  return ['v1', '/v1/channel-endpoints', args] as const
}

export function getV1ChannelEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelEndpointsQueryKey>
  >({
    queryKey: getV1ChannelEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['channel-endpoints'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ChannelEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ChannelEndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ChannelEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ChannelEndpointsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ChannelEndpointsMutationKey() {
  return ['v1', '/v1/channel-endpoints', 'POST'] as const
}

export function getPostV1ChannelEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['channel-endpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChannelEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['channel-endpoints']['$post']>) {
      return parseResponse(client.v1['channel-endpoints'].$post(args, options))
    },
  })
}

export function usePostV1ChannelEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['channel-endpoints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ChannelEndpointsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ChannelEndpointsIdentifierQueryKey(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
) {
  return ['v1', '/v1/channel-endpoints/:identifier', args] as const
}

export function getV1ChannelEndpointsIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ChannelEndpointsIdentifierQueryKey>
  >({
    queryKey: getV1ChannelEndpointsIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['channel-endpoints'][':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ChannelEndpointsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelEndpointsIdentifierQueryKey>
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
      ...getV1ChannelEndpointsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ChannelEndpointsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ChannelEndpointsIdentifierQueryKey>
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
      ...getV1ChannelEndpointsIdentifierQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1ChannelEndpointsIdentifierMutationKey() {
  return ['v1', '/v1/channel-endpoints/:identifier', 'DELETE'] as const
}

export function getDeleteV1ChannelEndpointsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ChannelEndpointsIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>,
    ) {
      return parseResponse(client.v1['channel-endpoints'][':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV1ChannelEndpointsIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ChannelEndpointsIdentifierMutationOptions<
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

export function getPatchV1ChannelEndpointsIdentifierMutationKey() {
  return ['v1', '/v1/channel-endpoints/:identifier', 'PATCH'] as const
}

export function getPatchV1ChannelEndpointsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ChannelEndpointsIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>,
    ) {
      return parseResponse(client.v1['channel-endpoints'][':identifier'].$patch(args, options))
    },
  })
}

export function usePatchV1ChannelEndpointsIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ChannelEndpointsIdentifierMutationOptions<
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

export function getPostV2TranslationsUploadMutationKey() {
  return ['v2', '/v2/translations/upload', 'POST'] as const
}

export function getPostV2TranslationsUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.translations.upload.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.translations.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TranslationsUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.translations.upload.$post>) {
      return parseResponse(client.v2.translations.upload.$post(args, options))
    },
  })
}

export function usePostV2TranslationsUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.translations.upload.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.translations.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TranslationsUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TranslationsMutationKey() {
  return ['v2', '/v2/translations', 'POST'] as const
}

export function getPostV2TranslationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.translations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.translations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TranslationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.translations.$post>) {
      return parseResponse(client.v2.translations.$post(args, options))
    },
  })
}

export function usePostV2Translations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.translations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.translations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TranslationsMutationOptions<TError, TOnMutateResult>(
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

export function getV2TranslationsMasterJsonQueryKey(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
) {
  return ['v2', '/v2/translations/master-json', args] as const
}

export function getV2TranslationsMasterJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TranslationsMasterJsonQueryKey>
  >({
    queryKey: getV2TranslationsMasterJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.translations['master-json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TranslationsMasterJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TranslationsMasterJsonQueryKey>
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
      ...getV2TranslationsMasterJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TranslationsMasterJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TranslationsMasterJsonQueryKey>
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
      ...getV2TranslationsMasterJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2TranslationsMasterJsonMutationKey() {
  return ['v2', '/v2/translations/master-json', 'POST'] as const
}

export function getPostV2TranslationsMasterJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.translations)['master-json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TranslationsMasterJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.translations)['master-json']['$post']>,
    ) {
      return parseResponse(client.v2.translations['master-json'].$post(args, options))
    },
  })
}

export function usePostV2TranslationsMasterJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.translations)['master-json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TranslationsMasterJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TranslationsMasterJsonUploadMutationKey() {
  return ['v2', '/v2/translations/master-json/upload', 'POST'] as const
}

export function getPostV2TranslationsMasterJsonUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.translations)['master-json']['upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.translations)['master-json']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TranslationsMasterJsonUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.translations)['master-json']['upload']['$post']>,
    ) {
      return parseResponse(client.v2.translations['master-json'].upload.$post(args, options))
    },
  })
}

export function usePostV2TranslationsMasterJsonUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.translations)['master-json']['upload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.translations)['master-json']['upload']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TranslationsMasterJsonUploadMutationOptions<
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

export function getV2TranslationsGroupResourceTypeResourceIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
) {
  return ['v2', '/v2/translations/group/:resourceType/:resourceId', args] as const
}

export function getV2TranslationsGroupResourceTypeResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TranslationsGroupResourceTypeResourceIdQueryKey>
  >({
    queryKey: getV2TranslationsGroupResourceTypeResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.translations.group[':resourceType'][':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TranslationsGroupResourceTypeResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TranslationsGroupResourceTypeResourceIdQueryKey>
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
      ...getV2TranslationsGroupResourceTypeResourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TranslationsGroupResourceTypeResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TranslationsGroupResourceTypeResourceIdQueryKey>
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
      ...getV2TranslationsGroupResourceTypeResourceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2TranslationsResourceTypeResourceIdLocaleQueryKey(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
) {
  return ['v2', '/v2/translations/:resourceType/:resourceId/:locale', args] as const
}

export function getV2TranslationsResourceTypeResourceIdLocaleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TranslationsResourceTypeResourceIdLocaleQueryKey>
  >({
    queryKey: getV2TranslationsResourceTypeResourceIdLocaleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.translations[':resourceType'][':resourceId'][':locale'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TranslationsResourceTypeResourceIdLocale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TranslationsResourceTypeResourceIdLocaleQueryKey>
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
      ...getV2TranslationsResourceTypeResourceIdLocaleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TranslationsResourceTypeResourceIdLocale<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TranslationsResourceTypeResourceIdLocaleQueryKey>
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
      ...getV2TranslationsResourceTypeResourceIdLocaleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV2TranslationsResourceTypeResourceIdLocaleMutationKey() {
  return ['v2', '/v2/translations/:resourceType/:resourceId/:locale', 'DELETE'] as const
}

export function getDeleteV2TranslationsResourceTypeResourceIdLocaleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TranslationsResourceTypeResourceIdLocaleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.translations[':resourceType'][':resourceId'][':locale'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2TranslationsResourceTypeResourceIdLocale<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
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
  const mutationDefaults = getDeleteV2TranslationsResourceTypeResourceIdLocaleMutationOptions<
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

export function getDeleteV2TranslationsResourceTypeResourceIdMutationKey() {
  return ['v2', '/v2/translations/:resourceType/:resourceId', 'DELETE'] as const
}

export function getDeleteV2TranslationsResourceTypeResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TranslationsResourceTypeResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.translations[':resourceType'][':resourceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2TranslationsResourceTypeResourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']
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
  const mutationDefaults = getDeleteV2TranslationsResourceTypeResourceIdMutationOptions<
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

export function getPostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdMutationKey() {
  return [
    'v2',
    '/v2/inbound-webhooks/delivery-providers/:environmentId/:integrationId',
    'POST',
  ] as const
}

export function getPostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
      >,
    ) {
      return parseResponse(
        client.v2['inbound-webhooks']['delivery-providers'][':environmentId'][
          ':integrationId'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationId<
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
                  (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
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
    getPostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdMutationOptions<
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
