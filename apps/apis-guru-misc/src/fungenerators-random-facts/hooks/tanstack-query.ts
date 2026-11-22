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

export function getFactKey() {
  return ['fact'] as const
}

export function getFactQueryKey(args: InferRequestType<typeof client.fact.$get>) {
  return ['fact', '/fact', args] as const
}

export function getFactQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactQueryKey>
  >({
    queryKey: getFactQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFact<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFactQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFact<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFactQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFactMutationKey() {
  return ['fact', '/fact', 'PUT'] as const
}

export function getPutFactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$put>>>>>,
    TError,
    InferRequestType<typeof client.fact.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fact.$put>) {
      return parseResponse(client.fact.$put(args, options))
    },
  })
}

export function usePutFact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$put>>>>>,
        TError,
        InferRequestType<typeof client.fact.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFactMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFactMutationKey() {
  return ['fact', '/fact', 'DELETE'] as const
}

export function getDeleteFactMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$delete>>>>>,
    TError,
    InferRequestType<typeof client.fact.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFactMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fact.$delete>) {
      return parseResponse(client.fact.$delete(args, options))
    },
  })
}

export function useDeleteFact<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.$delete>>>>>,
        TError,
        InferRequestType<typeof client.fact.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFactMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFactCategoriesQueryKey(
  args: InferRequestType<typeof client.fact.categories.$get>,
) {
  return ['fact', '/fact/categories', args] as const
}

export function getFactCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactCategoriesQueryKey>
  >({
    queryKey: getFactCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.categories.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.categories.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactCategoriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactFodQueryKey(args: InferRequestType<typeof client.fact.fod.$get>) {
  return ['fact', '/fact/fod', args] as const
}

export function getFactFodQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.fod.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactFodQueryKey>
  >({
    queryKey: getFactFodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.fod.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactFod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.fod.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFactFodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactFodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactFod<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.fod.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFactFodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactFodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactFodCategoriesQueryKey() {
  return ['fact', '/fact/fod/categories'] as const
}

export function getFactFodCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactFodCategoriesQueryKey>
  >({
    queryKey: getFactFodCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.fod.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFactFodCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactFodCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactFodCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactFodCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.fod.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactFodCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactFodCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactNumbersQueryKey(args: InferRequestType<typeof client.fact.numbers.$get>) {
  return ['fact', '/fact/numbers', args] as const
}

export function getFactNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.numbers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactNumbersQueryKey>
  >({
    queryKey: getFactNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.numbers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.numbers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.numbers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.numbers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactNumbersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactOnthisdayBornQueryKey(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
) {
  return ['fact', '/fact/onthisday/born', args] as const
}

export function getFactOnthisdayBornQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.onthisday.born.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayBornQueryKey>
  >({
    queryKey: getFactOnthisdayBornQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.onthisday.born.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactOnthisdayBorn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayBornQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactOnthisdayBornQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactOnthisdayBorn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.onthisday.born.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.born.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayBornQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactOnthisdayBornQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactOnthisdayDiedQueryKey(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
) {
  return ['fact', '/fact/onthisday/died', args] as const
}

export function getFactOnthisdayDiedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.onthisday.died.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayDiedQueryKey>
  >({
    queryKey: getFactOnthisdayDiedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.onthisday.died.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactOnthisdayDied<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayDiedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactOnthisdayDiedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactOnthisdayDied<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.onthisday.died.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.died.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayDiedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactOnthisdayDiedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactOnthisdayEventQueryKey(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
) {
  return ['fact', '/fact/onthisday/event', args] as const
}

export function getFactOnthisdayEventQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.onthisday.event.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFactOnthisdayEventQueryKey>
  >({
    queryKey: getFactOnthisdayEventQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.onthisday.event.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactOnthisdayEvent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactOnthisdayEventQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactOnthisdayEvent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.onthisday.event.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fact.onthisday.event.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFactOnthisdayEventQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactOnthisdayEventQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactRandomQueryKey(args: InferRequestType<typeof client.fact.random.$get>) {
  return ['fact', '/fact/random', args] as const
}

export function getFactRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactRandomQueryKey>
  >({
    queryKey: getFactRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.random.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.random.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFactSearchQueryKey(args: InferRequestType<typeof client.fact.search.$get>) {
  return ['fact', '/fact/search', args] as const
}

export function getFactSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fact.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFactSearchQueryKey>
  >({
    queryKey: getFactSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fact.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFactSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFactSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFactSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fact.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fact.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFactSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFactSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
