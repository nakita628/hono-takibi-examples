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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/all/dvd/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllDvdStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsAllDvdStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.all.dvd[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>
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
                  ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsAllDvdStartDateDaysQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars.all.dvd)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllDvdStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsAllDvdStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.all.dvd[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsAllMoviesStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/all/movies/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllMoviesStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsAllMoviesStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.all.movies[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsAllMoviesStartDateDaysQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars.all.movies)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllMoviesStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsAllMoviesStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.all.movies[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsAllShowsNewStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/all/shows/new/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllShowsNewStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsAllShowsNewStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.all.shows.new[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']
                  >
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
                  ReturnType<
                    (typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsAllShowsNewStartDateDaysQueryKey>
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
          Awaited<
            ReturnType<(typeof client.calendars.all.shows.new)[':start_date'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllShowsNewStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsAllShowsNewStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.all.shows.new[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsAllShowsPremieresStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/all/shows/premieres/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllShowsPremieresStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsAllShowsPremieresStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.all.shows.premieres[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows.premieres)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCalendarsAllShowsPremieresStartDateDaysQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsAllShowsPremieresStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.all.shows.premieres[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsAllShowsStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/all/shows/:start_date/:days', keyArgs] as const
}

export function getCalendarsAllShowsStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsAllShowsStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.all.shows[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsAllShowsStartDateDaysQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars.all.shows)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsAllShowsStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsAllShowsStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.all.shows[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsMyDvdStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/my/dvd/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyDvdStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsMyDvdStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.my.dvd[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>
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
                  ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsMyDvdStartDateDaysQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars.my.dvd)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyDvdStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsMyDvdStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.my.dvd[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsMyMoviesStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/my/movies/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyMoviesStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsMyMoviesStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.my.movies[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsMyMoviesStartDateDaysQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars.my.movies)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyMoviesStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsMyMoviesStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.my.movies[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsMyShowsNewStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/my/shows/new/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyShowsNewStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsMyShowsNewStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.my.shows.new[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsMyShowsNewStartDateDaysQueryKey>
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
          Awaited<
            ReturnType<(typeof client.calendars.my.shows.new)[':start_date'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyShowsNewStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsMyShowsNewStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.my.shows.new[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsMyShowsPremieresStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/my/shows/premieres/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyShowsPremieresStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsMyShowsPremieresStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.my.shows.premieres[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCalendarsMyShowsPremieresStartDateDaysQueryKey>
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
          Awaited<
            ReturnType<(typeof client.calendars.my.shows.premieres)[':start_date'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyShowsPremieresStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsMyShowsPremieresStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.my.shows.premieres[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCalendarsMyShowsStartDateDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['calendars', '/calendars/my/shows/:start_date/:days', keyArgs] as const
}

export function getCalendarsMyShowsStartDateDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCalendarsMyShowsStartDateDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calendars.my.shows[':start_date'][':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCalendarsMyShowsStartDateDaysQueryKey>
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
          Awaited<ReturnType<(typeof client.calendars.my.shows)[':start_date'][':days']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCalendarsMyShowsStartDateDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCalendarsMyShowsStartDateDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calendars.my.shows[':start_date'][':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCertificationsTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certifications)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['certifications', '/certifications/:type', keyArgs] as const
}

export function getCertificationsTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certifications)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificationsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certifications[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificationsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certifications)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCertificationsTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.certifications)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificationsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificationsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certifications[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.checkin.$post>,
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkin.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.checkin.$delete>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.comments.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['comments', '/comments/recent/:comment_type/:type', keyArgs] as const
}

export function getCommentsRecentCommentTypeTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsRecentCommentTypeTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments.recent[':comment_type'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>
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
                  ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommentsRecentCommentTypeTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.comments.recent)[':comment_type'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsRecentCommentTypeTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsRecentCommentTypeTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments.recent[':comment_type'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommentsTrendingCommentTypeTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['comments', '/comments/trending/:comment_type/:type', keyArgs] as const
}

export function getCommentsTrendingCommentTypeTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsTrendingCommentTypeTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments.trending[':comment_type'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommentsTrendingCommentTypeTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.comments.trending)[':comment_type'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsTrendingCommentTypeTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsTrendingCommentTypeTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments.trending[':comment_type'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommentsUpdatesCommentTypeTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['comments', '/comments/updates/:comment_type/:type', keyArgs] as const
}

export function getCommentsUpdatesCommentTypeTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsUpdatesCommentTypeTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments.updates[':comment_type'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCommentsUpdatesCommentTypeTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.comments.updates)[':comment_type'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsUpdatesCommentTypeTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsUpdatesCommentTypeTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments.updates[':comment_type'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['comments', '/comments/:id', keyArgs] as const
}

export function getCommentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommentsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCommentsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.comments)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.comments)[':id']['$delete']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['item']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['comments', '/comments/:id/item', keyArgs] as const
}

export function getCommentsIdItemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['item']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsIdItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':id'].item.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommentsIdItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['item']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommentsIdItemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsIdItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':id'].item.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['likes']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['comments', '/comments/:id/likes', keyArgs] as const
}

export function getCommentsIdLikesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['likes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsIdLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':id'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommentsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['likes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommentsIdLikesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['likes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsIdLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':id'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCommentsIdRepliesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['replies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['comments', '/comments/:id/replies', keyArgs] as const
}

export function getCommentsIdRepliesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['replies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsIdRepliesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':id'].replies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCommentsIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.comments)[':id']['replies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommentsIdRepliesQueryKey>
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
          Awaited<ReturnType<(typeof client.comments)[':id']['replies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsIdRepliesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsIdRepliesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':id'].replies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.countries)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['countries', '/countries/:type', keyArgs] as const
}

export function getCountriesTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.countries)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountriesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.countries[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCountriesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.countries)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getCountriesTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.countries)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCountriesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountriesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.countries[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genres)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['genres', '/genres/:type', keyArgs] as const
}

export function getGenresTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genres)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenresType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.genres)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getGenresTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.genres)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGenresTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLanguagesTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.languages)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['languages', '/languages/:type', keyArgs] as const
}

export function getLanguagesTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.languages)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLanguagesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.languages[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLanguagesType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.languages)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getLanguagesTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.languages)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLanguagesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLanguagesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.languages[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsPopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.popular.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lists', '/lists/popular', keyArgs] as const
}

export function getListsPopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.popular.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsPopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.popular.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
          >,
          ReturnType<typeof getListsPopularQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsPopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.trending.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lists', '/lists/trending', keyArgs] as const
}

export function getListsTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
          >,
          ReturnType<typeof getListsTrendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lists', '/lists/:id', keyArgs] as const
}

export function getListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getListsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdCommentsSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lists', '/lists/:id/comments/:sort', keyArgs] as const
}

export function getListsIdCommentsSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdCommentsSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].comments[':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)[':id']['comments'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdCommentsSortQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':id']['comments'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdCommentsSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdCommentsSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].comments[':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdItemsTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lists', '/lists/:id/items/:type', keyArgs] as const
}

export function getListsIdItemsTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdItemsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].items[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['items'][':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdItemsTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':id']['items'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdItemsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdItemsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].items[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdLikesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['likes']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lists', '/lists/:id/likes', keyArgs] as const
}

export function getListsIdLikesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['likes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsIdLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['likes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsIdLikesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['likes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesAnticipatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.anticipated.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/anticipated', keyArgs] as const
}

export function getMoviesAnticipatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.anticipated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesAnticipatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.anticipated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.anticipated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>
            >
          >,
          ReturnType<typeof getMoviesAnticipatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.anticipated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesAnticipatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesAnticipatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.anticipated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesBoxofficeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.boxoffice.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/boxoffice', keyArgs] as const
}

export function getMoviesBoxofficeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.boxoffice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesBoxofficeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.boxoffice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesBoxoffice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.boxoffice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>
            >
          >,
          ReturnType<typeof getMoviesBoxofficeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.boxoffice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesBoxofficeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesBoxofficeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.boxoffice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesCollectedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.collected)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/collected/:period', keyArgs] as const
}

export function getMoviesCollectedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.collected)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesCollectedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.collected[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.collected)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesCollectedPeriodQueryKey>
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
          Awaited<ReturnType<(typeof client.movies.collected)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesCollectedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesCollectedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.collected[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesPlayedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.played)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/played/:period', keyArgs] as const
}

export function getMoviesPlayedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.played)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesPlayedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.played[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.played)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesPlayedPeriodQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies.played)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesPlayedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesPlayedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.played[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesPopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.popular.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/popular', keyArgs] as const
}

export function getMoviesPopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.popular.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesPopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.popular.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
          >,
          ReturnType<typeof getMoviesPopularQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesPopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesRecommendedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.recommended)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/recommended/:period', keyArgs] as const
}

export function getMoviesRecommendedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.recommended)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesRecommendedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.recommended[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.recommended)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesRecommendedPeriodQueryKey>
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
          Awaited<ReturnType<(typeof client.movies.recommended)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesRecommendedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesRecommendedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.recommended[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.trending.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/trending', keyArgs] as const
}

export function getMoviesTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.movies.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>
            >
          >,
          ReturnType<typeof getMoviesTrendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesUpdatesIdStartDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/updates/id/:start_date', keyArgs] as const
}

export function getMoviesUpdatesIdStartDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesUpdatesIdStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.updates.id[':start_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies.updates.id)[':start_date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesUpdatesIdStartDateQueryKey>
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
          Awaited<ReturnType<(typeof client.movies.updates.id)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesUpdatesIdStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesUpdatesIdStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.updates.id[':start_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesUpdatesStartDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/updates/:start_date', keyArgs] as const
}

export function getMoviesUpdatesStartDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesUpdatesStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.updates[':start_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.updates)[':start_date']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesUpdatesStartDateQueryKey>
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
          Awaited<ReturnType<(typeof client.movies.updates)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesUpdatesStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesUpdatesStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.updates[':start_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesWatchedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.watched)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/watched/:period', keyArgs] as const
}

export function getMoviesWatchedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.watched)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesWatchedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.watched[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies.watched)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesWatchedPeriodQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies.watched)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesWatchedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesWatchedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.watched[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id', keyArgs] as const
}

export function getMoviesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getMoviesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdAliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/aliases', keyArgs] as const
}

export function getMoviesIdAliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['aliases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdAliasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['aliases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdCommentsSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/comments/:sort', keyArgs] as const
}

export function getMoviesIdCommentsSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdCommentsSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].comments[':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['comments'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdCommentsSortQueryKey>
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
          Awaited<ReturnType<(typeof client.movies)[':id']['comments'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdCommentsSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdCommentsSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].comments[':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdListsTypeSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/lists/:type/:sort', keyArgs] as const
}

export function getMoviesIdListsTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdListsTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].lists[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>
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
                  ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMoviesIdListsTypeSortQueryKey>
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
          Awaited<ReturnType<(typeof client.movies)[':id']['lists'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdListsTypeSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdListsTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].lists[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['people']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/people', keyArgs] as const
}

export function getMoviesIdPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['people']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].people.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['people']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdPeopleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['people']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/ratings', keyArgs] as const
}

export function getMoviesIdRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['ratings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdRatingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['related']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/related', keyArgs] as const
}

export function getMoviesIdRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdRelatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdReleasesCountryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/releases/:country', keyArgs] as const
}

export function getMoviesIdReleasesCountryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdReleasesCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].releases[':country'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['releases'][':country']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdReleasesCountryQueryKey>
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
          Awaited<ReturnType<(typeof client.movies)[':id']['releases'][':country']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdReleasesCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdReleasesCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].releases[':country'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['stats']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/stats', keyArgs] as const
}

export function getMoviesIdStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['stats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['stats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdStudiosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['studios']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/studios', keyArgs] as const
}

export function getMoviesIdStudiosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['studios']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdStudiosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].studios.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['studios']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdStudiosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['studios']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdStudiosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdStudiosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].studios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdTranslationsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/translations/:language', keyArgs] as const
}

export function getMoviesIdTranslationsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdTranslationsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].translations[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movies)[':id']['translations'][':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMoviesIdTranslationsLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.movies)[':id']['translations'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdTranslationsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdTranslationsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].translations[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMoviesIdWatchingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['watching']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['movies', '/movies/:id/watching', keyArgs] as const
}

export function getMoviesIdWatchingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['watching']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMoviesIdWatchingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies[':id'].watching.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMoviesIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movies)[':id']['watching']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMoviesIdWatchingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movies)[':id']['watching']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMoviesIdWatchingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMoviesIdWatchingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movies[':id'].watching.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['networks', '/networks', keyArgs] as const
}

export function getNetworksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          ReturnType<typeof getNetworksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
) {
  return ['oauth', '/oauth/authorize', toValue(args)] as const
}

export function getOauthAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          ReturnType<typeof getOauthAuthorizeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.revoke.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people', '/people/updates/id/:start_date', keyArgs] as const
}

export function getPeopleUpdatesIdStartDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleUpdatesIdStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.updates.id[':start_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people.updates.id)[':start_date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleUpdatesIdStartDateQueryKey>
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
          Awaited<ReturnType<(typeof client.people.updates.id)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUpdatesIdStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleUpdatesIdStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.updates.id[':start_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleUpdatesStartDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people.updates)[':start_date']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people', '/people/updates/:start_date', keyArgs] as const
}

export function getPeopleUpdatesStartDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people.updates)[':start_date']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleUpdatesStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people.updates[':start_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people.updates)[':start_date']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleUpdatesStartDateQueryKey>
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
          Awaited<ReturnType<(typeof client.people.updates)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleUpdatesStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleUpdatesStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people.updates[':start_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people', '/people/:id', keyArgs] as const
}

export function getPeopleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPeopleIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdListsTypeSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people', '/people/:id/lists/:type/:sort', keyArgs] as const
}

export function getPeopleIdListsTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdListsTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].lists[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>
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
                  ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPeopleIdListsTypeSortQueryKey>
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
          Awaited<ReturnType<(typeof client.people)[':id']['lists'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdListsTypeSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdListsTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].lists[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdMoviesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['movies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people', '/people/:id/movies', keyArgs] as const
}

export function getPeopleIdMoviesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['movies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['movies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdMoviesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['movies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPeopleIdShowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['shows']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['people', '/people/:id/shows', keyArgs] as const
}

export function getPeopleIdShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['shows']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPeopleIdShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.people[':id'].shows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePeopleIdShows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.people)[':id']['shows']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPeopleIdShowsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.people)[':id']['shows']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPeopleIdShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPeopleIdShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.people[':id'].shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecommendationsMoviesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.movies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recommendations', '/recommendations/movies', keyArgs] as const
}

export function getRecommendationsMoviesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.movies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecommendationsMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recommendations.movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecommendationsMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.movies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
            >
          >,
          ReturnType<typeof getRecommendationsMoviesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.movies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecommendationsMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recommendations.movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.shows.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recommendations', '/recommendations/shows', keyArgs] as const
}

export function getRecommendationsShowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.shows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecommendationsShowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recommendations.shows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecommendationsShows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recommendations.shows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
            >
          >,
          ReturnType<typeof getRecommendationsShowsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.shows.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecommendationsShowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecommendationsShowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recommendations.shows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.pause.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scrobble.pause.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.start.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.scrobble.start.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrobble.stop.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.scrobble.stop.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['search', '/search/:id_type/:id', keyArgs] as const
}

export function getSearchIdTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchIdTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':id_type'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchIdTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':id_type'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchIdTypeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':id_type'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchIdTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchIdTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':id_type'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['search', '/search/:type', keyArgs] as const
}

export function getSearchTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>
            >
          >,
          ReturnType<typeof getSearchTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsAnticipatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.anticipated.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/anticipated', keyArgs] as const
}

export function getShowsAnticipatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.anticipated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsAnticipatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.anticipated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsAnticipated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.anticipated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>
            >
          >,
          ReturnType<typeof getShowsAnticipatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.anticipated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsAnticipatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsAnticipatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.anticipated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsCollectedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.collected)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/collected/:period', keyArgs] as const
}

export function getShowsCollectedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.collected)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsCollectedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.collected[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsCollectedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.collected)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsCollectedPeriodQueryKey>
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
          Awaited<ReturnType<(typeof client.shows.collected)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsCollectedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsCollectedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.collected[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsPlayedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.played)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/played/:period', keyArgs] as const
}

export function getShowsPlayedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.played)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsPlayedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.played[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsPlayedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.played)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsPlayedPeriodQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows.played)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsPlayedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsPlayedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.played[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsPopularQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.popular.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/popular', keyArgs] as const
}

export function getShowsPopularQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.popular.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsPopularQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.popular.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsPopular<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.popular.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
          >,
          ReturnType<typeof getShowsPopularQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.popular.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsPopularQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsPopularQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.popular.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsRecommendedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.recommended)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/recommended/:period', keyArgs] as const
}

export function getShowsRecommendedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.recommended)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsRecommendedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.recommended[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.recommended)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsRecommendedPeriodQueryKey>
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
          Awaited<ReturnType<(typeof client.shows.recommended)[':period']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsRecommendedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsRecommendedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.recommended[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.trending.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/trending', keyArgs] as const
}

export function getShowsTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shows.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
          >,
          ReturnType<typeof getShowsTrendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shows.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsUpdatesIdStartDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/updates/id/:start_date', keyArgs] as const
}

export function getShowsUpdatesIdStartDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsUpdatesIdStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.updates.id[':start_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.updates.id)[':start_date']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsUpdatesIdStartDateQueryKey>
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
          Awaited<ReturnType<(typeof client.shows.updates.id)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsUpdatesIdStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsUpdatesIdStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.updates.id[':start_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsUpdatesStartDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/updates/:start_date', keyArgs] as const
}

export function getShowsUpdatesStartDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsUpdatesStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.updates[':start_date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.updates)[':start_date']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsUpdatesStartDateQueryKey>
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
          Awaited<ReturnType<(typeof client.shows.updates)[':start_date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsUpdatesStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsUpdatesStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.updates[':start_date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsWatchedPeriodQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.watched)[':period']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/watched/:period', keyArgs] as const
}

export function getShowsWatchedPeriodQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.watched)[':period']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsWatchedPeriodQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows.watched[':period'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsWatchedPeriod<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows.watched)[':period']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsWatchedPeriodQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows.watched)[':period']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsWatchedPeriodQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsWatchedPeriodQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows.watched[':period'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id', keyArgs] as const
}

export function getShowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShowsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getShowsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdAliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/aliases', keyArgs] as const
}

export function getShowsIdAliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['aliases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdAliasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['aliases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdCertificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/certifications', keyArgs] as const
}

export function getShowsIdCertificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdCertificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].certifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['certifications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdCertificationsQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['certifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdCertificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdCertificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].certifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdCommentsSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/comments/:sort', keyArgs] as const
}

export function getShowsIdCommentsSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdCommentsSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].comments[':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['comments'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdCommentsSortQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['comments'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdCommentsSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdCommentsSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].comments[':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdLastEpisodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/last_episode', keyArgs] as const
}

export function getShowsIdLastEpisodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdLastEpisodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].last_episode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['last_episode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdLastEpisodeQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['last_episode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdLastEpisodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdLastEpisodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].last_episode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdListsTypeSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/lists/:type/:sort', keyArgs] as const
}

export function getShowsIdListsTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdListsTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].lists[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdListsTypeSortQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['lists'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdListsTypeSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdListsTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].lists[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdNextEpisodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/next_episode', keyArgs] as const
}

export function getShowsIdNextEpisodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdNextEpisodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].next_episode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['next_episode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdNextEpisodeQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['next_episode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdNextEpisodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdNextEpisodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].next_episode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdPeopleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['people']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/people', keyArgs] as const
}

export function getShowsIdPeopleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['people']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].people.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdPeople<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['people']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdPeopleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['people']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdProgressCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/progress/collection', keyArgs] as const
}

export function getShowsIdProgressCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdProgressCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].progress.collection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['progress']['collection']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdProgressCollectionQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['progress']['collection']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdProgressCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdProgressCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].progress.collection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdProgressWatchedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/progress/watched', keyArgs] as const
}

export function getShowsIdProgressWatchedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdProgressWatchedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].progress.watched.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['progress']['watched']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdProgressWatchedQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['progress']['watched']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdProgressWatchedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdProgressWatchedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].progress.watched.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/ratings', keyArgs] as const
}

export function getShowsIdRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['ratings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdRatingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['related']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/related', keyArgs] as const
}

export function getShowsIdRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdRelatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons', keyArgs] as const
}

export function getShowsIdSeasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdSeasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['seasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdSeasonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['seasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season', keyArgs] as const
}

export function getShowsIdSeasonsSeasonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdSeasonsSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonCommentsSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/comments/:sort', keyArgs] as const
}

export function getShowsIdSeasonsSeasonCommentsSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonCommentsSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].comments[':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['comments'][':sort']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonCommentsSortQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonCommentsSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].comments[':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/comments/:sort', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].comments[':sort'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['comments'][':sort']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].comments[':sort'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'shows',
    '/shows/:id/seasons/:season/episodes/:episode/lists/:type/:sort',
    keyArgs,
  ] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].lists[':type'][':sort'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['lists'][':type'][':sort']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].lists[':type'][':sort'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/people', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].people.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['people']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodePeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/ratings', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['ratings']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/stats', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['stats']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'shows',
    '/shows/:id/seasons/:season/episodes/:episode/translations/:language',
    keyArgs,
  ] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].translations[':language'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['translations'][':language']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].translations[
            ':language'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/episodes/:episode/watching', keyArgs] as const
}

export function getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].episodes[':episode'].watching.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['episodes'][':episode']['watching']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonEpisodesEpisodeWatchingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].episodes[':episode'].watching.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonListsTypeSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/lists/:type/:sort', keyArgs] as const
}

export function getShowsIdSeasonsSeasonListsTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonListsTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].lists[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['lists'][':type'][':sort']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonListsTypeSortQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonListsTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].lists[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonPeopleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/people', keyArgs] as const
}

export function getShowsIdSeasonsSeasonPeopleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonPeopleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].people.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getShowsIdSeasonsSeasonPeopleQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['people']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonPeopleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonPeopleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].people.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonRatingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/ratings', keyArgs] as const
}

export function getShowsIdSeasonsSeasonRatingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getShowsIdSeasonsSeasonRatingsQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/stats', keyArgs] as const
}

export function getShowsIdSeasonsSeasonStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getShowsIdSeasonsSeasonStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['seasons'][':season']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonTranslationsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/translations/:language', keyArgs] as const
}

export function getShowsIdSeasonsSeasonTranslationsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonTranslationsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].translations[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shows)[':id']['seasons'][':season']['translations'][':language']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getShowsIdSeasonsSeasonTranslationsLanguageQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonTranslationsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].translations[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdSeasonsSeasonWatchingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/seasons/:season/watching', keyArgs] as const
}

export function getShowsIdSeasonsSeasonWatchingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdSeasonsSeasonWatchingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].seasons[':season'].watching.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getShowsIdSeasonsSeasonWatchingQueryKey>
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
          Awaited<
            ReturnType<(typeof client.shows)[':id']['seasons'][':season']['watching']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdSeasonsSeasonWatchingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdSeasonsSeasonWatchingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].seasons[':season'].watching.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['stats']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/stats', keyArgs] as const
}

export function getShowsIdStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['stats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['stats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdStudiosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['studios']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/studios', keyArgs] as const
}

export function getShowsIdStudiosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['studios']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdStudiosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].studios.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdStudios<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['studios']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdStudiosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['studios']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdStudiosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdStudiosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].studios.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdTranslationsLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/translations/:language', keyArgs] as const
}

export function getShowsIdTranslationsLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdTranslationsLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].translations[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shows)[':id']['translations'][':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>
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
                  ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getShowsIdTranslationsLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.shows)[':id']['translations'][':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdTranslationsLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdTranslationsLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].translations[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShowsIdWatchingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['watching']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shows', '/shows/:id/watching', keyArgs] as const
}

export function getShowsIdWatchingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['watching']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShowsIdWatchingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shows[':id'].watching.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShowsIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shows)[':id']['watching']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShowsIdWatchingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shows)[':id']['watching']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShowsIdWatchingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShowsIdWatchingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shows[':id'].watching.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sync.collection.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sync.collection.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.collection)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/collection/:type', keyArgs] as const
}

export function getSyncCollectionTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.collection)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncCollectionTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.collection[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSyncCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.collection)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSyncCollectionTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sync.collection)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncCollectionTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncCollectionTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.collection[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.history.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sync.history.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/history/:type/:id', keyArgs] as const
}

export function getSyncHistoryTypeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncHistoryTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.history[':type'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.history)[':type'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSyncHistoryTypeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sync.history)[':type'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncHistoryTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncHistoryTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.history[':type'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSyncLastActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sync.last_activities.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/last_activities', keyArgs] as const
}

export function getSyncLastActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sync.last_activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncLastActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.last_activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSyncLastActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sync.last_activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>
            >
          >,
          ReturnType<typeof getSyncLastActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.last_activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSyncLastActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncLastActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.last_activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.playback)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/playback/:type', keyArgs] as const
}

export function getSyncPlaybackTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.playback)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncPlaybackTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.playback[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSyncPlaybackType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.playback)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSyncPlaybackTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sync.playback)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncPlaybackTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncPlaybackTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.playback[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.ratings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sync.ratings.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/ratings/:type/:rating', keyArgs] as const
}

export function getSyncRatingsTypeRatingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncRatingsTypeRatingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.ratings[':type'][':rating'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.ratings)[':type'][':rating']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSyncRatingsTypeRatingQueryKey>
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
          Awaited<ReturnType<(typeof client.sync.ratings)[':type'][':rating']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncRatingsTypeRatingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncRatingsTypeRatingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.ratings[':type'][':rating'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/recommendations/:type/:sort', keyArgs] as const
}

export function getSyncRecommendationsTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncRecommendationsTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.recommendations[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSyncRecommendationsTypeSortQueryKey>
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
          Awaited<ReturnType<(typeof client.sync.recommendations)[':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncRecommendationsTypeSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncRecommendationsTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.recommendations[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSyncWatchedTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.watched)[':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/watched/:type', keyArgs] as const
}

export function getSyncWatchedTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.watched)[':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncWatchedTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.watched[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSyncWatchedType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sync.watched)[':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSyncWatchedTypeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sync.watched)[':type']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncWatchedTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncWatchedTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.watched[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sync.watchlist.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sync.watchlist.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sync', '/sync/watchlist/:type/:sort', keyArgs] as const
}

export function getSyncWatchlistTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSyncWatchlistTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.watchlist[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSyncWatchlistTypeSortQueryKey>
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
          Awaited<ReturnType<(typeof client.sync.watchlist)[':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncWatchlistTypeSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSyncWatchlistTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.watchlist[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersHiddenSectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.hidden)[':section']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/hidden/:section', keyArgs] as const
}

export function getUsersHiddenSectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.hidden)[':section']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersHiddenSectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.hidden[':section'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersHiddenSection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.hidden)[':section']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersHiddenSectionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users.hidden)[':section']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersHiddenSectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersHiddenSectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.hidden[':section'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.requests.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/requests', keyArgs] as const
}

export function getUsersRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
          >,
          ReturnType<typeof getUsersRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersRequestsFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.requests.following.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/requests/following', keyArgs] as const
}

export function getUsersRequestsFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.requests.following.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersRequestsFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.requests.following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersRequestsFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.requests.following.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
            >
          >,
          ReturnType<typeof getUsersRequestsFollowingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.users.requests.following.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersRequestsFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersRequestsFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.requests.following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/saved_filters/:section', keyArgs] as const
}

export function getUsersSavedFiltersSectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSavedFiltersSectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.saved_filters[':section'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users.saved_filters)[':section']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersSavedFiltersSectionQueryKey>
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
          Awaited<ReturnType<(typeof client.users.saved_filters)[':section']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSavedFiltersSectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSavedFiltersSectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.saved_filters[':section'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/settings', keyArgs] as const
}

export function getUsersSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
          >,
          ReturnType<typeof getUsersSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id', keyArgs] as const
}

export function getUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdCollectionTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/collection/:type', keyArgs] as const
}

export function getUsersIdCollectionTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdCollectionTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].collection[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['collection'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdCollectionTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['collection'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdCollectionTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdCollectionTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].collection[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdCommentsCommentTypeTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/comments/:comment_type/:type', keyArgs] as const
}

export function getUsersIdCommentsCommentTypeTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdCommentsCommentTypeTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].comments[':comment_type'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUsersIdCommentsCommentTypeTypeQueryKey>
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
          Awaited<
            ReturnType<(typeof client.users)[':id']['comments'][':comment_type'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdCommentsCommentTypeTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdCommentsCommentTypeTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].comments[':comment_type'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['followers']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/followers', keyArgs] as const
}

export function getUsersIdFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['followers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['followers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdFollowersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['followers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['following']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/following', keyArgs] as const
}

export function getUsersIdFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['following']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['following']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdFollowingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['following']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdFriendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['friends']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/friends', keyArgs] as const
}

export function getUsersIdFriendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['friends']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdFriendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].friends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdFriends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['friends']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdFriendsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['friends']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdFriendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdFriendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].friends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdHistoryTypeItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/history/:type/:item_id', keyArgs] as const
}

export function getUsersIdHistoryTypeItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdHistoryTypeItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].history[':type'][':item_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdHistoryTypeItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['history'][':type'][':item_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdHistoryTypeItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdHistoryTypeItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].history[':type'][':item_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdLikesTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/likes/:type', keyArgs] as const
}

export function getUsersIdLikesTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdLikesTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].likes[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['likes'][':type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdLikesTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['likes'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdLikesTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdLikesTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].likes[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['lists']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/lists', keyArgs] as const
}

export function getUsersIdListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['lists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['lists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdListsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/lists/collaborations', keyArgs] as const
}

export function getUsersIdListsCollaborationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdListsCollaborationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].lists.collaborations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists']['collaborations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdListsCollaborationsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['lists']['collaborations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsCollaborationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdListsCollaborationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].lists.collaborations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/lists/:list_id', keyArgs] as const
}

export function getUsersIdListsListIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdListsListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdListsListIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdListsListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].lists[':list_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/lists/:list_id/comments/:sort', keyArgs] as const
}

export function getUsersIdListsListIdCommentsSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdListsListIdCommentsSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].comments[':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['comments'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUsersIdListsListIdCommentsSortQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdListsListIdCommentsSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].lists[':list_id'].comments[':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/lists/:list_id/items/:type', keyArgs] as const
}

export function getUsersIdListsListIdItemsTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdListsListIdItemsTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].items[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUsersIdListsListIdItemsTypeQueryKey>
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
          Awaited<
            ReturnType<(typeof client.users)[':id']['lists'][':list_id']['items'][':type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsListIdItemsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdListsListIdItemsTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].lists[':list_id'].items[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/lists/:list_id/likes', keyArgs] as const
}

export function getUsersIdListsListIdLikesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdListsListIdLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].lists[':list_id'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdListsListIdLikesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['lists'][':list_id']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdListsListIdLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdListsListIdLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].lists[':list_id'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdRatingsTypeRatingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/ratings/:type/:rating', keyArgs] as const
}

export function getUsersIdRatingsTypeRatingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdRatingsTypeRatingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].ratings[':type'][':rating'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdRatingsTypeRatingQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['ratings'][':type'][':rating']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdRatingsTypeRatingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdRatingsTypeRatingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].ratings[':type'][':rating'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdRecommendationsTypeSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/recommendations/:type/:sort', keyArgs] as const
}

export function getUsersIdRecommendationsTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdRecommendationsTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].recommendations[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUsersIdRecommendationsTypeSortQueryKey>
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
          Awaited<
            ReturnType<(typeof client.users)[':id']['recommendations'][':type'][':sort']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdRecommendationsTypeSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdRecommendationsTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].recommendations[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['stats']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/stats', keyArgs] as const
}

export function getUsersIdStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['stats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['stats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['stats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdWatchedTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/watched/:type', keyArgs] as const
}

export function getUsersIdWatchedTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdWatchedTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].watched[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['watched'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdWatchedTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['watched'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWatchedTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdWatchedTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].watched[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdWatchingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['watching']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/watching', keyArgs] as const
}

export function getUsersIdWatchingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['watching']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdWatchingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].watching.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdWatching<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':id']['watching']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersIdWatchingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['watching']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWatchingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdWatchingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].watching.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIdWatchlistTypeSortQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:id/watchlist/:type/:sort', keyArgs] as const
}

export function getUsersIdWatchlistTypeSortQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdWatchlistTypeSortQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':id'].watchlist[':type'][':sort'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersIdWatchlistTypeSortQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':id']['watchlist'][':type'][':sort']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdWatchlistTypeSortQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdWatchlistTypeSortQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':id'].watchlist[':type'][':sort'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
