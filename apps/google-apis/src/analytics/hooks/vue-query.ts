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

export function getDataKey() {
  return ['data'] as const
}

export function getManagementKey() {
  return ['management'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getProvisioningKey() {
  return ['provisioning'] as const
}

export function getUserDeletionKey() {
  return ['userDeletion'] as const
}

export function getDataGaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.ga.$get>>,
) {
  return ['data', '/data/ga', toValue(args)] as const
}

export function getDataGaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.ga.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataGaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.ga.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDataGa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.ga.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>
          >,
          ReturnType<typeof getDataGaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDataGaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataGaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.ga.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataMcfQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.mcf.$get>>,
) {
  return ['data', '/data/mcf', toValue(args)] as const
}

export function getDataMcfQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.mcf.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataMcfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.mcf.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDataMcf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.mcf.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>
          >,
          ReturnType<typeof getDataMcfQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDataMcfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataMcfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.mcf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataRealtimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.realtime.$get>>,
) {
  return ['data', '/data/realtime', toValue(args)] as const
}

export function getDataRealtimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.realtime.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataRealtimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.realtime.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataRealtime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.realtime.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
          >,
          ReturnType<typeof getDataRealtimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataRealtimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataRealtimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.realtime.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagementAccountSummariesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.accountSummaries.$get>>,
) {
  return ['management', '/management/accountSummaries', toValue(args)] as const
}

export function getManagementAccountSummariesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.accountSummaries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagementAccountSummariesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accountSummaries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.accountSummaries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.management.accountSummaries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.management.accountSummaries.$get>>
              >
            >
          >,
          ReturnType<typeof getManagementAccountSummariesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
        typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountSummariesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagementAccountSummariesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accountSummaries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagementAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.accounts.$get>>,
) {
  return ['management', '/management/accounts', toValue(args)] as const
}

export function getManagementAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagementAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
            >
          >,
          ReturnType<typeof getManagementAccountsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagementAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagementAccountsAccountIdEntityUserLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']>
  >,
) {
  return ['management', '/management/accounts/:accountId/entityUserLinks', toValue(args)] as const
}

export function getManagementAccountsAccountIdEntityUserLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagementAccountsAccountIdEntityUserLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].entityUserLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdEntityUserLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']>
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
                    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getManagementAccountsAccountIdEntityUserLinksQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsAccountIdEntityUserLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagementAccountsAccountIdEntityUserLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].entityUserLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdEntityUserLinksMutationKey() {
  return ['management', '/management/accounts/:accountId/entityUserLinks', 'POST'] as const
}

export function getPostManagementAccountsAccountIdEntityUserLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagementAccountsAccountIdEntityUserLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].entityUserLinks.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdEntityUserLinks<
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
                    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['entityUserLinks']['$post']
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
  const mutationDefaults = getPostManagementAccountsAccountIdEntityUserLinksMutationOptions<
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

export function getPutManagementAccountsAccountIdEntityUserLinksLinkIdMutationKey() {
  return ['management', '/management/accounts/:accountId/entityUserLinks/:linkId', 'PUT'] as const
}

export function getPutManagementAccountsAccountIdEntityUserLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutManagementAccountsAccountIdEntityUserLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].entityUserLinks[':linkId'].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdEntityUserLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$put']
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
  const mutationDefaults = getPutManagementAccountsAccountIdEntityUserLinksLinkIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdEntityUserLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/entityUserLinks/:linkId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdEntityUserLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteManagementAccountsAccountIdEntityUserLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].entityUserLinks[':linkId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdEntityUserLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['entityUserLinks'][':linkId']['$delete']
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
  const mutationDefaults = getDeleteManagementAccountsAccountIdEntityUserLinksLinkIdMutationOptions<
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

export function getManagementAccountsAccountIdFiltersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
  >,
) {
  return ['management', '/management/accounts/:accountId/filters', toValue(args)] as const
}

export function getManagementAccountsAccountIdFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagementAccountsAccountIdFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
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
                  ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getManagementAccountsAccountIdFiltersQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsAccountIdFiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagementAccountsAccountIdFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdFiltersMutationKey() {
  return ['management', '/management/accounts/:accountId/filters', 'POST'] as const
}

export function getPostManagementAccountsAccountIdFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagementAccountsAccountIdFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$post']>,
    ) {
      return parseResponse(client.management.accounts[':accountId'].filters.$post(args, options))
    },
  })
}

export function usePostManagementAccountsAccountIdFilters<
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
                  ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagementAccountsAccountIdFiltersMutationOptions<
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

export function getManagementAccountsAccountIdFiltersFilterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
    >
  >,
) {
  return ['management', '/management/accounts/:accountId/filters/:filterId', toValue(args)] as const
}

export function getManagementAccountsAccountIdFiltersFilterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagementAccountsAccountIdFiltersFilterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].filters[':filterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdFiltersFilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getManagementAccountsAccountIdFiltersFilterIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsAccountIdFiltersFilterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagementAccountsAccountIdFiltersFilterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].filters[':filterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdFiltersFilterIdMutationKey() {
  return ['management', '/management/accounts/:accountId/filters/:filterId', 'PUT'] as const
}

export function getPutManagementAccountsAccountIdFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutManagementAccountsAccountIdFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].filters[':filterId'].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdFiltersFilterId<
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
                    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$put']
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
  const mutationDefaults = getPutManagementAccountsAccountIdFiltersFilterIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdFiltersFilterIdMutationKey() {
  return ['management', '/management/accounts/:accountId/filters/:filterId', 'DELETE'] as const
}

export function getDeleteManagementAccountsAccountIdFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteManagementAccountsAccountIdFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].filters[':filterId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdFiltersFilterId<
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
                    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$delete']
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
  const mutationDefaults = getDeleteManagementAccountsAccountIdFiltersFilterIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdFiltersFilterIdMutationKey() {
  return ['management', '/management/accounts/:accountId/filters/:filterId', 'PATCH'] as const
}

export function getPatchManagementAccountsAccountIdFiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchManagementAccountsAccountIdFiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].filters[':filterId'].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdFiltersFilterId<
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
                    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$patch']
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
  const mutationDefaults = getPatchManagementAccountsAccountIdFiltersFilterIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
  >,
) {
  return ['management', '/management/accounts/:accountId/webproperties', toValue(args)] as const
}

export function getManagementAccountsAccountIdWebpropertiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagementAccountsAccountIdWebpropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebproperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
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
                    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getManagementAccountsAccountIdWebpropertiesQueryKey>
        >,
        { queryKey: unknown }
      >,
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
            ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsAccountIdWebpropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagementAccountsAccountIdWebpropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesMutationKey() {
  return ['management', '/management/accounts/:accountId/webproperties', 'POST'] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.management.accounts)[':accountId']['webproperties']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.management.accounts)[':accountId']['webproperties']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagementAccountsAccountIdWebpropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebproperties<
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
                    (typeof client.management.accounts)[':accountId']['webproperties']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties']['$post']
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
  const mutationDefaults = getPostManagementAccountsAccountIdWebpropertiesMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].customDataSources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/deleteUploadData',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
          ':customDataSourceId'
        ].deleteUploadData.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadData<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['deleteUploadData']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdDeleteUploadDataMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
          ':customDataSourceId'
        ].uploads.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].uploads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
          ':customDataSourceId'
        ].uploads.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads/:uploadId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
          ':customDataSourceId'
        ].uploads[':uploadId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDataSources[':customDataSourceId'].uploads[':uploadId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].customDimensions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customDimensions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].customDimensions.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
          ':customDimensionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
            ':customDimensionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
          ':customDimensionId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
          ':customDimensionId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].customMetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].customMetrics.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
          ':customMetricId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
            ':customMetricId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
          ':customMetricId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
          ':customMetricId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].entityAdWordsLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].entityAdWordsLinks.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
          ':webPropertyAdWordsLinkId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityAdWordsLinks[':webPropertyAdWordsLinkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
          ':webPropertyAdWordsLinkId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
          ':webPropertyAdWordsLinkId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
          ':webPropertyAdWordsLinkId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].entityUserLinks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].entityUserLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].entityUserLinks.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksMutationOptions<
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

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks/:linkId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks[
          ':linkId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks/:linkId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityUserLinks[
          ':linkId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks'][':linkId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksLinkIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].entityUserLinks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].entityUserLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].entityUserLinks.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksMutationOptions<
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

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks/:linkId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].entityUserLinks[':linkId'].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks/:linkId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].entityUserLinks[':linkId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks'][':linkId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksLinkIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments[':experimentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].experiments[':experimentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments[':experimentId'].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments[':experimentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments[':experimentId'].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].goals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].goals.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].goals[':goalId'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].goals[':goalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].goals[':goalId'].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].goals[':goalId'].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks[':linkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].profileFilterLinks[':linkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks[':linkId'].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks[':linkId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks[':linkId'].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].unsampledReports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].unsampledReports.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports/:unsampledReportId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].unsampledReports[':unsampledReportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
            ':profileId'
          ].unsampledReports[':unsampledReportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports/:unsampledReportId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].unsampledReports[':unsampledReportId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences',
    'POST',
  ] as const
}

export function getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences.$post(args, options),
      )
    },
  })
}

export function usePostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$post']
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
    getPostManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesMutationOptions<
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

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
    >
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    toValue(args),
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences[':remarketingAudienceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryKey
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
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.management.accounts[':accountId'].webproperties[
            ':webPropertyId'
          ].remarketingAudiences[':remarketingAudienceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    'PUT',
  ] as const
}

export function getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences[':remarketingAudienceId'].$put(args, options),
      )
    },
  })
}

export function usePutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$put']
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
    getPutManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationOptions<
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

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    'DELETE',
  ] as const
}

export function getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences[':remarketingAudienceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$delete']
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
    getDeleteManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationOptions<
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

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationKey() {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    'PATCH',
  ] as const
}

export function getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences[':remarketingAudienceId'].$patch(args, options),
      )
    },
  })
}

export function usePatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
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
                    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$patch']
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
    getPatchManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdMutationOptions<
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

export function getPostManagementClientIdHashClientIdMutationKey() {
  return ['management', '/management/clientId:hashClientId', 'POST'] as const
}

export function getPostManagementClientIdHashClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.management)['clientId:hashClientId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.management)['clientId:hashClientId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostManagementClientIdHashClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.management)['clientId:hashClientId']['$post']>,
    ) {
      return parseResponse(client.management['clientId:hashClientId'].$post(args, options))
    },
  })
}

export function usePostManagementClientIdHashClientId<
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
                Awaited<ReturnType<(typeof client.management)['clientId:hashClientId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.management)['clientId:hashClientId']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostManagementClientIdHashClientIdMutationOptions<
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

export function getManagementSegmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.segments.$get>>,
) {
  return ['management', '/management/segments', toValue(args)] as const
}

export function getManagementSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getManagementSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.management.segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useManagementSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.management.segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
            >
          >,
          ReturnType<typeof getManagementSegmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagementSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getManagementSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.management.segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetadataReportTypeColumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>
  >,
) {
  return ['metadata', '/metadata/:reportType/columns', toValue(args)] as const
}

export function getMetadataReportTypeColumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataReportTypeColumnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata[':reportType'].columns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataReportTypeColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetadataReportTypeColumnsQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataReportTypeColumnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataReportTypeColumnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata[':reportType'].columns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProvisioningCreateAccountTicketMutationKey() {
  return ['provisioning', '/provisioning/createAccountTicket', 'POST'] as const
}

export function getPostProvisioningCreateAccountTicketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.provisioning.createAccountTicket.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.provisioning.createAccountTicket.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProvisioningCreateAccountTicketMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.provisioning.createAccountTicket.$post>) {
      return parseResponse(client.provisioning.createAccountTicket.$post(args, options))
    },
  })
}

export function usePostProvisioningCreateAccountTicket<
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
                Awaited<ReturnType<typeof client.provisioning.createAccountTicket.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.provisioning.createAccountTicket.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProvisioningCreateAccountTicketMutationOptions<
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

export function getPostProvisioningCreateAccountTreeMutationKey() {
  return ['provisioning', '/provisioning/createAccountTree', 'POST'] as const
}

export function getPostProvisioningCreateAccountTreeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.provisioning.createAccountTree.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.provisioning.createAccountTree.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProvisioningCreateAccountTreeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.provisioning.createAccountTree.$post>) {
      return parseResponse(client.provisioning.createAccountTree.$post(args, options))
    },
  })
}

export function usePostProvisioningCreateAccountTree<
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
                Awaited<ReturnType<typeof client.provisioning.createAccountTree.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.provisioning.createAccountTree.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProvisioningCreateAccountTreeMutationOptions<
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

export function getPostUserDeletionUserDeletionRequestsUpsertMutationKey() {
  return ['userDeletion', '/userDeletion/userDeletionRequests:upsert', 'POST'] as const
}

export function getPostUserDeletionUserDeletionRequestsUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserDeletionUserDeletionRequestsUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>,
    ) {
      return parseResponse(client.userDeletion['userDeletionRequests:upsert'].$post(args, options))
    },
  })
}

export function usePostUserDeletionUserDeletionRequestsUpsert<
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
                  ReturnType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.userDeletion)['userDeletionRequests:upsert']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserDeletionUserDeletionRequestsUpsertMutationOptions<
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
