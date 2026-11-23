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

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
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
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
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

export function getActorsActorIdExternalIdentitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>
  >,
) {
  return ['actors', '/actors/:actor_id/external_identities', toValue(args)] as const
}

export function getActorsActorIdExternalIdentitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActorsActorIdExternalIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actors[':actor_id'].external_identities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActorsActorIdExternalIdentitiesQueryKey>
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
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['external_identities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdExternalIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActorsActorIdExternalIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actors[':actor_id'].external_identities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id']['$get']>>,
) {
  return ['clients', '/clients/:id', toValue(args)] as const
}

export function getClientsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClientsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clients)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getClientsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clients)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClientsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>
  >,
) {
  return ['sites', '/sites/:site_id/gateways/:id', toValue(args)] as const
}

export function getSitesSiteIdGatewaysIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdGatewaysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].gateways[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdGatewaysIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdGatewaysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdGatewaysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].gateways[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.santa_posture_providers.$get>>,
) {
  return ['santa_posture_providers', '/santa_posture_providers', toValue(args)] as const
}

export function getSantaPostureProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.santa_posture_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSantaPostureProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.santa_posture_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSantaPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.santa_posture_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
            >
          >,
          ReturnType<typeof getSantaPostureProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.santa_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSantaPostureProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSantaPostureProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.santa_posture_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGithubAuthProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>>,
) {
  return ['github_auth_providers', '/github_auth_providers/:id', toValue(args)] as const
}

export function getGithubAuthProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGithubAuthProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github_auth_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.github_auth_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGithubAuthProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.github_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGithubAuthProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGithubAuthProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.github_auth_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostureFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posture_fields.$get>>,
) {
  return ['posture_fields', '/posture_fields', toValue(args)] as const
}

export function getPostureFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posture_fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostureFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posture_fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostureFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.posture_fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
          >,
          ReturnType<typeof getPostureFieldsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.posture_fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostureFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostureFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posture_fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOidcAuthProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oidc_auth_providers.$get>>,
) {
  return ['oidc_auth_providers', '/oidc_auth_providers', toValue(args)] as const
}

export function getOidcAuthProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oidc_auth_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOidcAuthProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oidc_auth_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOidcAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oidc_auth_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>
            >
          >,
          ReturnType<typeof getOidcAuthProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oidc_auth_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOidcAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOidcAuthProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oidc_auth_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentinelone_posture_providers.$get>>,
) {
  return ['sentinelone_posture_providers', '/sentinelone_posture_providers', toValue(args)] as const
}

export function getSentinelonePostureProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentinelone_posture_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentinelonePostureProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sentinelone_posture_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSentinelonePostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentinelone_posture_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>
              >
            >
          >,
          ReturnType<typeof getSentinelonePostureProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentinelonePostureProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentinelonePostureProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sentinelone_posture_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actors)[':id']['$get']>>,
) {
  return ['actors', '/actors/:id', toValue(args)] as const
}

export function getActorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActorsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getActorsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actors)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>
  >,
) {
  return ['actors', '/actors/:actor_id/client_tokens', toValue(args)] as const
}

export function getActorsActorIdClientTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActorsActorIdClientTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actors[':actor_id'].client_tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActorsActorIdClientTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdClientTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActorsActorIdClientTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actors[':actor_id'].client_tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>
  >,
) {
  return ['actors', '/actors/:actor_id/client_tokens/:id', toValue(args)] as const
}

export function getActorsActorIdClientTokensIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActorsActorIdClientTokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actors[':actor_id'].client_tokens[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActorsActorIdClientTokensIdQueryKey>
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
          Awaited<ReturnType<(typeof client.actors)[':actor_id']['client_tokens'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdClientTokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActorsActorIdClientTokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actors[':actor_id'].client_tokens[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.email_otp_auth_providers.$get>>,
) {
  return ['email_otp_auth_providers', '/email_otp_auth_providers', toValue(args)] as const
}

export function getEmailOtpAuthProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email_otp_auth_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailOtpAuthProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.email_otp_auth_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailOtpAuthProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email_otp_auth_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
            >
          >,
          ReturnType<typeof getEmailOtpAuthProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.email_otp_auth_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailOtpAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailOtpAuthProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.email_otp_auth_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntraAuthProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entra_auth_providers.$get>>,
) {
  return ['entra_auth_providers', '/entra_auth_providers', toValue(args)] as const
}

export function getEntraAuthProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entra_auth_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntraAuthProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entra_auth_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntraAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entra_auth_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>
            >
          >,
          ReturnType<typeof getEntraAuthProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_auth_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntraAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntraAuthProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entra_auth_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIruPostureProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>>,
) {
  return ['iru_posture_providers', '/iru_posture_providers/:id', toValue(args)] as const
}

export function getIruPostureProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIruPostureProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.iru_posture_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.iru_posture_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIruPostureProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.iru_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIruPostureProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIruPostureProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.iru_posture_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSitesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':id']['$get']>>,
) {
  return ['sites', '/sites/:id', toValue(args)] as const
}

export function getSitesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSitesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSitesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSitesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.google_auth_providers.$get>>,
) {
  return ['google_auth_providers', '/google_auth_providers', toValue(args)] as const
}

export function getGoogleAuthProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.google_auth_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGoogleAuthProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.google_auth_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGoogleAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.google_auth_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
            >
          >,
          ReturnType<typeof getGoogleAuthProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.google_auth_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGoogleAuthProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.google_auth_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoliciesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':id']['$get']>>,
) {
  return ['policies', '/policies/:id', toValue(args)] as const
}

export function getPoliciesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoliciesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPoliciesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPoliciesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>>,
) {
  return ['intune_posture_providers', '/intune_posture_providers/:id', toValue(args)] as const
}

export function getIntunePostureProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntunePostureProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intune_posture_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.intune_posture_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntunePostureProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.intune_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntunePostureProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntunePostureProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intune_posture_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getX509AuthProviderQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getX509AuthProviderQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.x509_auth_provider.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useX509AuthProvider<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>
            >
          >,
          ReturnType<typeof getX509AuthProviderQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.x509_auth_provider.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getX509AuthProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getX509AuthProviderQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.x509_auth_provider.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
) {
  return ['resources', '/resources', toValue(args)] as const
}

export function getResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
          >,
          ReturnType<typeof getResourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.resources.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
  >,
) {
  return ['actors', '/actors/:actor_id/external_identities/:id', toValue(args)] as const
}

export function getActorsActorIdExternalIdentitiesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActorsActorIdExternalIdentitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actors[':actor_id'].external_identities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
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
                    (typeof client.actors)[':actor_id']['external_identities'][':id']['$get']
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
                    (typeof client.actors)[':actor_id']['external_identities'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getActorsActorIdExternalIdentitiesIdQueryKey>
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
            ReturnType<(typeof client.actors)[':actor_id']['external_identities'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActorsActorIdExternalIdentitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActorsActorIdExternalIdentitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actors[':actor_id'].external_identities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentinelone_devices.$get>>,
) {
  return ['sentinelone_devices', '/sentinelone_devices', toValue(args)] as const
}

export function getSentineloneDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentinelone_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentineloneDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sentinelone_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSentineloneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sentinelone_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>
            >
          >,
          ReturnType<typeof getSentineloneDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sentinelone_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSentineloneDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentineloneDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sentinelone_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOktaAuthProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.okta_auth_providers.$get>>,
) {
  return ['okta_auth_providers', '/okta_auth_providers', toValue(args)] as const
}

export function getOktaAuthProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.okta_auth_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOktaAuthProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.okta_auth_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOktaAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.okta_auth_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>
            >
          >,
          ReturnType<typeof getOktaAuthProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_auth_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOktaAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOktaAuthProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.okta_auth_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntuneDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.intune_devices)[':id']['$get']>>,
) {
  return ['intune_devices', '/intune_devices/:id', toValue(args)] as const
}

export function getIntuneDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.intune_devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntuneDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intune_devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntuneDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.intune_devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIntuneDevicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.intune_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntuneDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntuneDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intune_devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSophosPostureProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sophos_posture_providers.$get>>,
) {
  return ['sophos_posture_providers', '/sophos_posture_providers', toValue(args)] as const
}

export function getSophosPostureProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sophos_posture_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSophosPostureProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sophos_posture_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSophosPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sophos_posture_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
            >
          >,
          ReturnType<typeof getSophosPostureProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sophos_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSophosPostureProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSophosPostureProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sophos_posture_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDefenderPostureProvidersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>
  >,
) {
  return ['defender_posture_providers', '/defender_posture_providers/:id', toValue(args)] as const
}

export function getDefenderPostureProvidersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDefenderPostureProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.defender_posture_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.defender_posture_providers)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDefenderPostureProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.defender_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderPostureProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDefenderPostureProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.defender_posture_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.intune_posture_providers.$get>>,
) {
  return ['intune_posture_providers', '/intune_posture_providers', toValue(args)] as const
}

export function getIntunePostureProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intune_posture_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntunePostureProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intune_posture_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntunePostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intune_posture_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
            >
          >,
          ReturnType<typeof getIntunePostureProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.intune_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntunePostureProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntunePostureProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intune_posture_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsGroupIdMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>
  >,
) {
  return ['groups', '/groups/:group_id/memberships', toValue(args)] as const
}

export function getGroupsGroupIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':group_id'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':group_id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':group_id'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.google_directories.$get>>,
) {
  return ['google_directories', '/google_directories', toValue(args)] as const
}

export function getGoogleDirectoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.google_directories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGoogleDirectoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.google_directories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGoogleDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.google_directories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>
            >
          >,
          ReturnType<typeof getGoogleDirectoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.google_directories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleDirectoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGoogleDirectoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.google_directories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSentineloneDevicesSentineloneAgentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>
  >,
) {
  return ['sentinelone_devices', '/sentinelone_devices/:sentinelone_agent', toValue(args)] as const
}

export function getSentineloneDevicesSentineloneAgentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentineloneDevicesSentineloneAgentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sentinelone_devices[':sentinelone_agent'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>
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
                  ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSentineloneDevicesSentineloneAgentQueryKey>
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
          Awaited<ReturnType<(typeof client.sentinelone_devices)[':sentinelone_agent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentineloneDevicesSentineloneAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentineloneDevicesSentineloneAgentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sentinelone_devices[':sentinelone_agent'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSantaPostureProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>>,
) {
  return ['santa_posture_providers', '/santa_posture_providers/:id', toValue(args)] as const
}

export function getSantaPostureProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSantaPostureProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.santa_posture_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.santa_posture_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSantaPostureProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.santa_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSantaPostureProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSantaPostureProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.santa_posture_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.google_directories)[':id']['$get']>>,
) {
  return ['google_directories', '/google_directories/:id', toValue(args)] as const
}

export function getGoogleDirectoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.google_directories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGoogleDirectoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.google_directories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGoogleDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.google_directories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGoogleDirectoriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.google_directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleDirectoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGoogleDirectoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.google_directories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSantaDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.santa_devices.$get>>,
) {
  return ['santa_devices', '/santa_devices', toValue(args)] as const
}

export function getSantaDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.santa_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSantaDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.santa_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSantaDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.santa_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
          >,
          ReturnType<typeof getSantaDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.santa_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSantaDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSantaDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.santa_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':id']['$get']>>,
) {
  return ['resources', '/resources/:id', toValue(args)] as const
}

export function getResourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getResourcesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.entra_directories.$get>>,
) {
  return ['entra_directories', '/entra_directories', toValue(args)] as const
}

export function getEntraDirectoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entra_directories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntraDirectoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entra_directories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntraDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.entra_directories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>
            >
          >,
          ReturnType<typeof getEntraDirectoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entra_directories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEntraDirectoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntraDirectoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entra_directories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntraAuthProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>>,
) {
  return ['entra_auth_providers', '/entra_auth_providers/:id', toValue(args)] as const
}

export function getEntraAuthProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntraAuthProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entra_auth_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntraAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entra_auth_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntraAuthProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.entra_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntraAuthProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntraAuthProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entra_auth_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
) {
  return ['clients', '/clients', toValue(args)] as const
}

export function getClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.clients.$get>>,
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
      queryKey: computed(() => getClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSophosDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sophos_devices)[':id']['$get']>>,
) {
  return ['sophos_devices', '/sophos_devices/:id', toValue(args)] as const
}

export function getSophosDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sophos_devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSophosDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sophos_devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSophosDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sophos_devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSophosDevicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sophos_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSophosDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSophosDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sophos_devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.iru_devices)[':id']['$get']>>,
) {
  return ['iru_devices', '/iru_devices/:id', toValue(args)] as const
}

export function getIruDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.iru_devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIruDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.iru_devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIruDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.iru_devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIruDevicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.iru_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIruDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIruDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.iru_devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntuneDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intune_devices.$get>>,
) {
  return ['intune_devices', '/intune_devices', toValue(args)] as const
}

export function getIntuneDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intune_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntuneDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.intune_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntuneDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.intune_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
          >,
          ReturnType<typeof getIntuneDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.intune_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIntuneDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntuneDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.intune_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesResourceIdPoolMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>
  >,
) {
  return ['resources', '/resources/:resource_id/pool_members', toValue(args)] as const
}

export function getResourcesResourceIdPoolMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesResourceIdPoolMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':resource_id'].pool_members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>
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
                  ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesResourceIdPoolMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesResourceIdPoolMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesResourceIdPoolMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':resource_id'].pool_members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources)[':resource_id']['pool_members']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.resources)[':resource_id']['pool_members']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.github_auth_providers.$get>>,
) {
  return ['github_auth_providers', '/github_auth_providers', toValue(args)] as const
}

export function getGithubAuthProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github_auth_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGithubAuthProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.github_auth_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGithubAuthProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.github_auth_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
            >
          >,
          ReturnType<typeof getGithubAuthProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.github_auth_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGithubAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGithubAuthProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.github_auth_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEntraDirectoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entra_directories)[':id']['$get']>>,
) {
  return ['entra_directories', '/entra_directories/:id', toValue(args)] as const
}

export function getEntraDirectoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entra_directories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEntraDirectoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.entra_directories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEntraDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.entra_directories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEntraDirectoriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.entra_directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntraDirectoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEntraDirectoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.entra_directories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSentinelonePostureProvidersIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>
  >,
) {
  return [
    'sentinelone_posture_providers',
    '/sentinelone_posture_providers/:id',
    toValue(args),
  ] as const
}

export function getSentinelonePostureProvidersIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentinelonePostureProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sentinelone_posture_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sentinelone_posture_providers)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSentinelonePostureProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sentinelone_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentinelonePostureProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentinelonePostureProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sentinelone_posture_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>>,
) {
  return ['email_otp_auth_providers', '/email_otp_auth_providers/:id', toValue(args)] as const
}

export function getEmailOtpAuthProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailOtpAuthProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.email_otp_auth_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.email_otp_auth_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmailOtpAuthProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.email_otp_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailOtpAuthProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailOtpAuthProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.email_otp_auth_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOktaDirectoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.okta_directories)[':id']['$get']>>,
) {
  return ['okta_directories', '/okta_directories/:id', toValue(args)] as const
}

export function getOktaDirectoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.okta_directories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOktaDirectoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.okta_directories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOktaDirectoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.okta_directories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOktaDirectoriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.okta_directories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOktaDirectoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOktaDirectoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.okta_directories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIruDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.iru_devices.$get>>,
) {
  return ['iru_devices', '/iru_devices', toValue(args)] as const
}

export function getIruDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.iru_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIruDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.iru_devices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIruDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.iru_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>
          >,
          ReturnType<typeof getIruDevicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIruDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIruDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.iru_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['$get']>>,
) {
  return ['groups', '/groups/:id', toValue(args)] as const
}

export function getGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['$get']>>,
) {
  return ['logs', '/logs/:log_id', toValue(args)] as const
}

export function getLogsLogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':log_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLogId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>
            >
          >,
          ReturnType<typeof getLogsLogIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':log_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOidcAuthProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>>,
) {
  return ['oidc_auth_providers', '/oidc_auth_providers/:id', toValue(args)] as const
}

export function getOidcAuthProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOidcAuthProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oidc_auth_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOidcAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.oidc_auth_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOidcAuthProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.oidc_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOidcAuthProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOidcAuthProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oidc_auth_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdGatewaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>>,
) {
  return ['sites', '/sites/:site_id/gateways', toValue(args)] as const
}

export function getSitesSiteIdGatewaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdGatewaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':site_id'].gateways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':site_id']['gateways']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdGatewaysQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':site_id']['gateways']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdGatewaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdGatewaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':site_id'].gateways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.defender_devices.$get>>,
) {
  return ['defender_devices', '/defender_devices', toValue(args)] as const
}

export function getDefenderDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.defender_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDefenderDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.defender_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDefenderDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.defender_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>
            >
          >,
          ReturnType<typeof getDefenderDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.defender_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDefenderDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.defender_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
) {
  return ['policies', '/policies', toValue(args)] as const
}

export function getPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
          >,
          ReturnType<typeof getPoliciesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.policies.$post>,
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

export function getLogsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>) {
  return ['logs', '/logs', toValue(args)] as const
}

export function getLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          ReturnType<typeof getLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSophosDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sophos_devices.$get>>,
) {
  return ['sophos_devices', '/sophos_devices', toValue(args)] as const
}

export function getSophosDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sophos_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSophosDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sophos_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSophosDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sophos_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
          >,
          ReturnType<typeof getSophosDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sophos_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSophosDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSophosDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sophos_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actors.$get>>,
) {
  return ['actors', '/actors', toValue(args)] as const
}

export function getActorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActors<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
          ReturnType<typeof getActorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.actors.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.okta_directories.$get>>,
) {
  return ['okta_directories', '/okta_directories', toValue(args)] as const
}

export function getOktaDirectoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.okta_directories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOktaDirectoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.okta_directories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOktaDirectories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.okta_directories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>
            >
          >,
          ReturnType<typeof getOktaDirectoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.okta_directories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOktaDirectoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOktaDirectoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.okta_directories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSantaDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.santa_devices)[':id']['$get']>>,
) {
  return ['santa_devices', '/santa_devices/:id', toValue(args)] as const
}

export function getSantaDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.santa_devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSantaDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.santa_devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSantaDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.santa_devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSantaDevicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.santa_devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSantaDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSantaDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.santa_devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIruPostureProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.iru_posture_providers.$get>>,
) {
  return ['iru_posture_providers', '/iru_posture_providers', toValue(args)] as const
}

export function getIruPostureProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.iru_posture_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIruPostureProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.iru_posture_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIruPostureProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.iru_posture_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
            >
          >,
          ReturnType<typeof getIruPostureProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.iru_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIruPostureProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIruPostureProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.iru_posture_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOktaAuthProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>>,
) {
  return ['okta_auth_providers', '/okta_auth_providers/:id', toValue(args)] as const
}

export function getOktaAuthProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOktaAuthProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.okta_auth_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOktaAuthProvidersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.okta_auth_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOktaAuthProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.okta_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOktaAuthProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOktaAuthProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.okta_auth_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDefenderDevicesDefenderDeviceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>
  >,
) {
  return ['defender_devices', '/defender_devices/:defender_device', toValue(args)] as const
}

export function getDefenderDevicesDefenderDeviceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDefenderDevicesDefenderDeviceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.defender_devices[':defender_device'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.defender_devices)[':defender_device']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDefenderDevicesDefenderDeviceQueryKey>
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
          Awaited<ReturnType<(typeof client.defender_devices)[':defender_device']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderDevicesDefenderDeviceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDefenderDevicesDefenderDeviceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.defender_devices[':defender_device'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSophosPostureProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>>,
) {
  return ['sophos_posture_providers', '/sophos_posture_providers/:id', toValue(args)] as const
}

export function getSophosPostureProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSophosPostureProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sophos_posture_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sophos_posture_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSophosPostureProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sophos_posture_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSophosPostureProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSophosPostureProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sophos_posture_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.defender_posture_providers.$get>>,
) {
  return ['defender_posture_providers', '/defender_posture_providers', toValue(args)] as const
}

export function getDefenderPostureProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.defender_posture_providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDefenderPostureProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.defender_posture_providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDefenderPostureProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.defender_posture_providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.defender_posture_providers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.defender_posture_providers.$get>>
              >
            >
          >,
          ReturnType<typeof getDefenderPostureProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.defender_posture_providers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefenderPostureProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDefenderPostureProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.defender_posture_providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGoogleAuthProvidersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>>,
) {
  return ['google_auth_providers', '/google_auth_providers/:id', toValue(args)] as const
}

export function getGoogleAuthProvidersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGoogleAuthProvidersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.google_auth_providers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.google_auth_providers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGoogleAuthProvidersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.google_auth_providers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGoogleAuthProvidersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGoogleAuthProvidersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.google_auth_providers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
