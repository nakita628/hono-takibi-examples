import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCustomerServiceMetricKey() {
  return ['customer_service_metric'] as const
}

export function getSellerStandardsProfileKey() {
  return ['seller_standards_profile'] as const
}

export function getTrafficReportKey() {
  return ['traffic_report'] as const
}

export function getGetCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeKey(
  args: InferRequestType<
    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
  >,
) {
  return [
    'customer_service_metric',
    '/customer_service_metric/:customer_service_metric_type/:evaluation_type',
    args,
  ] as const
}

export function useGetCustomerServiceMetricCustomerServiceMetricTypeEvaluationType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
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
        ? getGetCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeKey(args)
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
                (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
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
          client.customer_service_metric[':customer_service_metric_type'][':evaluation_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerServiceMetricCustomerServiceMetricTypeEvaluationType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
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
        ? getGetCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeKey(args)
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
                (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
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
          client.customer_service_metric[':customer_service_metric_type'][':evaluation_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSellerStandardsProfileKey() {
  return ['seller_standards_profile', '/seller_standards_profile'] as const
}

export function useGetSellerStandardsProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSellerStandardsProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.seller_standards_profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerStandardsProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSellerStandardsProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.seller_standards_profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSellerStandardsProfileProgramCycleKey(
  args: InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>,
) {
  return ['seller_standards_profile', '/seller_standards_profile/:program/:cycle', args] as const
}

export function useGetSellerStandardsProfileProgramCycle<TError = unknown>(
  args: InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
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
        ? getGetSellerStandardsProfileProgramCycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.seller_standards_profile[':program'][':cycle'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSellerStandardsProfileProgramCycle<TError = unknown>(
  args: InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
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
        ? getGetSellerStandardsProfileProgramCycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.seller_standards_profile[':program'][':cycle'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTrafficReportKey(args: InferRequestType<typeof client.traffic_report.$get>) {
  return ['traffic_report', '/traffic_report', args] as const
}

export function useGetTrafficReport<TError = unknown>(
  args: InferRequestType<typeof client.traffic_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrafficReportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traffic_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrafficReport<TError = unknown>(
  args: InferRequestType<typeof client.traffic_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTrafficReportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traffic_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
