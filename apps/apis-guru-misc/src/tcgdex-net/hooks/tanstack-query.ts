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

export function getCardsKey() {
  return ['cards'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getDexIdsKey() {
  return ['dex-ids'] as const
}

export function getEnergyTypesKey() {
  return ['energy-types'] as const
}

export function getHpKey() {
  return ['hp'] as const
}

export function getIllustratorsKey() {
  return ['illustrators'] as const
}

export function getRaritiesKey() {
  return ['rarities'] as const
}

export function getRegulationMarksKey() {
  return ['regulation-marks'] as const
}

export function getRetreatsKey() {
  return ['retreats'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getSetsKey() {
  return ['sets'] as const
}

export function getStagesKey() {
  return ['stages'] as const
}

export function getSuffixesKey() {
  return ['suffixes'] as const
}

export function getTrainerTypesKey() {
  return ['trainer-types'] as const
}

export function getTypesKey() {
  return ['types'] as const
}

export function getVariantsKey() {
  return ['variants'] as const
}

export function getCardsQueryKey() {
  return ['cards', '/cards'] as const
}

export function getCardsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >({
    queryKey: getCardsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cards.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardsCardIdQueryKey(
  args: InferRequestType<(typeof client.cards)[':cardId']['$get']>,
) {
  return ['cards', '/cards/:cardId', args] as const
}

export function getCardsCardIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':cardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >({
    queryKey: getCardsCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':cardId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':cardId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsCardIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':cardId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsCardIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCategoriesQueryKey() {
  return ['categories', '/categories'] as const
}

export function getCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >({
    queryKey: getCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCategoriesCategoryQueryKey(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
) {
  return ['categories', '/categories/:category', args] as const
}

export function getCategoriesCategoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryQueryKey>
  >({
    queryKey: getCategoriesCategoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categories[':category'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.categories)[':category']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesCategoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCategoriesCategoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDexIdsQueryKey() {
  return ['dex-ids', '/dex-ids'] as const
}

export function getDexIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDexIdsQueryKey>
  >({
    queryKey: getDexIdsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['dex-ids'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDexIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDexIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDexIdsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDexIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDexIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDexIdsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDexIdsDexIdQueryKey(
  args: InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>,
) {
  return ['dex-ids', '/dex-ids/:dexId', args] as const
}

export function getDexIdsDexIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDexIdsDexIdQueryKey>
  >({
    queryKey: getDexIdsDexIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['dex-ids'][':dexId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDexIdsDexId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDexIdsDexIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDexIdsDexIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDexIdsDexId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDexIdsDexIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDexIdsDexIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnergyTypesQueryKey() {
  return ['energy-types', '/energy-types'] as const
}

export function getEnergyTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnergyTypesQueryKey>
  >({
    queryKey: getEnergyTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['energy-types'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEnergyTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnergyTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnergyTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnergyTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnergyTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnergyTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnergyTypesEnergyTypeQueryKey(
  args: InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>,
) {
  return ['energy-types', '/energy-types/:energy-type', args] as const
}

export function getEnergyTypesEnergyTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnergyTypesEnergyTypeQueryKey>
  >({
    queryKey: getEnergyTypesEnergyTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['energy-types'][':energy-type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnergyTypesEnergyType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnergyTypesEnergyTypeQueryKey>
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
      ...getEnergyTypesEnergyTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnergyTypesEnergyType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnergyTypesEnergyTypeQueryKey>
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
      ...getEnergyTypesEnergyTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHpQueryKey() {
  return ['hp', '/hp'] as const
}

export function getHpQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHpQueryKey>
  >({
    queryKey: getHpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHpQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHpHpQueryKey(args: InferRequestType<(typeof client.hp)[':hp']['$get']>) {
  return ['hp', '/hp/:hp', args] as const
}

export function getHpHpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.hp)[':hp']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHpHpQueryKey>
  >({
    queryKey: getHpHpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hp[':hp'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHpHp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hp)[':hp']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHpHpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHpHpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHpHp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hp)[':hp']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHpHpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHpHpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIllustratorsQueryKey() {
  return ['illustrators', '/illustrators'] as const
}

export function getIllustratorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIllustratorsQueryKey>
  >({
    queryKey: getIllustratorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.illustrators.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIllustrators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIllustratorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIllustratorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIllustrators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIllustratorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIllustratorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIllustratorsIllustratorQueryKey(
  args: InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>,
) {
  return ['illustrators', '/illustrators/:illustrator', args] as const
}

export function getIllustratorsIllustratorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIllustratorsIllustratorQueryKey>
  >({
    queryKey: getIllustratorsIllustratorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.illustrators[':illustrator'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useIllustratorsIllustrator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIllustratorsIllustratorQueryKey>
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
      ...getIllustratorsIllustratorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseIllustratorsIllustrator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIllustratorsIllustratorQueryKey>
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
      ...getIllustratorsIllustratorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRaritiesQueryKey() {
  return ['rarities', '/rarities'] as const
}

export function getRaritiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRaritiesQueryKey>
  >({
    queryKey: getRaritiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rarities.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRarities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRaritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRaritiesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRarities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRaritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRaritiesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRaritiesRarityQueryKey(
  args: InferRequestType<(typeof client.rarities)[':rarity']['$get']>,
) {
  return ['rarities', '/rarities/:rarity', args] as const
}

export function getRaritiesRarityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rarities)[':rarity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRaritiesRarityQueryKey>
  >({
    queryKey: getRaritiesRarityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rarities[':rarity'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRaritiesRarity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rarities)[':rarity']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRaritiesRarityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRaritiesRarityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRaritiesRarity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rarities)[':rarity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRaritiesRarityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRaritiesRarityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRegulationMarksQueryKey() {
  return ['regulation-marks', '/regulation-marks'] as const
}

export function getRegulationMarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegulationMarksQueryKey>
  >({
    queryKey: getRegulationMarksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['regulation-marks'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRegulationMarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegulationMarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegulationMarksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegulationMarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegulationMarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegulationMarksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRegulationMarksRegulationMarkQueryKey(
  args: InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>,
) {
  return ['regulation-marks', '/regulation-marks/:regulation-mark', args] as const
}

export function getRegulationMarksRegulationMarkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegulationMarksRegulationMarkQueryKey>
  >({
    queryKey: getRegulationMarksRegulationMarkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['regulation-marks'][':regulation-mark'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRegulationMarksRegulationMark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegulationMarksRegulationMarkQueryKey>
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
      ...getRegulationMarksRegulationMarkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegulationMarksRegulationMark<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegulationMarksRegulationMarkQueryKey>
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
      ...getRegulationMarksRegulationMarkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRetreatsQueryKey() {
  return ['retreats', '/retreats'] as const
}

export function getRetreatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRetreatsQueryKey>
  >({
    queryKey: getRetreatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.retreats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRetreats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRetreatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetreatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetreats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRetreatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetreatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRetreatsRetreatQueryKey(
  args: InferRequestType<(typeof client.retreats)[':retreat']['$get']>,
) {
  return ['retreats', '/retreats/:retreat', args] as const
}

export function getRetreatsRetreatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retreats)[':retreat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetreatsRetreatQueryKey>
  >({
    queryKey: getRetreatsRetreatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.retreats[':retreat'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRetreatsRetreat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retreats)[':retreat']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetreatsRetreatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRetreatsRetreatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRetreatsRetreat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.retreats)[':retreat']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRetreatsRetreatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRetreatsRetreatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesQueryKey() {
  return ['series', '/series'] as const
}

export function getSeriesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >({
    queryKey: getSeriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.series.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSeriesSerieQueryKey(
  args: InferRequestType<(typeof client.series)[':serie']['$get']>,
) {
  return ['series', '/series/:serie', args] as const
}

export function getSeriesSerieQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieQueryKey>
  >({
    queryKey: getSeriesSerieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series[':serie'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSeriesSerie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSeriesSerieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSeriesSerie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.series)[':serie']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSerieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSeriesSerieQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSetsQueryKey() {
  return ['sets', '/sets'] as const
}

export function getSetsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetsQueryKey>
  >({
    queryKey: getSetsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSetsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSetsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSetsSetQueryKey(args: InferRequestType<(typeof client.sets)[':set']['$get']>) {
  return ['sets', '/sets/:set', args] as const
}

export function getSetsSetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.sets)[':set']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSetQueryKey>
  >({
    queryKey: getSetsSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets[':set'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSetsSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets)[':set']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetsSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSetsSetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSetsSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets)[':set']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetsSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSetsSetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSetsSetCardLocalIdQueryKey(
  args: InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>,
) {
  return ['sets', '/sets/:set/:cardLocalId', args] as const
}

export function getSetsSetCardLocalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSetCardLocalIdQueryKey>
  >({
    queryKey: getSetsSetCardLocalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sets[':set'][':cardLocalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSetsSetCardLocalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetsSetCardLocalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSetsSetCardLocalIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSetsSetCardLocalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSetsSetCardLocalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSetsSetCardLocalIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStagesQueryKey() {
  return ['stages', '/stages'] as const
}

export function getStagesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStagesQueryKey>
  >({
    queryKey: getStagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStagesStageQueryKey(
  args: InferRequestType<(typeof client.stages)[':stage']['$get']>,
) {
  return ['stages', '/stages/:stage', args] as const
}

export function getStagesStageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stages)[':stage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStagesStageQueryKey>
  >({
    queryKey: getStagesStageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stages[':stage'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStagesStage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stages)[':stage']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStagesStageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStagesStageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStagesStage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stages)[':stage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStagesStageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStagesStageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSuffixesQueryKey() {
  return ['suffixes', '/suffixes'] as const
}

export function getSuffixesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuffixesQueryKey>
  >({
    queryKey: getSuffixesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.suffixes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSuffixes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSuffixesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSuffixesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSuffixes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSuffixesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSuffixesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSuffixesSuffixQueryKey(
  args: InferRequestType<(typeof client.suffixes)[':suffix']['$get']>,
) {
  return ['suffixes', '/suffixes/:suffix', args] as const
}

export function getSuffixesSuffixQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suffixes)[':suffix']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuffixesSuffixQueryKey>
  >({
    queryKey: getSuffixesSuffixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.suffixes[':suffix'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSuffixesSuffix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suffixes)[':suffix']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuffixesSuffixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSuffixesSuffixQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSuffixesSuffix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.suffixes)[':suffix']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSuffixesSuffixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSuffixesSuffixQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTrainerTypesQueryKey() {
  return ['trainer-types', '/trainer-types'] as const
}

export function getTrainerTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrainerTypesQueryKey>
  >({
    queryKey: getTrainerTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['trainer-types'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTrainerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrainerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTrainerTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTrainerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrainerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTrainerTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTrainerTypesTrainerTypeQueryKey(
  args: InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>,
) {
  return ['trainer-types', '/trainer-types/:trainer-type', args] as const
}

export function getTrainerTypesTrainerTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrainerTypesTrainerTypeQueryKey>
  >({
    queryKey: getTrainerTypesTrainerTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['trainer-types'][':trainer-type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTrainerTypesTrainerType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrainerTypesTrainerTypeQueryKey>
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
      ...getTrainerTypesTrainerTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrainerTypesTrainerType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrainerTypesTrainerTypeQueryKey>
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
      ...getTrainerTypesTrainerTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTypesQueryKey() {
  return ['types', '/types'] as const
}

export function getTypesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTypesQueryKey>
  >({
    queryKey: getTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTypes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTypes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTypesTypeQueryKey(
  args: InferRequestType<(typeof client.types)[':type']['$get']>,
) {
  return ['types', '/types/:type', args] as const
}

export function getTypesTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.types)[':type']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTypesTypeQueryKey>
  >({
    queryKey: getTypesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.types[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTypesType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.types)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTypesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTypesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTypesType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.types)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTypesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTypesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVariantsQueryKey() {
  return ['variants', '/variants'] as const
}

export function getVariantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVariantsQueryKey>
  >({
    queryKey: getVariantsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.variants.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVariants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVariantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVariantsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVariants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVariantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVariantsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVariantsVariantQueryKey(
  args: InferRequestType<(typeof client.variants)[':variant']['$get']>,
) {
  return ['variants', '/variants/:variant', args] as const
}

export function getVariantsVariantQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variants)[':variant']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariantsVariantQueryKey>
  >({
    queryKey: getVariantsVariantQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variants[':variant'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVariantsVariant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variants)[':variant']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariantsVariantQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVariantsVariantQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVariantsVariant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variants)[':variant']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariantsVariantQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVariantsVariantQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
