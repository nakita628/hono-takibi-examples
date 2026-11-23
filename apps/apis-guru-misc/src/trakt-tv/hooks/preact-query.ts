import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getCalendarsAllDvdStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/dvd/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllDvdStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllDvdStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsAllDvdStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.all.dvd[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsAllDvdStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllDvdStartDateDaysQueryKey>
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
      ...getCalendarsAllDvdStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsAllDvdStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllDvdStartDateDaysQueryKey>
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
      ...getCalendarsAllDvdStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsAllMoviesStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/movies/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllMoviesStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllMoviesStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsAllMoviesStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.all.movies[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsAllMoviesStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllMoviesStartDateDaysQueryKey>
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
      ...getCalendarsAllMoviesStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsAllMoviesStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllMoviesStartDateDaysQueryKey>
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
      ...getCalendarsAllMoviesStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsAllShowsNewStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/shows/new/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllShowsNewStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllShowsNewStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsAllShowsNewStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.all.shows.new[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsAllShowsNewStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllShowsNewStartDateDaysQueryKey>
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
      ...getCalendarsAllShowsNewStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsAllShowsNewStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllShowsNewStartDateDaysQueryKey>
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
      ...getCalendarsAllShowsNewStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsAllShowsPremieresStartDateDaysQueryKey(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/shows/premieres/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllShowsPremieresStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCalendarsAllShowsPremieresStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsAllShowsPremieresStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.all.shows.premieres[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsAllShowsPremieresStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCalendarsAllShowsPremieresStartDateDaysQueryKey>
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
      ...getCalendarsAllShowsPremieresStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsAllShowsPremieresStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCalendarsAllShowsPremieresStartDateDaysQueryKey>
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
      ...getCalendarsAllShowsPremieresStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsAllShowsStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/all/shows/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllShowsStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllShowsStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsAllShowsStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.all.shows[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsAllShowsStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllShowsStartDateDaysQueryKey>
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
      ...getCalendarsAllShowsStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsAllShowsStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsAllShowsStartDateDaysQueryKey>
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
      ...getCalendarsAllShowsStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsMyDvdStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/dvd/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyDvdStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyDvdStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsMyDvdStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.my.dvd[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsMyDvdStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyDvdStartDateDaysQueryKey>
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
      ...getCalendarsMyDvdStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsMyDvdStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyDvdStartDateDaysQueryKey>
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
      ...getCalendarsMyDvdStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsMyMoviesStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/movies/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyMoviesStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyMoviesStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsMyMoviesStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.my.movies[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsMyMoviesStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyMoviesStartDateDaysQueryKey>
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
      ...getCalendarsMyMoviesStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsMyMoviesStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyMoviesStartDateDaysQueryKey>
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
      ...getCalendarsMyMoviesStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsMyShowsNewStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/shows/new/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyShowsNewStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyShowsNewStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsMyShowsNewStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.my.shows.new[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsMyShowsNewStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyShowsNewStartDateDaysQueryKey>
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
      ...getCalendarsMyShowsNewStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsMyShowsNewStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyShowsNewStartDateDaysQueryKey>
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
      ...getCalendarsMyShowsNewStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsMyShowsPremieresStartDateDaysQueryKey(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/shows/premieres/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyShowsPremieresStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyShowsPremieresStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsMyShowsPremieresStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.my.shows.premieres[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsMyShowsPremieresStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCalendarsMyShowsPremieresStartDateDaysQueryKey>
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
      ...getCalendarsMyShowsPremieresStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsMyShowsPremieresStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCalendarsMyShowsPremieresStartDateDaysQueryKey>
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
      ...getCalendarsMyShowsPremieresStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCalendarsMyShowsStartDateDaysQueryKey(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['calendars', '/calendars/my/shows/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyShowsStartDateDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyShowsStartDateDaysQueryKey>
  >({
    queryKey: getCalendarsMyShowsStartDateDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calendars.my.shows[':start_date'][':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCalendarsMyShowsStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyShowsStartDateDaysQueryKey>
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
      ...getCalendarsMyShowsStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCalendarsMyShowsStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCalendarsMyShowsStartDateDaysQueryKey>
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
      ...getCalendarsMyShowsStartDateDaysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCertificationsTypeQueryKey(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['certifications', '/certifications/:type', keyArgs] as const
}

export function getCertificationsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificationsTypeQueryKey>
  >({
    queryKey: getCertificationsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certifications[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCertificationsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificationsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCertificationsTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCertificationsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certifications)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificationsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCertificationsTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCheckinMutationKey() {
  return ['checkin', '/checkin', 'POST'] as const
}

export function getPostCheckinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$post>>>>>,
    TError,
    InferRequestType<typeof client.checkin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checkin.$post>) {
      return parseResponse(client.checkin.$post(args, options))
    },
  })
}

export function usePostCheckin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$post>>>>>,
        TError,
        InferRequestType<typeof client.checkin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckinMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCheckinMutationKey() {
  return ['checkin', '/checkin', 'DELETE'] as const
}

export function getDeleteCheckinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.checkin.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCheckinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checkin.$delete>) {
      return parseResponse(client.checkin.$delete(args, options))
    },
  })
}

export function useDeleteCheckin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.checkin.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCheckinMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCommentsMutationKey() {
  return ['comments', '/comments', 'POST'] as const
}

export function getPostCommentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>>,
    TError,
    InferRequestType<typeof client.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comments.$post>) {
      return parseResponse(client.comments.$post(args, options))
    },
  })
}

export function usePostComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.comments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCommentsRecentCommentTypeTypeQueryKey(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/recent/:comment_type/:type', keyArgs] as const
}

export function getCommentsRecentCommentTypeTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsRecentCommentTypeTypeQueryKey>
  >({
    queryKey: getCommentsRecentCommentTypeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments.recent[':comment_type'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommentsRecentCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsRecentCommentTypeTypeQueryKey>
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
      ...getCommentsRecentCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommentsRecentCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsRecentCommentTypeTypeQueryKey>
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
      ...getCommentsRecentCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCommentsTrendingCommentTypeTypeQueryKey(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/trending/:comment_type/:type', keyArgs] as const
}

export function getCommentsTrendingCommentTypeTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsTrendingCommentTypeTypeQueryKey>
  >({
    queryKey: getCommentsTrendingCommentTypeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments.trending[':comment_type'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommentsTrendingCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsTrendingCommentTypeTypeQueryKey>
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
      ...getCommentsTrendingCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommentsTrendingCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsTrendingCommentTypeTypeQueryKey>
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
      ...getCommentsTrendingCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCommentsUpdatesCommentTypeTypeQueryKey(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/updates/:comment_type/:type', keyArgs] as const
}

export function getCommentsUpdatesCommentTypeTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsUpdatesCommentTypeTypeQueryKey>
  >({
    queryKey: getCommentsUpdatesCommentTypeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments.updates[':comment_type'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommentsUpdatesCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsUpdatesCommentTypeTypeQueryKey>
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
      ...getCommentsUpdatesCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommentsUpdatesCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsUpdatesCommentTypeTypeQueryKey>
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
      ...getCommentsUpdatesCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCommentsIdQueryKey(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id', keyArgs] as const
}

export function getCommentsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.comments)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdQueryKey>
  >({
    queryKey: getCommentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCommentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCommentsIdMutationKey() {
  return ['comments', '/comments/:id', 'PUT'] as const
}

export function getPutCommentsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.comments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['$put']>) {
      return parseResponse(client.comments[':id'].$put(args, options))
    },
  })
}

export function usePutCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.comments)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCommentsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCommentsIdMutationKey() {
  return ['comments', '/comments/:id', 'DELETE'] as const
}

export function getDeleteCommentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.comments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['$delete']>) {
      return parseResponse(client.comments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.comments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCommentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCommentsIdItemQueryKey(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id/item', keyArgs] as const
}

export function getCommentsIdItemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdItemQueryKey>
  >({
    queryKey: getCommentsIdItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':id'].item.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCommentsIdItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsIdItemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommentsIdItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsIdItemQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCommentsIdLikeMutationKey() {
  return ['comments', '/comments/:id/like', 'POST'] as const
}

export function getPostCommentsIdLikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['like']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.comments)[':id']['like']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsIdLikeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['like']['$post']>) {
      return parseResponse(client.comments[':id'].like.$post(args, options))
    },
  })
}

export function usePostCommentsIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':id']['like']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.comments)[':id']['like']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommentsIdLikeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCommentsIdLikeMutationKey() {
  return ['comments', '/comments/:id/like', 'DELETE'] as const
}

export function getDeleteCommentsIdLikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':id']['like']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.comments)[':id']['like']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommentsIdLikeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['like']['$delete']>) {
      return parseResponse(client.comments[':id'].like.$delete(args, options))
    },
  })
}

export function useDeleteCommentsIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':id']['like']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.comments)[':id']['like']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCommentsIdLikeMutationOptions<TError, TOnMutateResult>(
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

export function getCommentsIdLikesQueryKey(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id/likes', keyArgs] as const
}

export function getCommentsIdLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdLikesQueryKey>
  >({
    queryKey: getCommentsIdLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':id'].likes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCommentsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommentsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCommentsIdRepliesQueryKey(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['comments', '/comments/:id/replies', keyArgs] as const
}

export function getCommentsIdRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdRepliesQueryKey>
  >({
    queryKey: getCommentsIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':id'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommentsIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdRepliesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCommentsIdRepliesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCommentsIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsIdRepliesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCommentsIdRepliesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCommentsIdRepliesMutationKey() {
  return ['comments', '/comments/:id/replies', 'POST'] as const
}

export function getPostCommentsIdRepliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':id']['replies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommentsIdRepliesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.comments)[':id']['replies']['$post']>) {
      return parseResponse(client.comments[':id'].replies.$post(args, options))
    },
  })
}

export function usePostCommentsIdReplies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.comments)[':id']['replies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommentsIdRepliesMutationOptions<TError, TOnMutateResult>(
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

export function getCountriesTypeQueryKey(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['countries', '/countries/:type', keyArgs] as const
}

export function getCountriesTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountriesTypeQueryKey>
  >({
    queryKey: getCountriesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.countries[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCountriesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCountriesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCountriesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCountriesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.countries)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCountriesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCountriesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenresTypeQueryKey(
  args: InferRequestType<(typeof client.genres)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['genres', '/genres/:type', keyArgs] as const
}

export function getGenresTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.genres)[':type']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGenresTypeQueryKey>
  >({
    queryKey: getGenresTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genres[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenresType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genres)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenresTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGenresTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGenresType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.genres)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenresTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGenresTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLanguagesTypeQueryKey(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['languages', '/languages/:type', keyArgs] as const
}

export function getLanguagesTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLanguagesTypeQueryKey>
  >({
    queryKey: getLanguagesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.languages[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLanguagesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLanguagesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLanguagesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.languages)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLanguagesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsPopularQueryKey(args: InferRequestType<typeof client.lists.popular.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/popular', keyArgs] as const
}

export function getListsPopularQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lists.popular.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsPopularQueryKey>
  >({
    queryKey: getListsPopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists.popular.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lists.popular.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListsPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lists.popular.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListsPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsTrendingQueryKey(
  args: InferRequestType<typeof client.lists.trending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/trending', keyArgs] as const
}

export function getListsTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lists.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsTrendingQueryKey>
  >({
    queryKey: getListsTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lists.trending.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListsTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsTrendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lists.trending.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListsTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsTrendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsIdQueryKey(args: InferRequestType<(typeof client.lists)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id', keyArgs] as const
}

export function getListsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.lists)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdQueryKey>
  >({
    queryKey: getListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsIdCommentsSortQueryKey(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id/comments/:sort', keyArgs] as const
}

export function getListsIdCommentsSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdCommentsSortQueryKey>
  >({
    queryKey: getListsIdCommentsSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].comments[':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListsIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdCommentsSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdCommentsSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdCommentsSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdCommentsSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsIdItemsTypeQueryKey(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id/items/:type', keyArgs] as const
}

export function getListsIdItemsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdItemsTypeQueryKey>
  >({
    queryKey: getListsIdItemsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].items[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListsIdItemsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdItemsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdItemsTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsIdItemsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdItemsTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdItemsTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsIdLikesQueryKey(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lists', '/lists/:id/likes', keyArgs] as const
}

export function getListsIdLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdLikesQueryKey>
  >({
    queryKey: getListsIdLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].likes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdLikesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesAnticipatedQueryKey(
  args: InferRequestType<typeof client.movies.anticipated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/anticipated', keyArgs] as const
}

export function getMoviesAnticipatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.movies.anticipated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesAnticipatedQueryKey>
  >({
    queryKey: getMoviesAnticipatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.anticipated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.anticipated.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesAnticipatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesAnticipatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.anticipated.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesAnticipatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesAnticipatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesBoxofficeQueryKey(
  args: InferRequestType<typeof client.movies.boxoffice.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/boxoffice', keyArgs] as const
}

export function getMoviesBoxofficeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.movies.boxoffice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesBoxofficeQueryKey>
  >({
    queryKey: getMoviesBoxofficeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.boxoffice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesBoxoffice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.boxoffice.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesBoxofficeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesBoxofficeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesBoxoffice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.boxoffice.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesBoxofficeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesBoxofficeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesCollectedPeriodQueryKey(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/collected/:period', keyArgs] as const
}

export function getMoviesCollectedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesCollectedPeriodQueryKey>
  >({
    queryKey: getMoviesCollectedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.collected[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesCollectedPeriodQueryKey>
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
      ...getMoviesCollectedPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMoviesCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesCollectedPeriodQueryKey>
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
      ...getMoviesCollectedPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMoviesPlayedPeriodQueryKey(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/played/:period', keyArgs] as const
}

export function getMoviesPlayedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesPlayedPeriodQueryKey>
  >({
    queryKey: getMoviesPlayedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.played[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesPlayedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesPlayedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.played)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesPlayedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesPlayedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesPopularQueryKey(
  args: InferRequestType<typeof client.movies.popular.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/popular', keyArgs] as const
}

export function getMoviesPopularQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.movies.popular.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesPopularQueryKey>
  >({
    queryKey: getMoviesPopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.popular.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.popular.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.popular.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesRecommendedPeriodQueryKey(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/recommended/:period', keyArgs] as const
}

export function getMoviesRecommendedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesRecommendedPeriodQueryKey>
  >({
    queryKey: getMoviesRecommendedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.recommended[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesRecommendedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesRecommendedPeriodQueryKey>
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
      ...getMoviesRecommendedPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMoviesRecommendedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesRecommendedPeriodQueryKey>
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
      ...getMoviesRecommendedPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMoviesTrendingQueryKey(
  args: InferRequestType<typeof client.movies.trending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/trending', keyArgs] as const
}

export function getMoviesTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.movies.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesTrendingQueryKey>
  >({
    queryKey: getMoviesTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.trending.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesTrendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.movies.trending.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesTrendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesUpdatesIdStartDateQueryKey(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/updates/id/:start_date', keyArgs] as const
}

export function getMoviesUpdatesIdStartDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesUpdatesIdStartDateQueryKey>
  >({
    queryKey: getMoviesUpdatesIdStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.updates.id[':start_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesUpdatesIdStartDateQueryKey>
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
      ...getMoviesUpdatesIdStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMoviesUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesUpdatesIdStartDateQueryKey>
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
      ...getMoviesUpdatesIdStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMoviesUpdatesStartDateQueryKey(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/updates/:start_date', keyArgs] as const
}

export function getMoviesUpdatesStartDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesUpdatesStartDateQueryKey>
  >({
    queryKey: getMoviesUpdatesStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.updates[':start_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesUpdatesStartDateQueryKey>
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
      ...getMoviesUpdatesStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMoviesUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesUpdatesStartDateQueryKey>
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
      ...getMoviesUpdatesStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMoviesWatchedPeriodQueryKey(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/watched/:period', keyArgs] as const
}

export function getMoviesWatchedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesWatchedPeriodQueryKey>
  >({
    queryKey: getMoviesWatchedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.watched[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesWatchedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesWatchedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesWatchedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesWatchedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdQueryKey(args: InferRequestType<(typeof client.movies)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id', keyArgs] as const
}

export function getMoviesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.movies)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdQueryKey>
  >({
    queryKey: getMoviesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdAliasesQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/aliases', keyArgs] as const
}

export function getMoviesIdAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdAliasesQueryKey>
  >({
    queryKey: getMoviesIdAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].aliases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdCommentsSortQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/comments/:sort', keyArgs] as const
}

export function getMoviesIdCommentsSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdCommentsSortQueryKey>
  >({
    queryKey: getMoviesIdCommentsSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].comments[':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdCommentsSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdCommentsSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdCommentsSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdCommentsSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdListsTypeSortQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/lists/:type/:sort', keyArgs] as const
}

export function getMoviesIdListsTypeSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdListsTypeSortQueryKey>
  >({
    queryKey: getMoviesIdListsTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].lists[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdListsTypeSortQueryKey>
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
      ...getMoviesIdListsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMoviesIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdListsTypeSortQueryKey>
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
      ...getMoviesIdListsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMoviesIdPeopleQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/people', keyArgs] as const
}

export function getMoviesIdPeopleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdPeopleQueryKey>
  >({
    queryKey: getMoviesIdPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdRatingsQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/ratings', keyArgs] as const
}

export function getMoviesIdRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdRatingsQueryKey>
  >({
    queryKey: getMoviesIdRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].ratings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdRatingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdRatingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdRelatedQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/related', keyArgs] as const
}

export function getMoviesIdRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdRelatedQueryKey>
  >({
    queryKey: getMoviesIdRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].related.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdRelatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdRelatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdReleasesCountryQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/releases/:country', keyArgs] as const
}

export function getMoviesIdReleasesCountryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdReleasesCountryQueryKey>
  >({
    queryKey: getMoviesIdReleasesCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].releases[':country'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesIdReleasesCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdReleasesCountryQueryKey>
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
      ...getMoviesIdReleasesCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMoviesIdReleasesCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdReleasesCountryQueryKey>
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
      ...getMoviesIdReleasesCountryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMoviesIdStatsQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/stats', keyArgs] as const
}

export function getMoviesIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdStatsQueryKey>
  >({
    queryKey: getMoviesIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdStudiosQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/studios', keyArgs] as const
}

export function getMoviesIdStudiosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdStudiosQueryKey>
  >({
    queryKey: getMoviesIdStudiosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].studios.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMoviesIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdStudiosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdStudiosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdStudiosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdStudiosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMoviesIdTranslationsLanguageQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/translations/:language', keyArgs] as const
}

export function getMoviesIdTranslationsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdTranslationsLanguageQueryKey>
  >({
    queryKey: getMoviesIdTranslationsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].translations[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdTranslationsLanguageQueryKey>
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
      ...getMoviesIdTranslationsLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMoviesIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdTranslationsLanguageQueryKey>
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
      ...getMoviesIdTranslationsLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMoviesIdWatchingQueryKey(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['movies', '/movies/:id/watching', keyArgs] as const
}

export function getMoviesIdWatchingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdWatchingQueryKey>
  >({
    queryKey: getMoviesIdWatchingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movies[':id'].watching.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMoviesIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdWatchingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMoviesIdWatchingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMoviesIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMoviesIdWatchingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMoviesIdWatchingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNetworksQueryKey(args: InferRequestType<typeof client.networks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['networks', '/networks', keyArgs] as const
}

export function getNetworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.networks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >({
    queryKey: getNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  return ['oauth', '/oauth/authorize', args] as const
}

export function getOauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >({
    queryKey: getOauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauthDeviceCodeMutationKey() {
  return ['oauth', '/oauth/device/code', 'POST'] as const
}

export function getPostOauthDeviceCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.code.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.device.code.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthDeviceCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.device.code.$post>) {
      return parseResponse(client.oauth.device.code.$post(args, options))
    },
  })
}

export function usePostOauthDeviceCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.code.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.device.code.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthDeviceCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthDeviceTokenMutationKey() {
  return ['oauth', '/oauth/device/token', 'POST'] as const
}

export function getPostOauthDeviceTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.device.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthDeviceTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.device.token.$post>) {
      return parseResponse(client.oauth.device.token.$post(args, options))
    },
  })
}

export function usePostOauthDeviceToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.device.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthDeviceTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthRevokeMutationKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function getPostOauthRevokeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.revoke.$post>) {
      return parseResponse(client.oauth.revoke.$post(args, options))
    },
  })
}

export function usePostOauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthRevokeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPeopleUpdatesIdStartDateQueryKey(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/updates/id/:start_date', keyArgs] as const
}

export function getPeopleUpdatesIdStartDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUpdatesIdStartDateQueryKey>
  >({
    queryKey: getPeopleUpdatesIdStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people.updates.id[':start_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePeopleUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleUpdatesIdStartDateQueryKey>
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
      ...getPeopleUpdatesIdStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePeopleUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleUpdatesIdStartDateQueryKey>
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
      ...getPeopleUpdatesIdStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPeopleUpdatesStartDateQueryKey(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/updates/:start_date', keyArgs] as const
}

export function getPeopleUpdatesStartDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUpdatesStartDateQueryKey>
  >({
    queryKey: getPeopleUpdatesStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people.updates[':start_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePeopleUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleUpdatesStartDateQueryKey>
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
      ...getPeopleUpdatesStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePeopleUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleUpdatesStartDateQueryKey>
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
      ...getPeopleUpdatesStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPeopleIdQueryKey(args: InferRequestType<(typeof client.people)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id', keyArgs] as const
}

export function getPeopleIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.people)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdQueryKey>
  >({
    queryKey: getPeopleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdListsTypeSortQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id/lists/:type/:sort', keyArgs] as const
}

export function getPeopleIdListsTypeSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdListsTypeSortQueryKey>
  >({
    queryKey: getPeopleIdListsTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].lists[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePeopleIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdListsTypeSortQueryKey>
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
      ...getPeopleIdListsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePeopleIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdListsTypeSortQueryKey>
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
      ...getPeopleIdListsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPeopleIdMoviesQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id/movies', keyArgs] as const
}

export function getPeopleIdMoviesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdMoviesQueryKey>
  >({
    queryKey: getPeopleIdMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].movies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdMoviesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdMoviesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPeopleIdShowsQueryKey(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['people', '/people/:id/shows', keyArgs] as const
}

export function getPeopleIdShowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdShowsQueryKey>
  >({
    queryKey: getPeopleIdShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.people[':id'].shows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePeopleIdShows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPeopleIdShowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePeopleIdShows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPeopleIdShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPeopleIdShowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecommendationsMoviesQueryKey(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recommendations', '/recommendations/movies', keyArgs] as const
}

export function getRecommendationsMoviesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsMoviesQueryKey>
  >({
    queryKey: getRecommendationsMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recommendations.movies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecommendationsMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsMoviesQueryKey>
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
      ...getRecommendationsMoviesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecommendationsMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.movies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsMoviesQueryKey>
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
      ...getRecommendationsMoviesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteRecommendationsMoviesIdMutationKey() {
  return ['recommendations', '/recommendations/movies/:id', 'DELETE'] as const
}

export function getDeleteRecommendationsMoviesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recommendations.movies)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.recommendations.movies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecommendationsMoviesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recommendations.movies)[':id']['$delete']>,
    ) {
      return parseResponse(client.recommendations.movies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRecommendationsMoviesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recommendations.movies)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.recommendations.movies)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRecommendationsMoviesIdMutationOptions<TError, TOnMutateResult>(
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

export function getRecommendationsShowsQueryKey(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['recommendations', '/recommendations/shows', keyArgs] as const
}

export function getRecommendationsShowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsShowsQueryKey>
  >({
    queryKey: getRecommendationsShowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recommendations.shows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecommendationsShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecommendationsShowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecommendationsShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recommendations.shows.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecommendationsShowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecommendationsShowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteRecommendationsShowsIdMutationKey() {
  return ['recommendations', '/recommendations/shows/:id', 'DELETE'] as const
}

export function getDeleteRecommendationsShowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recommendations.shows)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.recommendations.shows)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecommendationsShowsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recommendations.shows)[':id']['$delete']>,
    ) {
      return parseResponse(client.recommendations.shows[':id'].$delete(args, options))
    },
  })
}

export function useDeleteRecommendationsShowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recommendations.shows)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.recommendations.shows)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRecommendationsShowsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostScrobblePauseMutationKey() {
  return ['scrobble', '/scrobble/pause', 'POST'] as const
}

export function getPostScrobblePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.pause.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.scrobble.pause.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScrobblePauseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scrobble.pause.$post>) {
      return parseResponse(client.scrobble.pause.$post(args, options))
    },
  })
}

export function usePostScrobblePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.pause.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.scrobble.pause.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScrobblePauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostScrobbleStartMutationKey() {
  return ['scrobble', '/scrobble/start', 'POST'] as const
}

export function getPostScrobbleStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.start.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.scrobble.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScrobbleStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scrobble.start.$post>) {
      return parseResponse(client.scrobble.start.$post(args, options))
    },
  })
}

export function usePostScrobbleStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.start.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.scrobble.start.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScrobbleStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostScrobbleStopMutationKey() {
  return ['scrobble', '/scrobble/stop', 'POST'] as const
}

export function getPostScrobbleStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.stop.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.scrobble.stop.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScrobbleStopMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scrobble.stop.$post>) {
      return parseResponse(client.scrobble.stop.$post(args, options))
    },
  })
}

export function usePostScrobbleStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.stop.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.scrobble.stop.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScrobbleStopMutationOptions<TError, TOnMutateResult>(
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

export function getSearchIdTypeIdQueryKey(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/:id_type/:id', keyArgs] as const
}

export function getSearchIdTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchIdTypeIdQueryKey>
  >({
    queryKey: getSearchIdTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':id_type'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSearchIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchIdTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchIdTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchIdTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchIdTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchTypeQueryKey(
  args: InferRequestType<(typeof client.search)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search/:type', keyArgs] as const
}

export function getSearchTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.search)[':type']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchTypeQueryKey>
  >({
    queryKey: getSearchTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsAnticipatedQueryKey(
  args: InferRequestType<typeof client.shows.anticipated.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/anticipated', keyArgs] as const
}

export function getShowsAnticipatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shows.anticipated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsAnticipatedQueryKey>
  >({
    queryKey: getShowsAnticipatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.anticipated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.anticipated.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsAnticipatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsAnticipatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.anticipated.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsAnticipatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsAnticipatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsCollectedPeriodQueryKey(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/collected/:period', keyArgs] as const
}

export function getShowsCollectedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsCollectedPeriodQueryKey>
  >({
    queryKey: getShowsCollectedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.collected[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsCollectedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsCollectedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsCollectedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsCollectedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsPlayedPeriodQueryKey(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/played/:period', keyArgs] as const
}

export function getShowsPlayedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsPlayedPeriodQueryKey>
  >({
    queryKey: getShowsPlayedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.played[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsPlayedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsPlayedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.played)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsPlayedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsPlayedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsPopularQueryKey(args: InferRequestType<typeof client.shows.popular.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/popular', keyArgs] as const
}

export function getShowsPopularQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shows.popular.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsPopularQueryKey>
  >({
    queryKey: getShowsPopularQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.popular.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.popular.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShowsPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.popular.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShowsPopularQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsPopularQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsRecommendedPeriodQueryKey(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/recommended/:period', keyArgs] as const
}

export function getShowsRecommendedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsRecommendedPeriodQueryKey>
  >({
    queryKey: getShowsRecommendedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.recommended[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsRecommendedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsRecommendedPeriodQueryKey>
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
      ...getShowsRecommendedPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsRecommendedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsRecommendedPeriodQueryKey>
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
      ...getShowsRecommendedPeriodQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsTrendingQueryKey(
  args: InferRequestType<typeof client.shows.trending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/trending', keyArgs] as const
}

export function getShowsTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shows.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsTrendingQueryKey>
  >({
    queryKey: getShowsTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.trending.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShowsTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsTrendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.shows.trending.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShowsTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsTrendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsUpdatesIdStartDateQueryKey(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/updates/id/:start_date', keyArgs] as const
}

export function getShowsUpdatesIdStartDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsUpdatesIdStartDateQueryKey>
  >({
    queryKey: getShowsUpdatesIdStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.updates.id[':start_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsUpdatesIdStartDateQueryKey>
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
      ...getShowsUpdatesIdStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsUpdatesIdStartDateQueryKey>
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
      ...getShowsUpdatesIdStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsUpdatesStartDateQueryKey(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/updates/:start_date', keyArgs] as const
}

export function getShowsUpdatesStartDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsUpdatesStartDateQueryKey>
  >({
    queryKey: getShowsUpdatesStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.updates[':start_date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsUpdatesStartDateQueryKey>
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
      ...getShowsUpdatesStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsUpdatesStartDateQueryKey>
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
      ...getShowsUpdatesStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsWatchedPeriodQueryKey(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/watched/:period', keyArgs] as const
}

export function getShowsWatchedPeriodQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsWatchedPeriodQueryKey>
  >({
    queryKey: getShowsWatchedPeriodQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows.watched[':period'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsWatchedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsWatchedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsWatchedPeriodQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsWatchedPeriodQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdQueryKey(args: InferRequestType<(typeof client.shows)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id', keyArgs] as const
}

export function getShowsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.shows)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdQueryKey>
  >({
    queryKey: getShowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdAliasesQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/aliases', keyArgs] as const
}

export function getShowsIdAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdAliasesQueryKey>
  >({
    queryKey: getShowsIdAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].aliases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdAliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdCertificationsQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/certifications', keyArgs] as const
}

export function getShowsIdCertificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdCertificationsQueryKey>
  >({
    queryKey: getShowsIdCertificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].certifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdCertifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdCertificationsQueryKey>
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
      ...getShowsIdCertificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdCertifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdCertificationsQueryKey>
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
      ...getShowsIdCertificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdCommentsSortQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/comments/:sort', keyArgs] as const
}

export function getShowsIdCommentsSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdCommentsSortQueryKey>
  >({
    queryKey: getShowsIdCommentsSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].comments[':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdCommentsSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdCommentsSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdCommentsSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdCommentsSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdLastEpisodeQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/last_episode', keyArgs] as const
}

export function getShowsIdLastEpisodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdLastEpisodeQueryKey>
  >({
    queryKey: getShowsIdLastEpisodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].last_episode.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdLastEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdLastEpisodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdLastEpisodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdLastEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdLastEpisodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdLastEpisodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdListsTypeSortQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/lists/:type/:sort', keyArgs] as const
}

export function getShowsIdListsTypeSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdListsTypeSortQueryKey>
  >({
    queryKey: getShowsIdListsTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].lists[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdListsTypeSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdListsTypeSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdListsTypeSortQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdListsTypeSortQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdNextEpisodeQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/next_episode', keyArgs] as const
}

export function getShowsIdNextEpisodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdNextEpisodeQueryKey>
  >({
    queryKey: getShowsIdNextEpisodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].next_episode.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdNextEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdNextEpisodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdNextEpisodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdNextEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdNextEpisodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdNextEpisodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdPeopleQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/people', keyArgs] as const
}

export function getShowsIdPeopleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdPeopleQueryKey>
  >({
    queryKey: getShowsIdPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].people.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdPeopleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdPeopleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdProgressCollectionQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/progress/collection', keyArgs] as const
}

export function getShowsIdProgressCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdProgressCollectionQueryKey>
  >({
    queryKey: getShowsIdProgressCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].progress.collection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdProgressCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdProgressCollectionQueryKey>
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
      ...getShowsIdProgressCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdProgressCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdProgressCollectionQueryKey>
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
      ...getShowsIdProgressCollectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdProgressWatchedQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/progress/watched', keyArgs] as const
}

export function getShowsIdProgressWatchedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdProgressWatchedQueryKey>
  >({
    queryKey: getShowsIdProgressWatchedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].progress.watched.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdProgressWatched<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdProgressWatchedQueryKey>
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
      ...getShowsIdProgressWatchedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdProgressWatched<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdProgressWatchedQueryKey>
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
      ...getShowsIdProgressWatchedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostShowsIdProgressWatchedResetMutationKey() {
  return ['shows', '/shows/:id/progress/watched/reset', 'POST'] as const
}

export function getPostShowsIdProgressWatchedResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShowsIdProgressWatchedResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>,
    ) {
      return parseResponse(client.shows[':id'].progress.watched.reset.$post(args, options))
    },
  })
}

export function usePostShowsIdProgressWatchedReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShowsIdProgressWatchedResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteShowsIdProgressWatchedResetMutationKey() {
  return ['shows', '/shows/:id/progress/watched/reset', 'DELETE'] as const
}

export function getDeleteShowsIdProgressWatchedResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShowsIdProgressWatchedResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shows)[':id']['progress']['watched']['reset']['$delete']
      >,
    ) {
      return parseResponse(client.shows[':id'].progress.watched.reset.$delete(args, options))
    },
  })
}

export function useDeleteShowsIdProgressWatchedReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.shows)[':id']['progress']['watched']['reset']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.shows)[':id']['progress']['watched']['reset']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteShowsIdProgressWatchedResetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getShowsIdRatingsQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/ratings', keyArgs] as const
}

export function getShowsIdRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdRatingsQueryKey>
  >({
    queryKey: getShowsIdRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].ratings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdRatingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdRatingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdRelatedQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/related', keyArgs] as const
}

export function getShowsIdRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdRelatedQueryKey>
  >({
    queryKey: getShowsIdRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].related.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdRelatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdRelatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdSeasonsQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons', keyArgs] as const
}

export function getShowsIdSeasonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsQueryKey>
  >({
    queryKey: getShowsIdSeasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdSeasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdSeasonsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season', keyArgs] as const
}

export function getShowsIdSeasonsSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdSeasonsSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdSeasonsSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonCommentsSortQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/comments/:sort', keyArgs] as const
}

export function getShowsIdSeasonsSeasonCommentsSortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonCommentsSortQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonCommentsSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].comments[':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonCommentsSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonCommentsSortQueryKey>
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
      ...getShowsIdSeasonsSeasonCommentsSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonCommentsSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonCommentsSortQueryKey>
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
      ...getShowsIdSeasonsSeasonCommentsSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/comments/:sort', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].comments[':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisodeCommentsSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisodeCommentsSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey(
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

export function getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].lists[':type'][':sort'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/people', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].people.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisodePeople<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisodePeople<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/ratings', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisodeRatings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisodeRatings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/stats', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisodeStats<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisodeStats<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey(
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

export function getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].translations[':language'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/watching', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].watching.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonEpisodesEpisodeWatching<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonEpisodesEpisodeWatching<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey>
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
      ...getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonListsTypeSortQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/lists/:type/:sort', keyArgs] as const
}

export function getShowsIdSeasonsSeasonListsTypeSortQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonListsTypeSortQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonListsTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].lists[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonListsTypeSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonListsTypeSortQueryKey>
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
      ...getShowsIdSeasonsSeasonListsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonListsTypeSort<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonListsTypeSortQueryKey>
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
      ...getShowsIdSeasonsSeasonListsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonPeopleQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/people', keyArgs] as const
}

export function getShowsIdSeasonsSeasonPeopleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonPeopleQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonPeopleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].people.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonPeopleQueryKey>
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
      ...getShowsIdSeasonsSeasonPeopleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonPeopleQueryKey>
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
      ...getShowsIdSeasonsSeasonPeopleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonRatingsQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/ratings', keyArgs] as const
}

export function getShowsIdSeasonsSeasonRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonRatingsQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonRatingsQueryKey>
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
      ...getShowsIdSeasonsSeasonRatingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonRatingsQueryKey>
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
      ...getShowsIdSeasonsSeasonRatingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonStatsQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/stats', keyArgs] as const
}

export function getShowsIdSeasonsSeasonStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonStatsQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonStatsQueryKey>
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
      ...getShowsIdSeasonsSeasonStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonStatsQueryKey>
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
      ...getShowsIdSeasonsSeasonStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonTranslationsLanguageQueryKey(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/translations/:language', keyArgs] as const
}

export function getShowsIdSeasonsSeasonTranslationsLanguageQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonTranslationsLanguageQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonTranslationsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].translations[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonTranslationsLanguage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonTranslationsLanguageQueryKey>
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
      ...getShowsIdSeasonsSeasonTranslationsLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonTranslationsLanguage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonTranslationsLanguageQueryKey>
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
      ...getShowsIdSeasonsSeasonTranslationsLanguageQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonWatchingQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/seasons/:season/watching', keyArgs] as const
}

export function getShowsIdSeasonsSeasonWatchingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonWatchingQueryKey>
  >({
    queryKey: getShowsIdSeasonsSeasonWatchingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].watching.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdSeasonsSeasonWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonWatchingQueryKey>
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
      ...getShowsIdSeasonsSeasonWatchingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdSeasonsSeasonWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdSeasonsSeasonWatchingQueryKey>
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
      ...getShowsIdSeasonsSeasonWatchingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdStatsQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/stats', keyArgs] as const
}

export function getShowsIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdStatsQueryKey>
  >({
    queryKey: getShowsIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdStudiosQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/studios', keyArgs] as const
}

export function getShowsIdStudiosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdStudiosQueryKey>
  >({
    queryKey: getShowsIdStudiosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].studios.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdStudiosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdStudiosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdStudiosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdStudiosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getShowsIdTranslationsLanguageQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/translations/:language', keyArgs] as const
}

export function getShowsIdTranslationsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdTranslationsLanguageQueryKey>
  >({
    queryKey: getShowsIdTranslationsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].translations[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useShowsIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdTranslationsLanguageQueryKey>
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
      ...getShowsIdTranslationsLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShowsIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdTranslationsLanguageQueryKey>
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
      ...getShowsIdTranslationsLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getShowsIdWatchingQueryKey(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shows', '/shows/:id/watching', keyArgs] as const
}

export function getShowsIdWatchingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdWatchingQueryKey>
  >({
    queryKey: getShowsIdWatchingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shows[':id'].watching.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useShowsIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdWatchingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShowsIdWatchingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShowsIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShowsIdWatchingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShowsIdWatchingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSyncCollectionMutationKey() {
  return ['sync', '/sync/collection', 'POST'] as const
}

export function getPostSyncCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.collection.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.collection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.collection.$post>) {
      return parseResponse(client.sync.collection.$post(args, options))
    },
  })
}

export function usePostSyncCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.collection.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sync.collection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncCollectionMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncCollectionRemoveMutationKey() {
  return ['sync', '/sync/collection/remove', 'POST'] as const
}

export function getPostSyncCollectionRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.collection.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sync.collection.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncCollectionRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.collection.remove.$post>) {
      return parseResponse(client.sync.collection.remove.$post(args, options))
    },
  })
}

export function usePostSyncCollectionRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.collection.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sync.collection.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncCollectionRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getSyncCollectionTypeQueryKey(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/collection/:type', keyArgs] as const
}

export function getSyncCollectionTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncCollectionTypeQueryKey>
  >({
    queryKey: getSyncCollectionTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.collection[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSyncCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncCollectionTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSyncCollectionTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSyncCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncCollectionTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSyncCollectionTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSyncHistoryMutationKey() {
  return ['sync', '/sync/history', 'POST'] as const
}

export function getPostSyncHistoryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.history.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.history.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.history.$post>) {
      return parseResponse(client.sync.history.$post(args, options))
    },
  })
}

export function usePostSyncHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.history.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sync.history.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncHistoryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSyncHistoryRemoveMutationKey() {
  return ['sync', '/sync/history/remove', 'POST'] as const
}

export function getPostSyncHistoryRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.history.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.history.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncHistoryRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.history.remove.$post>) {
      return parseResponse(client.sync.history.remove.$post(args, options))
    },
  })
}

export function usePostSyncHistoryRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.history.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sync.history.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncHistoryRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getSyncHistoryTypeIdQueryKey(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/history/:type/:id', keyArgs] as const
}

export function getSyncHistoryTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncHistoryTypeIdQueryKey>
  >({
    queryKey: getSyncHistoryTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.history[':type'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSyncHistoryTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncHistoryTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSyncHistoryTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSyncHistoryTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncHistoryTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSyncHistoryTypeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSyncLastActivitiesQueryKey(
  args: InferRequestType<typeof client.sync.last_activities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/last_activities', keyArgs] as const
}

export function getSyncLastActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sync.last_activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSyncLastActivitiesQueryKey>
  >({
    queryKey: getSyncLastActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.last_activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSyncLastActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sync.last_activities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncLastActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSyncLastActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSyncLastActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sync.last_activities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncLastActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSyncLastActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSyncPlaybackIdMutationKey() {
  return ['sync', '/sync/playback/:id', 'DELETE'] as const
}

export function getDeleteSyncPlaybackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sync.playback)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSyncPlaybackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sync.playback)[':id']['$delete']>) {
      return parseResponse(client.sync.playback[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSyncPlaybackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.playback)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sync.playback)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSyncPlaybackIdMutationOptions<TError, TOnMutateResult>(
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

export function getSyncPlaybackTypeQueryKey(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/playback/:type', keyArgs] as const
}

export function getSyncPlaybackTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncPlaybackTypeQueryKey>
  >({
    queryKey: getSyncPlaybackTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.playback[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSyncPlaybackType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncPlaybackTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSyncPlaybackTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSyncPlaybackType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncPlaybackTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSyncPlaybackTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSyncRatingsMutationKey() {
  return ['sync', '/sync/ratings', 'POST'] as const
}

export function getPostSyncRatingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ratings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.ratings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncRatingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.ratings.$post>) {
      return parseResponse(client.sync.ratings.$post(args, options))
    },
  })
}

export function usePostSyncRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ratings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sync.ratings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncRatingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSyncRatingsRemoveMutationKey() {
  return ['sync', '/sync/ratings/remove', 'POST'] as const
}

export function getPostSyncRatingsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ratings.remove.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.ratings.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncRatingsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.ratings.remove.$post>) {
      return parseResponse(client.sync.ratings.remove.$post(args, options))
    },
  })
}

export function usePostSyncRatingsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.ratings.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sync.ratings.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncRatingsRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getSyncRatingsTypeRatingQueryKey(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/ratings/:type/:rating', keyArgs] as const
}

export function getSyncRatingsTypeRatingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncRatingsTypeRatingQueryKey>
  >({
    queryKey: getSyncRatingsTypeRatingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.ratings[':type'][':rating'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSyncRatingsTypeRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncRatingsTypeRatingQueryKey>
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
      ...getSyncRatingsTypeRatingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSyncRatingsTypeRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncRatingsTypeRatingQueryKey>
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
      ...getSyncRatingsTypeRatingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSyncRecommendationsMutationKey() {
  return ['sync', '/sync/recommendations', 'POST'] as const
}

export function getPostSyncRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.recommendations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sync.recommendations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncRecommendationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.recommendations.$post>) {
      return parseResponse(client.sync.recommendations.$post(args, options))
    },
  })
}

export function usePostSyncRecommendations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.recommendations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sync.recommendations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncRecommendationsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncRecommendationsRemoveMutationKey() {
  return ['sync', '/sync/recommendations/remove', 'POST'] as const
}

export function getPostSyncRecommendationsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.recommendations.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sync.recommendations.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncRecommendationsRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.recommendations.remove.$post>) {
      return parseResponse(client.sync.recommendations.remove.$post(args, options))
    },
  })
}

export function usePostSyncRecommendationsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sync.recommendations.remove.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sync.recommendations.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncRecommendationsRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncRecommendationsReorderMutationKey() {
  return ['sync', '/sync/recommendations/reorder', 'POST'] as const
}

export function getPostSyncRecommendationsReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.recommendations.reorder.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sync.recommendations.reorder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncRecommendationsReorderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.recommendations.reorder.$post>) {
      return parseResponse(client.sync.recommendations.reorder.$post(args, options))
    },
  })
}

export function usePostSyncRecommendationsReorder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.sync.recommendations.reorder.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.sync.recommendations.reorder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncRecommendationsReorderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSyncRecommendationsTypeSortQueryKey(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/recommendations/:type/:sort', keyArgs] as const
}

export function getSyncRecommendationsTypeSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncRecommendationsTypeSortQueryKey>
  >({
    queryKey: getSyncRecommendationsTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.recommendations[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSyncRecommendationsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncRecommendationsTypeSortQueryKey>
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
      ...getSyncRecommendationsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSyncRecommendationsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncRecommendationsTypeSortQueryKey>
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
      ...getSyncRecommendationsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSyncWatchedTypeQueryKey(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/watched/:type', keyArgs] as const
}

export function getSyncWatchedTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncWatchedTypeQueryKey>
  >({
    queryKey: getSyncWatchedTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.watched[':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSyncWatchedType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncWatchedTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSyncWatchedTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSyncWatchedType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncWatchedTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSyncWatchedTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSyncWatchlistMutationKey() {
  return ['sync', '/sync/watchlist', 'POST'] as const
}

export function getPostSyncWatchlistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.watchlist.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncWatchlistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.watchlist.$post>) {
      return parseResponse(client.sync.watchlist.$post(args, options))
    },
  })
}

export function usePostSyncWatchlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sync.watchlist.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncWatchlistMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncWatchlistRemoveMutationKey() {
  return ['sync', '/sync/watchlist/remove', 'POST'] as const
}

export function getPostSyncWatchlistRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.remove.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sync.watchlist.remove.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncWatchlistRemoveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.watchlist.remove.$post>) {
      return parseResponse(client.sync.watchlist.remove.$post(args, options))
    },
  })
}

export function usePostSyncWatchlistRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.remove.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sync.watchlist.remove.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncWatchlistRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncWatchlistReorderMutationKey() {
  return ['sync', '/sync/watchlist/reorder', 'POST'] as const
}

export function getPostSyncWatchlistReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.reorder.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sync.watchlist.reorder.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncWatchlistReorderMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.watchlist.reorder.$post>) {
      return parseResponse(client.sync.watchlist.reorder.$post(args, options))
    },
  })
}

export function usePostSyncWatchlistReorder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.reorder.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sync.watchlist.reorder.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSyncWatchlistReorderMutationOptions<TError, TOnMutateResult>(
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

export function getSyncWatchlistTypeSortQueryKey(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sync', '/sync/watchlist/:type/:sort', keyArgs] as const
}

export function getSyncWatchlistTypeSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncWatchlistTypeSortQueryKey>
  >({
    queryKey: getSyncWatchlistTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.watchlist[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSyncWatchlistTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncWatchlistTypeSortQueryKey>
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
      ...getSyncWatchlistTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSyncWatchlistTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSyncWatchlistTypeSortQueryKey>
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
      ...getSyncWatchlistTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersHiddenSectionQueryKey(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/hidden/:section', keyArgs] as const
}

export function getUsersHiddenSectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersHiddenSectionQueryKey>
  >({
    queryKey: getUsersHiddenSectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.hidden[':section'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersHiddenSection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersHiddenSectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersHiddenSectionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersHiddenSection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersHiddenSectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersHiddenSectionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersHiddenSectionMutationKey() {
  return ['users', '/users/hidden/:section', 'POST'] as const
}

export function getPostUsersHiddenSectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users.hidden)[':section']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersHiddenSectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users.hidden)[':section']['$post']>) {
      return parseResponse(client.users.hidden[':section'].$post(args, options))
    },
  })
}

export function usePostUsersHiddenSection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.hidden)[':section']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users.hidden)[':section']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersHiddenSectionMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersHiddenSectionRemoveMutationKey() {
  return ['users', '/users/hidden/:section/remove', 'POST'] as const
}

export function getPostUsersHiddenSectionRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.hidden)[':section']['remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.hidden)[':section']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersHiddenSectionRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.hidden)[':section']['remove']['$post']>,
    ) {
      return parseResponse(client.users.hidden[':section'].remove.$post(args, options))
    },
  })
}

export function usePostUsersHiddenSectionRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.hidden)[':section']['remove']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users.hidden)[':section']['remove']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersHiddenSectionRemoveMutationOptions<TError, TOnMutateResult>(
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

export function getUsersRequestsQueryKey(
  args: InferRequestType<typeof client.users.requests.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/requests', keyArgs] as const
}

export function getUsersRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersRequestsQueryKey>
  >({
    queryKey: getUsersRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersRequestsFollowingQueryKey(
  args: InferRequestType<typeof client.users.requests.following.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/requests/following', keyArgs] as const
}

export function getUsersRequestsFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.requests.following.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersRequestsFollowingQueryKey>
  >({
    queryKey: getUsersRequestsFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.requests.following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersRequestsFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.requests.following.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersRequestsFollowingQueryKey>
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
      ...getUsersRequestsFollowingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersRequestsFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.requests.following.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersRequestsFollowingQueryKey>
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
      ...getUsersRequestsFollowingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersRequestsIdMutationKey() {
  return ['users', '/users/requests/:id', 'POST'] as const
}

export function getPostUsersRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.requests)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users.requests)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersRequestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users.requests)[':id']['$post']>) {
      return parseResponse(client.users.requests[':id'].$post(args, options))
    },
  })
}

export function usePostUsersRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.requests)[':id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users.requests)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersRequestsIdMutationKey() {
  return ['users', '/users/requests/:id', 'DELETE'] as const
}

export function getDeleteUsersRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.requests)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users.requests)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersRequestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users.requests)[':id']['$delete']>) {
      return parseResponse(client.users.requests[':id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.requests)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users.requests)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersSavedFiltersSectionQueryKey(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/saved_filters/:section', keyArgs] as const
}

export function getUsersSavedFiltersSectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSavedFiltersSectionQueryKey>
  >({
    queryKey: getUsersSavedFiltersSectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.saved_filters[':section'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersSavedFiltersSection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSavedFiltersSectionQueryKey>
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
      ...getUsersSavedFiltersSectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersSavedFiltersSection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSavedFiltersSectionQueryKey>
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
      ...getUsersSavedFiltersSectionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersSettingsQueryKey(
  args: InferRequestType<typeof client.users.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/settings', keyArgs] as const
}

export function getUsersSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSettingsQueryKey>
  >({
    queryKey: getUsersSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.settings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.settings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id', keyArgs] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdCollectionTypeQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/collection/:type', keyArgs] as const
}

export function getUsersIdCollectionTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdCollectionTypeQueryKey>
  >({
    queryKey: getUsersIdCollectionTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].collection[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdCollectionTypeQueryKey>
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
      ...getUsersIdCollectionTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdCollectionTypeQueryKey>
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
      ...getUsersIdCollectionTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersIdCommentsCommentTypeTypeQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/comments/:comment_type/:type', keyArgs] as const
}

export function getUsersIdCommentsCommentTypeTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdCommentsCommentTypeTypeQueryKey>
  >({
    queryKey: getUsersIdCommentsCommentTypeTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].comments[':comment_type'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdCommentsCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdCommentsCommentTypeTypeQueryKey>
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
      ...getUsersIdCommentsCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdCommentsCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdCommentsCommentTypeTypeQueryKey>
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
      ...getUsersIdCommentsCommentTypeTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersIdFollowMutationKey() {
  return ['users', '/users/:id/follow', 'POST'] as const
}

export function getPostUsersIdFollowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['follow']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['follow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdFollowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['follow']['$post']>) {
      return parseResponse(client.users[':id'].follow.$post(args, options))
    },
  })
}

export function usePostUsersIdFollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['follow']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['follow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdFollowMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersIdFollowMutationKey() {
  return ['users', '/users/:id/follow', 'DELETE'] as const
}

export function getDeleteUsersIdFollowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['follow']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['follow']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdFollowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['follow']['$delete']>) {
      return parseResponse(client.users[':id'].follow.$delete(args, options))
    },
  })
}

export function useDeleteUsersIdFollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['follow']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':id']['follow']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdFollowMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdFollowersQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/followers', keyArgs] as const
}

export function getUsersIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdFollowersQueryKey>
  >({
    queryKey: getUsersIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdFollowersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdFollowingQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/following', keyArgs] as const
}

export function getUsersIdFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdFollowingQueryKey>
  >({
    queryKey: getUsersIdFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdFollowingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['following']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdFollowingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdFriendsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/friends', keyArgs] as const
}

export function getUsersIdFriendsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdFriendsQueryKey>
  >({
    queryKey: getUsersIdFriendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].friends.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdFriends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdFriendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdFriendsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdFriends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdFriendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdFriendsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdHistoryTypeItemIdQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/history/:type/:item_id', keyArgs] as const
}

export function getUsersIdHistoryTypeItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdHistoryTypeItemIdQueryKey>
  >({
    queryKey: getUsersIdHistoryTypeItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].history[':type'][':item_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdHistoryTypeItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdHistoryTypeItemIdQueryKey>
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
      ...getUsersIdHistoryTypeItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdHistoryTypeItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdHistoryTypeItemIdQueryKey>
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
      ...getUsersIdHistoryTypeItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersIdLikesTypeQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/likes/:type', keyArgs] as const
}

export function getUsersIdLikesTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdLikesTypeQueryKey>
  >({
    queryKey: getUsersIdLikesTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].likes[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdLikesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdLikesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdLikesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdLikesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdLikesTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdLikesTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdListsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists', keyArgs] as const
}

export function getUsersIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsQueryKey>
  >({
    queryKey: getUsersIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersIdListsMutationKey() {
  return ['users', '/users/:id/lists', 'POST'] as const
}

export function getPostUsersIdListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':id']['lists']['$post']>) {
      return parseResponse(client.users[':id'].lists.$post(args, options))
    },
  })
}

export function usePostUsersIdLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['lists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['lists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdListsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdListsCollaborationsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/collaborations', keyArgs] as const
}

export function getUsersIdListsCollaborationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsCollaborationsQueryKey>
  >({
    queryKey: getUsersIdListsCollaborationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].lists.collaborations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdListsCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsCollaborationsQueryKey>
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
      ...getUsersIdListsCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdListsCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsCollaborationsQueryKey>
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
      ...getUsersIdListsCollaborationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersIdListsReorderMutationKey() {
  return ['users', '/users/:id/lists/reorder', 'POST'] as const
}

export function getPostUsersIdListsReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists']['reorder']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['lists']['reorder']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdListsReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['lists']['reorder']['$post']>,
    ) {
      return parseResponse(client.users[':id'].lists.reorder.$post(args, options))
    },
  })
}

export function usePostUsersIdListsReorder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['lists']['reorder']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['lists']['reorder']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdListsReorderMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdListsListIdQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id', keyArgs] as const
}

export function getUsersIdListsListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsListIdQueryKey>
  >({
    queryKey: getUsersIdListsListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdListsListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdListsListIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdListsListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdListsListIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUsersIdListsListIdMutationKey() {
  return ['users', '/users/:id/lists/:list_id', 'PUT'] as const
}

export function getPutUsersIdListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersIdListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$put']>,
    ) {
      return parseResponse(client.users[':id'].lists[':list_id'].$put(args, options))
    },
  })
}

export function usePutUsersIdListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersIdListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersIdListsListIdMutationKey() {
  return ['users', '/users/:id/lists/:list_id', 'DELETE'] as const
}

export function getDeleteUsersIdListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>,
    ) {
      return parseResponse(client.users[':id'].lists[':list_id'].$delete(args, options))
    },
  })
}

export function useDeleteUsersIdListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdListsListIdCommentsSortQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id/comments/:sort', keyArgs] as const
}

export function getUsersIdListsListIdCommentsSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUsersIdListsListIdCommentsSortQueryKey>
  >({
    queryKey: getUsersIdListsListIdCommentsSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].comments[':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdListsListIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdCommentsSortQueryKey>
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
      ...getUsersIdListsListIdCommentsSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdListsListIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdCommentsSortQueryKey>
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
      ...getUsersIdListsListIdCommentsSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersIdListsListIdItemsMutationKey() {
  return ['users', '/users/:id/lists/:list_id/items', 'POST'] as const
}

export function getPostUsersIdListsListIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdListsListIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>,
    ) {
      return parseResponse(client.users[':id'].lists[':list_id'].items.$post(args, options))
    },
  })
}

export function usePostUsersIdListsListIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdListsListIdItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersIdListsListIdItemsRemoveMutationKey() {
  return ['users', '/users/:id/lists/:list_id/items/remove', 'POST'] as const
}

export function getPostUsersIdListsListIdItemsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdListsListIdItemsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id']['lists'][':list_id']['items']['remove']['$post']
      >,
    ) {
      return parseResponse(client.users[':id'].lists[':list_id'].items.remove.$post(args, options))
    },
  })
}

export function usePostUsersIdListsListIdItemsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.users)[':id']['lists'][':list_id']['items']['remove']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdListsListIdItemsRemoveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersIdListsListIdItemsReorderMutationKey() {
  return ['users', '/users/:id/lists/:list_id/items/reorder', 'POST'] as const
}

export function getPostUsersIdListsListIdItemsReorderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.users)[':id']['lists'][':list_id']['items']['reorder']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdListsListIdItemsReorderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':id']['lists'][':list_id']['items']['reorder']['$post']
      >,
    ) {
      return parseResponse(client.users[':id'].lists[':list_id'].items.reorder.$post(args, options))
    },
  })
}

export function usePostUsersIdListsListIdItemsReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.users)[':id']['lists'][':list_id']['items']['reorder']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdListsListIdItemsReorderMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdListsListIdItemsTypeQueryKey(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id/items/:type', keyArgs] as const
}

export function getUsersIdListsListIdItemsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsListIdItemsTypeQueryKey>
  >({
    queryKey: getUsersIdListsListIdItemsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].items[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdListsListIdItemsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdItemsTypeQueryKey>
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
      ...getUsersIdListsListIdItemsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdListsListIdItemsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdItemsTypeQueryKey>
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
      ...getUsersIdListsListIdItemsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersIdListsListIdLikeMutationKey() {
  return ['users', '/users/:id/lists/:list_id/like', 'POST'] as const
}

export function getPostUsersIdListsListIdLikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersIdListsListIdLikeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>,
    ) {
      return parseResponse(client.users[':id'].lists[':list_id'].like.$post(args, options))
    },
  })
}

export function usePostUsersIdListsListIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersIdListsListIdLikeMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersIdListsListIdLikeMutationKey() {
  return ['users', '/users/:id/lists/:list_id/like', 'DELETE'] as const
}

export function getDeleteUsersIdListsListIdLikeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdListsListIdLikeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$delete']>,
    ) {
      return parseResponse(client.users[':id'].lists[':list_id'].like.$delete(args, options))
    },
  })
}

export function useDeleteUsersIdListsListIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['like']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdListsListIdLikeMutationOptions<TError, TOnMutateResult>(
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

export function getUsersIdListsListIdLikesQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/lists/:list_id/likes', keyArgs] as const
}

export function getUsersIdListsListIdLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsListIdLikesQueryKey>
  >({
    queryKey: getUsersIdListsListIdLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].likes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdListsListIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdLikesQueryKey>
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
      ...getUsersIdListsListIdLikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdListsListIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdListsListIdLikesQueryKey>
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
      ...getUsersIdListsListIdLikesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersIdRatingsTypeRatingQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/ratings/:type/:rating', keyArgs] as const
}

export function getUsersIdRatingsTypeRatingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdRatingsTypeRatingQueryKey>
  >({
    queryKey: getUsersIdRatingsTypeRatingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].ratings[':type'][':rating'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdRatingsTypeRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdRatingsTypeRatingQueryKey>
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
      ...getUsersIdRatingsTypeRatingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdRatingsTypeRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdRatingsTypeRatingQueryKey>
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
      ...getUsersIdRatingsTypeRatingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersIdRecommendationsTypeSortQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/recommendations/:type/:sort', keyArgs] as const
}

export function getUsersIdRecommendationsTypeSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdRecommendationsTypeSortQueryKey>
  >({
    queryKey: getUsersIdRecommendationsTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].recommendations[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdRecommendationsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdRecommendationsTypeSortQueryKey>
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
      ...getUsersIdRecommendationsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdRecommendationsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdRecommendationsTypeSortQueryKey>
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
      ...getUsersIdRecommendationsTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersIdStatsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/stats', keyArgs] as const
}

export function getUsersIdStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdStatsQueryKey>
  >({
    queryKey: getUsersIdStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].stats.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdStatsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdWatchedTypeQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/watched/:type', keyArgs] as const
}

export function getUsersIdWatchedTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWatchedTypeQueryKey>
  >({
    queryKey: getUsersIdWatchedTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].watched[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdWatchedType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdWatchedTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdWatchedTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdWatchedType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdWatchedTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdWatchedTypeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdWatchingQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/watching', keyArgs] as const
}

export function getUsersIdWatchingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWatchingQueryKey>
  >({
    queryKey: getUsersIdWatchingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].watching.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdWatchingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdWatchingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdWatchingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdWatchingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdWatchlistTypeSortQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:id/watchlist/:type/:sort', keyArgs] as const
}

export function getUsersIdWatchlistTypeSortQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWatchlistTypeSortQueryKey>
  >({
    queryKey: getUsersIdWatchlistTypeSortQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].watchlist[':type'][':sort'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdWatchlistTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdWatchlistTypeSortQueryKey>
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
      ...getUsersIdWatchlistTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersIdWatchlistTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdWatchlistTypeSortQueryKey>
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
      ...getUsersIdWatchlistTypeSortQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
