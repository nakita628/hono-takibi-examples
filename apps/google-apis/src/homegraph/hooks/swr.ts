import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1DevicesQueryKey() {
  return ['v1', '/v1/devices:query', 'POST'] as const
}

export function usePostV1DevicesQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['devices:query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['devices:query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DevicesQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['devices:query']['$post']> },
      ) => parseResponse(client.v1['devices:query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DevicesReportStateAndNotificationKey() {
  return ['v1', '/v1/devices:reportStateAndNotification', 'POST'] as const
}

export function usePostV1DevicesReportStateAndNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DevicesReportStateAndNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['devices:reportStateAndNotification']['$post']>
        },
      ) => parseResponse(client.v1['devices:reportStateAndNotification'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DevicesRequestSyncKey() {
  return ['v1', '/v1/devices:requestSync', 'POST'] as const
}

export function usePostV1DevicesRequestSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['devices:requestSync']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['devices:requestSync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DevicesRequestSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['devices:requestSync']['$post']> },
      ) => parseResponse(client.v1['devices:requestSync'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DevicesSyncKey() {
  return ['v1', '/v1/devices:sync', 'POST'] as const
}

export function usePostV1DevicesSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['devices:sync']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['devices:sync']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DevicesSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['devices:sync']['$post']> },
      ) => parseResponse(client.v1['devices:sync'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AgentUserIdKey() {
  return ['v1', '/v1/:agentUserId', 'DELETE'] as const
}

export function useDeleteV1AgentUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':agentUserId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':agentUserId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AgentUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':agentUserId']['$delete']> },
      ) => parseResponse(client.v1[':agentUserId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
