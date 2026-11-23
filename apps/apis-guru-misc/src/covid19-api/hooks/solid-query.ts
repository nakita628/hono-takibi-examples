import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCountryKey() {
  return ['country'] as const
}

export function getHelpKey() {
  return ['help'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getTotalsKey() {
  return ['totals'] as const
}

export function getCountryQueryKey(args: InferRequestType<typeof client.country.$get>) {
  return ['country', '/country', args] as const
}

export function getCountryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.country.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryQueryKey>
  >({
    queryKey: getCountryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.country.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.country.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCountryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCountryAllQueryKey(args: InferRequestType<typeof client.country.all.$get>) {
  return ['country', '/country/all', args] as const
}

export function getCountryAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.country.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryAllQueryKey>
  >({
    queryKey: getCountryAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.country.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.country.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCountryAllQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountryAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCountryCodeQueryKey(args: InferRequestType<typeof client.country.code.$get>) {
  return ['country', '/country/code', args] as const
}

export function getCountryCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.country.code.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryCodeQueryKey>
  >({
    queryKey: getCountryCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.country.code.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.country.code.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCountryCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCountryCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHelpCountriesQueryKey(
  args: InferRequestType<typeof client.help.countries.$get>,
) {
  return ['help', '/help/countries', args] as const
}

export function getHelpCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.help.countries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCountriesQueryKey>
  >({
    queryKey: getHelpCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.help.countries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHelpCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.help.countries.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHelpCountriesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHelpCountriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportCountryAllQueryKey(
  args: InferRequestType<typeof client.report.country.all.$get>,
) {
  return ['report', '/report/country/all', args] as const
}

export function getReportCountryAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.country.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportCountryAllQueryKey>
  >({
    queryKey: getReportCountryAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.country.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.country.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportCountryAllQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportCountryAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportCountryCodeQueryKey(
  args: InferRequestType<typeof client.report.country.code.$get>,
) {
  return ['report', '/report/country/code', args] as const
}

export function getReportCountryCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.country.code.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportCountryCodeQueryKey>
  >({
    queryKey: getReportCountryCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.country.code.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.country.code.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportCountryCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportCountryCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportCountryNameQueryKey(
  args: InferRequestType<typeof client.report.country.name.$get>,
) {
  return ['report', '/report/country/name', args] as const
}

export function getReportCountryNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.country.name.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportCountryNameQueryKey>
  >({
    queryKey: getReportCountryNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.country.name.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportCountryName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.country.name.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportCountryNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportCountryNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReportTotalsQueryKey(args: InferRequestType<typeof client.report.totals.$get>) {
  return ['report', '/report/totals', args] as const
}

export function getReportTotalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.report.totals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportTotalsQueryKey>
  >({
    queryKey: getReportTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.report.totals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReportTotals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.report.totals.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReportTotalsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportTotalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTotalsQueryKey(args: InferRequestType<typeof client.totals.$get>) {
  return ['totals', '/totals', args] as const
}

export function getTotalsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.totals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTotalsQueryKey>
  >({
    queryKey: getTotalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.totals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTotals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.totals.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTotalsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTotalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
