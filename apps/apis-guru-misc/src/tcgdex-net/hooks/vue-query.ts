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

export function getCardsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCardsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          ReturnType<typeof getCardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCardsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cards.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardsCardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':cardId']['$get']>>,
) {
  return ['cards', '/cards/:cardId', toValue(args)] as const
}

export function getCardsCardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':cardId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':cardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':cardId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>
            >
          >,
          ReturnType<typeof getCardsCardIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':cardId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':cardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesQueryKey() {
  return ['categories', '/categories'] as const
}

export function getCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesCategoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
) {
  return ['categories', '/categories/:category', toValue(args)] as const
}

export function getCategoriesCategoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesCategoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':category'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesCategory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':category']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCategoriesCategoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':category']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesCategoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesCategoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':category'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDexIdsQueryKey() {
  return ['dex-ids', '/dex-ids'] as const
}

export function getDexIdsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDexIdsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dex-ids'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDexIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>
            >
          >,
          ReturnType<typeof getDexIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDexIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDexIdsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['dex-ids'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDexIdsDexIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>>,
) {
  return ['dex-ids', '/dex-ids/:dexId', toValue(args)] as const
}

export function getDexIdsDexIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDexIdsDexIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dex-ids'][':dexId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDexIdsDexId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dex-ids'][':dexId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDexIdsDexIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dex-ids'][':dexId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDexIdsDexIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDexIdsDexIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dex-ids'][':dexId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnergyTypesQueryKey() {
  return ['energy-types', '/energy-types'] as const
}

export function getEnergyTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEnergyTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['energy-types'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEnergyTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>
            >
          >,
          ReturnType<typeof getEnergyTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['energy-types']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnergyTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEnergyTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['energy-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnergyTypesEnergyTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>>,
) {
  return ['energy-types', '/energy-types/:energy-type', toValue(args)] as const
}

export function getEnergyTypesEnergyTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnergyTypesEnergyTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['energy-types'][':energy-type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['energy-types'][':energy-type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnergyTypesEnergyTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['energy-types'][':energy-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnergyTypesEnergyTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnergyTypesEnergyTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['energy-types'][':energy-type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHpQueryKey() {
  return ['hp', '/hp'] as const
}

export function getHpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
          ReturnType<typeof getHpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hp.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getHpHpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hp)[':hp']['$get']>>,
) {
  return ['hp', '/hp/:hp', toValue(args)] as const
}

export function getHpHpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hp)[':hp']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHpHpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hp[':hp'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHpHp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hp)[':hp']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
          >,
          ReturnType<typeof getHpHpQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.hp)[':hp']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHpHpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHpHpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hp[':hp'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIllustratorsQueryKey() {
  return ['illustrators', '/illustrators'] as const
}

export function getIllustratorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIllustratorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.illustrators.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIllustrators<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>
          >,
          ReturnType<typeof getIllustratorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.illustrators.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIllustratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIllustratorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.illustrators.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIllustratorsIllustratorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>>,
) {
  return ['illustrators', '/illustrators/:illustrator', toValue(args)] as const
}

export function getIllustratorsIllustratorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIllustratorsIllustratorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.illustrators[':illustrator'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.illustrators)[':illustrator']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIllustratorsIllustratorQueryKey>
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
          Awaited<ReturnType<(typeof client.illustrators)[':illustrator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIllustratorsIllustratorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIllustratorsIllustratorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.illustrators[':illustrator'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRaritiesQueryKey() {
  return ['rarities', '/rarities'] as const
}

export function getRaritiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRaritiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rarities.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRarities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>
          >,
          ReturnType<typeof getRaritiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rarities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRaritiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRaritiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rarities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRaritiesRarityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rarities)[':rarity']['$get']>>,
) {
  return ['rarities', '/rarities/:rarity', toValue(args)] as const
}

export function getRaritiesRarityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rarities)[':rarity']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRaritiesRarityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rarities[':rarity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRaritiesRarity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rarities)[':rarity']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
            >
          >,
          ReturnType<typeof getRaritiesRarityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rarities)[':rarity']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRaritiesRarityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRaritiesRarityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rarities[':rarity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegulationMarksQueryKey() {
  return ['regulation-marks', '/regulation-marks'] as const
}

export function getRegulationMarksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRegulationMarksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['regulation-marks'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
            >
          >,
          ReturnType<typeof getRegulationMarksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['regulation-marks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegulationMarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRegulationMarksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['regulation-marks'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegulationMarksRegulationMarkQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>
  >,
) {
  return ['regulation-marks', '/regulation-marks/:regulation-mark', toValue(args)] as const
}

export function getRegulationMarksRegulationMarkQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegulationMarksRegulationMarkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['regulation-marks'][':regulation-mark'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegulationMarksRegulationMarkQueryKey>
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
          Awaited<ReturnType<(typeof client)['regulation-marks'][':regulation-mark']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegulationMarksRegulationMarkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegulationMarksRegulationMarkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['regulation-marks'][':regulation-mark'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetreatsQueryKey() {
  return ['retreats', '/retreats'] as const
}

export function getRetreatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRetreatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retreats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRetreats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>
          >,
          ReturnType<typeof getRetreatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.retreats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRetreatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRetreatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.retreats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRetreatsRetreatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retreats)[':retreat']['$get']>>,
) {
  return ['retreats', '/retreats/:retreat', toValue(args)] as const
}

export function getRetreatsRetreatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retreats)[':retreat']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRetreatsRetreatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.retreats[':retreat'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRetreatsRetreat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.retreats)[':retreat']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRetreatsRetreatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.retreats)[':retreat']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRetreatsRetreatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRetreatsRetreatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.retreats[':retreat'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesQueryKey() {
  return ['series', '/series'] as const
}

export function getSeriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSeriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
          ReturnType<typeof getSeriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSeriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.series.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSerieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':serie']['$get']>>,
) {
  return ['series', '/series/:serie', toValue(args)] as const
}

export function getSeriesSerieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':serie']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSerieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series[':serie'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesSerie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.series)[':serie']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>
            >
          >,
          ReturnType<typeof getSeriesSerieQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.series)[':serie']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSerieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSerieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series[':serie'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetsQueryKey() {
  return ['sets', '/sets'] as const
}

export function getSetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
          ReturnType<typeof getSetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetsSetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets)[':set']['$get']>>,
) {
  return ['sets', '/sets/:set', toValue(args)] as const
}

export function getSetsSetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets)[':set']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets[':set'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSetsSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets)[':set']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>
            >
          >,
          ReturnType<typeof getSetsSetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sets)[':set']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets[':set'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetsSetCardLocalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>,
) {
  return ['sets', '/sets/:set/:cardLocalId', toValue(args)] as const
}

export function getSetsSetCardLocalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetsSetCardLocalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sets[':set'][':cardLocalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSetsSetCardLocalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sets)[':set'][':cardLocalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSetsSetCardLocalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetsSetCardLocalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sets[':set'][':cardLocalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStagesQueryKey() {
  return ['stages', '/stages'] as const
}

export function getStagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
          ReturnType<typeof getStagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStagesStageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stages)[':stage']['$get']>>,
) {
  return ['stages', '/stages/:stage', toValue(args)] as const
}

export function getStagesStageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stages)[':stage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStagesStageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stages[':stage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStagesStage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stages)[':stage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>
            >
          >,
          ReturnType<typeof getStagesStageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stages)[':stage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStagesStageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStagesStageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stages[':stage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuffixesQueryKey() {
  return ['suffixes', '/suffixes'] as const
}

export function getSuffixesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSuffixesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suffixes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSuffixes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>
          >,
          ReturnType<typeof getSuffixesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.suffixes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSuffixesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSuffixesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.suffixes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSuffixesSuffixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suffixes)[':suffix']['$get']>>,
) {
  return ['suffixes', '/suffixes/:suffix', toValue(args)] as const
}

export function getSuffixesSuffixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suffixes)[':suffix']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSuffixesSuffixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.suffixes[':suffix'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSuffixesSuffix<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.suffixes)[':suffix']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
            >
          >,
          ReturnType<typeof getSuffixesSuffixQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.suffixes)[':suffix']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSuffixesSuffixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSuffixesSuffixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.suffixes[':suffix'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrainerTypesQueryKey() {
  return ['trainer-types', '/trainer-types'] as const
}

export function getTrainerTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTrainerTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['trainer-types'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrainerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>
            >
          >,
          ReturnType<typeof getTrainerTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['trainer-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrainerTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTrainerTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['trainer-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrainerTypesTrainerTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>
  >,
) {
  return ['trainer-types', '/trainer-types/:trainer-type', toValue(args)] as const
}

export function getTrainerTypesTrainerTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrainerTypesTrainerTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['trainer-types'][':trainer-type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['trainer-types'][':trainer-type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrainerTypesTrainerTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['trainer-types'][':trainer-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrainerTypesTrainerTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrainerTypesTrainerTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['trainer-types'][':trainer-type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTypesQueryKey() {
  return ['types', '/types'] as const
}

export function getTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTypes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
          ReturnType<typeof getTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTypesTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.types)[':type']['$get']>>,
) {
  return ['types', '/types/:type', toValue(args)] as const
}

export function getTypesTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.types)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTypesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.types[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTypesType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.types)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getTypesTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTypesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTypesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.types[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVariantsQueryKey() {
  return ['variants', '/variants'] as const
}

export function getVariantsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVariantsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variants.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVariants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>
          >,
          ReturnType<typeof getVariantsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVariantsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.variants.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVariantsVariantQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variants)[':variant']['$get']>>,
) {
  return ['variants', '/variants/:variant', toValue(args)] as const
}

export function getVariantsVariantQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variants)[':variant']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariantsVariantQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variants[':variant'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariantsVariant<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variants)[':variant']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVariantsVariantQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.variants)[':variant']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariantsVariantQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariantsVariantQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variants[':variant'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
