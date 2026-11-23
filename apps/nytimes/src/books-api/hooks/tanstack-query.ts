import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getListsKey() {
  return ['lists'] as const
}

export function getListsFormatKey() {
  return ['lists.{format}'] as const
}

export function getReviewsFormatKey() {
  return ['reviews.{format}'] as const
}

export function getListsFormatQueryKey(
  args: InferRequestType<(typeof client)['lists.:format']['$get']>,
) {
  return ['lists.:format', '/lists.:format', args] as const
}

export function getListsFormatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.:format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['lists.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.:format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsFormatQueryKey>
  >({
    queryKey: getListsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['lists.:format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.:format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['lists.:format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.:format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.:format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['lists.:format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.:format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsBestSellersHistoryJsonQueryKey(
  args: InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
) {
  return ['lists', '/lists/best-sellers/history.json', args] as const
}

export function getListsBestSellersHistoryJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsBestSellersHistoryJsonQueryKey>
  >({
    queryKey: getListsBestSellersHistoryJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists['best-sellers']['history.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListsBestSellersHistoryJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsBestSellersHistoryJsonQueryKey>
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
      ...getListsBestSellersHistoryJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseListsBestSellersHistoryJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsBestSellersHistoryJsonQueryKey>
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
      ...getListsBestSellersHistoryJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getListsNamesFormatQueryKey(
  args: InferRequestType<(typeof client.lists)['names.:format']['$get']>,
) {
  return ['lists', '/lists/names.:format', args] as const
}

export function getListsNamesFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['names.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.:format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsNamesFormatQueryKey>
  >({
    queryKey: getListsNamesFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists['names.:format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListsNamesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['names.:format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['names.:format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsNamesFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsNamesFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsNamesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['names.:format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['names.:format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsNamesFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsNamesFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsOverviewFormatQueryKey(
  args: InferRequestType<(typeof client.lists)['overview.:format']['$get']>,
) {
  return ['lists', '/lists/overview.:format', args] as const
}

export function getListsOverviewFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['overview.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['overview.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['overview.:format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsOverviewFormatQueryKey>
  >({
    queryKey: getListsOverviewFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists['overview.:format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListsOverviewFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['overview.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['overview.:format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['overview.:format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsOverviewFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsOverviewFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsOverviewFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['overview.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['overview.:format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['overview.:format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsOverviewFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsOverviewFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsDateListJsonQueryKey(
  args: InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
) {
  return ['lists', '/lists/:date/:list.json', args] as const
}

export function getListsDateListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsDateListJsonQueryKey>
  >({
    queryKey: getListsDateListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':date'][':list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListsDateListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsDateListJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsDateListJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsDateListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsDateListJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsDateListJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReviewsFormatQueryKey(
  args: InferRequestType<(typeof client)['reviews.:format']['$get']>,
) {
  return ['reviews.:format', '/reviews.:format', args] as const
}

export function getReviewsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reviews.:format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.:format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsFormatQueryKey>
  >({
    queryKey: getReviewsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reviews.:format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReviewsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reviews.:format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.:format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReviewsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReviewsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reviews.:format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.:format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReviewsFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
