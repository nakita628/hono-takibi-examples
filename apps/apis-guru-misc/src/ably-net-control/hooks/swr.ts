import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getGetAccountsAccountIdAppsKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/apps', args] as const
}

export function useGetAccountsAccountIdApps<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
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
        ? getGetAccountsAccountIdAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdApps<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
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
        ? getGetAccountsAccountIdAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdAppsKey() {
  return ['accounts', '/accounts/:account_id/apps', 'POST'] as const
}

export function usePostAccountsAccountIdApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['apps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['apps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['apps']['$post']> },
      ) => parseResponse(client.accounts[':account_id'].apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdKeysKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
) {
  return ['apps', '/apps/:app_id/keys', args] as const
}

export function useGetAppsAppIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdKeys<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdKeysKey() {
  return ['apps', '/apps/:app_id/keys', 'POST'] as const
}

export function usePostAppsAppIdKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['keys']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':app_id']['keys']['$post']> },
      ) => parseResponse(client.apps[':app_id'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppsAppIdKeysKeyIdKey() {
  return ['apps', '/apps/:app_id/keys/:key_id', 'PATCH'] as const
}

export function usePatchAppsAppIdKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppsAppIdKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['$patch']> },
      ) => parseResponse(client.apps[':app_id'].keys[':key_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsAppIdKeysKeyIdRevokeKey() {
  return ['apps', '/apps/:app_id/keys/:key_id/revoke', 'POST'] as const
}

export function usePostAppsAppIdKeysKeyIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdKeysKeyIdRevokeKey()
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
            (typeof client.apps)[':app_id']['keys'][':key_id']['revoke']['$post']
          >
        },
      ) => parseResponse(client.apps[':app_id'].keys[':key_id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdNamespacesKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
) {
  return ['apps', '/apps/:app_id/namespaces', args] as const
}

export function useGetAppsAppIdNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
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
        ? getGetAppsAppIdNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
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
        ? getGetAppsAppIdNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdNamespacesKey() {
  return ['apps', '/apps/:app_id/namespaces', 'POST'] as const
}

export function usePostAppsAppIdNamespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['namespaces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdNamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':app_id']['namespaces']['$post']> },
      ) => parseResponse(client.apps[':app_id'].namespaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdNamespacesNamespaceIdKey() {
  return ['apps', '/apps/:app_id/namespaces/:namespace_id', 'DELETE'] as const
}

export function useDeleteAppsAppIdNamespacesNamespaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdNamespacesNamespaceIdKey()
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
            (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_id'].namespaces[':namespace_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAppsAppIdNamespacesNamespaceIdKey() {
  return ['apps', '/apps/:app_id/namespaces/:namespace_id', 'PATCH'] as const
}

export function usePatchAppsAppIdNamespacesNamespaceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppsAppIdNamespacesNamespaceIdKey()
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
            (typeof client.apps)[':app_id']['namespaces'][':namespace_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apps[':app_id'].namespaces[':namespace_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdQueuesKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
) {
  return ['apps', '/apps/:app_id/queues', args] as const
}

export function useGetAppsAppIdQueues<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>
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
        ? getGetAppsAppIdQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdQueues<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>
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
        ? getGetAppsAppIdQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdQueuesKey() {
  return ['apps', '/apps/:app_id/queues', 'POST'] as const
}

export function usePostAppsAppIdQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['queues']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['queues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':app_id']['queues']['$post']> },
      ) => parseResponse(client.apps[':app_id'].queues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsAppIdQueuesQueueIdKey() {
  return ['apps', '/apps/:app_id/queues/:queue_id', 'DELETE'] as const
}

export function useDeleteAppsAppIdQueuesQueueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdQueuesQueueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':app_id']['queues'][':queue_id']['$delete']>
        },
      ) => parseResponse(client.apps[':app_id'].queues[':queue_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdRulesKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
) {
  return ['apps', '/apps/:app_id/rules', args] as const
}

export function useGetAppsAppIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetAppsAppIdRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppsAppIdRulesKey() {
  return ['apps', '/apps/:app_id/rules', 'POST'] as const
}

export function usePostAppsAppIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':app_id']['rules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsAppIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':app_id']['rules']['$post']> },
      ) => parseResponse(client.apps[':app_id'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppsAppIdRulesRuleIdKey(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
) {
  return ['apps', '/apps/:app_id/rules/:rule_id', args] as const
}

export function useGetAppsAppIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
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
        ? getGetAppsAppIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].rules[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsAppIdRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
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
        ? getGetAppsAppIdRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':app_id'].rules[':rule_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAppsAppIdRulesRuleIdKey() {
  return ['apps', '/apps/:app_id/rules/:rule_id', 'DELETE'] as const
}

export function useDeleteAppsAppIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsAppIdRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$delete']>
        },
      ) => parseResponse(client.apps[':app_id'].rules[':rule_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppsAppIdRulesRuleIdKey() {
  return ['apps', '/apps/:app_id/rules/:rule_id', 'PATCH'] as const
}

export function usePatchAppsAppIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppsAppIdRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apps)[':app_id']['rules'][':rule_id']['$patch']>
        },
      ) => parseResponse(client.apps[':app_id'].rules[':rule_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppsIdKey() {
  return ['apps', '/apps/:id', 'DELETE'] as const
}

export function useDeleteAppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.apps)[':id']['$delete']> }) =>
        parseResponse(client.apps[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppsIdKey() {
  return ['apps', '/apps/:id', 'PATCH'] as const
}

export function usePatchAppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.apps)[':id']['$patch']> }) =>
        parseResponse(client.apps[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppsIdPkcs12Key() {
  return ['apps', '/apps/:id/pkcs12', 'POST'] as const
}

export function usePostAppsIdPkcs12<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':id']['pkcs12']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apps)[':id']['pkcs12']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppsIdPkcs12Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.apps)[':id']['pkcs12']['$post']> },
      ) => parseResponse(client.apps[':id'].pkcs12.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}
