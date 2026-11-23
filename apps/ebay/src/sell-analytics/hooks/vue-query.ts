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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
    >
  >,
) {
  return [
    'customer_service_metric',
    '/customer_service_metric/:customer_service_metric_type/:evaluation_type',
    toValue(args),
  ] as const
}

export function getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customer_service_metric[':customer_service_metric_type'][':evaluation_type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCustomerServiceMetricCustomerServiceMetricTypeEvaluationType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
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
                    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
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
                    (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey>
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
              (typeof client.customer_service_metric)[':customer_service_metric_type'][':evaluation_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCustomerServiceMetricCustomerServiceMetricTypeEvaluationTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.customer_service_metric[':customer_service_metric_type'][':evaluation_type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSellerStandardsProfileQueryKey() {
  return ['seller_standards_profile', '/seller_standards_profile'] as const
}

export function getSellerStandardsProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSellerStandardsProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seller_standards_profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSellerStandardsProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
            >
          >,
          ReturnType<typeof getSellerStandardsProfileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.seller_standards_profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerStandardsProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSellerStandardsProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.seller_standards_profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSellerStandardsProfileProgramCycleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
  >,
) {
  return [
    'seller_standards_profile',
    '/seller_standards_profile/:program/:cycle',
    toValue(args),
  ] as const
}

export function getSellerStandardsProfileProgramCycleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSellerStandardsProfileProgramCycleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seller_standards_profile[':program'][':cycle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSellerStandardsProfileProgramCycle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSellerStandardsProfileProgramCycleQueryKey>
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
            ReturnType<(typeof client.seller_standards_profile)[':program'][':cycle']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSellerStandardsProfileProgramCycleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSellerStandardsProfileProgramCycleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.seller_standards_profile[':program'][':cycle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrafficReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.traffic_report.$get>>,
) {
  return ['traffic_report', '/traffic_report', toValue(args)] as const
}

export function getTrafficReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.traffic_report.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrafficReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.traffic_report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrafficReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.traffic_report.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
          >,
          ReturnType<typeof getTrafficReportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traffic_report.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrafficReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrafficReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.traffic_report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
