import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryKey(
  args: InferRequestType<
    (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
  >,
) {
  return [
    'v1',
    '/v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject',
    args,
  ] as const
}

export function getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryKey>
  >({
    queryKey: getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.locations.global['metricsScopes:listMetricsScopesByMonitoredProject'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.locations.global)['metricsScopes:listMetricsScopesByMonitoredProject']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1NameLocationLocationPrometheusApiV1LabelLabelValuesQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
  >,
) {
  return ['v1', '/v1/:name/location/:location/prometheus/api/v1/label/:label/values', args] as const
}

export function getV1NameLocationLocationPrometheusApiV1LabelLabelValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameLocationLocationPrometheusApiV1LabelLabelValuesQueryKey>
  >({
    queryKey: getV1NameLocationLocationPrometheusApiV1LabelLabelValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].location[':location'].prometheus.api.v1.label[':label'].values.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1NameLocationLocationPrometheusApiV1LabelLabelValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['label'][':label']['values']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLocationLocationPrometheusApiV1LabelLabelValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NameLocationLocationPrometheusApiV1LabelLabelValuesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1NameLocationLocationPrometheusApiV1LabelsMutationKey() {
  return ['v1', '/v1/:name/location/:location/prometheus/api/v1/labels', 'POST'] as const
}

export function getPostV1NameLocationLocationPrometheusApiV1LabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['labels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['labels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameLocationLocationPrometheusApiV1LabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['labels']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':name'].location[':location'].prometheus.api.v1.labels.$post(args, options),
      )
    },
  })
}

export function injectPostV1NameLocationLocationPrometheusApiV1Labels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['labels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['labels']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameLocationLocationPrometheusApiV1LabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1NameLocationLocationPrometheusApiV1MetadataQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
  >,
) {
  return ['v1', '/v1/:name/location/:location/prometheus/api/v1/metadata', args] as const
}

export function getV1NameLocationLocationPrometheusApiV1MetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameLocationLocationPrometheusApiV1MetadataQueryKey>
  >({
    queryKey: getV1NameLocationLocationPrometheusApiV1MetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].location[':location'].prometheus.api.v1.metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NameLocationLocationPrometheusApiV1Metadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLocationLocationPrometheusApiV1MetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1NameLocationLocationPrometheusApiV1MetadataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1NameLocationLocationPrometheusApiV1QueryMutationKey() {
  return ['v1', '/v1/:name/location/:location/prometheus/api/v1/query', 'POST'] as const
}

export function getPostV1NameLocationLocationPrometheusApiV1QueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameLocationLocationPrometheusApiV1QueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':name'].location[':location'].prometheus.api.v1.query.$post(args, options),
      )
    },
  })
}

export function injectPostV1NameLocationLocationPrometheusApiV1Query<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameLocationLocationPrometheusApiV1QueryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1NameLocationLocationPrometheusApiV1QueryExemplarsMutationKey() {
  return ['v1', '/v1/:name/location/:location/prometheus/api/v1/query_exemplars', 'POST'] as const
}

export function getPostV1NameLocationLocationPrometheusApiV1QueryExemplarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_exemplars']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_exemplars']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameLocationLocationPrometheusApiV1QueryExemplarsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_exemplars']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':name'].location[':location'].prometheus.api.v1.query_exemplars.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1NameLocationLocationPrometheusApiV1QueryExemplars<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_exemplars']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_exemplars']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1NameLocationLocationPrometheusApiV1QueryExemplarsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1NameLocationLocationPrometheusApiV1QueryRangeMutationKey() {
  return ['v1', '/v1/:name/location/:location/prometheus/api/v1/query_range', 'POST'] as const
}

export function getPostV1NameLocationLocationPrometheusApiV1QueryRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_range']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_range']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameLocationLocationPrometheusApiV1QueryRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_range']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':name'].location[':location'].prometheus.api.v1.query_range.$post(args, options),
      )
    },
  })
}

export function injectPostV1NameLocationLocationPrometheusApiV1QueryRange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_range']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['query_range']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameLocationLocationPrometheusApiV1QueryRangeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1NameLocationLocationPrometheusApiV1SeriesMutationKey() {
  return ['v1', '/v1/:name/location/:location/prometheus/api/v1/series', 'POST'] as const
}

export function getPostV1NameLocationLocationPrometheusApiV1SeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['series']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['series']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameLocationLocationPrometheusApiV1SeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['series']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':name'].location[':location'].prometheus.api.v1.series.$post(args, options),
      )
    },
  })
}

export function injectPostV1NameLocationLocationPrometheusApiV1Series<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['series']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1)[':name']['location'][':location']['prometheus']['api']['v1']['series']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NameLocationLocationPrometheusApiV1SeriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ParentDashboardsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['dashboards']['$get']>,
) {
  return ['v1', '/v1/:parent/dashboards', args] as const
}

export function getV1ParentDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['dashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['dashboards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentDashboardsQueryKey>
  >({
    queryKey: getV1ParentDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].dashboards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['dashboards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['dashboards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['dashboards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentDashboardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ParentDashboardsMutationKey() {
  return ['v1', '/v1/:parent/dashboards', 'POST'] as const
}

export function getPostV1ParentDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['dashboards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['dashboards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['dashboards']['$post']>) {
      return parseResponse(client.v1[':parent'].dashboards.$post(args, options))
    },
  })
}

export function injectPostV1ParentDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['dashboards']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['dashboards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ParentDashboardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ParentProjectsMutationKey() {
  return ['v1', '/v1/:parent/projects', 'POST'] as const
}

export function getPostV1ParentProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentProjectsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['projects']['$post']>) {
      return parseResponse(client.v1[':parent'].projects.$post(args, options))
    },
  })
}

export function injectPostV1ParentProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['projects']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['projects']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ParentProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
