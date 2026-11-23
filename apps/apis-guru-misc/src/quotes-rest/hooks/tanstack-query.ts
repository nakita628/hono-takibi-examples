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

export function getQodKey() {
  return ['qod'] as const
}

export function getQshowKey() {
  return ['qshow'] as const
}

export function getQuoteKey() {
  return ['quote'] as const
}

export function getQodQueryKey(args: InferRequestType<typeof client.qod.$get>) {
  return ['qod', '/qod', args] as const
}

export function getQodQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.qod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQodQueryKey>
  >({
    queryKey: getQodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qod.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQod<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qod.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQodCategoriesQueryKey(
  args: InferRequestType<typeof client.qod.categories.$get>,
) {
  return ['qod', '/qod/categories', args] as const
}

export function getQodCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.qod.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQodCategoriesQueryKey>
  >({
    queryKey: getQodCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qod.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQodCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qod.categories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQodCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQodCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQodCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qod.categories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQodCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQodCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQodLanguagesQueryKey() {
  return ['qod', '/qod/languages'] as const
}

export function getQodLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQodLanguagesQueryKey>
  >({
    queryKey: getQodLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.qod.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQodLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQodLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQodLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQodLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qod.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQodLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQodLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQshowQueryKey(args: InferRequestType<typeof client.qshow.$get>) {
  return ['qshow', '/qshow', args] as const
}

export function getQshowQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.qshow.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQshowQueryKey>
  >({
    queryKey: getQshowQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qshow.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQshow<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qshow.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQshowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQshowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQshow<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qshow.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQshowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQshowQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutQshowMutationKey() {
  return ['qshow', '/qshow', 'PUT'] as const
}

export function getPutQshowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$put>>>>>,
    TError,
    InferRequestType<typeof client.qshow.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQshowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.$put>) {
      return parseResponse(client.qshow.$put(args, options))
    },
  })
}

export function usePutQshow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$put>>>>>,
        TError,
        InferRequestType<typeof client.qshow.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQshowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQshowMutationKey() {
  return ['qshow', '/qshow', 'DELETE'] as const
}

export function getDeleteQshowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$delete>>>>>,
    TError,
    InferRequestType<typeof client.qshow.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQshowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.$delete>) {
      return parseResponse(client.qshow.$delete(args, options))
    },
  })
}

export function useDeleteQshow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$delete>>>>>,
        TError,
        InferRequestType<typeof client.qshow.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQshowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchQshowMutationKey() {
  return ['qshow', '/qshow', 'PATCH'] as const
}

export function getPatchQshowMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$patch>>>>>,
    TError,
    InferRequestType<typeof client.qshow.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchQshowMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.$patch>) {
      return parseResponse(client.qshow.$patch(args, options))
    },
  })
}

export function usePatchQshow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.$patch>>>>>,
        TError,
        InferRequestType<typeof client.qshow.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchQshowMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQshowListQueryKey(args: InferRequestType<typeof client.qshow.list.$get>) {
  return ['qshow', '/qshow/list', args] as const
}

export function getQshowListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.qshow.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQshowListQueryKey>
  >({
    queryKey: getQshowListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qshow.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQshowList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qshow.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQshowListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQshowListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQshowList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qshow.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQshowListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQshowListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQshowQuotesQueryKey(args: InferRequestType<typeof client.qshow.quotes.$get>) {
  return ['qshow', '/qshow/quotes', args] as const
}

export function getQshowQuotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.qshow.quotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQshowQuotesQueryKey>
  >({
    queryKey: getQshowQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.qshow.quotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQshowQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qshow.quotes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQshowQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQshowQuotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQshowQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qshow.quotes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQshowQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQshowQuotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQshowQuotesAddMutationKey() {
  return ['qshow', '/qshow/quotes/add', 'POST'] as const
}

export function getPostQshowQuotesAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qshow.quotes.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQshowQuotesAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.quotes.add.$post>) {
      return parseResponse(client.qshow.quotes.add.$post(args, options))
    },
  })
}

export function usePostQshowQuotesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.qshow.quotes.add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQshowQuotesAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostQshowQuotesRemoveMutationKey() {
  return ['qshow', '/qshow/quotes/remove', 'POST'] as const
}

export function getPostQshowQuotesRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.qshow.quotes.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQshowQuotesRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qshow.quotes.remove.$post>) {
      return parseResponse(client.qshow.quotes.remove.$post(args, options))
    },
  })
}

export function usePostQshowQuotesRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.qshow.quotes.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.qshow.quotes.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQshowQuotesRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteQueryKey(args: InferRequestType<typeof client.quote.$get>) {
  return ['quote', '/quote', args] as const
}

export function getQuoteQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteQueryKey>
  >({
    queryKey: getQuoteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuote<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQuoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuote<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQuoteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutQuoteMutationKey() {
  return ['quote', '/quote', 'PUT'] as const
}

export function getPutQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$put>>>>>,
    TError,
    InferRequestType<typeof client.quote.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$put>) {
      return parseResponse(client.quote.$put(args, options))
    },
  })
}

export function usePutQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$put>>>>>,
        TError,
        InferRequestType<typeof client.quote.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuoteMutationKey() {
  return ['quote', '/quote', 'POST'] as const
}

export function getPostQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$post>>>>>,
    TError,
    InferRequestType<typeof client.quote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$post>) {
      return parseResponse(client.quote.$post(args, options))
    },
  })
}

export function usePostQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$post>>>>>,
        TError,
        InferRequestType<typeof client.quote.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQuoteMutationKey() {
  return ['quote', '/quote', 'DELETE'] as const
}

export function getDeleteQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$delete>>>>>,
    TError,
    InferRequestType<typeof client.quote.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$delete>) {
      return parseResponse(client.quote.$delete(args, options))
    },
  })
}

export function useDeleteQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$delete>>>>>,
        TError,
        InferRequestType<typeof client.quote.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchQuoteMutationKey() {
  return ['quote', '/quote', 'PATCH'] as const
}

export function getPatchQuoteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$patch>>>>>,
    TError,
    InferRequestType<typeof client.quote.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.$patch>) {
      return parseResponse(client.quote.$patch(args, options))
    },
  })
}

export function usePatchQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.$patch>>>>>,
        TError,
        InferRequestType<typeof client.quote.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchQuoteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuoteAuthorsPopularQueryKey(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
) {
  return ['quote', '/quote/authors/popular', args] as const
}

export function getQuoteAuthorsPopularQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteAuthorsPopularQueryKey>
  >({
    queryKey: getQuoteAuthorsPopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.authors.popular.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteAuthorsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteAuthorsPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteAuthorsPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteAuthorsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.authors.popular.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteAuthorsPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteAuthorsPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQuoteAuthorsSearchQueryKey(
  args: InferRequestType<typeof client.quote.authors.search.$get>,
) {
  return ['quote', '/quote/authors/search', args] as const
}

export function getQuoteAuthorsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.authors.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteAuthorsSearchQueryKey>
  >({
    queryKey: getQuoteAuthorsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.authors.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteAuthorsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.authors.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteAuthorsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteAuthorsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteAuthorsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.authors.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.authors.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteAuthorsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteAuthorsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQuoteCategoriesPopularQueryKey(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
) {
  return ['quote', '/quote/categories/popular', args] as const
}

export function getQuoteCategoriesPopularQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteCategoriesPopularQueryKey>
  >({
    queryKey: getQuoteCategoriesPopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.categories.popular.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQuoteCategoriesPopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteCategoriesPopularQueryKey>
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
      ...getQuoteCategoriesPopularQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQuoteCategoriesPopular<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.categories.popular.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.popular.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteCategoriesPopularQueryKey>
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
      ...getQuoteCategoriesPopularQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQuoteCategoriesSearchQueryKey(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
) {
  return ['quote', '/quote/categories/search', args] as const
}

export function getQuoteCategoriesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteCategoriesSearchQueryKey>
  >({
    queryKey: getQuoteCategoriesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.categories.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQuoteCategoriesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteCategoriesSearchQueryKey>
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
      ...getQuoteCategoriesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQuoteCategoriesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.categories.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.categories.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteCategoriesSearchQueryKey>
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
      ...getQuoteCategoriesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutQuoteDislikeMutationKey() {
  return ['quote', '/quote/dislike', 'PUT'] as const
}

export function getPutQuoteDislikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.dislike.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteDislikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.dislike.$put>) {
      return parseResponse(client.quote.dislike.$put(args, options))
    },
  })
}

export function usePutQuoteDislike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.dislike.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuoteDislikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuoteDislikeMutationKey() {
  return ['quote', '/quote/dislike', 'POST'] as const
}

export function getPostQuoteDislikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.dislike.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteDislikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.dislike.$post>) {
      return parseResponse(client.quote.dislike.$post(args, options))
    },
  })
}

export function usePostQuoteDislike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.dislike.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteDislikeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteQuoteDislikeMutationKey() {
  return ['quote', '/quote/dislike', 'DELETE'] as const
}

export function getDeleteQuoteDislikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.dislike.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteDislikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.dislike.$delete>) {
      return parseResponse(client.quote.dislike.$delete(args, options))
    },
  })
}

export function useDeleteQuoteDislike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.dislike.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.dislike.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQuoteDislikeMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageQueryKey(args: InferRequestType<typeof client.quote.image.$get>) {
  return ['quote', '/quote/image', args] as const
}

export function getQuoteImageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.image.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteImageQueryKey>
  >({
    queryKey: getQuoteImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.image.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteImageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteImageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutQuoteImageMutationKey() {
  return ['quote', '/quote/image', 'PUT'] as const
}

export function getPutQuoteImageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$put>>>>>,
    TError,
    InferRequestType<typeof client.quote.image.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.$put>) {
      return parseResponse(client.quote.image.$put(args, options))
    },
  })
}

export function usePutQuoteImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.image.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuoteImageMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQuoteImageMutationKey() {
  return ['quote', '/quote/image', 'DELETE'] as const
}

export function getDeleteQuoteImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.image.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.$delete>) {
      return parseResponse(client.quote.image.$delete(args, options))
    },
  })
}

export function useDeleteQuoteImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.image.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQuoteImageMutationOptions<TError, TOnMutateResult>(
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

export function getPostQuoteImageBackgroundMutationKey() {
  return ['quote', '/quote/image/background', 'POST'] as const
}

export function getPostQuoteImageBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageBackgroundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.background.$post>) {
      return parseResponse(client.quote.image.background.$post(args, options))
    },
  })
}

export function usePostQuoteImageBackground<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.background.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteImageBackgroundMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteQuoteImageBackgroundMutationKey() {
  return ['quote', '/quote/image/background', 'DELETE'] as const
}

export function getDeleteQuoteImageBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteImageBackgroundMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.background.$delete>) {
      return parseResponse(client.quote.image.background.$delete(args, options))
    },
  })
}

export function useDeleteQuoteImageBackground<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.background.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQuoteImageBackgroundMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageBackgroundListQueryKey(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
) {
  return ['quote', '/quote/image/background/list', args] as const
}

export function getQuoteImageBackgroundListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageBackgroundListQueryKey>
  >({
    queryKey: getQuoteImageBackgroundListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.image.background.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQuoteImageBackgroundList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.quote.image.background.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageBackgroundListQueryKey>
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
      ...getQuoteImageBackgroundListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQuoteImageBackgroundList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.background.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.quote.image.background.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageBackgroundListQueryKey>
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
      ...getQuoteImageBackgroundListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getQuoteImageBackgroundSearchQueryKey(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
) {
  return ['quote', '/quote/image/background/search', args] as const
}

export function getQuoteImageBackgroundSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageBackgroundSearchQueryKey>
  >({
    queryKey: getQuoteImageBackgroundSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.image.background.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQuoteImageBackgroundSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageBackgroundSearchQueryKey>
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
      ...getQuoteImageBackgroundSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseQuoteImageBackgroundSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.background.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.background.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.quote.image.background.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageBackgroundSearchQueryKey>
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
      ...getQuoteImageBackgroundSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostQuoteImageBackgroundTagsAddMutationKey() {
  return ['quote', '/quote/image/background/tags/add', 'POST'] as const
}

export function getPostQuoteImageBackgroundTagsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quote.image.background.tags.add.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.tags.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageBackgroundTagsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.background.tags.add.$post>) {
      return parseResponse(client.quote.image.background.tags.add.$post(args, options))
    },
  })
}

export function usePostQuoteImageBackgroundTagsAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.quote.image.background.tags.add.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.background.tags.add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteImageBackgroundTagsAddMutationOptions<
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

export function getPostQuoteImageBackgroundTagsRemoveMutationKey() {
  return ['quote', '/quote/image/background/tags/remove', 'POST'] as const
}

export function getPostQuoteImageBackgroundTagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.quote.image.background.tags.remove.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.background.tags.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageBackgroundTagsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.quote.image.background.tags.remove.$post>,
    ) {
      return parseResponse(client.quote.image.background.tags.remove.$post(args, options))
    },
  })
}

export function usePostQuoteImageBackgroundTagsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.quote.image.background.tags.remove.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.background.tags.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteImageBackgroundTagsRemoveMutationOptions<
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

export function getPostQuoteImageFontMutationKey() {
  return ['quote', '/quote/image/font', 'POST'] as const
}

export function getPostQuoteImageFontMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageFontMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.$post>) {
      return parseResponse(client.quote.image.font.$post(args, options))
    },
  })
}

export function usePostQuoteImageFont<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.font.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteImageFontMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteQuoteImageFontMutationKey() {
  return ['quote', '/quote/image/font', 'DELETE'] as const
}

export function getDeleteQuoteImageFontMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteImageFontMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.$delete>) {
      return parseResponse(client.quote.image.font.$delete(args, options))
    },
  })
}

export function useDeleteQuoteImageFont<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.font.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQuoteImageFontMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageFontListQueryKey(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
) {
  return ['quote', '/quote/image/font/list', args] as const
}

export function getQuoteImageFontListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageFontListQueryKey>
  >({
    queryKey: getQuoteImageFontListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.image.font.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteImageFontList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageFontListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteImageFontListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteImageFontList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.font.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageFontListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteImageFontListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQuoteImageFontSearchQueryKey(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
) {
  return ['quote', '/quote/image/font/search', args] as const
}

export function getQuoteImageFontSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageFontSearchQueryKey>
  >({
    queryKey: getQuoteImageFontSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.image.font.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useQuoteImageFontSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageFontSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteImageFontSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteImageFontSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.font.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageFontSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteImageFontSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQuoteImageFontTagsAddMutationKey() {
  return ['quote', '/quote/image/font/tags/add', 'POST'] as const
}

export function getPostQuoteImageFontTagsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.tags.add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.tags.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageFontTagsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.tags.add.$post>) {
      return parseResponse(client.quote.image.font.tags.add.$post(args, options))
    },
  })
}

export function usePostQuoteImageFontTagsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.tags.add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.font.tags.add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteImageFontTagsAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostQuoteImageFontTagsRemoveMutationKey() {
  return ['quote', '/quote/image/font/tags/remove', 'POST'] as const
}

export function getPostQuoteImageFontTagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.font.tags.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.quote.image.font.tags.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteImageFontTagsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.image.font.tags.remove.$post>) {
      return parseResponse(client.quote.image.font.tags.remove.$post(args, options))
    },
  })
}

export function usePostQuoteImageFontTagsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.quote.image.font.tags.remove.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.quote.image.font.tags.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteImageFontTagsRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getQuoteImageSearchQueryKey(
  args: InferRequestType<typeof client.quote.image.search.$get>,
) {
  return ['quote', '/quote/image/search', args] as const
}

export function getQuoteImageSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.image.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuoteImageSearchQueryKey>
  >({
    queryKey: getQuoteImageSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.image.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteImageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteImageSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteImageSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.image.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.image.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteImageSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteImageSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutQuoteLikeMutationKey() {
  return ['quote', '/quote/like', 'PUT'] as const
}

export function getPutQuoteLikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$put>>>>>,
    TError,
    InferRequestType<typeof client.quote.like.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutQuoteLikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.like.$put>) {
      return parseResponse(client.quote.like.$put(args, options))
    },
  })
}

export function usePutQuoteLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.like.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuoteLikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostQuoteLikeMutationKey() {
  return ['quote', '/quote/like', 'POST'] as const
}

export function getPostQuoteLikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$post>>>>>,
    TError,
    InferRequestType<typeof client.quote.like.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteLikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.like.$post>) {
      return parseResponse(client.quote.like.$post(args, options))
    },
  })
}

export function usePostQuoteLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.like.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteLikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteQuoteLikeMutationKey() {
  return ['quote', '/quote/like', 'DELETE'] as const
}

export function getDeleteQuoteLikeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.like.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQuoteLikeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.like.$delete>) {
      return parseResponse(client.quote.like.$delete(args, options))
    },
  })
}

export function useDeleteQuoteLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.like.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.like.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteQuoteLikeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuoteListQueryKey(args: InferRequestType<typeof client.quote.list.$get>) {
  return ['quote', '/quote/list', args] as const
}

export function getQuoteListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteListQueryKey>
  >({
    queryKey: getQuoteListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQuoteRandomQueryKey(args: InferRequestType<typeof client.quote.random.$get>) {
  return ['quote', '/quote/random', args] as const
}

export function getQuoteRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteRandomQueryKey>
  >({
    queryKey: getQuoteRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.random.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.random.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQuoteSearchQueryKey(args: InferRequestType<typeof client.quote.search.$get>) {
  return ['quote', '/quote/search', args] as const
}

export function getQuoteSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quote.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuoteSearchQueryKey>
  >({
    queryKey: getQuoteSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quote.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuoteSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuoteSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuoteSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quote.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuoteSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuoteSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQuoteTagsAddMutationKey() {
  return ['quote', '/quote/tags/add', 'POST'] as const
}

export function getPostQuoteTagsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.tags.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteTagsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.tags.add.$post>) {
      return parseResponse(client.quote.tags.add.$post(args, options))
    },
  })
}

export function usePostQuoteTagsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.add.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.quote.tags.add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteTagsAddMutationOptions<TError, TOnMutateResult>(
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

export function getPostQuoteTagsRemoveMutationKey() {
  return ['quote', '/quote/tags/remove', 'POST'] as const
}

export function getPostQuoteTagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.quote.tags.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuoteTagsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quote.tags.remove.$post>) {
      return parseResponse(client.quote.tags.remove.$post(args, options))
    },
  })
}

export function usePostQuoteTagsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quote.tags.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.quote.tags.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuoteTagsRemoveMutationOptions<TError, TOnMutateResult>(
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
