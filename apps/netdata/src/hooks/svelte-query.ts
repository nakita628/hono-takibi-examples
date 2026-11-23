import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2NodesQueryKey(args: InferRequestType<typeof client.api.v2.nodes.$get>) {
  return ['api', '/api/v2/nodes', args] as const
}

export function getApiV2NodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2NodesQueryKey>
  >({
    queryKey: getApiV2NodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.nodes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2NodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3NodesQueryKey(args: InferRequestType<typeof client.api.v3.nodes.$get>) {
  return ['api', '/api/v3/nodes', args] as const
}

export function getApiV3NodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3NodesQueryKey>
  >({
    queryKey: getApiV3NodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.nodes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3NodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2ContextsQueryKey(
  args: InferRequestType<typeof client.api.v2.contexts.$get>,
) {
  return ['api', '/api/v2/contexts', args] as const
}

export function getApiV2ContextsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.contexts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContextsQueryKey>
  >({
    queryKey: getApiV2ContextsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.contexts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.contexts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ContextsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ContextsQueryKey(
  args: InferRequestType<typeof client.api.v3.contexts.$get>,
) {
  return ['api', '/api/v3/contexts', args] as const
}

export function getApiV3ContextsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.contexts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ContextsQueryKey>
  >({
    queryKey: getApiV3ContextsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.contexts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.contexts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ContextsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2QQueryKey(args: InferRequestType<typeof client.api.v2.q.$get>) {
  return ['api', '/api/v2/q', args] as const
}

export function getApiV2QQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.q.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2QQueryKey>
  >({
    queryKey: getApiV2QQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.q.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.q.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiV2QQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2QQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3QQueryKey(args: InferRequestType<typeof client.api.v3.q.$get>) {
  return ['api', '/api/v3/q', args] as const
}

export function getApiV3QQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.q.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3QQueryKey>
  >({
    queryKey: getApiV3QQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.q.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.q.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiV3QQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3QQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1InfoQueryKey() {
  return ['api', '/api/v1/info'] as const
}

export function getApiV1InfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoQueryKey>
  >({
    queryKey: getApiV1InfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1InfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ChartsQueryKey() {
  return ['api', '/api/v1/charts'] as const
}

export function getApiV1ChartsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartsQueryKey>
  >({
    queryKey: getApiV1ChartsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.charts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Charts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChartsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ChartQueryKey(args: InferRequestType<typeof client.api.v1.chart.$get>) {
  return ['api', '/api/v1/chart', args] as const
}

export function getApiV1ChartQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.chart.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartQueryKey>
  >({
    queryKey: getApiV1ChartQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.chart.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Chart<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.chart.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ChartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ChartQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ContextsQueryKey(
  args: InferRequestType<typeof client.api.v1.contexts.$get>,
) {
  return ['api', '/api/v1/contexts', args] as const
}

export function getApiV1ContextsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.contexts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ContextsQueryKey>
  >({
    queryKey: getApiV1ContextsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.contexts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.contexts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ContextsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ContextsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ContextQueryKey(args: InferRequestType<typeof client.api.v1.context.$get>) {
  return ['api', '/api/v1/context', args] as const
}

export function getApiV1ContextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.context.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ContextQueryKey>
  >({
    queryKey: getApiV1ContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.context.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.context.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ContextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ContextQueryKey(args: InferRequestType<typeof client.api.v3.context.$get>) {
  return ['api', '/api/v3/context', args] as const
}

export function getApiV3ContextQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.context.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ContextQueryKey>
  >({
    queryKey: getApiV3ContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.context.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.context.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ContextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ConfigQueryKey(args: InferRequestType<typeof client.api.v1.config.$get>) {
  return ['api', '/api/v1/config', args] as const
}

export function getApiV1ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigQueryKey>
  >({
    queryKey: getApiV1ConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ConfigMutationKey() {
  return ['api', '/api/v1/config', 'POST'] as const
}

export function getPostApiV1ConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.config.$post>) {
      return parseResponse(client.api.v1.config.$post(args, options))
    },
  })
}

export function createPostApiV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2DataQueryKey(args: InferRequestType<typeof client.api.v2.data.$get>) {
  return ['api', '/api/v2/data', args] as const
}

export function getApiV2DataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.data.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2DataQueryKey>
  >({
    queryKey: getApiV2DataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.data.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2DataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3DataQueryKey(args: InferRequestType<typeof client.api.v3.data.$get>) {
  return ['api', '/api/v3/data', args] as const
}

export function getApiV3DataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.data.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3DataQueryKey>
  >({
    queryKey: getApiV3DataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.data.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3DataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DataQueryKey(args: InferRequestType<typeof client.api.v1.data.$get>) {
  return ['api', '/api/v1/data', args] as const
}

export function getApiV1DataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.data.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1DataQueryKey>
  >({
    queryKey: getApiV1DataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.data.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.data.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AllmetricsQueryKey(
  args: InferRequestType<typeof client.api.v1.allmetrics.$get>,
) {
  return ['api', '/api/v1/allmetrics', args] as const
}

export function getApiV1AllmetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.allmetrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AllmetricsQueryKey>
  >({
    queryKey: getApiV1AllmetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.allmetrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.allmetrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AllmetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AllmetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1BadgeSvgQueryKey(
  args: InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
) {
  return ['api', '/api/v1/badge.svg', args] as const
}

export function getApiV1BadgeSvgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BadgeSvgQueryKey>
  >({
    queryKey: getApiV1BadgeSvgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['badge.svg'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BadgeSvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BadgeSvgQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3BadgeSvgQueryKey(
  args: InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
) {
  return ['api', '/api/v3/badge.svg', args] as const
}

export function getApiV3BadgeSvgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BadgeSvgQueryKey>
  >({
    queryKey: getApiV3BadgeSvgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3['badge.svg'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BadgeSvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3BadgeSvgQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3AllmetricsQueryKey(
  args: InferRequestType<typeof client.api.v3.allmetrics.$get>,
) {
  return ['api', '/api/v3/allmetrics', args] as const
}

export function getApiV3AllmetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.allmetrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AllmetricsQueryKey>
  >({
    queryKey: getApiV3AllmetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.allmetrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.allmetrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AllmetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3AllmetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3AlertsQueryKey(args: InferRequestType<typeof client.api.v3.alerts.$get>) {
  return ['api', '/api/v3/alerts', args] as const
}

export function getApiV3AlertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertsQueryKey>
  >({
    queryKey: getApiV3AlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3AlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3AlertTransitionsQueryKey(
  args: InferRequestType<typeof client.api.v3.alert_transitions.$get>,
) {
  return ['api', '/api/v3/alert_transitions', args] as const
}

export function getApiV3AlertTransitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.alert_transitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertTransitionsQueryKey>
  >({
    queryKey: getApiV3AlertTransitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alert_transitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.alert_transitions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertTransitionsQueryKey>
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
      ...getApiV3AlertTransitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AlertConfigQueryKey(
  args: InferRequestType<typeof client.api.v3.alert_config.$get>,
) {
  return ['api', '/api/v3/alert_config', args] as const
}

export function getApiV3AlertConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.alert_config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertConfigQueryKey>
  >({
    queryKey: getApiV3AlertConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.alert_config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.alert_config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3AlertConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3AlertConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3VariableQueryKey(
  args: InferRequestType<typeof client.api.v3.variable.$get>,
) {
  return ['api', '/api/v3/variable', args] as const
}

export function getApiV3VariableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.variable.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3VariableQueryKey>
  >({
    queryKey: getApiV3VariableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.variable.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.variable.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3VariableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3VariableQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3InfoQueryKey(args: InferRequestType<typeof client.api.v3.info.$get>) {
  return ['api', '/api/v3/info', args] as const
}

export function getApiV3InfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3InfoQueryKey>
  >({
    queryKey: getApiV3InfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3InfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3NodeInstancesQueryKey(
  args: InferRequestType<typeof client.api.v3.node_instances.$get>,
) {
  return ['api', '/api/v3/node_instances', args] as const
}

export function getApiV3NodeInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.node_instances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NodeInstancesQueryKey>
  >({
    queryKey: getApiV3NodeInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.node_instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.node_instances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3NodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3NodeInstancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3StreamPathQueryKey(
  args: InferRequestType<typeof client.api.v3.stream_path.$get>,
) {
  return ['api', '/api/v3/stream_path', args] as const
}

export function getApiV3StreamPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.stream_path.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3StreamPathQueryKey>
  >({
    queryKey: getApiV3StreamPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.stream_path.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3StreamPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.stream_path.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3StreamPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3StreamPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3VersionsQueryKey(
  args: InferRequestType<typeof client.api.v3.versions.$get>,
) {
  return ['api', '/api/v3/versions', args] as const
}

export function getApiV3VersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.versions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3VersionsQueryKey>
  >({
    queryKey: getApiV3VersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.versions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.versions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3VersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3VersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ProgressQueryKey(
  args: InferRequestType<typeof client.api.v3.progress.$get>,
) {
  return ['api', '/api/v3/progress', args] as const
}

export function getApiV3ProgressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.progress.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ProgressQueryKey>
  >({
    queryKey: getApiV3ProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.progress.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.progress.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ProgressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3FunctionQueryKey(
  args: InferRequestType<typeof client.api.v3.function.$get>,
) {
  return ['api', '/api/v3/function', args] as const
}

export function getApiV3FunctionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.function.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FunctionQueryKey>
  >({
    queryKey: getApiV3FunctionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.function.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.function.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FunctionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3FunctionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3FunctionMutationKey() {
  return ['api', '/api/v3/function', 'POST'] as const
}

export function getPostApiV3FunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.function.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3FunctionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.function.$post>) {
      return parseResponse(client.api.v3.function.$post(args, options))
    },
  })
}

export function createPostApiV3Function<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.function.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3FunctionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3FunctionsQueryKey(
  args: InferRequestType<typeof client.api.v3.functions.$get>,
) {
  return ['api', '/api/v3/functions', args] as const
}

export function getApiV3FunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.functions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FunctionsQueryKey>
  >({
    queryKey: getApiV3FunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.functions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.functions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3FunctionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3ConfigQueryKey(args: InferRequestType<typeof client.api.v3.config.$get>) {
  return ['api', '/api/v3/config', args] as const
}

export function getApiV3ConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigQueryKey>
  >({
    queryKey: getApiV3ConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3ConfigMutationKey() {
  return ['api', '/api/v3/config', 'POST'] as const
}

export function getPostApiV3ConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3ConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.config.$post>) {
      return parseResponse(client.api.v3.config.$post(args, options))
    },
  })
}

export function createPostApiV3Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3ConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3SettingsQueryKey(
  args: InferRequestType<typeof client.api.v3.settings.$get>,
) {
  return ['api', '/api/v3/settings', args] as const
}

export function getApiV3SettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SettingsQueryKey>
  >({
    queryKey: getApiV3SettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3SettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3SettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiV3SettingsMutationKey() {
  return ['api', '/api/v3/settings', 'PUT'] as const
}

export function getPutApiV3SettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3SettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.settings.$put>) {
      return parseResponse(client.api.v3.settings.$put(args, options))
    },
  })
}

export function createPutApiV3Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v3.settings.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3SettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3StreamInfoQueryKey(
  args: InferRequestType<typeof client.api.v3.stream_info.$get>,
) {
  return ['api', '/api/v3/stream_info', args] as const
}

export function getApiV3StreamInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.stream_info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3StreamInfoQueryKey>
  >({
    queryKey: getApiV3StreamInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.stream_info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3StreamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.stream_info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3StreamInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3StreamInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV3RtcOfferMutationKey() {
  return ['api', '/api/v3/rtc_offer', 'POST'] as const
}

export function getPostApiV3RtcOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rtc_offer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v3.rtc_offer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3RtcOfferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v3.rtc_offer.$post>) {
      return parseResponse(client.api.v3.rtc_offer.$post(args, options))
    },
  })
}

export function createPostApiV3RtcOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rtc_offer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v3.rtc_offer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3RtcOfferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV3ClaimQueryKey(args: InferRequestType<typeof client.api.v3.claim.$get>) {
  return ['api', '/api/v3/claim', args] as const
}

export function getApiV3ClaimQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.claim.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3ClaimQueryKey>
  >({
    queryKey: getApiV3ClaimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.claim.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.claim.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3ClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3ClaimQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3BearerProtectionQueryKey(
  args: InferRequestType<typeof client.api.v3.bearer_protection.$get>,
) {
  return ['api', '/api/v3/bearer_protection', args] as const
}

export function getApiV3BearerProtectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_protection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BearerProtectionQueryKey>
  >({
    queryKey: getApiV3BearerProtectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.bearer_protection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.bearer_protection.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BearerProtectionQueryKey>
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
      ...getApiV3BearerProtectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3BearerGetTokenQueryKey(
  args: InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
) {
  return ['api', '/api/v3/bearer_get_token', args] as const
}

export function getApiV3BearerGetTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BearerGetTokenQueryKey>
  >({
    queryKey: getApiV3BearerGetTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.bearer_get_token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.bearer_get_token.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3BearerGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3BearerGetTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3MeQueryKey() {
  return ['api', '/api/v3/me'] as const
}

export function getApiV3MeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3MeQueryKey>
  >({
    queryKey: getApiV3MeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3MeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV2WeightsQueryKey(args: InferRequestType<typeof client.api.v2.weights.$get>) {
  return ['api', '/api/v2/weights', args] as const
}

export function getApiV2WeightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.weights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2WeightsQueryKey>
  >({
    queryKey: getApiV2WeightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.weights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.weights.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2WeightsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2AlertsQueryKey(args: InferRequestType<typeof client.api.v2.alerts.$get>) {
  return ['api', '/api/v2/alerts', args] as const
}

export function getApiV2AlertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertsQueryKey>
  >({
    queryKey: getApiV2AlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2AlertTransitionsQueryKey(
  args: InferRequestType<typeof client.api.v2.alert_transitions.$get>,
) {
  return ['api', '/api/v2/alert_transitions', args] as const
}

export function getApiV2AlertTransitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.alert_transitions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertTransitionsQueryKey>
  >({
    queryKey: getApiV2AlertTransitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.alert_transitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.alert_transitions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertTransitionsQueryKey>
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
      ...getApiV2AlertTransitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2AlertConfigQueryKey(
  args: InferRequestType<typeof client.api.v2.alert_config.$get>,
) {
  return ['api', '/api/v2/alert_config', args] as const
}

export function getApiV2AlertConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.alert_config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertConfigQueryKey>
  >({
    queryKey: getApiV2AlertConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.alert_config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.alert_config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2AlertConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2AlertConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2InfoQueryKey(args: InferRequestType<typeof client.api.v2.info.$get>) {
  return ['api', '/api/v2/info', args] as const
}

export function getApiV2InfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2InfoQueryKey>
  >({
    queryKey: getApiV2InfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.info.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2InfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2InfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2NodeInstancesQueryKey(
  args: InferRequestType<typeof client.api.v2.node_instances.$get>,
) {
  return ['api', '/api/v2/node_instances', args] as const
}

export function getApiV2NodeInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.node_instances.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2NodeInstancesQueryKey>
  >({
    queryKey: getApiV2NodeInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.node_instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.node_instances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2NodeInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2NodeInstancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2VersionsQueryKey(
  args: InferRequestType<typeof client.api.v2.versions.$get>,
) {
  return ['api', '/api/v2/versions', args] as const
}

export function getApiV2VersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.versions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionsQueryKey>
  >({
    queryKey: getApiV2VersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.versions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.versions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2VersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2VersionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2ProgressQueryKey(
  args: InferRequestType<typeof client.api.v2.progress.$get>,
) {
  return ['api', '/api/v2/progress', args] as const
}

export function getApiV2ProgressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.progress.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ProgressQueryKey>
  >({
    queryKey: getApiV2ProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.progress.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.progress.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ProgressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2FunctionsQueryKey(
  args: InferRequestType<typeof client.api.v2.functions.$get>,
) {
  return ['api', '/api/v2/functions', args] as const
}

export function getApiV2FunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.functions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FunctionsQueryKey>
  >({
    queryKey: getApiV2FunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.functions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.functions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2FunctionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV2RtcOfferMutationKey() {
  return ['api', '/api/v2/rtc_offer', 'POST'] as const
}

export function getPostApiV2RtcOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.rtc_offer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v2.rtc_offer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV2RtcOfferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v2.rtc_offer.$post>) {
      return parseResponse(client.api.v2.rtc_offer.$post(args, options))
    },
  })
}

export function createPostApiV2RtcOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.rtc_offer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v2.rtc_offer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV2RtcOfferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV2ClaimQueryKey(args: InferRequestType<typeof client.api.v2.claim.$get>) {
  return ['api', '/api/v2/claim', args] as const
}

export function getApiV2ClaimQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.claim.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2ClaimQueryKey>
  >({
    queryKey: getApiV2ClaimQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.claim.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV2Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.claim.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2ClaimQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2ClaimQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV2BearerProtectionQueryKey(
  args: InferRequestType<typeof client.api.v2.bearer_protection.$get>,
) {
  return ['api', '/api/v2/bearer_protection', args] as const
}

export function getApiV2BearerProtectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_protection.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BearerProtectionQueryKey>
  >({
    queryKey: getApiV2BearerProtectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.bearer_protection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.bearer_protection.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BearerProtectionQueryKey>
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
      ...getApiV2BearerProtectionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV2BearerGetTokenQueryKey(
  args: InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
) {
  return ['api', '/api/v2/bearer_get_token', args] as const
}

export function getApiV2BearerGetTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BearerGetTokenQueryKey>
  >({
    queryKey: getApiV2BearerGetTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.bearer_get_token.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV2BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v2.bearer_get_token.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2BearerGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV2BearerGetTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV3WeightsQueryKey(args: InferRequestType<typeof client.api.v3.weights.$get>) {
  return ['api', '/api/v3/weights', args] as const
}

export function getApiV3WeightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v3.weights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WeightsQueryKey>
  >({
    queryKey: getApiV3WeightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.weights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.weights.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV3WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV3WeightsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1WeightsQueryKey(args: InferRequestType<typeof client.api.v1.weights.$get>) {
  return ['api', '/api/v1/weights', args] as const
}

export function getApiV1WeightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.weights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WeightsQueryKey>
  >({
    queryKey: getApiV1WeightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.weights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.weights.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WeightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1WeightsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1MetricCorrelationsQueryKey(
  args: InferRequestType<typeof client.api.v1.metric_correlations.$get>,
) {
  return ['api', '/api/v1/metric_correlations', args] as const
}

export function getApiV1MetricCorrelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.metric_correlations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetricCorrelationsQueryKey>
  >({
    queryKey: getApiV1MetricCorrelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.metric_correlations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1MetricCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.metric_correlations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MetricCorrelationsQueryKey>
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
      ...getApiV1MetricCorrelationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1FunctionQueryKey(
  args: InferRequestType<typeof client.api.v1.function.$get>,
) {
  return ['api', '/api/v1/function', args] as const
}

export function getApiV1FunctionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.function.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FunctionQueryKey>
  >({
    queryKey: getApiV1FunctionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.function.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.function.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FunctionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1FunctionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1FunctionsQueryKey() {
  return ['api', '/api/v1/functions'] as const
}

export function getApiV1FunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FunctionsQueryKey>
  >({
    queryKey: getApiV1FunctionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.functions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1FunctionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AlarmsQueryKey(args: InferRequestType<typeof client.api.v1.alarms.$get>) {
  return ['api', '/api/v1/alarms', args] as const
}

export function getApiV1AlarmsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmsQueryKey>
  >({
    queryKey: getApiV1AlarmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Alarms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.alarms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AlarmsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AlarmsValuesQueryKey(
  args: InferRequestType<typeof client.api.v1.alarms_values.$get>,
) {
  return ['api', '/api/v1/alarms_values', args] as const
}

export function getApiV1AlarmsValuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarms_values.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmsValuesQueryKey>
  >({
    queryKey: getApiV1AlarmsValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarms_values.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1AlarmsValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.alarms_values.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmsValuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AlarmsValuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AlarmLogQueryKey(
  args: InferRequestType<typeof client.api.v1.alarm_log.$get>,
) {
  return ['api', '/api/v1/alarm_log', args] as const
}

export function getApiV1AlarmLogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarm_log.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmLogQueryKey>
  >({
    queryKey: getApiV1AlarmLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarm_log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1AlarmLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.alarm_log.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmLogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AlarmLogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AlarmCountQueryKey(
  args: InferRequestType<typeof client.api.v1.alarm_count.$get>,
) {
  return ['api', '/api/v1/alarm_count', args] as const
}

export function getApiV1AlarmCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.alarm_count.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmCountQueryKey>
  >({
    queryKey: getApiV1AlarmCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarm_count.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1AlarmCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.alarm_count.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AlarmCountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AlarmVariablesQueryKey(
  args: InferRequestType<typeof client.api.v1.alarm_variables.$get>,
) {
  return ['api', '/api/v1/alarm_variables', args] as const
}

export function getApiV1AlarmVariablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.alarm_variables.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmVariablesQueryKey>
  >({
    queryKey: getApiV1AlarmVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.alarm_variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AlarmVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.alarm_variables.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AlarmVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AlarmVariablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ManageHealthQueryKey(
  args: InferRequestType<typeof client.api.v1.manage.health.$get>,
) {
  return ['api', '/api/v1/manage/health', args] as const
}

export function getApiV1ManageHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.manage.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ManageHealthQueryKey>
  >({
    queryKey: getApiV1ManageHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.manage.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1ManageHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.manage.health.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ManageHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ManageHealthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1AclkQueryKey() {
  return ['api', '/api/v1/aclk'] as const
}

export function getApiV1AclkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AclkQueryKey>
  >({
    queryKey: getApiV1AclkQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.aclk.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Aclk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AclkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1AclkQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1VariableQueryKey(
  args: InferRequestType<typeof client.api.v1.variable.$get>,
) {
  return ['api', '/api/v1/variable', args] as const
}

export function getApiV1VariableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.variable.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VariableQueryKey>
  >({
    queryKey: getApiV1VariableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.variable.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.variable.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1VariableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VariableQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1RegistryQueryKey(
  args: InferRequestType<typeof client.api.v1.registry.$get>,
) {
  return ['api', '/api/v1/registry', args] as const
}

export function getApiV1RegistryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.registry.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RegistryQueryKey>
  >({
    queryKey: getApiV1RegistryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.registry.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Registry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.registry.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RegistryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RegistryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1DbengineStatsQueryKey() {
  return ['api', '/api/v1/dbengine_stats'] as const
}

export function getApiV1DbengineStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DbengineStatsQueryKey>
  >({
    queryKey: getApiV1DbengineStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.dbengine_stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1DbengineStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DbengineStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DbengineStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1MlInfoQueryKey() {
  return ['api', '/api/v1/ml_info'] as const
}

export function getApiV1MlInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MlInfoQueryKey>
  >({
    queryKey: getApiV1MlInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.ml_info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1MlInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MlInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1MlInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
