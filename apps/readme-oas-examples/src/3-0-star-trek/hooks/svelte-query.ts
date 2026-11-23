import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function getAnimalQueryKey(args: InferRequestType<typeof client.animal.$get>) {
  return ['animal', '/animal', args] as const
}

export function getAnimalQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.animal.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnimalQueryKey>
  >({
    queryKey: getAnimalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.animal.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnimal<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.animal.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnimalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimalQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnimalSearchQueryKey(args: InferRequestType<typeof client.animal.search.$get>) {
  return ['animal', '/animal/search', args] as const
}

export function getAnimalSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.animal.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnimalSearchQueryKey>
  >({
    queryKey: getAnimalSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.animal.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnimalSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.animal.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnimalSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnimalSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAnimalSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.animal.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnimalSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAstronomicalObjectQueryKey(
  args: InferRequestType<typeof client.astronomicalObject.$get>,
) {
  return ['astronomicalObject', '/astronomicalObject', args] as const
}

export function getAstronomicalObjectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.astronomicalObject.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAstronomicalObjectQueryKey>
  >({
    queryKey: getAstronomicalObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.astronomicalObject.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAstronomicalObject<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.astronomicalObject.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAstronomicalObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAstronomicalObjectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAstronomicalObjectSearchQueryKey(
  args: InferRequestType<typeof client.astronomicalObject.search.$get>,
) {
  return ['astronomicalObject', '/astronomicalObject/search', args] as const
}

export function getAstronomicalObjectSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.astronomicalObject.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAstronomicalObjectSearchQueryKey>
  >({
    queryKey: getAstronomicalObjectSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.astronomicalObject.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAstronomicalObjectSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.astronomicalObject.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAstronomicalObjectSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAstronomicalObjectSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAstronomicalObjectSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.astronomicalObject.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAstronomicalObjectSearchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBookQueryKey(args: InferRequestType<typeof client.book.$get>) {
  return ['book', '/book', args] as const
}

export function getBookQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.book.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookQueryKey>
  >({
    queryKey: getBookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.book.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBook<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.book.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBookSearchQueryKey(args: InferRequestType<typeof client.book.search.$get>) {
  return ['book', '/book/search', args] as const
}

export function getBookSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.book.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookSearchQueryKey>
  >({
    queryKey: getBookSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.book.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.book.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBookSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostBookSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.book.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBookSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBookCollectionQueryKey(
  args: InferRequestType<typeof client.bookCollection.$get>,
) {
  return ['bookCollection', '/bookCollection', args] as const
}

export function getBookCollectionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bookCollection.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookCollectionQueryKey>
  >({
    queryKey: getBookCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookCollection.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookCollection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bookCollection.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBookCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookCollectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBookCollectionSearchQueryKey(
  args: InferRequestType<typeof client.bookCollection.search.$get>,
) {
  return ['bookCollection', '/bookCollection/search', args] as const
}

export function getBookCollectionSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bookCollection.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookCollectionSearchQueryKey>
  >({
    queryKey: getBookCollectionSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookCollection.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookCollectionSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bookCollection.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBookCollectionSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBookCollectionSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBookCollectionSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bookCollection.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBookCollectionSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBookSeriesQueryKey(args: InferRequestType<typeof client.bookSeries.$get>) {
  return ['bookSeries', '/bookSeries', args] as const
}

export function getBookSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bookSeries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookSeriesQueryKey>
  >({
    queryKey: getBookSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookSeries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bookSeries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBookSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBookSeriesSearchQueryKey(
  args: InferRequestType<typeof client.bookSeries.search.$get>,
) {
  return ['bookSeries', '/bookSeries/search', args] as const
}

export function getBookSeriesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bookSeries.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookSeriesSearchQueryKey>
  >({
    queryKey: getBookSeriesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookSeries.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bookSeries.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBookSeriesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBookSeriesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostBookSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bookSeries.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBookSeriesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCharacterQueryKey(args: InferRequestType<typeof client.character.$get>) {
  return ['character', '/character', args] as const
}

export function getCharacterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.character.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCharacterQueryKey>
  >({
    queryKey: getCharacterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.character.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCharacter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.character.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCharacterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharacterQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCharacterSearchQueryKey(
  args: InferRequestType<typeof client.character.search.$get>,
) {
  return ['character', '/character/search', args] as const
}

export function getCharacterSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.character.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCharacterSearchQueryKey>
  >({
    queryKey: getCharacterSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.character.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCharacterSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.character.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCharacterSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCharacterSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCharacterSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.character.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCharacterSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getComicsQueryKey(args: InferRequestType<typeof client.comics.$get>) {
  return ['comics', '/comics', args] as const
}

export function getComicsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComicsQueryKey>
  >({
    queryKey: getComicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getComicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getComicsSearchQueryKey(args: InferRequestType<typeof client.comics.search.$get>) {
  return ['comics', '/comics/search', args] as const
}

export function getComicsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comics.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicsSearchQueryKey>
  >({
    queryKey: getComicsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comics.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComicsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comics.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComicsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostComicsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.comics.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostComicsSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getComicCollectionQueryKey(
  args: InferRequestType<typeof client.comicCollection.$get>,
) {
  return ['comicCollection', '/comicCollection', args] as const
}

export function getComicCollectionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comicCollection.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicCollectionQueryKey>
  >({
    queryKey: getComicCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comicCollection.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComicCollection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comicCollection.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComicCollectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicCollectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getComicCollectionSearchQueryKey(
  args: InferRequestType<typeof client.comicCollection.search.$get>,
) {
  return ['comicCollection', '/comicCollection/search', args] as const
}

export function getComicCollectionSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.comicCollection.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComicCollectionSearchQueryKey>
  >({
    queryKey: getComicCollectionSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comicCollection.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createComicCollectionSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comicCollection.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getComicCollectionSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getComicCollectionSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostComicCollectionSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.comicCollection.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostComicCollectionSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getComicSeriesQueryKey(args: InferRequestType<typeof client.comicSeries.$get>) {
  return ['comicSeries', '/comicSeries', args] as const
}

export function getComicSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comicSeries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComicSeriesQueryKey>
  >({
    queryKey: getComicSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comicSeries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComicSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comicSeries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComicSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getComicSeriesSearchQueryKey(
  args: InferRequestType<typeof client.comicSeries.search.$get>,
) {
  return ['comicSeries', '/comicSeries/search', args] as const
}

export function getComicSeriesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comicSeries.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicSeriesSearchQueryKey>
  >({
    queryKey: getComicSeriesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comicSeries.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComicSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comicSeries.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getComicSeriesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicSeriesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostComicSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.comicSeries.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostComicSeriesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getComicStripQueryKey(args: InferRequestType<typeof client.comicStrip.$get>) {
  return ['comicStrip', '/comicStrip', args] as const
}

export function getComicStripQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comicStrip.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComicStripQueryKey>
  >({
    queryKey: getComicStripQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comicStrip.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComicStrip<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comicStrip.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComicStripQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicStripQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getComicStripSearchQueryKey(
  args: InferRequestType<typeof client.comicStrip.search.$get>,
) {
  return ['comicStrip', '/comicStrip/search', args] as const
}

export function getComicStripSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.comicStrip.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComicStripSearchQueryKey>
  >({
    queryKey: getComicStripSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comicStrip.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createComicStripSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.comicStrip.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getComicStripSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getComicStripSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostComicStripSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.comicStrip.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostComicStripSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCompanyQueryKey(args: InferRequestType<typeof client.company.$get>) {
  return ['company', '/company', args] as const
}

export function getCompanyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.company.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCompanyQueryKey>
  >({
    queryKey: getCompanyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompany<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.company.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCompanyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompanyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCompanySearchQueryKey(
  args: InferRequestType<typeof client.company.search.$get>,
) {
  return ['company', '/company/search', args] as const
}

export function getCompanySearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.company.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCompanySearchQueryKey>
  >({
    queryKey: getCompanySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.company.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCompanySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.company.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompanySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCompanySearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCompanySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.company.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCompanySearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConflictQueryKey(args: InferRequestType<typeof client.conflict.$get>) {
  return ['conflict', '/conflict', args] as const
}

export function getConflictQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conflict.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConflictQueryKey>
  >({
    queryKey: getConflictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conflict.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConflict<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.conflict.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConflictQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConflictQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConflictSearchQueryKey(
  args: InferRequestType<typeof client.conflict.search.$get>,
) {
  return ['conflict', '/conflict/search', args] as const
}

export function getConflictSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.conflict.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConflictSearchQueryKey>
  >({
    queryKey: getConflictSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.conflict.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConflictSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.conflict.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConflictSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConflictSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostConflictSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.conflict.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConflictSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getElementQueryKey(args: InferRequestType<typeof client.element.$get>) {
  return ['element', '/element', args] as const
}

export function getElementQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.element.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getElementQueryKey>
  >({
    queryKey: getElementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.element.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createElement<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.element.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getElementQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getElementQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getElementSearchQueryKey(
  args: InferRequestType<typeof client.element.search.$get>,
) {
  return ['element', '/element/search', args] as const
}

export function getElementSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.element.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getElementSearchQueryKey>
  >({
    queryKey: getElementSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.element.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createElementSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.element.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getElementSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getElementSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostElementSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.element.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostElementSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEpisodeQueryKey(args: InferRequestType<typeof client.episode.$get>) {
  return ['episode', '/episode', args] as const
}

export function getEpisodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.episode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEpisodeQueryKey>
  >({
    queryKey: getEpisodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEpisode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.episode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEpisodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpisodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEpisodeSearchQueryKey(
  args: InferRequestType<typeof client.episode.search.$get>,
) {
  return ['episode', '/episode/search', args] as const
}

export function getEpisodeSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.episode.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEpisodeSearchQueryKey>
  >({
    queryKey: getEpisodeSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.episode.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEpisodeSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.episode.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEpisodeSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEpisodeSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEpisodeSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.episode.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEpisodeSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFoodQueryKey(args: InferRequestType<typeof client.food.$get>) {
  return ['food', '/food', args] as const
}

export function getFoodQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoodQueryKey>
  >({
    queryKey: getFoodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFood<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.food.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFoodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFoodSearchQueryKey(args: InferRequestType<typeof client.food.search.$get>) {
  return ['food', '/food/search', args] as const
}

export function getFoodSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoodSearchQueryKey>
  >({
    queryKey: getFoodSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFoodSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.food.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoodSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostFoodSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.food.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFoodSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLiteratureQueryKey(args: InferRequestType<typeof client.literature.$get>) {
  return ['literature', '/literature', args] as const
}

export function getLiteratureQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.literature.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLiteratureQueryKey>
  >({
    queryKey: getLiteratureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.literature.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiterature<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.literature.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLiteratureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiteratureQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLiteratureSearchQueryKey(
  args: InferRequestType<typeof client.literature.search.$get>,
) {
  return ['literature', '/literature/search', args] as const
}

export function getLiteratureSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.literature.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLiteratureSearchQueryKey>
  >({
    queryKey: getLiteratureSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.literature.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiteratureSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.literature.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLiteratureSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiteratureSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLiteratureSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.literature.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLiteratureSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLocationQueryKey(args: InferRequestType<typeof client.location.$get>) {
  return ['location', '/location', args] as const
}

export function getLocationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.location.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationQueryKey>
  >({
    queryKey: getLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.location.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLocation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.location.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLocationSearchQueryKey(
  args: InferRequestType<typeof client.location.search.$get>,
) {
  return ['location', '/location/search', args] as const
}

export function getLocationSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.location.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationSearchQueryKey>
  >({
    queryKey: getLocationSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.location.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLocationSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.location.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLocationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.location.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLocationSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMagazineQueryKey(args: InferRequestType<typeof client.magazine.$get>) {
  return ['magazine', '/magazine', args] as const
}

export function getMagazineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.magazine.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMagazineQueryKey>
  >({
    queryKey: getMagazineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.magazine.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMagazine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.magazine.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMagazineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMagazineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMagazineSearchQueryKey(
  args: InferRequestType<typeof client.magazine.search.$get>,
) {
  return ['magazine', '/magazine/search', args] as const
}

export function getMagazineSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.magazine.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMagazineSearchQueryKey>
  >({
    queryKey: getMagazineSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.magazine.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMagazineSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.magazine.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMagazineSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMagazineSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMagazineSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.magazine.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMagazineSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMagazineSeriesQueryKey(
  args: InferRequestType<typeof client.magazineSeries.$get>,
) {
  return ['magazineSeries', '/magazineSeries', args] as const
}

export function getMagazineSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.magazineSeries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMagazineSeriesQueryKey>
  >({
    queryKey: getMagazineSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.magazineSeries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMagazineSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.magazineSeries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMagazineSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMagazineSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMagazineSeriesSearchQueryKey(
  args: InferRequestType<typeof client.magazineSeries.search.$get>,
) {
  return ['magazineSeries', '/magazineSeries/search', args] as const
}

export function getMagazineSeriesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.magazineSeries.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMagazineSeriesSearchQueryKey>
  >({
    queryKey: getMagazineSeriesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.magazineSeries.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMagazineSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.magazineSeries.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMagazineSeriesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMagazineSeriesSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMagazineSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.magazineSeries.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMagazineSeriesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMaterialQueryKey(args: InferRequestType<typeof client.material.$get>) {
  return ['material', '/material', args] as const
}

export function getMaterialQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.material.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMaterialQueryKey>
  >({
    queryKey: getMaterialQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.material.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMaterial<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.material.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMaterialQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMaterialQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMaterialSearchQueryKey(
  args: InferRequestType<typeof client.material.search.$get>,
) {
  return ['material', '/material/search', args] as const
}

export function getMaterialSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.material.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMaterialSearchQueryKey>
  >({
    queryKey: getMaterialSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.material.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMaterialSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.material.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMaterialSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMaterialSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMaterialSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.material.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMaterialSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMedicalConditionQueryKey(
  args: InferRequestType<typeof client.medicalCondition.$get>,
) {
  return ['medicalCondition', '/medicalCondition', args] as const
}

export function getMedicalConditionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.medicalCondition.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMedicalConditionQueryKey>
  >({
    queryKey: getMedicalConditionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.medicalCondition.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMedicalCondition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.medicalCondition.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMedicalConditionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMedicalConditionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMedicalConditionSearchQueryKey(
  args: InferRequestType<typeof client.medicalCondition.search.$get>,
) {
  return ['medicalCondition', '/medicalCondition/search', args] as const
}

export function getMedicalConditionSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.medicalCondition.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMedicalConditionSearchQueryKey>
  >({
    queryKey: getMedicalConditionSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.medicalCondition.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMedicalConditionSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.medicalCondition.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMedicalConditionSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMedicalConditionSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMedicalConditionSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.medicalCondition.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMedicalConditionSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMovieQueryKey(args: InferRequestType<typeof client.movie.$get>) {
  return ['movie', '/movie', args] as const
}

export function getMovieQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.movie.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMovieQueryKey>
  >({
    queryKey: getMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movie.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMovie<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.movie.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMovieQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMovieSearchQueryKey(args: InferRequestType<typeof client.movie.search.$get>) {
  return ['movie', '/movie/search', args] as const
}

export function getMovieSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.movie.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMovieSearchQueryKey>
  >({
    queryKey: getMovieSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movie.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMovieSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.movie.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMovieSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMovieSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMovieSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.movie.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMovieSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOccupationQueryKey(args: InferRequestType<typeof client.occupation.$get>) {
  return ['occupation', '/occupation', args] as const
}

export function getOccupationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.occupation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOccupationQueryKey>
  >({
    queryKey: getOccupationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.occupation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOccupation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.occupation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOccupationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOccupationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOccupationSearchQueryKey(
  args: InferRequestType<typeof client.occupation.search.$get>,
) {
  return ['occupation', '/occupation/search', args] as const
}

export function getOccupationSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.occupation.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOccupationSearchQueryKey>
  >({
    queryKey: getOccupationSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.occupation.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOccupationSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.occupation.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOccupationSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOccupationSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOccupationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.occupation.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOccupationSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganizationQueryKey(args: InferRequestType<typeof client.organization.$get>) {
  return ['organization', '/organization', args] as const
}

export function getOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrganizationQueryKey>
  >({
    queryKey: getOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganization<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrganizationSearchQueryKey(
  args: InferRequestType<typeof client.organization.search.$get>,
) {
  return ['organization', '/organization/search', args] as const
}

export function getOrganizationSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organization.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationSearchQueryKey>
  >({
    queryKey: getOrganizationSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organization.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organization.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrganizationSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPerformerQueryKey(args: InferRequestType<typeof client.performer.$get>) {
  return ['performer', '/performer', args] as const
}

export function getPerformerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.performer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPerformerQueryKey>
  >({
    queryKey: getPerformerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.performer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPerformer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.performer.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPerformerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPerformerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPerformerSearchQueryKey(
  args: InferRequestType<typeof client.performer.search.$get>,
) {
  return ['performer', '/performer/search', args] as const
}

export function getPerformerSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.performer.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPerformerSearchQueryKey>
  >({
    queryKey: getPerformerSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.performer.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPerformerSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.performer.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPerformerSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPerformerSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostPerformerSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.performer.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPerformerSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSeasonQueryKey(args: InferRequestType<typeof client.season.$get>) {
  return ['season', '/season', args] as const
}

export function getSeasonQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.season.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeasonQueryKey>
  >({
    queryKey: getSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.season.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSeason<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.season.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSeasonSearchQueryKey(args: InferRequestType<typeof client.season.search.$get>) {
  return ['season', '/season/search', args] as const
}

export function getSeasonSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.season.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeasonSearchQueryKey>
  >({
    queryKey: getSeasonSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.season.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSeasonSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.season.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeasonSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeasonSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSeasonSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.season.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSeasonSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSeriesQueryKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function getSeriesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSeriesQueryKey>
  >({
    queryKey: getSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSeries<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.series.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSeriesSearchQueryKey(args: InferRequestType<typeof client.series.search.$get>) {
  return ['series', '/series/search', args] as const
}

export function getSeriesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.series.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeriesSearchQueryKey>
  >({
    queryKey: getSeriesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.series.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSeriesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.series.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSeriesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeriesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSeriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.series.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSeriesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSoundtrackQueryKey(args: InferRequestType<typeof client.soundtrack.$get>) {
  return ['soundtrack', '/soundtrack', args] as const
}

export function getSoundtrackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.soundtrack.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSoundtrackQueryKey>
  >({
    queryKey: getSoundtrackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.soundtrack.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSoundtrack<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.soundtrack.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSoundtrackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSoundtrackQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSoundtrackSearchQueryKey(
  args: InferRequestType<typeof client.soundtrack.search.$get>,
) {
  return ['soundtrack', '/soundtrack/search', args] as const
}

export function getSoundtrackSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.soundtrack.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSoundtrackSearchQueryKey>
  >({
    queryKey: getSoundtrackSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.soundtrack.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSoundtrackSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.soundtrack.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSoundtrackSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSoundtrackSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSoundtrackSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.soundtrack.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSoundtrackSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSpacecraftQueryKey(args: InferRequestType<typeof client.spacecraft.$get>) {
  return ['spacecraft', '/spacecraft', args] as const
}

export function getSpacecraftQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spacecraft.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpacecraftQueryKey>
  >({
    queryKey: getSpacecraftQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spacecraft.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSpacecraft<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.spacecraft.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacecraftQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpacecraftQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSpacecraftSearchQueryKey(
  args: InferRequestType<typeof client.spacecraft.search.$get>,
) {
  return ['spacecraft', '/spacecraft/search', args] as const
}

export function getSpacecraftSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spacecraft.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacecraftSearchQueryKey>
  >({
    queryKey: getSpacecraftSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spacecraft.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSpacecraftSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.spacecraft.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacecraftSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpacecraftSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSpacecraftSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.spacecraft.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSpacecraftSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSpacecraftClassQueryKey(
  args: InferRequestType<typeof client.spacecraftClass.$get>,
) {
  return ['spacecraftClass', '/spacecraftClass', args] as const
}

export function getSpacecraftClassQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.spacecraftClass.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpacecraftClassQueryKey>
  >({
    queryKey: getSpacecraftClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spacecraftClass.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSpacecraftClass<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.spacecraftClass.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpacecraftClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpacecraftClassQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSpacecraftClassSearchQueryKey(
  args: InferRequestType<typeof client.spacecraftClass.search.$get>,
) {
  return ['spacecraftClass', '/spacecraftClass/search', args] as const
}

export function getSpacecraftClassSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.spacecraftClass.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacecraftClassSearchQueryKey>
  >({
    queryKey: getSpacecraftClassSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spacecraftClass.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSpacecraftClassSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.spacecraftClass.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacecraftClassSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSpacecraftClassSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSpacecraftClassSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.spacecraftClass.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSpacecraftClassSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSpeciesQueryKey(args: InferRequestType<typeof client.species.$get>) {
  return ['species', '/species', args] as const
}

export function getSpeciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.species.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpeciesQueryKey>
  >({
    queryKey: getSpeciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.species.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSpecies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.species.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSpeciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpeciesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSpeciesSearchQueryKey(
  args: InferRequestType<typeof client.species.search.$get>,
) {
  return ['species', '/species/search', args] as const
}

export function getSpeciesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.species.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSpeciesSearchQueryKey>
  >({
    queryKey: getSpeciesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.species.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSpeciesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.species.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSpeciesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSpeciesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSpeciesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.species.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSpeciesSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStaffQueryKey(args: InferRequestType<typeof client.staff.$get>) {
  return ['staff', '/staff', args] as const
}

export function getStaffQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.staff.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStaffQueryKey>
  >({
    queryKey: getStaffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.staff.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStaff<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.staff.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStaffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStaffQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStaffSearchQueryKey(args: InferRequestType<typeof client.staff.search.$get>) {
  return ['staff', '/staff/search', args] as const
}

export function getStaffSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.staff.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStaffSearchQueryKey>
  >({
    queryKey: getStaffSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.staff.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStaffSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.staff.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStaffSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStaffSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostStaffSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.staff.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStaffSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTechnologyQueryKey(args: InferRequestType<typeof client.technology.$get>) {
  return ['technology', '/technology', args] as const
}

export function getTechnologyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.technology.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTechnologyQueryKey>
  >({
    queryKey: getTechnologyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.technology.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTechnology<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.technology.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTechnologyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTechnologyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTechnologySearchQueryKey(
  args: InferRequestType<typeof client.technology.search.$get>,
) {
  return ['technology', '/technology/search', args] as const
}

export function getTechnologySearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.technology.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTechnologySearchQueryKey>
  >({
    queryKey: getTechnologySearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.technology.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTechnologySearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.technology.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechnologySearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTechnologySearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTechnologySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.technology.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTechnologySearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTitleQueryKey(args: InferRequestType<typeof client.title.$get>) {
  return ['title', '/title', args] as const
}

export function getTitleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.title.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTitleQueryKey>
  >({
    queryKey: getTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.title.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTitle<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.title.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTitleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTitleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTitleSearchQueryKey(args: InferRequestType<typeof client.title.search.$get>) {
  return ['title', '/title/search', args] as const
}

export function getTitleSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.title.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTitleSearchQueryKey>
  >({
    queryKey: getTitleSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.title.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTitleSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.title.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTitleSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTitleSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTitleSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.title.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTitleSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTradingCardQueryKey(args: InferRequestType<typeof client.tradingCard.$get>) {
  return ['tradingCard', '/tradingCard', args] as const
}

export function getTradingCardQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tradingCard.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTradingCardQueryKey>
  >({
    queryKey: getTradingCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tradingCard.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTradingCard<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tradingCard.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTradingCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTradingCardQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTradingCardSearchQueryKey(
  args: InferRequestType<typeof client.tradingCard.search.$get>,
) {
  return ['tradingCard', '/tradingCard/search', args] as const
}

export function getTradingCardSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tradingCard.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardSearchQueryKey>
  >({
    queryKey: getTradingCardSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tradingCard.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTradingCardSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tradingCard.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTradingCardSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTradingCardSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTradingCardSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tradingCard.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTradingCardSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTradingCardDeckQueryKey(
  args: InferRequestType<typeof client.tradingCardDeck.$get>,
) {
  return ['tradingCardDeck', '/tradingCardDeck', args] as const
}

export function getTradingCardDeckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tradingCardDeck.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardDeckQueryKey>
  >({
    queryKey: getTradingCardDeckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tradingCardDeck.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTradingCardDeck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tradingCardDeck.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTradingCardDeckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTradingCardDeckQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTradingCardDeckSearchQueryKey(
  args: InferRequestType<typeof client.tradingCardDeck.search.$get>,
) {
  return ['tradingCardDeck', '/tradingCardDeck/search', args] as const
}

export function getTradingCardDeckSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tradingCardDeck.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardDeckSearchQueryKey>
  >({
    queryKey: getTradingCardDeckSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tradingCardDeck.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTradingCardDeckSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tradingCardDeck.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTradingCardDeckSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTradingCardDeckSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTradingCardDeckSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tradingCardDeck.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTradingCardDeckSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTradingCardSetQueryKey(
  args: InferRequestType<typeof client.tradingCardSet.$get>,
) {
  return ['tradingCardSet', '/tradingCardSet', args] as const
}

export function getTradingCardSetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tradingCardSet.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardSetQueryKey>
  >({
    queryKey: getTradingCardSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tradingCardSet.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTradingCardSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tradingCardSet.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTradingCardSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTradingCardSetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTradingCardSetSearchQueryKey(
  args: InferRequestType<typeof client.tradingCardSet.search.$get>,
) {
  return ['tradingCardSet', '/tradingCardSet/search', args] as const
}

export function getTradingCardSetSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.tradingCardSet.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTradingCardSetSearchQueryKey>
  >({
    queryKey: getTradingCardSetSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tradingCardSet.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTradingCardSetSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tradingCardSet.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTradingCardSetSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTradingCardSetSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTradingCardSetSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tradingCardSet.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTradingCardSetSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideoGameQueryKey(args: InferRequestType<typeof client.videoGame.$get>) {
  return ['videoGame', '/videoGame', args] as const
}

export function getVideoGameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videoGame.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideoGameQueryKey>
  >({
    queryKey: getVideoGameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videoGame.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideoGame<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videoGame.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVideoGameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideoGameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVideoGameSearchQueryKey(
  args: InferRequestType<typeof client.videoGame.search.$get>,
) {
  return ['videoGame', '/videoGame/search', args] as const
}

export function getVideoGameSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videoGame.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVideoGameSearchQueryKey>
  >({
    queryKey: getVideoGameSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videoGame.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideoGameSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videoGame.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVideoGameSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideoGameSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostVideoGameSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.videoGame.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideoGameSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVideoReleaseQueryKey(args: InferRequestType<typeof client.videoRelease.$get>) {
  return ['videoRelease', '/videoRelease', args] as const
}

export function getVideoReleaseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videoRelease.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVideoReleaseQueryKey>
  >({
    queryKey: getVideoReleaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videoRelease.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideoRelease<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videoRelease.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVideoReleaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideoReleaseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVideoReleaseSearchQueryKey(
  args: InferRequestType<typeof client.videoRelease.search.$get>,
) {
  return ['videoRelease', '/videoRelease/search', args] as const
}

export function getVideoReleaseSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.videoRelease.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVideoReleaseSearchQueryKey>
  >({
    queryKey: getVideoReleaseSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.videoRelease.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVideoReleaseSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.videoRelease.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVideoReleaseSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVideoReleaseSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostVideoReleaseSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.videoRelease.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVideoReleaseSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWeaponQueryKey(args: InferRequestType<typeof client.weapon.$get>) {
  return ['weapon', '/weapon', args] as const
}

export function getWeaponQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.weapon.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWeaponQueryKey>
  >({
    queryKey: getWeaponQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.weapon.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWeapon<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.weapon.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWeaponQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWeaponQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWeaponSearchQueryKey(args: InferRequestType<typeof client.weapon.search.$get>) {
  return ['weapon', '/weapon/search', args] as const
}

export function getWeaponSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.weapon.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWeaponSearchQueryKey>
  >({
    queryKey: getWeaponSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.weapon.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWeaponSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.weapon.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWeaponSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWeaponSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWeaponSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.weapon.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWeaponSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
