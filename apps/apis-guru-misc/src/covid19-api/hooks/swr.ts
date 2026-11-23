import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetCountryKey(args: InferRequestType<typeof client.country.$get>) {
  return ['country', '/country', args] as const
}

export function useGetCountry<TError = unknown>(
  args: InferRequestType<typeof client.country.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.country.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCountry<TError = unknown>(
  args: InferRequestType<typeof client.country.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.country.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCountryAllKey(args: InferRequestType<typeof client.country.all.$get>) {
  return ['country', '/country/all', args] as const
}

export function useGetCountryAll<TError = unknown>(
  args: InferRequestType<typeof client.country.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.country.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountryAll<TError = unknown>(
  args: InferRequestType<typeof client.country.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.country.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCountryCodeKey(args: InferRequestType<typeof client.country.code.$get>) {
  return ['country', '/country/code', args] as const
}

export function useGetCountryCode<TError = unknown>(
  args: InferRequestType<typeof client.country.code.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.country.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCountryCode<TError = unknown>(
  args: InferRequestType<typeof client.country.code.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCountryCodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.country.code.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.country.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHelpCountriesKey(args: InferRequestType<typeof client.help.countries.$get>) {
  return ['help', '/help/countries', args] as const
}

export function useGetHelpCountries<TError = unknown>(
  args: InferRequestType<typeof client.help.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHelpCountriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.help.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHelpCountries<TError = unknown>(
  args: InferRequestType<typeof client.help.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHelpCountriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.help.countries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.help.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportCountryAllKey(
  args: InferRequestType<typeof client.report.country.all.$get>,
) {
  return ['report', '/report/country/all', args] as const
}

export function useGetReportCountryAll<TError = unknown>(
  args: InferRequestType<typeof client.report.country.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
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
        ? getGetReportCountryAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.country.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportCountryAll<TError = unknown>(
  args: InferRequestType<typeof client.report.country.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
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
        ? getGetReportCountryAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.country.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.country.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportCountryCodeKey(
  args: InferRequestType<typeof client.report.country.code.$get>,
) {
  return ['report', '/report/country/code', args] as const
}

export function useGetReportCountryCode<TError = unknown>(
  args: InferRequestType<typeof client.report.country.code.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
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
        ? getGetReportCountryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.country.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportCountryCode<TError = unknown>(
  args: InferRequestType<typeof client.report.country.code.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
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
        ? getGetReportCountryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.code.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.country.code.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportCountryNameKey(
  args: InferRequestType<typeof client.report.country.name.$get>,
) {
  return ['report', '/report/country/name', args] as const
}

export function useGetReportCountryName<TError = unknown>(
  args: InferRequestType<typeof client.report.country.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
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
        ? getGetReportCountryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.country.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportCountryName<TError = unknown>(
  args: InferRequestType<typeof client.report.country.name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
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
        ? getGetReportCountryNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.report.country.name.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.country.name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportTotalsKey(args: InferRequestType<typeof client.report.totals.$get>) {
  return ['report', '/report/totals', args] as const
}

export function useGetReportTotals<TError = unknown>(
  args: InferRequestType<typeof client.report.totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportTotalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportTotals<TError = unknown>(
  args: InferRequestType<typeof client.report.totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportTotalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.totals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.report.totals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTotalsKey(args: InferRequestType<typeof client.totals.$get>) {
  return ['totals', '/totals', args] as const
}

export function useGetTotals<TError = unknown>(
  args: InferRequestType<typeof client.totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTotalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.totals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTotals<TError = unknown>(
  args: InferRequestType<typeof client.totals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTotalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.totals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.totals.$get(args, clientOptions)), restSwrOptions),
  }
}
