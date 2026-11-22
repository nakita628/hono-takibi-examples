import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvailabilitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.availabilities.$get>>,
) {
  return ['availabilities', '/availabilities', toValue(args)] as const
}

export function getAvailabilitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.availabilities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvailabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.availabilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAvailabilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.availabilities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
          >,
          ReturnType<typeof getAvailabilitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.availabilities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvailabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvailabilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.availabilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBroadcastsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.broadcasts.$get>>,
) {
  return ['broadcasts', '/broadcasts', toValue(args)] as const
}

export function getBroadcastsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.broadcasts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBroadcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.broadcasts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBroadcasts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.broadcasts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>
          >,
          ReturnType<typeof getBroadcastsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.broadcasts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBroadcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBroadcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.broadcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
) {
  return ['groups', '/groups', toValue(args)] as const
}

export function getGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
) {
  return ['images', '/images', toValue(args)] as const
}

export function getImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          ReturnType<typeof getImagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.items.$get>>,
) {
  return ['items', '/items', toValue(args)] as const
}

export function getItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItems<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
          ReturnType<typeof getItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMasterBrandsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.master_brands.$get>>,
) {
  return ['master_brands', '/master_brands', toValue(args)] as const
}

export function getMasterBrandsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.master_brands.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMasterBrandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.master_brands.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMasterBrands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.master_brands.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
          >,
          ReturnType<typeof getMasterBrandsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.master_brands.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMasterBrandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMasterBrandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.master_brands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
) {
  return ['people', '/people', toValue(args)] as const
}

export function getPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePeople<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.people.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
          ReturnType<typeof getPeopleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.people.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPipsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.pips.$get>>) {
  return ['pips', '/pips', toValue(args)] as const
}

export function getPipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePips<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
          ReturnType<typeof getPipsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProgrammeDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.programme_details.$get>>,
) {
  return ['programme_details', '/programme_details', toValue(args)] as const
}

export function getProgrammeDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.programme_details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProgrammeDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.programme_details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProgrammeDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.programme_details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>
            >
          >,
          ReturnType<typeof getProgrammeDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programme_details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProgrammeDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProgrammeDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.programme_details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProgrammesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.programmes.$get>>,
) {
  return ['programmes', '/programmes', toValue(args)] as const
}

export function getProgrammesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.programmes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProgrammesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.programmes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProgrammes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.programmes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>
          >,
          ReturnType<typeof getProgrammesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.programmes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProgrammesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProgrammesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.programmes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPromotionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.promotions.$get>>,
) {
  return ['promotions', '/promotions', toValue(args)] as const
}

export function getPromotionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.promotions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPromotionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.promotions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePromotions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.promotions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>
          >,
          ReturnType<typeof getPromotionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPromotionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPromotionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.promotions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
) {
  return ['schedules', '/schedules', toValue(args)] as const
}

export function getSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          ReturnType<typeof getSchedulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemaQueryKey() {
  return ['schema', '/schema'] as const
}

export function getSchemaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSchemaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchema<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
          ReturnType<typeof getSchemaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSchemaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.schema.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
) {
  return ['services', '/services', toValue(args)] as const
}

export function getServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          ReturnType<typeof getServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BrandsPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.brands)[':pid']['$get']>>,
) {
  return ['v1', '/v1/brands/:pid', toValue(args)] as const
}

export function getV1BrandsPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.brands)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrandsPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.brands[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1BrandsPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.brands)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>
            >
          >,
          ReturnType<typeof getV1BrandsPidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.brands)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandsPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrandsPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.brands[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1BrandsPidFranchisesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>
  >,
) {
  return ['v1', '/v1/brands/:pid/franchises/', toValue(args)] as const
}

export function getV1BrandsPidFranchisesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1BrandsPidFranchisesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.brands[':pid'].franchises.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>
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
                  ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1BrandsPidFranchisesIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.brands)[':pid']['franchises']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BrandsPidFranchisesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1BrandsPidFranchisesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.brands[':pid'].franchises.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EpisodesPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>>,
) {
  return ['v1', '/v1/episodes/:pid', toValue(args)] as const
}

export function getV1EpisodesPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EpisodesPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.episodes[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EpisodesPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.episodes)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
            >
          >,
          ReturnType<typeof getV1EpisodesPidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EpisodesPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.episodes[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EpisodesPidAncestorsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>
  >,
) {
  return ['v1', '/v1/episodes/:pid/ancestors/', toValue(args)] as const
}

export function getV1EpisodesPidAncestorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EpisodesPidAncestorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.episodes[':pid'].ancestors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>
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
                  ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1EpisodesPidAncestorsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['ancestors']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidAncestorsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EpisodesPidAncestorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.episodes[':pid'].ancestors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EpisodesPidFormatsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>
  >,
) {
  return ['v1', '/v1/episodes/:pid/formats/', toValue(args)] as const
}

export function getV1EpisodesPidFormatsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EpisodesPidFormatsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.episodes[':pid'].formats.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EpisodesPidFormatsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['formats']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidFormatsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EpisodesPidFormatsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.episodes[':pid'].formats.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EpisodesPidGenreGroupsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>
  >,
) {
  return ['v1', '/v1/episodes/:pid/genre_groups/', toValue(args)] as const
}

export function getV1EpisodesPidGenreGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EpisodesPidGenreGroupsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.episodes[':pid'].genre_groups.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1EpisodesPidGenreGroupsIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.episodes)[':pid']['genre_groups']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EpisodesPidGenreGroupsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EpisodesPidGenreGroupsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.episodes[':pid'].genre_groups.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ImagesPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.images)[':pid']['$get']>>,
) {
  return ['v1', '/v1/images/:pid', toValue(args)] as const
}

export function getV1ImagesPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.images)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ImagesPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.images[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ImagesPid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.images)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ImagesPidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.images)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ImagesPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ImagesPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.images[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MasterBrandsMbidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>>,
) {
  return ['v1', '/v1/master_brands/:mbid', toValue(args)] as const
}

export function getV1MasterBrandsMbidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MasterBrandsMbidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.master_brands[':mbid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MasterBrandsMbid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.master_brands)[':mbid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MasterBrandsMbidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.master_brands)[':mbid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MasterBrandsMbidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MasterBrandsMbidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.master_brands[':mbid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PromotionsPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>>,
) {
  return ['v1', '/v1/promotions/:pid', toValue(args)] as const
}

export function getV1PromotionsPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PromotionsPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.promotions[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PromotionsPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.promotions)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PromotionsPidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.promotions)[':pid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PromotionsPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PromotionsPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.promotions[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.versions.$get>>,
) {
  return ['versions', '/versions', toValue(args)] as const
}

export function getVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.versions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.versions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.versions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
          >,
          ReturnType<typeof getVersionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
