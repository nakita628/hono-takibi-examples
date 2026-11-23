import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCalendarsKey() {
  return ['calendars'] as const
}

export function getCertificationsKey() {
  return ['certifications'] as const
}

export function getCheckinKey() {
  return ['checkin'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getCountriesKey() {
  return ['countries'] as const
}

export function getGenresKey() {
  return ['genres'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getMoviesKey() {
  return ['movies'] as const
}

export function getNetworksKey() {
  return ['networks'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPeopleKey() {
  return ['people'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getScrobbleKey() {
  return ['scrobble'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getShowsKey() {
  return ['shows'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetCalendarsAllDvdStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/dvd/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsAllDvdStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsAllDvdStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.all.dvd[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsAllDvdStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsAllDvdStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.all.dvd[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsAllMoviesStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/movies/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsAllMoviesStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
            >
          >
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
        ? getGetCalendarsAllMoviesStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.all.movies[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsAllMoviesStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
            >
          >
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
        ? getGetCalendarsAllMoviesStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.all.movies[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsAllShowsNewStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/shows/new/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsAllShowsNewStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
            >
          >
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
        ? getGetCalendarsAllShowsNewStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.all.shows.new[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsAllShowsNewStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
            >
          >
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
        ? getGetCalendarsAllShowsNewStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.all.shows.new[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsAllShowsPremieresStartDateDaysKey(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/shows/premieres/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsAllShowsPremieresStartDateDays<TError = unknown>(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
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
        ? getGetCalendarsAllShowsPremieresStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.all.shows.premieres[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsAllShowsPremieresStartDateDays<TError = unknown>(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
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
        ? getGetCalendarsAllShowsPremieresStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.all.shows.premieres[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsAllShowsStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/shows/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsAllShowsStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsAllShowsStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.all.shows[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsAllShowsStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsAllShowsStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.all.shows[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsMyDvdStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/dvd/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsMyDvdStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsMyDvdStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.my.dvd[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsMyDvdStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsMyDvdStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.my.dvd[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsMyMoviesStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/movies/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsMyMoviesStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsMyMoviesStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.my.movies[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsMyMoviesStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsMyMoviesStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.my.movies[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsMyShowsNewStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/shows/new/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsMyShowsNewStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
            >
          >
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
        ? getGetCalendarsMyShowsNewStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.my.shows.new[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsMyShowsNewStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
            >
          >
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
        ? getGetCalendarsMyShowsNewStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.my.shows.new[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsMyShowsPremieresStartDateDaysKey(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/shows/premieres/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsMyShowsPremieresStartDateDays<TError = unknown>(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
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
        ? getGetCalendarsMyShowsPremieresStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.my.shows.premieres[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsMyShowsPremieresStartDateDays<TError = unknown>(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
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
        ? getGetCalendarsMyShowsPremieresStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.calendars.my.shows.premieres[':start_date'][':days'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCalendarsMyShowsStartDateDaysKey(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/shows/:start_date/:days', keyArgs] as const
}

export function useGetCalendarsMyShowsStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsMyShowsStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.my.shows[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCalendarsMyShowsStartDateDays<TError = unknown>(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
          >
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
        ? getGetCalendarsMyShowsStartDateDaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.calendars.my.shows[':start_date'][':days'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCertificationsTypeKey(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certifications', '/certifications/:type', keyArgs] as const
}

export function useGetCertificationsType<TError = unknown>(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
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
        ? getGetCertificationsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certifications[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCertificationsType<TError = unknown>(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
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
        ? getGetCertificationsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.certifications[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCheckinKey() {
  return ['checkin', '/checkin', 'POST'] as const
}

export function usePostCheckin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.checkin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checkin.$post> }) =>
        parseResponse(client.checkin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCheckinKey() {
  return ['checkin', '/checkin', 'DELETE'] as const
}

export function useDeleteCheckin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$delete>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.checkin.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCheckinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checkin.$delete> }) =>
        parseResponse(client.checkin.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsKey() {
  return ['comments', '/comments', 'POST'] as const
}

export function usePostComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.comments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.comments.$post> }) =>
        parseResponse(client.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsRecentCommentTypeTypeKey(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/recent/:comment_type/:type', keyArgs] as const
}

export function useGetCommentsRecentCommentTypeType<TError = unknown>(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
          >
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
        ? getGetCommentsRecentCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comments.recent[':comment_type'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsRecentCommentTypeType<TError = unknown>(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
          >
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
        ? getGetCommentsRecentCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comments.recent[':comment_type'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommentsTrendingCommentTypeTypeKey(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/trending/:comment_type/:type', keyArgs] as const
}

export function useGetCommentsTrendingCommentTypeType<TError = unknown>(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
          >
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
        ? getGetCommentsTrendingCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comments.trending[':comment_type'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsTrendingCommentTypeType<TError = unknown>(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
          >
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
        ? getGetCommentsTrendingCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comments.trending[':comment_type'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommentsUpdatesCommentTypeTypeKey(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/updates/:comment_type/:type', keyArgs] as const
}

export function useGetCommentsUpdatesCommentTypeType<TError = unknown>(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
          >
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
        ? getGetCommentsUpdatesCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comments.updates[':comment_type'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsUpdatesCommentTypeType<TError = unknown>(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
          >
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
        ? getGetCommentsUpdatesCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.comments.updates[':comment_type'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommentsIdKey(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id', keyArgs] as const
}

export function useGetCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCommentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsId<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCommentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCommentsIdKey() {
  return ['comments', '/comments/:id', 'PUT'] as const
}

export function usePutCommentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['$put']> }) =>
        parseResponse(client.comments[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCommentsIdKey() {
  return ['comments', '/comments/:id', 'DELETE'] as const
}

export function useDeleteCommentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCommentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['$delete']> },
      ) => parseResponse(client.comments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsIdItemKey(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id/item', keyArgs] as const
}

export function useGetCommentsIdItem<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCommentsIdItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsIdItem<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCommentsIdItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCommentsIdLikeKey() {
  return ['comments', '/comments/:id/like', 'POST'] as const
}

export function usePostCommentsIdLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['like']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['like']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsIdLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['like']['$post']> },
      ) => parseResponse(client.comments[':id'].like.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCommentsIdLikeKey() {
  return ['comments', '/comments/:id/like', 'DELETE'] as const
}

export function useDeleteCommentsIdLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['like']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['like']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCommentsIdLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['like']['$delete']> },
      ) => parseResponse(client.comments[':id'].like.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommentsIdLikesKey(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id/likes', keyArgs] as const
}

export function useGetCommentsIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>
          >
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
        ? getGetCommentsIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>
          >
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
        ? getGetCommentsIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCommentsIdRepliesKey(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id/replies', keyArgs] as const
}

export function useGetCommentsIdReplies<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
          >
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
        ? getGetCommentsIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].replies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommentsIdReplies<TError = unknown>(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
          >
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
        ? getGetCommentsIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.comments[':id'].replies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCommentsIdRepliesKey() {
  return ['comments', '/comments/:id/replies', 'POST'] as const
}

export function usePostCommentsIdReplies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.comments)[':id']['replies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsIdRepliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.comments)[':id']['replies']['$post']> },
      ) => parseResponse(client.comments[':id'].replies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCountriesTypeKey(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['countries', '/countries/:type', keyArgs] as const
}

export function useGetCountriesType<TError = unknown>(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCountriesTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountriesType<TError = unknown>(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCountriesTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.countries[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenresTypeKey(
  args: InferRequestType<(typeof client.genres)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['genres', '/genres/:type', keyArgs] as const
}

export function useGetGenresType<TError = unknown>(
  args: InferRequestType<(typeof client.genres)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGenresTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genres[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenresType<TError = unknown>(
  args: InferRequestType<(typeof client.genres)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGenresTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genres[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLanguagesTypeKey(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['languages', '/languages/:type', keyArgs] as const
}

export function useGetLanguagesType<TError = unknown>(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLanguagesTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLanguagesType<TError = unknown>(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLanguagesTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsPopularKey(args: InferRequestType<typeof client.lists.popular.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/popular', keyArgs] as const
}

export function useGetListsPopular<TError = unknown>(
  args: InferRequestType<typeof client.lists.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsPopular<TError = unknown>(
  args: InferRequestType<typeof client.lists.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsTrendingKey(args: InferRequestType<typeof client.lists.trending.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/trending', keyArgs] as const
}

export function useGetListsTrending<TError = unknown>(
  args: InferRequestType<typeof client.lists.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsTrending<TError = unknown>(
  args: InferRequestType<typeof client.lists.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdKey(args: InferRequestType<(typeof client.lists)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id', keyArgs] as const
}

export function useGetListsId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdCommentsSortKey(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id/comments/:sort', keyArgs] as const
}

export function useGetListsIdCommentsSort<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
          >
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
        ? getGetListsIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].comments[':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdCommentsSort<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
          >
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
        ? getGetListsIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].comments[':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdItemsTypeKey(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id/items/:type', keyArgs] as const
}

export function useGetListsIdItemsType<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
          >
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
        ? getGetListsIdItemsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].items[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdItemsType<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
          >
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
        ? getGetListsIdItemsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].items[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdLikesKey(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id/likes', keyArgs] as const
}

export function useGetListsIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsIdLikesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsIdLikesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesAnticipatedKey(
  args: InferRequestType<typeof client.movies.anticipated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/anticipated', keyArgs] as const
}

export function useGetMoviesAnticipated<TError = unknown>(
  args: InferRequestType<typeof client.movies.anticipated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
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
        ? getGetMoviesAnticipatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.anticipated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesAnticipated<TError = unknown>(
  args: InferRequestType<typeof client.movies.anticipated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
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
        ? getGetMoviesAnticipatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.anticipated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesBoxofficeKey(
  args: InferRequestType<typeof client.movies.boxoffice.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/boxoffice', keyArgs] as const
}

export function useGetMoviesBoxoffice<TError = unknown>(
  args: InferRequestType<typeof client.movies.boxoffice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
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
        ? getGetMoviesBoxofficeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.boxoffice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesBoxoffice<TError = unknown>(
  args: InferRequestType<typeof client.movies.boxoffice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
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
        ? getGetMoviesBoxofficeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.boxoffice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesCollectedPeriodKey(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/collected/:period', keyArgs] as const
}

export function useGetMoviesCollectedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
          >
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
        ? getGetMoviesCollectedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.collected[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesCollectedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
          >
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
        ? getGetMoviesCollectedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.collected[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesPlayedPeriodKey(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/played/:period', keyArgs] as const
}

export function useGetMoviesPlayedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>
          >
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
        ? getGetMoviesPlayedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.played[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesPlayedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>
          >
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
        ? getGetMoviesPlayedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.played[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesPopularKey(args: InferRequestType<typeof client.movies.popular.$get>) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/popular', keyArgs] as const
}

export function useGetMoviesPopular<TError = unknown>(
  args: InferRequestType<typeof client.movies.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMoviesPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesPopular<TError = unknown>(
  args: InferRequestType<typeof client.movies.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMoviesPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesRecommendedPeriodKey(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/recommended/:period', keyArgs] as const
}

export function useGetMoviesRecommendedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
          >
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
        ? getGetMoviesRecommendedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.recommended[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesRecommendedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
          >
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
        ? getGetMoviesRecommendedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.recommended[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesTrendingKey(
  args: InferRequestType<typeof client.movies.trending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/trending', keyArgs] as const
}

export function useGetMoviesTrending<TError = unknown>(
  args: InferRequestType<typeof client.movies.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMoviesTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesTrending<TError = unknown>(
  args: InferRequestType<typeof client.movies.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMoviesTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesUpdatesIdStartDateKey(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/updates/id/:start_date', keyArgs] as const
}

export function useGetMoviesUpdatesIdStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
          >
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
        ? getGetMoviesUpdatesIdStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.updates.id[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesUpdatesIdStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
          >
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
        ? getGetMoviesUpdatesIdStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.updates.id[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesUpdatesStartDateKey(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/updates/:start_date', keyArgs] as const
}

export function useGetMoviesUpdatesStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
          >
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
        ? getGetMoviesUpdatesStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.updates[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesUpdatesStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
          >
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
        ? getGetMoviesUpdatesStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.updates[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesWatchedPeriodKey(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/watched/:period', keyArgs] as const
}

export function useGetMoviesWatchedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>
          >
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
        ? getGetMoviesWatchedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.watched[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesWatchedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>
          >
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
        ? getGetMoviesWatchedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies.watched[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdKey(args: InferRequestType<(typeof client.movies)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id', keyArgs] as const
}

export function useGetMoviesId<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMoviesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesId<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMoviesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdAliasesKey(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/aliases', keyArgs] as const
}

export function useGetMoviesIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>
          >
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
        ? getGetMoviesIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>
          >
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
        ? getGetMoviesIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdCommentsSortKey(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/comments/:sort', keyArgs] as const
}

export function useGetMoviesIdCommentsSort<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
          >
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
        ? getGetMoviesIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].comments[':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdCommentsSort<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
          >
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
        ? getGetMoviesIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].comments[':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdListsTypeSortKey(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/lists/:type/:sort', keyArgs] as const
}

export function useGetMoviesIdListsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
          >
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
        ? getGetMoviesIdListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.movies[':id'].lists[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdListsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
          >
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
        ? getGetMoviesIdListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.movies[':id'].lists[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdPeopleKey(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/people', keyArgs] as const
}

export function useGetMoviesIdPeople<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMoviesIdPeopleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdPeople<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMoviesIdPeopleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdRatingsKey(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/ratings', keyArgs] as const
}

export function useGetMoviesIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>
          >
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
        ? getGetMoviesIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>
          >
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
        ? getGetMoviesIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdRelatedKey(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/related', keyArgs] as const
}

export function useGetMoviesIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>
          >
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
        ? getGetMoviesIdRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>
          >
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
        ? getGetMoviesIdRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdReleasesCountryKey(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/releases/:country', keyArgs] as const
}

export function useGetMoviesIdReleasesCountry<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
          >
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
        ? getGetMoviesIdReleasesCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.movies[':id'].releases[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdReleasesCountry<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
          >
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
        ? getGetMoviesIdReleasesCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.movies[':id'].releases[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdStatsKey(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/stats', keyArgs] as const
}

export function useGetMoviesIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMoviesIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMoviesIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdStudiosKey(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/studios', keyArgs] as const
}

export function useGetMoviesIdStudios<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>
          >
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
        ? getGetMoviesIdStudiosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].studios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdStudios<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>
          >
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
        ? getGetMoviesIdStudiosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].studios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdTranslationsLanguageKey(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/translations/:language', keyArgs] as const
}

export function useGetMoviesIdTranslationsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
          >
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
        ? getGetMoviesIdTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.movies[':id'].translations[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdTranslationsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
          >
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
        ? getGetMoviesIdTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.movies[':id'].translations[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMoviesIdWatchingKey(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/watching', keyArgs] as const
}

export function useGetMoviesIdWatching<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>
          >
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
        ? getGetMoviesIdWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMoviesIdWatching<TError = unknown>(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>
          >
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
        ? getGetMoviesIdWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movies[':id'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworksKey(args: InferRequestType<typeof client.networks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks', keyArgs] as const
}

export function useGetNetworks<TError = unknown>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.networks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNetworks<TError = unknown>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNetworksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.networks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOauthAuthorizeKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  return ['oauth', '/oauth/authorize', args] as const
}

export function useGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthAuthorize<TError = unknown>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthAuthorizeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.authorize.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthDeviceCodeKey() {
  return ['oauth', '/oauth/device/code', 'POST'] as const
}

export function usePostOauthDeviceCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.code.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.device.code.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthDeviceCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.device.code.$post> }) =>
        parseResponse(client.oauth.device.code.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthDeviceTokenKey() {
  return ['oauth', '/oauth/device/token', 'POST'] as const
}

export function usePostOauthDeviceToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.device.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthDeviceTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.device.token.$post> }) =>
        parseResponse(client.oauth.device.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthRevokeKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function usePostOauthRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.revoke.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.revoke.$post> }) =>
        parseResponse(client.oauth.revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPeopleUpdatesIdStartDateKey(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/updates/id/:start_date', keyArgs] as const
}

export function useGetPeopleUpdatesIdStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
          >
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
        ? getGetPeopleUpdatesIdStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people.updates.id[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeopleUpdatesIdStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
          >
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
        ? getGetPeopleUpdatesIdStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people.updates.id[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPeopleUpdatesStartDateKey(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/updates/:start_date', keyArgs] as const
}

export function useGetPeopleUpdatesStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
          >
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
        ? getGetPeopleUpdatesStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people.updates[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeopleUpdatesStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
          >
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
        ? getGetPeopleUpdatesStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people.updates[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPeopleIdKey(args: InferRequestType<(typeof client.people)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id', keyArgs] as const
}

export function useGetPeopleId<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeopleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeopleId<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPeopleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPeopleIdListsTypeSortKey(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id/lists/:type/:sort', keyArgs] as const
}

export function useGetPeopleIdListsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
          >
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
        ? getGetPeopleIdListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.people[':id'].lists[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeopleIdListsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
          >
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
        ? getGetPeopleIdListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.people[':id'].lists[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPeopleIdMoviesKey(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id/movies', keyArgs] as const
}

export function useGetPeopleIdMovies<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPeopleIdMoviesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people[':id'].movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeopleIdMovies<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPeopleIdMoviesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people[':id'].movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPeopleIdShowsKey(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id/shows', keyArgs] as const
}

export function useGetPeopleIdShows<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPeopleIdShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people[':id'].shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPeopleIdShows<TError = unknown>(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPeopleIdShowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.people[':id'].shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecommendationsMoviesKey(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recommendations', '/recommendations/movies', keyArgs] as const
}

export function useGetRecommendationsMovies<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
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
        ? getGetRecommendationsMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecommendationsMovies<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
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
        ? getGetRecommendationsMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRecommendationsMoviesIdKey() {
  return ['recommendations', '/recommendations/movies/:id', 'DELETE'] as const
}

export function useDeleteRecommendationsMoviesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recommendations.movies)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.recommendations.movies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecommendationsMoviesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.recommendations.movies)[':id']['$delete']> },
      ) => parseResponse(client.recommendations.movies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecommendationsShowsKey(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recommendations', '/recommendations/shows', keyArgs] as const
}

export function useGetRecommendationsShows<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
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
        ? getGetRecommendationsShowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecommendationsShows<TError = unknown>(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
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
        ? getGetRecommendationsShowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recommendations.shows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRecommendationsShowsIdKey() {
  return ['recommendations', '/recommendations/shows/:id', 'DELETE'] as const
}

export function useDeleteRecommendationsShowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recommendations.shows)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.recommendations.shows)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecommendationsShowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.recommendations.shows)[':id']['$delete']> },
      ) => parseResponse(client.recommendations.shows[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScrobblePauseKey() {
  return ['scrobble', '/scrobble/pause', 'POST'] as const
}

export function usePostScrobblePause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.pause.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.scrobble.pause.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrobblePauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scrobble.pause.$post> }) =>
        parseResponse(client.scrobble.pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScrobbleStartKey() {
  return ['scrobble', '/scrobble/start', 'POST'] as const
}

export function usePostScrobbleStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.start.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.scrobble.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrobbleStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scrobble.start.$post> }) =>
        parseResponse(client.scrobble.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScrobbleStopKey() {
  return ['scrobble', '/scrobble/stop', 'POST'] as const
}

export function usePostScrobbleStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.stop.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.scrobble.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScrobbleStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.scrobble.stop.$post> }) =>
        parseResponse(client.scrobble.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchIdTypeIdKey(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/:id_type/:id', keyArgs] as const
}

export function useGetSearchIdTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>
          >
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
    enabled !== false ? (customKey === undefined ? getGetSearchIdTypeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':id_type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchIdTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>
          >
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
    enabled !== false ? (customKey === undefined ? getGetSearchIdTypeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':id_type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchTypeKey(
  args: InferRequestType<(typeof client.search)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/:type', keyArgs] as const
}

export function useGetSearchType<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchType<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSearchTypeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsAnticipatedKey(
  args: InferRequestType<typeof client.shows.anticipated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/anticipated', keyArgs] as const
}

export function useGetShowsAnticipated<TError = unknown>(
  args: InferRequestType<typeof client.shows.anticipated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
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
        ? getGetShowsAnticipatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.anticipated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsAnticipated<TError = unknown>(
  args: InferRequestType<typeof client.shows.anticipated.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
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
        ? getGetShowsAnticipatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.anticipated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsCollectedPeriodKey(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/collected/:period', keyArgs] as const
}

export function useGetShowsCollectedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
          >
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
        ? getGetShowsCollectedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.collected[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsCollectedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
          >
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
        ? getGetShowsCollectedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.collected[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsPlayedPeriodKey(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/played/:period', keyArgs] as const
}

export function useGetShowsPlayedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
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
        ? getGetShowsPlayedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.played[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsPlayedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
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
        ? getGetShowsPlayedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.played[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsPopularKey(args: InferRequestType<typeof client.shows.popular.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/popular', keyArgs] as const
}

export function useGetShowsPopular<TError = unknown>(
  args: InferRequestType<typeof client.shows.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsPopular<TError = unknown>(
  args: InferRequestType<typeof client.shows.popular.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsPopularKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.popular.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsRecommendedPeriodKey(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/recommended/:period', keyArgs] as const
}

export function useGetShowsRecommendedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
          >
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
        ? getGetShowsRecommendedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.recommended[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsRecommendedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
          >
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
        ? getGetShowsRecommendedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.recommended[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsTrendingKey(args: InferRequestType<typeof client.shows.trending.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/trending', keyArgs] as const
}

export function useGetShowsTrending<TError = unknown>(
  args: InferRequestType<typeof client.shows.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsTrending<TError = unknown>(
  args: InferRequestType<typeof client.shows.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsUpdatesIdStartDateKey(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/updates/id/:start_date', keyArgs] as const
}

export function useGetShowsUpdatesIdStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
          >
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
        ? getGetShowsUpdatesIdStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.updates.id[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsUpdatesIdStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
          >
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
        ? getGetShowsUpdatesIdStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.updates.id[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsUpdatesStartDateKey(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/updates/:start_date', keyArgs] as const
}

export function useGetShowsUpdatesStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
          >
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
        ? getGetShowsUpdatesStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.updates[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsUpdatesStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
          >
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
        ? getGetShowsUpdatesStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.updates[':start_date'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsWatchedPeriodKey(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/watched/:period', keyArgs] as const
}

export function useGetShowsWatchedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>
          >
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
        ? getGetShowsWatchedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.watched[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsWatchedPeriod<TError = unknown>(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>
          >
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
        ? getGetShowsWatchedPeriodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows.watched[':period'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdKey(args: InferRequestType<(typeof client.shows)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id', keyArgs] as const
}

export function useGetShowsId<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsId<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShowsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdAliasesKey(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/aliases', keyArgs] as const
}

export function useGetShowsIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdAliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdAliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdCertificationsKey(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/certifications', keyArgs] as const
}

export function useGetShowsIdCertifications<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
          >
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
        ? getGetShowsIdCertificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].certifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdCertifications<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
          >
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
        ? getGetShowsIdCertificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].certifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdCommentsSortKey(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/comments/:sort', keyArgs] as const
}

export function useGetShowsIdCommentsSort<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
          >
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
        ? getGetShowsIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].comments[':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdCommentsSort<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
          >
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
        ? getGetShowsIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].comments[':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdLastEpisodeKey(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/last_episode', keyArgs] as const
}

export function useGetShowsIdLastEpisode<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
          >
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
        ? getGetShowsIdLastEpisodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].last_episode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdLastEpisode<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
          >
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
        ? getGetShowsIdLastEpisodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].last_episode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdListsTypeSortKey(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/lists/:type/:sort', keyArgs] as const
}

export function useGetShowsIdListsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
          >
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
        ? getGetShowsIdListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].lists[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdListsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
          >
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
        ? getGetShowsIdListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].lists[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdNextEpisodeKey(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/next_episode', keyArgs] as const
}

export function useGetShowsIdNextEpisode<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
          >
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
        ? getGetShowsIdNextEpisodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].next_episode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdNextEpisode<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
          >
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
        ? getGetShowsIdNextEpisodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].next_episode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdPeopleKey(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/people', keyArgs] as const
}

export function useGetShowsIdPeople<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdPeopleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdPeople<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdPeopleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdProgressCollectionKey(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/progress/collection', keyArgs] as const
}

export function useGetShowsIdProgressCollection<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
          >
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
        ? getGetShowsIdProgressCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].progress.collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdProgressCollection<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
          >
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
        ? getGetShowsIdProgressCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].progress.collection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdProgressWatchedKey(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/progress/watched', keyArgs] as const
}

export function useGetShowsIdProgressWatched<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
          >
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
        ? getGetShowsIdProgressWatchedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].progress.watched.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdProgressWatched<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
          >
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
        ? getGetShowsIdProgressWatchedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].progress.watched.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShowsIdProgressWatchedResetKey() {
  return ['shows', '/shows/:id/progress/watched/reset', 'POST'] as const
}

export function usePostShowsIdProgressWatchedReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShowsIdProgressWatchedResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.shows)[':id']['progress']['watched']['reset']['$post']
          >
        },
      ) => parseResponse(client.shows[':id'].progress.watched.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShowsIdProgressWatchedResetKey() {
  return ['shows', '/shows/:id/progress/watched/reset', 'DELETE'] as const
}

export function useDeleteShowsIdProgressWatchedReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['progress']['watched']['reset']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShowsIdProgressWatchedResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.shows)[':id']['progress']['watched']['reset']['$delete']
          >
        },
      ) => parseResponse(client.shows[':id'].progress.watched.reset.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShowsIdRatingsKey(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/ratings', keyArgs] as const
}

export function useGetShowsIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdRatingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdRatingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdRelatedKey(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/related', keyArgs] as const
}

export function useGetShowsIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdRelatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdRelatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons', keyArgs] as const
}

export function useGetShowsIdSeasons<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdSeasonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].seasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasons<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdSeasonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].seasons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season', keyArgs] as const
}

export function useGetShowsIdSeasonsSeason<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
          >
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
        ? getGetShowsIdSeasonsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].seasons[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeason<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
          >
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
        ? getGetShowsIdSeasonsSeasonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].seasons[':season'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonCommentsSortKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/comments/:sort', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonCommentsSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].comments[':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonCommentsSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].comments[':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodeKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisode<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisode<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/comments/:sort', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisodeCommentsSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].comments[':sort'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisodeCommentsSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].comments[':sort'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'shows',
    '/shows/:id/seasons/:season/episodes/:episode/lists/:type/:sort',
    keyArgs,
  ] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].lists[':type'][':sort'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].lists[':type'][':sort'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodePeopleKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/people', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisodePeople<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodePeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].people.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisodePeople<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodePeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].people.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodeRatingsKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/ratings', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisodeRatings<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].ratings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisodeRatings<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].ratings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodeStatsKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/stats', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisodeStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].stats.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisodeStats<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].stats.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'shows',
    '/shows/:id/seasons/:season/episodes/:episode/translations/:language',
    keyArgs,
  ] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].translations[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].translations[
            ':language'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonEpisodesEpisodeWatchingKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/watching', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonEpisodesEpisodeWatching<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].watching.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonEpisodesEpisodeWatching<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonEpisodesEpisodeWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].watching.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonListsTypeSortKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/lists/:type/:sort', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonListsTypeSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].lists[':type'][':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonListsTypeSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonListsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].lists[':type'][':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonPeopleKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/people', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonPeople<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
            >
          >
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
        ? getGetShowsIdSeasonsSeasonPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonPeople<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
            >
          >
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
        ? getGetShowsIdSeasonsSeasonPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonRatingsKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/ratings', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonRatings<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
            >
          >
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
        ? getGetShowsIdSeasonsSeasonRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonRatings<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
            >
          >
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
        ? getGetShowsIdSeasonsSeasonRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonStatsKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/stats', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonStats<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
          >
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
        ? getGetShowsIdSeasonsSeasonStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonStats<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
          >
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
        ? getGetShowsIdSeasonsSeasonStatsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonTranslationsLanguageKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/translations/:language', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonTranslationsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].translations[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonTranslationsLanguage<TError = unknown>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
              >
            >
          >
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
        ? getGetShowsIdSeasonsSeasonTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shows[':id'].seasons[':season'].translations[':language'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdSeasonsSeasonWatchingKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/watching', keyArgs] as const
}

export function useGetShowsIdSeasonsSeasonWatching<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
            >
          >
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
        ? getGetShowsIdSeasonsSeasonWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdSeasonsSeasonWatching<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
            >
          >
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
        ? getGetShowsIdSeasonsSeasonWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].seasons[':season'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdStatsKey(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/stats', keyArgs] as const
}

export function useGetShowsIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdStudiosKey(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/studios', keyArgs] as const
}

export function useGetShowsIdStudios<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdStudiosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].studios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdStudios<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShowsIdStudiosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].studios.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdTranslationsLanguageKey(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/translations/:language', keyArgs] as const
}

export function useGetShowsIdTranslationsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
          >
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
        ? getGetShowsIdTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].translations[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdTranslationsLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
          >
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
        ? getGetShowsIdTranslationsLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shows[':id'].translations[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShowsIdWatchingKey(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/watching', keyArgs] as const
}

export function useGetShowsIdWatching<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>
          >
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
        ? getGetShowsIdWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShowsIdWatching<TError = unknown>(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>
          >
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
        ? getGetShowsIdWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shows[':id'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSyncCollectionKey() {
  return ['sync', '/sync/collection', 'POST'] as const
}

export function usePostSyncCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.collection.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.collection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.collection.$post> }) =>
        parseResponse(client.sync.collection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncCollectionRemoveKey() {
  return ['sync', '/sync/collection/remove', 'POST'] as const
}

export function usePostSyncCollectionRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.collection.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.collection.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncCollectionRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sync.collection.remove.$post> },
      ) => parseResponse(client.sync.collection.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncCollectionTypeKey(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/collection/:type', keyArgs] as const
}

export function useGetSyncCollectionType<TError = unknown>(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>
          >
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
        ? getGetSyncCollectionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.collection[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncCollectionType<TError = unknown>(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>
          >
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
        ? getGetSyncCollectionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.collection[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSyncHistoryKey() {
  return ['sync', '/sync/history', 'POST'] as const
}

export function usePostSyncHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.history.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.history.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.history.$post> }) =>
        parseResponse(client.sync.history.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncHistoryRemoveKey() {
  return ['sync', '/sync/history/remove', 'POST'] as const
}

export function usePostSyncHistoryRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.history.remove.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.history.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncHistoryRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.history.remove.$post> }) =>
        parseResponse(client.sync.history.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncHistoryTypeIdKey(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/history/:type/:id', keyArgs] as const
}

export function useGetSyncHistoryTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
          >
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
        ? getGetSyncHistoryTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.history[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncHistoryTypeId<TError = unknown>(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
          >
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
        ? getGetSyncHistoryTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.history[':type'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSyncLastActivitiesKey(
  args: InferRequestType<typeof client.sync.last_activities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/last_activities', keyArgs] as const
}

export function useGetSyncLastActivities<TError = unknown>(
  args: InferRequestType<typeof client.sync.last_activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
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
        ? getGetSyncLastActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.last_activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncLastActivities<TError = unknown>(
  args: InferRequestType<typeof client.sync.last_activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
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
        ? getGetSyncLastActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.last_activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSyncPlaybackIdKey() {
  return ['sync', '/sync/playback/:id', 'DELETE'] as const
}

export function useDeleteSyncPlaybackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sync.playback)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSyncPlaybackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sync.playback)[':id']['$delete']> },
      ) => parseResponse(client.sync.playback[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncPlaybackTypeKey(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/playback/:type', keyArgs] as const
}

export function useGetSyncPlaybackType<TError = unknown>(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
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
        ? getGetSyncPlaybackTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.playback[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncPlaybackType<TError = unknown>(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
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
        ? getGetSyncPlaybackTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.playback[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSyncRatingsKey() {
  return ['sync', '/sync/ratings', 'POST'] as const
}

export function usePostSyncRatings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ratings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.ratings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncRatingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.ratings.$post> }) =>
        parseResponse(client.sync.ratings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncRatingsRemoveKey() {
  return ['sync', '/sync/ratings/remove', 'POST'] as const
}

export function usePostSyncRatingsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ratings.remove.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.ratings.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncRatingsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.ratings.remove.$post> }) =>
        parseResponse(client.sync.ratings.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncRatingsTypeRatingKey(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/ratings/:type/:rating', keyArgs] as const
}

export function useGetSyncRatingsTypeRating<TError = unknown>(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
          >
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
        ? getGetSyncRatingsTypeRatingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.ratings[':type'][':rating'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncRatingsTypeRating<TError = unknown>(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
          >
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
        ? getGetSyncRatingsTypeRatingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.ratings[':type'][':rating'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSyncRecommendationsKey() {
  return ['sync', '/sync/recommendations', 'POST'] as const
}

export function usePostSyncRecommendations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.recommendations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.recommendations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncRecommendationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sync.recommendations.$post> },
      ) => parseResponse(client.sync.recommendations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncRecommendationsRemoveKey() {
  return ['sync', '/sync/recommendations/remove', 'POST'] as const
}

export function usePostSyncRecommendationsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.recommendations.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.recommendations.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncRecommendationsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sync.recommendations.remove.$post> },
      ) => parseResponse(client.sync.recommendations.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncRecommendationsReorderKey() {
  return ['sync', '/sync/recommendations/reorder', 'POST'] as const
}

export function usePostSyncRecommendationsReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.recommendations.reorder.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.recommendations.reorder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncRecommendationsReorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sync.recommendations.reorder.$post> },
      ) => parseResponse(client.sync.recommendations.reorder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncRecommendationsTypeSortKey(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/recommendations/:type/:sort', keyArgs] as const
}

export function useGetSyncRecommendationsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
          >
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
        ? getGetSyncRecommendationsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sync.recommendations[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncRecommendationsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
          >
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
        ? getGetSyncRecommendationsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sync.recommendations[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSyncWatchedTypeKey(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/watched/:type', keyArgs] as const
}

export function useGetSyncWatchedType<TError = unknown>(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
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
        ? getGetSyncWatchedTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.watched[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncWatchedType<TError = unknown>(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
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
        ? getGetSyncWatchedTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.watched[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSyncWatchlistKey() {
  return ['sync', '/sync/watchlist', 'POST'] as const
}

export function usePostSyncWatchlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.watchlist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncWatchlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.watchlist.$post> }) =>
        parseResponse(client.sync.watchlist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncWatchlistRemoveKey() {
  return ['sync', '/sync/watchlist/remove', 'POST'] as const
}

export function usePostSyncWatchlistRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.remove.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.watchlist.remove.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncWatchlistRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sync.watchlist.remove.$post> },
      ) => parseResponse(client.sync.watchlist.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncWatchlistReorderKey() {
  return ['sync', '/sync/watchlist/reorder', 'POST'] as const
}

export function usePostSyncWatchlistReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.reorder.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.watchlist.reorder.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncWatchlistReorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sync.watchlist.reorder.$post> },
      ) => parseResponse(client.sync.watchlist.reorder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncWatchlistTypeSortKey(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/watchlist/:type/:sort', keyArgs] as const
}

export function useGetSyncWatchlistTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
          >
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
        ? getGetSyncWatchlistTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.watchlist[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncWatchlistTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
          >
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
        ? getGetSyncWatchlistTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.watchlist[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersHiddenSectionKey(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/hidden/:section', keyArgs] as const
}

export function useGetUsersHiddenSection<TError = unknown>(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>
          >
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
        ? getGetUsersHiddenSectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.hidden[':section'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersHiddenSection<TError = unknown>(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>
          >
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
        ? getGetUsersHiddenSectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.hidden[':section'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersHiddenSectionKey() {
  return ['users', '/users/hidden/:section', 'POST'] as const
}

export function usePostUsersHiddenSection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.hidden)[':section']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersHiddenSectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.hidden)[':section']['$post']> },
      ) => parseResponse(client.users.hidden[':section'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersHiddenSectionRemoveKey() {
  return ['users', '/users/hidden/:section/remove', 'POST'] as const
}

export function usePostUsersHiddenSectionRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.hidden)[':section']['remove']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.hidden)[':section']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersHiddenSectionRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users.hidden)[':section']['remove']['$post']> },
      ) => parseResponse(client.users.hidden[':section'].remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersRequestsKey(args: InferRequestType<typeof client.users.requests.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/requests', keyArgs] as const
}

export function useGetUsersRequests<TError = unknown>(
  args: InferRequestType<typeof client.users.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersRequests<TError = unknown>(
  args: InferRequestType<typeof client.users.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersRequestsFollowingKey(
  args: InferRequestType<typeof client.users.requests.following.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/requests/following', keyArgs] as const
}

export function useGetUsersRequestsFollowing<TError = unknown>(
  args: InferRequestType<typeof client.users.requests.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
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
        ? getGetUsersRequestsFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.requests.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersRequestsFollowing<TError = unknown>(
  args: InferRequestType<typeof client.users.requests.following.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
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
        ? getGetUsersRequestsFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.requests.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersRequestsIdKey() {
  return ['users', '/users/requests/:id', 'POST'] as const
}

export function usePostUsersRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.requests)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.requests)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.requests)[':id']['$post']> },
      ) => parseResponse(client.users.requests[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersRequestsIdKey() {
  return ['users', '/users/requests/:id', 'DELETE'] as const
}

export function useDeleteUsersRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.requests)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users.requests)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.requests)[':id']['$delete']> },
      ) => parseResponse(client.users.requests[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersSavedFiltersSectionKey(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/saved_filters/:section', keyArgs] as const
}

export function useGetUsersSavedFiltersSection<TError = unknown>(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
          >
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
        ? getGetUsersSavedFiltersSectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.saved_filters[':section'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSavedFiltersSection<TError = unknown>(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
          >
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
        ? getGetUsersSavedFiltersSectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.saved_filters[':section'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersSettingsKey(args: InferRequestType<typeof client.users.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/settings', keyArgs] as const
}

export function useGetUsersSettings<TError = unknown>(
  args: InferRequestType<typeof client.users.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSettings<TError = unknown>(
  args: InferRequestType<typeof client.users.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id', keyArgs] as const
}

export function useGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdCollectionTypeKey(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/collection/:type', keyArgs] as const
}

export function useGetUsersIdCollectionType<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
          >
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
        ? getGetUsersIdCollectionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].collection[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdCollectionType<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
          >
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
        ? getGetUsersIdCollectionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].collection[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdCommentsCommentTypeTypeKey(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/comments/:comment_type/:type', keyArgs] as const
}

export function useGetUsersIdCommentsCommentTypeType<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
            >
          >
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
        ? getGetUsersIdCommentsCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].comments[':comment_type'][':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdCommentsCommentTypeType<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
            >
          >
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
        ? getGetUsersIdCommentsCommentTypeTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].comments[':comment_type'][':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdFollowKey() {
  return ['users', '/users/:id/follow', 'POST'] as const
}

export function usePostUsersIdFollow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['follow']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['follow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdFollowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['follow']['$post']> },
      ) => parseResponse(client.users[':id'].follow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdFollowKey() {
  return ['users', '/users/:id/follow', 'DELETE'] as const
}

export function useDeleteUsersIdFollow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['follow']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['follow']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdFollowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['follow']['$delete']> },
      ) => parseResponse(client.users[':id'].follow.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdFollowersKey(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/followers', keyArgs] as const
}

export function useGetUsersIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>
          >
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
        ? getGetUsersIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>
          >
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
        ? getGetUsersIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdFollowingKey(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/following', keyArgs] as const
}

export function useGetUsersIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>
          >
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
        ? getGetUsersIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>
          >
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
        ? getGetUsersIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdFriendsKey(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/friends', keyArgs] as const
}

export function useGetUsersIdFriends<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdFriendsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].friends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdFriends<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdFriendsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].friends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdHistoryTypeItemIdKey(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/history/:type/:item_id', keyArgs] as const
}

export function useGetUsersIdHistoryTypeItemId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
            >
          >
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
        ? getGetUsersIdHistoryTypeItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].history[':type'][':item_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdHistoryTypeItemId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
            >
          >
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
        ? getGetUsersIdHistoryTypeItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].history[':type'][':item_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdLikesTypeKey(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/likes/:type', keyArgs] as const
}

export function useGetUsersIdLikesType<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
          >
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
        ? getGetUsersIdLikesTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].likes[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdLikesType<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
          >
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
        ? getGetUsersIdLikesTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].likes[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdListsKey(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists', keyArgs] as const
}

export function useGetUsersIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdListsKey() {
  return ['users', '/users/:id/lists', 'POST'] as const
}

export function usePostUsersIdLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':id']['lists']['$post']> },
      ) => parseResponse(client.users[':id'].lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdListsCollaborationsKey(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/collaborations', keyArgs] as const
}

export function useGetUsersIdListsCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
          >
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
        ? getGetUsersIdListsCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].lists.collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdListsCollaborations<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
          >
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
        ? getGetUsersIdListsCollaborationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].lists.collaborations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdListsReorderKey() {
  return ['users', '/users/:id/lists/reorder', 'POST'] as const
}

export function usePostUsersIdListsReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists']['reorder']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists']['reorder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdListsReorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['lists']['reorder']['$post']> },
      ) => parseResponse(client.users[':id'].lists.reorder.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdListsListIdKey(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id', keyArgs] as const
}

export function useGetUsersIdListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
          >
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
        ? getGetUsersIdListsListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].lists[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
          >
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
        ? getGetUsersIdListsListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].lists[':list_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersIdListsListIdKey() {
  return ['users', '/users/:id/lists/:list_id', 'PUT'] as const
}

export function usePutUsersIdListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersIdListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$put']> },
      ) => parseResponse(client.users[':id'].lists[':list_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdListsListIdKey() {
  return ['users', '/users/:id/lists/:list_id', 'DELETE'] as const
}

export function useDeleteUsersIdListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$delete']> },
      ) => parseResponse(client.users[':id'].lists[':list_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdListsListIdCommentsSortKey(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id/comments/:sort', keyArgs] as const
}

export function useGetUsersIdListsListIdCommentsSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
              >
            >
          >
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
        ? getGetUsersIdListsListIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].lists[':list_id'].comments[':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdListsListIdCommentsSort<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
              >
            >
          >
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
        ? getGetUsersIdListsListIdCommentsSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].lists[':list_id'].comments[':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdListsListIdItemsKey() {
  return ['users', '/users/:id/lists/:list_id/items', 'POST'] as const
}

export function usePostUsersIdListsListIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdListsListIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>
        },
      ) => parseResponse(client.users[':id'].lists[':list_id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersIdListsListIdItemsRemoveKey() {
  return ['users', '/users/:id/lists/:list_id/items/remove', 'POST'] as const
}

export function usePostUsersIdListsListIdItemsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id']['lists'][':list_id']['items']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdListsListIdItemsRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':id']['lists'][':list_id']['items']['remove']['$post']
          >
        },
      ) =>
        parseResponse(client.users[':id'].lists[':list_id'].items.remove.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersIdListsListIdItemsReorderKey() {
  return ['users', '/users/:id/lists/:list_id/items/reorder', 'POST'] as const
}

export function usePostUsersIdListsListIdItemsReorder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':id']['lists'][':list_id']['items']['reorder']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['reorder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdListsListIdItemsReorderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':id']['lists'][':list_id']['items']['reorder']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users[':id'].lists[':list_id'].items.reorder.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdListsListIdItemsTypeKey(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id/items/:type', keyArgs] as const
}

export function useGetUsersIdListsListIdItemsType<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
              >
            >
          >
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
        ? getGetUsersIdListsListIdItemsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].lists[':list_id'].items[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdListsListIdItemsType<TError = unknown>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
              >
            >
          >
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
        ? getGetUsersIdListsListIdItemsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].lists[':list_id'].items[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIdListsListIdLikeKey() {
  return ['users', '/users/:id/lists/:list_id/like', 'POST'] as const
}

export function usePostUsersIdListsListIdLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIdListsListIdLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>
        },
      ) => parseResponse(client.users[':id'].lists[':list_id'].like.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersIdListsListIdLikeKey() {
  return ['users', '/users/:id/lists/:list_id/like', 'DELETE'] as const
}

export function useDeleteUsersIdListsListIdLike<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['lists'][':list_id']['like']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersIdListsListIdLikeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.users)[':id']['lists'][':list_id']['like']['$delete']
          >
        },
      ) => parseResponse(client.users[':id'].lists[':list_id'].like.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIdListsListIdLikesKey(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id/likes', keyArgs] as const
}

export function useGetUsersIdListsListIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
          >
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
        ? getGetUsersIdListsListIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].lists[':list_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdListsListIdLikes<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
          >
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
        ? getGetUsersIdListsListIdLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].lists[':list_id'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdRatingsTypeRatingKey(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/ratings/:type/:rating', keyArgs] as const
}

export function useGetUsersIdRatingsTypeRating<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
          >
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
        ? getGetUsersIdRatingsTypeRatingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].ratings[':type'][':rating'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdRatingsTypeRating<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
          >
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
        ? getGetUsersIdRatingsTypeRatingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].ratings[':type'][':rating'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdRecommendationsTypeSortKey(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/recommendations/:type/:sort', keyArgs] as const
}

export function useGetUsersIdRecommendationsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
            >
          >
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
        ? getGetUsersIdRecommendationsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].recommendations[':type'][':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdRecommendationsTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
            >
          >
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
        ? getGetUsersIdRecommendationsTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':id'].recommendations[':type'][':sort'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdStatsKey(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/stats', keyArgs] as const
}

export function useGetUsersIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdStats<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIdStatsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].stats.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdWatchedTypeKey(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/watched/:type', keyArgs] as const
}

export function useGetUsersIdWatchedType<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
          >
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
        ? getGetUsersIdWatchedTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].watched[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdWatchedType<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
          >
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
        ? getGetUsersIdWatchedTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].watched[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdWatchingKey(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/watching', keyArgs] as const
}

export function useGetUsersIdWatching<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>
          >
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
        ? getGetUsersIdWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdWatching<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>
          >
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
        ? getGetUsersIdWatchingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':id'].watching.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIdWatchlistTypeSortKey(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/watchlist/:type/:sort', keyArgs] as const
}

export function useGetUsersIdWatchlistTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
          >
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
        ? getGetUsersIdWatchlistTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].watchlist[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIdWatchlistTypeSort<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
          >
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
        ? getGetUsersIdWatchlistTypeSortKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.users[':id'].watchlist[':type'][':sort'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
