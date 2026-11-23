import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAnalyticsAlertsRulesQueryKey() {
  return ['analytics', '/analytics/alerts/rules'] as const
}

export function getAnalyticsAlertsRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsAlertsRulesQueryKey>
  >({
    queryKey: getAnalyticsAlertsRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.alerts.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsAlertsRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsAlertsRulesQueryKey>
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
    return { ...getAnalyticsAlertsRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostAnalyticsAlertsRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.analytics.alerts.rules.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnalyticsAlertsRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnalyticsAlertsRulesAlertRuleNameQueryKey(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName', args] as const
}

export function getAnalyticsAlertsRulesAlertRuleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyticsAlertsRulesAlertRuleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.alerts.rules[':alertRuleName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsAlertsRulesAlertRuleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameQueryKey>
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
    return {
      ...getAnalyticsAlertsRulesAlertRuleNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAnalyticsAlertsRulesAlertRuleName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAnalyticsAlertsRulesAlertRuleNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAnalyticsAlertsRulesAlertRuleName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAnalyticsAlertsRulesAlertRuleNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
  >,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName/alerts', args] as const
}

export function getAnalyticsAlertsRulesAlertRuleNameAlertsQueryOptions<
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
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.alerts.rules[':alertRuleName'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsAlertsRulesAlertRuleNameAlerts<
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
  args: () => InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAnalyticsAlertsRulesAlertRuleNameAlertsQueryKey>
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
    return {
      ...getAnalyticsAlertsRulesAlertRuleNameAlertsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryKey(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
  >,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName/alerts/:alertId', args] as const
}

export function getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.alerts.rules[':alertRuleName'].alerts[':alertId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsAlertsRulesAlertRuleNameAlertsAlertId<
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
  args: () => InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsCatalogsMetricsQueryKey() {
  return ['analytics', '/analytics/catalogs/metrics'] as const
}

export function getAnalyticsCatalogsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsCatalogsMetricsQueryKey>
  >({
    queryKey: getAnalyticsCatalogsMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.catalogs.metrics.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsCatalogsMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsCatalogsMetricsQueryKey>
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
    return { ...getAnalyticsCatalogsMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnalyticsCatalogsMetricsMetricNameQueryKey(
  args: InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>,
) {
  return ['analytics', '/analytics/catalogs/metrics/:metricName', args] as const
}

export function getAnalyticsCatalogsMetricsMetricNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyticsCatalogsMetricsMetricNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.catalogs.metrics[':metricName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsCatalogsMetricsMetricName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAnalyticsCatalogsMetricsMetricNameQueryKey>
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
    return {
      ...getAnalyticsCatalogsMetricsMetricNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsCatalogsDimensionsQueryKey() {
  return ['analytics', '/analytics/catalogs/dimensions'] as const
}

export function getAnalyticsCatalogsDimensionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsCatalogsDimensionsQueryKey>
  >({
    queryKey: getAnalyticsCatalogsDimensionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.catalogs.dimensions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsCatalogsDimensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsCatalogsDimensionsQueryKey>
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
    return { ...getAnalyticsCatalogsDimensionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAnalyticsCatalogsDimensionsDimensionNameQueryKey(
  args: InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>,
) {
  return ['analytics', '/analytics/catalogs/dimensions/:dimensionName', args] as const
}

export function getAnalyticsCatalogsDimensionsDimensionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyticsCatalogsDimensionsDimensionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.catalogs.dimensions[':dimensionName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsCatalogsDimensionsDimensionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAnalyticsCatalogsDimensionsDimensionNameQueryKey>
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
    return {
      ...getAnalyticsCatalogsDimensionsDimensionNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAnalyticsEventsQueryKey(
  args: InferRequestType<typeof client.analytics.events.$get>,
) {
  return ['analytics', '/analytics/events', args] as const
}

export function getAnalyticsEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analytics.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsEventsQueryKey>
  >({
    queryKey: getAnalyticsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnalyticsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsEventsQueryKey>
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
    return { ...getAnalyticsEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnalyticsEventsIdQueryKey(
  args: InferRequestType<(typeof client.analytics.events)[':id']['$get']>,
) {
  return ['analytics', '/analytics/events/:id', args] as const
}

export function getAnalyticsEventsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsEventsIdQueryKey>
  >({
    queryKey: getAnalyticsEventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.events[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics.events)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsEventsIdQueryKey>
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
    return { ...getAnalyticsEventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnalyticsForwardersQueryKey() {
  return ['analytics', '/analytics/forwarders'] as const
}

export function getAnalyticsForwardersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsForwardersQueryKey>
  >({
    queryKey: getAnalyticsForwardersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.forwarders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsForwarders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsForwardersQueryKey>
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
    return { ...getAnalyticsForwardersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostAnalyticsForwarders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.analytics.forwarders.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnalyticsForwardersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnalyticsForwardersForwarderNameQueryKey(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>,
) {
  return ['analytics', '/analytics/forwarders/:forwarderName', args] as const
}

export function getAnalyticsForwardersForwarderNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyticsForwardersForwarderNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.forwarders[':forwarderName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsForwardersForwarderName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return {
      ...getAnalyticsForwardersForwarderNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAnalyticsForwardersForwarderName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAnalyticsForwardersForwarderNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAnalyticsForwardersForwarderName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAnalyticsForwardersForwarderNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnalyticsMetricsQueryKey(
  args: InferRequestType<typeof client.analytics.metrics.$get>,
) {
  return ['analytics', '/analytics/metrics', args] as const
}

export function getAnalyticsMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analytics.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsMetricsQueryKey>
  >({
    queryKey: getAnalyticsMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnalyticsMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analytics.metrics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsMetricsQueryKey>
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
    return { ...getAnalyticsMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
