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

export function getSitesQueryKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function getSitesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSitesQueryKey>
  >({
    queryKey: getSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
        TError,
        InferRequestType<typeof client.sites.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
) {
  return ['sites', '/sites/:site_id', args] as const
}

export function getSitesSiteIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdQueryKey>
  >({
    queryKey: getSitesSiteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
) {
  return ['sites', '/sites/:site_id/ssl', args] as const
}

export function getSitesSiteIdSslQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdSslQueryKey>
  >({
    queryKey: getSitesSiteIdSslQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].ssl.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesSiteIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdSslQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdSslQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdSsl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdSslQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdSslQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
) {
  return ['sites', '/sites/:site_id/ssl/certificates', args] as const
}

export function getSitesSiteIdSslCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdSslCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].ssl.certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSitesSiteIdSslCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdSslCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdSslCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsAccountIdEnvQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/env', args] as const
}

export function getAccountsAccountIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsAccountIdEnvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsAccountIdEnvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
) {
  return ['api', '/api/v1/sites/:site_id/env', args] as const
}

export function getApiV1SitesSiteIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1SitesSiteIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.sites[':site_id'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiV1SitesSiteIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SitesSiteIdEnvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1SitesSiteIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SitesSiteIdEnvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountsAccountIdEnvKeyQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/env/:key', args] as const
}

export function getAccountsAccountIdEnvKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdEnvKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].env[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdEnvKeyQueryKey>
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
      ...getAccountsAccountIdEnvKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdEnvKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdEnvKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
) {
  return ['sites', '/sites/:site_id/functions', args] as const
}

export function getSitesSiteIdFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteIdFormsQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
) {
  return ['sites', '/sites/:site_id/forms', args] as const
}

export function getSitesSiteIdFormsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].forms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIdForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdFormsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdFormsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdFormsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
) {
  return ['sites', '/sites/:site_id/submissions', args] as const
}

export function getSitesSiteIdSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].submissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdSubmissionsQueryKey>
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
      ...getSitesSiteIdSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIdFilesQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
) {
  return ['sites', '/sites/:site_id/files', args] as const
}

export function getSitesSiteIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteIdAssetsQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
) {
  return ['sites', '/sites/:site_id/assets', args] as const
}

export function getSitesSiteIdAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
) {
  return ['sites', '/sites/:site_id/assets/:asset_id', args] as const
}

export function getSitesSiteIdAssetsAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdAssetsAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].assets[':asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSitesSiteIdAssetsAssetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdAssetsAssetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/assets/:asset_id/public_signature', args] as const
}

export function getSitesSiteIdAssetsAssetIdPublicSignatureQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdAssetsAssetIdPublicSignatureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].assets[':asset_id'].public_signature.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdAssetsAssetIdPublicSignatureQueryKey>
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
      ...getSitesSiteIdAssetsAssetIdPublicSignatureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdAssetsAssetIdPublicSignature<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdAssetsAssetIdPublicSignatureQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIdFilesFilePathQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
) {
  return ['sites', '/sites/:site_id/files/:file_path', args] as const
}

export function getSitesSiteIdFilesFilePathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdFilesFilePathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].files[':file_path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSitesSiteIdFilesFilePathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdFilesFilePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdFilesFilePathQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purge.$post>>>>>,
        TError,
        InferRequestType<typeof client.purge.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
) {
  return ['sites', '/sites/:site_id/snippets', args] as const
}

export function getSitesSiteIdSnippetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdSnippetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].snippets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdSnippetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdSnippetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdSnippets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdSnippetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
) {
  return ['sites', '/sites/:site_id/snippets/:snippet_id', args] as const
}

export function getSitesSiteIdSnippetsSnippetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdSnippetsSnippetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].snippets[':snippet_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdSnippetsSnippetIdQueryKey>
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
      ...getSitesSiteIdSnippetsSnippetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdSnippetsSnippetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdSnippetsSnippetIdQueryKey>
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
      ...getSitesSiteIdSnippetsSnippetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
) {
  return ['sites', '/sites/:site_id/metadata', args] as const
}

export function getSitesSiteIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdMetadataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
) {
  return ['sites', '/sites/:site_id/build_hooks', args] as const
}

export function getSitesSiteIdBuildHooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdBuildHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].build_hooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdBuildHooksQueryKey>
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
      ...getSitesSiteIdBuildHooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdBuildHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdBuildHooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
) {
  return ['sites', '/sites/:site_id/build_hooks/:id', args] as const
}

export function getSitesSiteIdBuildHooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdBuildHooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].build_hooks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdBuildHooksIdQueryKey>
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
      ...getSitesSiteIdBuildHooksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdBuildHooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdBuildHooksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
) {
  return ['sites', '/sites/:site_id/deploys', args] as const
}

export function getSitesSiteIdDeploysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDeploysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].deploys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDeploysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdDeploysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDeploys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdDeploysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
) {
  return ['sites', '/sites/:site_id/deploys/:deploy_id', args] as const
}

export function getSitesSiteIdDeploysDeployIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDeploysDeployIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].deploys[':deploy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDeploysDeployIdQueryKey>
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
      ...getSitesSiteIdDeploysDeployIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDeploysDeployId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdDeploysDeployIdQueryKey>
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
      ...getSitesSiteIdDeploysDeployIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
) {
  return ['sites', '/sites/:site_id/builds', args] as const
}

export function getSitesSiteIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
) {
  return ['sites', '/sites/:site_id/deployed-branches', args] as const
}

export function getSitesSiteIdDeployedBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDeployedBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id']['deployed-branches'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDeployedBranchesQueryKey>
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
      ...getSitesSiteIdDeployedBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDeployedBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdDeployedBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
) {
  return ['builds', '/builds/:build_id', args] as const
}

export function getBuildsBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBuildsBuildIdQueryKey>
  >({
    queryKey: getBuildsBuildIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.builds[':build_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildsBuildIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBuildsBuildIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBuildsBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBuildsBuildIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBuildsBuildIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
) {
  return [':account_id', '/:account_id/builds/status', args] as const
}

export function getAccountIdBuildsStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountIdBuildsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':account_id'].builds.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountIdBuildsStatusQueryKey>
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
      ...getAccountIdBuildsStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdBuildsStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountIdBuildsStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIdDnsQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
) {
  return ['sites', '/sites/:site_id/dns', args] as const
}

export function getSitesSiteIdDnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDnsQueryKey>
  >({
    queryKey: getSitesSiteIdDnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].dns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesSiteIdDns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdDnsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdDnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdDnsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
) {
  return ['deploys', '/deploys/:deploy_id', args] as const
}

export function getDeploysDeployIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploysDeployIdQueryKey>
  >({
    queryKey: getDeploysDeployIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploys[':deploy_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeploysDeployId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploysDeployIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeploysDeployIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeploysDeployId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploysDeployIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeploysDeployIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
) {
  return ['forms', '/forms/:form_id/submissions', args] as const
}

export function getFormsFormIdSubmissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFormsFormIdSubmissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forms[':form_id'].submissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFormsFormIdSubmissionsQueryKey>
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
      ...getFormsFormIdSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFormsFormIdSubmissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getFormsFormIdSubmissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHooksQueryKey(args: InferRequestType<typeof client.hooks.$get>) {
  return ['hooks', '/hooks', args] as const
}

export function getHooksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHooksQueryKey>
  >({
    queryKey: getHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHooks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$post>>>>>,
        TError,
        InferRequestType<typeof client.hooks.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
) {
  return ['hooks', '/hooks/:hook_id', args] as const
}

export function getHooksHookIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHooksHookIdQueryKey>
  >({
    queryKey: getHooksHookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hooks[':hook_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHooksHookId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHooksHookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHooksHookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHooksHookId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHooksHookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHooksHookIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function getHooksTypesQueryKey(args: InferRequestType<typeof client.hooks.types.$get>) {
  return ['hooks', '/hooks/types', args] as const
}

export function getHooksTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hooks.types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHooksTypesQueryKey>
  >({
    queryKey: getHooksTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hooks.types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHooksTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hooks.types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHooksTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHooksTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHooksTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.hooks.types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHooksTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHooksTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.tickets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.tickets.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
) {
  return ['oauth', '/oauth/tickets/:ticket_id', args] as const
}

export function getOauthTicketsTicketIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOauthTicketsTicketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.tickets[':ticket_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOauthTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getOauthTicketsTicketIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthTicketsTicketIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthTicketsTicketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthTicketsTicketIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function getDeployKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeployKeysQueryKey>
  >({
    queryKey: getDeployKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.deploy_keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeployKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeployKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeployKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeployKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeployKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeployKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
) {
  return ['deploy_keys', '/deploy_keys/:key_id', args] as const
}

export function getDeployKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeployKeysKeyIdQueryKey>
  >({
    queryKey: getDeployKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deploy_keys[':key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeployKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDeployKeysKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeployKeysKeyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeployKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeployKeysKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeployKeysKeyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
) {
  return [':account_slug', '/:account_slug/sites', args] as const
}

export function getAccountSlugSitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSlugSitesQueryKey>
  >({
    queryKey: getAccountSlugSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':account_slug'].sites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountSlugSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountSlugSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountSlugSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountSlugSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSlugSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountSlugSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
) {
  return [':account_slug', '/:account_slug/members', args] as const
}

export function getAccountSlugMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountSlugMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':account_slug'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountSlugMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountSlugMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountSlugMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountSlugMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountSlugMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
) {
  return [':account_slug', '/:account_slug/members/:member_id', args] as const
}

export function getAccountSlugMembersMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountSlugMembersMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':account_slug'].members[':member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAccountSlugMembersMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountSlugMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountSlugMembersMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function getBillingPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBillingPaymentMethodsQueryKey>
  >({
    queryKey: getBillingPaymentMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.payment_methods.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillingPaymentMethodsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBillingPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBillingPaymentMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillingPaymentMethodsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountsTypesQueryKey() {
  return ['accounts', '/accounts/types'] as const
}

export function getAccountsTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsTypesQueryKey>
  >({
    queryKey: getAccountsTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountsQueryKey() {
  return ['accounts', '/accounts'] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  return ['accounts', '/accounts/:account_id', args] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsAccountIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/audit', args] as const
}

export function getAccountsAccountIdAuditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].audit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdAuditQueryKey>
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
      ...getAccountsAccountIdAuditQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdAuditQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAgentRunnersQueryKey(args: InferRequestType<typeof client.agent_runners.$get>) {
  return ['agent_runners', '/agent_runners', args] as const
}

export function getAgentRunnersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agent_runners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentRunnersQueryKey>
  >({
    queryKey: getAgentRunnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent_runners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentRunners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agent_runners.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentRunnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentRunnersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentRunners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agent_runners.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAgentRunnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentRunnersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.agent_runners.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id', args] as const
}

export function getAgentRunnersAgentRunnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentRunnersAgentRunnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAgentRunnersAgentRunnerIdQueryKey>
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
      ...getAgentRunnersAgentRunnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentRunnersAgentRunnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAgentRunnersAgentRunnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id/diff', args] as const
}

export function getAgentRunnersAgentRunnerIdDiffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentRunnersAgentRunnerIdDiffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].diff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getAgentRunnersAgentRunnerIdDiffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentRunnersAgentRunnerIdDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAgentRunnersAgentRunnerIdDiffQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id/sessions', args] as const
}

export function getAgentRunnersAgentRunnerIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentRunnersAgentRunnerIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAgentRunnersAgentRunnerIdSessionsQueryKey>
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
      ...getAgentRunnersAgentRunnerIdSessionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentRunnersAgentRunnerIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getAgentRunnersAgentRunnerIdSessionsQueryKey>
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
      ...getAgentRunnersAgentRunnerIdSessionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
) {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id',
    args,
  ] as const
}

export function getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryKey>
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
      ...getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<
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
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
) {
  return ['submissions', '/submissions/:submission_id', args] as const
}

export function getSubmissionsSubmissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSubmissionsSubmissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.submissions[':submission_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSubmissionsSubmissionIdQueryKey>
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
      ...getSubmissionsSubmissionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubmissionsSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSubmissionsSubmissionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
) {
  return ['sites', '/sites/:site_id/service-instances', args] as const
}

export function getSitesSiteIdServiceInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdServiceInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id']['service-instances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdServiceInstancesQueryKey>
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
      ...getSitesSiteIdServiceInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdServiceInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdServiceInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/services/:addon/instances/:instance_id', args] as const
}

export function getSitesSiteIdServicesAddonInstancesInstanceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdServicesAddonInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].services[':addon'].instances[':instance_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdServicesAddonInstancesInstanceIdQueryKey>
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
      ...getSitesSiteIdServicesAddonInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdServicesAddonInstancesInstanceId<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdServicesAddonInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/identity/:identity_id/users/:user_id', args] as const
}

export function getSitesSiteIdIdentityIdentityIdUsersUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdIdentityIdentityIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].identity[':identity_id'].users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdIdentityIdentityIdUsersUserIdQueryKey>
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
      ...getSitesSiteIdIdentityIdentityIdUsersUserIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdIdentityIdentityIdUsersUserId<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdIdentityIdentityIdUsersUserIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<typeof client.services.index.$get>,
) {
  return ['services', '/services/', args] as const
}

export function getServicesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesIndexQueryKey>
  >({
    queryKey: getServicesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.services.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServicesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServicesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.services.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServicesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServicesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServicesAddonNameQueryKey(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
) {
  return ['services', '/services/:addonName', args] as const
}

export function getServicesAddonNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServicesAddonNameQueryKey>
  >({
    queryKey: getServicesAddonNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':addonName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServicesAddonName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServicesAddonNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServicesAddonNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServicesAddonName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServicesAddonNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServicesAddonNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServicesAddonNameManifestQueryKey(
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
) {
  return ['services', '/services/:addonName/manifest', args] as const
}

export function getServicesAddonNameManifestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServicesAddonNameManifestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services[':addonName'].manifest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getServicesAddonNameManifestQueryKey>
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
      ...getServicesAddonNameManifestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServicesAddonNameManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getServicesAddonNameManifestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteIdTrafficSplitsQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
) {
  return ['sites', '/sites/:site_id/traffic_splits', args] as const
}

export function getSitesSiteIdTrafficSplitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdTrafficSplitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].traffic_splits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdTrafficSplitsQueryKey>
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
      ...getSitesSiteIdTrafficSplitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdTrafficSplits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdTrafficSplitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id', args] as const
}

export function getSitesSiteIdTrafficSplitsSplitTestIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdTrafficSplitsSplitTestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].traffic_splits[':split_test_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdTrafficSplitsSplitTestIdQueryKey>
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
      ...getSitesSiteIdTrafficSplitsSplitTestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdTrafficSplitsSplitTestId<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdTrafficSplitsSplitTestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getDnsZonesQueryKey(args: InferRequestType<typeof client.dns_zones.$get>) {
  return ['dns_zones', '/dns_zones', args] as const
}

export function getDnsZonesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dns_zones.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDnsZonesQueryKey>
  >({
    queryKey: getDnsZonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns_zones.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDnsZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dns_zones.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDnsZonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDnsZonesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDnsZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.dns_zones.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDnsZonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDnsZonesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.dns_zones.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
) {
  return ['dns_zones', '/dns_zones/:zone_id', args] as const
}

export function getDnsZonesZoneIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsZonesZoneIdQueryKey>
  >({
    queryKey: getDnsZonesZoneIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns_zones[':zone_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDnsZonesZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDnsZonesZoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDnsZonesZoneIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDnsZonesZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDnsZonesZoneIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDnsZonesZoneIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
) {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records', args] as const
}

export function getDnsZonesZoneIdDnsRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsZonesZoneIdDnsRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns_zones[':zone_id'].dns_records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDnsZonesZoneIdDnsRecordsQueryKey>
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
      ...getDnsZonesZoneIdDnsRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDnsZonesZoneIdDnsRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDnsZonesZoneIdDnsRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
) {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records/:dns_record_id', args] as const
}

export function getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryKey>
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
      ...getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDnsZonesZoneIdDnsRecordsDnsRecordId<
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
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getDnsZonesZoneIdDnsRecordsDnsRecordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
) {
  return ['sites', '/sites/:site_id/dev_servers', args] as const
}

export function getSitesSiteIdDevServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDevServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].dev_servers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDevServersQueryKey>
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
      ...getSitesSiteIdDevServersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDevServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdDevServersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/dev_servers/:dev_server_id', args] as const
}

export function getSitesSiteIdDevServersDevServerIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDevServersDevServerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].dev_servers[':dev_server_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDevServersDevServerIdQueryKey>
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
      ...getSitesSiteIdDevServersDevServerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDevServersDevServerId<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdDevServersDevServerIdQueryKey>
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
      ...getSitesSiteIdDevServersDevServerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
) {
  return ['sites', '/sites/:site_id/dev_server_hooks', args] as const
}

export function getSitesSiteIdDevServerHooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDevServerHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].dev_server_hooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDevServerHooksQueryKey>
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
      ...getSitesSiteIdDevServerHooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDevServerHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdDevServerHooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
) {
  return ['sites', '/sites/:site_id/dev_server_hooks/:id', args] as const
}

export function getSitesSiteIdDevServerHooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDevServerHooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].dev_server_hooks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDevServerHooksIdQueryKey>
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
      ...getSitesSiteIdDevServerHooksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDevServerHooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdDevServerHooksIdQueryKey>
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
      ...getSitesSiteIdDevServerHooksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function getAiGatewayProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getAiGatewayProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['ai-gateway'].providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getAiGatewayProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAiGatewayProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAiGatewayProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAiGatewayProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteIdAiGatewayTokenQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
) {
  return ['sites', '/sites/:site_id/ai-gateway/token', args] as const
}

export function getSitesSiteIdAiGatewayTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdAiGatewayTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id']['ai-gateway'].token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSitesSiteIdAiGatewayTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdAiGatewayToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdAiGatewayTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountsAccountIdAiGatewayTokenQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/ai-gateway/token', args] as const
}

export function getAccountsAccountIdAiGatewayTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdAiGatewayTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id']['ai-gateway'].token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountsAccountIdAiGatewayTokenQueryKey>
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
      ...getAccountsAccountIdAiGatewayTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsAccountIdAiGatewayToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getAccountsAccountIdAiGatewayTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIdDatabaseQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
) {
  return ['sites', '/sites/:site_id/database', args] as const
}

export function getSitesSiteIdDatabaseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDatabaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].database.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDatabaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdDatabaseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDatabase<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdDatabaseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
) {
  return ['sites', '/sites/:site_id/database/branches', args] as const
}

export function getSitesSiteIdDatabaseBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDatabaseBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].database.branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getSitesSiteIdDatabaseBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDatabaseBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdDatabaseBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIdDatabaseBranchBranchIdQueryKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/database/branch/:branch_id', args] as const
}

export function getSitesSiteIdDatabaseBranchBranchIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDatabaseBranchBranchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].database.branch[':branch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDatabaseBranchBranchIdQueryKey>
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
      ...getSitesSiteIdDatabaseBranchBranchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDatabaseBranchBranchId<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getSitesSiteIdDatabaseBranchBranchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/database/compute/settings', args] as const
}

export function getSitesSiteIdDatabaseComputeSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDatabaseComputeSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].database.compute.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDatabaseComputeSettingsQueryKey>
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
      ...getSitesSiteIdDatabaseComputeSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDatabaseComputeSettings<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdDatabaseComputeSettingsQueryKey>
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
      ...getSitesSiteIdDatabaseComputeSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
) {
  return ['sites', '/sites/:site_id/database/migrations', args] as const
}

export function getSitesSiteIdDatabaseMigrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDatabaseMigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].database.migrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDatabaseMigrationsQueryKey>
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
      ...getSitesSiteIdDatabaseMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDatabaseMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdDatabaseMigrationsQueryKey>
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
      ...getSitesSiteIdDatabaseMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIdDatabaseMigrationsNameQueryKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/database/migrations/:name', args] as const
}

export function getSitesSiteIdDatabaseMigrationsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDatabaseMigrationsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].database.migrations[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDatabaseMigrationsNameQueryKey>
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
      ...getSitesSiteIdDatabaseMigrationsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDatabaseMigrationsName<
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
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdDatabaseMigrationsNameQueryKey>
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
      ...getSitesSiteIdDatabaseMigrationsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
) {
  return ['sites', '/sites/:site_id/database/snapshots', args] as const
}

export function getSitesSiteIdDatabaseSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDatabaseSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].database.snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDatabaseSnapshotsQueryKey>
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
      ...getSitesSiteIdDatabaseSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDatabaseSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdDatabaseSnapshotsQueryKey>
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
      ...getSitesSiteIdDatabaseSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
