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

export function getV4Key() {
  return ['v4'] as const
}

export function getV4AccountsQueryKey(args: InferRequestType<typeof client.v4.accounts.$get>) {
  return ['v4', '/v4/accounts', args] as const
}

export function getV4AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4AccountsQueryKey>
  >({
    queryKey: getV4AccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4AccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4AccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4AccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4AccountsMutationKey() {
  return ['v4', '/v4/accounts', 'POST'] as const
}

export function getPostV4AccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v4.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.accounts.$post>) {
      return parseResponse(client.v4.accounts.$post(args, options))
    },
  })
}

export function usePostV4Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4AccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV4AttributesQueryKey(args: InferRequestType<typeof client.v4.attributes.$get>) {
  return ['v4', '/v4/attributes', args] as const
}

export function getV4AttributesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.attributes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4AttributesQueryKey>
  >({
    queryKey: getV4AttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.attributes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4Attributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.attributes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4AttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4AttributesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4Attributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.attributes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4AttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4AttributesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4CategoriesQueryKey(args: InferRequestType<typeof client.v4.categories.$get>) {
  return ['v4', '/v4/categories', args] as const
}

export function getV4CategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4CategoriesQueryKey>
  >({
    queryKey: getV4CategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4Categories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.categories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4CategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4CategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4Categories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.categories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4CategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4CategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4CategoriesBatchGetQueryKey(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
) {
  return ['v4', '/v4/categories:batchGet', args] as const
}

export function getV4CategoriesBatchGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4CategoriesBatchGetQueryKey>
  >({
    queryKey: getV4CategoriesBatchGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['categories:batchGet'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4CategoriesBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4CategoriesBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4CategoriesBatchGetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4CategoriesBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4CategoriesBatchGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4CategoriesBatchGetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4ChainsSearchQueryKey(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
) {
  return ['v4', '/v4/chains:search', args] as const
}

export function getV4ChainsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ChainsSearchQueryKey>
  >({
    queryKey: getV4ChainsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['chains:search'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4ChainsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ChainsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ChainsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ChainsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ChainsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ChainsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4GoogleLocationsSearchMutationKey() {
  return ['v4', '/v4/googleLocations:search', 'POST'] as const
}

export function getPostV4GoogleLocationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)['googleLocations:search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['googleLocations:search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4GoogleLocationsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)['googleLocations:search']['$post']>,
    ) {
      return parseResponse(client.v4['googleLocations:search'].$post(args, options))
    },
  })
}

export function usePostV4GoogleLocationsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)['googleLocations:search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)['googleLocations:search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4GoogleLocationsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getV4NameQueryKey(args: InferRequestType<(typeof client.v4)[':name']['$get']>) {
  return ['v4', '/v4/:name', args] as const
}

export function getV4NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v4)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameQueryKey>
  >({
    queryKey: getV4NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV4NameMutationKey() {
  return ['v4', '/v4/:name', 'PUT'] as const
}

export function getPutV4NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name']['$put']>) {
      return parseResponse(client.v4[':name'].$put(args, options))
    },
  })
}

export function usePutV4Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV4NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV4NameMutationKey() {
  return ['v4', '/v4/:name', 'DELETE'] as const
}

export function getDeleteV4NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name']['$delete']>) {
      return parseResponse(client.v4[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV4Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV4NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV4NameMutationKey() {
  return ['v4', '/v4/:name', 'PATCH'] as const
}

export function getPatchV4NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV4NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name']['$patch']>) {
      return parseResponse(client.v4[':name'].$patch(args, options))
    },
  })
}

export function usePatchV4Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV4NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV4NameLocalPostsReportInsightsMutationKey() {
  return ['v4', '/v4/:name/localPosts:reportInsights', 'POST'] as const
}

export function getPostV4NameLocalPostsReportInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameLocalPostsReportInsightsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>,
    ) {
      return parseResponse(client.v4[':name']['localPosts:reportInsights'].$post(args, options))
    },
  })
}

export function usePostV4NameLocalPostsReportInsights<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameLocalPostsReportInsightsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV4NameLocationsBatchGetMutationKey() {
  return ['v4', '/v4/:name/locations:batchGet', 'POST'] as const
}

export function getPostV4NameLocationsBatchGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['locations:batchGet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['locations:batchGet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameLocationsBatchGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':name']['locations:batchGet']['$post']>,
    ) {
      return parseResponse(client.v4[':name']['locations:batchGet'].$post(args, options))
    },
  })
}

export function usePostV4NameLocationsBatchGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name']['locations:batchGet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['locations:batchGet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameLocationsBatchGetMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameLocationsBatchGetReviewsMutationKey() {
  return ['v4', '/v4/:name/locations:batchGetReviews', 'POST'] as const
}

export function getPostV4NameLocationsBatchGetReviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameLocationsBatchGetReviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>,
    ) {
      return parseResponse(client.v4[':name']['locations:batchGetReviews'].$post(args, options))
    },
  })
}

export function usePostV4NameLocationsBatchGetReviews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameLocationsBatchGetReviewsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV4NameLocationsReportInsightsMutationKey() {
  return ['v4', '/v4/:name/locations:reportInsights', 'POST'] as const
}

export function getPostV4NameLocationsReportInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameLocationsReportInsightsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>,
    ) {
      return parseResponse(client.v4[':name']['locations:reportInsights'].$post(args, options))
    },
  })
}

export function usePostV4NameLocationsReportInsights<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameLocationsReportInsightsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutV4NameReplyMutationKey() {
  return ['v4', '/v4/:name/reply', 'PUT'] as const
}

export function getPutV4NameReplyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['reply']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['reply']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NameReplyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name']['reply']['$put']>) {
      return parseResponse(client.v4[':name'].reply.$put(args, options))
    },
  })
}

export function usePutV4NameReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['reply']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['reply']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV4NameReplyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV4NameReplyMutationKey() {
  return ['v4', '/v4/:name/reply', 'DELETE'] as const
}

export function getDeleteV4NameReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['reply']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name']['reply']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NameReplyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name']['reply']['$delete']>) {
      return parseResponse(client.v4[':name'].reply.$delete(args, options))
    },
  })
}

export function useDeleteV4NameReply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name']['reply']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name']['reply']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV4NameReplyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameAcceptMutationKey() {
  return ['v4', '/v4/:name:accept', 'POST'] as const
}

export function getPostV4NameAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:accept']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameAcceptMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:accept']['$post']>) {
      return parseResponse(client.v4[':name:accept'].$post(args, options))
    },
  })
}

export function usePostV4NameAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:accept']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameAssociateMutationKey() {
  return ['v4', '/v4/:name:associate', 'POST'] as const
}

export function getPostV4NameAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:associate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:associate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameAssociateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:associate']['$post']>) {
      return parseResponse(client.v4[':name:associate'].$post(args, options))
    },
  })
}

export function usePostV4NameAssociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:associate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:associate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameAssociateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameClearAssociationMutationKey() {
  return ['v4', '/v4/:name:clearAssociation', 'POST'] as const
}

export function getPostV4NameClearAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:clearAssociation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:clearAssociation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameClearAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':name:clearAssociation']['$post']>,
    ) {
      return parseResponse(client.v4[':name:clearAssociation'].$post(args, options))
    },
  })
}

export function usePostV4NameClearAssociation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:clearAssociation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:clearAssociation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameClearAssociationMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameCompleteMutationKey() {
  return ['v4', '/v4/:name:complete', 'POST'] as const
}

export function getPostV4NameCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:complete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameCompleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:complete']['$post']>) {
      return parseResponse(client.v4[':name:complete'].$post(args, options))
    },
  })
}

export function usePostV4NameComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:complete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:complete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameDeclineMutationKey() {
  return ['v4', '/v4/:name:decline', 'POST'] as const
}

export function getPostV4NameDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:decline']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:decline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameDeclineMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:decline']['$post']>) {
      return parseResponse(client.v4[':name:decline'].$post(args, options))
    },
  })
}

export function usePostV4NameDecline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:decline']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:decline']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameDeclineMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameFetchVerificationOptionsMutationKey() {
  return ['v4', '/v4/:name:fetchVerificationOptions', 'POST'] as const
}

export function getPostV4NameFetchVerificationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameFetchVerificationOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>,
    ) {
      return parseResponse(client.v4[':name:fetchVerificationOptions'].$post(args, options))
    },
  })
}

export function usePostV4NameFetchVerificationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameFetchVerificationOptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV4NameFindMatchesMutationKey() {
  return ['v4', '/v4/:name:findMatches', 'POST'] as const
}

export function getPostV4NameFindMatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:findMatches']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:findMatches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameFindMatchesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:findMatches']['$post']>) {
      return parseResponse(client.v4[':name:findMatches'].$post(args, options))
    },
  })
}

export function usePostV4NameFindMatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:findMatches']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:findMatches']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameFindMatchesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameGenerateAccountNumberMutationKey() {
  return ['v4', '/v4/:name:generateAccountNumber', 'POST'] as const
}

export function getPostV4NameGenerateAccountNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:generateAccountNumber']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:generateAccountNumber']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameGenerateAccountNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':name:generateAccountNumber']['$post']>,
    ) {
      return parseResponse(client.v4[':name:generateAccountNumber'].$post(args, options))
    },
  })
}

export function usePostV4NameGenerateAccountNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:generateAccountNumber']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:generateAccountNumber']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameGenerateAccountNumberMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV4NameGetGoogleUpdatedQueryKey(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
) {
  return ['v4', '/v4/:name:getGoogleUpdated', args] as const
}

export function getV4NameGetGoogleUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameGetGoogleUpdatedQueryKey>
  >({
    queryKey: getV4NameGetGoogleUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':name:getGoogleUpdated'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4NameGetGoogleUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameGetGoogleUpdatedQueryKey>
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
      ...getV4NameGetGoogleUpdatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NameGetGoogleUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameGetGoogleUpdatedQueryKey>
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
      ...getV4NameGetGoogleUpdatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4NameGoogleUpdatedQueryKey(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
) {
  return ['v4', '/v4/:name:googleUpdated', args] as const
}

export function getV4NameGoogleUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameGoogleUpdatedQueryKey>
  >({
    queryKey: getV4NameGoogleUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':name:googleUpdated'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4NameGoogleUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameGoogleUpdatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4NameGoogleUpdatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4NameGoogleUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameGoogleUpdatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4NameGoogleUpdatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4NameRecommendGoogleLocationsQueryKey(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
) {
  return ['v4', '/v4/:name:recommendGoogleLocations', args] as const
}

export function getV4NameRecommendGoogleLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameRecommendGoogleLocationsQueryKey>
  >({
    queryKey: getV4NameRecommendGoogleLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':name:recommendGoogleLocations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4NameRecommendGoogleLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameRecommendGoogleLocationsQueryKey>
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
      ...getV4NameRecommendGoogleLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NameRecommendGoogleLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NameRecommendGoogleLocationsQueryKey>
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
      ...getV4NameRecommendGoogleLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV4NameReportMutationKey() {
  return ['v4', '/v4/:name:report', 'POST'] as const
}

export function getPostV4NameReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:report']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:report']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameReportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:report']['$post']>) {
      return parseResponse(client.v4[':name:report'].$post(args, options))
    },
  })
}

export function usePostV4NameReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:report']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:report']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameReportMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameTransferMutationKey() {
  return ['v4', '/v4/:name:transfer', 'POST'] as const
}

export function getPostV4NameTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:transfer']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameTransferMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:transfer']['$post']>) {
      return parseResponse(client.v4[':name:transfer'].$post(args, options))
    },
  })
}

export function usePostV4NameTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:transfer']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:transfer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameTransferMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4NameVerifyMutationKey() {
  return ['v4', '/v4/:name:verify', 'POST'] as const
}

export function getPostV4NameVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:verify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':name:verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NameVerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':name:verify']['$post']>) {
      return parseResponse(client.v4[':name:verify'].$post(args, options))
    },
  })
}

export function usePostV4NameVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:verify']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':name:verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4NameVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentAdminsQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
) {
  return ['v4', '/v4/:parent/admins', args] as const
}

export function getV4ParentAdminsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentAdminsQueryKey>
  >({
    queryKey: getV4ParentAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].admins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4ParentAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4ParentAdminsMutationKey() {
  return ['v4', '/v4/:parent/admins', 'POST'] as const
}

export function getPostV4ParentAdminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['admins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ParentAdminsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':parent']['admins']['$post']>) {
      return parseResponse(client.v4[':parent'].admins.$post(args, options))
    },
  })
}

export function usePostV4ParentAdmins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['admins']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ParentAdminsMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentAnswersQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
) {
  return ['v4', '/v4/:parent/answers', args] as const
}

export function getV4ParentAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentAnswersQueryKey>
  >({
    queryKey: getV4ParentAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].answers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4ParentAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentAnswersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentAnswersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV4ParentAnswersDeleteMutationKey() {
  return ['v4', '/v4/:parent/answers:delete', 'DELETE'] as const
}

export function getDeleteV4ParentAnswersDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['answers:delete']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['answers:delete']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4ParentAnswersDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':parent']['answers:delete']['$delete']>,
    ) {
      return parseResponse(client.v4[':parent']['answers:delete'].$delete(args, options))
    },
  })
}

export function useDeleteV4ParentAnswersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['answers:delete']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['answers:delete']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV4ParentAnswersDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4ParentAnswersUpsertMutationKey() {
  return ['v4', '/v4/:parent/answers:upsert', 'POST'] as const
}

export function getPostV4ParentAnswersUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['answers:upsert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['answers:upsert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ParentAnswersUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':parent']['answers:upsert']['$post']>,
    ) {
      return parseResponse(client.v4[':parent']['answers:upsert'].$post(args, options))
    },
  })
}

export function usePostV4ParentAnswersUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['answers:upsert']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['answers:upsert']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ParentAnswersUpsertMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentInsuranceNetworksQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
) {
  return ['v4', '/v4/:parent/insuranceNetworks', args] as const
}

export function getV4ParentInsuranceNetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentInsuranceNetworksQueryKey>
  >({
    queryKey: getV4ParentInsuranceNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].insuranceNetworks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ParentInsuranceNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentInsuranceNetworksQueryKey>
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
      ...getV4ParentInsuranceNetworksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4ParentInsuranceNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentInsuranceNetworksQueryKey>
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
      ...getV4ParentInsuranceNetworksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4ParentInvitationsQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
) {
  return ['v4', '/v4/:parent/invitations', args] as const
}

export function getV4ParentInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentInvitationsQueryKey>
  >({
    queryKey: getV4ParentInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ParentInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentInvitationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4ParentLocalPostsQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
) {
  return ['v4', '/v4/:parent/localPosts', args] as const
}

export function getV4ParentLocalPostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentLocalPostsQueryKey>
  >({
    queryKey: getV4ParentLocalPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].localPosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ParentLocalPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentLocalPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentLocalPostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentLocalPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentLocalPostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentLocalPostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4ParentLocalPostsMutationKey() {
  return ['v4', '/v4/:parent/localPosts', 'POST'] as const
}

export function getPostV4ParentLocalPostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['localPosts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ParentLocalPostsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$post']>) {
      return parseResponse(client.v4[':parent'].localPosts.$post(args, options))
    },
  })
}

export function usePostV4ParentLocalPosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['localPosts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ParentLocalPostsMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentLocationsQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
) {
  return ['v4', '/v4/:parent/locations', args] as const
}

export function getV4ParentLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentLocationsQueryKey>
  >({
    queryKey: getV4ParentLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ParentLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4ParentLocationsMutationKey() {
  return ['v4', '/v4/:parent/locations', 'POST'] as const
}

export function getPostV4ParentLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['locations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ParentLocationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':parent']['locations']['$post']>) {
      return parseResponse(client.v4[':parent'].locations.$post(args, options))
    },
  })
}

export function usePostV4ParentLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['locations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ParentLocationsMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentMediaQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
) {
  return ['v4', '/v4/:parent/media', args] as const
}

export function getV4ParentMediaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentMediaQueryKey>
  >({
    queryKey: getV4ParentMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4ParentMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentMediaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4ParentMediaMutationKey() {
  return ['v4', '/v4/:parent/media', 'POST'] as const
}

export function getPostV4ParentMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ParentMediaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':parent']['media']['$post']>) {
      return parseResponse(client.v4[':parent'].media.$post(args, options))
    },
  })
}

export function usePostV4ParentMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['media']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ParentMediaMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentMediaCustomersQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
) {
  return ['v4', '/v4/:parent/media/customers', args] as const
}

export function getV4ParentMediaCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentMediaCustomersQueryKey>
  >({
    queryKey: getV4ParentMediaCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].media.customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ParentMediaCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentMediaCustomersQueryKey>
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
      ...getV4ParentMediaCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4ParentMediaCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentMediaCustomersQueryKey>
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
      ...getV4ParentMediaCustomersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV4ParentMediaStartUploadMutationKey() {
  return ['v4', '/v4/:parent/media:startUpload', 'POST'] as const
}

export function getPostV4ParentMediaStartUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['media:startUpload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['media:startUpload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ParentMediaStartUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)[':parent']['media:startUpload']['$post']>,
    ) {
      return parseResponse(client.v4[':parent']['media:startUpload'].$post(args, options))
    },
  })
}

export function usePostV4ParentMediaStartUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['media:startUpload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['media:startUpload']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ParentMediaStartUploadMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentQuestionsQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
) {
  return ['v4', '/v4/:parent/questions', args] as const
}

export function getV4ParentQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentQuestionsQueryKey>
  >({
    queryKey: getV4ParentQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].questions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ParentQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentQuestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentQuestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4ParentQuestionsMutationKey() {
  return ['v4', '/v4/:parent/questions', 'POST'] as const
}

export function getPostV4ParentQuestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)[':parent']['questions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ParentQuestionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)[':parent']['questions']['$post']>) {
      return parseResponse(client.v4[':parent'].questions.$post(args, options))
    },
  })
}

export function usePostV4ParentQuestions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v4)[':parent']['questions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4ParentQuestionsMutationOptions<TError, TOnMutateResult>(
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

export function getV4ParentReviewsQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
) {
  return ['v4', '/v4/:parent/reviews', args] as const
}

export function getV4ParentReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentReviewsQueryKey>
  >({
    queryKey: getV4ParentReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].reviews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4ParentReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4ParentReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4ParentReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4ParentReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4ParentVerificationsQueryKey(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
) {
  return ['v4', '/v4/:parent/verifications', args] as const
}

export function getV4ParentVerificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentVerificationsQueryKey>
  >({
    queryKey: getV4ParentVerificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4[':parent'].verifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4ParentVerifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentVerificationsQueryKey>
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
      ...getV4ParentVerificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4ParentVerifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4ParentVerificationsQueryKey>
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
      ...getV4ParentVerificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
