import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CinemaDetailSearchCinemaNameQueryKey(
  args: InferRequestType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>,
) {
  return ['api', '/api/v1/cinema-detail/search/:cinema_name', args] as const
}

export function getApiV1CinemaDetailSearchCinemaNameQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CinemaDetailSearchCinemaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['cinema-detail'].search[':cinema_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CinemaDetailSearchCinemaName<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['cinema-detail']['search'][':cinema_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1CinemaDetailSearchCinemaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CinemaDetailSearchCinemaNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CinemaScheduleSearchMovieTitleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']
  >,
) {
  return ['api', '/api/v1/cinema-schedule/search/:movie_title', args] as const
}

export function getApiV1CinemaScheduleSearchMovieTitleQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CinemaScheduleSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['cinema-schedule'].search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CinemaScheduleSearchMovieTitle<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['cinema-schedule']['search'][':movie_title']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1CinemaScheduleSearchMovieTitleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CinemaScheduleSearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CinemaScheduleSearchallParamQueryKey(
  args: InferRequestType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>,
) {
  return ['api', '/api/v1/cinema-schedule/searchall/:param', args] as const
}

export function getApiV1CinemaScheduleSearchallParamQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CinemaScheduleSearchallParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['cinema-schedule'].searchall[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CinemaScheduleSearchallParam<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['cinema-schedule']['searchall'][':param']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CinemaScheduleSearchallParamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
  >,
) {
  return ['api', '/api/v1/cinema-shedule-showtime/search/:movie_title', args] as const
}

export function getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['cinema-shedule-showtime'].search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CinemaSheduleShowtimeSearchMovieTitle<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['search'][':movie_title']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CinemaSheduleShowtimeSearchMovieTitleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CinemaSheduleShowtimeSearchallParamQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
  >,
) {
  return ['api', '/api/v1/cinema-shedule-showtime/searchall/:param', args] as const
}

export function getApiV1CinemaSheduleShowtimeSearchallParamQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CinemaSheduleShowtimeSearchallParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['cinema-shedule-showtime'].searchall[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CinemaSheduleShowtimeSearchallParam<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['cinema-shedule-showtime']['searchall'][':param']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CinemaSheduleShowtimeSearchallParamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CinemaSearchIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.cinema.search)[':id']['$get']>,
) {
  return ['api', '/api/v1/cinema/search/:id', args] as const
}

export function getApiV1CinemaSearchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.cinema.search)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.cinema.search)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CinemaSearchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.cinema.search[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CinemaSearchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.cinema.search)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.cinema.search)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1CinemaSearchIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1CompanyCreditsSearchMovieTitleQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']
  >,
) {
  return ['api', '/api/v1/company-credits/search/:movie_title', args] as const
}

export function getApiV1CompanyCreditsSearchMovieTitleQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CompanyCreditsSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['company-credits'].search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CompanyCreditsSearchMovieTitle<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['company-credits']['search'][':movie_title']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1CompanyCreditsSearchMovieTitleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CompanyCreditsSearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CompanyCreditsSearchallParamQueryKey(
  args: InferRequestType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>,
) {
  return ['api', '/api/v1/company-credits/searchall/:param', args] as const
}

export function getApiV1CompanyCreditsSearchallParamQueryOptions<
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
  args: InferRequestType<(typeof client.api.v1)['company-credits']['searchall'][':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CompanyCreditsSearchallParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['company-credits'].searchall[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CompanyCreditsSearchallParam<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['company-credits']['searchall'][':param']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CompanyCreditsSearchallParamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1CompanySearchCompanyNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.company.search)[':company_name']['$get']>,
) {
  return ['api', '/api/v1/company/search/:company_name', args] as const
}

export function getApiV1CompanySearchCompanyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.search)[':company_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.company.search)[':company_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1CompanySearchCompanyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.company.search[':company_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1CompanySearchCompanyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.company.search)[':company_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.company.search)[':company_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1CompanySearchCompanyNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1FilmographyTypeSearchFilmographyDescriptionQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
  >,
) {
  return ['api', '/api/v1/filmography-type/search/:filmography_description', args] as const
}

export function getApiV1FilmographyTypeSearchFilmographyDescriptionQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1FilmographyTypeSearchFilmographyDescriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['filmography-type'].search[':filmography_description'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1FilmographyTypeSearchFilmographyDescription<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['filmography-type']['search'][':filmography_description']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1FilmographyTypeSearchFilmographyDescriptionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1FilmographySearchMovieTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>,
) {
  return ['api', '/api/v1/filmography/search/:movie_title', args] as const
}

export function getApiV1FilmographySearchMovieTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1FilmographySearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.filmography.search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1FilmographySearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.filmography.search)[':movie_title']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1FilmographySearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1FilmographySearchallParamQueryKey(
  args: InferRequestType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>,
) {
  return ['api', '/api/v1/filmography/searchall/:param', args] as const
}

export function getApiV1FilmographySearchallParamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1FilmographySearchallParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.filmography.searchall[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1FilmographySearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.filmography.searchall)[':param']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1FilmographySearchallParamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1GenreTypeSearchGenreDescriptionQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']
  >,
) {
  return ['api', '/api/v1/genre-type/search/:genre_description', args] as const
}

export function getApiV1GenreTypeSearchGenreDescriptionQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1GenreTypeSearchGenreDescriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['genre-type'].search[':genre_description'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GenreTypeSearchGenreDescription<
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
  args: () => InferRequestType<
    (typeof client.api.v1)['genre-type']['search'][':genre_description']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1GenreTypeSearchGenreDescriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1GenreTypeSearchGenreDescriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1GenreSearchMovieTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>,
) {
  return ['api', '/api/v1/genre/search/:movie_title', args] as const
}

export function getApiV1GenreSearchMovieTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1GenreSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.genre.search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GenreSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.genre.search)[':movie_title']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1GenreSearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1GenreSearchallMovieGenreTypeQueryKey(
  args: InferRequestType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>,
) {
  return ['api', '/api/v1/genre/searchall/:movie_genre_type', args] as const
}

export function getApiV1GenreSearchallMovieGenreTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1GenreSearchallMovieGenreTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.genre.searchall[':movie_genre_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1GenreSearchallMovieGenreType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.genre.searchall)[':movie_genre_type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1GenreSearchallMovieGenreTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1GenreSearchallMovieGenreTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1JobSearchJobTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1.job.search)[':job_title']['$get']>,
) {
  return ['api', '/api/v1/job/search/:job_title', args] as const
}

export function getApiV1JobSearchJobTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.job.search)[':job_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.job.search)[':job_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1JobSearchJobTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.job.search[':job_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1JobSearchJobTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.job.search)[':job_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.job.search)[':job_title']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1JobSearchJobTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1JobSearchallCompanyNameQueryKey(
  args: InferRequestType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>,
) {
  return ['api', '/api/v1/job/searchall/:company_name', args] as const
}

export function getApiV1JobSearchallCompanyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1JobSearchallCompanyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.job.searchall[':company_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1JobSearchallCompanyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.job.searchall)[':company_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1JobSearchallCompanyNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MediaSearchMovieTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1.media.search)[':movie_title']['$get']>,
) {
  return ['api', '/api/v1/media/search/:movie_title', args] as const
}

export function getApiV1MediaSearchMovieTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.media.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.media.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MediaSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.media.search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MediaSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.media.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.media.search)[':movie_title']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MediaSearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MediaSearchallUserQueryKey(
  args: InferRequestType<(typeof client.api.v1.media.searchall)[':user']['$get']>,
) {
  return ['api', '/api/v1/media/searchall/:user', args] as const
}

export function getApiV1MediaSearchallUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.media.searchall)[':user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.media.searchall)[':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MediaSearchallUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.media.searchall[':user'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MediaSearchallUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.media.searchall)[':user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.media.searchall)[':user']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MediaSearchallUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MovieCastSearchMovieTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>,
) {
  return ['api', '/api/v1/movie-cast/search/:movie_title', args] as const
}

export function getApiV1MovieCastSearchMovieTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MovieCastSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['movie-cast'].search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MovieCastSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1)['movie-cast']['search'][':movie_title']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MovieCastSearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MovieCastSearchallParamQueryKey(
  args: InferRequestType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>,
) {
  return ['api', '/api/v1/movie-cast/searchall/:param', args] as const
}

export function getApiV1MovieCastSearchallParamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MovieCastSearchallParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['movie-cast'].searchall[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MovieCastSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['movie-cast']['searchall'][':param']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiV1MovieCastSearchallParamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MovieCastSearchallParamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1MovieSearchMovieTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>,
) {
  return ['api', '/api/v1/movie/search/:movie_title', args] as const
}

export function getApiV1MovieSearchMovieTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1MovieSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.movie.search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1MovieSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.movie.search)[':movie_title']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1MovieSearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1NewsSearchTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1.news.search)[':title']['$get']>,
) {
  return ['api', '/api/v1/news/search/:title', args] as const
}

export function getApiV1NewsSearchTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.news.search)[':title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.news.search)[':title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1NewsSearchTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.news.search[':title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1NewsSearchTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.news.search)[':title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.news.search)[':title']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1NewsSearchTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1PeopleSearchUserQueryKey(
  args: InferRequestType<(typeof client.api.v1.people.search)[':user']['$get']>,
) {
  return ['api', '/api/v1/people/search/:user', args] as const
}

export function getApiV1PeopleSearchUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.people.search)[':user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.people.search)[':user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1PeopleSearchUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.people.search[':user'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PeopleSearchUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.people.search)[':user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.people.search)[':user']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PeopleSearchUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1ShowtimeSearchallParamQueryKey(
  args: InferRequestType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>,
) {
  return ['api', '/api/v1/showtime/searchall/:param', args] as const
}

export function getApiV1ShowtimeSearchallParamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ShowtimeSearchallParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.showtime.searchall[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1ShowtimeSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.showtime.searchall)[':param']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1ShowtimeSearchallParamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1WatchlistSearchMovieTitleQueryKey(
  args: InferRequestType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>,
) {
  return ['api', '/api/v1/watchlist/search/:movie_title', args] as const
}

export function getApiV1WatchlistSearchMovieTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchlistSearchMovieTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watchlist.search[':movie_title'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1WatchlistSearchMovieTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.watchlist.search)[':movie_title']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1WatchlistSearchMovieTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1WatchlistSearchallParamQueryKey(
  args: InferRequestType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>,
) {
  return ['api', '/api/v1/watchlist/searchall/:param', args] as const
}

export function getApiV1WatchlistSearchallParamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV1WatchlistSearchallParamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.watchlist.searchall[':param'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1WatchlistSearchallParam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.watchlist.searchall)[':param']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1WatchlistSearchallParamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
