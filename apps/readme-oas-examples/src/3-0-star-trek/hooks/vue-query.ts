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

export function getAnimalKey() {
  return ['animal'] as const
}

export function getAstronomicalObjectKey() {
  return ['astronomicalObject'] as const
}

export function getBookKey() {
  return ['book'] as const
}

export function getBookCollectionKey() {
  return ['bookCollection'] as const
}

export function getBookSeriesKey() {
  return ['bookSeries'] as const
}

export function getCharacterKey() {
  return ['character'] as const
}

export function getComicCollectionKey() {
  return ['comicCollection'] as const
}

export function getComicSeriesKey() {
  return ['comicSeries'] as const
}

export function getComicStripKey() {
  return ['comicStrip'] as const
}

export function getComicsKey() {
  return ['comics'] as const
}

export function getCompanyKey() {
  return ['company'] as const
}

export function getConflictKey() {
  return ['conflict'] as const
}

export function getElementKey() {
  return ['element'] as const
}

export function getEpisodeKey() {
  return ['episode'] as const
}

export function getFoodKey() {
  return ['food'] as const
}

export function getLiteratureKey() {
  return ['literature'] as const
}

export function getLocationKey() {
  return ['location'] as const
}

export function getMagazineKey() {
  return ['magazine'] as const
}

export function getMagazineSeriesKey() {
  return ['magazineSeries'] as const
}

export function getMaterialKey() {
  return ['material'] as const
}

export function getMedicalConditionKey() {
  return ['medicalCondition'] as const
}

export function getMovieKey() {
  return ['movie'] as const
}

export function getOccupationKey() {
  return ['occupation'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getPerformerKey() {
  return ['performer'] as const
}

export function getSeasonKey() {
  return ['season'] as const
}

export function getSeriesKey() {
  return ['series'] as const
}

export function getSoundtrackKey() {
  return ['soundtrack'] as const
}

export function getSpacecraftKey() {
  return ['spacecraft'] as const
}

export function getSpacecraftClassKey() {
  return ['spacecraftClass'] as const
}

export function getSpeciesKey() {
  return ['species'] as const
}

export function getStaffKey() {
  return ['staff'] as const
}

export function getTechnologyKey() {
  return ['technology'] as const
}

export function getTitleKey() {
  return ['title'] as const
}

export function getTradingCardKey() {
  return ['tradingCard'] as const
}

export function getTradingCardDeckKey() {
  return ['tradingCardDeck'] as const
}

export function getTradingCardSetKey() {
  return ['tradingCardSet'] as const
}

export function getVideoGameKey() {
  return ['videoGame'] as const
}

export function getVideoReleaseKey() {
  return ['videoRelease'] as const
}

export function getWeaponKey() {
  return ['weapon'] as const
}

export function getAnimalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.animal.$get>>,
) {
  return ['animal', '/animal', toValue(args)] as const
}

export function getAnimalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.animal.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.animal.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnimal<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.animal.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
          ReturnType<typeof getAnimalQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnimalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.animal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnimalSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.animal.search.$get>>,
) {
  return ['animal', '/animal/search', toValue(args)] as const
}

export function getAnimalSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.animal.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnimalSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.animal.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnimalSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.animal.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
          >,
          ReturnType<typeof getAnimalSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnimalSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnimalSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.animal.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnimalSearchMutationKey() {
  return ['animal', '/animal/search', 'POST'] as const
}

export function getPostAnimalSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.animal.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnimalSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.animal.search.$post>) {
      return parseResponse(client.animal.search.$post(args, options))
    },
  })
}

export function usePostAnimalSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.animal.search.$post>,
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
  const mutationDefaults = getPostAnimalSearchMutationOptions<TError, TOnMutateResult>(
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

export function getAstronomicalObjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.astronomicalObject.$get>>,
) {
  return ['astronomicalObject', '/astronomicalObject', toValue(args)] as const
}

export function getAstronomicalObjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.astronomicalObject.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAstronomicalObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.astronomicalObject.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAstronomicalObject<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.astronomicalObject.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>
            >
          >,
          ReturnType<typeof getAstronomicalObjectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAstronomicalObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAstronomicalObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.astronomicalObject.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAstronomicalObjectSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.astronomicalObject.search.$get>>,
) {
  return ['astronomicalObject', '/astronomicalObject/search', toValue(args)] as const
}

export function getAstronomicalObjectSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.astronomicalObject.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAstronomicalObjectSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.astronomicalObject.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAstronomicalObjectSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.astronomicalObject.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>
              >
            >
          >,
          ReturnType<typeof getAstronomicalObjectSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAstronomicalObjectSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAstronomicalObjectSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.astronomicalObject.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAstronomicalObjectSearchMutationKey() {
  return ['astronomicalObject', '/astronomicalObject/search', 'POST'] as const
}

export function getPostAstronomicalObjectSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.astronomicalObject.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAstronomicalObjectSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.astronomicalObject.search.$post>) {
      return parseResponse(client.astronomicalObject.search.$post(args, options))
    },
  })
}

export function usePostAstronomicalObjectSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.astronomicalObject.search.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.astronomicalObject.search.$post>,
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
  const mutationDefaults = getPostAstronomicalObjectSearchMutationOptions<TError, TOnMutateResult>(
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

export function getBookQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.book.$get>>) {
  return ['book', '/book', toValue(args)] as const
}

export function getBookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.book.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.book.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBook<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.book.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
          ReturnType<typeof getBookQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.book.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.book.search.$get>>,
) {
  return ['book', '/book/search', toValue(args)] as const
}

export function getBookSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.book.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.book.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBookSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.book.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
          >,
          ReturnType<typeof getBookSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.book.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookSearchMutationKey() {
  return ['book', '/book/search', 'POST'] as const
}

export function getPostBookSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.book.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.book.search.$post>) {
      return parseResponse(client.book.search.$post(args, options))
    },
  })
}

export function usePostBookSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.book.search.$post>,
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
  const mutationDefaults = getPostBookSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBookCollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookCollection.$get>>,
) {
  return ['bookCollection', '/bookCollection', toValue(args)] as const
}

export function getBookCollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookCollection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookCollection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookCollection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookCollection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
          >,
          ReturnType<typeof getBookCollectionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookCollection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookCollectionSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookCollection.search.$get>>,
) {
  return ['bookCollection', '/bookCollection/search', toValue(args)] as const
}

export function getBookCollectionSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookCollection.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookCollectionSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookCollection.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookCollectionSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookCollection.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
            >
          >,
          ReturnType<typeof getBookCollectionSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookCollectionSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookCollectionSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookCollection.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookCollectionSearchMutationKey() {
  return ['bookCollection', '/bookCollection/search', 'POST'] as const
}

export function getPostBookCollectionSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bookCollection.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookCollectionSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bookCollection.search.$post>) {
      return parseResponse(client.bookCollection.search.$post(args, options))
    },
  })
}

export function usePostBookCollectionSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bookCollection.search.$post>,
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
  const mutationDefaults = getPostBookCollectionSearchMutationOptions<TError, TOnMutateResult>(
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

export function getBookSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookSeries.$get>>,
) {
  return ['bookSeries', '/bookSeries', toValue(args)] as const
}

export function getBookSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookSeries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookSeries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBookSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookSeries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>
          >,
          ReturnType<typeof getBookSeriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookSeries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookSeriesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookSeries.search.$get>>,
) {
  return ['bookSeries', '/bookSeries/search', toValue(args)] as const
}

export function getBookSeriesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookSeries.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookSeriesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookSeries.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookSeries.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>
            >
          >,
          ReturnType<typeof getBookSeriesSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookSeriesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookSeriesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookSeries.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBookSeriesSearchMutationKey() {
  return ['bookSeries', '/bookSeries/search', 'POST'] as const
}

export function getPostBookSeriesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bookSeries.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookSeriesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bookSeries.search.$post>) {
      return parseResponse(client.bookSeries.search.$post(args, options))
    },
  })
}

export function usePostBookSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bookSeries.search.$post>,
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
  const mutationDefaults = getPostBookSeriesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getCharacterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.character.$get>>,
) {
  return ['character', '/character', toValue(args)] as const
}

export function getCharacterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.character.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharacterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.character.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCharacter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.character.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>
          >,
          ReturnType<typeof getCharacterQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCharacterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharacterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.character.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCharacterSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.character.search.$get>>,
) {
  return ['character', '/character/search', toValue(args)] as const
}

export function getCharacterSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.character.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCharacterSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.character.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCharacterSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.character.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>
            >
          >,
          ReturnType<typeof getCharacterSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCharacterSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCharacterSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.character.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCharacterSearchMutationKey() {
  return ['character', '/character/search', 'POST'] as const
}

export function getPostCharacterSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.character.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCharacterSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.character.search.$post>) {
      return parseResponse(client.character.search.$post(args, options))
    },
  })
}

export function usePostCharacterSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.character.search.$post>,
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
  const mutationDefaults = getPostCharacterSearchMutationOptions<TError, TOnMutateResult>(
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

export function getComicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comics.$get>>,
) {
  return ['comics', '/comics', toValue(args)] as const
}

export function getComicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comics.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useComics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
          ReturnType<typeof getComicsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComicsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comics.search.$get>>,
) {
  return ['comics', '/comics/search', toValue(args)] as const
}

export function getComicsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comics.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comics.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComicsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comics.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
          >,
          ReturnType<typeof getComicsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comics.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostComicsSearchMutationKey() {
  return ['comics', '/comics/search', 'POST'] as const
}

export function getPostComicsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.comics.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostComicsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comics.search.$post>) {
      return parseResponse(client.comics.search.$post(args, options))
    },
  })
}

export function usePostComicsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.comics.search.$post>,
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
  const mutationDefaults = getPostComicsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getComicCollectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicCollection.$get>>,
) {
  return ['comicCollection', '/comicCollection', toValue(args)] as const
}

export function getComicCollectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicCollection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comicCollection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComicCollection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicCollection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>
            >
          >,
          ReturnType<typeof getComicCollectionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comicCollection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComicCollectionSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicCollection.search.$get>>,
) {
  return ['comicCollection', '/comicCollection/search', toValue(args)] as const
}

export function getComicCollectionSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicCollection.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicCollectionSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comicCollection.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComicCollectionSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicCollection.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
            >
          >,
          ReturnType<typeof getComicCollectionSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComicCollectionSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicCollectionSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comicCollection.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostComicCollectionSearchMutationKey() {
  return ['comicCollection', '/comicCollection/search', 'POST'] as const
}

export function getPostComicCollectionSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.comicCollection.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostComicCollectionSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comicCollection.search.$post>) {
      return parseResponse(client.comicCollection.search.$post(args, options))
    },
  })
}

export function usePostComicCollectionSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.comicCollection.search.$post>,
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
  const mutationDefaults = getPostComicCollectionSearchMutationOptions<TError, TOnMutateResult>(
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

export function getComicSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicSeries.$get>>,
) {
  return ['comicSeries', '/comicSeries', toValue(args)] as const
}

export function getComicSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicSeries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comicSeries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useComicSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicSeries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
          >,
          ReturnType<typeof getComicSeriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComicSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comicSeries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComicSeriesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicSeries.search.$get>>,
) {
  return ['comicSeries', '/comicSeries/search', toValue(args)] as const
}

export function getComicSeriesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicSeries.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicSeriesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comicSeries.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComicSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicSeries.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>
            >
          >,
          ReturnType<typeof getComicSeriesSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicSeriesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicSeriesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comicSeries.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostComicSeriesSearchMutationKey() {
  return ['comicSeries', '/comicSeries/search', 'POST'] as const
}

export function getPostComicSeriesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.comicSeries.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostComicSeriesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comicSeries.search.$post>) {
      return parseResponse(client.comicSeries.search.$post(args, options))
    },
  })
}

export function usePostComicSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.comicSeries.search.$post>,
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
  const mutationDefaults = getPostComicSeriesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getComicStripQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicStrip.$get>>,
) {
  return ['comicStrip', '/comicStrip', toValue(args)] as const
}

export function getComicStripQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicStrip.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicStripQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comicStrip.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useComicStrip<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicStrip.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>
          >,
          ReturnType<typeof getComicStripQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComicStripQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicStripQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comicStrip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComicStripSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicStrip.search.$get>>,
) {
  return ['comicStrip', '/comicStrip/search', toValue(args)] as const
}

export function getComicStripSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicStrip.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComicStripSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comicStrip.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComicStripSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.comicStrip.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>
            >
          >,
          ReturnType<typeof getComicStripSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicStripSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComicStripSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comicStrip.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostComicStripSearchMutationKey() {
  return ['comicStrip', '/comicStrip/search', 'POST'] as const
}

export function getPostComicStripSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.comicStrip.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostComicStripSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comicStrip.search.$post>) {
      return parseResponse(client.comicStrip.search.$post(args, options))
    },
  })
}

export function usePostComicStripSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.comicStrip.search.$post>,
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
  const mutationDefaults = getPostComicStripSearchMutationOptions<TError, TOnMutateResult>(
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

export function getCompanyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.$get>>,
) {
  return ['company', '/company', toValue(args)] as const
}

export function getCompanyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompany<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>
          >,
          ReturnType<typeof getCompanyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCompanyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCompanySearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.search.$get>>,
) {
  return ['company', '/company/search', toValue(args)] as const
}

export function getCompanySearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompanySearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.company.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompanySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.company.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
          >,
          ReturnType<typeof getCompanySearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompanySearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompanySearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.company.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCompanySearchMutationKey() {
  return ['company', '/company/search', 'POST'] as const
}

export function getPostCompanySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.company.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompanySearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.company.search.$post>) {
      return parseResponse(client.company.search.$post(args, options))
    },
  })
}

export function usePostCompanySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.company.search.$post>,
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
  const mutationDefaults = getPostCompanySearchMutationOptions<TError, TOnMutateResult>(
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

export function getConflictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conflict.$get>>,
) {
  return ['conflict', '/conflict', toValue(args)] as const
}

export function getConflictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conflict.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConflictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conflict.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConflict<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conflict.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>
          >,
          ReturnType<typeof getConflictQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConflictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConflictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conflict.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConflictSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conflict.search.$get>>,
) {
  return ['conflict', '/conflict/search', toValue(args)] as const
}

export function getConflictSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conflict.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConflictSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conflict.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConflictSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.conflict.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>
            >
          >,
          ReturnType<typeof getConflictSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConflictSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConflictSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conflict.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConflictSearchMutationKey() {
  return ['conflict', '/conflict/search', 'POST'] as const
}

export function getPostConflictSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.conflict.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConflictSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conflict.search.$post>) {
      return parseResponse(client.conflict.search.$post(args, options))
    },
  })
}

export function usePostConflictSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conflict.search.$post>,
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
  const mutationDefaults = getPostConflictSearchMutationOptions<TError, TOnMutateResult>(
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

export function getElementQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.element.$get>>,
) {
  return ['element', '/element', toValue(args)] as const
}

export function getElementQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.element.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.element.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useElement<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.element.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>
          >,
          ReturnType<typeof getElementQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getElementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.element.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getElementSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.element.search.$get>>,
) {
  return ['element', '/element/search', toValue(args)] as const
}

export function getElementSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.element.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getElementSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.element.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useElementSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.element.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
          >,
          ReturnType<typeof getElementSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getElementSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getElementSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.element.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostElementSearchMutationKey() {
  return ['element', '/element/search', 'POST'] as const
}

export function getPostElementSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.element.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostElementSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.element.search.$post>) {
      return parseResponse(client.element.search.$post(args, options))
    },
  })
}

export function usePostElementSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.element.search.$post>,
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
  const mutationDefaults = getPostElementSearchMutationOptions<TError, TOnMutateResult>(
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

export function getEpisodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episode.$get>>,
) {
  return ['episode', '/episode', toValue(args)] as const
}

export function getEpisodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episode.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEpisode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>
          >,
          ReturnType<typeof getEpisodeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpisodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEpisodeSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episode.search.$get>>,
) {
  return ['episode', '/episode/search', toValue(args)] as const
}

export function getEpisodeSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episode.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEpisodeSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.episode.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEpisodeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.episode.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
          >,
          ReturnType<typeof getEpisodeSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodeSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEpisodeSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.episode.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEpisodeSearchMutationKey() {
  return ['episode', '/episode/search', 'POST'] as const
}

export function getPostEpisodeSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.episode.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEpisodeSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.episode.search.$post>) {
      return parseResponse(client.episode.search.$post(args, options))
    },
  })
}

export function usePostEpisodeSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.episode.search.$post>,
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
  const mutationDefaults = getPostEpisodeSearchMutationOptions<TError, TOnMutateResult>(
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

export function getFoodQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.food.$get>>) {
  return ['food', '/food', toValue(args)] as const
}

export function getFoodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFood<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
          ReturnType<typeof getFoodQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.search.$get>>,
) {
  return ['food', '/food/search', toValue(args)] as const
}

export function getFoodSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFoodSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
          >,
          ReturnType<typeof getFoodSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoodSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFoodSearchMutationKey() {
  return ['food', '/food/search', 'POST'] as const
}

export function getPostFoodSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.food.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoodSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.food.search.$post>) {
      return parseResponse(client.food.search.$post(args, options))
    },
  })
}

export function usePostFoodSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.food.search.$post>,
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
  const mutationDefaults = getPostFoodSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLiteratureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.literature.$get>>,
) {
  return ['literature', '/literature', toValue(args)] as const
}

export function getLiteratureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.literature.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiteratureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.literature.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLiterature<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.literature.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>
          >,
          ReturnType<typeof getLiteratureQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLiteratureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiteratureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.literature.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLiteratureSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.literature.search.$get>>,
) {
  return ['literature', '/literature/search', toValue(args)] as const
}

export function getLiteratureSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.literature.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLiteratureSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.literature.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLiteratureSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.literature.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>
            >
          >,
          ReturnType<typeof getLiteratureSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiteratureSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLiteratureSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.literature.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLiteratureSearchMutationKey() {
  return ['literature', '/literature/search', 'POST'] as const
}

export function getPostLiteratureSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.literature.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiteratureSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.literature.search.$post>) {
      return parseResponse(client.literature.search.$post(args, options))
    },
  })
}

export function usePostLiteratureSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.literature.search.$post>,
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
  const mutationDefaults = getPostLiteratureSearchMutationOptions<TError, TOnMutateResult>(
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

export function getLocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.location.$get>>,
) {
  return ['location', '/location', toValue(args)] as const
}

export function getLocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.location.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.location.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.location.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>
          >,
          ReturnType<typeof getLocationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.location.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocationSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.location.search.$get>>,
) {
  return ['location', '/location/search', toValue(args)] as const
}

export function getLocationSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.location.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.location.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.location.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>
            >
          >,
          ReturnType<typeof getLocationSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.location.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLocationSearchMutationKey() {
  return ['location', '/location/search', 'POST'] as const
}

export function getPostLocationSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.location.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocationSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.location.search.$post>) {
      return parseResponse(client.location.search.$post(args, options))
    },
  })
}

export function usePostLocationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.location.search.$post>,
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
  const mutationDefaults = getPostLocationSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMagazineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazine.$get>>,
) {
  return ['magazine', '/magazine', toValue(args)] as const
}

export function getMagazineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazine.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMagazineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.magazine.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMagazine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazine.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>
          >,
          ReturnType<typeof getMagazineQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMagazineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMagazineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.magazine.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMagazineSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazine.search.$get>>,
) {
  return ['magazine', '/magazine/search', toValue(args)] as const
}

export function getMagazineSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazine.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMagazineSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.magazine.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMagazineSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazine.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>
            >
          >,
          ReturnType<typeof getMagazineSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMagazineSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMagazineSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.magazine.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMagazineSearchMutationKey() {
  return ['magazine', '/magazine/search', 'POST'] as const
}

export function getPostMagazineSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.magazine.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMagazineSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.magazine.search.$post>) {
      return parseResponse(client.magazine.search.$post(args, options))
    },
  })
}

export function usePostMagazineSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.magazine.search.$post>,
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
  const mutationDefaults = getPostMagazineSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMagazineSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazineSeries.$get>>,
) {
  return ['magazineSeries', '/magazineSeries', toValue(args)] as const
}

export function getMagazineSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazineSeries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMagazineSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.magazineSeries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMagazineSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazineSeries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
          >,
          ReturnType<typeof getMagazineSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMagazineSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMagazineSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.magazineSeries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMagazineSeriesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazineSeries.search.$get>>,
) {
  return ['magazineSeries', '/magazineSeries/search', toValue(args)] as const
}

export function getMagazineSeriesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazineSeries.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMagazineSeriesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.magazineSeries.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMagazineSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magazineSeries.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
            >
          >,
          ReturnType<typeof getMagazineSeriesSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMagazineSeriesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMagazineSeriesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.magazineSeries.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMagazineSeriesSearchMutationKey() {
  return ['magazineSeries', '/magazineSeries/search', 'POST'] as const
}

export function getPostMagazineSeriesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.magazineSeries.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMagazineSeriesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.magazineSeries.search.$post>) {
      return parseResponse(client.magazineSeries.search.$post(args, options))
    },
  })
}

export function usePostMagazineSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.magazineSeries.search.$post>,
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
  const mutationDefaults = getPostMagazineSeriesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMaterialQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.material.$get>>,
) {
  return ['material', '/material', toValue(args)] as const
}

export function getMaterialQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.material.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMaterialQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.material.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMaterial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.material.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>
          >,
          ReturnType<typeof getMaterialQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaterialQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMaterialQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.material.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMaterialSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.material.search.$get>>,
) {
  return ['material', '/material/search', toValue(args)] as const
}

export function getMaterialSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.material.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMaterialSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.material.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMaterialSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.material.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>
            >
          >,
          ReturnType<typeof getMaterialSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMaterialSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMaterialSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.material.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMaterialSearchMutationKey() {
  return ['material', '/material/search', 'POST'] as const
}

export function getPostMaterialSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.material.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMaterialSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.material.search.$post>) {
      return parseResponse(client.material.search.$post(args, options))
    },
  })
}

export function usePostMaterialSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.material.search.$post>,
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
  const mutationDefaults = getPostMaterialSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMedicalConditionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medicalCondition.$get>>,
) {
  return ['medicalCondition', '/medicalCondition', toValue(args)] as const
}

export function getMedicalConditionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medicalCondition.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMedicalConditionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.medicalCondition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMedicalCondition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medicalCondition.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>
            >
          >,
          ReturnType<typeof getMedicalConditionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMedicalConditionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMedicalConditionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.medicalCondition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMedicalConditionSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medicalCondition.search.$get>>,
) {
  return ['medicalCondition', '/medicalCondition/search', toValue(args)] as const
}

export function getMedicalConditionSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medicalCondition.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMedicalConditionSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.medicalCondition.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMedicalConditionSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.medicalCondition.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
            >
          >,
          ReturnType<typeof getMedicalConditionSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMedicalConditionSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMedicalConditionSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.medicalCondition.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMedicalConditionSearchMutationKey() {
  return ['medicalCondition', '/medicalCondition/search', 'POST'] as const
}

export function getPostMedicalConditionSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.medicalCondition.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMedicalConditionSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.medicalCondition.search.$post>) {
      return parseResponse(client.medicalCondition.search.$post(args, options))
    },
  })
}

export function usePostMedicalConditionSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.medicalCondition.search.$post>,
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
  const mutationDefaults = getPostMedicalConditionSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movie.$get>>,
) {
  return ['movie', '/movie', toValue(args)] as const
}

export function getMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movie.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movie.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMovie<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movie.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
          ReturnType<typeof getMovieQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMovieSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movie.search.$get>>,
) {
  return ['movie', '/movie/search', toValue(args)] as const
}

export function getMovieSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movie.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovieSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movie.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMovieSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movie.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
          >,
          ReturnType<typeof getMovieSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMovieSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovieSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movie.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMovieSearchMutationKey() {
  return ['movie', '/movie/search', 'POST'] as const
}

export function getPostMovieSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.movie.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMovieSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.movie.search.$post>) {
      return parseResponse(client.movie.search.$post(args, options))
    },
  })
}

export function usePostMovieSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.movie.search.$post>,
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
  const mutationDefaults = getPostMovieSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOccupationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.occupation.$get>>,
) {
  return ['occupation', '/occupation', toValue(args)] as const
}

export function getOccupationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.occupation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.occupation.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOccupation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.occupation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>
          >,
          ReturnType<typeof getOccupationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOccupationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.occupation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOccupationSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.occupation.search.$get>>,
) {
  return ['occupation', '/occupation/search', toValue(args)] as const
}

export function getOccupationSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.occupation.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOccupationSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.occupation.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOccupationSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.occupation.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>
            >
          >,
          ReturnType<typeof getOccupationSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOccupationSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOccupationSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.occupation.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOccupationSearchMutationKey() {
  return ['occupation', '/occupation/search', 'POST'] as const
}

export function getPostOccupationSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.occupation.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOccupationSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.occupation.search.$post>) {
      return parseResponse(client.occupation.search.$post(args, options))
    },
  })
}

export function usePostOccupationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.occupation.search.$post>,
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
  const mutationDefaults = getPostOccupationSearchMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.$get>>,
) {
  return ['organization', '/organization', toValue(args)] as const
}

export function getOrganizationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
          >,
          ReturnType<typeof getOrganizationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.search.$get>>,
) {
  return ['organization', '/organization/search', toValue(args)] as const
}

export function getOrganizationSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationSearchMutationKey() {
  return ['organization', '/organization/search', 'POST'] as const
}

export function getPostOrganizationSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organization.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.search.$post>) {
      return parseResponse(client.organization.search.$post(args, options))
    },
  })
}

export function usePostOrganizationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organization.search.$post>,
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
  const mutationDefaults = getPostOrganizationSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPerformerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performer.$get>>,
) {
  return ['performer', '/performer', toValue(args)] as const
}

export function getPerformerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPerformerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.performer.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePerformer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>
          >,
          ReturnType<typeof getPerformerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPerformerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPerformerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.performer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPerformerSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performer.search.$get>>,
) {
  return ['performer', '/performer/search', toValue(args)] as const
}

export function getPerformerSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performer.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPerformerSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.performer.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePerformerSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.performer.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>
            >
          >,
          ReturnType<typeof getPerformerSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPerformerSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPerformerSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.performer.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPerformerSearchMutationKey() {
  return ['performer', '/performer/search', 'POST'] as const
}

export function getPostPerformerSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.performer.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPerformerSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.performer.search.$post>) {
      return parseResponse(client.performer.search.$post(args, options))
    },
  })
}

export function usePostPerformerSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.performer.search.$post>,
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
  const mutationDefaults = getPostPerformerSearchMutationOptions<TError, TOnMutateResult>(
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

export function getSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.season.$get>>,
) {
  return ['season', '/season', toValue(args)] as const
}

export function getSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.season.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.season.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeason<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.season.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
          ReturnType<typeof getSeasonQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.season.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeasonSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.season.search.$get>>,
) {
  return ['season', '/season/search', toValue(args)] as const
}

export function getSeasonSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.season.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeasonSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.season.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeasonSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.season.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
          >,
          ReturnType<typeof getSeasonSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeasonSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.season.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSeasonSearchMutationKey() {
  return ['season', '/season/search', 'POST'] as const
}

export function getPostSeasonSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.season.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSeasonSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.season.search.$post>) {
      return parseResponse(client.season.search.$post(args, options))
    },
  })
}

export function usePostSeasonSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.season.search.$post>,
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
  const mutationDefaults = getPostSeasonSearchMutationOptions<TError, TOnMutateResult>(
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

export function getSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
) {
  return ['series', '/series', toValue(args)] as const
}

export function getSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.$get>>,
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
      queryKey: computed(() => getSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSeriesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.search.$get>>,
) {
  return ['series', '/series/search', toValue(args)] as const
}

export function getSeriesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSeriesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.series.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.series.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
          >,
          ReturnType<typeof getSeriesSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSeriesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.series.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSeriesSearchMutationKey() {
  return ['series', '/series/search', 'POST'] as const
}

export function getPostSeriesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.series.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSeriesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.series.search.$post>) {
      return parseResponse(client.series.search.$post(args, options))
    },
  })
}

export function usePostSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.series.search.$post>,
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
  const mutationDefaults = getPostSeriesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getSoundtrackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.soundtrack.$get>>,
) {
  return ['soundtrack', '/soundtrack', toValue(args)] as const
}

export function getSoundtrackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.soundtrack.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSoundtrackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.soundtrack.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSoundtrack<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.soundtrack.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>
          >,
          ReturnType<typeof getSoundtrackQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSoundtrackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSoundtrackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.soundtrack.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSoundtrackSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.soundtrack.search.$get>>,
) {
  return ['soundtrack', '/soundtrack/search', toValue(args)] as const
}

export function getSoundtrackSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.soundtrack.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSoundtrackSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.soundtrack.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSoundtrackSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.soundtrack.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>
            >
          >,
          ReturnType<typeof getSoundtrackSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSoundtrackSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSoundtrackSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.soundtrack.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSoundtrackSearchMutationKey() {
  return ['soundtrack', '/soundtrack/search', 'POST'] as const
}

export function getPostSoundtrackSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.soundtrack.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSoundtrackSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.soundtrack.search.$post>) {
      return parseResponse(client.soundtrack.search.$post(args, options))
    },
  })
}

export function usePostSoundtrackSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.soundtrack.search.$post>,
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
  const mutationDefaults = getPostSoundtrackSearchMutationOptions<TError, TOnMutateResult>(
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

export function getSpacecraftQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraft.$get>>,
) {
  return ['spacecraft', '/spacecraft', toValue(args)] as const
}

export function getSpacecraftQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraft.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacecraftQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spacecraft.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpacecraft<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraft.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>
          >,
          ReturnType<typeof getSpacecraftQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacecraftQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacecraftQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spacecraft.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacecraftSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraft.search.$get>>,
) {
  return ['spacecraft', '/spacecraft/search', toValue(args)] as const
}

export function getSpacecraftSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraft.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacecraftSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spacecraft.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacecraftSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraft.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>
            >
          >,
          ReturnType<typeof getSpacecraftSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacecraftSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacecraftSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spacecraft.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpacecraftSearchMutationKey() {
  return ['spacecraft', '/spacecraft/search', 'POST'] as const
}

export function getPostSpacecraftSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.spacecraft.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacecraftSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spacecraft.search.$post>) {
      return parseResponse(client.spacecraft.search.$post(args, options))
    },
  })
}

export function usePostSpacecraftSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.spacecraft.search.$post>,
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
  const mutationDefaults = getPostSpacecraftSearchMutationOptions<TError, TOnMutateResult>(
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

export function getSpacecraftClassQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraftClass.$get>>,
) {
  return ['spacecraftClass', '/spacecraftClass', toValue(args)] as const
}

export function getSpacecraftClassQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraftClass.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacecraftClassQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spacecraftClass.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacecraftClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraftClass.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>
            >
          >,
          ReturnType<typeof getSpacecraftClassQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacecraftClassQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacecraftClassQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spacecraftClass.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpacecraftClassSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraftClass.search.$get>>,
) {
  return ['spacecraftClass', '/spacecraftClass/search', toValue(args)] as const
}

export function getSpacecraftClassSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraftClass.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacecraftClassSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spacecraftClass.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacecraftClassSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.spacecraftClass.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
            >
          >,
          ReturnType<typeof getSpacecraftClassSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacecraftClassSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacecraftClassSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spacecraftClass.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpacecraftClassSearchMutationKey() {
  return ['spacecraftClass', '/spacecraftClass/search', 'POST'] as const
}

export function getPostSpacecraftClassSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.spacecraftClass.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpacecraftClassSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spacecraftClass.search.$post>) {
      return parseResponse(client.spacecraftClass.search.$post(args, options))
    },
  })
}

export function usePostSpacecraftClassSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.spacecraftClass.search.$post>,
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
  const mutationDefaults = getPostSpacecraftClassSearchMutationOptions<TError, TOnMutateResult>(
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

export function getSpeciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.species.$get>>,
) {
  return ['species', '/species', toValue(args)] as const
}

export function getSpeciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.species.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpeciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.species.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpecies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.species.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>
          >,
          ReturnType<typeof getSpeciesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpeciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpeciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.species.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpeciesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.species.search.$get>>,
) {
  return ['species', '/species/search', toValue(args)] as const
}

export function getSpeciesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.species.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpeciesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.species.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpeciesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.species.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
          >,
          ReturnType<typeof getSpeciesSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpeciesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpeciesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.species.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSpeciesSearchMutationKey() {
  return ['species', '/species/search', 'POST'] as const
}

export function getPostSpeciesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.species.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpeciesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.species.search.$post>) {
      return parseResponse(client.species.search.$post(args, options))
    },
  })
}

export function usePostSpeciesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.species.search.$post>,
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
  const mutationDefaults = getPostSpeciesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getStaffQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.staff.$get>>,
) {
  return ['staff', '/staff', toValue(args)] as const
}

export function getStaffQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.staff.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStaffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.staff.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStaff<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.staff.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
          ReturnType<typeof getStaffQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStaffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStaffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.staff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStaffSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.staff.search.$get>>,
) {
  return ['staff', '/staff/search', toValue(args)] as const
}

export function getStaffSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.staff.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStaffSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.staff.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStaffSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.staff.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
          >,
          ReturnType<typeof getStaffSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStaffSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStaffSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.staff.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStaffSearchMutationKey() {
  return ['staff', '/staff/search', 'POST'] as const
}

export function getPostStaffSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.staff.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStaffSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.staff.search.$post>) {
      return parseResponse(client.staff.search.$post(args, options))
    },
  })
}

export function usePostStaffSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.staff.search.$post>,
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
  const mutationDefaults = getPostStaffSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTechnologyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.technology.$get>>,
) {
  return ['technology', '/technology', toValue(args)] as const
}

export function getTechnologyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.technology.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechnologyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.technology.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTechnology<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.technology.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>
          >,
          ReturnType<typeof getTechnologyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTechnologyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechnologyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.technology.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTechnologySearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.technology.search.$get>>,
) {
  return ['technology', '/technology/search', toValue(args)] as const
}

export function getTechnologySearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.technology.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechnologySearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.technology.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTechnologySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.technology.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>
            >
          >,
          ReturnType<typeof getTechnologySearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTechnologySearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechnologySearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.technology.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTechnologySearchMutationKey() {
  return ['technology', '/technology/search', 'POST'] as const
}

export function getPostTechnologySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.technology.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTechnologySearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.technology.search.$post>) {
      return parseResponse(client.technology.search.$post(args, options))
    },
  })
}

export function usePostTechnologySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.technology.search.$post>,
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
  const mutationDefaults = getPostTechnologySearchMutationOptions<TError, TOnMutateResult>(
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

export function getTitleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.title.$get>>,
) {
  return ['title', '/title', toValue(args)] as const
}

export function getTitleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.title.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.title.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTitle<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.title.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
          ReturnType<typeof getTitleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.title.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTitleSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.title.search.$get>>,
) {
  return ['title', '/title/search', toValue(args)] as const
}

export function getTitleSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.title.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTitleSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.title.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTitleSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.title.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
          >,
          ReturnType<typeof getTitleSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTitleSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTitleSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.title.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTitleSearchMutationKey() {
  return ['title', '/title/search', 'POST'] as const
}

export function getPostTitleSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.title.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTitleSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.title.search.$post>) {
      return parseResponse(client.title.search.$post(args, options))
    },
  })
}

export function usePostTitleSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.title.search.$post>,
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
  const mutationDefaults = getPostTitleSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTradingCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCard.$get>>,
) {
  return ['tradingCard', '/tradingCard', toValue(args)] as const
}

export function getTradingCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCard.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTradingCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tradingCard.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTradingCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCard.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
          >,
          ReturnType<typeof getTradingCardQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTradingCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTradingCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tradingCard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTradingCardSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCard.search.$get>>,
) {
  return ['tradingCard', '/tradingCard/search', toValue(args)] as const
}

export function getTradingCardSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCard.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTradingCardSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tradingCard.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTradingCardSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCard.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>
            >
          >,
          ReturnType<typeof getTradingCardSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTradingCardSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tradingCard.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTradingCardSearchMutationKey() {
  return ['tradingCard', '/tradingCard/search', 'POST'] as const
}

export function getPostTradingCardSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tradingCard.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTradingCardSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tradingCard.search.$post>) {
      return parseResponse(client.tradingCard.search.$post(args, options))
    },
  })
}

export function usePostTradingCardSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tradingCard.search.$post>,
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
  const mutationDefaults = getPostTradingCardSearchMutationOptions<TError, TOnMutateResult>(
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

export function getTradingCardDeckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardDeck.$get>>,
) {
  return ['tradingCardDeck', '/tradingCardDeck', toValue(args)] as const
}

export function getTradingCardDeckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardDeck.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTradingCardDeckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tradingCardDeck.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTradingCardDeck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardDeck.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>
            >
          >,
          ReturnType<typeof getTradingCardDeckQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardDeckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTradingCardDeckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tradingCardDeck.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTradingCardDeckSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardDeck.search.$get>>,
) {
  return ['tradingCardDeck', '/tradingCardDeck/search', toValue(args)] as const
}

export function getTradingCardDeckSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardDeck.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTradingCardDeckSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tradingCardDeck.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTradingCardDeckSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardDeck.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
            >
          >,
          ReturnType<typeof getTradingCardDeckSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardDeckSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTradingCardDeckSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tradingCardDeck.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTradingCardDeckSearchMutationKey() {
  return ['tradingCardDeck', '/tradingCardDeck/search', 'POST'] as const
}

export function getPostTradingCardDeckSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tradingCardDeck.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTradingCardDeckSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tradingCardDeck.search.$post>) {
      return parseResponse(client.tradingCardDeck.search.$post(args, options))
    },
  })
}

export function usePostTradingCardDeckSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tradingCardDeck.search.$post>,
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
  const mutationDefaults = getPostTradingCardDeckSearchMutationOptions<TError, TOnMutateResult>(
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

export function getTradingCardSetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardSet.$get>>,
) {
  return ['tradingCardSet', '/tradingCardSet', toValue(args)] as const
}

export function getTradingCardSetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardSet.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTradingCardSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tradingCardSet.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTradingCardSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardSet.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
          >,
          ReturnType<typeof getTradingCardSetQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTradingCardSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tradingCardSet.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTradingCardSetSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardSet.search.$get>>,
) {
  return ['tradingCardSet', '/tradingCardSet/search', toValue(args)] as const
}

export function getTradingCardSetSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardSet.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTradingCardSetSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tradingCardSet.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTradingCardSetSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tradingCardSet.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
            >
          >,
          ReturnType<typeof getTradingCardSetSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardSetSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTradingCardSetSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tradingCardSet.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTradingCardSetSearchMutationKey() {
  return ['tradingCardSet', '/tradingCardSet/search', 'POST'] as const
}

export function getPostTradingCardSetSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.tradingCardSet.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTradingCardSetSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tradingCardSet.search.$post>) {
      return parseResponse(client.tradingCardSet.search.$post(args, options))
    },
  })
}

export function usePostTradingCardSetSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tradingCardSet.search.$post>,
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
  const mutationDefaults = getPostTradingCardSetSearchMutationOptions<TError, TOnMutateResult>(
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

export function getVideoGameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoGame.$get>>,
) {
  return ['videoGame', '/videoGame', toValue(args)] as const
}

export function getVideoGameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoGame.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideoGameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videoGame.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideoGame<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoGame.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>
          >,
          ReturnType<typeof getVideoGameQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideoGameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideoGameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videoGame.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideoGameSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoGame.search.$get>>,
) {
  return ['videoGame', '/videoGame/search', toValue(args)] as const
}

export function getVideoGameSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoGame.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideoGameSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videoGame.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideoGameSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoGame.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>
            >
          >,
          ReturnType<typeof getVideoGameSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVideoGameSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideoGameSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videoGame.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVideoGameSearchMutationKey() {
  return ['videoGame', '/videoGame/search', 'POST'] as const
}

export function getPostVideoGameSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.videoGame.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideoGameSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videoGame.search.$post>) {
      return parseResponse(client.videoGame.search.$post(args, options))
    },
  })
}

export function usePostVideoGameSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.videoGame.search.$post>,
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
  const mutationDefaults = getPostVideoGameSearchMutationOptions<TError, TOnMutateResult>(
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

export function getVideoReleaseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoRelease.$get>>,
) {
  return ['videoRelease', '/videoRelease', toValue(args)] as const
}

export function getVideoReleaseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoRelease.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideoReleaseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videoRelease.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVideoRelease<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoRelease.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
          >,
          ReturnType<typeof getVideoReleaseQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideoReleaseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideoReleaseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videoRelease.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVideoReleaseSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoRelease.search.$get>>,
) {
  return ['videoRelease', '/videoRelease/search', toValue(args)] as const
}

export function getVideoReleaseSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoRelease.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVideoReleaseSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.videoRelease.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVideoReleaseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.videoRelease.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>
            >
          >,
          ReturnType<typeof getVideoReleaseSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVideoReleaseSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVideoReleaseSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.videoRelease.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVideoReleaseSearchMutationKey() {
  return ['videoRelease', '/videoRelease/search', 'POST'] as const
}

export function getPostVideoReleaseSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.videoRelease.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVideoReleaseSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.videoRelease.search.$post>) {
      return parseResponse(client.videoRelease.search.$post(args, options))
    },
  })
}

export function usePostVideoReleaseSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.videoRelease.search.$post>,
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
  const mutationDefaults = getPostVideoReleaseSearchMutationOptions<TError, TOnMutateResult>(
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

export function getWeaponQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.weapon.$get>>,
) {
  return ['weapon', '/weapon', toValue(args)] as const
}

export function getWeaponQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.weapon.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWeaponQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.weapon.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWeapon<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.weapon.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
          ReturnType<typeof getWeaponQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWeaponQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWeaponQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.weapon.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWeaponSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.weapon.search.$get>>,
) {
  return ['weapon', '/weapon/search', toValue(args)] as const
}

export function getWeaponSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.weapon.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWeaponSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.weapon.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWeaponSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.weapon.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
          >,
          ReturnType<typeof getWeaponSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWeaponSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWeaponSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.weapon.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWeaponSearchMutationKey() {
  return ['weapon', '/weapon/search', 'POST'] as const
}

export function getPostWeaponSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.weapon.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWeaponSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.weapon.search.$post>) {
      return parseResponse(client.weapon.search.$post(args, options))
    },
  })
}

export function usePostWeaponSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.weapon.search.$post>,
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
  const mutationDefaults = getPostWeaponSearchMutationOptions<TError, TOnMutateResult>(
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
