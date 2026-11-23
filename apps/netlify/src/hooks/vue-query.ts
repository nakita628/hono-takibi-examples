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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAgentRunnersKey() {
  return ['agent_runners'] as const
}

export function getAiGatewayKey() {
  return ['ai-gateway'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getBillingKey() {
  return ['billing'] as const
}

export function getBuildsKey() {
  return ['builds'] as const
}

export function getDeployKeysKey() {
  return ['deploy_keys'] as const
}

export function getDeploysKey() {
  return ['deploys'] as const
}

export function getDnsZonesKey() {
  return ['dns_zones'] as const
}

export function getFormsKey() {
  return ['forms'] as const
}

export function getHooksKey() {
  return ['hooks'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPurgeKey() {
  return ['purge'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getSubmissionsKey() {
  return ['submissions'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getAccountIdKey() {
  return ['{account_id}'] as const
}

export function getAccountSlugKey() {
  return ['{account_slug}'] as const
}

export function getSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
) {
  return ['sites', '/sites', toValue(args)] as const
}

export function getSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
          ReturnType<typeof getSitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesMutationKey() {
  return ['sites', '/sites', 'POST'] as const
}

export function getPostSitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
    TError,
    InferRequestType<typeof client.sites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sites.$post>) {
      return parseResponse(client.sites.$post(args, options))
    },
  })
}

export function usePostSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
          TError,
          InferRequestType<typeof client.sites.$post>,
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
  const mutationDefaults = getPostSitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSitesSiteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['$get']>>,
) {
  return ['sites', '/sites/:site_id', toValue(args)] as const
}

export function getSitesSiteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
            >
          >,
          ReturnType<typeof getSitesSiteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSitesSiteIdMutationKey() {
  return ['sites', '/sites/:site_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['$delete']>) {
      return parseResponse(client.sites[':site_id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':site_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSitesSiteIdMutationKey() {
  return ['sites', '/sites/:site_id', 'PATCH'] as const
}

export function getPatchSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['$patch']>) {
      return parseResponse(client.sites[':site_id'].$patch(args, options))
    },
  })
}

export function usePatchSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['$patch']>,
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
  const mutationDefaults = getPatchSitesSiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdSslQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>>,
) {
  return ['sites', '/sites/:site_id/ssl', toValue(args)] as const
}

export function getSitesSiteIdSslQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdSslQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].ssl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdSslQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdSslQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdSslQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].ssl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdSslMutationKey() {
  return ['sites', '/sites/:site_id/ssl', 'POST'] as const
}

export function getPostSitesSiteIdSslMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['ssl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdSslMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$post']>) {
      return parseResponse(client.sites[':site_id'].ssl.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdSsl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['ssl']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdSslMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdSslCertificatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/ssl/certificates', toValue(args)] as const
}

export function getSitesSiteIdSslCertificatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdSslCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].ssl.certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdSslCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdSslCertificatesQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdSslCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdSslCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].ssl.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdEnvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>>,
) {
  return ['accounts', '/accounts/:account_id/env', toValue(args)] as const
}

export function getAccountsAccountIdEnvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdEnvQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAccountIdEnvMutationKey() {
  return ['accounts', '/accounts/:account_id/env', 'POST'] as const
}

export function getPostAccountsAccountIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['env']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$post']>,
    ) {
      return parseResponse(client.accounts[':account_id'].env.$post(args, options))
    },
  })
}

export function usePostAccountsAccountIdEnv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['env']['$post']>,
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
  const mutationDefaults = getPostAccountsAccountIdEnvMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SitesSiteIdEnvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>,
) {
  return ['api', '/api/v1/sites/:site_id/env', toValue(args)] as const
}

export function getApiV1SitesSiteIdEnvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SitesSiteIdEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.sites[':site_id'].env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1SitesSiteIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1SitesSiteIdEnvQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SitesSiteIdEnvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SitesSiteIdEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.sites[':site_id'].env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdEnvKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>
  >,
) {
  return ['accounts', '/accounts/:account_id/env/:key', toValue(args)] as const
}

export function getAccountsAccountIdEnvKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdEnvKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].env[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdEnvKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdEnvKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdEnvKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdEnvKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].env[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountIdEnvKeyMutationKey() {
  return ['accounts', '/accounts/:account_id/env/:key', 'PUT'] as const
}

export function getPutAccountsAccountIdEnvKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdEnvKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>,
    ) {
      return parseResponse(client.accounts[':account_id'].env[':key'].$put(args, options))
    },
  })
}

export function usePutAccountsAccountIdEnvKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>,
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
  const mutationDefaults = getPutAccountsAccountIdEnvKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountsAccountIdEnvKeyMutationKey() {
  return ['accounts', '/accounts/:account_id/env/:key', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdEnvKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdEnvKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>,
    ) {
      return parseResponse(client.accounts[':account_id'].env[':key'].$delete(args, options))
    },
  })
}

export function useDeleteAccountsAccountIdEnvKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>,
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
  const mutationDefaults = getDeleteAccountsAccountIdEnvKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountsAccountIdEnvKeyMutationKey() {
  return ['accounts', '/accounts/:account_id/env/:key', 'PATCH'] as const
}

export function getPatchAccountsAccountIdEnvKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsAccountIdEnvKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>,
    ) {
      return parseResponse(client.accounts[':account_id'].env[':key'].$patch(args, options))
    },
  })
}

export function usePatchAccountsAccountIdEnvKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>,
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
  const mutationDefaults = getPatchAccountsAccountIdEnvKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountsAccountIdEnvKeyValueIdMutationKey() {
  return ['accounts', '/accounts/:account_id/env/:key/value/:id', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdEnvKeyValueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdEnvKeyValueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':account_id'].env[':key'].value[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAccountIdEnvKeyValueId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
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
  const mutationDefaults = getDeleteAccountsAccountIdEnvKeyValueIdMutationOptions<
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

export function getSitesSiteIdFunctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>>,
) {
  return ['sites', '/sites/:site_id/functions', toValue(args)] as const
}

export function getSitesSiteIdFunctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdFunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].functions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdFunctionsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdFunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdFormsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>>,
) {
  return ['sites', '/sites/:site_id/forms', toValue(args)] as const
}

export function getSitesSiteIdFormsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].forms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdFormsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].forms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSitesSiteIdFormsFormIdMutationKey() {
  return ['sites', '/sites/:site_id/forms/:form_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdFormsFormIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdFormsFormIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].forms[':form_id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdFormsFormId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdFormsFormIdMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdSubmissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/submissions', toValue(args)] as const
}

export function getSitesSiteIdSubmissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdSubmissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].submissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdSubmissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdSubmissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdSubmissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].submissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>>,
) {
  return ['sites', '/sites/:site_id/files', toValue(args)] as const
}

export function getSitesSiteIdFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>>,
) {
  return ['sites', '/sites/:site_id/assets', toValue(args)] as const
}

export function getSitesSiteIdAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdAssetsMutationKey() {
  return ['sites', '/sites/:site_id/assets', 'POST'] as const
}

export function getPostSitesSiteIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['assets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdAssetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$post']>) {
      return parseResponse(client.sites[':site_id'].assets.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['assets']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdAssetsAssetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/assets/:asset_id', toValue(args)] as const
}

export function getSitesSiteIdAssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdAssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].assets[':asset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdAssetsAssetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdAssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdAssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].assets[':asset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdAssetsAssetIdMutationKey() {
  return ['sites', '/sites/:site_id/assets/:asset_id', 'PUT'] as const
}

export function getPutSitesSiteIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].assets[':asset_id'].$put(args, options))
    },
  })
}

export function usePutSitesSiteIdAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSitesSiteIdAssetsAssetIdMutationKey() {
  return ['sites', '/sites/:site_id/assets/:asset_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].assets[':asset_id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdAssetsAssetIdMutationOptions<
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

export function getSitesSiteIdAssetsAssetIdPublicSignatureQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
    >
  >,
) {
  return ['sites', '/sites/:site_id/assets/:asset_id/public_signature', toValue(args)] as const
}

export function getSitesSiteIdAssetsAssetIdPublicSignatureQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdAssetsAssetIdPublicSignatureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].assets[':asset_id'].public_signature.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdAssetsAssetIdPublicSignature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
    >
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
                    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
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
                    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdAssetsAssetIdPublicSignatureQueryKey>
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
            ReturnType<
              (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdAssetsAssetIdPublicSignatureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdAssetsAssetIdPublicSignatureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].assets[':asset_id'].public_signature.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdFilesFilePathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/files/:file_path', toValue(args)] as const
}

export function getSitesSiteIdFilesFilePathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdFilesFilePathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].files[':file_path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdFilesFilePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdFilesFilePathQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdFilesFilePathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdFilesFilePathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].files[':file_path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPurgeMutationKey() {
  return ['purge', '/purge', 'POST'] as const
}

export function getPostPurgeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purge.$post>>>>>,
    TError,
    InferRequestType<typeof client.purge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPurgeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.purge.$post>) {
      return parseResponse(client.purge.$post(args, options))
    },
  })
}

export function usePostPurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purge.$post>>>>>,
          TError,
          InferRequestType<typeof client.purge.$post>,
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
  const mutationDefaults = getPostPurgeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSitesSiteIdSnippetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>>,
) {
  return ['sites', '/sites/:site_id/snippets', toValue(args)] as const
}

export function getSitesSiteIdSnippetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdSnippetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].snippets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdSnippets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdSnippetsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdSnippetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdSnippetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].snippets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdSnippetsMutationKey() {
  return ['sites', '/sites/:site_id/snippets', 'POST'] as const
}

export function getPostSitesSiteIdSnippetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['snippets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdSnippetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].snippets.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdSnippets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['snippets']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdSnippetsMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdSnippetsSnippetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/snippets/:snippet_id', toValue(args)] as const
}

export function getSitesSiteIdSnippetsSnippetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdSnippetsSnippetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].snippets[':snippet_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdSnippetsSnippetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdSnippetsSnippetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdSnippetsSnippetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdSnippetsSnippetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].snippets[':snippet_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdSnippetsSnippetIdMutationKey() {
  return ['sites', '/sites/:site_id/snippets/:snippet_id', 'PUT'] as const
}

export function getPutSitesSiteIdSnippetsSnippetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdSnippetsSnippetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$put(args, options))
    },
  })
}

export function usePutSitesSiteIdSnippetsSnippetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdSnippetsSnippetIdMutationOptions<
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

export function getDeleteSitesSiteIdSnippetsSnippetIdMutationKey() {
  return ['sites', '/sites/:site_id/snippets/:snippet_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdSnippetsSnippetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdSnippetsSnippetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']
      >,
    ) {
      return parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdSnippetsSnippetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdSnippetsSnippetIdMutationOptions<
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

export function getSitesSiteIdMetadataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>>,
) {
  return ['sites', '/sites/:site_id/metadata', toValue(args)] as const
}

export function getSitesSiteIdMetadataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdMetadataMutationKey() {
  return ['sites', '/sites/:site_id/metadata', 'PUT'] as const
}

export function getPutSitesSiteIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['metadata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].metadata.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['metadata']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdBuildHooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/build_hooks', toValue(args)] as const
}

export function getSitesSiteIdBuildHooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdBuildHooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].build_hooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdBuildHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdBuildHooksQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdBuildHooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdBuildHooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].build_hooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdBuildHooksMutationKey() {
  return ['sites', '/sites/:site_id/build_hooks', 'POST'] as const
}

export function getPostSitesSiteIdBuildHooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdBuildHooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].build_hooks.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdBuildHooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdBuildHooksMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdBuildHooksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/build_hooks/:id', toValue(args)] as const
}

export function getSitesSiteIdBuildHooksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdBuildHooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].build_hooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdBuildHooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdBuildHooksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdBuildHooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdBuildHooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].build_hooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdBuildHooksIdMutationKey() {
  return ['sites', '/sites/:site_id/build_hooks/:id', 'PUT'] as const
}

export function getPutSitesSiteIdBuildHooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdBuildHooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].build_hooks[':id'].$put(args, options))
    },
  })
}

export function usePutSitesSiteIdBuildHooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdBuildHooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSitesSiteIdBuildHooksIdMutationKey() {
  return ['sites', '/sites/:site_id/build_hooks/:id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdBuildHooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdBuildHooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].build_hooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdBuildHooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdBuildHooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDeploysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>>,
) {
  return ['sites', '/sites/:site_id/deploys', toValue(args)] as const
}

export function getSitesSiteIdDeploysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDeploysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].deploys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDeploys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDeploysQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDeploysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDeploysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].deploys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdDeploysMutationKey() {
  return ['sites', '/sites/:site_id/deploys', 'POST'] as const
}

export function getPostSitesSiteIdDeploysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['deploys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDeploysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].deploys.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDeploys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['deploys']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdDeploysMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDeploysDeployIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/deploys/:deploy_id', toValue(args)] as const
}

export function getSitesSiteIdDeploysDeployIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDeploysDeployIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].deploys[':deploy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDeploysDeployId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDeploysDeployIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDeploysDeployIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDeploysDeployIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].deploys[':deploy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdDeploysDeployIdMutationKey() {
  return ['sites', '/sites/:site_id/deploys/:deploy_id', 'PUT'] as const
}

export function getPutSitesSiteIdDeploysDeployIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdDeploysDeployIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$put(args, options))
    },
  })
}

export function usePutSitesSiteIdDeploysDeployId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdDeploysDeployIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSitesSiteIdDeploysDeployIdMutationKey() {
  return ['sites', '/sites/:site_id/deploys/:deploy_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDeploysDeployIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDeploysDeployIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdDeploysDeployId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdDeploysDeployIdMutationOptions<
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

export function getPostDeploysDeployIdCancelMutationKey() {
  return ['deploys', '/deploys/:deploy_id/cancel', 'POST'] as const
}

export function getPostDeploysDeployIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploysDeployIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.deploys[':deploy_id'].cancel.$post(args, options))
    },
  })
}

export function usePostDeploysDeployIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostDeploysDeployIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostSitesSiteIdDeploysDeployIdRestoreMutationKey() {
  return ['sites', '/sites/:site_id/deploys/:deploy_id/restore', 'POST'] as const
}

export function getPostSitesSiteIdDeploysDeployIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDeploysDeployIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].deploys[':deploy_id'].restore.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdDeploysDeployIdRestore<
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
                    (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
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
  const mutationDefaults = getPostSitesSiteIdDeploysDeployIdRestoreMutationOptions<
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

export function getSitesSiteIdBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>>,
) {
  return ['sites', '/sites/:site_id/builds', toValue(args)] as const
}

export function getSitesSiteIdBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdBuildsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdBuildsMutationKey() {
  return ['sites', '/sites/:site_id/builds', 'POST'] as const
}

export function getPostSitesSiteIdBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['builds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdBuildsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$post']>) {
      return parseResponse(client.sites[':site_id'].builds.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdBuilds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['builds']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdBuildsMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDeployedBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/deployed-branches', toValue(args)] as const
}

export function getSitesSiteIdDeployedBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDeployedBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id']['deployed-branches'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDeployedBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDeployedBranchesQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDeployedBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDeployedBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id']['deployed-branches'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdUnlinkRepoMutationKey() {
  return ['sites', '/sites/:site_id/unlink_repo', 'PUT'] as const
}

export function getPutSitesSiteIdUnlinkRepoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdUnlinkRepoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].unlink_repo.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdUnlinkRepo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdUnlinkRepoMutationOptions<TError, TOnMutateResult>(
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

export function getPutSitesSiteIdEnableMutationKey() {
  return ['sites', '/sites/:site_id/enable', 'PUT'] as const
}

export function getPutSitesSiteIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['enable']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['enable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['enable']['$put']>) {
      return parseResponse(client.sites[':site_id'].enable.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':site_id']['enable']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['enable']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPutSitesSiteIdDisableMutationKey() {
  return ['sites', '/sites/:site_id/disable', 'PUT'] as const
}

export function getPutSitesSiteIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['disable']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['disable']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['disable']['$put']>) {
      return parseResponse(client.sites[':site_id'].disable.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':site_id']['disable']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['disable']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getBuildsBuildIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.builds)[':build_id']['$get']>>,
) {
  return ['builds', '/builds/:build_id', toValue(args)] as const
}

export function getBuildsBuildIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.builds)[':build_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBuildsBuildIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.builds[':build_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.builds)[':build_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
            >
          >,
          ReturnType<typeof getBuildsBuildIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildsBuildIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBuildsBuildIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.builds[':build_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBuildsBuildIdLogMutationKey() {
  return ['builds', '/builds/:build_id/log', 'POST'] as const
}

export function getPostBuildsBuildIdLogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builds)[':build_id']['log']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.builds)[':build_id']['log']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuildsBuildIdLogMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.builds)[':build_id']['log']['$post']>) {
      return parseResponse(client.builds[':build_id'].log.$post(args, options))
    },
  })
}

export function usePostBuildsBuildIdLog<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.builds)[':build_id']['log']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.builds)[':build_id']['log']['$post']>,
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
  const mutationDefaults = getPostBuildsBuildIdLogMutationOptions<TError, TOnMutateResult>(
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

export function getPostBuildsBuildIdStartMutationKey() {
  return ['builds', '/builds/:build_id/start', 'POST'] as const
}

export function getPostBuildsBuildIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builds)[':build_id']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.builds)[':build_id']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBuildsBuildIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.builds)[':build_id']['start']['$post']>,
    ) {
      return parseResponse(client.builds[':build_id'].start.$post(args, options))
    },
  })
}

export function usePostBuildsBuildIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.builds)[':build_id']['start']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.builds)[':build_id']['start']['$post']>,
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
  const mutationDefaults = getPostBuildsBuildIdStartMutationOptions<TError, TOnMutateResult>(
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

export function getAccountIdBuildsStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>
  >,
) {
  return [':account_id', '/:account_id/builds/status', toValue(args)] as const
}

export function getAccountIdBuildsStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdBuildsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':account_id'].builds.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountIdBuildsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountIdBuildsStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdBuildsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdBuildsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':account_id'].builds.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdDnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>>,
) {
  return ['sites', '/sites/:site_id/dns', toValue(args)] as const
}

export function getSitesSiteIdDnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].dns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDnsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].dns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdDnsMutationKey() {
  return ['sites', '/sites/:site_id/dns', 'PUT'] as const
}

export function getPutSitesSiteIdDnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['dns']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdDnsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$put']>) {
      return parseResponse(client.sites[':site_id'].dns.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdDns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['dns']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdDnsMutationOptions<TError, TOnMutateResult>(
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

export function getPutSitesSiteIdRollbackMutationKey() {
  return ['sites', '/sites/:site_id/rollback', 'PUT'] as const
}

export function getPutSitesSiteIdRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['rollback']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['rollback']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['rollback']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].rollback.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdRollback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':site_id']['rollback']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['rollback']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdRollbackMutationOptions<TError, TOnMutateResult>(
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

export function getDeploysDeployIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>>,
) {
  return ['deploys', '/deploys/:deploy_id', toValue(args)] as const
}

export function getDeploysDeployIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeploysDeployIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploys[':deploy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploysDeployId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeploysDeployIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploysDeployIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeploysDeployIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploys[':deploy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDeploysDeployIdMutationKey() {
  return ['deploys', '/deploys/:deploy_id', 'DELETE'] as const
}

export function getDeleteDeploysDeployIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeploysDeployIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.deploys)[':deploy_id']['$delete']>) {
      return parseResponse(client.deploys[':deploy_id'].$delete(args, options))
    },
  })
}

export function useDeleteDeploysDeployId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.deploys)[':deploy_id']['$delete']>,
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
  const mutationDefaults = getDeleteDeploysDeployIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeploysDeployIdLockMutationKey() {
  return ['deploys', '/deploys/:deploy_id/lock', 'POST'] as const
}

export function getPostDeploysDeployIdLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['lock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['lock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploysDeployIdLockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deploys)[':deploy_id']['lock']['$post']>,
    ) {
      return parseResponse(client.deploys[':deploy_id'].lock.$post(args, options))
    },
  })
}

export function usePostDeploysDeployIdLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['lock']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.deploys)[':deploy_id']['lock']['$post']>,
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
  const mutationDefaults = getPostDeploysDeployIdLockMutationOptions<TError, TOnMutateResult>(
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

export function getPostDeploysDeployIdUnlockMutationKey() {
  return ['deploys', '/deploys/:deploy_id/unlock', 'POST'] as const
}

export function getPostDeploysDeployIdUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploysDeployIdUnlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>,
    ) {
      return parseResponse(client.deploys[':deploy_id'].unlock.$post(args, options))
    },
  })
}

export function usePostDeploysDeployIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>,
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
  const mutationDefaults = getPostDeploysDeployIdUnlockMutationOptions<TError, TOnMutateResult>(
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

export function getPutDeploysDeployIdFilesPathMutationKey() {
  return ['deploys', '/deploys/:deploy_id/files/:path', 'PUT'] as const
}

export function getPutDeploysDeployIdFilesPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeploysDeployIdFilesPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>,
    ) {
      return parseResponse(client.deploys[':deploy_id'].files[':path'].$put(args, options))
    },
  })
}

export function usePutDeploysDeployIdFilesPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>,
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
  const mutationDefaults = getPutDeploysDeployIdFilesPathMutationOptions<TError, TOnMutateResult>(
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

export function getPutDeploysDeployIdFunctionsNameMutationKey() {
  return ['deploys', '/deploys/:deploy_id/functions/:name', 'PUT'] as const
}

export function getPutDeploysDeployIdFunctionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeploysDeployIdFunctionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>,
    ) {
      return parseResponse(client.deploys[':deploy_id'].functions[':name'].$put(args, options))
    },
  })
}

export function usePutDeploysDeployIdFunctionsName<
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
                  ReturnType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>,
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
  const mutationDefaults = getPutDeploysDeployIdFunctionsNameMutationOptions<
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

export function getPutDeploysDeployIdServerCodeShaMutationKey() {
  return ['deploys', '/deploys/:deploy_id/server/:code_sha', 'PUT'] as const
}

export function getPutDeploysDeployIdServerCodeShaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeploysDeployIdServerCodeShaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>,
    ) {
      return parseResponse(client.deploys[':deploy_id'].server[':code_sha'].$put(args, options))
    },
  })
}

export function usePutDeploysDeployIdServerCodeSha<
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
                  ReturnType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>,
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
  const mutationDefaults = getPutDeploysDeployIdServerCodeShaMutationOptions<
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

export function getPutDeploysDeployIdEdgeFunctionsCodeShaMutationKey() {
  return ['deploys', '/deploys/:deploy_id/edge_functions/:code_sha', 'PUT'] as const
}

export function getPutDeploysDeployIdEdgeFunctionsCodeShaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeploysDeployIdEdgeFunctionsCodeShaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']
      >,
    ) {
      return parseResponse(
        client.deploys[':deploy_id'].edge_functions[':code_sha'].$put(args, options),
      )
    },
  })
}

export function usePutDeploysDeployIdEdgeFunctionsCodeSha<
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
                    (typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']
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
  const mutationDefaults = getPutDeploysDeployIdEdgeFunctionsCodeShaMutationOptions<
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

export function getFormsFormIdSubmissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>
  >,
) {
  return ['forms', '/forms/:form_id/submissions', toValue(args)] as const
}

export function getFormsFormIdSubmissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormsFormIdSubmissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forms[':form_id'].submissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormsFormIdSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormsFormIdSubmissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormsFormIdSubmissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormsFormIdSubmissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forms[':form_id'].submissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hooks.$get>>,
) {
  return ['hooks', '/hooks', toValue(args)] as const
}

export function getHooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
          ReturnType<typeof getHooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostHooksMutationKey() {
  return ['hooks', '/hooks', 'POST'] as const
}

export function getPostHooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.hooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hooks.$post>) {
      return parseResponse(client.hooks.$post(args, options))
    },
  })
}

export function usePostHooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$post>>>>>,
          TError,
          InferRequestType<typeof client.hooks.$post>,
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
  const mutationDefaults = getPostHooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHooksHookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hooks)[':hook_id']['$get']>>,
) {
  return ['hooks', '/hooks/:hook_id', toValue(args)] as const
}

export function getHooksHookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hooks)[':hook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHooksHookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hooks[':hook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHooksHookId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hooks)[':hook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
            >
          >,
          ReturnType<typeof getHooksHookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHooksHookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHooksHookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hooks[':hook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutHooksHookIdMutationKey() {
  return ['hooks', '/hooks/:hook_id', 'PUT'] as const
}

export function getPutHooksHookIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.hooks)[':hook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutHooksHookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hooks)[':hook_id']['$put']>) {
      return parseResponse(client.hooks[':hook_id'].$put(args, options))
    },
  })
}

export function usePutHooksHookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.hooks)[':hook_id']['$put']>,
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
  const mutationDefaults = getPutHooksHookIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteHooksHookIdMutationKey() {
  return ['hooks', '/hooks/:hook_id', 'DELETE'] as const
}

export function getDeleteHooksHookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.hooks)[':hook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHooksHookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hooks)[':hook_id']['$delete']>) {
      return parseResponse(client.hooks[':hook_id'].$delete(args, options))
    },
  })
}

export function useDeleteHooksHookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.hooks)[':hook_id']['$delete']>,
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
  const mutationDefaults = getDeleteHooksHookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostHooksHookIdEnableMutationKey() {
  return ['hooks', '/hooks/:hook_id/enable', 'POST'] as const
}

export function getPostHooksHookIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hooks)[':hook_id']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.hooks)[':hook_id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHooksHookIdEnableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.hooks)[':hook_id']['enable']['$post']>) {
      return parseResponse(client.hooks[':hook_id'].enable.$post(args, options))
    },
  })
}

export function usePostHooksHookIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hooks)[':hook_id']['enable']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.hooks)[':hook_id']['enable']['$post']>,
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
  const mutationDefaults = getPostHooksHookIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getHooksTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hooks.types.$get>>,
) {
  return ['hooks', '/hooks/types', toValue(args)] as const
}

export function getHooksTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hooks.types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHooksTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hooks.types.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHooksTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hooks.types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
          >,
          ReturnType<typeof getHooksTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHooksTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHooksTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hooks.types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthTicketsMutationKey() {
  return ['oauth', '/oauth/tickets', 'POST'] as const
}

export function getPostOauthTicketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.tickets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.tickets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTicketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.tickets.$post>) {
      return parseResponse(client.oauth.tickets.$post(args, options))
    },
  })
}

export function usePostOauthTickets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.tickets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.tickets.$post>,
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
  const mutationDefaults = getPostOauthTicketsMutationOptions<TError, TOnMutateResult>(
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

export function getOauthTicketsTicketIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>,
) {
  return ['oauth', '/oauth/tickets/:ticket_id', toValue(args)] as const
}

export function getOauthTicketsTicketIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthTicketsTicketIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.tickets[':ticket_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOauthTicketsTicketIdQueryKey>
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
          Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOauthTicketsTicketIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthTicketsTicketIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.tickets[':ticket_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthTicketsTicketIdExchangeMutationKey() {
  return ['oauth', '/oauth/tickets/:ticket_id/exchange', 'POST'] as const
}

export function getPostOauthTicketsTicketIdExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTicketsTicketIdExchangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>,
    ) {
      return parseResponse(client.oauth.tickets[':ticket_id'].exchange.$post(args, options))
    },
  })
}

export function usePostOauthTicketsTicketIdExchange<
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
                  ReturnType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>,
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
  const mutationDefaults = getPostOauthTicketsTicketIdExchangeMutationOptions<
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

export function getDeployKeysQueryKey() {
  return ['deploy_keys', '/deploy_keys'] as const
}

export function getDeployKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDeployKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploy_keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeployKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
          >,
          ReturnType<typeof getDeployKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeployKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDeployKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.deploy_keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeployKeysMutationKey() {
  return ['deploy_keys', '/deploy_keys', 'POST'] as const
}

export function getPostDeployKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDeployKeysMutationKey(),
    async mutationFn() {
      return parseResponse(client.deploy_keys.$post(undefined, options))
    },
  })
}

export function usePostDeployKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$post>>>>
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
  const mutationDefaults = getPostDeployKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeployKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>>,
) {
  return ['deploy_keys', '/deploy_keys/:key_id', toValue(args)] as const
}

export function getDeployKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeployKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploy_keys[':key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeployKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeployKeysKeyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeployKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploy_keys[':key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDeployKeysKeyIdMutationKey() {
  return ['deploy_keys', '/deploy_keys/:key_id', 'DELETE'] as const
}

export function getDeleteDeployKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.deploy_keys)[':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeployKeysKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$delete']>) {
      return parseResponse(client.deploy_keys[':key_id'].$delete(args, options))
    },
  })
}

export function useDeleteDeployKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.deploy_keys)[':key_id']['$delete']>,
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
  const mutationDefaults = getDeleteDeployKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountSlugSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':account_slug']['sites']['$get']>>,
) {
  return [':account_slug', '/:account_slug/sites', toValue(args)] as const
}

export function getAccountSlugSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':account_slug']['sites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountSlugSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':account_slug'].sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSlugSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':account_slug']['sites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountSlugSitesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSlugSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountSlugSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':account_slug'].sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountSlugSitesMutationKey() {
  return [':account_slug', '/:account_slug/sites', 'POST'] as const
}

export function getPostAccountSlugSitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':account_slug']['sites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSlugSitesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':account_slug']['sites']['$post']>) {
      return parseResponse(client[':account_slug'].sites.$post(args, options))
    },
  })
}

export function usePostAccountSlugSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':account_slug']['sites']['$post']>,
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
  const mutationDefaults = getPostAccountSlugSitesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountSlugMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':account_slug']['members']['$get']>>,
) {
  return [':account_slug', '/:account_slug/members', toValue(args)] as const
}

export function getAccountSlugMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':account_slug']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountSlugMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':account_slug'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSlugMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':account_slug']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountSlugMembersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSlugMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountSlugMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':account_slug'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountSlugMembersMutationKey() {
  return [':account_slug', '/:account_slug/members', 'POST'] as const
}

export function getPostAccountSlugMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':account_slug']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':account_slug']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSlugMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':account_slug']['members']['$post']>) {
      return parseResponse(client[':account_slug'].members.$post(args, options))
    },
  })
}

export function usePostAccountSlugMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':account_slug']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':account_slug']['members']['$post']>,
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
  const mutationDefaults = getPostAccountSlugMembersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountSlugMembersMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>
  >,
) {
  return [':account_slug', '/:account_slug/members/:member_id', toValue(args)] as const
}

export function getAccountSlugMembersMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountSlugMembersMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':account_slug'].members[':member_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSlugMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>
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
                  ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountSlugMembersMemberIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSlugMembersMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountSlugMembersMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':account_slug'].members[':member_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountSlugMembersMemberIdMutationKey() {
  return [':account_slug', '/:account_slug/members/:member_id', 'PUT'] as const
}

export function getPutAccountSlugMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountSlugMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$put']>,
    ) {
      return parseResponse(client[':account_slug'].members[':member_id'].$put(args, options))
    },
  })
}

export function usePutAccountSlugMembersMemberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$put']>,
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
  const mutationDefaults = getPutAccountSlugMembersMemberIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountSlugMembersMemberIdMutationKey() {
  return [':account_slug', '/:account_slug/members/:member_id', 'DELETE'] as const
}

export function getDeleteAccountSlugMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountSlugMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>,
    ) {
      return parseResponse(client[':account_slug'].members[':member_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountSlugMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountSlugMembersMemberIdMutationOptions<
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

export function getBillingPaymentMethodsQueryKey() {
  return ['billing', '/billing/payment_methods'] as const
}

export function getBillingPaymentMethodsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBillingPaymentMethodsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.payment_methods.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBillingPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
            >
          >,
          ReturnType<typeof getBillingPaymentMethodsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBillingPaymentMethodsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.payment_methods.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsTypesQueryKey() {
  return ['accounts', '/accounts/types'] as const
}

export function getAccountsTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountsTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
          >,
          ReturnType<typeof getAccountsTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountsTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsQueryKey() {
  return ['accounts', '/accounts'] as const
}

export function getAccountsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function usePostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
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
  const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
) {
  return ['accounts', '/accounts/:account_id', toValue(args)] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:account_id', 'PUT'] as const
}

export function getPutAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':account_id']['$put']>) {
      return parseResponse(client.accounts[':account_id'].$put(args, options))
    },
  })
}

export function usePutAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['$put']>,
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
  const mutationDefaults = getPutAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountsAccountIdMutationKey() {
  return ['accounts', '/accounts/:account_id', 'DELETE'] as const
}

export function getDeleteAccountsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':account_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':account_id']['$delete']>) {
      return parseResponse(client.accounts[':account_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.accounts)[':account_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.accounts)[':account_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAccountIdAuditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>
  >,
) {
  return ['accounts', '/accounts/:account_id/audit', toValue(args)] as const
}

export function getAccountsAccountIdAuditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAuditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].audit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAuditQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAuditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAuditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].audit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentRunnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent_runners.$get>>,
) {
  return ['agent_runners', '/agent_runners', toValue(args)] as const
}

export function getAgentRunnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent_runners.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentRunnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent_runners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentRunners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent_runners.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
          >,
          ReturnType<typeof getAgentRunnersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentRunnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent_runners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentRunnersMutationKey() {
  return ['agent_runners', '/agent_runners', 'POST'] as const
}

export function getPostAgentRunnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agent_runners.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunnersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agent_runners.$post>) {
      return parseResponse(client.agent_runners.$post(args, options))
    },
  })
}

export function usePostAgentRunners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.agent_runners.$post>,
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
  const mutationDefaults = getPostAgentRunnersMutationOptions<TError, TOnMutateResult>(
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

export function getPostSitesSiteIdAgentRunnersMutationKey() {
  return ['sites', '/sites/:site_id/agent_runners', 'POST'] as const
}

export function getPostSitesSiteIdAgentRunnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['agent_runners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['agent_runners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdAgentRunnersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['agent_runners']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].agent_runners.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdAgentRunners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['agent_runners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['agent_runners']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdAgentRunnersMutationOptions<TError, TOnMutateResult>(
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

export function getAgentRunnersAgentRunnerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>
  >,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id', toValue(args)] as const
}

export function getAgentRunnersAgentRunnerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentRunnersAgentRunnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentRunnersAgentRunnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentRunnersAgentRunnerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunnersAgentRunnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentRunnersAgentRunnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent_runners[':agent_runner_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAgentRunnersAgentRunnerIdMutationKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id', 'DELETE'] as const
}

export function getDeleteAgentRunnersAgentRunnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentRunnersAgentRunnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>,
    ) {
      return parseResponse(client.agent_runners[':agent_runner_id'].$delete(args, options))
    },
  })
}

export function useDeleteAgentRunnersAgentRunnerId<
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
                Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>,
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
  const mutationDefaults = getDeleteAgentRunnersAgentRunnerIdMutationOptions<
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

export function getPatchAgentRunnersAgentRunnerIdMutationKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id', 'PATCH'] as const
}

export function getPatchAgentRunnersAgentRunnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAgentRunnersAgentRunnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>,
    ) {
      return parseResponse(client.agent_runners[':agent_runner_id'].$patch(args, options))
    },
  })
}

export function usePatchAgentRunnersAgentRunnerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>,
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
  const mutationDefaults = getPatchAgentRunnersAgentRunnerIdMutationOptions<
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

export function getPostAgentRunnersAgentRunnerIdStopMutationKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id/stop', 'POST'] as const
}

export function getPostAgentRunnersAgentRunnerIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunnersAgentRunnerIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>,
    ) {
      return parseResponse(client.agent_runners[':agent_runner_id'].stop.$post(args, options))
    },
  })
}

export function usePostAgentRunnersAgentRunnerIdStop<
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
                  ReturnType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>,
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
  const mutationDefaults = getPostAgentRunnersAgentRunnerIdStopMutationOptions<
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

export function getAgentRunnersAgentRunnerIdDiffQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>
  >,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id/diff', toValue(args)] as const
}

export function getAgentRunnersAgentRunnerIdDiffQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentRunnersAgentRunnerIdDiffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].diff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentRunnersAgentRunnerIdDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>
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
                  ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentRunnersAgentRunnerIdDiffQueryKey>
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
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunnersAgentRunnerIdDiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentRunnersAgentRunnerIdDiffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent_runners[':agent_runner_id'].diff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentRunnersAgentRunnerIdArchiveMutationKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id/archive', 'POST'] as const
}

export function getPostAgentRunnersAgentRunnerIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunnersAgentRunnerIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>,
    ) {
      return parseResponse(client.agent_runners[':agent_runner_id'].archive.$post(args, options))
    },
  })
}

export function usePostAgentRunnersAgentRunnerIdArchive<
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
                  ReturnType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>,
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
  const mutationDefaults = getPostAgentRunnersAgentRunnerIdArchiveMutationOptions<
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

export function getAgentRunnersAgentRunnerIdSessionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
  >,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id/sessions', toValue(args)] as const
}

export function getAgentRunnersAgentRunnerIdSessionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentRunnersAgentRunnerIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentRunnersAgentRunnerIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
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
                  ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentRunnersAgentRunnerIdSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunnersAgentRunnerIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentRunnersAgentRunnerIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent_runners[':agent_runner_id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAgentRunnersAgentRunnerIdSessionsMutationKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id/sessions', 'POST'] as const
}

export function getPostAgentRunnersAgentRunnerIdSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunnersAgentRunnerIdSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']
      >,
    ) {
      return parseResponse(client.agent_runners[':agent_runner_id'].sessions.$post(args, options))
    },
  })
}

export function usePostAgentRunnersAgentRunnerIdSessions<
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
                  ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']>,
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
  const mutationDefaults = getPostAgentRunnersAgentRunnerIdSessionsMutationOptions<
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

export function getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
    >
  >,
) {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id',
    toValue(args),
  ] as const
}

export function getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
    >
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
                    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
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
                    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryKey>
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
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id',
    'DELETE',
  ] as const
}

export function getDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<
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
                    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
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
  const mutationDefaults =
    getDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationOptions<
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

export function getPatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id',
    'PATCH',
  ] as const
}

export function getPatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<
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
                    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
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
  const mutationDefaults =
    getPatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdMutationOptions<
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

export function getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopMutationKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id/stop',
    'POST',
  ] as const
}

export function getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].stop.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStop<
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
                    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
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
  const mutationDefaults =
    getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopMutationOptions<
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

export function getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersMutationKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id/answers',
    'POST',
  ] as const
}

export function getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
      >,
    ) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].answers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswers<
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
                    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
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
  const mutationDefaults =
    getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersMutationOptions<
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

export function getSubmissionsSubmissionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.submissions)[':submission_id']['$get']>>,
) {
  return ['submissions', '/submissions/:submission_id', toValue(args)] as const
}

export function getSubmissionsSubmissionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.submissions)[':submission_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubmissionsSubmissionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.submissions[':submission_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubmissionsSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.submissions)[':submission_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubmissionsSubmissionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubmissionsSubmissionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubmissionsSubmissionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.submissions[':submission_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSubmissionsSubmissionIdMutationKey() {
  return ['submissions', '/submissions/:submission_id', 'DELETE'] as const
}

export function getDeleteSubmissionsSubmissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubmissionsSubmissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
    ) {
      return parseResponse(client.submissions[':submission_id'].$delete(args, options))
    },
  })
}

export function useDeleteSubmissionsSubmissionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
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
  const mutationDefaults = getDeleteSubmissionsSubmissionIdMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdServiceInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/service-instances', toValue(args)] as const
}

export function getSitesSiteIdServiceInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdServiceInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id']['service-instances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdServiceInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdServiceInstancesQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdServiceInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdServiceInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id']['service-instances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdServicesAddonInstancesMutationKey() {
  return ['sites', '/sites/:site_id/services/:addon/instances', 'POST'] as const
}

export function getPostSitesSiteIdServicesAddonInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdServicesAddonInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].services[':addon'].instances.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdServicesAddonInstances<
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
                    (typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']
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
  const mutationDefaults = getPostSitesSiteIdServicesAddonInstancesMutationOptions<
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

export function getSitesSiteIdServicesAddonInstancesInstanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
    >
  >,
) {
  return ['sites', '/sites/:site_id/services/:addon/instances/:instance_id', toValue(args)] as const
}

export function getSitesSiteIdServicesAddonInstancesInstanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdServicesAddonInstancesInstanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].services[':addon'].instances[':instance_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdServicesAddonInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
    >
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
                    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
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
                    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdServicesAddonInstancesInstanceIdQueryKey>
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
            ReturnType<
              (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdServicesAddonInstancesInstanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdServicesAddonInstancesInstanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].services[':addon'].instances[':instance_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdServicesAddonInstancesInstanceIdMutationKey() {
  return ['sites', '/sites/:site_id/services/:addon/instances/:instance_id', 'PUT'] as const
}

export function getPutSitesSiteIdServicesAddonInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdServicesAddonInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].services[':addon'].instances[':instance_id'].$put(args, options),
      )
    },
  })
}

export function usePutSitesSiteIdServicesAddonInstancesInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
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
  const mutationDefaults = getPutSitesSiteIdServicesAddonInstancesInstanceIdMutationOptions<
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

export function getDeleteSitesSiteIdServicesAddonInstancesInstanceIdMutationKey() {
  return ['sites', '/sites/:site_id/services/:addon/instances/:instance_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdServicesAddonInstancesInstanceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdServicesAddonInstancesInstanceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].services[':addon'].instances[':instance_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSitesSiteIdServicesAddonInstancesInstanceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
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
  const mutationDefaults = getDeleteSitesSiteIdServicesAddonInstancesInstanceIdMutationOptions<
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

export function getSitesSiteIdIdentityIdentityIdUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
    >
  >,
) {
  return ['sites', '/sites/:site_id/identity/:identity_id/users/:user_id', toValue(args)] as const
}

export function getSitesSiteIdIdentityIdentityIdUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdIdentityIdentityIdUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].identity[':identity_id'].users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdIdentityIdentityIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
    >
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
                    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
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
                    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdIdentityIdentityIdUsersUserIdQueryKey>
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
            ReturnType<
              (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdIdentityIdentityIdUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdIdentityIdentityIdUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].identity[':identity_id'].users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdIdentityIdentityIdUsersLookupMutationKey() {
  return ['sites', '/sites/:site_id/identity/:identity_id/users/lookup', 'POST'] as const
}

export function getPostSitesSiteIdIdentityIdentityIdUsersLookupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdIdentityIdentityIdUsersLookupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].identity[':identity_id'].users.lookup.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdIdentityIdentityIdUsersLookup<
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
                    (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
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
  const mutationDefaults = getPostSitesSiteIdIdentityIdentityIdUsersLookupMutationOptions<
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

export function getServicesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.index.$get>>,
) {
  return ['services', '/services/', toValue(args)] as const
}

export function getServicesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
          >,
          ReturnType<typeof getServicesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesAddonNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':addonName']['$get']>>,
) {
  return ['services', '/services/:addonName', toValue(args)] as const
}

export function getServicesAddonNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':addonName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesAddonNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':addonName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesAddonName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':addonName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesAddonNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesAddonNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesAddonNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':addonName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesAddonNameManifestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>
  >,
) {
  return ['services', '/services/:addonName/manifest', toValue(args)] as const
}

export function getServicesAddonNameManifestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesAddonNameManifestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':addonName'].manifest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesAddonNameManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServicesAddonNameManifestQueryKey>
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
          Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesAddonNameManifestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesAddonNameManifestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':addonName'].manifest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdTrafficSplitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/traffic_splits', toValue(args)] as const
}

export function getSitesSiteIdTrafficSplitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdTrafficSplitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].traffic_splits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdTrafficSplits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdTrafficSplitsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdTrafficSplitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdTrafficSplitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].traffic_splits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdTrafficSplitsMutationKey() {
  return ['sites', '/sites/:site_id/traffic_splits', 'POST'] as const
}

export function getPostSitesSiteIdTrafficSplitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdTrafficSplitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].traffic_splits.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdTrafficSplits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdTrafficSplitsMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdTrafficSplitsSplitTestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id', toValue(args)] as const
}

export function getSitesSiteIdTrafficSplitsSplitTestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdTrafficSplitsSplitTestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].traffic_splits[':split_test_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdTrafficSplitsSplitTestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']>
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
                    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
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
                    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdTrafficSplitsSplitTestIdQueryKey>
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
            ReturnType<
              (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdTrafficSplitsSplitTestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdTrafficSplitsSplitTestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].traffic_splits[':split_test_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdTrafficSplitsSplitTestIdMutationKey() {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id', 'PUT'] as const
}

export function getPutSitesSiteIdTrafficSplitsSplitTestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdTrafficSplitsSplitTestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].traffic_splits[':split_test_id'].$put(args, options),
      )
    },
  })
}

export function usePutSitesSiteIdTrafficSplitsSplitTestId<
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
                    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']
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
  const mutationDefaults = getPutSitesSiteIdTrafficSplitsSplitTestIdMutationOptions<
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

export function getPostSitesSiteIdTrafficSplitsSplitTestIdPublishMutationKey() {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id/publish', 'POST'] as const
}

export function getPostSitesSiteIdTrafficSplitsSplitTestIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdTrafficSplitsSplitTestIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].traffic_splits[':split_test_id'].publish.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdTrafficSplitsSplitTestIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
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
  const mutationDefaults = getPostSitesSiteIdTrafficSplitsSplitTestIdPublishMutationOptions<
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

export function getPostSitesSiteIdTrafficSplitsSplitTestIdUnpublishMutationKey() {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id/unpublish', 'POST'] as const
}

export function getPostSitesSiteIdTrafficSplitsSplitTestIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdTrafficSplitsSplitTestIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].traffic_splits[':split_test_id'].unpublish.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdTrafficSplitsSplitTestIdUnpublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
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
  const mutationDefaults = getPostSitesSiteIdTrafficSplitsSplitTestIdUnpublishMutationOptions<
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

export function getDnsZonesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dns_zones.$get>>,
) {
  return ['dns_zones', '/dns_zones', toValue(args)] as const
}

export function getDnsZonesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dns_zones.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsZonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns_zones.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dns_zones.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
          >,
          ReturnType<typeof getDnsZonesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDnsZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsZonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns_zones.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsZonesMutationKey() {
  return ['dns_zones', '/dns_zones', 'POST'] as const
}

export function getPostDnsZonesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$post>>>>>,
    TError,
    InferRequestType<typeof client.dns_zones.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsZonesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dns_zones.$post>) {
      return parseResponse(client.dns_zones.$post(args, options))
    },
  })
}

export function usePostDnsZones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.dns_zones.$post>,
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
  const mutationDefaults = getPostDnsZonesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDnsZonesZoneIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>>,
) {
  return ['dns_zones', '/dns_zones/:zone_id', toValue(args)] as const
}

export function getDnsZonesZoneIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsZonesZoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns_zones[':zone_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsZonesZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDnsZonesZoneIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsZonesZoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsZonesZoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns_zones[':zone_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDnsZonesZoneIdMutationKey() {
  return ['dns_zones', '/dns_zones/:zone_id', 'DELETE'] as const
}

export function getDeleteDnsZonesZoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dns_zones)[':zone_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDnsZonesZoneIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$delete']>) {
      return parseResponse(client.dns_zones[':zone_id'].$delete(args, options))
    },
  })
}

export function useDeleteDnsZonesZoneId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dns_zones)[':zone_id']['$delete']>,
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
  const mutationDefaults = getDeleteDnsZonesZoneIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutDnsZonesZoneIdTransferMutationKey() {
  return ['dns_zones', '/dns_zones/:zone_id/transfer', 'PUT'] as const
}

export function getPutDnsZonesZoneIdTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDnsZonesZoneIdTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>,
    ) {
      return parseResponse(client.dns_zones[':zone_id'].transfer.$put(args, options))
    },
  })
}

export function usePutDnsZonesZoneIdTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>,
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
  const mutationDefaults = getPutDnsZonesZoneIdTransferMutationOptions<TError, TOnMutateResult>(
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

export function getDnsZonesZoneIdDnsRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>
  >,
) {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records', toValue(args)] as const
}

export function getDnsZonesZoneIdDnsRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsZonesZoneIdDnsRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns_zones[':zone_id'].dns_records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsZonesZoneIdDnsRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDnsZonesZoneIdDnsRecordsQueryKey>
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
          Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsZonesZoneIdDnsRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsZonesZoneIdDnsRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns_zones[':zone_id'].dns_records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsZonesZoneIdDnsRecordsMutationKey() {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records', 'POST'] as const
}

export function getPostDnsZonesZoneIdDnsRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsZonesZoneIdDnsRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>,
    ) {
      return parseResponse(client.dns_zones[':zone_id'].dns_records.$post(args, options))
    },
  })
}

export function usePostDnsZonesZoneIdDnsRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>,
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
  const mutationDefaults = getPostDnsZonesZoneIdDnsRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']>
  >,
) {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records/:dns_record_id', toValue(args)] as const
}

export function getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsZonesZoneIdDnsRecordsDnsRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']>
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
                    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
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
                    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryKey>
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
            ReturnType<
              (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDnsZonesZoneIdDnsRecordsDnsRecordIdMutationKey() {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records/:dns_record_id', 'DELETE'] as const
}

export function getDeleteDnsZonesZoneIdDnsRecordsDnsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDnsZonesZoneIdDnsRecordsDnsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDnsZonesZoneIdDnsRecordsDnsRecordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
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
  const mutationDefaults = getDeleteDnsZonesZoneIdDnsRecordsDnsRecordIdMutationOptions<
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

export function getSitesSiteIdDevServersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/dev_servers', toValue(args)] as const
}

export function getSitesSiteIdDevServersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDevServersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].dev_servers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDevServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDevServersQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDevServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDevServersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].dev_servers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdDevServersMutationKey() {
  return ['sites', '/sites/:site_id/dev_servers', 'POST'] as const
}

export function getPostSitesSiteIdDevServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDevServersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].dev_servers.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDevServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdDevServersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSitesSiteIdDevServersMutationKey() {
  return ['sites', '/sites/:site_id/dev_servers', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDevServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDevServersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].dev_servers.$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdDevServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdDevServersMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDevServersDevServerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/dev_servers/:dev_server_id', toValue(args)] as const
}

export function getSitesSiteIdDevServersDevServerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDevServersDevServerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].dev_servers[':dev_server_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDevServersDevServerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
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
                    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
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
                    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDevServersDevServerIdQueryKey>
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
            ReturnType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDevServersDevServerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDevServersDevServerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].dev_servers[':dev_server_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdDevServersDevServerIdStateMutationKey() {
  return ['sites', '/sites/:site_id/dev_servers/:dev_server_id/state', 'POST'] as const
}

export function getPostSitesSiteIdDevServersDevServerIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDevServersDevServerIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].dev_servers[':dev_server_id'].state.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdDevServersDevServerIdState<
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
                    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
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
  const mutationDefaults = getPostSitesSiteIdDevServersDevServerIdStateMutationOptions<
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

export function getSitesSiteIdDevServerHooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/dev_server_hooks', toValue(args)] as const
}

export function getSitesSiteIdDevServerHooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDevServerHooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].dev_server_hooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDevServerHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDevServerHooksQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDevServerHooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDevServerHooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].dev_server_hooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdDevServerHooksMutationKey() {
  return ['sites', '/sites/:site_id/dev_server_hooks', 'POST'] as const
}

export function getPostSitesSiteIdDevServerHooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDevServerHooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].dev_server_hooks.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDevServerHooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdDevServerHooksMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDevServerHooksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/dev_server_hooks/:id', toValue(args)] as const
}

export function getSitesSiteIdDevServerHooksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDevServerHooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].dev_server_hooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDevServerHooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDevServerHooksIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDevServerHooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDevServerHooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].dev_server_hooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdDevServerHooksIdMutationKey() {
  return ['sites', '/sites/:site_id/dev_server_hooks/:id', 'PUT'] as const
}

export function getPutSitesSiteIdDevServerHooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdDevServerHooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$put(args, options))
    },
  })
}

export function usePutSitesSiteIdDevServerHooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>,
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
  const mutationDefaults = getPutSitesSiteIdDevServerHooksIdMutationOptions<
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

export function getDeleteSitesSiteIdDevServerHooksIdMutationKey() {
  return ['sites', '/sites/:site_id/dev_server_hooks/:id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDevServerHooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDevServerHooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdDevServerHooksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdDevServerHooksIdMutationOptions<
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

export function getAiGatewayProvidersQueryKey() {
  return ['ai-gateway', '/ai-gateway/providers'] as const
}

export function getAiGatewayProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAiGatewayProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ai-gateway'].providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAiGatewayProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAiGatewayProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAiGatewayProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAiGatewayProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['ai-gateway'].providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdAiGatewayTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/ai-gateway/token', toValue(args)] as const
}

export function getSitesSiteIdAiGatewayTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdAiGatewayTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id']['ai-gateway'].token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdAiGatewayToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdAiGatewayTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdAiGatewayTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdAiGatewayTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id']['ai-gateway'].token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdAiGatewayTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
  >,
) {
  return ['accounts', '/accounts/:account_id/ai-gateway/token', toValue(args)] as const
}

export function getAccountsAccountIdAiGatewayTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdAiGatewayTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id']['ai-gateway'].token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdAiGatewayToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
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
                  ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdAiGatewayTokenQueryKey>
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
            ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdAiGatewayTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdAiGatewayTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id']['ai-gateway'].token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdDatabaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>>,
) {
  return ['sites', '/sites/:site_id/database', toValue(args)] as const
}

export function getSitesSiteIdDatabaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDatabaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].database.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDatabase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDatabaseQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDatabaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDatabaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].database.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdDatabaseMutationKey() {
  return ['sites', '/sites/:site_id/database', 'POST'] as const
}

export function getPostSitesSiteIdDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['database']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['database']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].database.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDatabase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['database']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdDatabaseMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSitesSiteIdDatabaseMutationKey() {
  return ['sites', '/sites/:site_id/database', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['database']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['database']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].database.$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdDatabase<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['database']['$delete']>,
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
  const mutationDefaults = getDeleteSitesSiteIdDatabaseMutationOptions<TError, TOnMutateResult>(
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

export function getPostSitesSiteIdDatabaseBranchMutationKey() {
  return ['sites', '/sites/:site_id/database/branch', 'POST'] as const
}

export function getPostSitesSiteIdDatabaseBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['database']['branch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDatabaseBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['database']['branch']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].database.branch.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDatabaseBranch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['database']['branch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['database']['branch']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdDatabaseBranchMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDatabaseBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/database/branches', toValue(args)] as const
}

export function getSitesSiteIdDatabaseBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDatabaseBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].database.branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDatabaseBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDatabaseBranchesQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDatabaseBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDatabaseBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].database.branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdDatabaseBranchBranchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/database/branch/:branch_id', toValue(args)] as const
}

export function getSitesSiteIdDatabaseBranchBranchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDatabaseBranchBranchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].database.branch[':branch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDatabaseBranchBranchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']>
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
                    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
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
                    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDatabaseBranchBranchIdQueryKey>
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
            ReturnType<
              (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDatabaseBranchBranchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDatabaseBranchBranchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].database.branch[':branch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSitesSiteIdDatabaseBranchBranchIdMutationKey() {
  return ['sites', '/sites/:site_id/database/branch/:branch_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDatabaseBranchBranchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDatabaseBranchBranchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].database.branch[':branch_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSitesSiteIdDatabaseBranchBranchId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
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
  const mutationDefaults = getDeleteSitesSiteIdDatabaseBranchBranchIdMutationOptions<
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

export function getPostSitesSiteIdDatabaseBranchBranchIdResetMutationKey() {
  return ['sites', '/sites/:site_id/database/branch/:branch_id/reset', 'POST'] as const
}

export function getPostSitesSiteIdDatabaseBranchBranchIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDatabaseBranchBranchIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].database.branch[':branch_id'].reset.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdDatabaseBranchBranchIdReset<
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
                    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
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
  const mutationDefaults = getPostSitesSiteIdDatabaseBranchBranchIdResetMutationOptions<
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

export function getPutSitesSiteIdDatabaseBranchBranchIdComputeSettingsMutationKey() {
  return ['sites', '/sites/:site_id/database/branch/:branch_id/compute/settings', 'PUT'] as const
}

export function getPutSitesSiteIdDatabaseBranchBranchIdComputeSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdDatabaseBranchBranchIdComputeSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].database.branch[':branch_id'].compute.settings.$put(args, options),
      )
    },
  })
}

export function usePutSitesSiteIdDatabaseBranchBranchIdComputeSettings<
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
                    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
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
  const mutationDefaults = getPutSitesSiteIdDatabaseBranchBranchIdComputeSettingsMutationOptions<
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

export function getSitesSiteIdDatabaseComputeSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/database/compute/settings', toValue(args)] as const
}

export function getSitesSiteIdDatabaseComputeSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDatabaseComputeSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].database.compute.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDatabaseComputeSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$get']>
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
                    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
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
                    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDatabaseComputeSettingsQueryKey>
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
            ReturnType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDatabaseComputeSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDatabaseComputeSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].database.compute.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdDatabaseComputeSettingsMutationKey() {
  return ['sites', '/sites/:site_id/database/compute/settings', 'PUT'] as const
}

export function getPutSitesSiteIdDatabaseComputeSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdDatabaseComputeSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['compute']['settings']['$put']
      >,
    ) {
      return parseResponse(client.sites[':site_id'].database.compute.settings.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdDatabaseComputeSettings<
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
                    (typeof client.sites)[':site_id']['database']['compute']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['compute']['settings']['$put']
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
  const mutationDefaults = getPutSitesSiteIdDatabaseComputeSettingsMutationOptions<
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

export function getDeleteSitesSiteIdDatabaseComputeSettingsMutationKey() {
  return ['sites', '/sites/:site_id/database/compute/settings', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDatabaseComputeSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDatabaseComputeSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].database.compute.settings.$delete(args, options),
      )
    },
  })
}

export function useDeleteSitesSiteIdDatabaseComputeSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
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
  const mutationDefaults = getDeleteSitesSiteIdDatabaseComputeSettingsMutationOptions<
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

export function getSitesSiteIdDatabaseMigrationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/database/migrations', toValue(args)] as const
}

export function getSitesSiteIdDatabaseMigrationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDatabaseMigrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].database.migrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDatabaseMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDatabaseMigrationsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDatabaseMigrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDatabaseMigrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].database.migrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdDatabaseMigrationsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/database/migrations/:name', toValue(args)] as const
}

export function getSitesSiteIdDatabaseMigrationsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDatabaseMigrationsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].database.migrations[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDatabaseMigrationsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']>
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
                    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
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
                    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDatabaseMigrationsNameQueryKey>
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
            ReturnType<(typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDatabaseMigrationsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDatabaseMigrationsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].database.migrations[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdDatabaseMigrationsDeployIdMutationKey() {
  return ['sites', '/sites/:site_id/database/migrations/:deploy_id', 'POST'] as const
}

export function getPostSitesSiteIdDatabaseMigrationsDeployIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDatabaseMigrationsDeployIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].database.migrations[':deploy_id'].$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdDatabaseMigrationsDeployId<
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
                    (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
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
  const mutationDefaults = getPostSitesSiteIdDatabaseMigrationsDeployIdMutationOptions<
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

export function getPostSitesSiteIdDatabaseSnapshotMutationKey() {
  return ['sites', '/sites/:site_id/database/snapshot', 'POST'] as const
}

export function getPostSitesSiteIdDatabaseSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDatabaseSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].database.snapshot.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDatabaseSnapshot<
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
                  ReturnType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>,
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
  const mutationDefaults = getPostSitesSiteIdDatabaseSnapshotMutationOptions<
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

export function getSitesSiteIdDatabaseSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/database/snapshots', toValue(args)] as const
}

export function getSitesSiteIdDatabaseSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDatabaseSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].database.snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDatabaseSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>
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
                  ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDatabaseSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDatabaseSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDatabaseSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].database.snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSitesSiteIdDatabaseSnapshotSnapshotIdMutationKey() {
  return ['sites', '/sites/:site_id/database/snapshot/:snapshot_id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDatabaseSnapshotSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDatabaseSnapshotSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].database.snapshot[':snapshot_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSitesSiteIdDatabaseSnapshotSnapshotId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
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
  const mutationDefaults = getDeleteSitesSiteIdDatabaseSnapshotSnapshotIdMutationOptions<
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

export function getPostSitesSiteIdDatabaseSnapshotSnapshotIdRestoreMutationKey() {
  return ['sites', '/sites/:site_id/database/snapshot/:snapshot_id/restore', 'POST'] as const
}

export function getPostSitesSiteIdDatabaseSnapshotSnapshotIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDatabaseSnapshotSnapshotIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].database.snapshot[':snapshot_id'].restore.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdDatabaseSnapshotSnapshotIdRestore<
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
                    (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
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
  const mutationDefaults = getPostSitesSiteIdDatabaseSnapshotSnapshotIdRestoreMutationOptions<
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
