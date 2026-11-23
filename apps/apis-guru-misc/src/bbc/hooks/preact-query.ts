import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAvailabilitiesKey() {
  return ['availabilities'] as const
}

export function getBroadcastsKey() {
  return ['broadcasts'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getItemsKey() {
  return ['items'] as const
}

export function getMasterBrandsKey() {
  return ['master_brands'] as const
}

export function getPeopleKey() {
  return ['people'] as const
}

export function getPipsKey() {
  return ['pips'] as const
}

export function getProgrammeDetailsKey() {
  return ['programme_details'] as const
}

export function getProgrammesKey() {
  return ['programmes'] as const
}

export function getPromotionsKey() {
  return ['promotions'] as const
}

export function getSchedulesKey() {
  return ['schedules'] as const
}

export function getSchemaKey() {
  return ['schema'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getVersionsKey() {
  return ['versions'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAvailabilitiesQueryKey(
  args: InferRequestType<typeof client.availabilities.$get>,
) {
  return ['availabilities', '/availabilities', args] as const
}

export function getAvailabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.availabilities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvailabilitiesQueryKey>
  >({
    queryKey: getAvailabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.availabilities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAvailabilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.availabilities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvailabilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAvailabilitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAvailabilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.availabilities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvailabilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAvailabilitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBroadcastsQueryKey(args: InferRequestType<typeof client.broadcasts.$get>) {
  return ['broadcasts', '/broadcasts', args] as const
}

export function getBroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.broadcasts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBroadcastsQueryKey>
  >({
    queryKey: getBroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.broadcasts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBroadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBroadcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBroadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.broadcasts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBroadcastsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsQueryKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getImagesQueryKey(args: InferRequestType<typeof client.images.$get>) {
  return ['images', '/images', args] as const
}

export function getImagesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >({
    queryKey: getImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getItemsQueryKey(args: InferRequestType<typeof client.items.$get>) {
  return ['items', '/items', args] as const
}

export function getItemsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >({
    queryKey: getItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMasterBrandsQueryKey(args: InferRequestType<typeof client.master_brands.$get>) {
  return ['master_brands', '/master_brands', args] as const
}

export function getMasterBrandsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.master_brands.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterBrandsQueryKey>
  >({
    queryKey: getMasterBrandsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.master_brands.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMasterBrands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master_brands.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMasterBrandsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMasterBrandsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMasterBrands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.master_brands.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMasterBrandsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMasterBrandsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleQueryKey(args: InferRequestType<typeof client.people.$get>) {
  return ['people', '/people', args] as const
}

export function getPeopleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.people.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >({
    queryKey: getPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.people.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.people.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPipsQueryKey(args: InferRequestType<typeof client.pips.$get>) {
  return ['pips', '/pips', args] as const
}

export function getPipsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPipsQueryKey>
  >({
    queryKey: getPipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePips<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pips.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePips<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pips.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProgrammeDetailsQueryKey(
  args: InferRequestType<typeof client.programme_details.$get>,
) {
  return ['programme_details', '/programme_details', args] as const
}

export function getProgrammeDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.programme_details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProgrammeDetailsQueryKey>
  >({
    queryKey: getProgrammeDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.programme_details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProgrammeDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.programme_details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProgrammeDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProgrammeDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProgrammeDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.programme_details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProgrammeDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProgrammeDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProgrammesQueryKey(args: InferRequestType<typeof client.programmes.$get>) {
  return ['programmes', '/programmes', args] as const
}

export function getProgrammesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.programmes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProgrammesQueryKey>
  >({
    queryKey: getProgrammesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.programmes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProgrammes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.programmes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProgrammesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProgrammesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProgrammes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.programmes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProgrammesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProgrammesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPromotionsQueryKey(args: InferRequestType<typeof client.promotions.$get>) {
  return ['promotions', '/promotions', args] as const
}

export function getPromotionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.promotions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPromotionsQueryKey>
  >({
    queryKey: getPromotionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.promotions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePromotions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPromotionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePromotions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPromotionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSchedulesQueryKey(args: InferRequestType<typeof client.schedules.$get>) {
  return ['schedules', '/schedules', args] as const
}

export function getSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >({
    queryKey: getSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchedulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSchemaQueryKey() {
  return ['schema', '/schema'] as const
}

export function getSchemaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemaQueryKey>
  >({
    queryKey: getSchemaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.schema.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchemaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServicesQueryKey(args: InferRequestType<typeof client.services.$get>) {
  return ['services', '/services', args] as const
}

export function getServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >({
    queryKey: getServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.services.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BrandsPidQueryKey(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['$get']>,
) {
  return ['v1', '/v1/brands/:pid', args] as const
}

export function getV1BrandsPidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandsPidQueryKey>
  >({
    queryKey: getV1BrandsPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.brands[':pid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BrandsPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BrandsPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BrandsPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BrandsPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BrandsPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BrandsPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1BrandsPidFranchisesIndexQueryKey(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>,
) {
  return ['v1', '/v1/brands/:pid/franchises/', args] as const
}

export function getV1BrandsPidFranchisesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandsPidFranchisesIndexQueryKey>
  >({
    queryKey: getV1BrandsPidFranchisesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.brands[':pid'].franchises.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BrandsPidFranchisesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BrandsPidFranchisesIndexQueryKey>
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
      ...getV1BrandsPidFranchisesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BrandsPidFranchisesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BrandsPidFranchisesIndexQueryKey>
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
      ...getV1BrandsPidFranchisesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1EpisodesPidQueryKey(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>,
) {
  return ['v1', '/v1/episodes/:pid', args] as const
}

export function getV1EpisodesPidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidQueryKey>
  >({
    queryKey: getV1EpisodesPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.episodes[':pid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1EpisodesPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EpisodesPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EpisodesPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EpisodesPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1EpisodesPidAncestorsIndexQueryKey(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>,
) {
  return ['v1', '/v1/episodes/:pid/ancestors/', args] as const
}

export function getV1EpisodesPidAncestorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidAncestorsIndexQueryKey>
  >({
    queryKey: getV1EpisodesPidAncestorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.episodes[':pid'].ancestors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EpisodesPidAncestorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidAncestorsIndexQueryKey>
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
      ...getV1EpisodesPidAncestorsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EpisodesPidAncestorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidAncestorsIndexQueryKey>
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
      ...getV1EpisodesPidAncestorsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1EpisodesPidFormatsIndexQueryKey(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>,
) {
  return ['v1', '/v1/episodes/:pid/formats/', args] as const
}

export function getV1EpisodesPidFormatsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidFormatsIndexQueryKey>
  >({
    queryKey: getV1EpisodesPidFormatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.episodes[':pid'].formats.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EpisodesPidFormatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidFormatsIndexQueryKey>
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
      ...getV1EpisodesPidFormatsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EpisodesPidFormatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidFormatsIndexQueryKey>
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
      ...getV1EpisodesPidFormatsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1EpisodesPidGenreGroupsIndexQueryKey(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>,
) {
  return ['v1', '/v1/episodes/:pid/genre_groups/', args] as const
}

export function getV1EpisodesPidGenreGroupsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidGenreGroupsIndexQueryKey>
  >({
    queryKey: getV1EpisodesPidGenreGroupsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.episodes[':pid'].genre_groups.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EpisodesPidGenreGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidGenreGroupsIndexQueryKey>
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
      ...getV1EpisodesPidGenreGroupsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1EpisodesPidGenreGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EpisodesPidGenreGroupsIndexQueryKey>
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
      ...getV1EpisodesPidGenreGroupsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1ImagesPidQueryKey(
  args: InferRequestType<(typeof client.v1.images)[':pid']['$get']>,
) {
  return ['v1', '/v1/images/:pid', args] as const
}

export function getV1ImagesPidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.images)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesPidQueryKey>
  >({
    queryKey: getV1ImagesPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.images[':pid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ImagesPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.images)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ImagesPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ImagesPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ImagesPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.images)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ImagesPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ImagesPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1MasterBrandsMbidQueryKey(
  args: InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>,
) {
  return ['v1', '/v1/master_brands/:mbid', args] as const
}

export function getV1MasterBrandsMbidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MasterBrandsMbidQueryKey>
  >({
    queryKey: getV1MasterBrandsMbidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.master_brands[':mbid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1MasterBrandsMbid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MasterBrandsMbidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MasterBrandsMbidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1MasterBrandsMbid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MasterBrandsMbidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MasterBrandsMbidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1PromotionsPidQueryKey(
  args: InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>,
) {
  return ['v1', '/v1/promotions/:pid', args] as const
}

export function getV1PromotionsPidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PromotionsPidQueryKey>
  >({
    queryKey: getV1PromotionsPidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.promotions[':pid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1PromotionsPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PromotionsPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1PromotionsPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1PromotionsPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PromotionsPidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1PromotionsPidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVersionsQueryKey(args: InferRequestType<typeof client.versions.$get>) {
  return ['versions', '/versions', args] as const
}

export function getVersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.versions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionsQueryKey>
  >({
    queryKey: getVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.versions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.versions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.versions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVersionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
