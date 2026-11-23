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

export function getAuthKey() {
  return ['auth'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getFacilitiesKey() {
  return ['facilities'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getImplementationKey() {
  return ['implementation'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getMacsKey() {
  return ['macs'] as const
}

export function getMemberJoiningRulesKey() {
  return ['member-joining-rules'] as const
}

export function getMetroAreaNetworksKey() {
  return ['metro-area-networks'] as const
}

export function getMetroAreasKey() {
  return ['metro-areas'] as const
}

export function getNetworkFeatureConfigsKey() {
  return ['network-feature-configs'] as const
}

export function getNetworkFeaturesKey() {
  return ['network-features'] as const
}

export function getNetworkServiceConfigsKey() {
  return ['network-service-configs'] as const
}

export function getNetworkServicesKey() {
  return ['network-services'] as const
}

export function getPopsKey() {
  return ['pops'] as const
}

export function getPortsKey() {
  return ['ports'] as const
}

export function getProductOfferingsKey() {
  return ['product-offerings'] as const
}

export function getRoleAssignmentsKey() {
  return ['role-assignments'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  return ['accounts', '/accounts', toValue(args)] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
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
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
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

export function getAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['$get']>>,
) {
  return ['accounts', '/accounts/:id', toValue(args)] as const
}

export function getAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAccountsIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'PUT'] as const
}

export function getPutAccountsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$put']>) {
      return parseResponse(client.accounts[':id'].$put(args, options))
    },
  })
}

export function usePutAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'DELETE'] as const
}

export function getDeleteAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$delete']>) {
      return parseResponse(client.accounts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'PATCH'] as const
}

export function getPatchAccountsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$patch']>) {
      return parseResponse(client.accounts[':id'].$patch(args, options))
    },
  })
}

export function usePatchAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthRefreshMutationKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function getPostAuthRefreshMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.refresh.$post>) {
      return parseResponse(client.auth.refresh.$post(args, options))
    },
  })
}

export function usePostAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.refresh.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthRefreshMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function getPostAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.$post>) {
      return parseResponse(client.auth.token.$post(args, options))
    },
  })
}

export function usePostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
) {
  return ['connections', '/connections', toValue(args)] as const
}

export function getConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          ReturnType<typeof getConnectionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
) {
  return ['connections', '/connections/:id', toValue(args)] as const
}

export function getConnectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getConnectionsIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
) {
  return ['contacts', '/contacts', toValue(args)] as const
}

export function getContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          ReturnType<typeof getContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function usePostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
) {
  return ['contacts', '/contacts/:id', toValue(args)] as const
}

export function getContactsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getContactsIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'PUT'] as const
}

export function getPutContactsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$put']>) {
      return parseResponse(client.contacts[':id'].$put(args, options))
    },
  })
}

export function usePutContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.contacts)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'DELETE'] as const
}

export function getDeleteContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$delete']>) {
      return parseResponse(client.contacts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.contacts)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'PATCH'] as const
}

export function getPatchContactsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$patch']>) {
      return parseResponse(client.contacts[':id'].$patch(args, options))
    },
  })
}

export function usePatchContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.contacts)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchContactsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.$get>>,
) {
  return ['devices', '/devices', toValue(args)] as const
}

export function getDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
          >,
          ReturnType<typeof getDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['$get']>>,
) {
  return ['devices', '/devices/:id', toValue(args)] as const
}

export function getDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDevicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDevicesIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFacilitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
) {
  return ['facilities', '/facilities', toValue(args)] as const
}

export function getFacilitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.facilities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
          >,
          ReturnType<typeof getFacilitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.facilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFacilitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facilities)[':id']['$get']>>,
) {
  return ['facilities', '/facilities/:id', toValue(args)] as const
}

export function getFacilitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facilities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacilitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.facilities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFacilitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facilities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getFacilitiesIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFacilitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacilitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.facilities[':id'].$get(toValue(args), {
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

export function getImplementationQueryKey() {
  return ['implementation', '/implementation'] as const
}

export function getImplementationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImplementationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.implementation.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImplementation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
          >,
          ReturnType<typeof getImplementationQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImplementationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImplementationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.implementation.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ips.$get>>) {
  return ['ips', '/ips', toValue(args)] as const
}

export function getIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
          ReturnType<typeof getIpsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIpsMutationKey() {
  return ['ips', '/ips', 'POST'] as const
}

export function getPostIpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.$post>) {
      return parseResponse(client.ips.$post(args, options))
    },
  })
}

export function usePostIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
          TError,
          InferRequestType<typeof client.ips.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['$get']>>,
) {
  return ['ips', '/ips/:id', toValue(args)] as const
}

export function getIpsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ips[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ips)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIpsIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ips[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'PUT'] as const
}

export function getPutIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$put']>) {
      return parseResponse(client.ips[':id'].$put(args, options))
    },
  })
}

export function usePutIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.ips)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'PATCH'] as const
}

export function getPatchIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$patch']>) {
      return parseResponse(client.ips[':id'].$patch(args, options))
    },
  })
}

export function usePatchIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.ips)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMacsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.macs.$get>>) {
  return ['macs', '/macs', toValue(args)] as const
}

export function getMacsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMacsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.macs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMacs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.macs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
          ReturnType<typeof getMacsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMacsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.macs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMacsMutationKey() {
  return ['macs', '/macs', 'POST'] as const
}

export function getPostMacsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$post>>>>>,
    TError,
    InferRequestType<typeof client.macs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMacsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.macs.$post>) {
      return parseResponse(client.macs.$post(args, options))
    },
  })
}

export function usePostMacs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$post>>>>>,
          TError,
          InferRequestType<typeof client.macs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMacsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMacsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.macs)[':id']['$get']>>,
) {
  return ['macs', '/macs/:id', toValue(args)] as const
}

export function getMacsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.macs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMacsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.macs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMacsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.macs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMacsIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMacsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMacsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.macs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMacsIdMutationKey() {
  return ['macs', '/macs/:id', 'DELETE'] as const
}

export function getDeleteMacsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.macs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMacsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.macs)[':id']['$delete']>) {
      return parseResponse(client.macs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMacsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.macs)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMacsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMemberJoiningRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['member-joining-rules']['$get']>>,
) {
  return ['member-joining-rules', '/member-joining-rules', toValue(args)] as const
}

export function getMemberJoiningRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['member-joining-rules']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberJoiningRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['member-joining-rules'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMemberJoiningRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['member-joining-rules']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMemberJoiningRulesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberJoiningRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberJoiningRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['member-joining-rules'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMemberJoiningRulesMutationKey() {
  return ['member-joining-rules', '/member-joining-rules', 'POST'] as const
}

export function getPostMemberJoiningRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMemberJoiningRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['member-joining-rules']['$post']>) {
      return parseResponse(client['member-joining-rules'].$post(args, options))
    },
  })
}

export function usePostMemberJoiningRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['member-joining-rules']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMemberJoiningRulesMutationOptions<TError, TOnMutateResult>(
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

export function getMemberJoiningRulesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>>,
) {
  return ['member-joining-rules', '/member-joining-rules/:id', toValue(args)] as const
}

export function getMemberJoiningRulesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMemberJoiningRulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['member-joining-rules'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMemberJoiningRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMemberJoiningRulesIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberJoiningRulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMemberJoiningRulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['member-joining-rules'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMemberJoiningRulesIdMutationKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'PUT'] as const
}

export function getPutMemberJoiningRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMemberJoiningRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>,
    ) {
      return parseResponse(client['member-joining-rules'][':id'].$put(args, options))
    },
  })
}

export function usePutMemberJoiningRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMemberJoiningRulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMemberJoiningRulesIdMutationKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'DELETE'] as const
}

export function getDeleteMemberJoiningRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMemberJoiningRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>,
    ) {
      return parseResponse(client['member-joining-rules'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteMemberJoiningRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMemberJoiningRulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMemberJoiningRulesIdMutationKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'PATCH'] as const
}

export function getPatchMemberJoiningRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMemberJoiningRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>,
    ) {
      return parseResponse(client['member-joining-rules'][':id'].$patch(args, options))
    },
  })
}

export function usePatchMemberJoiningRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMemberJoiningRulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getMetroAreaNetworksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-area-networks']['$get']>>,
) {
  return ['metro-area-networks', '/metro-area-networks', toValue(args)] as const
}

export function getMetroAreaNetworksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-area-networks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetroAreaNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metro-area-networks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetroAreaNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-area-networks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetroAreaNetworksQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreaNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetroAreaNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metro-area-networks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetroAreaNetworksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>>,
) {
  return ['metro-area-networks', '/metro-area-networks/:id', toValue(args)] as const
}

export function getMetroAreaNetworksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetroAreaNetworksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metro-area-networks'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetroAreaNetworksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetroAreaNetworksIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreaNetworksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetroAreaNetworksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metro-area-networks'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetroAreasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-areas']['$get']>>,
) {
  return ['metro-areas', '/metro-areas', toValue(args)] as const
}

export function getMetroAreasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-areas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetroAreasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metro-areas'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetroAreas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-areas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>
            >
          >,
          ReturnType<typeof getMetroAreasQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetroAreasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metro-areas'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetroAreasIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-areas'][':id']['$get']>>,
) {
  return ['metro-areas', '/metro-areas/:id', toValue(args)] as const
}

export function getMetroAreasIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-areas'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetroAreasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metro-areas'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetroAreasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['metro-areas'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetroAreasIdQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetroAreasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['metro-areas'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkFeatureConfigsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-feature-configs']['$get']>>,
) {
  return ['network-feature-configs', '/network-feature-configs', toValue(args)] as const
}

export function getNetworkFeatureConfigsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-feature-configs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkFeatureConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-feature-configs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkFeatureConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-feature-configs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkFeatureConfigsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeatureConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkFeatureConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-feature-configs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkFeatureConfigsMutationKey() {
  return ['network-feature-configs', '/network-feature-configs', 'POST'] as const
}

export function getPostNetworkFeatureConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkFeatureConfigsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-feature-configs']['$post']>) {
      return parseResponse(client['network-feature-configs'].$post(args, options))
    },
  })
}

export function usePostNetworkFeatureConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-feature-configs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkFeatureConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkFeatureConfigsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>
  >,
) {
  return ['network-feature-configs', '/network-feature-configs/:id', toValue(args)] as const
}

export function getNetworkFeatureConfigsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkFeatureConfigsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-feature-configs'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkFeatureConfigsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkFeatureConfigsIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeatureConfigsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkFeatureConfigsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-feature-configs'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworkFeatureConfigsIdMutationKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'PUT'] as const
}

export function getPutNetworkFeatureConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkFeatureConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>,
    ) {
      return parseResponse(client['network-feature-configs'][':id'].$put(args, options))
    },
  })
}

export function usePutNetworkFeatureConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkFeatureConfigsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNetworkFeatureConfigsIdMutationKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'DELETE'] as const
}

export function getDeleteNetworkFeatureConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkFeatureConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>,
    ) {
      return parseResponse(client['network-feature-configs'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkFeatureConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkFeatureConfigsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchNetworkFeatureConfigsIdMutationKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'PATCH'] as const
}

export function getPatchNetworkFeatureConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkFeatureConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>,
    ) {
      return parseResponse(client['network-feature-configs'][':id'].$patch(args, options))
    },
  })
}

export function usePatchNetworkFeatureConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNetworkFeatureConfigsIdMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkFeaturesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-features']['$get']>>,
) {
  return ['network-features', '/network-features', toValue(args)] as const
}

export function getNetworkFeaturesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-features']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkFeaturesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-features'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-features']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
            >
          >,
          ReturnType<typeof getNetworkFeaturesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeaturesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkFeaturesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-features'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkFeaturesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-features'][':id']['$get']>>,
) {
  return ['network-features', '/network-features/:id', toValue(args)] as const
}

export function getNetworkFeaturesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-features'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkFeaturesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-features'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkFeaturesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-features'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkFeaturesIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeaturesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkFeaturesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-features'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkServiceConfigsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-service-configs']['$get']>>,
) {
  return ['network-service-configs', '/network-service-configs', toValue(args)] as const
}

export function getNetworkServiceConfigsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-service-configs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkServiceConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-service-configs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkServiceConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-service-configs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkServiceConfigsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServiceConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkServiceConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-service-configs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkServiceConfigsMutationKey() {
  return ['network-service-configs', '/network-service-configs', 'POST'] as const
}

export function getPostNetworkServiceConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkServiceConfigsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-service-configs']['$post']>) {
      return parseResponse(client['network-service-configs'].$post(args, options))
    },
  })
}

export function usePostNetworkServiceConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-service-configs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkServiceConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkServiceConfigsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>
  >,
) {
  return ['network-service-configs', '/network-service-configs/:id', toValue(args)] as const
}

export function getNetworkServiceConfigsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkServiceConfigsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-service-configs'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkServiceConfigsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkServiceConfigsIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServiceConfigsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkServiceConfigsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-service-configs'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworkServiceConfigsIdMutationKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'PUT'] as const
}

export function getPutNetworkServiceConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkServiceConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>,
    ) {
      return parseResponse(client['network-service-configs'][':id'].$put(args, options))
    },
  })
}

export function usePutNetworkServiceConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkServiceConfigsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNetworkServiceConfigsIdMutationKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'DELETE'] as const
}

export function getDeleteNetworkServiceConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkServiceConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>,
    ) {
      return parseResponse(client['network-service-configs'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkServiceConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkServiceConfigsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchNetworkServiceConfigsIdMutationKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'PATCH'] as const
}

export function getPatchNetworkServiceConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkServiceConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>,
    ) {
      return parseResponse(client['network-service-configs'][':id'].$patch(args, options))
    },
  })
}

export function usePatchNetworkServiceConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNetworkServiceConfigsIdMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkServiceConfigsIdCancellationPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
    >
  >,
) {
  return [
    'network-service-configs',
    '/network-service-configs/:id/cancellation-policy',
    toValue(args),
  ] as const
}

export function getNetworkServiceConfigsIdCancellationPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkServiceConfigsIdCancellationPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-service-configs'][':id']['cancellation-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkServiceConfigsIdCancellationPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
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
                    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
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
                    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworkServiceConfigsIdCancellationPolicyQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServiceConfigsIdCancellationPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkServiceConfigsIdCancellationPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-service-configs'][':id']['cancellation-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-services']['$get']>>,
) {
  return ['network-services', '/network-services', toValue(args)] as const
}

export function getNetworkServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-services']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-services'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-services']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
            >
          >,
          ReturnType<typeof getNetworkServicesQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-services'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkServicesMutationKey() {
  return ['network-services', '/network-services', 'POST'] as const
}

export function getPostNetworkServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkServicesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-services']['$post']>) {
      return parseResponse(client['network-services'].$post(args, options))
    },
  })
}

export function usePostNetworkServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-services']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-services']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkServicesMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkServicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-services'][':id']['$get']>>,
) {
  return ['network-services', '/network-services/:id', toValue(args)] as const
}

export function getNetworkServicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-services'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-services'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['network-services'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkServicesIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-services'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutNetworkServicesIdMutationKey() {
  return ['network-services', '/network-services/:id', 'PUT'] as const
}

export function getPutNetworkServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-services'][':id']['$put']>) {
      return parseResponse(client['network-services'][':id'].$put(args, options))
    },
  })
}

export function usePutNetworkServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-services'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-services'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworkServicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteNetworkServicesIdMutationKey() {
  return ['network-services', '/network-services/:id', 'DELETE'] as const
}

export function getDeleteNetworkServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkServicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-services'][':id']['$delete']>,
    ) {
      return parseResponse(client['network-services'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteNetworkServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-services'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-services'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkServicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchNetworkServicesIdMutationKey() {
  return ['network-services', '/network-services/:id', 'PATCH'] as const
}

export function getPatchNetworkServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-services'][':id']['$patch']>) {
      return parseResponse(client['network-services'][':id'].$patch(args, options))
    },
  })
}

export function usePatchNetworkServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['network-services'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-services'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNetworkServicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getNetworkServicesIdCancellationPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
  >,
) {
  return ['network-services', '/network-services/:id/cancellation-policy', toValue(args)] as const
}

export function getNetworkServicesIdCancellationPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkServicesIdCancellationPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-services'][':id']['cancellation-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkServicesIdCancellationPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
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
                    (typeof client)['network-services'][':id']['cancellation-policy']['$get']
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
                    (typeof client)['network-services'][':id']['cancellation-policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNetworkServicesIdCancellationPolicyQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesIdCancellationPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkServicesIdCancellationPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-services'][':id']['cancellation-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkServicesIdChangeRequestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>
  >,
) {
  return ['network-services', '/network-services/:id/change-request', toValue(args)] as const
}

export function getNetworkServicesIdChangeRequestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkServicesIdChangeRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['network-services'][':id']['change-request'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkServicesIdChangeRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>
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
                  ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworkServicesIdChangeRequestQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesIdChangeRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkServicesIdChangeRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['network-services'][':id']['change-request'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostNetworkServicesIdChangeRequestMutationKey() {
  return ['network-services', '/network-services/:id/change-request', 'POST'] as const
}

export function getPostNetworkServicesIdChangeRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkServicesIdChangeRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>,
    ) {
      return parseResponse(client['network-services'][':id']['change-request'].$post(args, options))
    },
  })
}

export function usePostNetworkServicesIdChangeRequest<
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
                  ReturnType<(typeof client)['network-services'][':id']['change-request']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworkServicesIdChangeRequestMutationOptions<
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

export function getDeleteNetworkServicesIdChangeRequestMutationKey() {
  return ['network-services', '/network-services/:id/change-request', 'DELETE'] as const
}

export function getDeleteNetworkServicesIdChangeRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['network-services'][':id']['change-request']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkServicesIdChangeRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['network-services'][':id']['change-request']['$delete']
      >,
    ) {
      return parseResponse(
        client['network-services'][':id']['change-request'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNetworkServicesIdChangeRequest<
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
                    (typeof client)['network-services'][':id']['change-request']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['network-services'][':id']['change-request']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworkServicesIdChangeRequestMutationOptions<
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

export function getPopsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.pops.$get>>) {
  return ['pops', '/pops', toValue(args)] as const
}

export function getPopsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pops.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPopsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pops.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePops<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pops.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
          ReturnType<typeof getPopsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPopsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPopsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pops.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPopsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pops)[':id']['$get']>>,
) {
  return ['pops', '/pops/:id', toValue(args)] as const
}

export function getPopsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pops)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPopsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pops[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePopsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pops)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPopsIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPopsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPopsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pops[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPortsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ports.$get>>,
) {
  return ['ports', '/ports', toValue(args)] as const
}

export function getPortsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePorts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
          ReturnType<typeof getPortsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPortsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPortsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ports)[':id']['$get']>>,
) {
  return ['ports', '/ports/:id', toValue(args)] as const
}

export function getPortsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ports[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePortsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPortsIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductOfferingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product-offerings']['$get']>>,
) {
  return ['product-offerings', '/product-offerings', toValue(args)] as const
}

export function getProductOfferingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product-offerings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product-offerings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product-offerings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductOfferingsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product-offerings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProductOfferingsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product-offerings'][':id']['$get']>>,
) {
  return ['product-offerings', '/product-offerings/:id', toValue(args)] as const
}

export function getProductOfferingsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product-offerings'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductOfferingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['product-offerings'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductOfferingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['product-offerings'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProductOfferingsIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductOfferingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductOfferingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['product-offerings'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRoleAssignmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-assignments']['$get']>>,
) {
  return ['role-assignments', '/role-assignments', toValue(args)] as const
}

export function getRoleAssignmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-assignments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoleAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['role-assignments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoleAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['role-assignments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
            >
          >,
          ReturnType<typeof getRoleAssignmentsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoleAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoleAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['role-assignments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRoleAssignmentsMutationKey() {
  return ['role-assignments', '/role-assignments', 'POST'] as const
}

export function getPostRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['role-assignments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoleAssignmentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['role-assignments']['$post']>) {
      return parseResponse(client['role-assignments'].$post(args, options))
    },
  })
}

export function usePostRoleAssignments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-assignments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['role-assignments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRoleAssignmentsMutationOptions<TError, TOnMutateResult>(
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

export function getRoleAssignmentsAssignmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>
  >,
) {
  return ['role-assignments', '/role-assignments/:assignment_id', toValue(args)] as const
}

export function getRoleAssignmentsAssignmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRoleAssignmentsAssignmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['role-assignments'][':assignment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRoleAssignmentsAssignmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRoleAssignmentsAssignmentIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoleAssignmentsAssignmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRoleAssignmentsAssignmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['role-assignments'][':assignment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRoleAssignmentsAssignmentIdMutationKey() {
  return ['role-assignments', '/role-assignments/:assignment_id', 'DELETE'] as const
}

export function getDeleteRoleAssignmentsAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoleAssignmentsAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>,
    ) {
      return parseResponse(client['role-assignments'][':assignment_id'].$delete(args, options))
    },
  })
}

export function useDeleteRoleAssignmentsAssignmentId<
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
                  ReturnType<(typeof client)['role-assignments'][':assignment_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRoleAssignmentsAssignmentIdMutationOptions<
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

export function getRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
) {
  return ['roles', '/roles', toValue(args)] as const
}

export function getRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          ReturnType<typeof getRolesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRolesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':id']['$get']>>,
) {
  return ['roles', '/roles/:id', toValue(args)] as const
}

export function getRolesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRolesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getRolesIdQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRolesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
