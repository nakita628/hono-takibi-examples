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

export function getActivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activity.$get>>,
) {
  return ['activity', '/activity', toValue(args)] as const
}

export function getActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.activity.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>
          >,
          ReturnType<typeof getActivityQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.activity.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
) {
  return ['vaults', '/vaults', toValue(args)] as const
}

export function getVaultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVaults<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vaults.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
          ReturnType<typeof getVaultsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vaults.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultsVaultUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>>,
) {
  return ['vaults', '/vaults/:vaultUuid', toValue(args)] as const
}

export function getVaultsVaultUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vaultUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVaultsVaultUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vaultUuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultsVaultUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vaultUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultsVaultUuidItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>,
) {
  return ['vaults', '/vaults/:vaultUuid/items', toValue(args)] as const
}

export function getVaultsVaultUuidItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultUuidItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vaultUuid'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVaultsVaultUuidItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultUuidItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vaultUuid'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid', toValue(args)] as const
}

export function getVaultsVaultUuidItemsItemUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultUuidItemsItemUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getVaultsVaultUuidItemsItemUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultUuidItemsItemUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vaultUuid'].items[':itemUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files', toValue(args)] as const
}

export function getVaultsVaultUuidItemsItemUuidFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultUuidItemsItemUuidFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
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
                    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
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
                    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultUuidItemsItemUuidFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vaultUuid'].items[':itemUuid'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
    >
  >,
) {
  return ['vaults', '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid', toValue(args)] as const
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
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
                    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
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
                    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultUuidItemsItemUuidFilesFileUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
    >
  >,
) {
  return [
    'vaults',
    '/vaults/:vaultUuid/items/:itemUuid/files/:fileUuid/content',
    toValue(args),
  ] as const
}

export function getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].content.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
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
                    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
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
                    (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.vaults)[':vaultUuid']['items'][':itemUuid']['files'][':fileUuid']['content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVaultsVaultUuidItemsItemUuidFilesFileUuidContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vaults[':vaultUuid'].items[':itemUuid'].files[':fileUuid'].content.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getHeartbeatQueryKey() {
  return ['heartbeat', '/heartbeat'] as const
}

export function getHeartbeatQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHeartbeatQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.heartbeat.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHeartbeat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>
          >,
          ReturnType<typeof getHeartbeatQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.heartbeat.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeartbeatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHeartbeatQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.heartbeat.$get(undefined, {
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

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
