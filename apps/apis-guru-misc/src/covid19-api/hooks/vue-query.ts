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

export function getCountryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.$get>>,
) {
  return ['country', '/country', toValue(args)] as const
}

export function getCountryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.country.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>
          >,
          ReturnType<typeof getCountryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.country.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountryAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.all.$get>>,
) {
  return ['country', '/country/all', toValue(args)] as const
}

export function getCountryAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.country.all.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
          >,
          ReturnType<typeof getCountryAllQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.country.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCountryCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.code.$get>>,
) {
  return ['country', '/country/code', toValue(args)] as const
}

export function getCountryCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.code.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCountryCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.country.code.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.country.code.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
          >,
          ReturnType<typeof getCountryCodeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCountryCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCountryCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.country.code.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHelpCountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help.countries.$get>>,
) {
  return ['help', '/help/countries', toValue(args)] as const
}

export function getHelpCountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help.countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHelpCountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.help.countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHelpCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.help.countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
          >,
          ReturnType<typeof getHelpCountriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHelpCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHelpCountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.help.countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportCountryAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.all.$get>>,
) {
  return ['report', '/report/country/all', toValue(args)] as const
}

export function getReportCountryAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportCountryAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.country.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportCountryAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>
            >
          >,
          ReturnType<typeof getReportCountryAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportCountryAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportCountryAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.country.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportCountryCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.code.$get>>,
) {
  return ['report', '/report/country/code', toValue(args)] as const
}

export function getReportCountryCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.code.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportCountryCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.country.code.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportCountryCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.code.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
            >
          >,
          ReturnType<typeof getReportCountryCodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportCountryCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportCountryCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.country.code.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportCountryNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.name.$get>>,
) {
  return ['report', '/report/country/name', toValue(args)] as const
}

export function getReportCountryNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportCountryNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.country.name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportCountryName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.country.name.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
            >
          >,
          ReturnType<typeof getReportCountryNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportCountryNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportCountryNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.country.name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportTotalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.totals.$get>>,
) {
  return ['report', '/report/totals', toValue(args)] as const
}

export function getReportTotalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.totals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportTotalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.totals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportTotals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.totals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
          >,
          ReturnType<typeof getReportTotalsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportTotalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportTotalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.totals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTotalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.totals.$get>>,
) {
  return ['totals', '/totals', toValue(args)] as const
}

export function getTotalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.totals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTotalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.totals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTotals<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.totals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
          ReturnType<typeof getTotalsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTotalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTotalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.totals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
