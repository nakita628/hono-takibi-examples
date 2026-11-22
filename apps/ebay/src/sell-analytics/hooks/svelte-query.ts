import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey(
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

export function getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey>
  >({
    queryKey: getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customer_service_metric[':customer_service_metric_type'][':evaluation_type'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCustomerServiceMetricCustomerServiceMetricTypeEvaluationType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey>
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
      ...getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSellerStandardsProfileQueryKey() {
  return ['seller_standards_profile', '/seller_standards_profile'] as const
}

export function getSellerStandardsProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerStandardsProfileQueryKey>
  >({
    queryKey: getSellerStandardsProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.seller_standards_profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerStandardsProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerStandardsProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSellerStandardsProfileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSellerStandardsProfileProgramCycleQueryKey(
  args: InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>,
) {
  return ['seller_standards_profile', '/seller_standards_profile/:program/:cycle', args] as const
}

export function getSellerStandardsProfileProgramCycleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerStandardsProfileProgramCycleQueryKey>
  >({
    queryKey: getSellerStandardsProfileProgramCycleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.seller_standards_profile[':program'][':cycle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSellerStandardsProfileProgramCycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.seller_standards_profile)[':program'][':cycle']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSellerStandardsProfileProgramCycleQueryKey>
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
      ...getSellerStandardsProfileProgramCycleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTrafficReportQueryKey(
  args: InferRequestType<typeof client.traffic_report.$get>,
) {
  return ['traffic_report', '/traffic_report', args] as const
}

export function getTrafficReportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.traffic_report.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficReportQueryKey>
  >({
    queryKey: getTrafficReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.traffic_report.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTrafficReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.traffic_report.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTrafficReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrafficReportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
