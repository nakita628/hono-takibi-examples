import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActivityKey() {
  return ['activity'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getHeartbeatKey() {
  return ['heartbeat'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getVaultsKey() {
  return ['vaults'] as const
}

export function getActivityQueryKey(args: InferRequestType<typeof client.activity.$get>) {
  return ['activity', '/activity', args] as const
}

export function getActivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.activity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActivityQueryKey>
  >({
    queryKey: getActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.activity.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.activity.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVaultsQueryKey(args: InferRequestType<typeof client.vaults.$get>) {
  return ['vaults', '/vaults', args] as const
}

export function getVaultsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vaults.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultsQueryKey>
  >({
    queryKey: getVaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVaults<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVaultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaults<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVaultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVaultsVaultUuidQueryKey(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
) {
  return ['vaults', '/vaults/:vaultUuid', args] as const
}

export function getVaultsVaultUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidQueryKey>
  >({
    queryKey: getVaultsVaultUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vaultUuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVaultsVaultUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultsVaultUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaultsVaultUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultsVaultUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVaultsVaultUuidItemsQueryKey(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
) {
  return ['vaults', '/vaults/:vaultUuid/items', args] as const
}

export function getVaultsVaultUuidItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsQueryKey>
  >({
    queryKey: getVaultsVaultUuidItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vaultUuid'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultsVaultUuidItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVaultsVaultUuidItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVaultsVaultUuidItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVaultsVaultUuidItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVaultsVaultUuidItemsMutationKey() {
  return ['vaults', '/vaults/:vaultUuid/items', 'POST'] as const
}

export function getPostVaultsVaultUuidItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVaultsVaultUuidItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$post']>,
    ) {
      return parseResponse(client.vaults[':vaultUuid'].items.$post(args, options))
    },
  })
}

export function usePostVaultsVaultUuidItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVaultsVaultUuidItemsMutationOptions<TError, TOnMutateResult>(
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

export function getVaultsVaultUuidItemsItemUuidQueryKey(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', args] as const
}

export function getVaultsVaultUuidItemsItemUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidQueryKey>
  >({
    queryKey: getVaultsVaultUuidItemsItemUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultsVaultUuidItemsItemUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVaultsVaultUuidItemsItemUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutVaultsVaultUuidItemsItemUuidMutationKey() {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', 'PUT'] as const
}

export function getPutVaultsVaultUuidItemsItemUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVaultsVaultUuidItemsItemUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>,
    ) {
      return parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$put(args, options))
    },
  })
}

export function usePutVaultsVaultUuidItemsItemUuid<
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
                ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVaultsVaultUuidItemsItemUuidMutationOptions<
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

export function getDeleteVaultsVaultUuidItemsItemUuidMutationKey() {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', 'DELETE'] as const
}

export function getDeleteVaultsVaultUuidItemsItemUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVaultsVaultUuidItemsItemUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>,
    ) {
      return parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$delete(args, options))
    },
  })
}

export function useDeleteVaultsVaultUuidItemsItemUuid<
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
                  ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVaultsVaultUuidItemsItemUuidMutationOptions<
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

export function getPatchVaultsVaultUuidItemsItemUuidMutationKey() {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', 'PATCH'] as const
}

export function getPatchVaultsVaultUuidItemsItemUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVaultsVaultUuidItemsItemUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>,
    ) {
      return parseResponse(client.vaults[':vaultUuid'].items[':itemUuid'].$patch(args, options))
    },
  })
}

export function usePatchVaultsVaultUuidItemsItemUuid<
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
                ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVaultsVaultUuidItemsItemUuidMutationOptions<
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

export function getVaultsVaultUuidItemsItemUuidFilesQueryKey(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files', args] as const
}

export function getVaultsVaultUuidItemsItemUuidFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesQueryKey>
  >({
    queryKey: getVaultsVaultUuidItemsItemUuidFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultsVaultUuidItemsItemUuidFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVaultsVaultUuidItemsItemUuidFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid', args] as const
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey>
  >({
    queryKey: getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultsVaultUuidItemsItemUuidFilesFileUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVaultsVaultUuidItemsItemUuidFilesFileUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid/content', args] as const
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey>
  >({
    queryKey: getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVaultsVaultUuidItemsItemUuidFilesFileUuidContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVaultsVaultUuidItemsItemUuidFilesFileUuidContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey>
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
      ...getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHeartbeatQueryKey() {
  return ['heartbeat', '/heartbeat'] as const
}

export function getHeartbeatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeartbeatQueryKey>
  >({
    queryKey: getHeartbeatQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.heartbeat.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHeartbeat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHeartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHeartbeatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHeartbeat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHeartbeatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHeartbeatQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
