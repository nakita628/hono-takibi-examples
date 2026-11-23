import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.country.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCountryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.country.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCountryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCountryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.country.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountryAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCountryAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.country.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountryAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCountryAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.country.code.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountryCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCountryCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.country.code.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCountryCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCountryCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useHelpCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help.countries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHelpCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHelpCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.help.countries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHelpCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHelpCountriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.country.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportCountryAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportCountryAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.country.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportCountryAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportCountryAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.country.code.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportCountryCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportCountryCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.country.code.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportCountryCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportCountryCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportCountryName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.country.name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportCountryNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportCountryNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportCountryName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.country.name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportCountryNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportCountryNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useReportTotals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.totals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportTotalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportTotals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.report.totals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportTotalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTotals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.totals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTotalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTotals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.totals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTotalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTotalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
