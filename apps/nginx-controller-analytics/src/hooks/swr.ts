import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getGetAnalyticsAlertsRulesKey() {
  return ['analytics', '/analytics/alerts/rules'] as const
}

export function useGetAnalyticsAlertsRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
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
        ? getGetAnalyticsAlertsRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.alerts.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsAlertsRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
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
        ? getGetAnalyticsAlertsRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.alerts.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnalyticsAlertsRulesKey() {
  return ['analytics', '/analytics/alerts/rules', 'POST'] as const
}

export function usePostAnalyticsAlertsRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.alerts.rules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.alerts.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsAlertsRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.alerts.rules.$post> },
      ) => parseResponse(client.analytics.alerts.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsAlertsRulesAlertRuleNameKey(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName', args] as const
}

export function useGetAnalyticsAlertsRulesAlertRuleName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
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
        ? getGetAnalyticsAlertsRulesAlertRuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.alerts.rules[':alertRuleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsAlertsRulesAlertRuleName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
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
        ? getGetAnalyticsAlertsRulesAlertRuleNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.alerts.rules[':alertRuleName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnalyticsAlertsRulesAlertRuleNameKey() {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName', 'PUT'] as const
}

export function usePutAnalyticsAlertsRulesAlertRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnalyticsAlertsRulesAlertRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$put']>
        },
      ) => parseResponse(client.analytics.alerts.rules[':alertRuleName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnalyticsAlertsRulesAlertRuleNameKey() {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName', 'DELETE'] as const
}

export function useDeleteAnalyticsAlertsRulesAlertRuleName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnalyticsAlertsRulesAlertRuleNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.analytics.alerts.rules)[':alertRuleName']['$delete']>
        },
      ) =>
        parseResponse(client.analytics.alerts.rules[':alertRuleName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsAlertsRulesAlertRuleNameAlertsKey(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
  >,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName/alerts', args] as const
}

export function useGetAnalyticsAlertsRulesAlertRuleNameAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
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
        ? getGetAnalyticsAlertsRulesAlertRuleNameAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analytics.alerts.rules[':alertRuleName'].alerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsAlertsRulesAlertRuleNameAlerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
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
        ? getGetAnalyticsAlertsRulesAlertRuleNameAlertsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.alerts.rules)[':alertRuleName']['alerts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analytics.alerts.rules[':alertRuleName'].alerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdKey(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
  >,
) {
  return ['analytics', '/analytics/alerts/rules/:alertRuleName/alerts/:alertId', args] as const
}

export function useGetAnalyticsAlertsRulesAlertRuleNameAlertsAlertId<TError = unknown>(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdKey(args)
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
                (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
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
          client.analytics.alerts.rules[':alertRuleName'].alerts[':alertId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsAlertsRulesAlertRuleNameAlertsAlertId<TError = unknown>(
  args: InferRequestType<
    (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAnalyticsAlertsRulesAlertRuleNameAlertsAlertIdKey(args)
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
                (typeof client.analytics.alerts.rules)[':alertRuleName']['alerts'][':alertId']['$get']
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
          client.analytics.alerts.rules[':alertRuleName'].alerts[':alertId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsCatalogsMetricsKey() {
  return ['analytics', '/analytics/catalogs/metrics'] as const
}

export function useGetAnalyticsCatalogsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
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
        ? getGetAnalyticsCatalogsMetricsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.catalogs.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsCatalogsMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
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
        ? getGetAnalyticsCatalogsMetricsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.catalogs.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsCatalogsMetricsMetricNameKey(
  args: InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>,
) {
  return ['analytics', '/analytics/catalogs/metrics/:metricName', args] as const
}

export function useGetAnalyticsCatalogsMetricsMetricName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
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
        ? getGetAnalyticsCatalogsMetricsMetricNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.catalogs.metrics[':metricName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsCatalogsMetricsMetricName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
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
        ? getGetAnalyticsCatalogsMetricsMetricNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.catalogs.metrics)[':metricName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.catalogs.metrics[':metricName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsCatalogsDimensionsKey() {
  return ['analytics', '/analytics/catalogs/dimensions'] as const
}

export function useGetAnalyticsCatalogsDimensions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>>
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
        ? getGetAnalyticsCatalogsDimensionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.catalogs.dimensions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsCatalogsDimensions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>>
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
        ? getGetAnalyticsCatalogsDimensionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.analytics.catalogs.dimensions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.catalogs.dimensions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsCatalogsDimensionsDimensionNameKey(
  args: InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>,
) {
  return ['analytics', '/analytics/catalogs/dimensions/:dimensionName', args] as const
}

export function useGetAnalyticsCatalogsDimensionsDimensionName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
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
        ? getGetAnalyticsCatalogsDimensionsDimensionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analytics.catalogs.dimensions[':dimensionName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsCatalogsDimensionsDimensionName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
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
        ? getGetAnalyticsCatalogsDimensionsDimensionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analytics.catalogs.dimensions)[':dimensionName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analytics.catalogs.dimensions[':dimensionName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsEventsKey(
  args: InferRequestType<typeof client.analytics.events.$get>,
) {
  return ['analytics', '/analytics/events', args] as const
}

export function useGetAnalyticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.analytics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
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
        ? getGetAnalyticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsEvents<TError = unknown>(
  args: InferRequestType<typeof client.analytics.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
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
        ? getGetAnalyticsEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsEventsIdKey(
  args: InferRequestType<(typeof client.analytics.events)[':id']['$get']>,
) {
  return ['analytics', '/analytics/events/:id', args] as const
}

export function useGetAnalyticsEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
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
        ? getGetAnalyticsEventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
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
        ? getGetAnalyticsEventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.analytics.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalyticsForwardersKey() {
  return ['analytics', '/analytics/forwarders'] as const
}

export function useGetAnalyticsForwarders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>>
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
        ? getGetAnalyticsForwardersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.forwarders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsForwarders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>>
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
        ? getGetAnalyticsForwardersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.forwarders.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnalyticsForwardersKey() {
  return ['analytics', '/analytics/forwarders', 'POST'] as const
}

export function usePostAnalyticsForwarders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analytics.forwarders.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analytics.forwarders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyticsForwardersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analytics.forwarders.$post> },
      ) => parseResponse(client.analytics.forwarders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsForwardersForwarderNameKey(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>,
) {
  return ['analytics', '/analytics/forwarders/:forwarderName', args] as const
}

export function useGetAnalyticsForwardersForwarderName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
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
        ? getGetAnalyticsForwardersForwarderNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.forwarders[':forwarderName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsForwardersForwarderName<TError = unknown>(
  args: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
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
        ? getGetAnalyticsForwardersForwarderNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analytics.forwarders[':forwarderName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnalyticsForwardersForwarderNameKey() {
  return ['analytics', '/analytics/forwarders/:forwarderName', 'PUT'] as const
}

export function usePutAnalyticsForwardersForwarderName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnalyticsForwardersForwarderNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$put']>
        },
      ) => parseResponse(client.analytics.forwarders[':forwarderName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnalyticsForwardersForwarderNameKey() {
  return ['analytics', '/analytics/forwarders/:forwarderName', 'DELETE'] as const
}

export function useDeleteAnalyticsForwardersForwarderName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnalyticsForwardersForwarderNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.analytics.forwarders)[':forwarderName']['$delete']>
        },
      ) => parseResponse(client.analytics.forwarders[':forwarderName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnalyticsMetricsKey(
  args: InferRequestType<typeof client.analytics.metrics.$get>,
) {
  return ['analytics', '/analytics/metrics', args] as const
}

export function useGetAnalyticsMetrics<TError = unknown>(
  args: InferRequestType<typeof client.analytics.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
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
        ? getGetAnalyticsMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsMetrics<TError = unknown>(
  args: InferRequestType<typeof client.analytics.metrics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
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
        ? getGetAnalyticsMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.metrics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.metrics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
