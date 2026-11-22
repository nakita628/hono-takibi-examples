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

export function getV4Key() {
  return ['v4'] as const
}

export function getV4AccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.accounts.$get>>,
) {
  return ['v4', '/v4/accounts', toValue(args)] as const
}

export function getV4AccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4AccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
          >,
          ReturnType<typeof getV4AccountsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4AccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.accounts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getV4AttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.attributes.$get>>,
) {
  return ['v4', '/v4/attributes', toValue(args)] as const
}

export function getV4AttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.attributes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4AttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4Attributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.attributes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
          >,
          ReturnType<typeof getV4AttributesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4AttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4AttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4CategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.categories.$get>>,
) {
  return ['v4', '/v4/categories', toValue(args)] as const
}

export function getV4CategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4CategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4Categories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
          >,
          ReturnType<typeof getV4CategoriesQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4CategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4CategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4CategoriesBatchGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>>,
) {
  return ['v4', '/v4/categories:batchGet', toValue(args)] as const
}

export function getV4CategoriesBatchGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4CategoriesBatchGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4['categories:batchGet'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4CategoriesBatchGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4CategoriesBatchGetQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4CategoriesBatchGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4CategoriesBatchGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4['categories:batchGet'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4ChainsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)['chains:search']['$get']>>,
) {
  return ['v4', '/v4/chains:search', toValue(args)] as const
}

export function getV4ChainsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)['chains:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ChainsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4['chains:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ChainsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)['chains:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
            >
          >,
          ReturnType<typeof getV4ChainsSearchQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ChainsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ChainsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4['chains:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV4NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name']['$get']>>,
) {
  return ['v4', '/v4/:name', toValue(args)] as const
}

export function getV4NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV4NameQueryKey>
        >,
        { queryKey: unknown }
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':name']['reply']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name']['reply']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':name:complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name:complete']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':name:decline']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name:decline']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>,
) {
  return ['v4', '/v4/:name:getGoogleUpdated', toValue(args)] as const
}

export function getV4NameGetGoogleUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4NameGetGoogleUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':name:getGoogleUpdated'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4NameGetGoogleUpdatedQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameGetGoogleUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4NameGetGoogleUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':name:getGoogleUpdated'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4NameGoogleUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>>,
) {
  return ['v4', '/v4/:name:googleUpdated', toValue(args)] as const
}

export function getV4NameGoogleUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4NameGoogleUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':name:googleUpdated'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4NameGoogleUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4NameGoogleUpdatedQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameGoogleUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4NameGoogleUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':name:googleUpdated'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4NameRecommendGoogleLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>
  >,
) {
  return ['v4', '/v4/:name:recommendGoogleLocations', toValue(args)] as const
}

export function getV4NameRecommendGoogleLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4NameRecommendGoogleLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':name:recommendGoogleLocations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4NameRecommendGoogleLocationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NameRecommendGoogleLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4NameRecommendGoogleLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':name:recommendGoogleLocations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':name:transfer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)[':name:transfer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>>,
) {
  return ['v4', '/v4/:parent/admins', toValue(args)] as const
}

export function getV4ParentAdminsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentAdminsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].admins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ParentAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentAdminsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentAdminsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentAdminsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].admins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>>,
) {
  return ['v4', '/v4/:parent/answers', toValue(args)] as const
}

export function getV4ParentAnswersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].answers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ParentAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentAnswersQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].answers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>
  >,
) {
  return ['v4', '/v4/:parent/insuranceNetworks', toValue(args)] as const
}

export function getV4ParentInsuranceNetworksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentInsuranceNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].insuranceNetworks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentInsuranceNetworksQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentInsuranceNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentInsuranceNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].insuranceNetworks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4ParentInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>>,
) {
  return ['v4', '/v4/:parent/invitations', toValue(args)] as const
}

export function getV4ParentInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].invitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentInvitationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].invitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4ParentLocalPostsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>>,
) {
  return ['v4', '/v4/:parent/localPosts', toValue(args)] as const
}

export function getV4ParentLocalPostsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentLocalPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].localPosts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ParentLocalPosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentLocalPostsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentLocalPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentLocalPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].localPosts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>>,
) {
  return ['v4', '/v4/:parent/locations', toValue(args)] as const
}

export function getV4ParentLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ParentLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentLocationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['media']['$get']>>,
) {
  return ['v4', '/v4/:parent/media', toValue(args)] as const
}

export function getV4ParentMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].media.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ParentMedia<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentMediaQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>
  >,
) {
  return ['v4', '/v4/:parent/media/customers', toValue(args)] as const
}

export function getV4ParentMediaCustomersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentMediaCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].media.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentMediaCustomersQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentMediaCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentMediaCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].media.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>>,
) {
  return ['v4', '/v4/:parent/questions', toValue(args)] as const
}

export function getV4ParentQuestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].questions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ParentQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentQuestionsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>>,
) {
  return ['v4', '/v4/:parent/reviews', toValue(args)] as const
}

export function getV4ParentReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ParentReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentReviewsQueryKey>
        >,
        { queryKey: unknown }
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4ParentVerificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>>,
) {
  return ['v4', '/v4/:parent/verifications', toValue(args)] as const
}

export function getV4ParentVerificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ParentVerificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4[':parent'].verifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4ParentVerificationsQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ParentVerificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ParentVerificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4[':parent'].verifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
