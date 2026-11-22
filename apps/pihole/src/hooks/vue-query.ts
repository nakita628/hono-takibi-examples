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

export function getAuthQueryKey() {
  return ['auth', '/auth'] as const
}

export function getAuthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
          ReturnType<typeof getAuthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthMutationKey() {
  return ['auth', '/auth', 'POST'] as const
}

export function getPostAuthMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.$post>) {
      return parseResponse(client.auth.$post(args, options))
    },
  })
}

export function usePostAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$post>>>>>,
          TError,
          InferRequestType<typeof client.auth.$post>,
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
  const mutationDefaults = getPostAuthMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthMutationKey() {
  return ['auth', '/auth', 'DELETE'] as const
}

export function getDeleteAuthMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.$delete(undefined, options))
    },
  })
}

export function useDeleteAuth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$delete>>>>
            >
          | undefined,
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
  const mutationDefaults = getDeleteAuthMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthSessionIdMutationKey() {
  return ['auth', '/auth/session/:id', 'DELETE'] as const
}

export function getDeleteAuthSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.session)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth.session)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.session)[':id']['$delete']>) {
      return parseResponse(client.auth.session[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAuthSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.auth.session)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.auth.session)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAuthSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getAuthSessionsQueryKey() {
  return ['auth', '/auth/sessions'] as const
}

export function getAuthSessionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthSessionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.sessions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
          >,
          ReturnType<typeof getAuthSessionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthSessionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.sessions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthTotpQueryKey() {
  return ['auth', '/auth/totp'] as const
}

export function getAuthTotpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthTotpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.totp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthTotp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>
          >,
          ReturnType<typeof getAuthTotpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.totp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthTotpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthTotpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.totp.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthAppQueryKey() {
  return ['auth', '/auth/app'] as const
}

export function getAuthAppQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthAppQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.app.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthApp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>
          >,
          ReturnType<typeof getAuthAppQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.app.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthAppQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.app.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsSummaryQueryKey() {
  return ['stats', '/stats/summary'] as const
}

export function getStatsSummaryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsSummaryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.summary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
          >,
          ReturnType<typeof getStatsSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsSummaryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.summary.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDatabaseSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.summary.$get>>,
) {
  return ['stats', '/stats/database/summary', toValue(args)] as const
}

export function getStatsDatabaseSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsDatabaseSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.database.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsDatabaseSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>
            >
          >,
          ReturnType<typeof getStatsDatabaseSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDatabaseSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsDatabaseSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.database.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsUpstreamsQueryKey() {
  return ['stats', '/stats/upstreams'] as const
}

export function getStatsUpstreamsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsUpstreamsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.upstreams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsUpstreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>
            >
          >,
          ReturnType<typeof getStatsUpstreamsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.upstreams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsUpstreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsUpstreamsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.upstreams.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDatabaseUpstreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.upstreams.$get>>,
) {
  return ['stats', '/stats/database/upstreams', toValue(args)] as const
}

export function getStatsDatabaseUpstreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.upstreams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsDatabaseUpstreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.database.upstreams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsDatabaseUpstreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.upstreams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
            >
          >,
          ReturnType<typeof getStatsDatabaseUpstreamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.upstreams.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDatabaseUpstreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsDatabaseUpstreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.database.upstreams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsTopDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.top_domains.$get>>,
) {
  return ['stats', '/stats/top_domains', toValue(args)] as const
}

export function getStatsTopDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.top_domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsTopDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.top_domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsTopDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.top_domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>
            >
          >,
          ReturnType<typeof getStatsTopDomainsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsTopDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsTopDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.top_domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDatabaseTopDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.top_domains.$get>>,
) {
  return ['stats', '/stats/database/top_domains', toValue(args)] as const
}

export function getStatsDatabaseTopDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.top_domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsDatabaseTopDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.database.top_domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsDatabaseTopDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.top_domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>
              >
            >
          >,
          ReturnType<typeof getStatsDatabaseTopDomainsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_domains.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDatabaseTopDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsDatabaseTopDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.database.top_domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsTopClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.top_clients.$get>>,
) {
  return ['stats', '/stats/top_clients', toValue(args)] as const
}

export function getStatsTopClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.top_clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsTopClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.top_clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsTopClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.top_clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>
            >
          >,
          ReturnType<typeof getStatsTopClientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top_clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsTopClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsTopClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.top_clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDatabaseTopClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.top_clients.$get>>,
) {
  return ['stats', '/stats/database/top_clients', toValue(args)] as const
}

export function getStatsDatabaseTopClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.top_clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsDatabaseTopClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.database.top_clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsDatabaseTopClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.top_clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>
              >
            >
          >,
          ReturnType<typeof getStatsDatabaseTopClientsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.top_clients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDatabaseTopClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsDatabaseTopClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.database.top_clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsQueryTypesQueryKey() {
  return ['stats', '/stats/query_types'] as const
}

export function getStatsQueryTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsQueryTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.query_types.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsQueryTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>
            >
          >,
          ReturnType<typeof getStatsQueryTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.query_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsQueryTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsQueryTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.query_types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDatabaseQueryTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.query_types.$get>>,
) {
  return ['stats', '/stats/database/query_types', toValue(args)] as const
}

export function getStatsDatabaseQueryTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.query_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsDatabaseQueryTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.database.query_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsDatabaseQueryTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.query_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.database.query_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stats.database.query_types.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.stats.database.query_types.$get>>
              >
            >
          >,
          ReturnType<typeof getStatsDatabaseQueryTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.stats.database.query_types.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatsDatabaseQueryTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsDatabaseQueryTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.database.query_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsRecentBlockedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.recent_blocked.$get>>,
) {
  return ['stats', '/stats/recent_blocked', toValue(args)] as const
}

export function getStatsRecentBlockedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.recent_blocked.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsRecentBlockedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.recent_blocked.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsRecentBlocked<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.recent_blocked.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>
            >
          >,
          ReturnType<typeof getStatsRecentBlockedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.recent_blocked.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsRecentBlockedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsRecentBlockedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.recent_blocked.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHistoryQueryKey() {
  return ['history', '/history'] as const
}

export function getHistoryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHistoryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.history.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
          >,
          ReturnType<typeof getHistoryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHistoryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.history.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHistoryClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.clients.$get>>,
) {
  return ['history', '/history/clients', toValue(args)] as const
}

export function getHistoryClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHistoryClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.history.clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHistoryClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>
            >
          >,
          ReturnType<typeof getHistoryClientsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.clients.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHistoryClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.history.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHistoryDatabaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.database.$get>>,
) {
  return ['history', '/history/database', toValue(args)] as const
}

export function getHistoryDatabaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.database.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHistoryDatabaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.history.database.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHistoryDatabase<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.database.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>
            >
          >,
          ReturnType<typeof getHistoryDatabaseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.database.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryDatabaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHistoryDatabaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.history.database.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHistoryDatabaseClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.database.clients.$get>>,
) {
  return ['history', '/history/database/clients', toValue(args)] as const
}

export function getHistoryDatabaseClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.database.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHistoryDatabaseClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.history.database.clients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHistoryDatabaseClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.database.clients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
            >
          >,
          ReturnType<typeof getHistoryDatabaseClientsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.history.database.clients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHistoryDatabaseClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHistoryDatabaseClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.history.database.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.queries.$get>>,
) {
  return ['queries', '/queries', toValue(args)] as const
}

export function getQueriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.queries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.queries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
          >,
          ReturnType<typeof getQueriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesSuggestionsQueryKey() {
  return ['queries', '/queries/suggestions'] as const
}

export function getQueriesSuggestionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueriesSuggestionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries.suggestions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>
            >
          >,
          ReturnType<typeof getQueriesSuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueriesSuggestionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.queries.suggestions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsBlockingQueryKey() {
  return ['dns', '/dns/blocking'] as const
}

export function getDnsBlockingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDnsBlockingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.blocking.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsBlocking<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>
          >,
          ReturnType<typeof getDnsBlockingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDnsBlockingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDnsBlockingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.blocking.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsBlockingMutationKey() {
  return ['dns', '/dns/blocking', 'POST'] as const
}

export function getPostDnsBlockingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dns.blocking.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsBlockingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dns.blocking.$post>) {
      return parseResponse(client.dns.blocking.$post(args, options))
    },
  })
}

export function usePostDnsBlocking<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns.blocking.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.dns.blocking.$post>,
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
  const mutationDefaults = getPostDnsBlockingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutDomainsTypeKindDomainMutationKey() {
  return ['domains', '/domains/:type/:kind/:domain', 'PUT'] as const
}

export function getPutDomainsTypeKindDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDomainsTypeKindDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>,
    ) {
      return parseResponse(client.domains[':type'][':kind'][':domain'].$put(args, options))
    },
  })
}

export function usePutDomainsTypeKindDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$put']>,
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
  const mutationDefaults = getPutDomainsTypeKindDomainMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDomainsTypeKindDomainMutationKey() {
  return ['domains', '/domains/:type/:kind/:domain', 'DELETE'] as const
}

export function getDeleteDomainsTypeKindDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDomainsTypeKindDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>,
    ) {
      return parseResponse(client.domains[':type'][':kind'][':domain'].$delete(args, options))
    },
  })
}

export function useDeleteDomainsTypeKindDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.domains)[':type'][':kind'][':domain']['$delete']>,
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
  const mutationDefaults = getDeleteDomainsTypeKindDomainMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsTypeKindMutationKey() {
  return ['domains', '/domains/:type/:kind', 'POST'] as const
}

export function getPostDomainsTypeKindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':type'][':kind']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.domains)[':type'][':kind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsTypeKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.domains)[':type'][':kind']['$post']>) {
      return parseResponse(client.domains[':type'][':kind'].$post(args, options))
    },
  })
}

export function usePostDomainsTypeKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':type'][':kind']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.domains)[':type'][':kind']['$post']>,
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
  const mutationDefaults = getPostDomainsTypeKindMutationOptions<TError, TOnMutateResult>(
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

export function getPostDomainsBatchDeleteMutationKey() {
  return ['domains:batchDelete', '/domains:batchDelete', 'POST'] as const
}

export function getPostDomainsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['domains:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['domains:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDomainsBatchDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['domains:batchDelete']['$post']>) {
      return parseResponse(client['domains:batchDelete'].$post(args, options))
    },
  })
}

export function usePostDomainsBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['domains:batchDelete']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['domains:batchDelete']['$post']>,
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
  const mutationDefaults = getPostDomainsBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':name']['$get']>>,
) {
  return ['groups', '/groups/:name', toValue(args)] as const
}

export function getGroupsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutGroupsNameMutationKey() {
  return ['groups', '/groups/:name', 'PUT'] as const
}

export function getPutGroupsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.groups)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':name']['$put']>) {
      return parseResponse(client.groups[':name'].$put(args, options))
    },
  })
}

export function usePutGroupsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':name']['$put']>,
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
  const mutationDefaults = getPutGroupsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGroupsNameMutationKey() {
  return ['groups', '/groups/:name', 'DELETE'] as const
}

export function getDeleteGroupsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.groups)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':name']['$delete']>) {
      return parseResponse(client.groups[':name'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.groups)[':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.groups)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteGroupsNameMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsQueryKey() {
  return ['groups', '/groups'] as const
}

export function getGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
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
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGroupsBatchDeleteMutationKey() {
  return ['groups:batchDelete', '/groups:batchDelete', 'POST'] as const
}

export function getPostGroupsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['groups:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['groups:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsBatchDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['groups:batchDelete']['$post']>) {
      return parseResponse(client['groups:batchDelete'].$post(args, options))
    },
  })
}

export function usePostGroupsBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['groups:batchDelete']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['groups:batchDelete']['$post']>,
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
  const mutationDefaults = getPostGroupsBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getClientsClientQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':client']['$get']>>,
) {
  return ['clients', '/clients/:client', toValue(args)] as const
}

export function getClientsClientQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':client']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsClientQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients[':client'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsClient<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':client']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
            >
          >,
          ReturnType<typeof getClientsClientQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsClientQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients[':client'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutClientsClientMutationKey() {
  return ['clients', '/clients/:client', 'PUT'] as const
}

export function getPutClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':client']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientsClientMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':client']['$put']>) {
      return parseResponse(client.clients[':client'].$put(args, options))
    },
  })
}

export function usePutClientsClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.clients)[':client']['$put']>,
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
  const mutationDefaults = getPutClientsClientMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteClientsClientMutationKey() {
  return ['clients', '/clients/:client', 'DELETE'] as const
}

export function getDeleteClientsClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':client']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.clients)[':client']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClientsClientMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':client']['$delete']>) {
      return parseResponse(client.clients[':client'].$delete(args, options))
    },
  })
}

export function useDeleteClientsClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.clients)[':client']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.clients)[':client']['$delete']>,
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
  const mutationDefaults = getDeleteClientsClientMutationOptions<TError, TOnMutateResult>(
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

export function getClientsQueryKey() {
  return ['clients', '/clients'] as const
}

export function getClientsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getClientsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
          >,
          ReturnType<typeof getClientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getClientsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.clients.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostClientsMutationKey() {
  return ['clients', '/clients', 'POST'] as const
}

export function getPostClientsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$post>>>>>,
    TError,
    InferRequestType<typeof client.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clients.$post>) {
      return parseResponse(client.clients.$post(args, options))
    },
  })
}

export function usePostClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clients.$post>,
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
  const mutationDefaults = getPostClientsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostClientsBatchDeleteMutationKey() {
  return ['clients:batchDelete', '/clients:batchDelete', 'POST'] as const
}

export function getPostClientsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['clients:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['clients:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClientsBatchDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['clients:batchDelete']['$post']>) {
      return parseResponse(client['clients:batchDelete'].$post(args, options))
    },
  })
}

export function usePostClientsBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['clients:batchDelete']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['clients:batchDelete']['$post']>,
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
  const mutationDefaults = getPostClientsBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getClientsSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients._suggestions.$get>>,
) {
  return ['clients', '/clients/_suggestions', toValue(args)] as const
}

export function getClientsSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients._suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients._suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsSuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients._suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>
            >
          >,
          ReturnType<typeof getClientsSuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients._suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientsSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients._suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':list']['$get']>>,
) {
  return ['lists', '/lists/:list', toValue(args)] as const
}

export function getListsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>
            >
          >,
          ReturnType<typeof getListsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutListsListMutationKey() {
  return ['lists', '/lists/:list', 'PUT'] as const
}

export function getPutListsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':list']['$put']>) {
      return parseResponse(client.lists[':list'].$put(args, options))
    },
  })
}

export function usePutListsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':list']['$put']>,
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
  const mutationDefaults = getPutListsListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteListsListMutationKey() {
  return ['lists', '/lists/:list', 'DELETE'] as const
}

export function getDeleteListsListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.lists)[':list']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListsListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':list']['$delete']>) {
      return parseResponse(client.lists[':list'].$delete(args, options))
    },
  })
}

export function useDeleteListsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.lists)[':list']['$delete']>,
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
  const mutationDefaults = getDeleteListsListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.$get>>,
) {
  return ['lists', '/lists', toValue(args)] as const
}

export function getListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          ReturnType<typeof getListsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostListsMutationKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function getPostListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    InferRequestType<typeof client.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lists.$post>) {
      return parseResponse(client.lists.$post(args, options))
    },
  })
}

export function usePostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
          TError,
          InferRequestType<typeof client.lists.$post>,
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
  const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListsBatchDeleteMutationKey() {
  return ['lists:batchDelete', '/lists:batchDelete', 'POST'] as const
}

export function getPostListsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['lists:batchDelete']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['lists:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsBatchDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['lists:batchDelete']['$post']>) {
      return parseResponse(client['lists:batchDelete'].$post(args, options))
    },
  })
}

export function usePostListsBatchDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['lists:batchDelete']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['lists:batchDelete']['$post']>,
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
  const mutationDefaults = getPostListsBatchDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getInfoClientQueryKey() {
  return ['info', '/info/client'] as const
}

export function getInfoClientQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoClientQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.client.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoClient<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>
          >,
          ReturnType<typeof getInfoClientQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.client.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoClientQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoClientQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.client.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoSystemQueryKey() {
  return ['info', '/info/system'] as const
}

export function getInfoSystemQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoSystemQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.system.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoSystem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>
          >,
          ReturnType<typeof getInfoSystemQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.system.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoSystemQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.system.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoDatabaseQueryKey() {
  return ['info', '/info/database'] as const
}

export function getInfoDatabaseQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoDatabaseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.database.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoDatabase<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
          >,
          ReturnType<typeof getInfoDatabaseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.database.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoDatabaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoDatabaseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.database.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoFtlQueryKey() {
  return ['info', '/info/ftl'] as const
}

export function getInfoFtlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoFtlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.ftl.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoFtl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>
          >,
          ReturnType<typeof getInfoFtlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.ftl.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoFtlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoFtlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.ftl.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoHostQueryKey() {
  return ['info', '/info/host'] as const
}

export function getInfoHostQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoHostQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.host.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoHost<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>
          >,
          ReturnType<typeof getInfoHostQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.host.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoHostQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoHostQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.host.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoSensorsQueryKey() {
  return ['info', '/info/sensors'] as const
}

export function getInfoSensorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoSensorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.sensors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoSensors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>
          >,
          ReturnType<typeof getInfoSensorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.sensors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoSensorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoSensorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.sensors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoVersionQueryKey() {
  return ['info', '/info/version'] as const
}

export function getInfoVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>
          >,
          ReturnType<typeof getInfoVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoMessagesQueryKey() {
  return ['info', '/info/messages'] as const
}

export function getInfoMessagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoMessagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.messages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
          >,
          ReturnType<typeof getInfoMessagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoMessagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.messages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteInfoMessagesMessageIdMutationKey() {
  return ['info', '/info/messages/:message_id', 'DELETE'] as const
}

export function getDeleteInfoMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.info.messages)[':message_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.info.messages)[':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInfoMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.info.messages)[':message_id']['$delete']>,
    ) {
      return parseResponse(client.info.messages[':message_id'].$delete(args, options))
    },
  })
}

export function useDeleteInfoMessagesMessageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.info.messages)[':message_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.info.messages)[':message_id']['$delete']>,
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
  const mutationDefaults = getDeleteInfoMessagesMessageIdMutationOptions<TError, TOnMutateResult>(
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

export function getInfoMessagesCountQueryKey() {
  return ['info', '/info/messages/count'] as const
}

export function getInfoMessagesCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoMessagesCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.messages.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInfoMessagesCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>
            >
          >,
          ReturnType<typeof getInfoMessagesCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.messages.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoMessagesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoMessagesCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.messages.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoMetricsQueryKey() {
  return ['info', '/info/metrics'] as const
}

export function getInfoMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>
          >,
          ReturnType<typeof getInfoMetricsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoLoginQueryKey() {
  return ['info', '/info/login'] as const
}

export function getInfoLoginQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoLoginQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.login.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfoLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>
          >,
          ReturnType<typeof getInfoLoginQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoLoginQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.login.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsDnsmasqQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.dnsmasq.$get>>,
) {
  return ['logs', '/logs/dnsmasq', toValue(args)] as const
}

export function getLogsDnsmasqQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.dnsmasq.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsDnsmasqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.dnsmasq.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogsDnsmasq<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.dnsmasq.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>
          >,
          ReturnType<typeof getLogsDnsmasqQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.dnsmasq.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsDnsmasqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsDnsmasqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.dnsmasq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsFtlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.ftl.$get>>,
) {
  return ['logs', '/logs/ftl', toValue(args)] as const
}

export function getLogsFtlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.ftl.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsFtlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.ftl.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogsFtl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.ftl.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>
          >,
          ReturnType<typeof getLogsFtlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.ftl.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsFtlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsFtlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.ftl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsWebserverQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.webserver.$get>>,
) {
  return ['logs', '/logs/webserver', toValue(args)] as const
}

export function getLogsWebserverQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.webserver.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsWebserverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.webserver.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsWebserver<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.webserver.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
          >,
          ReturnType<typeof getLogsWebserverQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.webserver.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsWebserverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsWebserverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.webserver.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEndpointsQueryKey() {
  return ['endpoints', '/endpoints'] as const
}

export function getEndpointsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEndpointsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.endpoints.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>
          >,
          ReturnType<typeof getEndpointsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.endpoints.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEndpointsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.endpoints.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
) {
  return ['config', '/config', toValue(args)] as const
}

export function getConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchConfigMutationKey() {
  return ['config', '/config', 'PATCH'] as const
}

export function getPatchConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$patch>>>>>,
    TError,
    InferRequestType<typeof client.config.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.$patch>) {
      return parseResponse(client.config.$patch(args, options))
    },
  })
}

export function usePatchConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.config.$patch>,
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
  const mutationDefaults = getPatchConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfigPropertiesQueryKey() {
  return ['config', '/config/_properties'] as const
}

export function getConfigPropertiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigPropertiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config._properties.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigProperties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>
            >
          >,
          ReturnType<typeof getConfigPropertiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config._properties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigPropertiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config._properties.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigElementQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.config)[':element']['$get']>>,
) {
  return ['config', '/config/:element', toValue(args)] as const
}

export function getConfigElementQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.config)[':element']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigElementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config[':element'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigElement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.config)[':element']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
            >
          >,
          ReturnType<typeof getConfigElementQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.config)[':element']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigElementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigElementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config[':element'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConfigElementValueMutationKey() {
  return ['config', '/config/:element/:value', 'PUT'] as const
}

export function getPutConfigElementValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.config)[':element'][':value']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.config)[':element'][':value']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigElementValueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.config)[':element'][':value']['$put']>) {
      return parseResponse(client.config[':element'][':value'].$put(args, options))
    },
  })
}

export function usePutConfigElementValue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.config)[':element'][':value']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.config)[':element'][':value']['$put']>,
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
  const mutationDefaults = getPutConfigElementValueMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConfigElementValueMutationKey() {
  return ['config', '/config/:element/:value', 'DELETE'] as const
}

export function getDeleteConfigElementValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.config)[':element'][':value']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.config)[':element'][':value']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConfigElementValueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.config)[':element'][':value']['$delete']>,
    ) {
      return parseResponse(client.config[':element'][':value'].$delete(args, options))
    },
  })
}

export function useDeleteConfigElementValue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.config)[':element'][':value']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.config)[':element'][':value']['$delete']>,
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
  const mutationDefaults = getDeleteConfigElementValueMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.devices.$get>>,
) {
  return ['network', '/network/devices', toValue(args)] as const
}

export function getNetworkDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network.devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>
            >
          >,
          ReturnType<typeof getNetworkDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.network.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteNetworkDevicesDeviceIdMutationKey() {
  return ['network', '/network/devices/:device_id', 'DELETE'] as const
}

export function getDeleteNetworkDevicesDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.network.devices)[':device_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.network.devices)[':device_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkDevicesDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.network.devices)[':device_id']['$delete']>,
    ) {
      return parseResponse(client.network.devices[':device_id'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkDevicesDeviceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.network.devices)[':device_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.network.devices)[':device_id']['$delete']>,
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
  const mutationDefaults = getDeleteNetworkDevicesDeviceIdMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkGatewayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.gateway.$get>>,
) {
  return ['network', '/network/gateway', toValue(args)] as const
}

export function getNetworkGatewayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.gateway.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkGatewayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network.gateway.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkGateway<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.gateway.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>
            >
          >,
          ReturnType<typeof getNetworkGatewayQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.gateway.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkGatewayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkGatewayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.network.gateway.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkRoutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.routes.$get>>,
) {
  return ['network', '/network/routes', toValue(args)] as const
}

export function getNetworkRoutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.routes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkRoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network.routes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkRoutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.routes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
          >,
          ReturnType<typeof getNetworkRoutesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.routes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkRoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.network.routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkInterfacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.interfaces.$get>>,
) {
  return ['network', '/network/interfaces', toValue(args)] as const
}

export function getNetworkInterfacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.interfaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkInterfacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network.interfaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkInterfaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.network.interfaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>
            >
          >,
          ReturnType<typeof getNetworkInterfacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.network.interfaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkInterfacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkInterfacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.network.interfaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeleporterQueryKey() {
  return ['teleporter', '/teleporter'] as const
}

export function getTeleporterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeleporterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teleporter.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeleporter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>
          >,
          ReturnType<typeof getTeleporterQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeleporterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeleporterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.teleporter.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeleporterMutationKey() {
  return ['teleporter', '/teleporter', 'POST'] as const
}

export function getPostTeleporterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$post>>>>>,
    TError,
    InferRequestType<typeof client.teleporter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeleporterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teleporter.$post>) {
      return parseResponse(client.teleporter.$post(args, options))
    },
  })
}

export function usePostTeleporter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teleporter.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.teleporter.$post>,
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
  const mutationDefaults = getPostTeleporterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostActionGravityMutationKey() {
  return ['action', '/action/gravity', 'POST'] as const
}

export function getPostActionGravityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.gravity.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.action.gravity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActionGravityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.action.gravity.$post>) {
      return parseResponse(client.action.gravity.$post(args, options))
    },
  })
}

export function usePostActionGravity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.gravity.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.action.gravity.$post>,
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
  const mutationDefaults = getPostActionGravityMutationOptions<TError, TOnMutateResult>(
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

export function getPostActionRestartdnsMutationKey() {
  return ['action', '/action/restartdns', 'POST'] as const
}

export function getPostActionRestartdnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.restartdns.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostActionRestartdnsMutationKey(),
    async mutationFn() {
      return parseResponse(client.action.restartdns.$post(undefined, options))
    },
  })
}

export function usePostActionRestartdns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.restartdns.$post>>>
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
  const mutationDefaults = getPostActionRestartdnsMutationOptions<TError, TOnMutateResult>(
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

export function getPostActionFlushLogsMutationKey() {
  return ['action', '/action/flush/logs', 'POST'] as const
}

export function getPostActionFlushLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.logs.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostActionFlushLogsMutationKey(),
    async mutationFn() {
      return parseResponse(client.action.flush.logs.$post(undefined, options))
    },
  })
}

export function usePostActionFlushLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.logs.$post>>>
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
  const mutationDefaults = getPostActionFlushLogsMutationOptions<TError, TOnMutateResult>(
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

export function getPostActionFlushArpMutationKey() {
  return ['action', '/action/flush/arp', 'POST'] as const
}

export function getPostActionFlushArpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.arp.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostActionFlushArpMutationKey(),
    async mutationFn() {
      return parseResponse(client.action.flush.arp.$post(undefined, options))
    },
  })
}

export function usePostActionFlushArp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.arp.$post>>>
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
  const mutationDefaults = getPostActionFlushArpMutationOptions<TError, TOnMutateResult>(
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

export function getPostActionFlushNetworkMutationKey() {
  return ['action', '/action/flush/network', 'POST'] as const
}

export function getPostActionFlushNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.network.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostActionFlushNetworkMutationKey(),
    async mutationFn() {
      return parseResponse(client.action.flush.network.$post(undefined, options))
    },
  })
}

export function usePostActionFlushNetwork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.action.flush.network.$post>>>
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
  const mutationDefaults = getPostActionFlushNetworkMutationOptions<TError, TOnMutateResult>(
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

export function getDhcpLeasesQueryKey() {
  return ['dhcp', '/dhcp/leases'] as const
}

export function getDhcpLeasesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDhcpLeasesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dhcp.leases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDhcpLeases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>
          >,
          ReturnType<typeof getDhcpLeasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dhcp.leases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDhcpLeasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDhcpLeasesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dhcp.leases.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDhcpLeasesIpMutationKey() {
  return ['dhcp', '/dhcp/leases/:ip', 'DELETE'] as const
}

export function getDeleteDhcpLeasesIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dhcp.leases)[':ip']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dhcp.leases)[':ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDhcpLeasesIpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dhcp.leases)[':ip']['$delete']>) {
      return parseResponse(client.dhcp.leases[':ip'].$delete(args, options))
    },
  })
}

export function useDeleteDhcpLeasesIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dhcp.leases)[':ip']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dhcp.leases)[':ip']['$delete']>,
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
  const mutationDefaults = getDeleteDhcpLeasesIpMutationOptions<TError, TOnMutateResult>(
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

export function getSearchDomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':domain']['$get']>>,
) {
  return ['search', '/search/:domain', toValue(args)] as const
}

export function getSearchDomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':domain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':domain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchDomain<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':domain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>
            >
          >,
          ReturnType<typeof getSearchDomainQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':domain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDocsQueryKey() {
  return ['docs', '/docs'] as const
}

export function getDocsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDocsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.docs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
          ReturnType<typeof getDocsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.docs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDocsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.docs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaddQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.padd.$get>>) {
  return ['padd', '/padd', toValue(args)] as const
}

export function getPaddQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padd.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaddQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.padd.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePadd<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.padd.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
          ReturnType<typeof getPaddQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.padd.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPaddQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaddQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.padd.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
