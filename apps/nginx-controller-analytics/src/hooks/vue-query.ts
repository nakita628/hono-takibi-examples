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

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAnalyticsAlertsRulesQueryKey() {
  return ['analytics', '/analytics/alerts/rules'] as const
}

export function getAnalyticsAlertsRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnalyticsAlertsRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.alerts.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsAlertsRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsAlertsRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsAlertsRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnalyticsAlertsRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.alerts.rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnalyticsAlertsRulesMutationKey() {
  return ['analytics', '/analytics/alerts/rules', 'POST'] as const
}

export function getPostAnalyticsAlertsRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.analytics.alerts.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyticsAlertsRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analytics.alerts.rules.$post>) {
      return parseResponse(client.analytics.alerts.rules.$post(args, options))
    },
  })
}

export function usePostAnalyticsAlertsRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.analytics.alerts.rules.$post>,
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
  const mutationDefaults = getPostAnalyticsAlertsRulesMutationOptions<TError, TOnMutateResult>(
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

export function getAnalyticsAlertsRulesAlertRuleNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>
  >,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName', toValue(args)] as const
}

export function getAnalyticsAlertsRulesAlertRuleNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsAlertsRulesAlertRuleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.alerts.rules[':alertRuleName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsAlertsRulesAlertRuleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>
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
                  ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsAlertsRulesAlertRuleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.alerts.rules[':alertRuleName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnalyticsAlertsRulesAlertRuleNameMutationKey() {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName', 'PUT'] as const
}

export function getPutAnalyticsAlertsRulesAlertRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnalyticsAlertsRulesAlertRuleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>,
    ) {
      return parseResponse(client.analytics.alerts.rules[':alertRuleName'].$put(args, options))
    },
  })
}

export function usePutAnalyticsAlertsRulesAlertRuleName<
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
                  ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>,
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
  const mutationDefaults = getPutAnalyticsAlertsRulesAlertRuleNameMutationOptions<
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

export function getDeleteAnalyticsAlertsRulesAlertRuleNameMutationKey() {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName', 'DELETE'] as const
}

export function getDeleteAnalyticsAlertsRulesAlertRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnalyticsAlertsRulesAlertRuleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>,
    ) {
      return parseResponse(client.analytics.alerts.rules[':alertRuleName'].$delete(args, options))
    },
  })
}

export function useDeleteAnalyticsAlertsRulesAlertRuleName<
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
                    ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>,
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
  const mutationDefaults = getDeleteAnalyticsAlertsRulesAlertRuleNameMutationOptions<
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

export function getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
  >,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName/alerts', toValue(args)] as const
}

export function getAnalyticsAlertsRulesAlertRuleNameAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.alerts.rules[':alertRuleName'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsAlertsRulesAlertRuleNameAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
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
                    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
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
                    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey>
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
            ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.alerts.rules[':alertRuleName'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
    >
  >,
) {
  return [
    'analytics',
    '/analytics/alerts/rules/:alertRuleName/alerts/:alertId',
    toValue(args),
  ] as const
}

export function getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.alerts.rules[':alertRuleName'].alerts[':alertId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsAlertsRulesAlertRuleNameAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
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
                    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
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
                    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryKey>
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
              (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.alerts.rules[':alertRuleName'].alerts[':alertId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsCatalogsMetricsQueryKey() {
  return ['analytics', '/analytics/catalogs/metrics'] as const
}

export function getAnalyticsCatalogsMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnalyticsCatalogsMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.catalogs.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsCatalogsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsCatalogsMetricsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsCatalogsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnalyticsCatalogsMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.catalogs.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsCatalogsMetricsMetricNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>
  >,
) {
  return ['analytics', '/analytics/catalogs/metrics/:metricName', toValue(args)] as const
}

export function getAnalyticsCatalogsMetricsMetricNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsCatalogsMetricsMetricNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.catalogs.metrics[':metricName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsCatalogsMetricsMetricName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>
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
                  ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnalyticsCatalogsMetricsMetricNameQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsCatalogsMetricsMetricNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsCatalogsMetricsMetricNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.catalogs.metrics[':metricName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsCatalogsDimensionsQueryKey() {
  return ['analytics', '/analytics/catalogs/dimensions'] as const
}

export function getAnalyticsCatalogsDimensionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnalyticsCatalogsDimensionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.catalogs.dimensions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsCatalogsDimensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>>
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
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsCatalogsDimensionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsCatalogsDimensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnalyticsCatalogsDimensionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.catalogs.dimensions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsCatalogsDimensionsDimensionNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
  >,
) {
  return ['analytics', '/analytics/catalogs/dimensions/:dimensionName', toValue(args)] as const
}

export function getAnalyticsCatalogsDimensionsDimensionNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsCatalogsDimensionsDimensionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.catalogs.dimensions[':dimensionName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsCatalogsDimensionsDimensionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
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
                    (typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']
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
                    (typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnalyticsCatalogsDimensionsDimensionNameQueryKey>
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
            ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsCatalogsDimensionsDimensionNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsCatalogsDimensionsDimensionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.catalogs.dimensions[':dimensionName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.events.$get>>,
) {
  return ['analytics', '/analytics/events', toValue(args)] as const
}

export function getAnalyticsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsEventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.events)[':id']['$get']>>,
) {
  return ['analytics', '/analytics/events/:id', toValue(args)] as const
}

export function getAnalyticsEventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.events)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsEventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.events[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analytics.events)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsEventsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsEventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsEventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.events[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyticsForwardersQueryKey() {
  return ['analytics', '/analytics/forwarders'] as const
}

export function getAnalyticsForwardersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnalyticsForwardersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.forwarders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsForwarders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsForwardersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsForwardersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnalyticsForwardersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.forwarders.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnalyticsForwardersMutationKey() {
  return ['analytics', '/analytics/forwarders', 'POST'] as const
}

export function getPostAnalyticsForwardersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.analytics.forwarders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyticsForwardersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analytics.forwarders.$post>) {
      return parseResponse(client.analytics.forwarders.$post(args, options))
    },
  })
}

export function usePostAnalyticsForwarders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.analytics.forwarders.$post>,
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
  const mutationDefaults = getPostAnalyticsForwardersMutationOptions<TError, TOnMutateResult>(
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

export function getAnalyticsForwardersForwarderNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>
  >,
) {
  return ['analytics', '/analytics/forwarders/:forwarderName', toValue(args)] as const
}

export function getAnalyticsForwardersForwarderNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsForwardersForwarderNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.forwarders[':forwarderName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsForwardersForwarderName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalyticsForwardersForwarderNameQueryKey>
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
          Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsForwardersForwarderNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsForwardersForwarderNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.forwarders[':forwarderName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnalyticsForwardersForwarderNameMutationKey() {
  return ['analytics', '/analytics/forwarders/:forwarderName', 'PUT'] as const
}

export function getPutAnalyticsForwardersForwarderNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnalyticsForwardersForwarderNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>,
    ) {
      return parseResponse(client.analytics.forwarders[':forwarderName'].$put(args, options))
    },
  })
}

export function usePutAnalyticsForwardersForwarderName<
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
                Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>,
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
  const mutationDefaults = getPutAnalyticsForwardersForwarderNameMutationOptions<
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

export function getDeleteAnalyticsForwardersForwarderNameMutationKey() {
  return ['analytics', '/analytics/forwarders/:forwarderName', 'DELETE'] as const
}

export function getDeleteAnalyticsForwardersForwarderNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnalyticsForwardersForwarderNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>,
    ) {
      return parseResponse(client.analytics.forwarders[':forwarderName'].$delete(args, options))
    },
  })
}

export function useDeleteAnalyticsForwardersForwarderName<
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
                  ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>,
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
  const mutationDefaults = getDeleteAnalyticsForwardersForwarderNameMutationOptions<
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

export function getAnalyticsMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.metrics.$get>>,
) {
  return ['analytics', '/analytics/metrics', toValue(args)] as const
}

export function getAnalyticsMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyticsMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analytics.metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsMetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyticsMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
