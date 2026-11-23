import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionKey() {
  return ['action'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getClientsBatchDeleteKey() {
  return ['clients:batchDelete'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDhcpKey() {
  return ['dhcp'] as const
}

export function getDnsKey() {
  return ['dns'] as const
}

export function getDocsKey() {
  return ['docs'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getDomainsBatchDeleteKey() {
  return ['domains:batchDelete'] as const
}

export function getEndpointsKey() {
  return ['endpoints'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getGroupsBatchDeleteKey() {
  return ['groups:batchDelete'] as const
}

export function getHistoryKey() {
  return ['history'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getListsBatchDeleteKey() {
  return ['lists:batchDelete'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getPaddKey() {
  return ['padd'] as const
}

export function getQueriesKey() {
  return ['queries'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getTeleporterKey() {
  return ['teleporter'] as const
}

export function getGetAuthKey() {
  return ['auth', '/auth'] as const
}

export function useGetAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthKey() {
  return ['auth', '/auth', 'POST'] as const
}

export function usePostAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.$post> }) =>
        parseResponse(client.auth.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthKey() {
  return ['auth', '/auth', 'DELETE'] as const
}

export function useDeleteAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$delete>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthSessionIdKey() {
  return ['auth', '/auth/session/:id', 'DELETE'] as const
}

export function useDeleteAuthSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.session)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.auth.session)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.session)[':id']['$delete']> },
      ) => parseResponse(client.auth.session[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthSessionsKey() {
  return ['auth', '/auth/sessions'] as const
}

export function useGetAuthSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthSessionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.sessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthSessions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthSessionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.sessions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthTotpKey() {
  return ['auth', '/auth/totp'] as const
}

export function useGetAuthTotp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthTotpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.totp.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthTotp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthTotpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.totp.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthAppKey() {
  return ['auth', '/auth/app'] as const
}

export function useGetAuthApp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthAppKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.app.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthApp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthAppKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.app.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsSummaryKey() {
  return ['stats', '/stats/summary'] as const
}

export function useGetStatsSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsSummary<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsSummaryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.summary.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDatabaseSummaryKey(
  args: InferRequestType<typeof client.stats.database.summary.$get>,
) {
  return ['stats', '/stats/database/summary', args] as const
}

export function useGetStatsDatabaseSummary<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>
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
        ? getGetStatsDatabaseSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDatabaseSummary<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>
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
        ? getGetStatsDatabaseSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsUpstreamsKey() {
  return ['stats', '/stats/upstreams'] as const
}

export function useGetStatsUpstreams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsUpstreamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.upstreams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsUpstreams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsUpstreamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.upstreams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDatabaseUpstreamsKey(
  args: InferRequestType<typeof client.stats.database.upstreams.$get>,
) {
  return ['stats', '/stats/database/upstreams', args] as const
}

export function useGetStatsDatabaseUpstreams<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.upstreams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
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
        ? getGetStatsDatabaseUpstreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.upstreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDatabaseUpstreams<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.upstreams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
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
        ? getGetStatsDatabaseUpstreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.upstreams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsTopDomainsKey(
  args: InferRequestType<typeof client.stats.top_domains.$get>,
) {
  return ['stats', '/stats/top_domains', args] as const
}

export function useGetStatsTopDomains<TError = unknown>(
  args: InferRequestType<typeof client.stats.top_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>>
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
        ? getGetStatsTopDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.top_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsTopDomains<TError = unknown>(
  args: InferRequestType<typeof client.stats.top_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>>
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
        ? getGetStatsTopDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.top_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDatabaseTopDomainsKey(
  args: InferRequestType<typeof client.stats.database.top_domains.$get>,
) {
  return ['stats', '/stats/database/top_domains', args] as const
}

export function useGetStatsDatabaseTopDomains<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.top_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>>
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
        ? getGetStatsDatabaseTopDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.top_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDatabaseTopDomains<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.top_domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>>
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
        ? getGetStatsDatabaseTopDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.top_domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsTopClientsKey(
  args: InferRequestType<typeof client.stats.top_clients.$get>,
) {
  return ['stats', '/stats/top_clients', args] as const
}

export function useGetStatsTopClients<TError = unknown>(
  args: InferRequestType<typeof client.stats.top_clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>>
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
        ? getGetStatsTopClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.top_clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsTopClients<TError = unknown>(
  args: InferRequestType<typeof client.stats.top_clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>>
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
        ? getGetStatsTopClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.top_clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDatabaseTopClientsKey(
  args: InferRequestType<typeof client.stats.database.top_clients.$get>,
) {
  return ['stats', '/stats/database/top_clients', args] as const
}

export function useGetStatsDatabaseTopClients<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.top_clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>>
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
        ? getGetStatsDatabaseTopClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.top_clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDatabaseTopClients<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.top_clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>>
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
        ? getGetStatsDatabaseTopClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.top_clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsQueryTypesKey() {
  return ['stats', '/stats/query_types'] as const
}

export function useGetStatsQueryTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsQueryTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.query_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsQueryTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsQueryTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.query_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsDatabaseQueryTypesKey(
  args: InferRequestType<typeof client.stats.database.query_types.$get>,
) {
  return ['stats', '/stats/database/query_types', args] as const
}

export function useGetStatsDatabaseQueryTypes<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.query_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.query_types.$get>>>
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
        ? getGetStatsDatabaseQueryTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.query_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.query_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsDatabaseQueryTypes<TError = unknown>(
  args: InferRequestType<typeof client.stats.database.query_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.query_types.$get>>>
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
        ? getGetStatsDatabaseQueryTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.query_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.database.query_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsRecentBlockedKey(
  args: InferRequestType<typeof client.stats.recent_blocked.$get>,
) {
  return ['stats', '/stats/recent_blocked', args] as const
}

export function useGetStatsRecentBlocked<TError = unknown>(
  args: InferRequestType<typeof client.stats.recent_blocked.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>
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
        ? getGetStatsRecentBlockedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.recent_blocked.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsRecentBlocked<TError = unknown>(
  args: InferRequestType<typeof client.stats.recent_blocked.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>
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
        ? getGetStatsRecentBlockedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.recent_blocked.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryKey() {
  return ['history', '/history'] as const
}

export function useGetHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryClientsKey(
  args: InferRequestType<typeof client.history.clients.$get>,
) {
  return ['history', '/history/clients', args] as const
}

export function useGetHistoryClients<TError = unknown>(
  args: InferRequestType<typeof client.history.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryClients<TError = unknown>(
  args: InferRequestType<typeof client.history.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryDatabaseKey(
  args: InferRequestType<typeof client.history.database.$get>,
) {
  return ['history', '/history/database', args] as const
}

export function useGetHistoryDatabase<TError = unknown>(
  args: InferRequestType<typeof client.history.database.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>>
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
        ? getGetHistoryDatabaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.database.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryDatabase<TError = unknown>(
  args: InferRequestType<typeof client.history.database.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>>
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
        ? getGetHistoryDatabaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.database.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHistoryDatabaseClientsKey(
  args: InferRequestType<typeof client.history.database.clients.$get>,
) {
  return ['history', '/history/database/clients', args] as const
}

export function useGetHistoryDatabaseClients<TError = unknown>(
  args: InferRequestType<typeof client.history.database.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
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
        ? getGetHistoryDatabaseClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.database.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHistoryDatabaseClients<TError = unknown>(
  args: InferRequestType<typeof client.history.database.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
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
        ? getGetHistoryDatabaseClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.history.database.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQueriesKey(args: InferRequestType<typeof client.queries.$get>) {
  return ['queries', '/queries', args] as const
}

export function useGetQueries<TError = unknown>(
  args: InferRequestType<typeof client.queries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.queries.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQueries<TError = unknown>(
  args: InferRequestType<typeof client.queries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.queries.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetQueriesSuggestionsKey() {
  return ['queries', '/queries/suggestions'] as const
}

export function useGetQueriesSuggestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesSuggestionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries.suggestions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesSuggestions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesSuggestionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries.suggestions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDnsBlockingKey() {
  return ['dns', '/dns/blocking'] as const
}

export function useGetDnsBlocking<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsBlockingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns.blocking.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsBlocking<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsBlockingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns.blocking.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDnsBlockingKey() {
  return ['dns', '/dns/blocking', 'POST'] as const
}

export function usePostDnsBlocking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dns.blocking.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsBlockingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dns.blocking.$post> }) =>
        parseResponse(client.dns.blocking.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDomainsTypeKindDomainKey() {
  return ['domains', '/domains/:type/:kind/:domain', 'PUT'] as const
}

export function usePutDomainsTypeKindDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsTypeKindDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$put']> },
      ) => parseResponse(client.domains[':type'][':kind'][':domain'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDomainsTypeKindDomainKey() {
  return ['domains', '/domains/:type/:kind/:domain', 'DELETE'] as const
}

export function useDeleteDomainsTypeKindDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDomainsTypeKindDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>
        },
      ) => parseResponse(client.domains[':type'][':kind'][':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsTypeKindKey() {
  return ['domains', '/domains/:type/:kind', 'POST'] as const
}

export function usePostDomainsTypeKind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':type'][':kind']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':type'][':kind']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsTypeKindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':type'][':kind']['$post']> },
      ) => parseResponse(client.domains[':type'][':kind'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDomainsBatchDeleteKey() {
  return ['domains:batchDelete', '/domains:batchDelete', 'POST'] as const
}

export function usePostDomainsBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['domains:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['domains:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDomainsBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['domains:batchDelete']['$post']> },
      ) => parseResponse(client['domains:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsNameKey(
  args: InferRequestType<(typeof client.groups)[':name']['$get']>,
) {
  return ['groups', '/groups/:name', args] as const
}

export function useGetGroupsName<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsName<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupsNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsNameKey() {
  return ['groups', '/groups/:name', 'PUT'] as const
}

export function usePutGroupsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.groups)[':name']['$put']> }) =>
        parseResponse(client.groups[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsNameKey() {
  return ['groups', '/groups/:name', 'DELETE'] as const
}

export function useDeleteGroupsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':name']['$delete']> },
      ) => parseResponse(client.groups[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsKey() {
  return ['groups', '/groups'] as const
}

export function useGetGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$post> }) =>
        parseResponse(client.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsBatchDeleteKey() {
  return ['groups:batchDelete', '/groups:batchDelete', 'POST'] as const
}

export function usePostGroupsBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['groups:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['groups:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups:batchDelete']['$post']> },
      ) => parseResponse(client['groups:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientsClientKey(
  args: InferRequestType<(typeof client.clients)[':client']['$get']>,
) {
  return ['clients', '/clients/:client', args] as const
}

export function useGetClientsClient<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':client']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClientsClientKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':client'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsClient<TError = unknown>(
  args: InferRequestType<(typeof client.clients)[':client']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClientsClientKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients[':client'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutClientsClientKey() {
  return ['clients', '/clients/:client', 'PUT'] as const
}

export function usePutClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':client']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClientsClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':client']['$put']> },
      ) => parseResponse(client.clients[':client'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteClientsClientKey() {
  return ['clients', '/clients/:client', 'DELETE'] as const
}

export function useDeleteClientsClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.clients)[':client']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClientsClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clients)[':client']['$delete']> },
      ) => parseResponse(client.clients[':client'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientsKey() {
  return ['clients', '/clients'] as const
}

export function useGetClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClients<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClientsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClientsKey() {
  return ['clients', '/clients', 'POST'] as const
}

export function usePostClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.clients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clients.$post> }) =>
        parseResponse(client.clients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClientsBatchDeleteKey() {
  return ['clients:batchDelete', '/clients:batchDelete', 'POST'] as const
}

export function usePostClientsBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['clients:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['clients:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClientsBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['clients:batchDelete']['$post']> },
      ) => parseResponse(client['clients:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClientsSuggestionsKey(
  args: InferRequestType<typeof client.clients._suggestions.$get>,
) {
  return ['clients', '/clients/_suggestions', args] as const
}

export function useGetClientsSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.clients._suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>
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
        ? getGetClientsSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients._suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsSuggestions<TError = unknown>(
  args: InferRequestType<typeof client.clients._suggestions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>
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
        ? getGetClientsSuggestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clients._suggestions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsListKey(args: InferRequestType<(typeof client.lists)[':list']['$get']>) {
  return ['lists', '/lists/:list', args] as const
}

export function useGetListsList<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsList<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsListKey() {
  return ['lists', '/lists/:list', 'PUT'] as const
}

export function usePutListsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.lists)[':list']['$put']> }) =>
        parseResponse(client.lists[':list'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteListsListKey() {
  return ['lists', '/lists/:list', 'DELETE'] as const
}

export function useDeleteListsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':list']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteListsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':list']['$delete']> },
      ) => parseResponse(client.lists[':list'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsKey(args: InferRequestType<typeof client.lists.$get>) {
  return ['lists', '/lists', args] as const
}

export function useGetLists<TError = unknown>(
  args: InferRequestType<typeof client.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLists<TError = unknown>(
  args: InferRequestType<typeof client.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostListsKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function usePostLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lists.$post> }) =>
        parseResponse(client.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListsBatchDeleteKey() {
  return ['lists:batchDelete', '/lists:batchDelete', 'POST'] as const
}

export function usePostListsBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['lists:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['lists:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsBatchDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['lists:batchDelete']['$post']> },
      ) => parseResponse(client['lists:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInfoClientKey() {
  return ['info', '/info/client'] as const
}

export function useGetInfoClient<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoClientKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.client.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoClient<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoClientKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.client.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoSystemKey() {
  return ['info', '/info/system'] as const
}

export function useGetInfoSystem<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoSystemKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.system.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoSystem<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoSystemKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.system.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoDatabaseKey() {
  return ['info', '/info/database'] as const
}

export function useGetInfoDatabase<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoDatabaseKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.database.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoDatabase<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoDatabaseKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.database.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoFtlKey() {
  return ['info', '/info/ftl'] as const
}

export function useGetInfoFtl<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoFtlKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.ftl.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoFtl<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoFtlKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.ftl.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoHostKey() {
  return ['info', '/info/host'] as const
}

export function useGetInfoHost<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoHostKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.host.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoHost<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoHostKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.host.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoSensorsKey() {
  return ['info', '/info/sensors'] as const
}

export function useGetInfoSensors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoSensorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.sensors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoSensors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoSensorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.sensors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoVersionKey() {
  return ['info', '/info/version'] as const
}

export function useGetInfoVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoMessagesKey() {
  return ['info', '/info/messages'] as const
}

export function useGetInfoMessages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoMessagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.messages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoMessages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoMessagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.messages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInfoMessagesMessageIdKey() {
  return ['info', '/info/messages/:message_id', 'DELETE'] as const
}

export function useDeleteInfoMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.info.messages)[':message_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.info.messages)[':message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInfoMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.info.messages)[':message_id']['$delete']> },
      ) => parseResponse(client.info.messages[':message_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInfoMessagesCountKey() {
  return ['info', '/info/messages/count'] as const
}

export function useGetInfoMessagesCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoMessagesCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.messages.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoMessagesCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoMessagesCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.messages.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoMetricsKey() {
  return ['info', '/info/metrics'] as const
}

export function useGetInfoMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoLoginKey() {
  return ['info', '/info/login'] as const
}

export function useGetInfoLogin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoLoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoLogin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoLoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsDnsmasqKey(args: InferRequestType<typeof client.logs.dnsmasq.$get>) {
  return ['logs', '/logs/dnsmasq', args] as const
}

export function useGetLogsDnsmasq<TError = unknown>(
  args: InferRequestType<typeof client.logs.dnsmasq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsDnsmasqKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.dnsmasq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsDnsmasq<TError = unknown>(
  args: InferRequestType<typeof client.logs.dnsmasq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsDnsmasqKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.dnsmasq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsFtlKey(args: InferRequestType<typeof client.logs.ftl.$get>) {
  return ['logs', '/logs/ftl', args] as const
}

export function useGetLogsFtl<TError = unknown>(
  args: InferRequestType<typeof client.logs.ftl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsFtlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.ftl.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogsFtl<TError = unknown>(
  args: InferRequestType<typeof client.logs.ftl.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsFtlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.ftl.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLogsWebserverKey(args: InferRequestType<typeof client.logs.webserver.$get>) {
  return ['logs', '/logs/webserver', args] as const
}

export function useGetLogsWebserver<TError = unknown>(
  args: InferRequestType<typeof client.logs.webserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsWebserverKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.webserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsWebserver<TError = unknown>(
  args: InferRequestType<typeof client.logs.webserver.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsWebserverKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs.webserver.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEndpointsKey() {
  return ['endpoints', '/endpoints'] as const
}

export function useGetEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEndpoints<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEndpointsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.endpoints.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigKey(args: InferRequestType<typeof client.config.$get>) {
  return ['config', '/config', args] as const
}

export function useGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPatchConfigKey() {
  return ['config', '/config', 'PATCH'] as const
}

export function usePatchConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.config.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.config.$patch> }) =>
        parseResponse(client.config.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigPropertiesKey() {
  return ['config', '/config/_properties'] as const
}

export function useGetConfigProperties<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigPropertiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config._properties.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigProperties<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigPropertiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config._properties.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigElementKey(
  args: InferRequestType<(typeof client.config)[':element']['$get']>,
) {
  return ['config', '/config/:element', args] as const
}

export function useGetConfigElement<TError = unknown>(
  args: InferRequestType<(typeof client.config)[':element']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConfigElementKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config[':element'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigElement<TError = unknown>(
  args: InferRequestType<(typeof client.config)[':element']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConfigElementKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config[':element'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConfigElementValueKey() {
  return ['config', '/config/:element/:value', 'PUT'] as const
}

export function usePutConfigElementValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':element'][':value']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.config)[':element'][':value']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConfigElementValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.config)[':element'][':value']['$put']> },
      ) => parseResponse(client.config[':element'][':value'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConfigElementValueKey() {
  return ['config', '/config/:element/:value', 'DELETE'] as const
}

export function useDeleteConfigElementValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.config)[':element'][':value']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.config)[':element'][':value']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConfigElementValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.config)[':element'][':value']['$delete']> },
      ) => parseResponse(client.config[':element'][':value'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkDevicesKey(
  args: InferRequestType<typeof client.network.devices.$get>,
) {
  return ['network', '/network/devices', args] as const
}

export function useGetNetworkDevices<TError = unknown>(
  args: InferRequestType<typeof client.network.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkDevices<TError = unknown>(
  args: InferRequestType<typeof client.network.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNetworkDevicesDeviceIdKey() {
  return ['network', '/network/devices/:device_id', 'DELETE'] as const
}

export function useDeleteNetworkDevicesDeviceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.network.devices)[':device_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.network.devices)[':device_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkDevicesDeviceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.network.devices)[':device_id']['$delete']> },
      ) => parseResponse(client.network.devices[':device_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkGatewayKey(
  args: InferRequestType<typeof client.network.gateway.$get>,
) {
  return ['network', '/network/gateway', args] as const
}

export function useGetNetworkGateway<TError = unknown>(
  args: InferRequestType<typeof client.network.gateway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkGatewayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.gateway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkGateway<TError = unknown>(
  args: InferRequestType<typeof client.network.gateway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkGatewayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.gateway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkRoutesKey(args: InferRequestType<typeof client.network.routes.$get>) {
  return ['network', '/network/routes', args] as const
}

export function useGetNetworkRoutes<TError = unknown>(
  args: InferRequestType<typeof client.network.routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkRoutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkRoutes<TError = unknown>(
  args: InferRequestType<typeof client.network.routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworkRoutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkInterfacesKey(
  args: InferRequestType<typeof client.network.interfaces.$get>,
) {
  return ['network', '/network/interfaces', args] as const
}

export function useGetNetworkInterfaces<TError = unknown>(
  args: InferRequestType<typeof client.network.interfaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>>
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
        ? getGetNetworkInterfacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.interfaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkInterfaces<TError = unknown>(
  args: InferRequestType<typeof client.network.interfaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>>
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
        ? getGetNetworkInterfacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network.interfaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeleporterKey() {
  return ['teleporter', '/teleporter'] as const
}

export function useGetTeleporter<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeleporterKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teleporter.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeleporter<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeleporterKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teleporter.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeleporterKey() {
  return ['teleporter', '/teleporter', 'POST'] as const
}

export function usePostTeleporter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teleporter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeleporterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teleporter.$post> }) =>
        parseResponse(client.teleporter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionGravityKey() {
  return ['action', '/action/gravity', 'POST'] as const
}

export function usePostActionGravity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.gravity.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.action.gravity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionGravityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.action.gravity.$post> }) =>
        parseResponse(client.action.gravity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionRestartdnsKey() {
  return ['action', '/action/restartdns', 'POST'] as const
}

export function usePostActionRestartdns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.restartdns.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionRestartdnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.action.restartdns.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionFlushLogsKey() {
  return ['action', '/action/flush/logs', 'POST'] as const
}

export function usePostActionFlushLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.logs.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionFlushLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.action.flush.logs.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionFlushArpKey() {
  return ['action', '/action/flush/arp', 'POST'] as const
}

export function usePostActionFlushArp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.arp.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionFlushArpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.action.flush.arp.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostActionFlushNetworkKey() {
  return ['action', '/action/flush/network', 'POST'] as const
}

export function usePostActionFlushNetwork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.network.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionFlushNetworkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.action.flush.network.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDhcpLeasesKey() {
  return ['dhcp', '/dhcp/leases'] as const
}

export function useGetDhcpLeases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDhcpLeasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dhcp.leases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDhcpLeases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDhcpLeasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dhcp.leases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDhcpLeasesIpKey() {
  return ['dhcp', '/dhcp/leases/:ip', 'DELETE'] as const
}

export function useDeleteDhcpLeasesIp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dhcp.leases)[':ip']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dhcp.leases)[':ip']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDhcpLeasesIpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dhcp.leases)[':ip']['$delete']> },
      ) => parseResponse(client.dhcp.leases[':ip'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchDomainKey(
  args: InferRequestType<(typeof client.search)[':domain']['$get']>,
) {
  return ['search', '/search/:domain', args] as const
}

export function useGetSearchDomain<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchDomainKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchDomain<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchDomainKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDocsKey() {
  return ['docs', '/docs'] as const
}

export function useGetDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaddKey(args: InferRequestType<typeof client.padd.$get>) {
  return ['padd', '/padd', args] as const
}

export function useGetPadd<TError = unknown>(
  args: InferRequestType<typeof client.padd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaddKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.padd.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPadd<TError = unknown>(
  args: InferRequestType<typeof client.padd.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaddKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.padd.$get(args, clientOptions)), restSwrOptions),
  }
}
