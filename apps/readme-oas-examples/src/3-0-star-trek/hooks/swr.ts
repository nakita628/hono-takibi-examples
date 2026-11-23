import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAnimalKey(args: InferRequestType<typeof client.animal.$get>) {
  return ['animal', '/animal', args] as const
}

export function useGetAnimal<TError = unknown>(
  args: InferRequestType<typeof client.animal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnimalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.animal.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAnimal<TError = unknown>(
  args: InferRequestType<typeof client.animal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnimalKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.animal.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAnimalSearchKey(args: InferRequestType<typeof client.animal.search.$get>) {
  return ['animal', '/animal/search', args] as const
}

export function useGetAnimalSearch<TError = unknown>(
  args: InferRequestType<typeof client.animal.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnimalSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.animal.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnimalSearch<TError = unknown>(
  args: InferRequestType<typeof client.animal.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnimalSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.animal.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnimalSearchKey() {
  return ['animal', '/animal/search', 'POST'] as const
}

export function usePostAnimalSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.animal.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.animal.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnimalSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.animal.search.$post> }) =>
        parseResponse(client.animal.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAstronomicalObjectKey(
  args: InferRequestType<typeof client.astronomicalObject.$get>,
) {
  return ['astronomicalObject', '/astronomicalObject', args] as const
}

export function useGetAstronomicalObject<TError = unknown>(
  args: InferRequestType<typeof client.astronomicalObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAstronomicalObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.astronomicalObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAstronomicalObject<TError = unknown>(
  args: InferRequestType<typeof client.astronomicalObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAstronomicalObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.astronomicalObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAstronomicalObjectSearchKey(
  args: InferRequestType<typeof client.astronomicalObject.search.$get>,
) {
  return ['astronomicalObject', '/astronomicalObject/search', args] as const
}

export function useGetAstronomicalObjectSearch<TError = unknown>(
  args: InferRequestType<typeof client.astronomicalObject.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAstronomicalObjectSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.astronomicalObject.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAstronomicalObjectSearch<TError = unknown>(
  args: InferRequestType<typeof client.astronomicalObject.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAstronomicalObjectSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.astronomicalObject.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAstronomicalObjectSearchKey() {
  return ['astronomicalObject', '/astronomicalObject/search', 'POST'] as const
}

export function usePostAstronomicalObjectSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.astronomicalObject.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.astronomicalObject.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAstronomicalObjectSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.astronomicalObject.search.$post> },
      ) => parseResponse(client.astronomicalObject.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookKey(args: InferRequestType<typeof client.book.$get>) {
  return ['book', '/book', args] as const
}

export function useGetBook<TError = unknown>(
  args: InferRequestType<typeof client.book.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.book.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBook<TError = unknown>(
  args: InferRequestType<typeof client.book.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.book.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBookSearchKey(args: InferRequestType<typeof client.book.search.$get>) {
  return ['book', '/book/search', args] as const
}

export function useGetBookSearch<TError = unknown>(
  args: InferRequestType<typeof client.book.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.book.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookSearch<TError = unknown>(
  args: InferRequestType<typeof client.book.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.book.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookSearchKey() {
  return ['book', '/book/search', 'POST'] as const
}

export function usePostBookSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.book.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.book.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.book.search.$post> }) =>
        parseResponse(client.book.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookCollectionKey(args: InferRequestType<typeof client.bookCollection.$get>) {
  return ['bookCollection', '/bookCollection', args] as const
}

export function useGetBookCollection<TError = unknown>(
  args: InferRequestType<typeof client.bookCollection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookCollectionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookCollection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookCollection<TError = unknown>(
  args: InferRequestType<typeof client.bookCollection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookCollectionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookCollection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookCollectionSearchKey(
  args: InferRequestType<typeof client.bookCollection.search.$get>,
) {
  return ['bookCollection', '/bookCollection/search', args] as const
}

export function useGetBookCollectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.bookCollection.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookCollectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookCollection.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookCollectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.bookCollection.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookCollectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookCollection.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookCollectionSearchKey() {
  return ['bookCollection', '/bookCollection/search', 'POST'] as const
}

export function usePostBookCollectionSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bookCollection.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bookCollection.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookCollectionSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bookCollection.search.$post> },
      ) => parseResponse(client.bookCollection.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookSeriesKey(args: InferRequestType<typeof client.bookSeries.$get>) {
  return ['bookSeries', '/bookSeries', args] as const
}

export function useGetBookSeries<TError = unknown>(
  args: InferRequestType<typeof client.bookSeries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookSeries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookSeries<TError = unknown>(
  args: InferRequestType<typeof client.bookSeries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookSeries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookSeriesSearchKey(
  args: InferRequestType<typeof client.bookSeries.search.$get>,
) {
  return ['bookSeries', '/bookSeries/search', args] as const
}

export function useGetBookSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.bookSeries.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookSeriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookSeries.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.bookSeries.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBookSeriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookSeries.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookSeriesSearchKey() {
  return ['bookSeries', '/bookSeries/search', 'POST'] as const
}

export function usePostBookSeriesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookSeries.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bookSeries.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookSeriesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bookSeries.search.$post> }) =>
        parseResponse(client.bookSeries.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCharacterKey(args: InferRequestType<typeof client.character.$get>) {
  return ['character', '/character', args] as const
}

export function useGetCharacter<TError = unknown>(
  args: InferRequestType<typeof client.character.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCharacterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.character.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCharacter<TError = unknown>(
  args: InferRequestType<typeof client.character.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCharacterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.character.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCharacterSearchKey(
  args: InferRequestType<typeof client.character.search.$get>,
) {
  return ['character', '/character/search', args] as const
}

export function useGetCharacterSearch<TError = unknown>(
  args: InferRequestType<typeof client.character.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCharacterSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.character.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCharacterSearch<TError = unknown>(
  args: InferRequestType<typeof client.character.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCharacterSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.character.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCharacterSearchKey() {
  return ['character', '/character/search', 'POST'] as const
}

export function usePostCharacterSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.character.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.character.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCharacterSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.character.search.$post> }) =>
        parseResponse(client.character.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetComicsKey(args: InferRequestType<typeof client.comics.$get>) {
  return ['comics', '/comics', args] as const
}

export function useGetComics<TError = unknown>(
  args: InferRequestType<typeof client.comics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.comics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetComics<TError = unknown>(
  args: InferRequestType<typeof client.comics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.comics.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetComicsSearchKey(args: InferRequestType<typeof client.comics.search.$get>) {
  return ['comics', '/comics/search', args] as const
}

export function useGetComicsSearch<TError = unknown>(
  args: InferRequestType<typeof client.comics.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comics.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComicsSearch<TError = unknown>(
  args: InferRequestType<typeof client.comics.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comics.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostComicsSearchKey() {
  return ['comics', '/comics/search', 'POST'] as const
}

export function usePostComicsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comics.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.comics.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostComicsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.comics.search.$post> }) =>
        parseResponse(client.comics.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetComicCollectionKey(
  args: InferRequestType<typeof client.comicCollection.$get>,
) {
  return ['comicCollection', '/comicCollection', args] as const
}

export function useGetComicCollection<TError = unknown>(
  args: InferRequestType<typeof client.comicCollection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicCollection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComicCollection<TError = unknown>(
  args: InferRequestType<typeof client.comicCollection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicCollection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComicCollectionSearchKey(
  args: InferRequestType<typeof client.comicCollection.search.$get>,
) {
  return ['comicCollection', '/comicCollection/search', args] as const
}

export function useGetComicCollectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.comicCollection.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicCollectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicCollection.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComicCollectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.comicCollection.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicCollectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicCollection.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostComicCollectionSearchKey() {
  return ['comicCollection', '/comicCollection/search', 'POST'] as const
}

export function usePostComicCollectionSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.comicCollection.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.comicCollection.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostComicCollectionSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.comicCollection.search.$post> },
      ) => parseResponse(client.comicCollection.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetComicSeriesKey(args: InferRequestType<typeof client.comicSeries.$get>) {
  return ['comicSeries', '/comicSeries', args] as const
}

export function useGetComicSeries<TError = unknown>(
  args: InferRequestType<typeof client.comicSeries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicSeries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComicSeries<TError = unknown>(
  args: InferRequestType<typeof client.comicSeries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicSeries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComicSeriesSearchKey(
  args: InferRequestType<typeof client.comicSeries.search.$get>,
) {
  return ['comicSeries', '/comicSeries/search', args] as const
}

export function useGetComicSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.comicSeries.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicSeriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicSeries.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComicSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.comicSeries.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicSeriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicSeries.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostComicSeriesSearchKey() {
  return ['comicSeries', '/comicSeries/search', 'POST'] as const
}

export function usePostComicSeriesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicSeries.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.comicSeries.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostComicSeriesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.comicSeries.search.$post> }) =>
        parseResponse(client.comicSeries.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetComicStripKey(args: InferRequestType<typeof client.comicStrip.$get>) {
  return ['comicStrip', '/comicStrip', args] as const
}

export function useGetComicStrip<TError = unknown>(
  args: InferRequestType<typeof client.comicStrip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicStripKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicStrip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComicStrip<TError = unknown>(
  args: InferRequestType<typeof client.comicStrip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComicStripKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicStrip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComicStripSearchKey(
  args: InferRequestType<typeof client.comicStrip.search.$get>,
) {
  return ['comicStrip', '/comicStrip/search', args] as const
}

export function useGetComicStripSearch<TError = unknown>(
  args: InferRequestType<typeof client.comicStrip.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicStripSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicStrip.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComicStripSearch<TError = unknown>(
  args: InferRequestType<typeof client.comicStrip.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComicStripSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comicStrip.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostComicStripSearchKey() {
  return ['comicStrip', '/comicStrip/search', 'POST'] as const
}

export function usePostComicStripSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comicStrip.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.comicStrip.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostComicStripSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.comicStrip.search.$post> }) =>
        parseResponse(client.comicStrip.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCompanyKey(args: InferRequestType<typeof client.company.$get>) {
  return ['company', '/company', args] as const
}

export function useGetCompany<TError = unknown>(
  args: InferRequestType<typeof client.company.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompanyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.company.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCompany<TError = unknown>(
  args: InferRequestType<typeof client.company.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompanyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.company.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCompanySearchKey(args: InferRequestType<typeof client.company.search.$get>) {
  return ['company', '/company/search', args] as const
}

export function useGetCompanySearch<TError = unknown>(
  args: InferRequestType<typeof client.company.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompanySearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompanySearch<TError = unknown>(
  args: InferRequestType<typeof client.company.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCompanySearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.company.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCompanySearchKey() {
  return ['company', '/company/search', 'POST'] as const
}

export function usePostCompanySearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.company.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.company.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompanySearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.company.search.$post> }) =>
        parseResponse(client.company.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConflictKey(args: InferRequestType<typeof client.conflict.$get>) {
  return ['conflict', '/conflict', args] as const
}

export function useGetConflict<TError = unknown>(
  args: InferRequestType<typeof client.conflict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConflictKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.conflict.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConflict<TError = unknown>(
  args: InferRequestType<typeof client.conflict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConflictKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.conflict.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetConflictSearchKey(
  args: InferRequestType<typeof client.conflict.search.$get>,
) {
  return ['conflict', '/conflict/search', args] as const
}

export function useGetConflictSearch<TError = unknown>(
  args: InferRequestType<typeof client.conflict.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConflictSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conflict.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConflictSearch<TError = unknown>(
  args: InferRequestType<typeof client.conflict.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConflictSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conflict.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConflictSearchKey() {
  return ['conflict', '/conflict/search', 'POST'] as const
}

export function usePostConflictSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.conflict.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.conflict.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConflictSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.conflict.search.$post> }) =>
        parseResponse(client.conflict.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetElementKey(args: InferRequestType<typeof client.element.$get>) {
  return ['element', '/element', args] as const
}

export function useGetElement<TError = unknown>(
  args: InferRequestType<typeof client.element.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElementKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.element.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetElement<TError = unknown>(
  args: InferRequestType<typeof client.element.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElementKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.element.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetElementSearchKey(args: InferRequestType<typeof client.element.search.$get>) {
  return ['element', '/element/search', args] as const
}

export function useGetElementSearch<TError = unknown>(
  args: InferRequestType<typeof client.element.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElementSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.element.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetElementSearch<TError = unknown>(
  args: InferRequestType<typeof client.element.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetElementSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.element.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostElementSearchKey() {
  return ['element', '/element/search', 'POST'] as const
}

export function usePostElementSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.element.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.element.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostElementSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.element.search.$post> }) =>
        parseResponse(client.element.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEpisodeKey(args: InferRequestType<typeof client.episode.$get>) {
  return ['episode', '/episode', args] as const
}

export function useGetEpisode<TError = unknown>(
  args: InferRequestType<typeof client.episode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.episode.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEpisode<TError = unknown>(
  args: InferRequestType<typeof client.episode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.episode.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEpisodeSearchKey(args: InferRequestType<typeof client.episode.search.$get>) {
  return ['episode', '/episode/search', args] as const
}

export function useGetEpisodeSearch<TError = unknown>(
  args: InferRequestType<typeof client.episode.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodeSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episode.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEpisodeSearch<TError = unknown>(
  args: InferRequestType<typeof client.episode.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEpisodeSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.episode.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEpisodeSearchKey() {
  return ['episode', '/episode/search', 'POST'] as const
}

export function usePostEpisodeSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.episode.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.episode.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEpisodeSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.episode.search.$post> }) =>
        parseResponse(client.episode.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoodKey(args: InferRequestType<typeof client.food.$get>) {
  return ['food', '/food', args] as const
}

export function useGetFood<TError = unknown>(
  args: InferRequestType<typeof client.food.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.food.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFood<TError = unknown>(
  args: InferRequestType<typeof client.food.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.food.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetFoodSearchKey(args: InferRequestType<typeof client.food.search.$get>) {
  return ['food', '/food/search', args] as const
}

export function useGetFoodSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoodSearchKey() {
  return ['food', '/food/search', 'POST'] as const
}

export function usePostFoodSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.food.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoodSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.food.search.$post> }) =>
        parseResponse(client.food.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLiteratureKey(args: InferRequestType<typeof client.literature.$get>) {
  return ['literature', '/literature', args] as const
}

export function useGetLiterature<TError = unknown>(
  args: InferRequestType<typeof client.literature.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiteratureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.literature.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiterature<TError = unknown>(
  args: InferRequestType<typeof client.literature.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiteratureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.literature.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLiteratureSearchKey(
  args: InferRequestType<typeof client.literature.search.$get>,
) {
  return ['literature', '/literature/search', args] as const
}

export function useGetLiteratureSearch<TError = unknown>(
  args: InferRequestType<typeof client.literature.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiteratureSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.literature.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiteratureSearch<TError = unknown>(
  args: InferRequestType<typeof client.literature.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLiteratureSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.literature.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiteratureSearchKey() {
  return ['literature', '/literature/search', 'POST'] as const
}

export function usePostLiteratureSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.literature.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.literature.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiteratureSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.literature.search.$post> }) =>
        parseResponse(client.literature.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLocationKey(args: InferRequestType<typeof client.location.$get>) {
  return ['location', '/location', args] as const
}

export function useGetLocation<TError = unknown>(
  args: InferRequestType<typeof client.location.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.location.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLocation<TError = unknown>(
  args: InferRequestType<typeof client.location.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.location.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLocationSearchKey(
  args: InferRequestType<typeof client.location.search.$get>,
) {
  return ['location', '/location/search', args] as const
}

export function useGetLocationSearch<TError = unknown>(
  args: InferRequestType<typeof client.location.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.location.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationSearch<TError = unknown>(
  args: InferRequestType<typeof client.location.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.location.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLocationSearchKey() {
  return ['location', '/location/search', 'POST'] as const
}

export function usePostLocationSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.location.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.location.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocationSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.location.search.$post> }) =>
        parseResponse(client.location.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMagazineKey(args: InferRequestType<typeof client.magazine.$get>) {
  return ['magazine', '/magazine', args] as const
}

export function useGetMagazine<TError = unknown>(
  args: InferRequestType<typeof client.magazine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagazineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.magazine.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMagazine<TError = unknown>(
  args: InferRequestType<typeof client.magazine.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagazineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.magazine.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMagazineSearchKey(
  args: InferRequestType<typeof client.magazine.search.$get>,
) {
  return ['magazine', '/magazine/search', args] as const
}

export function useGetMagazineSearch<TError = unknown>(
  args: InferRequestType<typeof client.magazine.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagazineSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magazine.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMagazineSearch<TError = unknown>(
  args: InferRequestType<typeof client.magazine.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagazineSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magazine.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMagazineSearchKey() {
  return ['magazine', '/magazine/search', 'POST'] as const
}

export function usePostMagazineSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazine.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.magazine.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMagazineSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.magazine.search.$post> }) =>
        parseResponse(client.magazine.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMagazineSeriesKey(args: InferRequestType<typeof client.magazineSeries.$get>) {
  return ['magazineSeries', '/magazineSeries', args] as const
}

export function useGetMagazineSeries<TError = unknown>(
  args: InferRequestType<typeof client.magazineSeries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagazineSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magazineSeries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMagazineSeries<TError = unknown>(
  args: InferRequestType<typeof client.magazineSeries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagazineSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magazineSeries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMagazineSeriesSearchKey(
  args: InferRequestType<typeof client.magazineSeries.search.$get>,
) {
  return ['magazineSeries', '/magazineSeries/search', args] as const
}

export function useGetMagazineSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.magazineSeries.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMagazineSeriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magazineSeries.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMagazineSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.magazineSeries.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMagazineSeriesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magazineSeries.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMagazineSeriesSearchKey() {
  return ['magazineSeries', '/magazineSeries/search', 'POST'] as const
}

export function usePostMagazineSeriesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.magazineSeries.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.magazineSeries.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMagazineSeriesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.magazineSeries.search.$post> },
      ) => parseResponse(client.magazineSeries.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMaterialKey(args: InferRequestType<typeof client.material.$get>) {
  return ['material', '/material', args] as const
}

export function useGetMaterial<TError = unknown>(
  args: InferRequestType<typeof client.material.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaterialKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.material.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMaterial<TError = unknown>(
  args: InferRequestType<typeof client.material.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaterialKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.material.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMaterialSearchKey(
  args: InferRequestType<typeof client.material.search.$get>,
) {
  return ['material', '/material/search', args] as const
}

export function useGetMaterialSearch<TError = unknown>(
  args: InferRequestType<typeof client.material.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaterialSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.material.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMaterialSearch<TError = unknown>(
  args: InferRequestType<typeof client.material.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMaterialSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.material.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMaterialSearchKey() {
  return ['material', '/material/search', 'POST'] as const
}

export function usePostMaterialSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.material.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.material.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMaterialSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.material.search.$post> }) =>
        parseResponse(client.material.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMedicalConditionKey(
  args: InferRequestType<typeof client.medicalCondition.$get>,
) {
  return ['medicalCondition', '/medicalCondition', args] as const
}

export function useGetMedicalCondition<TError = unknown>(
  args: InferRequestType<typeof client.medicalCondition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMedicalConditionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.medicalCondition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMedicalCondition<TError = unknown>(
  args: InferRequestType<typeof client.medicalCondition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMedicalConditionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.medicalCondition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMedicalConditionSearchKey(
  args: InferRequestType<typeof client.medicalCondition.search.$get>,
) {
  return ['medicalCondition', '/medicalCondition/search', args] as const
}

export function useGetMedicalConditionSearch<TError = unknown>(
  args: InferRequestType<typeof client.medicalCondition.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMedicalConditionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.medicalCondition.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMedicalConditionSearch<TError = unknown>(
  args: InferRequestType<typeof client.medicalCondition.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMedicalConditionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.medicalCondition.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMedicalConditionSearchKey() {
  return ['medicalCondition', '/medicalCondition/search', 'POST'] as const
}

export function usePostMedicalConditionSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.medicalCondition.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.medicalCondition.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMedicalConditionSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.medicalCondition.search.$post> },
      ) => parseResponse(client.medicalCondition.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMovieKey(args: InferRequestType<typeof client.movie.$get>) {
  return ['movie', '/movie', args] as const
}

export function useGetMovie<TError = unknown>(
  args: InferRequestType<typeof client.movie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.movie.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMovie<TError = unknown>(
  args: InferRequestType<typeof client.movie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.movie.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetMovieSearchKey(args: InferRequestType<typeof client.movie.search.$get>) {
  return ['movie', '/movie/search', args] as const
}

export function useGetMovieSearch<TError = unknown>(
  args: InferRequestType<typeof client.movie.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMovieSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMovieSearch<TError = unknown>(
  args: InferRequestType<typeof client.movie.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMovieSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMovieSearchKey() {
  return ['movie', '/movie/search', 'POST'] as const
}

export function usePostMovieSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movie.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.movie.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMovieSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.movie.search.$post> }) =>
        parseResponse(client.movie.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOccupationKey(args: InferRequestType<typeof client.occupation.$get>) {
  return ['occupation', '/occupation', args] as const
}

export function useGetOccupation<TError = unknown>(
  args: InferRequestType<typeof client.occupation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOccupationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.occupation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupation<TError = unknown>(
  args: InferRequestType<typeof client.occupation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOccupationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.occupation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOccupationSearchKey(
  args: InferRequestType<typeof client.occupation.search.$get>,
) {
  return ['occupation', '/occupation/search', args] as const
}

export function useGetOccupationSearch<TError = unknown>(
  args: InferRequestType<typeof client.occupation.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupationSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.occupation.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOccupationSearch<TError = unknown>(
  args: InferRequestType<typeof client.occupation.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOccupationSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.occupation.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOccupationSearchKey() {
  return ['occupation', '/occupation/search', 'POST'] as const
}

export function usePostOccupationSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.occupation.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.occupation.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOccupationSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.occupation.search.$post> }) =>
        parseResponse(client.occupation.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationKey(args: InferRequestType<typeof client.organization.$get>) {
  return ['organization', '/organization', args] as const
}

export function useGetOrganization<TError = unknown>(
  args: InferRequestType<typeof client.organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganization<TError = unknown>(
  args: InferRequestType<typeof client.organization.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationSearchKey(
  args: InferRequestType<typeof client.organization.search.$get>,
) {
  return ['organization', '/organization/search', args] as const
}

export function useGetOrganizationSearch<TError = unknown>(
  args: InferRequestType<typeof client.organization.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationSearch<TError = unknown>(
  args: InferRequestType<typeof client.organization.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organization.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationSearchKey() {
  return ['organization', '/organization/search', 'POST'] as const
}

export function usePostOrganizationSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organization.search.$post> }) =>
        parseResponse(client.organization.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPerformerKey(args: InferRequestType<typeof client.performer.$get>) {
  return ['performer', '/performer', args] as const
}

export function useGetPerformer<TError = unknown>(
  args: InferRequestType<typeof client.performer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPerformerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.performer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPerformer<TError = unknown>(
  args: InferRequestType<typeof client.performer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPerformerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.performer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPerformerSearchKey(
  args: InferRequestType<typeof client.performer.search.$get>,
) {
  return ['performer', '/performer/search', args] as const
}

export function useGetPerformerSearch<TError = unknown>(
  args: InferRequestType<typeof client.performer.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPerformerSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.performer.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPerformerSearch<TError = unknown>(
  args: InferRequestType<typeof client.performer.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPerformerSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.performer.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPerformerSearchKey() {
  return ['performer', '/performer/search', 'POST'] as const
}

export function usePostPerformerSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.performer.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.performer.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPerformerSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.performer.search.$post> }) =>
        parseResponse(client.performer.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeasonKey(args: InferRequestType<typeof client.season.$get>) {
  return ['season', '/season', args] as const
}

export function useGetSeason<TError = unknown>(
  args: InferRequestType<typeof client.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeasonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.season.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSeason<TError = unknown>(
  args: InferRequestType<typeof client.season.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeasonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.season.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSeasonSearchKey(args: InferRequestType<typeof client.season.search.$get>) {
  return ['season', '/season/search', args] as const
}

export function useGetSeasonSearch<TError = unknown>(
  args: InferRequestType<typeof client.season.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeasonSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.season.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeasonSearch<TError = unknown>(
  args: InferRequestType<typeof client.season.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeasonSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.season.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSeasonSearchKey() {
  return ['season', '/season/search', 'POST'] as const
}

export function usePostSeasonSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.season.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.season.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeasonSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.season.search.$post> }) =>
        parseResponse(client.season.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSeriesKey(args: InferRequestType<typeof client.series.$get>) {
  return ['series', '/series', args] as const
}

export function useGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSeries<TError = unknown>(
  args: InferRequestType<typeof client.series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.series.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSeriesSearchKey(args: InferRequestType<typeof client.series.search.$get>) {
  return ['series', '/series/search', args] as const
}

export function useGetSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.series.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeriesSearch<TError = unknown>(
  args: InferRequestType<typeof client.series.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeriesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.series.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSeriesSearchKey() {
  return ['series', '/series/search', 'POST'] as const
}

export function usePostSeriesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.series.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.series.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSeriesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.series.search.$post> }) =>
        parseResponse(client.series.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSoundtrackKey(args: InferRequestType<typeof client.soundtrack.$get>) {
  return ['soundtrack', '/soundtrack', args] as const
}

export function useGetSoundtrack<TError = unknown>(
  args: InferRequestType<typeof client.soundtrack.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSoundtrackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.soundtrack.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSoundtrack<TError = unknown>(
  args: InferRequestType<typeof client.soundtrack.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSoundtrackKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.soundtrack.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSoundtrackSearchKey(
  args: InferRequestType<typeof client.soundtrack.search.$get>,
) {
  return ['soundtrack', '/soundtrack/search', args] as const
}

export function useGetSoundtrackSearch<TError = unknown>(
  args: InferRequestType<typeof client.soundtrack.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSoundtrackSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.soundtrack.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSoundtrackSearch<TError = unknown>(
  args: InferRequestType<typeof client.soundtrack.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSoundtrackSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.soundtrack.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSoundtrackSearchKey() {
  return ['soundtrack', '/soundtrack/search', 'POST'] as const
}

export function usePostSoundtrackSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.soundtrack.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.soundtrack.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSoundtrackSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.soundtrack.search.$post> }) =>
        parseResponse(client.soundtrack.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacecraftKey(args: InferRequestType<typeof client.spacecraft.$get>) {
  return ['spacecraft', '/spacecraft', args] as const
}

export function useGetSpacecraft<TError = unknown>(
  args: InferRequestType<typeof client.spacecraft.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacecraftKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacecraft<TError = unknown>(
  args: InferRequestType<typeof client.spacecraft.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpacecraftKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacecraftSearchKey(
  args: InferRequestType<typeof client.spacecraft.search.$get>,
) {
  return ['spacecraft', '/spacecraft/search', args] as const
}

export function useGetSpacecraftSearch<TError = unknown>(
  args: InferRequestType<typeof client.spacecraft.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacecraftSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraft.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacecraftSearch<TError = unknown>(
  args: InferRequestType<typeof client.spacecraft.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacecraftSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraft.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacecraftSearchKey() {
  return ['spacecraft', '/spacecraft/search', 'POST'] as const
}

export function usePostSpacecraftSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraft.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.spacecraft.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacecraftSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.spacecraft.search.$post> }) =>
        parseResponse(client.spacecraft.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpacecraftClassKey(
  args: InferRequestType<typeof client.spacecraftClass.$get>,
) {
  return ['spacecraftClass', '/spacecraftClass', args] as const
}

export function useGetSpacecraftClass<TError = unknown>(
  args: InferRequestType<typeof client.spacecraftClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacecraftClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraftClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacecraftClass<TError = unknown>(
  args: InferRequestType<typeof client.spacecraftClass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacecraftClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraftClass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSpacecraftClassSearchKey(
  args: InferRequestType<typeof client.spacecraftClass.search.$get>,
) {
  return ['spacecraftClass', '/spacecraftClass/search', args] as const
}

export function useGetSpacecraftClassSearch<TError = unknown>(
  args: InferRequestType<typeof client.spacecraftClass.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacecraftClassSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraftClass.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacecraftClassSearch<TError = unknown>(
  args: InferRequestType<typeof client.spacecraftClass.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacecraftClassSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.spacecraftClass.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpacecraftClassSearchKey() {
  return ['spacecraftClass', '/spacecraftClass/search', 'POST'] as const
}

export function usePostSpacecraftClassSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.spacecraftClass.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.spacecraftClass.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpacecraftClassSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.spacecraftClass.search.$post> },
      ) => parseResponse(client.spacecraftClass.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpeciesKey(args: InferRequestType<typeof client.species.$get>) {
  return ['species', '/species', args] as const
}

export function useGetSpecies<TError = unknown>(
  args: InferRequestType<typeof client.species.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.species.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSpecies<TError = unknown>(
  args: InferRequestType<typeof client.species.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.species.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSpeciesSearchKey(args: InferRequestType<typeof client.species.search.$get>) {
  return ['species', '/species/search', args] as const
}

export function useGetSpeciesSearch<TError = unknown>(
  args: InferRequestType<typeof client.species.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeciesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.species.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpeciesSearch<TError = unknown>(
  args: InferRequestType<typeof client.species.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeciesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.species.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSpeciesSearchKey() {
  return ['species', '/species/search', 'POST'] as const
}

export function usePostSpeciesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.species.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.species.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpeciesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.species.search.$post> }) =>
        parseResponse(client.species.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStaffKey(args: InferRequestType<typeof client.staff.$get>) {
  return ['staff', '/staff', args] as const
}

export function useGetStaff<TError = unknown>(
  args: InferRequestType<typeof client.staff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStaffKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.staff.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStaff<TError = unknown>(
  args: InferRequestType<typeof client.staff.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStaffKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.staff.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetStaffSearchKey(args: InferRequestType<typeof client.staff.search.$get>) {
  return ['staff', '/staff/search', args] as const
}

export function useGetStaffSearch<TError = unknown>(
  args: InferRequestType<typeof client.staff.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStaffSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.staff.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStaffSearch<TError = unknown>(
  args: InferRequestType<typeof client.staff.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStaffSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.staff.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStaffSearchKey() {
  return ['staff', '/staff/search', 'POST'] as const
}

export function usePostStaffSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.staff.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.staff.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStaffSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.staff.search.$post> }) =>
        parseResponse(client.staff.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTechnologyKey(args: InferRequestType<typeof client.technology.$get>) {
  return ['technology', '/technology', args] as const
}

export function useGetTechnology<TError = unknown>(
  args: InferRequestType<typeof client.technology.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTechnologyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.technology.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechnology<TError = unknown>(
  args: InferRequestType<typeof client.technology.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTechnologyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.technology.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTechnologySearchKey(
  args: InferRequestType<typeof client.technology.search.$get>,
) {
  return ['technology', '/technology/search', args] as const
}

export function useGetTechnologySearch<TError = unknown>(
  args: InferRequestType<typeof client.technology.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechnologySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.technology.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechnologySearch<TError = unknown>(
  args: InferRequestType<typeof client.technology.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechnologySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.technology.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTechnologySearchKey() {
  return ['technology', '/technology/search', 'POST'] as const
}

export function usePostTechnologySearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.technology.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.technology.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTechnologySearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.technology.search.$post> }) =>
        parseResponse(client.technology.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTitleKey(args: InferRequestType<typeof client.title.$get>) {
  return ['title', '/title', args] as const
}

export function useGetTitle<TError = unknown>(
  args: InferRequestType<typeof client.title.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTitleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.title.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTitle<TError = unknown>(
  args: InferRequestType<typeof client.title.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTitleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.title.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTitleSearchKey(args: InferRequestType<typeof client.title.search.$get>) {
  return ['title', '/title/search', args] as const
}

export function useGetTitleSearch<TError = unknown>(
  args: InferRequestType<typeof client.title.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTitleSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.title.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTitleSearch<TError = unknown>(
  args: InferRequestType<typeof client.title.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTitleSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.title.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTitleSearchKey() {
  return ['title', '/title/search', 'POST'] as const
}

export function usePostTitleSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.title.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.title.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTitleSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.title.search.$post> }) =>
        parseResponse(client.title.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTradingCardKey(args: InferRequestType<typeof client.tradingCard.$get>) {
  return ['tradingCard', '/tradingCard', args] as const
}

export function useGetTradingCard<TError = unknown>(
  args: InferRequestType<typeof client.tradingCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTradingCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTradingCard<TError = unknown>(
  args: InferRequestType<typeof client.tradingCard.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTradingCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTradingCardSearchKey(
  args: InferRequestType<typeof client.tradingCard.search.$get>,
) {
  return ['tradingCard', '/tradingCard/search', args] as const
}

export function useGetTradingCardSearch<TError = unknown>(
  args: InferRequestType<typeof client.tradingCard.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCard.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTradingCardSearch<TError = unknown>(
  args: InferRequestType<typeof client.tradingCard.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCard.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTradingCardSearchKey() {
  return ['tradingCard', '/tradingCard/search', 'POST'] as const
}

export function usePostTradingCardSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCard.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tradingCard.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTradingCardSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tradingCard.search.$post> }) =>
        parseResponse(client.tradingCard.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTradingCardDeckKey(
  args: InferRequestType<typeof client.tradingCardDeck.$get>,
) {
  return ['tradingCardDeck', '/tradingCardDeck', args] as const
}

export function useGetTradingCardDeck<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardDeck.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardDeckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardDeck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTradingCardDeck<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardDeck.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardDeckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardDeck.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTradingCardDeckSearchKey(
  args: InferRequestType<typeof client.tradingCardDeck.search.$get>,
) {
  return ['tradingCardDeck', '/tradingCardDeck/search', args] as const
}

export function useGetTradingCardDeckSearch<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardDeck.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardDeckSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardDeck.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTradingCardDeckSearch<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardDeck.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardDeckSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardDeck.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTradingCardDeckSearchKey() {
  return ['tradingCardDeck', '/tradingCardDeck/search', 'POST'] as const
}

export function usePostTradingCardDeckSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardDeck.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tradingCardDeck.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTradingCardDeckSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tradingCardDeck.search.$post> },
      ) => parseResponse(client.tradingCardDeck.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTradingCardSetKey(args: InferRequestType<typeof client.tradingCardSet.$get>) {
  return ['tradingCardSet', '/tradingCardSet', args] as const
}

export function useGetTradingCardSet<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardSet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTradingCardSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardSet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTradingCardSet<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardSet.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTradingCardSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardSet.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTradingCardSetSearchKey(
  args: InferRequestType<typeof client.tradingCardSet.search.$get>,
) {
  return ['tradingCardSet', '/tradingCardSet/search', args] as const
}

export function useGetTradingCardSetSearch<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardSet.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardSetSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardSet.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTradingCardSetSearch<TError = unknown>(
  args: InferRequestType<typeof client.tradingCardSet.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTradingCardSetSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tradingCardSet.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTradingCardSetSearchKey() {
  return ['tradingCardSet', '/tradingCardSet/search', 'POST'] as const
}

export function usePostTradingCardSetSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tradingCardSet.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tradingCardSet.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTradingCardSetSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tradingCardSet.search.$post> },
      ) => parseResponse(client.tradingCardSet.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideoGameKey(args: InferRequestType<typeof client.videoGame.$get>) {
  return ['videoGame', '/videoGame', args] as const
}

export function useGetVideoGame<TError = unknown>(
  args: InferRequestType<typeof client.videoGame.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideoGameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoGame.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideoGame<TError = unknown>(
  args: InferRequestType<typeof client.videoGame.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideoGameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoGame.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideoGameSearchKey(
  args: InferRequestType<typeof client.videoGame.search.$get>,
) {
  return ['videoGame', '/videoGame/search', args] as const
}

export function useGetVideoGameSearch<TError = unknown>(
  args: InferRequestType<typeof client.videoGame.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideoGameSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoGame.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideoGameSearch<TError = unknown>(
  args: InferRequestType<typeof client.videoGame.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideoGameSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoGame.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideoGameSearchKey() {
  return ['videoGame', '/videoGame/search', 'POST'] as const
}

export function usePostVideoGameSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoGame.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.videoGame.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideoGameSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videoGame.search.$post> }) =>
        parseResponse(client.videoGame.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVideoReleaseKey(args: InferRequestType<typeof client.videoRelease.$get>) {
  return ['videoRelease', '/videoRelease', args] as const
}

export function useGetVideoRelease<TError = unknown>(
  args: InferRequestType<typeof client.videoRelease.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideoReleaseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoRelease.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideoRelease<TError = unknown>(
  args: InferRequestType<typeof client.videoRelease.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVideoReleaseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoRelease.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVideoReleaseSearchKey(
  args: InferRequestType<typeof client.videoRelease.search.$get>,
) {
  return ['videoRelease', '/videoRelease/search', args] as const
}

export function useGetVideoReleaseSearch<TError = unknown>(
  args: InferRequestType<typeof client.videoRelease.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideoReleaseSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoRelease.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVideoReleaseSearch<TError = unknown>(
  args: InferRequestType<typeof client.videoRelease.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVideoReleaseSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.videoRelease.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVideoReleaseSearchKey() {
  return ['videoRelease', '/videoRelease/search', 'POST'] as const
}

export function usePostVideoReleaseSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.videoRelease.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.videoRelease.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVideoReleaseSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.videoRelease.search.$post> }) =>
        parseResponse(client.videoRelease.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWeaponKey(args: InferRequestType<typeof client.weapon.$get>) {
  return ['weapon', '/weapon', args] as const
}

export function useGetWeapon<TError = unknown>(
  args: InferRequestType<typeof client.weapon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWeaponKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.weapon.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWeapon<TError = unknown>(
  args: InferRequestType<typeof client.weapon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWeaponKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.weapon.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetWeaponSearchKey(args: InferRequestType<typeof client.weapon.search.$get>) {
  return ['weapon', '/weapon/search', args] as const
}

export function useGetWeaponSearch<TError = unknown>(
  args: InferRequestType<typeof client.weapon.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWeaponSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.weapon.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWeaponSearch<TError = unknown>(
  args: InferRequestType<typeof client.weapon.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWeaponSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.weapon.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWeaponSearchKey() {
  return ['weapon', '/weapon/search', 'POST'] as const
}

export function usePostWeaponSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.weapon.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.weapon.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWeaponSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.weapon.search.$post> }) =>
        parseResponse(client.weapon.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
