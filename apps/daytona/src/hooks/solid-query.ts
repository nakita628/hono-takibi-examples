import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getAuditKey() {
  return ['audit'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDockerRegistryKey() {
  return ['docker-registry'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getObjectStorageKey() {
  return ['object-storage'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPreviewKey() {
  return ['preview'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getRunnersKey() {
  return ['runners'] as const
}

export function getSandboxKey() {
  return ['sandbox'] as const
}

export function getSharedRegionsKey() {
  return ['shared-regions'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getToolboxKey() {
  return ['toolbox'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiKeysQueryKey(args: InferRequestType<(typeof client)['api-keys']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['api-keys', '/api-keys', keyArgs] as const
}

export function getApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['api-keys']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >({
    queryKey: getApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['api-keys'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['api-keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiKeysMutationKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys']['$post']>) {
      return parseResponse(client['api-keys'].$post(args, options))
    },
  })
}

export function createPostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-keys']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiKeysCurrentQueryKey(
  args: InferRequestType<(typeof client)['api-keys']['current']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api-keys', '/api-keys/current', keyArgs] as const
}

export function getApiKeysCurrentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['api-keys']['current']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysCurrentQueryKey>
  >({
    queryKey: getApiKeysCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['api-keys'].current.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeysCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['api-keys']['current']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysCurrentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeysCurrentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiKeysNameQueryKey(
  args: InferRequestType<(typeof client)['api-keys'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api-keys', '/api-keys/:name', keyArgs] as const
}

export function getApiKeysNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['api-keys'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysNameQueryKey>
  >({
    queryKey: getApiKeysNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['api-keys'][':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiKeysName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['api-keys'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiKeysNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKeysNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiKeysNameMutationKey() {
  return ['api-keys', '/api-keys/:name', 'DELETE'] as const
}

export function getDeleteApiKeysNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['api-keys'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys'][':name']['$delete']>) {
      return parseResponse(client['api-keys'][':name'].$delete(args, options))
    },
  })
}

export function createDeleteApiKeysName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['api-keys'][':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['api-keys'][':name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiKeysNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiKeysUserIdNameMutationKey() {
  return ['api-keys', '/api-keys/:userId/:name', 'DELETE'] as const
}

export function getDeleteApiKeysUserIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-keys'][':userId'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['api-keys'][':userId'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysUserIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['api-keys'][':userId'][':name']['$delete']>,
    ) {
      return parseResponse(client['api-keys'][':userId'][':name'].$delete(args, options))
    },
  })
}

export function createDeleteApiKeysUserIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['api-keys'][':userId'][':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['api-keys'][':userId'][':name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiKeysUserIdNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsInvitationsQueryKey() {
  return ['organizations', '/organizations/invitations'] as const
}

export function getOrganizationsInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsInvitationsQueryKey>
  >({
    queryKey: getOrganizationsInvitationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.invitations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organizations.invitations.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsInvitationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationsInvitationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrganizationsInvitationsCountQueryKey() {
  return ['organizations', '/organizations/invitations/count'] as const
}

export function getOrganizationsInvitationsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsInvitationsCountQueryKey>
  >({
    queryKey: getOrganizationsInvitationsCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.invitations.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsInvitationsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsInvitationsCountQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsInvitationsCountQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsInvitationsInvitationIdAcceptMutationKey() {
  return ['organizations', '/organizations/invitations/:invitationId/accept', 'POST'] as const
}

export function getPostOrganizationsInvitationsInvitationIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations.invitations)[':invitationId']['accept']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations.invitations)[':invitationId']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsInvitationsInvitationIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations.invitations)[':invitationId']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations.invitations[':invitationId'].accept.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsInvitationsInvitationIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations.invitations)[':invitationId']['accept']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations.invitations)[':invitationId']['accept']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsInvitationsInvitationIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrganizationsInvitationsInvitationIdDeclineMutationKey() {
  return ['organizations', '/organizations/invitations/:invitationId/decline', 'POST'] as const
}

export function getPostOrganizationsInvitationsInvitationIdDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsInvitationsInvitationIdDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations.invitations[':invitationId'].decline.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsInvitationsInvitationIdDecline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations.invitations)[':invitationId']['decline']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsInvitationsInvitationIdDeclineMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsQueryKey() {
  return ['organizations', '/organizations'] as const
}

export function getOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >({
    queryKey: getOrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function getPostOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$post>) {
      return parseResponse(client.organizations.$post(args, options))
    },
  })
}

export function createPostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchOrganizationsOrganizationIdDefaultRegionMutationKey() {
  return ['organizations', '/organizations/:organizationId/default-region', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdDefaultRegionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['default-region']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['default-region']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdDefaultRegionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['default-region']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId']['default-region'].$patch(args, options),
      )
    },
  })
}

export function createPatchOrganizationsOrganizationIdDefaultRegion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['default-region']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['default-region']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrganizationsOrganizationIdDefaultRegionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId', args] as const
}

export function getOrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdMutationKey() {
  return ['organizations', '/organizations/:organizationId', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['$delete']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].$delete(args, options))
    },
  })
}

export function createDeleteOrganizationsOrganizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsOrganizationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdUsageQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/usage', args] as const
}

export function getOrganizationsOrganizationIdUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdUsageQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].usage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdUsageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrganizationIdUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchOrganizationsOrganizationIdQuotaMutationKey() {
  return ['organizations', '/organizations/:organizationId/quota', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdQuotaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['quota']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['quota']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdQuotaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['quota']['$patch']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].quota.$patch(args, options))
    },
  })
}

export function createPatchOrganizationsOrganizationIdQuota<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.organizations)[':organizationId']['quota']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['quota']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrganizationsOrganizationIdQuotaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchOrganizationsOrganizationIdQuotaRegionIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/quota/:regionId', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdQuotaRegionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].quota[':regionId'].$patch(args, options),
      )
    },
  })
}

export function createPatchOrganizationsOrganizationIdQuotaRegionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['quota'][':regionId']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdLeaveMutationKey() {
  return ['organizations', '/organizations/:organizationId/leave', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['leave']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['leave']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].leave.$post(args, options))
    },
  })
}

export function createPostOrganizationsOrganizationIdLeave<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.organizations)[':organizationId']['leave']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['leave']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdLeaveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdSuspendMutationKey() {
  return ['organizations', '/organizations/:organizationId/suspend', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['suspend']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['suspend']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].suspend.$post(args, options))
    },
  })
}

export function createPostOrganizationsOrganizationIdSuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.organizations)[':organizationId']['suspend']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['suspend']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdSuspendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdUnsuspendMutationKey() {
  return ['organizations', '/organizations/:organizationId/unsuspend', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdUnsuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['unsuspend']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['unsuspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdUnsuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['unsuspend']['$post']
      >,
    ) {
      return parseResponse(client.organizations[':organizationId'].unsuspend.$post(args, options))
    },
  })
}

export function createPostOrganizationsOrganizationIdUnsuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['unsuspend']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['unsuspend']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdUnsuspendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey(
  args: InferRequestType<
    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/otel-config/by-sandbox-auth-token/:authToken',
    args,
  ] as const
}

export function getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey>
  >({
    queryKey: getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations['otel-config']['by-sandbox-auth-token'][':authToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOtelConfigBySandboxAuthTokenAuthToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOtelConfigQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/otel-config', args] as const
}

export function getOrganizationsOrganizationIdOtelConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOtelConfigQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOtelConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId']['otel-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOtelConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['otel-config']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organizationId']['otel-config']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOtelConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrganizationIdOtelConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOtelConfigMutationKey() {
  return ['organizations', '/organizations/:organizationId/otel-config', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdOtelConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOtelConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['otel-config']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId']['otel-config'].$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOtelConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['otel-config']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsOrganizationIdOtelConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdOtelConfigMutationKey() {
  return ['organizations', '/organizations/:organizationId/otel-config', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdOtelConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOtelConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['otel-config']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId']['otel-config'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOtelConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['otel-config']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['otel-config']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsOrganizationIdOtelConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/sandbox-default-limited-network-egress',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId']['sandbox-default-limited-network-egress'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgress<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['sandbox-default-limited-network-egress']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdExperimentalConfigMutationKey() {
  return ['organizations', '/organizations/:organizationId/experimental-config', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdExperimentalConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['experimental-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['experimental-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdExperimentalConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['experimental-config']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId']['experimental-config'].$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdExperimentalConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organizationId']['experimental-config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['experimental-config']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsOrganizationIdExperimentalConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdRolesQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/roles', args] as const
}

export function getOrganizationsOrganizationIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdRolesQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdRolesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrganizationIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdRolesMutationKey() {
  return ['organizations', '/organizations/:organizationId/roles', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$post']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].roles.$post(args, options))
    },
  })
}

export function createPostOrganizationsOrganizationIdRoles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['roles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdRolesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdRolesRoleIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/roles/:roleId', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].roles[':roleId'].$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['roles'][':roleId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsOrganizationIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdRolesRoleIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/roles/:roleId', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].roles[':roleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['roles'][':roleId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsOrganizationIdRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdUsersQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/users', args] as const
}

export function getOrganizationsOrganizationIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdUsersQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrganizationIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdUsersUserIdAccessMutationKey() {
  return ['organizations', '/organizations/:organizationId/users/:userId/access', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdUsersUserIdAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdUsersUserIdAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].users[':userId'].access.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdUsersUserIdAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['users'][':userId']['access']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdUsersUserIdAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdUsersUserIdMutationKey() {
  return ['organizations', '/organizations/:organizationId/users/:userId', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].users[':userId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['users'][':userId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsOrganizationIdUsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdInvitationsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId/invitations', args] as const
}

export function getOrganizationsOrganizationIdInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdInvitationsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organizationId'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organizationId']['invitations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organizationId']['invitations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOrganizationsOrganizationIdInvitationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdInvitationsMutationKey() {
  return ['organizations', '/organizations/:organizationId/invitations', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['invitations']['$post']
      >,
    ) {
      return parseResponse(client.organizations[':organizationId'].invitations.$post(args, options))
    },
  })
}

export function createPostOrganizationsOrganizationIdInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organizationId']['invitations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['invitations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdInvitationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdInvitationsInvitationIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/invitations/:invitationId',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdInvitationsInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdInvitationsInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].invitations[':invitationId'].$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdInvitationsInvitationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdInvitationsInvitationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdInvitationsInvitationIdCancelMutationKey() {
  return [
    'organizations',
    '/organizations/:organizationId/invitations/:invitationId/cancel',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdInvitationsInvitationIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdInvitationsInvitationIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organizationId'].invitations[':invitationId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdInvitationsInvitationIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organizationId']['invitations'][':invitationId']['cancel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdInvitationsInvitationIdCancelMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRegionsQueryKey(args: InferRequestType<typeof client.regions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions', keyArgs] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.regions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.regions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRegionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRegionsMutationKey() {
  return ['regions', '/regions', 'POST'] as const
}

export function getPostRegionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$post>>>>>,
    TError,
    InferRequestType<typeof client.regions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.regions.$post>) {
      return parseResponse(client.regions.$post(args, options))
    },
  })
}

export function createPostRegions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.regions.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRegionsIdQueryKey(
  args: InferRequestType<(typeof client.regions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['regions', '/regions/:id', keyArgs] as const
}

export function getRegionsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.regions)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegionsIdQueryKey>
  >({
    queryKey: getRegionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRegionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.regions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegionsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRegionsIdMutationKey() {
  return ['regions', '/regions/:id', 'DELETE'] as const
}

export function getDeleteRegionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.regions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.regions)[':id']['$delete']>) {
      return parseResponse(client.regions[':id'].$delete(args, options))
    },
  })
}

export function createDeleteRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.regions)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRegionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRegionsIdMutationKey() {
  return ['regions', '/regions/:id', 'PATCH'] as const
}

export function getPatchRegionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.regions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRegionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.regions)[':id']['$patch']>) {
      return parseResponse(client.regions[':id'].$patch(args, options))
    },
  })
}

export function createPatchRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.regions)[':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRegionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRegionsIdRegenerateProxyApiKeyMutationKey() {
  return ['regions', '/regions/:id/regenerate-proxy-api-key', 'POST'] as const
}

export function getPostRegionsIdRegenerateProxyApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegionsIdRegenerateProxyApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>,
    ) {
      return parseResponse(client.regions[':id']['regenerate-proxy-api-key'].$post(args, options))
    },
  })
}

export function createPostRegionsIdRegenerateProxyApiKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegionsIdRegenerateProxyApiKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRegionsIdRegenerateSshGatewayApiKeyMutationKey() {
  return ['regions', '/regions/:id/regenerate-ssh-gateway-api-key', 'POST'] as const
}

export function getPostRegionsIdRegenerateSshGatewayApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegionsIdRegenerateSshGatewayApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']
      >,
    ) {
      return parseResponse(
        client.regions[':id']['regenerate-ssh-gateway-api-key'].$post(args, options),
      )
    },
  })
}

export function createPostRegionsIdRegenerateSshGatewayApiKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.regions)[':id']['regenerate-ssh-gateway-api-key']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegionsIdRegenerateSshGatewayApiKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRegionsIdRegenerateSnapshotManagerCredentialsMutationKey() {
  return ['regions', '/regions/:id/regenerate-snapshot-manager-credentials', 'POST'] as const
}

export function getPostRegionsIdRegenerateSnapshotManagerCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRegionsIdRegenerateSnapshotManagerCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
      >,
    ) {
      return parseResponse(
        client.regions[':id']['regenerate-snapshot-manager-credentials'].$post(args, options),
      )
    },
  })
}

export function createPostRegionsIdRegenerateSnapshotManagerCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.regions)[':id']['regenerate-snapshot-manager-credentials']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegionsIdRegenerateSnapshotManagerCredentialsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersAccountProvidersQueryKey() {
  return ['users', '/users/account-providers'] as const
}

export function getUsersAccountProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersAccountProvidersQueryKey>
  >({
    queryKey: getUsersAccountProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users['account-providers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersAccountProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersAccountProvidersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersAccountProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersLinkedAccountsMutationKey() {
  return ['users', '/users/linked-accounts', 'POST'] as const
}

export function getPostUsersLinkedAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)['linked-accounts']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)['linked-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersLinkedAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['linked-accounts']['$post']>) {
      return parseResponse(client.users['linked-accounts'].$post(args, options))
    },
  })
}

export function createPostUsersLinkedAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)['linked-accounts']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)['linked-accounts']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersLinkedAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUsersLinkedAccountsProviderProviderUserIdMutationKey() {
  return ['users', '/users/linked-accounts/:provider/:providerUserId', 'DELETE'] as const
}

export function getDeleteUsersLinkedAccountsProviderProviderUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersLinkedAccountsProviderProviderUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
      >,
    ) {
      return parseResponse(
        client.users['linked-accounts'][':provider'][':providerUserId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteUsersLinkedAccountsProviderProviderUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)['linked-accounts'][':provider'][':providerUserId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersLinkedAccountsProviderProviderUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersMfaSmsEnrollMutationKey() {
  return ['users', '/users/mfa/sms/enroll', 'POST'] as const
}

export function getPostUsersMfaSmsEnrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.mfa.sms.enroll.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMfaSmsEnrollMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.mfa.sms.enroll.$post(undefined, options))
    },
  })
}

export function createPostUsersMfaSmsEnroll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.mfa.sms.enroll.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMfaSmsEnrollMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSharedRegionsQueryKey() {
  return ['shared-regions', '/shared-regions'] as const
}

export function getSharedRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedRegionsQueryKey>
  >({
    queryKey: getSharedRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['shared-regions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSharedRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSharedRegionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSharedRegionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSandboxQueryKey(args: InferRequestType<typeof client.sandbox.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox', keyArgs] as const
}

export function getSandboxQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sandbox.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSandboxQueryKey>
  >({
    queryKey: getSandboxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSandbox<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sandbox.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSandboxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSandboxMutationKey() {
  return ['sandbox', '/sandbox', 'POST'] as const
}

export function getPostSandboxMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$post>>>>>,
    TError,
    InferRequestType<typeof client.sandbox.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.$post>) {
      return parseResponse(client.sandbox.$post(args, options))
    },
  })
}

export function createPostSandbox<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sandbox.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxPaginatedQueryKey(
  args: InferRequestType<typeof client.sandbox.paginated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/paginated', keyArgs] as const
}

export function getSandboxPaginatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sandbox.paginated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxPaginatedQueryKey>
  >({
    queryKey: getSandboxPaginatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox.paginated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSandboxPaginated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sandbox.paginated.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxPaginatedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSandboxPaginatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSandboxForRunnerQueryKey(
  args: InferRequestType<(typeof client.sandbox)['for-runner']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/for-runner', keyArgs] as const
}

export function getSandboxForRunnerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)['for-runner']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxForRunnerQueryKey>
  >({
    queryKey: getSandboxForRunnerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox['for-runner'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSandboxForRunner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)['for-runner']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxForRunnerQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSandboxForRunnerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSandboxSandboxIdOrNameQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName', keyArgs] as const
}

export function getSandboxSandboxIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSandboxSandboxIdOrNameMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName', 'DELETE'] as const
}

export function getDeleteSandboxSandboxIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSandboxSandboxIdOrNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].$delete(args, options))
    },
  })
}

export function createDeleteSandboxSandboxIdOrName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSandboxSandboxIdOrNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameRecoverMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/recover', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].recover.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameRecoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameStartMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/start', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].start.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameStopMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/stop', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].stop.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['stop']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameStopMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNamePauseMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/pause', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNamePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNamePauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].pause.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNamePause<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNamePauseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameResizeMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/resize', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].resize.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameResize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameResizeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSandboxSandboxIdOrNameLabelsMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/labels', 'PUT'] as const
}

export function getPutSandboxSandboxIdOrNameLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSandboxSandboxIdOrNameLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].labels.$put(args, options))
    },
  })
}

export function createPutSandboxSandboxIdOrNameLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSandboxSandboxIdOrNameLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSandboxSandboxIdStateMutationKey() {
  return ['sandbox', '/sandbox/:sandboxId/state', 'PUT'] as const
}

export function getPutSandboxSandboxIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['state']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxId']['state']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSandboxSandboxIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxId']['state']['$put']>,
    ) {
      return parseResponse(client.sandbox[':sandboxId'].state.$put(args, options))
    },
  })
}

export function createPutSandboxSandboxIdState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['state']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxId']['state']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSandboxSandboxIdStateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameBackupMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/backup', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].backup.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameBackupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameSnapshotMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/snapshot', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].snapshot.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameSnapshot<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameSnapshotMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameForkMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/fork', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameForkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameForkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].fork.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameFork<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['fork']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameForkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrNameForksQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/forks', keyArgs] as const
}

export function getSandboxSandboxIdOrNameForksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameForksQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNameForksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].forks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrNameForks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNameForksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNameForksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrNameParentQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/parent', keyArgs] as const
}

export function getSandboxSandboxIdOrNameParentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameParentQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNameParentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].parent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrNameParent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNameParentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNameParentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrNameAncestorsQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/ancestors', keyArgs] as const
}

export function getSandboxSandboxIdOrNameAncestorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameAncestorsQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNameAncestorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].ancestors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrNameAncestors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNameAncestorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNameAncestorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNamePublicIsPublicMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/public/:isPublic', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNamePublicIsPublicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNamePublicIsPublicMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']
      >,
    ) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].public[':isPublic'].$post(args, options),
      )
    },
  })
}

export function createPostSandboxSandboxIdOrNamePublicIsPublic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sandbox)[':sandboxIdOrName']['public'][':isPublic']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNamePublicIsPublicMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdLastActivityMutationKey() {
  return ['sandbox', '/sandbox/:sandboxId/last-activity', 'POST'] as const
}

export function getPostSandboxSandboxIdLastActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdLastActivityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxId']['last-activity'].$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdLastActivity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdLastActivityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameAutostopIntervalMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/autostop/:interval', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameAutostopIntervalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameAutostopIntervalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']
      >,
    ) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].autostop[':interval'].$post(args, options),
      )
    },
  })
}

export function createPostSandboxSandboxIdOrNameAutostopInterval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sandbox)[':sandboxIdOrName']['autostop'][':interval']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameAutostopIntervalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameAutoarchiveIntervalMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/autoarchive/:interval', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameAutoarchiveIntervalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameAutoarchiveIntervalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
      >,
    ) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].autoarchive[':interval'].$post(args, options),
      )
    },
  })
}

export function createPostSandboxSandboxIdOrNameAutoarchiveInterval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sandbox)[':sandboxIdOrName']['autoarchive'][':interval']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameAutoarchiveIntervalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameAutodeleteIntervalMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/autodelete/:interval', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameAutodeleteIntervalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameAutodeleteIntervalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
      >,
    ) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].autodelete[':interval'].$post(args, options),
      )
    },
  })
}

export function createPostSandboxSandboxIdOrNameAutodeleteInterval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sandbox)[':sandboxIdOrName']['autodelete'][':interval']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameAutodeleteIntervalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameNetworkSettingsMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/network-settings', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameNetworkSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameNetworkSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']
      >,
    ) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName']['network-settings'].$post(args, options),
      )
    },
  })
}

export function createPostSandboxSandboxIdOrNameNetworkSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sandbox)[':sandboxIdOrName']['network-settings']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameNetworkSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameArchiveMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/archive', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName'].archive.$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/ports/:port/preview-url', keyArgs] as const
}

export function getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].ports[':port']['preview-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrNamePortsPortPreviewUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/ports/:port/signed-preview-url', keyArgs] as const
}

export function getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrNamePortsPortSignedPreviewUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireMutationKey() {
  return [
    'sandbox',
    '/sandbox/:sandboxIdOrName/ports/:port/signed-preview-url/:token/expire',
    'POST',
  ] as const
}

export function getPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
      >,
    ) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'][
          ':token'
        ].expire.$post(args, options),
      )
    },
  })
}

export function createPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpire<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url'][':token']['expire']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrNameBuildLogsQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/build-logs', keyArgs] as const
}

export function getSandboxSandboxIdOrNameBuildLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNameBuildLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName']['build-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrNameBuildLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNameBuildLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrNameBuildLogsUrlQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxIdOrName/build-logs-url', keyArgs] as const
}

export function getSandboxSandboxIdOrNameBuildLogsUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsUrlQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrNameBuildLogsUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName']['build-logs-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrNameBuildLogsUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsUrlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrNameBuildLogsUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSandboxSandboxIdOrNameSshAccessMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/ssh-access', 'POST'] as const
}

export function getPostSandboxSandboxIdOrNameSshAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxSandboxIdOrNameSshAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName']['ssh-access'].$post(args, options))
    },
  })
}

export function createPostSandboxSandboxIdOrNameSshAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxSandboxIdOrNameSshAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSandboxSandboxIdOrNameSshAccessMutationKey() {
  return ['sandbox', '/sandbox/:sandboxIdOrName/ssh-access', 'DELETE'] as const
}

export function getDeleteSandboxSandboxIdOrNameSshAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSandboxSandboxIdOrNameSshAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>,
    ) {
      return parseResponse(client.sandbox[':sandboxIdOrName']['ssh-access'].$delete(args, options))
    },
  })
}

export function createDeleteSandboxSandboxIdOrNameSshAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSandboxSandboxIdOrNameSshAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSandboxSshAccessValidateQueryKey(
  args: InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/ssh-access/validate', keyArgs] as const
}

export function getSandboxSshAccessValidateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSshAccessValidateQueryKey>
  >({
    queryKey: getSandboxSshAccessValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox['ssh-access'].validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSshAccessValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSshAccessValidateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSshAccessValidateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdToolboxProxyUrlQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/toolbox-proxy-url', keyArgs] as const
}

export function getSandboxSandboxIdToolboxProxyUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdToolboxProxyUrlQueryKey>
  >({
    queryKey: getSandboxSandboxIdToolboxProxyUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId']['toolbox-proxy-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdToolboxProxyUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdToolboxProxyUrlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdToolboxProxyUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdOrganizationQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/organization', keyArgs] as const
}

export function getSandboxSandboxIdOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrganizationQueryKey>
  >({
    queryKey: getSandboxSandboxIdOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdOrganizationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdOrganizationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdRegionQuotaQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/region-quota', keyArgs] as const
}

export function getSandboxSandboxIdRegionQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdRegionQuotaQueryKey>
  >({
    queryKey: getSandboxSandboxIdRegionQuotaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId']['region-quota'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdRegionQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdRegionQuotaQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdRegionQuotaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRunnersQueryKey(args: InferRequestType<typeof client.runners.$get>) {
  const { header: _, ...keyArgs } = args
  return ['runners', '/runners', keyArgs] as const
}

export function getRunnersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.runners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRunnersQueryKey>
  >({
    queryKey: getRunnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.runners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRunners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.runners.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRunnersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRunnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRunnersMutationKey() {
  return ['runners', '/runners', 'POST'] as const
}

export function getPostRunnersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$post>>>>>,
    TError,
    InferRequestType<typeof client.runners.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRunnersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.runners.$post>) {
      return parseResponse(client.runners.$post(args, options))
    },
  })
}

export function createPostRunners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.runners.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRunnersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRunnersMeQueryKey() {
  return ['runners', '/runners/me'] as const
}

export function getRunnersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRunnersMeQueryKey>
  >({
    queryKey: getRunnersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.runners.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRunnersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRunnersMeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRunnersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRunnersBySandboxSandboxIdQueryKey(
  args: InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>,
) {
  return ['runners', '/runners/by-sandbox/:sandboxId', args] as const
}

export function getRunnersBySandboxSandboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersBySandboxSandboxIdQueryKey>
  >({
    queryKey: getRunnersBySandboxSandboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.runners['by-sandbox'][':sandboxId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRunnersBySandboxSandboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRunnersBySandboxSandboxIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRunnersBySandboxSandboxIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRunnersBySnapshotRefQueryKey(
  args: InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>,
) {
  return ['runners', '/runners/by-snapshot-ref', args] as const
}

export function getRunnersBySnapshotRefQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersBySnapshotRefQueryKey>
  >({
    queryKey: getRunnersBySnapshotRefQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.runners['by-snapshot-ref'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRunnersBySnapshotRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRunnersBySnapshotRefQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRunnersBySnapshotRefQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRunnersIdQueryKey(
  args: InferRequestType<(typeof client.runners)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['runners', '/runners/:id', keyArgs] as const
}

export function getRunnersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.runners)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersIdQueryKey>
  >({
    queryKey: getRunnersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.runners[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRunnersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.runners)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRunnersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRunnersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRunnersIdMutationKey() {
  return ['runners', '/runners/:id', 'DELETE'] as const
}

export function getDeleteRunnersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.runners)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRunnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.runners)[':id']['$delete']>) {
      return parseResponse(client.runners[':id'].$delete(args, options))
    },
  })
}

export function createDeleteRunnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.runners)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRunnersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRunnersIdFullQueryKey(
  args: InferRequestType<(typeof client.runners)[':id']['full']['$get']>,
) {
  return ['runners', '/runners/:id/full', args] as const
}

export function getRunnersIdFullQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.runners)[':id']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersIdFullQueryKey>
  >({
    queryKey: getRunnersIdFullQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.runners[':id'].full.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRunnersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.runners)[':id']['full']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRunnersIdFullQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRunnersIdFullQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchRunnersIdSchedulingMutationKey() {
  return ['runners', '/runners/:id/scheduling', 'PATCH'] as const
}

export function getPatchRunnersIdSchedulingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.runners)[':id']['scheduling']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.runners)[':id']['scheduling']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRunnersIdSchedulingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.runners)[':id']['scheduling']['$patch']>,
    ) {
      return parseResponse(client.runners[':id'].scheduling.$patch(args, options))
    },
  })
}

export function createPatchRunnersIdScheduling<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)[':id']['scheduling']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.runners)[':id']['scheduling']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRunnersIdSchedulingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRunnersIdDrainingMutationKey() {
  return ['runners', '/runners/:id/draining', 'PATCH'] as const
}

export function getPatchRunnersIdDrainingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.runners)[':id']['draining']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.runners)[':id']['draining']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRunnersIdDrainingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.runners)[':id']['draining']['$patch']>) {
      return parseResponse(client.runners[':id'].draining.$patch(args, options))
    },
  })
}

export function createPatchRunnersIdDraining<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)[':id']['draining']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.runners)[':id']['draining']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRunnersIdDrainingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRunnersHealthcheckMutationKey() {
  return ['runners', '/runners/healthcheck', 'POST'] as const
}

export function getPostRunnersHealthcheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.healthcheck.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.runners.healthcheck.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRunnersHealthcheckMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.runners.healthcheck.$post>) {
      return parseResponse(client.runners.healthcheck.$post(args, options))
    },
  })
}

export function createPostRunnersHealthcheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.runners.healthcheck.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.runners.healthcheck.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRunnersHealthcheckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxProjectDirQueryKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/project-dir', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProjectDirQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProjectDirQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxProjectDirQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox['project-dir'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxProjectDir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxProjectDirQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxProjectDirQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxUserHomeDirQueryKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/user-home-dir', keyArgs] as const
}

export function getToolboxSandboxIdToolboxUserHomeDirQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxUserHomeDirQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxUserHomeDirQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox['user-home-dir'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxUserHomeDir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxUserHomeDirQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxUserHomeDirQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxWorkDirQueryKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/work-dir', keyArgs] as const
}

export function getToolboxSandboxIdToolboxWorkDirQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxWorkDirQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxWorkDirQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox['work-dir'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxWorkDir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxWorkDirQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxWorkDirQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxFilesQueryKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteToolboxSandboxIdToolboxFilesMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files', 'DELETE'] as const
}

export function getDeleteToolboxSandboxIdToolboxFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteToolboxSandboxIdToolboxFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.files.$delete(args, options))
    },
  })
}

export function createDeleteToolboxSandboxIdToolboxFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteToolboxSandboxIdToolboxFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxFilesDownloadQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/download', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesDownloadQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxFilesDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxFilesDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesDownloadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxFilesDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxFilesBulkDownloadMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/bulk-download', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxFilesBulkDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxFilesBulkDownloadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files['bulk-download'].$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxFilesBulkDownload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-download']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxFilesBulkDownloadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxFilesFindQueryKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/find', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesFindQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesFindQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxFilesFindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.find.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxFilesFind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesFindQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxFilesFindQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxFilesFolderMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/folder', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxFilesFolderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxFilesFolderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.files.folder.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxFilesFolder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['folder']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxFilesFolderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxFilesInfoQueryKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/info', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesInfoQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxFilesInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxFilesInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxFilesInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxFilesMoveMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/move', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxFilesMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxFilesMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.files.move.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxFilesMove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['move']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxFilesMoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxFilesPermissionsMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/permissions', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxFilesPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxFilesPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.permissions.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxFilesPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['permissions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxFilesPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxFilesReplaceMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/replace', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxFilesReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxFilesReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.files.replace.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxFilesReplace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['replace']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxFilesReplaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxFilesSearchQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/search', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesSearchQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxFilesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxFilesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxFilesSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxFilesUploadMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/upload', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxFilesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxFilesUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.files.upload.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxFilesUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['upload']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxFilesUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxFilesBulkUploadMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/bulk-upload', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxFilesBulkUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxFilesBulkUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files['bulk-upload'].$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxFilesBulkUpload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['files']['bulk-upload']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxFilesBulkUploadMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxGitAddMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/add', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxGitAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxGitAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.add.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxGitAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxGitAddMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxGitBranchesQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/branches', keyArgs] as const
}

export function getToolboxSandboxIdToolboxGitBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxGitBranchesQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxGitBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.git.branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxGitBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxGitBranchesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxGitBranchesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxGitBranchesMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/branches', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxGitBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxGitBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.branches.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxGitBranches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxGitBranchesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteToolboxSandboxIdToolboxGitBranchesMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/branches', 'DELETE'] as const
}

export function getDeleteToolboxSandboxIdToolboxGitBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteToolboxSandboxIdToolboxGitBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.branches.$delete(args, options))
    },
  })
}

export function createDeleteToolboxSandboxIdToolboxGitBranches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteToolboxSandboxIdToolboxGitBranchesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxGitCloneMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/clone', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxGitCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxGitCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.clone.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxGitClone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['clone']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxGitCloneMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxGitCommitMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/commit', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxGitCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxGitCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.commit.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxGitCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['commit']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxGitCommitMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxGitHistoryQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/history', keyArgs] as const
}

export function getToolboxSandboxIdToolboxGitHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxGitHistoryQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxGitHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.git.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxGitHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxGitHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxGitHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxGitPullMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/pull', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxGitPullMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxGitPullMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.pull.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxGitPull<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['pull']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxGitPullMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxGitPushMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/push', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxGitPushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxGitPushMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.push.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxGitPush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['push']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxGitPushMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxGitCheckoutMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/checkout', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxGitCheckoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxGitCheckoutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.git.checkout.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxGitCheckout<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['git']['checkout']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxGitCheckoutMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxGitStatusQueryKey(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/status', keyArgs] as const
}

export function getToolboxSandboxIdToolboxGitStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxGitStatusQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxGitStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.git.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxGitStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxGitStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxGitStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxProcessExecuteMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/execute', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxProcessExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxProcessExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.execute.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxProcessExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['execute']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxProcessExecuteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxProcessSessionQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxProcessSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxProcessSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxProcessSessionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxProcessSessionMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxProcessSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxProcessSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxProcessSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxProcessSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session/:sessionId', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxProcessSessionSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxProcessSessionSessionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteToolboxSandboxIdToolboxProcessSessionSessionIdMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session/:sessionId', 'DELETE'] as const
}

export function getDeleteToolboxSandboxIdToolboxProcessSessionSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteToolboxSandboxIdToolboxProcessSessionSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteToolboxSandboxIdToolboxProcessSessionSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteToolboxSandboxIdToolboxProcessSessionSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxProcessSessionSessionIdExecMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session/:sessionId/exec', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxProcessSessionSessionIdExecMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxProcessSessionSessionIdExecMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].exec.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxProcessSessionSessionIdExec<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['exec']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostToolboxSandboxIdToolboxProcessSessionSessionIdExecMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
          ':commandId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId/logs',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
          ':commandId'
        ].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxProcessPtyQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessPtyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessPtyQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxProcessPtyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.pty.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxProcessPty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessPtyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxProcessPtyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxProcessPtyMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxProcessPtyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxProcessPtyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.process.pty.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxProcessPty<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxProcessPtyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty/:sessionId', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessPtySessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxProcessPtySessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxProcessPtySessionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteToolboxSandboxIdToolboxProcessPtySessionIdMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty/:sessionId', 'DELETE'] as const
}

export function getDeleteToolboxSandboxIdToolboxProcessPtySessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteToolboxSandboxIdToolboxProcessPtySessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteToolboxSandboxIdToolboxProcessPtySessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteToolboxSandboxIdToolboxProcessPtySessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxProcessPtySessionIdResizeMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty/:sessionId/resize', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxProcessPtySessionIdResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxProcessPtySessionIdResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].resize.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxProcessPtySessionIdResize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['resize']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxProcessPtySessionIdResizeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxLspCompletionsMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/completions', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxLspCompletionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxLspCompletionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.lsp.completions.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxLspCompletions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['completions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxLspCompletionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxLspDidCloseMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/did-close', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxLspDidCloseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxLspDidCloseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.lsp['did-close'].$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxLspDidClose<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-close']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxLspDidCloseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxLspDidOpenMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/did-open', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxLspDidOpenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxLspDidOpenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.lsp['did-open'].$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxLspDidOpen<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['did-open']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxLspDidOpenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/document-symbols', keyArgs] as const
}

export function getToolboxSandboxIdToolboxLspDocumentSymbolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.lsp['document-symbols'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxLspDocumentSymbols<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxLspDocumentSymbolsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxLspStartMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/start', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxLspStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxLspStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.lsp.start.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxLspStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['start']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxLspStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxLspStopMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/stop', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxLspStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxLspStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']
      >,
    ) {
      return parseResponse(client.toolbox[':sandboxId'].toolbox.lsp.stop.$post(args, options))
    },
  })
}

export function createPostToolboxSandboxIdToolboxLspStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['stop']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxLspStopMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/workspace-symbols', keyArgs] as const
}

export function getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.lsp['workspace-symbols'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxLspWorkspaceSymbols<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseStartMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/start', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.start.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['start']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseStartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseStopMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/stop', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.stop.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['stop']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseStopMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseStatusQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/status', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseStatusQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/status',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseProcessProcessNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartMutationKey() {
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/restart',
    'POST',
  ] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].restart.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['restart']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/logs',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseProcessProcessNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/errors',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseProcessProcessNameErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/position', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseMousePositionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.mouse.position.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseMousePosition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseMousePositionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseMoveMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/move', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseMouseMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.mouse.move.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseMouseMove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['move']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseMoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseClickMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/click', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseClickMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseMouseClickMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.mouse.click.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseMouseClick<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['click']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseClickMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseDragMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/drag', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseDragMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseMouseDragMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.mouse.drag.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseMouseDrag<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['drag']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseDragMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseScrollMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/scroll', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseMouseScrollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseMouseScrollMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.mouse.scroll.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseMouseScroll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['scroll']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseScrollMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardTypeMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/keyboard/type', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseKeyboardTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.type.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseKeyboardType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['type']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseKeyboardTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardKeyMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/keyboard/key', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseKeyboardKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.key.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseKeyboardKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['key']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseKeyboardKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardHotkeyMutationKey() {
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/keyboard/hotkey', 'POST'] as const
}

export function getPostToolboxSandboxIdToolboxComputeruseKeyboardHotkeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolboxSandboxIdToolboxComputeruseKeyboardHotkeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
      >,
    ) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.keyboard.hotkey.$post(args, options),
      )
    },
  })
}

export function createPostToolboxSandboxIdToolboxComputeruseKeyboardHotkey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['keyboard']['hotkey']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseKeyboardHotkeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/screenshot', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseScreenshot<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseScreenshotQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseScreenshotRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/compressed',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.compressed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseScreenshotCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region/compressed',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.compressed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/display/info', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.display.info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseDisplayInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/display/windows', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey>
  >({
    queryKey: getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.display.windows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createToolboxSandboxIdToolboxComputeruseDisplayWindows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSnapshotsQueryKey(args: InferRequestType<typeof client.snapshots.$get>) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots', keyArgs] as const
}

export function getSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.snapshots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapshotsQueryKey>
  >({
    queryKey: getSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.snapshots.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSnapshotsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSnapshotsMutationKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function getPostSnapshotsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    InferRequestType<typeof client.snapshots.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.snapshots.$post>) {
      return parseResponse(client.snapshots.$post(args, options))
    },
  })
}

export function createPostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.snapshots.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSnapshotsIdQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:id', keyArgs] as const
}

export function getSnapshotsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsIdQueryKey>
  >({
    queryKey: getSnapshotsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSnapshotsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snapshots)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnapshotsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnapshotsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSnapshotsIdMutationKey() {
  return ['snapshots', '/snapshots/:id', 'DELETE'] as const
}

export function getDeleteSnapshotsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshots)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnapshotsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snapshots)[':id']['$delete']>) {
      return parseResponse(client.snapshots[':id'].$delete(args, options))
    },
  })
}

export function createDeleteSnapshotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSnapshotsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSnapshotsIdBuildLogsQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:id/build-logs', keyArgs] as const
}

export function getSnapshotsIdBuildLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsIdBuildLogsQueryKey>
  >({
    queryKey: getSnapshotsIdBuildLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':id']['build-logs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnapshotsIdBuildLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnapshotsIdBuildLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSnapshotsIdBuildLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSnapshotsIdBuildLogsUrlQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['snapshots', '/snapshots/:id/build-logs-url', keyArgs] as const
}

export function getSnapshotsIdBuildLogsUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsIdBuildLogsUrlQueryKey>
  >({
    queryKey: getSnapshotsIdBuildLogsUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':id']['build-logs-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnapshotsIdBuildLogsUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnapshotsIdBuildLogsUrlQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSnapshotsIdBuildLogsUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSnapshotsIdActivateMutationKey() {
  return ['snapshots', '/snapshots/:id/activate', 'POST'] as const
}

export function getPostSnapshotsIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshots)[':id']['activate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshots)[':id']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snapshots)[':id']['activate']['$post']>,
    ) {
      return parseResponse(client.snapshots[':id'].activate.$post(args, options))
    },
  })
}

export function createPostSnapshotsIdActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':id']['activate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots)[':id']['activate']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSnapshotsIdActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSnapshotsIdDeactivateMutationKey() {
  return ['snapshots', '/snapshots/:id/deactivate', 'POST'] as const
}

export function getPostSnapshotsIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshots)[':id']['deactivate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.snapshots)[':id']['deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snapshots)[':id']['deactivate']['$post']>,
    ) {
      return parseResponse(client.snapshots[':id'].deactivate.$post(args, options))
    },
  })
}

export function createPostSnapshotsIdDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.snapshots)[':id']['deactivate']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.snapshots)[':id']['deactivate']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSnapshotsIdDeactivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPreviewSandboxIdPublicQueryKey(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>,
) {
  return ['preview', '/preview/:sandboxId/public', args] as const
}

export function getPreviewSandboxIdPublicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSandboxIdPublicQueryKey>
  >({
    queryKey: getPreviewSandboxIdPublicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':sandboxId'].public.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewSandboxIdPublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewSandboxIdPublicQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewSandboxIdPublicQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreviewSandboxIdValidateAuthTokenQueryKey(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>,
) {
  return ['preview', '/preview/:sandboxId/validate/:authToken', args] as const
}

export function getPreviewSandboxIdValidateAuthTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSandboxIdValidateAuthTokenQueryKey>
  >({
    queryKey: getPreviewSandboxIdValidateAuthTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':sandboxId'].validate[':authToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewSandboxIdValidateAuthToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewSandboxIdValidateAuthTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewSandboxIdValidateAuthTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreviewSandboxIdAccessQueryKey(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>,
) {
  return ['preview', '/preview/:sandboxId/access', args] as const
}

export function getPreviewSandboxIdAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSandboxIdAccessQueryKey>
  >({
    queryKey: getPreviewSandboxIdAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':sandboxId'].access.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewSandboxIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewSandboxIdAccessQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewSandboxIdAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreviewSignedPreviewTokenPortSandboxIdQueryKey(
  args: InferRequestType<
    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
  >,
) {
  return ['preview', '/preview/:signedPreviewToken/:port/sandbox-id', args] as const
}

export function getPreviewSignedPreviewTokenPortSandboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSignedPreviewTokenPortSandboxIdQueryKey>
  >({
    queryKey: getPreviewSignedPreviewTokenPortSandboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':signedPreviewToken'][':port']['sandbox-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewSignedPreviewTokenPortSandboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewSignedPreviewTokenPortSandboxIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewSignedPreviewTokenPortSandboxIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getVolumesQueryKey(args: InferRequestType<typeof client.volumes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes', keyArgs] as const
}

export function getVolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.volumes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >({
    queryKey: getVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.volumes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVolumesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVolumesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostVolumesMutationKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function getPostVolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.$post>) {
      return parseResponse(client.volumes.$post(args, options))
    },
  })
}

export function createPostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.volumes.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVolumesVolumeIdQueryKey(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/:volumeId', keyArgs] as const
}

export function getVolumesVolumeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesVolumeIdQueryKey>
  >({
    queryKey: getVolumesVolumeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes[':volumeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVolumesVolumeIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVolumesVolumeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteVolumesVolumeIdMutationKey() {
  return ['volumes', '/volumes/:volumeId', 'DELETE'] as const
}

export function getDeleteVolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumesVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>) {
      return parseResponse(client.volumes[':volumeId'].$delete(args, options))
    },
  })
}

export function createDeleteVolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVolumesByNameNameQueryKey(
  args: InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['volumes', '/volumes/by-name/:name', keyArgs] as const
}

export function getVolumesByNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesByNameNameQueryKey>
  >({
    queryKey: getVolumesByNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes['by-name'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVolumesByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVolumesByNameNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVolumesByNameNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJobsQueryKey(args: InferRequestType<typeof client.jobs.$get>) {
  return ['jobs', '/jobs', args] as const
}

export function getJobsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >({
    queryKey: getJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jobs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getJobsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJobsPollQueryKey(args: InferRequestType<typeof client.jobs.poll.$get>) {
  return ['jobs', '/jobs/poll', args] as const
}

export function getJobsPollQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jobs.poll.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsPollQueryKey>
  >({
    queryKey: getJobsPollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.poll.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsPoll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jobs.poll.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getJobsPollQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsPollQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
) {
  return ['jobs', '/jobs/:jobId', args] as const
}

export function getJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >({
    queryKey: getJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostJobsJobIdStatusMutationKey() {
  return ['jobs', '/jobs/:jobId/status', 'POST'] as const
}

export function getPostJobsJobIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['status']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':jobId']['status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsJobIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':jobId']['status']['$post']>) {
      return parseResponse(client.jobs[':jobId'].status.$post(args, options))
    },
  })
}

export function createPostJobsJobIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':jobId']['status']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':jobId']['status']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsJobIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDockerRegistryQueryKey(
  args: InferRequestType<(typeof client)['docker-registry']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docker-registry', '/docker-registry', keyArgs] as const
}

export function getDockerRegistryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['docker-registry']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerRegistryQueryKey>
  >({
    queryKey: getDockerRegistryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['docker-registry'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDockerRegistry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['docker-registry']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDockerRegistryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDockerRegistryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostDockerRegistryMutationKey() {
  return ['docker-registry', '/docker-registry', 'POST'] as const
}

export function getPostDockerRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['docker-registry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDockerRegistryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['docker-registry']['$post']>) {
      return parseResponse(client['docker-registry'].$post(args, options))
    },
  })
}

export function createPostDockerRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['docker-registry']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDockerRegistryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDockerRegistryRegistryPushAccessQueryKey(
  args: InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docker-registry', '/docker-registry/registry-push-access', keyArgs] as const
}

export function getDockerRegistryRegistryPushAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerRegistryRegistryPushAccessQueryKey>
  >({
    queryKey: getDockerRegistryRegistryPushAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['docker-registry']['registry-push-access'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDockerRegistryRegistryPushAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDockerRegistryRegistryPushAccessQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDockerRegistryRegistryPushAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDockerRegistryIdQueryKey(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['docker-registry', '/docker-registry/:id', keyArgs] as const
}

export function getDockerRegistryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['docker-registry'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerRegistryIdQueryKey>
  >({
    queryKey: getDockerRegistryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['docker-registry'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDockerRegistryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['docker-registry'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDockerRegistryIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDockerRegistryIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteDockerRegistryIdMutationKey() {
  return ['docker-registry', '/docker-registry/:id', 'DELETE'] as const
}

export function getDeleteDockerRegistryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['docker-registry'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDockerRegistryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['docker-registry'][':id']['$delete']>) {
      return parseResponse(client['docker-registry'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteDockerRegistryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['docker-registry'][':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDockerRegistryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchDockerRegistryIdMutationKey() {
  return ['docker-registry', '/docker-registry/:id', 'PATCH'] as const
}

export function getPatchDockerRegistryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['docker-registry'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDockerRegistryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['docker-registry'][':id']['$patch']>) {
      return parseResponse(client['docker-registry'][':id'].$patch(args, options))
    },
  })
}

export function createPatchDockerRegistryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['docker-registry'][':id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDockerRegistryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminRunnersQueryKey(args: InferRequestType<typeof client.admin.runners.$get>) {
  return ['admin', '/admin/runners', args] as const
}

export function getAdminRunnersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.runners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRunnersQueryKey>
  >({
    queryKey: getAdminRunnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.runners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminRunners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.runners.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAdminRunnersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRunnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAdminRunnersMutationKey() {
  return ['admin', '/admin/runners', 'POST'] as const
}

export function getPostAdminRunnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.runners.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRunnersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.runners.$post>) {
      return parseResponse(client.admin.runners.$post(args, options))
    },
  })
}

export function createPostAdminRunners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.runners.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminRunnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminRunnersIdQueryKey(
  args: InferRequestType<(typeof client.admin.runners)[':id']['$get']>,
) {
  return ['admin', '/admin/runners/:id', args] as const
}

export function getAdminRunnersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.runners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRunnersIdQueryKey>
  >({
    queryKey: getAdminRunnersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.runners[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminRunnersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.runners)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAdminRunnersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminRunnersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAdminRunnersIdMutationKey() {
  return ['admin', '/admin/runners/:id', 'DELETE'] as const
}

export function getDeleteAdminRunnersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.runners)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRunnersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.runners)[':id']['$delete']>) {
      return parseResponse(client.admin.runners[':id'].$delete(args, options))
    },
  })
}

export function createDeleteAdminRunnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.admin.runners)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.runners)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAdminRunnersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAdminRunnersIdSchedulingMutationKey() {
  return ['admin', '/admin/runners/:id/scheduling', 'PATCH'] as const
}

export function getPatchAdminRunnersIdSchedulingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminRunnersIdSchedulingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>,
    ) {
      return parseResponse(client.admin.runners[':id'].scheduling.$patch(args, options))
    },
  })
}

export function createPatchAdminRunnersIdScheduling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.admin.runners)[':id']['scheduling']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminRunnersIdSchedulingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdminSandboxSandboxIdRecoverMutationKey() {
  return ['admin', '/admin/sandbox/:sandboxId/recover', 'POST'] as const
}

export function getPostAdminSandboxSandboxIdRecoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSandboxSandboxIdRecoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>,
    ) {
      return parseResponse(client.admin.sandbox[':sandboxId'].recover.$post(args, options))
    },
  })
}

export function createPostAdminSandboxSandboxIdRecover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminSandboxSandboxIdRecoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminUsersQueryKey() {
  return ['admin', '/admin/users'] as const
}

export function getAdminUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >({
    queryKey: getAdminUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAdminUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAdminUsersMutationKey() {
  return ['admin', '/admin/users', 'POST'] as const
}

export function getPostAdminUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.users.$post>) {
      return parseResponse(client.admin.users.$post(args, options))
    },
  })
}

export function createPostAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.users.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdminUsersIdRegenerateKeyPairMutationKey() {
  return ['admin', '/admin/users/:id/regenerate-key-pair', 'POST'] as const
}

export function getPostAdminUsersIdRegenerateKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersIdRegenerateKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>,
    ) {
      return parseResponse(client.admin.users[':id']['regenerate-key-pair'].$post(args, options))
    },
  })
}

export function createPostAdminUsersIdRegenerateKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminUsersIdRegenerateKeyPairMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminUsersIdQueryKey(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
) {
  return ['admin', '/admin/users/:id', args] as const
}

export function getAdminUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdQueryKey>
  >({
    queryKey: getAdminUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAdminUsersIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAdminWebhooksOrganizationsOrganizationIdSendMutationKey() {
  return ['admin', '/admin/webhooks/organizations/:organizationId/send', 'POST'] as const
}

export function getPostAdminWebhooksOrganizationsOrganizationIdSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminWebhooksOrganizationsOrganizationIdSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.webhooks.organizations[':organizationId'].send.$post(args, options),
      )
    },
  })
}

export function createPostAdminWebhooksOrganizationsOrganizationIdSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.webhooks.organizations)[':organizationId']['send']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminWebhooksOrganizationsOrganizationIdSendMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
  >,
) {
  return [
    'admin',
    '/admin/webhooks/organizations/:organizationId/messages/:messageId/attempts',
    args,
  ] as const
}

export function getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey>
  >({
    queryKey: getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.webhooks.organizations[':organizationId'].messages[':messageId'].attempts.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttempts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAdminWebhooksStatusQueryKey() {
  return ['admin', '/admin/webhooks/status'] as const
}

export function getAdminWebhooksStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWebhooksStatusQueryKey>
  >({
    queryKey: getAdminWebhooksStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.webhooks.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminWebhooksStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAdminWebhooksStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminWebhooksStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAdminWebhooksOrganizationsOrganizationIdInitializeMutationKey() {
  return ['admin', '/admin/webhooks/organizations/:organizationId/initialize', 'POST'] as const
}

export function getPostAdminWebhooksOrganizationsOrganizationIdInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminWebhooksOrganizationsOrganizationIdInitializeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.webhooks.organizations[':organizationId'].initialize.$post(args, options),
      )
    },
  })
}

export function createPostAdminWebhooksOrganizationsOrganizationIdInitialize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.webhooks.organizations)[':organizationId']['initialize']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAdminWebhooksOrganizationsOrganizationIdInitializeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdminDockerRegistryIdSetDefaultMutationKey() {
  return ['admin', '/admin/docker-registry/:id/set-default', 'POST'] as const
}

export function getPostAdminDockerRegistryIdSetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['docker-registry'][':id']['set-default']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['docker-registry'][':id']['set-default']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDockerRegistryIdSetDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['docker-registry'][':id']['set-default']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['docker-registry'][':id']['set-default'].$post(args, options),
      )
    },
  })
}

export function createPostAdminDockerRegistryIdSetDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.admin)['docker-registry'][':id']['set-default']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['docker-registry'][':id']['set-default']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminDockerRegistryIdSetDefaultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminSnapshotsCanCleanupImageQueryKey(
  args: InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>,
) {
  return ['admin', '/admin/snapshots/can-cleanup-image', args] as const
}

export function getAdminSnapshotsCanCleanupImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSnapshotsCanCleanupImageQueryKey>
  >({
    queryKey: getAdminSnapshotsCanCleanupImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.snapshots['can-cleanup-image'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminSnapshotsCanCleanupImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAdminSnapshotsCanCleanupImageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminSnapshotsCanCleanupImageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchAdminSnapshotsIdGeneralMutationKey() {
  return ['admin', '/admin/snapshots/:id/general', 'PATCH'] as const
}

export function getPatchAdminSnapshotsIdGeneralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.snapshots)[':id']['general']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.snapshots)[':id']['general']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminSnapshotsIdGeneralMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.snapshots)[':id']['general']['$patch']>,
    ) {
      return parseResponse(client.admin.snapshots[':id'].general.$patch(args, options))
    },
  })
}

export function createPatchAdminSnapshotsIdGeneral<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.snapshots)[':id']['general']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.snapshots)[':id']['general']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminSnapshotsIdGeneralMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminAuditQueryKey(args: InferRequestType<typeof client.admin.audit.$get>) {
  return ['admin', '/admin/audit', args] as const
}

export function getAdminAuditQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.admin.audit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminAuditQueryKey>
  >({
    queryKey: getAdminAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.audit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.admin.audit.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAdminAuditQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminAuditQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAdminOrganizationsOrganizationIdQuotaRegionIdMutationKey() {
  return ['admin', '/admin/organizations/:organizationId/quota/:regionId', 'POST'] as const
}

export function getPostAdminOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrganizationsOrganizationIdQuotaRegionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.organizations[':organizationId'].quota[':regionId'].$post(args, options),
      )
    },
  })
}

export function createPostAdminOrganizationsOrganizationIdQuotaRegionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchAdminOrganizationsOrganizationIdQuotaRegionIdMutationKey() {
  return ['admin', '/admin/organizations/:organizationId/quota/:regionId', 'PATCH'] as const
}

export function getPatchAdminOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAdminOrganizationsOrganizationIdQuotaRegionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.admin.organizations[':organizationId'].quota[':regionId'].$patch(args, options),
      )
    },
  })
}

export function createPatchAdminOrganizationsOrganizationIdQuotaRegionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAdminOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
  >,
) {
  return [
    'admin',
    '/admin/organizations/:organizationId/quota/:regionId/:sandboxClass',
    args,
  ] as const
}

export function getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey>
  >({
    queryKey: getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassMutationKey() {
  return [
    'admin',
    '/admin/organizations/:organizationId/quota/:regionId/:sandboxClass',
    'DELETE',
  ] as const
}

export function getDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksOrganizationsOrganizationIdAppPortalAccessMutationKey() {
  return ['webhooks', '/webhooks/organizations/:organizationId/app-portal-access', 'POST'] as const
}

export function getPostWebhooksOrganizationsOrganizationIdAppPortalAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksOrganizationsOrganizationIdAppPortalAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks.organizations[':organizationId']['app-portal-access'].$post(args, options),
      )
    },
  })
}

export function createPostWebhooksOrganizationsOrganizationIdAppPortalAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks.organizations)[':organizationId']['app-portal-access']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostWebhooksOrganizationsOrganizationIdAppPortalAccessMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'webhooks',
    '/webhooks/organizations/:organizationId/initialization-status',
    keyArgs,
  ] as const
}

export function getWebhooksOrganizationsOrganizationIdInitializationStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey>
  >({
    queryKey: getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.organizations[':organizationId']['initialization-status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksOrganizationsOrganizationIdInitializationStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhooksOrganizationsOrganizationIdInitializationStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostWebhooksOrganizationsOrganizationIdInitializeMutationKey() {
  return ['webhooks', '/webhooks/organizations/:organizationId/initialize', 'POST'] as const
}

export function getPostWebhooksOrganizationsOrganizationIdInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksOrganizationsOrganizationIdInitializeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks.organizations[':organizationId'].initialize.$post(args, options),
      )
    },
  })
}

export function createPostWebhooksOrganizationsOrganizationIdInitialize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks.organizations)[':organizationId']['initialize']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksOrganizationsOrganizationIdInitializeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWebhooksOrganizationsOrganizationIdRefreshEndpointsMutationKey() {
  return ['webhooks', '/webhooks/organizations/:organizationId/refresh-endpoints', 'POST'] as const
}

export function getPostWebhooksOrganizationsOrganizationIdRefreshEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksOrganizationsOrganizationIdRefreshEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks.organizations[':organizationId']['refresh-endpoints'].$post(args, options),
      )
    },
  })
}

export function createPostWebhooksOrganizationsOrganizationIdRefreshEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webhooks.organizations)[':organizationId']['refresh-endpoints']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostWebhooksOrganizationsOrganizationIdRefreshEndpointsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuditOrganizationsOrganizationIdQueryKey(
  args: InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>,
) {
  return ['audit', '/audit/organizations/:organizationId', args] as const
}

export function getAuditOrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditOrganizationsOrganizationIdQueryKey>
  >({
    queryKey: getAuditOrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.organizations[':organizationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuditOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuditOrganizationsOrganizationIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuditOrganizationsOrganizationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getObjectStoragePushAccessQueryKey(
  args: InferRequestType<(typeof client)['object-storage']['push-access']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['object-storage', '/object-storage/push-access', keyArgs] as const
}

export function getObjectStoragePushAccessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['object-storage']['push-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStoragePushAccessQueryKey>
  >({
    queryKey: getObjectStoragePushAccessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['object-storage']['push-access'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObjectStoragePushAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['object-storage']['push-access']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getObjectStoragePushAccessQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getObjectStoragePushAccessQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getHealthQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >({
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHealthReadyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthReadyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSandboxSandboxIdTelemetryLogsQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/logs', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryLogsQueryKey>
  >({
    queryKey: getSandboxSandboxIdTelemetryLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdTelemetryLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdTelemetryLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdTelemetryLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdTelemetryTracesQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/traces', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryTracesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryTracesQueryKey>
  >({
    queryKey: getSandboxSandboxIdTelemetryTracesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.traces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdTelemetryTraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdTelemetryTracesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdTelemetryTracesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdTelemetryTracesTraceIdQueryKey(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/traces/:traceId', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryTracesTraceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryTracesTraceIdQueryKey>
  >({
    queryKey: getSandboxSandboxIdTelemetryTracesTraceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.traces[':traceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdTelemetryTracesTraceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdTelemetryTracesTraceIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdTelemetryTracesTraceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSandboxSandboxIdTelemetryMetricsQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sandbox', '/sandbox/:sandboxId/telemetry/metrics', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryMetricsQueryKey>
  >({
    queryKey: getSandboxSandboxIdTelemetryMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSandboxSandboxIdTelemetryMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSandboxSandboxIdTelemetryMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSandboxSandboxIdTelemetryMetricsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
