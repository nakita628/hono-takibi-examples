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

export function getAccountKey() {
  return ['account'] as const
}

export function getActorsKey() {
  return ['actors'] as const
}

export function getClientsKey() {
  return ['clients'] as const
}

export function getDefenderDevicesKey() {
  return ['defender_devices'] as const
}

export function getDefenderPostureProvidersKey() {
  return ['defender_posture_providers'] as const
}

export function getEmailOtpAuthProvidersKey() {
  return ['email_otp_auth_providers'] as const
}

export function getEntraAuthProvidersKey() {
  return ['entra_auth_providers'] as const
}

export function getEntraDirectoriesKey() {
  return ['entra_directories'] as const
}

export function getGithubAuthProvidersKey() {
  return ['github_auth_providers'] as const
}

export function getGoogleAuthProvidersKey() {
  return ['google_auth_providers'] as const
}

export function getGoogleDirectoriesKey() {
  return ['google_directories'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getIntuneDevicesKey() {
  return ['intune_devices'] as const
}

export function getIntunePostureProvidersKey() {
  return ['intune_posture_providers'] as const
}

export function getIruDevicesKey() {
  return ['iru_devices'] as const
}

export function getIruPostureProvidersKey() {
  return ['iru_posture_providers'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getOidcAuthProvidersKey() {
  return ['oidc_auth_providers'] as const
}

export function getOktaAuthProvidersKey() {
  return ['okta_auth_providers'] as const
}

export function getOktaDirectoriesKey() {
  return ['okta_directories'] as const
}

export function getPoliciesKey() {
  return ['policies'] as const
}

export function getPostureFieldsKey() {
  return ['posture_fields'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getSantaDevicesKey() {
  return ['santa_devices'] as const
}

export function getSantaPostureProvidersKey() {
  return ['santa_posture_providers'] as const
}

export function getSentineloneDevicesKey() {
  return ['sentinelone_devices'] as const
}

export function getSentinelonePostureProvidersKey() {
  return ['sentinelone_posture_providers'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getSophosDevicesKey() {
  return ['sophos_devices'] as const
}

export function getSophosPostureProvidersKey() {
  return ['sophos_posture_providers'] as const
}

export function getX509AuthProviderKey() {
  return ['x509_auth_provider'] as const
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
        TError,
        InferRequestType<typeof client.groups.$post>,
        TOnMutateResult
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

export function getActorsActorIdExternalIdentitiesQueryKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
) {
  return ['actors', '/actors/:actor_id/external_identities', args] as const
}

export function getActorsActorIdExternalIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdExternalIdentitiesQueryKey>
  >({
    queryKey: getActorsActorIdExternalIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actors[':actor_id'].external_identities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActorsActorIdExternalIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdExternalIdentitiesQueryKey>
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
      ...getActorsActorIdExternalIdentitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActorsActorIdExternalIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdExternalIdentitiesQueryKey>
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
      ...getActorsActorIdExternalIdentitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClientsIdQueryKey(
  args: InferRequestType<(typeof client.clients)[':id']['$get']>,
) {
  return ['clients', '/clients/:id', args] as const
}

export function getClientsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.clients)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIdQueryKey>
  >({
    queryKey: getClientsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClientsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClientsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clients)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClientsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutClientsIdMutationKey() {
  return ['clients', '/clients/:id', 'PUT'] as const
}

export function getPutClientsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id']['$put']>) {
      return parseResponse(client.clients[':id'].$put(args, options))
    },
  })
}

export function usePutClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClientsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteClientsIdMutationKey() {
  return ['clients', '/clients/:id', 'DELETE'] as const
}

export function getDeleteClientsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id']['$delete']>) {
      return parseResponse(client.clients[':id'].$delete(args, options))
    },
  })
}

export function useDeleteClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClientsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchClientsIdMutationKey() {
  return ['clients', '/clients/:id', 'PATCH'] as const
}

export function getPatchClientsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClientsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id']['$patch']>) {
      return parseResponse(client.clients[':id'].$patch(args, options))
    },
  })
}

export function usePatchClientsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchClientsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSitesSiteIdGatewaysIdQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
) {
  return ['sites', '/sites/:site_id/gateways/:id', args] as const
}

export function getSitesSiteIdGatewaysIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdGatewaysIdQueryKey>
  >({
    queryKey: getSitesSiteIdGatewaysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].gateways[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIdGatewaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdGatewaysIdQueryKey>
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
      ...getSitesSiteIdGatewaysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdGatewaysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdGatewaysIdQueryKey>
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
      ...getSitesSiteIdGatewaysIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSitesSiteIdGatewaysIdMutationKey() {
  return ['sites', '/sites/:site_id/gateways/:id', 'PUT'] as const
}

export function getPutSitesSiteIdGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>,
    ) {
      return parseResponse(client.sites[':site_id'].gateways[':id'].$put(args, options))
    },
  })
}

export function usePutSitesSiteIdGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSitesSiteIdGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSitesSiteIdGatewaysIdMutationKey() {
  return ['sites', '/sites/:site_id/gateways/:id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].gateways[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteIdGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSitesSiteIdGatewaysIdMutationKey() {
  return ['sites', '/sites/:site_id/gateways/:id', 'PATCH'] as const
}

export function getPatchSitesSiteIdGatewaysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSitesSiteIdGatewaysIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>,
    ) {
      return parseResponse(client.sites[':site_id'].gateways[':id'].$patch(args, options))
    },
  })
}

export function usePatchSitesSiteIdGatewaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSitesSiteIdGatewaysIdMutationOptions<TError, TOnMutateResult>(
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

export function getSantaPostureProvidersQueryKey(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
) {
  return ['santa_posture_providers', '/santa_posture_providers', args] as const
}

export function getSantaPostureProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSantaPostureProvidersQueryKey>
  >({
    queryKey: getSantaPostureProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.santa_posture_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSantaPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSantaPostureProvidersQueryKey>
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
      ...getSantaPostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSantaPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.santa_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSantaPostureProvidersQueryKey>
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
      ...getSantaPostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGithubAuthProvidersIdQueryKey(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
) {
  return ['github_auth_providers', '/github_auth_providers/:id', args] as const
}

export function getGithubAuthProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGithubAuthProvidersIdQueryKey>
  >({
    queryKey: getGithubAuthProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github_auth_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGithubAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGithubAuthProvidersIdQueryKey>
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
      ...getGithubAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGithubAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGithubAuthProvidersIdQueryKey>
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
      ...getGithubAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostureFieldsQueryKey(
  args: InferRequestType<typeof client.posture_fields.$get>,
) {
  return ['posture_fields', '/posture_fields', args] as const
}

export function getPostureFieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.posture_fields.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostureFieldsQueryKey>
  >({
    queryKey: getPostureFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posture_fields.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePostureFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.posture_fields.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPostureFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostureFieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostureFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.posture_fields.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPostureFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostureFieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOidcAuthProvidersQueryKey(
  args: InferRequestType<typeof client.oidc_auth_providers.$get>,
) {
  return ['oidc_auth_providers', '/oidc_auth_providers', args] as const
}

export function getOidcAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oidc_auth_providers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOidcAuthProvidersQueryKey>
  >({
    queryKey: getOidcAuthProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oidc_auth_providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOidcAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oidc_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOidcAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOidcAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOidcAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oidc_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOidcAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOidcAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSitesSiteIdGatewayTokensIdMutationKey() {
  return ['sites', '/sites/:site_id/gateway_tokens/:id', 'DELETE'] as const
}

export function getDeleteSitesSiteIdGatewayTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdGatewayTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].gateway_tokens[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdGatewayTokensId<
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
                ReturnType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteIdGatewayTokensIdMutationOptions<
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

export function getSentinelonePostureProvidersQueryKey(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
) {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers', args] as const
}

export function getSentinelonePostureProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentinelonePostureProvidersQueryKey>
  >({
    queryKey: getSentinelonePostureProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sentinelone_posture_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSentinelonePostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentinelonePostureProvidersQueryKey>
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
      ...getSentinelonePostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSentinelonePostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sentinelone_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentinelonePostureProvidersQueryKey>
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
      ...getSentinelonePostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getActorsIdQueryKey(args: InferRequestType<(typeof client.actors)[':id']['$get']>) {
  return ['actors', '/actors/:id', args] as const
}

export function getActorsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.actors)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActorsIdQueryKey>
  >({
    queryKey: getActorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActorsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutActorsIdMutationKey() {
  return ['actors', '/actors/:id', 'PUT'] as const
}

export function getPutActorsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.actors)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actors)[':id']['$put']>) {
      return parseResponse(client.actors[':id'].$put(args, options))
    },
  })
}

export function usePutActorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.actors)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutActorsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteActorsIdMutationKey() {
  return ['actors', '/actors/:id', 'DELETE'] as const
}

export function getDeleteActorsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actors)[':id']['$delete']>) {
      return parseResponse(client.actors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteActorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.actors)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActorsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchActorsIdMutationKey() {
  return ['actors', '/actors/:id', 'PATCH'] as const
}

export function getPatchActorsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.actors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchActorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actors)[':id']['$patch']>) {
      return parseResponse(client.actors[':id'].$patch(args, options))
    },
  })
}

export function usePatchActorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.actors)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchActorsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutClientsIdVerifyMutationKey() {
  return ['clients', '/clients/:id/verify', 'PUT'] as const
}

export function getPutClientsIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['verify']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id']['verify']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientsIdVerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id']['verify']['$put']>) {
      return parseResponse(client.clients[':id'].verify.$put(args, options))
    },
  })
}

export function usePutClientsIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id']['verify']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id']['verify']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClientsIdVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getActorsActorIdClientTokensQueryKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
) {
  return ['actors', '/actors/:actor_id/client_tokens', args] as const
}

export function getActorsActorIdClientTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdClientTokensQueryKey>
  >({
    queryKey: getActorsActorIdClientTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actors[':actor_id'].client_tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActorsActorIdClientTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdClientTokensQueryKey>
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
      ...getActorsActorIdClientTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActorsActorIdClientTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdClientTokensQueryKey>
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
      ...getActorsActorIdClientTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActorsActorIdClientTokensMutationKey() {
  return ['actors', '/actors/:actor_id/client_tokens', 'POST'] as const
}

export function getPostActorsActorIdClientTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActorsActorIdClientTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>,
    ) {
      return parseResponse(client.actors[':actor_id'].client_tokens.$post(args, options))
    },
  })
}

export function usePostActorsActorIdClientTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActorsActorIdClientTokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteActorsActorIdClientTokensMutationKey() {
  return ['actors', '/actors/:actor_id/client_tokens', 'DELETE'] as const
}

export function getDeleteActorsActorIdClientTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActorsActorIdClientTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>,
    ) {
      return parseResponse(client.actors[':actor_id'].client_tokens.$delete(args, options))
    },
  })
}

export function useDeleteActorsActorIdClientTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActorsActorIdClientTokensMutationOptions<
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

export function getActorsActorIdClientTokensIdQueryKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
) {
  return ['actors', '/actors/:actor_id/client_tokens/:id', args] as const
}

export function getActorsActorIdClientTokensIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdClientTokensIdQueryKey>
  >({
    queryKey: getActorsActorIdClientTokensIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actors[':actor_id'].client_tokens[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActorsActorIdClientTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdClientTokensIdQueryKey>
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
      ...getActorsActorIdClientTokensIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActorsActorIdClientTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdClientTokensIdQueryKey>
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
      ...getActorsActorIdClientTokensIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteActorsActorIdClientTokensIdMutationKey() {
  return ['actors', '/actors/:actor_id/client_tokens/:id', 'DELETE'] as const
}

export function getDeleteActorsActorIdClientTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActorsActorIdClientTokensIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.actors[':actor_id'].client_tokens[':id'].$delete(args, options))
    },
  })
}

export function useDeleteActorsActorIdClientTokensId<
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
                ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActorsActorIdClientTokensIdMutationOptions<
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

export function getEmailOtpAuthProvidersQueryKey(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
) {
  return ['email_otp_auth_providers', '/email_otp_auth_providers', args] as const
}

export function getEmailOtpAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailOtpAuthProvidersQueryKey>
  >({
    queryKey: getEmailOtpAuthProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email_otp_auth_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailOtpAuthProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailOtpAuthProvidersQueryKey>
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
      ...getEmailOtpAuthProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailOtpAuthProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.email_otp_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailOtpAuthProvidersQueryKey>
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
      ...getEmailOtpAuthProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEntraAuthProvidersQueryKey(
  args: InferRequestType<typeof client.entra_auth_providers.$get>,
) {
  return ['entra_auth_providers', '/entra_auth_providers', args] as const
}

export function getEntraAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entra_auth_providers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntraAuthProvidersQueryKey>
  >({
    queryKey: getEntraAuthProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entra_auth_providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEntraAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.entra_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEntraAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEntraAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.entra_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEntraAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIruPostureProvidersIdQueryKey(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
) {
  return ['iru_posture_providers', '/iru_posture_providers/:id', args] as const
}

export function getIruPostureProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIruPostureProvidersIdQueryKey>
  >({
    queryKey: getIruPostureProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.iru_posture_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIruPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIruPostureProvidersIdQueryKey>
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
      ...getIruPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIruPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIruPostureProvidersIdQueryKey>
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
      ...getIruPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIruPostureProvidersIdMutationKey() {
  return ['iru_posture_providers', '/iru_posture_providers/:id', 'PUT'] as const
}

export function getPutIruPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.iru_posture_providers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIruPostureProvidersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$put']>) {
      return parseResponse(client.iru_posture_providers[':id'].$put(args, options))
    },
  })
}

export function usePutIruPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.iru_posture_providers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIruPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIruPostureProvidersIdMutationKey() {
  return ['iru_posture_providers', '/iru_posture_providers/:id', 'DELETE'] as const
}

export function getDeleteIruPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.iru_posture_providers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIruPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$delete']>,
    ) {
      return parseResponse(client.iru_posture_providers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteIruPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.iru_posture_providers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIruPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchIruPostureProvidersIdMutationKey() {
  return ['iru_posture_providers', '/iru_posture_providers/:id', 'PATCH'] as const
}

export function getPatchIruPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.iru_posture_providers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIruPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.iru_posture_providers)[':id']['$patch']>,
    ) {
      return parseResponse(client.iru_posture_providers[':id'].$patch(args, options))
    },
  })
}

export function usePatchIruPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.iru_posture_providers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIruPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getSitesIdQueryKey(args: InferRequestType<(typeof client.sites)[':id']['$get']>) {
  return ['sites', '/sites/:id', args] as const
}

export function getSitesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.sites)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSitesIdQueryKey>
  >({
    queryKey: getSitesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSitesIdMutationKey() {
  return ['sites', '/sites/:id', 'PUT'] as const
}

export function getPutSitesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.sites)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':id']['$put']>) {
      return parseResponse(client.sites[':id'].$put(args, options))
    },
  })
}

export function usePutSitesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSitesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSitesIdMutationKey() {
  return ['sites', '/sites/:id', 'DELETE'] as const
}

export function getDeleteSitesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.sites)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':id']['$delete']>) {
      return parseResponse(client.sites[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSitesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchSitesIdMutationKey() {
  return ['sites', '/sites/:id', 'PATCH'] as const
}

export function getPatchSitesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.sites)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSitesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':id']['$patch']>) {
      return parseResponse(client.sites[':id'].$patch(args, options))
    },
  })
}

export function usePatchSitesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSitesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGoogleAuthProvidersQueryKey(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
) {
  return ['google_auth_providers', '/google_auth_providers', args] as const
}

export function getGoogleAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleAuthProvidersQueryKey>
  >({
    queryKey: getGoogleAuthProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.google_auth_providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGoogleAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGoogleAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGoogleAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.google_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGoogleAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPoliciesIdQueryKey(
  args: InferRequestType<(typeof client.policies)[':id']['$get']>,
) {
  return ['policies', '/policies/:id', args] as const
}

export function getPoliciesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.policies)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoliciesIdQueryKey>
  >({
    queryKey: getPoliciesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePoliciesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPoliciesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPoliciesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePoliciesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPoliciesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPoliciesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPoliciesIdMutationKey() {
  return ['policies', '/policies/:id', 'PUT'] as const
}

export function getPutPoliciesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.policies)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPoliciesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policies)[':id']['$put']>) {
      return parseResponse(client.policies[':id'].$put(args, options))
    },
  })
}

export function usePutPoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.policies)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPoliciesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePoliciesIdMutationKey() {
  return ['policies', '/policies/:id', 'DELETE'] as const
}

export function getDeletePoliciesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePoliciesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policies)[':id']['$delete']>) {
      return parseResponse(client.policies[':id'].$delete(args, options))
    },
  })
}

export function useDeletePoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.policies)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePoliciesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPoliciesIdMutationKey() {
  return ['policies', '/policies/:id', 'PATCH'] as const
}

export function getPatchPoliciesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPoliciesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policies)[':id']['$patch']>) {
      return parseResponse(client.policies[':id'].$patch(args, options))
    },
  })
}

export function usePatchPoliciesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.policies)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPoliciesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIntunePostureProvidersIdQueryKey(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
) {
  return ['intune_posture_providers', '/intune_posture_providers/:id', args] as const
}

export function getIntunePostureProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntunePostureProvidersIdQueryKey>
  >({
    queryKey: getIntunePostureProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intune_posture_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntunePostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntunePostureProvidersIdQueryKey>
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
      ...getIntunePostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntunePostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntunePostureProvidersIdQueryKey>
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
      ...getIntunePostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutIntunePostureProvidersIdMutationKey() {
  return ['intune_posture_providers', '/intune_posture_providers/:id', 'PUT'] as const
}

export function getPutIntunePostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.intune_posture_providers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIntunePostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$put']>,
    ) {
      return parseResponse(client.intune_posture_providers[':id'].$put(args, options))
    },
  })
}

export function usePutIntunePostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.intune_posture_providers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIntunePostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteIntunePostureProvidersIdMutationKey() {
  return ['intune_posture_providers', '/intune_posture_providers/:id', 'DELETE'] as const
}

export function getDeleteIntunePostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.intune_posture_providers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIntunePostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$delete']>,
    ) {
      return parseResponse(client.intune_posture_providers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteIntunePostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.intune_posture_providers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIntunePostureProvidersIdMutationOptions<
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

export function getPatchIntunePostureProvidersIdMutationKey() {
  return ['intune_posture_providers', '/intune_posture_providers/:id', 'PATCH'] as const
}

export function getPatchIntunePostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.intune_posture_providers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIntunePostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.intune_posture_providers)[':id']['$patch']>,
    ) {
      return parseResponse(client.intune_posture_providers[':id'].$patch(args, options))
    },
  })
}

export function usePatchIntunePostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.intune_posture_providers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIntunePostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getX509AuthProviderQueryKey() {
  return ['x509_auth_provider', '/x509_auth_provider'] as const
}

export function getX509AuthProviderQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getX509AuthProviderQueryKey>
  >({
    queryKey: getX509AuthProviderQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.x509_auth_provider.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useX509AuthProvider<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getX509AuthProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getX509AuthProviderQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseX509AuthProvider<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getX509AuthProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getX509AuthProviderQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getResourcesQueryKey(args: InferRequestType<typeof client.resources.$get>) {
  return ['resources', '/resources', args] as const
}

export function getResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResourcesQueryKey>
  >({
    queryKey: getResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.resources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostResourcesMutationKey() {
  return ['resources', '/resources', 'POST'] as const
}

export function getPostResourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$post>>>>>,
    TError,
    InferRequestType<typeof client.resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resources.$post>) {
      return parseResponse(client.resources.$post(args, options))
    },
  })
}

export function usePostResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.resources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostResourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActorsActorIdExternalIdentitiesIdQueryKey(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
) {
  return ['actors', '/actors/:actor_id/external_identities/:id', args] as const
}

export function getActorsActorIdExternalIdentitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdExternalIdentitiesIdQueryKey>
  >({
    queryKey: getActorsActorIdExternalIdentitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actors[':actor_id'].external_identities[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActorsActorIdExternalIdentitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.actors)[':actor_id']['external_identities'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdExternalIdentitiesIdQueryKey>
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
      ...getActorsActorIdExternalIdentitiesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActorsActorIdExternalIdentitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.actors)[':actor_id']['external_identities'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActorsActorIdExternalIdentitiesIdQueryKey>
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
      ...getActorsActorIdExternalIdentitiesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteActorsActorIdExternalIdentitiesIdMutationKey() {
  return ['actors', '/actors/:actor_id/external_identities/:id', 'DELETE'] as const
}

export function getDeleteActorsActorIdExternalIdentitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActorsActorIdExternalIdentitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.actors[':actor_id'].external_identities[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteActorsActorIdExternalIdentitiesId<
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
                  (typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.actors)[':actor_id']['external_identities'][':id']['$delete']
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
  const mutationDefaults = getDeleteActorsActorIdExternalIdentitiesIdMutationOptions<
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

export function getSentineloneDevicesQueryKey(
  args: InferRequestType<typeof client.sentinelone_devices.$get>,
) {
  return ['sentinelone_devices', '/sentinelone_devices', args] as const
}

export function getSentineloneDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sentinelone_devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSentineloneDevicesQueryKey>
  >({
    queryKey: getSentineloneDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sentinelone_devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSentineloneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sentinelone_devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentineloneDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSentineloneDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSentineloneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sentinelone_devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentineloneDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSentineloneDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOktaAuthProvidersQueryKey(
  args: InferRequestType<typeof client.okta_auth_providers.$get>,
) {
  return ['okta_auth_providers', '/okta_auth_providers', args] as const
}

export function getOktaAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.okta_auth_providers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOktaAuthProvidersQueryKey>
  >({
    queryKey: getOktaAuthProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.okta_auth_providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOktaAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.okta_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOktaAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOktaAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOktaAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.okta_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOktaAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOktaAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIntuneDevicesIdQueryKey(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
) {
  return ['intune_devices', '/intune_devices/:id', args] as const
}

export function getIntuneDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntuneDevicesIdQueryKey>
  >({
    queryKey: getIntuneDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intune_devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIntuneDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntuneDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIntuneDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIntuneDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.intune_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntuneDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIntuneDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSophosPostureProvidersQueryKey(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
) {
  return ['sophos_posture_providers', '/sophos_posture_providers', args] as const
}

export function getSophosPostureProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSophosPostureProvidersQueryKey>
  >({
    queryKey: getSophosPostureProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sophos_posture_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSophosPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSophosPostureProvidersQueryKey>
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
      ...getSophosPostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSophosPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sophos_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSophosPostureProvidersQueryKey>
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
      ...getSophosPostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDefenderPostureProvidersIdQueryKey(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
) {
  return ['defender_posture_providers', '/defender_posture_providers/:id', args] as const
}

export function getDefenderPostureProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderPostureProvidersIdQueryKey>
  >({
    queryKey: getDefenderPostureProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.defender_posture_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDefenderPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderPostureProvidersIdQueryKey>
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
      ...getDefenderPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDefenderPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderPostureProvidersIdQueryKey>
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
      ...getDefenderPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDefenderPostureProvidersIdMutationKey() {
  return ['defender_posture_providers', '/defender_posture_providers/:id', 'PUT'] as const
}

export function getPutDefenderPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDefenderPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$put']>,
    ) {
      return parseResponse(client.defender_posture_providers[':id'].$put(args, options))
    },
  })
}

export function usePutDefenderPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.defender_posture_providers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDefenderPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDefenderPostureProvidersIdMutationKey() {
  return ['defender_posture_providers', '/defender_posture_providers/:id', 'DELETE'] as const
}

export function getDeleteDefenderPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDefenderPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$delete']>,
    ) {
      return parseResponse(client.defender_posture_providers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteDefenderPostureProvidersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.defender_posture_providers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDefenderPostureProvidersIdMutationOptions<
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

export function getPatchDefenderPostureProvidersIdMutationKey() {
  return ['defender_posture_providers', '/defender_posture_providers/:id', 'PATCH'] as const
}

export function getPatchDefenderPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDefenderPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.defender_posture_providers)[':id']['$patch']>,
    ) {
      return parseResponse(client.defender_posture_providers[':id'].$patch(args, options))
    },
  })
}

export function usePatchDefenderPostureProvidersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.defender_posture_providers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDefenderPostureProvidersIdMutationOptions<
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

export function getIntunePostureProvidersQueryKey(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
) {
  return ['intune_posture_providers', '/intune_posture_providers', args] as const
}

export function getIntunePostureProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntunePostureProvidersQueryKey>
  >({
    queryKey: getIntunePostureProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intune_posture_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIntunePostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntunePostureProvidersQueryKey>
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
      ...getIntunePostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIntunePostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.intune_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIntunePostureProvidersQueryKey>
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
      ...getIntunePostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGroupsGroupIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
) {
  return ['groups', '/groups/:group_id/memberships', args] as const
}

export function getGroupsGroupIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
  >({
    queryKey: getGroupsGroupIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':group_id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsGroupIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
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
      ...getGroupsGroupIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsGroupIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
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
      ...getGroupsGroupIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGroupsGroupIdMembershipsMutationKey() {
  return ['groups', '/groups/:group_id/memberships', 'PUT'] as const
}

export function getPutGroupsGroupIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$put']>,
    ) {
      return parseResponse(client.groups[':group_id'].memberships.$put(args, options))
    },
  })
}

export function usePutGroupsGroupIdMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':group_id']['memberships']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsGroupIdMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchGroupsGroupIdMembershipsMutationKey() {
  return ['groups', '/groups/:group_id/memberships', 'PATCH'] as const
}

export function getPatchGroupsGroupIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsGroupIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$patch']>,
    ) {
      return parseResponse(client.groups[':group_id'].memberships.$patch(args, options))
    },
  })
}

export function usePatchGroupsGroupIdMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':group_id']['memberships']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupsGroupIdMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getGoogleDirectoriesQueryKey(
  args: InferRequestType<typeof client.google_directories.$get>,
) {
  return ['google_directories', '/google_directories', args] as const
}

export function getGoogleDirectoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.google_directories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleDirectoriesQueryKey>
  >({
    queryKey: getGoogleDirectoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.google_directories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGoogleDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.google_directories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGoogleDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGoogleDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.google_directories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGoogleDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSentineloneDevicesSentineloneAgentQueryKey(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
) {
  return ['sentinelone_devices', '/sentinelone_devices/:sentinelone_agent', args] as const
}

export function getSentineloneDevicesSentineloneAgentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentineloneDevicesSentineloneAgentQueryKey>
  >({
    queryKey: getSentineloneDevicesSentineloneAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sentinelone_devices[':sentinelone_agent'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSentineloneDevicesSentineloneAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentineloneDevicesSentineloneAgentQueryKey>
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
      ...getSentineloneDevicesSentineloneAgentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSentineloneDevicesSentineloneAgent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentineloneDevicesSentineloneAgentQueryKey>
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
      ...getSentineloneDevicesSentineloneAgentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSantaPostureProvidersIdQueryKey(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
) {
  return ['santa_posture_providers', '/santa_posture_providers/:id', args] as const
}

export function getSantaPostureProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSantaPostureProvidersIdQueryKey>
  >({
    queryKey: getSantaPostureProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.santa_posture_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSantaPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSantaPostureProvidersIdQueryKey>
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
      ...getSantaPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSantaPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSantaPostureProvidersIdQueryKey>
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
      ...getSantaPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSantaPostureProvidersIdMutationKey() {
  return ['santa_posture_providers', '/santa_posture_providers/:id', 'PUT'] as const
}

export function getPutSantaPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.santa_posture_providers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSantaPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$put']>,
    ) {
      return parseResponse(client.santa_posture_providers[':id'].$put(args, options))
    },
  })
}

export function usePutSantaPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.santa_posture_providers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSantaPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSantaPostureProvidersIdMutationKey() {
  return ['santa_posture_providers', '/santa_posture_providers/:id', 'DELETE'] as const
}

export function getDeleteSantaPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.santa_posture_providers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSantaPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$delete']>,
    ) {
      return parseResponse(client.santa_posture_providers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSantaPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.santa_posture_providers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSantaPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSantaPostureProvidersIdMutationKey() {
  return ['santa_posture_providers', '/santa_posture_providers/:id', 'PATCH'] as const
}

export function getPatchSantaPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.santa_posture_providers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSantaPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.santa_posture_providers)[':id']['$patch']>,
    ) {
      return parseResponse(client.santa_posture_providers[':id'].$patch(args, options))
    },
  })
}

export function usePatchSantaPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.santa_posture_providers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSantaPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getGoogleDirectoriesIdQueryKey(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
) {
  return ['google_directories', '/google_directories/:id', args] as const
}

export function getGoogleDirectoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleDirectoriesIdQueryKey>
  >({
    queryKey: getGoogleDirectoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.google_directories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGoogleDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGoogleDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGoogleDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.google_directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGoogleDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSantaDevicesQueryKey(args: InferRequestType<typeof client.santa_devices.$get>) {
  return ['santa_devices', '/santa_devices', args] as const
}

export function getSantaDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.santa_devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSantaDevicesQueryKey>
  >({
    queryKey: getSantaDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.santa_devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSantaDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.santa_devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSantaDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSantaDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSantaDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.santa_devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSantaDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSantaDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutClientsIdUnverifyMutationKey() {
  return ['clients', '/clients/:id/unverify', 'PUT'] as const
}

export function getPutClientsIdUnverifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clients)[':id']['unverify']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clients)[':id']['unverify']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClientsIdUnverifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clients)[':id']['unverify']['$put']>) {
      return parseResponse(client.clients[':id'].unverify.$put(args, options))
    },
  })
}

export function usePutClientsIdUnverify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clients)[':id']['unverify']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clients)[':id']['unverify']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClientsIdUnverifyMutationOptions<TError, TOnMutateResult>(
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

export function getResourcesIdQueryKey(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
) {
  return ['resources', '/resources/:id', args] as const
}

export function getResourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesIdQueryKey>
  >({
    queryKey: getResourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useResourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutResourcesIdMutationKey() {
  return ['resources', '/resources/:id', 'PUT'] as const
}

export function getPutResourcesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutResourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resources)[':id']['$put']>) {
      return parseResponse(client.resources[':id'].$put(args, options))
    },
  })
}

export function usePutResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.resources)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutResourcesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteResourcesIdMutationKey() {
  return ['resources', '/resources/:id', 'DELETE'] as const
}

export function getDeleteResourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resources)[':id']['$delete']>) {
      return parseResponse(client.resources[':id'].$delete(args, options))
    },
  })
}

export function useDeleteResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.resources)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteResourcesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchResourcesIdMutationKey() {
  return ['resources', '/resources/:id', 'PATCH'] as const
}

export function getPatchResourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchResourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.resources)[':id']['$patch']>) {
      return parseResponse(client.resources[':id'].$patch(args, options))
    },
  })
}

export function usePatchResourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.resources)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchResourcesIdMutationOptions<TError, TOnMutateResult>(
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

export function getEntraDirectoriesQueryKey(
  args: InferRequestType<typeof client.entra_directories.$get>,
) {
  return ['entra_directories', '/entra_directories', args] as const
}

export function getEntraDirectoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entra_directories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntraDirectoriesQueryKey>
  >({
    queryKey: getEntraDirectoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entra_directories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEntraDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.entra_directories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEntraDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEntraDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.entra_directories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEntraDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEntraAuthProvidersIdQueryKey(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
) {
  return ['entra_auth_providers', '/entra_auth_providers/:id', args] as const
}

export function getEntraAuthProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntraAuthProvidersIdQueryKey>
  >({
    queryKey: getEntraAuthProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entra_auth_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEntraAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraAuthProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEntraAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEntraAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraAuthProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEntraAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClientsQueryKey(args: InferRequestType<typeof client.clients.$get>) {
  return ['clients', '/clients', args] as const
}

export function getClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClientsQueryKey>
  >({
    queryKey: getClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.clients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clients.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClientsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSophosDevicesIdQueryKey(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
) {
  return ['sophos_devices', '/sophos_devices/:id', args] as const
}

export function getSophosDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSophosDevicesIdQueryKey>
  >({
    queryKey: getSophosDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sophos_devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSophosDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSophosDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSophosDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSophosDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sophos_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSophosDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSophosDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSitesSiteIdGatewayTokensMutationKey() {
  return ['sites', '/sites/:site_id/gateway_tokens', 'POST'] as const
}

export function getPostSitesSiteIdGatewayTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdGatewayTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].gateway_tokens.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdGatewayTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteIdGatewayTokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSitesSiteIdGatewayTokensMutationKey() {
  return ['sites', '/sites/:site_id/gateway_tokens', 'DELETE'] as const
}

export function getDeleteSitesSiteIdGatewayTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdGatewayTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>,
    ) {
      return parseResponse(client.sites[':site_id'].gateway_tokens.$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdGatewayTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':site_id']['gateway_tokens']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteIdGatewayTokensMutationOptions<
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

export function getIruDevicesIdQueryKey(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
) {
  return ['iru_devices', '/iru_devices/:id', args] as const
}

export function getIruDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIruDevicesIdQueryKey>
  >({
    queryKey: getIruDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.iru_devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIruDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIruDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIruDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIruDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.iru_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIruDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIruDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIntuneDevicesQueryKey(
  args: InferRequestType<typeof client.intune_devices.$get>,
) {
  return ['intune_devices', '/intune_devices', args] as const
}

export function getIntuneDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.intune_devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntuneDevicesQueryKey>
  >({
    queryKey: getIntuneDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.intune_devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIntuneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.intune_devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIntuneDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIntuneDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIntuneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.intune_devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIntuneDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIntuneDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getResourcesResourceIdPoolMembersQueryKey(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
) {
  return ['resources', '/resources/:resource_id/pool_members', args] as const
}

export function getResourcesResourceIdPoolMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesResourceIdPoolMembersQueryKey>
  >({
    queryKey: getResourcesResourceIdPoolMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':resource_id'].pool_members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResourcesResourceIdPoolMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesResourceIdPoolMembersQueryKey>
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
      ...getResourcesResourceIdPoolMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesResourceIdPoolMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesResourceIdPoolMembersQueryKey>
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
      ...getResourcesResourceIdPoolMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutResourcesResourceIdPoolMembersMutationKey() {
  return ['resources', '/resources/:resource_id/pool_members', 'PUT'] as const
}

export function getPutResourcesResourceIdPoolMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutResourcesResourceIdPoolMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$put']>,
    ) {
      return parseResponse(client.resources[':resource_id'].pool_members.$put(args, options))
    },
  })
}

export function usePutResourcesResourceIdPoolMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutResourcesResourceIdPoolMembersMutationOptions<
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

export function getPatchResourcesResourceIdPoolMembersMutationKey() {
  return ['resources', '/resources/:resource_id/pool_members', 'PATCH'] as const
}

export function getPatchResourcesResourceIdPoolMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchResourcesResourceIdPoolMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>,
    ) {
      return parseResponse(client.resources[':resource_id'].pool_members.$patch(args, options))
    },
  })
}

export function usePatchResourcesResourceIdPoolMembers<
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
                ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchResourcesResourceIdPoolMembersMutationOptions<
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

export function getGithubAuthProvidersQueryKey(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
) {
  return ['github_auth_providers', '/github_auth_providers', args] as const
}

export function getGithubAuthProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGithubAuthProvidersQueryKey>
  >({
    queryKey: getGithubAuthProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github_auth_providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGithubAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github_auth_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGithubAuthProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubAuthProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEntraDirectoriesIdQueryKey(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
) {
  return ['entra_directories', '/entra_directories/:id', args] as const
}

export function getEntraDirectoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntraDirectoriesIdQueryKey>
  >({
    queryKey: getEntraDirectoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entra_directories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEntraDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEntraDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEntraDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entra_directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntraDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEntraDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSentinelonePostureProvidersIdQueryKey(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
) {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', args] as const
}

export function getSentinelonePostureProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentinelonePostureProvidersIdQueryKey>
  >({
    queryKey: getSentinelonePostureProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sentinelone_posture_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSentinelonePostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentinelonePostureProvidersIdQueryKey>
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
      ...getSentinelonePostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSentinelonePostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSentinelonePostureProvidersIdQueryKey>
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
      ...getSentinelonePostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSentinelonePostureProvidersIdMutationKey() {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', 'PUT'] as const
}

export function getPutSentinelonePostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSentinelonePostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$put']>,
    ) {
      return parseResponse(client.sentinelone_posture_providers[':id'].$put(args, options))
    },
  })
}

export function usePutSentinelonePostureProvidersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSentinelonePostureProvidersIdMutationOptions<
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

export function getDeleteSentinelonePostureProvidersIdMutationKey() {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', 'DELETE'] as const
}

export function getDeleteSentinelonePostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSentinelonePostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>,
    ) {
      return parseResponse(client.sentinelone_posture_providers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSentinelonePostureProvidersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSentinelonePostureProvidersIdMutationOptions<
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

export function getPatchSentinelonePostureProvidersIdMutationKey() {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers/:id', 'PATCH'] as const
}

export function getPatchSentinelonePostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSentinelonePostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>,
    ) {
      return parseResponse(client.sentinelone_posture_providers[':id'].$patch(args, options))
    },
  })
}

export function usePatchSentinelonePostureProvidersId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSentinelonePostureProvidersIdMutationOptions<
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

export function getEmailOtpAuthProvidersIdQueryKey(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
) {
  return ['email_otp_auth_providers', '/email_otp_auth_providers/:id', args] as const
}

export function getEmailOtpAuthProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailOtpAuthProvidersIdQueryKey>
  >({
    queryKey: getEmailOtpAuthProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email_otp_auth_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEmailOtpAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailOtpAuthProvidersIdQueryKey>
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
      ...getEmailOtpAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEmailOtpAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailOtpAuthProvidersIdQueryKey>
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
      ...getEmailOtpAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOktaDirectoriesIdQueryKey(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
) {
  return ['okta_directories', '/okta_directories/:id', args] as const
}

export function getOktaDirectoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOktaDirectoriesIdQueryKey>
  >({
    queryKey: getOktaDirectoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.okta_directories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOktaDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOktaDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOktaDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOktaDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.okta_directories)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOktaDirectoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOktaDirectoriesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIruDevicesQueryKey(args: InferRequestType<typeof client.iru_devices.$get>) {
  return ['iru_devices', '/iru_devices', args] as const
}

export function getIruDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.iru_devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIruDevicesQueryKey>
  >({
    queryKey: getIruDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.iru_devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIruDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.iru_devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIruDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIruDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIruDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.iru_devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIruDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIruDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsIdQueryKey(args: InferRequestType<(typeof client.groups)[':id']['$get']>) {
  return ['groups', '/groups/:id', args] as const
}

export function getGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.groups)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdQueryKey>
  >({
    queryKey: getGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupsIdMutationKey() {
  return ['groups', '/groups/:id', 'PUT'] as const
}

export function getPutGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['$put']>) {
      return parseResponse(client.groups[':id'].$put(args, options))
    },
  })
}

export function usePutGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteGroupsIdMutationKey() {
  return ['groups', '/groups/:id', 'DELETE'] as const
}

export function getDeleteGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['$delete']>) {
      return parseResponse(client.groups[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchGroupsIdMutationKey() {
  return ['groups', '/groups/:id', 'PATCH'] as const
}

export function getPatchGroupsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id']['$patch']>) {
      return parseResponse(client.groups[':id'].$patch(args, options))
    },
  })
}

export function usePatchGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLogsLogIdQueryKey(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
) {
  return ['logs', '/logs/:log_id', args] as const
}

export function getLogsLogIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.logs)[':log_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogIdQueryKey>
  >({
    queryKey: getLogsLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':log_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsLogId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsLogId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':log_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOidcAuthProvidersIdQueryKey(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
) {
  return ['oidc_auth_providers', '/oidc_auth_providers/:id', args] as const
}

export function getOidcAuthProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOidcAuthProvidersIdQueryKey>
  >({
    queryKey: getOidcAuthProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oidc_auth_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOidcAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOidcAuthProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOidcAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOidcAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOidcAuthProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOidcAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteIdGatewaysQueryKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
) {
  return ['sites', '/sites/:site_id/gateways', args] as const
}

export function getSitesSiteIdGatewaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdGatewaysQueryKey>
  >({
    queryKey: getSitesSiteIdGatewaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':site_id'].gateways.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIdGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdGatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdGatewaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdGatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdGatewaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSitesSiteIdGatewaysMutationKey() {
  return ['sites', '/sites/:site_id/gateways', 'POST'] as const
}

export function getPostSitesSiteIdGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':site_id']['gateways']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdGatewaysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':site_id']['gateways']['$post']>,
    ) {
      return parseResponse(client.sites[':site_id'].gateways.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdGateways<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':site_id']['gateways']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteIdGatewaysMutationOptions<TError, TOnMutateResult>(
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

export function getDefenderDevicesQueryKey(
  args: InferRequestType<typeof client.defender_devices.$get>,
) {
  return ['defender_devices', '/defender_devices', args] as const
}

export function getDefenderDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.defender_devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderDevicesQueryKey>
  >({
    queryKey: getDefenderDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.defender_devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDefenderDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.defender_devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDefenderDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDefenderDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.defender_devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDefenderDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPoliciesQueryKey(args: InferRequestType<typeof client.policies.$get>) {
  return ['policies', '/policies', args] as const
}

export function getPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoliciesQueryKey>
  >({
    queryKey: getPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.policies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.policies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPoliciesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPoliciesMutationKey() {
  return ['policies', '/policies', 'POST'] as const
}

export function getPostPoliciesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$post>>>>>,
    TError,
    InferRequestType<typeof client.policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.policies.$post>) {
      return parseResponse(client.policies.$post(args, options))
    },
  })
}

export function usePostPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.policies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPoliciesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLogsQueryKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function getLogsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >({
    queryKey: getLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSophosDevicesQueryKey(
  args: InferRequestType<typeof client.sophos_devices.$get>,
) {
  return ['sophos_devices', '/sophos_devices', args] as const
}

export function getSophosDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sophos_devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSophosDevicesQueryKey>
  >({
    queryKey: getSophosDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sophos_devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSophosDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sophos_devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSophosDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSophosDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSophosDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sophos_devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSophosDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSophosDevicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getActorsQueryKey(args: InferRequestType<typeof client.actors.$get>) {
  return ['actors', '/actors', args] as const
}

export function getActorsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.actors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActorsQueryKey>
  >({
    queryKey: getActorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.actors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.actors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostActorsMutationKey() {
  return ['actors', '/actors', 'POST'] as const
}

export function getPostActorsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$post>>>>>,
    TError,
    InferRequestType<typeof client.actors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostActorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.actors.$post>) {
      return parseResponse(client.actors.$post(args, options))
    },
  })
}

export function usePostActors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$post>>>>>,
        TError,
        InferRequestType<typeof client.actors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActorsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOktaDirectoriesQueryKey(
  args: InferRequestType<typeof client.okta_directories.$get>,
) {
  return ['okta_directories', '/okta_directories', args] as const
}

export function getOktaDirectoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.okta_directories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOktaDirectoriesQueryKey>
  >({
    queryKey: getOktaDirectoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.okta_directories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOktaDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.okta_directories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOktaDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOktaDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOktaDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.okta_directories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOktaDirectoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOktaDirectoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSantaDevicesIdQueryKey(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
) {
  return ['santa_devices', '/santa_devices/:id', args] as const
}

export function getSantaDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSantaDevicesIdQueryKey>
  >({
    queryKey: getSantaDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.santa_devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSantaDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSantaDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSantaDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSantaDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.santa_devices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSantaDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSantaDevicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIruPostureProvidersQueryKey(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
) {
  return ['iru_posture_providers', '/iru_posture_providers', args] as const
}

export function getIruPostureProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIruPostureProvidersQueryKey>
  >({
    queryKey: getIruPostureProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.iru_posture_providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIruPostureProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIruPostureProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIruPostureProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIruPostureProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.iru_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIruPostureProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIruPostureProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOktaAuthProvidersIdQueryKey(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
) {
  return ['okta_auth_providers', '/okta_auth_providers/:id', args] as const
}

export function getOktaAuthProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOktaAuthProvidersIdQueryKey>
  >({
    queryKey: getOktaAuthProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.okta_auth_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOktaAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOktaAuthProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOktaAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOktaAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOktaAuthProvidersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOktaAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDefenderDevicesDefenderDeviceQueryKey(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
) {
  return ['defender_devices', '/defender_devices/:defender_device', args] as const
}

export function getDefenderDevicesDefenderDeviceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderDevicesDefenderDeviceQueryKey>
  >({
    queryKey: getDefenderDevicesDefenderDeviceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.defender_devices[':defender_device'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDefenderDevicesDefenderDevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderDevicesDefenderDeviceQueryKey>
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
      ...getDefenderDevicesDefenderDeviceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDefenderDevicesDefenderDevice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderDevicesDefenderDeviceQueryKey>
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
      ...getDefenderDevicesDefenderDeviceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSophosPostureProvidersIdQueryKey(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
) {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', args] as const
}

export function getSophosPostureProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSophosPostureProvidersIdQueryKey>
  >({
    queryKey: getSophosPostureProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sophos_posture_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSophosPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSophosPostureProvidersIdQueryKey>
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
      ...getSophosPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSophosPostureProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSophosPostureProvidersIdQueryKey>
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
      ...getSophosPostureProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSophosPostureProvidersIdMutationKey() {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', 'PUT'] as const
}

export function getPutSophosPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sophos_posture_providers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSophosPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$put']>,
    ) {
      return parseResponse(client.sophos_posture_providers[':id'].$put(args, options))
    },
  })
}

export function usePutSophosPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sophos_posture_providers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSophosPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSophosPostureProvidersIdMutationKey() {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', 'DELETE'] as const
}

export function getDeleteSophosPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sophos_posture_providers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSophosPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$delete']>,
    ) {
      return parseResponse(client.sophos_posture_providers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSophosPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sophos_posture_providers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSophosPostureProvidersIdMutationOptions<
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

export function getPatchSophosPostureProvidersIdMutationKey() {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', 'PATCH'] as const
}

export function getPatchSophosPostureProvidersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sophos_posture_providers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSophosPostureProvidersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sophos_posture_providers)[':id']['$patch']>,
    ) {
      return parseResponse(client.sophos_posture_providers[':id'].$patch(args, options))
    },
  })
}

export function usePatchSophosPostureProvidersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sophos_posture_providers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSophosPostureProvidersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSitesSiteIdGatewaysGatewayIdTokenRotateMutationKey() {
  return ['sites', '/sites/:site_id/gateways/:gateway_id/token/rotate', 'POST'] as const
}

export function getPostSitesSiteIdGatewaysGatewayIdTokenRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdGatewaysGatewayIdTokenRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].gateways[':gateway_id'].token.rotate.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdGatewaysGatewayIdTokenRotate<
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
                  (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['rotate']['$post']
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
  const mutationDefaults = getPostSitesSiteIdGatewaysGatewayIdTokenRotateMutationOptions<
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

export function getPostSitesSiteIdGatewaysGatewayIdTokenMutationKey() {
  return ['sites', '/sites/:site_id/gateways/:gateway_id/token', 'POST'] as const
}

export function getPostSitesSiteIdGatewaysGatewayIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdGatewaysGatewayIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
      >,
    ) {
      return parseResponse(
        client.sites[':site_id'].gateways[':gateway_id'].token.$post(args, options),
      )
    },
  })
}

export function usePostSitesSiteIdGatewaysGatewayIdToken<
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
                  (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.sites)[':site_id']['gateways'][':gateway_id']['token']['$post']
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
  const mutationDefaults = getPostSitesSiteIdGatewaysGatewayIdTokenMutationOptions<
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

export function getDefenderPostureProvidersQueryKey(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
) {
  return ['defender_posture_providers', '/defender_posture_providers', args] as const
}

export function getDefenderPostureProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderPostureProvidersQueryKey>
  >({
    queryKey: getDefenderPostureProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.defender_posture_providers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDefenderPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderPostureProvidersQueryKey>
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
      ...getDefenderPostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDefenderPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.defender_posture_providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefenderPostureProvidersQueryKey>
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
      ...getDefenderPostureProvidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGoogleAuthProvidersIdQueryKey(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
) {
  return ['google_auth_providers', '/google_auth_providers/:id', args] as const
}

export function getGoogleAuthProvidersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleAuthProvidersIdQueryKey>
  >({
    queryKey: getGoogleAuthProvidersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.google_auth_providers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGoogleAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleAuthProvidersIdQueryKey>
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
      ...getGoogleAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGoogleAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGoogleAuthProvidersIdQueryKey>
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
      ...getGoogleAuthProvidersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
