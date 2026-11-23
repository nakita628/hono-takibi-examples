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

export function createCalendarsAllDvdStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsAllDvdStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsAllMoviesStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.calendars.all.movies)[':start_date'][':days']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsAllMoviesStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsAllShowsNewStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsAllShowsNewStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsAllShowsPremieresStartDateDays<
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
  args: () => InferRequestType<
    (typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsAllShowsPremieresStartDateDaysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsAllShowsStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsAllShowsStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsMyDvdStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsMyDvdStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsMyMoviesStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsMyMoviesStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsMyShowsNewStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsMyShowsNewStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsMyShowsPremieresStartDateDays<
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
  args: () => InferRequestType<
    (typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsMyShowsPremieresStartDateDaysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createCalendarsMyShowsStartDateDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCalendarsMyShowsStartDateDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCertificationsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.certifications)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCertificationsTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCheckin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$post>>>>>,
        TError,
        InferRequestType<typeof client.checkin.$post>,
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
    const mutationDefaults = getPostCheckinMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCheckin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCheckinMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createCommentsRecentCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCommentsRecentCommentTypeTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCommentsTrendingCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCommentsTrendingCommentTypeTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCommentsUpdatesCommentTypeType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCommentsUpdatesCommentTypeTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createCommentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCommentsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCommentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCommentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createCommentsIdItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':id']['item']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsIdItemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCommentsIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsIdLikeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteCommentsIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCommentsIdLikeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createCommentsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':id']['likes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsIdLikesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createCommentsIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':id']['replies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCommentsIdRepliesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostCommentsIdReplies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCommentsIdRepliesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createCountriesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.countries)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountriesTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createGenresType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.genres)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createLanguagesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.languages)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLanguagesTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createListsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lists.popular.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsPopularQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createListsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lists.trending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createListsIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdCommentsSortQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createListsIdItemsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdItemsTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createListsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':id']['likes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdLikesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.movies.anticipated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesAnticipatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesBoxoffice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.movies.boxoffice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesBoxofficeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies.collected)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesCollectedPeriodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies.played)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesPlayedPeriodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.movies.popular.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesPopularQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesRecommendedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies.recommended)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesRecommendedPeriodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.movies.trending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesUpdatesIdStartDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesUpdatesStartDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies.watched)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesWatchedPeriodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdAliasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesIdCommentsSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesIdListsTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['people']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdPeopleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdRatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['related']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdRelatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesIdReleasesCountry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesIdReleasesCountryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['studios']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdStudiosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMoviesIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMoviesIdTranslationsLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createMoviesIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movies)[':id']['watching']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesIdWatchingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.networks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.oauth.authorize.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthAuthorizeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOauthDeviceCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthDeviceCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOauthDeviceToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthDeviceTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthRevokeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPeopleUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPeopleUpdatesIdStartDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPeopleUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people.updates)[':start_date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPeopleUpdatesStartDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPeopleIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPeopleIdListsTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPeopleIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['movies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdMoviesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPeopleIdShows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.people)[':id']['shows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPeopleIdShowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createRecommendationsMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recommendations.movies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRecommendationsMoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRecommendationsMoviesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecommendationsMoviesIdMutationOptions<
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

export function createRecommendationsShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recommendations.shows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRecommendationsShowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRecommendationsShowsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecommendationsShowsIdMutationOptions<
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

export function createPostScrobblePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrobblePauseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostScrobbleStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrobbleStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostScrobbleStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrobbleStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSearchIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchIdTypeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createSearchType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.search)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shows.anticipated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsAnticipatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows.collected)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsCollectedPeriodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows.played)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsPlayedPeriodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shows.popular.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsPopularQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsRecommendedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows.recommended)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsRecommendedPeriodQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shows.trending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsUpdatesIdStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsUpdatesIdStartDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsUpdatesStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsUpdatesStartDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows.watched)[':period']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsWatchedPeriodQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdAliasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdCertifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdCertificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdCommentsSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdCommentsSortQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdLastEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdLastEpisodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdListsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdListsTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdNextEpisode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdNextEpisodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['people']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdPeopleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdProgressCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdProgressCollectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdProgressWatched<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdProgressWatchedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostShowsIdProgressWatchedReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostShowsIdProgressWatchedResetMutationOptions<
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

export function createDeleteShowsIdProgressWatchedReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteShowsIdProgressWatchedResetMutationOptions<
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

export function createShowsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdRatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['related']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdRelatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdSeasonsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdSeasonsSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonCommentsSort<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonCommentsSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisode<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisodeCommentsSort<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSort<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisodePeople<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisodeRatings<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisodeStats<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguage<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonEpisodesEpisodeWatching<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonListsTypeSort<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonListsTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['people']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonPeopleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonRatingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonStatsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonTranslationsLanguage<
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
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonTranslationsLanguageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdSeasonsSeasonWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.shows)[':id']['seasons'][':season']['watching']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdSeasonsSeasonWatchingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['studios']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdStudiosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createShowsIdTranslationsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getShowsIdTranslationsLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createShowsIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shows)[':id']['watching']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShowsIdWatchingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSyncCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncCollectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncCollectionRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncCollectionRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSyncCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sync.collection)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncCollectionTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSyncHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncHistoryRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncHistoryRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSyncHistoryTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncHistoryTypeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createSyncLastActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sync.last_activities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncLastActivitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteSyncPlaybackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSyncPlaybackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSyncPlaybackType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sync.playback)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncPlaybackTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSyncRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncRatingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncRatingsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncRatingsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSyncRatingsTypeRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSyncRatingsTypeRatingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSyncRecommendations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncRecommendationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncRecommendationsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncRecommendationsRemoveMutationOptions<
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

export function createPostSyncRecommendationsReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncRecommendationsReorderMutationOptions<
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

export function createSyncRecommendationsTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSyncRecommendationsTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createSyncWatchedType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sync.watched)[':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncWatchedTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSyncWatchlist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncWatchlistMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncWatchlistRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncWatchlistRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSyncWatchlistReorder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncWatchlistReorderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSyncWatchlistTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSyncWatchlistTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createUsersHiddenSection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users.hidden)[':section']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersHiddenSectionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersHiddenSection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersHiddenSectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersHiddenSectionRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersHiddenSectionRemoveMutationOptions<
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

export function createUsersRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.requests.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersRequestsFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.requests.following.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersRequestsFollowingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsersSavedFiltersSection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersSavedFiltersSectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createUsersSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdCollectionTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createUsersIdCommentsCommentTypeType<
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
  args: () => InferRequestType<
    (typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdCommentsCommentTypeTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersIdFollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdFollowMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersIdFollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdFollowMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['following']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdFollowingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdFriends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['friends']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdFriendsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdHistoryTypeItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':id']['history'][':type'][':item_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdHistoryTypeItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createUsersIdLikesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdLikesTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsersIdLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsersIdListsCollaborations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdListsCollaborationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersIdListsReorder<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdListsReorderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsersIdListsListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdListsListIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutUsersIdListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersIdListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersIdListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsersIdListsListIdCommentsSort<
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
  args: () => InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdListsListIdCommentsSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersIdListsListIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdListsListIdItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersIdListsListIdItemsRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdListsListIdItemsRemoveMutationOptions<
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

export function createPostUsersIdListsListIdItemsReorder<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdListsListIdItemsReorderMutationOptions<
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

export function createUsersIdListsListIdItemsType<
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
  args: () => InferRequestType<
    (typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdListsListIdItemsTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersIdListsListIdLike<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersIdListsListIdLikeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersIdListsListIdLike<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdListsListIdLikeMutationOptions<
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

export function createUsersIdListsListIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdListsListIdLikesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createUsersIdRatingsTypeRating<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdRatingsTypeRatingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createUsersIdRecommendationsTypeSort<
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
  args: () => InferRequestType<
    (typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdRecommendationsTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createUsersIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['stats']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdStatsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdWatchedType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdWatchedTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['watching']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdWatchingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsersIdWatchlistTypeSort<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersIdWatchlistTypeSortQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
