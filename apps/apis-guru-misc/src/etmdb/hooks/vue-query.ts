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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CinemaDetailSearchCinemaNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>
  >,
) {
  return ['api', '/api/v1/cinema-detail/search/:cinema_name', toValue(args)] as const
}

export function getApiV1CinemaDetailSearchCinemaNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CinemaDetailSearchCinemaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cinema-detail'].search[':cinema_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CinemaDetailSearchCinemaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>
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
                    (typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']
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
                    (typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CinemaDetailSearchCinemaNameQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CinemaDetailSearchCinemaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CinemaDetailSearchCinemaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cinema-detail'].search[':cinema_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CinemaScheduleSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/cinema-schedule/search/:movie_title', toValue(args)] as const
}

export function getApiV1CinemaScheduleSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CinemaScheduleSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cinema-schedule'].search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CinemaScheduleSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']>
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
                    (typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']
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
                    (typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CinemaScheduleSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CinemaScheduleSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CinemaScheduleSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cinema-schedule'].search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CinemaScheduleSearchallParamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>
  >,
) {
  return ['api', '/api/v1/cinema-schedule/searchall/:param', toValue(args)] as const
}

export function getApiV1CinemaScheduleSearchallParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CinemaScheduleSearchallParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cinema-schedule'].searchall[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CinemaScheduleSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>
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
                    (typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']
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
                    (typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CinemaScheduleSearchallParamQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CinemaScheduleSearchallParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CinemaScheduleSearchallParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cinema-schedule'].searchall[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
    >
  >,
) {
  return ['api', '/api/v1/cinema-shedule-showtime/search/:movie_title', toValue(args)] as const
}

export function getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cinema-shedule-showtime'].search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CinemaSheduleShowtimeSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
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
                    (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
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
                    (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cinema-shedule-showtime'].search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CinemaSheduleShowtimeSearchallParamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
    >
  >,
) {
  return ['api', '/api/v1/cinema-shedule-showtime/searchall/:param', toValue(args)] as const
}

export function getApiV1CinemaSheduleShowtimeSearchallParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CinemaSheduleShowtimeSearchallParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cinema-shedule-showtime'].searchall[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CinemaSheduleShowtimeSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
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
                    (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
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
                    (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CinemaSheduleShowtimeSearchallParamQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CinemaSheduleShowtimeSearchallParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CinemaSheduleShowtimeSearchallParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cinema-shedule-showtime'].searchall[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CinemaSearchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.cinema.search)[':id']['$get']>>,
) {
  return ['api', '/api/v1/cinema/search/:id', toValue(args)] as const
}

export function getApiV1CinemaSearchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.cinema.search)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CinemaSearchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.cinema.search[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CinemaSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.cinema.search)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.cinema.search)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.cinema.search)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.cinema.search)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CinemaSearchIdQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.cinema.search)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CinemaSearchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CinemaSearchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.cinema.search[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyCreditsSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/company-credits/search/:movie_title', toValue(args)] as const
}

export function getApiV1CompanyCreditsSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyCreditsSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['company-credits'].search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyCreditsSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']>
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
                    (typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']
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
                    (typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyCreditsSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyCreditsSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyCreditsSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['company-credits'].search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanyCreditsSearchallParamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>
  >,
) {
  return ['api', '/api/v1/company-credits/searchall/:param', toValue(args)] as const
}

export function getApiV1CompanyCreditsSearchallParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanyCreditsSearchallParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['company-credits'].searchall[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanyCreditsSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>
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
                    (typeof client.api.v1)['company-credits']['searchall'][':param']['$get']
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
                    (typeof client.api.v1)['company-credits']['searchall'][':param']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1CompanyCreditsSearchallParamQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanyCreditsSearchallParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanyCreditsSearchallParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['company-credits'].searchall[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1CompanySearchCompanyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search)[':company_name']['$get']>
  >,
) {
  return ['api', '/api/v1/company/search/:company_name', toValue(args)] as const
}

export function getApiV1CompanySearchCompanyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search)[':company_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CompanySearchCompanyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.company.search[':company_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CompanySearchCompanyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.search)[':company_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.company.search)[':company_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.search)[':company_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.company.search)[':company_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CompanySearchCompanyNameQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.company.search)[':company_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CompanySearchCompanyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CompanySearchCompanyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.company.search[':company_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilmographyTypeSearchFilmographyDescriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
    >
  >,
) {
  return ['api', '/api/v1/filmography-type/search/:filmography_description', toValue(args)] as const
}

export function getApiV1FilmographyTypeSearchFilmographyDescriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilmographyTypeSearchFilmographyDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['filmography-type'].search[':filmography_description'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FilmographyTypeSearchFilmographyDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
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
                    (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
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
                    (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1FilmographyTypeSearchFilmographyDescriptionQueryKey>
        >,
        { queryKey: unknown }
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
              (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilmographyTypeSearchFilmographyDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilmographyTypeSearchFilmographyDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['filmography-type'].search[':filmography_description'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilmographySearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/filmography/search/:movie_title', toValue(args)] as const
}

export function getApiV1FilmographySearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilmographySearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filmography.search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FilmographySearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>
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
                  ReturnType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1FilmographySearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilmographySearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilmographySearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filmography.search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FilmographySearchallParamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>
  >,
) {
  return ['api', '/api/v1/filmography/searchall/:param', toValue(args)] as const
}

export function getApiV1FilmographySearchallParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FilmographySearchallParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filmography.searchall[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FilmographySearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1FilmographySearchallParamQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FilmographySearchallParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FilmographySearchallParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filmography.searchall[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GenreTypeSearchGenreDescriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']>
  >,
) {
  return ['api', '/api/v1/genre-type/search/:genre_description', toValue(args)] as const
}

export function getApiV1GenreTypeSearchGenreDescriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GenreTypeSearchGenreDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['genre-type'].search[':genre_description'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GenreTypeSearchGenreDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']>
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
                    (typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']
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
                    (typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1GenreTypeSearchGenreDescriptionQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenreTypeSearchGenreDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GenreTypeSearchGenreDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['genre-type'].search[':genre_description'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GenreSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/genre/search/:movie_title', toValue(args)] as const
}

export function getApiV1GenreSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GenreSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.genre.search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GenreSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GenreSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenreSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GenreSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.genre.search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GenreSearchallMovieGenreTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>
  >,
) {
  return ['api', '/api/v1/genre/searchall/:movie_genre_type', toValue(args)] as const
}

export function getApiV1GenreSearchallMovieGenreTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GenreSearchallMovieGenreTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.genre.searchall[':movie_genre_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GenreSearchallMovieGenreType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>
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
                  ReturnType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1GenreSearchallMovieGenreTypeQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GenreSearchallMovieGenreTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GenreSearchallMovieGenreTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.genre.searchall[':movie_genre_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1JobSearchJobTitleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.job.search)[':job_title']['$get']>>,
) {
  return ['api', '/api/v1/job/search/:job_title', toValue(args)] as const
}

export function getApiV1JobSearchJobTitleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.job.search)[':job_title']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1JobSearchJobTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.job.search[':job_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1JobSearchJobTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.job.search)[':job_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.job.search)[':job_title']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.job.search)[':job_title']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.job.search)[':job_title']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1JobSearchJobTitleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.job.search)[':job_title']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1JobSearchJobTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1JobSearchJobTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.job.search[':job_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1JobSearchallCompanyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>
  >,
) {
  return ['api', '/api/v1/job/searchall/:company_name', toValue(args)] as const
}

export function getApiV1JobSearchallCompanyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1JobSearchallCompanyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.job.searchall[':company_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1JobSearchallCompanyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1JobSearchallCompanyNameQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1JobSearchallCompanyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1JobSearchallCompanyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.job.searchall[':company_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MediaSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.media.search)[':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/media/search/:movie_title', toValue(args)] as const
}

export function getApiV1MediaSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.media.search)[':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediaSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.media.search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediaSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.media.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.media.search)[':movie_title']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.media.search)[':movie_title']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.media.search)[':movie_title']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MediaSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.media.search)[':movie_title']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediaSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediaSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.media.search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MediaSearchallUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.media.searchall)[':user']['$get']>>,
) {
  return ['api', '/api/v1/media/searchall/:user', toValue(args)] as const
}

export function getApiV1MediaSearchallUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.media.searchall)[':user']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediaSearchallUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.media.searchall[':user'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediaSearchallUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.media.searchall)[':user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.media.searchall)[':user']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.media.searchall)[':user']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.media.searchall)[':user']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MediaSearchallUserQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.media.searchall)[':user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediaSearchallUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediaSearchallUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.media.searchall[':user'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MovieCastSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/movie-cast/search/:movie_title', toValue(args)] as const
}

export function getApiV1MovieCastSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MovieCastSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['movie-cast'].search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MovieCastSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>
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
                  ReturnType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1MovieCastSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
            ReturnType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MovieCastSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MovieCastSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['movie-cast'].search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MovieCastSearchallParamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>
  >,
) {
  return ['api', '/api/v1/movie-cast/searchall/:param', toValue(args)] as const
}

export function getApiV1MovieCastSearchallParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MovieCastSearchallParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['movie-cast'].searchall[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MovieCastSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>
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
                  ReturnType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1MovieCastSearchallParamQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MovieCastSearchallParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MovieCastSearchallParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['movie-cast'].searchall[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MovieSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/movie/search/:movie_title', toValue(args)] as const
}

export function getApiV1MovieSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MovieSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.movie.search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MovieSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MovieSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MovieSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MovieSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.movie.search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NewsSearchTitleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.news.search)[':title']['$get']>>,
) {
  return ['api', '/api/v1/news/search/:title', toValue(args)] as const
}

export function getApiV1NewsSearchTitleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.news.search)[':title']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NewsSearchTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.news.search[':title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NewsSearchTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.news.search)[':title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.news.search)[':title']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.news.search)[':title']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.news.search)[':title']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NewsSearchTitleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.news.search)[':title']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NewsSearchTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NewsSearchTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.news.search[':title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PeopleSearchUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.people.search)[':user']['$get']>>,
) {
  return ['api', '/api/v1/people/search/:user', toValue(args)] as const
}

export function getApiV1PeopleSearchUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.people.search)[':user']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PeopleSearchUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.people.search[':user'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PeopleSearchUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.people.search)[':user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.people.search)[':user']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.people.search)[':user']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.people.search)[':user']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PeopleSearchUserQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.people.search)[':user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PeopleSearchUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PeopleSearchUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.people.search[':user'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ShowtimeSearchallParamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>
  >,
) {
  return ['api', '/api/v1/showtime/searchall/:param', toValue(args)] as const
}

export function getApiV1ShowtimeSearchallParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ShowtimeSearchallParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.showtime.searchall[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ShowtimeSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ShowtimeSearchallParamQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ShowtimeSearchallParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ShowtimeSearchallParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.showtime.searchall[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchlistSearchMovieTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>
  >,
) {
  return ['api', '/api/v1/watchlist/search/:movie_title', toValue(args)] as const
}

export function getApiV1WatchlistSearchMovieTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchlistSearchMovieTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watchlist.search[':movie_title'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchlistSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchlistSearchMovieTitleQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchlistSearchMovieTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchlistSearchMovieTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watchlist.search[':movie_title'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WatchlistSearchallParamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>
  >,
) {
  return ['api', '/api/v1/watchlist/searchall/:param', toValue(args)] as const
}

export function getApiV1WatchlistSearchallParamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WatchlistSearchallParamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.watchlist.searchall[':param'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WatchlistSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WatchlistSearchallParamQueryKey>
        >,
        { queryKey: unknown }
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
          Awaited<ReturnType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WatchlistSearchallParamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WatchlistSearchallParamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.watchlist.searchall[':param'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
