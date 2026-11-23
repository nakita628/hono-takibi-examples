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

export function getConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
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
      queryKey: getConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api-keys', '/api-keys', keyArgs] as const
}

export function getApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-keys'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>
            >
          >,
          ReturnType<typeof getApiKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['api-keys']['$post']>,
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
  const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiKeysCurrentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['current']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api-keys', '/api-keys/current', keyArgs] as const
}

export function getApiKeysCurrentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['current']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-keys'].current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeysCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys']['current']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeysCurrentQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['current']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-keys'].current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiKeysNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys'][':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api-keys', '/api-keys/:name', keyArgs] as const
}

export function getApiKeysNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKeysNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['api-keys'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKeysName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['api-keys'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKeysNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKeysNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['api-keys'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiKeysName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiKeysNameMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiKeysUserIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteApiKeysUserIdNameMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsInvitationsQueryKey() {
  return ['organizations', '/organizations/invitations'] as const
}

export function getOrganizationsInvitationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationsInvitationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.invitations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
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
                Awaited<ReturnType<typeof client.organizations.invitations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organizations.invitations.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsInvitationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationsInvitationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.invitations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsInvitationsCountQueryKey() {
  return ['organizations', '/organizations/invitations/count'] as const
}

export function getOrganizationsInvitationsCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationsInvitationsCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.invitations.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsInvitationsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>>
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
                Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsInvitationsCountQueryKey>
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
          Awaited<ReturnType<typeof client.organizations.invitations.count.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsInvitationsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationsInvitationsCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.invitations.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsInvitationsInvitationIdAccept<
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
  const mutationDefaults = getPostOrganizationsInvitationsInvitationIdAcceptMutationOptions<
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

export function usePostOrganizationsInvitationsInvitationIdDecline<
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
  const mutationDefaults = getPostOrganizationsInvitationsInvitationIdDeclineMutationOptions<
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

export function getOrganizationsQueryKey() {
  return ['organizations', '/organizations'] as const
}

export function getOrganizationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          ReturnType<typeof getOrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
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
  const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function usePatchOrganizationsOrganizationIdDefaultRegion<
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdDefaultRegionMutationOptions<
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

export function getOrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId', toValue(args)] as const
}

export function getOrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrganizationsOrganizationId<
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
                  Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['$delete']>,
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdMutationOptions<
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

export function getOrganizationsOrganizationIdUsageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/usage', toValue(args)] as const
}

export function getOrganizationsOrganizationIdUsageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['usage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdUsageQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchOrganizationsOrganizationIdQuota<
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
                    ReturnType<(typeof client.organizations)[':organizationId']['quota']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['quota']['$patch']>,
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdQuotaMutationOptions<
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

export function usePatchOrganizationsOrganizationIdQuotaRegionId<
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
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

export function usePostOrganizationsOrganizationIdLeave<
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
                    ReturnType<(typeof client.organizations)[':organizationId']['leave']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['leave']['$post']>,
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
  const mutationDefaults = getPostOrganizationsOrganizationIdLeaveMutationOptions<
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

export function usePostOrganizationsOrganizationIdSuspend<
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
                    ReturnType<(typeof client.organizations)[':organizationId']['suspend']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['suspend']['$post']>,
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
  const mutationDefaults = getPostOrganizationsOrganizationIdSuspendMutationOptions<
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

export function usePostOrganizationsOrganizationIdUnsuspend<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdUnsuspendMutationOptions<
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

export function getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/otel-config/by-sandbox-auth-token/:authToken',
    toValue(args),
  ] as const
}

export function getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations['otel-config']['by-sandbox-auth-token'][':authToken'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOtelConfigBySandboxAuthTokenAuthToken<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
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
                    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
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
                    (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey>
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
              (typeof client.organizations)['otel-config']['by-sandbox-auth-token'][':authToken']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations['otel-config']['by-sandbox-auth-token'][':authToken'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOtelConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/otel-config', toValue(args)] as const
}

export function getOrganizationsOrganizationIdOtelConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOtelConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId']['otel-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOtelConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
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
                    (typeof client.organizations)[':organizationId']['otel-config']['$get']
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
                    (typeof client.organizations)[':organizationId']['otel-config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOtelConfigQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['otel-config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOtelConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOtelConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId']['otel-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOtelConfig<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdOtelConfigMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOtelConfig<
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdOtelConfigMutationOptions<
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

export function usePostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgress<
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
    getPostOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressMutationOptions<
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

export function usePutOrganizationsOrganizationIdExperimentalConfig<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdExperimentalConfigMutationOptions<
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

export function getOrganizationsOrganizationIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/roles', toValue(args)] as const
}

export function getOrganizationsOrganizationIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdRoles<
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
                  ReturnType<(typeof client.organizations)[':organizationId']['roles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['roles']['$post']>,
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
  const mutationDefaults = getPostOrganizationsOrganizationIdRolesMutationOptions<
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

export function usePutOrganizationsOrganizationIdRolesRoleId<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdRolesRoleIdMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdRolesRoleId<
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdRolesRoleIdMutationOptions<
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

export function getOrganizationsOrganizationIdUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/users', toValue(args)] as const
}

export function getOrganizationsOrganizationIdUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdUsersUserIdAccess<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdUsersUserIdAccessMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdUsersUserId<
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdUsersUserIdMutationOptions<
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

export function getOrganizationsOrganizationIdInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId/invitations', toValue(args)] as const
}

export function getOrganizationsOrganizationIdInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
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
                    (typeof client.organizations)[':organizationId']['invitations']['$get']
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
                    (typeof client.organizations)[':organizationId']['invitations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdInvitationsQueryKey>
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
            ReturnType<(typeof client.organizations)[':organizationId']['invitations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdInvitations<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdInvitationsMutationOptions<
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

export function usePutOrganizationsOrganizationIdInvitationsInvitationId<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdInvitationsInvitationIdMutationOptions<
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

export function usePostOrganizationsOrganizationIdInvitationsInvitationIdCancel<
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
    getPostOrganizationsOrganizationIdInvitationsInvitationIdCancelMutationOptions<
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

export function getRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['regions', '/regions', keyArgs] as const
}

export function getRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          ReturnType<typeof getRegionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRegions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.regions.$post>,
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
  const mutationDefaults = getPostRegionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRegionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['regions', '/regions/:id', keyArgs] as const
}

export function getRegionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.regions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRegionsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.regions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteRegionsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.regions)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.regions)[':id']['$patch']>,
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
  const mutationDefaults = getPatchRegionsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostRegionsIdRegenerateProxyApiKey<
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
                  ReturnType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.regions)[':id']['regenerate-proxy-api-key']['$post']>,
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
  const mutationDefaults = getPostRegionsIdRegenerateProxyApiKeyMutationOptions<
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

export function usePostRegionsIdRegenerateSshGatewayApiKey<
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
  const mutationDefaults = getPostRegionsIdRegenerateSshGatewayApiKeyMutationOptions<
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

export function usePostRegionsIdRegenerateSnapshotManagerCredentials<
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
  const mutationDefaults = getPostRegionsIdRegenerateSnapshotManagerCredentialsMutationOptions<
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

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersAccountProvidersQueryKey() {
  return ['users', '/users/account-providers'] as const
}

export function getUsersAccountProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersAccountProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['account-providers'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersAccountProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>>
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
                Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersAccountProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.users)['account-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersAccountProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersAccountProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users['account-providers'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersLinkedAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostUsersLinkedAccountsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteUsersLinkedAccountsProviderProviderUserId<
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
  const mutationDefaults = getDeleteUsersLinkedAccountsProviderProviderUserIdMutationOptions<
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

export function usePostUsersMfaSmsEnroll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.mfa.sms.enroll.$post>>>
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
  const mutationDefaults = getPostUsersMfaSmsEnrollMutationOptions<TError, TOnMutateResult>(
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

export function getSharedRegionsQueryKey() {
  return ['shared-regions', '/shared-regions'] as const
}

export function getSharedRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSharedRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shared-regions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSharedRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
            >
          >,
          ReturnType<typeof getSharedRegionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shared-regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharedRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSharedRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['shared-regions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandbox.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox', keyArgs] as const
}

export function getSandboxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandbox.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSandbox<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandbox.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>
          >,
          ReturnType<typeof getSandboxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSandboxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandbox<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sandbox.$post>,
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
  const mutationDefaults = getPostSandboxMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSandboxPaginatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandbox.paginated.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/paginated', keyArgs] as const
}

export function getSandboxPaginatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandbox.paginated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxPaginatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox.paginated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxPaginated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sandbox.paginated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>
            >
          >,
          ReturnType<typeof getSandboxPaginatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.paginated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxPaginatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxPaginatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox.paginated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxForRunnerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandbox)['for-runner']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/for-runner', keyArgs] as const
}

export function getSandboxForRunnerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandbox)['for-runner']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxForRunnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox['for-runner'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxForRunner<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandbox)['for-runner']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxForRunnerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)['for-runner']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxForRunnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxForRunnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox['for-runner'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdOrNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName', keyArgs] as const
}

export function getSandboxSandboxIdOrNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNameQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSandboxSandboxIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteSandboxSandboxIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function usePostSandboxSandboxIdOrNameRecover<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['recover']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameRecoverMutationOptions<
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

export function usePostSandboxSandboxIdOrNameStart<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['start']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameStartMutationOptions<
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

export function usePostSandboxSandboxIdOrNameStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameStopMutationOptions<
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

export function usePostSandboxSandboxIdOrNamePause<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['pause']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNamePauseMutationOptions<
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

export function usePostSandboxSandboxIdOrNameResize<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['resize']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameResizeMutationOptions<
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

export function usePutSandboxSandboxIdOrNameLabels<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['labels']['$put']>,
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
  const mutationDefaults = getPutSandboxSandboxIdOrNameLabelsMutationOptions<
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

export function usePutSandboxSandboxIdState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutSandboxSandboxIdStateMutationOptions<TError, TOnMutateResult>(
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

export function usePostSandboxSandboxIdOrNameBackup<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['backup']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameBackupMutationOptions<
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

export function usePostSandboxSandboxIdOrNameSnapshot<
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
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['snapshot']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameSnapshotMutationOptions<
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

export function usePostSandboxSandboxIdOrNameFork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameForkMutationOptions<
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

export function getSandboxSandboxIdOrNameForksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName/forks', keyArgs] as const
}

export function getSandboxSandboxIdOrNameForksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNameForksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].forks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrNameForks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNameForksQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['forks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameForksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNameForksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName'].forks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdOrNameParentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName/parent', keyArgs] as const
}

export function getSandboxSandboxIdOrNameParentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNameParentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].parent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrNameParent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNameParentQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['parent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameParentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNameParentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName'].parent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdOrNameAncestorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName/ancestors', keyArgs] as const
}

export function getSandboxSandboxIdOrNameAncestorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNameAncestorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].ancestors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrNameAncestors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNameAncestorsQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ancestors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameAncestorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNameAncestorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName'].ancestors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxSandboxIdOrNamePublicIsPublic<
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
  const mutationDefaults = getPostSandboxSandboxIdOrNamePublicIsPublicMutationOptions<
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

export function usePostSandboxSandboxIdLastActivity<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxId']['last-activity']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdLastActivityMutationOptions<
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

export function usePostSandboxSandboxIdOrNameAutostopInterval<
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameAutostopIntervalMutationOptions<
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

export function usePostSandboxSandboxIdOrNameAutoarchiveInterval<
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameAutoarchiveIntervalMutationOptions<
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

export function usePostSandboxSandboxIdOrNameAutodeleteInterval<
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameAutodeleteIntervalMutationOptions<
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

export function usePostSandboxSandboxIdOrNameNetworkSettings<
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameNetworkSettingsMutationOptions<
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

export function usePostSandboxSandboxIdOrNameArchive<
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
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['archive']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameArchiveMutationOptions<
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

export function getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName/ports/:port/preview-url', keyArgs] as const
}

export function getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].ports[':port']['preview-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrNamePortsPortPreviewUrl<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
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
                    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
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
                    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey>
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
              (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['preview-url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNamePortsPortPreviewUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName'].ports[':port']['preview-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName/ports/:port/signed-preview-url', keyArgs] as const
}

export function getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSandboxSandboxIdOrNamePortsPortSignedPreviewUrl<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
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
                    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
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
                    (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey>
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
              (typeof client.sandbox)[':sandboxIdOrName']['ports'][':port']['signed-preview-url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName'].ports[':port']['signed-preview-url'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpire<
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
    getPostSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireMutationOptions<
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

export function getSandboxSandboxIdOrNameBuildLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName/build-logs', keyArgs] as const
}

export function getSandboxSandboxIdOrNameBuildLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNameBuildLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName']['build-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrNameBuildLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNameBuildLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName']['build-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdOrNameBuildLogsUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxIdOrName/build-logs-url', keyArgs] as const
}

export function getSandboxSandboxIdOrNameBuildLogsUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrNameBuildLogsUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxIdOrName']['build-logs-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrNameBuildLogsUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['build-logs-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrNameBuildLogsUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrNameBuildLogsUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxIdOrName']['build-logs-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSandboxSandboxIdOrNameSshAccess<
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
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$post']>,
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
  const mutationDefaults = getPostSandboxSandboxIdOrNameSshAccessMutationOptions<
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

export function useDeleteSandboxSandboxIdOrNameSshAccess<
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
                  ReturnType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox)[':sandboxIdOrName']['ssh-access']['$delete']>,
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
  const mutationDefaults = getDeleteSandboxSandboxIdOrNameSshAccessMutationOptions<
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

export function getSandboxSshAccessValidateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/ssh-access/validate', keyArgs] as const
}

export function getSandboxSshAccessValidateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSshAccessValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox['ssh-access'].validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSshAccessValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)['ssh-access']['validate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxSshAccessValidateQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)['ssh-access']['validate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSshAccessValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSshAccessValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox['ssh-access'].validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdToolboxProxyUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxId/toolbox-proxy-url', keyArgs] as const
}

export function getSandboxSandboxIdToolboxProxyUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdToolboxProxyUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxId']['toolbox-proxy-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdToolboxProxyUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdToolboxProxyUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['toolbox-proxy-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdToolboxProxyUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdToolboxProxyUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxId']['toolbox-proxy-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxId/organization', keyArgs] as const
}

export function getSandboxSandboxIdOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxId'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdOrganizationQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxId'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdRegionQuotaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxId/region-quota', keyArgs] as const
}

export function getSandboxSandboxIdRegionQuotaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdRegionQuotaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxId']['region-quota'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdRegionQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdRegionQuotaQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['region-quota']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdRegionQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdRegionQuotaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxId']['region-quota'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRunnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.runners.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['runners', '/runners', keyArgs] as const
}

export function getRunnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.runners.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRunnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.runners.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRunners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.runners.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>
          >,
          ReturnType<typeof getRunnersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRunnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRunnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.runners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRunners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.runners.$post>,
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
  const mutationDefaults = getPostRunnersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRunnersMeQueryKey() {
  return ['runners', '/runners/me'] as const
}

export function getRunnersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRunnersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.runners.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRunnersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>
          >,
          ReturnType<typeof getRunnersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.runners.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRunnersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRunnersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.runners.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRunnersBySandboxSandboxIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>
  >,
) {
  return ['runners', '/runners/by-sandbox/:sandboxId', toValue(args)] as const
}

export function getRunnersBySandboxSandboxIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRunnersBySandboxSandboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.runners['by-sandbox'][':sandboxId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRunnersBySandboxSandboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRunnersBySandboxSandboxIdQueryKey>
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
          Awaited<ReturnType<(typeof client.runners)['by-sandbox'][':sandboxId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersBySandboxSandboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRunnersBySandboxSandboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.runners['by-sandbox'][':sandboxId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRunnersBySnapshotRefQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>>,
) {
  return ['runners', '/runners/by-snapshot-ref', toValue(args)] as const
}

export function getRunnersBySnapshotRefQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRunnersBySnapshotRefQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.runners['by-snapshot-ref'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRunnersBySnapshotRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)['by-snapshot-ref']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRunnersBySnapshotRefQueryKey>
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
          Awaited<ReturnType<(typeof client.runners)['by-snapshot-ref']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersBySnapshotRefQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRunnersBySnapshotRefQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.runners['by-snapshot-ref'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRunnersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['runners', '/runners/:id', keyArgs] as const
}

export function getRunnersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRunnersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.runners[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRunnersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRunnersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRunnersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.runners[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRunnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.runners)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteRunnersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRunnersIdFullQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)[':id']['full']['$get']>>,
) {
  return ['runners', '/runners/:id/full', toValue(args)] as const
}

export function getRunnersIdFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)[':id']['full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRunnersIdFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.runners[':id'].full.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRunnersIdFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.runners)[':id']['full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRunnersIdFullQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.runners)[':id']['full']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRunnersIdFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRunnersIdFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.runners[':id'].full.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchRunnersIdScheduling<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchRunnersIdSchedulingMutationOptions<TError, TOnMutateResult>(
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

export function usePatchRunnersIdDraining<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchRunnersIdDrainingMutationOptions<TError, TOnMutateResult>(
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

export function usePostRunnersHealthcheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.runners.healthcheck.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.runners.healthcheck.$post>,
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
  const mutationDefaults = getPostRunnersHealthcheckMutationOptions<TError, TOnMutateResult>(
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

export function getToolboxSandboxIdToolboxProjectDirQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/project-dir', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProjectDirQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxProjectDirQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox['project-dir'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxProjectDir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxProjectDirQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['project-dir']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProjectDirQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxProjectDirQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox['project-dir'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxUserHomeDirQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/user-home-dir', keyArgs] as const
}

export function getToolboxSandboxIdToolboxUserHomeDirQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxUserHomeDirQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox['user-home-dir'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxUserHomeDir<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxUserHomeDirQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['user-home-dir']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxUserHomeDirQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxUserHomeDirQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox['user-home-dir'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxWorkDirQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/work-dir', keyArgs] as const
}

export function getToolboxSandboxIdToolboxWorkDirQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxWorkDirQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox['work-dir'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxWorkDir<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxWorkDirQueryKey>
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
          Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['work-dir']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxWorkDirQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxWorkDirQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox['work-dir'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteToolboxSandboxIdToolboxFiles<
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
                  ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['$delete']>,
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
  const mutationDefaults = getDeleteToolboxSandboxIdToolboxFilesMutationOptions<
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

export function getToolboxSandboxIdToolboxFilesDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/download', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxFilesDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxFilesDownload<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesDownloadQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['files']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxFilesDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.files.download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxFilesBulkDownload<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxFilesBulkDownloadMutationOptions<
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

export function getToolboxSandboxIdToolboxFilesFindQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/find', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesFindQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxFilesFindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.find.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxFilesFind<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesFindQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['find']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesFindQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxFilesFindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.files.find.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxFilesFolder<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxFilesFolderMutationOptions<
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

export function getToolboxSandboxIdToolboxFilesInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/info', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxFilesInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxFilesInfo<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesInfoQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxFilesInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.files.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxFilesMove<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxFilesMoveMutationOptions<
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

export function usePostToolboxSandboxIdToolboxFilesPermissions<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxFilesPermissionsMutationOptions<
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

export function usePostToolboxSandboxIdToolboxFilesReplace<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxFilesReplaceMutationOptions<
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

export function getToolboxSandboxIdToolboxFilesSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/files/search', keyArgs] as const
}

export function getToolboxSandboxIdToolboxFilesSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxFilesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.files.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxFilesSearch<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxFilesSearchQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['files']['search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxFilesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxFilesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.files.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxFilesUpload<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxFilesUploadMutationOptions<
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

export function usePostToolboxSandboxIdToolboxFilesBulkUpload<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxFilesBulkUploadMutationOptions<
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

export function usePostToolboxSandboxIdToolboxGitAdd<
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['add']['$post']>,
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxGitAddMutationOptions<
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

export function getToolboxSandboxIdToolboxGitBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/branches', keyArgs] as const
}

export function getToolboxSandboxIdToolboxGitBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxGitBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.git.branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxGitBranches<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxGitBranchesQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['branches']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxGitBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxGitBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.git.branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxGitBranches<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxGitBranchesMutationOptions<
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

export function useDeleteToolboxSandboxIdToolboxGitBranches<
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
  const mutationDefaults = getDeleteToolboxSandboxIdToolboxGitBranchesMutationOptions<
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

export function usePostToolboxSandboxIdToolboxGitClone<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxGitCloneMutationOptions<
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

export function usePostToolboxSandboxIdToolboxGitCommit<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxGitCommitMutationOptions<
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

export function getToolboxSandboxIdToolboxGitHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/history', keyArgs] as const
}

export function getToolboxSandboxIdToolboxGitHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxGitHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.git.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxGitHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxGitHistoryQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxGitHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxGitHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.git.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxGitPull<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxGitPullMutationOptions<
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

export function usePostToolboxSandboxIdToolboxGitPush<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxGitPushMutationOptions<
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

export function usePostToolboxSandboxIdToolboxGitCheckout<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxGitCheckoutMutationOptions<
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

export function getToolboxSandboxIdToolboxGitStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/git/status', keyArgs] as const
}

export function getToolboxSandboxIdToolboxGitStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxGitStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.git.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxGitStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxGitStatusQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['git']['status']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxGitStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxGitStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.git.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxProcessExecute<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxProcessExecuteMutationOptions<
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

export function getToolboxSandboxIdToolboxProcessSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxProcessSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxProcessSession<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxProcessSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.session.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxProcessSession<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxProcessSessionMutationOptions<
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

export function getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/session/:sessionId', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxProcessSessionSessionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxProcessSessionSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteToolboxSandboxIdToolboxProcessSessionSessionId<
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
  const mutationDefaults = getDeleteToolboxSandboxIdToolboxProcessSessionSessionIdMutationOptions<
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

export function usePostToolboxSandboxIdToolboxProcessSessionSessionIdExec<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxProcessSessionSessionIdExecMutationOptions<
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

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
          ':commandId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey
          >
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
            ':commandId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId/logs',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
          ':commandId'
        ].logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey
          >
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['session'][':sessionId']['command'][':commandId']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolboxSandboxIdToolboxProcessSessionSessionIdCommandCommandIdLogsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.session[':sessionId'].command[
            ':commandId'
          ].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxProcessPtyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessPtyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxProcessPtyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.pty.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxProcessPty<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessPtyQueryKey>
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
            ReturnType<(typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessPtyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxProcessPtyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.pty.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxProcessPty<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxProcessPtyMutationOptions<
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

export function getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/process/pty/:sessionId', keyArgs] as const
}

export function getToolboxSandboxIdToolboxProcessPtySessionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxProcessPtySessionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['process']['pty'][':sessionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxProcessPtySessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.process.pty[':sessionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteToolboxSandboxIdToolboxProcessPtySessionId<
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
  const mutationDefaults = getDeleteToolboxSandboxIdToolboxProcessPtySessionIdMutationOptions<
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

export function usePostToolboxSandboxIdToolboxProcessPtySessionIdResize<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxProcessPtySessionIdResizeMutationOptions<
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

export function usePostToolboxSandboxIdToolboxLspCompletions<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxLspCompletionsMutationOptions<
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

export function usePostToolboxSandboxIdToolboxLspDidClose<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxLspDidCloseMutationOptions<
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

export function usePostToolboxSandboxIdToolboxLspDidOpen<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxLspDidOpenMutationOptions<
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

export function getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/document-symbols', keyArgs] as const
}

export function getToolboxSandboxIdToolboxLspDocumentSymbolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.lsp['document-symbols'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxLspDocumentSymbols<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['document-symbols']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxLspDocumentSymbolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.lsp['document-symbols'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxLspStart<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxLspStartMutationOptions<
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

export function usePostToolboxSandboxIdToolboxLspStop<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxLspStopMutationOptions<
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

export function getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/lsp/workspace-symbols', keyArgs] as const
}

export function getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.lsp['workspace-symbols'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxLspWorkspaceSymbols<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['lsp']['workspace-symbols']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxLspWorkspaceSymbolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.lsp['workspace-symbols'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxComputeruseStart<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseStartMutationOptions<
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

export function usePostToolboxSandboxIdToolboxComputeruseStop<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseStopMutationOptions<
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

export function getToolboxSandboxIdToolboxComputeruseStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/status', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseStatusQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/status',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseProcessProcessNameStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolboxSandboxIdToolboxComputeruseProcessProcessNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestart<
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
    getPostToolboxSandboxIdToolboxComputeruseProcessProcessNameRestartMutationOptions<
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

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/logs',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].logs.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseProcessProcessNameLogs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolboxSandboxIdToolboxComputeruseProcessProcessNameLogsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].logs.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/errors',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].errors.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseProcessProcessNameErrors<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['process'][':processName']['errors']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolboxSandboxIdToolboxComputeruseProcessProcessNameErrorsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.process[':processName'].errors.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/mouse/position', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseMousePositionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.mouse.position.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseMousePosition<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['mouse']['position']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseMousePositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.mouse.position.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostToolboxSandboxIdToolboxComputeruseMouseMove<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseMoveMutationOptions<
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

export function usePostToolboxSandboxIdToolboxComputeruseMouseClick<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseClickMutationOptions<
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

export function usePostToolboxSandboxIdToolboxComputeruseMouseDrag<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseDragMutationOptions<
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

export function usePostToolboxSandboxIdToolboxComputeruseMouseScroll<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseMouseScrollMutationOptions<
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

export function usePostToolboxSandboxIdToolboxComputeruseKeyboardType<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseKeyboardTypeMutationOptions<
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

export function usePostToolboxSandboxIdToolboxComputeruseKeyboardKey<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseKeyboardKeyMutationOptions<
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

export function usePostToolboxSandboxIdToolboxComputeruseKeyboardHotkey<
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
  const mutationDefaults = getPostToolboxSandboxIdToolboxComputeruseKeyboardHotkeyMutationOptions<
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

export function getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/screenshot', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseScreenshot<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseScreenshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseScreenshotRegion<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseScreenshotRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/compressed',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.compressed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseScreenshotCompressed<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolboxSandboxIdToolboxComputeruseScreenshotCompressedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.compressed.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'toolbox',
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region/compressed',
    keyArgs,
  ] as const
}

export function getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.compressed.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressed<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['screenshot']['region']['compressed']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolboxSandboxIdToolboxComputeruseScreenshotRegionCompressedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.screenshot.region.compressed.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/display/info', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.display.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseDisplayInfo<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['info']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseDisplayInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.display.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['toolbox', '/toolbox/:sandboxId/toolbox/computeruse/display/windows', keyArgs] as const
}

export function getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolbox[':sandboxId'].toolbox.computeruse.display.windows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolboxSandboxIdToolboxComputeruseDisplayWindows<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
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
                    (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey>
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
              (typeof client.toolbox)[':sandboxId']['toolbox']['computeruse']['display']['windows']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolboxSandboxIdToolboxComputeruseDisplayWindowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolbox[':sandboxId'].toolbox.computeruse.display.windows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snapshots.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['snapshots', '/snapshots', keyArgs] as const
}

export function getSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snapshots.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.snapshots.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
          >,
          ReturnType<typeof getSnapshotsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.snapshots.$post>,
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
  const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnapshotsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['snapshots', '/snapshots/:id', keyArgs] as const
}

export function getSnapshotsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSnapshotsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSnapshotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSnapshotsIdMutationOptions<TError, TOnMutateResult>(
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

export function getSnapshotsIdBuildLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['snapshots', '/snapshots/:id/build-logs', keyArgs] as const
}

export function getSnapshotsIdBuildLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsIdBuildLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots[':id']['build-logs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotsIdBuildLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':id']['build-logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnapshotsIdBuildLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsIdBuildLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsIdBuildLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots[':id']['build-logs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnapshotsIdBuildLogsUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['snapshots', '/snapshots/:id/build-logs-url', keyArgs] as const
}

export function getSnapshotsIdBuildLogsUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsIdBuildLogsUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots[':id']['build-logs-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotsIdBuildLogsUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnapshotsIdBuildLogsUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.snapshots)[':id']['build-logs-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsIdBuildLogsUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsIdBuildLogsUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots[':id']['build-logs-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSnapshotsIdActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSnapshotsIdActivateMutationOptions<TError, TOnMutateResult>(
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

export function usePostSnapshotsIdDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSnapshotsIdDeactivateMutationOptions<TError, TOnMutateResult>(
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

export function getPreviewSandboxIdPublicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>>,
) {
  return ['preview', '/preview/:sandboxId/public', toValue(args)] as const
}

export function getPreviewSandboxIdPublicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewSandboxIdPublicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':sandboxId'].public.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePreviewSandboxIdPublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.preview)[':sandboxId']['public']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPreviewSandboxIdPublicQueryKey>
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
          Awaited<ReturnType<(typeof client.preview)[':sandboxId']['public']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSandboxIdPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewSandboxIdPublicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':sandboxId'].public.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewSandboxIdValidateAuthTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
  >,
) {
  return ['preview', '/preview/:sandboxId/validate/:authToken', toValue(args)] as const
}

export function getPreviewSandboxIdValidateAuthTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewSandboxIdValidateAuthTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':sandboxId'].validate[':authToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePreviewSandboxIdValidateAuthToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
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
                    (typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']
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
                    (typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPreviewSandboxIdValidateAuthTokenQueryKey>
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
            ReturnType<(typeof client.preview)[':sandboxId']['validate'][':authToken']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSandboxIdValidateAuthTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewSandboxIdValidateAuthTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':sandboxId'].validate[':authToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewSandboxIdAccessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>>,
) {
  return ['preview', '/preview/:sandboxId/access', toValue(args)] as const
}

export function getPreviewSandboxIdAccessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewSandboxIdAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':sandboxId'].access.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePreviewSandboxIdAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.preview)[':sandboxId']['access']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPreviewSandboxIdAccessQueryKey>
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
          Awaited<ReturnType<(typeof client.preview)[':sandboxId']['access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSandboxIdAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewSandboxIdAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':sandboxId'].access.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewSignedPreviewTokenPortSandboxIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']>
  >,
) {
  return ['preview', '/preview/:signedPreviewToken/:port/sandbox-id', toValue(args)] as const
}

export function getPreviewSignedPreviewTokenPortSandboxIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewSignedPreviewTokenPortSandboxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':signedPreviewToken'][':port']['sandbox-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePreviewSignedPreviewTokenPortSandboxId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']>
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
                    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
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
                    (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPreviewSignedPreviewTokenPortSandboxIdQueryKey>
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
              (typeof client.preview)[':signedPreviewToken'][':port']['sandbox-id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewSignedPreviewTokenPortSandboxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewSignedPreviewTokenPortSandboxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':signedPreviewToken'][':port']['sandbox-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['volumes', '/volumes', keyArgs] as const
}

export function getVolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          ReturnType<typeof getVolumesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.volumes.$post>,
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
  const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesVolumeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':volumeId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['volumes', '/volumes/:volumeId', keyArgs] as const
}

export function getVolumesVolumeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':volumeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesVolumeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes[':volumeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':volumeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVolumesVolumeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesVolumeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesVolumeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes[':volumeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteVolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteVolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getVolumesByNameNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['volumes', '/volumes/by-name/:name', keyArgs] as const
}

export function getVolumesByNameNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesByNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes['by-name'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)['by-name'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVolumesByNameNameQueryKey>
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
          Awaited<ReturnType<(typeof client.volumes)['by-name'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesByNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesByNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes['by-name'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>) {
  return ['jobs', '/jobs', toValue(args)] as const
}

export function getJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsPollQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.poll.$get>>,
) {
  return ['jobs', '/jobs/poll', toValue(args)] as const
}

export function getJobsPollQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.poll.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsPollQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.poll.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobsPoll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.poll.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>
          >,
          ReturnType<typeof getJobsPollQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.poll.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsPollQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsPollQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.poll.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
) {
  return ['jobs', '/jobs/:jobId', toValue(args)] as const
}

export function getJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsJobIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostJobsJobIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostJobsJobIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getDockerRegistryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['docker-registry']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['docker-registry', '/docker-registry', keyArgs] as const
}

export function getDockerRegistryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['docker-registry']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDockerRegistryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['docker-registry'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDockerRegistry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['docker-registry']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
            >
          >,
          ReturnType<typeof getDockerRegistryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerRegistryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDockerRegistryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['docker-registry'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDockerRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['docker-registry']['$post']>,
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
  const mutationDefaults = getPostDockerRegistryMutationOptions<TError, TOnMutateResult>(
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

export function getDockerRegistryRegistryPushAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['docker-registry', '/docker-registry/registry-push-access', keyArgs] as const
}

export function getDockerRegistryRegistryPushAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDockerRegistryRegistryPushAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['docker-registry']['registry-push-access'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDockerRegistryRegistryPushAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['docker-registry']['registry-push-access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDockerRegistryRegistryPushAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['docker-registry']['registry-push-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerRegistryRegistryPushAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDockerRegistryRegistryPushAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['docker-registry']['registry-push-access'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDockerRegistryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['docker-registry'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['docker-registry', '/docker-registry/:id', keyArgs] as const
}

export function getDockerRegistryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['docker-registry'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDockerRegistryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['docker-registry'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDockerRegistryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['docker-registry'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDockerRegistryIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['docker-registry'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDockerRegistryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDockerRegistryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['docker-registry'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDockerRegistryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteDockerRegistryIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchDockerRegistryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchDockerRegistryIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRunnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.runners.$get>>,
) {
  return ['admin', '/admin/runners', toValue(args)] as const
}

export function getAdminRunnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.runners.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRunnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.runners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRunners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.runners.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
          >,
          ReturnType<typeof getAdminRunnersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRunnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRunnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.runners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminRunners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.runners.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.runners.$post>,
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
  const mutationDefaults = getPostAdminRunnersMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRunnersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.runners)[':id']['$get']>>,
) {
  return ['admin', '/admin/runners/:id', toValue(args)] as const
}

export function getAdminRunnersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.runners)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRunnersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.runners[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRunnersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.runners)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminRunnersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.runners)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRunnersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRunnersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.runners[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAdminRunnersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteAdminRunnersIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchAdminRunnersIdScheduling<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchAdminRunnersIdSchedulingMutationOptions<TError, TOnMutateResult>(
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

export function usePostAdminSandboxSandboxIdRecover<
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
                Awaited<ReturnType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.sandbox)[':sandboxId']['recover']['$post']>,
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
  const mutationDefaults = getPostAdminSandboxSandboxIdRecoverMutationOptions<
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

export function getAdminUsersQueryKey() {
  return ['admin', '/admin/users'] as const
}

export function getAdminUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          ReturnType<typeof getAdminUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.users.$post>,
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
  const mutationDefaults = getPostAdminUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdminUsersIdRegenerateKeyPair<
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
                  ReturnType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['regenerate-key-pair']['$post']>,
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
  const mutationDefaults = getPostAdminUsersIdRegenerateKeyPairMutationOptions<
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

export function getAdminUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
) {
  return ['admin', '/admin/users/:id', toValue(args)] as const
}

export function getAdminUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminWebhooksOrganizationsOrganizationIdSend<
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
  const mutationDefaults = getPostAdminWebhooksOrganizationsOrganizationIdSendMutationOptions<
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

export function getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
    >
  >,
) {
  return [
    'admin',
    '/admin/webhooks/organizations/:organizationId/messages/:messageId/attempts',
    toValue(args),
  ] as const
}

export function getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.webhooks.organizations[':organizationId'].messages[':messageId'].attempts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttempts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
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
                    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
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
                    (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey
          >
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
              (typeof client.admin.webhooks.organizations)[':organizationId']['messages'][':messageId']['attempts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.webhooks.organizations[':organizationId'].messages[
            ':messageId'
          ].attempts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminWebhooksStatusQueryKey() {
  return ['admin', '/admin/webhooks/status'] as const
}

export function getAdminWebhooksStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminWebhooksStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.webhooks.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminWebhooksStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
            >
          >,
          ReturnType<typeof getAdminWebhooksStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.webhooks.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWebhooksStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminWebhooksStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.webhooks.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminWebhooksOrganizationsOrganizationIdInitialize<
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
  const mutationDefaults = getPostAdminWebhooksOrganizationsOrganizationIdInitializeMutationOptions<
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

export function usePostAdminDockerRegistryIdSetDefault<
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
                    (typeof client.admin)['docker-registry'][':id']['set-default']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['docker-registry'][':id']['set-default']['$post']>,
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
  const mutationDefaults = getPostAdminDockerRegistryIdSetDefaultMutationOptions<
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

export function getAdminSnapshotsCanCleanupImageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>
  >,
) {
  return ['admin', '/admin/snapshots/can-cleanup-image', toValue(args)] as const
}

export function getAdminSnapshotsCanCleanupImageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminSnapshotsCanCleanupImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.snapshots['can-cleanup-image'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSnapshotsCanCleanupImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminSnapshotsCanCleanupImageQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.snapshots)['can-cleanup-image']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSnapshotsCanCleanupImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminSnapshotsCanCleanupImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.snapshots['can-cleanup-image'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAdminSnapshotsIdGeneral<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchAdminSnapshotsIdGeneralMutationOptions<TError, TOnMutateResult>(
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

export function getAdminAuditQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.audit.$get>>,
) {
  return ['admin', '/admin/audit', toValue(args)] as const
}

export function getAdminAuditQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.audit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminAuditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.audit.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminAudit<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.audit.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>
          >,
          ReturnType<typeof getAdminAuditQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.audit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminAuditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminAuditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.audit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminOrganizationsOrganizationIdQuotaRegionId<
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
  const mutationDefaults = getPostAdminOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
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

export function usePatchAdminOrganizationsOrganizationIdQuotaRegionId<
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
  const mutationDefaults = getPatchAdminOrganizationsOrganizationIdQuotaRegionIdMutationOptions<
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

export function getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
    >
  >,
) {
  return [
    'admin',
    '/admin/organizations/:organizationId/quota/:regionId/:sandboxClass',
    toValue(args),
  ] as const
}

export function getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
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
                    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
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
                    (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey>
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
              (typeof client.admin.organizations)[':organizationId']['quota'][':regionId'][':sandboxClass']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.organizations[':organizationId'].quota[':regionId'][':sandboxClass'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClass<
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
    getDeleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassMutationOptions<
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

export function usePostWebhooksOrganizationsOrganizationIdAppPortalAccess<
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
  const mutationDefaults = getPostWebhooksOrganizationsOrganizationIdAppPortalAccessMutationOptions<
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

export function getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'webhooks',
    '/webhooks/organizations/:organizationId/initialization-status',
    keyArgs,
  ] as const
}

export function getWebhooksOrganizationsOrganizationIdInitializationStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.organizations[':organizationId']['initialization-status'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWebhooksOrganizationsOrganizationIdInitializationStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
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
                    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
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
                    (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey>
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
              (typeof client.webhooks.organizations)[':organizationId']['initialization-status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWebhooksOrganizationsOrganizationIdInitializationStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.organizations[':organizationId']['initialization-status'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostWebhooksOrganizationsOrganizationIdInitialize<
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
  const mutationDefaults = getPostWebhooksOrganizationsOrganizationIdInitializeMutationOptions<
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

export function usePostWebhooksOrganizationsOrganizationIdRefreshEndpoints<
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
    getPostWebhooksOrganizationsOrganizationIdRefreshEndpointsMutationOptions<
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

export function getAuditOrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>
  >,
) {
  return ['audit', '/audit/organizations/:organizationId', toValue(args)] as const
}

export function getAuditOrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuditOrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audit.organizations[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuditOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.audit.organizations)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuditOrganizationsOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.audit.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditOrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuditOrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.audit.organizations[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getObjectStoragePushAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['push-access']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['object-storage', '/object-storage/push-access', keyArgs] as const
}

export function getObjectStoragePushAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['push-access']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectStoragePushAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['object-storage']['push-access'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectStoragePushAccess<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['object-storage']['push-access']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectStoragePushAccessQueryKey>
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
          Awaited<ReturnType<(typeof client)['object-storage']['push-access']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectStoragePushAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectStoragePushAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['object-storage']['push-access'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          ReturnType<typeof getHealthReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdTelemetryLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxId/telemetry/logs', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdTelemetryLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdTelemetryLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdTelemetryLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdTelemetryLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxId'].telemetry.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdTelemetryTracesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxId/telemetry/traces', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryTracesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdTelemetryTracesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.traces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdTelemetryTraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdTelemetryTracesQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['traces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryTracesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdTelemetryTracesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxId'].telemetry.traces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdTelemetryTracesTraceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxId/telemetry/traces/:traceId', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryTracesTraceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdTelemetryTracesTraceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.traces[':traceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdTelemetryTracesTraceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
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
                    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
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
                    (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdTelemetryTracesTraceIdQueryKey>
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
              (typeof client.sandbox)[':sandboxId']['telemetry']['traces'][':traceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryTracesTraceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdTelemetryTracesTraceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxId'].telemetry.traces[':traceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSandboxSandboxIdTelemetryMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sandbox', '/sandbox/:sandboxId/telemetry/metrics', keyArgs] as const
}

export function getSandboxSandboxIdTelemetryMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSandboxSandboxIdTelemetryMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sandbox[':sandboxId'].telemetry.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSandboxSandboxIdTelemetryMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSandboxSandboxIdTelemetryMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['telemetry']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdTelemetryMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSandboxSandboxIdTelemetryMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sandbox[':sandboxId'].telemetry.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
