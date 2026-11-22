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

export function getDataGaQueryKey(args: InferRequestType<typeof client.data.ga.$get>) {
  return ['data', '/data/ga', args] as const
}

export function getDataGaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data.ga.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDataGaQueryKey>
  >({
    queryKey: getDataGaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.ga.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataGa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.ga.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDataGaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataGaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataGa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.ga.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.ga.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDataGaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataGaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDataMcfQueryKey(args: InferRequestType<typeof client.data.mcf.$get>) {
  return ['data', '/data/mcf', args] as const
}

export function getDataMcfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data.mcf.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDataMcfQueryKey>
  >({
    queryKey: getDataMcfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.mcf.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataMcf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.mcf.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDataMcfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataMcfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataMcf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.mcf.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.mcf.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDataMcfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataMcfQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDataRealtimeQueryKey(args: InferRequestType<typeof client.data.realtime.$get>) {
  return ['data', '/data/realtime', args] as const
}

export function getDataRealtimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.data.realtime.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDataRealtimeQueryKey>
  >({
    queryKey: getDataRealtimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.data.realtime.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDataRealtime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.realtime.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataRealtimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDataRealtimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDataRealtime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.data.realtime.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.realtime.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDataRealtimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDataRealtimeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getManagementAccountSummariesQueryKey(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
) {
  return ['management', '/management/accountSummaries', args] as const
}

export function getManagementAccountSummariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountSummariesQueryKey>
  >({
    queryKey: getManagementAccountSummariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accountSummaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useManagementAccountSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getManagementAccountSummariesQueryKey>
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
      ...getManagementAccountSummariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.management.accountSummaries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.management.accountSummaries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.management.accountSummaries.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagementAccountSummariesQueryKey>
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
      ...getManagementAccountSummariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getManagementAccountsQueryKey(
  args: InferRequestType<typeof client.management.accounts.$get>,
) {
  return ['management', '/management/accounts', args] as const
}

export function getManagementAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.management.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagementAccountsQueryKey>
  >({
    queryKey: getManagementAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagementAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.management.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagementAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagementAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagementAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.management.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.management.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagementAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagementAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getManagementAccountsAccountIdEntityUserLinksQueryKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
) {
  return ['management', '/management/accounts/:accountId/entityUserLinks', args] as const
}

export function getManagementAccountsAccountIdEntityUserLinksQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdEntityUserLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].entityUserLinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getManagementAccountsAccountIdEntityUserLinksQueryKey>
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
      ...getManagementAccountsAccountIdEntityUserLinksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdEntityUserLinks<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['entityUserLinks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getManagementAccountsAccountIdEntityUserLinksQueryKey>
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
      ...getManagementAccountsAccountIdEntityUserLinksQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
) {
  return ['management', '/management/accounts/:accountId/filters', args] as const
}

export function getManagementAccountsAccountIdFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getManagementAccountsAccountIdFiltersQueryKey>
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
      ...getManagementAccountsAccountIdFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.management.accounts)[':accountId']['filters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.management.accounts)[':accountId']['filters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getManagementAccountsAccountIdFiltersQueryKey>
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
      ...getManagementAccountsAccountIdFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
) {
  return ['management', '/management/accounts/:accountId/filters/:filterId', args] as const
}

export function getManagementAccountsAccountIdFiltersFilterIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdFiltersFilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].filters[':filterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getManagementAccountsAccountIdFiltersFilterIdQueryKey>
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
      ...getManagementAccountsAccountIdFiltersFilterIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdFiltersFilterId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['filters'][':filterId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdFiltersFilterIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
) {
  return ['management', '/management/accounts/:accountId/webproperties', args] as const
}

export function getManagementAccountsAccountIdWebpropertiesQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdWebpropertiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getManagementAccountsAccountIdWebpropertiesQueryKey>
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
      ...getManagementAccountsAccountIdWebpropertiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebproperties<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getManagementAccountsAccountIdWebpropertiesQueryKey>
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
      ...getManagementAccountsAccountIdWebpropertiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryKey>
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].customDataSources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSources<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
          ':customDataSourceId'
        ].uploads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploads<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDataSources/:customDataSourceId/uploads/:uploadId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDataSources[
          ':customDataSourceId'
        ].uploads[':uploadId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDataSources'][':customDataSourceId']['uploads'][':uploadId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDataSourcesCustomDataSourceIdUploadsUploadIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey(
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].customDimensions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customDimensions/:customDimensionId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customDimensions[
          ':customDimensionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customDimensions'][':customDimensionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomDimensionsCustomDimensionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetrics<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/customMetrics/:customMetricId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].customMetrics[
          ':customMetricId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['customMetrics'][':customMetricId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdCustomMetricsCustomMetricIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].entityAdWordsLinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinks<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityAdWordsLinks/:webPropertyAdWordsLinkId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].entityAdWordsLinks[
          ':webPropertyAdWordsLinkId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityAdWordsLinks'][':webPropertyAdWordsLinkId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityAdWordsLinksWebPropertyAdWordsLinkIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/entityUserLinks',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].entityUserLinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinks<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['entityUserLinks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdEntityUserLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryKey>
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfiles<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/entityUserLinks',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].entityUserLinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinks<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['entityUserLinks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdEntityUserLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperiments<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/experiments/:experimentId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].experiments[':experimentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['experiments'][':experimentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdExperimentsExperimentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].goals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoals<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/goals/:goalId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].goals[':goalId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['goals'][':goalId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdGoalsGoalIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinks<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/profileFilterLinks/:linkId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].profileFilterLinks[':linkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['profileFilterLinks'][':linkId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdProfileFilterLinksLinkIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].unsampledReports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReports<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/profiles/:profileId/unsampledReports/:unsampledReportId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[':webPropertyId'].profiles[
          ':profileId'
        ].unsampledReports[':unsampledReportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['profiles'][':profileId']['unsampledReports'][':unsampledReportId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdProfilesProfileIdUnsampledReportsUnsampledReportIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiences<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
) {
  return [
    'management',
    '/management/accounts/:accountId/webproperties/:webPropertyId/remarketingAudiences/:remarketingAudienceId',
    args,
  ] as const
}

export function getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.management.accounts[':accountId'].webproperties[
          ':webPropertyId'
        ].remarketingAudiences[':remarketingAudienceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryKey
        >
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceId<
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
  args: InferRequestType<
    (typeof client.management.accounts)[':accountId']['webproperties'][':webPropertyId']['remarketingAudiences'][':remarketingAudienceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getManagementAccountsAccountIdWebpropertiesWebPropertyIdRemarketingAudiencesRemarketingAudienceIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.management.segments.$get>,
) {
  return ['management', '/management/segments', args] as const
}

export function getManagementSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.management.segments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getManagementSegmentsQueryKey>
  >({
    queryKey: getManagementSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.management.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useManagementSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.management.segments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagementSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getManagementSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseManagementSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.management.segments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.management.segments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getManagementSegmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getManagementSegmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetadataReportTypeColumnsQueryKey(
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
) {
  return ['metadata', '/metadata/:reportType/columns', args] as const
}

export function getMetadataReportTypeColumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMetadataReportTypeColumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata[':reportType'].columns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMetadataReportTypeColumnsQueryKey>
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
      ...getMetadataReportTypeColumnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMetadataReportTypeColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata)[':reportType']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata)[':reportType']['columns']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMetadataReportTypeColumnsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
