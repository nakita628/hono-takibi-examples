import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV1EnvironmentsKey() {
  return ['v1', '/v1/environments'] as const
}

export function useGetV1Environments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvironmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Environments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvironmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EnvironmentsKey() {
  return ['v1', '/v1/environments', 'POST'] as const
}

export function usePostV1Environments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.environments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.environments.$post> }) =>
        parseResponse(client.v1.environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1EnvironmentsEnvironmentIdKey() {
  return ['v1', '/v1/environments/:environmentId', 'PUT'] as const
}

export function usePutV1EnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1EnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']> },
      ) => parseResponse(client.v1.environments[':environmentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EnvironmentsEnvironmentIdKey() {
  return ['v1', '/v1/environments/:environmentId', 'DELETE'] as const
}

export function useDeleteV1EnvironmentsEnvironmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.environments)[':environmentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EnvironmentsEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']> },
      ) => parseResponse(client.v1.environments[':environmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EventsTriggerKey() {
  return ['v1', '/v1/events/trigger', 'POST'] as const
}

export function usePostV1EventsTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.events.trigger.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventsTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.events.trigger.$post> }) =>
        parseResponse(client.v1.events.trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EventsTriggerBulkKey() {
  return ['v1', '/v1/events/trigger/bulk', 'POST'] as const
}

export function usePostV1EventsTriggerBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.events.trigger.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventsTriggerBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.events.trigger.bulk.$post> },
      ) => parseResponse(client.v1.events.trigger.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EventsTriggerBroadcastKey() {
  return ['v1', '/v1/events/trigger/broadcast', 'POST'] as const
}

export function usePostV1EventsTriggerBroadcast<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.trigger.broadcast.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.events.trigger.broadcast.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EventsTriggerBroadcastKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.events.trigger.broadcast.$post> },
      ) => parseResponse(client.v1.events.trigger.broadcast.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EventsTriggerTransactionIdKey() {
  return ['v1', '/v1/events/trigger/:transactionId', 'DELETE'] as const
}

export function useDeleteV1EventsTriggerTransactionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EventsTriggerTransactionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.events.trigger)[':transactionId']['$delete']>
        },
      ) => parseResponse(client.v1.events.trigger[':transactionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NotificationsKey(
  args: InferRequestType<typeof client.v1.notifications.$get>,
) {
  return ['v1', '/v1/notifications', args] as const
}

export function useGetV1Notifications<TError = unknown>(
  args: InferRequestType<typeof client.v1.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Notifications<TError = unknown>(
  args: InferRequestType<typeof client.v1.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1NotificationsNotificationIdKey(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
) {
  return ['v1', '/v1/notifications/:notificationId', args] as const
}

export function useGetV1NotificationsNotificationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationsNotificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.notifications[':notificationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NotificationsNotificationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.notifications)[':notificationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1NotificationsNotificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.notifications)[':notificationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.notifications[':notificationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AgentsKey(args: InferRequestType<typeof client.v1.agents.$get>) {
  return ['v1', '/v1/agents', args] as const
}

export function useGetV1Agents<TError = unknown>(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Agents<TError = unknown>(
  args: InferRequestType<typeof client.v1.agents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AgentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AgentsKey() {
  return ['v1', '/v1/agents', 'POST'] as const
}

export function usePostV1Agents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.agents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.agents.$post> }) =>
        parseResponse(client.v1.agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1AgentsIdentifierBridgeKey() {
  return ['v1', '/v1/agents/:identifier/bridge', 'PUT'] as const
}

export function usePutV1AgentsIdentifierBridge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':identifier']['bridge']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1AgentsIdentifierBridgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.agents)[':identifier']['bridge']['$put']> },
      ) => parseResponse(client.v1.agents[':identifier'].bridge.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentsIdentifierKey(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
) {
  return ['v1', '/v1/agents/:identifier', args] as const
}

export function useGetV1AgentsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.agents[':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AgentsIdentifierKey() {
  return ['v1', '/v1/agents/:identifier', 'DELETE'] as const
}

export function useDeleteV1AgentsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AgentsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.agents)[':identifier']['$delete']> },
      ) => parseResponse(client.v1.agents[':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AgentsIdentifierKey() {
  return ['v1', '/v1/agents/:identifier', 'PATCH'] as const
}

export function usePatchV1AgentsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':identifier']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AgentsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.agents)[':identifier']['$patch']> },
      ) => parseResponse(client.v1.agents[':identifier'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AgentsIdentifierIntegrationsKey(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
) {
  return ['v1', '/v1/agents/:identifier/integrations', args] as const
}

export function useGetV1AgentsIdentifierIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsIdentifierIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agents[':identifier'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AgentsIdentifierIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AgentsIdentifierIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.agents[':identifier'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AgentsIdentifierIntegrationsKey() {
  return ['v1', '/v1/agents/:identifier/integrations', 'POST'] as const
}

export function usePostV1AgentsIdentifierIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentsIdentifierIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.agents)[':identifier']['integrations']['$post']>
        },
      ) => parseResponse(client.v1.agents[':identifier'].integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AgentsIdentifierIntegrationsAgentIntegrationIdKey() {
  return ['v1', '/v1/agents/:identifier/integrations/:agentIntegrationId', 'DELETE'] as const
}

export function useDeleteV1AgentsIdentifierIntegrationsAgentIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AgentsIdentifierIntegrationsAgentIntegrationIdKey()
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
            (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.agents[':identifier'].integrations[':agentIntegrationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AgentsIdentifierIntegrationsAgentIntegrationIdKey() {
  return ['v1', '/v1/agents/:identifier/integrations/:agentIntegrationId', 'PATCH'] as const
}

export function usePatchV1AgentsIdentifierIntegrationsAgentIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AgentsIdentifierIntegrationsAgentIntegrationIdKey()
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
            (typeof client.v1.agents)[':identifier']['integrations'][':agentIntegrationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.agents[':identifier'].integrations[':agentIntegrationId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AgentsAgentIdReplyKey() {
  return ['v1', '/v1/agents/:agentId/reply', 'POST'] as const
}

export function usePostV1AgentsAgentIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.agents)[':agentId']['reply']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.agents)[':agentId']['reply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AgentsAgentIdReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.agents)[':agentId']['reply']['$post']> },
      ) => parseResponse(client.v1.agents[':agentId'].reply.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsKey(args: InferRequestType<typeof client.v1.domains.$get>) {
  return ['v1', '/v1/domains', args] as const
}

export function useGetV1Domains<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Domains<TError = unknown>(
  args: InferRequestType<typeof client.v1.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainsKey() {
  return ['v1', '/v1/domains', 'POST'] as const
}

export function usePostV1Domains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.domains.$post> }) =>
        parseResponse(client.v1.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsDomainKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
) {
  return ['v1', '/v1/domains/:domain', args] as const
}

export function useGetV1DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DomainsDomainKey() {
  return ['v1', '/v1/domains/:domain', 'DELETE'] as const
}

export function useDeleteV1DomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['$delete']> },
      ) => parseResponse(client.v1.domains[':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DomainsDomainKey() {
  return ['v1', '/v1/domains/:domain', 'PATCH'] as const
}

export function usePatchV1DomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.domains)[':domain']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['$patch']> },
      ) => parseResponse(client.v1.domains[':domain'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsDomainVerifyKey() {
  return ['v1', '/v1/domains/:domain/verify', 'POST'] as const
}

export function usePostV1DomainsDomainVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['verify']['$post']> },
      ) => parseResponse(client.v1.domains[':domain'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsDomainDiagnoseKey() {
  return ['v1', '/v1/domains/:domain/diagnose', 'POST'] as const
}

export function usePostV1DomainsDomainDiagnose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['diagnose']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainDiagnoseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['diagnose']['$post']> },
      ) => parseResponse(client.v1.domains[':domain'].diagnose.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsDomainRoutesKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
) {
  return ['v1', '/v1/domains/:domain/routes', args] as const
}

export function useGetV1DomainsDomainRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains[':domain'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsDomainRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.domains[':domain'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainsDomainRoutesKey() {
  return ['v1', '/v1/domains/:domain/routes', 'POST'] as const
}

export function usePostV1DomainsDomainRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains)[':domain']['routes']['$post']> },
      ) => parseResponse(client.v1.domains[':domain'].routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsDomainRoutesAddressKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
) {
  return ['v1', '/v1/domains/:domain/routes/:address', args] as const
}

export function useGetV1DomainsDomainRoutesAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainRoutesAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains[':domain'].routes[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsDomainRoutesAddress<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainRoutesAddressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains[':domain'].routes[':address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DomainsDomainRoutesAddressKey() {
  return ['v1', '/v1/domains/:domain/routes/:address', 'DELETE'] as const
}

export function useDeleteV1DomainsDomainRoutesAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DomainsDomainRoutesAddressKey()
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
            (typeof client.v1.domains)[':domain']['routes'][':address']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.domains[':domain'].routes[':address'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DomainsDomainRoutesAddressKey() {
  return ['v1', '/v1/domains/:domain/routes/:address', 'PATCH'] as const
}

export function usePatchV1DomainsDomainRoutesAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DomainsDomainRoutesAddressKey()
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
            (typeof client.v1.domains)[':domain']['routes'][':address']['$patch']
          >
        },
      ) =>
        parseResponse(client.v1.domains[':domain'].routes[':address'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DomainsDomainRoutesAddressTestKey() {
  return ['v1', '/v1/domains/:domain/routes/:address/test', 'POST'] as const
}

export function usePostV1DomainsDomainRoutesAddressTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainRoutesAddressTestKey()
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
            (typeof client.v1.domains)[':domain']['routes'][':address']['test']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.domains[':domain'].routes[':address'].test.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsDomainAutoConfigureKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
) {
  return ['v1', '/v1/domains/:domain/auto-configure', args] as const
}

export function useGetV1DomainsDomainAutoConfigure<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainAutoConfigureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains[':domain']['auto-configure'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsDomainAutoConfigure<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1DomainsDomainAutoConfigureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['auto-configure']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains[':domain']['auto-configure'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DomainsDomainAutoConfigureStartKey() {
  return ['v1', '/v1/domains/:domain/auto-configure/start', 'POST'] as const
}

export function usePostV1DomainsDomainAutoConfigureStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DomainsDomainAutoConfigureStartKey()
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
            (typeof client.v1.domains)[':domain']['auto-configure']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.domains[':domain']['auto-configure'].start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsKey() {
  return ['v1', '/v1/integrations'] as const
}

export function useGetV1Integrations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IntegrationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Integrations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IntegrationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IntegrationsKey() {
  return ['v1', '/v1/integrations', 'POST'] as const
}

export function usePostV1Integrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.integrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.integrations.$post> }) =>
        parseResponse(client.v1.integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsActiveKey() {
  return ['v1', '/v1/integrations/active'] as const
}

export function useGetV1IntegrationsActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsActiveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1IntegrationsActiveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.active.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1IntegrationsIntegrationIdKey() {
  return ['v1', '/v1/integrations/:integrationId', 'PUT'] as const
}

export function usePutV1IntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)[':integrationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1IntegrationsIntegrationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.integrations)[':integrationId']['$put']> },
      ) => parseResponse(client.v1.integrations[':integrationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1IntegrationsIntegrationIdKey() {
  return ['v1', '/v1/integrations/:integrationId', 'DELETE'] as const
}

export function useDeleteV1IntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)[':integrationId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1IntegrationsIntegrationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.integrations)[':integrationId']['$delete']> },
      ) => parseResponse(client.v1.integrations[':integrationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsIntegrationIdAutoConfigureKey() {
  return ['v1', '/v1/integrations/:integrationId/auto-configure', 'POST'] as const
}

export function usePostV1IntegrationsIntegrationIdAutoConfigure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsIntegrationIdAutoConfigureKey()
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
            (typeof client.v1.integrations)[':integrationId']['auto-configure']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations[':integrationId']['auto-configure'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsIntegrationIdSetPrimaryKey() {
  return ['v1', '/v1/integrations/:integrationId/set-primary', 'POST'] as const
}

export function usePostV1IntegrationsIntegrationIdSetPrimary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.integrations)[':integrationId']['set-primary']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsIntegrationIdSetPrimaryKey()
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
            (typeof client.v1.integrations)[':integrationId']['set-primary']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations[':integrationId']['set-primary'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsChatOauthKey() {
  return ['v1', '/v1/integrations/chat/oauth', 'POST'] as const
}

export function usePostV1IntegrationsChatOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.chat.oauth.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.integrations.chat.oauth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsChatOauthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.integrations.chat.oauth.$post> },
      ) => parseResponse(client.v1.integrations.chat.oauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsChannelConnectionsOauthKey() {
  return ['v1', '/v1/integrations/channel-connections/oauth', 'POST'] as const
}

export function usePostV1IntegrationsChannelConnectionsOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.integrations)['channel-connections']['oauth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsChannelConnectionsOauthKey()
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
            (typeof client.v1.integrations)['channel-connections']['oauth']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations['channel-connections'].oauth.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsChannelEndpointsOauthKey() {
  return ['v1', '/v1/integrations/channel-endpoints/oauth', 'POST'] as const
}

export function usePostV1IntegrationsChannelEndpointsOauth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsChannelEndpointsOauthKey()
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
            (typeof client.v1.integrations)['channel-endpoints']['oauth']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.integrations['channel-endpoints'].oauth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsChannelEndpointsLinkKey() {
  return ['v1', '/v1/integrations/channel-endpoints/link', 'POST'] as const
}

export function usePostV1IntegrationsChannelEndpointsLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations)['channel-endpoints']['link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsChannelEndpointsLinkKey()
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
            (typeof client.v1.integrations)['channel-endpoints']['link']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.integrations['channel-endpoints'].link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsIntegrationIdentifierWebhookConfigureKey() {
  return ['v1', '/v1/integrations/:integrationIdentifier/webhook/configure', 'POST'] as const
}

export function usePostV1IntegrationsIntegrationIdentifierWebhookConfigure<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsIntegrationIdentifierWebhookConfigureKey()
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
            (typeof client.v1.integrations)[':integrationIdentifier']['webhook']['configure']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations[':integrationIdentifier'].webhook.configure.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsIntegrationIdentifierMobileLinkKey() {
  return ['v1', '/v1/integrations/:integrationIdentifier/mobile-link', 'POST'] as const
}

export function usePostV1IntegrationsIntegrationIdentifierMobileLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsIntegrationIdentifierMobileLinkKey()
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
            (typeof client.v1.integrations)[':integrationIdentifier']['mobile-link']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations[':integrationIdentifier']['mobile-link'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ContextsKey(args: InferRequestType<typeof client.v2.contexts.$get>) {
  return ['v2', '/v2/contexts', args] as const
}

export function useGetV2Contexts<TError = unknown>(
  args: InferRequestType<typeof client.v2.contexts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ContextsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.contexts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Contexts<TError = unknown>(
  args: InferRequestType<typeof client.v2.contexts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ContextsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.contexts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ContextsKey() {
  return ['v2', '/v2/contexts', 'POST'] as const
}

export function usePostV2Contexts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contexts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.contexts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ContextsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.contexts.$post> }) =>
        parseResponse(client.v2.contexts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ContextsTypeIdKey(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
) {
  return ['v2', '/v2/contexts/:type/:id', args] as const
}

export function useGetV2ContextsTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ContextsTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.contexts[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ContextsTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ContextsTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.contexts[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ContextsTypeIdKey() {
  return ['v2', '/v2/contexts/:type/:id', 'DELETE'] as const
}

export function useDeleteV2ContextsTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ContextsTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$delete']> },
      ) => parseResponse(client.v2.contexts[':type'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ContextsTypeIdKey() {
  return ['v2', '/v2/contexts/:type/:id', 'PATCH'] as const
}

export function usePatchV2ContextsTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.contexts)[':type'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ContextsTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.contexts)[':type'][':id']['$patch']> },
      ) => parseResponse(client.v2.contexts[':type'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscribersBulkKey() {
  return ['v1', '/v1/subscribers/bulk', 'POST'] as const
}

export function usePostV1SubscribersBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscribers.bulk.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.subscribers.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscribersBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.subscribers.bulk.$post> }) =>
        parseResponse(client.v1.subscribers.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1SubscribersSubscriberIdCredentialsKey() {
  return ['v1', '/v1/subscribers/:subscriberId/credentials', 'PUT'] as const
}

export function usePutV1SubscribersSubscriberIdCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SubscribersSubscriberIdCredentialsKey()
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
            (typeof client.v1.subscribers)[':subscriberId']['credentials']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.subscribers[':subscriberId'].credentials.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SubscribersSubscriberIdCredentialsKey() {
  return ['v1', '/v1/subscribers/:subscriberId/credentials', 'PATCH'] as const
}

export function usePatchV1SubscribersSubscriberIdCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SubscribersSubscriberIdCredentialsKey()
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
            (typeof client.v1.subscribers)[':subscriberId']['credentials']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].credentials.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SubscribersSubscriberIdCredentialsProviderIdKey() {
  return ['v1', '/v1/subscribers/:subscriberId/credentials/:providerId', 'DELETE'] as const
}

export function useDeleteV1SubscribersSubscriberIdCredentialsProviderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SubscribersSubscriberIdCredentialsProviderIdKey()
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
            (typeof client.v1.subscribers)[':subscriberId']['credentials'][':providerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].credentials[':providerId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SubscribersSubscriberIdOnlineStatusKey() {
  return ['v1', '/v1/subscribers/:subscriberId/online-status', 'PATCH'] as const
}

export function usePatchV1SubscribersSubscriberIdOnlineStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SubscribersSubscriberIdOnlineStatusKey()
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
            (typeof client.v1.subscribers)[':subscriberId']['online-status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscribers[':subscriberId']['online-status'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscribersSubscriberIdNotificationsFeedKey(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
) {
  return ['v1', '/v1/subscribers/:subscriberId/notifications/feed', args] as const
}

export function useGetV1SubscribersSubscriberIdNotificationsFeed<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscribersSubscriberIdNotificationsFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].notifications.feed.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscribersSubscriberIdNotificationsFeed<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['feed']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscribersSubscriberIdNotificationsFeedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].notifications.feed.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SubscribersSubscriberIdNotificationsUnseenKey(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
) {
  return ['v1', '/v1/subscribers/:subscriberId/notifications/unseen', args] as const
}

export function useGetV1SubscribersSubscriberIdNotificationsUnseen<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscribersSubscriberIdNotificationsUnseenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].notifications.unseen.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscribersSubscriberIdNotificationsUnseen<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscribers)[':subscriberId']['notifications']['unseen']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SubscribersSubscriberIdNotificationsUnseenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].notifications.unseen.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscribersSubscriberIdMessagesMarkAsKey() {
  return ['v1', '/v1/subscribers/:subscriberId/messages/mark-as', 'POST'] as const
}

export function usePostV1SubscribersSubscriberIdMessagesMarkAs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscribersSubscriberIdMessagesMarkAsKey()
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
            (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-as']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].messages['mark-as'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscribersSubscriberIdMessagesMarkAllKey() {
  return ['v1', '/v1/subscribers/:subscriberId/messages/mark-all', 'POST'] as const
}

export function usePostV1SubscribersSubscriberIdMessagesMarkAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscribersSubscriberIdMessagesMarkAllKey()
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
            (typeof client.v1.subscribers)[':subscriberId']['messages']['mark-all']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].messages['mark-all'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscribersSubscriberIdMessagesMessageIdActionsTypeKey() {
  return ['v1', '/v1/subscribers/:subscriberId/messages/:messageId/actions/:type', 'POST'] as const
}

export function usePostV1SubscribersSubscriberIdMessagesMessageIdActionsType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscribersSubscriberIdMessagesMessageIdActionsTypeKey()
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
            (typeof client.v1.subscribers)[':subscriberId']['messages'][':messageId']['actions'][':type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscribers[':subscriberId'].messages[':messageId'].actions[':type'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscribersKey(args: InferRequestType<typeof client.v2.subscribers.$get>) {
  return ['v2', '/v2/subscribers', args] as const
}

export function useGetV2Subscribers<TError = unknown>(
  args: InferRequestType<typeof client.v2.subscribers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SubscribersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Subscribers<TError = unknown>(
  args: InferRequestType<typeof client.v2.subscribers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SubscribersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.subscribers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SubscribersKey() {
  return ['v2', '/v2/subscribers', 'POST'] as const
}

export function usePostV2Subscribers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscribers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.subscribers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscribersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.subscribers.$post> }) =>
        parseResponse(client.v2.subscribers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscribersSubscriberIdKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId', args] as const
}

export function useGetV2SubscribersSubscriberId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.subscribers[':subscriberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SubscribersSubscriberId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.subscribers[':subscriberId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SubscribersSubscriberIdKey() {
  return ['v2', '/v2/subscribers/:subscriberId', 'DELETE'] as const
}

export function useDeleteV2SubscribersSubscriberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SubscribersSubscriberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$delete']> },
      ) => parseResponse(client.v2.subscribers[':subscriberId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdKey() {
  return ['v2', '/v2/subscribers/:subscriberId', 'PATCH'] as const
}

export function usePatchV2SubscribersSubscriberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SubscribersSubscriberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['$patch']> },
      ) => parseResponse(client.v2.subscribers[':subscriberId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscribersSubscriberIdPreferencesKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId/preferences', args] as const
}

export function useGetV2SubscribersSubscriberIdPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.subscribers[':subscriberId'].preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SubscribersSubscriberIdPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.subscribers[':subscriberId'].preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdPreferencesKey() {
  return ['v2', '/v2/subscribers/:subscriberId/preferences', 'PATCH'] as const
}

export function usePatchV2SubscribersSubscriberIdPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SubscribersSubscriberIdPreferencesKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['preferences']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].preferences.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdPreferencesBulkKey() {
  return ['v2', '/v2/subscribers/:subscriberId/preferences/bulk', 'PATCH'] as const
}

export function usePatchV2SubscribersSubscriberIdPreferencesBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SubscribersSubscriberIdPreferencesBulkKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['preferences']['bulk']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].preferences.bulk.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscribersSubscriberIdSubscriptionsKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId/subscriptions', args] as const
}

export function useGetV2SubscribersSubscriberIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SubscribersSubscriberIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['subscriptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2SubscribersSubscriberIdTokensKey() {
  return ['v2', '/v2/subscribers/:subscriberId/tokens', 'POST'] as const
}

export function usePostV2SubscribersSubscriberIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscribersSubscriberIdTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['tokens']['$post']>
        },
      ) => parseResponse(client.v2.subscribers[':subscriberId'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscribersSubscriberIdNotificationsKey(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
) {
  return ['v2', '/v2/subscribers/:subscriberId/notifications', args] as const
}

export function useGetV2SubscribersSubscriberIdNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SubscribersSubscriberIdNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.subscribers)[':subscriberId']['notifications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SubscribersSubscriberIdNotificationsCountKey(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
) {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/count', args] as const
}

export function useGetV2SubscribersSubscriberIdNotificationsCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdNotificationsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.count.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SubscribersSubscriberIdNotificationsCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.subscribers)[':subscriberId']['notifications']['count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscribersSubscriberIdNotificationsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.count.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdReadKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/read',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdRead<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SubscribersSubscriberIdNotificationsNotificationIdReadKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['read']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].read.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unread',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdUnread<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnreadKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unread']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unread.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/archive',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV2SubscribersSubscriberIdNotificationsNotificationIdArchiveKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['archive']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].archive.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unarchive',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnarchiveKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unarchive']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unarchive.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/snooze',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdSnooze<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV2SubscribersSubscriberIdNotificationsNotificationIdSnoozeKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['snooze']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].snooze.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unsnooze',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnooze<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV2SubscribersSubscriberIdNotificationsNotificationIdUnsnoozeKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['unsnooze']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].unsnooze.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2SubscribersSubscriberIdNotificationsNotificationIdKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/:notificationId', 'DELETE'] as const
}

export function useDeleteV2SubscribersSubscriberIdNotificationsNotificationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SubscribersSubscriberIdNotificationsNotificationIdKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/actions/:actionType/complete',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeCompleteKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['complete']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].actions[
            ':actionType'
          ].complete.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertKey() {
  return [
    'v2',
    '/v2/subscribers/:subscriberId/notifications/:notificationId/actions/:actionType/revert',
    'PATCH',
  ] as const
}

export function usePatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevert<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV2SubscribersSubscriberIdNotificationsNotificationIdActionsActionTypeRevertKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications'][':notificationId']['actions'][':actionType']['revert']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications[':notificationId'].actions[
            ':actionType'
          ].revert.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscribersSubscriberIdNotificationsSeenKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/seen', 'POST'] as const
}

export function usePostV2SubscribersSubscriberIdNotificationsSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscribersSubscriberIdNotificationsSeenKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['seen']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.seen.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscribersSubscriberIdNotificationsReadKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/read', 'POST'] as const
}

export function usePostV2SubscribersSubscriberIdNotificationsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscribersSubscriberIdNotificationsReadKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['read']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.read.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscribersSubscriberIdNotificationsArchiveKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/archive', 'POST'] as const
}

export function usePostV2SubscribersSubscriberIdNotificationsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscribersSubscriberIdNotificationsArchiveKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscribersSubscriberIdNotificationsReadArchiveKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/read-archive', 'POST'] as const
}

export function usePostV2SubscribersSubscriberIdNotificationsReadArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscribersSubscriberIdNotificationsReadArchiveKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['read-archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications['read-archive'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SubscribersSubscriberIdNotificationsDeleteKey() {
  return ['v2', '/v2/subscribers/:subscriberId/notifications/delete', 'POST'] as const
}

export function usePostV2SubscribersSubscriberIdNotificationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SubscribersSubscriberIdNotificationsDeleteKey()
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
            (typeof client.v2.subscribers)[':subscriberId']['notifications']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.subscribers[':subscriberId'].notifications.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2LayoutsKey(args: InferRequestType<typeof client.v2.layouts.$get>) {
  return ['v2', '/v2/layouts', args] as const
}

export function useGetV2Layouts<TError = unknown>(
  args: InferRequestType<typeof client.v2.layouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.layouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Layouts<TError = unknown>(
  args: InferRequestType<typeof client.v2.layouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2LayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.layouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2LayoutsKey() {
  return ['v2', '/v2/layouts', 'POST'] as const
}

export function usePostV2Layouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.layouts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.layouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LayoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.layouts.$post> }) =>
        parseResponse(client.v2.layouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LayoutsLayoutIdKey(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
) {
  return ['v2', '/v2/layouts/:layoutId', args] as const
}

export function useGetV2LayoutsLayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LayoutsLayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.layouts[':layoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LayoutsLayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LayoutsLayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.layouts[':layoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2LayoutsLayoutIdKey() {
  return ['v2', '/v2/layouts/:layoutId', 'PUT'] as const
}

export function usePutV2LayoutsLayoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2LayoutsLayoutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$put']> },
      ) => parseResponse(client.v2.layouts[':layoutId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2LayoutsLayoutIdKey() {
  return ['v2', '/v2/layouts/:layoutId', 'DELETE'] as const
}

export function useDeleteV2LayoutsLayoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2LayoutsLayoutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.layouts)[':layoutId']['$delete']> },
      ) => parseResponse(client.v2.layouts[':layoutId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LayoutsLayoutIdDuplicateKey() {
  return ['v2', '/v2/layouts/:layoutId/duplicate', 'POST'] as const
}

export function usePostV2LayoutsLayoutIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LayoutsLayoutIdDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.layouts)[':layoutId']['duplicate']['$post']> },
      ) => parseResponse(client.v2.layouts[':layoutId'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2LayoutsLayoutIdPreviewKey() {
  return ['v2', '/v2/layouts/:layoutId/preview', 'POST'] as const
}

export function usePostV2LayoutsLayoutIdPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2LayoutsLayoutIdPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.layouts)[':layoutId']['preview']['$post']> },
      ) => parseResponse(client.v2.layouts[':layoutId'].preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2LayoutsLayoutIdUsageKey(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
) {
  return ['v2', '/v2/layouts/:layoutId/usage', args] as const
}

export function useGetV2LayoutsLayoutIdUsage<TError = unknown>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LayoutsLayoutIdUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.layouts[':layoutId'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2LayoutsLayoutIdUsage<TError = unknown>(
  args: InferRequestType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2LayoutsLayoutIdUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.layouts)[':layoutId']['usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.layouts[':layoutId'].usage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MessagesKey(args: InferRequestType<typeof client.v1.messages.$get>) {
  return ['v1', '/v1/messages', args] as const
}

export function useGetV1Messages<TError = unknown>(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Messages<TError = unknown>(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1MessagesMessageIdKey() {
  return ['v1', '/v1/messages/:messageId', 'DELETE'] as const
}

export function useDeleteV1MessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':messageId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.messages)[':messageId']['$delete']> },
      ) => parseResponse(client.v1.messages[':messageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MessagesTransactionTransactionIdKey() {
  return ['v1', '/v1/messages/transaction/:transactionId', 'DELETE'] as const
}

export function useDeleteV1MessagesTransactionTransactionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.messages.transaction)[':transactionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesTransactionTransactionIdKey()
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
            (typeof client.v1.messages.transaction)[':transactionId']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.messages.transaction[':transactionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TopicsTopicKeySubscribersExternalSubscriberIdKey(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
) {
  return ['v1', '/v1/topics/:topicKey/subscribers/:externalSubscriberId', args] as const
}

export function useGetV1TopicsTopicKeySubscribersExternalSubscriberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TopicsTopicKeySubscribersExternalSubscriberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.topics[':topicKey'].subscribers[':externalSubscriberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TopicsTopicKeySubscribersExternalSubscriberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.topics)[':topicKey']['subscribers'][':externalSubscriberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1TopicsTopicKeySubscribersExternalSubscriberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.topics[':topicKey'].subscribers[':externalSubscriberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TopicsKey(args: InferRequestType<typeof client.v2.topics.$get>) {
  return ['v2', '/v2/topics', args] as const
}

export function useGetV2Topics<TError = unknown>(
  args: InferRequestType<typeof client.v2.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TopicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Topics<TError = unknown>(
  args: InferRequestType<typeof client.v2.topics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TopicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TopicsKey() {
  return ['v2', '/v2/topics', 'POST'] as const
}

export function usePostV2Topics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.topics.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.topics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.topics.$post> }) =>
        parseResponse(client.v2.topics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TopicsTopicKeyKey(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
) {
  return ['v2', '/v2/topics/:topicKey', args] as const
}

export function useGetV2TopicsTopicKey<TError = unknown>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TopicsTopicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.topics[':topicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TopicsTopicKey<TError = unknown>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TopicsTopicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.topics[':topicKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2TopicsTopicKeyKey() {
  return ['v2', '/v2/topics/:topicKey', 'DELETE'] as const
}

export function useDeleteV2TopicsTopicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TopicsTopicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.topics)[':topicKey']['$delete']> },
      ) => parseResponse(client.v2.topics[':topicKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2TopicsTopicKeyKey() {
  return ['v2', '/v2/topics/:topicKey', 'PATCH'] as const
}

export function usePatchV2TopicsTopicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2TopicsTopicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.topics)[':topicKey']['$patch']> },
      ) => parseResponse(client.v2.topics[':topicKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TopicsTopicKeySubscriptionsKey(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
) {
  return ['v2', '/v2/topics/:topicKey/subscriptions', args] as const
}

export function useGetV2TopicsTopicKeySubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TopicsTopicKeySubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.topics[':topicKey'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TopicsTopicKeySubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TopicsTopicKeySubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.topics[':topicKey'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TopicsTopicKeySubscriptionsKey() {
  return ['v2', '/v2/topics/:topicKey/subscriptions', 'POST'] as const
}

export function usePostV2TopicsTopicKeySubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TopicsTopicKeySubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$post']>
        },
      ) => parseResponse(client.v2.topics[':topicKey'].subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2TopicsTopicKeySubscriptionsKey() {
  return ['v2', '/v2/topics/:topicKey/subscriptions', 'DELETE'] as const
}

export function useDeleteV2TopicsTopicKeySubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TopicsTopicKeySubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.topics)[':topicKey']['subscriptions']['$delete']>
        },
      ) => parseResponse(client.v2.topics[':topicKey'].subscriptions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TopicsTopicKeySubscriptionsIdentifierKey(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
) {
  return ['v2', '/v2/topics/:topicKey/subscriptions/:identifier', args] as const
}

export function useGetV2TopicsTopicKeySubscriptionsIdentifier<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TopicsTopicKeySubscriptionsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.topics[':topicKey'].subscriptions[':identifier'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TopicsTopicKeySubscriptionsIdentifier<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TopicsTopicKeySubscriptionsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.topics[':topicKey'].subscriptions[':identifier'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2TopicsTopicKeySubscriptionsIdentifierKey() {
  return ['v2', '/v2/topics/:topicKey/subscriptions/:identifier', 'PATCH'] as const
}

export function usePatchV2TopicsTopicKeySubscriptionsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2TopicsTopicKeySubscriptionsIdentifierKey()
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
            (typeof client.v2.topics)[':topicKey']['subscriptions'][':identifier']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.topics[':topicKey'].subscriptions[':identifier'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvironmentVariablesKey(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
) {
  return ['v1', '/v1/environment-variables', args] as const
}

export function useGetV1EnvironmentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['environment-variables'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentVariables<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['environment-variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['environment-variables'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EnvironmentVariablesKey() {
  return ['v1', '/v1/environment-variables', 'POST'] as const
}

export function usePostV1EnvironmentVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['environment-variables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['environment-variables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnvironmentVariablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['environment-variables']['$post']> },
      ) => parseResponse(client.v1['environment-variables'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvironmentVariablesVariableKeyUsageKey(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
) {
  return ['v1', '/v1/environment-variables/:variableKey/usage', args] as const
}

export function useGetV1EnvironmentVariablesVariableKeyUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentVariablesVariableKeyUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['environment-variables'][':variableKey'].usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentVariablesVariableKeyUsage<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['environment-variables'][':variableKey']['usage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentVariablesVariableKeyUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['environment-variables'][':variableKey'].usage.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EnvironmentVariablesVariableKeyKey(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
) {
  return ['v1', '/v1/environment-variables/:variableKey', args] as const
}

export function useGetV1EnvironmentVariablesVariableKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentVariablesVariableKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['environment-variables'][':variableKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvironmentVariablesVariableKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnvironmentVariablesVariableKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['environment-variables'][':variableKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1EnvironmentVariablesVariableKeyKey() {
  return ['v1', '/v1/environment-variables/:variableKey', 'DELETE'] as const
}

export function useDeleteV1EnvironmentVariablesVariableKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EnvironmentVariablesVariableKeyKey()
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
            (typeof client.v1)['environment-variables'][':variableKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['environment-variables'][':variableKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1EnvironmentVariablesVariableKeyKey() {
  return ['v1', '/v1/environment-variables/:variableKey', 'PATCH'] as const
}

export function usePatchV1EnvironmentVariablesVariableKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['environment-variables'][':variableKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1EnvironmentVariablesVariableKeyKey()
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
            (typeof client.v1)['environment-variables'][':variableKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1['environment-variables'][':variableKey'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2WorkflowsKey(args: InferRequestType<typeof client.v2.workflows.$get>) {
  return ['v2', '/v2/workflows', args] as const
}

export function useGetV2Workflows<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Workflows<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WorkflowsKey() {
  return ['v2', '/v2/workflows', 'POST'] as const
}

export function usePostV2Workflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.workflows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.workflows.$post> }) =>
        parseResponse(client.v2.workflows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV2WorkflowsWorkflowIdSyncKey() {
  return ['v2', '/v2/workflows/:workflowId/sync', 'PUT'] as const
}

export function usePutV2WorkflowsWorkflowIdSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2WorkflowsWorkflowIdSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.workflows)[':workflowId']['sync']['$put']> },
      ) => parseResponse(client.v2.workflows[':workflowId'].sync.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WorkflowsWorkflowIdKey(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
) {
  return ['v2', '/v2/workflows/:workflowId', args] as const
}

export function useGetV2WorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows[':workflowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows[':workflowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2WorkflowsWorkflowIdKey() {
  return ['v2', '/v2/workflows/:workflowId', 'PUT'] as const
}

export function usePutV2WorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2WorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$put']> },
      ) => parseResponse(client.v2.workflows[':workflowId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WorkflowsWorkflowIdKey() {
  return ['v2', '/v2/workflows/:workflowId', 'DELETE'] as const
}

export function useDeleteV2WorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$delete']> },
      ) => parseResponse(client.v2.workflows[':workflowId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2WorkflowsWorkflowIdKey() {
  return ['v2', '/v2/workflows/:workflowId', 'PATCH'] as const
}

export function usePatchV2WorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows)[':workflowId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows)[':workflowId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2WorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.workflows)[':workflowId']['$patch']> },
      ) => parseResponse(client.v2.workflows[':workflowId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WorkflowsWorkflowIdStepStepIdPreviewKey() {
  return ['v2', '/v2/workflows/:workflowId/step/:stepId/preview', 'POST'] as const
}

export function usePostV2WorkflowsWorkflowIdStepStepIdPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WorkflowsWorkflowIdStepStepIdPreviewKey()
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
            (typeof client.v2.workflows)[':workflowId']['step'][':stepId']['preview']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.workflows[':workflowId'].step[':stepId'].preview.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2WorkflowsWorkflowIdStepsStepIdKey(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
) {
  return ['v2', '/v2/workflows/:workflowId/steps/:stepId', args] as const
}

export function useGetV2WorkflowsWorkflowIdStepsStepId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WorkflowsWorkflowIdStepsStepIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.workflows[':workflowId'].steps[':stepId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WorkflowsWorkflowIdStepsStepId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WorkflowsWorkflowIdStepsStepIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.workflows)[':workflowId']['steps'][':stepId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.workflows[':workflowId'].steps[':stepId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2EnvironmentsEnvironmentIdTagsKey(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
) {
  return ['v2', '/v2/environments/:environmentId/tags', args] as const
}

export function useGetV2EnvironmentsEnvironmentIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2EnvironmentsEnvironmentIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.environments[':environmentId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EnvironmentsEnvironmentIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2EnvironmentsEnvironmentIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.environments)[':environmentId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.environments[':environmentId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2EnvironmentsTargetEnvironmentIdPublishKey() {
  return ['v2', '/v2/environments/:targetEnvironmentId/publish', 'POST'] as const
}

export function usePostV2EnvironmentsTargetEnvironmentIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EnvironmentsTargetEnvironmentIdPublishKey()
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
            (typeof client.v2.environments)[':targetEnvironmentId']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.environments[':targetEnvironmentId'].publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2EnvironmentsTargetEnvironmentIdDiffKey() {
  return ['v2', '/v2/environments/:targetEnvironmentId/diff', 'POST'] as const
}

export function usePostV2EnvironmentsTargetEnvironmentIdDiff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2EnvironmentsTargetEnvironmentIdDiffKey()
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
            (typeof client.v2.environments)[':targetEnvironmentId']['diff']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.environments[':targetEnvironmentId'].diff.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChannelConnectionsKey(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
) {
  return ['v1', '/v1/channel-connections', args] as const
}

export function useGetV1ChannelConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['channel-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChannelConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['channel-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChannelConnectionsKey() {
  return ['v1', '/v1/channel-connections', 'POST'] as const
}

export function usePostV1ChannelConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-connections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['channel-connections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChannelConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['channel-connections']['$post']> },
      ) => parseResponse(client.v1['channel-connections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChannelConnectionsIdentifierKey(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
) {
  return ['v1', '/v1/channel-connections/:identifier', args] as const
}

export function useGetV1ChannelConnectionsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelConnectionsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['channel-connections'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChannelConnectionsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelConnectionsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['channel-connections'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ChannelConnectionsIdentifierKey() {
  return ['v1', '/v1/channel-connections/:identifier', 'DELETE'] as const
}

export function useDeleteV1ChannelConnectionsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ChannelConnectionsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$delete']>
        },
      ) =>
        parseResponse(client.v1['channel-connections'][':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ChannelConnectionsIdentifierKey() {
  return ['v1', '/v1/channel-connections/:identifier', 'PATCH'] as const
}

export function usePatchV1ChannelConnectionsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ChannelConnectionsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['channel-connections'][':identifier']['$patch']>
        },
      ) =>
        parseResponse(client.v1['channel-connections'][':identifier'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChannelEndpointsKey(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
) {
  return ['v1', '/v1/channel-endpoints', args] as const
}

export function useGetV1ChannelEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['channel-endpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChannelEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['channel-endpoints'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChannelEndpointsKey() {
  return ['v1', '/v1/channel-endpoints', 'POST'] as const
}

export function usePostV1ChannelEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['channel-endpoints']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['channel-endpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChannelEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['channel-endpoints']['$post']> },
      ) => parseResponse(client.v1['channel-endpoints'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChannelEndpointsIdentifierKey(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
) {
  return ['v1', '/v1/channel-endpoints/:identifier', args] as const
}

export function useGetV1ChannelEndpointsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelEndpointsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['channel-endpoints'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChannelEndpointsIdentifier<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ChannelEndpointsIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['channel-endpoints'][':identifier'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ChannelEndpointsIdentifierKey() {
  return ['v1', '/v1/channel-endpoints/:identifier', 'DELETE'] as const
}

export function useDeleteV1ChannelEndpointsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ChannelEndpointsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$delete']>
        },
      ) => parseResponse(client.v1['channel-endpoints'][':identifier'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ChannelEndpointsIdentifierKey() {
  return ['v1', '/v1/channel-endpoints/:identifier', 'PATCH'] as const
}

export function usePatchV1ChannelEndpointsIdentifier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ChannelEndpointsIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['channel-endpoints'][':identifier']['$patch']>
        },
      ) => parseResponse(client.v1['channel-endpoints'][':identifier'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TranslationsUploadKey() {
  return ['v2', '/v2/translations/upload', 'POST'] as const
}

export function usePostV2TranslationsUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.translations.upload.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.translations.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TranslationsUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.translations.upload.$post> },
      ) => parseResponse(client.v2.translations.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TranslationsKey() {
  return ['v2', '/v2/translations', 'POST'] as const
}

export function usePostV2Translations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.translations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.translations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TranslationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.translations.$post> }) =>
        parseResponse(client.v2.translations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TranslationsMasterJsonKey(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
) {
  return ['v2', '/v2/translations/master-json', args] as const
}

export function useGetV2TranslationsMasterJson<TError = unknown>(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TranslationsMasterJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.translations['master-json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TranslationsMasterJson<TError = unknown>(
  args: InferRequestType<(typeof client.v2.translations)['master-json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TranslationsMasterJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.translations['master-json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TranslationsMasterJsonKey() {
  return ['v2', '/v2/translations/master-json', 'POST'] as const
}

export function usePostV2TranslationsMasterJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.translations)['master-json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.translations)['master-json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TranslationsMasterJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.translations)['master-json']['$post']> },
      ) => parseResponse(client.v2.translations['master-json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2TranslationsMasterJsonUploadKey() {
  return ['v2', '/v2/translations/master-json/upload', 'POST'] as const
}

export function usePostV2TranslationsMasterJsonUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.translations)['master-json']['upload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.translations)['master-json']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TranslationsMasterJsonUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.translations)['master-json']['upload']['$post']>
        },
      ) => parseResponse(client.v2.translations['master-json'].upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TranslationsGroupResourceTypeResourceIdKey(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
) {
  return ['v2', '/v2/translations/group/:resourceType/:resourceId', args] as const
}

export function useGetV2TranslationsGroupResourceTypeResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TranslationsGroupResourceTypeResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.translations.group[':resourceType'][':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TranslationsGroupResourceTypeResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.translations.group)[':resourceType'][':resourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TranslationsGroupResourceTypeResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.translations.group[':resourceType'][':resourceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TranslationsResourceTypeResourceIdLocaleKey(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
) {
  return ['v2', '/v2/translations/:resourceType/:resourceId/:locale', args] as const
}

export function useGetV2TranslationsResourceTypeResourceIdLocale<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TranslationsResourceTypeResourceIdLocaleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.translations[':resourceType'][':resourceId'][':locale'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TranslationsResourceTypeResourceIdLocale<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TranslationsResourceTypeResourceIdLocaleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.translations[':resourceType'][':resourceId'][':locale'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2TranslationsResourceTypeResourceIdLocaleKey() {
  return ['v2', '/v2/translations/:resourceType/:resourceId/:locale', 'DELETE'] as const
}

export function useDeleteV2TranslationsResourceTypeResourceIdLocale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TranslationsResourceTypeResourceIdLocaleKey()
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
            (typeof client.v2.translations)[':resourceType'][':resourceId'][':locale']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.translations[':resourceType'][':resourceId'][':locale'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2TranslationsResourceTypeResourceIdKey() {
  return ['v2', '/v2/translations/:resourceType/:resourceId', 'DELETE'] as const
}

export function useDeleteV2TranslationsResourceTypeResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TranslationsResourceTypeResourceIdKey()
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
            (typeof client.v2.translations)[':resourceType'][':resourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.translations[':resourceType'][':resourceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdKey() {
  return [
    'v2',
    '/v2/inbound-webhooks/delivery-providers/:environmentId/:integrationId',
    'POST',
  ] as const
}

export function usePostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2InboundWebhooksDeliveryProvidersEnvironmentIdIntegrationIdKey()
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
            (typeof client.v2)['inbound-webhooks']['delivery-providers'][':environmentId'][':integrationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['inbound-webhooks']['delivery-providers'][':environmentId'][
            ':integrationId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
