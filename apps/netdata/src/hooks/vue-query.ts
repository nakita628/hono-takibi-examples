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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV2NodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.nodes.$get>>,
) {
  return ['api', '/api/v2/nodes', toValue(args)] as const
}

export function getApiV2NodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2NodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.nodes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>
          >,
          ReturnType<typeof getApiV2NodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2NodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2NodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3NodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.nodes.$get>>,
) {
  return ['api', '/api/v3/nodes', toValue(args)] as const
}

export function getApiV3NodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3NodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.nodes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>
          >,
          ReturnType<typeof getApiV3NodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3NodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3NodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ContextsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.contexts.$get>>,
) {
  return ['api', '/api/v2/contexts', toValue(args)] as const
}

export function getApiV2ContextsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.contexts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ContextsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.contexts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.contexts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ContextsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ContextsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ContextsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.contexts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ContextsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.contexts.$get>>,
) {
  return ['api', '/api/v3/contexts', toValue(args)] as const
}

export function getApiV3ContextsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.contexts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ContextsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.contexts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.contexts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ContextsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ContextsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ContextsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.contexts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2QQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.q.$get>>,
) {
  return ['api', '/api/v2/q', toValue(args)] as const
}

export function getApiV2QQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.q.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2QQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.q.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.q.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>
          >,
          ReturnType<typeof getApiV2QQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.q.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2QQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2QQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.q.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3QQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.q.$get>>,
) {
  return ['api', '/api/v3/q', toValue(args)] as const
}

export function getApiV3QQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.q.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3QQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.q.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Q<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.q.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>
          >,
          ReturnType<typeof getApiV3QQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.q.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3QQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3QQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.q.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1InfoQueryKey() {
  return ['api', '/api/v1/info'] as const
}

export function getApiV1InfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1InfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>
          >,
          ReturnType<typeof getApiV1InfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1InfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1InfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartsQueryKey() {
  return ['api', '/api/v1/charts'] as const
}

export function getApiV1ChartsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ChartsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.charts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Charts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
          >,
          ReturnType<typeof getApiV1ChartsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.charts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ChartsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.charts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ChartQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.$get>>,
) {
  return ['api', '/api/v1/chart', toValue(args)] as const
}

export function getApiV1ChartQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ChartQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.chart.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Chart<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.chart.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>
          >,
          ReturnType<typeof getApiV1ChartQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.chart.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ChartQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ChartQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.chart.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ContextsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.contexts.$get>>,
) {
  return ['api', '/api/v1/contexts', toValue(args)] as const
}

export function getApiV1ContextsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.contexts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ContextsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.contexts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Contexts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.contexts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ContextsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.contexts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ContextsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ContextsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.contexts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ContextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.context.$get>>,
) {
  return ['api', '/api/v1/context', toValue(args)] as const
}

export function getApiV1ContextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.context.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.context.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.context.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
          >,
          ReturnType<typeof getApiV1ContextQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.context.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.context.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ContextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.context.$get>>,
) {
  return ['api', '/api/v3/context', toValue(args)] as const
}

export function getApiV3ContextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.context.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.context.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Context<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.context.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
          >,
          ReturnType<typeof getApiV3ContextQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.context.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.context.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.config.$get>>,
) {
  return ['api', '/api/v1/config', toValue(args)] as const
}

export function getApiV1ConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
          >,
          ReturnType<typeof getApiV1ConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.config.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.config.$post>,
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
  const mutationDefaults = getPostApiV1ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV2DataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.data.$get>>,
) {
  return ['api', '/api/v2/data', toValue(args)] as const
}

export function getApiV2DataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2DataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.data.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>
          >,
          ReturnType<typeof getApiV2DataQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2DataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2DataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3DataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.data.$get>>,
) {
  return ['api', '/api/v3/data', toValue(args)] as const
}

export function getApiV3DataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3DataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.data.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>
          >,
          ReturnType<typeof getApiV3DataQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3DataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3DataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.data.$get>>,
) {
  return ['api', '/api/v1/data', toValue(args)] as const
}

export function getApiV1DataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.data.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.data.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Data<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.data.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>
          >,
          ReturnType<typeof getApiV1DataQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.data.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1DataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AllmetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.allmetrics.$get>>,
) {
  return ['api', '/api/v1/allmetrics', toValue(args)] as const
}

export function getApiV1AllmetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.allmetrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AllmetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.allmetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.allmetrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AllmetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.allmetrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AllmetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AllmetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.allmetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BadgeSvgQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>>,
) {
  return ['api', '/api/v1/badge.svg', toValue(args)] as const
}

export function getApiV1BadgeSvgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BadgeSvgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['badge.svg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['badge.svg']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1BadgeSvgQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['badge.svg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BadgeSvgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BadgeSvgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['badge.svg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3BadgeSvgQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>>,
) {
  return ['api', '/api/v3/badge.svg', toValue(args)] as const
}

export function getApiV3BadgeSvgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3BadgeSvgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3['badge.svg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3BadgeSvg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v3)['badge.svg']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV3BadgeSvgQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v3)['badge.svg']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BadgeSvgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3BadgeSvgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3['badge.svg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AllmetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allmetrics.$get>>,
) {
  return ['api', '/api/v3/allmetrics', toValue(args)] as const
}

export function getApiV3AllmetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allmetrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AllmetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.allmetrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Allmetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.allmetrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AllmetricsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.allmetrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AllmetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AllmetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.allmetrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alerts.$get>>,
) {
  return ['api', '/api/v3/alerts', toValue(args)] as const
}

export function getApiV3AlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
          >,
          ReturnType<typeof getApiV3AlertsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AlertTransitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alert_transitions.$get>>,
) {
  return ['api', '/api/v3/alert_transitions', toValue(args)] as const
}

export function getApiV3AlertTransitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alert_transitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AlertTransitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.alert_transitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alert_transitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AlertTransitionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_transitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertTransitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AlertTransitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.alert_transitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AlertConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alert_config.$get>>,
) {
  return ['api', '/api/v3/alert_config', toValue(args)] as const
}

export function getApiV3AlertConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alert_config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AlertConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.alert_config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.alert_config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AlertConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.alert_config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AlertConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AlertConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.alert_config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3VariableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.variable.$get>>,
) {
  return ['api', '/api/v3/variable', toValue(args)] as const
}

export function getApiV3VariableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.variable.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3VariableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.variable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.variable.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>
            >
          >,
          ReturnType<typeof getApiV3VariableQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.variable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3VariableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3VariableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.variable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3InfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.info.$get>>,
) {
  return ['api', '/api/v3/info', toValue(args)] as const
}

export function getApiV3InfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3InfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>
          >,
          ReturnType<typeof getApiV3InfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3InfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3InfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3NodeInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.node_instances.$get>>,
) {
  return ['api', '/api/v3/node_instances', toValue(args)] as const
}

export function getApiV3NodeInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.node_instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3NodeInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.node_instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.node_instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
            >
          >,
          ReturnType<typeof getApiV3NodeInstancesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.node_instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3NodeInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3NodeInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.node_instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3StreamPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.stream_path.$get>>,
) {
  return ['api', '/api/v3/stream_path', toValue(args)] as const
}

export function getApiV3StreamPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.stream_path.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3StreamPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.stream_path.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3StreamPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.stream_path.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>
            >
          >,
          ReturnType<typeof getApiV3StreamPathQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_path.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3StreamPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3StreamPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.stream_path.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3VersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.versions.$get>>,
) {
  return ['api', '/api/v3/versions', toValue(args)] as const
}

export function getApiV3VersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.versions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3VersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.versions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>
            >
          >,
          ReturnType<typeof getApiV3VersionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3VersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3VersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ProgressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.progress.$get>>,
) {
  return ['api', '/api/v3/progress', toValue(args)] as const
}

export function getApiV3ProgressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.progress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.progress.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>
            >
          >,
          ReturnType<typeof getApiV3ProgressQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3FunctionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.function.$get>>,
) {
  return ['api', '/api/v3/function', toValue(args)] as const
}

export function getApiV3FunctionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.function.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3FunctionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.function.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.function.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>
            >
          >,
          ReturnType<typeof getApiV3FunctionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FunctionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3FunctionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.function.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV3Function<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.function.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.function.$post>,
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
  const mutationDefaults = getPostApiV3FunctionMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3FunctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.functions.$get>>,
) {
  return ['api', '/api/v3/functions', toValue(args)] as const
}

export function getApiV3FunctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.functions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3FunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.functions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.functions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>
            >
          >,
          ReturnType<typeof getApiV3FunctionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3FunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3FunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3ConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.config.$get>>,
) {
  return ['api', '/api/v3/config', toValue(args)] as const
}

export function getApiV3ConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Config<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
          >,
          ReturnType<typeof getApiV3ConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3ConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV3Config<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.config.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v3.config.$post>,
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
  const mutationDefaults = getPostApiV3ConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV3SettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.settings.$get>>,
) {
  return ['api', '/api/v3/settings', toValue(args)] as const
}

export function getApiV3SettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3SettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>
            >
          >,
          ReturnType<typeof getApiV3SettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3SettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3SettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV3Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.settings.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.settings.$put>,
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
  const mutationDefaults = getPutApiV3SettingsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3StreamInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.stream_info.$get>>,
) {
  return ['api', '/api/v3/stream_info', toValue(args)] as const
}

export function getApiV3StreamInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.stream_info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3StreamInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.stream_info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3StreamInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.stream_info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>
            >
          >,
          ReturnType<typeof getApiV3StreamInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.stream_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3StreamInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3StreamInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.stream_info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV3RtcOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.rtc_offer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v3.rtc_offer.$post>,
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
  const mutationDefaults = getPostApiV3RtcOfferMutationOptions<TError, TOnMutateResult>(
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

export function getApiV3ClaimQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.claim.$get>>,
) {
  return ['api', '/api/v3/claim', toValue(args)] as const
}

export function getApiV3ClaimQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.claim.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3ClaimQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.claim.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.claim.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>
          >,
          ReturnType<typeof getApiV3ClaimQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3ClaimQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3ClaimQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.claim.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3BearerProtectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.bearer_protection.$get>>,
) {
  return ['api', '/api/v3/bearer_protection', toValue(args)] as const
}

export function getApiV3BearerProtectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.bearer_protection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3BearerProtectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.bearer_protection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.bearer_protection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
            >
          >,
          ReturnType<typeof getApiV3BearerProtectionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_protection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BearerProtectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3BearerProtectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.bearer_protection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3BearerGetTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.bearer_get_token.$get>>,
) {
  return ['api', '/api/v3/bearer_get_token', toValue(args)] as const
}

export function getApiV3BearerGetTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.bearer_get_token.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3BearerGetTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.bearer_get_token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.bearer_get_token.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
            >
          >,
          ReturnType<typeof getApiV3BearerGetTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.bearer_get_token.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3BearerGetTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3BearerGetTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.bearer_get_token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3MeQueryKey() {
  return ['api', '/api/v3/me'] as const
}

export function getApiV3MeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV3MeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>
          >,
          ReturnType<typeof getApiV3MeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV3MeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV3MeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2WeightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.weights.$get>>,
) {
  return ['api', '/api/v2/weights', toValue(args)] as const
}

export function getApiV2WeightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.weights.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2WeightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.weights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.weights.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
          >,
          ReturnType<typeof getApiV2WeightsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2WeightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2WeightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.weights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alerts.$get>>,
) {
  return ['api', '/api/v2/alerts', toValue(args)] as const
}

export function getApiV2AlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Alerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
          >,
          ReturnType<typeof getApiV2AlertsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AlertTransitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alert_transitions.$get>>,
) {
  return ['api', '/api/v2/alert_transitions', toValue(args)] as const
}

export function getApiV2AlertTransitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alert_transitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AlertTransitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.alert_transitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AlertTransitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alert_transitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AlertTransitionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_transitions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertTransitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AlertTransitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.alert_transitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2AlertConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alert_config.$get>>,
) {
  return ['api', '/api/v2/alert_config', toValue(args)] as const
}

export function getApiV2AlertConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alert_config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2AlertConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.alert_config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2AlertConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.alert_config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>
            >
          >,
          ReturnType<typeof getApiV2AlertConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.alert_config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2AlertConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2AlertConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.alert_config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2InfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.info.$get>>,
) {
  return ['api', '/api/v2/info', toValue(args)] as const
}

export function getApiV2InfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2InfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Info<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>
          >,
          ReturnType<typeof getApiV2InfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2InfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2InfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2NodeInstancesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.node_instances.$get>>,
) {
  return ['api', '/api/v2/node_instances', toValue(args)] as const
}

export function getApiV2NodeInstancesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.node_instances.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2NodeInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.node_instances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2NodeInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.node_instances.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
            >
          >,
          ReturnType<typeof getApiV2NodeInstancesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.node_instances.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2NodeInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2NodeInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.node_instances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2VersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.versions.$get>>,
) {
  return ['api', '/api/v2/versions', toValue(args)] as const
}

export function getApiV2VersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.versions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2VersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Versions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.versions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>
            >
          >,
          ReturnType<typeof getApiV2VersionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2VersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2VersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2ProgressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.progress.$get>>,
) {
  return ['api', '/api/v2/progress', toValue(args)] as const
}

export function getApiV2ProgressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.progress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Progress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.progress.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>
            >
          >,
          ReturnType<typeof getApiV2ProgressQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.progress.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2ProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2FunctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.functions.$get>>,
) {
  return ['api', '/api/v2/functions', toValue(args)] as const
}

export function getApiV2FunctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.functions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2FunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.functions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.functions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>
            >
          >,
          ReturnType<typeof getApiV2FunctionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2FunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2FunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV2RtcOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.rtc_offer.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v2.rtc_offer.$post>,
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
  const mutationDefaults = getPostApiV2RtcOfferMutationOptions<TError, TOnMutateResult>(
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

export function getApiV2ClaimQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.claim.$get>>,
) {
  return ['api', '/api/v2/claim', toValue(args)] as const
}

export function getApiV2ClaimQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.claim.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2ClaimQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.claim.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV2Claim<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.claim.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>
          >,
          ReturnType<typeof getApiV2ClaimQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.claim.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV2ClaimQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2ClaimQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.claim.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BearerProtectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.bearer_protection.$get>>,
) {
  return ['api', '/api/v2/bearer_protection', toValue(args)] as const
}

export function getApiV2BearerProtectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.bearer_protection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BearerProtectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.bearer_protection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BearerProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.bearer_protection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
            >
          >,
          ReturnType<typeof getApiV2BearerProtectionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_protection.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BearerProtectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BearerProtectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.bearer_protection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2BearerGetTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.bearer_get_token.$get>>,
) {
  return ['api', '/api/v2/bearer_get_token', toValue(args)] as const
}

export function getApiV2BearerGetTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.bearer_get_token.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2BearerGetTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.bearer_get_token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2BearerGetToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.bearer_get_token.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
            >
          >,
          ReturnType<typeof getApiV2BearerGetTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.bearer_get_token.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2BearerGetTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2BearerGetTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.bearer_get_token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3WeightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.weights.$get>>,
) {
  return ['api', '/api/v3/weights', toValue(args)] as const
}

export function getApiV3WeightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.weights.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3WeightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.weights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.weights.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
          >,
          ReturnType<typeof getApiV3WeightsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3WeightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3WeightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.weights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1WeightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.weights.$get>>,
) {
  return ['api', '/api/v1/weights', toValue(args)] as const
}

export function getApiV1WeightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.weights.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WeightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.weights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Weights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.weights.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
          >,
          ReturnType<typeof getApiV1WeightsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.weights.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WeightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WeightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.weights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MetricCorrelationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.metric_correlations.$get>>,
) {
  return ['api', '/api/v1/metric_correlations', toValue(args)] as const
}

export function getApiV1MetricCorrelationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.metric_correlations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MetricCorrelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.metric_correlations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MetricCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.metric_correlations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1MetricCorrelationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.metric_correlations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MetricCorrelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MetricCorrelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.metric_correlations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FunctionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.function.$get>>,
) {
  return ['api', '/api/v1/function', toValue(args)] as const
}

export function getApiV1FunctionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.function.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FunctionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.function.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Function<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.function.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FunctionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.function.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FunctionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FunctionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.function.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FunctionsQueryKey() {
  return ['api', '/api/v1/functions'] as const
}

export function getApiV1FunctionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1FunctionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.functions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Functions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FunctionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1FunctionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.functions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AlarmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarms.$get>>,
) {
  return ['api', '/api/v1/alarms', toValue(args)] as const
}

export function getApiV1AlarmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlarmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.alarms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Alarms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
          >,
          ReturnType<typeof getApiV1AlarmsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlarmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.alarms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AlarmsValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarms_values.$get>>,
) {
  return ['api', '/api/v1/alarms_values', toValue(args)] as const
}

export function getApiV1AlarmsValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarms_values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlarmsValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.alarms_values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AlarmsValues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarms_values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AlarmsValuesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarms_values.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmsValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlarmsValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.alarms_values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AlarmLogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_log.$get>>,
) {
  return ['api', '/api/v1/alarm_log', toValue(args)] as const
}

export function getApiV1AlarmLogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_log.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlarmLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.alarm_log.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AlarmLog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_log.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AlarmLogQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_log.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlarmLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.alarm_log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AlarmCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_count.$get>>,
) {
  return ['api', '/api/v1/alarm_count', toValue(args)] as const
}

export function getApiV1AlarmCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_count.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlarmCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.alarm_count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AlarmCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_count.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AlarmCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlarmCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.alarm_count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AlarmVariablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_variables.$get>>,
) {
  return ['api', '/api/v1/alarm_variables', toValue(args)] as const
}

export function getApiV1AlarmVariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_variables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AlarmVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.alarm_variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AlarmVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.alarm_variables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AlarmVariablesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.alarm_variables.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AlarmVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AlarmVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.alarm_variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ManageHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.manage.health.$get>>,
) {
  return ['api', '/api/v1/manage/health', toValue(args)] as const
}

export function getApiV1ManageHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.manage.health.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ManageHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.manage.health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ManageHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.manage.health.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ManageHealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.manage.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ManageHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ManageHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.manage.health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AclkQueryKey() {
  return ['api', '/api/v1/aclk'] as const
}

export function getApiV1AclkQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AclkQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.aclk.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Aclk<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>
          >,
          ReturnType<typeof getApiV1AclkQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.aclk.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1AclkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AclkQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.aclk.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1VariableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.variable.$get>>,
) {
  return ['api', '/api/v1/variable', toValue(args)] as const
}

export function getApiV1VariableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.variable.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1VariableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.variable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Variable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.variable.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>
            >
          >,
          ReturnType<typeof getApiV1VariableQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.variable.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VariableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1VariableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.variable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RegistryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.registry.$get>>,
) {
  return ['api', '/api/v1/registry', toValue(args)] as const
}

export function getApiV1RegistryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.registry.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RegistryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.registry.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Registry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.registry.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>
            >
          >,
          ReturnType<typeof getApiV1RegistryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.registry.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RegistryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RegistryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.registry.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DbengineStatsQueryKey() {
  return ['api', '/api/v1/dbengine_stats'] as const
}

export function getApiV1DbengineStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DbengineStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.dbengine_stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DbengineStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DbengineStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.dbengine_stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DbengineStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DbengineStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.dbengine_stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MlInfoQueryKey() {
  return ['api', '/api/v1/ml_info'] as const
}

export function getApiV1MlInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1MlInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.ml_info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1MlInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
          >,
          ReturnType<typeof getApiV1MlInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.ml_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MlInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1MlInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.ml_info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
